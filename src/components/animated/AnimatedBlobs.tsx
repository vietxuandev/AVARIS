/**
 * Optimized CSS-based animated floating blobs
 * Uses GPU-accelerated CSS animations instead of JavaScript
 * Server component compatible - no "use client" needed
 */
export function AnimatedBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-linear-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-[120px] animate-float-blob-1" />
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-linear-to-br from-blue-500/20 to-cyan-400/15 rounded-full blur-[140px] animate-float-blob-2" />
    </div>
  );
}
