'use client'
import { useEffect, useRef, useState } from 'react'

interface AnimatedStatProps {
  value: string
  label: string
  className?: string
  valClassName?: string
  labelClassName?: string
  style?: React.CSSProperties
  color?: string
}

function parseNum(v: string): { prefix: string; num: number; suffix: string } {
  const m = v.match(/^([^0-9]*)(\d+(?:[.,]\d+)?)(.*)$/)
  if (!m) return { prefix: '', num: NaN, suffix: v }
  return { prefix: m[1], num: parseFloat(m[2].replace(',', '.')), suffix: m[3] }
}

export default function AnimatedStat({
  value,
  label,
  className,
  valClassName,
  labelClassName,
  style,
  color,
}: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState(value)
  const [fired, setFired] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || fired) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        obs.disconnect()
        setFired(true)
        const { prefix, num, suffix } = parseNum(value)
        if (isNaN(num)) return
        const isDecimal = !Number.isInteger(num)
        const dur = 1300
        const t0 = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - t0) / dur, 1)
          const ease = 1 - Math.pow(1 - t, 3)
          const cur = isDecimal
            ? (ease * num).toFixed(1)
            : Math.round(ease * num)
          setDisplay(`${prefix}${cur}${suffix}`)
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [value, fired])

  return (
    <div ref={ref} className={className} style={style}>
      <span className={valClassName} style={color ? { color } : undefined}>
        {display}
      </span>
      <span className={labelClassName}>{label}</span>
    </div>
  )
}
