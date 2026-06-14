export interface BlogPost {
  slug: string
  category: string
  date: string
  readTime: string
  title: string
  excerpt: string
  color: string
  content: string
}

export const posts: BlogPost[] = [
  {
    slug: 'seo-nin-gelecegi-2025',
    category: 'SEO',
    date: '12 Ocak 2025',
    readTime: '6 dk',
    title: '2025\'te SEO\'nun Geleceği: Yapay Zeka ve İçerik Stratejisi',
    excerpt: 'Google\'ın SGE güncellemeleri ve yapay zeka destekli arama, SEO stratejilerini kökünden değiştiriyor. Markanızı bu değişime nasıl hazırlarsınız?',
    color: '#7c3aed',
    content: `Google'ın arama motoru, 2025 itibarıyla yapay zeka destekli özetler (AI Overviews) ile köklü bir dönüşüm geçiriyor. Peki bu değişim SEO stratejinizi nasıl etkiliyor?

## AI Overviews ve Organik Trafik

Google'ın yapay zeka özetleri, kullanıcıların bilgilendirici sorularda sayfaları tıklamadan yanıt almasını sağlıyor. Bu durum bazı içerik türleri için organik tıklamaları azaltabilir; ancak araştırmalar gösteriyor ki işlem odaklı sorgularda (ürün satın alma, hizmet araştırma gibi) tıklama oranları yüksek kalmaya devam ediyor.

**Sonuç:** Yüzeysel bilgi vermek yerine derinlemesine, özgün ve güvenilir içerik üretmek her zamankinden daha önemli.

## E-E-A-T: Deneyim Artık Kritik

Google, Experience (Deneyim), Expertise (Uzmanlık), Authoritativeness (Otorite) ve Trust (Güvenilirlik) faktörlerini içerik değerlendirmesinde esas alıyor. 2025'te buna ek olarak **gerçek insan deneyimi** içermeyen içeriklerin sıralamada geride kaldığı gözlemleniyor.

Yapmanız gerekenler:
- Yazar biyografisi ve uzmanlık kanıtı ekleyin
- Vaka çalışmaları ve gerçek verilerle destekleyin
- Müşteri görüşlerini içerik içinde kullanın

## Uzun Kuyruklu Anahtar Kelimeler Kazanıyor

AI özetleri geniş sorgulara odaklanırken, niş ve spesifik sorgular hâlâ geleneksel SEO değerine sahip. "dijital pazarlama ajansı" yerine "İstanbul e-ticaret SEO ajansı" gibi uzun kuyruklu kelimeler daha az rekabetli ve daha nitelikli trafik getiriyor.

## Teknik SEO'yu İhmal Etmeyin

Yapay zeka destekli aramada içeriğinizin öne çıkması için teknik altyapının sağlam olması gerekiyor:

- **Core Web Vitals:** LCP, INP ve CLS değerlerini optimize edin
- **Yapılandırılmış Veri:** Schema.org işaretlemeleri ile içeriğinizi net tanımlayın
- **Mobil Öncelik:** Google, mobil indekslemeyi baz alıyor

## 2025 SEO Aksiyonları

1. Her içerik sayfasında birincil kaynak olun — alıntılanmak için yeterli derinlik sunun
2. Video ve görsel içerikle metni destekleyin
3. Topical authority (konu otoritesi) inşa edin — tek sayfa yerine eksiksiz içerik kümeleri oluşturun
4. Kullanıcı niyetini (search intent) anlayın ve içeriği buna göre şekillendirin

SEO, ölmüyor — dönüşüyor. Değişime uyum sağlayan markalar organik kanaldan güçlü büyümeye devam edecek.`,
  },
  {
    slug: 'google-ads-roas-artirma',
    category: 'Reklam',
    date: '28 Aralık 2024',
    readTime: '8 dk',
    title: 'Google Ads ile ROAS\'ınızı Artıracak 5 Strateji',
    excerpt: 'Reklam harcamalarınızdan maksimum verim almak için kullanabileceğiniz, veri destekli Google Ads optimizasyon teknikleri.',
    color: '#2563eb',
    content: `Reklam bütçenizi büyütmek zorunda kalmadan ROAS'ınızı (Reklam Harcamalarından Elde Edilen Gelir) artırmak mümkün. İşte kanıtlanmış 5 strateji:

## 1. Performans Max Kampanyalarını Doğru Yapılandırın

Google'ın Performance Max (PMax) kampanyaları tüm reklam envanterini kapsıyor: Arama, Display, YouTube, Gmail ve Discovery. Ancak yanlış yapılandırılmış bir PMax kampanyası bütçeyi verimsiz harcayabilir.

**Yapmanız gerekenler:**
- En az 5 başlık, 5 açıklama ve 10+ görsel varlık girin
- Mevcut müşteri listelerini negatif hedeflemede kullanın (brand kannibalizasyonunu önlemek için)
- Kampanya hedefini net belirleyin: satış, form, telefon

## 2. Dönüşüm İzlemeyi Kusursuz Kurun

Birçok hesabın en büyük sorunu hatalı veya eksik dönüşüm izleme. Google akıllı teklif vermek için dönüşüm verilerine ihtiyaç duyuyor. Yanlış veri = yanlış optimizasyon.

Kontrol listesi:
- Google Tag Manager üzerinden gtag kurulumu yapın
- Birincil dönüşümü (satış/form) ve ikincil dönüşümleri (sayfa ziyareti, scroll) ayrı tanımlayın
- Enhanced Conversions (Gelişmiş Dönüşümler) aktifleştirin

## 3. Arama Terimi Raporunu Haftalık Analiz Edin

Google Ads, gerçek kullanıcı arama terimlerini görmenizi sağlar. Arama Terimleri raporunu haftalık inceleyerek düşük kaliteli arama terimlerini negatif anahtar kelime olarak ekleyin.

Örnek: "ücretsiz seo araçları" terimi üzerinden reklam gösteriyorsanız ve bu kullanıcılar dönüşüm gerçekleştirmiyorsa, bu terimi negatif listeye alın.

## 4. Reklam Metni A/B Testini Sistematik Yapın

Responsive Search Ad'lerde Google otomatik test yapar, ancak sizin de öneriler sunmanız gerekiyor. Her reklam grubunda minimum 2 reklam varyantı tutun ve:

- Başlık 1'de en güçlü vaadinizi belirtin
- Güçlü bir eylem çağrısı (CTA) kullanın: "Hemen Başlayın", "Ücretsiz Teklif Alın"
- Rakiplerinizden ayrışan fayda belirtin: "7/24 Destek", "İlk Ay Ücretsiz"

## 5. Hedef Kitle Katmanlamayı Uygulayın

Broad Match (Geniş Eşleşme) anahtar kelimeleri, akıllı teklif stratejileriyle birleştiğinde çok güçlü. Ancak hedef kitle sinyalleri olmadan verimsiz olabilir.

Hedef kitle katmanlama yöntemleri:
- Mevcut müşteri listeleri (CRM verisi)
- Web sitesi ziyaretçileri (remarketing)
- Benzer kitleler (similar audiences)
- Yaşam olayları ve satın alma niyeti segmentleri

Bu 5 stratejiyi uygulayan müşterilerimizde ortalama %35-60 ROAS artışı gözlemledik. Sonuçlar sektöre ve bütçeye göre değişse de temel prensipler evrensel geçerliliğini koruyor.`,
  },
  {
    slug: 'sosyal-medya-algoritmalari',
    category: 'Sosyal Medya',
    date: '15 Aralık 2024',
    readTime: '5 dk',
    title: 'Sosyal Medya Algoritmaları ve Organik Erişimi Artırmanın Yolları',
    excerpt: 'Instagram, TikTok ve LinkedIn algoritmalarının değişen dinamikleri karşısında organik erişiminizi nasıl korursunuz?',
    color: '#0891b2',
    content: `Sosyal medya platformları algoritmalarını sürekli güncelliyor. 2025'te organik erişimi korumak için her platformun neyi ödüllendirdiğini anlamak şart.

## Instagram: Reels ve Yakın Arkadaşlar

Instagram'ın 2025 algoritması iki şeyi ön plana çıkarıyor: **Reels videoları** ve **gerçek etkileşim**. Beğeni sayısından çok yorum, kaydetme ve paylaşım önem kazanıyor.

**Organik erişimi artırmak için:**
- Reels için 7-15 saniye kanca: ilk kareler izlenmeye karar verdiriyor
- Alt yazı yerine yerleşik metin kullanın (erişilebilirlik ve algoritma için)
- Haftalık en az 3 Reels + 2 carousel paylaşımı hedefleyin
- Yakın arkadaşlar listesine özel içerik üretin — bu içerikler daha geniş dağıtılıyor

## TikTok: Değer Sunmak Her Şey

TikTok algoritması için içerik tamamlanma oranı (completion rate) en kritik metrik. Kullanıcı videonuzu sonuna kadar izlerse, algoritma içeriği daha geniş kitlelere dağıtıyor.

Başarılı TikTok stratejisi:
- İlk 2 saniyede soruyu/sonucu söyleyin, merak uyandırın
- 15-30 saniyelik videolar tamamlanma oranını artırıyor
- Trend sesler organik erişimi %40-60 artırıyor
- Yorum sorusu sormak etkileşimi ve dağıtımı tetikliyor

## LinkedIn: Düşünce Liderliği

LinkedIn algoritması artık kişisel deneyim ve özgün görüşleri paylaşan içerikleri öne çıkarıyor. Şirket sayfaları yerine kişisel profiller çok daha yüksek organik erişim elde ediyor.

Etkili LinkedIn içerikleri:
- Gerçek bir deneyim veya hata paylaşımı (hikaye formatı)
- Sektörel bir öngörü ve somut bir örnek
- İlk yorum bölümünü kendiniz yazın — ilk 60 dakikadaki etkileşim algoritmasal dağıtımı belirliyor
- Dış link paylaşımlarını sınırlayın; LinkedIn içeriği site dışına taşımaktan hoşlanmıyor

## Tüm Platformlarda İşe Yarayan Taktikler

1. **Tutarlılık algoritmaların ilk koşulu** — haftada 3-5 paylaşım hedefi belirleyin
2. **İçerik takvimi** oluşturun, anlık içerik krizini önleyin
3. **Analytics'i haftalık kontrol** edin — hangi formatlar daha fazla erişim alıyor?
4. **Topluluk oluşturun** — soru sorun, yorumlara yanıt verin

Organik sosyal medya sabır isteyen bir strateji. Ancak sistematik ve özgün içerik üretimiyle 6 ayda sektörünüzde öne çıkan bir marka oluşturmak mümkün.`,
  },
  {
    slug: 'web-sitesi-donusum-orani',
    category: 'Web Tasarım',
    date: '3 Aralık 2024',
    readTime: '7 dk',
    title: 'Web Sitenizin Dönüşüm Oranını Artıracak 7 UX İpucu',
    excerpt: 'Ziyaretçiyi müşteriye dönüştüren web sayfaları nasıl tasarlanır? A/B testleriyle kanıtlanmış UX prensipleri.',
    color: '#7c3aed',
    content: `Web sitenize trafik çekmek yeterli değil — ziyaretçilerin aksiyona geçmesi (form doldurmak, aramak, satın almak) için UX'i bilinçli tasarlamak gerekiyor.

## 1. Üst Katlamayı (Above the Fold) Optimize Edin

Ziyaretçinin sayfayı kaydırmadan gördüğü ilk alan olan "üst katlama" dönüşümü belirliyor. Bu alanda olması gerekenler:

- Net bir değer önerisi (Başlık): Kim için ne yapıyorsunuz?
- Güçlü bir CTA butonu: "Ücretsiz Teklif Al", "Hemen Başlayın"
- Sosyal kanıt: müşteri sayısı, puan veya tanınan logo

## 2. Sayfa Yükleme Hızını Mutlaka Ölçün

Google araştırmasına göre sayfa yükleme süresi 1'den 3 saniyeye uzadığında hemen çıkma oranı %32 artıyor. 5 saniyeye ulaşırsa bu oran %90'a çıkıyor.

PageSpeed Insights ile sitenizi test edin. LCP (en büyük içerik yükleme süresi) 2.5 saniyenin altında olmalı.

## 3. Form Alanlarını Azaltın

Her ek form alanı dönüşüm oranını düşürüyor. Araştırmalar gösteriyor ki 11 alanlı formdan 4 alanlıya geçmek dönüşümü %120 artırıyor.

**Altın kural:** Sadece gerçekten ihtiyacınız olan bilgiyi isteyin. İsim + E-posta + Mesaj çoğu durumda yeterli.

## 4. Güven Sinyallerini Görünür Yapın

Kullanıcılar satın alma kararından önce bilinçsizce güvenilirlik işaretleri arıyor:

- SSL sertifikası (HTTPS) — zorunlu
- Gerçek müşteri yorumları (fotoğraflı ve isimli)
- İletişim bilgileri ve fiziksel adres
- Para iade garantisi veya ücretsiz deneme
- Basın / medya referansları

## 5. CTA Buton Tasarımı

Araştırmalar kırmızı ve turuncu butonların genellikle en iyi performansı gösterdiğini ortaya koyuyor — ancak bu siteye göre değişiyor. Daha önemli olan:

- Buton metin aktif olmalı: "Al" değil "Hemen Ücretsiz Teklif Al"
- Renk, sayfanın geri kalanından ayrışmalı (kontrast)
- Boyut yeterince büyük olmalı (minimum 44px yükseklik)
- Whitespace ile çevrelenmeli

## 6. Mobil Deneyimi Masaüstünden Önce Tasarlayın

Türkiye internet trafiğinin %70'i mobil cihazdan geliyor. Mobil siteyi masa üstünün küçülmüş versiyonu olarak tasarlamak değil, önce mobil düşünmek gerekiyor.

Mobil kontrol listesi:
- Butonlar parmakla basılabilir büyüklükte mi?
- Metin kaydırma olmadan okunabiliyor mu?
- Form alanları sanal klavye açılınca görünür mü?

## 7. Isı Haritaları ile Kullanıcı Davranışını İzleyin

Hotjar veya Microsoft Clarity (ücretsiz) gibi araçlarla kullanıcıların nereye tıkladığını, nerelerde takıldığını görebilirsiniz.

Yaygın bulgular:
- Kullanıcılar çoğu zaman alt katlama CTA'sına ulaşmıyor → CTA'yı üst bölüme taşıyın
- Belirli bir bölümde çıkış artıyor → o bölümü test edin ve yeniden yazın

Bu 7 ipucunu uygulayan müşterilerimizde ortalama 3-4 ay içinde %40-80 dönüşüm artışı gözlemledik. A/B testi yapmadan varsayımla değişiklik yapmak yerine veriyle karar almak, sürdürülebilir büyümenin temelini oluşturuyor.`,
  },
  {
    slug: 'yerel-seo-rehberi',
    category: 'SEO',
    date: '18 Kasım 2024',
    readTime: '9 dk',
    title: 'Yerel SEO Rehberi: Google Haritalar\'da Üst Sıralara Çıkın',
    excerpt: 'Google Business Profile optimizasyonu, yerel anahtar kelimeler ve müşteri yorumları yönetimiyle yerel aramada öne çıkın.',
    color: '#2563eb',
    content: `"Yakınımda dijital ajans" veya "İstanbul SEO hizmeti" gibi aramalarda Google'ın yerel sonuçlarında görünmek, fiziksel veya bölgesel işletmeler için kritik öneme sahip.

## Google Business Profile: Temeli Doğru Kurun

Google Business Profile (GBP), yerel SEO'nun kalbidir. Profil ne kadar eksiksiz doldurulursa yerel aramalarda o kadar üst sıralara çıkılıyor.

**Eksiksiz profil için kontrol listesi:**
- İşletme adı, adres ve telefon (NAP) tutarlı olmalı — site, GBP ve diğer dizinlerle aynı
- Tüm kategorileri ekleyin (birincil + ikincil)
- Çalışma saatlerini, özel günleri belirtin
- En az 10 yüksek kaliteli fotoğraf yükleyin
- Ürün/hizmet listesi oluşturun
- "Q&A" (Sorular ve Yanıtlar) bölümüne sık sorulan soruları kendiniz ekleyin

## Müşteri Yorumları: Algoritmanın Sosyal Kanıtı

Google, yorum sayısı ve kalitesini yerel sıralama faktörü olarak kullanıyor. Yorumlara yanıt vermek ise hem algoritmaya hem de potansiyel müşterilere güven sinyali veriyor.

Yorum stratejisi:
- Her başarılı müşteri etkileşiminin ardından yorum isteyin (e-posta, QR kod ile)
- 24 saat içinde tüm yorumlara (olumlu/olumsuz) yanıt verin
- Olumsuz yorumları silmeye çalışmayın — profesyonel yanıt dönüşümü artırıyor

## Yerel Anahtar Kelime Stratejisi

"Dijital pazarlama" yerine "Kadıköy dijital pazarlama ajansı" veya "İstanbul Google Ads yönetimi" gibi coğrafi modifiye edilmiş kelimeler kullanın.

Sayfa optimizasyonu için:
- Title tag'e şehir/ilçe adı ekleyin
- Meta description'da coğrafi konum belirtin
- "Hizmet verdiğimiz bölgeler" sayfası oluşturun
- Schema.org LocalBusiness işaretlemesi ekleyin

## Yerel Link İnşası

Yerel otorite geliştirmek için:
- Yerel haber siteleri ve dijital gazete işbirlikleri
- Ticaret odası ve sektörel dernek üyelikleri
- Yerel etkinlik sponsorluğu ve basın bülteni
- Yerel iş dizinleri (Sahibinden, Firmahaber, Yelp TR)

## "Haritalar Paketi"nde Üst Sıralara Çıkmak

Google, yerel aramalarda harita üzerinde 3 işletme gösterir (Local Pack). Bu 3 konumdan birine girebilmek için:

1. Arama ile profiliniz arasındaki **alaka düzeyi** — doğru kategoriler
2. **Mesafe** — kullanıcıya fiziksel yakınlık
3. **Önem** — yorum sayısı, web sitesi otoritesi, GBP aktivitesi

Düzenli GBP gönderileri (haftalık) paylaşmak, aktivite sinyali göndererek sıralamayı olumlu etkiliyor.

Yerel SEO uzun vadeli bir yatırım. Ancak doğru yapıldığında, ücretli reklam olmaksızın yerel pazarda sürdürülebilir müşteri akışı sağlıyor.`,
  },
  {
    slug: 'icerik-pazarlama-stratejisi',
    category: 'İçerik',
    date: '5 Kasım 2024',
    readTime: '6 dk',
    title: 'Marka Otoritesi İnşa Eden İçerik Pazarlama Stratejisi',
    excerpt: 'İçerik takviminizi nasıl oluşturursunuz? Hedef kitlenizle rezonansa giren içerikler üretmenin sistematik yolu.',
    color: '#0891b2',
    content: `İçerik pazarlaması, doğrudan satış yapmak yerine değer sunarak güven inşa etmeyi ve uzun vadede müşteri kazanmayı hedefler. Ancak strateji olmadan üretilen içerik kaynak israfıdır.

## İçerik Stratejisinin Temelleri

Her etkili içerik stratejisi şu soruları yanıtlıyor:

1. **Kime yazıyoruz?** → Alıcı persona (demografik, sorunlar, hedefler)
2. **Ne istiyorlar?** → Arama niyeti analizi
3. **Nerede okuyorlar?** → Kanal tercihleri (blog, sosyal, e-posta)
4. **Nasıl karar veriyorlar?** → Müşteri yolculuğu haritası

## Içerik Takvimi Oluşturmak

Başarılı içerik pazarlamasının %80'i planlama, %20'si üretimdir. İyi bir içerik takvimi:

- **Frekans:** Haftalık kaç içerik üretebileceğinizi gerçekçi belirleyin (az ama düzenli > çok ama düzensiz)
- **Format dağılımı:** Blog, video, infografik, e-posta oranını belirleyin
- **SEO odak:** Her içerik için hedef anahtar kelime atayın
- **Dağıtım planı:** İçerik nerede, nasıl paylaşılacak?

## Topical Authority: Konu Otoritesi İnşası

Google, bir konuda kapsamlı bilgi sunan siteleri ödüllendiriyor. Tek tek optimum makaleler yerine **içerik kümeleri** (content clusters) oluşturun:

- **Sütun sayfası (pillar page):** Geniş konuyu kapsayan, uzun biçimli ana sayfa
- **Küme içerikleri:** Alt konuları detaylı inceleyen, sütun sayfasına bağlanan makaleler

Örnek: "Dijital Pazarlama Rehberi" (sütun) → "SEO Nedir?", "Google Ads Nasıl Çalışır?", "Sosyal Medya Stratejisi" (kümeler)

## İçerik Yeniden Kullanımı (Content Repurposing)

Tek bir içeriği birden fazla formatta kullanmak verimliliği artırıyor:

- Blog makalesi → LinkedIn post serisi (5 bölüm)
- Blog makalesi → YouTube videosu veya podcast bölümü
- Birden fazla blog → E-kitap veya rehber
- İstatistikler → Infografik → Pinterest / Instagram

## Ölçüm: Neye Bakmalı?

İçerik pazarlamasında yanlış metriklere odaklanmak yaygın bir hata:

| Yanlış Metrik | Doğru Metrik |
|---|---|
| Sayfa görüntüleme | Hedef tamamlama (form, arama) |
| Takipçi sayısı | Etkileşim oranı |
| Yayınlanan içerik sayısı | Organik trafik artışı |

**Ücretsiz araçlar:** Google Analytics 4 (trafik), Google Search Console (anahtar kelimeler), Hotjar (kullanıcı davranışı)

İçerik pazarlaması sabır gerektiriyor. Ancak 6-12 aylık tutarlı üretimin ardından organik trafik, ücretli kanallar olmadan düzenli müşteri akışı yaratıyor. Bu, en uzun vadeli ve en düşük maliyetli dijital pazarlama kanalıdır.`,
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return posts.find(p => p.slug === slug)
}
