"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  external,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const pointerRef = useRef<{ clientX: number; clientY: number } | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xs = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const ys = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    pointerRef.current = { clientX: e.clientX, clientY: e.clientY };

    if (rafRef.current !== null) return;

    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      const pointer = pointerRef.current;
      const rect = ref.current?.getBoundingClientRect();
      if (!pointer || !rect) return;

      const relX = pointer.clientX - rect.left - rect.width / 2;
      const relY = pointer.clientY - rect.top - rect.height / 2;
      x.set(relX * 0.25);
      y.set(relY * 0.35);
    });
  };

  const reset = () => {
    pointerRef.current = null;
    if (rafRef.current !== null) {
      window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    x.set(0);
    y.set(0);
  };

  const baseClasses =
    "relative inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-sm font-semibold transition-colors duration-300 will-change-transform";

  const variants = {
    primary: "bg-accent text-white hover:bg-accent-soft shadow-glow-soft hover:shadow-glow",
    secondary: "border border-border bg-white text-slate-950 shadow-card hover:bg-white/90 hover:text-slate-950",
    ghost: "text-ink/80 hover:text-ink",
  };

  const inner = (
    <motion.span
      className={cn(baseClasses, variants[variant], className)}
      style={{ x: xs, y: ys }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.span>
  );

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className="inline-block"
    >
      {href ? (
        external ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {inner}
          </a>
        ) : (
          <Link href={href}>{inner}</Link>
        )
      ) : (
        <button onClick={onClick} type="button" className="bg-transparent p-0">
          {inner}
        </button>
      )}
    </div>
  );
}
