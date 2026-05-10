const ALLOWED = new Set([
  "pilot",
  "growth",
  "active-ops",
  "maatwerk",
  "intro",
  "mvp",
  "approvals",
  "live",
  "opschalen",
]);

const NOTES: Record<string, string> = {
  pilot:
    "Je komt vanuit Founding Pilot: we bereiden dit gesprek daar specifiek op voor.",
  growth:
    "Je komt vanuit het Active Ops-pakket: we bereiden dit gesprek daar specifiek op voor.",
  "active-ops":
    "Je komt vanuit het Active Ops-pakket: we bereiden dit gesprek daar specifiek op voor.",
  maatwerk:
    "Je komt vanuit maatwerk (Custom Operations): we bereiden dit gesprek daar specifiek op voor.",
  intro:
    "Je komt vanuit stap 1 van onze werkwijze (workflow-scan).",
  mvp:
    "Je wilt tijdens deze scan de MVP-fase van je dashboard bespreken.",
  approvals:
    "Je wilt tijdens deze scan human approval en controle bespreken.",
  live:
    "Je wilt tijdens deze scan de live pilot-fase bespreken.",
  opschalen:
    "Je wilt tijdens deze scan uitbreiden na je eerste workflow bespreken.",
};

export function workflowScanContextNote(
  van: string | string[] | undefined,
): string | null {
  const raw = Array.isArray(van) ? van[0] : van;
  const key = raw?.trim().toLowerCase();
  if (!key || !ALLOWED.has(key)) return null;
  return NOTES[key] ?? null;
}
