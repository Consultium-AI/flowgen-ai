"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientBlobProps {
  className?: string;
  size?: number;
  color?: string;
  opacity?: number;
}

export function GradientBlob({
  className,
  size = 600,
  color = "rgba(198, 255, 61, 0.18)",
  opacity = 1,
}: GradientBlobProps) {
  return (
    <motion.div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full blur-3xl", className)}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity,
      }}
      animate={{
        scale: [1, 1.15, 1],
        rotate: [0, 90, 0],
      }}
      transition={{
        duration: 22,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
