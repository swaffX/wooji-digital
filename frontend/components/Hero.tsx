'use client'
import { useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { getLenisInstance } from '@/lib/lenis'
import styles from './Hero.module.css'

function FloatingPaths({ position }: { position: number }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => { if (window.innerWidth >= 768) setVisible(true) }, [])
  if (!visible) return null

  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
    duration: 20 + (i % 5) * 2,
    delay: -(i * 1.1),
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
            fill="none"
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </svg>
    </div>
  )
}

const TICKER_ITEMS = [
  'Google Ads', 'Meta Ads', 'SEO & Organik', 'TikTok Ads',
  'Web Tasarım', 'LinkedIn Ads', 'E-ticaret', 'Marka Stratejisi',
  'İçerik Pazarlaması', 'Veri & Analitik',
]

const TITLE_LINES = ['Markanızı', 'Dijitalde Büyütün.']

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => { setIsMobile(window.innerWidth < 768) }, [])

  // Lenis-synced parallax — only background layers, not content
  const scrollY  = useMotionValue(0)
  const orb1Y    = useTransform(scrollY, [0, 700], [0, -120])
  const orb2Y    = useTransform(scrollY, [0, 700], [0, -80])
  const gridY    = useTransform(scrollY, [0, 700], [0, -40])

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>
    let detach: (() => void) | null = null
    const onScroll = ({ scroll }: { scroll: number }) => scrollY.set(scroll)
    const tryAttach = () => {
      const lenis = getLenisInstance()
      if (!lenis) { timerId = setTimeout(tryAttach, 50); return }
      lenis.on('scroll', onScroll)
      detach = () => lenis.off('scroll', onScroll)
    }
    tryAttach()
    return () => { clearTimeout(timerId); detach?.() }
  }, [scrollY])

  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-h1">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />

      {/* Parallax bg layers — GPU composited via will-change */}
      <motion.div className={styles.orb1} style={{ y: orb1Y }} aria-hidden="true" />
      <motion.div className={styles.orb2} style={{ y: orb2Y }} aria-hidden="true" />
      <motion.div className={styles.gridOverlay} style={{ y: gridY }} aria-hidden="true" />

      {/* Content — no parallax, stable for text rendering */}
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
                    {ch === ' ' ? ' ' : ch}
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
                    {ch === ' ' ? ' ' : ch}
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

        <motion.div
          className={styles.ticker}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          aria-hidden="true"
        >
          <div className={styles.tickerTrack}>
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className={styles.tickerItem}>
                <span className={styles.tickerDot} />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <a href="#hizmetler" className={styles.scrollHint} aria-label="Aşağı kaydır">
        <div className={styles.scrollGlow} aria-hidden="true" />
        <div className={styles.scrollLineWrap} aria-hidden="true">
          <div className={styles.scrollLine} />
          <div className={styles.scrollPulse} />
        </div>
        <span className={styles.scrollLabel}>Keşfet</span>
      </a>
    </section>
  )
}
