import { NextResponse } from 'next/server'
import { z } from 'zod'
import { rateLimit, getClientIp } from '@/lib/rateLimit'

function esc(s: string): string {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;')
}

const schema = z.object({
  email: z.string().email().max(254),
})

export async function POST(req: Request) {
  const ip = getClientIp(req)
  if (!rateLimit(ip, 3, 60_000)) {
    return NextResponse.json({ error: 'Çok fazla istek.' }, { status: 429 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Geçersiz istek' }, { status: 400 })
  }

  const parsed = schema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: 'Geçersiz e-posta' }, { status: 400 })
  }

  const { email } = parsed.data

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
      subject: 'Yeni Bülten Abonesi',
      html: `<p>Yeni bülten abonesi: <b>${esc(email)}</b></p>`,
    }),
  })

  if (!res.ok) {
    console.error('Resend newsletter error:', await res.text())
    return NextResponse.json({ error: 'Mail gönderilemedi' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
