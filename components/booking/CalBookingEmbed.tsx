"use client";

import Cal from "@calcom/embed-react";

type Props = {
  calLink: string;
};

export function CalBookingEmbed({ calLink }: Props) {
  return (
    <div className="relative isolate overflow-hidden rounded-[1.625rem] border border-[rgba(119,156,133,0.22)] bg-white shadow-[0_24px_60px_-40px_rgba(53,111,79,0.38)] ring-1 ring-black/[0.03]">
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
