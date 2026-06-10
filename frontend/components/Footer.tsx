'use client'
import { useState } from 'react'
import styles from './Footer.module.css'

const quickLinks = [
  { label: 'Hizmetler',   href: '#hizmetler'   },
  { label: 'Hakkımızda',  href: '#hakkimizda'  },
  { label: 'Süreç',       href: '#surec'        },
  { label: 'Referanslar', href: '#referanslar'  },
  { label: 'SSS',         href: '#sss'          },
  { label: 'Blog',        href: '/blog'         },
  { label: 'İletişim',    href: '#iletisim'     },
]

const services = [
  'SEO & Organik Büyüme',
  'Dijital Reklam Yönetimi',
  'Web Tasarım & Geliştirme',
  'Sosyal Medya Yönetimi',
  'İçerik Pazarlaması',
  'Analitik & Strateji',
]

export default function Footer() {
  const [email, setEmail]   = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus(res.ok ? 'ok' : 'err')
      if (res.ok) setEmail('')
    } catch {
      setStatus('err')
    }
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <div className={styles.grid}>

          {/* ── Col 1: Newsletter ── */}
          <div className={styles.newsletter}>
            <div className={styles.glow} aria-hidden="true" />
            <a href="#" className={styles.logo} aria-label="Wooji Digital Ana Sayfa">
              Wooji <span className={styles.logoAccent}>Digital</span>
            </a>
            <p className={styles.newsletterDesc}>
              Dijital pazarlama trendleri ve özel teklifler için bültenimize abone olun.
            </p>
            <form className={styles.inputWrap} onSubmit={submit} noValidate>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresiniz"
                className={styles.emailInput}
                disabled={status === 'loading' || status === 'ok'}
                aria-label="E-posta adresi"
                required
              />
              <button
                type="submit"
                className={`${styles.sendBtn} ${status === 'ok' ? styles.sendOk : ''}`}
                disabled={status === 'loading' || status === 'ok'}
                aria-label="Abone ol"
              >
                {status === 'ok' ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                )}
              </button>
            </form>
            {status === 'ok'  && <p className={styles.msg}>Teşekkürler! Abone oldunuz.</p>}
            {status === 'err' && <p className={`${styles.msg} ${styles.msgErr}`}>Bir hata oluştu. Tekrar deneyin.</p>}
          </div>

          {/* ── Col 2: Hizmetler ── */}
          <div className={styles.col}>
            <h4 className={styles.colHead}>Hizmetler</h4>
            <ul className={styles.colList}>
              {services.map((s) => (
                <li key={s}><a href="#hizmetler">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Hızlı Linkler ── */}
          <div className={styles.col}>
            <h4 className={styles.colHead}>Hızlı Linkler</h4>
            <ul className={styles.colList}>
              {quickLinks.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: İletişim + Sosyal ── */}
          <div className={styles.col}>
            <h4 className={styles.colHead}>İletişim</h4>
            <address className={styles.address}>
              <a href="tel:+905XXXXXXXXX">+90 (XXX) XXX XX XX</a>
              <a href="mailto:info@woojidiital.com">info@woojidiital.com</a>
              <span>İstanbul, Türkiye</span>
              <a href="#iletisim" className={styles.consultLink}>Ücretsiz Danışmanlık →</a>
            </address>

            <h4 className={`${styles.colHead} ${styles.colHeadSoc}`}>Bizi Takip Edin</h4>
            <div className={styles.socials} aria-label="Sosyal medya">
              <a
                href="https://instagram.com/woojidiital"
                className={styles.socBtn}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://tiktok.com/@woojidiital"
                className={styles.socBtn}
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.02-.07z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Wooji Digital. Tüm hakları saklıdır.</p>
          <nav className={styles.legalLinks} aria-label="Yasal bağlantılar">
            <a href="#">Gizlilik Politikası</a>
            <a href="#">Kullanım Koşulları</a>
            <a href="#">KVKK</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
