import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ImpactSection } from "./components/ImpactSection";
import { ProcessSection } from "./components/ProcessSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        
        <div id="about">
          <AboutSection />
        </div>
        
        <div id="impact">
          <ImpactSection />
        </div>
        
        <div id="process">
          <ProcessSection />
        </div>
        
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}