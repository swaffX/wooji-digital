'use client'
import { useEffect, useRef } from 'react'
import FadeUp from './FadeUp'
import styles from './Stats.module.css'

const stats = [
  {
    target: 150, suffix: '+', label: 'Tamamlanan Proje',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
  {
    target: 98, suffix: '%', label: 'Müşteri Memnuniyeti',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    target: 5, suffix: '+', label: 'Yıllık Deneyim',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    target: 50, suffix: '+', label: 'Aktif Müşteri',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
]

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const nums = sectionRef.current?.querySelectorAll<HTMLElement>('[data-target]')
    if (!nums) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        const el = e.target as HTMLElement
        if (el.dataset.done) return
        el.dataset.done = '1'
        const target = Number(el.dataset.target)
        const suffix = el.dataset.suffix ?? ''
        const dur = 1800
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - start) / dur, 1)
          const ease = 1 - Math.pow(1 - t, 3)
          el.textContent = Math.floor(ease * target) + suffix
          if (t < 1) requestAnimationFrame(tick)
          else el.textContent = target + suffix
        }
        requestAnimationFrame(tick)
        obs.unobserve(el)
      })
    }, { threshold: 0.5 })
    nums.forEach((n) => obs.observe(n))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="stats" className={styles.section} ref={sectionRef} aria-label="Başarı istatistiklerimiz">
      <div className={styles.wrap}>
        {stats.map((s, i) => (
          <FadeUp key={s.label} delay={i * 0.1} className={styles.stat}>
            <div className={styles.statIcon}>{s.icon}</div>
            <div className={styles.num} data-target={s.target} data-suffix={s.suffix}>
              0{s.suffix}
            </div>
            <div className={styles.label}>{s.label}</div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
