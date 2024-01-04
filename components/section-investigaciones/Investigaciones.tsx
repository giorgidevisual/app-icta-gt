import { CardsProgramFeatures } from '@/components'
import styles from './investigaciones.module.css'
import { CardTiposInvestigaciones, cardData } from './CardTiposInvestigaciones'

export const Investigaciones = () => {
  return (
    <section className={styles.investigacionesContainer}>
      <header className={styles.titlesContainer}>
        <h2 className={styles.title}>Investigaciones<br/><span className={styles['title--color']}>realizadas</span></h2>
        <h3 className={styles.subtitle}></h3>
      </header>
      <main className={styles.wrapperMain}>
        <div className={styles.cardsRowContent}>
          {cardData.map((card, index: number) => (
            <CardTiposInvestigaciones
              key={index}
              colorBackground={card.colorBackground}
              icon={ card.icon }
              name={card.name}
            />
          ) )}
        </div>
      </main>
    </section>
  )
}
