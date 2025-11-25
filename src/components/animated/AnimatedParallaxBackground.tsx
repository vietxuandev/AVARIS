"use client";

import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";

interface AnimatedParallaxBackgroundProps {
  children: ReactNode;
  className?: string;
  speed?: number; // Parallax speed multiplier (default: 0.2)
}

/**
 * Client component for parallax backgrounds with pause on off-screen
 * Optimized for performance - only animates when in view
 */
export function AnimatedParallaxBackground({
  children,
  className = "",
  speed = 0.2,
}: AnimatedParallaxBackgroundProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Only apply parallax when in view
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", `-${speed * 100}%`]);

  return (
    <motion.div
      ref={ref}
      className={`absolute inset-0 ${className}`}
      style={{ y: isInView ? bgY : 0 }}
    >
      {children}
    </motion.div>
  );
}
