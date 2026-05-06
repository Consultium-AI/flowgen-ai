"use client";

import Cal from "@calcom/embed-react";

type Props = {
  calLink: string;
};

export function CalBookingEmbed({ calLink }: Props) {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl border border-border bg-white shadow-card">
      <Cal
        namespace="workflow-scan"
        calLink={calLink}
        style={{ width: "100%", minHeight: "720px", height: "100%" }}
        config={{
          layout: "month_view",
        }}
      />
    </div>
  );
}
