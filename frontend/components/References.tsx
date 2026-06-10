import styles from './References.module.css'

const logos = ['Marka A','Marka B','Marka C','Marka D','Marka E','Marka F','Marka G','Marka H','Marka I','Marka J']

const testimonials = [
  {
    id: 'tc1',
    quote: 'Wooji Digital ile çalışmaya başladıktan sonra organik trafiğimiz %240 arttı. Şeffaf raporlama ve veri odaklı yaklaşımları gerçekten fark yaratıyor.',
    initials: 'AY',
    name: 'Ahmet Yılmaz',
    role: 'CEO, Tekno Market',
  },
  {
    id: 'tc2',
    quote: 'E-ticaret sitemizin dönüşüm oranı 3 ay içinde 2 katına çıktı. Profesyonel ekip ve güvenilir sonuçlar için doğru adres.',
    initials: 'FK',
    name: 'Fatma Kaya',
    role: 'Kurucu, Moda Kolektif',
  },
  {
    id: 'tc3',
    quote: 'Sosyal medya stratejimizi devrettik; takipçi sayımız 6 ayda 10 kata çıktı. Kesinlikle tavsiye ederim, harika bir ekip.',
    initials: 'MÖ',
    name: 'Mehmet Öztürk',
    role: 'Genel Müdür, Öztürk Group',
  },
]

const StarIcon = () => (
  <svg className={styles.star} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

export default function References() {
  return (
    <section id="referanslar" className={styles.section} aria-labelledby="referanslar-h">
      <div className="wrap">
        <div className="centered">
          <div className="s-tag reveal">Referanslarımız</div>
          <h2 className="s-title reveal d1" id="referanslar-h">
            Güvenen <span className="gt">Markalar</span>
          </h2>
          <p className="s-sub reveal d2">
            Farklı sektörlerden markalar Wooji Digital ile dijitalde büyüyor.
          </p>
        </div>
      </div>

      <div className={styles.runner} aria-label="Müşteri logoları" aria-hidden="true">
        <div className={styles.track}>
          {[...logos, ...logos].map((name, i) => (
            <div key={i} className={styles.pill}>{name}</div>
          ))}
        </div>
      </div>

      <div className="wrap">
        <div className={styles.testimonials}>
          {testimonials.map((t, i) => (
            <article
              key={t.id}
              className={`${styles.card} reveal${i > 0 ? ` d${i}` : ''}`}
              aria-labelledby={t.id}
            >
              <div className={styles.stars} aria-label="5 yıldız değerlendirme">
                {Array.from({ length: 5 }).map((_, si) => <StarIcon key={si} />)}
              </div>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <div className={styles.author}>
                <div className={styles.avatarWrap} aria-hidden="true">
                  <div className={styles.avatarRing} />
                  <div className={styles.avatar}>{t.initials}</div>
                </div>
                <div>
                  <p className={styles.name} id={t.id}>{t.name}</p>
                  <p className={styles.role}>{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
