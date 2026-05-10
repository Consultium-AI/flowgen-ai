"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import GradualBlur from "@/components/visuals/GradualBlur";
import LineWaves from "@/components/visuals/LineWaves";
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
      {/* Base + LineWaves (ogl) */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#05110d] via-[#071a14] to-[#030806]"
          style={{
            boxShadow:
              "inset 0 0 120px rgba(38,208,124,0.06), inset 0 -80px 140px rgba(3, 8, 6, 0.5)",
          }}
        />
        <div className="absolute inset-0 opacity-[0.95] mix-blend-screen">
          <LineWaves
            speed={0.3}
            innerLineCount={32}
            outerLineCount={36}
            warpIntensity={1}
            rotation={-45}
            edgeFadeWidth={0}
            colorCycleSpeed={1}
            brightness={0.28}
            color1="#779c85"
            color2="#356f4f"
            color3="#ffffff"
            enableMouseInteraction
            mouseInfluence={2}
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 58% at 50% 28%, transparent 38%, rgba(3, 8, 6, 0.55) 88%)",
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
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-4xl flex-col items-center text-center pb-16"
        >
          <motion.h1
            variants={item}
            className="font-display display-tight text-display-xl font-medium text-ink text-balance w-full min-w-0 max-w-4xl px-1 sm:px-2 max-md:hyphens-auto"
          >
            <span className="block max-md:[overflow-wrap:anywhere] md:whitespace-nowrap">
              AI-automatiseringen met
            </span>
            <span className="block max-md:[overflow-wrap:anywhere] md:whitespace-nowrap">
              <span className="text-gradient-accent italic">
                &eacute;&eacute;n dashboard ‎ 
              </span>
            </span>
            <span className="block max-md:[overflow-wrap:anywhere] md:whitespace-nowrap">
              voor je hele workflow
            </span>
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
            <MagneticButton
              href={HERO.primaryCta.href}
              variant="navbarFill"
              className="min-h-[2.625rem] w-full min-w-[12rem] sm:w-auto sm:min-w-[14rem]"
            >
              {HERO.primaryCta.label}
            </MagneticButton>
            <MagneticButton
              href={HERO.secondaryCta.href}
              variant="navbarGlass"
              className="min-h-[2.625rem] w-full min-w-[12rem] sm:w-auto sm:min-w-[14rem]"
            >
              {HERO.secondaryCta.label}
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
