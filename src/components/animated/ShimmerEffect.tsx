"use client";

import { motion } from "motion/react";

/**
 * Reusable shimmer effect for glass cards
 * GPU-accelerated animation that creates a light sweep effect
 */
export function ShimmerEffect() {
  return (
    <motion.div
      className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full"
      animate={{ x: ["0%", "200%"] }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
    />
  );
}

/**
 * Hover shimmer effect for contact cards (cyan tinted)
 */
export function ShimmerEffectHover() {
  return (
    <motion.div
      className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full opacity-0 group-hover:opacity-100"
      animate={{ x: ["0%", "200%"] }}
      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
    />
  );
}
