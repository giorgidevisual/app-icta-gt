import styles from './carousel.module.css'

export const CarouselArrowDots = () => {
  return (
    <section className={styles.wrapperCarousel}>
      <div className={styles.containerSlides}>
        <button className={styles.arrows}>Anterior</button>
        <picture className={styles.containerSlides__images}>
          <img src="https://picsum.photos/id/666/1080/480" alt=""></img>
        </picture>
        <button className={styles.arrows}>Siguiente</button>
      </div>
    </section>
  )
}
