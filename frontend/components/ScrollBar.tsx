'use client'
import { useEffect } from 'react'
import styles from './ScrollBar.module.css'

export default function ScrollBar() {
  useEffect(() => {
    const bar = document.getElementById('scroll-progress')
    if (!bar) return
    const onScroll = () => {
      const scrolled = window.scrollY
      const total = document.body.scrollHeight - window.innerHeight
      bar.style.width = (scrolled / total) * 100 + '%'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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
