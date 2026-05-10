"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FAQ as FAQ_DATA } from "@/lib/content";
import { cn } from "@/lib/utils";

const sageLine = "rgba(119, 156, 133, 0.09)";
const ease = [0.21, 0.6, 0.36, 1] as const;

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="veelvoorkomende-vragen"
      className="relative isolate overflow-x-clip scroll-mt-24 py-24 sm:py-28 lg:py-36"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #fafcfb 0%, #f5f9f7 52%, #f8faf9 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 52% at 12% -8%, rgba(119,156,133,0.12) 0%, transparent 55%), radial-gradient(ellipse 54% 40% at 96% 100%, rgba(53,111,79,0.05) 0%, transparent 58%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage: `linear-gradient(${sageLine} 1px, transparent 1px), linear-gradient(90deg, ${sageLine} 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 88% 72% at 50% 40%, #000 18%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 88% 72% at 50% 40%, #000 18%, transparent 78%)",
          }}
        />
      </div>

      <div className="container-narrow relative z-[1]">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.35fr)] lg:gap-16 lg:items-start">
          <ScrollReveal delay={0.06}>
            <header className="lg:sticky lg:top-28">
              {FAQ_DATA.eyebrow ? (
                <p className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.32em] text-[#356f4f]/90">
                  <span
                    className="h-2 w-2 shrink-0 rounded-full bg-[#779c85]"
                    aria-hidden
                  />
                  {FAQ_DATA.eyebrow}
                </p>
              ) : null}
              <h2 className="heading-section mt-4 max-w-md text-[#141c18] text-balance sm:mt-5">
                {FAQ_DATA.title}
              </h2>
              {FAQ_DATA.subtitle ? (
                <p className="body-lg mt-5 max-w-sm text-[#4a6158]/95">
                  {FAQ_DATA.subtitle}
                </p>
              ) : null}
            </header>
          </ScrollReveal>

          <motion.div
            layout={false}
            className="overflow-hidden rounded-[1.65rem] border border-[rgba(119,156,133,0.28)] bg-white/85 shadow-[0_28px_80px_-54px_rgba(45,74,62,0.42)] backdrop-blur-[10px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease }}
          >
            <div className="divide-y divide-[rgba(119,156,133,0.14)]">
              {FAQ_DATA.items.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div key={item.q} className="px-5 sm:px-7 lg:px-8">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-trigger-${i}`}
                      className={cn(
                        "group flex w-full items-start justify-between gap-4 py-5 text-left outline-none transition-colors sm:gap-6 sm:py-6",
                        "focus-visible:ring-2 focus-visible:ring-[#779c85]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                      )}
                    >
                      <span
                        className={cn(
                          "min-w-0 pt-0.5 text-[15px] font-semibold leading-snug tracking-[-0.01em] sm:text-[1.0625rem]",
                          isOpen ? "text-[#14221a]" : "text-[#1f2e29]/92",
                          !isOpen && "group-hover:text-[#141c18]",
                        )}
                      >
                        {item.q}
                      </span>
                      <motion.span
                        aria-hidden
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.32, ease }}
                        className={cn(
                          "mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border shadow-sm transition-colors",
                          isOpen
                            ? "border-[rgba(119,156,133,0.45)] bg-[rgba(226,239,231,0.65)] text-[#356f4f]"
                            : "border-[rgba(20,34,26,0.08)] bg-white text-[#6b8378] group-hover:border-[rgba(119,156,133,0.28)] group-hover:text-[#356f4f]",
                        )}
                      >
                        <ChevronDown className="h-[1.125rem] w-[1.125rem]" strokeWidth={2.25} />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          id={`faq-panel-${i}`}
                          role="region"
                          aria-labelledby={`faq-trigger-${i}`}
                          key="faq-answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.38, ease }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 pr-1 text-[14px] leading-relaxed text-[#4d5f57] sm:pb-7 sm:text-[15px] sm:leading-[1.65]">
                            {item.a}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
