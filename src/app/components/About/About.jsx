import Image from "next/image";
import styles from "./About.module.css";

const AboutSection = () => {
  return (
    <section className={styles.section} id="about">
      <div className={styles.grid}>
        
        <div className={styles.textContainer}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.description}>
            I am a driven Full Stack Developer with a unique blend of language expertise and coding proficiency. I am quite astonished at the profound impact that technology is exerting on our well-being, and I am increasingly eager to take part in this generational headway. Skilled in React.js, Next.js, Node.js, HTML, CSS, and Javascript, among others, I am particularly keen for creating appealing interfaces and optimizing user performance. My background in English translation enhances my clear communication, bridging diverse perspectives in global software development. Along with freelance Full Stack Developer work, I have recently completed a Web and Mobile Design course and a Backend with Java course. I am firmly committed to ongoing learning and excited to contribute my evolving expertise to the exponential growth in web and mobile development for the benefit of our community.
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
