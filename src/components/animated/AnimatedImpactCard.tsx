"use client";

import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
import { ShimmerEffect } from "./ShimmerEffect";

interface AnimatedImpactCardProps {
  index: number;
  number: string;
  label: string;
  description: string;
  children: ReactNode; // Icon passed as children
}

/**
 * Client component for animated impact stat cards
 * Separated for server component optimization
 */
export function AnimatedImpactCard({
  index,
  number,
  label,
  description,
  children,
}: AnimatedImpactCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: 0.1 + index * 0.1,
        type: "spring",
      }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="relative group"
    >
      {/* Hover glow */}
      <div className="absolute -inset-1 bg-linear-to-br from-cyan-400/40 to-blue-500/40 rounded-4xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

      {/* Glass card */}
      <div className="glass-card rounded-4xl p-8 relative overflow-hidden h-full">
        {/* Top reflection */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-linear-to-b from-white/60 to-transparent rounded-t-4xl pointer-events-none" />

        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="relative mb-6"
        >
          <div className="w-14 h-14 bg-linear-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-white/30 to-transparent" />
            <div className="w-7 h-7 text-white relative z-10">{children}</div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="text-center relative z-10">
          <div className="text-5xl mb-3 bg-linear-to-br from-cyan-700 to-blue-700 bg-clip-text text-transparent">
            {number}
          </div>
          <div className="text-lg mb-2 text-cyan-900">{label}</div>
          <div className="text-sm text-cyan-700">{description}</div>
        </div>
      </div>
    </motion.div>
  );
}

interface AnimatedBenefitCardProps {
  index: number;
  title: string;
  description: string;
  children: ReactNode; // Icon passed as children
}

/**
 * Client component for animated benefit cards
 * Separated for server component optimization
 */
export function AnimatedBenefitCard({
  index,
  title,
  description,
  children,
}: AnimatedBenefitCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.4 + index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative group"
    >
      {/* Hover glow */}
      <div className="absolute -inset-1 bg-linear-to-br from-cyan-400/30 to-blue-500/30 rounded-4xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

      {/* Glass card */}
      <div className="glass-card rounded-4xl p-8 relative overflow-hidden h-full">
        {/* Top reflection */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-linear-to-b from-white/60 to-transparent rounded-t-4xl pointer-events-none" />

        {/* Shimmer */}
        <ShimmerEffect />

        {/* Icon */}
        <div className="relative mb-6">
          <motion.div
            className="w-16 h-16 bg-linear-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-white/40 to-transparent" />
            <div className="w-8 h-8 text-white relative z-10">{children}</div>
          </motion.div>
        </div>

        {/* Content */}
        <h3 className="text-2xl mb-4 relative z-10 text-cyan-950">{title}</h3>
        <p className="leading-relaxed relative z-10 text-cyan-800">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

interface AnimatedSectionHeaderProps {
  badge: string;
  children: ReactNode;
  description: string;
}

/**
 * Client component for animated section headers
 * Reusable across sections
 */
export function AnimatedSectionHeader({
  badge,
  children,
  description,
}: AnimatedSectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      <p className="tracking-[0.3em] uppercase mb-8 text-sm text-cyan-600">
        {badge}
      </p>

      <h2 className="text-5xl md:text-6xl lg:text-7xl mb-8">{children}</h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl text-cyan-800 max-w-3xl mx-auto leading-relaxed"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
