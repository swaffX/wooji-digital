'use client'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
  tag?: 'div' | 'article' | 'section' | 'li' | 'header'
}

export default function FadeUp({ children, delay = 0, className, tag = 'div' }: Props) {
  const MotionTag = motion[tag] as typeof motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </MotionTag>
  )
}
