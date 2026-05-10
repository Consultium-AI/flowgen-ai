"use client";

/**
 * GradualBlur — React Bits–style layered backdrop blur.
 */
import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";

import "./GradualBlur.css";

export type BlurPosition = "top" | "bottom" | "left" | "right";

const CURVE_FUNCTIONS = {
  linear: (p: number) => p,
  bezier: (p: number) => p * p * (3 - 2 * p),
  "ease-in": (p: number) => p * p,
  "ease-out": (p: number) => 1 - (1 - p) ** 2,
  "ease-in-out": (p: number) =>
    p < 0.5 ? 2 * p * p : 1 - (-2 * p + 2) ** 2 / 2,
} as const;

export type CurveName = keyof typeof CURVE_FUNCTIONS;
export type BlurTarget = "parent" | "page";

export interface InternalBlurConfig {
  position: BlurPosition;
  strength: number;
  height: string;
  width?: string;
  divCount: number;
  exponential: boolean;
  zIndex: number;
  animated: boolean | "scroll";
  duration: string;
  easing: string;
  opacity: number;
  curve: CurveName;
  responsive: boolean;
  target: BlurTarget;
  className: string;
  style: CSSProperties;
  hoverIntensity?: number;
  onAnimationComplete?: () => void;
  mobileHeight?: string;
  tabletHeight?: string;
  desktopHeight?: string;
  mobileWidth?: string;
  tabletWidth?: string;
  desktopWidth?: string;
}

const DEFAULT_CONFIG: InternalBlurConfig = {
  position: "bottom",
  strength: 2,
  height: "6rem",
  width: undefined,
  divCount: 5,
  exponential: false,
  zIndex: 1000,
  animated: false,
  duration: "0.3s",
  easing: "ease-out",
  opacity: 1,
  curve: "linear",
  responsive: false,
  target: "parent",
  className: "",
  style: {},
};

export const PRESETS = {
  top: { position: "top" as const, height: "6rem" },
  bottom: { position: "bottom" as const, height: "6rem" },
  left: { position: "left" as const, height: "6rem" },
  right: { position: "right" as const, height: "6rem" },
  subtle: { height: "4rem", strength: 1, opacity: 0.8, divCount: 3 },
  intense: { height: "10rem", strength: 4, divCount: 8, exponential: true },
  smooth: { height: "8rem", curve: "bezier" as const, divCount: 10 },
  sharp: { height: "5rem", curve: "linear" as const, divCount: 4 },
  header: {
    position: "top" as const,
    height: "8rem",
    curve: "ease-out" as const,
  },
  footer: {
    position: "bottom" as const,
    height: "8rem",
    curve: "ease-out" as const,
  },
  sidebar: { position: "left" as const, height: "6rem", strength: 2.5 },
  "page-header": {
    position: "top" as const,
    height: "10rem",
    target: "page" as const,
    strength: 3,
  },
  "page-footer": {
    position: "bottom" as const,
    height: "10rem",
    target: "page" as const,
    strength: 3,
  },
} as const satisfies Record<string, Partial<InternalBlurConfig>>;

export type PresetName = keyof typeof PRESETS;

export type GradualBlurProps = Partial<InternalBlurConfig> & {
  preset?: PresetName;
};

function mergeConfigs(...configs: Array<Partial<InternalBlurConfig>>): InternalBlurConfig {
  const merged = configs.reduce((acc, c) => {
    const defined = Object.fromEntries(
      Object.entries(c).filter(([, v]) => v !== undefined),
    ) as Partial<InternalBlurConfig>;
    return { ...acc, ...defined };
  }, { ...DEFAULT_CONFIG });
  return merged as InternalBlurConfig;
}

function getGradientDirection(position: BlurPosition): string {
  const map: Record<BlurPosition, string> = {
    top: "to top",
    bottom: "to bottom",
    left: "to left",
    right: "to right",
  };
  return map[position];
}

function debounce<T extends (...args: unknown[]) => void>(fn: T, wait: number) {
  let t: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

function useResponsiveDimension<K extends "height" | "width">(
  responsive: boolean,
  config: InternalBlurConfig,
  key: K,
): string | undefined {
  const cap = key.charAt(0).toUpperCase() + key.slice(1);
  const [value, setValue] = useState(config[key]);

  useEffect(() => {
    if (!responsive) return;

    const calc = () => {
      const w = window.innerWidth;
      let v: string | undefined = config[key];
      if (w <= 480 && config[`mobile${cap}` as keyof InternalBlurConfig]) {
        v = config[`mobile${cap}` as keyof InternalBlurConfig] as string | undefined;
      } else if (w <= 768 && config[`tablet${cap}` as keyof InternalBlurConfig]) {
        v = config[`tablet${cap}` as keyof InternalBlurConfig] as string | undefined;
      } else if (w <= 1024 && config[`desktop${cap}` as keyof InternalBlurConfig]) {
        v = config[`desktop${cap}` as keyof InternalBlurConfig] as string | undefined;
      }
      setValue(v ?? config[key]);
    };

    const debounced = debounce(calc, 100);
    calc();
    window.addEventListener("resize", debounced);
    return () => window.removeEventListener("resize", debounced);
  }, [responsive, config, key, cap]);

  return responsive ? value : config[key];
}

function useIntersectionObserver(ref: React.RefObject<HTMLElement | null>, shouldObserve: boolean) {
  const [isVisible, setIsVisible] = useState(!shouldObserve);

  useEffect(() => {
    if (!shouldObserve || !ref.current) return;

    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      threshold: 0.1,
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, shouldObserve]);

  return isVisible;
}

function parseDurationMs(duration: string): number {
  const t = duration.trim();
  if (t.endsWith("ms")) return parseFloat(t) || 0;
  const s = parseFloat(t.replace(/s$/i, ""));
  return Number.isFinite(s) ? s * 1000 : 0;
}

function GradualBlurComponent(props: GradualBlurProps) {
  const {
    preset,
    position,
    strength,
    height,
    width,
    divCount,
    exponential,
    zIndex,
    animated,
    duration,
    easing,
    opacity,
    curve,
    responsive,
    target,
    className,
    style,
    hoverIntensity,
    onAnimationComplete,
    mobileHeight,
    tabletHeight,
    desktopHeight,
    mobileWidth,
    tabletWidth,
    desktopWidth,
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const config = useMemo(() => {
    const pl =
      preset && preset in PRESETS
        ? (PRESETS[preset as PresetName] as Partial<InternalBlurConfig>)
        : {};
    return mergeConfigs(DEFAULT_CONFIG, pl, {
      position,
      strength,
      height,
      width,
      divCount,
      exponential,
      zIndex,
      animated,
      duration,
      easing,
      opacity,
      curve,
      responsive,
      target,
      className,
      style,
      hoverIntensity,
      onAnimationComplete,
      mobileHeight,
      tabletHeight,
      desktopHeight,
      mobileWidth,
      tabletWidth,
      desktopWidth,
    });
  }, [
    preset,
    position,
    strength,
    height,
    width,
    divCount,
    exponential,
    zIndex,
    animated,
    duration,
    easing,
    opacity,
    curve,
    responsive,
    target,
    className,
    style,
    hoverIntensity,
    onAnimationComplete,
    mobileHeight,
    tabletHeight,
    desktopHeight,
    mobileWidth,
    tabletWidth,
    desktopWidth,
  ]);

  const responsiveHeight = useResponsiveDimension(config.responsive, config, "height");
  const responsiveWidth = useResponsiveDimension(config.responsive, config, "width");

  const scrollReveal = config.animated === "scroll";
  const isVisible = useIntersectionObserver(containerRef, scrollReveal);

  const blurDivs = useMemo(() => {
    const divs: React.ReactNode[] = [];
    const increment = 100 / config.divCount;
    const strengthMult =
      isHovered && config.hoverIntensity ? config.strength * config.hoverIntensity : config.strength;

    const curveFunc = CURVE_FUNCTIONS[config.curve];

    for (let i = 1; i <= config.divCount; i += 1) {
      let progress = i / config.divCount;
      progress = curveFunc(progress);

      let blurValue: number;
      if (config.exponential) {
        blurValue = 2 ** (progress * 4) * 0.0625 * strengthMult;
      } else {
        blurValue = 0.0625 * (progress * config.divCount + 1) * strengthMult;
      }

      const p1 = Math.round((increment * i - increment) * 10) / 10;
      const p2 = Math.round(increment * i * 10) / 10;
      const p3 = Math.round((increment * i + increment) * 10) / 10;
      const p4 = Math.round((increment * i + increment * 2) * 10) / 10;

      let gradient = `transparent ${p1}%, black ${p2}%`;
      if (p3 <= 100) gradient += `, black ${p3}%`;
      if (p4 <= 100) gradient += `, transparent ${p4}%`;

      const direction = getGradientDirection(config.position);

      const divStyle: CSSProperties = {
        position: "absolute",
        inset: 0,
        maskImage: `linear-gradient(${direction}, ${gradient})`,
        WebkitMaskImage: `linear-gradient(${direction}, ${gradient})`,
        backdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
        WebkitBackdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
        opacity: config.opacity,
        transition:
          config.animated && config.animated !== "scroll"
            ? `backdrop-filter ${config.duration} ${config.easing}`
            : undefined,
      };

      divs.push(<div key={`${config.position}-${i}`} style={divStyle} />);
    }

    return divs;
  }, [
    config.curve,
    config.divCount,
    config.exponential,
    config.opacity,
    config.position,
    config.strength,
    config.duration,
    config.easing,
    config.animated,
    isHovered,
    config.hoverIntensity,
  ]);

  const containerStyle = useMemo((): CSSProperties => {
    const vertical = config.position === "top" || config.position === "bottom";
    const horizontal = config.position === "left" || config.position === "right";
    const page = config.target === "page";

    const baseStyle: CSSProperties = {
      position: page ? "fixed" : "absolute",
      pointerEvents: config.hoverIntensity ? "auto" : ("none" as const),
      opacity: isVisible ? 1 : 0,
      transition: config.animated ? `opacity ${config.duration} ${config.easing}` : undefined,
      zIndex: page ? config.zIndex + 100 : config.zIndex,
      ...config.style,
    };

    if (vertical) {
      baseStyle.height = responsiveHeight;
      baseStyle.width = responsiveWidth ?? "100%";
      baseStyle.left = 0;
      baseStyle.right = 0;
      if (config.position === "top") baseStyle.top = 0;
      else baseStyle.bottom = 0;
    } else if (horizontal) {
      baseStyle.width = responsiveWidth ?? responsiveHeight;
      baseStyle.height = "100%";
      baseStyle.top = 0;
      baseStyle.bottom = 0;
      if (config.position === "left") baseStyle.left = 0;
      else baseStyle.right = 0;
    }

    return baseStyle;
  }, [config, responsiveHeight, responsiveWidth, isVisible]);

  const handleEnter = useCallback(() => setIsHovered(true), []);
  const handleLeave = useCallback(() => setIsHovered(false), []);

  useEffect(() => {
    if (isVisible && scrollReveal && config.onAnimationComplete) {
      const ms = parseDurationMs(config.duration);
      const t = setTimeout(config.onAnimationComplete, ms || 350);
      return () => clearTimeout(t);
    }
  }, [
    isVisible,
    scrollReveal,
    config.onAnimationComplete,
    config.duration,
  ]);

  const pageClass = config.target === "page" ? "gradual-blur-page" : "gradual-blur-parent";

  return (
    <div
      ref={containerRef}
      className={`gradual-blur ${pageClass} ${config.className}`.trim()}
      style={containerStyle}
      aria-hidden
      onMouseEnter={config.hoverIntensity ? handleEnter : undefined}
      onMouseLeave={config.hoverIntensity ? handleLeave : undefined}
    >
      <div
        className="gradual-blur-inner"
        style={{ position: "relative", width: "100%", height: "100%" }}
      >
        {blurDivs}
      </div>
    </div>
  );
}

const GradualBlur = memo(GradualBlurComponent);
GradualBlur.displayName = "GradualBlur";

export default GradualBlur;
