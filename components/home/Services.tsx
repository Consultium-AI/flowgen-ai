"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { PRICING } from "@/lib/content";
import { cn } from "@/lib/utils";

const sageLine = "rgba(119, 156, 133, 0.08)";
const easeOut = [0.21, 0.6, 0.36, 1] as const;

type ServicesSectionProps = {
  /**
   * Anchor id for in-page links (`#diensten` on homepage).
   * Homepage default: `"diensten"`. `/diensten` uses `"pakketten"`.
   * Pass `""` to omit the attribute.
   */
  sectionId?: string;
};

export function Services({ sectionId = "diensten" }: ServicesSectionProps) {
  const reduceMotion = useReducedMotion();

  const viewTransition = reduceMotion
    ? { duration: 0.01 }
    : { duration: 0.55, ease: easeOut };

  const stagger = reduceMotion ? 0 : 0.11;

  return (
    <section
      {...(sectionId !== "" ? { id: sectionId } : {})}
      data-navbar-theme="light"
      className="relative isolate scroll-mt-24 overflow-x-clip py-24 sm:py-28 lg:py-36"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(185deg, #f3f6f5 0%, #fbfbfb 40%, #f5f8f7 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 72% 48% at 50% -4%, rgba(119,156,133,0.11) 0%, transparent 55%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.72]"
          style={{
            backgroundImage: `linear-gradient(${sageLine} 1px, transparent 1px), linear-gradient(90deg, ${sageLine} 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 90% 68% at 50% 40%, #000 16%, transparent 76%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 68% at 50% 40%, #000 16%, transparent 76%)",
          }}
        />
      </div>

      <div className="container-narrow relative z-[1]">
        <motion.header
          className="mx-auto max-w-3xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={viewTransition}
        >
          {PRICING.eyebrow ? (
            <p className="inline-flex items-center justify-center gap-2 uppercase font-mono text-[11px] font-medium tracking-[0.34em] text-[#356f4f]/90">
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-[#779c85] shadow-[0_0_0_4px_rgba(119,156,133,0.18)]"
                aria-hidden
              />
              {PRICING.eyebrow}
            </p>
          ) : null}
          <h2 className="heading-section mx-auto mt-4 max-w-2xl text-[#141c18] text-balance sm:mt-5">
            {PRICING.title}
          </h2>
        </motion.header>

        <div className="mt-14 grid gap-8 sm:mt-16 lg:grid-cols-3 lg:gap-8 lg:items-stretch">
          {PRICING.items.map((service, i) => (
            <PricingCard
              key={service.name}
              service={service}
              index={i}
              reduceMotion={!!reduceMotion}
              viewTransition={viewTransition}
              stagger={stagger}
            />
          ))}
        </div>

        <motion.div
          className="mx-auto mt-14 max-w-3xl sm:mt-16"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ ...viewTransition, delay: reduceMotion ? 0 : 0.15 }}
        >
          <p className="text-center text-sm leading-relaxed text-[#4a6158] sm:text-[15px] sm:leading-relaxed">
            {PRICING.note}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PricingCard({
  service,
  index,
  reduceMotion,
  viewTransition,
  stagger,
}: {
  service: (typeof PRICING.items)[number];
  index: number;
  reduceMotion: boolean;
  viewTransition: { duration: number; ease?: readonly [number, number, number, number] };
  stagger: number;
}) {
  const listParent = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.04,
        delayChildren: reduceMotion ? 0 : 0.14,
      },
    },
  };

  const listItem = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: easeOut },
    },
  };

  return (
    <motion.article
      className={cn(
        "group relative flex min-h-full flex-col overflow-hidden rounded-[1.75rem] border border-neutral-950/[0.07] bg-white p-8 shadow-[0_1px_0_rgba(20,34,26,0.05),0_20px_50px_-36px_rgba(20,34,26,0.14)] ring-1 ring-black/[0.03]",
        "transition-[box-shadow,transform,border-color] duration-500 motion-safe:active:translate-y-0 motion-safe:active:scale-[0.997]",
        "motion-safe:hover:-translate-y-1 motion-safe:hover:border-[rgba(119,156,133,0.22)] motion-safe:hover:shadow-[0_26px_60px_-32px_rgba(20,34,26,0.16)]",
      )}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        ...viewTransition,
        delay: reduceMotion ? 0 : 0.12 + index * stagger,
      }}
    >
      <div className="flex flex-wrap items-start gap-x-4 gap-y-2">
        <h3 className="min-w-0 flex-1 font-display text-[1.4rem] font-semibold tracking-[-0.02em] text-[#141c18] sm:text-2xl">
          {service.name}
        </h3>
      </div>

      <p className="mt-4 max-w-none text-[15px] leading-[1.6] text-[#4a6158]">
        {service.description}
      </p>

      <div className="mt-9 flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="font-display text-[2.4rem] font-semibold tracking-[-0.03em] text-[#141c18] sm:text-[2.55rem]">
          {service.price}
        </span>
        {service.cadence ? (
          <span className="text-[15px] font-medium text-[#6b8378]">
            {service.cadence}
          </span>
        ) : null}
      </div>

      <p className="mt-2 text-[14px] text-[#6b8378]">
        <span className="font-medium text-[#4a6158]">Setup:</span>{" "}
        {service.setup}
      </p>

      <motion.div
        className="mt-8"
        whileTap={reduceMotion ? undefined : { scale: 0.985 }}
        transition={{ duration: 0.15, ease: easeOut }}
      >
        <Link
          href={service.cta.href}
          className={cn(
            "group/btn relative inline-flex min-h-[2.875rem] w-full items-center justify-center gap-2 rounded-full border border-neutral-950/[0.14] bg-white px-6 py-3 text-[13px] font-semibold tracking-wide text-[#141c18] transition-colors duration-300 hover:border-[#356f4f]/55 hover:bg-[rgba(239,246,242,0.85)] hover:text-[#1a3428] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#356f4f]",
            "sm:text-sm",
          )}
        >
          {service.cta.label}
          <ArrowRight
            className="h-4 w-4 opacity-80 transition-[transform,opacity] duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:opacity-100"
            aria-hidden
          />
        </Link>
      </motion.div>

      <motion.ul
        className="mt-9 space-y-3.5 border-t border-neutral-950/[0.075] pt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={listParent}
      >
        {service.features.map((f) => (
          <motion.li key={f} variants={listItem} className="flex gap-3.5">
            <span className="mt-0.5 grid h-[1.375rem] w-[1.375rem] shrink-0 place-items-center rounded-full bg-[#356f4f] text-white shadow-sm ring-[3px] ring-[rgba(119,156,133,0.15)]">
              <Check className="h-[0.6875rem] w-[0.6875rem]" strokeWidth={3.25} />
            </span>
            <span className="text-[14px] leading-snug text-[#1e2924]">{f}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.article>
  );
}
