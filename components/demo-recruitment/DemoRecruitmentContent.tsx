"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BellRing,
  Brain,
  Calendar,
  Clock,
  Filter,
  GitBranch,
  Inbox,
  LayoutDashboard,
  ListChecks,
  type LucideIcon,
  MessageSquareText,
  PenLine,
  Settings,
  ShieldCheck,
  Sliders,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow as WorkflowIcon,
  Zap,
} from "lucide-react";
import GradualBlur from "@/components/visuals/GradualBlur";
import LineWaves from "@/components/visuals/LineWaves";
import { HERO, RECRUITMENT_DEMO_DISCLAIMER } from "@/lib/content";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { cn } from "@/lib/utils";

const easeOut = [0.21, 0.6, 0.36, 1] as const;

/** Matches `Solution` icon tiles for visual continuity with home. */
const solutionIconChip =
  "grid h-[3.25rem] w-[3.25rem] shrink-0 place-items-center rounded-xl border border-[rgba(119,156,133,0.42)] bg-[rgba(119,156,133,0.11)] text-[#356f4f] transition-colors duration-300 group-hover:border-[rgba(53,111,79,0.35)] group-hover:bg-[rgba(119,156,133,0.16)]";

const featureChip =
  "inline-flex items-center gap-1.5 rounded-full border border-[rgba(119,156,133,0.38)] bg-white/95 px-3 py-1.5 text-xs font-medium text-[#141c18] shadow-[0_1px_2px_rgba(15,23,42,0.04)] backdrop-blur-sm";

const SCREENS = {
  overzichtMain: "/demo-recruitment/Schermafbeelding%202026-05-07%20161034.png",
  overzichtApprovals: "/demo-recruitment/Schermafbeelding%202026-05-07%20162515.png",
  overzichtVacatures: "/demo-recruitment/Schermafbeelding%202026-05-07%20162521.png",
  kandidatenSanne: "/demo-recruitment/Schermafbeelding%202026-05-07%20161047.png",
  kandidatenScreening: "/demo-recruitment/Schermafbeelding%202026-05-07%20162537.png",
  goedkeuringen: "/demo-recruitment/Schermafbeelding%202026-05-07%20161059.png",
  pipeline: "/demo-recruitment/Schermafbeelding%202026-05-07%20161137.png",
  pipelineFull: "/demo-recruitment/Schermafbeelding%202026-05-07%20162604.png",
  agenda: "/demo-recruitment/Schermafbeelding%202026-05-07%20162617.png",
  workflows: "/demo-recruitment/Schermafbeelding%202026-05-07%20162624.png",
  instellingenTone: "/demo-recruitment/Schermafbeelding%202026-05-07%20162645.png",
} as const;

type ModuleId =
  | "overzicht"
  | "kandidaten"
  | "goedkeuringen"
  | "pipeline"
  | "agenda"
  | "workflows"
  | "instellingen";

interface ModuleNavItem {
  id: ModuleId;
  label: string;
  icon: LucideIcon;
}

const MODULE_NAV: ModuleNavItem[] = [
  { id: "overzicht", label: "Overzicht", icon: LayoutDashboard },
  { id: "kandidaten", label: "Kandidaten", icon: Users },
  { id: "goedkeuringen", label: "Goedkeuringen", icon: ShieldCheck },
  { id: "pipeline", label: "Pipeline", icon: GitBranch },
  { id: "agenda", label: "Agenda", icon: Calendar },
  { id: "workflows", label: "Workflows", icon: WorkflowIcon },
  { id: "instellingen", label: "Instellingen", icon: Settings },
];

const DEMO_SECONDARY_CTA = { label: "Bekijk oplossingen", href: "/diensten" } as const;

export function DemoRecruitmentContent() {
  return (
    <>
      <DemoHero />
      <ModuleNav />
      <OverzichtSection />
      <KandidatenSection />
      <GoedkeuringenSection />
      <PipelineSection />
      <AgendaSection />
      <WorkflowsSection />
      <InstellingenSection />
      <WhyQozen />
      <FinalCTA />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    Hero                                    */
/* -------------------------------------------------------------------------- */

const heroContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

function DemoHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      data-navbar-theme="dark"
      className="hero-dark page-hero relative isolate overflow-hidden pb-32 pt-28 sm:pt-36 lg:pt-40"
    >
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
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-4xl flex-col items-center text-center pb-16"
        >
          <div className="page-hero-copy flex w-full max-w-4xl flex-col items-center text-center">
            <motion.p
              variants={heroItem}
              className="inline-flex items-center justify-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.34em] text-white/95"
            >
              <Sparkles
                className="h-3.5 w-3.5 text-[#9ec4b0]/90"
                aria-hidden
                strokeWidth={1.75}
              />
              Demo recruitment ops
            </motion.p>

            <motion.h1
              variants={heroItem}
              className="font-display display-tight text-display-xl font-medium text-ink text-balance w-full min-w-0 max-w-4xl px-1 text-center sm:px-2 max-md:hyphens-auto mt-7"
            >
              <span className="block max-md:[overflow-wrap:anywhere] md:whitespace-nowrap">
                Het operationele dashboard
              </span>
              <span className="block max-md:[overflow-wrap:anywhere] md:whitespace-nowrap">
                voor{" "}
              </span>
              <span className="text-gradient-accent-hero-home italic">
                  recruitmentbureaus  ‎ 
                </span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="hero-lead mx-auto mt-7 w-full max-w-xl text-center text-base leading-relaxed text-muted sm:text-lg"
            >
              Inbox, screening, goedkeuringen en pipeline op één plek, zonder
              constant te wisselen van tool.
            </motion.p>
            <motion.p
              variants={heroItem}
              role="note"
              className="mx-auto mt-6 max-w-xl rounded-2xl border border-white/[0.14] bg-white/[0.06] px-5 py-4 text-center text-[0.8125rem] leading-relaxed text-white/[0.78] ring-1 ring-black/[0.2] backdrop-blur-sm sm:text-sm"
            >
              {RECRUITMENT_DEMO_DISCLAIMER} Schermen en koppelingen in deze
              demo illustreren de richting; echte integraties plannen we per
              pilot.
            </motion.p>
          </div>

          <motion.div
            variants={heroItem}
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
              href={DEMO_SECONDARY_CTA.href}
              variant="navbarGlass"
              className="min-h-[2.625rem] w-full min-w-[12rem] sm:w-auto sm:min-w-[14rem]"
            >
              {DEMO_SECONDARY_CTA.label}
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            delay: 0.6,
            ease: easeOut,
          }}
          className="relative mx-auto mt-10 max-w-6xl sm:mt-14"
        >
          <div
            aria-hidden
            className="absolute -inset-10 rounded-[2.5rem] bg-gradient-to-br from-accent/25 via-accent/0 to-cyan-500/25 blur-3xl"
          />
          <BrowserFrame
            url="qozen.ai/recruitment-ops/overzicht"
            src={SCREENS.overzichtMain}
            alt="Qozen AI Recruitment Ops dashboard overzicht"
            tone="floating"
            reduceMotion={!!reduceMotion}
          />
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Module Nav                                  */
/* -------------------------------------------------------------------------- */

function ModuleNav() {
  const [active, setActive] = useState<ModuleId>("overzicht");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id as ModuleId);
          }
        });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    );
    MODULE_NAV.forEach((m) => {
      const el = document.getElementById(m.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-20 z-30 -mt-14 sm:top-4">
      <div className="container-narrow">
        <div className="mx-auto flex w-fit max-w-full items-center gap-1 overflow-x-auto rounded-[1.25rem] border border-neutral-950/[0.07] bg-white/[0.92] p-1.5 shadow-[0_22px_50px_-36px_rgba(20,34,26,0.18)] ring-1 ring-black/[0.03] backdrop-blur-md sm:w-full sm:max-w-5xl sm:overflow-x-visible sm:rounded-2xl">
          {MODULE_NAV.map((m) => {
            const Icon = m.icon;
            const isActive = active === m.id;
            return (
              <a
                key={m.id}
                href={`#${m.id}`}
                className={cn(
                  "relative flex shrink-0 items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold transition-colors duration-200 sm:min-w-0 sm:flex-1 sm:justify-center sm:px-2 sm:text-sm md:px-3",
                  isActive ? "text-[#356f4f]" : "text-muted hover:text-ink",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="demo-module-active"
                    className="absolute inset-0 -z-0 rounded-full bg-[rgba(119,156,133,0.14)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="relative z-10 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="relative z-10 whitespace-nowrap">{m.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                            Module 1: Overzicht                             */
/* -------------------------------------------------------------------------- */

function OverzichtSection() {
  return (
    <ModuleSection
      id="overzicht"
      icon={LayoutDashboard}
      eyebrow="Module 01 · Overzicht"
      title="Dagelijkse briefing en KPI's in één oogopslag"
      lead="Zie wat AI vannacht deed en waar je team vandaag moet bijsturen."
      chips={[
        { icon: BellRing, label: "AI-briefing" },
        { icon: TrendingUp, label: "Live KPI's" },
        { icon: ListChecks, label: "Bronmix" },
      ]}
      screenshots={[
        {
          src: SCREENS.overzichtMain,
          url: "qozen.ai/overzicht",
          alt: "Overzicht dashboard met briefing KPI's en grafieken",
          label: "Briefing en KPI's",
        },
        {
          src: SCREENS.overzichtApprovals,
          url: "qozen.ai/overzicht / approvals",
          alt: "Wacht op goedkeuring inbox en activity feed",
          label: "Approvals en activity",
          aspectRatio: "16 / 7",
          focus: "50% 30%",
        },
        {
          src: SCREENS.overzichtVacatures,
          url: "qozen.ai/overzicht / vacatures",
          alt: "Tabel met actieve vacatures en voortgang",
          label: "Actieve vacatures",
          aspectRatio: "16 / 6",
          focus: "50% 50%",
        },
      ]}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*                           Module 2: Kandidaten                             */
/* -------------------------------------------------------------------------- */

function KandidatenSection() {
  return (
    <ModuleSection
      id="kandidaten"
      icon={Users}
      eyebrow="Module 02 · Kandidaten"
      title="Centrale kandidateninbox met AI-screening"
      lead="Importeer, laat matchen en samenvatten, voordat je een CV opent."
      chips={[
        { icon: Filter, label: "Bronnen en filters" },
        { icon: Brain, label: "Match 0 tot 100%" },
        { icon: Sparkles, label: "AI-samenvatting" },
      ]}
      screenshots={[
        {
          src: SCREENS.kandidatenSanne,
          url: "qozen.ai/kandidaten",
          alt: "Kandidatenlijst met Sanne de Vries detail-paneel",
          label: "Sanne 94% match",
        },
        {
          src: SCREENS.kandidatenScreening,
          url: "qozen.ai/kandidaten / AI screening",
          alt: "AI screening overview en bespaarde tijd",
          label: "AI-screening week",
        },
      ]}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*                       Module 3: Goedkeuringen                              */
/* -------------------------------------------------------------------------- */

function GoedkeuringenSection() {
  return (
    <ModuleSection
      id="goedkeuringen"
      icon={ShieldCheck}
      eyebrow="Module 03 · Goedkeuringen"
      title="Niets verstuurd zonder jouw OK, mens in the loop"
      lead="AI bereidt outreach en updates voor; jij keurt met uitleg per concept."
      chips={[
        { icon: PenLine, label: "Concepten met confidence" },
        { icon: MessageSquareText, label: "Waarom dit bericht" },
        { icon: BadgeCheck, label: "Bulk goedkeuren" },
      ]}
      screenshots={[
        {
          src: SCREENS.goedkeuringen,
          url: "qozen.ai/goedkeuringen",
          alt: "Goedkeuringen inbox met outreach draft voor Sanne de Vries",
          label: "Outreach-concept 94%",
        },
      ]}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*                             Module 4: Pipeline                             */
/* -------------------------------------------------------------------------- */

function PipelineSection() {
  return (
    <ModuleSection
      id="pipeline"
      icon={GitBranch}
      eyebrow="Module 04 · Pipeline"
      title="Kanban die meedenkt over conversie en vertraging"
      lead="Sleep kandidaten door fases; AI signaleert knelpunten vroeg."
      chips={[
        { icon: Target, label: "Match per kaart" },
        { icon: TrendingUp, label: "Benchmarks" },
        { icon: BellRing, label: "Knelpunten" },
      ]}
      screenshots={[
        {
          src: SCREENS.pipeline,
          url: "qozen.ai/pipeline",
          alt: "Recruitment pipeline kanban met 5 fases",
          label: "Kanban-fases",
        },
        {
          src: SCREENS.pipelineFull,
          url: "qozen.ai/pipeline / observaties",
          alt: "Pipeline met AI observaties onderaan",
          label: "AI-observaties",
        },
      ]}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*                              Module 5: Agenda                              */
/* -------------------------------------------------------------------------- */

function AgendaSection() {
  return (
    <ModuleSection
      id="agenda"
      icon={Calendar}
      eyebrow="Module 05 · Agenda"
      title="Weekoverzicht voor intakes en klantmomenten"
      lead="In de demo zie je planning en voorstellen op één tijdlijn; pilots starten zonder zware kalender- of stackkoppeling, tenzij we die expliciet in scope nemen."
      chips={[
        { icon: Calendar, label: "Week en dag" },
        { icon: Sparkles, label: "AI-slotvoorstellen" },
        { icon: Clock, label: "Deadlines" },
      ]}
      screenshots={[
        {
          src: SCREENS.agenda,
          url: "qozen.ai/agenda",
          alt: "Agenda met weekoverzicht en AI plant voor je paneel",
          label: "Agenda week 19",
        },
      ]}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*                            Module 6: Workflows                             */
/* -------------------------------------------------------------------------- */

function WorkflowsSection() {
  return (
    <ModuleSection
      id="workflows"
      icon={WorkflowIcon}
      eyebrow="Module 06 · Workflows"
      title="Bouw flows met trigger, AI-stap en actie zonder code"
      lead="Bouw visueel en volg runs met slagingspercentage en tijdwinst."
      chips={[
        { icon: Zap, label: "Runs en stats" },
        { icon: ListChecks, label: "Trigger en actie" },
        { icon: Brain, label: "AI-stappen" },
      ]}
      screenshots={[
        {
          src: SCREENS.workflows,
          url: "qozen.ai/workflows",
          alt: "Workflows pagina met zes actieve workflows en stap overzicht",
          label: "Workflows-overzicht",
        },
      ]}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*                          Module 7: Instellingen                            */
/* -------------------------------------------------------------------------- */

function InstellingenSection() {
  return (
    <ModuleSection
      id="instellingen"
      icon={Settings}
      eyebrow="Module 07 · Instellingen"
      title="Tone of voice en goedkeurdrempels op maat"
      lead="Slides, verboden woorden en regels per type, passend bij jouw merk."
      chips={[
        { icon: Sliders, label: "Tone-sliders" },
        { icon: PenLine, label: "Verboden woorden" },
        { icon: ShieldCheck, label: "Drempels" },
      ]}
      screenshots={[
        {
          src: SCREENS.instellingenTone,
          url: "qozen.ai/instellingen/tone-of-voice",
          alt: "Tone of voice sliders met live preview bericht",
          label: "Tone of voice",
        },
      ]}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*                              Why Qozen                                     */
/* -------------------------------------------------------------------------- */

const WHY_QOZEN: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Inbox,
    title: "Eén intake met minder ruis",
    text: "Structureer binnenkomende kandidaten, parseer cv's en krijg match-scores voordat je zelf filtert.",
  },
  {
    icon: GitBranch,
    title: "Doorlopende flow",
    text: "Van score naar pipeline, van concept naar goedkeuring en opvolging in de agenda zonder van tool te wisselen.",
  },
  {
    icon: ShieldCheck,
    title: "Controle en uitleg",
    text: "Mens in the loop met drempels per berichttype en ‘waarom dit’ bij elke AI-actie.",
  },
];

function WhyQozen() {
  return (
    <section className="section relative isolate overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #f8fbf9 0%, #f1f7f4 38%, #f6f9f7 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 88% 50% at 50% -6%, rgba(119,156,133,0.14) 0%, transparent 55%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(53,111,79,0.06) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="container-narrow relative">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal delay={0.08}>
            <p className="inline-flex items-center justify-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.34em] text-[#356f4f]/90">
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-[#779c85] shadow-[0_0_0_4px_rgba(119,156,133,0.18)]"
                aria-hidden
              />
              Waarom Qozen
            </p>
            <h2 className="heading-section mx-auto mt-4 max-w-2xl text-[#141c18] text-balance sm:mt-5">
              Minder versnippering, sneller plaatsen
            </h2>
            <p className="body-lg mx-auto mt-5 max-w-2xl text-muted">
              Drie principes die deze cockpit scherp houden, zonder het verhaal
              steeds opnieuw te vertellen.
            </p>
          </ScrollReveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-3 sm:gap-5 lg:mt-16">
          {WHY_QOZEN.map((h, i) => {
            const HIcon = h.icon;
            return (
              <ScrollReveal key={h.title} delay={0.05 + i * 0.06}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.35, ease: easeOut }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/85 bg-white/90 p-7 shadow-[0_22px_60px_-40px_rgba(15,40,28,0.25)] backdrop-blur-sm sm:p-8"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-[rgba(119,156,133,0.08)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className={`relative z-10 ${solutionIconChip}`}>
                    <HIcon className="h-[1.35rem] w-[1.35rem]" strokeWidth={1.65} />
                  </div>
                  <h3 className="relative z-10 mt-5 font-display text-xl font-medium text-ink">
                    {h.title}
                  </h3>
                  <p className="relative z-10 mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {h.text}
                  </p>
                </motion.article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Final CTA                                     */
/* -------------------------------------------------------------------------- */

function FinalCTA() {
  const ease = easeOut;

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
            maskImage:
              "radial-gradient(ellipse 72% 60% at 50% 35%, #000 8%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 72% 60% at 50% 35%, #000 8%, transparent 72%)",
          }}
        />
      </div>

      <div className="container-narrow relative z-[1]">
        <ScrollReveal delay={0.04}>
          <header className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center justify-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.34em] text-white">
              <Sparkles
                className="h-3.5 w-3.5 text-[#9ec4b0]/90"
                aria-hidden
                strokeWidth={1.75}
              />
              Pilot · €399 p/m · €0 setup
            </p>
            <h2 className="font-display mt-6 text-[1.85rem] font-medium leading-[1.12] tracking-[-0.03em] text-[#f4f7f5] text-balance sm:text-[2.35rem] sm:leading-[1.08] lg:text-[2.65rem]">
              Klaar om jouw bureau te transformeren?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[0.98rem] leading-[1.75] text-white/[0.62] sm:text-[1.05rem]">
              In dertig minuten stem je scope en eerste stap af tijdens een
              workflow-scan.
            </p>
          </header>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease }}
            className="mx-auto mt-14 max-w-2xl sm:mt-16"
          >
            <div className="overflow-hidden rounded-[1.25rem] border border-white/[0.09] bg-[#050908]/75 p-10 text-center shadow-[0_40px_120px_-60px_rgba(0,0,0,0.85)] backdrop-blur-sm sm:rounded-2xl sm:p-12">
              <p className="text-[0.9375rem] leading-relaxed text-white/75">
                Geen wirwar van tabs meer: approvals, inbox en pipeline in één
                cockpit, mét zichtbare AI en jouw drempels.{" "}
                <span className="text-white/60">
                  {RECRUITMENT_DEMO_DISCLAIMER}
                </span>
              </p>
            </div>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.14}>
          <div className="mx-auto mt-12 flex max-w-xl flex-col items-stretch gap-3 sm:mt-14 sm:flex-row sm:items-center sm:justify-center lg:mt-16">
            <div className="sm:inline-block">
              <MagneticButton
                href="/workflow-scan"
                variant="primary"
                className="!w-full !rounded-full !border-0 !bg-gradient-to-r !from-[#356f4f] !to-[#2d5842] !px-9 !py-3.5 !text-[13px] !text-white shadow-[0_18px_48px_-22px_rgba(53,111,79,0.55)] hover:!from-[#3d7a65] hover:!to-[#356f4f] hover:!shadow-[0_22px_56px_-20px_rgba(119,156,133,0.35)] sm:!w-auto sm:!text-sm"
              >
                Plan workflow-scan
                <ArrowRight className="h-4 w-4" aria-hidden />
              </MagneticButton>
            </div>
            <motion.div whileTap={{ scale: 0.98 }} transition={{ duration: 0.15 }}>
              <Link
                href="/diensten"
                className="group inline-flex min-h-[2.875rem] w-full items-center justify-center gap-2 rounded-full border border-white/[0.18] bg-white/[0.05] px-9 py-3.5 text-[13px] font-semibold text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm transition-colors hover:border-white/28 hover:bg-white/[0.09] sm:w-auto sm:text-sm"
              >
                Alle modules bekijken
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                       Helper: Module Section                               */
/* -------------------------------------------------------------------------- */

interface ChipDef {
  icon: LucideIcon;
  label: string;
}

interface ScreenshotDef {
  src: string;
  url: string;
  alt: string;
  label: string;
  aspectRatio?: string;
  focus?: string;
}

interface ModuleSectionProps {
  id: ModuleId;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  lead: string;
  chips: ChipDef[];
  screenshots: ScreenshotDef[];
}

function ModuleSection({
  id,
  icon: Icon,
  eyebrow,
  title,
  lead,
  chips,
  screenshots,
}: ModuleSectionProps) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const current = screenshots[active];

  const tabSpring = reduceMotion
    ? { duration: 0.01 }
    : { type: "spring" as const, stiffness: 380, damping: 30 };

  return (
    <section id={id} className="section scroll-mt-32">
      <SectionBackground
        variant="dots"
        shade="tint"
        accent="topRight"
        hue="lime"
        intensity="low"
      />
      <div className="container-narrow relative">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center justify-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-[#356f4f]/80">
              <Icon className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
              {eyebrow}
            </p>
            <h2 className="heading-section mt-3 text-[#14221a] sm:mt-4 text-balance">
              {title}
            </h2>
            <p className="body-lg mx-auto mt-5 max-w-2xl text-muted">{lead}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="mx-auto mt-7 flex max-w-3xl flex-wrap items-center justify-center gap-2">
            {chips.map(({ icon: ChipIcon, label }) => (
              <span key={label} className={featureChip}>
                <ChipIcon className="h-3.5 w-3.5 text-[#356f4f]" aria-hidden />
                {label}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="relative mt-12 lg:mt-14">
            <div
              aria-hidden
              className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[rgba(119,156,133,0.12)] via-transparent to-[rgba(20,184,166,0.08)] blur-3xl"
            />
            <BrowserFrame
              url={current.url}
              src={current.src}
              alt={current.alt}
              aspectRatio={current.aspectRatio}
              focus={current.focus}
              animateKey={active}
              reduceMotion={!!reduceMotion}
              tone="floating"
            />

            {screenshots.length > 1 && (
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                {screenshots.map((s, i) => (
                  <button
                    key={s.src}
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      "relative rounded-full border px-4 py-1.5 text-xs font-semibold transition-all sm:text-sm",
                      i === active
                        ? "border-[rgba(53,111,79,0.45)] text-[#356f4f]"
                        : "border-slate-200/90 bg-white/95 text-muted hover:text-ink",
                    )}
                  >
                    {i === active && (
                      <motion.span
                        layoutId={`module-${id}-tab`}
                        className="absolute inset-0 -z-0 rounded-full bg-[rgba(119,156,133,0.14)]"
                        transition={tabSpring}
                      />
                    )}
                    <span className="relative z-10">{s.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                          Helper: BrowserFrame                              */
/* -------------------------------------------------------------------------- */

interface BrowserFrameProps {
  url: string;
  src: string;
  alt: string;
  tone?: "default" | "floating";
  animateKey?: string | number;
  /** When set, image fills this aspect ratio via object-cover. */
  aspectRatio?: string;
  /** CSS object-position when aspectRatio is set. */
  focus?: string;
  reduceMotion?: boolean;
}

function BrowserFrame({
  url,
  src,
  alt,
  tone = "default",
  animateKey,
  aspectRatio,
  focus = "center top",
  reduceMotion,
}: BrowserFrameProps) {
  const imgTransition = reduceMotion
    ? { duration: 0.01 }
    : { duration: 0.35, ease: easeOut };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_22px_60px_-40px_rgba(15,40,28,0.28)]",
        tone === "floating" &&
          "shadow-[0_50px_100px_-32px_rgba(15,23,42,0.45)]",
      )}
    >
      <div className="flex items-center gap-2 border-b border-slate-200/80 bg-[#f4f7f5] px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#ec6a5e]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#f4bf4f]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#61c554]" />
        </div>
        <div className="ml-3 flex-1 truncate rounded-md border border-slate-200/80 bg-white px-3 py-1 text-[11px] font-mono text-slate-500">
          {url}
        </div>
      </div>

      {aspectRatio ? (
        <div
          className="relative w-full overflow-hidden bg-white"
          style={{ aspectRatio }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={animateKey ?? src}
              src={src}
              alt={alt}
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: focus }}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={imgTransition}
            />
          </AnimatePresence>
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.img
            key={animateKey ?? src}
            src={src}
            alt={alt}
            draggable={false}
            className="block h-auto w-full"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={imgTransition}
          />
        </AnimatePresence>
      )}
    </div>
  );
}
