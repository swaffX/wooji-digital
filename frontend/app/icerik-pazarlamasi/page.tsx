import type { Metadata } from 'next'
import ServicePage, { type ServicePageConfig } from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'İçerik Pazarlaması | Wooji Digital',
  description: 'SEO uyumlu, dönüştüren içeriklerle marka otoritenizi inşa edin. Blog, e-posta ve video içerik stratejisi.',
  alternates: { canonical: '/icerik-pazarlamasi' },
}

const config: ServicePageConfig = {
  tag: 'İçerik Pazarlama',
  accent: '#d97706',
  title: 'Otorite',
  highlight: 'İnşası',
  desc: 'SEO uyumlu, hedef kitlenizi bilgilendiren ve dönüştüren içeriklerle markanızı sektörünüzde düşünce lideri konumuna taşıyoruz.',
  heroIcon: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
    </svg>
  ),
  stats: [
    { value: '%55', label: 'Daha fazla organik trafik' },
    { value: '3x', label: 'Lead artışı' },
    { value: '4–8', label: 'Aylık makale sayısı' },
    { value: '%6+', label: 'Blog dönüşüm oranı' },
  ],
  features: [
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
      title: 'Blog & Makale',
      desc: 'Keyword odaklı, uzman kalitesinde blog yazıları ve rehber makaleler üretiyoruz.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
      title: 'E-posta Pazarlaması',
      desc: 'Segmentlere ayrılmış, kişiselleştirilmiş e-posta kampanyaları ve drip sequence\'lar tasarlıyoruz.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>,
      title: 'Video Script',
      desc: 'YouTube, Reels ve TikTok için izletilen, marka mesajını ileten video senaryoları yazıyoruz.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
      title: 'Whitepaper & E-Kitap',
      desc: 'Potansiyel müşterilerinizi çeken, lead magnet olarak kullanabileceğiniz derinlikli içerikler.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
      title: 'Keyword Araştırması',
      desc: 'Rekabeti düşük, dönüşüm potansiyeli yüksek keyword\'leri tespit ederek içerik planı oluşturuyoruz.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
      title: 'İçerik Dağıtımı',
      desc: 'Üretilen içerikleri doğru kanallarda, doğru zamanda yayınlayarak maksimum erişim sağlıyoruz.',
    },
  ],
  process: [
    { num: '01', title: 'Strateji & Planlama', desc: 'Hedef kitle persona\'ları, içerik sütunları ve keyword haritası oluşturuluyor.' },
    { num: '02', title: 'Üretim', desc: 'Brief hazırlanıyor, içerikler yazılıyor ve SEO optimizasyonuyla teslim ediliyor.' },
    { num: '03', title: 'Dağıtım', desc: 'İçerikler site, sosyal medya ve e-posta kanallarında planlı şekilde yayınlanıyor.' },
    { num: '04', title: 'Performans Ölçümü', desc: 'Trafik, etkileşim ve lead metrikleri izlenerek içerik stratejisi sürekli iyileştiriliyor.' },
  ],
  faqs: [
    { q: 'Kim içerikleri yazıyor?', a: 'Deneyimli Türkçe içerik yazarlarından oluşan ekibimiz yazıyor; SEO uzmanımız optimize ediyor. Her içerik markanızın sesi ve brief\'e uygun üretiliyor.' },
    { q: 'İçerikleri onaylamak için sürem ne kadar?', a: 'Her içerik yayından 5–7 gün önce size iletilir; 2 tur revizyon hakkınız bulunur.' },
    { q: 'E-posta listemi yoksa nasıl başlarım?', a: 'Lead magnet tasarımı, açılış sayfası ve opt-in formu kurulumu dahil olmak üzere sıfırdan e-posta listesi oluşturma hizmeti de sunuyoruz.' },
    { q: 'İçerik pazarlaması ne zaman ROI sağlar?', a: 'Organik içerik uzun vadeli bir yatırımdır. İlk 3 ayda trafik artışı başlar; anlamlı ROI genellikle 6–12 aylık süreçte oluşur.' },
  ],
}

export default function IcerikPazarlamasiPage() {
  return <ServicePage config={config} />
}
