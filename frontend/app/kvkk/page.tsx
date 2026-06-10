import type { Metadata } from 'next'
import LegalLayout, { type LegalSection } from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni | Wooji Digital',
  description:
    'Wooji Digital olarak 6698 sayılı KVKK kapsamında kişisel verilerinizin nasıl işlendiğine dair aydınlatma metni.',
  robots: 'noindex, follow',
}

const sections: LegalSection[] = [
  {
    id: 'veri-sorumlusu',
    title: 'Veri Sorumlusu',
    content: (
      <>
        <p>
          Wooji Digital, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında veri sorumlusu
          sıfatıyla hareket etmektedir. Kişisel verileriniz, aşağıda açıklanan amaçlar doğrultusunda
          tarafımızca işlenmektedir.
        </p>
        <h3>Veri Sorumlusu İletişim Bilgileri</h3>
        <ul>
          <li><strong>Ticari Unvan:</strong> Wooji Digital</li>
          <li><strong>Adres:</strong> İstanbul, Türkiye</li>
          <li>
            <strong>E-posta:</strong>{' '}
            <a href="mailto:info@woojidigital.com">info@woojidigital.com</a>
          </li>
          <li>
            <strong>Web Sitesi:</strong>{' '}
            <a href="https://woojidigital.com">woojidigital.com</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'islenen-veriler',
    title: 'İşlenen Kişisel Veriler',
    content: (
      <>
        <p>
          Hizmetlerimizden yararlanmanız veya web sitemizi ziyaret etmeniz sürecinde aşağıdaki
          kişisel veriler işlenmektedir:
        </p>
        <h3>İletişim Formu ve Hizmet Talepleri</h3>
        <ul>
          <li>Ad ve soyad</li>
          <li>E-posta adresi</li>
          <li>Telefon numarası</li>
          <li>Şirket/marka adı</li>
          <li>İletişim mesajı içeriği</li>
        </ul>
        <h3>Bülten Aboneliği</h3>
        <ul>
          <li>E-posta adresi</li>
          <li>Abonelik tarihi ve tercihleri</li>
        </ul>
        <h3>Teknik ve Otomatik Veriler</h3>
        <ul>
          <li>IP adresi (anonimleştirilmiş)</li>
          <li>Tarayıcı türü ve sürümü</li>
          <li>Cihaz bilgileri</li>
          <li>Ziyaret edilen sayfalar ve oturum süresi</li>
          <li>Çerezler aracılığıyla elde edilen davranışsal veriler</li>
        </ul>
      </>
    ),
  },
  {
    id: 'isleme-amaci',
    title: 'Kişisel Verilerin İşlenme Amaçları',
    content: (
      <>
        <p>Kişisel verileriniz aşağıdaki amaçlar doğrultusunda işlenmektedir:</p>
        <ul>
          <li>Hizmet teklifi hazırlanması ve sözleşme süreçlerinin yürütülmesi</li>
          <li>Müşteri iletişimi, destek ve bilgilendirme faaliyetleri</li>
          <li>Dijital pazarlama bülteni ve kampanya duyurularının iletilmesi (açık rıza ile)</li>
          <li>Web sitesi performansının analiz edilmesi ve iyileştirilmesi</li>
          <li>Yasal yükümlülüklerin ve idari taleplerin yerine getirilmesi</li>
          <li>Güvenlik açıklarının tespiti ve sahteciliğin önlenmesi</li>
        </ul>
      </>
    ),
  },
  {
    id: 'hukuki-dayanak',
    title: 'Hukuki Dayanak',
    content: (
      <>
        <p>
          Kişisel verileriniz, KVKK'nın 5. ve 6. maddeleri kapsamındaki aşağıdaki hukuki
          dayanaklar çerçevesinde işlenmektedir:
        </p>
        <ul>
          <li>
            <strong>Sözleşmenin kurulması ve ifası (Md. 5/2-c):</strong> Hizmet taleplerinizin
            karşılanması ve sözleşme yükümlülüklerinin yerine getirilmesi amacıyla.
          </li>
          <li>
            <strong>Meşru menfaat (Md. 5/2-f):</strong> Web sitesi güvenliği, analitik ve
            hizmet kalitesinin artırılması amacıyla; temel hak ve özgürlüklerinize zarar
            vermemek kaydıyla.
          </li>
          <li>
            <strong>Açık rıza (Md. 5/1):</strong> Pazarlama iletişimi ve bülten aboneliği
            için; onayınız her zaman geri alınabilir.
          </li>
          <li>
            <strong>Yasal yükümlülük (Md. 5/2-ç):</strong> İlgili mevzuatın gerektirdiği
            durumlarda yetkili kurum ve kuruluşlara bilgi verilmesi.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'aktarim',
    title: 'Kişisel Verilerin Aktarıldığı Taraflar',
    content: (
      <>
        <p>
          Kişisel verileriniz, KVKK'nın 8. ve 9. maddeleri uyarınca yalnızca aşağıda
          belirtilen taraflarla ve gerekli güvenceler sağlanarak paylaşılmaktadır:
        </p>
        <ul>
          <li>
            <strong>Google LLC (ABD):</strong> Google Analytics ve Google Ads hizmetleri
            kapsamında anonim analitik veriler; Google'ın GDPR uyumlu veri işleme
            koşulları geçerlidir.
          </li>
          <li>
            <strong>E-posta altyapı sağlayıcısı:</strong> Bülten ve iletişim e-postalarının
            iletilmesi için; veri işleme sözleşmesi kapsamında.
          </li>
          <li>
            <strong>Barındırma ve CDN hizmeti:</strong> Web sitesinin güvenli şekilde
            çalışması için; Avrupa veya KVKK uyumlu sunucularda.
          </li>
          <li>
            <strong>Yetkili kamu kurum ve kuruluşları:</strong> Yalnızca yasal zorunluluk
            halinde ve ilgili mevzuat çerçevesinde.
          </li>
        </ul>
        <p>
          Yurt dışına veri aktarımı, KVKK'nın 9. maddesi kapsamında yeterli korumanın
          bulunduğu ülkelerle veya açık rızanızla gerçekleştirilmektedir.
        </p>
      </>
    ),
  },
  {
    id: 'saklama-suresi',
    title: 'Kişisel Verilerin Saklanma Süresi',
    content: (
      <>
        <p>
          Kişisel verileriniz, işlenme amacının gerektirdiği süre boyunca saklanmakta;
          bu sürenin sona ermesi halinde silinmekte, yok edilmekte veya anonim hale
          getirilmektedir.
        </p>
        <ul>
          <li>
            <strong>İletişim formu verileri:</strong> İş ilişkisinin sona ermesinden itibaren
            3 yıl veya yasal zamanaşımı süresince.
          </li>
          <li>
            <strong>Bülten aboneliği:</strong> Aboneliğinizi sonlandırana kadar; talepte
            bulunmanız halinde derhal silinir.
          </li>
          <li>
            <strong>Teknik log kayıtları:</strong> Azami 12 ay.
          </li>
          <li>
            <strong>Sözleşme kapsamındaki veriler:</strong> İlgili mevzuatta öngörülen
            saklama süresi boyunca (ticari defterlere ilişkin veriler için 10 yıl).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'haklariniz',
    title: 'İlgili Kişi Olarak Haklarınız',
    content: (
      <>
        <p>
          KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz ve bu haklarınızı
          kullanmak için{' '}
          <a href="mailto:info@woojidigital.com">info@woojidigital.com</a> adresine
          yazılı başvuruda bulunabilirsiniz:
        </p>
        <ul>
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
          <li>İşlenmişse buna ilişkin bilgi talep etme</li>
          <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
          <li>Yurt içinde veya yurt dışında aktarılan üçüncü tarafları öğrenme</li>
          <li>
            Eksik veya yanlış işlenmişse düzeltilmesini ve bu kapsamda ilgili
            üçüncü taraflara bildirilmesini isteme
          </li>
          <li>
            Kanun'un 7. maddesinde öngörülen şartlar çerçevesinde silinmesini veya yok
            edilmesini isteme ve üçüncü taraflara bildirilmesini talep etme
          </li>
          <li>
            Münhasıran otomatik sistemler aracılığıyla analiz edilmesi nedeniyle aleyhinize
            ortaya çıkan sonuca itiraz etme
          </li>
          <li>
            Kanuna aykırı işlenmesi sebebiyle uğradığınız zararın giderilmesini talep etme
          </li>
        </ul>
        <p>
          Başvurularınız 30 gün içinde ücretsiz olarak yanıtlanacaktır. Taleplerin
          karşılanmasının ek maliyet gerektirdiği hallerde, Kişisel Verileri Koruma
          Kurulu tarafından belirlenen tarifedeki ücret alınabilir.
        </p>
      </>
    ),
  },
  {
    id: 'guvenlik',
    title: 'Veri Güvenliği',
    content: (
      <>
        <p>
          Kişisel verilerinizin güvenliğini sağlamak amacıyla uygun teknik ve idari
          tedbirler alınmaktadır:
        </p>
        <h3>Teknik Önlemler</h3>
        <ul>
          <li>SSL/TLS şifreleme ile tüm veri iletimi korunmaktadır</li>
          <li>Sunucu erişimleri güvenlik duvarı ve yetkilendirme kontrolleriyle sınırlandırılmıştır</li>
          <li>Düzenli güvenlik güncellemeleri ve zafiyet taramaları yapılmaktadır</li>
          <li>Analitik veriler IP anonimleştirme ile işlenmektedir</li>
        </ul>
        <h3>İdari Önlemler</h3>
        <ul>
          <li>Kişisel verilere yalnızca yetkili personel erişebilmektedir</li>
          <li>Çalışanlar KVKK gizlilik yükümlülükleri konusunda bilgilendirilmektedir</li>
          <li>Üçüncü taraf hizmet sağlayıcılarla veri işleme sözleşmeleri imzalanmıştır</li>
        </ul>
        <p>
          Buna karşın internet üzerinden hiçbir veri aktarımının veya elektronik depolamanın
          %100 güvenli olduğu garanti edilemez. Güvenlik açığı tespit etmeniz halinde
          lütfen derhal{' '}
          <a href="mailto:info@woojidigital.com">info@woojidigital.com</a> adresine bildirin.
        </p>
      </>
    ),
  },
  {
    id: 'basvuru',
    title: 'Başvuru ve İletişim',
    content: (
      <>
        <p>
          KVKK kapsamındaki haklarınızı kullanmak veya bu aydınlatma metni hakkında
          soru sormak için aşağıdaki kanallardan bize ulaşabilirsiniz:
        </p>
        <ul>
          <li>
            <strong>E-posta:</strong>{' '}
            <a href="mailto:info@woojidigital.com">info@woojidigital.com</a>
          </li>
          <li>
            <strong>Konu satırı:</strong> "KVKK Başvurusu" olarak belirtmenizi rica ederiz
          </li>
        </ul>
        <p>
          Başvurunuzda; adınız-soyadınız, iletişim bilgileriniz, talebinizin konusu ve
          gerekiyorsa destekleyici belgeler yer almalıdır. Kimliğinizi doğrulayan bilgiler
          güvenli şekilde işlenecek ve yalnızca başvurunuzun değerlendirilmesi amacıyla
          kullanılacaktır.
        </p>
        <p>
          Kişisel Verileri Koruma Kurumu'na (KVKK) şikâyette bulunma hakkınız her zaman
          saklıdır:{' '}
          <a href="https://www.kvkk.gov.tr" target="_blank" rel="noopener noreferrer">
            www.kvkk.gov.tr
          </a>
        </p>
      </>
    ),
  },
]

export default function KvkkPage() {
  return (
    <LegalLayout
      tag="KVKK"
      title="Aydınlatma"
      highlight="Metni"
      desc="6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerinizin nasıl toplandığı, işlendiği ve korunduğu hakkında bilgilendirme."
      lastUpdated="10 Haziran 2026"
      sections={sections}
    />
  )
}
