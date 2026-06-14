'use client'
import { useState, useRef, useCallback } from 'react'
import type { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import styles from './Contact.module.css'

interface FormState {
  name: string; phone: string; email: string; service: string; message: string
}

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '')
  let local = digits
  if (local.startsWith('90')) local = local.slice(2)
  if (local.startsWith('0')) local = local.slice(1)
  local = local.slice(0, 10)
  if (local.length === 0) return ''
  if (local.length <= 3) return `+90 (${local}`
  if (local.length <= 6) return `+90 (${local.slice(0, 3)}) ${local.slice(3)}`
  if (local.length <= 8) return `+90 (${local.slice(0, 3)}) ${local.slice(3, 6)} ${local.slice(6)}`
  return `+90 (${local.slice(0, 3)}) ${local.slice(3, 6)} ${local.slice(6, 8)} ${local.slice(8)}`
}

function validate(form: FormState): string | null {
  if (form.name.trim().length < 2) return 'Ad Soyad en az 2 karakter olmalı.'
  if (!form.email.includes('@') || !form.email.includes('.')) return 'Geçerli bir e-posta adresi girin.'
  if (form.message.trim().length < 10) return 'Mesajınız en az 10 karakter olmalı.'
  return null
}

const serviceOptions = [
  'SEO & Organik Büyüme',
  'Dijital Reklam Yönetimi',
  'Web Tasarım & Geliştirme',
  'Sosyal Medya Yönetimi',
  'İçerik Pazarlaması',
  'Analitik & Strateji',
  'Tüm Hizmetler / Paket',
]

const contactItems = [
  {
    label: 'Telefon',
    value: '+90 (XXX) XXX XX XX',
    href: 'tel:+90XXXXXXXXXXX',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.93 3.37 2 2 0 0 1 3.92 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    label: 'E-posta',
    value: 'info@woojidigital.com',
    href: 'mailto:info@woojidigital.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'Konum',
    value: 'İstanbul, Türkiye',
    href: null,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const router = useRouter()
  const [form, setForm] = useState<FormState>({ name: '', phone: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [validationError, setValidationError] = useState<string | null>(null)
  const [phoneSuffix, setPhoneSuffix] = useState('')
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.12 })

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotX = useSpring(mx, { stiffness: 200, damping: 30 })
  const rotY = useSpring(my, { stiffness: 200, damping: 30 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(((e.clientY - r.top) / r.height - 0.5) * -7)
    my.set(((e.clientX - r.left) / r.width - 0.5) * 9)
  }, [mx, my])

  const resetTilt = useCallback(() => { mx.set(0); my.set(0) }, [mx, my])

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValidationError(null)
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
    }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValidationError(null)
    const raw = e.target.value.replace(/\D/g, '').slice(0, 10)
    let suffix = raw
    if (raw.length > 8) suffix = `${raw.slice(0,3)}) ${raw.slice(3,6)} ${raw.slice(6,8)} ${raw.slice(8)}`
    else if (raw.length > 6) suffix = `${raw.slice(0,3)}) ${raw.slice(3,6)} ${raw.slice(6)}`
    else if (raw.length > 3) suffix = `${raw.slice(0,3)}) ${raw.slice(3)}`
    setPhoneSuffix(suffix)
    setForm((prev) => ({ ...prev, phone: raw ? `+90 (${suffix}` : '' }))
  }

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    const err = validate(form)
    if (err) { setValidationError(err); return }
    setValidationError(null)
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', phone: '', email: '', service: '', message: '' })
      router.push('/tesekkurler')
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="iletisim" ref={sectionRef} className={styles.section} aria-labelledby="iletisim-h">
      <div className={styles.bgMesh} aria-hidden="true" />

      <div className="wrap">

        {/* ── Section header ── */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="s-tag">İletişim</div>
          <h2 className="s-title" id="iletisim-h">
            Birlikte <span className="gt">Büyüyelim</span>
          </h2>
          <p className="s-sub">
            Projenizi konuşmak için hazırız. Ücretsiz danışmanlık randevunuzu alın.
          </p>
        </motion.div>

        <div className={styles.grid}>

          {/* ── LEFT — dark info panel ── */}
          <motion.div
            className={styles.leftPanel}
            initial={{ opacity: 0, x: -36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.68, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          >
            <div className={styles.panelOrb1} aria-hidden="true" />
            <div className={styles.panelOrb2} aria-hidden="true" />
            <div className={styles.ring1} aria-hidden="true" />
            <div className={styles.ring2} aria-hidden="true" />
            <div className={styles.ring3} aria-hidden="true" />

            <div className={styles.panelContent}>
              <h3 className={styles.panelTitle}>İletişime Geçin</h3>
              <p className={styles.panelSub}>
                Sorularınız, projeleriniz ve iş birliği teklifleriniz için bize ulaşın.
                En kısa sürede dönüş yapıyoruz.
              </p>

              <div className={styles.contactList}>
                {contactItems.map((item) => {
                  const Tag = item.href ? 'a' : 'div'
                  return (
                    <Tag
                      key={item.label}
                      {...(item.href ? { href: item.href } : {})}
                      className={styles.contactItem}
                    >
                      <span className={styles.cIcon}>{item.icon}</span>
                      <div>
                        <div className={styles.cLabel}>{item.label}</div>
                        <div className={styles.cVal}>{item.value}</div>
                      </div>
                    </Tag>
                  )
                })}
              </div>

              <div className={styles.panelDivider} aria-hidden="true" />

              <div className={styles.socials} aria-label="Sosyal medya hesaplarımız">
                <a href="https://instagram.com/woojidigital" className={styles.socLink} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  Instagram
                </a>
                <a href="https://tiktok.com/@woojidigital" className={styles.socLink} aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.02-.07z"/>
                  </svg>
                  TikTok
                </a>
              </div>

              <div className={styles.responseBadge}>
                <span className={styles.responseDot} aria-hidden="true" />
                Yanıt: ~2 saat
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT — 3D tilt form ── */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.68, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
          >
            <div
              className={styles.formStage}
              onMouseMove={handleMouseMove}
              onMouseLeave={resetTilt}
            >
              <motion.div
                className={styles.formCard}
                style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' }}
              >
                <div className={styles.glare} aria-hidden="true" />

                <div className={styles.formHeader}>
                  <span className={styles.formBadge}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                    Ücretsiz Danışmanlık
                  </span>
                  <h4 className={styles.formTitle}>Mesaj Gönderin</h4>
                </div>

                <form className={styles.form} onSubmit={submit} noValidate aria-label="İletişim formu">
                  <div className={styles.fRow}>
                    <div className={styles.fGroup}>
                      <label htmlFor="cn">Ad Soyad <span aria-hidden="true">*</span></label>
                      <input
                        type="text" id="cn" name="name"
                        placeholder="Adınız Soyadınız"
                        required autoComplete="name"
                        value={form.name} onChange={set('name')}
                      />
                    </div>
                    <div className={styles.fGroup}>
                      <label htmlFor="cp">Telefon</label>
                      <div className={styles.phoneWrap}>
                        <span className={styles.phonePrefix}>+90 (</span>
                        <input
                          type="tel" id="cp" name="phone"
                          placeholder="5XX) XXX XX XX"
                          autoComplete="tel"
                          inputMode="numeric"
                          value={phoneSuffix}
                          onChange={handlePhoneChange}
                          className={styles.phoneSuffixInput}
                        />
                      </div>
                    </div>
                  </div>

                  <div className={styles.fGroup}>
                    <label htmlFor="ce">E-posta <span aria-hidden="true">*</span></label>
                    <input
                      type="email" id="ce" name="email"
                      placeholder="ornek@email.com"
                      required autoComplete="email"
                      value={form.email} onChange={set('email')}
                    />
                  </div>

                  <div className={styles.fGroup}>
                    <label htmlFor="cs">İlgilendiğiniz Hizmet</label>
                    <div className={styles.selectWrap}>
                      <select id="cs" name="service" value={form.service} onChange={set('service')}>
                        <option value="">Seçiniz...</option>
                        {serviceOptions.map((s) => <option key={s}>{s}</option>)}
                      </select>
                      <svg className={styles.selectChevron} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </div>
                  </div>

                  <div className={styles.fGroup}>
                    <label htmlFor="cm">Mesajınız <span aria-hidden="true">*</span></label>
                    <textarea
                      id="cm" name="message"
                      placeholder="Projeniz hakkında kısaca bilgi verin..."
                      required
                      value={form.message} onChange={set('message')}
                    />
                  </div>

                  {validationError && (
                    <p className={styles.validationMsg} role="alert">{validationError}</p>
                  )}

                  <motion.button
                    type="submit"
                    className={`${styles.submitBtn} ${status === 'success' ? styles.success : status === 'error' ? styles.error : ''}`}
                    disabled={status === 'loading'}
                    aria-busy={status === 'loading'}
                    whileHover={{ scale: status === 'idle' ? 1.015 : 1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className={styles.spinner} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" strokeOpacity="0.25"/>
                          <path d="M21 12a9 9 0 0 0-9-9"/>
                        </svg>
                        Gönderiliyor...
                      </>
                    ) : status === 'success' ? (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        Mesajınız İletildi!
                      </>
                    ) : status === 'error' ? (
                      'Hata oluştu, tekrar deneyin'
                    ) : (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="22" y1="2" x2="11" y2="13"/>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                        </svg>
                        Mesaj Gönder
                      </>
                    )}
                  </motion.button>

                  <p className="sr-only" role="status" aria-live="polite">
                    {status === 'loading' ? 'Mesajınız gönderiliyor' : status === 'error' ? 'Hata oluştu, tekrar deneyin' : status === 'success' ? 'Mesajınız iletildi' : ''}
                  </p>
                </form>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
