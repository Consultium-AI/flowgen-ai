"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles, X } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BOTTOM_CTA } from "@/lib/content";

const ease = [0.21, 0.6, 0.36, 1] as const;

const listItem = {
  hidden: { opacity: 0, x: -8 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.06 * i, duration: 0.45, ease },
  }),
};

const listItemRight = {
  hidden: { opacity: 0, x: 8 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.06 * i, duration: 0.45, ease },
  }),
};

export function BottomCTA() {
  const { comparison } = BOTTOM_CTA;

  return (
    <section
      data-navbar-theme="dark"
      className="relative isolate overflow-x-clip pb-28 pt-20 sm:pb-36 sm:pt-28 lg:pb-40 lg:pt-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #020504 0%, #050a08 38%, #030705 100%)",
          }}
        />
        {/* Center spotlight: cool mist + subtle warm floor */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 85% 55% at 50% 18%, rgba(185, 220, 205, 0.11) 0%, transparent 58%),
              radial-gradient(ellipse 70% 45% at 50% 42%, rgba(119, 156, 133, 0.07) 0%, transparent 62%),
              radial-gradient(ellipse 90% 35% at 50% 108%, rgba(95, 72, 40, 0.09) 0%, transparent 48%)
            `,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 72% 60% at 50% 35%, #000 8%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 72% 60% at 50% 35%, #000 8%, transparent 72%)",
          }}
        />
      </div>

      <div className="container-narrow relative z-[1]">
        <ScrollReveal delay={0.04}>
          <header className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center justify-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.34em] text-white">
              <Sparkles className="h-3.5 w-3.5 text-[#9ec4b0]/90" aria-hidden strokeWidth={1.75} />
              {BOTTOM_CTA.eyebrow}
            </p>
            <h2 className="font-display mt-6 text-[1.85rem] font-medium leading-[1.12] tracking-[-0.03em] text-[#f4f7f5] text-balance sm:text-[2.35rem] sm:leading-[1.08] lg:text-[2.65rem]">
              {BOTTOM_CTA.title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[0.98rem] leading-[1.75] text-white/[0.62] sm:text-[1.05rem]">
              {BOTTOM_CTA.description}
            </p>
          </header>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease }}
            className="mx-auto mt-14 max-w-5xl sm:mt-16 lg:mt-20"
          >
            <div className="overflow-hidden rounded-[1.25rem] border border-white/[0.09] bg-[#050908]/80 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.85)] backdrop-blur-sm sm:rounded-2xl">
              <div className="grid md:grid-cols-2">
                {/* Left: lower contrast */}
                <div className="border-b border-white/[0.08] bg-[rgba(6,12,10,0.92)] md:border-b-0 md:border-r md:border-white/[0.08]">
                  <div className="border-b border-white/[0.08] px-6 py-5 text-center sm:px-8 sm:py-6">
                    <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-white">
                      {comparison.leftTitle}
                    </p>
                  </div>
                  <ul className="space-y-0 px-6 py-8 sm:px-9 sm:py-10">
                    {comparison.leftItems.map((text, i) => (
                      <motion.li
                        key={text}
                        custom={i}
                        variants={listItem}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex gap-4 border-b border-white/[0.05] py-5 first:pt-0 last:border-0 last:pb-0"
                      >
                        <span
                          className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/12 bg-white/[0.04]"
                          aria-hidden
                        >
                          <X className="h-4 w-4 text-white/45" strokeWidth={2} />
                        </span>
                        <span className="text-[0.9375rem] leading-snug text-white/80">{text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Right: highlighted */}
                <div
                  className="relative bg-gradient-to-br from-[rgba(53,111,79,0.38)] via-[rgba(30,52,44,0.55)] to-[rgba(10,18,15,0.72)]"
                  style={{
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(119,156,133,0.06)] to-transparent pointer-events-none" />
                  <div className="relative border-b border-white/[0.1] px-6 py-5 text-center sm:px-8 sm:py-6">
                    <p className="inline-flex flex-wrap items-center justify-center gap-2 text-center text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-white">
                      <span
                        className="grid h-6 w-6 place-items-center rounded-md bg-white/10 text-[#c8e8d6]"
                        aria-hidden
                      >
                        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                      {comparison.rightTitle}
                    </p>
                  </div>
                  <ul className="relative space-y-0 px-6 py-8 sm:px-9 sm:py-10">
                    {comparison.rightItems.map((text, i) => (
                      <motion.li
                        key={text}
                        custom={i}
                        variants={listItemRight}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex gap-4 border-b border-white/[0.08] py-5 first:pt-0 last:border-0 last:pb-0"
                      >
                        <span
                          className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[rgba(200,232,214,0.35)] bg-[rgba(255,255,255,0.08)]"
                          aria-hidden
                        >
                          <Check className="h-4 w-4 text-[#c8e8d6]" strokeWidth={2.5} />
                        </span>
                        <span className="text-[0.9375rem] leading-snug text-white/[0.92]">{text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.14}>
          <div className="mx-auto mt-12 flex max-w-xl flex-col items-stretch gap-3 sm:mt-14 sm:flex-row sm:items-center sm:justify-center lg:mt-16">
            <div className="sm:inline-block">
              <MagneticButton
                href={BOTTOM_CTA.primaryCta.href}
                variant="primary"
                className="!w-full !rounded-full !border-0 !bg-gradient-to-r !from-[#356f4f] !to-[#2d5842] !px-9 !py-3.5 !text-[13px] !text-white shadow-[0_18px_48px_-22px_rgba(53,111,79,0.55)] hover:!from-[#3d7a65] hover:!to-[#356f4f] hover:!shadow-[0_22px_56px_-20px_rgba(119,156,133,0.35)] sm:!w-auto sm:!text-sm"
              >
                {BOTTOM_CTA.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
            </div>
            <motion.div whileTap={{ scale: 0.98 }} transition={{ duration: 0.15 }}>
              <Link
                href={BOTTOM_CTA.secondaryCta.href}
                className="inline-flex min-h-[2.875rem] w-full items-center justify-center rounded-full border border-white/[0.18] bg-white/[0.05] px-9 py-3.5 text-[13px] font-semibold text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm transition-colors hover:border-white/28 hover:bg-white/[0.09] sm:w-auto sm:text-sm"
              >
                {BOTTOM_CTA.secondaryCta.label}
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
