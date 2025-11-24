"use client";

import { motion, useInView } from "motion/react";
import { ReactNode, useMemo, useRef } from "react";

interface AnimatedFeatureCardProps {
  children: ReactNode;
  index: number;
}

/**
 * Client component for animated feature cards with hover effects
 * Separated from server components for better SEO
 *
 * Note: This component only handles animations. Content (including icons)
 * should be passed as children from the server component.
 */
export function AnimatedFeatureCard({
  children,
  index,
}: AnimatedFeatureCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Memoize shimmer animation to prevent recreation
  const shimmerAnimation = useMemo(() => ({ x: ["0%", "200%"] }), []);
  const shimmerTransition = useMemo(
    () => ({
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: 2,
    }),
    []
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative group"
    >
      {/* Hover glow */}
      <div className="absolute -inset-1 bg-linear-to-br from-cyan-400/30 to-blue-500/30 rounded-4xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

      {/* Glass card */}
      <div className="glass-dark rounded-4xl p-8 relative overflow-hidden h-full border border-white/10">
        {/* Top light reflection */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-linear-to-b from-white/5 to-transparent rounded-t-4xl pointer-events-none" />

        {/* Shimmer on hover */}
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full opacity-0 group-hover:opacity-100"
          animate={shimmerAnimation}
          transition={shimmerTransition}
        />

        {/* Content from server component */}
        {children}
      </div>
    </motion.div>
  );
}
