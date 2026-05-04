export const SITE = {
  name: "Qozen AI",
  domain: "qozenai.nl",
  email: "info@qozenai.nl",
  phone: "+31 6 12345678",
  phoneHref: "tel:+31612345678",
  cal: {
    strategy: "/contact",
    lead: "/contact",
  },
  socials: {
    instagram: "#",
    linkedin: "#",
  },
};

export const NAV_LINKS = [
  { label: "Oplossingen", href: "/diensten" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  navigatie: [
    { label: "Oplossingen", href: "/diensten" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" },
  ],
  start: [
    { label: "Plan workflow-scan", href: "/contact" },
    { label: "Neem contact op", href: "/contact" },
  ],
  legal: [
    { label: "Privacy beleid", href: "/legal/privacy-beleid" },
    { label: "Algemene voorwaarden", href: "/legal/algemene-voorwaarden" },
  ],
};

export const HERO = {
  eyebrow: "AI OPERATIONS DASHBOARDS",
  title: "AI-automatiseringen met \u00e9\u00e9n dashboard voor je hele workflow",
  subtitle:
    "Van leads en rapportages tot approvals, afspraken en follow-ups. Qozen AI bouwt AI-workflows die je team kan volgen, controleren en verbeteren.",
  primaryCta: { label: "Plan gratis workflow-scan", href: "/contact" },
  secondaryCta: { label: "Bekijk demo", href: "/#case-study" },
  priceline: "PILOT VANAF \u20ac399/MAAND",
};

export const PROBLEMS = {
  eyebrow: "Het probleem",
  title: "Veel bedrijven automatiseren nog steeds zonder overzicht",
  description:
    "Automations kunnen tijd besparen, maar zodra ze onzichtbaar draaien ontstaat er een nieuw probleem: niemand weet precies wat er gebeurt. Welke lead is opgevolgd? Welke mail moet nog goedgekeurd worden? Welke workflow is mislukt? Qozen AI maakt dit zichtbaar in \u00e9\u00e9n dashboard.",
  items: [
    {
      title: "Leads raken verspreid",
      description:
        "Aanvragen komen binnen via formulieren, e-mail, Calendly of losse berichten en worden niet centraal bijgehouden.",
      icon: "SearchX",
    },
    {
      title: "Follow-ups worden vergeten",
      description:
        "Zonder duidelijk systeem blijven waardevolle leads of kandidaten te lang liggen.",
      icon: "ClockAlert",
    },
    {
      title: "AI is moeilijk te vertrouwen",
      description:
        "Bedrijven willen niet dat AI zomaar mails verstuurt zonder menselijke controle.",
      icon: "ShieldAlert",
    },
    {
      title: "Automations zijn te technisch",
      description:
        "Tools zoals n8n, Make en Zapier zijn krachtig, maar voor veel teams niet overzichtelijk genoeg.",
      icon: "Code",
    },
  ],
};

export const SOLUTION = {
  eyebrow: "De oplossing",
  title: "E\u00e9n dashboard voor je AI-workflows",
  description:
    "Qozen AI bouwt automatiseringen rondom jouw proces en maakt ze zichtbaar in een gebruiksvriendelijk dashboard. Je team ziet precies welke leads binnenkomen, welke AI-concepten klaarstaan, welke follow-ups aandacht nodig hebben en welke acties gepland zijn.",
  features: [
    {
      title: "Lead tracking",
      description:
        "Nieuwe aanvragen en leads verschijnen automatisch in je dashboard met status, bron, contactgegevens en AI-samenvatting.",
      icon: "UserPlus",
    },
    {
      title: "AI approval inbox",
      description:
        "AI schrijft conceptmails, maar je team houdt controle. Controleer, bewerk en verstuur pas wanneer jij akkoord bent.",
      icon: "MailCheck",
    },
    {
      title: "Follow-up tracking",
      description:
        "Zie direct welke leads aandacht nodig hebben en laat follow-ups automatisch klaarzetten.",
      icon: "BellRing",
    },
    {
      title: "Calendar & demo tracking",
      description:
        "Koppel demo\u2019s of afspraken aan je pipeline en houd geboekte gesprekken overzichtelijk bij.",
      icon: "CalendarCheck",
    },
    {
      title: "Workflow monitoring",
      description:
        "Bekijk welke automations actief zijn, welke acties zijn uitgevoerd en waar aandacht nodig is.",
      icon: "Activity",
    },
    {
      title: "Settings per workflow",
      description:
        "Stel opvolgregels, verzendidentiteit, notificaties en workflowregels in per klant of proces.",
      icon: "Settings",
    },
  ],
};

export const TARGET_AUDIENCES = {
  eyebrow: "Voor wie",
  title:
    "Voor bedrijven die handmatige opvolging willen vervangen door overzicht",
  items: [
    {
      name: "Recruitmentbureaus",
      icon: "Users",
      description:
        "Kandidaten, klanten, follow-ups en interviews overzichtelijk beheren vanuit \u00e9\u00e9n dashboard.",
    },
    {
      name: "Marketing- en socialmediabureaus",
      icon: "Megaphone",
      description:
        "Contentprestaties, rapportages, campagne-overzichten en klantupdates centraliseren.",
    },
    {
      name: "Trainings- en onderwijsorganisaties",
      icon: "GraduationCap",
      description:
        "Aanvragen, inschrijvingen, demo\u2019s, deelnemerscommunicatie en opvolging structureren.",
    },
    {
      name: "Dienstverlenende bedrijven",
      icon: "Briefcase",
      description:
        "Leads, offertes, opvolgmails en afspraken automatisch laten bijhouden.",
    },
  ],
};

export const DIENSTEN = {
  eyebrow: "Wat wij bouwen",
  title: "Onze oplossingen",
  items: [
    {
      name: "AI Lead & Follow-up Dashboard",
      description:
        "Voor bedrijven die leads, aanvragen of kandidaten sneller willen opvolgen.",
      price: "Vanaf \u20ac750 setup + \u20ac399/maand",
      icon: "LayoutDashboard",
    },
    {
      name: "AI Approval Inbox",
      description: "AI schrijft conceptmails, jouw team keurt goed.",
      price: "Inbegrepen in dashboardpakketten",
      icon: "MailCheck",
    },
    {
      name: "Calendar & Demo Tracking",
      description:
        "Demo\u2019s en afspraken automatisch zichtbaar in je dashboard.",
      price: "Vanaf \u20ac199/maand extra",
      icon: "CalendarCheck",
    },
    {
      name: "Social & LinkedIn Reporting Dashboard",
      description:
        "Van Excel/CSV naar overzichtelijke contentrapportage met AI-samenvatting.",
      price: "Vanaf \u20ac750 setup + \u20ac399/maand",
      icon: "BarChart3",
    },
    {
      name: "Recruitment Follow-up Dashboard",
      description:
        "Kandidaten, klanten, interviews en follow-ups in \u00e9\u00e9n overzicht.",
      price: "Vanaf \u20ac750 setup + \u20ac399/maand",
      icon: "UserSearch",
    },
    {
      name: "Extra Workflow Modules",
      description: "Breid je dashboard uit met extra processen.",
      price: "Vanaf \u20ac199/maand per workflow",
      icon: "PuzzlePiece",
    },
    {
      name: "Custom Integrations",
      description: "CRM, ATS, WhatsApp, API\u2019s of maatwerklogica.",
      price: "Prijs op aanvraag",
      icon: "Plug",
    },
  ],
};

export const HOW_IT_WORKS = {
  eyebrow: "Werkwijze",
  title: "Van handmatig proces naar werkend AI-dashboard",
  steps: [
    {
      id: "01",
      title: "Workflow-scan",
      heading: "Breng je herhalende proces in kaart",
      description:
        "We brengen \u00e9\u00e9n herhalend proces in kaart, zoals leadopvolging, kandidaatopvolging, rapportage of demo-aanvragen.",
      cta: { label: "Plan een workflow-scan", href: "/contact" },
    },
    {
      id: "02",
      title: "Dashboard-MVP",
      heading: "Bouw een eerste versie van je dashboard",
      description:
        "We bouwen een eerste versie van je dashboard met de belangrijkste statussen, AI-concepten en acties.",
      cta: { label: "Bekijk onze oplossingen", href: "/diensten" },
    },
    {
      id: "03",
      title: "Human approval",
      heading: "Je team behoudt controle",
      description:
        "AI bereidt acties voor, maar je team behoudt controle via goedkeuringen. Geen automatische verzending zonder jouw akkoord.",
      cta: { label: "Meer over approval inbox", href: "/diensten" },
    },
    {
      id: "04",
      title: "Live pilot",
      heading: "Draai de workflow in de praktijk",
      description:
        "De workflow draait in de praktijk. We meten wat werkt, wat tijd bespaart en wat beter kan.",
      cta: { label: "Start een pilot", href: "/contact" },
    },
    {
      id: "05",
      title: "Opschalen",
      heading: "Voeg extra modules toe",
      description:
        "Na de eerste workflow kunnen extra modules worden toegevoegd vanaf \u20ac199/maand.",
      cta: { label: "Bespreek uitbreiding", href: "/contact" },
    },
  ],
};

export const PRICING = {
  eyebrow: "Pricing",
  title: "Transparante prijzen, duidelijke scope",
  note: "Alle pakketten starten met een duidelijke scope. Extra workflows, WhatsApp-integraties, CRM/ATS-koppelingen, API-kosten en externe toolkosten worden apart besproken. Zo blijft het project overzichtelijk en voorkom je onverwachte kosten.",
  items: [
    {
      name: "Pilot",
      description: "Voor eerste workflow of kleine bedrijven",
      setup: "\u20ac750",
      price: "\u20ac399",
      cadence: "/ maand",
      cta: { label: "Start pilot", href: "/contact" },
      features: [
        "1 dashboard",
        "1 workflow",
        "1 leadbron of formulier",
        "AI-samenvatting",
        "AI-conceptmail",
        "Approval inbox",
        "2 follow-upmomenten",
        "Basic support",
        "Maandelijkse kleine optimalisatie",
      ],
      featured: false,
    },
    {
      name: "Growth",
      description: "Voor bedrijven met meerdere opvolgprocessen",
      setup: "\u20ac1.500",
      price: "\u20ac599",
      cadence: "/ maand",
      cta: { label: "Plan demo", href: "/contact" },
      features: [
        "Alles uit Pilot",
        "2 workflows",
        "Calendar/demo tracking",
        "Extra dashboardweergave",
        "Wekelijkse AI-rapportage",
        "Prioriteit bij support",
        "Maandelijkse optimalisatie",
      ],
      featured: true,
    },
    {
      name: "Custom Operations",
      description: "Voor teams met maatwerkprocessen of meerdere integraties",
      setup: "Vanaf \u20ac2.500",
      price: "Vanaf \u20ac899",
      cadence: "/ maand",
      cta: { label: "Bespreek maatwerk", href: "/contact" },
      features: [
        "Meerdere workflows",
        "Custom dashboard",
        "CRM/ATS-koppeling",
        "Social/LinkedIn reporting",
        "Workflow monitoring",
        "Failed automation alerts",
        "Audit/activity logs",
        "Security-afspraken",
        "Training voor team",
      ],
      featured: false,
    },
  ],
};

export const CASE_STUDY = {
  eyebrow: "Case study",
  title: "Eerste demo: Consultium AI Operations Dashboard",
  description:
    "De eerste versie van het Qozen AI-dashboard is intern ontwikkeld voor Consultium AI. Het dashboard helpt bij het beheren van leads, AI-conceptmails, demo-afspraken via Calendly en follow-ups.",
  note: "Intern gebouwd vanuit de operationele behoefte van Consultium AI.",
  subtitle:
    "Deze interne demo vormt de basis voor pilots met externe bedrijven.",
  screenshots: [
    { label: "Overview", image: "/screenshots/overview.png", placeholder: "KPI\u2019s, recente leads en wachtende approvals in \u00e9\u00e9n overzicht" },
    { label: "Leads", image: "/screenshots/leads.png", placeholder: "Leadoverzicht met status, bron, demo-datum en zoekfilters" },
    { label: "Approval Queue", image: "/screenshots/approvals.png", placeholder: "AI-conceptmails beoordelen, bewerken en goedkeuren" },
    { label: "Calendar", image: "/screenshots/calendar.png", placeholder: "Maandoverzicht van demo-afspraken via Calendly" },
    { label: "Follow-ups", image: "/screenshots/followups.png", placeholder: "Leads die opvolging nodig hebben" },
    { label: "Settings", image: "/screenshots/settings.png", placeholder: "Calendly-sync, follow-up regels en afzenderinstellingen" },
  ],
};

export const SECURITY = {
  eyebrow: "Veiligheid",
  title: "AI met controle, niet op autopilot",
  description:
    "Qozen AI bouwt workflows waarbij je team controle houdt. AI kan samenvatten, concepten schrijven en acties voorbereiden, maar gevoelige stappen kunnen altijd via menselijke goedkeuring lopen.",
  items: [
    "Geen automatische verzending zonder approval, tenzij afgesproken",
    "Activiteitenlog per workflow",
    "Duidelijke rechten en instellingen",
    "API keys niet zichtbaar in de frontend",
    "Geen gedeelde wachtwoorden",
    "Geen risky scraping in de standaardpakketten",
    "Externe toolkosten en integraties transparant afgesproken",
  ],
};

export const FAQ = {
  eyebrow: "FAQ",
  title: "Veelgestelde vragen",
  items: [
    {
      q: "Is dit hetzelfde als n8n, Make of Zapier?",
      a: "Nee. Die tools zijn vaak technisch en vooral gericht op workflowbouw. Qozen AI bouwt de workflow voor je \u00e9n maakt hem zichtbaar in een dashboard dat je team begrijpt.",
    },
    {
      q: "Verstuurt AI automatisch mails?",
      a: "Alleen als je dat wilt. Standaard werken we met een approval inbox: AI maakt een concept, jouw team keurt goed.",
    },
    {
      q: "Kan dit met onze bestaande tools koppelen?",
      a: "Soms wel. Simpele koppelingen kunnen vaak snel. Complexe CRM-, ATS-, WhatsApp- of API-integraties worden apart gescoord en geprijsd.",
    },
    {
      q: "Hoe snel kan een pilot live?",
      a: "Een simpele pilot kan vaak binnen 1\u20132 weken live, nadat alle input en toegang is aangeleverd.",
    },
    {
      q: "Wat als we extra workflows willen?",
      a: "Extra workflows kunnen worden toegevoegd vanaf \u20ac199/maand, afhankelijk van complexiteit.",
    },
    {
      q: "Voor welke bedrijven is dit geschikt?",
      a: "Vooral voor bedrijven die veel handmatige opvolging, leads, kandidaten, rapportages of terugkerende communicatie verwerken.",
    },
    {
      q: "Is er een gratis demo?",
      a: "Ja. We kunnen een korte demo geven en samen kijken of \u00e9\u00e9n workflow geschikt is voor een pilot.",
    },
  ],
};

export const BOTTOM_CTA = {
  title:
    "Wil je \u00e9\u00e9n handmatig proces automatiseren zonder controle te verliezen?",
  description:
    "Plan een korte workflow-scan. We kijken samen welk proces het meeste tijd kost en of het geschikt is voor een eerste AI-dashboard pilot.",
  primaryCta: { label: "Plan workflow-scan", href: "/contact" },
  secondaryCta: { label: "Bekijk demo", href: "/#case-study" },
};

// Legacy exports for pages that still reference old names
export const FEATURES = PROBLEMS;
export const WORKFLOW = HOW_IT_WORKS;
export const INDUSTRIES = TARGET_AUDIENCES;
export const SERVICES = PRICING;
export const COMPARISON = SECURITY;
export const TESTIMONIALS = CASE_STUDY;
export const ROI = {
  eyebrow: "",
  title: "",
  team: { label: "", min: 1, max: 50, default: 10, suffix: "" },
  hours: { label: "", helper: "", min: 1, max: 40, default: 13, suffix: "" },
  rate: { label: "", min: 10, max: 200, default: 40, prefix: "", suffix: "" },
  cta: { label: "", href: "/contact" },
};

export const USE_CASES = {
  hero: {
    eyebrow: "Oplossingen",
    title: "AI Operations Dashboards op maat",
    subtitle:
      "Bekijk hoe Qozen AI bedrijven helpt met overzichtelijke dashboards voor leads, opvolgingen en workflows.",
    tabs: [
      { id: "recruitment", label: "Recruitment" },
      { id: "marketing", label: "Marketing" },
      { id: "dienstverlening", label: "Dienstverlening" },
    ],
  },
  cases: [
    {
      id: "recruitment",
      sector: "Recruitment",
      title: "Recruitment Follow-up Dashboard",
      uitkomst: "Kandidaten, interviews en follow-ups in \u00e9\u00e9n overzicht",
      stack: "AI Dashboard + Approval Inbox",
      workflow: [
        "Kandidaten en leads automatisch bijgehouden",
        "AI-samenvatting van elke kandidaat",
        "Opvolgmail klaargezet met AI-concept",
        "Interviewstatus en pipeline overzichtelijk in dashboard",
      ],
      cta: { label: "Plan een workflow-scan", href: "/contact" },
    },
    {
      id: "marketing",
      sector: "Marketing",
      title: "Social & LinkedIn Reporting Dashboard",
      uitkomst: "Van losse Excel-bestanden naar overzichtelijke rapportage",
      stack: "AI Dashboard + Rapportage",
      workflow: [
        "Posts en content automatisch bijgehouden",
        "Views, likes, comments en engagement rate zichtbaar",
        "AI-weekrapport automatisch gegenereerd",
        "Exporteerbare rapportage voor klanten",
      ],
      cta: { label: "Plan een workflow-scan", href: "/contact" },
    },
    {
      id: "dienstverlening",
      sector: "Dienstverlening",
      title: "AI Lead & Follow-up Dashboard",
      uitkomst: "Nooit meer leads vergeten of follow-ups missen",
      stack: "AI Dashboard + Calendar + Approval",
      workflow: [
        "Nieuwe leads automatisch in dashboard met AI-samenvatting",
        "AI-conceptmail klaar voor goedkeuring",
        "Follow-ups automatisch gepland",
        "Demo-afspraken gekoppeld aan pipeline",
      ],
      cta: { label: "Plan een workflow-scan", href: "/contact" },
    },
  ],
  compare: {
    eyebrow: "Het verschil",
    title: "Handmatig vs. AI Operations Dashboard",
    manual: {
      title: "Handmatig proces",
      items: [
        "Leads verspreid over mail, formulieren en berichten",
        "Follow-ups handmatig bijhouden in Excel of Sheets",
        "Geen overzicht welke mails zijn verstuurd",
        "Workflows onzichtbaar in technische tools",
        "Geen controle over wat AI verstuurt",
      ],
    },
    ours: {
      title: "Met Qozen AI",
      items: [
        "Alle leads centraal in \u00e9\u00e9n dashboard",
        "Follow-ups automatisch klaargezet",
        "AI-conceptmails met approval voor verzending",
        "Workflows zichtbaar en beheerbaar",
        "Volledige controle via approval inbox",
      ],
    },
  },
  finalCta: {
    title: "Klaar om overzicht te cre\u00ebren?",
    button: { label: "Plan een gratis workflow-scan", href: "/contact" },
  },
};

export const ABOUT = {
  hero: {
    eyebrow: "Over Qozen AI",
    title: "Wie we zijn en wat we bouwen",
  },
  mission: [
    "Wij geloven dat automatisering pas waardevol is wanneer je team het ook daadwerkelijk kan volgen en beheren.",
    "Veel bedrijven investeren in AI en automation, maar verliezen overzicht zodra processen onzichtbaar draaien. Welke lead is opgevolgd? Welke mail is verstuurd? Welke workflow is mislukt?",
    "Qozen AI lost dit op door AI-workflows te koppelen aan overzichtelijke dashboards. Zo behoudt je team controle, overzicht en vertrouwen in de automatiseringen die voor hen werken.",
    "We bouwen geen vage AI-beloften. We bouwen concrete dashboards waarin je ziet wat er gebeurt, wat aandacht nodig heeft en wat automatisch loopt.",
    "Onze eerste demo is gebouwd vanuit de operationele behoefte van Consultium AI. Die ervaring gebruiken we nu om pilots te bouwen voor geselecteerde bedrijven.",
  ],
  team: {
    eyebrow: "Team",
    title: "De visie achter Qozen AI",
    members: [
      {
        name: "Founder",
        role: "Oprichter",
        bio: "Bouwt AI Operations Dashboards die handmatige opvolging, goedkeuringen en workflows overzichtelijk automatiseren. Gedreven door de overtuiging dat AI pas werkt als je team het kan volgen.",
        initials: "F",
      },
    ],
  },
};

export const CONTACT = {
  eyebrow: "Contact",
  title: "Plan een workflow-scan",
  subtitle:
    "Vertel ons welk proces je wilt automatiseren. We kijken samen of het geschikt is voor een eerste AI-dashboard pilot.",
};
