"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { FAQ } from "@/components/home/FAQ";
import { ABOUT } from "@/lib/content";

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

      <FAQ />
    </>
  );
}
