'use client'

import { useRef, useState } from 'react'
import type { Variants } from 'framer-motion'
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useMotionTemplate,
  useReducedMotion,
} from 'framer-motion'
import styles from './page.module.css'

const EASE = [0.4, 0, 0.2, 1] as const

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: EASE },
  }),
}

const VIEWPORT = { once: true, amount: 0.2 } as const

const arrow = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const PLATFORMS = [
  {
    name: 'Google Ads',
    role: 'Arama, Display ve Shopping kampanyaları.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M11 7v8M7 11h8" />
      </svg>
    ),
  },
  {
    name: 'Meta Reklam',
    role: 'Facebook ve Instagram ekosisteminde güçlü hedefleme.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5.5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
] as const

const FUNNEL = [
  { label: 'Erişim', width: 100 },
  { label: 'Tıklama', width: 80 },
  { label: 'İlgi', width: 58 },
  { label: 'Dönüşüm', width: 34 },
] as const

const FEATURES = [
  {
    title: 'Google Ads',
    desc: 'Arama, Display ve Shopping kampanyalarıyla satın alma niyeti yüksek kullanıcılara ulaşırız.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>,
  },
  {
    title: 'Meta Reklam',
    desc: 'Facebook ve Instagram ekosisteminde güçlü hedefleme ve yaratıcı içerikle dönüşüm sağlarız.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>,
  },
  {
    title: 'Yeniden Hedefleme',
    desc: 'Sitenizi ziyaret edip dönüşmeyen kullanıcılara özel, kişiselleştirilmiş reklamlar sunarız.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  },
  {
    title: 'Kreatif & Metin',
    desc: 'Tıklanma oranını artıran başlıklar, görseller ve video içerikler üretiriz.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>,
  },
  {
    title: 'Dönüşüm İzleme',
    desc: 'Pixel ve dönüşüm kurulumuyla her önemli aksiyonu doğru şekilde ölçeriz.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
  },
]

const CHECKLIST = [
  'Arama ağı kampanyaları',
  'Display & Shopping',
  'Yeniden hedefleme kurgusu',
  'Kreatif & reklam metni',
  'Dönüşüm izleme & pixel',
]

const PILLARS = [
  {
    t: 'Veriyle Optimize',
    d: 'Her kararı performans verisine dayandırır, bütçeyi verimsiz alanlardan çeker, kazandıran yere yönlendiririz.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M3 3v18h18" /><path d="m7 14 4-4 3 3 5-6" /></svg>,
  },
  {
    t: 'Şeffaf Bütçe',
    d: 'Reklam harcamanızın nereye gittiğini ve karşılığında ne aldığınızı her zaman net görürsünüz.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>,
  },
  {
    t: 'Hızlı Aksiyon',
    d: 'Kampanyaları sürekli izler, fırsat ve sorunlara saatler içinde müdahale ederiz.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
  },
]

const STEPS = [
  { n: '01', t: 'Hedef & Bütçe', d: 'Dönüşüm hedefleri ve bütçe netleşir; platform ve kampanya türü birlikte seçilir.' },
  { n: '02', t: 'Kurulum & Takip', d: 'Pixel, dönüşüm izleme ve analytics entegrasyonu eksiksiz şekilde kurulur.' },
  { n: '03', t: 'Yayın & Test', d: 'Kampanyalar canlıya alınır; farklı kreatif ve hedefleme varyantları test edilir.' },
  { n: '04', t: 'Optimizasyon', d: 'Performans düzenli incelenir; teklif ve bütçe dağılımı sürekli iyileştirilir.' },
]

const KEYWORDS = ['Google Ads', 'Meta Reklam', 'Yeniden Hedefleme', 'A/B Test', 'Arama Ağı', 'Display', 'Shopping', 'Dönüşüm İzleme', 'Kreatif', 'Hedef Kitle']

const FAQS = [
  { q: 'Minimum reklam bütçesi ne olmalı?', a: 'Sektörünüze ve hedefinize göre değişir; keşif görüşmesinde size uygun bir başlangıç bütçesi öneriyoruz. Yönetim ücreti reklam bütçenizden ayrı hesaplanır.' },
  { q: 'Reklam hesabım bende mi kalır?', a: 'Evet. Google Ads ve Meta hesapları sizin adınıza açılır. İş birliği sona erse de hesaplar ve tüm geçmiş veriler size ait kalır.' },
  { q: 'Ne zaman sonuç almaya başlarım?', a: 'Kampanya yayına girdikten kısa süre sonra ilk veriler gelmeye başlar; en verimli sonuçlar optimizasyon sürecinde zamanla oluşur.' },
  { q: 'Raporlamayı nasıl yapıyorsunuz?', a: 'Düzenli ve sade raporların yanı sıra, istediğiniz an erişebileceğiniz canlı bir performans paneli sunuyoruz.' },
]

export default function DijitalContent() {
  const reduce = useReducedMotion()
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, { stiffness: 110, damping: 18 })
  const sy = useSpring(py, { stiffness: 110, damping: 18 })
  const rotX = useTransform(sy, [-0.5, 0.5], [10, -10])
  const rotY = useTransform(sx, [-0.5, 0.5], [-14, 14])
  const orbX = useTransform(sx, [-0.5, 0.5], [-28, 28])
  const orbY = useTransform(sy, [-0.5, 0.5], [-20, 20])
  const orb2X = useTransform(orbX, (v) => -v)
  const sweepGlow = useMotionTemplate`drop-shadow(0 0 6px color-mix(in srgb, var(--acc2) 70%, transparent))`

  const onHeroMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width - 0.5)
    py.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onHeroLeave = () => {
    px.set(0)
    py.set(0)
  }

  const funnelRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: funnelRef, offset: ['start 0.9', 'end 0.6'] })
  const funnelFill = useSpring(scrollYProgress, { stiffness: 80, damping: 26 })
  const funnelMarkerY = useTransform(funnelFill, [0, 1], ['2%', '92%'])

  const gx = useMotionValue(50)
  const gy = useMotionValue(40)
  const ctaGlow = useMotionTemplate`radial-gradient(440px circle at ${gx}% ${gy}%, color-mix(in srgb, var(--acc) 34%, transparent), transparent 70%)`
  const onCtaMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    gx.set(((e.clientX - r.left) / r.width) * 100)
    gy.set(((e.clientY - r.top) / r.height) * 100)
  }

  return (
    <div className={styles.page}>
      {/* ───────────── HERO — radar / bullseye targeting scene ───────────── */}
      <header className={styles.hero} onMouseMove={onHeroMove} onMouseLeave={onHeroLeave}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroGrid} aria-hidden="true" />
        <motion.div className={styles.orb1} style={{ x: orbX, y: orbY }} aria-hidden="true" />
        <motion.div className={styles.orb2} style={{ x: orb2X, y: orbY }} aria-hidden="true" />

        <div className={styles.heroInner}>
          <motion.div className={styles.heroLeft} initial="hidden" animate="show" variants={fadeUp}>
            <motion.span className={styles.tagPill} variants={fadeUp} custom={0}>
              <span className={styles.tagDot} />
              Dijital Reklam Yönetimi
            </motion.span>
            <motion.h1 className={styles.title} variants={fadeUp} custom={1}>
              Reklamlarla
              <br />
              <span className={styles.titleHi}>Doğru Kitleye</span>
            </motion.h1>
            <motion.p className={styles.desc} variants={fadeUp} custom={2}>
              Google Ads ve Meta&apos;da bütçenizi en verimli noktaya taşıyan, dönüşüm odaklı kampanyalar planlıyor ve yönetiyoruz. Doğru kişiye, doğru zamanda, doğru mesajla ulaşın.
            </motion.p>
            <motion.div className={styles.ctaRow} variants={fadeUp} custom={3}>
              <a href="/#iletisim" className="btn btn-fill">{arrow} Ücretsiz Reklam Denetimi</a>
              <a href="/" className={styles.btnGhost}>Anasayfa</a>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.scene}
            style={{ rotateX: reduce ? 0 : rotX, rotateY: reduce ? 0 : rotY, transformPerspective: 1100 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          >
            <div className={styles.radar} aria-hidden="true">
              <span className={styles.ring1} />
              <span className={styles.ring2} />
              <span className={styles.ring3} />
              <span className={styles.cross} />
              <motion.span className={styles.sweep} style={{ filter: reduce ? 'none' : sweepGlow }} />
              <span className={styles.bull} />
            </div>

            <div className={styles.adCard} aria-hidden="true">
              <div className={styles.adBar}>
                <span className={styles.adTag}>Reklam</span>
                <span className={styles.adDots}><i /><i /><i /></span>
              </div>
              <div className={styles.adImg} />
              <div className={styles.adLines}>
                <span className={styles.adLineWide} />
                <span className={styles.adLine} />
              </div>
              <div className={styles.adBtn} />
            </div>

            <div className={styles.floatChip} aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></svg>
              Doğru Kitle
            </div>
            <div className={styles.floatChip2} aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
              Dönüşüm
            </div>
          </motion.div>
        </div>
      </header>

      {/* ───────────── PLATFORMS — dual panel ───────────── */}
      <section className={styles.platSection} aria-label="Reklam platformları">
        <div className={styles.platGrid}>
          {PLATFORMS.map((p, i) => (
            <motion.article
              key={p.name}
              className={styles.platCard}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              custom={i}
              whileHover={reduce ? undefined : { y: -6 }}
            >
              <div className={styles.platGlyph}>{p.icon}</div>
              <div className={styles.platBody}>
                <span className={styles.platEyebrow}>Platform 0{i + 1}</span>
                <h2 className={styles.platName}>{p.name}</h2>
                <p className={styles.platRole}>{p.role}</p>
              </div>
              <span className={styles.platCorner} aria-hidden="true" />
            </motion.article>
          ))}
        </div>
      </section>

      {/* ───────────── PILLARS — scope motif ───────────── */}
      <section className={styles.pillarSection}>
        <motion.div className={styles.secHead} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>Yaklaşımımız</motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>Neden Wooji ile Reklam?</motion.h2>
        </motion.div>
        <div className={styles.pillarGrid}>
          {PILLARS.map((p, i) => (
            <motion.article
              key={p.t}
              className={styles.pillar}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              custom={i}
              whileHover={reduce ? undefined : { y: -6 }}
            >
              <div className={styles.scopeWrap}>
                <span className={styles.scopeRing} aria-hidden="true" />
                <span className={styles.scopeReticle} aria-hidden="true" />
                <div className={styles.pillarIcon}>{p.icon}</div>
              </div>
              <h3 className={styles.pillarTitle}>{p.t}</h3>
              <p className={styles.pillarDesc}>{p.d}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ───────────── FEATURES + FUNNEL ───────────── */}
      <section className={styles.featSection}>
        <motion.div className={styles.secHead} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>Kapsam</motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>Kampanya Araçlarımız</motion.h2>
          <motion.p className={styles.secSub} variants={fadeUp} custom={2}>Dönüşüm getiren her reklam bileşenini tek çatı altında yönetiyoruz.</motion.p>
        </motion.div>

        <div className={styles.featLayout}>
          {/* targeted feature cards */}
          <div className={styles.featCards}>
            {FEATURES.map((f, i) => (
              <motion.article
                key={f.title}
                className={styles.featCard}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
                custom={i}
                whileHover={reduce ? undefined : { y: -5 }}
              >
                <span className={styles.featTick} aria-hidden="true" />
                <div className={styles.featIcon}>{f.icon}</div>
                <h3 className={styles.featTitle}>{f.title}</h3>
                <p className={styles.featDesc}>{f.desc}</p>
              </motion.article>
            ))}
          </div>

          {/* conversion funnel */}
          <motion.aside
            ref={funnelRef}
            className={styles.funnel}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className={styles.funnelTag}>Dönüşüm Hunisi</span>
            <div className={styles.funnelStage}>
              {!reduce && <motion.span className={styles.funnelMarker} style={{ top: funnelMarkerY }} aria-hidden="true" />}
              {FUNNEL.map((s, i) => (
                <motion.div
                  key={s.label}
                  className={styles.funnelRow}
                  style={{ width: `${s.width}%` }}
                  initial={{ opacity: 0, scaleX: reduce ? 1 : 0.7 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.55, delay: 0.15 + i * 0.12, ease: EASE }}
                >
                  <span className={styles.funnelLabel}>{s.label}</span>
                  <span className={styles.funnelCaret} aria-hidden="true" />
                </motion.div>
              ))}
            </div>
          </motion.aside>
        </div>

        {/* end-to-end management big card */}
        <motion.div
          className={styles.bigCard}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          whileHover={reduce ? undefined : { y: -6 }}
        >
          <div className={styles.bigGlow} aria-hidden="true" />
          <div className={styles.bigHead}>
            <div className={styles.bigIcon}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
            </div>
            <div>
              <h3 className={styles.bigTitle}>Uçtan Uca Kampanya Yönetimi</h3>
              <p className={styles.bigDesc}>Strateji, kurulum, kreatif ve optimizasyon — reklamın tüm yaşam döngüsünü sizin için yönetiriz.</p>
            </div>
          </div>
          <ul className={styles.checkList}>
            {CHECKLIST.map((c, i) => (
              <motion.li
                key={c}
                className={styles.checkItem}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.08, ease: EASE }}
              >
                <span className={styles.checkBox}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                </span>
                {c}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* ───────────── PROCESS — horizontal pipeline ───────────── */}
      <section className={styles.procSection}>
        <motion.div className={styles.secHead} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>Akış</motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>Kampanya Yaşam Döngüsü</motion.h2>
        </motion.div>

        <div className={styles.pipeline}>
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              className={styles.pipeNode}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
            >
              <div className={styles.pipeBadge}>
                <span className={styles.pipeNum}>{s.n}</span>
              </div>
              <div className={styles.pipeCard}>
                <h3 className={styles.pipeTitle}>{s.t}</h3>
                <p className={styles.pipeDesc}>{s.d}</p>
              </div>
              {i < STEPS.length - 1 && (
                <span className={styles.pipeArrow} aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────────── KEYWORDS marquee ───────────── */}
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...KEYWORDS, ...KEYWORDS].map((k, i) => (
            <span key={i} className={styles.kw}>
              <span className={styles.kwDot} />
              {k}
            </span>
          ))}
        </div>
      </div>

      {/* ───────────── FAQ ───────────── */}
      <section className={styles.faqSection}>
        <motion.div className={styles.secHead} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>Sorular</motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>Reklam Hakkında</motion.h2>
        </motion.div>
        <div className={styles.faqList}>
          {FAQS.map((f, i) => {
            const open = openFaq === i
            return (
              <motion.div
                key={f.q}
                className={`${styles.faqItem} ${open ? styles.faqItemOpen : ''}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
              >
                <button
                  type="button"
                  className={styles.faqQ}
                  aria-expanded={open}
                  onClick={() => setOpenFaq(open ? null : i)}
                >
                  <span className={styles.faqQText}>{f.q}</span>
                  <motion.span className={styles.faqIco} animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3, ease: EASE }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      className={styles.faqA}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.34, ease: EASE }}
                    >
                      <p className={styles.faqAText}>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ───────────── CTA band ───────────── */}
      <section className={styles.ctaSection}>
        <motion.div
          className={styles.ctaCard}
          onMouseMove={onCtaMove}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <motion.div className={styles.ctaGlow} style={{ background: ctaGlow }} aria-hidden="true" />
          <span className={styles.secTag}>Hazır mısınız?</span>
          <h2 className={styles.ctaTitle}>Bütçenizi <span className={styles.titleHi}>Boşa Harcamayın</span></h2>
          <p className={styles.ctaDesc}>Ücretsiz reklam denetimi için iletişime geçin. Mevcut kampanyalarınızdaki kayıpları birlikte tespit edelim.</p>
          <a href="/#iletisim" className="btn btn-fill">{arrow} Ücretsiz Reklam Denetimi Al</a>
        </motion.div>
      </section>
    </div>
  )
}
