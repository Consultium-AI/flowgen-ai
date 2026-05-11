"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";

import { PILOT_SECTION } from "@/lib/content";
import { cn } from "@/lib/utils";

const easeOut = [0.21, 0.6, 0.36, 1] as const;

type ServicesSectionProps = {
  sectionId?: string;
};

export function Services({ sectionId = "diensten" }: ServicesSectionProps) {
  const reduceMotion = useReducedMotion();
  const viewTransition = reduceMotion
    ? { duration: 0.01 }
    : { duration: 0.5, ease: easeOut };

  const pilot = PILOT_SECTION;
  const { comparison } = pilot;

  const listVariants = {
    hidden: { opacity: 0, y: 8 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: reduceMotion ? 0 : 0.035 * i, duration: 0.38, ease: easeOut },
    }),
  };

  return (
    <section
      {...(sectionId !== "" ? { id: sectionId } : {})}
      data-navbar-theme="light"
      className="relative isolate scroll-mt-24 overflow-x-clip bg-white py-24 sm:py-28 lg:py-32"
    >
      <motion.div
        className="relative z-[1] mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={viewTransition}
      >
        <div className="text-center">
          <p className="inline-flex items-center justify-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.38em] text-[#2d5842]/90 sm:text-[11px]">
            <Sparkles
              className="h-3 w-3 text-[#5a917c]"
              aria-hidden
              strokeWidth={1.75}
            />
            {pilot.eyebrow}
          </p>

          <h2 className="heading-section mx-auto mt-4 max-w-3xl text-balance text-[#0c1410] sm:mt-5">
            {pilot.title}
          </h2>

          {pilot.subtitle ? (
            <p className="body-lg mx-auto mt-5 max-w-2xl text-[#5c7268]">
              {pilot.subtitle}
            </p>
          ) : null}

          {pilot.lead ? (
            <p className="mx-auto mt-5 max-w-3xl text-[15px] font-medium leading-relaxed text-[#1a3328] sm:mt-6 sm:text-[1.0625rem] sm:leading-[1.55]">
              {pilot.lead}
            </p>
          ) : null}

          {pilot.context ? (
            <p className="mx-auto mt-3 max-w-2xl text-[13px] leading-relaxed text-[#5c7268] sm:mt-4 sm:text-[14px]">
              {pilot.context}
            </p>
          ) : null}
        </div>

        <div className="mx-auto mt-12 max-w-4xl border-t border-[rgba(53,111,79,0.09)] pt-12 text-center sm:mt-14 sm:pt-14">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#356f4f]/85 sm:text-[11px]">
            {comparison.rightTitle}
          </p>
          <div className="mt-4 flex flex-wrap items-baseline justify-center gap-x-2 gap-y-0.5">
            <span className="font-display text-[2.75rem] font-semibold tracking-[-0.04em] text-[#0c1410] sm:text-[3.15rem] md:text-[3.35rem]">
              {pilot.price}
            </span>
            <span className="text-[15px] font-medium text-[#4a6358] sm:text-base">
              {pilot.cadence}
            </span>
          </div>
          <p className="mx-auto mt-2 max-w-xl text-[12px] font-medium text-[#3d5c4c] sm:text-[13px]">
            {pilot.periodLine}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl border-t border-[rgba(53,111,79,0.09)] pt-12 sm:mt-14 sm:pt-14">
          <p className="text-center font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#356f4f]/85 sm:text-[11px]">
            {pilot.includedListEyebrow}
          </p>

          <ul className="mx-auto mt-7 flex w-full max-w-4xl flex-col items-center gap-0 sm:mt-8">
            {pilot.includedItems.map((line, idx) => (
              <motion.li
                key={`${idx}-${line.slice(0, 48)}`}
                custom={idx}
                variants={listVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.12 }}
                className="flex w-full max-w-3xl items-start justify-center gap-3 py-2.5 sm:gap-3.5 sm:py-3"
              >
                <span
                  className={cn(
                    "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full sm:h-6 sm:w-6",
                    "bg-[rgba(255,255,255,0.85)] text-[#356f4f]",
                    "ring-1 ring-[rgba(53,111,79,0.12)] shadow-[0_1px_4px_-2px_rgba(28,58,42,0.14)]",
                  )}
                  aria-hidden
                >
                  <Check className="h-3 w-3" strokeWidth={2.5} />
                </span>
                <span className="min-w-0 flex-1 text-left text-[13px] leading-relaxed text-[#2a3b33] sm:text-[14px]">
                  {line}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-12 max-w-4xl border-t border-[rgba(53,111,79,0.09)] pt-12 text-center sm:mt-14 sm:pt-14">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#356f4f]/85 sm:text-[11px]">
            {pilot.guaranteeTermsEyebrow}
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-left text-[13px] leading-relaxed text-[#5f756b] sm:mt-6 sm:text-center sm:text-[14px] sm:leading-[1.6]">
            {pilot.guaranteeTerms}
          </p>
        </div>

        <div className="mt-10 flex justify-center sm:mt-11">
          <motion.div whileTap={reduceMotion ? undefined : { scale: 0.987 }}>
            <Link
              href={pilot.cta.href}
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-xl px-10 py-3.5 text-[14px] font-semibold text-white sm:text-[15px]",
                "bg-[#356f4f] shadow-[0_12px_40px_-28px_rgba(22,52,36,0.85)]",
                "transition-[filter,transform,box-shadow] duration-200",
                "hover:brightness-[1.05] hover:shadow-[0_18px_48px_-32px_rgba(22,52,36,0.7)]",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#356f4f]",
              )}
            >
              {pilot.cta.label}
              <ArrowRight className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
            </Link>
          </motion.div>
        </div>

        {pilot.finePrint ? (
          <p className="mx-auto mt-6 max-w-lg text-center text-[10px] leading-relaxed text-[#718c80] sm:mt-7 sm:text-[11px]">
            {pilot.finePrint}
          </p>
        ) : null}
      </motion.div>
    </section>
  );
}
