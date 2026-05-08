import type { Metadata } from "next";
import { ServicesContent } from "@/components/diensten/ServicesContent";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Qozen AI bouwt AI Operations Dashboards voor leads, approvals, follow-ups en rapportages. Pilot vanaf €399/mnd met €0 setup voor één afgebakende workflow; uitbreiding en integraties apart.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
