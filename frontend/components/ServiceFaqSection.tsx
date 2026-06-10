'use client'
import { useState } from 'react'
import type { ServiceFaqItem } from './ServicePage'
import styles from './ServicePage.module.css'

export default function ServiceFaqSection({ faqs }: { faqs: ServiceFaqItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i)

  return (
    <section className={styles.faqSection} aria-label="Sıkça sorulan sorular">
      <div className="wrap">
        <div className="centered">
          <div className="s-tag reveal">SSS</div>
          <h2 className="s-title reveal d1">Merak Edilenler</h2>
        </div>
        <div className={`${styles.faqList} reveal d2`}>
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i
            return (
              <div key={i} className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ''}`}>
                <button
                  className={styles.faqQuestion}
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                >
                  <span>{faq.q}</span>
                  <svg
                    className={`${styles.faqIco} ${isOpen ? styles.faqIcoOpen : ''}`}
                    width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
                <div
                  className={styles.faqAnswer}
                  style={{ maxHeight: isOpen ? '400px' : '0' }}
                >
                  <p className={styles.faqAnswerText}>{faq.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
