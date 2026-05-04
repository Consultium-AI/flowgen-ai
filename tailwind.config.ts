import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        bg: {
          DEFAULT: "#F8FAFC",
          dim: "#F1F5F9",
          tint: "#FFFFFF",
          warm: "#FAF7F2",
          cool: "#F5F7FA",
          soft: "#F8FAFC",
          card: "#FFFFFF",
          elevated: "#F1F5F9",
        },
        border: {
          DEFAULT: "#E2E8F0",
          soft: "#EEF2F7",
        },
        accent: {
          DEFAULT: "#26d07c",
          soft: "#1db86a",
          glow: "#4ae8a8",
          cyan: "#14B8A6",
          plum: "#22C55E",
        },
        muted: {
          DEFAULT: "#64748B",
          soft: "#94A3B8",
        },
        ink: {
          DEFAULT: "#0F172A",
          soft: "#334155",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": [
          "clamp(3rem, 7vw, 6.5rem)",
          { lineHeight: "0.95", letterSpacing: "-0.045em" },
        ],
        "display-lg": [
          "clamp(2.5rem, 5.5vw, 5rem)",
          { lineHeight: "1", letterSpacing: "-0.04em" },
        ],
        "display-md": [
          "clamp(2rem, 4vw, 3.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.035em" },
        ],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(248,250,252,1) 80%), radial-gradient(circle at 50% 0%, rgba(16,185,129,0.08), transparent 50%)",
        "accent-gradient":
          "linear-gradient(135deg, #1db86a 0%, #26d07c 100%)",
      },
      boxShadow: {
        glow: "0 18px 45px -24px rgba(38, 208, 124, 0.45)",
        "glow-soft": "0 14px 30px -24px rgba(15, 23, 42, 0.35)",
        card: "0 18px 50px -36px rgba(15,23,42,0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        shimmer: "shimmer 3s linear infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "scan-line": "scan-line 8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
