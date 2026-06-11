import type { Metadata } from 'next'
import ServicePage, { type ServicePageConfig } from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Dijital Reklam Yönetimi | Wooji Digital',
  description: 'Google Ads ve Meta reklam yönetimiyle hedef kitlenize ulaşın. Düşük maliyetle yüksek dönüşüm sağlayan kampanyalar.',
  alternates: { canonical: '/dijital-reklam' },
}

const config: ServicePageConfig = {
  tag: 'Dijital Reklam',
  accent: '#2563eb',
  title: 'Yüksek',
  highlight: 'Dönüşüm',
  desc: 'Google Ads, Meta ve diğer platformlarda hedef kitlenize ulaşan, ROI odaklı reklam kampanyaları planlıyor ve yönetiyoruz.',
  heroIcon: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M11 5L6 9H2v6h4l5 4V5z"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
    </svg>
  ),
  stats: [
    { value: '3.2x', label: 'Ortalama ROAS' },
    { value: '%25', label: 'Düşük CPA' },
    { value: '1–2 hf', label: 'İlk sonuç süresi' },
    { value: '50+', label: 'Aktif kampanya' },
  ],
  features: [
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>,
      title: 'Google Ads',
      desc: 'Arama, Display ve Shopping kampanyalarıyla satın alma niyeti yüksek kullanıcılara ulaşıyoruz.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
      title: 'Meta Reklam',
      desc: 'Facebook ve Instagram reklam ekosisteminde güçlü hedefleme ve yaratıcı içeriklerle dönüşüm sağlıyoruz.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
      title: 'Yeniden Hedefleme',
      desc: 'Sitenizi ziyaret edip dönüşüm gerçekleştirmeyenlere özel kişiselleştirilmiş reklamlar sunuyoruz.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
      title: 'ROI Optimizasyonu',
      desc: 'Her kuruşun nereye gittiğini izliyor, verimsiz harcamaları keserek bütçenizi en verimli noktaya taşıyoruz.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
      title: 'Reklam Metni & Kreatif',
      desc: 'Tıklanma oranını artıran başlıklar, görseller ve video içerikler üretiyoruz.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>,
      title: 'A/B Testi',
      desc: 'Farklı başlık, görsel ve hedefleme kombinasyonlarını test ederek en iyi performansı belirliyoruz.',
    },
  ],
  process: [
    { num: '01', title: 'Hedef & Bütçe', desc: 'Dönüşüm hedefleri ve bütçe netleştiriliyor; platform ve kampanya türü seçimi yapılıyor.' },
    { num: '02', title: 'Kurulum & Takip', desc: 'Pixel, dönüşüm izleme ve analytics entegrasyonu eksiksiz kuruluyor.' },
    { num: '03', title: 'Yayın & Test', desc: 'Kampanyalar canlıya alınıyor; farklı kreatif ve hedefleme varyantları test ediliyor.' },
    { num: '04', title: 'Optimizasyon', desc: 'Haftalık performans incelemesi, teklif optimizasyonu ve bütçe dağılımı düzenleniyor.' },
  ],
  faqs: [
    { q: 'Minimum reklam bütçesi ne kadar olmalı?', a: 'Etkili bir kampanya için aylık en az 3.000–5.000 TL reklam bütçesi öneriyoruz. Yönetim ücreti bu tutara ek olarak hesaplanır. Bütçe ne kadar yüksek olursa optimizasyon o kadar hızlı yapılabilir.' },
    { q: 'Reklam hesabım bende kalır mı?', a: 'Evet. Google Ads ve Meta hesaplarınız sizin adınıza açılır veya mevcut hesabınıza erişim alınır. İş birliği sona erdiğinde hesaplar ve tüm geçmiş veriler size ait olur.' },
    { q: 'Ne zaman satış almaya başlarım?', a: 'Kampanya yayına girdikten sonra 1–2 haftada ilk dönüşümler görülmeye başlar. İlk ay optimizasyon süreci olduğundan en iyi sonuçlar 2–3. ayda elde edilir.' },
    { q: 'Reklam sonuçlarını nasıl raporluyorsunuz?', a: 'Haftalık kısa özet ve aylık kapsamlı raporlar sunuyoruz. İstediğiniz zaman erişebileceğiniz canlı dashboard da hazırlıyoruz.' },
  ],
}

export default function DijitalReklamPage() {
  return <ServicePage config={config} />
}
