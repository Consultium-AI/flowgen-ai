import type { Metadata } from "next";
import { ServicesContent } from "@/components/diensten/ServicesContent";

export const metadata: Metadata = {
  title: "Diensten — Qozen AI",
  description:
    "Qozen AI bouwt AI Operations Dashboards voor leads, approvals, follow-ups en rapportages. Transparante pricing vanaf \u20ac399/maand.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
