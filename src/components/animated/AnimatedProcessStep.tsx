"use client";

import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";

interface AnimatedProcessStepProps {
  index: number;
  title: string;
  description: string;
  children: ReactNode; // Icon passed as children
}

/**
 * Client component for animated process steps
 * Separated for server component optimization
 */
export function AnimatedProcessStep({
  index,
  title,
  description,
  children,
}: AnimatedProcessStepProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
      className="flex flex-col items-center relative z-10"
    >
      {/* Icon Circle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{
          duration: 0.5,
          delay: 0.8 + index * 0.15,
          type: "spring",
        }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="relative mb-6"
      >
        {/* Glass outer ring */}
        <div className="relative w-32 h-32 glass-dark rounded-full p-1 shadow-2xl border border-white/10">
          {/* Inner gradient circle with icon */}
          <div className="w-full h-full rounded-full bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center relative overflow-hidden">
            {/* Top reflection */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-linear-to-b from-white/30 to-transparent rounded-t-full" />
            <div
              className="w-12 h-12 text-white relative z-10"
              style={{ strokeWidth: 2 }}
            >
              {children}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1 + index * 0.15 }}
        className="text-center"
      >
        <h3 className="text-lg mb-2 text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-cyan-100/80">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
}

/**
 * Client component for animated process timeline progress line
 */
export function AnimatedProcessTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className="hidden lg:block absolute top-16 left-0 right-0 h-1 z-0"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 2, delay: 0.5 }}
        className="h-full origin-left relative overflow-hidden"
        style={{
          background:
            "linear-gradient(90deg, rgba(34,211,238,0.3) 0%, rgba(6,182,212,0.8) 50%, rgba(34,211,238,0.3) 100%)",
        }}
      >
        {/* Flowing animation */}
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-300/50 to-transparent"
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
    </div>
  );
}

/**
 * Client component for animated certification card
 */
export function AnimatedCertificationCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 1.8 }}
      className="max-w-4xl mx-auto"
    >
      {/* Content will be passed as children */}
    </motion.div>
  );
}

interface AnimatedCertBadgeProps {
  index: number;
  name: string;
  description: string;
}

/**
 * Client component for animated certification badges
 */
export function AnimatedCertBadge({
  index,
  name,
  description,
}: AnimatedCertBadgeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.5,
        delay: 2.2 + index * 0.1,
        type: "spring",
      }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="glass-button rounded-2xl px-10 py-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10"
    >
      <p className="text-2xl mb-2 text-cyan-200">{name}</p>
      <p className="text-sm text-cyan-100/70">{description}</p>
    </motion.div>
  );
}
