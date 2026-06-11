import type { Metadata } from 'next'
import SiteLayout from '@/components/SiteLayout'
import ServiceFaqSection from '@/components/ServiceFaqSection'
import ServiceCard3D from '@/components/ServiceCard3D'
import AnimatedStat from '@/components/AnimatedStat'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Dijital Reklam Yönetimi | Wooji Digital',
  description: 'Google Ads ve Meta reklam yönetimiyle hedef kitlenize ulaşın. Düşük maliyetle yüksek dönüşüm sağlayan kampanyalar.',
  alternates: { canonical: '/dijital-reklam' },
}

const faqs = [
  { q: 'Minimum reklam bütçesi ne kadar olmalı?', a: 'Etkili bir kampanya için aylık en az 3.000–5.000 TL reklam bütçesi öneriyoruz. Yönetim ücreti bu tutara ek hesaplanır.' },
  { q: 'Reklam hesabım bende kalır mı?', a: 'Evet. Google Ads ve Meta hesaplarınız sizin adınıza açılır. İş birliği sona erdiğinde hesaplar ve tüm geçmiş veriler size ait olur.' },
  { q: 'Ne zaman satış almaya başlarım?', a: 'Kampanya yayına girdikten sonra 1–2 haftada ilk dönüşümler görülmeye başlar. En iyi sonuçlar 2–3. ayda elde edilir.' },
  { q: 'Reklam sonuçlarını nasıl raporluyorsunuz?', a: 'Haftalık kısa özet ve aylık kapsamlı raporlar sunuyoruz. İstediğiniz zaman erişebileceğiniz canlı dashboard da hazırlıyoruz.' },
]

export default function DijitalReklamPage() {
  return (
    <SiteLayout>
      <div className={styles.root}>

        {/* ── HERO — Split Layout ── */}
        <header className={styles.hero}>
          <div className={styles.heroBg} aria-hidden="true" />
          <div className={styles.targetRing1} aria-hidden="true" />
          <div className={styles.targetRing2} aria-hidden="true" />
          <div className={styles.targetRing3} aria-hidden="true" />

          <div className={styles.heroSplit}>
            {/* Left: text */}
            <div className={styles.heroLeft}>
              <span className="s-tag reveal">Dijital Reklam</span>
              <h1 className={`${styles.heroTitle} reveal d1`}>
                Yüksek <span className={styles.heroHi}>Dönüşüm</span>
              </h1>
              <p className={`${styles.heroDesc} reveal d2`}>
                Google Ads, Meta ve diğer platformlarda hedef kitlenize ulaşan, ROI odaklı reklam kampanyaları planlıyor ve yönetiyoruz.
              </p>
              <div className={`${styles.heroCtas} reveal d3`}>
                <a href="/#iletisim" className="btn btn-fill">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  Kampanya Başlat
                </a>
                <a href="/" className="btn btn-line">Anasayfa</a>
              </div>
            </div>

            {/* Right: ad dashboard mockup */}
            <div className={`${styles.heroRight} reveal d2`} aria-hidden="true">
              <div className={styles.dashCard}>
                <div className={styles.dashHeader}>
                  <span className={styles.dashDot} style={{ background: '#ef4444' }} />
                  <span className={styles.dashDot} style={{ background: '#f59e0b' }} />
                  <span className={styles.dashDot} style={{ background: '#22c55e' }} />
                  <span className={styles.dashTitle}>Kampanya Paneli</span>
                </div>
                <div className={styles.dashMetrics}>
                  <div className={`${styles.metric} ${styles.metricA}`}>
                    <span className={styles.metricVal}>3.2x</span>
                    <span className={styles.metricKey}>ROAS</span>
                    <span className={styles.metricDelta}>+18%</span>
                  </div>
                  <div className={`${styles.metric} ${styles.metricB}`}>
                    <span className={styles.metricVal}>%4.8</span>
                    <span className={styles.metricKey}>CTR</span>
                    <span className={styles.metricDelta}>+0.7%</span>
                  </div>
                  <div className={`${styles.metric} ${styles.metricC}`}>
                    <span className={styles.metricVal}>₺24</span>
                    <span className={styles.metricKey}>CPA</span>
                    <span className={styles.metricDelta}>-25%</span>
                  </div>
                </div>
                <div className={styles.dashBar}>
                  <span className={styles.dashBarLabel}>Bütçe kullanımı</span>
                  <div className={styles.dashBarTrack}><div className={styles.dashBarFill} /></div>
                  <span className={styles.dashBarPct}>%78</span>
                </div>
                <div className={styles.dashStatus}>
                  <span className={styles.statusDot} />
                  <span>42 aktif reklam grubu</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── STATS — Animated horizontal bar ── */}
        <div className={styles.statsBar}>
          <div className={`${styles.statsInner} wrap`}>
            {[
              { v: '3.2x', l: 'Ortalama ROAS', c: '#3b82f6' },
              { v: '%25', l: 'Düşük CPA', c: '#8b5cf6' },
              { v: '1–2 hf', l: 'İlk Sonuç', c: '#0891b2' },
              { v: '50+', l: 'Aktif Kampanya', c: '#2563eb' },
            ].map((st) => (
              <AnimatedStat
                key={st.l}
                value={st.v}
                label={st.l}
                className={styles.statItem}
                valClassName={styles.statVal}
                labelClassName={styles.statLabel}
                color={st.c}
              />
            ))}
          </div>
        </div>

        {/* ── FEATURES — 2-col offset ── */}
        <section className={styles.featSection}>
          <div className="wrap">
            <div className="centered">
              <span className="s-tag reveal">Kapsam</span>
              <h2 className="s-title reveal d1">Ne Sunuyoruz?</h2>
            </div>
            <div className={styles.featGrid}>
              {[
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>, title: 'Google Ads', desc: 'Arama, Display ve Shopping kampanyalarıyla satın alma niyeti yüksek kullanıcılara ulaşıyoruz.' },
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>, title: 'Meta Reklam', desc: 'Facebook ve Instagram reklam ekosisteminde güçlü hedefleme ve yaratıcı içeriklerle dönüşüm sağlıyoruz.' },
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title: 'Yeniden Hedefleme', desc: 'Sitenizi ziyaret edip dönüşüm gerçekleştirmeyenlere özel kişiselleştirilmiş reklamlar sunuyoruz.' },
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>, title: 'ROI Optimizasyonu', desc: "Her kuruşun nereye gittiğini izliyor, verimsiz harcamaları keserek bütçenizi en verimli noktaya taşıyoruz." },
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>, title: 'Reklam Metni & Kreatif', desc: 'Tıklanma oranını artıran başlıklar, görseller ve video içerikler üretiyoruz.' },
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>, title: 'A/B Testi', desc: 'Farklı başlık, görsel ve hedefleme kombinasyonlarını test ederek en iyi performansı belirliyoruz.' },
              ].map((f, i) => (
                <ServiceCard3D key={f.title} className={`${styles.featCard} ${i % 2 === 1 ? styles.featOffset : ''} reveal${i > 0 ? ` d${Math.min(i, 5)}` : ''}`}>
                  <div className={styles.featIcon}>{f.icon}</div>
                  <h3 className={styles.featTitle}>{f.title}</h3>
                  <p className={styles.featDesc}>{f.desc}</p>
                  <div className={styles.featArrow} aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </ServiceCard3D>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS — Horizontal pipeline ── */}
        <section className={styles.processSection}>
          <div className="wrap">
            <div className="centered">
              <span className="s-tag reveal">Süreç</span>
              <h2 className="s-title reveal d1">Nasıl Çalışıyoruz?</h2>
            </div>
            <div className={styles.pipeline}>
              {[
                { n: '01', t: 'Hedef & Bütçe', d: 'Dönüşüm hedefleri ve bütçe netleştiriliyor; platform ve kampanya türü seçimi yapılıyor.' },
                { n: '02', t: 'Kurulum & Takip', d: 'Pixel, dönüşüm izleme ve analytics entegrasyonu eksiksiz kuruluyor.' },
                { n: '03', t: 'Yayın & Test', d: 'Kampanyalar canlıya alınıyor; farklı kreatif ve hedefleme varyantları test ediliyor.' },
                { n: '04', t: 'Optimizasyon', d: 'Haftalık performans incelemesi, teklif optimizasyonu ve bütçe dağılımı düzenleniyor.' },
              ].map((step, i) => (
                <div key={step.n} className={`${styles.pipeStep} reveal${i > 0 ? ` d${Math.min(i, 5)}` : ''}`}>
                  <div className={styles.pipeNum}>{step.n}</div>
                  <div className={styles.pipeBody}>
                    <h3 className={styles.pipeTitle}>{step.t}</h3>
                    <p className={styles.pipeDesc}>{step.d}</p>
                  </div>
                  {i < 3 && <div className={styles.pipeArrow} aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>}
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
              <span className="s-tag">Hazır mısınız?</span>
              <h2 className={styles.ctaTitle}>
                Her Bütçeyle <span className={styles.ctaHi}>Maksimum ROI</span>
              </h2>
              <p className={styles.ctaDesc}>
                Ücretsiz reklam denetimi için iletişime geçin. Mevcut kampanyalarınızın kayıplarını birlikte tespit edelim.
              </p>
              <a href="/#iletisim" className="btn btn-fill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                Kampanya Denetimi Al
              </a>
            </div>
          </div>
        </section>

      </div>
    </SiteLayout>
  )
}
