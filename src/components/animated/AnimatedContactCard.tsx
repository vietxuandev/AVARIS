"use client";

import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
import { ShimmerEffectHover } from "./ShimmerEffect";

interface AnimatedContactCardProps {
  index: number;
  label: string;
  value: string;
  href: string;
  children: ReactNode; // Icon passed as children
}

/**
 * Client component for animated contact cards
 * Separated for server component optimization
 */
export function AnimatedContactCard({
  index,
  label,
  value,
  href,
  children,
}: AnimatedContactCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.a
      ref={ref}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
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
        <ShimmerEffectHover />

        <div className="flex items-center gap-5 relative z-10">
          <div className="w-14 h-14 bg-linear-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-white/30 to-transparent" />
            <div className="w-7 h-7 text-white relative z-10">{children}</div>
          </div>
          <div>
            <p className="text-cyan-300/70 text-sm mb-1">{label}</p>
            <p className="text-white text-xl">{value}</p>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

/**
 * Client component for animated contact header
 */
export function AnimatedContactHeader() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      {/* Content will be passed as children */}
    </motion.div>
  );
}
