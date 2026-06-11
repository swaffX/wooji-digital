import type { Metadata } from 'next'
import ServicePage, { type ServicePageConfig } from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Sosyal Medya Yönetimi | Wooji Digital',
  description: 'Instagram, TikTok ve LinkedIn\'de güçlü marka varlığı oluşturun. Etkileşim artıran içerikler ve topluluk yönetimi.',
  alternates: { canonical: '/sosyal-medya' },
}

const config: ServicePageConfig = {
  tag: 'Sosyal Medya',
  accent: '#db2777',
  title: 'Büyüyen',
  highlight: 'Topluluk',
  desc: 'İnstagram, TikTok ve LinkedIn\'de tutarlı, etkileşimli ve büyüyen bir marka varlığı inşa ediyoruz.',
  heroIcon: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <path d="M12 18h.01"/>
    </svg>
  ),
  stats: [
    { value: '10x', label: 'Takipçi büyümesi (6 ay)' },
    { value: '%8+', label: 'Ortalama etkileşim oranı' },
    { value: '30+', label: 'Aylık özgün içerik' },
    { value: '24sa', label: 'Topluluk yanıt süresi' },
  ],
  features: [
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
      title: 'İçerik Üretimi',
      desc: 'Görsel, video reels ve carousel formatlarında markanıza özgü, etkileşim odaklı içerikler tasarlıyoruz.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
      title: 'İçerik Takvimi',
      desc: 'Haftalık planlama ve onay süreciyle düzenli, stratejik yayın takvimi yönetiyoruz.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
      title: 'Topluluk Yönetimi',
      desc: 'Yorum, mesaj ve etiketlemelere hızlı ve marka sesine uygun yanıtlar veriyoruz.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
      title: 'Influencer İş Birlikleri',
      desc: 'Sektörünüzdeki doğru influencer\'larla etkili ve ROI ölçülebilir kampanyalar planlıyoruz.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
      title: 'Analiz & Raporlama',
      desc: 'Erişim, etkileşim, takipçi büyümesi ve dönüşüm verilerini aylık raporlarla sunuyoruz.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>,
      title: 'Sosyal Medya Reklamları',
      desc: 'Organik büyümeyi hızlandıran, hedefli sosyal medya reklam kampanyaları yönetiyoruz.',
    },
  ],
  process: [
    { num: '01', title: 'Marka Sesi', desc: 'Markanızın tonu, görsel kimliği ve içerik stratejisi netleştiriliyor.' },
    { num: '02', title: 'Rakip & Kitle Analizi', desc: 'Sektörünüzdeki en iyi hesaplar inceleniyor; hedef kitlenizin ilgi alanları belirleniyor.' },
    { num: '03', title: 'Üretim & Yayın', desc: 'Aylık içerik takvimi oluşturuluyor, onaylanıyor ve otomatik yayınlanıyor.' },
    { num: '04', title: 'Büyüme & Optimizasyon', desc: 'Etkileşim verileri analiz edilerek en iyi performans gösteren format ve saatler optimize ediliyor.' },
  ],
  faqs: [
    { q: 'Ayda kaç gönderi yapıyorsunuz?', a: 'Pakete göre Instagram\'da haftada 4–7, TikTok\'ta haftada 3–5 içerik yayınlıyoruz. Reels, carousel, story ve statik post formatlarında dengeli bir mix oluşturuyoruz.' },
    { q: 'İçerikleri siz mi tasarlıyorsunuz?', a: 'Evet. Fotoğraf çekimi gerektirmeyen tüm grafik, video montaj ve metin içerikleri ekibimiz tarafından üretiliyor. Ürün veya mekan fotoğrafları için yönlendirme yapıyoruz.' },
    { q: 'Hesap parolalarımı paylaşmak zorunda mıyım?', a: 'Hayır. Meta Business Suite üzerinden ajans erişimi tanımlıyoruz; bu sayede hesap kontrolü her zaman sizde kalır.' },
    { q: 'Kaç ayda bir sonuç görürüm?', a: 'Etkileşim oranı ve erişim artışı 1. ayda görülür. Anlamlı takipçi büyümesi ve marka farkındalığı 3–6 aylık süreçte oluşur.' },
  ],
}

export default function SosyalMedyaPage() {
  return <ServicePage config={config} />
}
