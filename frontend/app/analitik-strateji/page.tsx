import type { Metadata } from 'next'
import SiteLayout from '@/components/SiteLayout'
import ServiceFaqSection from '@/components/ServiceFaqSection'
import AnimatedStat from '@/components/AnimatedStat'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Analitik & Strateji | Wooji Digital',
  description: 'Verilere dayalı büyüme stratejileri. GA4, dönüşüm izleme ve kapsamlı performans raporlaması.',
  alternates: { canonical: '/analitik-strateji' },
}

const faqs = [
  { q: "GA4'ü Universal Analytics'ten geçirmeme yardımcı olur musunuz?", a: "Evet. GA4 geçişi, mevcut hedef ve event'lerin yeniden yapılandırılması ve tarihsel veri migrasyonu dahil tam bir geçiş hizmeti sunuyoruz." },
  { q: 'Hangi raporlama araçlarını kullanıyorsunuz?', a: 'Öncelikli olarak Looker Studio kullanıyoruz; müşteri talebine göre Power BI veya Tableau entegrasyonu da yapıyoruz.' },
  { q: 'Veri gizliliği düzenlemelerine uyumluluk nasıl sağlanıyor?', a: 'KVKK ve GDPR uyumlu analytics konfigürasyonu yapıyoruz: IP anonimleştirme, çerez onayı entegrasyonu ve veri saklama süresi ayarları dahil.' },
  { q: 'Sadece raporlama mı yapıyorsunuz yoksa strateji de mi?', a: 'İkisi birlikte. Aylık raporların yanı sıra verilerin ne anlama geldiğini yorumlayan ve aksiyon planı sunan danışmanlık toplantıları yapıyoruz.' },
]

export default function AnalitikStratejPage() {
  return (
    <SiteLayout>
      <div className={styles.root}>

        {/* ── HERO — Terminal ── */}
        <header className={styles.hero}>
          <div className={styles.heroBg} aria-hidden="true" />
          <div className={styles.matrixGrid} aria-hidden="true" />

          <div className={styles.heroLayout}>
            {/* Text left */}
            <div className={styles.heroText}>
              <span className={`${styles.heroTag} reveal`}>Analitik & Strateji</span>
              <h1 className={`${styles.heroTitle} reveal d1`}>
                Veriye Dayalı <span className={styles.heroHi}>Büyüme</span>
              </h1>
              <p className={`${styles.heroDesc} reveal d2`}>
                Tahminlere değil verilere dayanan kararlarla büyüyün. Kapsamlı analitik kurulumu, raporlama ve dijital büyüme danışmanlığı sunuyoruz.
              </p>
              <div className={`${styles.heroCtas} reveal d3`}>
                <a href="/#iletisim" className="btn btn-fill">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  Analitik Kurulum Başlat
                </a>
                <a href="/" className="btn btn-line">Anasayfa</a>
              </div>
            </div>

            {/* Right: animated chart terminal */}
            <div className={`${styles.terminalWrap} reveal d2`} aria-hidden="true">
              <div className={styles.terminal}>
                <div className={styles.termBar}>
                  <div className={styles.termDots}>
                    <span style={{ background: '#ef4444' }} />
                    <span style={{ background: '#f59e0b' }} />
                    <span style={{ background: '#22c55e' }} />
                  </div>
                  <span className={styles.termTitle}>analytics_dashboard.sh</span>
                </div>
                <div className={styles.termBody}>
                  {/* Animated SVG line chart */}
                  <svg
                    className={styles.chart}
                    viewBox="0 0 300 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    {/* Grid lines */}
                    <line x1="0" y1="30" x2="300" y2="30" stroke="rgba(20,160,91,0.15)" strokeWidth="1"/>
                    <line x1="0" y1="60" x2="300" y2="60" stroke="rgba(20,160,91,0.15)" strokeWidth="1"/>
                    <line x1="0" y1="90" x2="300" y2="90" stroke="rgba(20,160,91,0.15)" strokeWidth="1"/>
                    {/* Area fill */}
                    <path
                      d="M0 90 L30 75 L60 80 L90 55 L120 60 L150 35 L180 40 L210 20 L240 28 L270 18 L300 10 L300 120 L0 120 Z"
                      fill="url(#chartGrad)"
                      className={styles.chartArea}
                    />
                    {/* Main line */}
                    <path
                      d="M0 90 L30 75 L60 80 L90 55 L120 60 L150 35 L180 40 L210 20 L240 28 L270 18 L300 10"
                      stroke="#14a05b"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={styles.chartLine}
                    />
                    {/* Glow line */}
                    <path
                      d="M0 90 L30 75 L60 80 L90 55 L120 60 L150 35 L180 40 L210 20 L240 28 L270 18 L300 10"
                      stroke="rgba(20,160,91,0.4)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={styles.chartGlow}
                    />
                    {/* Dot at end */}
                    <circle cx="300" cy="10" r="4" fill="#14a05b" className={styles.chartDot} />
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(20,160,91,0.25)" />
                        <stop offset="100%" stopColor="rgba(20,160,91,0)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Terminal data rows */}
                  <div className={styles.termData}>
                    <div className={styles.termRow}>
                      <span className={styles.termKey}>sessions</span>
                      <span className={styles.termSep}>→</span>
                      <span className={styles.termValGreen}>+34.2%</span>
                    </div>
                    <div className={styles.termRow}>
                      <span className={styles.termKey}>conversions</span>
                      <span className={styles.termSep}>→</span>
                      <span className={styles.termValGreen}>+28.7%</span>
                    </div>
                    <div className={styles.termRow}>
                      <span className={styles.termKey}>bounce_rate</span>
                      <span className={styles.termSep}>→</span>
                      <span className={styles.termValRed}>-18.4%</span>
                    </div>
                    <div className={styles.termRow}>
                      <span className={styles.termKey}>revenue</span>
                      <span className={styles.termSep}>→</span>
                      <span className={styles.termValGreen}>+51.3%</span>
                    </div>
                    <div className={styles.termPrompt}>
                      <span className={styles.termPs}>$</span>
                      <span className={styles.termInput}>run optimize --all</span>
                      <span className={styles.termBlink} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── STATS — Monospace terminal style ── */}
        <div className={styles.statsBar}>
          <div className={`${styles.statsRow} wrap`}>
            {[
              { k: 'conversion_rate', v: '+30%', c: '#14a05b' },
              { k: 'budget_waste', v: '-20%', c: '#14a05b' },
              { k: 'tracked_metrics', v: '100+', c: '#22d3ee' },
              { k: 'reporting_cycle', v: 'Aylık', c: '#a3e635' },
            ].map((st) => (
              <div key={st.k} className={styles.statTerm}>
                <span className={styles.statKey}>{st.k}</span>
                <AnimatedStat
                  value={st.v}
                  label=""
                  valClassName={styles.statVal}
                  labelClassName=""
                  color={st.c}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── FEATURES — Data table rows ── */}
        <section className={styles.featSection}>
          <div className="wrap">
            <div className="centered">
              <span className="s-tag reveal">Kapsam</span>
              <h2 className="s-title reveal d1">Ne Sunuyoruz?</h2>
            </div>
            <div className={styles.dataTable}>
              {[
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, title: 'GA4 Kurulumu', desc: 'Google Analytics 4 yapılandırması, event tracking ve dönüşüm hedeflerinin eksiksiz kurulumu.', tag: 'Kurulum' },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>, title: 'Dashboard Kurulumu', desc: "Looker Studio veya Power BI'da gerçek zamanlı, özelleştirilmiş performans panoları.", tag: 'Raporlama' },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, title: 'Dönüşüm İzleme', desc: 'Form doldurmalar, satışlar, telefon aramaları ve tüm önemli aksiyonların doğru takibi.', tag: 'Takip' },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>, title: 'Büyüme Danışmanlığı', desc: 'Aylık strateji toplantıları, öncelikli büyüme fırsatlarının tespiti ve eylem planı.', tag: 'Strateji' },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title: 'Kullanıcı Davranış Analizi', desc: 'Heatmap, session recording ve A/B test verilerini analiz ederek UX iyileştirmeleri belirliyoruz.', tag: 'UX' },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, title: 'Rakip İstihbarat', desc: "Rakiplerinizin dijital stratejilerini, trafik kaynaklarını ve büyüme taktiklerini analiz ediyoruz.", tag: 'Rekabet' },
              ].map((f, i) => (
                <div key={f.title} className={`${styles.dataRow} reveal${i > 0 ? ` d${Math.min(i, 5)}` : ''}`}>
                  <div className={styles.dataRowLeft}>
                    <div className={styles.dataIcon}>{f.icon}</div>
                    <div className={styles.dataContent}>
                      <h3 className={styles.dataTitle}>{f.title}</h3>
                      <p className={styles.dataDesc}>{f.desc}</p>
                    </div>
                  </div>
                  <span className={styles.dataTag}>{f.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS — Gantt bars ── */}
        <section className={styles.processSection}>
          <div className="wrap">
            <div className="centered">
              <span className="s-tag reveal">Süreç</span>
              <h2 className="s-title reveal d1">Nasıl Çalışıyoruz?</h2>
            </div>
            <div className={styles.gantt}>
              {[
                { n: '01', t: 'Denetim', d: 'Mevcut analitik kurulumu, takip edilemeyen dönüşümler ve veri boşlukları tespit ediliyor.', w: '25%' },
                { n: '02', t: 'Kurulum', d: 'GA4, Tag Manager ve dashboard yapılandırması doğru şekilde kuruluyor.', w: '50%' },
                { n: '03', t: 'İzleme', d: 'Haftalık veri takibi, anomali tespiti ve hızlı uyarılar aktif hale getiriliyor.', w: '75%' },
                { n: '04', t: 'Strateji', d: 'Aylık raporlama ve stratejik toplantıyla büyüme kararları veriye dayandırılıyor.', w: '100%' },
              ].map((step, i) => (
                <div key={step.n} className={`${styles.ganttRow} reveal${i > 0 ? ` d${Math.min(i, 5)}` : ''}`}>
                  <div className={styles.ganttMeta}>
                    <span className={styles.ganttNum}>{step.n}</span>
                    <div>
                      <h3 className={styles.ganttTitle}>{step.t}</h3>
                      <p className={styles.ganttDesc}>{step.d}</p>
                    </div>
                  </div>
                  <div className={styles.ganttBarTrack}>
                    <div
                      className={styles.ganttBar}
                      style={{ '--gw': step.w } as React.CSSProperties}
                    />
                    <span className={styles.ganttPct}>{step.w}</span>
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
              <div className={styles.ctaTermLine} aria-hidden="true">
                <span className={styles.ctaPs}>$</span>
                <span>start --growth-strategy</span>
                <span className={styles.ctaBlink} />
              </div>
              <h2 className={styles.ctaTitle}>
                Veriyle <span className={styles.ctaHi}>Büyüyün</span>
              </h2>
              <p className={styles.ctaDesc}>
                Ücretsiz analitik denetimi için iletişime geçin. Mevcut takip altyapınızdaki kayıpları birlikte tespit edelim.
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
