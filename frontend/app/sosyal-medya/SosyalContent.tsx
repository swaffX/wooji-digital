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
    title: 'İçerik Üretimi',
    desc: 'Reels, carousel ve statik formatlarda markanıza özgü, etkileşim odaklı içerikler tasarlarız.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>,
  },
  {
    title: 'İçerik Takvimi',
    desc: 'Haftalık planlama ve onay süreciyle düzenli, stratejik bir yayın akışı yönetiriz.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
  },
  {
    title: 'Topluluk Yönetimi',
    desc: 'Yorum, mesaj ve etiketlere markanızın sesine uygun, hızlı yanıtlar veririz.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>,
  },
  {
    title: 'Influencer İş Birlikleri',
    desc: "Sektörünüzdeki doğru isimlerle, ölçülebilir ve markanıza değer katan kampanyalar planlarız.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
  },
  {
    title: 'Sosyal Reklamlar',
    desc: 'Organik büyümeyi hızlandıran, hedefli sosyal medya reklam kampanyaları yönetiriz.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M11 5L6 9H2v6h4l5 4V5z" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /></svg>,
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
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M11 5L6 9H2v6h4l5 4V5z" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" /></svg>,
  },
  {
    t: 'Tutarlı Ritim',
    d: 'Düzenli ve planlı bir yayın takvimiyle markanızı akılda kalıcı kılarız.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
  },
  {
    t: 'Topluluk Önce',
    d: 'Sayı değil; gerçek etkileşim ve markanızla kurulan bağ üzerine odaklanırız.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
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

export default function SosyalContent() {
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
  const ctaGlow = useMotionTemplate`radial-gradient(440px circle at ${gx}% ${gy}%, rgba(219,39,119,0.34), transparent 70%)`
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
              Sosyal Medya Yönetimi
            </motion.span>
            <motion.h1 className={styles.title} variants={fadeUp} custom={1}>
              Büyüyen
              <br />
              <span className={styles.titleHi}>Topluluk</span>
            </motion.h1>
            <motion.p className={styles.desc} variants={fadeUp} custom={2}>
              Instagram, TikTok ve LinkedIn&apos;de tutarlı, etkileşimli ve büyüyen bir marka varlığı inşa ediyoruz. İçerikten topluluğa, markanızın sesini güçlendiriyoruz.
            </motion.p>
            <motion.div className={styles.ctaRow} variants={fadeUp} custom={3}>
              <a href="/#iletisim" className="btn btn-fill">{arrow} Ücretsiz Sosyal Medya Analizi</a>
              <a href="/" className={styles.btnGhost}>Anasayfa</a>
            </motion.div>
          </motion.div>

          {/* 3D phone scene — no metrics */}
          <motion.div
            className={styles.scene}
            style={{ rotateX: reduce ? 0 : rotX, rotateY: reduce ? 0 : rotY, transformPerspective: 1000 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          >
            <div className={styles.platBadge1} style={{ transform: 'translateZ(90px)' }} aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              Instagram
            </div>
            <div className={styles.platBadge2} style={{ transform: 'translateZ(72px)' }} aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
              TikTok
            </div>
            <div className={styles.platBadge3} style={{ transform: 'translateZ(80px)' }} aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              LinkedIn
            </div>

            <div className={styles.phone} aria-hidden="true">
              <div className={styles.phoneNotch} />
              <div className={styles.phoneScreen}>
                <div className={styles.feedHead}>
                  <div className={styles.feedAvatar} />
                  <div className={styles.feedMeta}><span /><span /></div>
                </div>
                <div className={styles.feedImg} />
                <div className={styles.feedActions}><span /><span /><span /></div>
                <div className={styles.feedLines}><span /><span /></div>
              </div>
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
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>Neden Wooji ile Sosyal?</motion.h2>
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
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>Hizmet</motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>Neler Yönetiyoruz?</motion.h2>
          <motion.p className={styles.secSub} variants={fadeUp} custom={2}>İçerikten topluluğa, sosyal medyanın tüm parçalarını sizin için yönetiyoruz.</motion.p>
        </motion.div>

        <div className={styles.bento}>
          <motion.div className={styles.bentoBig} variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT} whileHover={reduce ? undefined : { y: -6 }}>
            <div className={styles.cardIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
            </div>
            <h3 className={styles.cardTitle}>Uçtan Uca Sosyal Yönetim</h3>
            <p className={styles.cardDesc}>Strateji, içerik, topluluk ve raporlama — markanızın sosyal varlığını baştan sona biz üstleniriz.</p>
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
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>Ritim</motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>Büyüme Döngüsü</motion.h2>
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
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>Sosyal Medya Hakkında</motion.h2>
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
          <span className={styles.secTag}>Topluluğunuzu Büyütün</span>
          <h2 className={styles.ctaTitle}>Sosyal Medyada <span className={styles.titleHi}>Fark Yaratın</span></h2>
          <p className={styles.ctaDesc}>Ücretsiz sosyal medya analizi için iletişime geçin. Profillerinizin büyüme potansiyelini birlikte keşfedelim.</p>
          <a href="/#iletisim" className="btn btn-fill">{arrow} Ücretsiz Analiz Al</a>
        </motion.div>
      </section>
    </div>
  )
}
