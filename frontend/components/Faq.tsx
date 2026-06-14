'use client'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Faq.module.css'

export const faqs = [
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
    a: "Aylık kapsamlı performans raporları sunuyor, haftalık özet güncellemeler paylaşıyoruz. Anlık verilere erişim sağlayan canlı dashboard'lar kurarak tam şeffaflık sağlıyoruz. Her raporun ardından görüşme yaparak sonuçları birlikte değerlendiriyoruz.",
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.12 })

  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i)

  return (
    <section id="sss" ref={sectionRef} className={styles.section} aria-labelledby="sss-h">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className={styles.band1} aria-hidden="true" />
      <div className={styles.band2} aria-hidden="true" />
      <div className={styles.meshGrid} aria-hidden="true" />

      <div className="wrap">

        {/* ── Centered header ── */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.62, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="s-tag">SSS</div>
          <h2 className="s-title" id="sss-h">
            Sıkça Sorulan<br />
            <span className="gt">Sorular</span>
          </h2>
          <p className={styles.subtext}>
            Merak ettiğiniz her konuya cevap vermek için buradayız.
            Bulamadığınız soruları doğrudan bize iletebilirsiniz.
          </p>

          <div className={styles.statRow}>
            <span className={styles.statPill}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              50+ Mutlu Marka
            </span>
            <span className={styles.statPill}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              %98 Memnuniyet
            </span>
            <span className={styles.trustPill}>
              <span className={styles.trustDot} aria-hidden="true" />
              Ort. yanıt süresi: 2 saat
            </span>
          </div>
        </motion.div>

        {/* ── Accordion ── */}
        <div className={styles.accordionWrap} role="list">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i
            const num = String(i + 1).padStart(2, '0')
            return (
              <motion.div
                key={i}
                className={`${styles.item} ${isOpen ? styles.open : ''}`}
                role="listitem"
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.48, ease: [0.4, 0, 0.2, 1], delay: 0.22 + i * 0.07 }}
              >
                <button
                  className={styles.question}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => toggle(i)}
                >
                  <span className={`${styles.num} ${isOpen ? styles.numOpen : ''}`} aria-hidden="true">
                    {num}
                  </span>
                  <h3 className={`${styles.qText} ${isOpen ? styles.qTextOpen : ''}`}>
                    {faq.q}
                  </h3>
                  <motion.div
                    className={`${styles.ico} ${isOpen ? styles.icoOpen : ''}`}
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.26, ease: [0.4, 0, 0.2, 1] }}
                    aria-hidden="true"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14"/>
                    </svg>
                  </motion.div>
                </button>

                <div
                  id={`faq-a-${i}`}
                  className={`${styles.answerWrap} ${isOpen ? styles.answerWrapOpen : ''}`}
                  role="region"
                >
                  <div className={styles.answerInner}>
                    <p className={styles.answer}>{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          className={styles.bottom}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.68 }}
        >
          <p className={styles.bottomNote}>
            Sorunuzu bulamadınız mı? Doğrudan bize ulaşın.
          </p>
          <a href="#iletisim" className={`btn btn-fill ${styles.ctaBtn}`}>
            Bize Ulaşın
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
