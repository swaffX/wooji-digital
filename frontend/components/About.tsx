import styles from './About.module.css'

const pillars = [
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

export default function About() {
  return (
    <section id="hakkimizda" className={styles.section} aria-labelledby="hakkimizda-h">
      <div className="wrap">
        <div className={styles.grid}>
          <div className="reveal">
            <div className={styles.box}>
              <div className="s-tag">Neden Wooji?</div>
              <p className={styles.boxIntro}>
                Dijital dünyada sadece görünür olmak yetmez — doğru kişiye, doğru zamanda,
                doğru mesajla ulaşmak gerekir.
              </p>
              <div className={styles.pillars}>
                {pillars.map((p) => (
                  <div key={p.title} className={styles.pillar}>
                    <div className={styles.pillarNum}>{p.num}</div>
                    <span className={styles.pillarIcon}>{p.icon}</span>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`${styles.text} reveal d2`}>
            <div className="s-tag">Hakkımızda</div>
            <h2 className="s-title" id="hakkimizda-h">
              Dijitalde Fark Yaratan<br />
              <span className="gt">Ekibiniz</span>
            </h2>
            <p>
              Wooji Digital, markaların dijital dünyada güçlü, tutarlı ve büyüyen bir varlık
              oluşturmasına yardımcı olan modern bir dijital pazarlama ajansıdır.
            </p>
            <p>
              Küçük işletmelerden kurumsal firmalara, e-ticaret markalarından kişisel markalara
              kadar her ölçekte müşterimizin ihtiyacına özel stratejiler geliştiriyoruz.
              Yaratıcılığı veriyle, stratejiyi uygulama mükemmeliyetiyle buluşturuyoruz.
            </p>
            <div className={styles.mvPair}>
              <div className={`${styles.mv} ${styles.mvMission}`}>
                <h4>Misyonumuz</h4>
                <p>
                  Her markayı dijital dünyada en güçlü versiyonuyla var etmek için strateji,
                  yaratıcılık ve veriyi bir araya getirmek.
                </p>
              </div>
              <div className={`${styles.mv} ${styles.mvVision}`}>
                <h4>Vizyonumuz</h4>
                <p>
                  Türkiye&apos;nin en güvenilen ve yenilikçi dijital ajansı olarak markalarla
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
