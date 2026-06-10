import { NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

const schema = z.object({
  name:    z.string().min(2),
  email:   z.string().email(),
  phone:   z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10),
})

export async function POST(req: Request) {
  const body = await req.json()
  const parsed = schema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: 'Geçersiz form verisi' }, { status: 400 })
  }

  const { name, email, phone, service, message } = parsed.data

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
    from: `"Wooji Digital Form" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO ?? 'info@woojidigital.com',
    replyTo: email,
    subject: `Yeni İletişim: ${name}`,
    html: `
      <h2>Yeni İletişim Formu Mesajı</h2>
      <p><b>Ad Soyad:</b> ${name}</p>
      <p><b>E-posta:</b> ${email}</p>
      ${phone ? `<p><b>Telefon:</b> ${phone}</p>` : ''}
      ${service ? `<p><b>Hizmet:</b> ${service}</p>` : ''}
      <p><b>Mesaj:</b></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  })

  return NextResponse.json({ success: true })
}
