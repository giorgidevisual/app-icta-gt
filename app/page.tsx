import {
  Accordion,
  CarouselArrowDots,
  GridSituacionCultivo,
  Investigacion, Investigaciones, Navbar,
  Objectives,
  ProgramaPVegetal
} from '@/components';
import styles from './page.module.css';

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
    <section className={styles.wrapperSection}>
      <Investigacion />
    </section>
    <section className={styles.wrapperSection}>
      <ProgramaPVegetal />
    </section>
    <section className={styles.wrapperSection}>
      <Accordion />
    </section>
    <hr style={{width: '80rem', color: '#2D2E28'}}></hr>  
    <section className={styles.wrapperSection}>
      <Investigaciones />
    </section>
    </>
  )
}
