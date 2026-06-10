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
            <a
              href="https://wa.me/905XXXXXXXXX"
              className="btn btn-line"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp ile iletişim"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M11.944 0C5.376 0 0 5.376 0 11.944c0 2.087.54 4.047 1.485 5.755L0 24l6.459-1.697A11.906 11.906 0 0 0 11.944 24C18.512 24 24 18.624 24 12.056 24 5.488 18.512 0 11.944 0zm0 21.818a9.85 9.85 0 0 1-5.031-1.375l-.361-.214-3.734.979.997-3.643-.235-.374a9.861 9.861 0 0 1-1.512-5.247C2.068 6.584 6.584 2.182 11.944 2.182c5.36 0 9.818 4.457 9.818 9.874 0 5.417-4.457 9.762-9.818 9.762z"/>
              </svg>
              WhatsApp ile Yaz
            </a>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}
