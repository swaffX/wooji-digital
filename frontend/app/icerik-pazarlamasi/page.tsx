import type { Metadata } from 'next'
import SiteLayout from '@/components/SiteLayout'
import ServiceFaqSection from '@/components/ServiceFaqSection'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'İçerik Pazarlaması | Wooji Digital',
  description: 'SEO uyumlu, dönüştüren içeriklerle marka otoritenizi inşa edin. Blog, e-posta ve video içerik stratejisi.',
  alternates: { canonical: '/icerik-pazarlamasi' },
}

const faqs = [
  { q: 'Kim içerikleri yazıyor?', a: "Deneyimli Türkçe içerik yazarlarından oluşan ekibimiz yazıyor; SEO uzmanımız optimize ediyor. Her içerik markanızın sesi ve brief'e uygun üretiliyor." },
  { q: 'İçerikleri onaylamak için sürem ne kadar?', a: 'Her içerik yayından 5–7 gün önce size iletilir; 2 tur revizyon hakkınız bulunur.' },
  { q: 'E-posta listemi yoksa nasıl başlarım?', a: 'Lead magnet tasarımı, açılış sayfası ve opt-in formu kurulumu dahil olmak üzere sıfırdan e-posta listesi oluşturma hizmeti de sunuyoruz.' },
  { q: 'İçerik pazarlaması ne zaman ROI sağlar?', a: 'Organik içerik uzun vadeli bir yatırımdır. İlk 3 ayda trafik artışı başlar; anlamlı ROI genellikle 6–12 aylık süreçte oluşur.' },
]

export default function IcerikPazarlamasiPage() {
  return (
    <SiteLayout>
      <div className={styles.root}>

        {/* ── HERO — Editorial split ── */}
        <header className={styles.hero}>
          <div className={styles.heroBg} aria-hidden="true" />

          <div className={styles.heroSplit}>
            {/* Left: editorial text */}
            <div className={styles.heroLeft}>
              <span className={`${styles.heroEdTag} reveal`}>İçerik Pazarlama</span>
              <h1 className={`${styles.heroTitle} reveal d1`}>
                Otorite <span className={styles.heroHi}>İnşası</span>
                <span className={styles.heroCursor} aria-hidden="true" />
              </h1>
              <p className={`${styles.heroDesc} reveal d2`}>
                SEO uyumlu, hedef kitlenizi bilgilendiren ve dönüştüren içeriklerle markanızı sektörünüzde düşünce lideri konumuna taşıyoruz.
              </p>
              <div className={`${styles.heroCtas} reveal d3`}>
                <a href="/#iletisim" className="btn btn-fill">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  İçerik Stratejisi Al
                </a>
                <a href="/" className="btn btn-line">Anasayfa</a>
              </div>
            </div>

            {/* Right: article card stack */}
            <div className={`${styles.articleStack} reveal d2`} aria-hidden="true">
              <div className={`${styles.articleCard} ${styles.ac3}`}>
                <div className={styles.acTag}>Whitepaper</div>
                <div className={styles.acTitle} />
                <div className={styles.acMeta}><div /><div /></div>
              </div>
              <div className={`${styles.articleCard} ${styles.ac2}`}>
                <div className={styles.acTag}>E-posta</div>
                <div className={styles.acTitle} />
                <div className={styles.acBody}><div /><div /><div /></div>
                <div className={styles.acMeta}><div /><div /></div>
              </div>
              <div className={`${styles.articleCard} ${styles.ac1}`}>
                <div className={styles.acTag} style={{ background: 'rgba(217,119,6,0.15)', color: '#d97706', borderColor: 'rgba(217,119,6,0.2)' }}>Blog Yazısı</div>
                <div className={styles.acTitle} />
                <div className={styles.acBody}><div /><div /><div /></div>
                <div className={styles.acImg} />
                <div className={styles.acMeta}><div /><div /></div>
              </div>
            </div>
          </div>
        </header>

        {/* ── STATS — Editorial columns ── */}
        <div className={styles.statsBar}>
          <div className={`${styles.statsRow} wrap`}>
            {[
              { v: '%55', l: 'Daha fazla organik trafik' },
              { v: '3x', l: 'Lead artışı' },
              { v: '4–8', l: 'Aylık makale sayısı' },
              { v: '%6+', l: 'Blog dönüşüm oranı' },
            ].map((st) => (
              <div key={st.l} className={styles.statCol}>
                <span className={styles.statVal}>{st.v}</span>
                <span className={styles.statLabel}>{st.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── FEATURES — Magazine editorial grid ── */}
        <section className={styles.featSection}>
          <div className="wrap">
            <div className="centered">
              <span className="s-tag reveal">Kapsam</span>
              <h2 className="s-title reveal d1">Ne Sunuyoruz?</h2>
            </div>
            <div className={styles.magazineGrid}>
              {/* Wide feature card */}
              <div className={`${styles.wideCard} reveal`}>
                <div className={styles.wideLeft}>
                  <div className={styles.featIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  </div>
                  <h3 className={styles.wideTitle}>Blog & Makale</h3>
                  <p className={styles.wideDesc}>Keyword odaklı, uzman kalitesinde blog yazıları ve rehber makaleler üretiyoruz. Her yazı okuyucuyu bir sonraki adıma yönlendirecek CTA yapısıyla tamamlanır.</p>
                </div>
                <div className={styles.wideRight} aria-hidden="true">
                  <div className={styles.articlePreview}>
                    <div className={styles.previewHeadline} />
                    <div className={styles.previewLines}><div/><div/><div/><div/></div>
                    <div className={styles.previewMeta}><div/><div/></div>
                  </div>
                </div>
              </div>

              {/* Regular small cards */}
              {[
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, title: 'E-posta Pazarlaması', desc: "Segmentlere ayrılmış, kişiselleştirilmiş e-posta kampanyaları ve drip sequence'lar tasarlıyoruz." },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>, title: 'Video Script', desc: 'YouTube, Reels ve TikTok için izletilen, marka mesajını ileten video senaryoları yazıyoruz.' },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>, title: 'Whitepaper & E-Kitap', desc: 'Potansiyel müşterilerinizi çeken, lead magnet olarak kullanabileceğiniz derinlikli içerikler.' },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>, title: 'Keyword Araştırması', desc: "Rekabeti düşük, dönüşüm potansiyeli yüksek keyword'leri tespit ederek içerik planı oluşturuyoruz." },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title: 'İçerik Dağıtımı', desc: 'Üretilen içerikleri doğru kanallarda, doğru zamanda yayınlayarak maksimum erişim sağlıyoruz.' },
              ].map((f, i) => (
                <div key={f.title} className={`${styles.featCard} reveal${i > 0 ? ` d${Math.min(i, 5)}` : ''}`}>
                  <div className={styles.featIcon}>{f.icon}</div>
                  <h3 className={styles.featTitle}>{f.title}</h3>
                  <p className={styles.featDesc}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS — Vertical editorial pipeline ── */}
        <section className={styles.processSection}>
          <div className="wrap">
            <div className={styles.processInner}>
              <div className={styles.processHeader}>
                <span className="s-tag reveal">Süreç</span>
                <h2 className="s-title reveal d1">Nasıl Çalışıyoruz?</h2>
              </div>
              <div className={styles.editPipeline}>
                {[
                  { n: '01', t: 'Strateji & Planlama', d: "Hedef kitle persona'ları, içerik sütunları ve keyword haritası oluşturuluyor.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
                  { n: '02', t: 'Üretim', d: "Brief hazırlanıyor, içerikler yazılıyor ve SEO optimizasyonuyla teslim ediliyor.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg> },
                  { n: '03', t: 'Dağıtım', d: "İçerikler site, sosyal medya ve e-posta kanallarında planlı şekilde yayınlanıyor.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg> },
                  { n: '04', t: 'Performans Ölçümü', d: "Trafik, etkileşim ve lead metrikleri izlenerek içerik stratejisi sürekli iyileştiriliyor.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
                ].map((step, i) => (
                  <div key={step.n} className={`${styles.editStep} reveal${i > 0 ? ` d${Math.min(i, 5)}` : ''}`}>
                    <div className={styles.editIcon}>{step.icon}</div>
                    <div className={styles.editBody}>
                      <div className={styles.editNum}>{step.n}</div>
                      <h3 className={styles.editTitle}>{step.t}</h3>
                      <p className={styles.editDesc}>{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
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
              <span className="s-tag">İçerik Stratejiniz Hazır</span>
              <h2 className={styles.ctaTitle}>
                Otoritenizi <span className={styles.ctaHi}>İnşa Edin</span>
              </h2>
              <p className={styles.ctaDesc}>
                Ücretsiz içerik denetimi için iletişime geçin. Sektörünüzde düşünce lideri konumuna giden yolu birlikte çizelim.
              </p>
              <a href="/#iletisim" className="btn btn-fill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                İçerik Denetimi Al
              </a>
            </div>
          </div>
        </section>

      </div>
    </SiteLayout>
  )
}
