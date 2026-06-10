import type { MetadataRoute } from 'next'

const BASE = 'https://woojidigital.com'
const now = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                             lastModified: now, changeFrequency: 'weekly',  priority: 1    },
    { url: `${BASE}/hizmetler`,              lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/seo-hizmetleri`,         lastModified: now, changeFrequency: 'monthly', priority: 0.9  },
    { url: `${BASE}/dijital-reklam`,         lastModified: now, changeFrequency: 'monthly', priority: 0.9  },
    { url: `${BASE}/web-tasarim`,            lastModified: now, changeFrequency: 'monthly', priority: 0.9  },
    { url: `${BASE}/sosyal-medya`,           lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/icerik-pazarlamasi`,     lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/analitik-strateji`,      lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/hakkimizda`,             lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/referanslar`,            lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/surec`,                  lastModified: now, changeFrequency: 'monthly', priority: 0.7  },
    { url: `${BASE}/sss`,                    lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${BASE}/iletisim`,               lastModified: now, changeFrequency: 'monthly', priority: 0.8  },
    { url: `${BASE}/blog`,                   lastModified: now, changeFrequency: 'weekly',  priority: 0.6  },
    { url: `${BASE}/gizlilik-politikasi`,    lastModified: now, changeFrequency: 'yearly',  priority: 0.3  },
    { url: `${BASE}/kvkk`,                   lastModified: now, changeFrequency: 'yearly',  priority: 0.3  },
  ]
}
