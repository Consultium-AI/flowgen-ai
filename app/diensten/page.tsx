import type { Metadata } from "next";
import { ServicesContent } from "@/components/diensten/ServicesContent";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Founding Pilot (\u20ac599/mnd, drie maanden, \u20ac0 setup) met meetbare tijdsafspraak. Workflow-scan, dashboard en approvals.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
