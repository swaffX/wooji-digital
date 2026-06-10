'use client'
import React, { useEffect } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import { useRouter } from 'next/navigation'
import styles from './ShinyButton.module.css'

interface ShinyButtonProps {
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: () => void
}

export function ShinyButton({ children, className, href, onClick }: ShinyButtonProps) {
  const x = useMotionValue('100%')
  const router = useRouter()

  useEffect(() => {
    const controls = animate(x, '-100%', {
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 1,
      type: 'spring',
      stiffness: 20,
      damping: 15,
      mass: 2,
    })
    return controls.stop
  }, [x])

  const handleClick = () => {
    onClick?.()
    if (!href) return
    if (href.startsWith('#')) {
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push(href)
    }
  }

  return (
    <motion.button
      style={{ '--x': x } as React.CSSProperties}
      className={`${styles.button}${className ? ` ${className}` : ''}`}
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      onClick={handleClick}
    >
      <span className={styles.text}>{children}</span>
      <span className={styles.border} aria-hidden="true" />
    </motion.button>
  )
}
