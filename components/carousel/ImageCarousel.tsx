'use client'
import styles from './carousel.module.css'
import Image from "next/image"
import { useState } from 'react';

export const ImageCarousel = ({ slides }: any ) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <section className={styles.wrapperCarousel}>
      <div className={styles.containerSlides}>
        <button onClick={prevIndex} className={styles.arrows}>Anterior</button>
        <picture className={styles.containerSlides__images}>
          <Image 
            src={slides[currentIndex]} 
            width={1080} 
            height={480} 
            alt={`Slide ${currentIndex}`}
          />
        </picture>
        <button onClick={nextIndex} className={styles.arrows}>Siguiente</button>
      </div>
    </section>
  );
};

