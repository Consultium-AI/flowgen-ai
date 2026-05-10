"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import GradualBlur from "@/components/visuals/GradualBlur";
import LineWaves from "@/components/visuals/LineWaves";
import { BottomCTA } from "@/components/home/BottomCTA";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Services } from "@/components/home/Services";
import { DIENSTEN_PAGE } from "@/lib/content";

const Workflow = dynamic(
  () => import("@/components/home/Workflow").then((m) => m.Workflow),
  { ssr: false },
);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.21, 0.6, 0.36, 1] as const },
  },
};

export function ServicesContent() {
  return (
    <>
      <section
        data-navbar-theme="dark"
        className="hero-dark page-hero relative isolate overflow-hidden pb-28 pt-28 sm:pb-32 sm:pt-36 lg:pb-36 lg:pt-40"
      >
        <div aria-hidden className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#05110d] via-[#071a14] to-[#030806]"
            style={{
              boxShadow:
                "inset 0 0 120px rgba(119,156,133,0.08), inset 0 -88px 140px rgba(3, 8, 6, 0.52)",
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
                "radial-gradient(ellipse 72% 58% at 50% 30%, transparent 38%, rgba(3, 8, 6, 0.58) 88%)",
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
            className="mx-auto flex max-w-3xl flex-col lg:mx-0"
          >
            <div className="page-hero-copy">
              {DIENSTEN_PAGE.eyebrow ? (
                <motion.p
                  variants={item}
                  className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/52"
                >
                  {DIENSTEN_PAGE.eyebrow}
                </motion.p>
              ) : null}
              <motion.h1
                variants={item}
                className="font-display display-tight mt-4 max-w-xl text-display-md font-medium text-[#f8fafc] text-balance sm:mt-5 sm:text-display-lg"
              >
                {DIENSTEN_PAGE.title}
              </motion.h1>
              <motion.p
                variants={item}
                className="body-lg mt-6 max-w-2xl text-white/[0.74] sm:text-lg"
              >
                {DIENSTEN_PAGE.subtitle}
              </motion.p>
            </div>
            <motion.div
              variants={item}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <MagneticButton
                href={DIENSTEN_PAGE.primaryCta.href}
                variant="navbarFill"
                className="min-h-[2.625rem] w-full min-w-[14rem] sm:w-auto sm:min-w-[15rem]"
              >
                {DIENSTEN_PAGE.primaryCta.label}
              </MagneticButton>
              <MagneticButton
                href={DIENSTEN_PAGE.secondaryCta.href}
                variant="navbarGlass"
                className="min-h-[2.625rem] w-full min-w-[14rem] sm:w-auto sm:min-w-[15rem]"
              >
                {DIENSTEN_PAGE.secondaryCta.label}
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Services sectionId="pakketten" />

      <Workflow />

      <BottomCTA />
    </>
  );
}
