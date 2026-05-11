export const SITE = {
  name: "Qozen AI",
  domain: "qozenai.nl",
  email: "info@qozenai.nl",
  phone: "010 360 3123",
  phoneHref: "tel:+31103603123",
  whatsappHref: "https://wa.me/31103603123",
  kvk: "96716606",
  btw: "NL005227750B76",
  address: ["Westerstraat 10", "3016 DH Rotterdam", "Nederland"] as const,
  cal: {
    strategy: "/workflow-scan",
    lead: "/contact",
  },
  socials: {
    linkedin: "https://www.linkedin.com/company/qozen-ai",
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
    { label: "Plan workflow-scan", href: "/workflow-scan" },
    { label: "Neem contact op", href: "/contact" },
  ],
  legal: [
    { label: "Privacy beleid", href: "/legal/privacy-beleid" },
    { label: "Algemene voorwaarden", href: "/legal/algemene-voorwaarden" },
  ],
};

/** Toon op /demo-recruitment: voorkomt verwarring over live integraties vs. productvisie. */
export const RECRUITMENT_DEMO_DISCLAIMER =
  "Demo toont productvisie; pilot start met CSV/Sheet/formulier of handmatige import.";

export const HERO = {
  title: "AI-automatiseringen met \u00e9\u00e9n dashboard voor je hele workflow",
  subtitle:
    "Van leads en rapportages tot approvals, afspraken en follow-ups. Qozen AI bouwt AI-workflows die je team kan volgen, controleren en verbeteren.",
  primaryCta: { label: "Plan gratis workflow-scan", href: "/workflow-scan" },
  secondaryCta: { label: "Bekijk demo", href: "/demo-recruitment" },
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
    "Qozen AI automatiseert je proces en bundelt leads, AI-concepten en opvolging in \u00e9\u00e9n overzichtelijk dashboard.",
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
      demo: { href: "/demo-recruitment", label: "Bekijk demo" },
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

export const HOW_IT_WORKS = {
  eyebrow: "Werkwijze",
  title: "Zo ontstaat jouw AI-dashboard in 5 stappen",
  subtitle:
    "Van scan tot live pilot: elke fase is afgebakend, met jouw team in de regie. Kies een stap om te zien wat er gebeurt.",
  steps: [
    {
      id: "01",
      title: "Workflow-scan",
      heading: "Breng je herhalende proces in kaart",
      description:
        "We brengen \u00e9\u00e9n herhalend proces in kaart, zoals leadopvolging, kandidaatopvolging, rapportage of demo-aanvragen.",
      cta: { label: "Boek workflow-scan", href: "/workflow-scan?van=intro" },
    },
    {
      id: "02",
      title: "Dashboard-MVP",
      heading: "Bouw een eerste versie van je dashboard",
      description:
        "We bouwen een eerste versie van je dashboard met de belangrijkste statussen, AI-concepten en acties.",
      cta: { label: "MVP via workflow-scan", href: "/workflow-scan?van=mvp" },
    },
    {
      id: "03",
      title: "Human approval",
      heading: "Je team behoudt controle",
      description:
        "AI bereidt acties voor, maar je team behoudt controle via goedkeuringen. Geen automatische verzending zonder jouw akkoord.",
      cta: { label: "Approvals via workflow-scan", href: "/workflow-scan?van=approvals" },
    },
    {
      id: "04",
      title: "Live pilot",
      heading: "Draai de workflow in de praktijk",
      description:
        "De workflow draait in de praktijk. We meten wat werkt, wat tijd bespaart en wat beter kan.",
      cta: { label: "Pilot via workflow-scan", href: "/workflow-scan?van=live" },
    },
    {
      id: "05",
      title: "Opschalen",
      heading: "Voeg extra modules toe",
      description:
        "Na de eerste workflow kunnen extra modules worden toegevoegd vanaf \u20ac199/maand.",
      cta: { label: "Opschalen via workflow-scan", href: "/workflow-scan?van=opschalen" },
    },
  ],
};

export const PILOT_SECTION = {
  eyebrow: "Founding Pilot",
  title: "Start met één AI-workflow die meetbaar tijd bespaart",
  subtitle:
    "We bouwen één workflow voor één repetitief proces. Vooraf meten we hoeveel tijd het nu kost. Haal je binnen 90 dagen geen 10 uur per week tijdwinst? Dan krijg je je pilotkosten terug.",
  lead: "",
  context: "",
  forWho:
    "Voor teams met veel handmatige intake, opvolging of copy-paste tussen tools.",
  price: "\u20ac599",
  cadence: "/ maand",
  periodLine: "3 maanden \u00b7 \u20ac0 setup",
  includedListEyebrow: "Inbegrepen bij de pilot",
  includedItems: [
    "Scope en meetmoment direct na de workflow-scan",
    "1 gekozen workflow en 1 dashboard",
    "Lichte import via CSV, Google Sheet, formulier of bestaande export",
    "Eerste live omgeving binnen 30 dagen",
    "AI-samenvatting, scoring, classificatie of approval-flow",
    "2 optimalisatierondes per maand",
    "Baseline-meting vooraf en resultaatmeting na 90 dagen",
  ],
  highlights: [
    "10 uur per week bespaard op het gekozen proces binnen 90 dagen, of pilotkosten terug",
    "Heldere baseline en meetmomenten vooraf en na afloop van de pilot",
  ],
  bullets: [
    "E\u00e9n workflow en dashboard in scope na de workflow-scan",
    "Lichte import, zonder zware CRM-, ATS- of API-koppeling in deze pilot",
    "Baseline en succesafspraken schriftelijk vastgelegd v\u00f3\u00f3r de meetperiode van 90 dagen",
  ],
  comparison: {
    rightTitle: "Founding Pilot",
  },
  guaranteeTermsEyebrow: "Garantievoorwaarden",
  guaranteeTerms:
    "De garantie geldt alleen als het gekozen proces vooraf minimaal 15 uur per week aan routinematig handwerk kost, jullie de afgesproken input leveren en wekelijks feedback geven. Halen we na 90 dagen geen 10 uur per week tijdwinst op datzelfde proces volgens die vooraf vastgelegde meetafspraak, dan krijgen jullie de betaalde pilotkosten voor die pilottermijn terug. Zware CRM-, ATS- en API-koppelingen vallen buiten deze pilot.",
  cta: { label: "Boek workflow-scan", href: "/workflow-scan?van=pilot" },
  finePrint: "",
} as const;

export const PRICING = {
  eyebrow: "Pricing",
  title: "Pilot eerst met meetbare tijdswinst",
  note:
    "Demo\u2019s tonen de volledige visie. Pilot is \u00e9\u00e9n workflow met lichte import en een schriftelijke tijdsafspraak na scan. CRM ATS mail of social plannen we onder Custom Operations.",
  items: [
    {
      name: "Founding Pilot",
      tagline: "10 uur per week bespaard, of pilotkosten terug",
      description:
        "\u00c9\u00e9n AI-workflow voor \u00e9\u00e9n repetitief proces. Vooraf leggen we vast hoeveel tijd het nu kost; binnen 90 dagen minimaal 10 uur per week besparen op dat proces of je pilotkosten terug. Eerste live omgeving binnen 30 dagen, lichte import, zonder zware integratieprojecten. Founding Pilot: \u20ac599/mnd, drie maanden, \u20ac0 setup.",
      guaranteeBox:
        "Alleen bij minimaal 15 uur per week routinematig handwerk op het gekozen proces, afgesproken input en wekelijks teamfeedback. Halen we na 90 dagen niet de vastgelegde 10 uur per week tijdwinst op dat proces, dan terugbetaling van de betaalde pilotkosten voor deze pilottermijn. Start via CSV, Google Sheet, formulier of export. Zware CRM-, ATS- en API-koppelingen vallen buiten deze garantie.",
      setup: "\u20ac0",
      price: "\u20ac599",
      cadence: "/ maand",
      priceMeta: "3 maanden pilottermijn",
      cta: { label: "Boek workflow-scan", href: "/workflow-scan?van=pilot" },
      features: [
        "Workflow-scan plus scopeafspraken",
        "1 dashboard",
        "1 workflow in scope na scan",
        "Lichte import (CSV, Sheet, formulier of export)",
        "Live omgeving binnen 30 dagen",
        "AI-samenvatting, scoring, classificatie of approval-flow",
        "2 optimalisatierondes per maand",
        "Baseline- en resultaatmeting",
      ],
    },
    {
      name: "Active Ops",
      description:
        "Actief dashboard voor screening, opvolging, rapportage en pipeline (recruitment, marketing, training of dienstverlening).",
      setup: "\u20ac1.200",
      price: "\u20ac899",
      cadence: "/ maand",
      cta: {
        label: "Boek Workflow-scan",
        href: "/workflow-scan?van=active-ops",
      },
      features: [
        "Alles uit Founding Pilot",
        "Actief operations-dashboard",
        "Lead- of kandidaatoverzicht",
        "AI-screening en samenvatting",
        "Match- of prioriteitsscores",
        "Approval inbox",
        "Pipeline management",
        "Follow-up tracking",
        "Agenda/intake tracking",
        "Workflow monitoring",
        "Wekelijkse AI-samenvatting",
        "Maandelijkse optimalisatie",
      ],
    },
    {
      name: "Custom Operations",
      description: "Voor bedrijven met meerdere workflows, teams of integraties.",
      setup: "Vanaf \u20ac2.500",
      price: "Vanaf \u20ac1.400",
      cadence: "/ maand",
      cta: { label: "Boek Workflow-scan", href: "/workflow-scan?van=maatwerk" },
      features: [
        "Meerdere workflows",
        "Custom dashboard",
        "CRM/ATS-koppeling (na intake & offerte)",
        "Professionele bronnen/mail/ATS-koppelingen (op maat, na scope)",
        "Slack/Teams notificaties (waar passend)",
        "Workflow monitoring",
        "Failed automation alerts",
        "Audit/activity logs",
        "Security-afspraken",
        "Training voor team",
        "Prioriteit support",
      ],
    },
  ],
};

export const FAQ = {
  eyebrow: "FAQ",
  title: "Veelgestelde vragen",
  subtitle:
    "Wat teams ons vaak vragen voor ze met een eerste dashboard en workflow starten.",
  items: [
    {
      q: "Wat is het verschil met tools als n8n, Make of Zapier?",
      a: "Die platforms bieden bouwblokken voor automations, maar het resultaat blijft vaak technisch en onzichtbaar. Qozen AI levert een werkend dashboard waar je team dagelijks mee kan werken, zonder zelf workflows te hoeven configureren.",
    },
    {
      q: "Houden wij zelf controle over wat AI doet?",
      a: "Absoluut. Standaard zetten we een approval inbox in: AI bereidt acties voor, maar niets wordt verzonden zonder goedkeuring van je team.",
    },
    {
      q: "Werkt dit samen met onze huidige software?",
      a: "In veel gevallen wel. Eenvoudige koppelingen regelen we snel. Voor complexere integraties met CRM, ATS, WhatsApp of externe API\u2019s maken we een apart voorstel.",
    },
    {
      q: "Hoe lang duurt het voordat we live zijn?",
      a: "Doorgaans binnen 30 dagen na workflow-scan zodra input en toegang rond zijn. Daarna meten we tot dag 90 of we de afgesproken tijdsbesparing op het gekozen proces halen.",
    },
    {
      q: "Hoe werkt de pilotgarantie?",
      a: "We leggen vooraf schriftelijk vast welk proces meetelt, wat we automatiseren en hoe we tijd meten (baseline en succes na 90 dagen). De garantie geldt alleen bij minimaal 15 uur per week routinematig handwerk op dat proces, levering van de afgesproken input en wekelijkse teamfeedback. Halen we na 90 dagen niet de vastgelegde 10 uur per week tijdwinst op hetzelfde proces, dan krijgen jullie de betaalde pilotkosten voor die pilottermijn terug. Zware CRM-, ATS- en API-koppelingen vallen buiten deze pilot.",
    },
    {
      q: "Kunnen we later extra processen toevoegen?",
      a: "Zeker. Na de eerste workflow kun je uitbreiden met extra modules vanaf \u20ac199/maand, afhankelijk van de complexiteit.",
    },
    {
      q: "Welk type bedrijf heeft hier het meeste baat bij?",
      a: "Bedrijven met terugkerende opvolgprocessen: denk aan leadbeheer, kandidaatopvolging, rapportages of klantcommunicatie die nu nog handmatig verloopt.",
    },
    {
      q: "Kan ik eerst vrijblijvend kennismaken?",
      a: "Ja, plan een gratis workflow-scan. We bekijken samen \u00e9\u00e9n concreet proces en schatten in of een dashboard-pilot zinvol is.",
    },
  ],
};

export const BOTTOM_CTA = {
  eyebrow: "VOLGENDE STAP",
  title:
    "Klaar om je eerste proces te automatiseren met volledig overzicht?",
  description:
    "Boek een gratis workflow-scan en zie welk proces het snelst tijd oplevert voor een pilot met meetbare afspraak.",
  comparison: {
    leftTitle: "Zonder gerichte intake",
    rightTitle: "Met een workflow-scan",
    leftItems: [
      "Processen blijven onzichtbaar tussen mailbox, sheets en tools",
      "Onduidelijk waar automatisering w\u00e9l zinvol is, en waar niet",
      "Pilots starten vaak te groot, te technisch of zonder draagvlak",
    ],
    rightItems: [
      "Eén concreet proces scherp: scope, knelpunten en haalbaarheid",
      "Helder beeld van een eerste pilot en waar de snelste winst zit",
      "Vrijblijvend gesprek: geen harde pitch, wél eerlijke vervolgstappen",
    ],
  },
  primaryCta: { label: "Plan workflow-scan", href: "/workflow-scan" },
  secondaryCta: { label: "Bekijk demo", href: "/demo-recruitment" },
};

/** Copy for the standalone /diensten page hero (homepage-aligned visuals). */
export const DIENSTEN_PAGE = {
  eyebrow: "Oplossingen",
  title: "AI Operations Dashboards op maat.",
  subtitle:
    "Leads, follow-ups en goedkeuringen in \u00e9\u00e9n blik. Start met een pilot van drie maanden met schriftelijke tijdsafspraak.",
  primaryCta: {
    label: "Plan een gratis workflow-scan",
    href: "/workflow-scan",
  },
  secondaryCta: { label: "Bekijk productdemo", href: "/demo-recruitment" },
};

/** Homepage Comparison: controle / veiligheid (zie `components/home/Comparison.tsx`). */
export const SECURITY = {
  eyebrow: "Vertrouwen",
  title: "Controle waar het telt",
  description:
    "AI bereidt acties voor, maar jouw team bewaakt wat er naar buiten gaat. Geen mails of berichten zonder expliciete goedkeuring.",
  items: [
    "Approval inbox: outbound acties eerst naar review, pas daarna live",
    "Per item zichtbaar wie wat heeft goedgekeurd of geweigerd",
    "Heldere grenzen tussen automatisering en menselijke tussenkomst",
    "AVG-bewuste opzet en transparante datastromen binnen pilots",
    "Dashboard waar je alle actieve workflows en statussen in \u00e9\u00e9n blik volgt",
  ],
};

/** Homepage diensten-kaarten (`components/home/DienstenList.tsx`). `icon` = key uit ICONS-mapping. */
export const DIENSTEN = {
  eyebrow: "Mogelijkheden",
  title: "Wat het Operations Dashboard voor je team doet",
  items: [
    {
      name: "Centraal overzicht",
      description:
        "Leads, taken en statussen in \u00e9\u00e9n werkruimte in plaats van verspreide tabbladen.",
      icon: "LayoutDashboard",
    },
    {
      name: "Approval inbox",
      description:
        "AI-concepten en follow-ups worden klaargezet; niets gaat outbound zonder groen licht.",
      icon: "MailCheck",
    },
    {
      name: "Kalender \u0026 opvolgmomenten",
      description:
        "Geplande acties en reminders gekoppeld aan je pipeline.",
      icon: "CalendarCheck",
    },
    {
      name: "Inzicht \u0026 rapportage",
      description:
        "Wekelijkse samenvattingen en KPI\u2019s die je uit je mailbox haalt.",
      icon: "BarChart3",
    },
    {
      name: "Matching \u0026 prioriteit",
      description:
        "Scores en tags zodat je team eerst oppakt wat het meeste oplevert.",
      icon: "UserSearch",
    },
    {
      name: "Modulaire workflows",
      description:
        "Start met \u00e9\u00e9n proces; breid gericht uit wanneer de eerste pilot loopt.",
      icon: "PuzzlePiece",
    },
    {
      name: "Integraties",
      description:
        "Mail, formulieren, ATS/CRM waar haalbaar; maatwerk in overleg voor complex.",
      icon: "Plug",
    },
  ],
};

/** Case-study screenshots (`components/home/Testimonials.tsx`). Publieke paden onder `/public/screenshots`. */
export const CASE_STUDY = {
  eyebrow: "Voorbeeld",
  title: "Zo oogt jouw Operations Dashboard",
  description:
    "Onderstaande voorbeeldschermen illustreren hoe leads, approvals en agenda samenkomen. Exacte koppen en kleuren stemmen we af tijdens pilot.",
  screenshots: [
    {
      label: "Overview",
      image: "/screenshots/overview.png",
      placeholder:
        "Pipeline en status van alle items die aandacht nodig hebben.",
    },
    {
      label: "Leads",
      image: "/screenshots/leads.png",
      placeholder: "Inkomende aanvragen en AI-samenvatting per lead.",
    },
    {
      label: "Approvals",
      image: "/screenshots/approvals.png",
      placeholder: "Berichten wachtend op akkoord van het team.",
    },
    {
      label: "Follow-ups",
      image: "/screenshots/followups.png",
      placeholder: "Automatisch voorgestelde vervolgstappen bij te benaderen dossiers.",
    },
    {
      label: "Agenda",
      image: "/screenshots/calendar.png",
      placeholder: "Momenten gekoppeld aan je workflow en SLA\u2019s.",
    },
    {
      label: "Settings",
      image: "/screenshots/settings.png",
      placeholder: "Rol- en werkruimteinrichting tijdens onboarding.",
    },
  ],
  note:
    "Interesse in een echte walkthrough met jouw sector? Dat doen we in de workflow-scan.",
  subtitle: "UI is merk-neutraal op te zetten; dit is puur voorbeeld.",
};

/** Homepage testimonial spotlight (`FeaturedTestimonial`). */
export const FEATURED_TESTIMONIAL = {
  eyebrow: "Testimonials",
  title: "Interne use case met Consultium AI",
  subtitle:
    "Een kijkje achter de schermen: van versnipperde intake naar één overzicht, met AI-hulp en goedkeuringen vóór verzending.",
  quote:
    "Vroeger zaten dossiers verspreid over mailthreads, exports van formulieren en losse notities. Ik open nu eerst Overview om te zien welke dossiers aandacht willen en waar opvolging blijft hangen. Per Lead staat een duidelijke AI-samenvatting. In Approvals nakijken we berichten en vrijgaven voordat ze de deur uit gaan. Minder kopieerwerk tussen tools tijdens intake geeft ruimte om inhoudelijke keuzes te maken.",
  name: "Hamza el Gourari",
  company: "Consultium AI",
  metricValue: "15+",
  metricUnit: "uur bespaard",
  metricDetail: "per week op intake \u0026 opvolging",
  imageSrc: "/testimonials/hamza-el-gourari.jpeg",
  imageAlt: "Hamza el Gourari, Consultium AI",
} as const;

// Legacy exports for pages that still reference old names
export const FEATURES = PROBLEMS;
export const WORKFLOW = HOW_IT_WORKS;
export const INDUSTRIES = TARGET_AUDIENCES;
export const SERVICES = PRICING;
export const ROI = {
  eyebrow: "Rentabiliteit",
  title: "Wat kosten repetitieve taken je team?",
  subtitle:
    "Een grove inschatting op basis van teamgrootte, uren per week en uurtarief.",
  team: {
    label: "Mensen hieraan kwijt",
    min: 1,
    max: 50,
    default: 10,
    suffix: "",
  },
  hours: {
    label: "Uren/week per persoon",
    helper: "Alleen herhalend werk: mail, invoer, opvolgen, rapportage.",
    min: 1,
    max: 40,
    default: 13,
    suffix: " u/wk",
  },
  rate: {
    label: "Kosten per uur",
    min: 10,
    max: 200,
    default: 40,
    prefix: "\u20ac",
    suffix: "/uur",
  },
  cta: { label: "Bespreek deze inschatting", href: "/contact" },
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
      cta: { label: "Plan een workflow-scan", href: "/workflow-scan" },
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
      cta: { label: "Plan een workflow-scan", href: "/workflow-scan" },
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
      cta: { label: "Plan een workflow-scan", href: "/workflow-scan" },
    },
  ],
  compare: {
    eyebrow: "Het verschil",
    title: "Zonder dashboard vs. met Qozen AI",
    manual: {
      title: "Zonder dashboard",
      items: [
        "Informatie verspreid over meerdere tools en inboxen",
        "Opvolging bijhouden via spreadsheets of geheugen",
        "Onduidelijk welke acties al zijn uitgevoerd",
        "Automations draaien onzichtbaar op de achtergrond",
        "Geen goedkeuringsproces voor AI-gegenereerde berichten",
      ],
    },
    ours: {
      title: "Met Qozen AI dashboard",
      items: [
        "Alles gecentraliseerd in \u00e9\u00e9n overzichtelijk dashboard",
        "Opvolgmomenten automatisch ingepland en zichtbaar",
        "AI-concepten controleerbaar via approval inbox",
        "Elke workflow transparant en beheersbaar",
        "Je team beslist, AI bereidt voor",
      ],
    },
  },
  finalCta: {
    title: "Benieuwd wat dit voor jouw bedrijf betekent?",
    button: { label: "Boek een gratis workflow-scan", href: "/workflow-scan" },
  },
};

export const ABOUT = {
  hero: {
    eyebrow: "Over Qozen AI",
    title: "Ons verhaal en onze aanpak",
    subtitle:
      "AI-automatisering die je team niet verstopt tussen tools en inboxen, maar samenbrengt in \u00e9\u00e9n werkend Operations Dashboard.",
    primaryCta: {
      label: "Plan een workflow-scan",
      href: "/workflow-scan",
    },
    secondaryCta: { label: "Neem contact op", href: "/contact" },
  },
  missionLead: "Waar we voor staan",
  mission: [
    "Automatisering heeft alleen waarde als je team er dagelijks mee kan werken. Niet als het onzichtbaar op de achtergrond draait.",
    "Te vaak zien we hetzelfde patroon: bedrijven zetten AI in, maar raken het overzicht kwijt. Leads verdwijnen tussen tools, mails worden gemist en niemand weet welke workflow nog actief is.",
    "Daarom koppelt Qozen AI elke automatisering aan een helder dashboard. Je team ziet in \u00e9\u00e9n oogopslag wat er loopt, wat aandacht vraagt en waar actie nodig is.",
    "Geen abstracte technologie-beloften, maar werkende systemen. Dashboards waarin elk proces zichtbaar, controleerbaar en schaalbaar is.",
    "Onze aanpak is ontstaan vanuit de operationele praktijk van Consultium AI. Die hands-on ervaring zetten we nu in om pilots te draaien voor ambitieuze bedrijven.",
  ],
};

export const CONTACT = {
  eyebrow: "Contact",
  title: "Neem de eerste stap",
  subtitle:
    "Vertel wat je wilt stroomlijnen. We bekijken of een AI-dashboard pilot past en reageren binnen 24 uur op werkdagen.",
  primaryCta: { label: "Plan workflow-scan", href: "/workflow-scan" },
  secondaryCta: { label: "Bekijk productdemo", href: "/demo-recruitment" },
};

export const BOOKING = {
  eyebrow: "Workflow-scan",
  title: "Plan je gratis workflow-scan",
  subtitle:
    "In deze call pakken we een proces dat nu veel tijd kost en laten we zien hoe een AI Operations Dashboard je daar grip en rust bij geeft. Je gaat weg met een concreet beeld van een eerste pilot en waar het snelste winst zit. Geen voorbereiding nodig: we starten vanuit jouw echte werkvloer.",
  sideCard: {
    title: "Wat bespreken we?",
    paragraphs: [
      "We duiken kort in één herhalend proces dat nu veel tijd kost, bijvoorbeeld leadopvolging, kandidaatopvolging, rapportages of demo-aanvragen. Eén concreet voorbeeld is genoeg; je hoeft je volledige stack nog niet uitgeschreven te hebben.",
      "Samen brengen we in kaart waar het nu vastloopt, welke tools je gebruikt en waar een AI Operations Dashboard het verschil maakt: je team ziet wat er gebeurt, AI bereidt acties voor en jij bewaakt kwaliteit via een approval inbox. Geen automatisering die onzichtbaar op de achtergrond draait.",
    ],
    outcomes: [
      "Of een pilot bij jouw situatie past",
      "Welke workflow als eerste het snelste resultaat kan geven",
      "Welke vervolgstap logisch is qua scope en tijdlijn",
    ],
    closing:
      "De workflow-scan is vrijblijvend: aan het einde weet je of een dashboard-project voor jou zinvol is. Geen verplicht verkoopgesprek, wél heldere vervolgstappen als het past.",
    contactHint: "Vragen vóór je boekt? Neem contact op",
  },
};
