import AboutCard3D, { type Pillar } from './AboutCard3D'
import AboutStats from './AboutStats'
import styles from './About.module.css'

const pillars: Pillar[] = [
  {
    num: '01',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: 'Veri Odaklı',
    desc: 'Her karar veriye dayalı analiz',
  },
  {
    num: '02',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    title: 'Şeffaf Raporlama',
    desc: 'Anlık erişim, tam şeffaflık',
  },
  {
    num: '03',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'Yaratıcı Strateji',
    desc: 'Farklılaşan özgün çözümler',
  },
  {
    num: '04',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    title: 'Sonuç Odaklı',
    desc: 'Ölçülebilir büyüme garantisi',
  },
]

const differentiators = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    text: 'Her markaya özel strateji — şablon yok, kopya yok',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    text: 'Gerçek zamanlı raporlama ve tam şeffaflık',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    text: 'Küçük işletmeden kurumsal firmaya, her ölçekte deneyim',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    text: 'Yaratıcılık + veri + uygulama mükemmeliyeti bir arada',
  },
]

export default function About() {
  return (
    <section id="hakkimizda" className={styles.section} aria-labelledby="hakkimizda-h">
      <div className="wrap">
        <div className={styles.grid}>

          {/* ── Left: 3D card ── */}
          <div className="reveal">
            <AboutCard3D
              tag="Neden Wooji?"
              introText="Dijital dünyada sadece görünür olmak yetmez — doğru kişiye, doğru zamanda, doğru mesajla ulaşmak gerekir."
              pillars={pillars}
            />
          </div>

          {/* ── Right: content ── */}
          <div className={`${styles.text} reveal d2`}>
            <div className="s-tag">Hakkımızda</div>
            <h2 className="s-title" id="hakkimizda-h">
              Dijitalde Fark Yaratan<br />
              <span className="gt">Ekibiniz</span>
            </h2>

            <p className={styles.lead}>
              Wooji Digital, markaların dijital dünyada güçlü ve büyüyen bir varlık
              oluşturmasına yardımcı olan modern bir dijital pazarlama ajansıdır.
            </p>

            {/* Differentiators */}
            <ul className={styles.diffList} aria-label="Neden bizi seçmelisiniz">
              {differentiators.map((d, i) => (
                <li key={i} className={styles.diffItem}>
                  <span className={styles.diffIcon}>{d.icon}</span>
                  <span>{d.text}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <AboutStats />

            {/* Mission / Vision */}
            <div className={styles.mvPair}>
              <div className={styles.mv}>
                <div className={`${styles.mvBar} ${styles.mvBarPurple}`} />
                <h4 className={styles.mvHead}>Misyon</h4>
                <p>
                  Her markayı dijital dünyada en güçlü versiyonuyla var etmek için
                  strateji, yaratıcılık ve veriyi bir araya getirmek.
                </p>
              </div>
              <div className={styles.mv}>
                <div className={`${styles.mvBar} ${styles.mvBarCyan}`} />
                <h4 className={styles.mvHead}>Vizyon</h4>
                <p>
                  Türkiye&apos;nin en güvenilen dijital ajansı olarak markalarla
                  birlikte büyümek ve küresel standartlarda hizmet sunmak.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
