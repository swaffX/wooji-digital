import type { Metadata } from 'next'
import ServicePage, { type ServicePageConfig } from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'SEO Hizmetleri | Wooji Digital',
  description: 'Google\'da üst sıralara çıkın. Teknik SEO, içerik stratejisi ve backlink yönetimiyle organik trafiğinizi katlıyoruz.',
  alternates: { canonical: '/seo-hizmetleri' },
}

const config: ServicePageConfig = {
  tag: 'SEO Hizmetleri',
  title: 'Organik',
  highlight: 'Büyüme',
  desc: 'Arama motorlarında kalıcı görünürlük kazanın. Teknik SEO, içerik stratejisi ve otorite inşasıyla rakiplerinizin önüne geçin.',
  heroIcon: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
    </svg>
  ),
  stats: [
    { value: '240%', label: 'Ortalama trafik artışı' },
    { value: '3–6 ay', label: 'İlk sonuç süresi' },
    { value: 'Top 10', label: 'Hedef keyword sıralaması' },
    { value: '%68', label: 'Organik dönüşüm oranı' },
  ],
  features: [
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
      title: 'Teknik SEO Denetimi',
      desc: 'Site hızı, crawlability, Core Web Vitals ve yapısal sorunlar tespit edilerek düzeltilir.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
      title: 'İçerik Stratejisi',
      desc: 'Hedef kitlenizin aradığı konularda, dönüştüren ve sıralanan içerikler üretiyoruz.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
      title: 'Backlink Yönetimi',
      desc: 'Otorite domain\'lerden doğal ve güçlü bağlantılar kazanarak domain authority\'nizi artırıyoruz.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
      title: 'Yerel SEO',
      desc: 'Google Business Profile optimizasyonu ve yerel aramalar için hedeflenen görünürlük stratejileri.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
      title: 'Performans Raporlama',
      desc: 'Aylık kapsamlı SEO raporları; sıralama, trafik ve dönüşüm trendleri şeffaf sunulur.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
      title: 'Rakip Analizi',
      desc: 'Rakiplerinizin güçlü yanlarını analiz edip boşluklardan yararlanacak stratejiler geliştiriyoruz.',
    },
  ],
  process: [
    { num: '01', title: 'Analiz & Denetim', desc: 'Mevcut SEO durumunuzu, rakiplerinizi ve fırsat keyword\'lerini kapsamlı şekilde analiz ediyoruz.' },
    { num: '02', title: 'Strateji & Plan', desc: 'Hedef kitlenize ve sektörünüze özel, önceliklendirilmiş SEO yol haritası oluşturuyoruz.' },
    { num: '03', title: 'Uygulama', desc: 'Teknik düzeltmeler, içerik üretimi ve link building faaliyetlerini eş zamanlı yürütüyoruz.' },
    { num: '04', title: 'Ölç & Optimize', desc: 'Sonuçları sürekli takip ediyor, verilere dayalı optimizasyonlarla büyümeyi hızlandırıyoruz.' },
  ],
  faqs: [
    { q: 'SEO sonuçları ne zaman görülür?', a: 'Teknik düzeltmeler 4–8 haftada sıralama iyileşmesi başlatır. Anlamlı trafik artışı genellikle 3–6 ayda gerçekleşir. Rakip yoğunluğuna ve sitenin mevcut durumuna göre bu süre değişebilir.' },
    { q: 'Aylık kaç içerik üretiyorsunuz?', a: 'Paketinize göre ayda 4–12 optimize edilmiş içerik üretiyoruz. Her içerik keyword araştırması, yapısal optimizasyon ve dahili linkleme ile teslim edilir.' },
    { q: 'Google\'ın her algoritma güncellemesinde ne olur?', a: 'Beyaz şapka (white-hat) SEO uygulamaları nedeniyle çoğu güncellemeden olumlu etkileniyoruz. Bununla birlikte her güncellemeden sonra performansı izliyor ve gerekli uyarlamaları yapıyoruz.' },
    { q: 'Sitenin kontrolünü almadan SEO yapabilir misiniz?', a: 'Teknik SEO için siteye erişim gereklidir. İçerik ve link building çalışmaları için tam erişim gerekmeyebilir. Başlangıçta bir keşif görüşmesiyle kapsamı netleştiriyoruz.' },
  ],
}

export default function SeoHizmetleriPage() {
  return <ServicePage config={config} />
}
