'use client'
import { useState } from 'react'
import type { FormEvent } from 'react'
import styles from './Newsletter.module.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="newsletter" className={styles.section} aria-labelledby="nl-h">
      <div className={`${styles.inner} reveal`}>
        <div className="s-tag" style={{ justifyContent: 'center', marginBottom: '0.875rem' }}>Bülten</div>
        <h2 id="nl-h" className={styles.title}>
          Dijital Trendleri <span className="gt">Kaçırmayın</span>
        </h2>
        <p className={styles.sub}>
          SEO, dijital pazarlama ve marka büyütme konularında haftalık içerikler için abone olun.
        </p>
        <form className={styles.form} onSubmit={submit} aria-label="Bülten abonelik formu">
          <input
            type="email"
            placeholder="E-posta adresiniz"
            required
            aria-label="E-posta adresiniz"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className={`btn btn-fill ${status === 'success' ? styles.success : status === 'error' ? styles.error : ''}`}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Gönderiliyor...' : status === 'success' ? 'Abone Oldunuz!' : status === 'error' ? 'Hata!' : 'Abone Ol'}
          </button>
        </form>
      </div>
    </section>
  )
}
