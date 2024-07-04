import AboutSection from "./components/About/About";
import Interests from "./components/Interests/Interests";
import ContactForm from "./components/ContactForm/ContactForm";
import HeroSection from "./components/HeroSection/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <Interests />
      <ContactForm />
    </main>
  );
}
