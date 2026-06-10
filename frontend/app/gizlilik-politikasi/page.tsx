import type { Metadata } from 'next'
import LegalLayout, { type LegalSection } from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | Wooji Digital',
  description:
    'Wooji Digital gizlilik politikası: web sitemizde hangi verilerin toplandığını, çerez kullanımını ve veri güvenliğini öğrenin.',
  robots: 'noindex, follow',
}

const sections: LegalSection[] = [
  {
    id: 'giris',
    title: 'Bu Politika Hakkında',
    content: (
      <>
        <p>
          Bu Gizlilik Politikası, <a href="https://woojidigital.com">woojidigital.com</a>{' '}
          adresli web sitemizi ziyaret ettiğinizde veya hizmetlerimizden yararlandığınızda
          hangi bilgilerin toplandığını, bu bilgilerin nasıl kullanıldığını ve nasıl korunduğunu
          açıklamaktadır.
        </p>
        <p>
          Sitemizi kullanmaya devam ederek bu politikayı okuduğunuzu ve kabul ettiğinizi
          beyan etmiş olursunuz. Kişisel verilerinizin yasal dayanaklarını öğrenmek için
          lütfen <a href="/kvkk">KVKK Aydınlatma Metnimizi</a> de inceleyiniz.
        </p>
      </>
    ),
  },
  {
    id: 'toplanan-bilgiler',
    title: 'Hangi Bilgileri Topluyoruz?',
    content: (
      <>
        <h3>Doğrudan Sağladığınız Bilgiler</h3>
        <p>
          İletişim formunu doldurduğunuzda veya bültenimize abone olduğunuzda bilinçli
          olarak paylaştığınız bilgilerdir:
        </p>
        <ul>
          <li>Ad ve soyad</li>
          <li>E-posta adresi</li>
          <li>Telefon numarası (opsiyonel)</li>
          <li>Şirket veya marka adı (opsiyonel)</li>
          <li>Mesaj içeriği</li>
        </ul>

        <h3>Otomatik Olarak Toplanan Bilgiler</h3>
        <p>
          Sitemizi ziyaret ettiğinizde teknik altyapı ve analitik araçlar aracılığıyla
          otomatik olarak derlenen bilgilerdir:
        </p>
        <ul>
          <li>IP adresi (anonimleştirilmiş)</li>
          <li>Tarayıcı türü, dili ve sürümü</li>
          <li>İşletim sistemi ve cihaz türü</li>
          <li>Ziyaret edilen sayfalar ve gezinme sırası</li>
          <li>Siteye ilk erişim kaynağı (arama motoru, sosyal medya vb.)</li>
          <li>Oturum süresi ve etkileşim verileri</li>
        </ul>
      </>
    ),
  },
  {
    id: 'cerezler',
    title: 'Çerezler ve İzleme Teknolojileri',
    content: (
      <>
        <p>
          Web sitemiz, deneyiminizi iyileştirmek ve site performansını ölçmek amacıyla
          çerezler kullanmaktadır. Çerezleri tarayıcı ayarlarınızdan yönetebilirsiniz;
          ancak bazı çerezlerin devre dışı bırakılması site işlevselliğini etkileyebilir.
        </p>

        <h3>Zorunlu Çerezler</h3>
        <p>
          Sitenin temel işlevselliği için gerekli olan ve çerez tercihlerinizi saklayan
          çerezlerdir. Bu çerezler devre dışı bırakılamaz.
        </p>

        <h3>Analitik Çerezler</h3>
        <p>
          Google Analytics aracılığıyla site trafiğini ve kullanıcı davranışlarını
          ölçmek için kullanılır. Tüm IP adresleri anonimleştirilmekte; bireysel
          kimliğiniz tespit edilmemektedir.
        </p>

        <h3>Pazarlama Çerezleri</h3>
        <p>
          Google Ads ve yeniden hedefleme kampanyaları için kullanılabilir. Bu çerezleri
          reddedebilir veya{' '}
          <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
            Google Reklam Ayarları
          </a>{' '}
          üzerinden yönetebilirsiniz.
        </p>

        <h3>Çerez Tercihlerinizi Yönetme</h3>
        <ul>
          <li>Sitemizi ilk ziyaretinizde çıkan tercih panelini kullanabilirsiniz</li>
          <li>Tarayıcınızın ayarlar menüsünden çerezleri silebilir veya engelleyebilirsiniz</li>
          <li>
            <a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">
              Your Online Choices
            </a>{' '}
            aracını kullanabilirsiniz
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'veri-kullanimi',
    title: 'Verilerin Kullanımı',
    content: (
      <>
        <p>Topladığımız bilgileri aşağıdaki amaçlarla kullanmaktayız:</p>
        <ul>
          <li>
            <strong>Hizmet sunumu:</strong> Hizmet taleplerinizi değerlendirmek ve size
            uygun teklif hazırlamak için
          </li>
          <li>
            <strong>İletişim:</strong> Sorularınızı yanıtlamak, randevu planlamak ve
            proje güncellemeleri iletmek için
          </li>
          <li>
            <strong>Bülten:</strong> Dijital pazarlama trendleri, ipuçları ve özel teklifleri
            paylaşmak için (yalnızca onayınız alındıktan sonra; her e-postada abonelikten
            çıkma bağlantısı yer alır)
          </li>
          <li>
            <strong>Site geliştirme:</strong> Hangi içeriklerin faydalı olduğunu anlamak
            ve kullanıcı deneyimini iyileştirmek için
          </li>
          <li>
            <strong>Güvenlik:</strong> Spam, dolandırıcılık ve yetkisiz erişim girişimlerini
            tespit etmek için
          </li>
          <li>
            <strong>Yasal uyumluluk:</strong> İlgili mevzuat kapsamındaki yükümlülükleri
            yerine getirmek için
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'ucuncu-taraflar',
    title: 'Üçüncü Taraf Hizmetler',
    content: (
      <>
        <p>
          Aşağıdaki üçüncü taraf hizmetlerden yararlanmaktayız. Bu hizmetler kendi
          gizlilik politikaları kapsamında veri işleyebilir:
        </p>
        <ul>
          <li>
            <strong>Google Analytics:</strong> Web sitesi trafiğini ve kullanıcı
            davranışlarını analiz etmek için. IP anonimleştirme etkindir.{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google Gizlilik Politikası
            </a>
          </li>
          <li>
            <strong>Google Ads:</strong> Reklam kampanyası performansını ölçmek ve
            yeniden hedefleme yapmak için.
          </li>
          <li>
            <strong>E-posta altyapısı:</strong> Form yanıtları ve bülten dağıtımı için
            kullanılan SMTP servisi; gönderilen e-postalar şifreli olarak iletilmektedir.
          </li>
        </ul>
        <p>
          Sitemizde yer alan üçüncü taraf bağlantılarına (sosyal medya, harici siteler)
          tıkladığınızda, bu sitelerin kendi gizlilik politikaları geçerlidir. Bu siteler
          üzerinde herhangi bir kontrolümüz bulunmamaktadır.
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
          Kişisel verilerinizi korumak için endüstri standardı güvenlik önlemleri
          uygulamaktayız:
        </p>
        <ul>
          <li>
            <strong>HTTPS/SSL:</strong> Sitemiz ve formlarımız TLS şifreleme ile korunmaktadır.
            Tarayıcınızın adres çubuğundaki kilit simgesi bunu doğrular.
          </li>
          <li>
            <strong>Erişim kontrolü:</strong> Kişisel verilere yalnızca yetkili personel,
            güçlü kimlik doğrulamasıyla erişebilmektedir.
          </li>
          <li>
            <strong>Güncellemeler:</strong> Sunucu yazılımları ve bağımlılıkları düzenli
            olarak güncellenmektedir.
          </li>
          <li>
            <strong>Veri minimizasyonu:</strong> Yalnızca hizmetin sunulması için gerekli
            olan veriler toplanmaktadır.
          </li>
        </ul>
        <p>
          Güvenlik ihlali şüphesi durumunda lütfen{' '}
          <a href="mailto:info@woojidigital.com">info@woojidigital.com</a> adresine
          bildirin. Bildirimler en kısa sürede değerlendirilecektir.
        </p>
      </>
    ),
  },
  {
    id: 'cocuklar',
    title: 'Çocukların Gizliliği',
    content: (
      <>
        <p>
          Hizmetlerimiz 18 yaş altı bireylere yönelik değildir. Web sitemiz aracılığıyla
          bilerek 18 yaş altı kişilerin kişisel verilerini toplamıyoruz.
        </p>
        <p>
          18 yaş altı bir kişinin bize kişisel veri gönderdiğini fark ederseniz,
          lütfen <a href="mailto:info@woojidigital.com">info@woojidigital.com</a>{' '}
          adresine bildirin; ilgili verileri derhal sileceğiz.
        </p>
      </>
    ),
  },
  {
    id: 'degisiklikler',
    title: 'Politika Değişiklikleri',
    content: (
      <>
        <p>
          Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler
          yapıldığında sayfanın üst kısmındaki "Son güncelleme" tarihi güncellenecektir.
        </p>
        <p>
          Politikamızı periyodik olarak gözden geçirmenizi öneririz. Politikada yapılan
          değişiklikler, bu sayfada yayımlandıktan sonra geçerli sayılır. Sitemizi
          kullanmaya devam etmeniz, güncellenmiş politikayı kabul ettiğiniz anlamına gelir.
        </p>
      </>
    ),
  },
  {
    id: 'iletisim',
    title: 'İletişim',
    content: (
      <>
        <p>
          Bu Gizlilik Politikası hakkında sorularınız, talepleriniz veya endişeleriniz
          varsa bizimle iletişime geçebilirsiniz:
        </p>
        <ul>
          <li>
            <strong>E-posta:</strong>{' '}
            <a href="mailto:info@woojidigital.com">info@woojidigital.com</a>
          </li>
          <li>
            <strong>Konu satırı:</strong> "Gizlilik" olarak belirtmenizi rica ederiz
          </li>
          <li>
            <strong>KVKK hakları için:</strong>{' '}
            <a href="/kvkk">KVKK Aydınlatma Metnimizi</a> inceleyiniz
          </li>
        </ul>
        <p>
          Talepleriniz 30 gün içinde yanıtlanacaktır. Kişisel Verileri Koruma Kurumu'na
          şikâyette bulunma hakkınız her zaman saklıdır.
        </p>
      </>
    ),
  },
]

export default function GizlilikPolitikasiPage() {
  return (
    <LegalLayout
      tag="Gizlilik"
      title="Gizlilik"
      highlight="Politikası"
      desc="Sitemizde hangi verilerin toplandığını, çerezlerin nasıl kullanıldığını ve kişisel bilgilerinizin nasıl korunduğunu şeffaf bir şekilde açıklıyoruz."
      lastUpdated="10 Haziran 2026"
      sections={sections}
    />
  )
}
