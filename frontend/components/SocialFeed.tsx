'use client'
import { useRef, useCallback } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import styles from './SocialFeed.module.css'

const topics = [
  { label: 'SEO Taktikleri',      accent: 'purple' },
  { label: 'Google Ads',          accent: 'cyan'   },
  { label: 'Vaka Çalışmaları',    accent: 'purple' },
  { label: 'Web Tasarım',         accent: 'blue'   },
  { label: 'İçerik Stratejisi',   accent: 'cyan'   },
  { label: 'Analitik & Raporlar', accent: 'purple' },
  { label: 'Sosyal Medya',        accent: 'blue'   },
  { label: 'Marka Büyütme',       accent: 'cyan'   },
]

const stats = [
  { value: '5+',   label: 'Yıllık Deneyim'    },
  { value: '50+',  label: 'Büyüttüğümüz Marka' },
  { value: 'Haf.', label: 'İçerik Sıklığı'    },
]

export default function SocialFeed() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.2 })

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotX = useSpring(mx, { stiffness: 180, damping: 28 })
  const rotY = useSpring(my, { stiffness: 180, damping: 28 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(((e.clientY - r.top) / r.height - 0.5) * -8)
    my.set(((e.clientX - r.left) / r.width - 0.5) * 10)
  }, [mx, my])

  const resetTilt = useCallback(() => { mx.set(0); my.set(0) }, [mx, my])

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Sosyal medya takip">
      <div className={styles.meshBg} aria-hidden="true" />
      <div className={styles.orb1}   aria-hidden="true" />
      <div className={styles.orb2}   aria-hidden="true" />

      <div className={styles.inner}>

        {/* ── LEFT: 3D profile card ── */}
        <motion.div
          className={styles.cardStage}
          initial={{ opacity: 0, x: -28 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
        >
          <motion.div
            className={styles.profileCard}
            style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' }}
          >
            <div className={styles.cardOrb1} aria-hidden="true" />
            <div className={styles.cardOrb2} aria-hidden="true" />
            <div className={styles.cardRing1} aria-hidden="true" />
            <div className={styles.cardRing2} aria-hidden="true" />
            <div className={styles.cardGlare} aria-hidden="true" />

            <div className={styles.cardContent}>
              {/* Avatar */}
              <div className={styles.avatarWrap} style={{ transform: 'translateZ(24px)' }}>
                <img
                  src="/logo.jpg"
                  alt="Wooji Digital profil fotoğrafı"
                  className={styles.avatar}
                />
                <div className={styles.avatarRing} aria-hidden="true" />
                <span className={styles.liveIndicator} aria-hidden="true">
                  <span className={styles.liveDot} />
                </span>
              </div>

              <div style={{ transform: 'translateZ(18px)' }}>
                <div className={styles.handle}>@woojidigital</div>
                <div className={styles.handleSub}>Dijital Pazarlama Ajansı</div>
              </div>

              {/* Stats row */}
              <div className={styles.statsRow} style={{ transform: 'translateZ(14px)' }}>
                {stats.map((s) => (
                  <div key={s.label} className={styles.stat}>
                    <span className={styles.statVal}>{s.value}</span>
                    <span className={styles.statLbl}>{s.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className={styles.ctaRow} style={{ transform: 'translateZ(20px)' }}>
                <a
                  href="https://instagram.com/woojidigital"
                  className={styles.followBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  Instagram
                </a>
                <a
                  href="https://tiktok.com/@woojidigital"
                  className={styles.followBtnAlt}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.02-.07z"/>
                  </svg>
                  TikTok
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: topics + heading ── */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 28 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
        >
          <div className={styles.rightTag}>Takip Edin</div>
          <h2 className={styles.rightTitle}>
            Dijital büyüme ipuçlarını<br />
            <span className={styles.rightGt}>takipte kalın</span>
          </h2>
          <p className={styles.rightSub}>
            SEO taktikleri, vaka çalışmaları, reklam stratejileri ve dijital pazarlama
            trendlerini haftalık içeriklerimizle keşfedin.
          </p>

          {/* topic chips */}
          <div className={styles.topicsGrid}>
            {topics.map((t, i) => (
              <motion.span
                key={t.label}
                className={`${styles.chip} ${styles[`chip_${t.accent}`]}`}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: 0.2 + i * 0.06 }}
              >
                {t.label}
              </motion.span>
            ))}
          </div>

          <motion.div
            className={styles.rightCta}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: 0.72 }}
          >
            <a
              href="https://instagram.com/woojidigital"
              className={styles.rightBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              Instagram'da Takip Et
            </a>
            <a
              href="https://tiktok.com/@woojidigital"
              className={styles.rightBtnAlt}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.02-.07z"/>
              </svg>
              TikTok
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
