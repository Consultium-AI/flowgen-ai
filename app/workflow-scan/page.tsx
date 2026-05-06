import type { Metadata } from "next";
import { WorkflowScanContent } from "@/components/booking/WorkflowScanContent";

export const metadata: Metadata = {
  title: "Workflow-scan boeken",
  description:
    "Plan een gratis workflow-scan van 30 minuten. Starttijden op elk heel uur.",
};

export default function WorkflowScanPage() {
  const calLink = process.env.NEXT_PUBLIC_CAL_WORKFLOW_SCAN_LINK?.trim() ?? "";

  return <WorkflowScanContent calLink={calLink} />;
}
