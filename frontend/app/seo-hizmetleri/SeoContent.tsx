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

const FEATURES = [
  {
    title: 'İçerik Stratejisi',
    desc: 'Hedef kitlenizin aradığı konularda, okutan ve dönüştüren içerikler kurguluyoruz.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>,
  },
  {
    title: 'Otorite & Backlink',
    desc: "Sektörünüzdeki güçlü kaynaklardan doğal bağlantılarla alan otoritenizi yükseltiyoruz.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>,
  },
  {
    title: 'Yerel SEO',
    desc: 'Google Business Profile ve yerel aramalarda işletmenizi öne çıkarıyoruz.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  },
  {
    title: 'Şeffaf Raporlama',
    desc: 'Sade, anlaşılır aylık raporlarla nerede olduğunuzu her zaman net görürsünüz.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
  },
  {
    title: 'Rakip Analizi',
    desc: 'Rakiplerinizin güçlü yanlarını okuyup boşluklardan yararlanan bir yol haritası çiziyoruz.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
  },
]

const CHECKLIST = [
  'Core Web Vitals optimizasyonu',
  'Mobil öncelikli indeksleme',
  'Yapısal veri (schema) işaretleme',
  'Crawl & indexleme sağlığı',
  'Site mimarisi ve iç linkleme',
]

const PILLARS = [
  {
    t: 'Beyaz Şapka Yaklaşım',
    d: 'Yalnızca Google yönergelerine uygun, kalıcı sonuç veren yöntemler kullanırız.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>,
  },
  {
    t: 'Bütüncül Strateji',
    d: 'Teknik, içerik ve otoriteyi tek bir plan altında birbirine bağlarız.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5 19 19M19 5l-2.5 2.5M7.5 16.5 5 19" /></svg>,
  },
  {
    t: 'Sürdürülebilir Büyüme',
    d: 'Kısa vadeli taktikler değil, zamanla katlanan organik bir temel inşa ederiz.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M3 3v18h18" /><path d="m7 14 4-4 3 3 5-6" /></svg>,
  },
]

const STEPS = [
  { n: '01', t: 'Analiz & Denetim', d: "Mevcut SEO durumunuz, rakipleriniz ve fırsat alanları kapsamlı şekilde incelenir." },
  { n: '02', t: 'Strateji & Plan', d: 'Sektörünüze özel, önceliklendirilmiş bir yol haritası oluşturulur.' },
  { n: '03', t: 'Uygulama', d: 'Teknik düzeltmeler, içerik üretimi ve otorite çalışmaları eş zamanlı yürütülür.' },
  { n: '04', t: 'Ölç & Optimize', d: 'Sonuçlar düzenli izlenir; öğrenilenlerle strateji sürekli iyileştirilir.' },
]

const KEYWORDS = ['Teknik SEO', 'İçerik Stratejisi', 'Otorite İnşası', 'Core Web Vitals', 'Yerel SEO', 'Schema Markup', 'E-E-A-T', 'Site Hızı', 'İç Linkleme', 'Rakip Analizi']

const FAQS = [
  { q: 'SEO sonuçları ne zaman görülür?', a: 'Teknik düzeltmeler ilk haftalarda etkisini göstermeye başlar; kalıcı ve anlamlı büyüme genellikle birkaç aylık tutarlı çalışmanın ürünüdür.' },
  { q: 'Hangi sıklıkta içerik üretiyorsunuz?', a: 'Paketinize ve sektörünüze göre planlanır. Her içerik keyword araştırması, yapısal optimizasyon ve dahili linkleme ile teslim edilir.' },
  { q: "Google'ın algoritma güncellemelerinde ne oluyor?", a: 'Beyaz şapka yöntemler kullandığımız için güncellemelerden olumsuz etkilenme riski düşüktür. Her güncellemeden sonra performansı izleyip gerekli uyarlamaları yaparız.' },
  { q: 'Sitenin kontrolünü vermem gerekir mi?', a: 'Teknik SEO için siteye erişim gereklidir; içerik ve otorite çalışmaları için tam erişim şart değildir. Kapsamı keşif görüşmesinde netleştiriyoruz.' },
]

export default function SeoContent() {
  const reduce = useReducedMotion()
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // Hero parallax
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
  const onHeroLeave = () => {
    px.set(0)
    py.set(0)
  }

  // Process scroll-linked line
  const timelineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start 0.85', 'end 0.55'] })
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })

  // CTA cursor glow
  const gx = useMotionValue(50)
  const gy = useMotionValue(40)
  const ctaGlow = useMotionTemplate`radial-gradient(440px circle at ${gx}% ${gy}%, rgba(124,58,237,0.32), transparent 70%)`
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
              SEO &amp; Organik Büyüme
            </motion.span>
            <motion.h1 className={styles.title} variants={fadeUp} custom={1}>
              Aramalarda
              <br />
              <span className={styles.titleHi}>Zirveye Tırmanın</span>
            </motion.h1>
            <motion.p className={styles.desc} variants={fadeUp} custom={2}>
              Teknik SEO, içerik stratejisi ve otorite inşasıyla arama motorlarında kalıcı görünürlük kazanın. Markanızı doğru kitlenin önüne çıkarıyor, organik büyümenizi sürdürülebilir bir temele oturtuyoruz.
            </motion.p>
            <motion.div className={styles.ctaRow} variants={fadeUp} custom={3}>
              <a href="/#iletisim" className="btn btn-fill">{arrow} Ücretsiz SEO Denetimi</a>
              <a href="/" className={styles.btnGhost}>Anasayfa</a>
            </motion.div>
          </motion.div>

          {/* 3D abstract search scene — no metrics */}
          <motion.div
            className={styles.scene}
            style={{ rotateX: reduce ? 0 : rotX, rotateY: reduce ? 0 : rotY, transformPerspective: 1000 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          >
            <div className={styles.sceneSearch} style={{ transform: 'translateZ(60px)' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
              <span className={styles.searchText}>seo &amp; organik büyüme</span>
              <span className={styles.sceneCursor} aria-hidden="true" />
            </div>

            <div className={`${styles.resCard} ${styles.resTop}`} style={{ transform: 'translateZ(46px)' }} aria-hidden="true">
              <span className={styles.resMark} />
              <div className={styles.resLines}>
                <span className={styles.resLineWide} />
                <span className={styles.resLine} />
              </div>
              <span className={styles.resRise}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
              </span>
            </div>

            <div className={`${styles.resCard} ${styles.resMuted}`} style={{ transform: 'translateZ(24px)' }} aria-hidden="true">
              <span className={styles.resDot} />
              <div className={styles.resLines}><span className={styles.resLineWide} /><span className={styles.resLine} /></div>
            </div>
            <div className={`${styles.resCard} ${styles.resMuted}`} style={{ transform: 'translateZ(8px)' }} aria-hidden="true">
              <span className={styles.resDot} />
              <div className={styles.resLines}><span className={styles.resLineWide} /><span className={styles.resLine} /></div>
            </div>

            <div className={styles.floatChip} style={{ transform: 'translateZ(82px)' }} aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
              Büyüme
            </div>
            <div className={styles.floatChip2} style={{ transform: 'translateZ(70px)' }} aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
              Beyaz Şapka
            </div>
          </motion.div>
        </div>
      </header>

      {/* ───────────── MARQUEE ───────────── */}
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

      {/* ───────────── PILLARS ───────────── */}
      <section className={styles.pillarSection}>
        <motion.div className={styles.secHead} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>Yaklaşımımız</motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>Neden Wooji ile SEO?</motion.h2>
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
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>Cephanelik</motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>SEO Araç Setimiz</motion.h2>
          <motion.p className={styles.secSub} variants={fadeUp} custom={2}>Sıralamayı yükselten her bileşeni tek çatı altında yönetiyoruz.</motion.p>
        </motion.div>

        <div className={styles.bento}>
          {/* Big card — technical audit checklist */}
          <motion.div
            className={styles.bentoBig}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            whileHover={reduce ? undefined : { y: -6 }}
          >
            <div className={styles.cardIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
            </div>
            <h3 className={styles.cardTitle}>Teknik SEO Denetimi</h3>
            <p className={styles.cardDesc}>Sitenizin altyapısını baştan sona tarar, arama motorlarının önündeki engelleri tek tek kaldırırız.</p>
            <ul className={styles.checkList}>
              {CHECKLIST.map((c, i) => (
                <motion.li
                  key={c}
                  className={styles.checkItem}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.1, ease: EASE }}
                >
                  <span className={styles.checkBox}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  {c}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {FEATURES.map((f, i) => (
            <motion.article
              key={f.title}
              className={styles.bentoCard}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              custom={i}
              whileHover={reduce ? undefined : { y: -6, rotateX: 4, rotateY: -4 }}
            >
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
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>Yol Haritası</motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>Sıralamaya Giden Yol</motion.h2>
        </motion.div>

        <div className={styles.timeline} ref={timelineRef}>
          <div className={styles.timelineTrack} aria-hidden="true">
            <motion.div className={styles.timelineFill} style={{ scaleY: reduce ? 1 : lineScale }} />
          </div>
          {STEPS.map((s) => (
            <motion.div
              key={s.n}
              className={styles.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.55, ease: EASE }}
            >
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
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>SEO Hakkında</motion.h2>
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

      {/* ───────────── CTA ───────────── */}
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
          <h2 className={styles.ctaTitle}>Google&apos;da <span className={styles.titleHi}>Zirvede</span> Görünün</h2>
          <p className={styles.ctaDesc}>Ücretsiz SEO denetimi için iletişime geçin. Sitenizin tam potansiyelini birlikte keşfedelim.</p>
          <a href="/#iletisim" className="btn btn-fill">{arrow} Ücretsiz Denetim Al</a>
        </motion.div>
      </section>
    </div>
  )
}
