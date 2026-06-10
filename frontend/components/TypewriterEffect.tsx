'use client'
import { motion, stagger, useAnimate, useInView } from 'framer-motion'
import { useEffect } from 'react'
import styles from './TypewriterEffect.module.css'

interface Word {
  text: string
  accent?: boolean
}

interface Props {
  words: Word[]
}

export function TypewriterEffect({ words }: Props) {
  const chars = words.map((w) => ({ ...w, chars: w.text.split('') }))

  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(
        'span[data-char]',
        { opacity: 1 },
        { duration: 0.25, delay: stagger(0.06), ease: 'easeInOut' }
      )
    }
  }, [isInView, animate])

  return (
    <div className={styles.wrap}>
      <motion.div ref={scope} className={styles.text}>
        {chars.map((word, wi) => (
          <span key={wi} className={styles.word}>
            {word.chars.map((ch, ci) => (
              <motion.span
                data-char
                key={ci}
                className={word.accent ? styles.charAccent : styles.char}
                initial={{ opacity: 0 }}
              >
                {ch}
              </motion.span>
            ))}
            {wi < chars.length - 1 && ' '}
          </span>
        ))}
      </motion.div>
      <motion.span
        className={styles.cursor}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, repeat: Infinity, repeatType: 'reverse' }}
        aria-hidden="true"
      />
    </div>
  )
}
