"use client";

import { motion } from "framer-motion";
import GradualBlur from "@/components/visuals/GradualBlur";
import { GsapWordScrollReveal } from "@/components/visuals/GsapWordScrollReveal";
import LineWaves from "@/components/visuals/LineWaves";
import { BottomCTA } from "@/components/home/BottomCTA";
import { FAQ } from "@/components/home/FAQ";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ABOUT } from "@/lib/content";
const ease = [0.21, 0.6, 0.36, 1] as const;

const heroContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

export function AboutContent() {
  return (
    <>
      <section
        data-navbar-theme="dark"
        className="hero-dark relative isolate overflow-hidden pb-28 pt-28 sm:pb-32 sm:pt-36 lg:pb-36 lg:pt-40"
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
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="mx-auto flex max-w-3xl flex-col lg:mx-0"
          >
            {ABOUT.hero.eyebrow ? (
              <motion.p
                variants={heroItem}
                className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/52"
              >
                {ABOUT.hero.eyebrow}
              </motion.p>
            ) : null}
            <motion.h1
              variants={heroItem}
              className="font-display display-tight mt-4 max-w-xl text-display-md font-medium text-[#f8fafc] text-balance sm:mt-5 sm:text-display-lg"
            >
              {ABOUT.hero.title}
            </motion.h1>
            {ABOUT.hero.subtitle ? (
              <motion.p
                variants={heroItem}
                className="body-lg mt-6 max-w-2xl text-white/[0.74] sm:text-lg"
              >
                {ABOUT.hero.subtitle}
              </motion.p>
            ) : null}
            <motion.div
              variants={heroItem}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <MagneticButton
                href={ABOUT.hero.primaryCta.href}
                variant="navbarFill"
                className="min-h-[2.625rem] w-full min-w-[14rem] sm:w-auto sm:min-w-[15rem]"
              >
                {ABOUT.hero.primaryCta.label}
              </MagneticButton>
              <MagneticButton
                href={ABOUT.hero.secondaryCta.href}
                variant="navbarGlass"
                className="min-h-[2.625rem] w-full min-w-[14rem] sm:w-auto sm:min-w-[15rem]"
              >
                {ABOUT.hero.secondaryCta.label}
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <MissionSection />

      <FAQ />

      <BottomCTA />
    </>
  );
}

function MissionSection() {
  /** Eén corps — zelfde schaal voor alle regels; alleen eerste alinea iets nadrukkelijker gewicht & vol wit. */
  const missionParagraph =
    "font-display tracking-[-0.02em] text-[clamp(1.28rem,2.95vw,1.95rem)] leading-[1.76] antialiased";

  const missionLeadSentence = `${missionParagraph} font-semibold text-white`;
  const missionBody = `${missionParagraph} font-normal text-[#eaf1ee]`;

  return (
    <section
      data-navbar-theme="dark"
      className="relative isolate overflow-hidden py-32 pb-36 sm:py-40 sm:pb-44 lg:py-48 lg:pb-52 xl:py-52 xl:pb-56"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #020805 0%, #050f0c 42%, #020705 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 88% 60% at 50% -8%, rgba(175, 215, 195, 0.12) 0%, transparent 55%),
              radial-gradient(ellipse 70% 50% at 50% 55%, rgba(53, 111, 79, 0.14) 0%, transparent 58%),
              radial-gradient(ellipse 85% 40% at 50% 110%, rgba(60, 45, 25, 0.1) 0%, transparent 45%)
            `,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 74% 64% at 50% 40%, #000 12%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 74% 64% at 50% 40%, #000 12%, transparent 78%)",
          }}
        />
      </div>

      <div className="container-narrow relative z-[1]">
        <motion.header
          className="mx-auto mb-24 max-w-3xl text-center sm:mb-28 lg:mb-36"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.38em] text-white">
            {ABOUT.missionLead}
          </p>
          <div
            aria-hidden
            className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-white/35 to-transparent sm:mt-7"
          />
        </motion.header>

        <div className="mx-auto flex w-full max-w-[min(40rem,100%)] flex-col gap-[2.85rem] text-left sm:max-w-[min(44rem,100%)] sm:gap-[3.75rem] lg:max-w-[min(51rem,100%)] lg:gap-[4.75rem] xl:max-w-[min(54rem,100%)] xl:gap-[5.75rem]">
          {ABOUT.mission.map((paragraph, i) => (
            <GsapWordScrollReveal
              key={i}
              enableBlur
              baseOpacity={0.06}
              baseRotation={i === 0 ? 1 : 1.85}
              blurStrength={i === 0 ? 5 : 6}
              rotationEnd="bottom 78%"
              wordAnimationEnd="bottom 74%"
              textClassName={i === 0 ? missionLeadSentence : missionBody}
            >
              {paragraph}
            </GsapWordScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
