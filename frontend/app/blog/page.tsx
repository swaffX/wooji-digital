import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Blog | Wooji Digital',
  description: 'Dijital pazarlama, SEO, reklam yönetimi ve marka büyütme hakkında ipuçları ve stratejiler.',
}

const posts = [
  {
    slug: 'seo-nin-gelecegi-2024',
    category: 'SEO',
    date: '12 Ocak 2025',
    readTime: '6 dk',
    title: '2025\'te SEO\'nun Geleceği: Yapay Zeka ve İçerik Stratejisi',
    excerpt: 'Google\'ın SGE güncellemeleri ve yapay zeka destekli arama, SEO stratejilerini kökünden değiştiriyor. Markanızı bu değişime nasıl hazırlarsınız?',
    color: '#7c3aed',
  },
  {
    slug: 'google-ads-roas-artirma',
    category: 'Reklam',
    date: '28 Aralık 2024',
    readTime: '8 dk',
    title: 'Google Ads ile ROAS\'ınızı Artıracak 5 Strateji',
    excerpt: 'Reklam harcamalarınızdan maksimum verim almak için kullanabileceğiniz, veri destekli Google Ads optimizasyon teknikleri.',
    color: '#2563eb',
  },
  {
    slug: 'sosyal-medya-algoritmalari',
    category: 'Sosyal Medya',
    date: '15 Aralık 2024',
    readTime: '5 dk',
    title: 'Sosyal Medya Algoritmaları ve Organik Erişimi Artırmanın Yolları',
    excerpt: 'Instagram, TikTok ve LinkedIn algoritmalarının değişen dinamikleri karşısında organik erişiminizi nasıl korursunuz?',
    color: '#0891b2',
  },
  {
    slug: 'web-sitesi-donusum-orani',
    category: 'Web Tasarım',
    date: '3 Aralık 2024',
    readTime: '7 dk',
    title: 'Web Sitenizin Dönüşüm Oranını Artıracak 7 UX İpucu',
    excerpt: 'Ziyaretçiyi müşteriye dönüştüren web sayfaları nasıl tasarlanır? A/B testleriyle kanıtlanmış UX prensipleri.',
    color: '#7c3aed',
  },
  {
    slug: 'yerel-seo-rehberi',
    category: 'SEO',
    date: '18 Kasım 2024',
    readTime: '9 dk',
    title: 'Yerel SEO Rehberi: Google Haritalar\'da Üst Sıralara Çıkın',
    excerpt: 'Google Business Profile optimizasyonu, yerel anahtar kelimeler ve müşteri yorumları yönetimiyle yerel aramada öne çıkın.',
    color: '#2563eb',
  },
  {
    slug: 'icerik-pazarlama-stratejisi',
    category: 'İçerik',
    date: '5 Kasım 2024',
    readTime: '6 dk',
    title: 'Marka Otoritesi İnşa Eden İçerik Pazarlama Stratejisi',
    excerpt: 'İçerik takviminizi nasıl oluşturursunuz? Hedef kitlenizle rezonansa giren içerikler üretmenin sistematik yolu.',
    color: '#0891b2',
  },
]

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
