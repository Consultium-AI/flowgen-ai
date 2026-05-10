"use client";

import {
  LayoutDashboard,
  MailCheck,
  CalendarCheck,
  BarChart3,
  UserSearch,
  Puzzle,
  Plug,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DIENSTEN } from "@/lib/content";

const ICONS: Record<string, LucideIcon> = {
  LayoutDashboard,
  MailCheck,
  CalendarCheck,
  BarChart3,
  UserSearch,
  PuzzlePiece: Puzzle,
  Plug,
};

export function DienstenList() {
  return (
    <section className="section">
      <SectionBackground
        variant="dots"
        shade="cool"
        accent="top"
        intensity="low"
      />
      <div className="container-narrow">
        <SectionHeading
          eyebrow={DIENSTEN.eyebrow}
          title={DIENSTEN.title}
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DIENSTEN.items.map((dienst, i) => {
            const Icon = ICONS[dienst.icon] ?? LayoutDashboard;
            return (
              <ScrollReveal key={dienst.name} delay={0.08 + i * 0.06}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.35, ease: [0.21, 0.6, 0.36, 1] }}
                  className="group relative flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-card sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg font-medium text-ink">
                        {dienst.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {dienst.description}
                      </p>
                    </div>
                  </div>

                </motion.article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.5}>
          <p className="mt-8 text-center text-sm text-muted">
            Complexe integraties zoals WhatsApp, CRM/ATS-systemen of custom API&apos;s worden apart begroot.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
