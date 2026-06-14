import type { Metadata } from 'next'
import SiteLayout from '@/components/SiteLayout'
import SeoContent from './SeoContent'

export const metadata: Metadata = {
  title: 'SEO Hizmetleri | Wooji Digital',
  description: "Google'da üst sıralara çıkın. Teknik SEO, içerik stratejisi ve backlink yönetimiyle organik trafiğinizi katlıyoruz.",
  alternates: { canonical: '/seo-hizmetleri' },
}

export default function SeoHizmetleriPage() {
  return (
    <SiteLayout>
      <SeoContent />
    </SiteLayout>
  )
}
