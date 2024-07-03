import Image from "next/image";
import styles from "./Interests.module.css";

const Interests = () => {
  return (
    <section className={styles.section} id="interests">
      <div className={styles.grid}>
      <div className={styles.imageContainer}>
          <Image 
            src="/Profile.jpeg" 
            alt="aboutImage"
            width={500} 
            height={500}
            className={styles.profileImage}
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Interests</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem est nisi esse voluptates ad deleniti odit animi cumque? Debitis provident non itaque minus earum voluptatibus, accusamus iure enim soluta minima?
          </p>
        </div>
       
      </div>
      
    </section>
  );
};

export default Interests;
