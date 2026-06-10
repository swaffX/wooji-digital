'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Process.module.css'

const steps = [
  {
    num: '01',
    title: 'Analiz',
    desc: 'Marka, rakip ve hedef kitle analizi yaparak mevcut durumu ve büyüme fırsatlarını net biçimde ortaya koyarız.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
        <path d="M8 11h6M11 8v6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Strateji',
    desc: 'Veriye dayalı, ölçülebilir hedefler içeren özel bir dijital büyüme planı ve yol haritası oluştururuz.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="5"/>
        <circle cx="12" cy="12" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Uygulama',
    desc: 'Kampanya yönetimi, içerik üretimi ve tasarım süreçlerini en yüksek kalitede hayata geçiririz.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Raporlama',
    desc: 'Düzenli performans raporları ve sürekli optimizasyon çalışmalarıyla kalıcı iyileşme sağlarız.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" strokeLinecap="round"/>
        <line x1="12" y1="20" x2="12" y2="4" strokeLinecap="round"/>
        <line x1="6"  y1="20" x2="6"  y2="14" strokeLinecap="round"/>
        <path d="M2 20h20" strokeLinecap="round"/>
      </svg>
    ),
  },
]

function Card({ step, side, delay }: { step: typeof steps[0]; side: 'left' | 'right'; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      className={`${styles.card} ${styles[`card${side.charAt(0).toUpperCase() + side.slice(1)}`]}`}
      initial={{ opacity: 0, x: side === 'left' ? -44 : 44 }}
      animate={visible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      <span className={styles.cardBgNum} aria-hidden="true">{step.num}</span>
      <div className={styles.iconWrap}>{step.icon}</div>
      <h3 className={styles.cardTitle}>{step.title}</h3>
      <p className={styles.cardDesc}>{step.desc}</p>
    </motion.div>
  )
}

function Node({ step, delay }: { step: typeof steps[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className={styles.node}
      initial={{ scale: 0, opacity: 0 }}
      animate={visible ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1], delay: delay + 0.15 }}
    >
      <span className={styles.nodeNum}>{step.num}</span>
      <span className={styles.nodeRing} aria-hidden="true" />
    </motion.div>
  )
}

export default function Process() {
  const spineRef = useRef<HTMLDivElement>(null)
  const spineVisible = useInView(spineRef, { once: true, amount: 0.1 })

  return (
    <section id="surec" className={styles.section} aria-labelledby="surec-h">
      <div className="wrap">
        <div className="centered">
          <div className="s-tag reveal">Çalışma Modelimiz</div>
          <h2 className="s-title reveal d1" id="surec-h">
            Süreç Nasıl <span className="gt">İşliyor?</span>
          </h2>
          <p className="s-sub reveal d2">
            Şeffaf, verimli ve sonuç odaklı 4 adımlı metodolojimizle markanızı büyütüyoruz.
          </p>
        </div>

        <div className={styles.timeline}>
          {/* Spine */}
          <div ref={spineRef} className={styles.spine} aria-hidden="true">
            <motion.div
              className={styles.spineLine}
              initial={{ scaleY: 0 }}
              animate={spineVisible ? { scaleY: 1 } : {}}
              transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            />
          </div>

          {steps.map((s, i) => {
            const delay = i * 0.18
            return (
              <div key={s.num} className={styles.row} role="listitem">
                {/* Left: odd-indexed cards on desktop */}
                <div className={styles.colLeft}>
                  {i % 2 === 0 && <Card step={s} side="left" delay={delay} />}
                </div>

                <div className={styles.colCenter}>
                  <Node step={s} delay={delay} />
                </div>

                {/* Right: even-indexed on desktop; ALL cards on mobile via CSS */}
                <div className={styles.colRight}>
                  {i % 2 === 1
                    ? <Card step={s} side="right" delay={delay} />
                    : <div className={styles.mobileCard}><Card step={s} side="right" delay={delay} /></div>
                  }
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
