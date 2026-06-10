'use client'
import { useState } from 'react'
import styles from './Faq.module.css'

const faqs = [
  {
    q: 'Hizmetleriniz kimler için uygun?',
    a: 'Wooji Digital hizmetleri; küçük ve orta ölçekli işletmeler, e-ticaret markaları, girişimciler, kişisel markalar ve kurumsal firmalar dahil her ölçekten işletme için uygundur. Her projeye özgün bir strateji geliştiriyoruz.',
  },
  {
    q: 'Ne kadar sürede sonuç alınır?',
    a: 'Sonuçlar hizmet türüne ve mevcut duruma göre değişir. Reklam kampanyalarında ilk sonuçlar 1–2 haftada, SEO çalışmalarında 3–6 ay içinde belirgin iyileşmeler görülür. Her proje için gerçekçi beklenti yönetimi yapıyoruz.',
  },
  {
    q: 'Raporlama nasıl yapılır?',
    a: 'Aylık kapsamlı performans raporları sunuyor, haftalık özet güncellemeler paylaşıyoruz. Anlık verilere erişim sağlayan canlı dashboard\'lar kurarak tam şeffaflık sağlıyoruz. Her raporun ardından görüşme yaparak sonuçları birlikte değerlendiriyoruz.',
  },
  {
    q: 'Tek seferlik mi yoksa aylık mı çalışıyorsunuz?',
    a: 'Her iki modelde de çalışıyoruz. Tek seferlik proje bazlı işbirlikleri (web tasarım, kampanya kurulumu vb.) yapabildiğimiz gibi, sürekli büyüme hedefleyen markalar için aylık retainer modeliyle de çalışıyoruz.',
  },
  {
    q: 'Ücretsiz danışmanlık veriyor musunuz?',
    a: 'Evet! Her yeni müşteri için ücretsiz keşif görüşmesi yapıyoruz. Bu görüşmede markanızın dijital durumunu analiz ediyor, fırsatları ve öneri stratejileri paylaşıyoruz. Hiçbir bağlayıcılık olmadan başlayalım.',
  },
]

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i)

  return (
    <section id="sss" className={styles.section} aria-labelledby="sss-h">
      <div className="wrap">
        <div className={styles.layout}>
          <div className="reveal">
            <div className="s-tag">SSS</div>
            <h2 className="s-title" id="sss-h">
              Sıkça Sorulan<br />
              <span className="gt">Sorular</span>
            </h2>
            <p className={styles.intro}>
              Merak ettiğiniz her konuya cevap vermek için buradayız. Bulamadığınız soruları
              doğrudan bize iletebilirsiniz.
            </p>
            <div className={styles.trustBadge}>
              <span className={styles.trustDot} aria-hidden="true" />
              Ort. yanıt süresi: 2 saat
            </div>
            <a href="#iletisim" className={`btn btn-fill ${styles.ctaBtn}`}>
              Bize Ulaşın
            </a>
          </div>

          <div className={`${styles.list} reveal d2`} role="list">
            {faqs.map((faq, i) => {
              const isOpen = openIdx === i
              const num = String(i + 1).padStart(2, '0')
              return (
                <div
                  key={i}
                  className={`${styles.item} ${isOpen ? styles.open : ''}`}
                  role="listitem"
                >
                  <div
                    className={styles.question}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    onClick={() => toggle(i)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(i) } }}
                  >
                    <div className={styles.questionLeft}>
                      <span className={styles.qNum} aria-hidden="true">{num}</span>
                      <h3>{faq.q}</h3>
                    </div>
                    <div className={styles.ico} aria-hidden="true">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M12 5v14M5 12h14"/>
                      </svg>
                    </div>
                  </div>
                  <div
                    className={styles.answer}
                    style={{ maxHeight: isOpen ? '500px' : '0' }}
                  >
                    <div className={styles.answerInner}>{faq.a}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
