"use client";

import { motion } from "motion/react";

// Animated caustics lines for water effect
const CAUSTIC_LINES = Array.from({ length: 8 }, (_, i) => i);

/**
 * Client component for animated water caustics effect
 * Separated from server components for better SEO
 */
export function AnimatedCaustics({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      {CAUSTIC_LINES.map((i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-full bg-linear-to-b from-transparent via-cyan-200/30 to-transparent"
          style={{
            left: `${10 + i * 12}%`,
            transform: `rotate(${5 + i * 2}deg)`,
          }}
          animate={{
            opacity: [0.1, 0.4, 0.1],
            x: [-15, 15, -15],
          }}
          transition={{
            duration: 6 + i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}
