import { CarouselArrowDots, GridSituacionCultivo, Navbar, Objectives } from '@/components'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <>
    <Navbar />
    <main className={styles.wrapperMain}>
      <CarouselArrowDots />
    </main>
    <section className={styles.wrapperSection}>
      <GridSituacionCultivo />
    </section>  
    <section className={styles.wrapperSection}>
      <Objectives />
    </section>
    
    </>
  )
}
