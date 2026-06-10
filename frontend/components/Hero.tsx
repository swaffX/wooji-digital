'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './Hero.module.css'

function FloatingPaths({ position }: { position: number }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => { if (window.innerWidth >= 768) setVisible(true) }, [])
  if (!visible) return null

  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
    opacity: 0.07 + i * 0.018,
    duration: 20 + (i % 6) * 3,
  }))
  const gradId = `pg${position > 0 ? 'a' : 'b'}`
  return (
    <div className={styles.pathsWrap} aria-hidden="true">
      <svg className={styles.pathsSvg} viewBox="0 0 696 316" fill="none" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#7c3aed" />
            <stop offset="50%"  stopColor="#2563eb" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
        </defs>
        {paths.map(p => (
          <motion.path
            key={p.id}
            d={p.d}
            stroke={`url(#${gradId})`}
            strokeWidth={p.width}
            strokeOpacity={p.opacity}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{ pathLength: 1, opacity: [0.3, 0.6, 0.3], pathOffset: [0, 1, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </svg>
    </div>
  )
}

const StarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

const METRICS = [
  { value: '+340%', label: 'Organik Trafik' },
  { value: '3.8x',  label: 'Ort. ROAS'      },
  { value: '50+',   label: 'Büyütülen Marka' },
]

const TITLE_LINES = ['Markanızı', 'Dijitalde Büyütün.']

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => { setIsMobile(window.innerWidth < 768) }, [])

  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-h1">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />

      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />
      <div className={styles.gridOverlay} aria-hidden="true" />

      <div className={styles.content}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          role="text"
        >
          <span className={styles.badgeDot} aria-hidden="true" />
          Güvenilir Dijital Büyüme Partneri
        </motion.div>

        <h1 id="hero-h1" className={styles.title}>
          {TITLE_LINES.map((line, li) =>
            isMobile ? (
              <motion.span
                key={li}
                className={styles.titleLine}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: li * 0.15 }}
              >
                {line.split('').map((ch, ci) => (
                  <span key={ci} className={li === 1 ? styles.titleLetterGrad : styles.titleLetter}>
                    {ch === ' ' ? ' ' : ch}
                  </span>
                ))}
              </motion.span>
            ) : (
              <span key={li} className={styles.titleLine}>
                {line.split('').map((ch, ci) => (
                  <motion.span
                    key={`${li}-${ci}`}
                    className={li === 1 ? styles.titleLetterGrad : styles.titleLetter}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: li * 0.18 + ci * 0.028, type: 'spring', stiffness: 140, damping: 22 }}
                  >
                    {ch === ' ' ? ' ' : ch}
                  </motion.span>
                ))}
              </span>
            )
          )}
        </h1>

        <motion.p
          className={styles.desc}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          Wooji Digital; SEO, reklam yönetimi, web tasarım ve dijital strateji
          hizmetleriyle markanızı büyütür. Veriye dayalı yaklaşım, yaratıcı stratejiler,
          ölçülebilir sonuçlar.
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="#iletisim" className="btn btn-fill" aria-label="Ücretsiz danışmanlık randevusu al">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Ücretsiz Danışmanlık Al
          </a>
          <a href="#hizmetler" className="btn btn-line" aria-label="Hizmetlerimizi incele">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            Teklif Al
          </a>
        </motion.div>

        {/* Metrics strip */}
        <motion.div
          className={styles.metricsRow}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.92 }}
          aria-label="Sonuçlarımız"
        >
          {METRICS.map((m, i) => (
            <div key={m.label} className={styles.metric}>
              <span className={styles.metricVal}>{m.value}</span>
              <span className={styles.metricLabel}>{m.label}</span>
              {i < METRICS.length - 1 && <span className={styles.metricDivider} aria-hidden="true" />}
            </div>
          ))}
        </motion.div>

        <motion.div
          className={styles.socialProof}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          aria-label="50+ mutlu müşteri, Google 5.0 puan"
        >
          <div className={styles.avatarStack} aria-hidden="true">
            <span className={styles.av} style={{ background: '#7c3aed' }}>AY</span>
            <span className={styles.av} style={{ background: '#0891b2' }}>FK</span>
            <span className={styles.av} style={{ background: '#2563eb' }}>MÖ</span>
          </div>
          <div className={styles.proofMeta}>
            <span className={styles.proofCount}>50+</span>
            <span className={styles.proofLabel}>mutlu müşteri</span>
          </div>
          <div className={styles.proofDivider} aria-hidden="true" />
          <div className={styles.proofRating}>
            <div className={styles.ratingStars} aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
            </div>
            <span className={styles.ratingScore}>5.0</span>
          </div>
        </motion.div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <div className={styles.scrollLine} />
        Keşfet
      </div>
    </section>
  )
}
