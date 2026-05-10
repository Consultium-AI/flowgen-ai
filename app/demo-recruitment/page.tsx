import type { Metadata } from "next";
import { DemoRecruitmentContent } from "@/components/demo-recruitment/DemoRecruitmentContent";

export const metadata: Metadata = {
  title: "Demo · AI Recruitment Ops Dashboard",
  description:
    "Productdemo (visie): zo kan een recruitment cockpit werken. Pilot start met CSV/Sheet/formulier of handmatige import; zware integraties plannen we per scope.",
};

export default function DemoRecruitmentPage() {
  return <DemoRecruitmentContent />;
}
