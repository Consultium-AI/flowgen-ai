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

const siteTitle =
  "Qozen AI — AI Operations Dashboards voor leads, goedkeuringen en workflows";
const siteDescription =
  "Qozen AI bouwt heldere AI-workflows met één overzichtelijk dashboard. Volg leads, keur AI-berichten goed en bewaak opvolging — met volledige controle voor je team.";

export const metadata: Metadata = {
  metadataBase: new URL("https://qozenai.nl"),
  title: {
    default: siteTitle,
    template: "%s | Qozen AI",
  },
  description: siteDescription,
  keywords: [
    "Qozen AI",
    "AI dashboard",
    "workflow automatisering",
    "lead opvolging",
    "approval inbox",
    "AI operations",
    "Nederland",
  ],
  authors: [{ name: "Qozen AI", url: "https://qozenai.nl" }],
  creator: "Qozen AI",
  publisher: "Qozen AI",
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: "/images/Qlogo.png",
    apple: "/images/Qlogo.png",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://qozenai.nl",
    siteName: "Qozen AI",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
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
