"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface AnimatedIconProps {
  children: ReactNode;
}

/**
 * Client component for animated icon with hover effects
 */
export function AnimatedIcon({ children }: AnimatedIconProps) {
  return (
    <div className="relative mb-6">
      <motion.div
        className="w-16 h-16 bg-linear-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <div className="absolute inset-0 bg-linear-to-br from-white/30 to-transparent" />
        <div className="w-8 h-8 text-white relative z-10">{children}</div>
      </motion.div>
    </div>
  );
}
