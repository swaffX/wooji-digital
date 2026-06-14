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
    title: 'UX & Arayüz Tasarımı',
    desc: 'Kullanıcı yolculuğunu optimize eden, dönüşüm hunisine göre kurgulanan arayüzler tasarlarız.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
  },
  {
    title: 'Modern Geliştirme',
    desc: 'Next.js ve React ile hızlı, ölçeklenebilir ve bakımı kolay yapılar geliştiririz.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  },
  {
    title: 'Mobil Uyum',
    desc: 'Her ekran boyutunda kusursuz deneyim sunan, mobil öncelikli responsive tasarım.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg>,
  },
  {
    title: 'SEO Uyumlu Altyapı',
    desc: 'Schema markup, doğru meta yapısı ve teknik SEO temelli geliştirme ile arama dostu siteler.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>,
  },
  {
    title: 'Güvenlik & Bakım',
    desc: 'SSL, güvenli yapılandırma ve lansman sonrası bakımla siteniz güncel ve güvende kalır.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  },
]

const CHECKLIST = [
  'UI/UX tasarım & prototip',
  'Responsive geliştirme',
  'SEO uyumlu altyapı',
  'Performans optimizasyonu',
  'CMS entegrasyonu',
]

const PILLARS = [
  {
    t: 'Performans Önce',
    d: 'Hızı ve Core Web Vitals değerlerini en baştan tasarımın merkezine koyarız.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
  },
  {
    t: 'Mobil Öncelikli',
    d: 'Tasarıma mobilden başlar, her cihazda kusursuz görünen deneyimler kurarız.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg>,
  },
  {
    t: 'Dönüşüm Odaklı',
    d: 'Güzel görünmek yetmez; ziyaretçiyi müşteriye çeviren akışlar tasarlarız.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M3 3v18h18" /><path d="m7 14 4-4 3 3 5-6" /></svg>,
  },
]

const STEPS = [
  { n: '01', t: 'Keşif & Brief', d: 'Hedefler, hedef kitle ve içerik ihtiyaçları belirlenir; site haritası çıkarılır.' },
  { n: '02', t: 'Tasarım & Onay', d: 'Wireframe ve yüksek kaliteli arayüz tasarımları hazırlanır, revizyonla onaya alınır.' },
  { n: '03', t: 'Geliştirme', d: 'Onaylanan tasarım; SEO, performans ve erişilebilirlik standartlarına göre kodlanır.' },
  { n: '04', t: 'Test & Lansman', d: 'Tüm cihaz ve tarayıcılarda test edilir, site canlıya alınır ve kullanım eğitimi verilir.' },
]

const KEYWORDS = ['Next.js', 'React', 'UI/UX', 'Responsive', 'Core Web Vitals', 'E-Ticaret', 'Landing Page', 'CMS', 'Erişilebilirlik', 'SEO Uyumlu']

const FAQS = [
  { q: 'Bir web sitesi ne sürede teslim edilir?', a: 'Kapsamına göre değişir; kurumsal tanıtım siteleri birkaç hafta, kapsamlı e-ticaret projeleri daha uzun sürebilir. Net takvimi keşif görüşmesinde paylaşıyoruz.' },
  { q: 'Mevcut sitemi yeniden tasarlayabilir misiniz?', a: 'Evet. Mevcut sitenizi analiz edip görsel ve teknik açıdan yeniden kurar, SEO değerlerinizi koruyarak dönüşümü artırmayı hedefleriz.' },
  { q: 'E-ticaret altyapısı yapıyor musunuz?', a: 'Evet. İhtiyacınıza göre Shopify, WooCommerce veya özel Next.js e-ticaret geliştiriyoruz.' },
  { q: 'Lansman sonrası destek var mı?', a: 'Lansman sonrası teknik destek sunuyoruz; dilerseniz aylık bakım paketiyle siteniz güncel ve güvenli kalır.' },
]

export default function WebContent() {
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
  const ctaGlow = useMotionTemplate`radial-gradient(440px circle at ${gx}% ${gy}%, rgba(8,145,178,0.34), transparent 70%)`
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
              Web Tasarım &amp; Geliştirme
            </motion.span>
            <motion.h1 className={styles.title} variants={fadeUp} custom={1}>
              Dönüşüm Odaklı
              <br />
              <span className={styles.titleHi}>Web Siteleri</span>
            </motion.h1>
            <motion.p className={styles.desc} variants={fadeUp} custom={2}>
              Kullanıcı deneyimini, estetiği ve performansı bir arada sunan siteler tasarlıyor ve geliştiriyoruz. Siteniz yalnızca güzel değil; hızlı, bulunabilir ve satan bir araç olur.
            </motion.p>
            <motion.div className={styles.ctaRow} variants={fadeUp} custom={3}>
              <a href="/#iletisim" className="btn btn-fill">{arrow} Ücretsiz Keşif Görüşmesi</a>
              <a href="/" className={styles.btnGhost}>Anasayfa</a>
            </motion.div>
          </motion.div>

          {/* 3D browser scene — no metrics */}
          <motion.div
            className={styles.scene}
            style={{ rotateX: reduce ? 0 : rotX, rotateY: reduce ? 0 : rotY, transformPerspective: 1000 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          >
            <div className={styles.browser} aria-hidden="true">
              <div className={styles.browserBar}>
                <div className={styles.browserDots}><span /><span /><span /></div>
                <div className={styles.browserUrl}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  wooji.com
                </div>
              </div>
              <div className={styles.browserBody}>
                <div className={styles.mNav}><span /><span /><span /></div>
                <div className={styles.mHeadline} />
                <div className={styles.mSub} />
                <div className={styles.mBtn} />
                <div className={styles.mCards}>
                  <div className={styles.mCard} />
                  <div className={styles.mCard} />
                  <div className={styles.mCard} />
                </div>
              </div>
            </div>

            <div className={styles.floatChip} style={{ transform: 'translateZ(85px)' }} aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
              Responsive
            </div>
            <div className={styles.floatChip2} style={{ transform: 'translateZ(72px)' }} aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
              Hızlı
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
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>Neden Wooji ile Web?</motion.h2>
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
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>Yetkinlikler</motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>Neler Yapıyoruz?</motion.h2>
          <motion.p className={styles.secSub} variants={fadeUp} custom={2}>Fikirden lansmana, web projenizin her aşamasını tek ekiple yönetiyoruz.</motion.p>
        </motion.div>

        <div className={styles.bento}>
          <motion.div className={styles.bentoBig} variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT} whileHover={reduce ? undefined : { y: -6 }}>
            <div className={styles.cardIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
            </div>
            <h3 className={styles.cardTitle}>Uçtan Uca Geliştirme</h3>
            <p className={styles.cardDesc}>Tasarımdan koda, performanstan içerik yönetimine kadar projenin tüm parçalarını biz üstleniriz.</p>
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
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>İnşa Süreci</motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>Fikirden Lansmana</motion.h2>
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
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>Proje Hakkında</motion.h2>
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
          <span className={styles.secTag}>Projenizi Konuşalım</span>
          <h2 className={styles.ctaTitle}>Siteniz <span className={styles.titleHi}>Dönüştürsün</span></h2>
          <p className={styles.ctaDesc}>Ücretsiz keşif görüşmesinde mevcut sitenizi analiz ediyor, büyüme fırsatlarını birlikte belirliyoruz.</p>
          <a href="/#iletisim" className="btn btn-fill">{arrow} Proje Görüşmesi Ayarla</a>
        </motion.div>
      </section>
    </div>
  )
}
