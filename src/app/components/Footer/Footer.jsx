import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.footerTitle}>MARIA VICTORIA CORREAS PROFILE</span>
       <div className={styles.iconContainer}>
       <Link href="https://github.com/MVCorreas">
            <Image src='/github-icon.svg' alt="Github Icon" width={50} height={50} className={styles.icon}/>
          </Link>
          <Link href="https://www.linkedin.com/in/mar%C3%ADa-victoria-correas-148049b2/">
            <Image src='/linkedin-icon.svg' alt="Linkedin Icon"  width={50} height={50}/>
          </Link>
       </div>
       
      </div>
    </footer>
  );
};

export default Footer;
