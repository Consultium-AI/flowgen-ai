"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Calendar, Mail, MessageCircle, Phone } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { ContactForm } from "@/components/contact/ContactForm";
import { CONTACT, SITE } from "@/lib/content";

const FAQ = dynamic(() => import("@/components/home/FAQ").then((mod) => mod.FAQ));

export function ContactContent() {
  return (
    <>
      <section className="hero-dark relative isolate overflow-hidden pb-12 pt-36 sm:pt-44">
        <SectionBackground
          variant="mesh"
          shade="dark"
          accent="topRight"
          hue="lime"
          intensity="high"
        />

        <div className="container-narrow relative">
          <ScrollReveal delay={0.1}>
            <h1 className="heading-display max-w-3xl text-balance">
              {CONTACT.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted">
              {CONTACT.subtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden pb-24 pt-14">
        <SectionBackground
          variant="dots"
          shade="default"
          accent="bottomLeft"
          intensity="medium"
        />
        <div className="container-narrow grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex h-full flex-col gap-4">
              <ContactCard
                icon={<Phone className="h-5 w-5" />}
                title="Bel direct"
                description="Liever even sparren? Bel ons gerust."
                action={SITE.phone}
                href={SITE.phoneHref}
              />
              <ContactCard
                icon={<Mail className="h-5 w-5" />}
                title="Email ons"
                description="We reageren binnen 24 uur op werkdagen."
                action={SITE.email}
                href={`mailto:${SITE.email}`}
              />
              <ContactCard
                icon={<Calendar className="h-5 w-5" />}
                title="Plan een gesprek"
                description="Gratis scan van 30 min over jouw slimste eerste workflow."
                action="30 min"
                href="/workflow-scan"
                featured
              />
              <ContactCard
                icon={<MessageCircle className="h-5 w-5" />}
                title="WhatsApp"
                description="Snel contact via WhatsApp gedurende kantooruren."
                action="Stuur bericht"
                href={SITE.whatsappHref}
                external
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FAQ />
    </>
  );
}

function ContactCard({
  icon,
  title,
  description,
  action,
  href,
  external,
  featured,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
  href: string;
  external?: boolean;
  featured?: boolean;
}) {
  const content = (
    <div
      className={`group relative flex items-center justify-between gap-4 overflow-hidden rounded-2xl border p-5 shadow-card transition-all duration-300 ${
        featured
          ? "border-accent/20 bg-white hover:border-accent/40"
          : "border-border bg-white hover:border-accent/30"
      }`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-12 -right-8 h-32 w-32 rounded-full bg-accent/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative flex items-start gap-4">
        <span
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
            featured
              ? "bg-accent/15 text-accent"
              : "border border-border bg-bg-elevated text-accent"
          }`}
        >
          {icon}
        </span>
        <div>
          <h3 className="text-base font-medium text-ink">{title}</h3>
          <p className="mt-0.5 text-sm text-muted">{description}</p>
          <p className="mt-2 text-sm font-medium text-accent">{action}</p>
        </div>
      </div>
    </div>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return <Link href={href}>{content}</Link>;
}
