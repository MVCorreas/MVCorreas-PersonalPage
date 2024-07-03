import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/NavBar/NavBar";
import AboutSection from "./components/About/About";
import Interests from "./components/Interests/Interests";
import ContactForm from "./components/ContactForm/ContactForm";

export default function Home() {
  return (
    <main>
      <NavBar />
      <AboutSection />
      <Interests />
      <ContactForm />
    </main>
  );
}
