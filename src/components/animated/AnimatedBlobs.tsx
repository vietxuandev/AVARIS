"use client";

import { motion } from "motion/react";

/**
 * Client component for animated floating blobs
 * Separated from server components for better SEO
 */
export function AnimatedBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-linear-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -90, 0],
          y: [0, 70, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-linear-to-br from-blue-500/20 to-cyan-400/15 rounded-full blur-[140px]"
      />
    </div>
  );
}
