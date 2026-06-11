import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import { posts } from './data'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Blog | Wooji Digital',
  description: 'Dijital pazarlama, SEO, reklam yönetimi ve marka büyütme hakkında ipuçları ve stratejiler.',
}

interface Props {
  searchParams: Promise<{ cat?: string }>
}

export default async function BlogPage({ searchParams }: Props) {
  const { cat } = await searchParams
  const active = cat ?? 'Tümü'
  const categories = ['Tümü', ...Array.from(new Set(posts.map((p) => p.category)))]
  const filtered = active === 'Tümü' ? posts : posts.filter((p) => p.category === active)

  return (
    <>
      <PageHeader
        tag="İçgörüler & Stratejiler"
        title="Dijital Pazarlama"
        highlight="Blogu"
        desc="SEO, reklam yönetimi, sosyal medya ve marka büyütme hakkında güncel ipuçları ve derinlemesine analizler."
      />
      <section className={styles.section}>
        <div className="wrap">
          {/* ── Category filter ── */}
          <div className={styles.filters} role="navigation" aria-label="Kategori filtresi">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={cat === 'Tümü' ? '/blog' : `/blog?cat=${encodeURIComponent(cat)}`}
                className={`${styles.filterPill} ${active === cat ? styles.filterActive : ''}`}
              >
                {cat}
              </Link>
            ))}
          </div>

          {/* ── Post count ── */}
          {active !== 'Tümü' && (
            <p className={styles.resultCount}>
              <span>{filtered.length}</span> yazı bulundu
            </p>
          )}

          {/* ── Grid ── */}
          <div className={styles.grid}>
            {filtered.map((post) => (
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

          {filtered.length === 0 && (
            <div className={styles.empty}>Bu kategoride henüz yazı yok.</div>
          )}
        </div>
      </section>
    </>
  )
}
