import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { posts, getPost } from '../data'
import styles from './page.module.css'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} | Wooji Digital Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Wooji Digital'],
      url: `https://woojidigital.com/blog/${post.slug}`,
    },
  }
}

function renderContent(raw: string) {
  const lines = raw.trim().split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className={styles.h2}>{line.slice(3)}</h2>)
      i++
      continue
    }

    if (line.startsWith('| ') && line.endsWith('|')) {
      const tableLines: string[] = []
      while (i < lines.length && lines[i].startsWith('|')) {
        tableLines.push(lines[i])
        i++
      }
      const headers = tableLines[0].split('|').filter(Boolean).map(s => s.trim())
      const rows = tableLines.slice(2).map(r => r.split('|').filter(Boolean).map(s => s.trim()))
      elements.push(
        <div key={`table-${i}`} className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>{headers.map((h, hi) => <th key={hi}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )
      continue
    }

    if (line.startsWith('- ') || line.match(/^\d+\. /)) {
      const isBullet = line.startsWith('- ')
      const listItems: string[] = []
      while (i < lines.length && (lines[i].startsWith('- ') || lines[i].match(/^\d+\. /))) {
        listItems.push(isBullet ? lines[i].slice(2) : lines[i].replace(/^\d+\. /, ''))
        i++
      }
      const Tag = isBullet ? 'ul' : 'ol'
      elements.push(
        <Tag key={`list-${i}`} className={styles.list}>
          {listItems.map((item, li) => (
            <li key={li} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </Tag>
      )
      continue
    }

    if (line.trim() === '') {
      i++
      continue
    }

    elements.push(
      <p key={i} className={styles.para} dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
    )
    i++
  }

  return elements
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const otherPosts = posts.filter(p => p.slug !== slug).slice(0, 3)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Organization', name: 'Wooji Digital', url: 'https://woojidigital.com' },
    publisher: {
      '@type': 'Organization',
      name: 'Wooji Digital',
      logo: { '@type': 'ImageObject', url: 'https://woojidigital.com/logo.jpg' },
    },
    datePublished: post.date,
    url: `https://woojidigital.com/blog/${post.slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://woojidigital.com/blog/${post.slug}` },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />
      <main className={styles.main}>
        <div className={styles.heroWrap}>
          <div className={styles.heroBg} style={{ '--accent': post.color } as React.CSSProperties} />
          <div className={styles.heroInner}>
            <div className={styles.heroMeta}>
              <span className={styles.catBadge} style={{ '--accent': post.color } as React.CSSProperties}>
                {post.category}
              </span>
              <span className={styles.sep} aria-hidden="true">·</span>
              <time className={styles.metaText}>{post.date}</time>
              <span className={styles.sep} aria-hidden="true">·</span>
              <span className={styles.metaText}>{post.readTime} okuma</span>
            </div>
            <h1 className={styles.heroTitle}>{post.title}</h1>
            <p className={styles.heroExcerpt}>{post.excerpt}</p>
          </div>
        </div>

        <div className={styles.layout}>
          <article className={styles.article}>
            {renderContent(post.content)}
          </article>

          <aside className={styles.sidebar}>
            <div className={styles.sideCard}>
              <p className={styles.sideLabel}>Yazar</p>
              <div className={styles.authorRow}>
                <div className={styles.authorAvatar} style={{ '--accent': post.color } as React.CSSProperties}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div>
                  <p className={styles.authorName}>Wooji Digital</p>
                  <p className={styles.authorRole}>Dijital Pazarlama Uzmanı</p>
                </div>
              </div>
            </div>

            <div className={styles.sideCard}>
              <p className={styles.sideLabel}>Diğer Yazılar</p>
              <div className={styles.relatedList}>
                {otherPosts.map(p => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className={styles.relatedItem}>
                    <span className={styles.relatedDot} style={{ '--accent': p.color } as React.CSSProperties} />
                    <span className={styles.relatedTitle}>{p.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/blog" className={styles.backBtn}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M19 12H5M12 5l-7 7 7 7"/>
              </svg>
              Tüm Yazılar
            </Link>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  )
}
