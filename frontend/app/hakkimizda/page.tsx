import type { Metadata } from 'next'
import SiteLayout from '@/components/SiteLayout'
import PageHeader from '@/components/PageHeader'
import About from '@/components/About'
import Stats from '@/components/Stats'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Hakkımızda | Wooji Digital',
  description:
    'Wooji Digital ekibi, markalar için dijital büyüme stratejileri geliştiren tutkulu profesyonellerden oluşur.',
}

const values = [
  { title: 'Dürüstlük', desc: 'Müşterilerimize gerçekçi beklentiler sunuyor, şeffaf iletişimi ön planda tutuyoruz.' },
  { title: 'Merak', desc: 'Dijital dünyanın sürekli değişen dinamiklerini yakından takip ediyor, yeni fırsatları keşfediyoruz.' },
  { title: 'Sonuç Odaklılık', desc: 'Her strateji, ölçülebilir büyüme hedefleriyle başlar ve somut sonuçlarla biter.' },
  { title: 'Ortaklık', desc: 'Müşterilerimizi sadece birer proje olarak değil, uzun vadeli iş ortakları olarak görüyoruz.' },
  { title: 'Yenilik', desc: 'Sektördeki en güncel araçları ve yöntemleri kullanarak rakiplerinizin önünde kalmanıza yardımcı oluyoruz.' },
  { title: 'Kalite', desc: 'Her içerikte, her tasarımda ve her kampanyada en yüksek kalite standartlarını hedefliyoruz.' },
]

const team = [
  { initials: 'WD', name: 'Kurucu & CEO', desc: 'Dijital pazarlama ve büyüme stratejisi uzmanı. 8+ yıl sektör deneyimi.' },
  { initials: 'WD', name: 'Kreatif Direktör', desc: 'Marka kimliği, tasarım ve içerik stratejisi alanında uzman.' },
  { initials: 'WD', name: 'SEO & Analitik Lead', desc: 'Teknik SEO, veri analizi ve performans optimizasyonu.' },
  { initials: 'WD', name: 'Reklam Yöneticisi', desc: 'Google Ads, Meta ve programatik reklam uzmanlığı.' },
]

export default function HakkimizdaPage() {
  return (
    <SiteLayout>
      <PageHeader
        tag="Hakkımızda"
        title="Dijitalde Fark Yaratan"
        highlight="Ekibiniz"
        desc="Wooji Digital, markaların dijital dünyada güçlü, tutarlı ve büyüyen bir varlık oluşturmasına yardımcı olan modern bir dijital pazarlama ajansıdır."
      />

      <About />

      <section className={styles.values}>
        <div className="wrap">
          <div className="centered">
            <div className="s-tag reveal">Değerlerimiz</div>
            <h2 className="s-title reveal d1">
              Bizi <span className="gt">Biz Yapan</span>
            </h2>
          </div>
          <div className={styles.valGrid}>
            {values.map((v, i) => (
              <div key={v.title} className={`${styles.valCard} reveal${i > 0 ? ` d${Math.min(i, 5)}` : ''}`}>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.teamSec}>
        <div className="wrap">
          <div className="centered">
            <div className="s-tag reveal">Ekibimiz</div>
            <h2 className="s-title reveal d1">
              Arkamızdaki <span className="gt">İnsanlar</span>
            </h2>
            <p className="s-sub reveal d2">
              Farklı disiplinlerden gelen uzman ekibimiz markanız için en iyi sonuçları üretir.
            </p>
          </div>
          <div className={styles.teamGrid}>
            {team.map((t, i) => (
              <div key={t.name} className={`${styles.teamCard} reveal${i > 0 ? ` d${i}` : ''}`}>
                <div className={styles.avatar}>{t.initials}</div>
                <h3 className={styles.memberName}>{t.name}</h3>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
    </SiteLayout>
  )
}
