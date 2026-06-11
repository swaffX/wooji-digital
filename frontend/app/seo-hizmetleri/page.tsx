import type { Metadata } from 'next'
import SiteLayout from '@/components/SiteLayout'
import ServiceFaqSection from '@/components/ServiceFaqSection'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'SEO Hizmetleri | Wooji Digital',
  description: "Google'da üst sıralara çıkın. Teknik SEO, içerik stratejisi ve backlink yönetimiyle organik trafiğinizi katlıyoruz.",
  alternates: { canonical: '/seo-hizmetleri' },
}

const faqs = [
  { q: 'SEO sonuçları ne zaman görülür?', a: 'Teknik düzeltmeler 4–8 haftada sıralama iyileşmesi başlatır. Anlamlı trafik artışı genellikle 3–6 ayda gerçekleşir.' },
  { q: 'Aylık kaç içerik üretiyorsunuz?', a: 'Paketinize göre ayda 4–12 optimize edilmiş içerik üretiyoruz. Her içerik keyword araştırması, yapısal optimizasyon ve dahili linkleme ile teslim edilir.' },
  { q: "Google'ın her algoritma güncellemesinde ne olur?", a: 'Beyaz şapka SEO uygulamaları nedeniyle çoğu güncellemeden olumlu etkileniyoruz. Her güncellemeden sonra performansı izliyor ve gerekli uyarlamaları yapıyoruz.' },
  { q: "Sitenin kontrolünü almadan SEO yapabilir misiniz?", a: 'Teknik SEO için siteye erişim gereklidir. İçerik ve link building çalışmaları için tam erişim gerekmeyebilir. Başlangıçta bir keşif görüşmesiyle kapsamı netleştiriyoruz.' },
]

export default function SeoHizmetleriPage() {
  return (
    <SiteLayout>
      <div className={styles.root}>

        {/* ── HERO ── */}
        <header className={styles.hero}>
          <div className={styles.heroBg} aria-hidden="true" />
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.rankBadge1} aria-hidden="true">#1</div>
          <div className={styles.rankBadge2} aria-hidden="true">#3</div>
          <div className={styles.rankBadge3} aria-hidden="true">#7</div>

          <div className={styles.heroInner}>
            <span className="s-tag reveal">SEO Hizmetleri</span>
            <h1 className={`${styles.heroTitle} reveal d1`}>
              Organik <span className={styles.heroHi}>Büyüme</span>
            </h1>
            <p className={`${styles.heroDesc} reveal d2`}>
              Arama motorlarında kalıcı görünürlük kazanın. Teknik SEO, içerik stratejisi ve otorite inşasıyla rakiplerinizin önüne geçin.
            </p>
            <div className={`${styles.heroCtas} reveal d3`}>
              <a href="/#iletisim" className="btn btn-fill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                Ücretsiz Danışmanlık Al
              </a>
              <a href="/" className="btn btn-line">Anasayfa</a>
            </div>
          </div>

          {/* SERP visual */}
          <div className={styles.serpWrap} aria-hidden="true">
            <div className={styles.searchBar}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <span>dijital pazarlama ajansı istanbul</span>
              <span className={styles.cursor} />
            </div>
            <div className={styles.serpStack}>
              <div className={`${styles.serpCard} ${styles.sc1}`}>
                <span className={styles.serpPos}>1</span>
                <div className={styles.serpText}>
                  <span className={styles.serpUrl}>wooji.com › dijital-pazarlama</span>
                  <span className={styles.serpTitle}>Wooji Digital — Organik Büyüme Ajansı</span>
                  <span className={styles.serpSnippet}>SEO, reklam yönetimi ve web tasarımıyla markanızı büyütüyoruz...</span>
                </div>
              </div>
              <div className={`${styles.serpCard} ${styles.sc2}`}>
                <span className={styles.serpPos}>2</span>
                <div className={styles.serpText}>
                  <span className={styles.serpUrl}>rakip.com › hizmetler</span>
                  <span className={styles.serpTitle}>Rakip Site — Dijital Hizmetler</span>
                  <span className={styles.serpSnippet}>Web tasarım ve seo hizmetleri sunan ajans...</span>
                </div>
              </div>
              <div className={`${styles.serpCard} ${styles.sc3}`}>
                <span className={styles.serpPos}>3</span>
                <div className={styles.serpText}>
                  <span className={styles.serpUrl}>diger.com › blog</span>
                  <span className={styles.serpTitle}>Dijital Pazarlama Rehberi 2024</span>
                  <span className={styles.serpSnippet}>2024 yılında dijital pazarlama stratejileri...</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── STATS ── */}
        <div className={styles.statsBar}>
          <div className={`${styles.statsInner} wrap`}>
            {[
              { v: '240%', l: 'Ortalama trafik artışı' },
              { v: '3–6 ay', l: 'İlk sonuç süresi' },
              { v: 'Top 10', l: 'Hedef keyword sıralaması' },
              { v: '%68', l: 'Organik dönüşüm oranı' },
            ].map((st) => (
              <div key={st.l} className={styles.statItem}>
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
              <div className={`${styles.featBig} reveal`}>
                <div className={styles.featIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                </div>
                <h3 className={styles.featTitle}>Teknik SEO Denetimi</h3>
                <p className={styles.featDesc}>Site hızı, crawlability, Core Web Vitals ve yapısal sorunlar tespit edilerek düzeltilir. Google'ın en son algoritma gereksinimlerine uygun tam bir teknik optimizasyon sağlıyoruz.</p>
                <div className={styles.bigMetrics}>
                  <div className={styles.bigMetric}><span>+87%</span><span>Crawl verimliliği</span></div>
                  <div className={styles.bigMetric}><span>2.4x</span><span>Sayfa hızı artışı</span></div>
                </div>
              </div>

              {[
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>, title: 'İçerik Stratejisi', desc: 'Hedef kitlenizin aradığı konularda, dönüştüren ve sıralanan içerikler üretiyoruz.' },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>, title: 'Backlink Yönetimi', desc: "Otorite domain'lerden doğal ve güçlü bağlantılar kazanarak domain authority'nizi artırıyoruz." },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, title: 'Yerel SEO', desc: 'Google Business Profile optimizasyonu ve yerel aramalar için hedeflenen görünürlük stratejileri.' },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>, title: 'Performans Raporlama', desc: 'Aylık kapsamlı SEO raporları; sıralama, trafik ve dönüşüm trendleri şeffaf sunulur.' },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: 'Rakip Analizi', desc: 'Rakiplerinizin güçlü yanlarını analiz edip boşluklardan yararlanacak stratejiler geliştiriyoruz.' },
              ].map((f, i) => (
                <div key={f.title} className={`${styles.featCard} reveal d${i + 1}`}>
                  <div className={styles.featIcon}>{f.icon}</div>
                  <h3 className={styles.featTitle}>{f.title}</h3>
                  <p className={styles.featDesc}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className={styles.processSection}>
          <div className="wrap">
            <div className="centered">
              <span className="s-tag reveal">Süreç</span>
              <h2 className="s-title reveal d1">Nasıl Çalışıyoruz?</h2>
            </div>
            <div className={styles.timeline}>
              {[
                { n: '01', t: 'Analiz & Denetim', d: "Mevcut SEO durumunuzu, rakiplerinizi ve fırsat keyword'lerini kapsamlı şekilde analiz ediyoruz." },
                { n: '02', t: 'Strateji & Plan', d: 'Hedef kitlenize ve sektörünüze özel, önceliklendirilmiş SEO yol haritası oluşturuyoruz.' },
                { n: '03', t: 'Uygulama', d: 'Teknik düzeltmeler, içerik üretimi ve link building faaliyetlerini eş zamanlı yürütüyoruz.' },
                { n: '04', t: 'Ölç & Optimize', d: 'Sonuçları sürekli takip ediyor, verilere dayalı optimizasyonlarla büyümeyi hızlandırıyoruz.' },
              ].map((step, i) => (
                <div key={step.n} className={`${styles.timelineStep} reveal${i > 0 ? ` d${Math.min(i, 5)}` : ''}`}>
                  <div className={styles.timelineLeft}>
                    <div className={styles.timelineNum}>{step.n}</div>
                    {i < 3 && <div className={styles.timelineLine} aria-hidden="true" />}
                  </div>
                  <div className={styles.timelineBody}>
                    <h3 className={styles.timelineTitle}>{step.t}</h3>
                    <p className={styles.timelineDesc}>{step.d}</p>
                  </div>
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
                Google&apos;da <span className={styles.ctaHi}>Zirvede</span> Görünün
              </h2>
              <p className={styles.ctaDesc}>
                Ücretsiz SEO denetimi için hemen iletişime geçin. Sitenizin tam potansiyelini birlikte keşfedelim.
              </p>
              <a href="/#iletisim" className="btn btn-fill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                Ücretsiz Denetim Al
              </a>
            </div>
          </div>
        </section>

      </div>
    </SiteLayout>
  )
}
