import type { Metadata } from 'next'
import SiteLayout from '@/components/SiteLayout'
import PageHeader from '@/components/PageHeader'
import References from '@/components/References'
import Newsletter from '@/components/Newsletter'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Referanslarımız | Wooji Digital',
  description:
    'Wooji Digital ile büyüyen markaların başarı hikayeleri. SEO, reklam ve sosyal medya projelerinde elde edilen somut sonuçlar.',
}

const caseStudies = [
  {
    sector: 'E-Ticaret',
    brand: 'Moda & Yaşam Markası',
    result: '+%240',
    metric: 'Organik Trafik',
    period: '6 Ay',
    desc: 'SEO odaklı içerik stratejisi ve teknik optimizasyonla marka, rakiplerine kıyasla 3 kat büyüdü.',
    tags: ['SEO', 'İçerik', 'Teknik Optimizasyon'],
  },
  {
    sector: 'Restoran Zinciri',
    brand: 'Yerel & Kurumsal',
    result: 'x2',
    metric: 'Dönüşüm Oranı',
    period: '3 Ay',
    desc: 'Google Ads ve Meta reklam optimizasyonuyla rezervasyon sayısı 3 ayda iki katına çıktı.',
    tags: ['Google Ads', 'Meta Ads', 'CRO'],
  },
  {
    sector: 'Kişisel Marka',
    brand: 'Fitness & Sağlık',
    result: 'x10',
    metric: 'Takipçi Büyümesi',
    period: '6 Ay',
    desc: 'Organik içerik stratejisi ve reel formatıyla kişisel marka 6 ayda 10 bin takipçiye ulaştı.',
    tags: ['Sosyal Medya', 'İçerik', 'Reel'],
  },
]

export default function ReferanslarPage() {
  return (
    <SiteLayout>
      <PageHeader
        tag="Referanslarımız"
        title="Güvenen"
        highlight="Markalar"
        desc="Farklı sektörlerden markalar Wooji Digital ile dijitalde büyüyor."
      />

      <References />

      <section className={styles.cases}>
        <div className="wrap">
          <div className="centered">
            <div className="s-tag reveal">Başarı Hikayeleri</div>
            <h2 className="s-title reveal d1">
              Somut <span className="gt">Sonuçlar</span>
            </h2>
            <p className="s-sub reveal d2">
              Her proje bir dönüşüm hikayesidir. Rakamlar yalan söylemez.
            </p>
          </div>
          <div className={styles.grid}>
            {caseStudies.map((c, i) => (
              <div key={c.brand} className={`${styles.card} reveal${i > 0 ? ` d${i}` : ''}`}>
                <div className={styles.cardTop}>
                  <span className={styles.sector}>{c.sector}</span>
                  <span className={styles.period}>{c.period}</span>
                </div>
                <div className={styles.result}>
                  <span className={styles.resultNum}>{c.result}</span>
                  <span className={styles.resultMetric}>{c.metric}</span>
                </div>
                <h3 className={styles.brand}>{c.brand}</h3>
                <p className={styles.desc}>{c.desc}</p>
                <div className={styles.tags}>
                  {c.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </SiteLayout>
  )
}
