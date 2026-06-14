import type { Metadata } from 'next'
import SiteLayout from '@/components/SiteLayout'
import PageHeader from '@/components/PageHeader'
import Process from '@/components/Process'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Çalışma Modelimiz | Wooji Digital',
  description:
    'Wooji Digital ile nasıl çalışılır? Analiz, strateji, uygulama ve raporlama adımlarından oluşan şeffaf metodolojimizi keşfedin.',
  alternates: { canonical: '/surec' },
}

const commitments = [
  {
    num: '01',
    title: 'İlk Görüşme Ücretsiz',
    desc: 'Projenizi anlamak için yapılan keşif görüşmesi tamamen ücretsizdir. Bağlayıcılık yoktur.',
  },
  {
    num: '02',
    title: 'Özel Strateji',
    desc: 'Şablona dayalı çözümler sunmuyoruz. Her marka için sıfırdan, ihtiyaca özel stratejiler geliştiriyoruz.',
  },
  {
    num: '03',
    title: 'Haftalık Güncellemeler',
    desc: 'Süreç boyunca ne yapıldığını, ne yapılacağını ve sonuçları düzenli olarak paylaşıyoruz.',
  },
  {
    num: '04',
    title: 'Esneklik',
    desc: 'Pazar koşulları değiştiğinde stratejimizi hızla adapte ediyor, fırsatları kaçırmıyoruz.',
  },
  {
    num: '05',
    title: 'Ölçülebilir Hedefler',
    desc: 'Her projeye başlamadan önce net KPI\'lar belirliyoruz. Başarıyı sayılarla ölçüyoruz.',
  },
  {
    num: '06',
    title: 'Uzun Vadeli Bakış',
    desc: 'Kısa vadeli taktiklerle değil, sürdürülebilir büyüme stratejileriyle çalışıyoruz.',
  },
]

export default function SurecPage() {
  return (
    <SiteLayout>
      <PageHeader
        tag="Çalışma Modelimiz"
        title="Süreç Nasıl"
        highlight="İşliyor?"
        desc="Şeffaf, verimli ve sonuç odaklı metodolojimizle projenizi başarıya taşıyoruz."
      />

      <Process />

      <section className={styles.commitments}>
        <div className="wrap">
          <div className="centered">
            <div className="s-tag reveal">Taahhütlerimiz</div>
            <h2 className="s-title reveal d1">
              Her Projede <span className="gt">Söz Veriyoruz</span>
            </h2>
          </div>
          <div className={styles.grid}>
            {commitments.map((c, i) => (
              <div key={c.num} className={`${styles.card} reveal${i > 0 ? ` d${Math.min(i, 5)}` : ''}`}>
                <span className={styles.num}>{c.num}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="wrap">
          <div className={`${styles.ctaBox} reveal`}>
            <h2 className={styles.ctaTitle}>
              Başlamaya <span className="gt">Hazır mısınız?</span>
            </h2>
            <p>Ücretsiz keşif görüşmesi için bugün iletişime geçin.</p>
            <a href="/iletisim" className="btn btn-fill">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Ücretsiz Danışmanlık Al
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
