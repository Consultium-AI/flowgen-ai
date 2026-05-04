"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SERVICES, WORKFLOW } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ServicesContent() {
  return (
    <>
      <section
        data-navbar-theme="dark"
        className="hero-dark relative isolate overflow-hidden pb-24 pt-36 sm:pt-44 lg:pt-52"
      >
        <SectionBackground
          variant="rings"
          shade="dark"
          accent="center"
          intensity="high"
        />
        <div className="container-narrow relative">
          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                {SERVICES.eyebrow}
              </span>
              <h1 className="mt-5 font-display display-tight text-display-lg font-medium text-ink text-balance">
                AI Operations Dashboards op maat.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                Van lead tracking tot workflow monitoring. Kies een pakket dat past
                bij jouw fase en behoud volledige controle via overzichtelijke
                dashboards.
              </p>
              <div className="mt-10">
                <MagneticButton href="/contact" variant="primary">
                  Plan een gratis workflow-scan
                  <ArrowRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section pt-20">
        <SectionBackground
          variant="rings"
          shade="tint"
          accent="topRight"
          intensity="medium"
        />
        <div className="container-narrow">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="eyebrow">{SERVICES.eyebrow}</span>
              <h2 className="heading-section mt-5 text-balance">
                {SERVICES.title}
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {SERVICES.items.map((service, i) => (
              <ServiceCard key={service.name} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <SectionBackground
          variant="lines"
          shade="cool"
          accent="right"
          hue="cyan"
          intensity="medium"
        />
        <div className="container-narrow">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="eyebrow">{WORKFLOW.eyebrow}</span>
              <h2 className="heading-section mt-5 text-balance">
                Van handmatig proces naar werkend AI-dashboard.
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {WORKFLOW.steps.map((step) => (
              <ScrollReveal key={step.id} delay={Number(step.id) * 0.06}>
                <div className="relative h-full rounded-2xl border border-border bg-white p-7 shadow-card">
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    {step.id}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-medium text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-10">
        <SectionBackground
          variant="spotlight"
          shade="dim"
          accent="center"
          intensity="high"
        />
        <div className="container-narrow">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-white p-12 text-center shadow-card sm:p-20">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
              />
              <h2 className="relative heading-section text-balance">
                Klaar om overzicht te cre&euml;ren?
              </h2>
              <p className="relative mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                Plan een korte workflow-scan. We kijken samen welk proces het meeste
                tijd kost en of het geschikt is voor een eerste AI-dashboard pilot.
              </p>
              <div className="relative mt-8 flex justify-center">
                <MagneticButton href="/contact" variant="primary">
                  Plan workflow-scan
                  <ArrowRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES.items)[number];
  index: number;
}) {
  return (
    <ScrollReveal delay={0.1 + index * 0.1}>
      <motion.article
        whileHover={{ y: -8 }}
        transition={{ duration: 0.45, ease: [0.21, 0.6, 0.36, 1] }}
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-2xl border p-8 shadow-card sm:p-10",
          service.featured ? "border-accent/20 bg-white" : "border-border bg-white",
        )}
      >
        <div className="flex items-center justify-between gap-3">
          {service.featured ? (
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
              <Sparkles className="h-3 w-3" />
              Aanbevolen
            </span>
          ) : (
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-soft">
              Pakket / 0{index + 1}
            </span>
          )}
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-soft">
            0{index + 1}
          </span>
        </div>

        <h3 className="mt-6 font-display text-2xl font-medium text-ink sm:text-3xl">
          {service.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {service.description}
        </p>

        <div className="mt-7 flex items-baseline gap-1">
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
          target={service.cta.href.startsWith("http") ? "_blank" : undefined}
          rel={service.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm text-ink/85"
            >
              <span
                className={cn(
                  "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                  service.featured ? "bg-accent/15 text-accent" : "bg-bg-elevated text-muted",
                )}
              >
                <Check className="h-3 w-3" />
              </span>
              {feature}
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
  );
}
