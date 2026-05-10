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
import { SOLUTION } from "@/lib/content";

const ICONS: Record<string, LucideIcon> = {
  UserPlus,
  MailCheck,
  BellRing,
  CalendarCheck,
  Activity,
  Settings,
};

const iconChip =
  "grid h-[3.25rem] w-[3.25rem] shrink-0 place-items-center rounded-xl border border-[rgba(119,156,133,0.42)] bg-[rgba(119,156,133,0.11)] text-[#356f4f] transition-colors duration-300 group-hover:border-[rgba(53,111,79,0.35)] group-hover:bg-[rgba(119,156,133,0.16)]";

const sageLine = "rgba(119, 156, 133, 0.09)";

export function Solution() {
  return (
    <section className="section relative isolate overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #f8fbf9 0%, #f1f7f4 38%, #f6f9f7 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 88% 50% at 50% -6%, rgba(119,156,133,0.14) 0%, transparent 55%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(53,111,79,0.06) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.6]"
          style={{
            backgroundImage: `linear-gradient(${sageLine} 1px, transparent 1px), linear-gradient(90deg, ${sageLine} 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 84% 64% at 50% 45%, #000 24%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 84% 64% at 50% 45%, #000 24%, transparent 80%)",
          }}
        />
      </div>

      <div className="container-narrow relative">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal delay={0.08}>
            {SOLUTION.eyebrow ? (
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#356f4f]/80">
                {SOLUTION.eyebrow}
              </p>
            ) : null}
            <h2 className="heading-section mt-3 text-[#14221a] sm:mt-4">
              {SOLUTION.title}
            </h2>
            <p className="body-lg mx-auto mt-5 max-w-2xl text-muted">
              {SOLUTION.description}
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-3">
          {SOLUTION.features.map((feature, i) => {
            const Icon = ICONS[feature.icon] ?? Activity;
            return (
              <ScrollReveal key={feature.title} delay={0.1 + i * 0.06}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.35, ease: [0.21, 0.6, 0.36, 1] }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/85 bg-white/90 p-7 shadow-[0_22px_60px_-40px_rgba(15,40,28,0.25)] backdrop-blur-sm sm:p-8"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-[rgba(119,156,133,0.08)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className={`relative z-10 ${iconChip}`}>
                    <Icon className="h-[1.35rem] w-[1.35rem]" strokeWidth={1.65} />
                  </div>
                  <h3 className="relative z-10 mt-5 font-display text-xl font-medium text-ink">
                    {feature.title}
                  </h3>
                  <p className="relative z-10 mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </motion.article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
