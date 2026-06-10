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
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 200, damping: 5, mass: 0.5 }}
      onClick={handleClick}
    >
      <span className={styles.text}>{children}</span>
      <span className={styles.border} aria-hidden="true" />
    </motion.button>
  )
}
