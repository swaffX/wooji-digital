'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './AboutStats.module.css'

const stats = [
  {
    value: 50,
    suffix: '+',
    label: 'marka büyüttük',
    accent: 'purple',
  },
  {
    value: 240,
    suffix: '%',
    label: 'ortalama trafik artışı',
    accent: 'cyan',
  },
  {
    value: 3,
    suffix: 'x',
    label: 'dönüşüm iyileşmesi',
    accent: 'purple',
  },
  {
    value: 98,
    suffix: '%',
    label: 'müşteri memnuniyeti',
    accent: 'cyan',
  },
] as const

function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    let start: number | null = null
    const tick = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(ease * target))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target, duration, started])
  return count
}

function Stat({
  value, suffix, label, accent, started, index,
}: { value: number; suffix: string; label: string; accent: string; started: boolean; index: number }) {
  const count = useCountUp(value, 1000 + index * 150, started)
  return (
    <div className={`${styles.stat} ${styles[`accent_${accent}`]}`}>
      <div className={styles.bar} />
      <div className={styles.number}>
        {count}<span className={styles.suffix}>{suffix}</span>
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  )
}

export default function AboutStats() {
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect() } },
      { threshold: 0.35 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={styles.grid}>
      {stats.map((s, i) => (
        <Stat key={s.label} {...s} started={started} index={i} />
      ))}
    </div>
  )
}
