"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero.png";
import Image from "next/image";
import { useCallback, useMemo } from "react";

// Move array outside component to prevent recreation
const LIGHT_RAYS = Array.from({ length: 5 }, (_, i) => i);

export function HeroSection() {
  const scrollToContact = useCallback(() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Parallax scroll effects
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1000], [0, 300]); // Background moves slower
  const contentY = useTransform(scrollY, [0, 1000], [0, 100]); // Content moves slightly
  const opacity = useTransform(scrollY, [0, 400], [1, 0]); // Fade out on scroll

  // Memoize animation props to prevent object recreation
  const opacityAnimation = useMemo(() => ({ opacity: [0.2, 0.4, 0.2] }), []);
  const opacityTransition = useMemo(
    () => ({ duration: 5, repeat: Infinity, ease: "easeInOut" as const }),
    []
  );

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* SVG Filters for Water Effects */}
      <svg className="absolute w-0 h-0">
        <defs>
          {/* Realistic Water Distortion Filter */}
          <filter id="waterFilter" x="-50%" y="-50%" width="200%" height="200%">
            {/* Turbulence for water ripples */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015 0.02"
              numOctaves="3"
              seed="2"
              result="turbulence"
            >
              <animate
                attributeName="baseFrequency"
                values="0.015 0.02;0.018 0.025;0.015 0.02"
                dur="8s"
                repeatCount="indefinite"
              />
            </feTurbulence>

            {/* Displacement for water distortion */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="15"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displacement"
            />

            {/* Blur for depth */}
            <feGaussianBlur
              in="displacement"
              stdDeviation="0.5"
              result="blur"
            />

            {/* Brighten for water light refraction */}
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1.1 0 0 0 0
                      0 1.15 0 0 0
                      0 0 1.2 0 0
                      0 0 0 1 0"
              result="brighten"
            />

            {/* Merge with original */}
            <feBlend in="brighten" in2="SourceGraphic" mode="normal" />
          </filter>

          {/* Caustics Pattern Filter */}
          <filter id="caustics" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02 0.03"
              numOctaves="4"
              seed="10"
              result="causticTurbulence"
            >
              <animate
                attributeName="baseFrequency"
                values="0.02 0.03;0.025 0.035;0.02 0.03"
                dur="12s"
                repeatCount="indefinite"
              />
            </feTurbulence>

            <feColorMatrix
              in="causticTurbulence"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0.5
                      0 0 0 0 1
                      0 0 0 0.3 0"
              result="causticColor"
            />

            <feGaussianBlur
              in="causticColor"
              stdDeviation="2"
              result="causticBlur"
            />
          </filter>
        </defs>
      </svg>

      {/* Background Image with Water Filter */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div
          className="absolute inset-0"
          style={{ filter: "url(#waterFilter)" }}
        >
          <Image
            src={heroBg}
            alt="AVARIS bottle floating on water"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-linear-to-br from-cyan-900/30 via-blue-900/20 to-blue-900/40" />
        </div>

        {/* Animated Caustics Overlay */}
        <div
          className="absolute inset-0 opacity-40 mix-blend-screen"
          style={{ filter: "url(#caustics)" }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-cyan-300/30 via-blue-400/20 to-transparent" />
        </div>

        {/* Animated light rays through water */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={opacityAnimation}
          transition={opacityTransition}
        >
          {LIGHT_RAYS.map((i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-full bg-linear-to-b from-transparent via-cyan-200/20 to-transparent"
              style={{
                left: `${15 + i * 20}%`,
                transform: `rotate(${10 + i * 3}deg)`,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                x: [-20, 20, -20],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Multiple Animated Liquid Blobs overlaying the image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 150, 0],
            y: [0, -100, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 right-1/4 w-[600px] h-[600px] bg-linear-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 100, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-linear-to-br from-blue-500/20 to-purple-500/15 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-linear-to-br from-cyan-300/15 to-sky-400/15 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-linear-to-br from-blue-400/15 to-cyan-500/15 rounded-full blur-[80px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            {/* Centered Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center max-w-4xl"
              style={{ y: contentY, opacity }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8 flex flex-col items-center"
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 text-white drop-shadow-2xl">
                  AVARIS
                </h1>
                <div className="h-1.5 w-32 bg-white/70 rounded-full backdrop-blur-sm shadow-lg" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl mb-12 text-white/95 leading-relaxed drop-shadow-md"
              >
                Chai thủy tinh cao cấp, tái sử dụng - Kết hợp hoàn hảo giữa đẳng
                cấp và trách nhiệm với môi trường
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="glass-button text-white px-12 py-8 text-lg rounded-4xl hover:bg-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  Begin your sustainable future now
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Glass Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white text-center"
        >
          <div className="glass-button w-8 h-12 rounded-full mx-auto mb-2 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-white rounded-full shadow-lg"
            />
          </div>
          <p className="text-sm text-white/90 drop-shadow">Scroll</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
