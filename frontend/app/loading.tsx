import styles from './loading.module.css'

export default function Loading() {
  return (
    <div className={styles.wrap}>
      <div className={styles.spinner} aria-label="Yükleniyor..." role="status" />
    </div>
  )
}
