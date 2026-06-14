import type { Metadata } from 'next'
import SiteLayout from '@/components/SiteLayout'
import PageHeader from '@/components/PageHeader'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import Newsletter from '@/components/Newsletter'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | Wooji Digital',
  description:
    'SEO, dijital reklam, web tasarım, sosyal medya yönetimi ve içerik pazarlaması hizmetleriyle markanızı büyütüyoruz.',
  alternates: { canonical: '/hizmetler' },
}

const highlights = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: 'Veriye Dayalı',
    desc: 'Her strateji analiz ve ölçüm üzerine inşa edilir.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Hızlı Sonuç',
    desc: 'Reklam kampanyalarında ilk 2 hafta içinde sonuçlar.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Kişisel İlgi',
    desc: 'Dedicated hesap yöneticisi, doğrudan iletişim.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Şeffaf Raporlama',
    desc: 'Aylık raporlar ve anlık dashboard erişimi.',
  },
]

export default function HizmetlerPage() {
  return (
    <SiteLayout>
      <PageHeader
        tag="Hizmetlerimiz"
        title="İşinizi Büyüten"
        highlight="Çözümler"
        desc="Her ihtiyaca özel, ölçülebilir sonuçlar sunan kapsamlı dijital pazarlama hizmetleri."
      />

      <Services />

      <section className={styles.why}>
        <div className="wrap">
          <div className="centered">
            <div className="s-tag reveal">Neden Wooji?</div>
            <h2 className="s-title reveal d1">
              Farkımız <span className="gt">Ne?</span>
            </h2>
          </div>
          <div className={styles.grid}>
            {highlights.map((h, i) => (
              <div key={h.title} className={`${styles.card} reveal${i > 0 ? ` d${i}` : ''}`}>
                <div className={styles.icon}>{h.icon}</div>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <Newsletter />
    </SiteLayout>
  )
}
