import type { Metadata } from "next";
import { AboutContent } from "@/components/over-ons/AboutContent";

export const metadata: Metadata = {
  title: "Over ons — Qozen AI",
  description:
    "Qozen AI bouwt AI Operations Dashboards die handmatige opvolging, goedkeuringen en workflows overzichtelijk automatiseren.",
};

export default function AboutPage() {
  return <AboutContent />;
}
