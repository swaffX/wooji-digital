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
const VIEWPORT = { once: true, amount: 0.25 } as const

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.08, ease: EASE } }),
}

const arrow = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const IconInstagram = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5.5" />
    <circle cx="12" cy="12" r="4" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)
const IconTikTok = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true">
    <path d="M9 12.5a4 4 0 1 0 4 4V4a5.5 5.5 0 0 0 5.5 5.5" />
  </svg>
)
const IconLinkedIn = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const IconHeart = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)
const IconComment = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
  </svg>
)
const IconShare = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
)

const FEATURES = [
  {
    title: 'İçerik Üretimi',
    desc: 'Reels, carousel ve statik formatlarda markanıza özgü, etkileşim odaklı içerikler tasarlarız.',
    tag: 'içerik',
    span: 'tall' as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5.5" />
        <circle cx="12" cy="12" r="4" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    title: 'İçerik Takvimi',
    desc: 'Haftalık planlama ve onay süreciyle düzenli, stratejik bir yayın akışı yönetiriz.',
    tag: 'planlama',
    span: 'normal' as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2.5" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: 'Topluluk Yönetimi',
    desc: 'Yorum, mesaj ve etiketlere markanızın sesine uygun, hızlı yanıtlar veririz.',
    tag: 'topluluk',
    span: 'wide' as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
      </svg>
    ),
  },
  {
    title: 'Influencer İş Birlikleri',
    desc: 'Sektörünüzdeki doğru isimlerle, ölçülebilir ve markanıza değer katan kampanyalar planlarız.',
    tag: 'iş birliği',
    span: 'normal' as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Sosyal Reklamlar',
    desc: 'Organik büyümeyi hızlandıran, hedefli sosyal medya reklam kampanyaları yönetiriz.',
    tag: 'reklam',
    span: 'normal' as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true">
        <path d="M3 11l16-7v16L3 13z" />
        <path d="M11.5 17.5 11 21H7l-1-6.5" />
        <path d="M19 8.5a3 3 0 0 1 0 6" />
      </svg>
    ),
  },
]

const CHECKLIST = [
  'Reels & carousel üretimi',
  'Aylık içerik takvimi',
  'Topluluk yönetimi',
  'Aylık performans raporu',
  'Sosyal reklam desteği',
]

const PILLARS = [
  {
    t: 'Marka Sesi',
    d: 'Markanızın tonunu ve görsel kimliğini her içerikte tutarlı şekilde yaşatırız.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true">
        <path d="M11 5 6 9H2v6h4l5 4z" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    ),
  },
  {
    t: 'Tutarlı Ritim',
    d: 'Düzenli ve planlı bir yayın takvimiyle markanızı akılda kalıcı kılarız.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 16 14" />
      </svg>
    ),
  },
  {
    t: 'Topluluk Önce',
    d: 'Sayı değil; gerçek etkileşim ve markanızla kurulan bağ üzerine odaklanırız.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

const STEPS = [
  { n: '01', t: 'Marka Sesi', d: 'Markanızın tonu, görsel kimliği ve içerik stratejisi netleştirilir.' },
  { n: '02', t: 'Rakip & Kitle Analizi', d: 'Sektörün en iyi hesapları incelenir; hedef kitlenizin ilgi alanları belirlenir.' },
  { n: '03', t: 'Üretim & Yayın', d: 'Aylık içerik takvimi oluşturulur, onaylanır ve planlı şekilde yayınlanır.' },
  { n: '04', t: 'Büyüme & Optimizasyon', d: 'Etkileşim verileri okunarak en iyi format ve zamanlama sürekli iyileştirilir.' },
]

const KEYWORDS = ['Instagram', 'TikTok', 'LinkedIn', 'Reels', 'İçerik Takvimi', 'Topluluk', 'Influencer', 'Story', 'Carousel', 'Etkileşim']

const FAQS = [
  { q: 'Ayda kaç içerik üretiyorsunuz?', a: 'Paketinize göre planlanır; Reels, carousel, story ve statik gönderilerden dengeli bir karışım oluştururuz.' },
  { q: 'İçerikleri siz mi tasarlıyorsunuz?', a: 'Evet. Fotoğraf çekimi gerektirmeyen tüm grafik, video montaj ve metin içeriklerini ekibimiz üretir.' },
  { q: 'Hesap parolamı vermem gerekir mi?', a: 'Hayır. Meta Business Suite üzerinden ajans erişimi tanımlıyoruz; hesabınızın kontrolü her zaman sizde kalır.' },
  { q: 'Ne kadar sürede sonuç görürüm?', a: 'Etkileşim ve erişim artışı erken dönemde hissedilir; kalıcı topluluk büyümesi tutarlı çalışmayla zamanla oluşur.' },
]

const LOOP_NODES = STEPS.map((s, i) => {
  const angle = -90 + i * 90
  const rad = (angle * Math.PI) / 180
  const cx = 50 + 50 * Math.cos(rad)
  const cy = 50 + 50 * Math.sin(rad)
  return { ...s, cx, cy, angle }
})

export default function SosyalContent() {
  const reduce = useReducedMotion()
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [activeNode, setActiveNode] = useState(0)

  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, { stiffness: 110, damping: 18 })
  const sy = useSpring(py, { stiffness: 110, damping: 18 })
  const rotX = useTransform(sy, [-0.5, 0.5], [10, -10])
  const rotY = useTransform(sx, [-0.5, 0.5], [-14, 14])

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

  const loopRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: loopRef, offset: ['start 0.8', 'end 0.6'] })
  const arcLength = useSpring(scrollYProgress, { stiffness: 80, damping: 26 })
  const dashOffset = useTransform(arcLength, [0, 1], [302, 0])

  const gx = useMotionValue(50)
  const gy = useMotionValue(45)
  const ctaGlow = useMotionTemplate`radial-gradient(460px circle at ${gx}% ${gy}%, color-mix(in srgb, var(--acc) 36%, transparent), transparent 70%)`
  const onCtaMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    gx.set(((e.clientX - r.left) / r.width) * 100)
    gy.set(((e.clientY - r.top) / r.height) * 100)
  }

  return (
    <div className={styles.page}>
      <header className={styles.hero} onMouseMove={onHeroMove} onMouseLeave={onHeroLeave}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.orb1} aria-hidden="true" />
        <div className={styles.orb2} aria-hidden="true" />

        <div className={styles.heroInner}>
          <motion.div className={styles.heroLeft} initial="hidden" animate="show" variants={fadeUp}>
            <motion.span className={styles.tagPill} variants={fadeUp} custom={0}>
              <span className={styles.tagDot} />
              Sosyal Medya Yönetimi
            </motion.span>
            <motion.h1 className={styles.title} variants={fadeUp} custom={1}>
              Büyüyen
              <br />
              <span className={styles.titleHi}>Topluluk</span>
            </motion.h1>
            <motion.p className={styles.desc} variants={fadeUp} custom={2}>
              Instagram, TikTok ve LinkedIn&apos;de tutarlı, etkileşimli ve büyüyen bir marka varlığı inşa
              ediyoruz. İçerikten topluluğa, markanızın sesini güçlendiriyoruz.
            </motion.p>
            <motion.div className={styles.ctaRow} variants={fadeUp} custom={3}>
              <a href="/#iletisim" className="btn btn-fill">
                {arrow} Ücretsiz Sosyal Medya Analizi
              </a>
              <a href="/" className={styles.btnGhost}>
                Anasayfa
              </a>
            </motion.div>
            <motion.div className={styles.platRow} variants={fadeUp} custom={4} aria-hidden="true">
              <span className={styles.platTag}>{IconInstagram} Instagram</span>
              <span className={styles.platTag}>{IconTikTok} TikTok</span>
              <span className={styles.platTag}>{IconLinkedIn} LinkedIn</span>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.scene}
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          >
            <motion.div
              className={styles.sceneStage}
              style={{ rotateX: reduce ? 0 : rotX, rotateY: reduce ? 0 : rotY }}
            >
              <div className={`${styles.platBadge} ${styles.platBadgeA}`} aria-hidden="true">
                {IconInstagram}
                <span>Instagram</span>
              </div>
              <div className={`${styles.platBadge} ${styles.platBadgeB}`} aria-hidden="true">
                {IconTikTok}
                <span>TikTok</span>
              </div>
              <div className={`${styles.platBadge} ${styles.platBadgeC}`} aria-hidden="true">
                {IconLinkedIn}
                <span>LinkedIn</span>
              </div>

              <div className={styles.heart} aria-hidden="true">
                {IconHeart}
              </div>

              <div className={styles.phone} aria-hidden="true">
                <div className={styles.phoneNotch} />
                <div className={styles.phoneScreen}>
                  <div className={styles.feedReel}>
                    {[0, 1].map((dup) => (
                      <div className={styles.feedSet} key={dup}>
                        {[0, 1, 2].map((i) => (
                          <div className={styles.post} key={i}>
                            <div className={styles.postHead}>
                              <div className={styles.postAvatar} />
                              <div className={styles.postMeta}>
                                <span />
                                <span />
                              </div>
                              <div className={styles.postDots}>
                                <i />
                                <i />
                                <i />
                              </div>
                            </div>
                            <div className={`${styles.postImg} ${styles[`postImg${i}` as keyof typeof styles]}`}>
                              <span className={styles.postShine} />
                            </div>
                            <div className={styles.postActions}>
                              <span className={styles.postAct}>{IconHeart}</span>
                              <span className={styles.postAct}>{IconComment}</span>
                              <span className={styles.postAct}>{IconShare}</span>
                            </div>
                            <div className={styles.postLines}>
                              <span />
                              <span />
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </header>

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

      <section className={styles.pillarSection}>
        <motion.div className={styles.secHead} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>
            Yaklaşımımız
          </motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>
            Neden Wooji ile Sosyal?
          </motion.h2>
        </motion.div>
        <div className={styles.pillarGrid}>
          {PILLARS.map((p, i) => (
            <motion.article
              key={p.t}
              className={styles.polaroid}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              custom={i}
            >
              <div className={styles.polaroidPin} aria-hidden="true" />
              <div className={styles.polaroidPhoto}>
                <div className={styles.polaroidIcon}>{p.icon}</div>
              </div>
              <div className={styles.polaroidCaption}>
                <h3 className={styles.polaroidTitle}>{p.t}</h3>
                <p className={styles.polaroidDesc}>{p.d}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className={styles.featSection}>
        <motion.div className={styles.secHead} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>
            Hizmet
          </motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>
            Neler Yönetiyoruz?
          </motion.h2>
          <motion.p className={styles.secSub} variants={fadeUp} custom={2}>
            İçerikten topluluğa, sosyal medyanın tüm parçalarını sizin için yönetiyoruz.
          </motion.p>
        </motion.div>

        <div className={styles.feedGrid}>
          <motion.article
            className={styles.pinned}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            whileHover={reduce ? undefined : { y: -6 }}
          >
            <div className={styles.pinnedHead}>
              <span className={styles.pinnedBadge} aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="m12 17 .01 5M9 3h6l-1 7 3 2v2H7v-2l3-2z" />
                </svg>
                Sabitlenmiş
              </span>
              <h3 className={styles.pinnedTitle}>Uçtan Uca Sosyal Yönetim</h3>
            </div>
            <p className={styles.pinnedDesc}>
              Strateji, içerik, topluluk ve raporlama — markanızın sosyal varlığını baştan sona biz
              üstleniriz.
            </p>
            <ul className={styles.checkList}>
              {CHECKLIST.map((c, i) => (
                <motion.li
                  key={c}
                  className={styles.checkItem}
                  initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.45, delay: 0.18 + i * 0.09, ease: EASE }}
                >
                  <span className={styles.checkBox}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {c}
                </motion.li>
              ))}
            </ul>
          </motion.article>

          {FEATURES.map((f, i) => (
            <motion.article
              key={f.title}
              className={`${styles.post2} ${styles[f.span]}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              custom={i}
              whileHover={reduce ? undefined : { y: -6 }}
            >
              <div className={styles.post2Head}>
                <span className={styles.post2Icon}>{f.icon}</span>
                <span className={styles.post2Tag}>{f.tag}</span>
              </div>
              <div className={styles.post2Body}>
                <h3 className={styles.post2Title}>{f.title}</h3>
                <p className={styles.post2Desc}>{f.desc}</p>
              </div>
              <div className={styles.post2Actions} aria-hidden="true">
                <span>{IconHeart}</span>
                <span>{IconComment}</span>
                <span>{IconShare}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className={styles.procSection}>
        <motion.div className={styles.secHead} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>
            Ritim
          </motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>
            Büyüme Döngüsü
          </motion.h2>
        </motion.div>

        <div className={styles.loopWrap} ref={loopRef}>
          <div className={styles.loopPanel}>
          <div className={styles.loopStage}>
            <svg className={styles.loopSvg} viewBox="0 0 100 100" aria-hidden="true">
              <defs>
                <linearGradient id="loopGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="var(--acc)" />
                  <stop offset="55%" stopColor="var(--acc2)" />
                  <stop offset="100%" stopColor="var(--acc3)" />
                </linearGradient>
              </defs>
              <circle className={styles.loopTrack} cx="50" cy="50" r="48" />
              <motion.circle
                className={styles.loopArc}
                cx="50"
                cy="50"
                r="48"
                style={{ strokeDashoffset: reduce ? 0 : dashOffset }}
              />
            </svg>

            <div className={styles.loopCore}>
              <span className={styles.loopCoreLabel}>Döngü</span>
              <strong className={styles.loopCoreTitle}>{LOOP_NODES[activeNode].t}</strong>
            </div>

            {LOOP_NODES.map((node, i) => {
              const active = activeNode === i
              return (
                <motion.button
                  type="button"
                  key={node.n}
                  className={`${styles.loopNode} ${active ? styles.loopNodeActive : ''}`}
                  style={{ left: `${node.cx}%`, top: `${node.cy}%` }}
                  onMouseEnter={() => setActiveNode(i)}
                  onFocus={() => setActiveNode(i)}
                  onClick={() => setActiveNode(i)}
                  initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.12, ease: EASE }}
                  aria-label={`${node.n} — ${node.t}`}
                >
                  <span className={styles.loopNum}>{node.n}</span>
                </motion.button>
              )
            })}
          </div>

          <div className={styles.loopActive} aria-live="polite">
            <span className={styles.loopActiveNum}>{LOOP_NODES[activeNode].n}</span>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode}
                className={styles.loopActiveBody}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.32, ease: EASE }}
              >
                <strong className={styles.loopActiveTitle}>{LOOP_NODES[activeNode].t}</strong>
                <span className={styles.loopActiveDesc}>{LOOP_NODES[activeNode].d}</span>
              </motion.div>
            </AnimatePresence>
          </div>
          </div>

          <ol className={styles.loopList}>
            {LOOP_NODES.map((node, i) => (
              <li
                key={node.n}
                className={`${styles.loopItem} ${activeNode === i ? styles.loopItemActive : ''}`}
              >
                <button
                  type="button"
                  className={styles.loopItemBtn}
                  onMouseEnter={() => setActiveNode(i)}
                  onFocus={() => setActiveNode(i)}
                  onClick={() => setActiveNode(i)}
                >
                  <span className={styles.loopItemNum}>{node.n}</span>
                  <span className={styles.loopItemBody}>
                    <span className={styles.loopItemTitle}>{node.t}</span>
                    <span className={styles.loopItemDesc}>{node.d}</span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.faqSection}>
        <motion.div className={styles.secHead} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>
            Sorular
          </motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>
            Sosyal Medya Hakkında
          </motion.h2>
        </motion.div>

        <div className={styles.chatList}>
          {FAQS.map((f, i) => {
            const open = openFaq === i
            return (
              <motion.div
                key={f.q}
                className={styles.chatRow}
                initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
              >
                <button
                  type="button"
                  className={`${styles.bubbleOut} ${open ? styles.bubbleOutOpen : ''}`}
                  aria-expanded={open}
                  onClick={() => setOpenFaq(open ? null : i)}
                >
                  <span className={styles.bubbleOutText}>{f.q}</span>
                  <motion.span
                    className={styles.bubbleIco}
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </motion.span>
                </button>
                <div className={`${styles.bubbleInWrap}${open ? ' ' + styles.bubbleInWrapOpen : ''}`}>
                  <div className={styles.bubbleInInner}>
                    <div className={styles.bubbleIn}>
                      <span className={styles.bubbleAvatar} aria-hidden="true">W</span>
                      <p className={styles.bubbleInText}>{f.a}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

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
          <span className={styles.secTag}>Topluluğunuzu Büyütün</span>
          <h2 className={styles.ctaTitle}>
            Sosyal Medyada <span className={styles.titleHi}>Fark Yaratın</span>
          </h2>
          <p className={styles.ctaDesc}>
            Ücretsiz sosyal medya analizi için iletişime geçin. Profillerinizin büyüme potansiyelini
            birlikte keşfedelim.
          </p>
          <a href="/#iletisim" className="btn btn-fill">
            {arrow} Ücretsiz Analiz Al
          </a>
        </motion.div>
      </section>
    </div>
  )
}
