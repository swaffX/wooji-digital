import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import { posts } from './data'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Blog | Wooji Digital',
  description: 'Dijital pazarlama, SEO, reklam yönetimi ve marka büyütme hakkında ipuçları ve stratejiler.',
}

export default function BlogPage() {
  return (
    <>
      <PageHeader
        tag="İçgörüler & Stratejiler"
        title="Dijital Pazarlama"
        highlight="Blogu"
        desc="SEO, reklam yönetimi, sosyal medya ve marka büyütme hakkında güncel ipuçları ve derinlemesine analizler."
      />
      <section className={styles.section}>
        <div className={styles.grid}>
          {posts.map((post) => (
            <article key={post.slug} className={styles.card}>
              <div className={styles.cardMeta}>
                <span className={styles.cat} style={{ '--cat-color': post.color } as React.CSSProperties}>
                  {post.category}
                </span>
                <span className={styles.dot} aria-hidden="true">·</span>
                <time className={styles.date}>{post.date}</time>
                <span className={styles.dot} aria-hidden="true">·</span>
                <span className={styles.read}>{post.readTime} okuma</span>
              </div>
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.cardExcerpt}>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                Devamını Oku
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
