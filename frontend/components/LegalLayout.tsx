import React from 'react'
import SiteLayout from './SiteLayout'
import styles from './LegalLayout.module.css'

export interface LegalSection {
  id: string
  title: string
  content: React.ReactNode
}

interface Props {
  tag: string
  title: string
  highlight: string
  desc: string
  lastUpdated: string
  sections: LegalSection[]
}

export default function LegalLayout({ tag, title, highlight, desc, lastUpdated, sections }: Props) {
  return (
    <SiteLayout>
      <header className={styles.hero} aria-label="Sayfa başlığı">
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroContent}>
          <div className={styles.tag}>{tag}</div>
          <h1 className={styles.heroTitle}>
            {title} <span className={styles.heroHighlight}>{highlight}</span>
          </h1>
          <p className={styles.heroDesc}>{desc}</p>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} aria-hidden="true" />
            Son güncelleme: {lastUpdated}
          </div>
        </div>
      </header>

      <div className={styles.body}>
        <aside className={styles.toc} aria-label="İçindekiler">
          <div className={styles.tocInner}>
            <p className={styles.tocTitle}>İçindekiler</p>
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className={styles.tocLink}>
                {s.title}
              </a>
            ))}
          </div>
        </aside>

        <article className={styles.content}>
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className={styles.section}>
              <div className={styles.sectionHead}>
                <span className={styles.sectionNum} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className={styles.sectionTitle}>{s.title}</h2>
              </div>
              <div className={styles.sectionBody}>{s.content}</div>
            </section>
          ))}
        </article>
      </div>
    </SiteLayout>
  )
}
