# Güvenlik Notları — Wooji Digital

Bu dosya, çok-ajanlı güvenlik denetimi sonucu doğrulanan bulguları ve alınan/alınması
gereken önlemleri belgeler. Saldırı yüzeyi: kimlik doğrulama/veritabanı olmayan statik
pazarlama sitesi + Resend üzerinden e-posta gönderen iki uç (`/api/contact`,
`/api/newsletter`). Gerçek risk: kötüye kullanım (abuse), maliyet/kota tüketimi ve
dağıtım altyapısının yetki ayrımı.

Dağıtım zinciri: **Client → Cloudflare → Caddy → Node (127.0.0.1:3000)**, pm2 ile VDS.

---

## 1. Kod tarafında alınan önlemler (uygulandı ✅)

### Rate-limit bypass kapatıldı — `frontend/lib/rateLimit.ts`
- `getClientIp` yalnızca `CF-Connecting-IP`'ye güvenir. Spoofe edilebilir
  `X-Forwarded-For` kaldırıldı (eski kod en soldaki istemci-kontrollü değeri
  okuyordu → limit tamamen atlatılabiliyordu).
- CF başlığı yoksa istek tek paylaşılan `'untrusted'` kovasına düşer (serbest geçiş yok).
- `MAX_ENTRIES = 10_000` tavanı + erişimde-purge → sahte-IP seli ile bellek şişmesi engellendi.

> ⚠️ Bu kod düzeltmesi **tek başına yeterli değildir.** Aşağıdaki Madde 2 (origin'i
> Cloudflare'e kilitleme) yapılmazsa, saldırgan VDS'e doğrudan bağlanıp sahte
> `CF-Connecting-IP` başlığı enjekte ederek korumayı yine atlatabilir.

### Newsletter HTML escape tutarlılığı — `frontend/app/api/newsletter/route.ts`
- E-posta HTML'e gömülmeden önce `esc()` ile escape edilir (contact route ile aynı).
  Defense-in-depth: bugün zod email regex'i metakarakterleri zaten reddediyor.

---

## 2. Origin'i Cloudflare'e kilitle (KRİTİK — sunucuda yapılmalı)

Madde 1'deki `CF-Connecting-IP` güveninin geçerli olması için, VDS'e **yalnızca
Cloudflare üzerinden** ulaşılabildiğinden emin olun. Aksi halde saldırgan origin IP'sine
doğrudan bağlanıp başlığı taklit edebilir.

### Seçenek A — ufw (önerilen, en net)
```bash
# Güncel Cloudflare aralıkları: https://www.cloudflare.com/ips/
ufw default deny incoming
ufw allow OpenSSH
for ip in $(curl -s https://www.cloudflare.com/ips-v4); do
  ufw allow from $ip to any port 443 proto tcp
  ufw allow from $ip to any port 80  proto tcp
done
for ip in $(curl -s https://www.cloudflare.com/ips-v6); do
  ufw allow from $ip to any port 443 proto tcp
  ufw allow from $ip to any port 80  proto tcp
done
ufw enable
```

### Seçenek B — Caddy seviyesinde
```caddy
woojidigital.com {
    # Cloudflare dışı kaynak IP'leri reddet
    @notCloudflare not remote_ip <cloudflare-v4-ve-v6-araliklari>
    respond @notCloudflare 403

    reverse_proxy 127.0.0.1:3000
}
```
> Caddy, `CF-Connecting-IP` başlığını upstream'e olduğu gibi iletir. Aralıkları
> https://www.cloudflare.com/ips/ adresinden alın; düzenli güncelleyin.

Ek olarak Cloudflare panelinde **"Authenticated Origin Pulls"** (mTLS) açılırsa,
origin yalnızca Cloudflare'in istemci sertifikasını sunan isteklere yanıt verir.

---

## 3. Yetki ayrımı — root yerine yetkisiz kullanıcı (DÜŞÜK önem, kalıcı sertleştirme)

`deploy.sh` ve pm2/Next süreci şu an `/root` altında root olarak çalışıyor. Herhangi bir
RCE/tedarik-zinciri olayı doğrudan root ele geçirilmesine dönüşür.

```bash
# Tek seferlik kurulum
adduser --system --group wooji
mkdir -p /srv/wooji && chown -R wooji:wooji /srv/wooji
# repoyu /srv/wooji altına taşı, deploy.sh içindeki /root/wooji-digital yolunu güncelle
```

systemd unit (pm2 yerine tercih edilirse):
```ini
# /etc/systemd/system/wooji.service
[Service]
User=wooji
WorkingDirectory=/srv/wooji/frontend
Environment=NODE_OPTIONS=--max-old-space-size=1024
ExecStart=/usr/bin/node node_modules/next/dist/bin/next start
Restart=always
```

SSH deploy hesabını da root'tan çıkarın; mümkünse şifre yerine anahtar tabanlı kimlik
doğrulamaya geçin ve hesabı yalnızca deploy yetkisine kısıtlayın.

---

## 4. Tedarik zinciri — tekrarlanabilir kurulum (DÜŞÜK)

`deploy.sh` içinde `npm install --production=false` yerine:
```bash
npm ci          # committe edilmiş lockfile'dan birebir, tekrarlanabilir
```
İdeal olan `npm ci --ignore-scripts` (lifecycle script'lerini kapatır) — **ancak önce
VDS'te doğrulayın:** `sharp` (next/image optimizasyonu) postinstall'a ihtiyaç duyabilir,
build'i kırabilir. Kırarsa `sharp`'ı açıkça allowlist'leyin veya `--ignore-scripts`
olmadan `npm ci` kullanın.

---

## Elenen bulgular (dendf edildi — bu statik sitede sömürülemez)

Adversarial doğrulamada 24 ham bulgudan 22'si elendi; özetle:
- **Blog `formatInline` XSS** — içerik %100 derleme-zamanı statik (`app/blog/data.ts`),
  slug allowlist; saldırgan-kontrollü veri sink'e ulaşmıyor.
- **CSP `unsafe-inline`/`unsafe-eval`** — ulaşılabilir injection sink olmadığı için
  blast-radius nicesi; `unsafe-inline` ayrıca inline scriptler + Next hydration için
  load-bearing.
- **CSRF / Origin kontrolü yok** — oturum/cookie/ambient authority yok; cross-site POST
  doğrudan curl ile aynı.
- **Email header injection** — Resend JSON API (CRLF değil); `from`/`to` sunucu kontrollü.
- **postcss CVE (GHSA-qx2v-qp2m-jg93)** — yalnızca build-time, runtime'da çalışmaz.
- **`req.json()` body-limit/timeout** — rate-limit arkasında + Caddy/CF body cap.
- **Eksik COOP/CORP/frame-ancestors** — X-Frame-Options + `rel=noopener` zaten kapsıyor.
- **SSH password & action tag-pin** — harici öncül (secret/upstream compromise) gerektirir.
