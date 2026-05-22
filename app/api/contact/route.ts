import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, projectType, budget, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const port = Number.parseInt(process.env.SMTP_PORT || '587', 10)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: process.env.NODE_ENV === 'production',
      },
    })

    const subject = company
      ? `New project enquiry from ${name} (${company})`
      : `New project enquiry from ${name}`

    const tdLabel = 'style="padding: 8px 0; color: #64748b; font-size: 13px; width: 140px;"'
    const tdValue = 'style="padding: 8px 0; font-weight: 600; color: #0f172a;"'
    const companyRow = company
      ? `<tr><td ${tdLabel}>Company</td><td ${tdValue}>${company}</td></tr>`
      : ''
    const projectTypeRow = projectType
      ? `<tr><td ${tdLabel}>Project Type</td><td ${tdValue}>${projectType}</td></tr>`
      : ''
    const budgetRow = budget
      ? `<tr><td ${tdLabel}>Budget</td><td ${tdValue}>${budget}</td></tr>`
      : ''

    const html = `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #2563eb, #7c3aed); padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px;">New Project Enquiry</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 14px;">From nlagdhir.in contact form</p>
        </div>
        <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td ${tdLabel}>Name</td><td ${tdValue}>${name}</td></tr>
            <tr><td ${tdLabel}>Email</td><td ${tdValue}><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td></tr>
            ${companyRow}
            ${projectTypeRow}
            ${budgetRow}
          </table>
          <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 12px; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
            <p style="color: #0f172a; white-space: pre-wrap; margin: 0; line-height: 1.6;">${message}</p>
          </div>
          <div style="margin-top: 20px; text-align: center;">
            <a href="mailto:${email}" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #2563eb, #7c3aed); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">
              Reply to ${name}
            </a>
          </div>
        </div>
      </div>
    `

    await transporter.sendMail({
      from: `"nlagdhir.in" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.error('Contact form error:', message)
    return NextResponse.json({ error: 'Failed to send message', detail: message }, { status: 500 })
  }
}
