export type EventPhase =
  | "countdown"
  | "awaiting-results"
  | "results-soon"
  | "celebration";

/** Phase boundaries — client local date & time */
export const PHASE_SCHEDULE = {
  /** After demo video deadline (30 June 2026, 22:00) */
  awaitingResultsStart: new Date(2026, 5, 30, 22, 0, 0),
  /** “Results will be announced shortly” (1 July 2026, 13:00) */
  resultsSoonStart: new Date(2026, 6, 1, 13, 0, 0),
  /** Celebration & winner reveal (1 July 2026, 14:00) */
  celebrationStart: new Date(2026, 6, 1, 14, 0, 0),
};

export function getEventPhase(now: Date = new Date()): EventPhase {
  if (now < PHASE_SCHEDULE.awaitingResultsStart) return "countdown";
  if (now < PHASE_SCHEDULE.resultsSoonStart) return "awaiting-results";
  if (now < PHASE_SCHEDULE.celebrationStart) return "results-soon";
  return "celebration";
}

export function getPhaseLabel(phase: EventPhase): string {
  switch (phase) {
    case "countdown":
      return "Live Event";
    case "awaiting-results":
      return "Judging";
    case "results-soon":
      return "Ceremony";
    case "celebration":
      return "Winners";
  }
}

const VALID_PHASES: EventPhase[] = [
  "countdown",
  "awaiting-results",
  "results-soon",
  "celebration",
];

/** Preview any phase via URL: ?phase=celebration */
export function getPreviewPhaseFromUrl(): EventPhase | null {
  if (typeof window === "undefined") return null;
  const value = new URLSearchParams(window.location.search).get("phase");
  if (!value) return null;
  return VALID_PHASES.includes(value as EventPhase)
    ? (value as EventPhase)
    : null;
}
