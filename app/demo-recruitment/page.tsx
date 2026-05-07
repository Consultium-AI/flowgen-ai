import type { Metadata } from "next";
import { DemoRecruitmentContent } from "@/components/demo-recruitment/DemoRecruitmentContent";

export const metadata: Metadata = {
  title: "Demo · AI Recruitment Ops Dashboard",
  description:
    "Bekijk hoe Qozen AI een operationele cockpit bouwt voor recruitmentbureaus. Centrale kandidaten-inbox, AI-screening, goedgekeurde communicatie, pipeline en planning op één plek.",
};

export default function DemoRecruitmentPage() {
  return <DemoRecruitmentContent />;
}
