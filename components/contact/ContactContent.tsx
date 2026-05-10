"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { BottomCTA } from "@/components/home/BottomCTA";
import GradualBlur from "@/components/visuals/GradualBlur";
import LineWaves from "@/components/visuals/LineWaves";
import { ContactForm } from "@/components/contact/ContactForm";
import { CONTACT, SITE } from "@/lib/content";

const FAQ = dynamic(() => import("@/components/home/FAQ").then((mod) => mod.FAQ));

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

export function ContactContent() {
  return (
    <>
      <section
        data-navbar-theme="dark"
        className="hero-dark relative isolate overflow-hidden pb-24 pt-[6.75rem] sm:pb-28 sm:pt-32 lg:pb-36 lg:pt-[8.75rem]"
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
                "radial-gradient(ellipse 62% 48% at 50% 28%, rgba(119,156,133,0.18) 0%, transparent 58%)",
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
            className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,min(520px,100%))] lg:items-start lg:gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,540px)] xl:gap-16"
          >
            <div className="flex min-w-0 flex-col">
              {CONTACT.eyebrow ? (
                <motion.p
                  variants={heroItem}
                  className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/54"
                >
                  {CONTACT.eyebrow}
                </motion.p>
              ) : null}
              <motion.h1
                variants={heroItem}
                className="font-display display-tight mt-4 max-w-xl text-display-md font-medium text-[#f8fafc] text-balance sm:mt-5 sm:text-display-lg"
              >
                {CONTACT.title}
              </motion.h1>
              <motion.p
                variants={heroItem}
                className="body-lg mt-6 max-w-lg text-[0.98rem] leading-[1.7] text-white/[0.79] sm:text-[1.0625rem]"
              >
                {CONTACT.subtitle}
              </motion.p>

              <motion.div
                variants={heroItem}
                className="mt-12 max-w-md border-t border-white/[0.12] pt-10"
              >
                <nav aria-label="Direct contact">
                  <a
                    href={SITE.phoneHref}
                    className="group flex items-center gap-4 border-b border-white/[0.1] py-5 text-[0.9625rem] text-white outline-none transition-colors first:pt-2 hover:bg-white/[0.03] focus-visible:ring-2 focus-visible:ring-white/30"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.04] transition-colors group-hover:border-white/25">
                      <Phone className="h-[1.0625rem] w-[1.0625rem] text-[#aed4c5]" aria-hidden strokeWidth={1.75} />
                    </span>
                    <span>{SITE.phone}</span>
                  </a>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="group flex items-center gap-4 py-5 text-[0.9625rem] text-white outline-none transition-colors hover:bg-white/[0.03] focus-visible:ring-2 focus-visible:ring-white/30"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.04] transition-colors group-hover:border-white/25">
                      <Mail className="h-[1.0625rem] w-[1.0625rem] text-[#aed4c5]" aria-hidden strokeWidth={1.75} />
                    </span>
                    <span className="truncate">{SITE.email}</span>
                  </a>
                </nav>

                <div className="mt-10 flex flex-col gap-y-5 text-[11px] font-mono font-medium uppercase tracking-[0.26em] text-white/41">
                  <Link
                    href="/workflow-scan"
                    className="inline-flex items-center gap-2 text-white/50 transition-colors hover:text-white/78 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
                  >
                    Plan workflow-scan
                    <ArrowUpRight className="h-4 w-4 opacity-80" aria-hidden strokeWidth={1.75} />
                  </Link>
                  <Link
                    href="/demo-recruitment"
                    className="inline-flex w-fit items-center gap-2 text-white/50 transition-colors hover:text-white/78 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
                  >
                    Productdemo
                    <ArrowUpRight className="h-4 w-4 opacity-80" aria-hidden strokeWidth={1.75} />
                  </Link>
                  <a
                    href={SITE.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 text-white/50 transition-colors hover:text-white/78 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
                  >
                    WhatsApp
                    <ArrowUpRight className="h-4 w-4 opacity-80" aria-hidden strokeWidth={1.75} />
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div variants={heroItem} className="min-w-0 w-full lg:sticky lg:top-28 xl:top-32">
              <ContactForm variant="darkHero" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <FAQ />
      <BottomCTA />
    </>
  );
}
