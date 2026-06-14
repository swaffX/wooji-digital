'use client'
import { useRef, useState, useCallback } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from 'framer-motion'
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

const SPRING = { stiffness: 320, damping: 30, mass: 0.6 }

export default function AboutCard3D({ pillars, introText, tag }: Props) {
  const reduce = useReducedMotion()
  const cardRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const [glareOn, setGlareOn] = useState(false)

  const tiltX = useMotionValue(0)
  const tiltY = useMotionValue(0)
  const glareX = useMotionValue(30)
  const glareY = useMotionValue(30)

  const rotX = useSpring(tiltX, SPRING)
  const rotY = useSpring(tiltY, SPRING)

  const cardTransform = useMotionTemplate`perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg)`
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.18) 0%, transparent 55%)`

  const orb1X = useTransform(rotY, (v) => v * 3)
  const orb1Y = useTransform(rotX, (v) => -v * 3)
  const orb2X = useTransform(rotY, (v) => -v * 4)
  const orb2Y = useTransform(rotX, (v) => v * 4)

  const pillarX = useTransform(rotY, (v) => v * 0.5)
  const pillarY = useTransform(rotX, (v) => -v * 0.5)

  const shadowX = useTransform(rotY, (v) => v * 4)
  const shadowY = useTransform(rotX, (v) => v * 2)

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return
    if (!cardRef.current) return
    const r = cardRef.current.getBoundingClientRect()
    const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2)
    const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2)
    tiltX.set(-dy * 11)
    tiltY.set(dx * 11)
    glareX.set(((e.clientX - r.left) / r.width) * 100)
    glareY.set(((e.clientY - r.top) / r.height) * 100)
    setActive(true)
    setGlareOn(true)
  }, [reduce, tiltX, tiltY, glareX, glareY])

  const onLeave = useCallback(() => {
    tiltX.set(0)
    tiltY.set(0)
    setActive(false)
    setGlareOn(false)
  }, [tiltX, tiltY])

  return (
    <div className={`${styles.scene}${active ? ` ${styles.sceneActive}` : ''}`}>
      <motion.div
        ref={cardRef}
        className={styles.card}
        style={reduce ? undefined : { transform: cardTransform }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {/* specular glare */}
        <motion.div
          className={styles.glare}
          style={{
            background: glareBg,
            opacity: glareOn ? 1 : 0,
            transition: glareOn ? 'opacity 80ms' : 'opacity 400ms',
          }}
        />

        {/* ambient orbs */}
        <motion.div
          className={styles.orb1}
          style={reduce ? undefined : { x: orb1X, y: orb1Y }}
        />
        <motion.div
          className={styles.orb2}
          style={reduce ? undefined : { x: orb2X, y: orb2Y }}
        />

        {/* content */}
        <div className={styles.content}>
          <div className="s-tag">{tag}</div>
          <p className={styles.intro}>{introText}</p>

          <div className={styles.grid}>
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                className={styles.pillar}
                style={
                  reduce
                    ? undefined
                    : { z: 10 + i * 6, x: pillarX, y: pillarY }
                }
              >
                <span className={styles.num}>{p.num}</span>
                <div className={styles.iconWrap}>{p.icon}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* dynamic shadow */}
      <motion.div
        className={styles.shadow}
        style={{
          ...(reduce ? {} : { x: shadowX, y: shadowY }),
          opacity: active ? 0.55 : 0.38,
          transition: active ? 'opacity 60ms' : 'opacity 400ms',
        }}
      />
    </div>
  )
}

export { type Pillar }
