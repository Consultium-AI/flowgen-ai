"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LayoutDashboard } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CASE_STUDY } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [activeTab, setActiveTab] = useState(0);
  const screenshots = CASE_STUDY.screenshots;
  const current = screenshots[activeTab];

  return (
    <section id="case-study" className="section scroll-mt-24">
      <SectionBackground
        variant="radial"
        shade="dim"
        accent="center"
        intensity="high"
      />
      <div className="container-narrow">
        <SectionHeading
          eyebrow={CASE_STUDY.eyebrow}
          title={CASE_STUDY.title}
          description={CASE_STUDY.description}
          align="center"
        />

        <ScrollReveal delay={0.2}>
          <div className="relative mx-auto mt-14 max-w-5xl">
            {/* Tab buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              {screenshots.map((s, i) => (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => setActiveTab(i)}
                  className={cn(
                    "relative flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-300",
                    i === activeTab
                      ? "border-accent/50 text-accent"
                      : "border-border bg-bg-card/40 text-muted hover:border-border hover:text-ink",
                  )}
                >
                  {i === activeTab && (
                    <motion.span
                      layoutId="screenshot-tab"
                      className="absolute inset-0 -z-0 rounded-xl bg-accent/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{s.label}</span>
                </button>
              ))}
            </div>

            {/* Screenshot display */}
            <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-card">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-border bg-[#f8f9fb] px-4 py-2.5">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ec6a5e]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#f4bf4f]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#61c554]" />
                </div>
                <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1 text-[11px] font-mono text-gray-400 border border-gray-200/60">
                  consultium-ai-ops.dashboard/{current.label.toLowerCase().replace(/\s+/g, "-")}
                </div>
              </div>

              {/* Actual screenshot */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.label}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.21, 0.6, 0.36, 1] }}
                >
                  <img
                    src={current.image}
                    alt={`${current.label}: ${current.placeholder}`}
                    className="block w-full"
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Caption */}
            <p className="mt-4 text-center text-sm text-muted">
              {current.placeholder}
            </p>

            {/* Note */}
            <div className="mt-6 flex items-center justify-center gap-2">
              <LayoutDashboard className="h-4 w-4 text-accent/60" />
              <p className="text-sm text-muted italic">
                {CASE_STUDY.note}
              </p>
            </div>
            <p className="mt-2 text-center text-xs text-muted-soft">
              {CASE_STUDY.subtitle}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
