"use client";

import { useState, useEffect } from "react";
import { EVENT_CONFIG } from "@/lib/data";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
  isBeforeStart: boolean;
}

function getDeadline(): Date {
  const deadline = new Date(EVENT_CONFIG.eventDate);
  deadline.setHours(EVENT_CONFIG.endHour, EVENT_CONFIG.endMinute, 0, 0);
  return deadline;
}

function getStartTime(): Date {
  const start = new Date(EVENT_CONFIG.eventDate);
  start.setHours(EVENT_CONFIG.startHour, EVENT_CONFIG.startMinute, 0, 0);
  return start;
}

function calculateTimeLeft(): TimeLeft {
  const now = new Date();
  const deadline = getDeadline();
  const start = getStartTime();

  if (now < start) {
    const diff = start.getTime() - now.getTime();
    return {
      hours: Math.floor(diff / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
      isExpired: false,
      isBeforeStart: true,
    };
  }

  const diff = deadline.getTime() - now.getTime();

  if (diff <= 0) {
    return { hours: 0, minutes: 0, seconds: 0, isExpired: true, isBeforeStart: false };
  }

  return {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    isExpired: false,
    isBeforeStart: false,
  };
}

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

interface DigitBoxProps {
  value: string;
  label: string;
  index: number;
}

function DigitBox({ value, label, index }: DigitBoxProps) {
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      <div
        className="digit-box relative flex items-center justify-center rounded-xl sm:rounded-2xl px-4 py-3 sm:px-8 sm:py-6 md:px-12 md:py-8 min-w-[80px] sm:min-w-[120px] md:min-w-[160px]"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <span
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-cyan-neon text-glow-cyan tabular-nums leading-none"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          {value}
        </span>
      </div>
      <span className="text-xs sm:text-sm md:text-base font-medium uppercase tracking-[0.2em] text-slate-400">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) {
    return (
      <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="digit-box rounded-xl sm:rounded-2xl w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 animate-pulse"
          />
        ))}
      </div>
    );
  }

  const { hours, minutes, seconds, isExpired, isBeforeStart } = timeLeft;

  return (
    <div className="w-full flex flex-col items-center">
      {isBeforeStart && (
        <p className="mb-4 text-sm sm:text-base text-cyan-neon/80 uppercase tracking-widest font-medium">
          Event starts in
        </p>
      )}
      {isExpired && (
        <p className="mb-4 text-sm sm:text-base text-purple-neon uppercase tracking-widest font-medium text-glow-purple">
          Submission deadline reached
        </p>
      )}
      <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
        <DigitBox value={pad(hours)} label="Hours" index={0} />
        <span
          className="text-4xl sm:text-6xl md:text-7xl font-bold text-electric-blue text-glow-blue pb-8 sm:pb-10 animate-pulse"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          :
        </span>
        <DigitBox value={pad(minutes)} label="Minutes" index={1} />
        <span
          className="text-4xl sm:text-6xl md:text-7xl font-bold text-electric-blue text-glow-blue pb-8 sm:pb-10 animate-pulse"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          :
        </span>
        <DigitBox value={pad(seconds)} label="Seconds" index={2} />
      </div>
      {!isExpired && !isBeforeStart && (
        <p className="mt-6 text-xs sm:text-sm text-slate-500 uppercase tracking-widest">
          Until submission deadline — 22:00
        </p>
      )}
    </div>
  );
}
