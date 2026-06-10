import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.code}>404</div>
        <h1 className={styles.title}>
          Sayfa <span className="gt">Bulunamadı</span>
        </h1>
        <p className={styles.desc}>
          Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
        </p>
        <a href="/" className={styles.btn}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"/>
          </svg>
          Ana Sayfaya Dön
        </a>
      </div>
    </div>
  )
}
