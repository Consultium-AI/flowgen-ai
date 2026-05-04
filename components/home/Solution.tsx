"use client";

import {
  UserPlus,
  MailCheck,
  BellRing,
  CalendarCheck,
  Activity,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SOLUTION } from "@/lib/content";

const ICONS: Record<string, LucideIcon> = {
  UserPlus,
  MailCheck,
  BellRing,
  CalendarCheck,
  Activity,
  Settings,
};

export function Solution() {
  return (
    <section className="section">
      <SectionBackground
        variant="spotlight"
        shade="default"
        accent="center"
        intensity="high"
      />
      <div className="container-narrow">
        <SectionHeading
          eyebrow={SOLUTION.eyebrow}
          title={SOLUTION.title}
          description={SOLUTION.description}
          align="center"
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTION.features.map((feature, i) => {
            const Icon = ICONS[feature.icon] ?? Activity;
            return (
              <ScrollReveal key={feature.title} delay={0.1 + i * 0.08}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: [0.21, 0.6, 0.36, 1] }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-card sm:p-10"
                >
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="grid h-14 w-14 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/15">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-medium text-ink">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {feature.description}
                    </p>
                  </div>

                  <div
                    aria-hidden
                    className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
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
