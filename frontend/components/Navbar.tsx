'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { TypewriterEffect } from './TypewriterEffect'
import { ShinyButton } from './ui/ShinyButton'
import styles from './Navbar.module.css'

const TW_WORDS = [
  { text: 'Dijitalde' },
  { text: 'Büyütüyoruz.', accent: true },
]

const navItems = [
  { key: 'hizmetler',   label: 'Hizmetler' },
  { key: 'hakkimizda',  label: 'Hakkımızda' },
  { key: 'surec',       label: 'Süreç' },
  { key: 'referanslar', label: 'Referanslar' },
  { key: 'sss',         label: 'SSS' },
]

export default function Navbar() {
  const [isOpen, setIsOpen]           = useState(false)
  const [activeSection, setActive]    = useState('')
  const pathname = usePathname()
  const isHome   = pathname === '/'

  const href        = (key: string) => isHome ? `#${key}` : `/${key}`
  const contactHref = isHome ? '#iletisim' : '/iletisim'

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    if (!isHome) return
    const ids = [...navItems.map((i) => i.key), 'iletisim']
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [isHome])

  const close = () => setIsOpen(false)

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.pill}>

          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="Wooji Digital anasayfa" onClick={close}>
            <div className={styles.logoWrap}>
              <motion.span
                className={styles.logoText}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                Wooji Digital
              </motion.span>
              <motion.svg
                width="100%"
                height="14"
                viewBox="0 0 300 20"
                className={styles.logoUnderline}
                aria-hidden="true"
              >
                <motion.path
                  d="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
                  stroke="url(#ulGrad)"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.3 }}
                  whileHover={{
                    d: 'M 0,10 Q 75,20 150,10 Q 225,0 300,10',
                    transition: { duration: 0.7 },
                  }}
                />
                <defs>
                  <linearGradient id="ulGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="#7c3aed"/>
                    <stop offset="100%" stopColor="#0891b2"/>
                  </linearGradient>
                </defs>
              </motion.svg>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className={styles.navLinks} aria-label="Ana navigasyon">
            {navItems.map((item, i) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35, delay: i * 0.07 + 0.1 }}
              >
                <Link
                  href={href(item.key)}
                  onClick={close}
                  className={activeSection === item.key ? styles.activeLink : undefined}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className={styles.ctaWrap}
          >
            <TypewriterEffect words={TW_WORDS} />
            <ShinyButton href={contactHref} onClick={close}>
              İletişim
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </ShinyButton>
          </motion.div>

          {/* Hamburger */}
          <motion.button
            className={styles.hamburger}
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Menü aç kapat"
            aria-expanded={isOpen}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobMenu}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 280 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobil navigasyon"
          >
            <motion.button
              className={styles.mobClose}
              onClick={close}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              aria-label="Menüyü kapat"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6"  y1="6" x2="18" y2="18"/>
              </svg>
            </motion.button>

            <div className={styles.mobLinks}>
              {navItems.map((item, i) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 24 }}
                  transition={{ delay: i * 0.08 + 0.1 }}
                >
                  <Link href={href(item.key)} onClick={close}>{item.label}</Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ delay: 0.48 }}
                className={styles.mobCtaWrap}
              >
                <Link href={contactHref} className={styles.mobCta} onClick={close}>
                  İletişim Al
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
