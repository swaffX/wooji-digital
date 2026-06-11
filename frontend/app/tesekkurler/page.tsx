import type { Metadata } from 'next'
import Link from 'next/link'
import SiteLayout from '@/components/SiteLayout'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Teşekkürler | Wooji Digital',
  description: 'Mesajınız iletildi. En kısa sürede size dönüş yapacağız.',
  robots: 'noindex, nofollow',
}

const steps = [
  {
    num: '01',
    title: 'Mesaj Alındı',
    desc: 'Formunuz başarıyla iletildi. Ekibimiz bildirim aldı.',
  },
  {
    num: '02',
    title: 'İnceleme',
    desc: 'Talebinizi 24 saat içinde inceliyor, size özel bir strateji hazırlıyoruz.',
  },
  {
    num: '03',
    title: 'Geri Dönüş',
    desc: 'Ücretsiz keşif görüşmesi için sizinle iletişime geçiyoruz.',
  },
]

export default function TesekkurlerPage() {
  return (
    <SiteLayout>
      <div className={styles.page}>
        <div className={styles.glow} aria-hidden="true" />

        <div className={styles.content}>
          <div className={styles.iconWrap} aria-hidden="true">
            <svg className={styles.checkCircle} viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="46" stroke="url(#cg)" strokeWidth="4" />
              <polyline
                className={styles.checkMark}
                points="28,52 44,68 72,36"
                stroke="url(#cg)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <defs>
                <linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#0891b2" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <h1 className={styles.title}>
            Mesajınız <span className={styles.highlight}>İletildi!</span>
          </h1>
          <p className={styles.desc}>
            En kısa sürede size dönüş yapacağız. Ortalama yanıt süremiz <strong>2 saattir.</strong>
          </p>

          <div className={styles.steps}>
            {steps.map((s, i) => (
              <div key={s.num} className={styles.step} style={{ animationDelay: `${i * 0.15}s` }}>
                <div className={styles.stepNum}>{s.num}</div>
                <div className={styles.stepBody}>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <Link href="/" className="btn btn-fill">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              </svg>
              Anasayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}
