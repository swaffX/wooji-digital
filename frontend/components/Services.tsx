import FadeUp from './FadeUp'
import styles from './Services.module.css'

const serviceLinks: Record<string, string> = {
  sv1: '/seo-hizmetleri',
  sv2: '/dijital-reklam',
  sv3: '/web-tasarim',
  sv4: '/sosyal-medya',
  sv5: '/icerik-pazarlamasi',
  sv6: '/analitik-strateji',
}

const services = [
  {
    id: 'sv1',
    num: '01',
    featured: true,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    title: 'SEO & Organik Büyüme',
    desc: 'Arama motorlarında kalıcı görünürlük kazanın. Teknik SEO, içerik stratejisi ve backlink yönetimiyle organik trafiğinizi katlıyoruz.',
    bullets: ['Teknik SEO Denetimi', 'İçerik Stratejisi', 'Backlink Yönetimi'],
  },
  {
    id: 'sv2',
    num: '02',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M11 5L6 9H2v6h4l5 4V5z"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
      </svg>
    ),
    title: 'Dijital Reklam Yönetimi',
    desc: 'Google Ads, Meta ve diğer platformlarda hedef kitlenize ulaşan, yüksek dönüşüm oranlı reklam kampanyaları planlıyor ve yönetiyoruz.',
    bullets: ['Google & Meta Ads', 'Hedef Kitle Optimizasyonu', 'ROI Takip & Raporlama'],
  },
  {
    id: 'sv3',
    num: '03',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Web Tasarım & Geliştirme',
    desc: 'Dönüşüm odaklı, hızlı ve kullanıcı dostu web siteleri tasarlıyor ve geliştiriyoruz. Markanızın dijital yüzünü en güçlü haliyle kuruyoruz.',
    bullets: ['Dönüşüm Odaklı Tasarım', 'Hız & Performans', 'SEO Uyumlu Altyapı'],
  },
  {
    id: 'sv4',
    num: '04',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <path d="M12 18h.01"/>
      </svg>
    ),
    title: 'Sosyal Medya Yönetimi',
    desc: 'Instagram, LinkedIn ve diğer platformlarda güçlü ve tutarlı marka varlığı oluşturan içerik stratejileri ve topluluk yönetimi hizmetleri.',
    bullets: ['İçerik Üretimi & Planlama', 'Topluluk Yönetimi', 'Etkileşim Analizi'],
  },
  {
    id: 'sv5',
    num: '05',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
    title: 'İçerik Pazarlaması',
    desc: 'SEO uyumlu, dönüştüren ve marka sesinizi yansıtan blog yazıları, video scriptler ve pazarlama materyalleri üretiyoruz.',
    bullets: ['Blog & Makale Yazarlığı', 'Video Script', 'E-posta Pazarlaması'],
  },
  {
    id: 'sv6',
    num: '06',
    full: true,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: 'Analitik & Strateji',
    desc: 'Verilere dayalı kararlarla büyüyen markalar için kapsamlı performans analizi, raporlama ve dijital büyüme stratejisi danışmanlığı.',
    bullets: ['Performans Analizi', 'Aylık Raporlama', 'Büyüme Danışmanlığı'],
  },
]

export default function Services() {
  return (
    <section id="hizmetler" className={styles.section} aria-labelledby="hizmetler-h">
      <div className="wrap">
        <div className="centered">
          <div className="s-tag reveal">Hizmetlerimiz</div>
          <h2 className="s-title reveal d1" id="hizmetler-h">
            İşinizi Büyüten <span className="gt">Çözümler</span>
          </h2>
          <p className="s-sub reveal d2">
            Her ihtiyaca özel, ölçülebilir sonuçlar sunan kapsamlı dijital pazarlama hizmetleri.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s, i) => {
            const cls = [
              styles.card,
              s.featured ? styles.featured : '',
              'full' in s && s.full ? styles.cardFull : '',
            ].filter(Boolean).join(' ')

            return (
              <FadeUp
                key={s.id}
                delay={i * 0.08}
                tag="article"
                className={cls}
              >
                <span className={styles.badge} aria-hidden="true">{s.num}</span>

                <div className={styles.icon}>{s.icon}</div>

                <div className={styles.cardMid}>
                  <h3 id={s.id}>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul className={styles.bullets} aria-label={`${s.title} kapsamı`}>
                    {s.bullets.map((b) => (
                      <li key={b} className={styles.bullet}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={serviceLinks[s.id] ?? '#iletisim'}
                  className={styles.ghostBtn}
                  aria-label={`${s.title} detay sayfası`}
                >
                  Detayları Gör
                  <svg className={styles.arrow} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </FadeUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}
