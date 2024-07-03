import Image from "next/image";
import styles from "./About.module.css";

const AboutSection = () => {
  return (
    <section className={styles.section} id="about">
      <div className={styles.grid}>
        
        <div className={styles.textContainer}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, accusantium ullam. Deserunt dolores earum libero saepe repellat error iste, tenetur doloribus ab placeat aspernatur, ex amet sit accusamus illum. Nemo.
            </p>
        </div>
        <div className={styles.imageContainer}>
          <Image 
            src="/Profile.jpeg" 
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