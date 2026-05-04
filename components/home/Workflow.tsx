"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  LayoutDashboard,
  ShieldCheck,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HOW_IT_WORKS } from "@/lib/content";
import { cn } from "@/lib/utils";

const STEP_ICONS = [Search, LayoutDashboard, ShieldCheck, Rocket, TrendingUp];

export function Workflow() {
  const [active, setActive] = useState(0);
  const step = HOW_IT_WORKS.steps[active];

  return (
    <section className="section">
      <SectionBackground
        variant="lines"
        shade="cool"
        accent="right"
        hue="cyan"
        intensity="medium"
      />
      <div className="container-narrow">
        <SectionHeading eyebrow={HOW_IT_WORKS.eyebrow} title={HOW_IT_WORKS.title} />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left: step indicators */}
          <ScrollReveal>
            <div className="relative flex flex-col gap-0 rounded-2xl border border-border bg-white p-6 shadow-card sm:p-8">
              {HOW_IT_WORKS.steps.map((s, i) => {
                const Icon = STEP_ICONS[i];
                const isActive = i === active;
                const isCompleted = i < active;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      "group relative flex items-start gap-4 rounded-xl px-4 py-4 text-left transition-all duration-300",
                      isActive
                        ? "bg-accent/5"
                        : "hover:bg-bg-elevated/60",
                    )}
                  >
                    <div
                      className={cn(
                        "grid h-10 w-10 shrink-0 place-items-center rounded-xl border transition-all duration-300",
                        isActive
                          ? "border-accent/40 bg-accent/10 text-accent"
                          : isCompleted
                            ? "border-accent/20 bg-accent/5 text-accent/60"
                            : "border-border bg-bg-elevated text-muted",
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-soft">
                          {s.id}
                        </span>
                        <span
                          className={cn(
                            "text-sm font-semibold transition-colors",
                            isActive ? "text-accent" : "text-ink/80",
                          )}
                        >
                          {s.title}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-muted line-clamp-1">
                        {s.heading}
                      </p>
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="step-indicator"
                        className="absolute inset-0 rounded-xl border border-accent/20"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}

            </div>
          </ScrollReveal>

          {/* Right: step detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease: [0.21, 0.6, 0.36, 1] }}
              className="rounded-2xl border border-border bg-white p-8 shadow-card sm:p-10 lg:p-12"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {step.id} &middot; {step.title}
              </span>
              <h3 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">
                {step.heading}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {step.description}
              </p>
              <Link
                href={step.cta.href}
                className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-soft hover:shadow-glow"
              >
                {step.cta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
