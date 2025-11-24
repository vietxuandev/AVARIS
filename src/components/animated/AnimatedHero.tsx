"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ReactNode, useMemo } from "react";

// Move array outside component to prevent recreation
const LIGHT_RAYS = Array.from({ length: 5 }, (_, i) => i);

interface AnimatedHeroBackgroundProps {
  children: ReactNode;
}

/**
 * Client component for animated hero background with parallax
 */
export function AnimatedHeroBackground({
  children,
}: AnimatedHeroBackgroundProps) {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <motion.div className="absolute inset-0" style={{ y: bgY }}>
      {children}
    </motion.div>
  );
}

interface AnimatedHeroContentProps {
  children: ReactNode;
}

/**
 * Client component for animated hero content with fade on scroll
 */
export function AnimatedHeroContent({ children }: AnimatedHeroContentProps) {
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 1000], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <motion.div
      className="relative z-10 h-full flex items-center justify-center"
      style={{ y: contentY, opacity }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Client component for animated light rays overlay
 */
export function AnimatedLightRays() {
  // Memoize animation props to prevent object recreation
  const opacityAnimation = useMemo(() => ({ opacity: [0.2, 0.4, 0.2] }), []);
  const opacityTransition = useMemo(
    () => ({ duration: 5, repeat: Infinity, ease: "easeInOut" as const }),
    []
  );

  return (
    <div className="absolute inset-0 pointer-events-none">
      {LIGHT_RAYS.map((i) => (
        <motion.div
          key={i}
          className="absolute top-0 w-2 h-full bg-linear-to-b from-cyan-200/20 via-cyan-100/10 to-transparent"
          style={{
            left: `${15 + i * 20}%`,
            transform: `rotate(${-8 + i * 4}deg) translateY(-50%)`,
          }}
          animate={opacityAnimation}
          transition={{
            ...opacityTransition,
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}

interface HeroTextAnimationProps {
  children: ReactNode;
  delay?: number;
}

/**
 * Client component for animating hero text
 */
export function HeroTextAnimation({
  children,
  delay = 0,
}: HeroTextAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}
