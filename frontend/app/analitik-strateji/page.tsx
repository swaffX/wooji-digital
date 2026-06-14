import type { Metadata } from 'next'
import SiteLayout from '@/components/SiteLayout'
import AnalitikContent from './AnalitikContent'

export const metadata: Metadata = {
  title: 'Analitik & Strateji | Wooji Digital',
  description: 'Verilere dayalı büyüme stratejileri. GA4, dönüşüm izleme ve kapsamlı performans raporlaması.',
  alternates: { canonical: '/analitik-strateji' },
}

export default function AnalitikStratejiPage() {
  return (
    <SiteLayout>
      <AnalitikContent />
    </SiteLayout>
  )
}
