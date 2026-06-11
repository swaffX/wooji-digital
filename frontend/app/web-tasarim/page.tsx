import type { Metadata } from 'next'
import ServicePage, { type ServicePageConfig } from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Web Tasarım & Geliştirme | Wooji Digital',
  description: 'Dönüşüm odaklı, hızlı ve modern web siteleri. Markanızın dijital yüzünü en güçlü haliyle tasarlıyoruz.',
  alternates: { canonical: '/web-tasarim' },
}

const config: ServicePageConfig = {
  tag: 'Web Tasarım',
  accent: '#0891b2',
  title: 'Dönüşüm Odaklı',
  highlight: 'Web Siteleri',
  desc: 'Kullanıcı deneyimini, estetiği ve performansı bir arada sunan web siteleri tasarlıyor ve geliştiriyoruz. Siteniz yalnızca güzel değil, satar.',
  heroIcon: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <path d="M8 21h8M12 17v4"/>
    </svg>
  ),
  stats: [
    { value: '%40+', label: 'Dönüşüm artışı' },
    { value: '<2sn', label: 'Sayfa yüklenme süresi' },
    { value: '100', label: 'Lighthouse skoru hedefi' },
    { value: '3–6 hf', label: 'Teslim süresi' },
  ],
  features: [
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
      title: 'UX & Tasarım',
      desc: 'Kullanıcı yolculuğunu optimize eden, dönüşüm hunisine göre kurgulanan sayfa düzenleri.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
      title: 'Modern Geliştirme',
      desc: 'Next.js, React ve modern web teknolojileriyle geliştirilen hızlı ve ölçeklenebilir yapılar.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg>,
      title: 'Mobil Uyum',
      desc: 'Tüm ekran boyutlarında kusursuz deneyim sunan responsive tasarım. Mobile-first yaklaşım.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
      title: 'SEO Uyumlu Altyapı',
      desc: 'Schema markup, meta etiketler, hız optimizasyonu ve teknik SEO temelli geliştirme.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      title: 'Güvenlik & Performans',
      desc: 'SSL sertifikası, güvenli sunucu yapılandırması ve Core Web Vitals optimizasyonu.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>,
      title: 'İçerik Yönetimi',
      desc: 'Teknik bilgi gerektirmeden kolayca düzenleyebileceğiniz CMS entegrasyonu (Sanity, Contentful, vb.).',
    },
  ],
  process: [
    { num: '01', title: 'Keşif & Brief', desc: 'Hedefler, hedef kitle, rakipler ve içerik ihtiyaçları belirleniyor; siteharitası oluşturuluyor.' },
    { num: '02', title: 'Tasarım & Onay', desc: 'Wireframe ve yüksek kaliteli mockup\'lar tasarlanıyor; revizyon süreciyle onaya alınıyor.' },
    { num: '03', title: 'Geliştirme', desc: 'Onaylanan tasarım kodlanıyor; SEO, performans ve erişilebilirlik standartlarına göre optimize ediliyor.' },
    { num: '04', title: 'Test & Lansman', desc: 'Tüm cihaz ve tarayıcılarda kapsamlı test yapılıyor; site canlıya alınıyor ve eğitim veriliyor.' },
  ],
  faqs: [
    { q: 'Bir web sitesi ne kadara mal olur?', a: 'Kurumsal bir tanıtım sitesi 25.000–60.000 TL, e-ticaret projesi ise 50.000 TL ve üzeri başlar. Kesin fiyat için ücretsiz keşif görüşmesi yapıyoruz; talebe özel teklif sunuyoruz.' },
    { q: 'Sitenin bakımı ve güncellemeleri nasıl yapılıyor?', a: 'Lansman sonrası 3 aylık ücretsiz teknik destek sunuyoruz. Devamında aylık bakım paketi veya proje bazlı güncelleme seçeneklerimiz mevcut.' },
    { q: 'Mevcut siteyi yeniden tasarlayabilir misiniz?', a: 'Evet. Mevcut sitenizi analiz ederek hem görsel hem de teknik açıdan yeniden tasarlıyoruz. SEO değerlerinizi koruyarak dönüşüm oranınızı artırmayı hedefliyoruz.' },
    { q: 'E-ticaret altyapısı da yapıyor musunuz?', a: 'Evet. Shopify, WooCommerce veya özel Next.js e-ticaret geliştirmesi yapıyoruz. İhtiyacınıza göre en uygun altyapıyı birlikte belirliyoruz.' },
  ],
}

export default function WebTasarimPage() {
  return <ServicePage config={config} />
}
