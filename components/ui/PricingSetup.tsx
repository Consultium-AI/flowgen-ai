import { cn } from "@/lib/utils";

type PricingSetupProps = {
  setup: string;
  featured?: boolean;
};

/** Highlights €0 setup (Pilot tier). */
export function PricingSetup({ setup, featured }: PricingSetupProps) {
  const zeroSetup = setup === "\u20ac0";

  if (zeroSetup) {
    return (
      <div
        className={cn(
          "mt-6 rounded-xl border px-4 py-4 ring-1 sm:px-5 sm:py-5",
          featured
            ? "border-accent/45 bg-accent/[0.09] ring-accent/15"
            : "border-accent/35 bg-accent/[0.07] ring-accent/10",
        )}
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
          Setup
        </span>
        <p className="mt-2 font-display text-4xl font-semibold tracking-tight text-accent sm:text-5xl">
          {setup}
        </p>
        <p className="mt-2 max-w-[18rem] text-sm font-medium leading-snug text-ink/90">
          Geen startupkosten: je betaalt alleen het maandtarief.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-soft">
        Setup
      </span>
      <div className="mt-1 font-display text-lg font-medium text-ink">{setup}</div>
    </div>
  );
}
