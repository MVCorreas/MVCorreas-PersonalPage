"use client"
import Image from "next/image";
import styles from "./UnderConstruction.module.css";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";

const UnderConstruction = () => {
    const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <div className={styles.underConstructionContainer}>
      <h1 className={styles.underConstructionTitle}>
        Sorry, page under construction
      </h1>
      <div className={styles.imageWrapper}>
        <Image
          src="/UnderConstruction.gif"
          alt="PageUnderConstruction"
          width={400}
          height={400}
          priority
          className={styles.underConstructionImage}
        />
      </div>
      <Button onClick={handleGoBack}>GO BACK</Button>
    </div>
  );
};

export default UnderConstruction;
