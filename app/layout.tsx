import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Qozen AI — AI Operations Dashboards voor leads, approvals en workflows",
  description:
    "Qozen AI bouwt AI-workflows met een overzichtelijk dashboard voor leads, approvals, follow-ups en rapportages. Automatiseer je opvolging en behoud volledige controle.",
  metadataBase: new URL("https://qozenai.nl"),
  icons: {
    icon: "/images/Qlogo.png",
    apple: "/images/Qlogo.png",
  },
  openGraph: {
    title: "Qozen AI — AI Operations Dashboards voor leads, approvals en workflows",
    description:
      "Qozen AI bouwt AI-workflows met een overzichtelijk dashboard voor leads, approvals, follow-ups en rapportages. Automatiseer je opvolging en behoud volledige controle.",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} ${cormorant.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans antialiased">
        <Navbar />
        <main className="relative">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
