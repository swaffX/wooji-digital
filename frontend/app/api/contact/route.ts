import { NextResponse } from 'next/server'
import { z } from 'zod'
import { rateLimit, getClientIp } from '@/lib/rateLimit'

const schema = z.object({
  name:    z.string().min(2),
  email:   z.string().email(),
  phone:   z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10),
})

export async function POST(req: Request) {
  const ip = getClientIp(req)
  if (!rateLimit(ip, 5, 60_000)) {
    return NextResponse.json({ error: 'Çok fazla istek. Lütfen bir dakika bekleyin.' }, { status: 429 })
  }

  const body = await req.json()
  const parsed = schema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: 'Geçersiz form verisi' }, { status: 400 })
  }

  const { name, email, phone, service, message } = parsed.data

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY missing')
    return NextResponse.json({ error: 'Mail yapılandırması eksik' }, { status: 500 })
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Wooji Digital <info@woojidigital.com>',
      to: [process.env.CONTACT_TO ?? 'info@woojidigital.com'],
      reply_to: email,
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
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Mail gönderilemedi' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
