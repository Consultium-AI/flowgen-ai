"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, AlertCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

export type ContactFormVariant = "light" | "darkHero";

const initial = {
  name: "",
  email: "",
  company: "",
  phone: "",
  subject: "",
  message: "",
};

type FormData = typeof initial;

export function ContactForm({ variant = "light" }: { variant?: ContactFormVariant }) {
  const [data, setData] = useState(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const isHero = variant === "darkHero";

  const payload = useMemo(() => {
    const base = { name: data.name, email: data.email, message: data.message };
    if (isHero) {
      return {
        ...base,
        ...(data.phone.trim() ? { phone: data.phone.trim() } : {}),
        ...(data.subject.trim() ? { subject: data.subject.trim() } : {}),
      };
    }
    return {
      ...base,
      ...(data.company.trim() ? { company: data.company.trim() } : {}),
    };
  }, [data, isHero]);

  function update<K extends keyof FormData>(key: K, value: string) {
    setData((d) => ({ ...d, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
      setStatus("error");
      setError("Vul alstublieft alle verplichte velden in.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      setStatus("error");
      setError("Vul een geldig e-mailadres in.");
      return;
    }

    try {
      const body = JSON.stringify(payload);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(j.error ?? "Er ging iets mis");
      }
      setStatus("success");
      setData(initial);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Er ging iets mis");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "relative space-y-7 sm:space-y-8",
        isHero &&
          "rounded-2xl border border-white/[0.13] bg-white/[0.045] px-6 py-7 shadow-[0_28px_80px_-52px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:px-8 sm:py-10",
        !isHero && "mt-8",
      )}
    >
      {/* Glass edge */}
      {isHero ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.11)",
          }}
        />
      ) : null}

      <div className={cn("relative", isHero && "space-y-7 sm:space-y-8")}>
        <div className={cn("grid gap-7 sm:grid-cols-2 sm:gap-8")}>
          <HeroField
            variant={variant}
            label="Volledige naam"
            required
            value={data.name}
            onChange={(v) => update("name", v)}
            placeholder="Uw naam"
          />
          <HeroField
            variant={variant}
            label="E-mail"
            required
            type="email"
            value={data.email}
            onChange={(v) => update("email", v)}
            placeholder="jij@bedrijf.nl"
          />
        </div>

        {isHero ? (
          <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
            <HeroField
              variant={variant}
              label="Telefoonnummer"
              type="tel"
              value={data.phone}
              onChange={(v) => update("phone", v)}
              placeholder="Optioneel"
            />
            <HeroField
              variant={variant}
              label="Onderwerp"
              value={data.subject}
              onChange={(v) => update("subject", v)}
              placeholder="Kort waar het over gaat"
            />
          </div>
        ) : (
          <HeroField
            variant={variant}
            label="Bedrijf"
            value={data.company}
            onChange={(v) => update("company", v)}
            placeholder="Bedrijfsnaam (optioneel)"
          />
        )}

        <HeroField
          variant={variant}
          label="Bericht"
          required
          textarea
          value={data.message}
          onChange={(v) => update("message", v)}
          placeholder={
            isHero
              ? "Waar wilt u mee worden geholpen?"
              : "Beschrijf kort waar het nu opschiet, welke tools je gebruikt en wat een eerste win voor je team zou zijn."
          }
        />

        <div
          className={cn(
            "flex flex-col gap-6 pt-1",
            !isHero && "border-t border-[rgba(119,156,133,0.14)] pt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between",
            isHero && "border-t border-white/[0.1] pt-6",
          )}
        >
          <p
            className={cn(
              "max-w-md text-[0.8125rem] leading-relaxed",
              isHero ? "text-white/45" : "text-[#5a7066]",
            )}
          >
            Door op verzenden te klikken ga je akkoord met ons{" "}
            <Link
              href="/legal/privacy-beleid"
              className={cn(
                "font-medium underline-offset-[5px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                isHero &&
                  "text-white/72 underline decoration-white/25 hover:text-white focus-visible:ring-white/35 focus-visible:ring-offset-transparent",
                !isHero &&
                  "text-[#356f4f] underline decoration-[rgba(53,111,79,0.25)] hover:text-[#2d5840] hover:decoration-[rgba(53,111,79,0.45)] focus-visible:ring-[#779c85]/55 focus-visible:ring-offset-white",
              )}
            >
              privacybeleid
            </Link>
            .
          </p>
          <button
            type="submit"
            disabled={status === "loading"}
            className={cn(
              "group inline-flex w-full shrink-0 items-center justify-center gap-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:opacity-60",
              isHero
                ? "rounded-xl bg-white py-4 text-[15px] text-[#101812] hover:bg-[#f7faf8] focus-visible:ring-white/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050c09] sm:w-full"
                : "rounded-full bg-gradient-to-r from-[#356f4f] to-[#2d5842] px-9 py-[0.9375rem] text-white shadow-[0_12px_32px_-18px_rgba(53,111,79,0.72)] hover:from-[#3d7260] hover:to-[#356f4f] hover:shadow-[0_18px_40px_-16px_rgba(119,156,133,0.42)] focus-visible:ring-[#779c85]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto",
            )}
          >
            {status === "loading" ? (
              <>
                <Loader2
                  className={cn("h-4 w-4 animate-spin", isHero ? "text-[#356f4f]" : "")}
                />
                Versturen…
              </>
            ) : isHero ? (
              "Verstuur"
            ) : (
              <>
                Verstuur bericht
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </div>

        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={cn(
                "flex items-start gap-3 rounded-[1.125rem] border px-4 py-4 text-sm",
                isHero
                  ? "border-emerald-400/35 bg-emerald-950/[0.45] text-emerald-50"
                  : "border-[rgba(119,156,133,0.35)] bg-[rgba(226,239,231,0.65)] text-[#2d5840]",
              )}
            >
              <CheckCircle2
                className={cn("mt-0.5 h-5 w-5 shrink-0", isHero ? "text-emerald-300" : "text-[#356f4f]")}
              />
              <div>
                <p className={cn("font-semibold", isHero ? "text-white" : "text-[#1a2e26]")}>
                  Bericht verstuurd!
                </p>
                <p className={cn("mt-1 leading-relaxed", isHero ? "text-emerald-100/85" : "text-[#465f54]")}>
                  We nemen binnen 24 uur contact met je op.
                </p>
              </div>
            </motion.div>
          )}
          {status === "error" && error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={cn(
                "flex items-start gap-3 rounded-[1.125rem] border px-4 py-4 text-sm",
                isHero
                  ? "border-red-400/35 bg-red-950/40 text-red-100"
                  : "border-red-100 bg-red-50/95 text-red-900",
              )}
            >
              <AlertCircle
                className={cn("mt-0.5 h-5 w-5 shrink-0", isHero ? "text-red-300" : "text-red-600")}
              />
              <div className="leading-relaxed">{error}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

function HeroField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  textarea,
  variant,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  variant: ContactFormVariant;
}) {
  const isHero = variant === "darkHero";
  const baseClasses = cn(
    "w-full rounded-xl px-4 py-[0.9375rem] text-[0.9375rem] leading-normal outline-none transition-[border-color,box-shadow] duration-200",
    isHero
      ? "border border-white/[0.16] bg-white/[0.05] text-white placeholder:text-white/38 focus:border-white/28 focus:bg-white/[0.08] focus:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
      : "rounded-2xl border border-[rgba(20,34,26,0.08)] bg-[#fafdfb] text-[#1a231f] placeholder:text-[#889b92] placeholder:opacity-[0.92] focus:border-[rgba(53,111,79,0.35)] focus:bg-white focus:shadow-[0_0_0_3px_rgba(119,156,133,0.15)]",
  );

  return (
    <label className="block">
      <span
        className={cn(
          "mb-2.5 block text-[11px] font-medium uppercase tracking-[0.08em]",
          isHero ? "text-white/78" : "font-mono text-[10px] tracking-[0.26em] text-[#356f4f]/75",
        )}
      >
        {label}
        {required ? (
          <span className={cn(isHero ? "text-white/50" : "font-sans tracking-normal text-[#4a7860]")}> *</span>
        ) : null}
      </span>
      {textarea ? (
        <textarea
          className={cn(baseClasses, "min-h-[8.75rem] resize-y")}
          required={required}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          type={type}
          className={baseClasses}
          required={required}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </label>
  );
}
