"use client";

import {
  SearchX,
  ClockAlert,
  ShieldAlert,
  Code,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROBLEMS } from "@/lib/content";

const ICONS: Record<string, LucideIcon> = {
  SearchX,
  ClockAlert,
  ShieldAlert,
  Code,
};

export function Features() {
  return (
    <section className="section">
      <SectionBackground
        variant="dots"
        shade="tint"
        accent="top"
        intensity="medium"
      />
      <div className="container-narrow">
        <SectionHeading
          eyebrow={PROBLEMS.eyebrow}
          title={PROBLEMS.title}
          description={PROBLEMS.description}
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {PROBLEMS.items.map((problem, i) => {
            const Icon = ICONS[problem.icon] ?? SearchX;
            return (
              <ScrollReveal key={problem.title} delay={0.1 + i * 0.1}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: [0.21, 0.6, 0.36, 1] }}
                  className="card-glow group relative h-full overflow-hidden p-8 sm:p-10"
                >
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="grid h-14 w-14 place-items-center rounded-xl border border-border bg-bg-elevated text-red-400/80 transition-colors duration-300 group-hover:border-red-400/30 group-hover:bg-red-400/10">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-soft">
                      0{i + 1} / Probleem
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-medium text-ink">
                      {problem.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {problem.description}
                    </p>
                  </div>

                  <div
                    aria-hidden
                    className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-red-400/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                </motion.article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
