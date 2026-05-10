import type { Metadata } from "next";
import { WorkflowScanContent } from "@/components/booking/WorkflowScanContent";

/** Avoid static prerender with an empty Cal slug when env was added after first build. */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Workflow-scan boeken",
  description:
    "Gratis workflow-scan van 30 minuten: ontdek welk proces als eerste in een AI-dashboard past. Ma–vr, 09:00–17:00, slots om het halfuur.",
};

function calWorkflowScanLink(): string {
  return (
    process.env.WORKFLOW_SCAN_CAL_LINK?.trim() ||
    process.env.NEXT_PUBLIC_CAL_WORKFLOW_SCAN_LINK?.trim() ||
    ""
  );
}

export default function WorkflowScanPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const van = searchParams.van;
  return (
    <WorkflowScanContent
      calLink={calWorkflowScanLink()}
      contextVan={van}
    />
  );
}
