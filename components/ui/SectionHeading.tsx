"use client";

import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <ScrollReveal delay={0.12}>
        <h2 className="heading-section text-balance">{title}</h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={0.2}>
          <p className="body-lg mt-5">{description}</p>
        </ScrollReveal>
      )}
    </div>
  );
}
