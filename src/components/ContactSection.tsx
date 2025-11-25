import oceanBlueSurface from "@/assets/ocean-blue-water-surface.jpg";
import { Globe, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import {
  AnimatedContactCard,
  AnimatedParallaxBackground,
  AnimatedBlobs,
  AnimatedSection,
} from "./animated";

/**
 * ContactSection - Server Component (SEO-optimized)
 * All animations are handled by client components
 */
export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden bg-linear-to-br from-cyan-950 via-blue-950 to-blue-900"
    >
      {/* Ocean water surface background with parallax */}
      <AnimatedParallaxBackground speed={0.15}>
        <div className="absolute inset-0 opacity-30">
          <Image
            src={oceanBlueSurface}
            alt="Ocean water surface"
            className="w-full h-[120%] object-cover"
            quality={70}
            sizes="100vw"
            placeholder="blur"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-cyan-950/60 via-blue-950/80 to-blue-900/60" />
      </AnimatedParallaxBackground>

      {/* Floating liquid glass blobs - CSS animations */}
      <AnimatedBlobs />

      {/* Gentle water waves - CSS only */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-1 bg-linear-to-r from-transparent via-cyan-300/40 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              animation: `water-wave ${10 + i * 2}s linear infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-3 glass-button px-8 py-4 rounded-full mb-10 text-cyan-100">
            <Mail className="w-5 h-5" />
            <span className="text-sm tracking-[0.3em] uppercase">
              Contact Us
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-8 text-white">
            Liên hệ <br />
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              với chúng tôi
            </span>
          </h2>

          <p className="text-xl text-cyan-100/90">
            Hãy để AVARIS đồng hành cùng thương hiệu của bạn
          </p>
        </AnimatedSection>

        {/* Contact Info Cards - Grid Layout */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Website Card */}
          <AnimatedContactCard
            index={0}
            label="Website"
            value="avariswater.com"
            href="https://avariswater.com"
          >
            <Globe className="w-full h-full" />
          </AnimatedContactCard>

          {/* Email Card */}
          <AnimatedContactCard
            index={1}
            label="Email"
            value="info@avariswater.com"
            href="mailto:info@avariswater.com"
          >
            <Mail className="w-full h-full" />
          </AnimatedContactCard>

          {/* Phone Card */}
          <AnimatedContactCard
            index={2}
            label="Hotline"
            value="0868.869.910"
            href="tel:0868869910"
          >
            <Phone className="w-full h-full" />
          </AnimatedContactCard>

          {/* LinkedIn Card */}
          <AnimatedContactCard
            index={3}
            label="LinkedIn"
            value="avariswater"
            href="https://www.linkedin.com/company/avariswater"
          >
            <Linkedin className="w-full h-full" />
          </AnimatedContactCard>
        </div>
      </div>
    </section>
  );
}
