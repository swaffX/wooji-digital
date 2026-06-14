import type { Metadata } from 'next'
import SiteLayout from '@/components/SiteLayout'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'İletişim | Wooji Digital',
  description:
    'Wooji Digital ile iletişime geçin. Ücretsiz danışmanlık için formu doldurun veya doğrudan ulaşın.',
  alternates: { canonical: '/iletisim' },
}

export default function IletisimPage() {
  return (
    <SiteLayout>
      <Contact />
    </SiteLayout>
  )
}
