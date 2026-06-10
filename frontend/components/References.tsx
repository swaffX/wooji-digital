'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useInView, animate } from 'framer-motion'
import styles from './References.module.css'

const testimonials = [
  {
    id: 'tc1',
    quote: 'Wooji Digital ile çalışmaya başladıktan sonra organik trafiğimiz %240 arttı. Şeffaf raporlama ve veri odaklı yaklaşımları gerçekten fark yaratıyor.',
    initials: 'AY',
    name: 'Ahmet Yılmaz',
    role: 'CEO, Tekno Market',
    accent: 'purple' as const,
    metric: '%240 trafik artışı',
  },
  {
    id: 'tc2',
    quote: 'E-ticaret sitemizin dönüşüm oranı 3 ay içinde 2 katına çıktı. Profesyonel ekip ve güvenilir sonuçlar için kesinlikle doğru adres.',
    initials: 'FK',
    name: 'Fatma Kaya',
    role: 'Kurucu, Moda Kolektif',
    accent: 'cyan' as const,
    metric: '2× dönüşüm oranı',
  },
  {
    id: 'tc3',
    quote: 'Sosyal medya stratejimizi devrettik; takipçi sayımız 6 ayda 10 kata çıktı. Kesinlikle tavsiye ederim, harika ve özverili bir ekip.',
    initials: 'MÖ',
    name: 'Mehmet Öztürk',
    role: 'Genel Müdür, Öztürk Group',
    accent: 'purple' as const,
    metric: '10× takipçi büyümesi',
  },
  {
    id: 'tc4',
    quote: "SEO çalışmaları sayesinde 4 ay içinde Google'da ilk sayfaya çıktık. Wooji ekibi her aşamada yanımızda oldu, sonuçlar inanılmaz.",
    initials: 'KA',
    name: 'Kemal Arslan',
    role: 'Yönetici, Arslan Yapı',
    accent: 'cyan' as const,
    metric: 'Google #1 sıralama',
  },
]

const COUNT = testimonials.length
const INTERVAL = 6000

const bigStats = [
  { prefix: '',  num: 50,  dec: 0, suffix: '+', label: 'Büyüyen\nMarka',        icon: '◈' },
  { prefix: '%', num: 98,  dec: 0, suffix: '',  label: 'Müşteri\nMemnuniyeti',  icon: '◉' },
  { prefix: '',  num: 4.9, dec: 1, suffix: '★', label: 'Ortalama\nPuan',        icon: '◆' },
  { prefix: '',  num: 3,   dec: 0, suffix: '×', label: 'Büyüme\nOrtalaması',    icon: '◇' },
]

function AnimatedCounter({
  num, dec, prefix, suffix,
}: { num: number; dec: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!inView) return
    const ctrl = animate(0, num, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(dec > 0 ? v.toFixed(dec) : Math.round(v).toString()),
    })
    return ctrl.stop
  }, [inView, num, dec])

  return (
    <span ref={ref}>
      {prefix}
      <span>{display}</span>
      {suffix}
    </span>
  )
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ color: '#f59e0b' }}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )
}

export default function References() {
  const [active, setActive]   = useState(0)
  const [dir, setDir]         = useState<1 | -1>(1)
  const [paused, setPaused]   = useState(false)
  const [progKey, setProgKey] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.15 })

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotX = useSpring(mx, { stiffness: 240, damping: 28 })
  const rotY = useSpring(my, { stiffness: 240, damping: 28 })
  const resetTilt = useCallback(() => { mx.set(0); my.set(0) }, [mx, my])

  const goTo = useCallback((idx: number, d: 1 | -1) => {
    setDir(d); setActive(idx); setProgKey(k => k + 1); resetTilt()
  }, [resetTilt])

  const next = useCallback(() => goTo((active + 1) % COUNT, 1),          [active, goTo])
  const prev = useCallback(() => goTo((active - 1 + COUNT) % COUNT, -1), [active, goTo])

  useEffect(() => {
    if (paused) return
    timerRef.current = setTimeout(next, INTERVAL)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [active, paused, next])

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(((e.clientY - r.top)  / r.height - 0.5) * -14)
    my.set(((e.clientX - r.left) / r.width  - 0.5) *  18)
  }, [mx, my])

  const t = testimonials[active]

  return (
    <section
      id="referanslar"
      ref={sectionRef}
      className={styles.section}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => { setPaused(false); resetTilt() }}
      aria-labelledby="referanslar-h"
    >
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />
      <div className={styles.dotGrid} aria-hidden="true" />

      <div className="wrap">
        <div className={styles.layout}>

          {/* ── LEFT: heading + stats ── */}
          <motion.div
            className={styles.leftCol}
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="s-tag">Referanslarımız</div>

            <h2 className={`s-title ${styles.heading}`} id="referanslar-h">
              Müşterilerimiz <br />
              <span className="gt">en iyi elçilerimiz</span>
            </h2>

            <p className={styles.subtext}>
              Farklı sektörlerden markalar Wooji Digital ile dijitalde büyüdü.
              Sonuçlar kendisi konuşuyor.
            </p>

            {/* Stats card */}
            <motion.div
              className={styles.statsCard}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.12 }}
              aria-label="Başarı istatistikleri"
            >
              <div className={styles.statsGrid}>
                {bigStats.map((s, i) => (
                  <motion.div
                    key={i}
                    className={styles.statItem}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1], delay: 0.22 + i * 0.09 }}
                  >
                    <span className={styles.statNum}>
                      <AnimatedCounter num={s.num} dec={s.dec} prefix={s.prefix} suffix={s.suffix} />
                    </span>
                    <span className={styles.statLbl}>{s.label.replace('\\n', '\n')}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Divider + trust note */}
            <p className={styles.trustNote}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Tüm veriler gerçek müşteri geri bildirimlerine dayanmaktadır.
            </p>
          </motion.div>

          {/* ── RIGHT: 3D card + navigation ── */}
          <motion.div
            className={styles.rightCol}
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          >
            <div className={styles.stage}>
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={t.id}
                  custom={dir}
                  variants={{
                    enter: (d: number) => ({ opacity: 0, rotateY: d * -60, scale: 0.88, z: -60 }),
                    center: { opacity: 1, rotateY: 0, scale: 1, z: 0 },
                    exit: (d: number) => ({ opacity: 0, rotateY: d * 60, scale: 0.88, z: -60 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.46, ease: [0.4, 0, 0.2, 1] }}
                  className={styles.flipWrap}
                >
                  <motion.article
                    className={`${styles.card} ${t.accent === 'cyan' ? styles.cardCyan : styles.cardPurple}`}
                    style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' }}
                    onMouseMove={onMouseMove}
                    onMouseLeave={resetTilt}
                    aria-labelledby={`tq-${t.id}`}
                  >
                    <span className={styles.glare} aria-hidden="true" />
                    <span className={styles.bigQuote} aria-hidden="true">&ldquo;</span>

                    <div className={styles.topRow}>
                      <div className={styles.stars} aria-label="5 yıldız değerlendirme">
                        {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
                      </div>
                      <span className={`${styles.badge} ${t.accent === 'cyan' ? styles.badgeCyan : styles.badgePurple}`}>
                        {t.metric}
                      </span>
                    </div>

                    <blockquote
                      className={styles.quoteText}
                      id={`tq-${t.id}`}
                      style={{ transform: 'translateZ(16px)' }}
                    >
                      {t.quote}
                    </blockquote>

                    <div className={`${styles.divider} ${t.accent === 'cyan' ? styles.divCyan : styles.divPurple}`} />

                    <div className={styles.author} style={{ transform: 'translateZ(22px)' }}>
                      <div className={styles.avatarWrap} aria-hidden="true">
                        <div className={`${styles.avatarRing} ${t.accent === 'cyan' ? styles.ringCyan : styles.ringPurple}`} />
                        <div className={styles.avatar}>{t.initials}</div>
                      </div>
                      <div>
                        <p className={styles.authorName}>{t.name}</p>
                        <p className={styles.authorRole}>{t.role}</p>
                      </div>
                    </div>
                  </motion.article>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className={styles.navRow}>
              <button className={styles.arrow} onClick={prev} aria-label="Önceki yorum">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </button>

              <div className={styles.dots} role="tablist">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`${i + 1}. yoruma git`}
                    className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                    onClick={() => goTo(i, i > active ? 1 : -1)}
                  >
                    {i === active && !paused && (
                      <motion.span
                        key={progKey}
                        className={styles.dotFill}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
                        aria-hidden="true"
                      />
                    )}
                  </button>
                ))}
              </div>

              <button className={styles.arrow} onClick={next} aria-label="Sonraki yorum">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>

              <span className={styles.counter} aria-live="polite">
                {String(active + 1).padStart(2, '0')} / {String(COUNT).padStart(2, '0')}
              </span>
            </div>
          </motion.div>

        </div>
      </div>

      <ul style={{ position:'absolute', width:1, height:1, overflow:'hidden', clip:'rect(0,0,0,0)', margin:-1 }}>
        {testimonials.map((item) => (
          <li key={item.id}><strong>{item.name}</strong>: {item.quote}</li>
        ))}
      </ul>
    </section>
  )
}
