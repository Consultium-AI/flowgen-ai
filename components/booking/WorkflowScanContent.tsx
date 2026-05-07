import Link from "next/link";
import { CalendarClock, Clock } from "lucide-react";
import { CalBookingEmbed } from "@/components/booking/CalBookingEmbed";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { BOOKING } from "@/lib/content";
import { calWorkflowScanFallbackUrl } from "@/lib/cal-booking";
import { workflowScanContextNote } from "@/lib/workflow-scan-context";

type Props = {
  calLink: string;
  contextVan?: string | string[];
};

export function WorkflowScanContent({ calLink, contextVan }: Props) {
  const trimmed = calLink.trim();
  const fallbackBookingUrl = calWorkflowScanFallbackUrl(trimmed);
  const contextNote = workflowScanContextNote(contextVan);

  return (
    <>
      <section
        data-navbar-theme="dark"
        className="hero-dark relative isolate overflow-hidden pb-14 pt-36 sm:pt-44"
      >
        <SectionBackground
          variant="mesh"
          shade="dark"
          accent="topRight"
          hue="lime"
          intensity="high"
        />

        <div className="container-narrow relative">
          <ScrollReveal delay={0.1}>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              {BOOKING.eyebrow}
            </span>
            <h1 className="mt-4 heading-display max-w-3xl text-balance">
              {BOOKING.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {BOOKING.subtitle}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.28}>
            <ul className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200/90">
              <li className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm">
                <Clock className="h-4 w-4 text-accent" aria-hidden />
                30 minuten
              </li>
              <li className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm">
                <CalendarClock className="h-4 w-4 text-accent" aria-hidden />
                Ma–vr · om het halfuur · 09:00–17:00
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden pb-24 pt-10">
        <SectionBackground
          variant="dots"
          shade="default"
          accent="bottomLeft"
          intensity="medium"
        />
        <div className="container-narrow">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-start lg:gap-12">
            <ScrollReveal>
              <div className="rounded-2xl border border-border bg-white p-7 shadow-card sm:p-8">
                <h2 className="font-display text-xl font-medium text-ink">
                  {BOOKING.sideCard.title}
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted">
                  {BOOKING.sideCard.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <ul className="mt-5 space-y-2.5 border-t border-border pt-5 text-sm text-ink/90">
                  {BOOKING.sideCard.outcomes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-border pt-5 text-sm leading-relaxed text-muted">
                  {BOOKING.sideCard.closing}
                </p>
                <div className="mt-6 border-t border-border pt-6 text-sm text-muted">
                  <Link
                    href="/contact"
                    className="font-semibold text-accent hover:text-accent-soft"
                  >
                    {BOOKING.sideCard.contactHint}
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              {trimmed ? (
                <div>
                  {contextNote ? (
                    <p
                      className="mb-4 rounded-xl border border-accent/30 bg-accent/[0.08] px-4 py-3 text-sm font-medium leading-relaxed text-ink"
                      role="status"
                    >
                      {contextNote}
                    </p>
                  ) : null}
                  <CalBookingEmbed calLink={trimmed} />
                </div>
              ) : (
                <div>
                  {contextNote ? (
                    <p
                      className="mb-4 rounded-xl border border-accent/30 bg-accent/[0.08] px-4 py-3 text-sm font-medium leading-relaxed text-ink"
                      role="status"
                    >
                      {contextNote}
                    </p>
                  ) : null}
                  <div className="rounded-2xl border border-border bg-white p-10 text-center shadow-card sm:p-12">
                  <p className="text-base font-medium text-ink">
                    Plan een afspraak via het contactformulier
                  </p>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
                    We plannen graag een gesprek van 30 minuten; maandag t/m vrijdag tussen 09:00 en 17:00, met tijdvakken om het halfuur.
                  </p>
                  <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow-soft transition-all hover:bg-accent-soft"
                    >
                      Naar contact
                    </Link>
                    {fallbackBookingUrl ? (
                      <a
                        href={fallbackBookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-xl border border-border bg-bg-elevated px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent/40 hover:text-accent"
                      >
                        Boek online
                      </a>
                    ) : null}
                  </div>
                </div>
                </div>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
