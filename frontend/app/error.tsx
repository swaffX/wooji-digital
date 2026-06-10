'use client'
import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error) }, [error])

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: '1.5rem',
      textAlign: 'center', padding: '2rem', background: 'var(--bg)'
    }}>
      <h2 style={{ fontFamily: 'var(--font-d)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800 }}>
        Beklenmedik Bir Hata Oluştu
      </h2>
      <p style={{ color: 'var(--text-2)', maxWidth: '420px', lineHeight: 1.75 }}>
        Üzgünüz, bir şeyler ters gitti. Sayfayı yenilemeyi deneyin.
      </p>
      <button onClick={reset} className="btn btn-fill" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M23 4v6h-6M1 20v-6h6"/>
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
        </svg>
        Tekrar Dene
      </button>
    </div>
  )
}
