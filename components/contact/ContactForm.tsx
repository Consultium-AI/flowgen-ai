"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const initial = { name: "", email: "", company: "", message: "" };

export function ContactForm() {
  const [data, setData] = useState(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof typeof initial>(key: K, value: string) {
    setData((d) => ({ ...d, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    if (!data.name || !data.email || !data.message) {
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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
      className="relative overflow-hidden rounded-2xl border border-border bg-white p-7 shadow-card sm:p-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label="Naam"
            required
            value={data.name}
            onChange={(v) => update("name", v)}
            placeholder="Jouw volledige naam"
          />
          <Field
            label="E-mail"
            required
            type="email"
            value={data.email}
            onChange={(v) => update("email", v)}
            placeholder="jij@bedrijf.nl"
          />
        </div>
        <Field
          label="Bedrijf"
          value={data.company}
          onChange={(v) => update("company", v)}
          placeholder="Bedrijfsnaam"
        />
        <Field
          label="Vertel ons wat jouw bedrijf vertraagt"
          required
          textarea
          value={data.message}
          onChange={(v) => update("message", v)}
          placeholder="Beschrijf kort jouw situatie en waar je hulp bij zoekt..."
        />

        <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            Door op verzenden te klikken ga je akkoord met ons privacy beleid.
          </p>
          <button
            type="submit"
            disabled={status === "loading"}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-soft hover:shadow-glow disabled:opacity-60"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Versturen...
              </>
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
              className="flex items-start gap-3 rounded-2xl border border-accent/30 bg-accent/10 p-4 text-sm text-accent"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5" />
              <div>
                <div className="font-medium">Bericht verstuurd!</div>
                <div className="text-accent/80">
                  We nemen binnen 24 uur contact met je op.
                </div>
              </div>
            </motion.div>
          )}
          {status === "error" && error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-start gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300"
            >
              <AlertCircle className="mt-0.5 h-5 w-5" />
              <div>{error}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  textarea,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const baseClasses =
    "w-full rounded-xl border border-border bg-bg-elevated px-4 py-3 text-sm text-ink placeholder:text-muted-soft transition-colors duration-200 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20";

  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-muted">
        {label} {required && <span className="text-accent">*</span>}
      </span>
      {textarea ? (
        <textarea
          className={`${baseClasses} min-h-[140px] resize-none`}
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
