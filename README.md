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
