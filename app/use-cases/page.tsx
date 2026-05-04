import type { Metadata } from "next";
import { UseCasesContent } from "@/components/use-cases/UseCasesContent";

export const metadata: Metadata = {
  title: "Use cases — Qozen AI",
  description:
    "Bekijk hoe Qozen AI bedrijven helpt met overzichtelijke dashboards voor leads, opvolgingen en workflows.",
};

export default function UseCasesPage() {
  return <UseCasesContent />;
}
