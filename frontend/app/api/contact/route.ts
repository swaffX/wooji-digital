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
      html: `<!DOCTYPE html>
<html lang="tr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

        <!-- Header -->
        <tr><td style="background:#0c0f18;border-radius:16px 16px 0 0;padding:32px 40px;text-align:center;">
          <div style="font-size:22px;font-weight:800;letter-spacing:-0.04em;color:#ffffff;">WOOJI <span style="color:#7c3aed;">DIGITAL</span></div>
          <div style="font-size:12px;color:#64748b;margin-top:6px;letter-spacing:0.08em;text-transform:uppercase;">Yeni İletişim Formu Mesajı</div>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#ffffff;padding:36px 40px;">

          <!-- Alert badge -->
          <div style="background:#f0ebff;border:1px solid #ddd6fe;border-radius:8px;padding:12px 16px;margin-bottom:28px;display:flex;align-items:center;">
            <span style="color:#7c3aed;font-size:13px;font-weight:600;">&#9679; Yeni bir müşteri adayı formu doldurdu</span>
          </div>

          <!-- Fields -->
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding-bottom:16px;border-bottom:1px solid #f1f5f9;">
                <div style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#94a3b8;margin-bottom:4px;">Ad Soyad</div>
                <div style="font-size:15px;font-weight:600;color:#0f172a;">${name}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 0;border-bottom:1px solid #f1f5f9;">
                <div style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#94a3b8;margin-bottom:4px;">E-posta</div>
                <div style="font-size:15px;color:#2563eb;">${email}</div>
              </td>
            </tr>
            ${phone ? `<tr>
              <td style="padding:16px 0;border-bottom:1px solid #f1f5f9;">
                <div style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#94a3b8;margin-bottom:4px;">Telefon</div>
                <div style="font-size:15px;font-weight:600;color:#0f172a;">${phone}</div>
              </td>
            </tr>` : ''}
            ${service ? `<tr>
              <td style="padding:16px 0;border-bottom:1px solid #f1f5f9;">
                <div style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#94a3b8;margin-bottom:4px;">İlgilendiği Hizmet</div>
                <div style="font-size:15px;font-weight:600;color:#7c3aed;">${service}</div>
              </td>
            </tr>` : ''}
            <tr>
              <td style="padding-top:16px;">
                <div style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#94a3b8;margin-bottom:8px;">Mesaj</div>
                <div style="font-size:14px;line-height:1.75;color:#334155;background:#f8fafc;border-radius:8px;padding:16px;">${message.replace(/\n/g, '<br>')}</div>
              </td>
            </tr>
          </table>

          <!-- CTA -->
          <div style="margin-top:28px;text-align:center;">
            <a href="mailto:${email}" style="display:inline-block;background:#7c3aed;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:12px 28px;border-radius:8px;">Müşteriyi Yanıtla</a>
          </div>

        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#f8fafc;border-radius:0 0 16px 16px;padding:20px 40px;text-align:center;border-top:1px solid #e2e8f0;">
          <div style="font-size:12px;color:#94a3b8;">Bu mail woojidigital.com iletişim formu aracılığıyla gönderildi.</div>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Mail gönderilemedi' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
