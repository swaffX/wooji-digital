'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getLenisInstance } from '@/lib/lenis'
import styles from './ScrollToTop.module.css'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const visibleRef = useRef(false)

  useEffect(() => {
    const tryAttach = () => {
      const lenis = getLenisInstance()
      if (!lenis) return setTimeout(tryAttach, 50)
      const onScroll = ({ scroll }: { scroll: number }) => {
        const next = scroll > 420
        if (next !== visibleRef.current) { visibleRef.current = next; setVisible(next) }
      }
      lenis.on('scroll', onScroll)
      return () => lenis.off('scroll', onScroll)
    }
    const cleanup = tryAttach()
    return () => { if (typeof cleanup === 'function') cleanup() }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className={styles.btn}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Sayfanın başına dön"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.25 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
