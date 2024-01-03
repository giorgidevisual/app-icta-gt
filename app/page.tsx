import { CarouselArrowDots, GridSituacionCultivo, Navbar } from '@/components'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <>
    <Navbar />
    <main>
      <CarouselArrowDots />
    </main>
    <section className={styles.wrapper}>
      <GridSituacionCultivo />
    </section>  
    
    </>
  )
}
