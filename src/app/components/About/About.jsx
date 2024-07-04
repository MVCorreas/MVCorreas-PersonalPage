"use client"
import Image from "next/image";
import styles from "./About.module.css";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";

const AboutSection = () => {
  const router = useRouter(); 

  const handleFindOutMore = () => {
    router.push('/about'); 
  };
  return (
    <section className={styles.section} id="about">
      <div className={styles.grid}>
        
        <div className={styles.textContainer}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.description}>
          Hi there! And welcome to my little abode. I am a Full Stack developer from Mendoza, Argentina. Exactly! One of the Great Wine Capitals. Not that I love wine, which I don’t; but it is a historical icon of my land, and I am a fervent lover of tradition and cultural inheritance. And so, let me tell you more about me, and the story about my path towards web development.
          </p>
          <Button onClick={handleFindOutMore}>FIND OUT MORE</Button>
        </div>
        <div className={styles.imageContainer}>
          <Image 
            src="/About.jpg" 
            alt="aboutImage"
            width={500} 
            height={500}
            className={styles.profileImage}
          />
        </div>
      </div>
      
    </section>
  );
};

export default AboutSection;
