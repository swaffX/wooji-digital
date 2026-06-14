import type { Metadata } from 'next'
import SiteLayout from '@/components/SiteLayout'
import WebContent from './WebContent'

export const metadata: Metadata = {
  title: 'Web Tasarım & Geliştirme | Wooji Digital',
  description: 'Dönüşüm odaklı, hızlı ve modern web siteleri. Markanızın dijital yüzünü en güçlü haliyle tasarlıyor ve geliştiriyoruz.',
  alternates: { canonical: '/web-tasarim' },
}

export default function WebTasarimPage() {
  return (
    <SiteLayout>
      <WebContent />
    </SiteLayout>
  )
}
