"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ } from "@/components/home/FAQ";
import { ABOUT, SITE } from "@/lib/content";

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="hero-dark relative isolate overflow-hidden pb-16 pt-36 sm:pt-44">
        <SectionBackground
          variant="rings"
          shade="dark"
          accent="center"
          intensity="high"
        />

        <div className="container-narrow relative">
          <ScrollReveal delay={0.1}>
            <h1 className="heading-display max-w-3xl text-balance">
              {ABOUT.hero.title}
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="section pt-12">
        <SectionBackground
          variant="aurora"
          shade="tint"
          accent="center"
          hue="lime"
          intensity="medium"
        />
        <div className="container-narrow">
          <div className="mx-auto max-w-3xl space-y-7">
            {ABOUT.mission.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="text-balance text-xl leading-relaxed text-ink/90 sm:text-2xl"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <SectionBackground
          variant="dots"
          shade="dim"
          accent="bottom"
          intensity="medium"
        />
        <div className="container-narrow">
          <SectionHeading
            eyebrow={ABOUT.team.eyebrow}
            title={ABOUT.team.title}
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ABOUT.team.members.map((member, i) => (
              <ScrollReveal key={member.name} delay={0.1 * i}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: [0.21, 0.6, 0.36, 1] }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-border bg-white p-7 shadow-card"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -bottom-24 -right-12 h-48 w-48 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                  />
                  <div className="relative">
                    <div className="grid h-20 w-20 place-items-center rounded-2xl bg-accent/10 text-2xl font-semibold text-accent">
                      {member.initials}
                    </div>
                    <h3 className="mt-6 text-xl font-medium text-ink">{member.name}</h3>
                    <p className="text-sm text-accent">{member.role}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">{member.bio}</p>
                    <div className="mt-6 flex gap-2">
                      <a
                        href={`mailto:${SITE.email}`}
                        aria-label="Email"
                        className="grid h-9 w-9 place-items-center rounded-full border border-border bg-bg-elevated text-muted transition-colors hover:border-accent/40 hover:text-accent"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                      <a
                        href={SITE.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="grid h-9 w-9 place-items-center rounded-full border border-border bg-bg-elevated text-muted transition-colors hover:border-accent/40 hover:text-accent"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}
