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

export const PRICING = {
  eyebrow: "Pricing",
  title: "Transparante prijzen, duidelijke scope",
  note:
    "Demo\u2019s tonen de volledige visie; je start altijd met \u00e9\u00e9n workflow en lichte import. Integraties zoals CRM, ATS, mail of social bespreken we apart onder Custom Operations.",
  items: [
    {
      name: "Founding Pilot",
      description:
        "E\u00e9n workflow testen zonder zware integraties (leads, kandidaten, rapporten of klantmail).",
      setup: "\u20ac0",
      price: "\u20ac399",
      cadence: "/ maand",
      cta: { label: "Boek Workflow-scan", href: "/workflow-scan?van=pilot" },
      features: [
        "1 dashboard",
        "1 workflow (scope in workflow-scan)",
        "CSV, Google Sheet, formulier of handmatige import",
        "AI-samenvatting per item (lead, kandidaat, rapport)",
        "Match- of prioriteitsscore",
        "Pipeline- of statusoverzicht",
        "AI-conceptmail / outreach-draft",
        "Approval inbox",
        "2 follow-upmomenten",
        "Basic support",
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
        "CRM/ATS-koppeling",
        "LinkedIn/Indeed/Gmail/Outlook-integraties",
        "Slack/Teams notificaties",
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
  eyebrow: "VOLGENDE STAP",
  title:
    "Klaar om je eerste proces te automatiseren met volledig overzicht?",
  description:
    "Boek een gratis workflow-scan en ontdek welk proces het snelst resultaat oplevert als AI-dashboard pilot.",
  comparison: {
    leftTitle: "Zonder gerichte intake",
    rightTitle: "Met een workflow-scan",
    leftItems: [
      "Processen blijven onzichtbaar tussen mailbox, sheets en tools",
      "Onduidelijk waar automatisering wél zinvol is — en waar niet",
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
    "Leads, follow-ups en goedkeuringen behoud je overzicht \u2014 niet verspreid over mailboxen en tabbladen. Kies het pakket dat bij je fase past: van eerste pilot tot operaties op schaal.",
  primaryCta: {
    label: "Plan een gratis workflow-scan",
    href: "/workflow-scan",
  },
  secondaryCta: { label: "Bekijk productdemo", href: "/demo-recruitment" },
};

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
