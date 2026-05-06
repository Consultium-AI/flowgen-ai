/** Fallback booking URL when inline slug is unset (full URL or path after cal.com/). */
const FALLBACK_CAL_URL =
  process.env.NEXT_PUBLIC_CAL_BOOKING_PAGE_URL?.trim() ?? "";

export function calWorkflowScanFallbackUrl(calLink: string): string {
  if (calLink) return "";
  if (!FALLBACK_CAL_URL) return "";
  return FALLBACK_CAL_URL.startsWith("http")
    ? FALLBACK_CAL_URL
    : `https://cal.com/${FALLBACK_CAL_URL.replace(/^\/+/, "")}`;
}
