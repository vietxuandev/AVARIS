"use client";

import oceanBlueSurface from "@/assets/ocean-blue-water-surface.jpg";
import { Globe, Linkedin, Mail, Phone } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Parallax scrolling for background
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 relative overflow-hidden bg-linear-to-br from-cyan-950 via-blue-950 to-blue-900"
    >
      {/* Ocean water surface background with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 opacity-30">
          <Image
            src={oceanBlueSurface}
            alt="Ocean water surface"
            className="w-full h-[120%] object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-cyan-950/60 via-blue-950/80 to-blue-900/60" />
      </motion.div>

      {/* Floating liquid glass blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -90, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-linear-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-linear-to-br from-blue-500/20 to-cyan-400/15 rounded-full blur-[150px]"
        />
      </div>

      {/* Gentle water waves */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-1 bg-linear-to-r from-transparent via-cyan-300/40 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
            }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 glass-button px-8 py-4 rounded-full mb-10 text-cyan-100"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm tracking-[0.3em] uppercase">
              Contact Us
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-8 text-white">
            Liên hệ <br />
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              với chúng tôi
            </span>
          </h2>

          <p className="text-xl text-cyan-100/90">
            Hãy để AVARIS đồng hành cùng thương hiệu của bạn
          </p>
        </motion.div>

        {/* Contact Info Cards - Grid Layout */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Website Card */}
          <motion.a
            href="https://avariswater.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="block relative group"
          >
            {/* Hover glow */}
            <div className="absolute -inset-1 bg-linear-to-br from-cyan-400/30 to-blue-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

            {/* Glass card */}
            <div className="glass-dark rounded-3xl p-8 border border-white/10 relative overflow-hidden">
              {/* Top reflection */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-linear-to-b from-white/5 to-transparent rounded-t-3xl pointer-events-none" />

              {/* Shimmer on hover */}
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full opacity-0 group-hover:opacity-100"
                animate={{ x: ["0%", "200%"] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              />

              <div className="flex items-center gap-5 relative z-10">
                <div className="w-14 h-14 bg-linear-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-white/30 to-transparent" />
                  <Globe className="w-7 h-7 text-white relative z-10" />
                </div>
                <div>
                  <p className="text-cyan-300/70 text-sm mb-1">Website</p>
                  <p className="text-white text-xl">avariswater.com</p>
                </div>
              </div>
            </div>
          </motion.a>

          {/* Email Card */}
          <motion.a
            href="mailto:info@avariswater.com"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="block relative group"
          >
            {/* Hover glow */}
            <div className="absolute -inset-1 bg-linear-to-br from-cyan-400/30 to-blue-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

            {/* Glass card */}
            <div className="glass-dark rounded-3xl p-8 border border-white/10 relative overflow-hidden">
              {/* Top reflection */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-linear-to-b from-white/5 to-transparent rounded-t-3xl pointer-events-none" />

              {/* Shimmer on hover */}
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full opacity-0 group-hover:opacity-100"
                animate={{ x: ["0%", "200%"] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              />

              <div className="flex items-center gap-5 relative z-10">
                <div className="w-14 h-14 bg-linear-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-white/30 to-transparent" />
                  <Mail className="w-7 h-7 text-white relative z-10" />
                </div>
                <div>
                  <p className="text-cyan-300/70 text-sm mb-1">Email</p>
                  <p className="text-white text-xl">info@avariswater.com</p>
                </div>
              </div>
            </div>
          </motion.a>

          {/* Phone Card */}
          <motion.a
            href="tel:0868869910"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="block relative group"
          >
            {/* Hover glow */}
            <div className="absolute -inset-1 bg-linear-to-br from-cyan-400/30 to-blue-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

            {/* Glass card */}
            <div className="glass-dark rounded-3xl p-8 border border-white/10 relative overflow-hidden">
              {/* Top reflection */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-linear-to-b from-white/5 to-transparent rounded-t-3xl pointer-events-none" />

              {/* Shimmer on hover */}
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full opacity-0 group-hover:opacity-100"
                animate={{ x: ["0%", "200%"] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              />

              <div className="flex items-center gap-5 relative z-10">
                <div className="w-14 h-14 bg-linear-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-white/30 to-transparent" />
                  <Phone className="w-7 h-7 text-white relative z-10" />
                </div>
                <div>
                  <p className="text-cyan-300/70 text-sm mb-1">Hotline</p>
                  <p className="text-white text-xl">0868.869.910</p>
                </div>
              </div>
            </div>
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            href="https://www.linkedin.com/company/avariswater"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="block relative group"
          >
            {/* Hover glow */}
            <div className="absolute -inset-1 bg-linear-to-br from-cyan-400/30 to-blue-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

            {/* Glass card */}
            <div className="glass-dark rounded-3xl p-8 border border-white/10 relative overflow-hidden">
              {/* Top reflection */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-linear-to-b from-white/5 to-transparent rounded-t-3xl pointer-events-none" />

              {/* Shimmer on hover */}
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full opacity-0 group-hover:opacity-100"
                animate={{ x: ["0%", "200%"] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              />

              <div className="flex items-center gap-5 relative z-10">
                <div className="w-14 h-14 bg-linear-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-white/30 to-transparent" />
                  <Linkedin className="w-7 h-7 text-white relative z-10" />
                </div>
                <div>
                  <p className="text-cyan-300/70 text-sm mb-1">LinkedIn</p>
                  <p className="text-white text-xl">avariswater</p>
                </div>
              </div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
