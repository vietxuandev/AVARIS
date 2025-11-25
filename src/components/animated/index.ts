/**
 * Animated client components for SEO-friendly server components
 * These components handle all client-side animations and interactions
 * while allowing parent components to be server-rendered for better SEO
 */

export { AnimatedBackground } from "./AnimatedBackground";
export { AnimatedBlobs } from "./AnimatedBlobs";
export { AnimatedCaustics } from "./AnimatedCaustics";
export { AnimatedFeatureCard } from "./AnimatedFeatureCard";
export {
  AnimatedHeroBackground,
  AnimatedHeroContent,
  AnimatedLightRays,
  HeroTextAnimation,
} from "./AnimatedHero";
export { AnimatedIcon } from "./AnimatedIcon";
export { AnimatedSection } from "./AnimatedSection";
export { AnimatedStat } from "./AnimatedStat";

// Impact Section components
export {
  AnimatedImpactCard,
  AnimatedBenefitCard,
  AnimatedSectionHeader,
} from "./AnimatedImpactCard";

// Process Section components
export {
  AnimatedProcessStep,
  AnimatedProcessTimeline,
  AnimatedCertificationCard,
  AnimatedCertBadge,
} from "./AnimatedProcessStep";

// Contact Section components
export {
  AnimatedContactCard,
  AnimatedContactHeader,
} from "./AnimatedContactCard";

// Parallax Background component with pause optimization
export { AnimatedParallaxBackground } from "./AnimatedParallaxBackground";

// Reusable shimmer effects
export { ShimmerEffect, ShimmerEffectHover } from "./ShimmerEffect";
