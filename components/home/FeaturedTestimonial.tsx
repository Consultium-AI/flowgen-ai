"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import GradualBlur from "@/components/visuals/GradualBlur";
import { FEATURED_TESTIMONIAL } from "@/lib/content";

const SAGE_MID = "#779c85";

export function FeaturedTestimonial() {
  const t = FEATURED_TESTIMONIAL;

  return (
    <section
      id="testimonials"
      data-navbar-theme="dark"
      className="section scroll-mt-24 hero-dark relative isolate overflow-hidden"
    >
      {/* Match `Workflow`: layered sage dark backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#05110d] via-[#081612] to-[#030806]"
          style={{
            boxShadow:
              "inset 0 0 100px rgba(119,156,133,0.07), inset 0 -96px 120px rgba(3, 8, 6, 0.5)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-40 bg-gradient-to-b from-[#f1f7f4]/18 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 72% 48% at 18% 24%, rgba(119,156,133,0.16) 0%, transparent 55%),
              radial-gradient(ellipse 58% 42% at 92% 78%, rgba(53,111,79,0.12) 0%, transparent 58%),
              radial-gradient(ellipse 55% 40% at 50% 108%, rgba(159,196,170,0.08) 0%, transparent 52%)`,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.42] mix-blend-overlay"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.036) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.036) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 82% 62% at 48% 40%, #000 16%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 82% 62% at 48% 40%, #000 16%, transparent 78%)",
          }}
        />
      </div>

      <GradualBlur
        target="parent"
        position="bottom"
        height="7rem"
        strength={2.35}
        divCount={7}
        curve="bezier"
        exponential
        opacity={0.9}
        animated="scroll"
        duration="0.55s"
        easing="ease-out"
        zIndex={4}
      />

      <div className="container-narrow relative z-[10]">
        <ScrollReveal delay={0.06}>
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-3xl lg:text-left">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
              {t.eyebrow}
            </p>
            <h2 className="heading-section mt-3 text-balance sm:mt-4">{t.title}</h2>
            <p className="body-lg mt-5 max-w-2xl text-white/[0.72] lg:mx-0">
              {t.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12} className="mt-14 lg:mt-20">
          <article className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.12] bg-[rgba(8,14,11,0.5)] shadow-[0_32px_100px_-64px_rgba(0,0,0,0.75)] backdrop-blur-xl">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-28 -top-28 h-[22rem] w-[22rem] rounded-full opacity-45 blur-3xl md:opacity-55"
              style={{
                background: `radial-gradient(circle at center, ${SAGE_MID}40 0%, transparent 70%)`,
              }}
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,17.5rem)_minmax(0,1fr)]">
              <figure className="relative aspect-[5/6] max-h-[22rem] w-full shrink-0 border-b border-white/[0.1] bg-black/[0.15] lg:max-h-none lg:min-h-[22rem] lg:border-b-0 lg:border-r xl:min-h-[24rem]">
                <Image
                  src={t.imageSrc}
                  alt={t.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 280px, 100vw"
                  className="object-cover object-[48%_22%]"
                  priority={false}
                />
              </figure>

              <div className="flex min-w-0 flex-col p-7 sm:p-9 lg:p-11">
                <div className="inline-flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/55">
                    <Quote
                      className="h-3.5 w-3.5 text-[#8eb89c]"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    Interne use-case quote
                  </span>
                </div>

                <blockquote className="relative mt-7">
                  <p className="text-[1.0625rem] font-normal leading-relaxed text-white/[0.78] sm:text-lg lg:max-w-2xl">
                    “{t.quote}”
                  </p>
                </blockquote>

                <div className="mt-10 flex flex-col gap-8 border-t border-white/[0.1] pt-8 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                  <div>
                    <p className="text-sm font-semibold text-[#f1f7f4]">{t.name}</p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">
                      {t.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <p className="font-display display-tight text-4xl font-medium tabular-nums text-[#c8dfd0] sm:text-[2.65rem]">
                      {t.metricValue}
                    </p>
                    <p className="mt-1 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-white/52">
                      {t.metricUnit}
                    </p>
                    <p className="mt-1 max-w-[14rem] text-left text-[13px] text-white/[0.5] sm:max-w-xs sm:text-right">
                      {t.metricDetail}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}
