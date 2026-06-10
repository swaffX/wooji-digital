'use client'
import { useRef, useState, useCallback } from 'react'
import styles from './AboutCard3D.module.css'

interface Pillar {
  num: string
  icon: React.ReactNode
  title: string
  desc: string
}

interface Props {
  pillars: Pillar[]
  introText: string
  tag: string
}

const IDLE_TILT = { x: 0, y: 0 }

export default function AboutCard3D({ pillars, introText, tag }: Props) {
  const cardRef  = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number | undefined>(undefined)
  const [tilt, setTilt]     = useState(IDLE_TILT)
  const [glare, setGlare]   = useState({ x: 30, y: 30, active: false })
  const [active, setActive] = useState(false)

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    if (frameRef.current) cancelAnimationFrame(frameRef.current)
    frameRef.current = requestAnimationFrame(() => {
      const r  = cardRef.current!.getBoundingClientRect()
      const dx = (e.clientX - r.left - r.width  / 2) / (r.width  / 2)
      const dy = (e.clientY - r.top  - r.height / 2) / (r.height / 2)
      setActive(true)
      setTilt({ x: -dy * 11, y: dx * 11 })
      setGlare({
        x: ((e.clientX - r.left) / r.width)  * 100,
        y: ((e.clientY - r.top)  / r.height) * 100,
        active: true,
      })
    })
  }, [])

  const onLeave = useCallback(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current)
    setActive(false)
    setTilt(IDLE_TILT)
    setGlare((g) => ({ ...g, active: false }))
  }, [])

  return (
    <div className={`${styles.scene}${active ? ` ${styles.sceneActive}` : ''}`}>
      <div
        ref={cardRef}
        className={styles.card}
        style={{
          transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: active
            ? 'transform 60ms linear'
            : 'transform 700ms cubic-bezier(0.23, 1, 0.32, 1)',
        }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {/* specular glare */}
        <div
          className={styles.glare}
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.18) 0%, transparent 55%)`,
            opacity: glare.active ? 1 : 0,
            transition: glare.active ? 'opacity 80ms' : 'opacity 400ms',
          }}
        />

        {/* ambient orbs */}
        <div
          className={styles.orb1}
          style={{ transform: `translate(${tilt.y * 3}px, ${-tilt.x * 3}px)` }}
        />
        <div
          className={styles.orb2}
          style={{ transform: `translate(${-tilt.y * 4}px, ${tilt.x * 4}px)` }}
        />

        {/* content */}
        <div className={styles.content}>
          <div className="s-tag">{tag}</div>
          <p className={styles.intro}>{introText}</p>

          <div className={styles.grid}>
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={styles.pillar}
                style={{
                  transform: `translateZ(${10 + i * 6}px) translate(${tilt.y * 0.5}px, ${-tilt.x * 0.5}px)`,
                  transition: active
                    ? 'transform 60ms linear'
                    : 'transform 700ms cubic-bezier(0.23, 1, 0.32, 1)',
                }}
              >
                <span className={styles.num}>{p.num}</span>
                <div className={styles.iconWrap}>{p.icon}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* dynamic shadow */}
      <div
        className={styles.shadow}
        style={{
          transform: `translateX(${tilt.y * 4}px) translateY(${tilt.x * 2}px)`,
          opacity: active ? 0.55 : 0.38,
          transition: active
            ? 'transform 60ms linear, opacity 60ms'
            : 'transform 700ms cubic-bezier(0.23,1,0.32,1), opacity 400ms',
        }}
      />
    </div>
  )
}

export { type Pillar }
