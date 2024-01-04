import { AccordionFill, Objectives } from '@/components'
import styles from './accordion.module.css'

export const Accordion = () => {
  return (
    <div className={styles.wrapperAccordion}>
      <details className={styles.wrapperAccordion__accordion}>
        <summary className={styles['headerAccordion--top']}>P.V. en vinculación con Hortalizas</summary>
        <div className={styles.content}>
          <Objectives />
        </div>
      </details>
      <details className={styles.wrapperAccordion__accordion}>
        <summary className={styles['headerAccordion--outline']}>P. V. en vinculación con el Programa de Frijol</summary>
        <div className={styles.content}>
          Aqui va todo el contendio
        </div>
      </details>
      <details className={styles.wrapperAccordion__accordion}>
        <summary className={styles['headerAccordion--middle']}>P.V. de Maíz: Futuros proyectos</summary>
        <div className={styles.content}>
          Aqui va todo el contendio
        </div>
      </details>
      <details className={styles.wrapperAccordion__accordion}>
        <summary className={styles['headerAccordion--outline']}>P. V. en Frutales</summary>
        <div className={styles.content}>
          Aqui va todo el contendio
        </div>
      </details>
      <details className={styles.wrapperAccordion__accordion}>
        <summary className={styles['headerAccordion--botton']}>P.V. Otros Cultivos</summary>
        <div className={styles.content}>
          Aqui va todo el contendio
        </div>
      </details>
      
    </div>
  )
}
