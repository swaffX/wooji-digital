'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './Process.module.css'

const steps = [
  {
    num: '01',
    title: 'Analiz',
    desc: 'Marka, rakip ve hedef kitle analizi yaparak mevcut durumu ve büyüme fırsatlarını net biçimde ortaya koyarız.',
  },
  {
    num: '02',
    title: 'Strateji',
    desc: 'Veriye dayalı, ölçülebilir hedefler içeren özel bir dijital büyüme planı ve yol haritası oluştururuz.',
  },
  {
    num: '03',
    title: 'Uygulama',
    desc: 'Kampanya yönetimi, içerik üretimi ve tasarım süreçlerini en yüksek kalitede hayata geçiririz.',
  },
  {
    num: '04',
    title: 'Raporlama',
    desc: 'Düzenli performans raporları ve sürekli optimizasyon çalışmalarıyla kalıcı iyileşme sağlarız.',
  },
]

export default function Process() {
  const stepsRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = stepsRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="surec" className={styles.section} aria-labelledby="surec-h">
      <div className="wrap">
        <div className="centered">
          <div className="s-tag reveal">Çalışma Modelimiz</div>
          <h2 className="s-title reveal d1" id="surec-h">
            Süreç Nasıl <span className="gt">İşliyor?</span>
          </h2>
          <p className="s-sub reveal d2">
            Şeffaf, verimli ve sonuç odaklı 4 adımlı metodolojimizle markanızı büyütüyoruz.
          </p>
        </div>

        <div
          ref={stepsRef}
          className={`${styles.steps}${visible ? ` ${styles.stepsVisible}` : ''}`}
          role="list"
        >
          <div className={styles.connector} aria-hidden="true">
            <div className={styles.connectorLine} />
          </div>
          {steps.map((s, i) => (
            <div key={s.num} className={`${styles.step} reveal${i > 0 ? ` d${i}` : ''}`} role="listitem">
              <div className={styles.stepNumWrap}>
                <div className={styles.stepNum}>{s.num}</div>
                <div className={styles.stepRing} aria-hidden="true" />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
