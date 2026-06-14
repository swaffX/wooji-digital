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
    title: 'Blog & Makale',
    desc: 'Keyword odaklı, uzman kalitesinde blog yazıları ve rehber makaleler üretiriz.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>,
  },
  {
    title: 'E-posta Pazarlaması',
    desc: "Segmentlere ayrılmış, kişiselleştirilmiş e-posta kampanyaları ve otomasyonlar kurarız.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
  },
  {
    title: 'Video Script',
    desc: 'YouTube, Reels ve TikTok için izlenen, marka mesajını ileten video senaryoları yazarız.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg>,
  },
  {
    title: 'Whitepaper & E-Kitap',
    desc: 'Potansiyel müşterileri çeken, lead magnet olarak kullanabileceğiniz derinlikli içerikler.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>,
  },
  {
    title: 'Keyword Araştırması',
    desc: "Rekabeti düşük, dönüşüm potansiyeli yüksek konuları tespit edip içerik planı çıkarırız.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>,
  },
]

const CHECKLIST = [
  'Keyword & konu araştırması',
  'Blog & makale üretimi',
  'E-posta & newsletter',
  'Lead magnet & e-kitap',
  'Dağıtım & raporlama',
]

const PILLARS = [
  {
    t: 'Değer Önce',
    d: 'Satış değil; önce gerçekten faydalı, güven veren içerik üreterek kalıcı bağ kurarız.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
  },
  {
    t: 'SEO Uyumlu',
    d: 'Her içerik aranan konulara ve doğru anahtar kelimelere göre, bulunabilir şekilde kurgulanır.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>,
  },
  {
    t: 'Marka Sesi',
    d: 'İçerikleriniz markanızın tonuyla, baştan sona tutarlı bir dille yazılır.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
  },
]

const STEPS = [
  { n: '01', t: 'Strateji & Planlama', d: "Hedef kitle persona'ları, içerik sütunları ve keyword haritası oluşturulur." },
  { n: '02', t: 'Üretim', d: 'Brief hazırlanır, içerikler yazılır ve SEO optimizasyonuyla teslim edilir.' },
  { n: '03', t: 'Dağıtım', d: 'İçerikler site, sosyal medya ve e-posta kanallarında planlı şekilde yayınlanır.' },
  { n: '04', t: 'Performans Ölçümü', d: 'Trafik, etkileşim ve lead verileri okunarak içerik stratejisi sürekli iyileştirilir.' },
]

const KEYWORDS = ['Blog', 'SEO İçerik', 'E-posta', 'Whitepaper', 'Video Script', 'Keyword', 'Editöryal', 'Lead Magnet', 'Newsletter', 'İçerik Takvimi']

const FAQS = [
  { q: 'İçerikleri kim yazıyor?', a: "Deneyimli Türkçe içerik yazarlarımız üretir, SEO uzmanımız optimize eder. Her içerik markanızın sesine ve brief'e uygun hazırlanır." },
  { q: 'İçerikleri onaylamak için sürem ne kadar?', a: 'Her içerik yayından önce size iletilir ve revizyon hakkınız bulunur; onay sürecini birlikte planlarız.' },
  { q: 'E-posta listem yoksa nasıl başlarım?', a: 'Lead magnet tasarımı, açılış sayfası ve opt-in form kurulumuyla sıfırdan e-posta listesi oluşturma hizmeti de sunuyoruz.' },
  { q: 'İçerik pazarlaması ne zaman işe yarar?', a: 'Uzun vadeli bir yatırımdır; tutarlı üretimle trafik ve marka otoritesi zamanla katlanarak büyür.' },
]

export default function IcerikContent() {
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
  const ctaGlow = useMotionTemplate`radial-gradient(440px circle at ${gx}% ${gy}%, rgba(217,119,6,0.32), transparent 70%)`
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
              İçerik Pazarlaması
            </motion.span>
            <motion.h1 className={styles.title} variants={fadeUp} custom={1}>
              Otorite
              <br />
              <span className={styles.titleHi}>İnşası</span>
            </motion.h1>
            <motion.p className={styles.desc} variants={fadeUp} custom={2}>
              SEO uyumlu, hedef kitlenizi bilgilendiren ve dönüştüren içeriklerle markanızı sektörünüzde düşünce lideri konumuna taşıyoruz.
            </motion.p>
            <motion.div className={styles.ctaRow} variants={fadeUp} custom={3}>
              <a href="/#iletisim" className="btn btn-fill">{arrow} Ücretsiz İçerik Stratejisi</a>
              <a href="/" className={styles.btnGhost}>Anasayfa</a>
            </motion.div>
          </motion.div>

          {/* 3D editorial card stack — no metrics */}
          <motion.div
            className={styles.scene}
            style={{ rotateX: reduce ? 0 : rotX, rotateY: reduce ? 0 : rotY, transformPerspective: 1000 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          >
            <div className={`${styles.artCard} ${styles.ac3}`} aria-hidden="true" />
            <div className={`${styles.artCard} ${styles.ac2}`} aria-hidden="true" />
            <div className={`${styles.artCard} ${styles.ac1}`} aria-hidden="true">
              <span className={styles.acTag} />
              <div className={styles.acHeadline} />
              <div className={styles.acLines}><span /><span /><span /></div>
              <div className={styles.acImg} />
              <div className={styles.acMeta}><span /><span /></div>
            </div>

            <div className={styles.floatChip} style={{ transform: 'translateZ(90px)' }} aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
              Blog
            </div>
            <div className={styles.floatChip2} style={{ transform: 'translateZ(74px)' }} aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
              Otorite
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
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>Neden Wooji ile İçerik?</motion.h2>
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
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>Repertuar</motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>İçerik Türlerimiz</motion.h2>
          <motion.p className={styles.secSub} variants={fadeUp} custom={2}>Stratejiden dağıtıma, içeriğin her formatını sizin için üretiyoruz.</motion.p>
        </motion.div>

        <div className={styles.bento}>
          <motion.div className={styles.bentoBig} variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT} whileHover={reduce ? undefined : { y: -6 }}>
            <div className={styles.cardIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
            </div>
            <h3 className={styles.cardTitle}>Uçtan Uca İçerik Üretimi</h3>
            <p className={styles.cardDesc}>Strateji, üretim, dağıtım ve ölçüm — içerik pazarlamasının tüm döngüsünü tek elden yönetiriz.</p>
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
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>Akış</motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>Editoryal Süreç</motion.h2>
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
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>İçerik Hakkında</motion.h2>
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
          <span className={styles.secTag}>İçerik Stratejiniz Hazır</span>
          <h2 className={styles.ctaTitle}>Otoritenizi <span className={styles.titleHi}>İnşa Edin</span></h2>
          <p className={styles.ctaDesc}>Ücretsiz içerik denetimi için iletişime geçin. Sektörünüzde düşünce lideri olma yolunu birlikte çizelim.</p>
          <a href="/#iletisim" className="btn btn-fill">{arrow} İçerik Stratejisi Al</a>
        </motion.div>
      </section>
    </div>
  )
}
