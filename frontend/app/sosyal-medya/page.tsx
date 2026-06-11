import type { Metadata } from 'next'
import SiteLayout from '@/components/SiteLayout'
import ServiceFaqSection from '@/components/ServiceFaqSection'
import ServiceCard3D from '@/components/ServiceCard3D'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Sosyal Medya Yönetimi | Wooji Digital',
  description: "Instagram, TikTok ve LinkedIn'de güçlü marka varlığı oluşturun. Etkileşim artıran içerikler ve topluluk yönetimi.",
  alternates: { canonical: '/sosyal-medya' },
}

const faqs = [
  { q: 'Ayda kaç gönderi yapıyorsunuz?', a: "Pakete göre Instagram'da haftada 4–7, TikTok'ta haftada 3–5 içerik yayınlıyoruz. Reels, carousel, story ve statik post formatlarında dengeli bir mix oluşturuyoruz." },
  { q: 'İçerikleri siz mi tasarlıyorsunuz?', a: 'Evet. Fotoğraf çekimi gerektirmeyen tüm grafik, video montaj ve metin içerikleri ekibimiz tarafından üretiliyor.' },
  { q: 'Hesap parolalarımı paylaşmak zorunda mıyım?', a: 'Hayır. Meta Business Suite üzerinden ajans erişimi tanımlıyoruz; bu sayede hesap kontrolü her zaman sizde kalır.' },
  { q: 'Kaç ayda bir sonuç görürüm?', a: 'Etkileşim oranı ve erişim artışı 1. ayda görülür. Anlamlı takipçi büyümesi ve marka farkındalığı 3–6 aylık süreçte oluşur.' },
]

export default function SosyalMedyaPage() {
  return (
    <SiteLayout>
      <div className={styles.root}>

        {/* ── HERO — Phone mockup ── */}
        <header className={styles.hero}>
          <div className={styles.heroBg} aria-hidden="true" />
          <div className={styles.heroOrb1} aria-hidden="true" />
          <div className={styles.heroOrb2} aria-hidden="true" />

          <div className={styles.heroLayout}>
            {/* Text left */}
            <div className={styles.heroText}>
              <span className="s-tag reveal">Sosyal Medya</span>
              <h1 className={`${styles.heroTitle} reveal d1`}>
                Büyüyen <span className={styles.heroHi}>Topluluk</span>
              </h1>
              <p className={`${styles.heroDesc} reveal d2`}>
                Instagram, TikTok ve LinkedIn&apos;de tutarlı, etkileşimli ve büyüyen bir marka varlığı inşa ediyoruz.
              </p>
              <div className={`${styles.heroCtas} reveal d3`}>
                <a href="/#iletisim" className="btn btn-fill">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  Büyümeye Başla
                </a>
                <a href="/" className="btn btn-line">Anasayfa</a>
              </div>
            </div>

            {/* Phone mockup center */}
            <div className={`${styles.phoneWrap} reveal d2`} aria-hidden="true">
              {/* Platform badges orbiting */}
              <div className={`${styles.platformBadge} ${styles.pb1}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                Instagram
              </div>
              <div className={`${styles.platformBadge} ${styles.pb2}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </div>
              <div className={`${styles.platformBadge} ${styles.pb3}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.95C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.95A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
                YouTube
              </div>

              {/* Phone frame */}
              <div className={styles.phone}>
                <div className={styles.phoneSpeaker} />
                <div className={styles.phoneScreen}>
                  <div className={styles.feedHeader}>
                    <div className={styles.feedAvatar} />
                    <div className={styles.feedMeta}><span /><span /></div>
                  </div>
                  <div className={styles.feedImg} />
                  <div className={styles.feedActions}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                  </div>
                  <div className={styles.feedLikes}><strong>1,248</strong> beğeni</div>
                  <div className={styles.feedCaption}><strong>markaismi</strong> Yeni koleksiyon...</div>
                </div>
                <div className={styles.phoneBar} />
              </div>

              {/* Floating engagement bubbles */}
              <div className={`${styles.engBubble} ${styles.eb1}`}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#db2777" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                +1.2K
              </div>
              <div className={`${styles.engBubble} ${styles.eb2}`}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                +340%
              </div>
            </div>
          </div>
        </header>

        {/* ── STATS — 2×2 with color accents ── */}
        <div className={styles.statsBar}>
          <div className={`${styles.statsGrid} wrap`}>
            {[
              { v: '10x', l: 'Takipçi büyümesi (6 ay)', c: '#db2777' },
              { v: '%8+', l: 'Ortalama etkileşim', c: '#8b5cf6' },
              { v: '30+', l: 'Aylık özgün içerik', c: '#0891b2' },
              { v: '24sa', l: 'Topluluk yanıt süresi', c: '#d97706' },
            ].map((st) => (
              <div key={st.l} className={styles.statCard} style={{ '--sc': st.c } as React.CSSProperties}>
                <div className={styles.statAccentBar} aria-hidden="true" />
                <span className={styles.statVal}>{st.v}</span>
                <span className={styles.statLabel}>{st.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── FEATURES ── */}
        <section className={styles.featSection}>
          <div className="wrap">
            <div className="centered">
              <span className="s-tag reveal">Kapsam</span>
              <h2 className="s-title reveal d1">Ne Sunuyoruz?</h2>
            </div>
            <div className={styles.featGrid}>
              {[
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>, title: 'İçerik Üretimi', desc: 'Görsel, video reels ve carousel formatlarında markanıza özgü, etkileşim odaklı içerikler tasarlıyoruz.', grad: 'linear-gradient(135deg, #e91e8c, #7c3aed)' },
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>, title: 'İçerik Takvimi', desc: 'Haftalık planlama ve onay süreciyle düzenli, stratejik yayın takvimi yönetiyoruz.', grad: 'linear-gradient(135deg, #7c3aed, #2563eb)' },
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title: 'Topluluk Yönetimi', desc: 'Yorum, mesaj ve etiketlemelere hızlı ve marka sesine uygun yanıtlar veriyoruz.', grad: 'linear-gradient(135deg, #2563eb, #0891b2)' },
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, title: "Influencer İş Birlikleri", desc: "Sektörünüzdeki doğru influencer'larla etkili ve ROI ölçülebilir kampanyalar planlıyoruz.", grad: 'linear-gradient(135deg, #db2777, #e91e8c)' },
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>, title: 'Analiz & Raporlama', desc: 'Erişim, etkileşim, takipçi büyümesi ve dönüşüm verilerini aylık raporlarla sunuyoruz.', grad: 'linear-gradient(135deg, #059669, #0891b2)' },
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>, title: 'Sosyal Medya Reklamları', desc: 'Organik büyümeyi hızlandıran, hedefli sosyal medya reklam kampanyaları yönetiyoruz.', grad: 'linear-gradient(135deg, #d97706, #dc2626)' },
              ].map((f, i) => (
                <ServiceCard3D key={f.title} className={`${styles.featCard} reveal${i > 0 ? ` d${Math.min(i, 5)}` : ''}`}
                  style={{ '--fg': f.grad } as React.CSSProperties}>
                  <div className={styles.featIconWrap}>{f.icon}</div>
                  <h3 className={styles.featTitle}>{f.title}</h3>
                  <p className={styles.featDesc}>{f.desc}</p>
                </ServiceCard3D>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS — 2×2 flow grid ── */}
        <section className={styles.processSection}>
          <div className="wrap">
            <div className="centered">
              <span className="s-tag reveal">Süreç</span>
              <h2 className="s-title reveal d1">Nasıl Çalışıyoruz?</h2>
            </div>
            <div className={styles.flowGrid}>
              {[
                { n: '01', t: 'Marka Sesi', d: "Markanızın tonu, görsel kimliği ve içerik stratejisi netleştiriliyor." },
                { n: '02', t: 'Rakip & Kitle Analizi', d: "Sektörünüzdeki en iyi hesaplar inceleniyor; hedef kitlenizin ilgi alanları belirleniyor." },
                { n: '03', t: 'Üretim & Yayın', d: "Aylık içerik takvimi oluşturuluyor, onaylanıyor ve otomatik yayınlanıyor." },
                { n: '04', t: 'Büyüme & Optimizasyon', d: "Etkileşim verileri analiz edilerek en iyi format ve saatler optimize ediliyor." },
              ].map((step, i) => (
                <div key={step.n} className={`${styles.flowStep} reveal${i > 0 ? ` d${Math.min(i, 5)}` : ''}`}>
                  <div className={styles.flowNum}>{step.n}</div>
                  <h3 className={styles.flowTitle}>{step.t}</h3>
                  <p className={styles.flowDesc}>{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <ServiceFaqSection faqs={faqs} />

        {/* ── CTA ── */}
        <section className={styles.ctaSection}>
          <div className="wrap">
            <div className={styles.ctaCard}>
              <div className={styles.ctaGlow} aria-hidden="true" />
              <span className="s-tag">Topluluğunuzu Büyütün</span>
              <h2 className={styles.ctaTitle}>
                Sosyal Medyada <span className={styles.ctaHi}>Fark Yaratın</span>
              </h2>
              <p className={styles.ctaDesc}>
                Ücretsiz sosyal medya denetimi için iletişime geçin. Profillerinizin büyüme potansiyelini analiz edelim.
              </p>
              <a href="/#iletisim" className="btn btn-fill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                Ücretsiz Analiz Al
              </a>
            </div>
          </div>
        </section>

      </div>
    </SiteLayout>
  )
}
