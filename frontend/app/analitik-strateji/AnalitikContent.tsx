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
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.08, ease: EASE } }),
}

const VIEWPORT = { once: true, amount: 0.2 } as const

const arrow = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const FEATURES = [
  {
    title: 'GA4 Kurulumu',
    desc: 'Google Analytics 4 yapılandırması, event tracking ve dönüşüm hedeflerinin eksiksiz kurulumu.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
  },
  {
    title: 'Dashboard Kurulumu',
    desc: "Looker Studio veya Power BI'da gerçek zamanlı, sade ve özelleştirilmiş performans panoları.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>,
  },
  {
    title: 'Dönüşüm İzleme',
    desc: 'Form, satış, arama ve tüm önemli aksiyonların doğru ve eksiksiz takibi.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
  },
  {
    title: 'Davranış Analizi',
    desc: 'Heatmap, oturum kaydı ve A/B test verilerini okuyarak UX iyileştirmeleri belirleriz.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>,
  },
  {
    title: 'Büyüme Danışmanlığı',
    desc: 'Aylık strateji toplantıları, öncelikli fırsatların tespiti ve net bir eylem planı.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M3 3v18h18" /><path d="m7 14 4-4 3 3 5-6" /></svg>,
  },
]

const CHECKLIST = [
  'GA4 & Tag Manager kurulumu',
  'Dönüşüm & event izleme',
  'Looker Studio dashboard',
  'Kullanıcı davranış analizi',
  'Aylık strateji toplantısı',
]

const PILLARS = [
  {
    t: 'Doğru Kurulum',
    d: 'Tüm dönüşümlerin eksiksiz ve doğru ölçüldüğü, güvenilir bir veri altyapısı kurarız.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
  },
  {
    t: 'Anlaşılır Raporlama',
    d: 'Karmaşık veriyi, herkesin anlayabileceği net ve aksiyona dönük içgörülere çeviririz.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>,
  },
  {
    t: 'Aksiyona Dönük',
    d: 'Rapor bırakıp gitmeyiz; veriye dayanarak bir sonraki adımın ne olması gerektiğini söyleriz.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
  },
]

const STEPS = [
  { n: '01', t: 'Denetim', d: 'Mevcut analitik kurulumu, takip edilemeyen dönüşümler ve veri boşlukları tespit edilir.' },
  { n: '02', t: 'Kurulum', d: 'GA4, Tag Manager ve dashboard yapılandırması doğru şekilde kurulur.' },
  { n: '03', t: 'İzleme', d: 'Haftalık veri takibi, anomali tespiti ve hızlı uyarılar aktif hale getirilir.' },
  { n: '04', t: 'Strateji', d: 'Aylık raporlama ve stratejik toplantıyla büyüme kararları veriye dayandırılır.' },
]

const KEYWORDS = ['GA4', 'Tag Manager', 'Looker Studio', 'Dönüşüm İzleme', 'Search Console', 'Heatmap', 'A/B Test', 'Dashboard', 'KPI', 'Veri Analizi']

const FAQS = [
  { q: 'GA4 geçişinde yardımcı olur musunuz?', a: "Evet. GA4 kurulumu, event ve hedeflerin yeniden yapılandırılması dahil tam bir geçiş hizmeti sunuyoruz." },
  { q: 'Hangi raporlama araçlarını kullanıyorsunuz?', a: 'Öncelikli olarak Looker Studio kullanıyoruz; talebinize göre Power BI veya Tableau entegrasyonu da yapıyoruz.' },
  { q: 'Veri gizliliğine uyum nasıl sağlanıyor?', a: 'KVKK ve GDPR uyumlu kurulum yapıyoruz: IP anonimleştirme, çerez onayı entegrasyonu ve veri saklama süresi ayarları dahil.' },
  { q: 'Sadece rapor mu, strateji de mi?', a: 'İkisi birlikte. Raporların yanı sıra verinin ne anlama geldiğini yorumlayan ve aksiyon planı sunan danışmanlık veriyoruz.' },
]

export default function AnalitikContent() {
  const reduce = useReducedMotion()
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, { stiffness: 110, damping: 18 })
  const sy = useSpring(py, { stiffness: 110, damping: 18 })
  const rotX = useTransform(sy, [-0.5, 0.5], [9, -9])
  const rotY = useTransform(sx, [-0.5, 0.5], [-13, 13])
  const orbX = useTransform(sx, [-0.5, 0.5], [-26, 26])
  const orbY = useTransform(sy, [-0.5, 0.5], [-18, 18])
  const orb2X = useTransform(orbX, (v) => -v)

  const onHeroMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width - 0.5)
    py.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onHeroLeave = () => { px.set(0); py.set(0) }

  const timelineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start 0.85', 'end 0.55'] })
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })

  const gx = useMotionValue(50)
  const gy = useMotionValue(40)
  const ctaGlow = useMotionTemplate`radial-gradient(440px circle at ${gx}% ${gy}%, rgba(13,140,77,0.34), transparent 70%)`
  const onCtaMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    gx.set(((e.clientX - r.left) / r.width) * 100)
    gy.set(((e.clientY - r.top) / r.height) * 100)
  }

  return (
    <div className={styles.page}>
      {/* ───────────── HERO ───────────── */}
      <header className={styles.hero} onMouseMove={onHeroMove} onMouseLeave={onHeroLeave}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroGrid} aria-hidden="true" />
        <motion.div className={styles.orb1} style={{ x: orbX, y: orbY }} aria-hidden="true" />
        <motion.div className={styles.orb2} style={{ x: orb2X, y: orbY }} aria-hidden="true" />

        <div className={styles.heroInner}>
          <motion.div className={styles.heroLeft} initial="hidden" animate="show" variants={fadeUp}>
            <motion.span className={styles.tagPill} variants={fadeUp} custom={0}>
              <span className={styles.tagDot} />
              Analitik &amp; Strateji
            </motion.span>
            <motion.h1 className={styles.title} variants={fadeUp} custom={1}>
              Veriye Dayalı
              <br />
              <span className={styles.titleHi}>Büyüme</span>
            </motion.h1>
            <motion.p className={styles.desc} variants={fadeUp} custom={2}>
              Tahminlere değil verilere dayanan kararlarla büyüyün. Kapsamlı analitik kurulumu, anlaşılır raporlama ve dijital büyüme danışmanlığı sunuyoruz.
            </motion.p>
            <motion.div className={styles.ctaRow} variants={fadeUp} custom={3}>
              <a href="/#iletisim" className="btn btn-fill">{arrow} Ücretsiz Analitik Denetimi</a>
              <a href="/" className={styles.btnGhost}>Anasayfa</a>
            </motion.div>
          </motion.div>

          {/* 3D terminal scene with abstract chart — no numbers */}
          <motion.div
            className={styles.scene}
            style={{ rotateX: reduce ? 0 : rotX, rotateY: reduce ? 0 : rotY, transformPerspective: 1000 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          >
            <div className={styles.terminal} aria-hidden="true">
              <div className={styles.termBar}>
                <div className={styles.termDots}><span /><span /><span /></div>
                <span className={styles.termTitle}>analytics.sh</span>
              </div>
              <div className={styles.termBody}>
                <svg className={styles.chart} viewBox="0 0 300 130" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <line x1="0" y1="40" x2="300" y2="40" stroke="rgba(34,197,94,0.12)" strokeWidth="1" />
                  <line x1="0" y1="75" x2="300" y2="75" stroke="rgba(34,197,94,0.12)" strokeWidth="1" />
                  <line x1="0" y1="110" x2="300" y2="110" stroke="rgba(34,197,94,0.12)" strokeWidth="1" />
                  <motion.path
                    d="M0 110 L40 95 L80 100 L120 70 L160 78 L200 45 L240 52 L280 25 L300 18 L300 130 L0 130 Z"
                    fill="url(#anGrad)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1, ease: EASE }}
                  />
                  <motion.path
                    d="M0 110 L40 95 L80 100 L120 70 L160 78 L200 45 L240 52 L280 25 L300 18"
                    stroke="#22c55e"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, ease: EASE }}
                  />
                  <motion.circle
                    cx="300" cy="18" r="4" fill="#4ade80"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 1.5, ease: EASE }}
                  />
                  <defs>
                    <linearGradient id="anGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(34,197,94,0.28)" />
                      <stop offset="100%" stopColor="rgba(34,197,94,0)" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className={styles.dataRows}>
                  <div className={styles.dataRow}><span className={styles.dataDot} /><span className={styles.dataBar} style={{ width: '70%' }} /></div>
                  <div className={styles.dataRow}><span className={styles.dataDot} /><span className={styles.dataBar} style={{ width: '88%' }} /></div>
                  <div className={styles.dataRow}><span className={styles.dataDot} /><span className={styles.dataBar} style={{ width: '54%' }} /></div>
                </div>
              </div>
            </div>

            <div className={styles.floatChip} style={{ transform: 'translateZ(88px)' }} aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /></svg>
              Veri
            </div>
            <div className={styles.floatChip2} style={{ transform: 'translateZ(72px)' }} aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
              İçgörü
            </div>
          </motion.div>
        </div>
      </header>

      {/* ───────────── MARQUEE ───────────── */}
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...KEYWORDS, ...KEYWORDS].map((k, i) => (
            <span key={i} className={styles.kw}><span className={styles.kwDot} />{k}</span>
          ))}
        </div>
      </div>

      {/* ───────────── PILLARS ───────────── */}
      <section className={styles.pillarSection}>
        <motion.div className={styles.secHead} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>Yaklaşımımız</motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>Neden Wooji ile Analitik?</motion.h2>
        </motion.div>
        <div className={styles.pillarGrid}>
          {PILLARS.map((p, i) => (
            <motion.article key={p.t} className={styles.pillar} variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT} custom={i} whileHover={reduce ? undefined : { y: -6 }}>
              <div className={styles.pillarIcon}>{p.icon}</div>
              <h3 className={styles.pillarTitle}>{p.t}</h3>
              <p className={styles.pillarDesc}>{p.d}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ───────────── FEATURES — bento ───────────── */}
      <section className={styles.featSection}>
        <motion.div className={styles.secHead} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>Modüller</motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>Servis Kapsamı</motion.h2>
          <motion.p className={styles.secSub} variants={fadeUp} custom={2}>Kurulumdan stratejiye, verinin tüm yolculuğunu sizin için yönetiyoruz.</motion.p>
        </motion.div>

        <div className={styles.bento}>
          <motion.div className={styles.bentoBig} variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT} whileHover={reduce ? undefined : { y: -6 }}>
            <div className={styles.cardIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
            </div>
            <h3 className={styles.cardTitle}>Uçtan Uca Ölçümleme</h3>
            <p className={styles.cardDesc}>Kurulumdan dashboard'a, davranış analizinden stratejiye kadar verinin tüm döngüsünü kurarız.</p>
            <ul className={styles.checkList}>
              {CHECKLIST.map((c, i) => (
                <motion.li key={c} className={styles.checkItem} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={VIEWPORT} transition={{ duration: 0.45, delay: 0.15 + i * 0.1, ease: EASE }}>
                  <span className={styles.checkBox}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg></span>
                  {c}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {FEATURES.map((f, i) => (
            <motion.article key={f.title} className={styles.bentoCard} variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT} custom={i} whileHover={reduce ? undefined : { y: -6, rotateX: 4, rotateY: -4 }}>
              <div className={styles.cardIcon}>{f.icon}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ───────────── PROCESS — timeline ───────────── */}
      <section className={styles.procSection}>
        <motion.div className={styles.secHead} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>Pipeline</motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>Çalışma Akışı</motion.h2>
        </motion.div>

        <div className={styles.timeline} ref={timelineRef}>
          <div className={styles.timelineTrack} aria-hidden="true">
            <motion.div className={styles.timelineFill} style={{ scaleY: reduce ? 1 : lineScale }} />
          </div>
          {STEPS.map((s) => (
            <motion.div key={s.n} className={styles.step} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.55, ease: EASE }}>
              <div className={styles.stepDot}><span className={styles.stepNum}>{s.n}</span></div>
              <div className={styles.stepCard}>
                <h3 className={styles.stepTitle}>{s.t}</h3>
                <p className={styles.stepDesc}>{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────────── FAQ ───────────── */}
      <section className={styles.faqSection}>
        <motion.div className={styles.secHead} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>Sorular</motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>Analitik Hakkında</motion.h2>
        </motion.div>
        <div className={styles.faqList}>
          {FAQS.map((f, i) => {
            const open = openFaq === i
            return (
              <motion.div key={f.q} className={`${styles.faqItem} ${open ? styles.faqItemOpen : ''}`} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}>
                <button type="button" className={styles.faqQ} aria-expanded={open} onClick={() => setOpenFaq(open ? null : i)}>
                  <span className={styles.faqQText}>{f.q}</span>
                  <motion.span className={styles.faqIco} animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3, ease: EASE }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div className={styles.faqA} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.34, ease: EASE }}>
                      <p className={styles.faqAText}>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ───────────── CTA ───────────── */}
      <section className={styles.ctaSection}>
        <motion.div className={styles.ctaCard} onMouseMove={onCtaMove} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.7, ease: EASE }}>
          <motion.div className={styles.ctaGlow} style={{ background: ctaGlow }} aria-hidden="true" />
          <span className={styles.secTag}>Hazır mısınız?</span>
          <h2 className={styles.ctaTitle}>Veriyle <span className={styles.titleHi}>Büyüyün</span></h2>
          <p className={styles.ctaDesc}>Ücretsiz analitik denetimi için iletişime geçin. Mevcut takip altyapınızdaki kayıpları birlikte tespit edelim.</p>
          <a href="/#iletisim" className="btn btn-fill">{arrow} Ücretsiz Analitik Denetimi</a>
        </motion.div>
      </section>
    </div>
  )
}
