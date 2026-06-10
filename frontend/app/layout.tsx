import type { Metadata } from 'next'
import { Syne, Outfit, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import CookieBanner from '@/components/CookieBanner'
import './globals.css'

const GA_ID = 'G-XXXXXXXXXX' // TODO: replace with real GA4 measurement ID

const syneVar = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne-var',
  display: 'swap',
})

const outfitVar = Outfit({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-outfit',
  display: 'swap',
})

const dmSansVar = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Wooji Digital | Dijital Pazarlama & Marka Büyütme Ajansı',
  description:
    'Wooji Digital; SEO, reklam yönetimi, web tasarım ve dijital strateji hizmetleriyle markanızı dijital dünyada büyütür. Ücretsiz danışmanlık için hemen iletişime geçin.',
  keywords:
    'dijital pazarlama, SEO, Google Ads, sosyal medya yönetimi, web tasarım, dijital ajans, marka büyütme, Wooji Digital',
  authors: [{ name: 'Wooji Digital' }],
  robots: 'index, follow',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  metadataBase: new URL('https://woojidigital.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://woojidigital.com/',
    title: 'Wooji Digital | Dijital Pazarlama & Marka Büyütme Ajansı',
    description:
      'SEO, reklam yönetimi, web tasarım ve dijital strateji hizmetleriyle markanızı büyütüyoruz. Ücretsiz danışmanlık için iletişime geçin.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Wooji Digital — Dijital Pazarlama Ajansı' }],
    locale: 'tr_TR',
    siteName: 'Wooji Digital',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@woojidigital',
    creator: '@woojidigital',
    title: 'Wooji Digital | Dijital Pazarlama Ajansı',
    description:
      'SEO, reklam yönetimi, web tasarım ve dijital strateji hizmetleriyle markanızı büyütüyoruz.',
    images: [{ url: '/og-image.jpg', alt: 'Wooji Digital' }],
  },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Wooji Digital',
  description:
    'Dijital pazarlama, marka büyütme ve çevrimiçi görünürlük çözümleri sunan modern bir dijital ajans.',
  url: 'https://woojidigital.com/',
  logo: 'https://woojidigital.com/logo.png',
  image: 'https://woojidigital.com/og-image.jpg',
  priceRange: '$$',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@woojidigital.com',
    contactType: 'customer service',
    availableLanguage: 'Turkish',
    areaServed: 'TR',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'TR',
    addressLocality: 'İstanbul',
  },
  sameAs: [
    'https://instagram.com/woojidigital',
    'https://tiktok.com/@woojidigital',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="tr"
      className={`${syneVar.variable} ${outfitVar.variable} ${dmSansVar.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        {children}
        <CookieBanner />
        {/* Google Analytics — replace G-XXXXXXXXXX with real ID */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `}
        </Script>
      </body>
    </html>
  )
}
