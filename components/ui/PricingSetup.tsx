import { cn } from "@/lib/utils";

type PricingPalette = "accent" | "sage";

type PricingSetupProps = {
  setup: string;
  /** Homepage pricing uses sage; diensten page keeps accent. */
  palette?: PricingPalette;
};

/** Highlights €0 setup (Pilot tier). */
export function PricingSetup({
  setup,
  palette = "accent",
}: PricingSetupProps) {
  const zeroSetup = setup === "\u20ac0";
  const sage = palette === "sage";

  if (zeroSetup) {
    if (sage) {
      return (
        <div
          className={cn(
            "mt-6 rounded-xl border px-4 py-4 ring-1 sm:px-5 sm:py-5",
            "border-[rgba(119,156,133,0.48)] bg-[rgba(231,243,237,0.55)] backdrop-blur-sm ring-[rgba(53,111,79,0.12)]",
          )}
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#356f4f]">
            Setup
          </span>
          <p className="mt-2 font-display text-4xl font-semibold tracking-tight text-[#2a5240] sm:text-5xl">
            {setup}
          </p>
          <p className="mt-2 max-w-[18rem] text-sm font-medium leading-snug text-[#14221a]/88">
            Geen startupkosten: je betaalt alleen het maandtarief.
          </p>
        </div>
      );
    }

    return (
      <div
        className={cn(
          "mt-6 rounded-xl border border-accent/35 bg-accent/[0.07] px-4 py-4 ring-1 ring-accent/10 sm:px-5 sm:py-5",
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

  if (sage) {
    return (
      <div className="mt-6">
        <span className="text-xs font-medium uppercase tracking-wider text-[#356f4f]/72">
          Setup
        </span>
        <div className="mt-1 font-display text-lg font-medium text-[#14221a]">
          {setup}
        </div>
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
