"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface CountingStatProps {
  value: string;
  label: string;
  index: number;
  isInViewParent: boolean;
  className?: string;
}

export function CountingStat({
  value,
  label,
  index,
  isInViewParent,
  className = "",
}: CountingStatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState<string>("");

  useEffect(() => {
    if (!isInView || !isInViewParent) return;

    // Parse the value to extract number and suffix
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseInt(match[1]);
    const suffix = match[2];
    const duration = 2000;
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      const currentValue = Math.floor(easeOutQuart * targetNumber);
      setDisplayValue(`${currentValue}${suffix}`);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, isInViewParent, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInViewParent ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
      className={className}
    >
      <div className="text-3xl md:text-4xl mb-2 font-semibold text-white drop-shadow-md">
        {displayValue || value}
      </div>
      <div className="text-sm text-white/90 font-medium">{label}</div>
    </motion.div>
  );
}
