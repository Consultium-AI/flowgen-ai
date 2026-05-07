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

export const HERO = {
  eyebrow: "AI OPERATIONS DASHBOARDS",
  title: "AI-automatiseringen met \u00e9\u00e9n dashboard voor je hele workflow",
  subtitle:
    "Van leads en rapportages tot approvals, afspraken en follow-ups. Qozen AI bouwt AI-workflows die je team kan volgen, controleren en verbeteren.",
  primaryCta: { label: "Plan gratis workflow-scan", href: "/workflow-scan" },
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
  title: "Zo ontstaat jouw AI-dashboard in 5 stappen",
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

export const PRICING = {
  eyebrow: "Pricing",
  title: "Transparante prijzen, duidelijke scope",
  note: "Alle pakketten starten met een duidelijke scope. Extra workflows, WhatsApp-integraties, CRM/ATS-koppelingen, API-kosten en externe toolkosten worden apart besproken. Zo blijft het project overzichtelijk en voorkom je onverwachte kosten.",
  items: [
    {
      name: "Pilot",
      description: "Voor eerste workflow of kleine bedrijven",
      setup: "\u20ac0",
      price: "\u20ac399",
      cadence: "/ maand",
      cta: { label: "Workflow-scan voor Pilot", href: "/workflow-scan?van=pilot" },
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
      featured: true,
    },
    {
      name: "Growth",
      description: "Voor bedrijven met meerdere opvolgprocessen",
      setup: "\u20ac1.500",
      price: "\u20ac599",
      cadence: "/ maand",
      cta: { label: "Workflow-scan voor Growth", href: "/workflow-scan?van=growth" },
      features: [
        "Alles uit Pilot",
        "3 workflows",
        "Calendar/demo tracking",
        "Extra dashboardweergave",
        "Wekelijkse AI-rapportage",
        "Prioriteit bij support",
        "Maandelijkse optimalisatie",
      ],
      featured: false,
    },
    {
      name: "Custom Operations",
      description: "Voor teams met maatwerkprocessen of meerdere integraties",
      setup: "Vanaf \u20ac2.500",
      price: "Vanaf \u20ac899",
      cadence: "/ maand",
      cta: { label: "Workflow-scan voor maatwerk", href: "/workflow-scan?van=maatwerk" },
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
    "API keys niet beveiligd",
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
      a: "De meeste pilots zijn binnen 1 \u00e0 2 weken operationeel, zodra we alle benodigde input en toegang hebben ontvangen.",
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
  title:
    "Klaar om je eerste proces te automatiseren met volledig overzicht?",
  description:
    "Boek een gratis workflow-scan en ontdek welk proces het snelst resultaat oplevert als AI-dashboard pilot.",
  primaryCta: { label: "Plan workflow-scan", href: "/workflow-scan" },
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
  },
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
    "Beschrijf het proces dat je wilt stroomlijnen. Wij beoordelen of een AI-dashboard pilot de juiste oplossing is en nemen binnen 24 uur contact op.",
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
