import styles from './accordion.module.css'

export const AccordionFill = () => {
  return (
    <details className={styles.accordionFill}>
      <summary className={styles['headerAccordion--top']}>Colocar título</summary>
      <div className={styles.content}>Aqui va todo el contendio
        <h1>título </h1>
      </div>
    </details>
  )
}
