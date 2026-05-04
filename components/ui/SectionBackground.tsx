import { cn } from "@/lib/utils";

type Variant =
  | "dots"
  | "grid"
  | "lines"
  | "mesh"
  | "spotlight"
  | "aurora"
  | "rings"
  | "split"
  | "radial"
  | "noise";

type Shade = "default" | "dim" | "tint" | "warm" | "cool" | "dark";
type Accent =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "center"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight";
type Intensity = "low" | "medium" | "high";

interface SectionBackgroundProps {
  variant?: Variant;
  shade?: Shade;
  accent?: Accent;
  /** secondary accent color */
  hue?: "lime" | "cyan" | "plum";
  intensity?: Intensity;
  fadeTop?: boolean;
  fadeBottom?: boolean;
  className?: string;
}

const SHADES: Record<Shade, string> = {
  default: "#F8FAFC",
  dim: "#F1F5F9",
  tint: "#FFFFFF",
  warm: "#FAF7F2",
  cool: "#F5F7FA",
  dark: "#08080A",
};

const HUES = {
  lime: { strong: "rgba(16,185,129,0.18)", soft: "rgba(16,185,129,0.04)" },
  cyan: { strong: "rgba(20,184,166,0.16)", soft: "rgba(20,184,166,0.04)" },
  plum: { strong: "rgba(34,197,94,0.14)", soft: "rgba(34,197,94,0.035)" },
};

export function SectionBackground({
  variant = "dots",
  shade = "default",
  accent = "top",
  hue = "lime",
  intensity = "medium",
  fadeTop = false,
  fadeBottom = false,
  className,
}: SectionBackgroundProps) {
  const positions: Record<Accent, string> = {
    top: "left-1/2 -top-40 -translate-x-1/2",
    bottom: "left-1/2 -bottom-40 -translate-x-1/2",
    left: "-left-40 top-1/2 -translate-y-1/2",
    right: "-right-40 top-1/2 -translate-y-1/2",
    center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
    topLeft: "-left-32 -top-32",
    topRight: "-right-32 -top-32",
    bottomLeft: "-left-32 -bottom-32",
    bottomRight: "-right-32 -bottom-32",
  };

  const sizes: Record<Intensity, string> = {
    low: "h-[420px] w-[420px] opacity-50",
    medium: "h-[680px] w-[680px] opacity-70",
    high: "h-[900px] w-[900px] opacity-90",
  };

  const hueColors = HUES[hue];

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
      style={{ backgroundColor: SHADES[shade] }}
    >
      {variant === "dots" && <DotsLayer />}
      {variant === "grid" && <GridLayer />}
      {variant === "lines" && <LinesLayer />}
      {variant === "rings" && <RingsLayer />}
      {variant === "mesh" && <MeshLayer />}
      {variant === "split" && <SplitLayer />}
      {variant === "aurora" && <AuroraLayer hue={hue} />}
      {variant === "spotlight" && <SpotlightLayer />}
      {variant === "radial" && <RadialLayer />}
      {variant === "noise" && <NoiseLayer />}

      {variant !== "aurora" && (
        <div
          className={cn("absolute rounded-full blur-3xl", positions[accent], sizes[intensity])}
        >
          <div
            className="h-full w-full rounded-full"
            style={{
              background: `radial-gradient(circle, ${hueColors.strong} 0%, ${hueColors.soft} 35%, transparent 70%)`,
            }}
          />
        </div>
      )}

      {fadeTop && (
        <div
          className="absolute inset-x-0 top-0 h-32"
          style={{
            background: `linear-gradient(180deg, ${SHADES[shade]} 0%, transparent 100%)`,
          }}
        />
      )}
      {fadeBottom && (
        <div
          className="absolute inset-x-0 bottom-0 h-32"
          style={{
            background: `linear-gradient(0deg, ${SHADES[shade]} 0%, transparent 100%)`,
          }}
        />
      )}
    </div>
  );
}

function DotsLayer() {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(15,23,42,0.055) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        maskImage:
          "radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 80%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 80%)",
      }}
    />
  );
}

function GridLayer() {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage:
          "radial-gradient(ellipse 70% 50% at 50% 50%, #000 30%, transparent 80%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 50% at 50% 50%, #000 30%, transparent 80%)",
      }}
    />
  );
}

function LinesLayer() {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(15,23,42,0.045) 0 1px, transparent 1px 100px)",
          maskImage:
            "linear-gradient(180deg, transparent 0%, #000 25%, #000 75%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(180deg, transparent 0%, #000 25%, #000 75%, transparent 100%)",
        }}
      />
      <div className="hairline-divider top-1/3" />
      <div className="hairline-divider top-2/3" />
    </>
  );
}

function RingsLayer() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="relative aspect-square w-[140%] max-w-none">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-900/[0.05]"
            style={{ width: `${i * 18}%`, height: `${i * 18}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function MeshLayer() {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(at 18% 22%, rgba(16,185,129,0.08) 0px, transparent 50%), radial-gradient(at 82% 28%, rgba(20,184,166,0.06) 0px, transparent 50%), radial-gradient(at 60% 85%, rgba(34,197,94,0.05) 0px, transparent 50%)",
        }}
      />
      <NoiseLayer />
    </>
  );
}

function SplitLayer() {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(15,23,42,0.025) 0%, rgba(15,23,42,0.025) 50%, transparent 50%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-y-0 left-1/2"
        style={{
          width: "1px",
          background:
            "linear-gradient(180deg, transparent 0%, rgba(16,185,129,0.24) 50%, transparent 100%)",
          transform: "rotate(8deg)",
          transformOrigin: "center",
        }}
      />
    </>
  );
}

function AuroraLayer({ hue }: { hue: "lime" | "cyan" | "plum" }) {
  const primary = HUES[hue].strong;
  const secondary = hue === "lime" ? HUES.cyan.strong : HUES.lime.strong;
  return (
    <div className="absolute inset-0">
      <div
        className="absolute -top-32 left-0 h-[70%] w-full"
        style={{
          background: `radial-gradient(ellipse at 30% 50%, ${primary} 0%, transparent 60%)`,
          filter: "blur(70px)",
        }}
      />
      <div
        className="absolute -bottom-32 right-0 h-[70%] w-full"
        style={{
          background: `radial-gradient(ellipse at 70% 50%, ${secondary} 0%, transparent 60%)`,
          filter: "blur(80px)",
        }}
      />
    </div>
  );
}

function SpotlightLayer() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(16,185,129,0.08) 0%, transparent 60%)",
      }}
    />
  );
}

function RadialLayer() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(15,23,42,0.04) 0%, transparent 60%)",
      }}
    />
  );
}

function NoiseLayer() {
  return (
    <div
      className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      }}
    />
  );
}
