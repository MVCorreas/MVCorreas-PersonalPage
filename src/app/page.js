import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/NavBar/NavBar";
import AboutSection from "./components/About/About";

export default function Home() {
  return (
    <main>
      <NavBar />
      <AboutSection />
    </main>
  );
}
