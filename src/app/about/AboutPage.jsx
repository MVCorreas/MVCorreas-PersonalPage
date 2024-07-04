"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './AboutPage.module.css'; 
import Image from 'next/image';
import Link from 'next/link';
import GithubIcon from '../components/reusableIcons/GithubIcon';
import LinkedInIcon from '../components/reusableIcons/LinkedInIcon';
import Button from '../components/Button/Button';

const AboutContent = () => {
    const router = useRouter()

    const handleGoBack = () => {
        console.log('Button clicked, navigating to home page');
        router.push('/'); 
    }
  return (
    
  <>
  <div className={styles.aboutSection}>
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
      <br/>
   
      <div className={styles.inspirationSection}>
        <h1 className={styles.inspirationTitle}>My Inspiration</h1>
      <Image 
            src="/InspirationImage.jpg" 
            alt="aboutImage"
            width={900} 
            height={900}
            className={styles.inspirationImage} 
      />
      <div className={styles.inspirationText}>
        <h2>“There’s a remedy for all things but death.”</h2>
        <p>- Miguel de Cervantes</p>
        <h4>Guided by a quote that has illuminated my path with earnest endeavour and unceasing inspiration towards self-improvement, I am reminded that no challenge is insurmountable. With diligent effort, unwavering perseverance, and a generous infusion of love, we can certainly find solutions.</h4>
      </div>
      </div>
      <br/>

      <div className={styles.socialSection}>
        <h2>Let's get in touch</h2>
        <div className={styles.iconContainer}>
       <Link href="https://github.com/MVCorreas">
       <LinkedInIcon color="black" width={50} height={50}/>
          </Link>
          <Link href="https://www.linkedin.com/in/mar%C3%ADa-victoria-correas-148049b2/"  className={styles.icon}>
            <GithubIcon color="black" width={50} height={50}/>
        </Link>
       </div>
       <Button onClick={handleGoBack}>GO BACK</Button>
      </div>
   
   
   
      
  </>
    
   

   
  );
};

export default AboutContent;
