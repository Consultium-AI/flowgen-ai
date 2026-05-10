import type { Metadata } from "next";
import { ServicesContent } from "@/components/diensten/ServicesContent";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Pakketten Founding Pilot (\u20ac399/mnd, \u20ac0 setup), Active Ops (\u20ac899/mnd) en Custom Operations vanaf \u20ac1.400/mnd. Zelfde transparante workflow als op de homepage: scan, dashboard, approvals en opschalen.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
