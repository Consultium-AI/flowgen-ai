"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { cn } from "@/lib/utils";

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
    transition: { duration: 0.8, ease: [0.21, 0.6, 0.36, 1] },
  },
};

function DemoHero() {
  return (
    <section
      data-navbar-theme="dark"
      className="hero-dark relative isolate overflow-hidden pb-32 pt-28 sm:pt-36 lg:pt-40"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 22%, rgba(38,208,124,0.28) 0%, rgba(38,208,124,0.08) 32%, transparent 55%), radial-gradient(circle at 18% 72%, rgba(38,208,124,0.1) 0%, transparent 38%), radial-gradient(circle at 82% 58%, rgba(20,184,166,0.12) 0%, transparent 40%), linear-gradient(180deg, #05110d 0%, #071a14 46%, #030806 100%)",
        }}
      >
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
          className="absolute -top-52 left-1/2 h-[82%] w-[130%] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse at 50% 45%, rgba(38,208,124,0.38) 0%, transparent 58%)",
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
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-bg-tint" />
      </div>

      <div className="container-narrow relative">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <motion.span
            variants={heroItem}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/90"
          >
            <Sparkles className="h-3 w-3 text-accent-glow" />
            Demo · AI Recruitment Ops
          </motion.span>

          <motion.h1
            variants={heroItem}
            className="font-display display-tight text-display-lg font-medium text-balance w-full min-w-0 max-w-5xl px-1 sm:px-2 max-md:hyphens-auto"
          >
            <span className="block max-md:[overflow-wrap:anywhere] md:whitespace-nowrap">
              De operationele dashboard
            </span>
            <span className="block max-md:[overflow-wrap:anywhere] md:whitespace-nowrap">
              voor{" "}
              <span className="text-gradient-accent italic">
                recruitmentbureaus
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Inbox, screening, goedkeuringen en pipeline in één plek — zonder
            tool-hop.
          </motion.p>

          <motion.div
            variants={heroItem}
            className="mt-8 flex justify-center"
          >
            <MagneticButton
              href="/workflow-scan"
              variant="primary"
              className="rounded-full !px-8"
            >
              Plan workflow-scan
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            delay: 0.6,
            ease: [0.21, 0.6, 0.36, 1],
          }}
          className="relative mx-auto mt-16 max-w-6xl"
        >
          <div
            aria-hidden
            className="absolute -inset-10 rounded-[2.5rem] bg-gradient-to-br from-accent/25 via-accent/0 to-cyan-500/25 blur-3xl"
          />
          <BrowserFrame
            url="qozen.ai/recruitment-ops/overzicht"
            src={SCREENS.overzichtMain}
            alt="Qozen AI Recruitment Ops dashboard - Overzicht"
            tone="floating"
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
    <div className="sticky top-20 z-30 -mt-14 sm:top-24">
      <div className="container-narrow">
        <div className="mx-auto flex max-w-5xl items-center gap-1 overflow-x-auto rounded-2xl border border-border bg-white/90 p-1.5 shadow-card backdrop-blur-md">
          {MODULE_NAV.map((m) => {
            const Icon = m.icon;
            const isActive = active === m.id;
            return (
              <a
                key={m.id}
                href={`#${m.id}`}
                className={cn(
                  "relative flex shrink-0 items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold transition-colors duration-200 sm:px-4 sm:text-sm",
                  isActive ? "text-accent" : "text-muted hover:text-ink",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="demo-module-active"
                    className="absolute inset-0 -z-0 rounded-full bg-accent/10"
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
        { icon: ListChecks, label: "Bron-mix" },
      ]}
      screenshots={[
        {
          src: SCREENS.overzichtMain,
          url: "qozen.ai/overzicht",
          alt: "Overzicht dashboard met briefing, KPI's en grafieken",
          label: "Briefing & KPI's",
        },
        {
          src: SCREENS.overzichtApprovals,
          url: "qozen.ai/overzicht / approvals",
          alt: "Wacht op goedkeuring inbox en activity feed",
          label: "Approvals & activity",
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
      title="Centrale kandidaten-inbox met AI-screening"
      lead="Importeer, laat matchen en samenvatten — voordat je een CV opent."
      chips={[
        { icon: Filter, label: "Bronnen & filters" },
        { icon: Brain, label: "Match 0–100%" },
        { icon: Sparkles, label: "AI-samenvatting" },
      ]}
      screenshots={[
        {
          src: SCREENS.kandidatenSanne,
          url: "qozen.ai/kandidaten",
          alt: "Kandidatenlijst met Sanne de Vries detail-paneel",
          label: "Sanne · 94% match",
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
      title="Mens in the loop: niets verstuurd zonder jouw OK"
      lead="AI bereidt outreach en updates voor; jij keurt met uitleg per draft."
      chips={[
        { icon: PenLine, label: "Drafts + confidence" },
        { icon: MessageSquareText, label: "Waarom dit bericht" },
        { icon: BadgeCheck, label: "Bulk-goedkeuren" },
      ]}
      screenshots={[
        {
          src: SCREENS.goedkeuringen,
          url: "qozen.ai/goedkeuringen",
          alt: "Goedkeuringen inbox met outreach-draft voor Sanne de Vries",
          label: "Outreach draft (94%)",
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
          alt: "Pipeline met AI-observaties onderaan",
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
      lead="Alle afspraken en voorstellen op één tijdlijn — koppelbaar aan je stack."
      chips={[
        { icon: Calendar, label: "Week & dag" },
        { icon: Sparkles, label: "AI slot-voorstellen" },
        { icon: Clock, label: "Deadlines" },
      ]}
      screenshots={[
        {
          src: SCREENS.agenda,
          url: "qozen.ai/agenda",
          alt: "Agenda met week-overzicht en AI plant voor je paneel",
          label: "Agenda · week 19",
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
      title="No-code flows: trigger → AI → actie"
      lead="Bouw automatiseringen visueel en zie runs, slagingspercentage en tijdwinst."
      chips={[
        { icon: Zap, label: "Runs & stats" },
        { icon: ListChecks, label: "Trigger → actie" },
        { icon: Brain, label: "AI-stappen" },
      ]}
      screenshots={[
        {
          src: SCREENS.workflows,
          url: "qozen.ai/workflows",
          alt: "Workflows pagina met 6 actieve workflows en stap-overzicht",
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
      title="Tone-of-voice en goedkeurdrempels op maat"
      lead="Jouw merk, jouw grenzen: sliders, verboden woorden en per-type regels."
      chips={[
        { icon: Sliders, label: "Tone sliders" },
        { icon: PenLine, label: "Verboden woorden" },
        { icon: ShieldCheck, label: "Drempels" },
      ]}
      screenshots={[
        {
          src: SCREENS.instellingenTone,
          url: "qozen.ai/instellingen/tone-of-voice",
          alt: "Tone of voice sliders met live preview-bericht",
          label: "Tone-of-voice",
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
    title: "Eén intake, minder ruis",
    text: "Structureer binnenkomende kandidaten, parseer CV's en krijg match-scores voordat je handmatig filtert.",
  },
  {
    icon: GitBranch,
    title: "Doorlopende flow",
    text: "Van score naar pipeline, draft naar goedkeuring en reactie naar agenda — zonder constant te wisselen van tool.",
  },
  {
    icon: ShieldCheck,
    title: "Controle & uitleg",
    text: "Human-in-the-loop, drempels per berichttype en ‘waarom dit’ bij elke AI-actie.",
  },
];

function WhyQozen() {
  return (
    <section className="section">
      <SectionBackground
        variant="mesh"
        shade="warm"
        accent="topRight"
        hue="lime"
        intensity="high"
      />
      <div className="container-narrow">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.08] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              <Sparkles className="h-3 w-3" />
              Waarom Qozen
            </span>
            <h2 className="mt-6 font-display display-tight text-display-md font-semibold text-balance text-ink">
              Minder versnippering, sneller plaatsen
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Drie principes die deze cockpit scherp houden — zonder het verhaal
              drie keer te herhalen.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-3">
          {WHY_QOZEN.map((h, i) => {
            const HIcon = h.icon;
            return (
              <ScrollReveal key={h.title} delay={0.05 + i * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4, ease: [0.21, 0.6, 0.36, 1] }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-border bg-white p-7 shadow-card"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/15">
                    <HIcon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-medium text-ink">
                    {h.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {h.text}
                  </p>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                </motion.div>
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
  return (
    <section className="section">
      <SectionBackground
        variant="spotlight"
        shade="dim"
        accent="center"
        intensity="high"
      />
      <div className="container-narrow">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-white p-12 text-center shadow-card sm:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40"
            >
              <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
            </div>
            <span className="relative inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              <Sparkles className="h-3 w-3" />
              Pilot €399/mnd · €0 setup
            </span>
            <h2 className="relative mt-7 heading-section text-balance">
              Klaar om jouw bureau te transformeren?
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted">
              30 minuten workflow-scan om scope en eerste stap af te stemmen.
            </p>
            <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <MagneticButton
                href="/workflow-scan"
                variant="primary"
                className="rounded-full !px-8"
              >
                Plan workflow-scan
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <Link
                href="/diensten"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-white px-7 py-4 text-sm font-semibold text-ink transition-colors hover:border-accent/30 hover:text-accent"
              >
                Bekijk alle modules
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
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
  const [active, setActive] = useState(0);
  const current = screenshots[active];

  return (
    <section id={id} className="section scroll-mt-32">
      <SectionBackground
        variant="dots"
        shade="tint"
        accent="topRight"
        hue="lime"
        intensity="low"
      />
      <div className="container-narrow">
        <ScrollReveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.08] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              <Icon className="h-3 w-3" />
              {eyebrow}
            </span>
            <h2 className="mt-6 font-display display-tight text-display-md font-semibold text-balance text-ink">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {lead}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="mx-auto mt-7 flex max-w-3xl flex-wrap items-center justify-center gap-2">
            {chips.map(({ icon: ChipIcon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-white px-3 py-1.5 text-xs font-medium text-ink shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
              >
                <ChipIcon className="h-3.5 w-3.5 text-accent" />
                {label}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="relative mt-12">
            <div
              aria-hidden
              className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/12 via-accent/0 to-cyan-500/10 blur-3xl"
            />
            <BrowserFrame
              url={current.url}
              src={current.src}
              alt={current.alt}
              aspectRatio={current.aspectRatio}
              focus={current.focus}
              animateKey={active}
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
                        ? "border-accent/50 text-accent"
                        : "border-border bg-white text-muted hover:text-ink",
                    )}
                  >
                    {i === active && (
                      <motion.span
                        layoutId={`module-${id}-tab`}
                        className="absolute inset-0 -z-0 rounded-full bg-accent/10"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
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
}

function BrowserFrame({
  url,
  src,
  alt,
  tone = "default",
  animateKey,
  aspectRatio,
  focus = "center top",
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-white shadow-card",
        tone === "floating" &&
          "shadow-[0_50px_100px_-32px_rgba(15,23,42,0.45)]",
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-[#f8f9fb] px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#ec6a5e]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#f4bf4f]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#61c554]" />
        </div>
        <div className="ml-3 flex-1 truncate rounded-md border border-gray-200/60 bg-white px-3 py-1 text-[11px] font-mono text-gray-400">
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.21, 0.6, 0.36, 1] }}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.21, 0.6, 0.36, 1] }}
          />
        </AnimatePresence>
      )}
    </div>
  );
}
