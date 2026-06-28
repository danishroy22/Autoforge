"use client";

import { useState, useEffect } from "react";
import {
  getEventPhase,
  getPreviewPhaseFromUrl,
  type EventPhase,
} from "@/lib/event-phase";

export function useEventPhase() {
  const [phase, setPhase] = useState<EventPhase>("countdown");

  useEffect(() => {
    const update = () => {
      const preview = getPreviewPhaseFromUrl();
      setPhase(preview ?? getEventPhase());
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return phase;
}
