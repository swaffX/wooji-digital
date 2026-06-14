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
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.08, ease: EASE } }),
}

const Arrow = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

interface Feature {
  id: string
  file: string
  title: string
  comment: string
  desc: string
  icon: React.ReactNode
}

interface Pillar {
  bracket: string
  label: string
  t: string
  d: string
  icon: React.ReactNode
}

interface Step {
  n: string
  t: string
  d: string
}

interface Faq {
  q: string
  a: string
}

const FEATURES: Feature[] = [
  {
    id: 'ux',
    file: 'ux-arayuz.tsx',
    title: 'UX & Arayüz Tasarımı',
    comment: 'design',
    desc: 'Kullanıcı yolculuğunu optimize eden, dönüşüm hunisine göre kurgulanan arayüzler tasarlarız.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
  },
  {
    id: 'dev',
    file: 'modern-dev.ts',
    title: 'Modern Geliştirme',
    comment: 'build',
    desc: 'Next.js ve React ile hızlı, ölçeklenebilir ve bakımı kolay yapılar geliştiririz.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  },
  {
    id: 'mobile',
    file: 'responsive.css',
    title: 'Mobil Uyum',
    comment: 'responsive',
    desc: 'Her ekran boyutunda kusursuz deneyim sunan, mobil öncelikli responsive tasarım.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg>,
  },
  {
    id: 'seo',
    file: 'seo-altyapi.ts',
    title: 'SEO Uyumlu Altyapı',
    comment: 'index',
    desc: 'Schema markup, doğru meta yapısı ve teknik SEO temelli geliştirme ile arama dostu siteler.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>,
  },
  {
    id: 'sec',
    file: 'guvenlik.config',
    title: 'Güvenlik & Bakım',
    comment: 'secure',
    desc: 'SSL, güvenli yapılandırma ve lansman sonrası bakımla siteniz güncel ve güvende kalır.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  },
]

const CHECKLIST = [
  'UI/UX tasarım & prototip',
  'Responsive geliştirme',
  'SEO uyumlu altyapı',
  'Performans optimizasyonu',
  'CMS entegrasyonu',
]

const PILLARS: Pillar[] = [
  {
    bracket: '{ }',
    label: 'performance',
    t: 'Performans Önce',
    d: 'Hızı ve Core Web Vitals değerlerini en baştan tasarımın merkezine koyarız.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
  },
  {
    bracket: '[ ]',
    label: 'mobile-first',
    t: 'Mobil Öncelikli',
    d: 'Tasarıma mobilden başlar, her cihazda kusursuz görünen deneyimler kurarız.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg>,
  },
  {
    bracket: '< >',
    label: 'conversion',
    t: 'Dönüşüm Odaklı',
    d: 'Güzel görünmek yetmez; ziyaretçiyi müşteriye çeviren akışlar tasarlarız.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true"><path d="M3 3v18h18" /><path d="m7 14 4-4 3 3 5-6" /></svg>,
  },
]

const STEPS: Step[] = [
  { n: '01', t: 'Keşif & Brief', d: 'Hedefler, hedef kitle ve içerik ihtiyaçları belirlenir; site haritası çıkarılır.' },
  { n: '02', t: 'Tasarım & Onay', d: 'Wireframe ve yüksek kaliteli arayüz tasarımları hazırlanır, revizyonla onaya alınır.' },
  { n: '03', t: 'Geliştirme', d: 'Onaylanan tasarım; SEO, performans ve erişilebilirlik standartlarına göre kodlanır.' },
  { n: '04', t: 'Test & Lansman', d: 'Tüm cihaz ve tarayıcılarda test edilir, site canlıya alınır ve kullanım eğitimi verilir.' },
]

const STACK = ['Next.js', 'React', 'UI/UX', 'Responsive', 'Core Web Vitals', 'E-Ticaret', 'Landing Page', 'CMS', 'Erişilebilirlik', 'SEO Uyumlu']

const FAQS: Faq[] = [
  { q: 'Bir web sitesi ne sürede teslim edilir?', a: 'Kapsamına göre değişir; kurumsal tanıtım siteleri birkaç hafta, kapsamlı e-ticaret projeleri daha uzun sürebilir. Net takvimi keşif görüşmesinde paylaşıyoruz.' },
  { q: 'Mevcut sitemi yeniden tasarlayabilir misiniz?', a: 'Evet. Mevcut sitenizi analiz edip görsel ve teknik açıdan yeniden kurar, SEO değerlerinizi koruyarak dönüşümü artırmayı hedefleriz.' },
  { q: 'E-ticaret altyapısı yapıyor musunuz?', a: 'Evet. İhtiyacınıza göre Shopify, WooCommerce veya özel Next.js e-ticaret geliştiriyoruz.' },
  { q: 'Lansman sonrası destek var mı?', a: 'Lansman sonrası teknik destek sunuyoruz; dilerseniz aylık bakım paketiyle siteniz güncel ve güvenli kalır.' },
]

export default function WebContent() {
  const reduce = useReducedMotion()
  const [activeFeat, setActiveFeat] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, { stiffness: 120, damping: 20 })
  const sy = useSpring(py, { stiffness: 120, damping: 20 })
  const rotX = useTransform(sy, [-0.5, 0.5], [10, -10])
  const rotY = useTransform(sx, [-0.5, 0.5], [-14, 14])

  const onHeroMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width - 0.5)
    py.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onHeroLeave = () => { px.set(0); py.set(0) }

  const stepperRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: stepperRef, offset: ['start 0.8', 'end 0.6'] })
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24 })
  const progressWidth = useTransform(progress, (v) => `${4 + v * 96}%`)

  const gx = useMotionValue(50)
  const gy = useMotionValue(40)
  const ctaGlow = useMotionTemplate`radial-gradient(460px circle at ${gx}% ${gy}%, color-mix(in srgb, var(--acc) 30%, transparent), transparent 70%)`
  const onCtaMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    gx.set(((e.clientX - r.left) / r.width) * 100)
    gy.set(((e.clientY - r.top) / r.height) * 100)
  }

  const active = FEATURES[activeFeat]

  return (
    <div className={styles.page}>
      <header className={styles.hero} onMouseMove={onHeroMove} onMouseLeave={onHeroLeave}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.orb1} aria-hidden="true" />
        <div className={styles.orb2} aria-hidden="true" />

        <div className={styles.heroInner}>
          <motion.div className={styles.heroLeft} initial="hidden" animate="show">
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
              <a href="/#iletisim" className="btn btn-fill">{Arrow} Ücretsiz Keşif Görüşmesi</a>
              <a href="/" className={styles.btnGhost}>Anasayfa</a>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.scene}
            initial={{ opacity: 0, y: 42 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: EASE }}
          >
            <motion.div
              className={styles.browserWrap}
              style={{ rotateX: reduce ? 0 : rotX, rotateY: reduce ? 0 : rotY, transformPerspective: 1100 }}
            >
              <div className={styles.browser}>
                <div className={styles.browserBar}>
                  <div className={styles.browserDots}><span /><span /><span /></div>
                  <div className={styles.browserUrl}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    wooji.com
                  </div>
                </div>
                <div className={styles.browserBody} aria-hidden="true">
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

              <motion.div
                className={styles.deviceFrame}
                style={{ z: reduce ? 0 : 60 }}
                aria-hidden="true"
              >
                <div className={styles.deviceNotch} />
                <div className={styles.deviceLine} />
                <div className={styles.deviceLine} />
                <div className={styles.deviceBtn} />
              </motion.div>

              <div className={styles.floatChip} aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                Responsive
              </div>
              <div className={styles.floatChip2} aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                Hızlı
              </div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      <section className={styles.pillarSection}>
        <motion.div className={styles.secHead} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>Yaklaşımımız</motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>Neden Wooji ile Web?</motion.h2>
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
              <div className={styles.pillarTop}>
                <span className={styles.pillarBracket}>{p.bracket}</span>
                <div className={styles.pillarIcon}>{p.icon}</div>
              </div>
              <span className={styles.pillarComment}>// {p.label}</span>
              <h3 className={styles.pillarTitle}>{p.t}</h3>
              <p className={styles.pillarDesc}>{p.d}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className={styles.featSection}>
        <motion.div className={styles.secHead} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>Yetkinlikler</motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>Neler Yapıyoruz?</motion.h2>
          <motion.p className={styles.secSub} variants={fadeUp} custom={2}>Fikirden lansmana, web projenizin her aşamasını tek ekiple yönetiyoruz.</motion.p>
        </motion.div>

        <motion.div className={styles.editor} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.7, ease: EASE }}>
          <div className={styles.editorBar} aria-hidden="true">
            <div className={styles.editorDots}><span /><span /><span /></div>
            <span className={styles.editorPath}>wooji / src / yetkinlikler</span>
          </div>
          <div className={styles.editorBody}>
            <div className={styles.fileList} role="tablist" aria-label="Yetkinlikler">
              {FEATURES.map((f, i) => {
                const on = activeFeat === i
                return (
                  <button
                    key={f.id}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    className={`${styles.fileTab} ${on ? styles.fileTabOn : ''}`}
                    onClick={() => setActiveFeat(i)}
                  >
                    <span className={styles.fileNo}>{String(i + 1).padStart(2, '0')}</span>
                    <span className={styles.fileIco}>{f.icon}</span>
                    <span className={styles.fileName}>{f.file}</span>
                    <span className={styles.fileCaret} aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
                    </span>
                  </button>
                )
              })}
            </div>

            <div className={styles.preview}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  className={styles.previewInner}
                  initial={{ opacity: 0, x: reduce ? 0 : 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: reduce ? 0 : -14 }}
                  transition={{ duration: 0.38, ease: EASE }}
                >
                  <span className={styles.previewComment}>{`/* ${active.comment} */`}</span>
                  <div className={styles.previewIcon}>{active.icon}</div>
                  <h3 className={styles.previewTitle}>{active.title}</h3>
                  <p className={styles.previewDesc}>{active.desc}</p>
                  <span className={styles.previewFile}>{active.file}</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.div className={styles.spec} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.7, ease: EASE }}>
          <div className={styles.specBar} aria-hidden="true">
            <span className={styles.specDot} />
            build-spec.md
          </div>
          <div className={styles.specBody}>
            <div className={styles.specHead}>
              <div className={styles.specIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
              </div>
              <div>
                <h3 className={styles.specTitle}>Uçtan Uca Geliştirme</h3>
                <p className={styles.specDesc}>Tasarımdan koda, performanstan içerik yönetimine kadar projenin tüm parçalarını biz üstleniriz.</p>
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
                  transition={{ duration: 0.42, delay: 0.12 + i * 0.08, ease: EASE }}
                >
                  <span className={styles.checkBox}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  {c}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      <section className={styles.procSection}>
        <motion.div className={styles.secHead} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>İnşa Süreci</motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>Fikirden Lansmana</motion.h2>
        </motion.div>

        <div className={styles.stepper} ref={stepperRef}>
          <div className={styles.stepperTrack} aria-hidden="true">
            <motion.div className={styles.stepperFill} style={{ width: reduce ? '100%' : progressWidth }} />
          </div>
          <div className={styles.stepGrid}>
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                className={styles.step}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
              >
                <div className={styles.stepNode}><span className={styles.stepNum}>{s.n}</span></div>
                <div className={styles.stepCard}>
                  <h3 className={styles.stepTitle}>{s.t}</h3>
                  <p className={styles.stepDesc}>{s.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className={styles.rail} aria-hidden="true">
          <div className={styles.railTrack}>
            {[...STACK, ...STACK].map((k, i) => (
              <span key={i} className={styles.chip}><span className={styles.chipDot} />{k}</span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <motion.div className={styles.secHead} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.span className={styles.secTag} variants={fadeUp} custom={0}>Sorular</motion.span>
          <motion.h2 className={styles.secTitle} variants={fadeUp} custom={1}>Proje Hakkında</motion.h2>
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
                <button type="button" className={styles.faqQ} aria-expanded={open} onClick={() => setOpenFaq(open ? null : i)}>
                  <span className={styles.faqNo} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.faqQText}>{f.q}</span>
                  <motion.span className={styles.faqIco} animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3, ease: EASE }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
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
      </section>

      <section className={styles.ctaSection}>
        <motion.div className={styles.ctaCard} onMouseMove={onCtaMove} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} transition={{ duration: 0.7, ease: EASE }}>
          <motion.div className={styles.ctaGlow} style={{ background: ctaGlow }} aria-hidden="true" />
          <div className={styles.ctaGrid} aria-hidden="true" />
          <span className={styles.secTag}>Projenizi Konuşalım</span>
          <h2 className={styles.ctaTitle}>Siteniz <span className={styles.titleHi}>Dönüştürsün</span></h2>
          <p className={styles.ctaDesc}>Ücretsiz keşif görüşmesinde mevcut sitenizi analiz ediyor, büyüme fırsatlarını birlikte belirliyoruz.</p>
          <a href="/#iletisim" className="btn btn-fill">{Arrow} Proje Görüşmesi Ayarla</a>
        </motion.div>
      </section>
    </div>
  )
}
