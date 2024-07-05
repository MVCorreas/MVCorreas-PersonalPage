"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./AboutPage.module.css";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../components/reusableIcons/GithubIcon";
import LinkedInIcon from "../components/reusableIcons/LinkedInIcon";
import Button from "../components/Button/Button";

const AboutContent = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };
  
  return (
    <>
      <div className={styles.aboutSection}>
        <div className={styles.imageGrid}>
          <Image
            src="/About.jpg"
            alt="Image 1"
            width={500}
            height={500}
            priority
            className={`${styles.image} ${styles.vertical}`}
          />
          <Image
            src="/Nature.jpg"
            alt="Image 2"
            width={500}
            height={500}
            priority
            className={`${styles.image} ${styles.vertical}`}
          />
          <Image
            src="/About.jpg"
            alt="Image 3"
            width={500}
            height={500}
            priority
            className={`${styles.image} ${styles.horizontal}`}
          />
          <Image
            src="/AboutImage.jpg"
            alt="Image 4"
            width={500}
            height={500}
            priority
            className={`${styles.image} ${styles.horizontal}`}
          />
        </div>
        <div className={styles.textContainer}>
          <div>
            <h1 className={styles.aboutTitle}>Who Am I?</h1>
          </div>
          <div>
            <p>
              There is nothing that dispels darkness more than light. The
              pandemic, though appalling and dire, illuminated my path to
              coding.
              <br />
              At the time, I was teaching English at the National University of
              Cuyo when COVID-19 inundated our lives with turmoil and
              uncertainty. For a while, my life seemed to freeze as I faced the
              unknown. Determined to find a way out of this tragedy and into
              productivity, I worked tirelessly, day and night, unpaid and often
              unnoticed, striving to adapt my classes to the new realities of
              life.
              <br />
              I enrolled in several Moodle courses, discovered outstanding
              online resources, and creatively transformed my virtual classrooms
              into interactive storybooks with engaging interfaces for students
              of all ages. My efforts made life easier for my students and their
              parents, making English both fun and accessible with a single
              click. My classes became purposeful and enjoyable, igniting my
              passion for technology and its relentless pursuit of our
              well-being.
              <br />
              My journey as a developer began shortly afterward. After
              completing several courses in programming languages, I graduated
              as a Full Stack Developer in January 2024. I have not paused once
              to take a break. Each of my days is fueled by a thirst for
              learning and contributing to the dazzling world that technology
              offers today. And I cherish each one of those days.
            </p>
          </div>
        </div>
      </div>
      <br />

      <div className={styles.inspirationSection}>
        <h1 className={styles.inspirationTitle}>My Inspiration</h1>
        <Image
          src="/InspirationImage.jpg"
          alt="aboutImage"
          width={900}
          height={900}
          priority
          className={styles.inspirationImage}
        />
        <div className={styles.inspirationText}>
          <h2>“There’s a remedy for all things but death.”</h2>
          <p>- Miguel de Cervantes</p>
          <p>
            Guided by a quote that has illuminated my path with earnest
            endeavour and unceasing inspiration towards self-improvement, I am
            reminded that no challenge is insurmountable. With diligent effort,
            unwavering perseverance, and a generous infusion of love, we can
            certainly find solutions.
          </p>
        </div>
      </div>
      <br />

      <div className={styles.socialSection}>
        <p className={styles.socialText}>Let's get in touch</p>
        <div className={styles.iconContainer}>
          <Link href="https://github.com/MVCorreas">
            <LinkedInIcon color="black" width={50} height={50} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mar%C3%ADa-victoria-correas-148049b2/"
            className={styles.icon}
          >
            <GithubIcon color="black" width={50} height={50} />
          </Link>
        </div>
        <Button onClick={handleGoBack}>GO BACK</Button>
      </div>
    </>
  );
};

export default AboutContent;
