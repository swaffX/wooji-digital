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
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: EASE } }),
}

const VIEWPORT = { once: true, amount: 0.25 } as const

const arrow = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const iconLineChart = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 3v18h18" /><path d="m7 14 3-3 3 2 5-6" />
  </svg>
)
const iconDashboard = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
  </svg>
)
const iconCheckCircle = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)
const iconEye = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" />
  </svg>
)
const iconTrendingUp = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
  </svg>
)

type Widget = {
  id: string
  kind: 'sparkline' | 'gauge' | 'bars' | 'list' | 'stat'
  code: string
  title: string
  desc: string
  icon: React.ReactNode
}

const WIDGETS: Widget[] = [
  {
    id: 'ga4',
    kind: 'sparkline',
    code: 'MOD.01',
    title: 'GA4 Kurulumu',
    desc: 'Google Analytics 4 yapılandırması, event tracking ve dönüşüm hedeflerinin eksiksiz kurulumu.',
    icon: iconLineChart,
  },
  {
    id: 'dashboard',
    kind: 'gauge',
    code: 'MOD.02',
    title: 'Dashboard Kurulumu',
    desc: "Looker Studio veya Power BI'da gerçek zamanlı, sade ve özelleştirilmiş performans panoları.",
    icon: iconDashboard,
  },
  {
    id: 'conversion',
    kind: 'stat',
    code: 'MOD.03',
    title: 'Dönüşüm İzleme',
    desc: 'Form, satış, arama ve tüm önemli aksiyonların doğru ve eksiksiz takibi.',
    icon: iconCheckCircle,
  },
  {
    id: 'behavior',
    kind: 'bars',
    code: 'MOD.04',
    title: 'Davranış Analizi',
    desc: 'Heatmap, oturum kaydı ve A/B test verilerini okuyarak UX iyileştirmeleri belirleriz.',
    icon: iconEye,
  },
  {
    id: 'consulting',
    kind: 'list',
    code: 'MOD.05',
    title: 'Büyüme Danışmanlığı',
    desc: 'Aylık strateji toplantıları, öncelikli fırsatların tespiti ve net bir eylem planı.',
    icon: iconTrendingUp,
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
    code: 'P/01',
    t: 'Doğru Kurulum',
    d: 'Tüm dönüşümlerin eksiksiz ve doğru ölçüldüğü, güvenilir bir veri altyapısı kurarız.',
    icon: iconCheckCircle,
  },
  {
    code: 'P/02',
    t: 'Anlaşılır Raporlama',
    d: 'Karmaşık veriyi, herkesin anlayabileceği net ve aksiyona dönük içgörülere çeviririz.',
    icon: iconDashboard,
  },
  {
    code: 'P/03',
    t: 'Aksiyona Dönük',
    d: 'Rapor bırakıp gitmeyiz; veriye dayanarak bir sonraki adımın ne olması gerektiğini söyleriz.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
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
  { q: 'GA4 geçişinde yardımcı olur musunuz?', a: 'Evet. GA4 kurulumu, event ve hedeflerin yeniden yapılandırılması dahil tam bir geçiş hizmeti sunuyoruz.' },
  { q: 'Hangi raporlama araçlarını kullanıyorsunuz?', a: 'Öncelikli olarak Looker Studio kullanıyoruz; talebinize göre Power BI veya Tableau entegrasyonu da yapıyoruz.' },
  { q: 'Veri gizliliğine uyum nasıl sağlanıyor?', a: 'KVKK ve GDPR uyumlu kurulum yapıyoruz: IP anonimleştirme, çerez onayı entegrasyonu ve veri saklama süresi ayarları dahil.' },
  { q: 'Sadece rapor mu, strateji de mi?', a: 'İkisi birlikte. Raporların yanı sıra verinin ne anlama geldiğini yorumlayan ve aksiyon planı sunan danışmanlık veriyoruz.' },
]

const BAR_WIDTHS = ['62%', '84%', '47%', '71%']
const SPARK_BARS = [38, 52, 44, 66, 58, 78, 70, 92]
const LIST_ROWS = [72, 88, 56]

function WidgetVisual({ kind, reduce }: { kind: Widget['kind']; reduce: boolean | null }) {
  if (kind === 'sparkline') {
    return (
      <svg className={styles.wSpark} viewBox="0 0 120 40" fill="none" aria-hidden="true">
        <motion.path
          d="M2 32 L18 24 L34 28 L50 14 L66 19 L82 9 L98 13 L118 3"
          stroke="var(--acc2)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 1.1, ease: EASE }}
        />
        <motion.circle cx="118" cy="3" r="3" fill="var(--acc2)" className={styles.wSparkDot}
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.3, delay: 1 }}
        />
      </svg>
    )
  }
  if (kind === 'gauge') {
    return (
      <svg className={styles.wGauge} viewBox="0 0 80 80" fill="none" aria-hidden="true">
        <circle cx="40" cy="40" r="32" stroke="var(--fill2)" strokeWidth="7" />
        <motion.circle
          cx="40" cy="40" r="32"
          stroke="var(--acc)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray="201"
          transform="rotate(-90 40 40)"
          initial={reduce ? { strokeDashoffset: 60 } : { strokeDashoffset: 201 }}
          whileInView={{ strokeDashoffset: 60 }}
          viewport={VIEWPORT}
          transition={{ duration: 1.2, ease: EASE }}
        />
        <circle cx="40" cy="40" r="4" fill="var(--acc2)" />
      </svg>
    )
  }
  if (kind === 'bars') {
    return (
      <div className={styles.wBars} aria-hidden="true">
        {SPARK_BARS.map((h, i) => (
          <motion.span
            key={i}
            className={styles.wBar}
            initial={reduce ? { height: `${h}%` } : { height: '8%' }}
            whileInView={{ height: `${h}%` }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
          />
        ))}
      </div>
    )
  }
  if (kind === 'list') {
    return (
      <div className={styles.wList} aria-hidden="true">
        {LIST_ROWS.map((w, i) => (
          <div className={styles.wListRow} key={i}>
            <span className={styles.wListDot} />
            <motion.span
              className={styles.wListBar}
              initial={reduce ? { width: `${w}%` } : { width: '0%' }}
              whileInView={{ width: `${w}%` }}
              viewport={VIEWPORT}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: EASE }}
            />
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className={styles.wStat} aria-hidden="true">
      <span className={styles.wStatPulse} />
      <div className={styles.wStatBars}>
        <span style={{ width: '90%' }} />
        <span style={{ width: '64%' }} />
      </div>
    </div>
  )
}

export default function AnalitikContent() {
  const reduce = useReducedMotion()
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, { stiffness: 110, damping: 18 })
  const sy = useSpring(py, { stiffness: 110, damping: 18 })
  const rotX = useTransform(sy, [-0.5, 0.5], [8, -8])
  const rotY = useTransform(sx, [-0.5, 0.5], [-12, 12])
  const chipX = useTransform(sx, [-0.5, 0.5], [-22, 22])
  const chipY = useTransform(sy, [-0.5, 0.5], [-16, 16])
  const chip2X = useTransform(chipX, (v) => -v)

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

  const pipeRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: pipeRef, offset: ['start 0.8', 'end 0.6'] })
  const flowScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })

  const gx = useMotionValue(50)
  const gy = useMotionValue(40)
  const ctaGlow = useMotionTemplate`radial-gradient(440px circle at ${gx}% ${gy}%, color-mix(in srgb, var(--acc) 30%, transparent), transparent 70%)`
  const onCtaMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    gx.set(((e.clientX - r.left) / r.width) * 100)
    gy.set(((e.clientY - r.top) / r.height) * 100)
  }

  return (
    <div className={styles.page}>
      {/* ───────────── HERO — analytics console ───────────── */}
      <header className={styles.hero} onMouseMove={onHeroMove} onMouseLeave={onHeroLeave}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroGrid} aria-hidden="true" />

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

          {/* 3D analytics console */}
          <div className={styles.sceneWrap}>
            <motion.div
              className={styles.scene}
              style={{ rotateX: reduce ? 0 : rotX, rotateY: reduce ? 0 : rotY, transformPerspective: 1100 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            >
              <div className={styles.console}>
                <div className={styles.consoleBar}>
                  <div className={styles.consoleDots}><span /><span /><span /></div>
                  <span className={styles.consoleTitle}>analytics.sh</span>
                </div>
                <div className={styles.consoleBody}>
                  <div className={styles.consoleMeta} aria-hidden="true">
                    <span className={styles.metaLabel}>live</span>
                    <span className={styles.metaSep}>/</span>
                    <span className={styles.metaLabel}>realtime stream</span>
                  </div>
                  <svg className={styles.chart} viewBox="0 0 300 130" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <line x1="0" y1="40" x2="300" y2="40" className={styles.chartGrid} />
                    <line x1="0" y1="75" x2="300" y2="75" className={styles.chartGrid} />
                    <line x1="0" y1="110" x2="300" y2="110" className={styles.chartGrid} />
                    <motion.path
                      d="M0 110 L40 95 L80 100 L120 70 L160 78 L200 45 L240 52 L280 25 L300 18 L300 130 L0 130 Z"
                      fill="url(#anArea)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
                    />
                    <motion.path
                      d="M0 110 L40 95 L80 100 L120 70 L160 78 L200 45 L240 52 L280 25 L300 18"
                      stroke="var(--acc2)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.6, ease: EASE }}
                    />
                    <motion.circle
                      cx="300" cy="18" r="4.5" className={styles.chartDot}
                      initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1.5, ease: EASE }}
                    />
                    <defs>
                      <linearGradient id="anArea" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--acc2)" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="var(--acc2)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className={styles.dataRows} aria-hidden="true">
                    {BAR_WIDTHS.map((w, i) => (
                      <div className={styles.dataRow} key={i}>
                        <span className={styles.dataDot} />
                        <motion.span
                          className={styles.dataBar}
                          initial={reduce ? { width: w } : { width: '0%' }}
                          animate={{ width: w }}
                          transition={{ duration: 0.8, delay: 0.6 + i * 0.12, ease: EASE }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <motion.div className={styles.chip} style={{ x: chipX, y: chipY }} aria-hidden="true">
                <span className={styles.chipInner}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /></svg>
                  Veri
                </span>
              </motion.div>
              <motion.div className={styles.chip2} style={{ x: chip2X, y: chipY }} aria-hidden="true">
                <span className={styles.chipInner}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
                  İçgörü
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className={styles.heroTicker} aria-hidden="true">
          <span className={styles.tickerStatus} />
          <span>sistem aktif</span>
          <span className={styles.tickerSep}>::</span>
          <span>4 modül izleniyor</span>
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

      {/* ───────────── PILLARS — instrument cards ───────────── */}
      <section className={styles.pillarSection}>
        <motion.div className={styles.secHead} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>Yaklaşımımız</motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>Neden Wooji ile Analitik?</motion.h2>
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
              <span className={styles.pillarStatus} aria-hidden="true" />
              <div className={styles.pillarTop}>
                <div className={styles.pillarIcon}>{p.icon}</div>
                <span className={styles.pillarCode}>{p.code}</span>
              </div>
              <h3 className={styles.pillarTitle}>{p.t}</h3>
              <p className={styles.pillarDesc}>{p.d}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ───────────── FEATURES — dashboard widget grid ───────────── */}
      <section className={styles.featSection}>
        <motion.div className={styles.secHead} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>Modüller</motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>Servis Kapsamı</motion.h2>
          <motion.p className={styles.secSub} variants={fadeUp} custom={2}>Kurulumdan stratejiye, verinin tüm yolculuğunu sizin için yönetiyoruz.</motion.p>
        </motion.div>

        <div className={styles.dashGrid}>
          {/* setup panel — big widget */}
          <motion.div
            className={styles.setupPanel}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            whileHover={reduce ? undefined : { y: -6 }}
          >
            <div className={styles.setupHead}>
              <span className={styles.setupCode}>SETUP // 00</span>
              <span className={styles.setupBadge}>uçtan uca</span>
            </div>
            <h3 className={styles.setupTitle}>Uçtan Uca Ölçümleme</h3>
            <p className={styles.setupDesc}>Kurulumdan dashboard&apos;a, davranış analizinden stratejiye kadar verinin tüm döngüsünü kurarız.</p>
            <ul className={styles.checkList}>
              {CHECKLIST.map((c, i) => (
                <motion.li
                  key={c}
                  className={styles.checkItem}
                  initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.09, ease: EASE }}
                >
                  <span className={styles.checkBox}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <span className={styles.checkText}>{c}</span>
                  <span className={styles.checkPort} aria-hidden="true" />
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {WIDGETS.map((w, i) => (
            <motion.article
              key={w.id}
              className={`${styles.widget} ${styles[`w_${w.kind}`]}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              custom={i}
              whileHover={reduce ? undefined : { y: -6 }}
            >
              <div className={styles.widgetHead}>
                <span className={styles.widgetIcon}>{w.icon}</span>
                <span className={styles.widgetCode}>{w.code}</span>
              </div>
              <h3 className={styles.widgetTitle}>{w.title}</h3>
              <p className={styles.widgetDesc}>{w.desc}</p>
              <div className={styles.widgetVis}>
                <WidgetVisual kind={w.kind} reduce={reduce} />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ───────────── PROCESS — data pipeline ───────────── */}
      <section className={styles.procSection}>
        <motion.div className={styles.secHead} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>Pipeline</motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>Çalışma Akışı</motion.h2>
        </motion.div>

        <div className={styles.pipe} ref={pipeRef}>
          <div className={styles.pipeLine} aria-hidden="true">
            <motion.div className={styles.pipeFill} style={{ scaleX: reduce ? 1 : flowScale }} />
          </div>
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              className={styles.node}
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
            >
              <div className={styles.nodeHead}>
                <span className={styles.nodeDot}><span className={styles.nodePing} aria-hidden="true" /></span>
                <span className={styles.nodeNum}>{s.n}</span>
              </div>
              <h3 className={styles.nodeTitle}>{s.t}</h3>
              <p className={styles.nodeDesc}>{s.d}</p>
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
              <motion.div
                key={f.q}
                className={`${styles.faqItem} ${open ? styles.faqItemOpen : ''}`}
                initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
              >
                <button type="button" className={styles.faqQ} aria-expanded={open} onClick={() => setOpenFaq(open ? null : i)}>
                  <span className={styles.faqIndex} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
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
        <motion.div
          className={styles.ctaCard}
          onMouseMove={onCtaMove}
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <motion.div className={styles.ctaGlow} style={{ background: ctaGlow }} aria-hidden="true" />
          <div className={styles.ctaGrid} aria-hidden="true" />
          <span className={styles.secTag}>Hazır mısınız?</span>
          <h2 className={styles.ctaTitle}>Veriyle <span className={styles.titleHi}>Büyüyün</span></h2>
          <p className={styles.ctaDesc}>Ücretsiz analitik denetimi için iletişime geçin. Mevcut takip altyapınızdaki kayıpları birlikte tespit edelim.</p>
          <a href="/#iletisim" className="btn btn-fill">{arrow} Ücretsiz Analitik Denetimi</a>
        </motion.div>
      </section>
    </div>
  )
}
