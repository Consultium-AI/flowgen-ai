"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calculator, Clock, Euro, Users } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ROI } from "@/lib/content";
import { formatCurrency } from "@/lib/utils";

export function ROICalculator() {
  const [team, setTeam] = useState(ROI.team.default);
  const [hours, setHours] = useState(ROI.hours.default);
  const [rate, setRate] = useState(ROI.rate.default);

  const { hoursPerMonth, costPerMonth } = useMemo(() => {
    const hpm = team * hours * 4;
    const cpm = hpm * rate;
    return { hoursPerMonth: hpm, costPerMonth: cpm };
  }, [team, hours, rate]);

  return (
    <section className="section">
      <SectionBackground
        variant="spotlight"
        shade="default"
        accent="center"
        intensity="high"
      />
      <div className="container-narrow">
        <SectionHeading eyebrow={ROI.eyebrow} title={ROI.title} align="center" />

        <ScrollReveal delay={0.2}>
          <div className="relative mx-auto mt-16 max-w-6xl overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-card sm:p-8 lg:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
            />
            <div className="relative grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
              <div className="rounded-2xl border border-border bg-white/75 p-6 shadow-sm sm:p-8">
                <div className="mb-8 max-w-md">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    Bereken je verlies
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-medium text-ink">
                    Pas de waardes aan en zie direct hoeveel tijd er weglekt.
                  </h3>
                </div>

                <div className="space-y-8">
                  <Slider
                    icon={<Users className="h-4 w-4" />}
                    label={ROI.team.label}
                    value={team}
                    min={ROI.team.min}
                    max={ROI.team.max}
                    onChange={setTeam}
                    display={`${team}${ROI.team.suffix}`}
                    minLabel={`${ROI.team.min}`}
                    maxLabel={`${ROI.team.max}`}
                  />
                  <Slider
                    icon={<Clock className="h-4 w-4" />}
                    label={ROI.hours.label}
                    helper={ROI.hours.helper}
                    value={hours}
                    min={ROI.hours.min}
                    max={ROI.hours.max}
                    onChange={setHours}
                    display={`${hours}${ROI.hours.suffix}`}
                    minLabel={`${ROI.hours.min} uur`}
                    maxLabel={`${ROI.hours.max} uur`}
                  />
                  <Slider
                    icon={<Euro className="h-4 w-4" />}
                    label={ROI.rate.label}
                    value={rate}
                    min={ROI.rate.min}
                    max={ROI.rate.max}
                    onChange={setRate}
                    display={`${ROI.rate.prefix}${rate}${ROI.rate.suffix}`}
                    minLabel={`${ROI.rate.prefix}${ROI.rate.min}`}
                    maxLabel={`${ROI.rate.prefix}${ROI.rate.max}`}
                  />
                </div>
              </div>

              <div className="relative flex min-h-[430px] flex-col justify-between gap-6 rounded-2xl border border-border bg-gradient-to-br from-bg-elevated to-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted">
                  <Calculator className="h-3.5 w-3.5" />
                  Resultaat
                </div>

                <div className="space-y-5 leading-tight">
                  <div className="font-display display-tight text-balance text-3xl font-medium text-ink sm:text-4xl lg:text-5xl">
                    Je verliest{" "}
                    <span className="text-accent">
                      ~
                      <AnimatedCounter
                        value={hoursPerMonth}
                        format={(n) => Math.round(n).toLocaleString("nl-NL")}
                      />{" "}
                      uur/maand
                    </span>{" "}
                    aan repetitieve taken.
                  </div>
                  <div className="text-balance text-base text-muted sm:text-lg">
                    Dat is{" "}
                    <span className="font-display font-medium text-ink">
                      <AnimatedCounter
                        value={costPerMonth}
                        format={(n) => formatCurrency(n)}
                      />
                      /maand
                    </span>{" "}
                    aan tijdskosten.
                  </div>
                </div>

                <Link
                  href={ROI.cta.href}
                  className="group inline-flex items-center justify-between gap-3 rounded-xl border border-border bg-white px-5 py-4 text-sm font-semibold text-ink shadow-sm transition-all hover:border-accent/40 hover:bg-accent/5"
                >
                  <span>{ROI.cta.label}</span>
                  <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Slider({
  icon,
  label,
  helper,
  value,
  min,
  max,
  onChange,
  display,
  minLabel,
  maxLabel,
}: {
  icon: React.ReactNode;
  label: string;
  helper?: string;
  value: number;
  min: number;
  max: number;
  onChange: (n: number) => void;
  display: string;
  minLabel: string;
  maxLabel: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium text-ink">
          <span className="grid h-7 w-7 place-items-center rounded-lg border border-border bg-bg-elevated text-accent">
            {icon}
          </span>
          {label}
        </div>
        <motion.span
          key={display}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg bg-accent/10 px-3 py-1 text-sm font-semibold text-accent"
        >
          {display}
        </motion.span>
      </div>
      <div className="relative">
        <div
          aria-hidden
          className="absolute left-0 top-1/2 h-1.5 -translate-y-1/2 rounded-md bg-accent"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-label={label}
          className="relative z-10"
        />
      </div>
      <div className="mt-2 flex items-center justify-between font-mono text-[11px] text-muted-soft">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
      {helper && <p className="mt-2 text-xs text-muted">{helper}</p>}
    </div>
  );
}
