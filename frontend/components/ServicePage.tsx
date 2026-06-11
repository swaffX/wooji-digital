import React from 'react'
import SiteLayout from './SiteLayout'
import ServiceFaqSection from './ServiceFaqSection'
import styles from './ServicePage.module.css'

export interface ServiceStat { value: string; label: string }
export interface ServiceFeature { icon: React.ReactNode; title: string; desc: string }
export interface ServiceStep { num: string; title: string; desc: string }
export interface ServiceFaqItem { q: string; a: string }

export interface ServicePageConfig {
  tag: string
  title: string
  highlight: string
  desc: string
  heroIcon: React.ReactNode
  accent?: string
  stats: ServiceStat[]
  features: ServiceFeature[]
  process: ServiceStep[]
  faqs: ServiceFaqItem[]
}

export default function ServicePage({ config }: { config: ServicePageConfig }) {
  const { tag, title, highlight, desc, heroIcon, accent = '#7c3aed', stats, features, process, faqs } = config

  return (
    <SiteLayout>
      <div style={{ '--svc': accent } as React.CSSProperties}>
      {/* ── Hero ── */}
      <header className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroContent}>
          <div className={styles.heroIcon} aria-hidden="true">{heroIcon}</div>
          <div className={styles.tag}>{tag}</div>
          <h1 className={styles.heroTitle}>
            {title} <span className={styles.heroHighlight}>{highlight}</span>
          </h1>
          <p className={styles.heroDesc}>{desc}</p>
          <div className={styles.heroCtas}>
            <a href="/#iletisim" className="btn btn-fill">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              Ücretsiz Danışmanlık Al
            </a>
            <a href="/" className="btn btn-line">Anasayfa</a>
          </div>
        </div>
      </header>

      {/* ── Stats ── */}
      <div className={styles.statsBar}>
        <div className={styles.statsWrap}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statVal}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Features ── */}
      <section className={styles.featSection} aria-label="Hizmet kapsamı">
        <div className="wrap">
          <div className="centered">
            <div className="s-tag reveal">Kapsam</div>
            <h2 className="s-title reveal d1">
              Ne Sunuyoruz?
            </h2>
          </div>
          <div className={styles.featGrid}>
            {features.map((f, i) => (
              <div key={f.title} className={`${styles.featCard} reveal${i > 0 ? ` d${Math.min(i, 5)}` : ''}`}>
                <div className={styles.featIcon} aria-hidden="true">{f.icon}</div>
                <h3 className={styles.featTitle}>{f.title}</h3>
                <p className={styles.featDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className={styles.processSection} aria-label="Çalışma süreci">
        <div className="wrap">
          <div className="centered">
            <div className="s-tag reveal">Süreç</div>
            <h2 className="s-title reveal d1">Nasıl Çalışıyoruz?</h2>
          </div>
          <div className={styles.processSteps}>
            {process.map((step, i) => (
              <div key={step.num} className={`${styles.processStep} reveal${i > 0 ? ` d${Math.min(i, 5)}` : ''}`}>
                <div className={styles.processNum}>{step.num}</div>
                <div className={styles.processConnector} aria-hidden="true" />
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <ServiceFaqSection faqs={faqs} />

      {/* ── CTA ── */}
      <section className={styles.ctaSection} aria-label="İletişime geç">
        <div className={styles.ctaCard}>
          <div className={styles.ctaGlow} aria-hidden="true" />
          <h2 className={styles.ctaTitle}>
            Büyümeye Hazır <span className={styles.ctaHighlight}>Mısınız?</span>
          </h2>
          <p className={styles.ctaDesc}>
            Ücretsiz keşif görüşmesi için hemen iletişime geçin. Markanıza özel strateji hazırlayalım.
          </p>
          <a href="/#iletisim" className="btn btn-fill">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            Ücretsiz Danışmanlık Al
          </a>
        </div>
      </section>
      </div>
    </SiteLayout>
  )
}
