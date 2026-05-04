"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HERO } from "@/lib/content";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.6, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section
      data-navbar-theme="dark"
      className="hero-dark relative isolate overflow-hidden pb-32 pt-28 sm:pt-36 lg:pt-40"
    >
      {/* Layered background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 18%, rgba(16,185,129,0.20) 0%, rgba(16,185,129,0.07) 28%, transparent 52%), radial-gradient(circle at 18% 72%, rgba(34,197,94,0.14) 0%, transparent 34%), radial-gradient(circle at 82% 58%, rgba(20,184,166,0.14) 0%, transparent 36%), linear-gradient(180deg, #04110d 0%, #06130f 42%, #08080A 100%)",
        }}
      >
        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 74% 62% at 50% 38%, #000 26%, transparent 82%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 74% 62% at 50% 38%, #000 26%, transparent 82%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(115deg, transparent 0%, transparent 36%, rgba(52,211,153,0.10) 42%, transparent 52%, transparent 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute left-1/2 top-28 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-emerald-300/10"
          style={{
            boxShadow:
              "0 0 80px rgba(16,185,129,0.16), inset 0 0 80px rgba(16,185,129,0.08)",
          }}
        />
        <div
          aria-hidden
          className="absolute left-1/2 top-10 h-[760px] w-[760px] -translate-x-1/2 rounded-full border border-emerald-300/[0.06]"
        />

        {/* Aurora blobs */}
        <div
          aria-hidden
          className="absolute -top-52 left-1/2 h-[82%] w-[130%] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse at 50% 45%, rgba(16,185,129,0.34) 0%, transparent 58%)",
            filter: "blur(90px)",
          }}
        />
        <div
          aria-hidden
          className="absolute top-1/3 right-0 h-[60%] w-[60%]"
          style={{
            background:
              "radial-gradient(ellipse at 70% 40%, rgba(20,184,166,0.22) 0%, transparent 65%)",
            filter: "blur(90px)",
          }}
        />
        <div
          aria-hidden
          className="absolute -bottom-32 left-0 h-[55%] w-[60%]"
          style={{
            background:
              "radial-gradient(ellipse at 30% 60%, rgba(34,197,94,0.12) 0%, transparent 65%)",
            filter: "blur(100px)",
          }}
        />

        {/* Scanlines at bottom */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-40"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 6px)",
            maskImage:
              "linear-gradient(180deg, transparent 0%, #000 100%)",
            WebkitMaskImage:
              "linear-gradient(180deg, transparent 0%, #000 100%)",
          }}
        />

        {/* Faded edge to next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-bg-tint" />
      </div>

      <div className="container-narrow relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-4xl flex-col items-center text-center pb-16"
        >
          <motion.span
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-emerald-300"
          >
            {HERO.eyebrow}
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display display-tight text-display-xl font-medium text-ink text-balance"
          >
            <span className="block whitespace-nowrap">AI-automatiseringen met</span>
            <span className="block whitespace-nowrap">
              <span className="inline-block pr-2 text-gradient-accent italic">&eacute;&eacute;n dashboard&nbsp;</span>
            </span>
            <span className="block whitespace-nowrap">voor je hele workflow</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-muted"
          >
            {HERO.subtitle}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          >
            <MagneticButton href={HERO.primaryCta.href} variant="primary">
              {HERO.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href={HERO.secondaryCta.href} variant="secondary">
              {HERO.secondaryCta.label}
            </MagneticButton>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-emerald-300/70"
          >
            {HERO.priceline}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
