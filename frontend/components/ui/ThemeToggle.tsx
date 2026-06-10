'use client'
import { useState, useEffect } from 'react'
import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') setIsDark(true)
  }, [])

  const apply = (dark: boolean) => {
    setIsDark(dark)
    if (dark) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem('theme', 'light')
    }
  }

  if (!mounted) return <div className={styles.skeleton} aria-hidden="true" />

  return (
    <div className={styles.tabs} role="group" aria-label="Tema seçimi">
      <button
        className={`${styles.tab} ${!isDark ? styles.active : ''}`}
        onClick={() => apply(false)}
        aria-label="Açık tema"
        aria-pressed={!isDark}
        title="Açık tema"
      >
        ☀️
      </button>
      <button
        className={`${styles.tab} ${isDark ? styles.active : ''}`}
        onClick={() => apply(true)}
        aria-label="Koyu tema"
        aria-pressed={isDark}
        title="Koyu tema"
      >
        🌙
      </button>
    </div>
  )
}
