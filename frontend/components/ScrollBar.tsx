'use client'
import { useEffect } from 'react'
import { getLenisInstance } from '@/lib/lenis'
import styles from './ScrollBar.module.css'

export default function ScrollBar() {
  useEffect(() => {
    const bar = document.getElementById('scroll-progress')
    if (!bar) return

    const tryAttach = () => {
      const lenis = getLenisInstance()
      if (!lenis) return setTimeout(tryAttach, 50)
      const onScroll = ({ scroll, limit }: { scroll: number; limit: number }) => {
        const ratio = Math.min(Math.max(scroll / Math.max(limit, 1), 0), 1)
        bar.style.transform = `scaleX(${ratio})`
      }
      lenis.on('scroll', onScroll)
      return () => lenis.off('scroll', onScroll)
    }

    const cleanup = tryAttach()
    return () => { if (typeof cleanup === 'function') cleanup() }
  }, [])

  return (
    <div
      id="scroll-progress"
      className={styles.bar}
      role="progressbar"
      aria-label="Sayfa ilerleme göstergesi"
    />
  )
}
