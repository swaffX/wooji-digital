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
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.08, ease: EASE } }),
}

const VIEWPORT = { once: true, amount: 0.2 } as const

const arrow = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

type Pillar = { t: string; d: string; icon: React.ReactNode }
type Feature = { title: string; desc: string; lead?: boolean; icon: React.ReactNode }

const PILLARS: Pillar[] = [
  {
    t: 'Değer Önce',
    d: 'Satış değil; önce gerçekten faydalı, güven veren içerik üreterek kalıcı bağ kurarız.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
  },
  {
    t: 'SEO Uyumlu',
    d: 'Her içerik aranan konulara ve doğru anahtar kelimelere göre, bulunabilir şekilde kurgulanır.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>,
  },
  {
    t: 'Marka Sesi',
    d: 'İçerikleriniz markanızın tonuyla, baştan sona tutarlı bir dille yazılır.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
  },
]

const FEATURES: Feature[] = [
  {
    title: 'Blog & Makale',
    desc: 'Keyword odaklı, uzman kalitesinde blog yazıları ve rehber makaleler üretiriz.',
    lead: true,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="13" y2="17" /></svg>,
  },
  {
    title: 'E-posta Pazarlaması',
    desc: 'Segmentlere ayrılmış, kişiselleştirilmiş e-posta kampanyaları ve otomasyonlar kurarız.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
  },
  {
    title: 'Video Script',
    desc: 'YouTube, Reels ve TikTok için izlenen, marka mesajını ileten video senaryoları yazarız.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg>,
  },
  {
    title: 'Whitepaper & E-Kitap',
    desc: 'Potansiyel müşterileri çeken, lead magnet olarak kullanabileceğiniz derinlikli içerikler.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>,
  },
  {
    title: 'Keyword Araştırması',
    desc: 'Rekabeti düşük, dönüşüm potansiyeli yüksek konuları tespit edip içerik planı çıkarırız.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>,
  },
]

const CHECKLIST = [
  'Keyword & konu araştırması',
  'Blog & makale üretimi',
  'E-posta & newsletter',
  'Lead magnet & e-kitap',
  'Dağıtım & raporlama',
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
  const rotX = useTransform(sy, [-0.5, 0.5], [10, -10])
  const rotY = useTransform(sx, [-0.5, 0.5], [-14, 14])
  const chipX = useTransform(sx, [-0.5, 0.5], [-30, 30])
  const chipY = useTransform(sy, [-0.5, 0.5], [-22, 22])
  const chip2X = useTransform(chipX, (v) => -v * 0.7)

  const onSceneMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width - 0.5)
    py.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onSceneLeave = () => { px.set(0); py.set(0) }

  const procRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: procRef, offset: ['start 0.8', 'end 0.6'] })
  const readLine = useSpring(scrollYProgress, { stiffness: 80, damping: 26 })

  const gx = useMotionValue(50)
  const gy = useMotionValue(38)
  const ctaGlow = useMotionTemplate`radial-gradient(460px circle at ${gx}% ${gy}%, color-mix(in srgb, var(--acc) 30%, transparent), transparent 70%)`
  const onCtaMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    gx.set(((e.clientX - r.left) / r.width) * 100)
    gy.set(((e.clientY - r.top) / r.height) * 100)
  }

  return (
    <div className={styles.page}>
      {/* ───────────── HERO — editorial masthead + 3D article stack ───────────── */}
      <header className={styles.hero}>
        <div className={styles.paperGrain} aria-hidden="true" />
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.columnRule} aria-hidden="true" />

        <div className={styles.heroInner}>
          <motion.div className={styles.heroLeft} initial="hidden" animate="show">
            <motion.div className={styles.masthead} variants={fadeUp} custom={0}>
              <span className={styles.tagPill}>
                <span className={styles.tagDot} />
                İçerik Pazarlaması
              </span>
              <span className={styles.issueLine} aria-hidden="true">
                <span className={styles.issueRule} />
                Editöryal Sayı
              </span>
            </motion.div>

            <motion.h1 className={styles.title} variants={fadeUp} custom={1}>
              <span className={styles.titleTop}>Otorite</span>
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

          <motion.div
            className={styles.scene}
            onMouseMove={onSceneMove}
            onMouseLeave={onSceneLeave}
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          >
            <motion.div
              className={styles.sceneStage}
              style={{ rotateX: reduce ? 0 : rotX, rotateY: reduce ? 0 : rotY, transformPerspective: 1100 }}
            >
              <div className={`${styles.artCard} ${styles.ac3}`} aria-hidden="true" />
              <div className={`${styles.artCard} ${styles.ac2}`} aria-hidden="true" />
              <div className={`${styles.artCard} ${styles.ac1}`} aria-hidden="true">
                <span className={styles.acTag} />
                <span className={styles.acHeadline} />
                <span className={styles.acSub} />
                <div className={styles.acImg} />
                <div className={styles.acLines}><span /><span /><span /></div>
                <div className={styles.acMeta}><span className={styles.acAvatar} /><span className={styles.acByline} /></div>
              </div>

              <motion.div className={styles.floatChip} style={{ x: reduce ? 0 : chipX, y: reduce ? 0 : chipY }} aria-hidden="true">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                Blog
              </motion.div>
              <motion.div className={styles.floatChip2} style={{ x: reduce ? 0 : chip2X, y: reduce ? 0 : chipY }} aria-hidden="true">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
                Otorite
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* ───────────── KEYWORD MARQUEE — topic ticker ───────────── */}
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...KEYWORDS, ...KEYWORDS].map((k, i) => (
            <span key={i} className={styles.kw}><span className={styles.kwStar}>*</span>{k}</span>
          ))}
        </div>
      </div>

      {/* ───────────── PILLARS — table of contents ───────────── */}
      <section className={styles.tocSection}>
        <div className={styles.tocWrap}>
          <motion.div className={styles.tocHead} initial="hidden" whileInView="show" viewport={VIEWPORT}>
            <motion.span className={styles.eyebrow} variants={fadeUp} custom={0}>Yaklaşımımız</motion.span>
            <motion.h2 className={styles.tocTitle} variants={fadeUp} custom={1}>Neden Wooji ile İçerik?</motion.h2>
          </motion.div>

          <ol className={styles.tocList}>
            {PILLARS.map((p, i) => (
              <motion.li
                key={p.t}
                className={styles.tocRow}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
                custom={i}
              >
                <span className={styles.tocNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.tocIcon}>{p.icon}</span>
                <span className={styles.tocName}>{p.t}</span>
                <span className={styles.tocLeader} aria-hidden="true" />
                <span className={styles.tocDesc}>{p.d}</span>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── FEATURES — magazine spread ───────────── */}
      <section className={styles.spreadSection}>
        <motion.div className={styles.spreadHead} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <div>
            <motion.span className={styles.eyebrow} variants={fadeUp} custom={0}>Repertuar</motion.span>
            <motion.h2 className={styles.spreadTitle} variants={fadeUp} custom={1}>İçerik Türlerimiz</motion.h2>
          </div>
          <motion.p className={styles.spreadSub} variants={fadeUp} custom={2}>
            Stratejiden dağıtıma, içeriğin her formatını sizin için üretiyoruz.
          </motion.p>
        </motion.div>

        <div className={styles.spread}>
          {FEATURES.map((f, i) => (
            <motion.article
              key={f.title}
              className={`${styles.column} ${f.lead ? styles.columnLead : ''}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              custom={i}
              whileHover={reduce ? undefined : { y: -5 }}
            >
              <span className={styles.colNum} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <div className={styles.colIcon}>{f.icon}</div>
              <h3 className={styles.colTitle}>{f.title}</h3>
              <p className={styles.colDesc}>{f.desc}</p>
            </motion.article>
          ))}

          {/* In-this-issue contents box */}
          <motion.div
            className={styles.issueBox}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            custom={1}
            whileHover={reduce ? undefined : { y: -5 }}
          >
            <span className={styles.issueLabel}>Bu Sayıda</span>
            <h3 className={styles.issueTitle}>Uçtan Uca İçerik Üretimi</h3>
            <p className={styles.issueDesc}>Strateji, üretim, dağıtım ve ölçüm — içerik pazarlamasının tüm döngüsünü tek elden yönetiriz.</p>
            <ul className={styles.contents}>
              {CHECKLIST.map((c, i) => (
                <motion.li
                  key={c}
                  className={styles.contentsItem}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.45, delay: 0.12 + i * 0.08, ease: EASE }}
                >
                  <span className={styles.contentsNum}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.contentsName}>{c}</span>
                  <span className={styles.contentsLeader} aria-hidden="true" />
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ───────────── PROCESS — editorial workflow with margin notes ───────────── */}
      <section className={styles.procSection}>
        <motion.div className={styles.procHead} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.span className={styles.eyebrow} variants={fadeUp} custom={0}>Akış</motion.span>
          <motion.h2 className={styles.procTitle} variants={fadeUp} custom={1}>Editoryal Süreç</motion.h2>
        </motion.div>

        <div className={styles.proc} ref={procRef}>
          <div className={styles.readTrack} aria-hidden="true">
            <motion.div className={styles.readFill} style={{ scaleY: reduce ? 1 : readLine }} />
          </div>
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              className={styles.procStep}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.6, delay: i * 0.05, ease: EASE }}
            >
              <div className={styles.margin}>
                <span className={styles.marginNum}>{s.n}</span>
                <span className={styles.marginTick} aria-hidden="true" />
              </div>
              <div className={styles.procBody}>
                <h3 className={styles.procStepTitle}>{s.t}</h3>
                <p className={styles.procStepDesc}>{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────────── FAQ — Q&A column ───────────── */}
      <section className={styles.faqSection}>
        <motion.div className={styles.faqHead} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          <motion.span className={styles.eyebrow} variants={fadeUp} custom={0}>Sorular</motion.span>
          <motion.h2 className={styles.faqTitle} variants={fadeUp} custom={1}>İçerik Hakkında</motion.h2>
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
                  <span className={styles.faqQMark} aria-hidden="true">S</span>
                  <span className={styles.faqQText}>{f.q}</span>
                  <motion.span className={styles.faqIco} animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3, ease: EASE }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
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
                      <p className={styles.faqAText}><span className={styles.faqAMark} aria-hidden="true">C</span>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ───────────── CTA — closing band ───────────── */}
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
          <span className={styles.eyebrow}>İçerik Stratejiniz Hazır</span>
          <h2 className={styles.ctaTitle}>Otoritenizi <span className={styles.ctaHi}>İnşa Edin</span></h2>
          <p className={styles.ctaDesc}>Ücretsiz içerik denetimi için iletişime geçin. Sektörünüzde düşünce lideri olma yolunu birlikte çizelim.</p>
          <a href="/#iletisim" className="btn btn-fill">{arrow} İçerik Stratejisi Al</a>
        </motion.div>
      </section>
    </div>
  )
}
