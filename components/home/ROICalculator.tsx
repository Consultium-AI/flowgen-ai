"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calculator, Clock, Euro, Users } from "lucide-react";
import GradualBlur from "@/components/visuals/GradualBlur";

const Silk = dynamic(() => import("@/components/visuals/Silk"), {
  ssr: false,
  loading: () => null,
});
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ROI } from "@/lib/content";
import { formatCurrency } from "@/lib/utils";

const SAGE_SOFT = "#9fc4aa";

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
    <section
      data-navbar-theme="dark"
      className="roi-scope hero-dark relative isolate overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#05110d] via-[#071a14] to-[#030806]"
          style={{
            boxShadow:
              "inset 0 0 120px rgba(38,208,124,0.05), inset 0 -96px 120px rgba(3, 8, 6, 0.45)",
          }}
        />
        <div className="absolute inset-0 opacity-[0.86] mix-blend-screen">
          <Silk
            className="absolute inset-0 h-full w-full"
            speed={4.75}
            scale={1}
            color="#6a8d7e"
            noiseIntensity={1.35}
            rotation={0}
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 68% 55% at 50% 32%, transparent 42%, rgba(3, 8, 6, 0.5) 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-overlay"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.038) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.038) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 78% 64% at 50% 40%, #000 18%, transparent 76%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 78% 64% at 50% 40%, #000 18%, transparent 76%)",
          }}
        />
      </div>

      <div className="container-narrow relative z-[10]">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal delay={0.08}>
            {ROI.eyebrow ? (
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
                {ROI.eyebrow}
              </p>
            ) : null}
            <h2 className="heading-section mt-3 text-balance sm:mt-4">
              {ROI.title}
            </h2>
            {ROI.subtitle ? (
              <p className="body-lg mx-auto mt-5 max-w-xl text-muted">
                {ROI.subtitle}
              </p>
            ) : null}
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.18}>
          <div className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-[1.75rem] border border-white/[0.12] bg-[rgba(8,14,11,0.45)] p-6 shadow-[0_32px_100px_-64px_rgba(0,0,0,0.75)] backdrop-blur-xl sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:gap-14">
              <div className="space-y-8">
                <div className="max-w-lg">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">
                    Instellingen
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/72">
                    Schuif naar de situatie van je team — het totaal wordt direct
                    herberekend.
                  </p>
                </div>
                <div className="space-y-9">
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

              <div className="flex min-h-[360px] flex-col justify-between gap-8 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 sm:p-8">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">
                  <Calculator className="h-4 w-4 text-[#8eb89c]" strokeWidth={1.75} />
                  Indicatie
                </div>

                <div className="space-y-5 leading-tight">
                  <div className="font-display display-tight text-balance text-3xl font-medium text-[#f1f7f4] sm:text-[2rem] lg:text-[2.35rem]">
                    circa{" "}
                    <span className="tabular-nums" style={{ color: SAGE_SOFT }}>
                      <AnimatedCounter
                        value={hoursPerMonth}
                        format={(n) => Math.round(n).toLocaleString("nl-NL")}
                      />
                    </span>{" "}
                    uur/maand repetitief.
                  </div>
                  <p className="text-balance text-base leading-relaxed text-white/[0.72] sm:text-lg">
                    Ongeveer{" "}
                    <span className="font-display font-semibold text-white tabular-nums">
                      <AnimatedCounter
                        value={costPerMonth}
                        format={(n) => formatCurrency(n)}
                      />
                    </span>
                    {" "}
                    aan tijdkosten per maand.
                  </p>
                </div>

                <Link
                  href={ROI.cta.href}
                  className="group inline-flex min-h-[3rem] items-center justify-between gap-3 rounded-full border border-white/[0.16] bg-white/[0.08] px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/[0.26] hover:bg-white/[0.12]"
                >
                  <span>{ROI.cta.label}</span>
                  <ArrowRight
                    className="h-4 w-4 shrink-0 text-[#94b8a3] transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <GradualBlur
        target="parent"
        position="bottom"
        height="7.5rem"
        strength={2.4}
        divCount={7}
        curve="ease-out"
        exponential
        opacity={0.88}
        animated="scroll"
        duration="0.55s"
        easing="ease-out"
        zIndex={3}
      />
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
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2.5 text-sm font-medium text-white/92">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/[0.12] bg-white/[0.04] text-[#9fc4aa]">
            {icon}
          </span>
          <span>{label}</span>
        </div>
        <motion.span
          key={display}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-full border border-white/[0.1] bg-white/[0.06] px-3 py-1 text-[13px] font-semibold text-[#c8dfd0]"
        >
          {display}
        </motion.span>
      </div>
      <div className="relative">
        <div
          aria-hidden
          className="roi-range-fill absolute left-0 top-1/2 h-2 -translate-y-1/2 rounded-full bg-[#779c85]/85"
          style={{ width: `${pct}%`, maxWidth: "100%" }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-label={label}
          className="roi-slider relative z-10 h-2 w-full cursor-pointer rounded-full bg-white/[0.1]"
        />
      </div>
      <div className="mt-2 flex items-center justify-between font-mono text-[11px] text-white/40">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
      {helper ? (
        <p className="mt-2 text-xs leading-snug text-white/48">{helper}</p>
      ) : null}
    </div>
  );
}
