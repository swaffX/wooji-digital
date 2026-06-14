import type { Metadata } from 'next'
import SiteLayout from '@/components/SiteLayout'
import DijitalContent from './DijitalContent'

export const metadata: Metadata = {
  title: 'Dijital Reklam Yönetimi | Wooji Digital',
  description: 'Google Ads ve Meta reklam yönetimiyle doğru kitleye ulaşın. Bütçenizi en verimli noktaya taşıyan, dönüşüm odaklı kampanyalar.',
  alternates: { canonical: '/dijital-reklam' },
}

export default function DijitalReklamPage() {
  return (
    <SiteLayout>
      <DijitalContent />
    </SiteLayout>
  )
}
