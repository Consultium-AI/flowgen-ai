"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  LayoutDashboard,
  Rocket,
  Search,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import GradualBlur from "@/components/visuals/GradualBlur";
import { HOW_IT_WORKS } from "@/lib/content";
import { cn } from "@/lib/utils";

const STEP_ICONS: LucideIcon[] = [
  Search,
  LayoutDashboard,
  ShieldCheck,
  Rocket,
  TrendingUp,
];

const SAGE_MID = "#779c85";

export function Workflow() {
  const [active, setActive] = useState(0);
  const total = HOW_IT_WORKS.steps.length;
  const step = HOW_IT_WORKS.steps[active];
  const Icon = STEP_ICONS[active] ?? Search;

  const go = useCallback(
    (dir: number) =>
      setActive((i) => Math.max(0, Math.min(total - 1, i + dir))),
    [total],
  );

  return (
    <section
      id="werkwijze"
      data-navbar-theme="dark"
      className="section scroll-mt-24 workflow-scope hero-dark relative isolate overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#05110d] via-[#081612] to-[#030806]"
          style={{
            boxShadow:
              "inset 0 0 100px rgba(119,156,133,0.07), inset 0 -96px 120px rgba(3, 8, 6, 0.5)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-40 bg-gradient-to-b from-[#f1f7f4]/18 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 72% 48% at 18% 24%, rgba(119,156,133,0.16) 0%, transparent 55%),
              radial-gradient(ellipse 58% 42% at 92% 78%, rgba(53,111,79,0.12) 0%, transparent 58%),
              radial-gradient(ellipse 55% 40% at 50% 108%, rgba(159,196,170,0.08) 0%, transparent 52%)`,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.42] mix-blend-overlay"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.036) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.036) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 82% 62% at 48% 40%, #000 16%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 82% 62% at 48% 40%, #000 16%, transparent 78%)",
          }}
        />
      </div>

      <GradualBlur
        target="parent"
        position="bottom"
        height="7rem"
        strength={2.35}
        divCount={7}
        curve="bezier"
        exponential
        opacity={0.9}
        animated="scroll"
        duration="0.55s"
        easing="ease-out"
        zIndex={4}
      />

      <div className="container-narrow relative z-[10]">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-end lg:gap-12">
          <ScrollReveal delay={0.06}>
            {HOW_IT_WORKS.eyebrow ? (
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
                {HOW_IT_WORKS.eyebrow}
              </p>
            ) : null}
            <h2 className="heading-section mt-3 text-balance sm:mt-4">
              {HOW_IT_WORKS.title}
            </h2>
            {HOW_IT_WORKS.subtitle ? (
              <p className="body-lg mx-auto mt-5 max-w-2xl text-white/[0.72] lg:mx-0">
                {HOW_IT_WORKS.subtitle}
              </p>
            ) : null}
          </ScrollReveal>

          <ScrollReveal
            delay={0.14}
            className="mt-8 hidden lg:mt-0 lg:block lg:justify-self-end lg:w-full"
          >
            <div
              className="rounded-2xl border border-white/[0.1] bg-white/[0.04] p-4 backdrop-blur-md"
              role="presentation"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                Voortgang
              </p>
              <div className="mt-3 flex gap-1.5">
                {HOW_IT_WORKS.steps.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Ga naar stap ${s.id}: ${s.title}`}
                    className={cn(
                      "h-1 flex-1 rounded-full transition-all duration-500",
                      i <= active ? "bg-[#779c85]/95" : "bg-white/[0.08]",
                    )}
                  />
                ))}
              </div>
              <p className="mt-2.5 text-right font-mono text-[11px] text-white/45">
                {active + 1} / {total}
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-14 flex flex-col gap-10 lg:mt-20 lg:flex-row lg:gap-14 lg:items-stretch">
          {/* Timeline (desktop + tablet) */}
          <ScrollReveal delay={0.08} className="hidden sm:block lg:max-w-[20rem] lg:shrink-0">
            <nav aria-label="Stappen naar je dashboard">
              <div className="relative pl-1">
                <ol className="relative space-y-0">
                {HOW_IT_WORKS.steps.map((s, i) => {
                  const StepIcon = STEP_ICONS[i] ?? Search;
                  const isActive = i === active;
                  const isPast = i < active;
                  return (
                    <li key={s.id} className="relative">
                      <button
                        type="button"
                        onClick={() => setActive(i)}
                        className={cn(
                          "group relative z-10 flex w-full gap-4 rounded-2xl py-3.5 pl-1 pr-3 text-left transition-colors duration-300",
                          isActive
                            ? "bg-white/[0.06]"
                            : "hover:bg-white/[0.04]",
                        )}
                      >
                        <span className="relative flex shrink-0 flex-col items-center pt-0.5">
                          <span
                            className={cn(
                              "grid h-10 w-10 place-items-center rounded-full border transition-all duration-500",
                              isActive
                                ? "border-[#779c85]/70 bg-[#356f4f]/35 text-[#c8dfd0] shadow-[0_0_28px_rgba(119,156,133,0.28)]"
                                : isPast
                                  ? "border-white/18 bg-white/[0.06] text-[#8eb89c]"
                                  : "border-white/12 bg-white/[0.03] text-white/45",
                            )}
                          >
                            <StepIcon className="h-4 w-4" strokeWidth={1.75} />
                          </span>
                        </span>
                        <span className="min-w-0 pt-1">
                          <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                              {s.id}
                            </span>
                            <span
                              className={cn(
                                "text-sm font-semibold tracking-tight transition-colors",
                                isActive ? "text-[#c8dfd0]" : "text-white/75",
                              )}
                            >
                              {s.title}
                            </span>
                          </span>
                          <span
                            className={cn(
                              "mt-1 block text-xs leading-snug transition-colors",
                              isActive ? "text-white/68" : "text-white/48",
                            )}
                          >
                            {s.heading}
                          </span>
                        </span>
                        {isActive ? (
                          <motion.span
                            layoutId="workflow-rail-glow"
                            className="pointer-events-none absolute inset-0 rounded-2xl border border-[#779c85]/25"
                            transition={{
                              type: "spring",
                              stiffness: 420,
                              damping: 34,
                            }}
                          />
                        ) : null}
                      </button>
                    </li>
                  );
                })}
                </ol>
              </div>
            </nav>
          </ScrollReveal>

          {/* Mobile step strip */}
          <div className="sm:hidden">
            <div className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {HOW_IT_WORKS.steps.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "min-w-[11.5rem] shrink-0 snap-start rounded-2xl border px-3.5 py-3 text-left transition-colors",
                    i === active
                      ? "border-[#779c85]/45 bg-white/[0.08]"
                      : "border-white/10 bg-white/[0.03]",
                  )}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/42">
                    {s.id}
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-white/88">
                    {s.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Detail panel */}
          <div className="min-w-0 flex-1">
            <AnimatePresence mode="wait">
              <motion.article
                key={step.id}
                role="tabpanel"
                tabIndex={0}
                aria-labelledby={`workflow-step-heading-${step.id}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.21, 0.6, 0.36, 1] }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight") {
                    e.preventDefault();
                    go(1);
                  }
                  if (e.key === "ArrowLeft") {
                    e.preventDefault();
                    go(-1);
                  }
                }}
                className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.12] bg-[rgba(8,14,11,0.5)] p-7 shadow-[0_32px_100px_-64px_rgba(0,0,0,0.75)] backdrop-blur-xl sm:p-9 lg:p-11"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-50 blur-3xl"
                  style={{
                    background: `radial-gradient(circle at center, ${SAGE_MID}33 0%, transparent 70%)`,
                  }}
                />

                <div className="relative flex flex-wrap items-start justify-between gap-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/55">
                    <Icon
                      className="h-3.5 w-3.5 text-[#8eb89c]"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    {step.id} · {step.title}
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => go(-1)}
                      disabled={active === 0}
                      aria-label="Vorige stap"
                      className="grid h-10 w-10 place-items-center rounded-xl border border-white/[0.12] bg-white/[0.04] text-white/80 transition-colors hover:border-white/[0.2] hover:bg-white/[0.08] disabled:pointer-events-none disabled:opacity-35"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => go(1)}
                      disabled={active === total - 1}
                      aria-label="Volgende stap"
                      className="grid h-10 w-10 place-items-center rounded-xl border border-white/[0.12] bg-white/[0.04] text-white/80 transition-colors hover:border-white/[0.2] hover:bg-white/[0.08] disabled:pointer-events-none disabled:opacity-35"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <h3
                  id={`workflow-step-heading-${step.id}`}
                  className="relative mt-7 font-display display-tight text-balance text-3xl font-medium text-[#f1f7f4] sm:text-[2.15rem] lg:text-[2.35rem]"
                >
                  {step.heading}
                </h3>
                <p className="relative mt-5 max-w-2xl text-base leading-relaxed text-white/[0.72] sm:text-lg">
                  {step.description}
                </p>

                <Link
                  href={step.cta.href}
                  className="group relative mt-8 inline-flex min-h-[3rem] items-center justify-between gap-3 rounded-full border border-white/[0.16] bg-gradient-to-r from-[#356f4f]/90 to-[#2d5c42]/90 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_48px_-24px_rgba(53,111,79,0.65)] transition-[border-color,box-shadow] hover:border-[#779c85]/55 hover:shadow-[0_20px_56px_-20px_rgba(119,156,133,0.45)] sm:max-w-md sm:w-auto"
                >
                  <span>{step.cta.label}</span>
                  <ArrowRight
                    className="h-4 w-4 shrink-0 text-[#c8dfd0] transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
