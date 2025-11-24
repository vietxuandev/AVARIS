/**
 * Memoized Feature Card Component
 * This component is wrapped with React.memo to prevent unnecessary re-renders
 * when parent components update but props haven't changed.
 */

import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { memo, useMemo } from "react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  isInView: boolean;
}

// Memoize animation objects outside component
const createHoverAnimation = () => ({ y: -10, scale: 1.02 });
const createShimmerAnimation = () => ({ x: ["0%", "200%"] });
const createShimmerTransition = () => ({
  duration: 1.5,
  repeat: Infinity,
  repeatDelay: 2,
});

const FeatureCardComponent = ({
  icon: Icon,
  title,
  description,
  index,
  isInView,
}: FeatureCardProps) => {
  // Memoize animation props
  const initialAnimation = useMemo(() => ({ opacity: 0, y: 60 }), []);
  const animateProps = useMemo(
    () => (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }),
    [isInView]
  );
  const transitionProps = useMemo(
    () => ({ duration: 0.7, delay: 0.1 + index * 0.1 }),
    [index]
  );
  const iconHoverProps = useMemo(() => ({ scale: 1.1, rotate: 5 }), []);

  return (
    <motion.div
      initial={initialAnimation}
      animate={animateProps}
      transition={transitionProps}
      whileHover={createHoverAnimation()}
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
          animate={createShimmerAnimation()}
          transition={createShimmerTransition()}
        />

        {/* Icon */}
        <div className="relative mb-6">
          <motion.div
            className="w-16 h-16 bg-linear-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden"
            whileHover={iconHoverProps}
          >
            <div className="absolute inset-0 bg-linear-to-br from-white/30 to-transparent" />
            <Icon className="w-8 h-8 text-white relative z-10" />
          </motion.div>
        </div>

        {/* Content */}
        <h3 className="text-2xl mb-4 text-white">{title}</h3>
        <p className="text-cyan-100/80 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

// Export memoized version
// This will only re-render when props actually change
export const FeatureCard = memo(FeatureCardComponent);
