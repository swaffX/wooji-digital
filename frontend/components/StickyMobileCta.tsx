'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getLenisInstance } from '@/lib/lenis'
import styles from './StickyMobileCta.module.css'

export default function StickyMobileCta() {
  const [visible, setVisible] = useState(false)
  const [consentRecorded, setConsentRecorded] = useState(false)
  const visibleRef = useRef(false)

  useEffect(() => {
    setConsentRecorded(localStorage.getItem('kvkk-v1') !== null)
  }, [])

  useEffect(() => {
    const threshold = window.innerHeight * 0.6
    const tryAttach = () => {
      const lenis = getLenisInstance()
      if (!lenis) return setTimeout(tryAttach, 50)
      const onScroll = ({ scroll }: { scroll: number }) => {
        const next = scroll > threshold
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
      {visible && consentRecorded && (
        <motion.div
          className={styles.wrap}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 340, damping: 28 }}
        >
          <a href="/#iletisim" className={styles.cta} aria-label="Ücretsiz danışmanlık al">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 1.93 3.37 2 2 0 0 1 3.92 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Ücretsiz Danışmanlık Al
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
