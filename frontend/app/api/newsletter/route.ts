import { NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

const schema = z.object({
  email: z.string().email(),
})

export async function POST(req: Request) {
  const body = await req.json()
  const parsed = schema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: 'Geçersiz e-posta' }, { status: 400 })
  }

  const { email } = parsed.data

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('SMTP env vars missing')
    return NextResponse.json({ error: 'Mail yapılandırması eksik' }, { status: 500 })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  })

  await transporter.sendMail({
    from: `"Wooji Digital" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO ?? 'info@woojidiital.com',
    subject: 'Yeni Bülten Abonesi',
    html: `<p>Yeni bülten abonesi: <b>${email}</b></p>`,
  })

  return NextResponse.json({ success: true })
}
