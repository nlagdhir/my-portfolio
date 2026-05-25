import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { put, list } from '@vercel/blob'

// ── CSV storage helpers ───────────────────────────────────────────────────────
const CSV_PATHNAME = 'inquiries/submissions.csv'
const CSV_HEADERS  = 'Submitted At,Name,Email,Company,Project Type,Budget,Message\n'

function csvCell(value: string | undefined): string {
  return `"${String(value ?? '').replace(/"/g, '""')}"`
}

async function appendToCSV(row: {
  name: string; email: string; company?: string
  projectType?: string; budget?: string; message: string
}) {
  // Skip silently if Blob is not configured (env var missing)
  if (!process.env.BLOB_READ_WRITE_TOKEN) return

  let existing = CSV_HEADERS
  try {
    const { blobs } = await list({ prefix: 'inquiries/', token: process.env.BLOB_READ_WRITE_TOKEN })
    const found = blobs.find((b: { pathname: string; url: string }) => b.pathname === CSV_PATHNAME)
    if (found) {
      const res = await fetch(found.url)
      if (res.ok) existing = await res.text()
    }
  } catch { /* blob not yet created */ }

  const line = [
    new Date().toISOString(),
    row.name, row.email, row.company || '',
    row.projectType || '', row.budget || '', row.message,
  ].map(csvCell).join(',') + '\n'

  await put(CSV_PATHNAME, existing + line, {
    access: 'public',
    token: process.env.BLOB_READ_WRITE_TOKEN,
    addRandomSuffix: false,
  })
}

// ── Route handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, projectType, budget, message, captchaToken } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // ── 1. CAPTCHA verification (Cloudflare Turnstile) ────────────────────────
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY
    if (turnstileSecret) {
      const verifyRes = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            secret:   turnstileSecret,
            response: captchaToken ?? '',
          }),
        }
      )
      const { success } = (await verifyRes.json()) as { success: boolean }
      if (!success) {
        return NextResponse.json({ error: 'CAPTCHA verification failed. Please try again.' }, { status: 400 })
      }
    }

    // ── 2. Build transporter ──────────────────────────────────────────────────
    const port = Number.parseInt(process.env.SMTP_PORT || '587', 10)
    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST || 'smtp.gmail.com',
      port,
      secure: port === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      tls:  { rejectUnauthorized: process.env.NODE_ENV === 'production' },
    })

    const subject = company
      ? `New enquiry from ${name} (${company})`
      : `New enquiry from ${name}`

    const td1 = 'style="padding:8px 0;color:#64748b;font-size:13px;width:140px"'
    const td2 = 'style="padding:8px 0;font-weight:600;color:#0f172a"'

    // ── 3. Notification email → nilesh@nlagdhir.in ────────────────────────────
    const notifHtml = `
      <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto">
        <div style="background:linear-gradient(135deg,#2563eb,#7c3aed);padding:24px;border-radius:12px 12px 0 0">
          <h1 style="color:#fff;margin:0;font-size:20px">New Project Enquiry</h1>
          <p style="color:rgba(255,255,255,.8);margin:4px 0 0;font-size:14px">From nlagdhir.in contact form</p>
        </div>
        <div style="background:#f8fafc;padding:24px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px">
          <table style="width:100%;border-collapse:collapse">
            <tr><td ${td1}>Name</td><td ${td2}>${name}</td></tr>
            <tr><td ${td1}>Email</td><td ${td2}><a href="mailto:${email}" style="color:#2563eb">${email}</a></td></tr>
            ${company     ? `<tr><td ${td1}>Company</td><td ${td2}>${company}</td></tr>` : ''}
            ${projectType ? `<tr><td ${td1}>Project</td><td ${td2}>${projectType}</td></tr>` : ''}
            ${budget      ? `<tr><td ${td1}>Budget</td><td ${td2}>${budget}</td></tr>` : ''}
          </table>
          <div style="margin-top:16px;padding:16px;background:#fff;border-radius:8px;border:1px solid #e2e8f0">
            <p style="color:#64748b;font-size:12px;margin:0 0 8px;text-transform:uppercase;letter-spacing:.05em">Message</p>
            <p style="color:#0f172a;white-space:pre-wrap;margin:0;line-height:1.6">${message}</p>
          </div>
          <div style="margin-top:20px;text-align:center">
            <a href="mailto:${email}" style="display:inline-block;padding:12px 24px;background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px">
              Reply to ${name}
            </a>
          </div>
        </div>
      </div>`

    // ── 4. Thank-you email → submitter ────────────────────────────────────────
    const thankyouHtml = `
      <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto">
        <div style="background:linear-gradient(135deg,#2563eb,#7c3aed);padding:28px 24px;border-radius:12px 12px 0 0;text-align:center">
          <h1 style="color:#fff;margin:0 0 6px;font-size:22px">Thanks, ${name}! 🙌</h1>
          <p style="color:rgba(255,255,255,.85);margin:0;font-size:14px">Your message has been received.</p>
        </div>
        <div style="background:#f8fafc;padding:28px 24px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px">
          <p style="color:#475569;margin:0 0 20px;line-height:1.7">
            Hi ${name},<br/><br/>
            Thank you for reaching out via <strong>nlagdhir.in</strong>.
            I've received your enquiry and will get back to you within <strong>24 hours</strong>.
          </p>
          ${(projectType || budget) ? `
          <div style="background:#fff;border-radius:10px;border:1px solid #e2e8f0;padding:16px;margin:0 0 20px">
            <p style="margin:0 0 8px;font-size:12px;color:#94a3b8;text-transform:uppercase;letter-spacing:.05em">Your enquiry summary</p>
            ${projectType ? `<p style="margin:4px 0;font-size:13px;color:#475569"><strong>Project type:</strong> ${projectType}</p>` : ''}
            ${budget      ? `<p style="margin:4px 0;font-size:13px;color:#475569"><strong>Budget range:</strong> ${budget}</p>` : ''}
          </div>` : ''}
          <p style="color:#475569;margin:0 0 20px;line-height:1.7">
            Need a faster response? Message me directly on WhatsApp or book a free 30-min call.
          </p>
          <div>
            <a href="https://wa.me/919510110198" style="display:inline-block;padding:10px 20px;background:#22c55e;color:#fff;text-decoration:none;border-radius:8px;font-weight:600;font-size:13px;margin-right:10px">
              💬 WhatsApp
            </a>
            <a href="https://calendly.com/nilesh-nlagdhir" style="display:inline-block;padding:10px 20px;background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;text-decoration:none;border-radius:8px;font-weight:600;font-size:13px">
              📅 Book a Call
            </a>
          </div>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0"/>
          <p style="color:#94a3b8;font-size:12px;margin:0">
            Nilesh Lagdhir — <a href="https://nlagdhir.in" style="color:#2563eb;text-decoration:none">nlagdhir.in</a>
          </p>
        </div>
      </div>`

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail({
        from:    `"nlagdhir.in" <${process.env.SMTP_USER}>`,
        to:      process.env.CONTACT_EMAIL || process.env.SMTP_USER,
        replyTo: email,
        subject,
        html:    notifHtml,
      }),
      transporter.sendMail({
        from:    `"Nilesh Lagdhir" <${process.env.SMTP_USER}>`,
        to:      email,
        subject: `Got your message, ${name}! I'll reply within 24 hours. — Nilesh`,
        html:    thankyouHtml,
      }),
    ])

    // ── 5. Append to CSV (non-blocking — never fails the response) ────────────
    appendToCSV({ name, email, company, projectType, budget, message }).catch(() => {})

    return NextResponse.json({ success: true })
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error)
    console.error('Contact form error:', msg)
    return NextResponse.json({ error: 'Failed to send message', detail: msg }, { status: 500 })
  }
}
