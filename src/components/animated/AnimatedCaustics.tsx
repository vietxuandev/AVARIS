// Animated caustics lines for water effect
const CAUSTIC_LINES = Array.from({ length: 8 }, (_, i) => i);

/**
 * Optimized CSS-based water caustics effect
 * Uses GPU-accelerated CSS animations instead of JavaScript
 * Server component compatible - no "use client" needed
 */
export function AnimatedCaustics({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      {CAUSTIC_LINES.map((i) => (
        <div
          key={i}
          className="absolute w-1 h-full bg-linear-to-b from-transparent via-cyan-200/30 to-transparent animate-caustic"
          style={{
            left: `${10 + i * 12}%`,
            transform: `rotate(${5 + i * 2}deg)`,
            animation: `caustic-flow ${6 + i * 1.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
    </div>
  );
}
