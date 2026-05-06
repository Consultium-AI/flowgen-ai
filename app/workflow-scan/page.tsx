import type { Metadata } from "next";
import { WorkflowScanContent } from "@/components/booking/WorkflowScanContent";

/** Avoid static prerender with an empty Cal slug when env was added after first build. */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Workflow-scan boeken",
  description:
    "Plan een gratis workflow-scan van 30 minuten. Starttijden op elk heel uur.",
};

function calWorkflowScanLink(): string {
  return (
    process.env.WORKFLOW_SCAN_CAL_LINK?.trim() ||
    process.env.NEXT_PUBLIC_CAL_WORKFLOW_SCAN_LINK?.trim() ||
    ""
  );
}

export default function WorkflowScanPage() {
  return <WorkflowScanContent calLink={calWorkflowScanLink()} />;
}
