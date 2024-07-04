// AboutContent.js

import React from 'react';
import styles from './AboutPage.module.css'; 

const AboutContent = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.imageGrid}>
        <img src="/About.jpg" alt="Image 1" className={`${styles.image} ${styles.vertical}`} />
        <img src="/AboutImage.jpg" alt="Image 2" className={`${styles.image} ${styles.vertical}`} />
        <img src="/About.jpg" alt="Image 3" className={`${styles.image} ${styles.horizontal}`} />
        <img src="/AboutImage.jpg" alt="Image 4" className={`${styles.image} ${styles.horizontal}`} />
      </div>
      <div className={styles.textContainer}>
        <div>
          <h1>ABOUT ME</h1>
        </div>
        <div>
          <p>Your about content goes here...</p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
