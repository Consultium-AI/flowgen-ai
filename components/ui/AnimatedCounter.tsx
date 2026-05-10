"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useTransform, motion } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  format?: (n: number) => string;
  className?: string;
}

export function AnimatedCounter({
  value,
  duration = 1.2,
  format = (n) => Math.round(n).toLocaleString("nl-NL"),
  className,
}: AnimatedCounterProps) {
  const motionValue = useMotionValue(0);
  const display = useTransform(motionValue, (latest) => format(latest));
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, value, {
      duration,
      ease: [0.21, 0.6, 0.36, 1],
    });
    return () => controls.stop();
  }, [value, motionValue, duration, inView]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}
