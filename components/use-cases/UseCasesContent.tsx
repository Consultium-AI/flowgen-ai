"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ } from "@/components/home/FAQ";
import { USE_CASES } from "@/lib/content";
import { cn } from "@/lib/utils";

export function UseCasesContent() {
  const [active, setActive] = useState<string>("all");
  const filtered =
    active === "all"
      ? USE_CASES.cases
      : USE_CASES.cases.filter((c) => c.id === active);

  return (
    <>
      {/* Hero */}
      <section
        data-navbar-theme="dark"
        className="hero-dark relative isolate overflow-hidden pb-24 pt-36 sm:pt-44"
      >
        <SectionBackground
          variant="aurora"
          shade="dark"
          accent="top"
          intensity="high"
        />
        <div className="container-narrow relative">
          <ScrollReveal delay={0.1}>
            <h1 className="heading-display max-w-3xl text-balance">
              {USE_CASES.hero.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted">
              {USE_CASES.hero.subtitle}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-2">
              <FilterChip
                active={active === "all"}
                onClick={() => setActive("all")}
                label="Alle cases"
              />
              {USE_CASES.hero.tabs.map((t) => (
                <FilterChip
                  key={t.id}
                  active={active === t.id}
                  onClick={() => setActive(t.id)}
                  label={t.label}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Cases */}
      <section className="relative isolate overflow-hidden pb-12 pt-14">
        <SectionBackground
          variant="dots"
          shade="tint"
          accent="topRight"
          intensity="medium"
        />
        <div className="container-narrow">
          <div className="space-y-6">
            {filtered.map((c, i) => (
              <CaseCard key={c.id} caseItem={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process compare */}
      <section className="section">
        <SectionBackground
          variant="split"
          shade="default"
          accent="center"
          intensity="medium"
        />
        <div className="container-narrow">
          <SectionHeading
            eyebrow={USE_CASES.compare.eyebrow}
            title={USE_CASES.compare.title}
            align="center"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <ScrollReveal>
              <div className="rounded-2xl border border-border bg-white p-7 shadow-card">
                <h3 className="text-lg font-medium text-muted">
                  {USE_CASES.compare.manual.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {USE_CASES.compare.manual.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-border/60 bg-bg/40 px-4 py-3 text-sm text-muted"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-muted/10 text-muted-soft">
                        <X className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-white p-7 shadow-card">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/15 blur-3xl"
                />
                <h3 className="text-lg font-medium text-accent">
                  {USE_CASES.compare.ours.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {USE_CASES.compare.ours.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-accent/15 bg-accent/[0.04] px-4 py-3 text-sm text-ink"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
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
                className="pointer-events-none absolute inset-0 opacity-40"
              >
                <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
              </div>
              <h2 className="relative heading-section text-balance">
                {USE_CASES.finalCta.title}
              </h2>
              <div className="relative mt-8 flex justify-center">
                <MagneticButton
                  href={USE_CASES.finalCta.button.href}
                  variant="primary"
                  external
                >
                  {USE_CASES.finalCta.button.label}
                  <ArrowRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FAQ />
    </>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-300",
        active
          ? "border-accent/60 text-accent"
          : "border-border bg-bg-card/40 text-muted hover:text-ink",
      )}
    >
      {active && (
        <motion.span
          layoutId="usecase-chip"
          className="absolute inset-0 -z-0 rounded-xl bg-accent/10"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </button>
  );
}

function CaseCard({
  caseItem,
  index,
}: {
  caseItem: (typeof USE_CASES.cases)[number];
  index: number;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.05 * index, ease: [0.21, 0.6, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-white p-10 shadow-card sm:p-14 lg:p-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
      />
      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            {caseItem.sector}
          </span>
          <h3 className="mt-4 font-display display-tight text-4xl font-medium text-ink sm:text-5xl">
            {caseItem.title}
          </h3>

          <div className="mt-8 space-y-5">
            <DetailRow label="Uitkomst" value={caseItem.uitkomst} />
            <DetailRow label="Stack" value={caseItem.stack} />
          </div>

          <div className="mt-8">
            <Link
              href={caseItem.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-soft hover:shadow-glow"
            >
              {caseItem.cta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Workflow
          </h4>
          <ol className="mt-5 space-y-3">
            {caseItem.workflow.map((step, i) => (
              <li
                key={step}
                className="relative flex items-start gap-4 rounded-2xl border border-border bg-bg-elevated/40 px-4 py-3.5 text-sm text-ink"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent/15 text-xs font-medium text-accent">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </motion.article>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-bg-elevated/40 p-4">
      <h5 className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
        {label}
      </h5>
      <p className="mt-2 text-base text-ink">{value}</p>
    </div>
  );
}
