"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BellRing,
  Bot,
  Brain,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Filter,
  GitBranch,
  Inbox,
  LayoutDashboard,
  ListChecks,
  type LucideIcon,
  Mail,
  MessageSquareText,
  MousePointer2,
  PenLine,
  PlugZap,
  Search,
  Settings,
  ShieldCheck,
  Sliders,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Workflow as WorkflowIcon,
  Zap,
} from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const SCREENS = {
  overzichtMain: "/demo-recruitment/Schermafbeelding%202026-05-07%20161034.png",
  overzichtFull: "/demo-recruitment/Schermafbeelding%202026-05-07%20162509.png",
  overzichtApprovals: "/demo-recruitment/Schermafbeelding%202026-05-07%20162515.png",
  overzichtVacatures: "/demo-recruitment/Schermafbeelding%202026-05-07%20162521.png",
  kandidatenSanne: "/demo-recruitment/Schermafbeelding%202026-05-07%20161047.png",
  kandidatenLotte: "/demo-recruitment/Schermafbeelding%202026-05-07%20162530.png",
  kandidatenScreening: "/demo-recruitment/Schermafbeelding%202026-05-07%20162537.png",
  goedkeuringen: "/demo-recruitment/Schermafbeelding%202026-05-07%20161059.png",
  goedkeuringenAlt: "/demo-recruitment/Schermafbeelding%202026-05-07%20162555.png",
  pipeline: "/demo-recruitment/Schermafbeelding%202026-05-07%20161137.png",
  pipelineFull: "/demo-recruitment/Schermafbeelding%202026-05-07%20162604.png",
  agenda: "/demo-recruitment/Schermafbeelding%202026-05-07%20162617.png",
  workflows: "/demo-recruitment/Schermafbeelding%202026-05-07%20162624.png",
  instellingenTone: "/demo-recruitment/Schermafbeelding%202026-05-07%20162645.png",
  instellingenApprovals: "/demo-recruitment/Schermafbeelding%202026-05-07%20162640.png",
} as const;

type ModuleId =
  | "overzicht"
  | "kandidaten"
  | "goedkeuringen"
  | "pipeline"
  | "agenda"
  | "workflows"
  | "instellingen";

interface ModuleDef {
  id: ModuleId;
  label: string;
  icon: LucideIcon;
}

const MODULES: ModuleDef[] = [
  { id: "overzicht", label: "Overzicht", icon: LayoutDashboard },
  { id: "kandidaten", label: "Kandidaten", icon: Users },
  { id: "goedkeuringen", label: "AI Goedkeuringen", icon: ShieldCheck },
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
      <AICapabilities />
      <EndToEndFlow />
      <Differentiation />
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

const HERO_STATS: { label: string; value: string; sub: string }[] = [
  { label: "AI deze week", value: "31 u", sub: "bespaard t.o.v. handmatig" },
  { label: "Inkomend", value: "142", sub: "kandidaten · +18%" },
  { label: "Workflow succes", value: "96%", sub: "180 runs deze week" },
  { label: "Plaatsingen mei", value: "7", sub: "+3 vs vorige maand" },
];

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
            className="font-display display-tight text-display-xl font-medium text-balance"
          >
            <span className="block">De operationele cockpit</span>
            <span className="block">
              voor{" "}
              <span className="text-gradient-accent italic">
                recruitmentbureaus
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="mt-7 max-w-2xl text-base sm:text-lg leading-relaxed text-muted"
          >
            Centrale kandidaten-inbox, AI-screening, goedgekeurde communicatie,
            pipeline-sturing en planning &mdash; allemaal op één plek. Minder
            schakelen, meer plaatsingen.
          </motion.p>

          <motion.div
            variants={heroItem}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          >
            <MagneticButton
              href="#overzicht"
              variant="primary"
              className="rounded-full !px-8"
            >
              Bekijk de modules
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton
              href="/workflow-scan"
              variant="secondary"
              className="rounded-full !px-8"
            >
              Plan workflow-scan
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={heroItem}
            className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {HERO_STATS.map((s, i) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-left backdrop-blur-sm"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">
                  {s.label}
                </span>
                <div className="mt-1.5 text-xl font-semibold text-white sm:text-2xl">
                  {s.value}
                </div>
                <div className="mt-0.5 text-[11px] text-white/55">{s.sub}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            delay: 0.6,
            ease: [0.21, 0.6, 0.36, 1],
          }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div
            aria-hidden
            className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-accent/20 via-accent/0 to-cyan-500/20 blur-3xl"
          />
          <BrowserFrame
            url="qozen.ai/recruitment-ops/overzicht"
            src={SCREENS.overzichtMain}
            alt="Qozen AI Recruitment Ops dashboard - Overzicht"
            tone="floating"
          >
            <FloatingCursor
              positions={[
                { x: "8%", y: "16%" },
                { x: "32%", y: "32%" },
                { x: "62%", y: "44%" },
                { x: "20%", y: "68%" },
              ]}
            />
            <Hotspot top="14%" left="6%" label="AI briefing" />
            <Hotspot top="42%" left="58%" label="6 KPI's" delay={1.4} side="left" />
          </BrowserFrame>
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
    MODULES.forEach((m) => {
      const el = document.getElementById(m.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-20 z-30 -mt-12 sm:top-24">
      <div className="container-narrow">
        <div className="mx-auto flex max-w-5xl items-center gap-1 overflow-x-auto rounded-2xl border border-border bg-white/90 p-1.5 shadow-card backdrop-blur-md">
          {MODULES.map((m) => {
            const Icon = m.icon;
            const isActive = active === m.id;
            return (
              <a
                key={m.id}
                href={`#${m.id}`}
                className={cn(
                  "relative flex shrink-0 items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold transition-colors duration-200 sm:px-4 sm:text-sm",
                  isActive
                    ? "text-accent"
                    : "text-muted hover:text-ink",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="demo-module-active"
                    className="absolute inset-0 -z-0 rounded-xl bg-accent/10"
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
      step="01"
      icon={LayoutDashboard}
      eyebrow="Module 01 · Overzicht"
      title="Dagcommandocentrale"
      lead="Elke ochtend laat het dashboard zien wat AI vannacht heeft afgehandeld én waar vandaag aandacht naartoe moet. Geen lege inbox-shock meer."
      bullets={[
        {
          icon: BellRing,
          title: "AI-briefing om 09:00",
          text: "“3 zaken vragen je aandacht voor 12:00” — vertraagde aanbiedingen, top-matches en vacatures buiten target.",
        },
        {
          icon: TrendingUp,
          title: "6 KPI's in real-time",
          text: "Inkomend, wacht-op-goedkeuring, shortlist, doorlooptijd, plaatsingen en bespaarde AI-uren — direct zichtbaar.",
        },
        {
          icon: ListChecks,
          title: "Bron-mix & pipeline-volume",
          text: "Zie per dag of de instroom verwerkt wordt en welke kanalen écht bijdragen aan plaatsingen.",
        },
      ]}
      align="image-right"
      screenshots={[
        {
          src: SCREENS.overzichtMain,
          url: "qozen.ai/overzicht",
          alt: "Overzicht dashboard met briefing, KPI's en grafieken",
          hotspots: [
            { top: "20%", left: "8%", label: "AI briefing — 3 prioriteiten" },
            { top: "50%", left: "30%", label: "6 KPI's", side: "left", delay: 1.2 },
          ],
          cursor: [
            { x: "10%", y: "22%" },
            { x: "30%", y: "52%" },
            { x: "70%", y: "78%" },
          ],
        },
        {
          src: SCREENS.overzichtApprovals,
          url: "qozen.ai/overzicht — approvals & activity",
          alt: "Wacht op goedkeuring inbox en activity feed",
          hotspots: [
            { top: "14%", left: "8%", label: "Goedkeuring-inbox" },
            { top: "14%", left: "60%", label: "Live activity feed", side: "left", delay: 1.0 },
          ],
        },
        {
          src: SCREENS.overzichtVacatures,
          url: "qozen.ai/overzicht — actieve vacatures",
          alt: "Tabel met actieve vacatures en voortgang",
          hotspots: [
            { top: "32%", left: "6%", label: "Spoed-status zichtbaar" },
            { top: "50%", left: "70%", label: "Voortgang per rol", side: "left", delay: 1.0 },
          ],
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
      step="02"
      icon={Users}
      eyebrow="Module 02 · Kandidaten"
      title="Centrale inbox voor élke bron"
      lead="LinkedIn, Indeed, je website, e-mail, Calendly en je ATS — alles komt op één plek binnen. AI screent, vat samen en geeft een match-score voordat jij ’m opent."
      bullets={[
        {
          icon: Filter,
          title: "Filter per kanaal",
          text: "Zie in één klik wie via LinkedIn, Indeed, website, referral, e-mail of Calendly binnenkwam.",
        },
        {
          icon: Brain,
          title: "Match-score 0–100%",
          text: "AI vergelijkt skills, ervaring, locatie en sectorervaring met openstaande vacatures.",
        },
        {
          icon: Sparkles,
          title: "AI-samenvatting per kandidaat",
          text: "“8 jaar React, scale-up ervaring, design systems, beschikbaar per 1 juni.” Geen CV's meer doorworstelen.",
        },
        {
          icon: Zap,
          title: "Bulk-screen knop",
          text: "Screen 12 kandidaten tegelijk met AI. Bespaart ~7,2 uur per week.",
        },
      ]}
      align="image-left"
      screenshots={[
        {
          src: SCREENS.kandidatenSanne,
          url: "qozen.ai/kandidaten — Sanne de Vries (94% match)",
          alt: "Kandidatenlijst met Sanne de Vries detail-paneel",
          hotspots: [
            { top: "40%", left: "60%", label: "94% match · Top-match", side: "left" },
            { top: "20%", left: "30%", label: "Bron-filters", delay: 1.2 },
          ],
          cursor: [
            { x: "32%", y: "42%" },
            { x: "76%", y: "44%" },
            { x: "76%", y: "70%" },
          ],
        },
        {
          src: SCREENS.kandidatenLotte,
          url: "qozen.ai/kandidaten — Lotte Bakker (91%)",
          alt: "Kandidatenlijst met Lotte Bakker geselecteerd",
          hotspots: [
            { top: "55%", left: "20%", label: "AI-samenvatting per kandidaat" },
            { top: "30%", left: "75%", label: "Detailpaneel", side: "left", delay: 1.0 },
          ],
        },
        {
          src: SCREENS.kandidatenScreening,
          url: "qozen.ai/kandidaten — AI screening week",
          alt: "AI screening overview en bespaarde tijd",
          hotspots: [
            { top: "22%", left: "78%", label: "7,2u bespaard deze week", side: "left" },
            { top: "60%", left: "20%", label: "Risico-labels (twijfel, te junior)" },
          ],
        },
      ]}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*                       Module 3: AI Goedkeuringen                           */
/* -------------------------------------------------------------------------- */

function GoedkeuringenSection() {
  return (
    <ModuleSection
      id="goedkeuringen"
      step="03"
      icon={ShieldCheck}
      eyebrow="Module 03 · AI Goedkeuringen"
      title="Niets gaat naar buiten zonder jouw blik"
      lead="Human-in-the-loop is standaard aan. AI draft outreach, intake-uitnodigingen, klantupdates en afwijzingen. Jij bewerkt, keurt goed of wijst af — met uitleg waarom AI dit zo schreef."
      bullets={[
        {
          icon: PenLine,
          title: "AI-drafts met confidence",
          text: "Elke draft toont een confidence-score (bv. 94%). Hoge confidence kan auto-verzenden, lage altijd handmatig.",
        },
        {
          icon: MessageSquareText,
          title: "“Waarom dit bericht”",
          text: "AI legt uit waarom hij deze hook, deze stack-match en deze tone-of-voice koos. Geen black box.",
        },
        {
          icon: BadgeCheck,
          title: "Bulk goedkeuren",
          text: "Hoge-confidence drafts kun je in bulk goedkeuren — laag-risico communicatie blijft snel.",
        },
        {
          icon: Sliders,
          title: "Drempels per type",
          text: "Outreach altijd handmatig, intake-uitnodigingen auto bij ≥90%, afwijzingen altijd review. Jij bepaalt.",
        },
      ]}
      align="image-right"
      screenshots={[
        {
          src: SCREENS.goedkeuringen,
          url: "qozen.ai/goedkeuringen",
          alt: "AI Goedkeuringen inbox met outreach-draft voor Sanne de Vries",
          hotspots: [
            { top: "16%", left: "30%", label: "Human-in-the-loop is aan" },
            { top: "50%", left: "78%", label: "94% confidence", side: "left", delay: 1.0 },
            { top: "82%", left: "68%", label: "Bewerken · Goedkeuren", side: "left", delay: 2.0 },
          ],
          cursor: [
            { x: "32%", y: "40%" },
            { x: "60%", y: "55%" },
            { x: "78%", y: "82%" },
          ],
        },
        {
          src: SCREENS.goedkeuringenAlt,
          url: "qozen.ai/goedkeuringen — draft details",
          alt: "Goedkeuringen detail met explanation",
          hotspots: [
            { top: "42%", left: "40%", label: "“Waarom dit bericht”-uitleg" },
            { top: "20%", left: "70%", label: "Tone-of-voice match", side: "left", delay: 1.2 },
          ],
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
      step="04"
      icon={GitBranch}
      eyebrow="Module 04 · Pipeline"
      title="Kanban die meedenkt"
      lead="Sleep kandidaten van Nieuw → Gescreend → Intake → Klantgesprek → Aanbieding. AI registreert communicatie automatisch en signaleert knelpunten voordat ze problemen worden."
      bullets={[
        {
          icon: Target,
          title: "Match-score per kaart",
          text: "Zie per kandidaat direct match %, labels (Top-match, Domeinmatch, Tech-fit twijfel) en tijd in fase.",
        },
        {
          icon: TrendingUp,
          title: "Conversie-benchmarks",
          text: "“Intake → Klantgesprek is 64% — 12 punten boven jouw benchmark.” Sturen op data, niet op gevoel.",
        },
        {
          icon: BellRing,
          title: "Knelpunt-detectie",
          text: "“3 kandidaten staan langer dan 7 dagen in Klantgesprek — Loop SaaS lijkt traag met feedback.”",
        },
        {
          icon: Sparkles,
          title: "Plaatsings-voorspelling",
          text: "AI voorspelt ~3 plaatsingen in mei op basis van pipeline-snelheid en historische conversies.",
        },
      ]}
      align="image-left"
      screenshots={[
        {
          src: SCREENS.pipeline,
          url: "qozen.ai/pipeline",
          alt: "Recruitment pipeline kanban met 5 fases",
          hotspots: [
            { top: "30%", left: "8%", label: "Sleep tussen fases" },
            { top: "60%", left: "12%", label: "Match-score & labels" },
            { top: "30%", left: "78%", label: "Aanbieding fase", side: "left", delay: 1.5 },
          ],
          cursor: [
            { x: "12%", y: "40%" },
            { x: "44%", y: "45%" },
            { x: "76%", y: "50%" },
          ],
        },
        {
          src: SCREENS.pipelineFull,
          url: "qozen.ai/pipeline — observaties",
          alt: "Pipeline met AI-observaties onderaan",
          hotspots: [
            { top: "85%", left: "15%", label: "AI-knelpunt-detectie" },
            { top: "85%", left: "70%", label: "Plaatsings-voorspelling", side: "left", delay: 1.2 },
          ],
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
      step="05"
      icon={Calendar}
      eyebrow="Module 05 · Agenda"
      title="AI plant op basis van Calendly"
      lead="Intakes, klantgesprekken en demo's komen samen in één weekoverzicht. AI stelt slots voor op basis van jouw agenda en stuurt ze naar kandidaten — jij bevestigt."
      bullets={[
        {
          icon: Calendar,
          title: "Week- & dagweergave",
          text: "Schakel snel tussen week- en dag-view. Bevestigde, voorgestelde en wachten-op-antwoord status zichtbaar.",
        },
        {
          icon: Sparkles,
          title: "“AI plant voor je”",
          text: "Voor elke top-match stelt AI 3 slots voor uit jouw Calendly — automatisch verstuurd na goedkeuring.",
        },
        {
          icon: Clock,
          title: "Komende deadlines",
          text: "Aanbieding-reacties, eerste werkdagen en wekelijkse klantupdates komen automatisch in beeld.",
        },
        {
          icon: PlugZap,
          title: "Sync met Google Calendar",
          text: "Auto-sync zodat dubbele boekingen onmogelijk zijn. Werkt ook met Outlook en Microsoft 365.",
        },
      ]}
      align="image-right"
      screenshots={[
        {
          src: SCREENS.agenda,
          url: "qozen.ai/agenda",
          alt: "Agenda met week-overzicht en AI plant voor je paneel",
          hotspots: [
            { top: "20%", left: "8%", label: "Week 19" },
            { top: "55%", left: "75%", label: "AI plant 3 slots", side: "left", delay: 1.2 },
            { top: "85%", left: "75%", label: "Komende deadlines", side: "left", delay: 2.2 },
          ],
          cursor: [
            { x: "30%", y: "30%" },
            { x: "55%", y: "55%" },
            { x: "78%", y: "70%" },
          ],
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
      step="06"
      icon={WorkflowIcon}
      eyebrow="Module 06 · Workflows"
      title="No-code automatiseringen, eenvoudiger dan n8n"
      lead="Bouw triggers, AI-stappen en acties in een visuele editor. Zonder regel code. Met operationele cijfers per workflow zodat je weet wat écht werkt."
      bullets={[
        {
          icon: Zap,
          title: "180 runs deze week",
          text: "Met 96% slagingspercentage. Zie per workflow hoe vaak hij draaide en hoeveel tijd hij bespaarde.",
        },
        {
          icon: ListChecks,
          title: "Trigger → AI → Actie",
          text: "Bv: Nieuwe kandidaat → CV parsen → Match-score → Plaatsen in pipeline → Notificatie bij ≥90%.",
        },
        {
          icon: Brain,
          title: "AI-stappen ingebouwd",
          text: "CV parsen, match-score berekenen, samenvatting maken, outreach genereren — allemaal blokken in de editor.",
        },
        {
          icon: BadgeCheck,
          title: "6 starter workflows",
          text: "Nieuwe kandidaat auto-screen, Outreach top match, Wekelijkse klantupdate, No-show follow-up, Afwijzing, Aanbieding follow-up.",
        },
      ]}
      align="image-left"
      screenshots={[
        {
          src: SCREENS.workflows,
          url: "qozen.ai/workflows",
          alt: "Workflows pagina met 6 actieve workflows en stap-overzicht",
          hotspots: [
            { top: "20%", left: "10%", label: "6 actieve workflows" },
            { top: "20%", left: "55%", label: "180 runs · 96% succes", side: "left", delay: 1.0 },
            { top: "50%", left: "30%", label: "Trigger → AI → Actie", delay: 2.0 },
          ],
          cursor: [
            { x: "20%", y: "25%" },
            { x: "50%", y: "55%" },
            { x: "80%", y: "55%" },
          ],
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
      step="07"
      icon={Settings}
      eyebrow="Module 07 · Instellingen"
      title="Stem AI af op jouw bureau-stijl"
      lead="Tone-of-voice sliders, verboden woorden, goedkeuring-drempels per type bericht en native koppelingen. Jouw bureau, jouw regels."
      bullets={[
        {
          icon: Sliders,
          title: "Tone-of-voice sliders",
          text: "Formeel ↔ informeel · Kort ↔ uitgebreid · Direct ↔ diplomatiek. Live preview van hoe AI dan schrijft.",
        },
        {
          icon: PenLine,
          title: "Niet-gebruiken-lijst",
          text: "Verban woorden zoals “rockstar”, “ninja”, “spannend”. Houdt employer branding strak.",
        },
        {
          icon: ShieldCheck,
          title: "Drempels per kanaal",
          text: "Per type communicatie (outreach, intake, afwijzing, klantupdate) stel je in wat AI zelf mag.",
        },
        {
          icon: PlugZap,
          title: "Native koppelingen",
          text: "LinkedIn Recruiter, Indeed, Google Workspace, Calendly, Recruitee, Slack — verbinden in 1 klik.",
        },
      ]}
      align="image-right"
      screenshots={[
        {
          src: SCREENS.instellingenTone,
          url: "qozen.ai/instellingen/tone-of-voice",
          alt: "Tone of voice sliders met live preview-bericht",
          hotspots: [
            { top: "30%", left: "30%", label: "3 tone-sliders" },
            { top: "30%", left: "75%", label: "Live voorbeeldbericht", side: "left", delay: 1.0 },
            { top: "65%", left: "30%", label: "Verboden woorden", delay: 2.0 },
          ],
          cursor: [
            { x: "30%", y: "35%" },
            { x: "30%", y: "55%" },
            { x: "70%", y: "45%" },
          ],
        },
        {
          src: SCREENS.instellingenApprovals,
          url: "qozen.ai/instellingen/goedkeuring",
          alt: "Goedkeuring & drempels en koppelingen",
          hotspots: [
            { top: "20%", left: "65%", label: "Auto-verzenden bij ≥90%", side: "left" },
            { top: "75%", left: "20%", label: "5 actieve koppelingen", delay: 1.4 },
          ],
        },
      ]}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*                            AI Capabilities                                 */
/* -------------------------------------------------------------------------- */

const AI_CAPABILITIES: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Inbox,
    title: "Verzamelt uit elk kanaal",
    text: "LinkedIn, Indeed, web-formulieren, e-mail, Calendly en je ATS — alles in één inbox.",
  },
  {
    icon: ListChecks,
    title: "Parseert CV's",
    text: "Skills, ervaringsjaren, locatie, salarisindicatie en beschikbaarheid worden gestructureerd.",
  },
  {
    icon: MessageSquareText,
    title: "Vat kandidaten samen",
    text: "3 regels relevante info per kandidaat in plaats van een hele CV doornemen.",
  },
  {
    icon: Target,
    title: "Berekent match-scores",
    text: "Vergelijkt skills, ervaring, locatie, sector en beschikbaarheid met je actieve vacatures.",
  },
  {
    icon: GitBranch,
    title: "Routeert in pipeline",
    text: "Score ≥90 → notificatie, ≥75 → Gescreend, anders blijft 'ie in Nieuw met label.",
  },
  {
    icon: PenLine,
    title: "Genereert communicatie",
    text: "Outreach, intake-uitnodigingen, afwijzingen, klantupdates en follow-ups — in jouw tone-of-voice.",
  },
  {
    icon: Brain,
    title: "Verklaart elke beslissing",
    text: "Waarom deze score, waarom deze hook, waarom dit kanaal — geen black box.",
  },
  {
    icon: BellRing,
    title: "Bewaakt operatie",
    text: "Vertragingen, gemiste follow-ups, vacatures buiten target en deadlines — proactief.",
  },
  {
    icon: TrendingUp,
    title: "Voorspelt uitkomsten",
    text: "Plaatsingen deze maand, conversieproblemen per fase, capaciteit per recruiter.",
  },
];

function AICapabilities() {
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
        <SectionHeading
          eyebrow="Wat doet de AI"
          title="9 dingen die AI voor je doet — voor jij je tweede koffie hebt"
          description="Onder de motorkap doet de AI méér dan alleen tekst genereren. Hij verzamelt, structureert, scoort, routeert, verklaart en voorspelt."
          align="center"
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AI_CAPABILITIES.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <ScrollReveal key={cap.title} delay={0.05 + i * 0.05}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: [0.21, 0.6, 0.36, 1] }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-border bg-white p-7 shadow-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/15">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-medium text-ink">
                        {cap.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {cap.text}
                      </p>
                    </div>
                  </div>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
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
/*                            End-to-End Flow                                 */
/* -------------------------------------------------------------------------- */

const FLOW_STEPS: {
  step: string;
  title: string;
  text: string;
  icon: LucideIcon;
}[] = [
  {
    step: "01",
    title: "Kandidaat komt binnen",
    text: "Via LinkedIn, Indeed, jouw website, e-mail, Calendly of Recruitee.",
    icon: Inbox,
  },
  {
    step: "02",
    title: "AI parseert en vat samen",
    text: "Skills, ervaring, beschikbaarheid en samenvatting in 3 regels.",
    icon: Brain,
  },
  {
    step: "03",
    title: "Match-score berekend",
    text: "Vergelijking met openstaande vacatures, score 0–100.",
    icon: Target,
  },
  {
    step: "04",
    title: "In pipeline geplaatst",
    text: "Bij ≥90 notificatie, ≥75 in Gescreend, anders Nieuw met label.",
    icon: GitBranch,
  },
  {
    step: "05",
    title: "AI drafted outreach",
    text: "Persoonlijk, met match-uitleg, in jouw tone-of-voice.",
    icon: PenLine,
  },
  {
    step: "06",
    title: "Jij keurt goed",
    text: "Bewerkt, keurt goed of wijst af. Met “waarom dit bericht”-uitleg.",
    icon: ShieldCheck,
  },
  {
    step: "07",
    title: "Verzonden via juiste kanaal",
    text: "LinkedIn InMail, e-mail of Calendly-uitnodiging — automatisch.",
    icon: Mail,
  },
  {
    step: "08",
    title: "Reactie → agenda update",
    text: "Calendly-slot? Automatisch in jouw agenda en pipeline.",
    icon: Calendar,
  },
  {
    step: "09",
    title: "AI bewaakt opvolging",
    text: "Stille kandidaten, vertraagde klanten, deadlines — alles in beeld.",
    icon: BellRing,
  },
  {
    step: "10",
    title: "Jij ziet morgen wat priority is",
    text: "Volgende ochtend opent het dashboard met de 3 belangrijkste acties.",
    icon: Sparkles,
  },
];

function EndToEndFlow() {
  return (
    <section className="section">
      <SectionBackground
        variant="lines"
        shade="cool"
        accent="left"
        hue="cyan"
        intensity="medium"
      />
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Operationele workflow"
          title="Van inkomende kandidaat tot plaatsing — in 10 stappen"
          description="Wat een recruiter normaal handmatig schakelt tussen 6 tools, doet Qozen AI in één doorlopende flow. Met de recruiter altijd in control op de momenten die ertoe doen."
          align="center"
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {FLOW_STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <ScrollReveal key={s.step} delay={0.04 * i}>
                <div className="group relative flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-card transition-all duration-300 hover:border-accent/30 hover:shadow-glow-soft sm:p-6">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/15">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                      {s.step}
                    </span>
                    <h3 className="mt-1 font-display text-base font-medium text-ink sm:text-lg">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {s.text}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                            Differentiation                                 */
/* -------------------------------------------------------------------------- */

const PROBLEMS_SOLVED: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Versnippering",
    text: "Recruitmentdata zit in LinkedIn, Indeed, mailbox, ATS, agenda en spreadsheets. Wij brengen het samen.",
    icon: Inbox,
  },
  {
    title: "Vergeten opvolgingen",
    text: "Stille kandidaten, vertraagde klanten en aflopende aanbiedingen worden automatisch zichtbaar.",
    icon: Clock,
  },
  {
    title: "Trage screening",
    text: "AI-samenvatting + match-score → recruiter weet binnen 30 seconden of een kandidaat de moeite waard is.",
    icon: Zap,
  },
  {
    title: "Inconsistente outreach",
    text: "AI bereidt outreach, intake-uitnodigingen, afwijzingen en klantupdates — in jullie tone-of-voice.",
    icon: PenLine,
  },
  {
    title: "AI-angst",
    text: "Niets gaat naar buiten zonder goedkeuring. Drempels per type bericht, transparante uitleg per draft.",
    icon: ShieldCheck,
  },
  {
    title: "Onzichtbare prestaties",
    text: "Plaatsingen, doorlooptijd, conversies, bron-mix en bespaarde uren — meetbaar per recruiter, klant en vacature.",
    icon: TrendingUp,
  },
];

function Differentiation() {
  return (
    <section className="section">
      <SectionBackground
        variant="split"
        shade="default"
        accent="center"
        intensity="medium"
      />
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Wat lost dit op"
          title="Geen losse tool — een complete recruitment-cockpit"
          description="Veel oplossingen focussen op één onderdeel: ATS, sourcing, e-mailautomatisering of planning. Qozen AI is de operationele laag erbóven, waar alles samenkomt."
          align="center"
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS_SOLVED.map((p, i) => {
            const Icon = p.icon;
            return (
              <ScrollReveal key={p.title} delay={0.05 + i * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4, ease: [0.21, 0.6, 0.36, 1] }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-border bg-white p-7 shadow-card"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/15">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-medium text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {p.text}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Positioning quote */}
        <ScrollReveal delay={0.4}>
          <div className="relative mt-20 overflow-hidden rounded-2xl border border-accent/20 bg-white p-10 shadow-card sm:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/15 blur-3xl"
            />
            <div className="relative grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center">
              <div className="grid h-16 w-16 place-items-center rounded-2xl border border-accent/30 bg-accent/10 text-accent">
                <Star className="h-7 w-7" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  Positionering in één zin
                </span>
                <p className="mt-3 font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
                  Qozen AI is een AI-gestuurde recruitment-cockpit die kandidaten
                  uit elk kanaal centraliseert, automatisch screent, communicatie
                  voorbereidt, pipeline-acties bewaakt en recruiters volledige
                  controle geeft via goedkeuringen, workflows en tone-of-voice.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
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
          <div className="relative overflow-hidden rounded-2xl border border-border bg-white p-12 text-center shadow-card sm:p-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40"
            >
              <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
            </div>
            <span className="relative inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              <Sparkles className="h-3 w-3" />
              Pilot vanaf €399/maand · €0 setup
            </span>
            <h2 className="relative mt-6 heading-section text-balance">
              Klaar om jouw bureau te transformeren?
            </h2>
            <p className="relative mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              In een gratis workflow-scan van 30 minuten kijken we samen waar de
              meeste tijd verdampt en welke modules direct waarde leveren.
            </p>
            <div className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
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
/*                       Helper: Module Section Layout                        */
/* -------------------------------------------------------------------------- */

interface BulletDef {
  icon: LucideIcon;
  title: string;
  text: string;
}

interface ScreenshotDef {
  src: string;
  url: string;
  alt: string;
  hotspots?: HotspotDef[];
  cursor?: { x: string; y: string }[];
}

interface ModuleSectionProps {
  id: ModuleId;
  step: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  lead: string;
  bullets: BulletDef[];
  align: "image-left" | "image-right";
  screenshots: ScreenshotDef[];
}

function ModuleSection({
  id,
  step,
  icon: Icon,
  eyebrow,
  title,
  lead,
  bullets,
  align,
  screenshots,
}: ModuleSectionProps) {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.2, once: true });
  const current = screenshots[active];

  const isImageLeft = align === "image-left";

  return (
    <section
      id={id}
      ref={sectionRef}
      className="section scroll-mt-32"
    >
      <SectionBackground
        variant={isImageLeft ? "dots" : "radial"}
        shade={isImageLeft ? "tint" : "default"}
        accent={isImageLeft ? "topLeft" : "topRight"}
        hue={isImageLeft ? "lime" : "cyan"}
        intensity="medium"
      />
      <div className="container-narrow">
        <div
          className={cn(
            "grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center",
            isImageLeft && "lg:grid-cols-[1.15fr_1fr]",
          )}
        >
          <div className={cn(isImageLeft && "lg:order-2")}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.21, 0.6, 0.36, 1] }}
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {eyebrow}
                </span>
              </div>
              <h2 className="mt-5 font-display display-tight text-display-md font-semibold text-ink">
                {title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                {lead}
              </p>
              <ul className="mt-8 space-y-3">
                {bullets.map((b, i) => {
                  const BIcon = b.icon;
                  return (
                    <motion.li
                      key={b.title}
                      initial={{ opacity: 0, x: isImageLeft ? 20 : -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.55,
                        delay: 0.15 + i * 0.08,
                        ease: [0.21, 0.6, 0.36, 1],
                      }}
                      className="group flex items-start gap-4 rounded-2xl border border-border bg-white p-4 shadow-card transition-all duration-300 hover:border-accent/30 hover:shadow-glow-soft sm:p-5"
                    >
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/15">
                        <BIcon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-ink">
                          {b.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {b.text}
                        </p>
                      </div>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          </div>

          <div className={cn(isImageLeft && "lg:order-1")}>
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.85, ease: [0.21, 0.6, 0.36, 1] }}
              className="relative"
            >
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/15 via-accent/0 to-cyan-500/15 blur-3xl"
              />
              <BrowserFrame
                url={current.url}
                src={current.src}
                alt={current.alt}
                animateKey={active}
              >
                {current.cursor && current.cursor.length > 0 && (
                  <FloatingCursor positions={current.cursor} />
                )}
                {current.hotspots?.map((h, i) => (
                  <Hotspot
                    key={`${active}-${i}`}
                    top={h.top}
                    left={h.left}
                    label={h.label}
                    side={h.side}
                    delay={h.delay}
                  />
                ))}
              </BrowserFrame>

              {screenshots.length > 1 && (
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    Stap {step} ·
                  </span>
                  {screenshots.map((s, i) => (
                    <button
                      key={s.src}
                      type="button"
                      onClick={() => setActive(i)}
                      className={cn(
                        "relative rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all",
                        i === active
                          ? "border-accent/50 text-accent"
                          : "border-border bg-white text-muted hover:text-ink",
                      )}
                    >
                      {i === active && (
                        <motion.span
                          layoutId={`module-${id}-tab`}
                          className="absolute inset-0 -z-0 rounded-xl bg-accent/10"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10">View {i + 1}</span>
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
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
  children?: React.ReactNode;
  tone?: "default" | "floating";
  animateKey?: string | number;
}

function BrowserFrame({
  url,
  src,
  alt,
  children,
  tone = "default",
  animateKey,
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-white shadow-card",
        tone === "floating" && "shadow-[0_40px_80px_-32px_rgba(15,23,42,0.45)]",
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
        <div className="hidden items-center gap-1.5 sm:flex">
          <div className="h-1 w-6 rounded-full bg-gray-200" />
          <div className="h-1 w-3 rounded-full bg-gray-200" />
        </div>
      </div>
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={animateKey}
            src={src}
            alt={alt}
            className="block w-full"
            draggable={false}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.21, 0.6, 0.36, 1] }}
          />
        </AnimatePresence>
        {children}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                       Helper: Floating Mouse Cursor                        */
/* -------------------------------------------------------------------------- */

function FloatingCursor({
  positions,
  durationPerStep = 1.4,
}: {
  positions: { x: string; y: string }[];
  durationPerStep?: number;
}) {
  const total = Math.max(positions.length, 2);
  const totalDuration = total * durationPerStep;
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute z-20"
      initial={{
        left: positions[0]?.x ?? "50%",
        top: positions[0]?.y ?? "50%",
      }}
      animate={{
        left: positions.map((p) => p.x),
        top: positions.map((p) => p.y),
      }}
      transition={{
        duration: totalDuration,
        times: positions.map((_, i) => i / Math.max(1, positions.length - 1)),
        repeat: Infinity,
        repeatType: "mirror",
        ease: [0.42, 0, 0.58, 1],
      }}
    >
      <div className="relative -translate-x-1 -translate-y-1">
        <span className="absolute inset-0 -z-10 m-[-8px] rounded-full bg-accent/30 blur-md animate-pulse" />
        <svg
          width="22"
          height="24"
          viewBox="0 0 22 24"
          fill="none"
          className="drop-shadow-[0_4px_8px_rgba(15,23,42,0.4)]"
        >
          <path
            d="M2.5 1.5L19 13L11 14L7.5 21L2.5 1.5Z"
            fill="white"
            stroke="#0F172A"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
        <span className="absolute -right-1 -bottom-1 grid h-2.5 w-2.5 place-items-center rounded-full bg-accent text-white">
          <span className="absolute inset-0 rounded-full bg-accent/60 animate-ping" />
        </span>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                            Helper: Hotspot                                 */
/* -------------------------------------------------------------------------- */

interface HotspotDef {
  top: string;
  left: string;
  label: string;
  side?: "left" | "right";
  delay?: number;
}

function Hotspot({
  top,
  left,
  label,
  side = "right",
  delay = 0.4,
}: HotspotDef) {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.6, 0.36, 1] }}
      className="pointer-events-none absolute z-10"
      style={{ top, left }}
    >
      <div className="relative flex items-center gap-2">
        <span className="relative grid h-3.5 w-3.5 place-items-center">
          <span className="absolute inset-0 animate-ping rounded-full bg-accent/60" />
          <span className="relative h-3.5 w-3.5 rounded-full border-2 border-white bg-accent shadow-glow" />
        </span>
        <span
          className={cn(
            "absolute whitespace-nowrap rounded-lg border border-border bg-white px-2.5 py-1 text-[10px] font-semibold text-ink shadow-card sm:text-[11px]",
            side === "right"
              ? "left-6"
              : "right-6",
          )}
        >
          {label}
        </span>
      </div>
    </motion.div>
  );
}
