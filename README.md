# Qozen AI

Marketing site voor **Qozen AI** (qozenai.nl): AI-operations dashboards en
workflows, gebouwd met Next.js 14, TypeScript, Tailwind CSS en Framer Motion.

> Merk, contact en copy staan in [`lib/content.ts`](lib/content.ts). Pas
> telefoon en placeholders aan voor productie.

## Features

- 4 pagina's: Home, Diensten / use cases, Over ons, Contact (+ legal)
- Animaties: scroll-reveals, gestaggerde hero, animated SVG workflow,
  count-up counters, tab transitions, accordion FAQ, magnetische buttons,
  carousel testimonials, page transitions
- Werkende ROI rekenmachine met live counter animaties
- Contactformulier met Resend integratie (uitgeschakeld zonder env-config)
- Mobile menu, sticky navbar met scroll-state
- Donkergroene hero met mint-accent (`#26d07c`), grid en radar-gloed;
  navbar sluit visueel aan op de hero

## Stack

- [Next.js 14](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) met custom theme
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide](https://lucide.dev) iconen
- [Resend](https://resend.com) voor e-mail (optioneel)

## Aan de slag

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## Content aanpassen

Alle teksten, namen, prijzen, e-mailadressen en telefoonnummers staan
gecentraliseerd in [`lib/content.ts`](lib/content.ts). Pas hier de
placeholders aan naar jouw eigen merk.

## Contactformulier configureren (optioneel)

Standaard verstuurt het formulier **geen** e-mails. Inzendingen worden
alleen gelogd in de server-console. Wil je echt e-mails versturen,
kopieer dan `.env.example` naar `.env.local` en vul alle drie de
variabelen in:

```bash
cp .env.example .env.local
```

```
RESEND_API_KEY=re_...
CONTACT_TO=hello@yourdomain.com
CONTACT_FROM=Your Brand <onboarding@resend.dev>
```

Pas alleen aan als je daadwerkelijk e-mails wilt ontvangen op je eigen adres.

## Project structuur

```
app/
├── layout.tsx, page.tsx
├── use-cases/, over-ons/, contact/
├── api/contact/route.ts
└── legal/
components/
├── layout/   Navbar, Footer, PageTransition
├── home/     Hero, Features, Workflow, ROICalculator, Industries,
│            Services, Comparison, Testimonials, FAQ
├── use-cases/, over-ons/, contact/
└── ui/       ScrollReveal, AnimatedCounter, GradientBlob,
             MagneticButton, Logo, SectionHeading
lib/
├── content.ts   Alle Nederlandse copy gecentraliseerd
└── utils.ts
```

## Build

```bash
npm run build
npm run start
```

## Live zetten (qozenai.nl)

Dit is een **Next.js-app** (SSR + API routes). Je site gedraagt zich als op localhost alleen als de host een **Node-server** start na `next build`, niet als je puur statische bestanden uit `out/` serveert (tenzij je expres `output: 'export'` zou gebruiken — dat doet dit project niet).

**Vercel (aanbevolen)**

1. Nieuw project → importeer **deze GitHub-repo**, branch `main`.
2. **Project Name** (niet hetzelfde als de GitHub-repo): gebruik een **unieke** naam in je team, bv. **`qozenai`** of **`qozen-ai-web`**. Als je ziet *"Project flowgen-ai already exists"*, verander dit veld — of sluit de repo aan op het **bestaande** project (zie hieronder).
3. Laat **Framework Preset: Next.js** staan (`vercel.json` helpt Vercel dit te herkennen). Build commando: `npm run build`, install: `npm ci` of `npm install`.
4. Zet **geen** “Output Directory” op `out` — de output is `.next`.
5. **Domains**: koppel `qozenai.nl` (en `www` indien gewenst) volgens Vercel DNS.
6. **Environment variables** in Vercel (Production): `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM` — zie `.env.example` voor het contactformulier.

**Al er een Vercel-project `flowgen-ai` bestaat**

- Open dat project in het dashboard → **Settings** → **Git** → **Connect Git Repository** → kies **`Consultium-AI/flowgen-ai`**, branch **`main`**. Daarna deployt elke push automatisch; je hoeft **geen** tweede project met dezelfde naam aan te maken.

**Automatisch deployen via GitHub Actions** (optioneel)

Na het **eenmalig** aanmaken van het Vercel-project: in GitHub → repo **Settings** → **Secrets and variables** → **Actions**, voeg toe:

- `VERCEL_TOKEN` — Vercel → Account Settings → Tokens  
- `VERCEL_ORG_ID` en `VERCEL_PROJECT_ID` — Vercel-project → **Settings** → **General** (gebruik het project dat **daadwerkelijk** met deze repo is gekoppeld — bv. `qozenai` of het bestaande `flowgen-ai`).

Elke push naar `main` start dan workflow `.github/workflows/vercel-production.yml`. Zonder deze secrets faalt die workflow bewust.

**Eigen server / Docker**

```bash
docker build -t qozen-ai .
docker run -p 3000:3000 --env-file .env.production qozen-ai
```

Zet je reverse proxy (Nginx/Caddy) op poort 3000 en het domein naar die proxy.
