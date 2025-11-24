"use client";

import { motion, useInView } from "motion/react";
import { useCountUp } from "@/hooks/useCountUp";
import { useRef } from "react";

interface AnimatedStatProps {
  end: number;
  suffix: string;
  label: string;
  index: number;
}

/**
 * Client component for animated counting statistics
 * Separated from server components for better SEO
 */
export function AnimatedStat({ end, suffix, label, index }: AnimatedStatProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Use the counting animation hook
  const { ref: countRef, displayValue } = useCountUp({ end, suffix });

  return (
    <motion.div
      ref={containerRef}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
      className="text-center"
    >
      <div
        ref={countRef}
        className="text-5xl md:text-6xl mb-3 bg-linear-to-br from-cyan-300 via-blue-300 to-cyan-400 bg-clip-text text-transparent"
      >
        {displayValue}
      </div>
      <div className="text-cyan-100/80">{label}</div>
    </motion.div>
  );
}
