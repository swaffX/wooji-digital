'use client'
import { useState } from 'react'
import type { FormEvent } from 'react'
import styles from './Contact.module.css'

interface FormState {
  name: string; phone: string; email: string; service: string; message: string
}

const serviceOptions = ['SEO & Organik Büyüme','Dijital Reklam Yönetimi','Web Tasarım & Geliştirme','Sosyal Medya Yönetimi','İçerik Pazarlaması','Analitik & Strateji','Tüm Hizmetler / Paket']

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name:'', phone:'', email:'', service:'', message:'' })
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name:'', phone:'', email:'', service:'', message:'' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="iletisim" className={styles.section} aria-labelledby="iletisim-h">
      <div className="wrap">
        <div className="centered" style={{ marginBottom: '4rem' }}>
          <div className="s-tag reveal">İletişim</div>
          <h2 className="s-title reveal d1" id="iletisim-h">
            Birlikte <span className="gt">Büyüyelim</span>
          </h2>
          <p className="s-sub reveal d2">
            Projenizi konuşmak için hazırız. Ücretsiz danışmanlık randevunuzu alın.
          </p>
        </div>

        <div className={styles.grid}>
          <div className="reveal">
            <div className={styles.info}>
              <h2>İletişime Geçin</h2>
              <p>Sorularınız, projeleriniz ve iş birliği teklifleriniz için bize ulaşın. En kısa sürede dönüş yapıyoruz.</p>
            </div>

            <div className={styles.contactList}>
              <a href="tel:+905XXXXXXXXX" className={styles.contactItem} aria-label="Bizi ara">
                <div className={styles.cIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.93 3.37 2 2 0 0 1 3.92 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.cLabel}>Telefon</div>
                  <div className={styles.cVal}>+90 (XXX) XXX XX XX</div>
                </div>
              </a>

              <a href="mailto:info@woojidiital.com" className={styles.contactItem} aria-label="E-posta gönder">
                <div className={styles.cIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.cLabel}>E-posta</div>
                  <div className={styles.cVal}>info@woojidiital.com</div>
                </div>
              </a>

              <div className={styles.contactItem}>
                <div className={styles.cIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.cLabel}>Adres</div>
                  <div className={styles.cVal}>İstanbul, Türkiye</div>
                </div>
              </div>
            </div>

            <div className={styles.socials} aria-label="Sosyal medya hesaplarımız">
              <a href="https://instagram.com/woojidiital" className={styles.socLink} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://tiktok.com/@woojidiital" className={styles.socLink} aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.02-.07z"/>
                </svg>
              </a>
            </div>

            <div className={styles.mapWrap}>
              <iframe
                src="https://maps.google.com/maps?q=%C4%B0stanbul,T%C3%BCrkiye&output=embed&z=11&hl=tr"
                className={styles.mapFrame}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wooji Digital Konum"
                aria-label="İstanbul haritası"
              />
            </div>
          </div>

          <div className="reveal d2">
            <form className={styles.form} onSubmit={submit} noValidate aria-label="İletişim formu">
              <div className={styles.fRow}>
                <div className={styles.fGroup}>
                  <label htmlFor="cn">Ad Soyad *</label>
                  <input type="text" id="cn" name="name" placeholder="Adınız Soyadınız" required autoComplete="name" value={form.name} onChange={set('name')} />
                </div>
                <div className={styles.fGroup}>
                  <label htmlFor="cp">Telefon</label>
                  <input type="tel" id="cp" name="phone" placeholder="+90 (5XX) XXX XX XX" autoComplete="tel" value={form.phone} onChange={set('phone')} />
                </div>
              </div>
              <div className={styles.fGroup}>
                <label htmlFor="ce">E-posta *</label>
                <input type="email" id="ce" name="email" placeholder="ornek@email.com" required autoComplete="email" value={form.email} onChange={set('email')} />
              </div>
              <div className={styles.fGroup}>
                <label htmlFor="cs">İlgilendiğiniz Hizmet</label>
                <select id="cs" name="service" value={form.service} onChange={set('service')}>
                  <option value="">Seçiniz...</option>
                  {serviceOptions.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div className={styles.fGroup}>
                <label htmlFor="cm">Mesajınız *</label>
                <textarea id="cm" name="message" placeholder="Projeniz hakkında kısaca bilgi verin..." required value={form.message} onChange={set('message')} />
              </div>

              <button
                type="submit"
                className={`btn btn-fill ${styles.submitBtn} ${status === 'success' ? styles.success : status === 'error' ? styles.error : ''}`}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  'Gönderiliyor...'
                ) : status === 'success' ? (
                  'Mesajınız İletildi!'
                ) : status === 'error' ? (
                  'Hata oluştu, tekrar deneyin'
                ) : (
                  <>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    Mesaj Gönder
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
