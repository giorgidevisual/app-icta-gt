import { CardsProgramFeatures } from '@/components'
import styles from './programaPVegetal.module.css'
import { cardData } from './CardsProgramFeatures'

export const ProgramaPVegetal = () => {
  return (
    <section className={styles.programContainer}>
      <header className={styles.titlesContainer}>
        <h2 className={styles.title}>Programa de <span className={styles['title--color']}>Protección Vegetal</span></h2>
        <h3 className={styles.subtitle}></h3>
      </header>
      <main className={styles.wrapperMain}>
        <div className={styles.cardsRowContent}>
          {cardData.map((card, index: number) => (
            <CardsProgramFeatures
              key={ index }
              icon={ card.icon }
              title={card.title}
              description={ card.description }
            />
          ) )}
        </div>
      </main>
    </section>
  )
}
