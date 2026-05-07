type PricingSetupProps = {
  setup: string;
  featured?: boolean;
};

/** Highlights Pilot-style €0 setup when paired with the featured tier card. */
export function PricingSetup({ setup, featured }: PricingSetupProps) {
  const zeroFeaturedPilotStyle = setup === "\u20ac0" && featured;

  if (zeroFeaturedPilotStyle) {
    return (
      <div className="mt-6 rounded-xl border border-accent/45 bg-accent/[0.09] px-4 py-4 ring-1 ring-accent/15 sm:px-5 sm:py-5">
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
