"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ReactNode } from "react";

interface AnimatedBackgroundProps {
  children: ReactNode;
  className?: string;
}

/**
 * Client component for animated parallax background
 * Separated from server components for better SEO
 *
 * Note: This component uses viewport scroll progress, not target-based scroll.
 * It will animate based on the page scroll position.
 */
export function AnimatedBackground({
  children,
  className = "",
}: AnimatedBackgroundProps) {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 2000], ["0%", "30%"]);

  return (
    <motion.div className={className} style={{ y: bgY }}>
      {children}
    </motion.div>
  );
}
