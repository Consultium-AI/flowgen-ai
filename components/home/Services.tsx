"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PRICING } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="diensten" className="section scroll-mt-24">
      <SectionBackground
        variant="rings"
        shade="tint"
        accent="topRight"
        intensity="medium"
      />
      <div className="container-narrow">
        <SectionHeading eyebrow={PRICING.eyebrow} title={PRICING.title} />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {PRICING.items.map((service, i) => (
            <ScrollReveal key={service.name} delay={0.1 + i * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.45, ease: [0.21, 0.6, 0.36, 1] }}
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-2xl border p-8 shadow-card sm:p-10",
                  service.featured
                    ? "border-accent/20 bg-white"
                    : "border-border bg-white",
                )}
              >
                {/* Header row with badge */}
                <div className="flex items-center justify-between gap-3">
                  {service.featured ? (
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                      <Sparkles className="h-3 w-3" />
                      Aanbevolen
                    </span>
                  ) : (
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-soft">
                      Pakket / 0{i + 1}
                    </span>
                  )}
                </div>

                <h3 className="mt-6 font-display text-2xl font-medium text-ink sm:text-3xl">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>

                {/* Setup cost */}
                <div className="mt-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-soft">
                    Setup
                  </span>
                  <div className="mt-1 font-display text-lg font-medium text-ink">
                    {service.setup}
                  </div>
                </div>

                {/* Monthly price */}
                <div className="mt-4 flex items-baseline gap-1">
                  <span
                    className={cn(
                      "font-display display-tight text-4xl font-medium sm:text-5xl",
                      service.featured ? "text-accent" : "text-ink",
                    )}
                  >
                    {service.price}
                  </span>
                  {service.cadence && (
                    <span className="text-sm text-muted">{service.cadence}</span>
                  )}
                </div>

                <Link
                  href={service.cta.href}
                  className={cn(
                    "group/btn mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all",
                    service.featured
                      ? "bg-accent text-white hover:bg-accent-soft hover:shadow-glow"
                      : "border border-border bg-bg-elevated text-ink hover:border-accent/40 hover:text-accent",
                  )}
                >
                  {service.cta.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                </Link>

                <ul className="mt-8 space-y-3.5 border-t border-border pt-7">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-ink/85"
                    >
                      <span
                        className={cn(
                          "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                          service.featured
                            ? "bg-accent/15 text-accent"
                            : "bg-bg-elevated text-muted",
                        )}
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute -bottom-32 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100",
                    service.featured ? "bg-accent/40" : "bg-accent/15",
                  )}
                />
              </motion.article>
            </ScrollReveal>
          ))}
        </div>

        {/* Note under pricing */}
        <ScrollReveal delay={0.4}>
          <p className="mt-10 mx-auto max-w-3xl text-center text-sm leading-relaxed text-muted">
            {PRICING.note}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
