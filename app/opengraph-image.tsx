import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Qozen AI — AI Operations Dashboards voor leads, goedkeuringen en workflows";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 86,
          background:
            "linear-gradient(155deg, #05110d 0%, #0a1c16 42%, #020503 100%)",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            opacity: 0.45,
            zIndex: 0,
          }}
        />
        <div
          style={{
            width: 64,
            height: 5,
            borderRadius: 3,
            background: "#26d07c",
            marginBottom: 28,
            boxShadow: "0 0 32px rgba(38,208,124,0.45)",
            position: "relative",
            zIndex: 1,
          }}
        />
        <div
          style={{
            fontSize: 76,
            fontWeight: 600,
            color: "#f8fafc",
            letterSpacing: "-0.035em",
            lineHeight: 1.02,
            position: "relative",
            zIndex: 1,
          }}
        >
          Qozen AI
        </div>
        <div
          style={{
            fontSize: 30,
            fontWeight: 500,
            color: "rgba(226,232,240,0.94)",
            marginTop: 20,
            maxWidth: 880,
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
            position: "relative",
            zIndex: 1,
          }}
        >
          Eén dashboard voor leads, goedkeuringen en workflows — grip op je
          AI-automatisering
        </div>
        <div
          style={{
            marginTop: 44,
            fontSize: 22,
            fontWeight: 600,
            color: "#26d07c",
            letterSpacing: "0.02em",
            position: "relative",
            zIndex: 1,
          }}
        >
          qozenai.nl
        </div>
      </div>
    ),
    { ...size },
  );
}
