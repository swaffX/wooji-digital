import type { Metadata } from 'next'
import SiteLayout from '@/components/SiteLayout'
import Faq from '@/components/Faq'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Sıkça Sorulan Sorular | Wooji Digital',
  description:
    'Wooji Digital hizmetleri hakkında sıkça sorulan sorular ve yanıtları. Fiyatlandırma, süreç ve sonuçlar hakkında merak ettikleriniz.',
  alternates: { canonical: '/sss' },
}

export default function SSSPage() {
  return (
    <SiteLayout>
      <Faq />

      <section className={styles.still}>
        <div className="wrap">
          <div className={`${styles.stillBox} reveal`}>
            <h2>
              Hâlâ Sorunuz mu <span className="gt">Var?</span>
            </h2>
            <p>Cevabını bulamadığınız her konuyu bizimle paylaşın. En kısa sürede dönüş yapıyoruz.</p>
            <div className={styles.stillActions}>
              <a href="/iletisim" className="btn btn-fill">İletişime Geç</a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
