'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { TypewriterEffect } from './TypewriterEffect'
import { ShinyButton } from './ui/ShinyButton'
import ThemeToggle from './ui/ThemeToggle'
import styles from './Navbar.module.css'

const TW_WORDS = [
  { text: 'Dijitalde' },
  { text: 'Büyütüyoruz.', accent: true },
]

const navItems = [
  { key: 'hakkimizda',  label: 'Hakkımızda' },
  { key: 'surec',       label: 'Süreç' },
  { key: 'referanslar', label: 'Referanslar' },
  { key: 'sss',         label: 'SSS' },
]

const serviceLinks = [
  { label: 'SEO & Organik Büyüme',     href: '/seo-hizmetleri' },
  { label: 'Dijital Reklam Yönetimi',  href: '/dijital-reklam' },
  { label: 'Web Tasarım & Geliştirme', href: '/web-tasarim' },
  { label: 'Sosyal Medya Yönetimi',    href: '/sosyal-medya' },
  { label: 'İçerik Pazarlaması',       href: '/icerik-pazarlamasi' },
  { label: 'Analitik & Strateji',      href: '/analitik-strateji' },
]

export default function Navbar() {
  const [isOpen, setIsOpen]               = useState(false)
  const [activeSection, setActive]        = useState('')
  const [servicesOpen, setServicesOpen]   = useState(false)
  const [mobServicesOpen, setMobServices] = useState(false)
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
    const ids = ['hizmetler', ...navItems.map((i) => i.key), 'iletisim']
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

  const close = () => { setIsOpen(false); setMobServices(false) }

  return (
    <>
      <div className={styles.wrapper}>
        <motion.div
          className={styles.pill}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="Wooji Digital anasayfa" onClick={close}>
            <div className={styles.logoWrap}>
              <span className={styles.logoText}>Wooji Digital</span>
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
                  transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.5 }}
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
            {/* Hizmetler dropdown */}
            <div
              className={styles.dropdownWrap}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href={href('hizmetler')}
                onClick={close}
                className={`${styles.dropdownTrigger}${activeSection === 'hizmetler' ? ` ${styles.activeLink}` : ''}`}
              >
                Hizmetler
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className={`${styles.chevron}${servicesOpen ? ` ${styles.chevronOpen}` : ''}`}
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </Link>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    className={styles.dropdown}
                    initial={{ opacity: 0, y: -6, scale: 0.97, x: '-50%' }}
                    animate={{ opacity: 1, y: 0,  scale: 1,    x: '-50%' }}
                    exit={{ opacity: 0, y: -6, scale: 0.97, x: '-50%' }}
                    transition={{ duration: 0.12, ease: [0.4, 0, 0.2, 1] }}
                    role="menu"
                  >
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className={styles.dropdownItem}
                        onClick={close}
                        role="menuitem"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navItems.map((item) => (
              <div key={item.key}>
                <Link
                  href={href(item.key)}
                  onClick={close}
                  className={activeSection === item.key ? styles.activeLink : undefined}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className={styles.ctaWrap}>
            <TypewriterEffect words={TW_WORDS} />
            <ThemeToggle />
            <ShinyButton href={contactHref} onClick={close}>
              İletişim
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </ShinyButton>
          </div>

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
        </motion.div>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* backdrop */}
            <motion.div
              className={styles.mobBackdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={close}
              aria-hidden="true"
            />

            <motion.div
              className={styles.mobMenu}
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobil navigasyon"
            >
              {/* ── Header bar ── */}
              <div className={styles.mobHeader}>
                <span className={styles.mobBrand}>Wooji Digital</span>
                <div className={styles.mobHeaderRight}>
                  <ThemeToggle />
                  <motion.button
                    className={styles.mobClose}
                    onClick={close}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Menüyü kapat"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6"  y1="6" x2="18" y2="18"/>
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* ── Nav body ── */}
              <div className={styles.mobBody}>

                {/* Section label */}
                <motion.p
                  className={styles.mobSectionLabel}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.08 }}
                >
                  Navigasyon
                </motion.p>

                {/* Hizmetler row */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 }}
                >
                  <button
                    className={styles.mobNavRow}
                    onClick={() => setMobServices((v) => !v)}
                    aria-expanded={mobServicesOpen}
                  >
                    <span className={styles.mobNavRowLeft}>
                      <span className={styles.mobNavIcon} aria-hidden="true">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                          <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
                        </svg>
                      </span>
                      <span className={styles.mobNavLabel}>Hizmetler</span>
                    </span>
                    <svg
                      width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5"
                      className={`${styles.mobChevron}${mobServicesOpen ? ` ${styles.chevronOpen}` : ''}`}
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </button>

                  <AnimatePresence>
                    {mobServicesOpen && (
                      <motion.div
                        className={styles.mobServiceGrid}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                      >
                        <div className={styles.mobServiceInner}>
                          {serviceLinks.map((s) => (
                            <Link key={s.href} href={s.href} className={styles.mobServicePill} onClick={close}>
                              {s.label}
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                              </svg>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Nav items */}
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.055 + 0.18 }}
                  >
                    <Link
                      href={href(item.key)}
                      onClick={close}
                      className={`${styles.mobNavRow} ${styles.mobNavLink}${activeSection === item.key ? ` ${styles.mobNavActive}` : ''}`}
                    >
                      <span className={styles.mobNavRowLeft}>
                        <span className={styles.mobNavNum} aria-hidden="true">0{i + 2}</span>
                        <span className={styles.mobNavLabel}>{item.label}</span>
                      </span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* ── Footer CTA ── */}
              <motion.div
                className={styles.mobFooter}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48 }}
              >
                <p className={styles.mobFooterTag}>Ücretsiz danışmanlık</p>
                <Link href={contactHref} className={styles.mobCta} onClick={close}>
                  İletişim Al
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
