'use client'
import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './AiChat.module.css'

interface Message {
  id: number
  role: 'user' | 'ai'
  text: string
}

const CHIPS = ['Hizmetler', 'Fiyatlar', 'İletişim', 'Hakkımızda']

function getResponse(raw: string): string {
  const t = raw.toLowerCase().trim()

  if (/^(merhaba|selam|hey|hi|iyi (günler|sabahlar|akşamlar)|nasılsın|naber)/.test(t))
    return 'Merhaba! Wooji Digital AI asistanıyım. Hizmetlerimiz, fiyatlar veya iletişim hakkında sorularınızı yanıtlayabilirim. Nasıl yardımcı olabilirim?'

  if (/seo|organik|arama motor|sıralama|google sıra|anahtar kelime/.test(t))
    return 'SEO & Organik Büyüme hizmetimizde; teknik SEO denetimi, anahtar kelime stratejisi, sayfa içi optimizasyon ve bağlantı inşası uyguluyoruz.\n\nMüşterilerimizin ortalama organik trafiği 6 ayda %340 arttı.'

  if (/reklam|google ads|meta ads|facebook|instagram reklam|tiktok reklam|ücretli|ppc|sem/.test(t))
    return 'Dijital Reklam Yönetimi hizmetimizle Google Ads, Meta Ads ve TikTok reklamlarını yönetiyoruz. Hedef kitle analizi, reklam metni ve sürekli optimizasyon dahil.\n\nOrtalama ROAS değerimiz 3.8x.'

  if (/web (site|tasarım|geliştirme|kodlama)|landing page|e-ticaret|site yap/.test(t))
    return 'Web Tasarım & Geliştirme hizmetimizle kurumsal web siteleri, landing page\'ler ve e-ticaret projeleri yapıyoruz. Modern teknoloji stack (Next.js, React) kullanıyoruz.\n\nİlk taslak teslimi 48 saat içinde.'

  if (/sosyal medya|instagram|tiktok|twitter|linkedin|içerik paylaş|post|reels/.test(t))
    return 'Sosyal Medya Yönetimi hizmetimizle haftalık içerik takvimi, görsel tasarım, reels & story üretimi ve topluluk yönetimi sağlıyoruz. Tüm platformları kapsıyoruz.'

  if (/içerik|blog|makale|metin|copy|yazı üret|seo yaz/.test(t))
    return 'İçerik Pazarlaması hizmetimizle SEO uyumlu blog yazıları, ürün açıklamaları, e-posta bültenleri ve marka tonu geliştirme sunuyoruz.'

  if (/analitik|rapor|veri|performans|strateji|ölçüm|dashboard/.test(t))
    return 'Analitik & Strateji hizmetimizde Google Analytics 4, Search Console entegrasyonu ve özel raporlama dashboard\'ları kuruyoruz. Her ay detaylı performans raporu teslim ediyoruz.'

  if (/hizmet|ne yapıyor|neler|sunuyor|paket|hangi/.test(t))
    return 'Wooji Digital 6 ana hizmet sunar:\n\n· SEO & Organik Büyüme\n· Dijital Reklam Yönetimi\n· Web Tasarım & Geliştirme\n· Sosyal Medya Yönetimi\n· İçerik Pazarlaması\n· Analitik & Strateji\n\nHangi hizmet hakkında detay almak istersiniz?'

  if (/fiyat|ücret|ne kadar|maliyet|bütçe|kaça/.test(t))
    return 'Fiyatlandırmamız proje kapsamı ve hizmet kombinasyonuna göre belirleniyor. Her müşteri için özel teklif hazırlıyoruz.\n\nÜcretsiz danışmanlık görüşmesi için iletişim formunu doldurun veya WhatsApp\'tan yazın — 2 saat içinde yanıt veriyoruz.'

  if (/iletişim|ulaş|mail|e-posta|whatsapp|telefon|nasıl ulaş/.test(t))
    return 'Bize ulaşmak için:\n\n· E-posta: info@woojidigital.com\n· Sayfadaki iletişim formu\n· Aşağıdaki WhatsApp butonu\n\nOrtalama yanıt süremiz 2 saattir.'

  if (/hakkında|kimsiniz|wooji|biz kimiz|kurucu|ekip|ne zaman kur/.test(t))
    return 'Wooji Digital, 2023\'te kurulan büyüme odaklı bir dijital pazarlama ajansıdır. 5+ yıllık sektör tecrübesiyle 50\'den fazla markaya hizmet verdik.\n\nVeriye dayalı yaklaşım ve ölçülebilir sonuçlar temel prensibimiz.'

  if (/nerede|konum|adres|ofis|istanbul|şehir|uzak/.test(t))
    return 'Türkiye genelinde uzaktan çalışıyoruz. Fiziksel ofis koşulu olmaksızın tüm şehirlerdeki markalara hizmet veriyoruz.'

  if (/süre|ne kadar sürer|ne zaman|zaman|teslim/.test(t))
    return 'Proje başlangıcı anlaşma sonrası 3-5 iş günüdür.\n\n· Web tasarım ilk taslak: 48 saat\n· SEO sonuçları: 3. aydan itibaren\n· Reklam aktivasyon: 1-2 gün'

  if (/teşekkür|sağol|eyw|süper|harika|güzel/.test(t))
    return 'Rica ederim! Başka sorunuz olursa buradayım. Detaylı bilgi için WhatsApp\'tan da ulaşabilirsiniz.'

  return 'Sorunuzu daha iyi anlayabilmek için birkaç kelime daha ekleyebilir misiniz? Hizmetler, fiyatlar veya iletişim hakkında da doğrudan soru sorabilirsiniz.'
}

let _id = 10

export default function AiChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: _id++,
      role: 'ai',
      text: 'Merhaba! Ben Wooji Digital AI asistanıyım.\n\nHizmetlerimiz, fiyatlar veya iletişim hakkında soru sorabilirsiniz.',
    },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [chipsGone, setChipsGone] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing, open])

  const send = useCallback(
    (text: string) => {
      const trimmed = text.trim()
      if (!trimmed || typing) return
      setChipsGone(true)
      setInput('')
      setMessages(prev => [...prev, { id: _id++, role: 'user', text: trimmed }])
      setTyping(true)
      setTimeout(
        () => {
          setMessages(prev => [...prev, { id: _id++, role: 'ai', text: getResponse(trimmed) }])
          setTyping(false)
        },
        800 + Math.random() * 600,
      )
    },
    [typing],
  )

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      send(input)
    },
    [input, send],
  )

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          >
            <div className={styles.header}>
              <div className={styles.hIcon} aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.636 5.636l2.122 2.122M16.243 16.243l2.121 2.121M5.636 18.364l2.122-2.122M16.243 7.757l2.121-2.121"/>
                </svg>
              </div>
              <div className={styles.hMeta}>
                <span className={styles.hTitle}>Canlı Destek</span>
                <span className={styles.hSub}>
                  <span className={styles.liveDot} aria-hidden="true" />
                  Çevrimiçi · Wooji Digital
                </span>
              </div>
              <button className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="Kapat">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <div className={styles.body}>
              {messages.map(msg => (
                <motion.div
                  key={msg.id}
                  className={`${styles.row} ${msg.role === 'user' ? styles.rowUser : styles.rowAi}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22 }}
                >
                  {msg.role === 'ai' && (
                    <div className={styles.aiDot} aria-hidden="true">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.636 5.636l2.122 2.122M16.243 16.243l2.121 2.121M5.636 18.364l2.122-2.122M16.243 7.757l2.121-2.121"/>
                      </svg>
                    </div>
                  )}
                  <div className={styles.bubble} style={{ whiteSpace: 'pre-line' }}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {typing && (
                <motion.div
                  className={`${styles.row} ${styles.rowAi}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className={styles.aiDot} aria-hidden="true">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.636 5.636l2.122 2.122M16.243 16.243l2.121 2.121M5.636 18.364l2.122-2.122M16.243 7.757l2.121-2.121"/>
                    </svg>
                  </div>
                  <div className={`${styles.bubble} ${styles.typingBubble}`}>
                    <span /><span /><span />
                  </div>
                </motion.div>
              )}

              {!chipsGone && (
                <motion.div
                  className={styles.chips}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  {CHIPS.map(c => (
                    <button key={c} className={styles.chip} onClick={() => send(c)}>
                      {c}
                    </button>
                  ))}
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            <div className={styles.footer}>
              <form className={styles.inputRow} onSubmit={onSubmit}>
                <input
                  className={styles.input}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Mesajınızı yazın..."
                  aria-label="Mesaj"
                  autoComplete="off"
                  disabled={typing}
                />
                <button
                  className={styles.sendBtn}
                  type="submit"
                  disabled={!input.trim() || typing}
                  aria-label="Gönder"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={styles.trigger}
        onClick={() => setOpen(v => !v)}
        aria-label={open ? 'Canlı Destekı kapat' : 'Canlı Destekı aç'}
        aria-expanded={open}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        <span className={styles.triggerPulse} aria-hidden="true" />
        <span className={styles.triggerDot} aria-hidden="true" />
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              style={{ display: 'flex' }}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              style={{ display: 'flex' }}
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </motion.span>
          )}
        </AnimatePresence>
        <span className={styles.triggerLabel}>{open ? 'Kapat' : 'Canlı Destek'}</span>
      </motion.button>
    </>
  )
}
