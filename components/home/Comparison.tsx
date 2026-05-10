"use client";

import { motion } from "framer-motion";
import { Check, Shield } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECURITY } from "@/lib/content";

export function Comparison() {
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
          eyebrow={SECURITY.eyebrow}
          title={SECURITY.title}
          description={SECURITY.description}
          align="center"
        />

        <ScrollReveal delay={0.2}>
          <div className="relative mx-auto mt-14 max-w-3xl overflow-hidden rounded-2xl border border-accent/20 bg-white p-8 shadow-card sm:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/15 blur-3xl"
            />

            <div className="relative flex items-center gap-3 mb-8">
              <div className="grid h-12 w-12 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-ink">
                Controle & veiligheid
              </h3>
            </div>

            <ul className="relative space-y-3">
              {SECURITY.items.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className="flex items-start gap-3 rounded-2xl border border-accent/15 bg-accent/[0.04] px-4 py-3 text-sm text-ink"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
