'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './CookieBanner.module.css'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('kvkk-v1')) setVisible(true)
  }, [])

  const accept = () => { localStorage.setItem('kvkk-v1', '1'); setVisible(false) }
  const reject = () => { localStorage.setItem('kvkk-v1', '0'); setVisible(false) }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.banner}
          role="dialog"
          aria-label="Çerez bildirimi"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', damping: 28, stiffness: 260 }}
        >
          <div className={styles.inner}>
            <div className={styles.icon} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8v4M12 16h.01"/>
              </svg>
            </div>
            <p className={styles.text}>
              Wooji Digital, deneyiminizi geliştirmek için çerezler kullanmaktadır. Devam ederek{' '}
              <a href="/gizlilik-politikasi" className={styles.link}>Gizlilik Politikamızı</a> ve{' '}
              <a href="/kvkk" className={styles.link}>KVKK Aydınlatma Metnimizi</a> kabul etmiş olursunuz.
            </p>
            <div className={styles.actions}>
              <button className={styles.rejectBtn} onClick={reject}>Reddet</button>
              <button className={styles.acceptBtn} onClick={accept}>Kabul Et</button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
