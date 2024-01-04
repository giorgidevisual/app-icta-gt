'use client'

import styles from './carousel.module.css'
import {
  MdArrowBackIosNew,
  MdArrowForwardIos,
} from "react-icons/md";
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
        
        <Image 
            className={styles.containerSlides__images}
            src={slides[currentIndex]} 
            width={1280} 
            height={480}
            style={
              {
                objectFit: 'cover'
              }
            }
            alt={`Slide ${currentIndex}`}
        />
        <span className={styles.arrowsWrapper}>
          <MdArrowBackIosNew onClick={prevIndex} className={styles.arrows} />
          <MdArrowForwardIos onClick={nextIndex} className={styles.arrows} />
        </span>
        
      </div>
    </section>
  );
};

