import type { Metadata } from 'next'
import SiteLayout from '@/components/SiteLayout'
import ServiceFaqSection from '@/components/ServiceFaqSection'
import ServiceCard3D from '@/components/ServiceCard3D'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Web Tasarım & Geliştirme | Wooji Digital',
  description: 'Dönüşüm odaklı, hızlı ve modern web siteleri. Markanızın dijital yüzünü en güçlü haliyle tasarlıyoruz.',
  alternates: { canonical: '/web-tasarim' },
}

const faqs = [
  { q: 'Bir web sitesi ne kadara mal olur?', a: 'Kurumsal bir tanıtım sitesi 25.000–60.000 TL, e-ticaret projesi 50.000 TL ve üzeri başlar. Kesin fiyat için ücretsiz keşif görüşmesi yapıyoruz.' },
  { q: 'Sitenin bakımı ve güncellemeleri nasıl yapılıyor?', a: 'Lansman sonrası 3 aylık ücretsiz teknik destek sunuyoruz. Devamında aylık bakım paketi veya proje bazlı güncelleme seçeneklerimiz mevcut.' },
  { q: 'Mevcut siteyi yeniden tasarlayabilir misiniz?', a: 'Evet. Mevcut sitenizi analiz ederek hem görsel hem teknik açıdan yeniden tasarlıyoruz. SEO değerlerinizi koruyarak dönüşüm oranınızı artırmayı hedefliyoruz.' },
  { q: 'E-ticaret altyapısı da yapıyor musunuz?', a: 'Evet. Shopify, WooCommerce veya özel Next.js e-ticaret geliştirmesi yapıyoruz. İhtiyacınıza göre en uygun altyapıyı birlikte belirliyoruz.' },
]

export default function WebTasarimPage() {
  return (
    <SiteLayout>
      <div className={styles.root}>

        {/* ── HERO — light, browser mockup center ── */}
        <header className={styles.hero}>
          <div className={styles.heroBg} aria-hidden="true" />
          <div className={styles.heroContent}>
            <span className="s-tag reveal">Web Tasarım</span>
            <h1 className={`${styles.heroTitle} reveal d1`}>
              Dönüşüm Odaklı <span className={styles.heroHi}>Web Siteleri</span>
            </h1>
            <p className={`${styles.heroDesc} reveal d2`}>
              Kullanıcı deneyimini, estetiği ve performansı bir arada sunan web siteleri tasarlıyor ve geliştiriyoruz. Siteniz yalnızca güzel değil, satar.
            </p>
            <div className={`${styles.heroCtas} reveal d3`}>
              <a href="/#iletisim" className="btn btn-fill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                Projenizi Başlatın
              </a>
              <a href="/" className="btn btn-line">Anasayfa</a>
            </div>
          </div>

          {/* Browser mockup */}
          <div className={`${styles.browserWrap} reveal d3`} aria-hidden="true">
            <div className={styles.browser}>
              <div className={styles.browserBar}>
                <div className={styles.browserDots}>
                  <span style={{ background: '#ff5f57' }} />
                  <span style={{ background: '#ffbd2e' }} />
                  <span style={{ background: '#28c840' }} />
                </div>
                <div className={styles.browserUrl}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  wooji.com
                </div>
                <div className={styles.browserActions}>
                  <div /><div /><div />
                </div>
              </div>
              <div className={styles.browserContent}>
                {/* Mini website mockup */}
                <div className={styles.mockNav} />
                <div className={styles.mockHero}>
                  <div className={styles.mockHeadline} />
                  <div className={styles.mockSub} />
                  <div className={styles.mockBtn} />
                </div>
                <div className={styles.mockCards}>
                  <div className={styles.mockCard}><div /><div /><div /></div>
                  <div className={styles.mockCard}><div /><div /><div /></div>
                  <div className={styles.mockCard}><div /><div /><div /></div>
                </div>
              </div>
            </div>
            {/* Floating badges */}
            <div className={`${styles.floatBadge} ${styles.fb1}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              100 Lighthouse
            </div>
            <div className={`${styles.floatBadge} ${styles.fb2}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              &lt;2s Yükleme
            </div>
          </div>
        </header>

        {/* ── STATS — dark contrast band ── */}
        <div className={styles.statsBar}>
          <div className={`${styles.statsInner} wrap`}>
            {[
              { v: '%40+', l: 'Dönüşüm artışı' },
              { v: '<2sn', l: 'Sayfa yükleme' },
              { v: '100', l: 'Lighthouse skoru' },
              { v: '3–6 hf', l: 'Teslim süresi' },
            ].map((st, i) => (
              <div key={st.l} className={styles.statItem}>
                {i > 0 && <div className={styles.statDivider} aria-hidden="true" />}
                <span className={styles.statVal}>{st.v}</span>
                <span className={styles.statLabel}>{st.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── FEATURES — 3-col with cyan accent border ── */}
        <section className={styles.featSection}>
          <div className="wrap">
            <div className="centered">
              <span className="s-tag reveal">Kapsam</span>
              <h2 className="s-title reveal d1">Ne Sunuyoruz?</h2>
            </div>
            <div className={styles.featGrid}>
              {[
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>, title: 'UX & Tasarım', desc: 'Kullanıcı yolculuğunu optimize eden, dönüşüm hunisine göre kurgulanan sayfa düzenleri.', accent: '#0891b2' },
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>, title: 'Modern Geliştirme', desc: "Next.js, React ve modern web teknolojileriyle geliştirilen hızlı ve ölçeklenebilir yapılar.", accent: '#7c3aed' },
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>, title: 'Mobil Uyum', desc: 'Tüm ekran boyutlarında kusursuz deneyim sunan responsive tasarım. Mobile-first yaklaşım.', accent: '#2563eb' },
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>, title: 'SEO Uyumlu Altyapı', desc: 'Schema markup, meta etiketler, hız optimizasyonu ve teknik SEO temelli geliştirme.', accent: '#059669' },
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'Güvenlik & Performans', desc: 'SSL sertifikası, güvenli sunucu yapılandırması ve Core Web Vitals optimizasyonu.', accent: '#dc2626' },
                { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>, title: 'İçerik Yönetimi', desc: 'Teknik bilgi gerektirmeden kolayca düzenleyebileceğiniz CMS entegrasyonu (Sanity, Contentful).', accent: '#d97706' },
              ].map((f, i) => (
                <ServiceCard3D key={f.title} className={`${styles.featCard} reveal${i > 0 ? ` d${Math.min(i, 5)}` : ''}`}
                  style={{ '--fc': f.accent } as React.CSSProperties}>
                  <div className={styles.featAccentLine} aria-hidden="true" />
                  <div className={styles.featIcon}>{f.icon}</div>
                  <h3 className={styles.featTitle}>{f.title}</h3>
                  <p className={styles.featDesc}>{f.desc}</p>
                </ServiceCard3D>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS — Build pipeline ── */}
        <section className={styles.processSection}>
          <div className="wrap">
            <div className="centered">
              <span className="s-tag reveal">Süreç</span>
              <h2 className="s-title reveal d1">Nasıl Çalışıyoruz?</h2>
            </div>
            <div className={styles.buildPipeline}>
              {[
                { n: '01', t: 'Keşif & Brief', d: 'Hedefler, hedef kitle, rakipler ve içerik ihtiyaçları belirleniyor; siteharitası oluşturuluyor.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg> },
                { n: '02', t: 'Tasarım & Onay', d: "Wireframe ve yüksek kaliteli mockup'lar tasarlanıyor; revizyon süreciyle onaya alınıyor.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> },
                { n: '03', t: 'Geliştirme', d: "Onaylanan tasarım kodlanıyor; SEO, performans ve erişilebilirlik standartlarına göre optimize ediliyor.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
                { n: '04', t: 'Test & Lansman', d: "Tüm cihaz ve tarayıcılarda kapsamlı test yapılıyor; site canlıya alınıyor ve eğitim veriliyor.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
              ].map((step, i) => (
                <div key={step.n} className={`${styles.buildStep} reveal${i > 0 ? ` d${Math.min(i, 5)}` : ''}`}>
                  <div className={styles.buildIcon}>{step.icon}</div>
                  <div className={styles.buildNum}>{step.n}</div>
                  <h3 className={styles.buildTitle}>{step.t}</h3>
                  <p className={styles.buildDesc}>{step.d}</p>
                  {i < 3 && <div className={styles.buildConnector} aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>}
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
              <span className="s-tag">Projenizi Konuşalım</span>
              <h2 className={styles.ctaTitle}>
                Siteniz <span className={styles.ctaHi}>Dönüştürsün</span>
              </h2>
              <p className={styles.ctaDesc}>
                Ücretsiz keşif görüşmesinde mevcut sitenizi analiz ediyor, büyüme fırsatlarını birlikte belirliyoruz.
              </p>
              <a href="/#iletisim" className="btn btn-fill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                Proje Görüşmesi Ayarla
              </a>
            </div>
          </div>
        </section>

      </div>
    </SiteLayout>
  )
}
