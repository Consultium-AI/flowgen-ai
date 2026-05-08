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
  Mail,
  MessageSquareText,
  PenLine,
  PlugZap,
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
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Inbox, screening, approvals en pipeline in één cockpit voor je team.
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

        {/* Hero preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            delay: 0.6,
            ease: [0.21, 0.6, 0.36, 1],
          }}
          className="relative mx-auto mt-14 max-w-6xl sm:mt-16"
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
      icon={LayoutDashboard}
      eyebrow="Module 01 · Overzicht"
      title="Dagcommandocentrale"
      lead="Elke ochtend laat het dashboard zien wat AI vannacht heeft afgehandeld én waar vandaag aandacht naartoe moet. Geen lege inbox-shock meer."
      bullets={[
        {
          icon: BellRing,
          title: "AI-briefing om 09:00",
          text: "“3 zaken vragen je aandacht voor 12:00”: vertraagde aanbiedingen, top-matches en vacatures buiten target.",
        },
        {
          icon: TrendingUp,
          title: "6 KPI's in real-time",
          text: "Inkomend, wacht-op-goedkeuring, shortlist, doorlooptijd, plaatsingen en bespaarde AI-uren.",
        },
        {
          icon: ListChecks,
          title: "Bron-mix & pipeline-volume",
          text: "Zie per dag of de instroom verwerkt wordt en welke kanalen écht bijdragen aan plaatsingen.",
        },
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
        },
        {
          src: SCREENS.overzichtVacatures,
          url: "qozen.ai/overzicht / vacatures",
          alt: "Tabel met actieve vacatures en voortgang",
          label: "Actieve vacatures",
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
      title="Centrale kandidaten-inbox"
      lead="In de pilot starten we met CSV, Google Sheet, formulier of handmatige import. Integraties zoals LinkedIn, Indeed, ATS, Gmail, Outlook of WhatsApp kunnen later apart worden gescoped. AI screent, vat samen en geeft een match-score voordat jij ’m opent."
      bullets={[
        {
          icon: Filter,
          title: "Bronnen structureren",
          text: "Labels en filters op importbron, klaar om later uit te breiden.",
        },
        {
          icon: Brain,
          title: "Match-score 0–100%",
          text: "AI vergelijkt skills, ervaring, locatie en sectorervaring met openstaande vacatures.",
        },
        {
          icon: Sparkles,
          title: "AI-samenvatting per kandidaat",
          text: "Geen CV's meer doorworstelen: drie regels relevante info per kandidaat.",
        },
        {
          icon: Zap,
          title: "Bulk-screen met AI",
          text: "Screen 12 kandidaten tegelijk. Bespaart ~7,2 uur per week.",
        },
      ]}
      screenshots={[
        {
          src: SCREENS.kandidatenSanne,
          url: "qozen.ai/kandidaten",
          alt: "Kandidatenlijst met Sanne de Vries detail-paneel",
          label: "Sanne · 94% match",
        },
        {
          src: SCREENS.kandidatenLotte,
          url: "qozen.ai/kandidaten / Lotte Bakker",
          alt: "Kandidatenlijst met Lotte Bakker geselecteerd",
          label: "Lotte · 91% match",
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
/*                       Module 3: AI Goedkeuringen                           */
/* -------------------------------------------------------------------------- */

function GoedkeuringenSection() {
  return (
    <ModuleSection
      id="goedkeuringen"
      icon={ShieldCheck}
      eyebrow="Module 03 · AI Goedkeuringen"
      title="Niets gaat naar buiten zonder jouw blik"
      lead="Human-in-the-loop standaard aan. AI bereidt outreach, intakes, klantupdates en afwijzingen voor. Jij keurt met uitleg waarom AI dit zo schreef."
      bullets={[
        {
          icon: PenLine,
          title: "AI-drafts met confidence",
          text: "Elke draft toont een score (bv. 94%). Hoge confidence kan auto-verzenden, lage altijd handmatig.",
        },
        {
          icon: MessageSquareText,
          title: "“Waarom dit bericht”",
          text: "AI legt uit waarom hij deze hook, deze stack-match en deze tone-of-voice koos.",
        },
        {
          icon: BadgeCheck,
          title: "Bulk goedkeuren",
          text: "Hoge-confidence drafts kun je in bulk goedkeuren; laag risico blijft snel.",
        },
        {
          icon: Sliders,
          title: "Drempels per type",
          text: "Outreach altijd handmatig, intake-uitnodigingen auto bij ≥90%, afwijzingen altijd review.",
        },
      ]}
      screenshots={[
        {
          src: SCREENS.goedkeuringen,
          url: "qozen.ai/goedkeuringen",
          alt: "AI Goedkeuringen inbox met outreach-draft voor Sanne de Vries",
          label: "Outreach draft (94%)",
        },
        {
          src: SCREENS.goedkeuringenAlt,
          url: "qozen.ai/goedkeuringen / uitleg",
          alt: "Goedkeuringen detail met explanation",
          label: "“Waarom dit bericht”",
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
      title="Kanban die meedenkt"
      lead="Sleep kandidaten van Nieuw → Gescreend → Intake → Klantgesprek → Aanbieding. AI registreert communicatie automatisch en signaleert knelpunten voordat ze problemen worden."
      bullets={[
        {
          icon: Target,
          title: "Match-score per kaart",
          text: "Zie per kandidaat direct match %, labels (Top-match, Tech-fit twijfel) en tijd in fase.",
        },
        {
          icon: TrendingUp,
          title: "Conversie-benchmarks",
          text: "“Intake → Klantgesprek is 64%, 12 punten boven jouw benchmark.”",
        },
        {
          icon: BellRing,
          title: "Knelpunt-detectie",
          text: "“3 kandidaten staan langer dan 7 dagen in Klantgesprek.”",
        },
        {
          icon: Sparkles,
          title: "Plaatsings-voorspelling",
          text: "AI voorspelt ~3 plaatsingen in mei op basis van pipeline-snelheid en historische conversies.",
        },
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
      title="Planning in één weekoverzicht"
      lead="Intakes, klantgesprekken en demo&apos;s komen samen in één weekoverzicht. In de demo zie je hoe AI voorstel-slots voorbereidt; koppeling met jouw planningstool (zoals Calendly) stemmen we per pilot en scope af."
      bullets={[
        {
          icon: Calendar,
          title: "Week- & dagweergave",
          text: "Schakel snel tussen week- en dag-view. Bevestigde, voorgestelde en wachten-status zichtbaar.",
        },
        {
          icon: Sparkles,
          title: "“AI plant voor je”",
          text: "Voorstel-slots voor top-matches. Wat verstuurd wordt, hangt af van scope en kanalen.",
        },
        {
          icon: Clock,
          title: "Komende deadlines",
          text: "Aanbieding-reacties, eerste werkdagen en wekelijkse klantupdates komen automatisch in beeld.",
        },
        {
          icon: PlugZap,
          title: "Agenda-sync",
          text: "Koppelingen met Google Calendar, Outlook of Microsoft 365 zijn mogelijk in latere fases, afhankelijk van API-toegang, security en scope.",
        },
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
          text: "CV parsen, score, samenvatting en outreach als losse blokken in de flow.",
        },
        {
          icon: BadgeCheck,
          title: "6 starter workflows",
          text: "Kandidaat auto-screen, Outreach top match, Wekelijkse klantupdate, No-show, Afwijzing, Aanbieding follow-up.",
        },
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
      title="Stem AI af op jouw bureau-stijl"
      lead="Tone-of-voice sliders, verboden woorden en goedkeuring-drempels per type bericht. Externe koppelingen plannen we gefaseerd in. Jouw bureau, jouw regels."
      bullets={[
        {
          icon: Sliders,
          title: "Tone-of-voice sliders",
          text: "Formeel ↔ informeel · Kort ↔ uitgebreid · Direct ↔ diplomatiek. Live preview erbij.",
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
          title: "Integraties",
          text: "Koppelingen mogelijk in latere fases, afhankelijk van API-toegang, security en scope.",
        },
      ]}
      screenshots={[
        {
          src: SCREENS.instellingenTone,
          url: "qozen.ai/instellingen/tone-of-voice",
          alt: "Tone of voice sliders met live preview-bericht",
          label: "Tone-of-voice",
        },
        {
          src: SCREENS.instellingenApprovals,
          url: "qozen.ai/instellingen/goedkeuring",
          alt: "Goedkeuring & drempels en koppelingen",
          label: "Drempels & koppelingen",
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
    title: "Structureert je intake",
    text: "Pilot start met CSV, Sheet, formulier of handmatige import; extra kanalen en ATS-koppelingen scope’n we later.",
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
    text: "Outreach, intakes, updates en follow-ups in jouw tone-of-voice.",
  },
  {
    icon: Brain,
    title: "Verklaart elke beslissing",
    text: "Waarom deze score, hook of kanaal: geen black box.",
  },
  {
    icon: BellRing,
    title: "Bewaakt operatie",
    text: "Vertragingen, gemiste follow-ups en deadlines proactief signaleren.",
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
          title="Wat de AI voor je doet vóór je tweede koffie"
          description="Structureert, scoort, routeert en verklaart. Geen losse tekstgenerator."
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
    text: "Via import (CSV, Sheet, formulier of handmatig); brede kanaal-koppelingen plannen we gefaseerd.",
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
    title: "Verzonden via gekozen kanaal",
    text: "Bv. e-mail of ander kanaal in scope. Altijd na goedkeuring als afgesproken.",
    icon: Mail,
  },
  {
    step: "08",
    title: "Reactie → agenda-update",
    text: "Bevestigde afspraken terug in pipeline en overzicht; diepe agenda-sync hangt van integratie-scope af.",
    icon: Calendar,
  },
  {
    step: "09",
    title: "AI bewaakt opvolging",
    text: "Stille kandidaten en deadlines in beeld.",
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
          title="Van kandidaat tot plaatsing in 10 stappen"
          description="Eén doorlopende flow i.p.v. handmatig schakelen tussen losse tools."
          align="center"
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
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
    text: "Data zit vaak verspreid. De cockpit geeft één overzicht; integraties doen we gefaseerd.",
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
    text: "AI bereidt outreach en klantupdates voor in jullie tone-of-voice.",
    icon: PenLine,
  },
  {
    title: "AI-angst",
    text: "Niets gaat naar buiten zonder goedkeuring. Drempels per type bericht, transparante uitleg per draft.",
    icon: ShieldCheck,
  },
  {
    title: "Onzichtbare prestaties",
    text: "Plaatsingen, doorlooptijd en bron-mix meetbaar per recruiter en vacature.",
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
          title="Eén recruitment-cockpit, geen losse tools"
          description="Hier zie je de volledige visie. In een pilot start je met één workflow en gecontroleerde import; integraties en uitbreiding plannen we gefaseerd na scope en API-toegang."
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
                  Qozen AI bundelt intake, screening, approvals, pipeline en
                  tone-of-voice. Integraties en uitbreiding plannen we gefaseerd.
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
              Pilot €399/mnd · €0 setup · één workflow
            </span>
            <h2 className="relative mt-8 heading-section text-balance">
              Klaar om jouw bureau te transformeren?
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Demo toont de volledige cockpit; een pilot start beklein. Gratis
              workflow-scan (30 min.) om scope en eerste stap af te stemmen.
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
  label: string;
}

interface ModuleSectionProps {
  id: ModuleId;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  lead: string;
  bullets: BulletDef[];
  screenshots: ScreenshotDef[];
}

function ModuleSection({
  id,
  icon: Icon,
  eyebrow,
  title,
  lead,
  bullets,
  screenshots,
}: ModuleSectionProps) {
  const [active, setActive] = useState(0);
  const current = screenshots[active];

  const bulletGridCols =
    bullets.length >= 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : bullets.length === 3
        ? "sm:grid-cols-3"
        : "sm:grid-cols-2";

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
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-3xl">
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
          </div>
        </ScrollReveal>

        {/* Feature bullets */}
        <div className={cn("mt-12 grid gap-4", bulletGridCols)}>
          {bullets.map((b, i) => {
            const BIcon = b.icon;
            return (
              <ScrollReveal key={b.title} delay={0.08 + i * 0.06}>
                <div className="group h-full rounded-2xl border border-border bg-white p-5 shadow-card transition-all duration-300 hover:border-accent/30 hover:shadow-glow-soft">
                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/15">
                    <BIcon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-ink">
                    {b.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {b.text}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Screenshot */}
        <ScrollReveal delay={0.15}>
          <div className="relative mt-14">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/12 via-accent/0 to-cyan-500/10 blur-3xl"
            />
            <BrowserFrame
              url={current.url}
              src={current.src}
              alt={current.alt}
              animateKey={active}
              tone="floating"
            />

            {screenshots.length > 1 && (
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {screenshots.map((s, i) => (
                  <button
                    key={s.src}
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      "relative rounded-xl border px-4 py-2 text-xs font-semibold transition-all sm:text-sm",
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
}

function BrowserFrame({
  url,
  src,
  alt,
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
      </div>
      <AnimatePresence mode="wait">
        <motion.img
          key={animateKey ?? src}
          src={src}
          alt={alt}
          className="block w-full h-auto"
          draggable={false}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.21, 0.6, 0.36, 1] }}
        />
      </AnimatePresence>
    </div>
  );
}
