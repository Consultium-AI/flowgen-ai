"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Users,
  Megaphone,
  GraduationCap,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TARGET_AUDIENCES } from "@/lib/content";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  Users,
  Megaphone,
  GraduationCap,
  Briefcase,
};

export function Industries() {
  const [active, setActive] = useState(0);
  const item = TARGET_AUDIENCES.items[active];
  const Icon = ICONS[item.icon] ?? Briefcase;

  return (
    <section className="section">
      <SectionBackground
        variant="mesh"
        shade="warm"
        accent="bottomLeft"
        hue="plum"
        intensity="high"
      />
      <div className="container-narrow">
        <SectionHeading
          eyebrow={TARGET_AUDIENCES.eyebrow}
          title={TARGET_AUDIENCES.title}
        />

        <ScrollReveal delay={0.2}>
          <div className="mt-14 flex flex-wrap gap-2">
            {TARGET_AUDIENCES.items.map((audience, i) => {
              const I = ICONS[audience.icon] ?? Briefcase;
              const isActive = i === active;
              return (
                <button
                  key={audience.name}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "relative flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-300",
                    isActive
                      ? "border-accent/50 text-accent"
                      : "border-border bg-bg-card/40 text-muted hover:border-border hover:text-ink",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="industry-active"
                      className="absolute inset-0 -z-0 rounded-xl bg-accent/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <I className="relative z-10 h-4 w-4" />
                  <span className="relative z-10">{audience.name}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="relative mt-10 overflow-hidden rounded-2xl border border-border bg-white p-10 shadow-card sm:p-14 lg:p-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: [0.21, 0.6, 0.36, 1] }}
                className="relative grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center"
              >
                <div className="flex flex-col items-start">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl border border-accent/30 bg-accent/10 text-accent">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-display display-tight text-4xl font-medium text-ink sm:text-5xl">
                    {item.name}
                  </h3>
                </div>
                <div>
                  <p className="text-base leading-relaxed text-muted sm:text-lg">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
