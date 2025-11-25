"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ReactNode, useRef } from "react";

interface AnimatedBackgroundProps {
  children: ReactNode;
  className?: string;
}

/**
 * Client component for animated parallax background
 * Separated from server components for better SEO
 */
export function AnimatedBackground({
  children,
  className = "",
}: AnimatedBackgroundProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <motion.div ref={ref} className={className} style={{ y: bgY }}>
      {children}
    </motion.div>
  );
}
