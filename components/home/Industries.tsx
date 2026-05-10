"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Users,
  Megaphone,
  GraduationCap,
  Briefcase,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import LineWaves from "@/components/visuals/LineWaves";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TARGET_AUDIENCES } from "@/lib/content";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  Users,
  Megaphone,
  GraduationCap,
  Briefcase,
};

/** Muted palette aligned with hero LineWaves (#779c85, #356f4f). */
const sage = {
  line: "rgba(119, 156, 133, 0.12)",
  fillIcon: "rgba(119, 156, 133, 0.12)",
  borderIcon: "rgba(119, 156, 133, 0.38)",
  forest: "#356f4f",
  ink: "#14221a",
} as const;

export function Industries() {
  const [active, setActive] = useState(0);
  const item = TARGET_AUDIENCES.items[active];
  const Icon = ICONS[item.icon] ?? Briefcase;

  return (
    <section className="section relative isolate overflow-hidden">
      {/* Continuation of hero mood: LineWaves + light sage scrim */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 opacity-[0.38] mix-blend-multiply">
          <LineWaves
            speed={0.22}
            innerLineCount={32}
            outerLineCount={36}
            warpIntensity={1}
            rotation={-45}
            edgeFadeWidth={0}
            colorCycleSpeed={0.85}
            brightness={0.18}
            color1="#779c85"
            color2="#356f4f"
            color3="#ffffff"
            enableMouseInteraction={false}
            mouseInfluence={0}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(248,251,249,0.97) 0%, rgba(238,245,240,0.96) 42%, rgba(244,248,245,0.98) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 52% at 50% -8%, rgba(119,156,133,0.16) 0%, transparent 56%), radial-gradient(ellipse 65% 42% at 90% 92%, rgba(53,111,79,0.09) 0%, transparent 62%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage: `linear-gradient(${sage.line} 1px, transparent 1px), linear-gradient(90deg, ${sage.line} 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 82% 62% at 50% 42%, #000 26%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 82% 62% at 50% 42%, #000 26%, transparent 78%)",
          }}
        />
      </div>

      <div className="container-narrow">
        <SectionHeading
          align="center"
          className="mx-auto max-w-[40rem] text-center [&_.heading-section]:text-[#14221a]"
          title={TARGET_AUDIENCES.title}
        />

        <ScrollReveal delay={0.2}>
          <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-2.5">
            {TARGET_AUDIENCES.items.map((audience, i) => {
              const I = ICONS[audience.icon] ?? Briefcase;
              const isActive = i === active;
              return (
                <button
                  key={audience.name}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "relative flex items-center gap-2 rounded-full border px-4 py-2.5 text-left text-sm font-semibold transition-all duration-300",
                    isActive
                      ? "border-[rgba(53,111,79,0.42)] bg-[rgba(119,156,133,0.16)] text-[#1a3628] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]"
                      : "border-slate-200/90 bg-white/75 text-slate-600 shadow-sm backdrop-blur-sm hover:border-[rgba(119,156,133,0.35)] hover:bg-white hover:text-slate-800",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="industry-active"
                      className="absolute inset-0 -z-0 rounded-full bg-[rgba(119,156,133,0.12)]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <I
                    className={cn(
                      "relative z-10 h-4 w-4 shrink-0",
                      isActive ? "text-[#356f4f]" : "text-slate-500",
                    )}
                  />
                  <span className="relative z-10 leading-snug">
                    {audience.name}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div
            className="relative mt-10 overflow-hidden rounded-[1.75rem] border border-[rgba(53,111,79,0.14)] bg-white/85 p-10 shadow-[0_26px_80px_-52px_rgba(15,40,28,0.38)] backdrop-blur-md sm:p-14 lg:p-20"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[rgba(119,156,133,0.09)] blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-[rgba(53,111,79,0.06)] blur-3xl"
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
                  <div
                    className="grid h-16 w-16 place-items-center rounded-2xl border backdrop-blur-sm"
                    style={{
                      borderColor: sage.borderIcon,
                      backgroundColor: sage.fillIcon,
                      color: sage.forest,
                    }}
                  >
                    <Icon className="h-7 w-7" strokeWidth={1.65} />
                  </div>
                  <h3
                    className="mt-6 font-display display-tight text-4xl font-medium sm:text-5xl"
                    style={{ color: sage.ink }}
                  >
                    {item.name}
                  </h3>
                </div>
                <div>
                  <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                    {item.description}
                  </p>
                  {"demo" in item && item.demo ? (
                    <div className="mt-8">
                      <MagneticButton
                        href={item.demo.href}
                        variant="navbarFill"
                        className={cn(
                          "!border-0 !bg-[#356f4f] !text-white !shadow-none",
                          "hover:!bg-[#2d5f42]",
                          "min-h-[2.75rem]",
                        )}
                      >
                        {item.demo.label}
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </MagneticButton>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
