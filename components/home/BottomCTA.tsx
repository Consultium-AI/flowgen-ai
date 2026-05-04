"use client";

import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { BOTTOM_CTA } from "@/lib/content";

export function BottomCTA() {
  return (
    <section className="section">
      <SectionBackground
        variant="spotlight"
        shade="tint"
        accent="center"
        intensity="high"
      />
      <div className="container-narrow">
        <ScrollReveal>
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-accent/20 bg-white p-10 text-center shadow-card sm:p-14 lg:p-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
            />

            <div className="relative">
              <h2 className="font-display display-tight text-3xl font-medium text-ink text-balance sm:text-4xl">
                {BOTTOM_CTA.title}
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted">
                {BOTTOM_CTA.description}
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
                <MagneticButton
                  href={BOTTOM_CTA.primaryCta.href}
                  variant="primary"
                >
                  {BOTTOM_CTA.primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </MagneticButton>
                <MagneticButton
                  href={BOTTOM_CTA.secondaryCta.href}
                  variant="secondary"
                >
                  {BOTTOM_CTA.secondaryCta.label}
                </MagneticButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
