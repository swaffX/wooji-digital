import type { Metadata } from 'next'
import SiteLayout from '@/components/SiteLayout'
import IcerikContent from './IcerikContent'

export const metadata: Metadata = {
  title: 'İçerik Pazarlaması | Wooji Digital',
  description: 'SEO uyumlu, dönüştüren içeriklerle marka otoritenizi inşa edin. Blog, e-posta ve video içerik stratejisi.',
  alternates: { canonical: '/icerik-pazarlamasi' },
}

export default function IcerikPazarlamasiPage() {
  return (
    <SiteLayout>
      <IcerikContent />
    </SiteLayout>
  )
}
