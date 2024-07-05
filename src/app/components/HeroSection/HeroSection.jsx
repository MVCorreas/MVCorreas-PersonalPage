"use client"
import { useState } from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true); 
  };

  return (
    <section className={styles.section} id="hero">
      {!imageLoaded && <div className={styles.loader}></div>}
      <div className={styles.heroImageWrapper}>
        <Image
          src="/BackgroundImage.jpg"
          alt="Background image"
          layout="fill"
          className={styles.heroImage}
          priority={true} 
          onLoad={handleImageLoad} 
          style={{ opacity: imageLoaded ? 1 : 0 }} 
        />
      </div>
      <h1 className={styles.heroTitle}>A LITTLE ABOUT MARIA</h1>
    </section>
  );
};

export default HeroSection;
