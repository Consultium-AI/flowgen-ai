"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarClock, Check, Clock } from "lucide-react";
import { CalBookingEmbed } from "@/components/booking/CalBookingEmbed";
import GradualBlur from "@/components/visuals/GradualBlur";
import LineWaves from "@/components/visuals/LineWaves";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BOOKING } from "@/lib/content";
import { calWorkflowScanFallbackUrl } from "@/lib/cal-booking";
import { workflowScanContextNote } from "@/lib/workflow-scan-context";

const gridLine = "rgba(119, 156, 133, 0.075)";
const ease = [0.21, 0.6, 0.36, 1] as const;

const heroContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease },
  },
};

type Props = {
  calLink: string;
  contextVan?: string | string[];
};

export function WorkflowScanContent({ calLink, contextVan }: Props) {
  const trimmed = calLink.trim();
  const fallbackBookingUrl = calWorkflowScanFallbackUrl(trimmed);
  const contextNote = workflowScanContextNote(contextVan);

  return (
    <>
      <section
        data-navbar-theme="dark"
        className="hero-dark relative isolate overflow-hidden pb-20 pt-[6.5rem] sm:pb-24 sm:pt-28 lg:pb-28 lg:pt-32"
      >
        <div aria-hidden className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#05110d] via-[#071a14] to-[#030806]"
            style={{
              boxShadow:
                "inset 0 0 120px rgba(119,156,133,0.08), inset 0 -88px 140px rgba(3, 8, 6, 0.52)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 64% 50% at 50% 24%, rgba(119,156,133,0.17) 0%, transparent 55%)",
            }}
          />
          <div className="absolute inset-0 opacity-[0.93] mix-blend-screen">
            <LineWaves
              speed={0.26}
              innerLineCount={32}
              outerLineCount={36}
              warpIntensity={1}
              rotation={-45}
              edgeFadeWidth={0}
              colorCycleSpeed={0.92}
              brightness={0.26}
              color1="#779c85"
              color2="#356f4f"
              color3="#ffffff"
              enableMouseInteraction
              mouseInfluence={1.85}
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 72% 58% at 50% 28%, transparent 38%, rgba(3, 8, 6, 0.58) 88%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage:
                "radial-gradient(ellipse 78% 64% at 50% 36%, #000 22%, transparent 78%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 78% 64% at 50% 36%, #000 22%, transparent 78%)",
            }}
          />
        </div>

        <GradualBlur
          target="parent"
          position="bottom"
          height="6.75rem"
          strength={2.2}
          divCount={6}
          curve="bezier"
          exponential
          opacity={0.9}
          animated="scroll"
          duration="0.6s"
          easing="ease-out"
          zIndex={4}
        />

        <div className="container-narrow relative z-[10]">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-3xl lg:mx-0 lg:max-w-[40rem]"
          >
            <motion.p
              variants={heroItem}
              className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/52"
            >
              {BOOKING.eyebrow}
            </motion.p>
            <motion.h1
              variants={heroItem}
              className="font-display display-tight mt-4 text-display-md font-medium text-[#f8fafc] text-balance sm:mt-5 sm:text-display-lg"
            >
              {BOOKING.title}
            </motion.h1>
            <motion.p
              variants={heroItem}
              className="mt-6 max-w-2xl text-[0.98rem] leading-[1.72] text-white/[0.78] sm:text-[1.05rem]"
            >
              {BOOKING.subtitle}
            </motion.p>

            <motion.ul
              variants={heroItem}
              className="mt-10 flex flex-wrap gap-3"
            >
              <li className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.14] bg-white/[0.045] px-4 py-2.5 text-sm text-white/[0.9] backdrop-blur-sm">
                <Clock className="h-[1.0625rem] w-[1.0625rem] text-[#aed4c5]" aria-hidden strokeWidth={1.75} />
                30 minuten
              </li>
              <li className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.14] bg-white/[0.045] px-4 py-2.5 text-sm text-white/[0.9] backdrop-blur-sm">
                <CalendarClock className="h-[1.0625rem] w-[1.0625rem] text-[#aed4c5]" aria-hidden strokeWidth={1.75} />
                Ma–vr · om het halfuur · 09:00–17:00
              </li>
            </motion.ul>

            <motion.div
              variants={heroItem}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <MagneticButton
                href="/demo-recruitment"
                variant="navbarGlass"
                className="min-h-[2.5rem] w-full min-w-[12rem] sm:w-auto sm:min-w-[13rem]"
              >
                Eerst de demo bekijken
              </MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 pl-2 text-[11px] font-mono uppercase tracking-[0.24em] text-white/43 transition-colors hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35"
              >
                Vragen vooraf
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Booking + verdieping */}
      <section className="relative isolate overflow-x-clip pb-28 pt-14 sm:pb-32 sm:pt-16 lg:pb-36">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(182deg, #f4faf7 0%, #fbfdfc 42%, #f2f8f5 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(${gridLine} 1px, transparent 1px),
                linear-gradient(90deg, ${gridLine} 1px, transparent 1px)`,
              backgroundSize: "44px 44px",
              opacity: 0.72,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 12% -8%, rgba(119,156,133,0.1) 0%, transparent 55%)",
            }}
          />
        </div>

        <div className="container-narrow relative z-[1]">
          <div className="grid gap-11 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.92fr)] lg:items-start lg:gap-12 xl:gap-14">
            <aside className="min-w-0 lg:sticky lg:top-28">
              <div
                className="rounded-[1.625rem] border border-[rgba(119,156,133,0.22)] bg-gradient-to-br from-white via-white to-[rgba(231,243,237,0.45)] px-7 py-9 shadow-[0_26px_64px_-44px_rgba(53,111,79,0.42)] sm:px-9 sm:py-10"
                style={{
                  boxShadow:
                    "0 26px 64px -44px rgba(53,111,79,0.42), inset 0 1px 0 rgba(255,255,255,1)",
                }}
              >
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.34em] text-[#356f4f]/88">
                  Jouw gesprek
                </p>
                <h2 className="font-display mt-3 text-2xl font-medium tracking-[-0.03em] text-[#151c17]">
                  {BOOKING.sideCard.title}
                </h2>
                <div className="mt-5 space-y-4 text-[0.9375rem] leading-[1.7] text-[#4a6056]">
                  {BOOKING.sideCard.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <ul className="mt-7 space-y-3 border-t border-[rgba(119,156,133,0.18)] pt-7">
                  {BOOKING.sideCard.outcomes.map((item) => (
                    <li key={item} className="flex gap-3.5">
                      <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-[rgba(119,156,133,0.42)] bg-[rgba(239,246,242,0.85)]">
                        <Check className="h-3 w-3 text-[#356f4f]" strokeWidth={3} aria-hidden />
                      </span>
                      <span className="text-[0.9375rem] leading-snug text-[#1f2c26]/95">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-7 border-t border-[rgba(119,156,133,0.18)] pt-7 text-[0.9rem] leading-relaxed text-[#5c7368]/95">
                  {BOOKING.sideCard.closing}
                </p>
                <div className="mt-7 border-t border-[rgba(119,156,133,0.18)] pt-7">
                  <Link
                    href="/contact"
                    className="text-sm font-semibold text-[#356f4f] underline-offset-4 transition-colors hover:text-[#2d5840] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#779c85]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    {BOOKING.sideCard.contactHint}
                  </Link>
                </div>
              </div>
            </aside>

            <div className="min-w-0">
              <ContextBanner text={contextNote} />
              {trimmed ? (
                <CalBookingEmbed calLink={trimmed} />
              ) : (
                <FallbackBookingCard fallbackBookingUrl={fallbackBookingUrl} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContextBanner({ text }: { text: string | null }) {
  if (!text) return null;
  return (
    <p
      className="mb-5 rounded-2xl border border-[rgba(119,156,133,0.35)] bg-[rgba(226,239,231,0.78)] px-4 py-3.5 text-sm font-medium leading-relaxed text-[#1f352a]"
      role="status"
    >
      {text}
    </p>
  );
}

function FallbackBookingCard({
  fallbackBookingUrl,
}: {
  fallbackBookingUrl: string | null | undefined;
}) {
  return (
    <div
      className="rounded-[1.625rem] border border-[rgba(119,156,133,0.2)] bg-white px-9 py-12 text-center shadow-[0_24px_60px_-40px_rgba(53,111,79,0.38)] sm:px-11 sm:py-14"
      style={{
        boxShadow:
          "0 24px 60px -40px rgba(53,111,79,0.38), inset 0 1px 0 rgba(255,255,255,1)",
      }}
    >
      <p className="font-display text-[1.35rem] font-medium tracking-tight text-[#141c18] sm:text-xl">
        Plan via contact
      </p>
      <p className="mx-auto mt-3 max-w-md text-[0.9375rem] leading-relaxed text-[#5c7368]">
        Er is nog geen online agenda gekoppeld. We plannen graag een gesprek van 30&nbsp;minuten;
        ma–vr tussen 09:00 en 17:00, met slots om het halfuur.
      </p>
      <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#356f4f] to-[#2d5842] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_14px_36px_-20px_rgba(53,111,79,0.65)] transition-[filter] hover:brightness-[1.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#779c85]/55 focus-visible:ring-offset-2"
        >
          Naar contactformulier
        </Link>
        {fallbackBookingUrl ? (
          <a
            href={fallbackBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[rgba(20,34,26,0.12)] bg-white px-8 py-3.5 text-sm font-semibold text-[#1a2e26] shadow-[inset_0_1px_0_rgba(255,255,255,1)] transition-colors hover:border-[#356f4f]/35 hover:bg-[rgba(239,246,242,0.95)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#779c85]/45 focus-visible:ring-offset-2"
          >
            Direct online boeken
          </a>
        ) : null}
      </div>
    </div>
  );
}
