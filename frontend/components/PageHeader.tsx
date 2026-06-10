import styles from './PageHeader.module.css'

interface PageHeaderProps {
  tag: string
  title: string
  highlight: string
  desc?: string
}

export default function PageHeader({ tag, title, highlight, desc }: PageHeaderProps) {
  return (
    <section className={styles.header} aria-label="Sayfa başlığı">
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.content}>
        <div className={`${styles.tag} s-tag`}>{tag}</div>
        <h1 className={styles.title}>
          {title} <span className="gt">{highlight}</span>
        </h1>
        {desc && <p className={styles.desc}>{desc}</p>}
      </div>
    </section>
  )
}
