import type { Metadata } from 'next'
import ServicePage, { type ServicePageConfig } from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Analitik & Strateji | Wooji Digital',
  description: 'Verilere dayalı büyüme stratejileri. GA4, dönüşüm izleme ve kapsamlı performans raporlaması.',
  alternates: { canonical: '/analitik-strateji' },
}

const config: ServicePageConfig = {
  tag: 'Analitik & Strateji',
  accent: '#059669',
  title: 'Veriye Dayalı',
  highlight: 'Büyüme',
  desc: 'Tahminlere değil verilere dayanan kararlarla büyüyün. Kapsamlı analitik kurulumu, raporlama ve dijital büyüme danışmanlığı sunuyoruz.',
  heroIcon: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  ),
  stats: [
    { value: '%30+', label: 'Dönüşüm artışı' },
    { value: '%20', label: 'Düşük bütçe israfı' },
    { value: '100+', label: 'Takip edilen metrik' },
    { value: 'Aylık', label: 'Kapsamlı raporlama' },
  ],
  features: [
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
      title: 'GA4 Kurulumu',
      desc: 'Google Analytics 4 yapılandırması, event tracking ve dönüşüm hedeflerinin eksiksiz kurulumu.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h18v18H3z"/><path d="M3 9h18M9 21V9"/></svg>,
      title: 'Dashboard Kurulumu',
      desc: 'Looker Studio veya Power BI\'da gerçek zamanlı, özelleştirilmiş performans panoları.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
      title: 'Dönüşüm İzleme',
      desc: 'Form doldurmalar, satışlar, telefon aramaları ve tüm önemli aksiyonların doğru takibi.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
      title: 'Büyüme Danışmanlığı',
      desc: 'Aylık strateji toplantıları, öncelikli büyüme fırsatlarının tespiti ve eylem planı.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
      title: 'Kullanıcı Davranış Analizi',
      desc: 'Heatmap, session recording ve A/B test verilerini analiz ederek UX iyileştirmeleri belirliyoruz.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
      title: 'Rakip İstihbarat',
      desc: 'Rakiplerinizin dijital stratejilerini, trafik kaynaklarını ve büyüme taktiklerini analiz ediyoruz.',
    },
  ],
  process: [
    { num: '01', title: 'Denetim', desc: 'Mevcut analitik kurulumu, takip edilemeyen dönüşümler ve veri boşlukları tespit ediliyor.' },
    { num: '02', title: 'Kurulum', desc: 'GA4, Tag Manager ve dashboard yapılandırması doğru şekilde kuruluyor.' },
    { num: '03', title: 'İzleme', desc: 'Haftalık veri takibi, anomali tespiti ve hızlı uyarılar aktif hale getiriliyor.' },
    { num: '04', title: 'Strateji', desc: 'Aylık raporlama ve stratejik toplantıyla büyüme kararları veriye dayandırılıyor.' },
  ],
  faqs: [
    { q: 'GA4\'ü Universal Analytics\'ten geçirmeme yardımcı olur musunuz?', a: 'Evet. GA4 geçişi, mevcut hedef ve event\'lerin yeniden yapılandırılması ve tarihsel veri migrasyonu dahil tam bir geçiş hizmeti sunuyoruz.' },
    { q: 'Hangi raporlama araçlarını kullanıyorsunuz?', a: 'Öncelikli olarak Looker Studio (Google Data Studio) kullanıyoruz; müşteri talebine göre Power BI veya Tableau entegrasyonu da yapıyoruz.' },
    { q: 'Veri gizliliği düzenlemelerine uyumluluk nasıl sağlanıyor?', a: 'KVKK ve GDPR\'a uyumlu analytics konfigürasyonu yapıyoruz: IP anonimleştirme, çerez onayı entegrasyonu ve veri saklama süresi ayarları dahil.' },
    { q: 'Sadece raporlama mı yapıyorsunuz yoksa strateji de mi?', a: 'İkisi birlikte. Aylık raporların yanı sıra verilerin ne anlama geldiğini yorumlayan ve aksiyon planı sunan danışmanlık toplantıları yapıyoruz.' },
  ],
}

export default function AnalitikStratejPage() {
  return <ServicePage config={config} />
}
