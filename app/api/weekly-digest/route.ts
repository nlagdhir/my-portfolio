import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { put, list } from '@vercel/blob'

const CSV_PATHNAME = 'inquiries/submissions.csv'
const CSV_HEADERS  = 'Submitted At,Name,Email,Company,Project Type,Budget,Message\n'
const DIGEST_EMAIL = 'nlagdhir@gmail.com'

export async function GET(req: NextRequest) {
  // ── Auth: only Vercel Cron (or manual call with secret) ──────────────────
  const authHeader = req.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json({ error: 'BLOB_READ_WRITE_TOKEN not configured' }, { status: 500 })
  }

  try {
    // ── Read current CSV from Blob ────────────────────────────────────────
    const { blobs } = await list({ prefix: 'inquiries/', token: process.env.BLOB_READ_WRITE_TOKEN })
    const found = blobs.find((b: { pathname: string; url: string }) => b.pathname === CSV_PATHNAME)

    if (!found) {
      return NextResponse.json({ message: 'No submissions CSV found — nothing to send.' })
    }

    const res     = await fetch(found.url)
    const csvText = await res.text()
    const rows    = csvText.trim().split('\n')
    const count   = rows.length - 1   // subtract header row

    if (count <= 0) {
      return NextResponse.json({ message: 'No new submissions this week.' })
    }

    // ── Send email with CSV attachment ────────────────────────────────────
    const port = Number.parseInt(process.env.SMTP_PORT || '587', 10)
    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth:   { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      tls:    { rejectUnauthorized: true },
    })

    const week = new Date().toISOString().slice(0, 10)

    await transporter.sendMail({
      from:    `"nlagdhir.in" <${process.env.SMTP_USER}>`,
      to:      DIGEST_EMAIL,
      subject: `📋 Weekly Inquiry Report — ${count} submission${count > 1 ? 's' : ''} (w/e ${week})`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto">
          <div style="background:linear-gradient(135deg,#2563eb,#7c3aed);padding:22px 24px;border-radius:12px 12px 0 0">
            <h2 style="color:#fff;margin:0;font-size:18px">📋 Weekly Inquiry Report</h2>
            <p style="color:rgba(255,255,255,.8);margin:4px 0 0;font-size:13px">nlagdhir.in · week ending ${week}</p>
          </div>
          <div style="background:#f8fafc;padding:24px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px">
            <p style="color:#1e293b;margin:0 0 16px">
              Hi Nilesh, you received <strong>${count} new enquir${count > 1 ? 'ies' : 'y'}</strong> this week via your portfolio contact form.
            </p>
            <p style="color:#475569;margin:0 0 16px">The full details are in the attached CSV file.</p>
            <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0"/>
            <p style="color:#94a3b8;font-size:12px;margin:0">
              This is an automated weekly digest from
              <a href="https://nlagdhir.in" style="color:#2563eb;text-decoration:none">nlagdhir.in</a>
            </p>
          </div>
        </div>`,
      attachments: [
        {
          filename:    `inquiries-${week}.csv`,
          content:     csvText,
          contentType: 'text/csv',
        },
      ],
    })

    // ── Reset CSV to headers only (fresh slate for next week) ─────────────
    await put(CSV_PATHNAME, CSV_HEADERS, {
      access:          'public',
      token:           process.env.BLOB_READ_WRITE_TOKEN,
      addRandomSuffix: false,
    })

    return NextResponse.json({ success: true, submissionsSent: count })
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error)
    console.error('Weekly digest error:', msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
