"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ as FAQ_DATA } from "@/lib/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section">
      <SectionBackground
        variant="dots"
        shade="tint"
        accent="bottom"
        intensity="low"
      />
      <div className="container-narrow">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow={FAQ_DATA.eyebrow} title={FAQ_DATA.title} />

          <div className="mt-2 lg:mt-12">
            {FAQ_DATA.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <ScrollReveal key={item.q} delay={0.05 * i}>
                  <div className="border-b border-border">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors"
                    >
                      <span
                        className={`text-base font-medium transition-colors sm:text-lg ${
                          isOpen ? "text-ink" : "text-ink/85 group-hover:text-ink"
                        }`}
                      >
                        {item.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: [0.21, 0.6, 0.36, 1] }}
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl border transition-colors ${
                          isOpen
                            ? "border-accent/50 bg-accent/10 text-accent"
                            : "border-border bg-bg-card/60 text-muted group-hover:border-border"
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.21, 0.6, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 pr-12 text-sm leading-relaxed text-muted sm:text-base">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
