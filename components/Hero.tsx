"use client";

import { useEventPhase } from "@/hooks/useEventPhase";
import HeroShell from "@/components/hero/HeroShell";
import CountdownTimer from "@/components/CountdownTimer";
import AwaitingResultsHero from "@/components/hero/AwaitingResultsHero";
import ResultsSoonHero from "@/components/hero/ResultsSoonHero";
import CelebrationHero from "@/components/hero/CelebrationHero";

export default function Hero() {
  const phase = useEventPhase();

  const renderPhaseContent = () => {
    switch (phase) {
      case "countdown":
        return <CountdownTimer />;
      case "awaiting-results":
        return <AwaitingResultsHero />;
      case "results-soon":
        return <ResultsSoonHero />;
      case "celebration":
        return <CelebrationHero />;
    }
  };

  return (
    <HeroShell phase={phase} celebratory={phase === "celebration"}>
      {renderPhaseContent()}
    </HeroShell>
  );
}
