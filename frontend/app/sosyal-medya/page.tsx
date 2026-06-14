import type { Metadata } from 'next'
import SiteLayout from '@/components/SiteLayout'
import SosyalContent from './SosyalContent'

export const metadata: Metadata = {
  title: 'Sosyal Medya Yönetimi | Wooji Digital',
  description: "Instagram, TikTok ve LinkedIn'de güçlü marka varlığı oluşturun. Etkileşim artıran içerikler ve topluluk yönetimi.",
  alternates: { canonical: '/sosyal-medya' },
}

export default function SosyalMedyaPage() {
  return (
    <SiteLayout>
      <SosyalContent />
    </SiteLayout>
  )
}
