'use client'

import { useEffect, useRef, useState } from 'react'
import type { Variants } from 'framer-motion'
import {
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
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: EASE },
  }),
}

const VIEWPORT = { once: true, amount: 0.25 } as const

const arrow = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const SEARCH_QUERY = 'seo & organik büyüme'

const FEATURES = [
  {
    title: 'İçerik Stratejisi',
    desc: 'Hedef kitlenizin aradığı konularda, okutan ve dönüştüren içerikler kurguluyoruz.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: 'Otorite & Backlink',
    desc: 'Sektörünüzdeki güçlü kaynaklardan doğal bağlantılarla alan otoritenizi yükseltiyoruz.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    title: 'Yerel SEO',
    desc: 'Google Business Profile ve yerel aramalarda işletmenizi öne çıkarıyoruz.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'Şeffaf Raporlama',
    desc: 'Sade, anlaşılır aylık raporlarla nerede olduğunuzu her zaman net görürsünüz.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: 'Rakip Analizi',
    desc: 'Rakiplerinizin güçlü yanlarını okuyup boşluklardan yararlanan bir yol haritası çiziyoruz.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
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
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    t: 'Bütüncül Strateji',
    d: 'Teknik, içerik ve otoriteyi tek bir plan altında birbirine bağlarız.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5 19 19M19 5l-2.5 2.5M7.5 16.5 5 19" />
      </svg>
    ),
  },
  {
    t: 'Sürdürülebilir Büyüme',
    d: 'Kısa vadeli taktikler değil, zamanla katlanan organik bir temel inşa ederiz.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M3 3v18h18" />
        <path d="m7 14 4-4 3 3 5-6" />
        <path d="M16 7h4v4" />
      </svg>
    ),
  },
]

const STEPS = [
  { n: '01', t: 'Analiz & Denetim', d: 'Mevcut SEO durumunuz, rakipleriniz ve fırsat alanları kapsamlı şekilde incelenir.' },
  { n: '02', t: 'Strateji & Plan', d: 'Sektörünüze özel, önceliklendirilmiş bir yol haritası oluşturulur.' },
  { n: '03', t: 'Uygulama', d: 'Teknik düzeltmeler, içerik üretimi ve otorite çalışmaları eş zamanlı yürütülür.' },
  { n: '04', t: 'Ölç & Optimize', d: 'Sonuçlar düzenli izlenir; öğrenilenlerle strateji sürekli iyileştirilir.' },
]

const KEYWORDS = ['Teknik SEO', 'İçerik Stratejisi', 'Otorite İnşası', 'Core Web Vitals', 'Yerel SEO', 'Schema Markup', 'E-E-A-T', 'Site Hızı', 'İç Linkleme', 'Rakip Analizi']

const FAQS = [
  { q: 'SEO sonuçları ne zaman görülür?', a: 'Teknik düzeltmeler ilk haftalarda etkisini göstermeye başlar; kalıcı ve anlamlı büyüme genellikle birkaç aylık tutarlı çalışmanın ürünüdür.' },
  { q: 'Hangi sıklıkta içerik üretiyorsunuz?', a: 'Paketinize ve sektörünüze göre planlanır. Her içerik keyword araştırması, yapısal optimizasyon ve dahili linkleme ile teslim edilir.' },
  { q: 'Google’ın algoritma güncellemelerinde ne oluyor?', a: 'Beyaz şapka yöntemler kullandığımız için güncellemelerden olumsuz etkilenme riski düşüktür. Her güncellemeden sonra performansı izleyip gerekli uyarlamaları yaparız.' },
  { q: 'Sitenin kontrolünü vermem gerekir mi?', a: 'Teknik SEO için siteye erişim gereklidir; içerik ve otorite çalışmaları için tam erişim şart değildir. Kapsamı keşif görüşmesinde netleştiriyoruz.' },
]

function useTypewriter(text: string, enabled: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!enabled) {
      setCount(text.length)
      return
    }
    setCount(0)
    let i = 0
    const id = window.setInterval(() => {
      i += 1
      setCount(i)
      if (i >= text.length) window.clearInterval(id)
    }, 85)
    return () => window.clearInterval(id)
  }, [text, enabled])

  return text.slice(0, count)
}

export default function SeoContent() {
  const reduce = useReducedMotion()
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const typed = useTypewriter(SEARCH_QUERY, !reduce)

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

  const pathRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: pathRef, offset: ['start 0.8', 'end 0.6'] })
  const pathScale = useSpring(scrollYProgress, { stiffness: 90, damping: 26 })

  const gx = useMotionValue(50)
  const gy = useMotionValue(40)
  const ctaGlow = useMotionTemplate`radial-gradient(460px circle at ${gx}% ${gy}%, color-mix(in srgb, var(--acc) 30%, transparent), transparent 70%)`
  const onCtaMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    gx.set(((e.clientX - r.left) / r.width) * 100)
    gy.set(((e.clientY - r.top) / r.height) * 100)
  }

  return (
    <div className={styles.page}>
      {/* ───────────── HERO — Ascent SERP scene ───────────── */}
      <header className={styles.hero} onMouseMove={onHeroMove} onMouseLeave={onHeroLeave}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.orb1} aria-hidden="true" />
        <div className={styles.orb2} aria-hidden="true" />

        <div className={styles.heroInner}>
          <motion.div className={styles.heroLeft} initial="hidden" animate="show" variants={fadeUp}>
            <motion.span className={styles.tagPill} variants={fadeUp} custom={0}>
              <span className={styles.tagDot} aria-hidden="true" />
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

          <motion.div
            className={styles.scenePerspective}
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          >
            <motion.div
              className={styles.scene}
              style={{ rotateX: reduce ? 0 : rotX, rotateY: reduce ? 0 : rotY }}
            >
              <div className={styles.sceneSearch} style={{ transform: 'translateZ(64px)' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <span className={styles.searchText}>
                  {typed}
                  <span className={styles.sceneCursor} aria-hidden="true" />
                </span>
              </div>

              <div className={styles.serpStack}>
                <div className={`${styles.resCard} ${styles.resTop}`} style={{ transform: 'translateZ(52px)' }} aria-hidden="true">
                  <span className={styles.rankBadge}>1</span>
                  <span className={styles.resMark} />
                  <div className={styles.resLines}>
                    <span className={styles.resLineWide} />
                    <span className={styles.resLine} />
                  </div>
                  <span className={styles.resRise}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                      <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                  </span>
                </div>

                <div className={`${styles.resCard} ${styles.resMuted}`} style={{ transform: 'translateZ(26px)' }} aria-hidden="true">
                  <span className={styles.rankGhost}>2</span>
                  <span className={styles.resDot} />
                  <div className={styles.resLines}>
                    <span className={styles.resLineWide} />
                    <span className={styles.resLine} />
                  </div>
                </div>
                <div className={`${styles.resCard} ${styles.resMuted}`} style={{ transform: 'translateZ(10px)' }} aria-hidden="true">
                  <span className={styles.rankGhost}>3</span>
                  <span className={styles.resDot} />
                  <div className={styles.resLines}>
                    <span className={styles.resLineWide} />
                    <span className={styles.resLine} />
                  </div>
                </div>
              </div>

              <div className={styles.floatChip} style={{ transform: 'translateZ(94px)' }} aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
                Büyüme
              </div>
              <div className={styles.floatChip2} style={{ transform: 'translateZ(78px)' }} aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Beyaz Şapka
              </div>
            </motion.div>
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

      {/* ───────────── FEATURES — altitude ladder + technical audit ───────────── */}
      <section className={styles.featSection}>
        <motion.div className={styles.secHead} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>Cephanelik</motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>SEO Araç Setimiz</motion.h2>
          <motion.p className={styles.secSub} variants={fadeUp} custom={2}>Sıralamayı yükselten her bileşeni tek çatı altında yönetiyoruz.</motion.p>
        </motion.div>

        <div className={styles.featLayout}>
          <motion.div
            className={styles.auditCard}
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className={styles.auditEyebrow}>Hero Bileşen</span>
            <div className={styles.auditIcon}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
            <h3 className={styles.auditTitle}>Teknik SEO Denetimi</h3>
            <p className={styles.auditDesc}>Sitenizin altyapısını baştan sona tarar, arama motorlarının önündeki engelleri tek tek kaldırırız.</p>
            <ul className={styles.checkList}>
              {CHECKLIST.map((c, i) => (
                <motion.li
                  key={c}
                  className={styles.checkItem}
                  initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.09, ease: EASE }}
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
          </motion.div>

          <div className={styles.ladder}>
            <div className={styles.ladderGuide} aria-hidden="true" />
            {FEATURES.map((f, i) => (
              <motion.article
                key={f.title}
                className={styles.rung}
                style={{ ['--rung' as string]: String(i) }}
                initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.6, delay: i * 0.09, ease: EASE }}
                whileHover={reduce ? undefined : { x: 8 }}
              >
                <span className={styles.rungRank} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <div className={styles.rungIcon}>{f.icon}</div>
                <div className={styles.rungBody}>
                  <h3 className={styles.rungTitle}>{f.title}</h3>
                  <p className={styles.rungDesc}>{f.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── PILLARS — sticky scroll ───────────── */}
      <section className={styles.pillarSection}>
        <div className={styles.pillarLayout}>
          <motion.div
            className={styles.pillarSticky}
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className={styles.secTag}>Yaklaşımımız</span>
            <h2 className={styles.secTitle}>Neden Wooji ile SEO?</h2>
            <p className={styles.pillarLead}>Her tırmanışın bir rotası vardır. Bizim rotamızı tanımlayan üç ilke, sıralamanızı tesadüfe değil yönteme bağlar.</p>
            <span className={styles.pillarIndex} aria-hidden="true">01 — 03</span>
          </motion.div>

          <div className={styles.pillarTrack}>
            {PILLARS.map((p, i) => (
              <motion.article
                key={p.t}
                className={styles.pillar}
                initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.65, delay: i * 0.08, ease: EASE }}
                whileHover={reduce ? undefined : { y: -6 }}
              >
                <span className={styles.pillarNum} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <div className={styles.pillarIcon}>{p.icon}</div>
                <h3 className={styles.pillarTitle}>{p.t}</h3>
                <p className={styles.pillarDesc}>{p.d}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── PROCESS — climbing path ───────────── */}
      <section className={styles.procSection}>
        <motion.div className={styles.secHead} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>Yol Haritası</motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>Sıralamaya Giden Yol</motion.h2>
        </motion.div>

        <div className={styles.path} ref={pathRef}>
          <div className={styles.pathTrack} aria-hidden="true">
            <motion.div className={styles.pathFill} style={{ scaleY: reduce ? 1 : pathScale }} />
          </div>
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              className={styles.stage}
              style={{ ['--stage' as string]: String(STEPS.length - 1 - i) }}
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <div className={styles.stageMarker}>
                <span className={styles.stageNum}>{s.n}</span>
                <span className={styles.stageElev} aria-hidden="true" />
              </div>
              <div className={styles.stageCard}>
                <h3 className={styles.stageTitle}>{s.t}</h3>
                <p className={styles.stageDesc}>{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────────── FAQ — two column split ───────────── */}
      <section className={styles.faqSection}>
        <div className={styles.faqLayout}>
          <motion.div
            className={styles.faqHead}
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className={styles.secTag}>Sorular</span>
            <h2 className={styles.secTitle}>SEO Hakkında</h2>
            <p className={styles.faqLead}>Tırmanışa başlamadan önce en çok merak edilenler. Aklınızda kalan her şeyi keşif görüşmesinde netleştiriyoruz.</p>
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
                  <button
                    type="button"
                    className={styles.faqQ}
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? null : i)}
                  >
                    <span className={styles.faqQText}>{f.q}</span>
                    <motion.span className={styles.faqIco} animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3, ease: EASE }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </motion.span>
                  </button>
                  <div className={`${styles.faqA}${open ? ' ' + styles.faqAOpen : ''}`}>
                    <div className={styles.faqAInner}>
                      <p className={styles.faqAText}>{f.a}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───────────── CTA band ───────────── */}
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
          <h2 className={styles.ctaTitle}>Google&apos;da <span className={styles.titleHi}>Zirvede</span> Görünün</h2>
          <p className={styles.ctaDesc}>Ücretsiz SEO denetimi için iletişime geçin. Sitenizin tam potansiyelini birlikte keşfedelim.</p>
          <a href="/#iletisim" className="btn btn-fill">{arrow} Ücretsiz Denetim Al</a>
        </motion.div>
      </section>
    </div>
  )
}
