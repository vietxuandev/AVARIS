import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { ImpactSection } from "@/components/ImpactSection";
import { ProcessSection } from "@/components/ProcessSection";

export default function Home() {
  return (
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
  );
}
