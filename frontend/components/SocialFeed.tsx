import styles from './SocialFeed.module.css'

const posts = [
  { id: 'p1', bg: 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)', label: 'SEO İpuçları' },
  { id: 'p2', bg: 'linear-gradient(135deg, #0891b2 0%, #2563eb 100%)', label: 'Google Ads' },
  { id: 'p3', bg: 'linear-gradient(135deg, #7c3aed 0%, #0891b2 100%)', label: 'Vaka Çalışması' },
  { id: 'p4', bg: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)', label: 'Web Tasarım' },
  { id: 'p5', bg: 'linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)', label: 'Strateji' },
  { id: 'p6', bg: 'linear-gradient(135deg, #4f46e5 0%, #0891b2 100%)', label: 'Analitik' },
]

export default function SocialFeed() {
  return (
    <section className={styles.section} aria-label="Sosyal medya">
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.meta}>
            <span className={styles.handle}>@woojidigital</span>
            <p className={styles.tagline}>Dijital pazarlama tüyoları, vaka çalışmaları ve güncel trendler</p>
          </div>
          <div className={styles.socBtns}>
            <a
              href="https://instagram.com/woojidigital"
              className={styles.socBtn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              Instagram
            </a>
            <a
              href="https://tiktok.com/@woojidigital"
              className={styles.socBtn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.02-.07z"/>
              </svg>
              TikTok
            </a>
          </div>
        </div>

        <div className={styles.grid} aria-label="Son paylaşımlar">
          {posts.map((p) => (
            <a
              key={p.id}
              href="https://instagram.com/woojidigital"
              className={styles.post}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.label} paylaşımını gör`}
            >
              <div className={styles.postBg} style={{ background: p.bg }} aria-hidden="true" />
              <div className={styles.postOverlay} aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
              <span className={styles.postLabel}>{p.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
