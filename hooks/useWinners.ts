"use client";

import { useState, useEffect, useCallback } from "react";
import type { WinnerEntry } from "@/lib/results";

export function useWinners() {
  const [winners, setWinners] = useState<WinnerEntry[] | null>(null);
  const [error, setError] = useState(false);

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/results", { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setWinners(data.winners as WinnerEntry[]);
      setError(false);
    } catch {
      setError(true);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { winners, error, reload: load };
}
