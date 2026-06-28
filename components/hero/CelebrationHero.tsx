"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type WinnerEntry } from "@/lib/results";
import { useWinners } from "@/hooks/useWinners";
import Confetti from "@/components/Confetti";

const MAX_MEMBERS = 5;

const PODIUM_ORDER: WinnerEntry["id"][] = [
  "first-runner-up",
  "winner",
  "second-runner-up",
];

const PODIUM_SIZES: Record<
  WinnerEntry["id"],
  {
    heightDefault: string;
    heightRevealed: string;
    widthDefault: string;
    widthRevealed: string;
  }
> = {
  winner: {
    heightDefault: "h-40 sm:h-48 md:h-52 lg:h-56",
    heightRevealed: "min-h-[260px] sm:min-h-[280px] md:min-h-[300px] lg:min-h-[320px]",
    widthDefault: "w-[120px] sm:w-[150px] md:w-[170px]",
    widthRevealed:
      "w-[170px] sm:w-[240px] md:w-[300px] lg:w-[360px] xl:w-[420px]",
  },
  "first-runner-up": {
    heightDefault: "h-32 sm:h-40 md:h-44 lg:h-48",
    heightRevealed: "min-h-[240px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[300px]",
    widthDefault: "w-[100px] sm:w-[130px] md:w-[150px]",
    widthRevealed:
      "w-[150px] sm:w-[210px] md:w-[270px] lg:w-[320px] xl:w-[360px]",
  },
  "second-runner-up": {
    heightDefault: "h-28 sm:h-36 md:h-40 lg:h-44",
    heightRevealed: "min-h-[230px] sm:min-h-[250px] md:min-h-[270px] lg:min-h-[290px]",
    widthDefault: "w-[90px] sm:w-[120px] md:w-[140px]",
    widthRevealed:
      "w-[140px] sm:w-[200px] md:w-[260px] lg:w-[300px] xl:w-[340px]",
  },
};

function MemberList({
  members,
  isWinner,
}: {
  members: string[];
  isWinner: boolean;
}) {
  const displayMembers = members.slice(0, MAX_MEMBERS);
  const useTwoColumns = displayMembers.length > 3;

  return (
    <ul
      className={`pt-2 border-t border-white/10 w-full ${
        useTwoColumns
          ? "grid grid-cols-1 sm:grid-cols-2 gap-x-2 sm:gap-x-3 gap-y-1 sm:gap-y-1.5 text-left sm:text-center"
          : "space-y-1 sm:space-y-1.5"
      }`}
    >
      {displayMembers.map((member, i) => (
        <motion.li
          key={`${member}-${i}`}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 + i * 0.06 }}
          className={`leading-tight truncate ${
            isWinner
              ? "text-[11px] sm:text-xs md:text-sm lg:text-base text-slate-200"
              : "text-[10px] sm:text-[11px] md:text-xs lg:text-sm text-slate-300"
          }`}
          title={member}
        >
          {member}
        </motion.li>
      ))}
    </ul>
  );
}

function PodiumCard({ entry }: { entry: WinnerEntry }) {
  const [revealed, setRevealed] = useState(false);
  const isWinner = entry.id === "winner";
  const sizes = PODIUM_SIZES[entry.id];

  return (
    <motion.div
      layout
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col items-center ${revealed ? sizes.widthRevealed : sizes.widthDefault}`}
    >
      <motion.div
        animate={revealed ? { scale: 1.12, y: -4 } : { scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-3 relative z-10 drop-shadow-[0_0_12px_rgba(0,212,255,0.4)]"
      >
        {entry.medal}
      </motion.div>

      <motion.div
        layout
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full rounded-t-xl sm:rounded-t-2xl relative border transition-shadow duration-500 ${
          revealed ? "overflow-visible" : "overflow-hidden"
        } ${revealed ? sizes.heightRevealed : sizes.heightDefault} ${
          revealed
            ? isWinner
              ? "border-cyan-neon/50 glow-cyan shadow-[0_0_40px_rgba(0,212,255,0.2)]"
              : "border-purple-neon/30 shadow-[0_0_24px_rgba(168,85,247,0.15)]"
            : "border-cyan-neon/20"
        }`}
      >
        <div
          className={`absolute inset-0 rounded-t-xl sm:rounded-t-2xl ${
            isWinner
              ? "bg-gradient-to-b from-cyan-neon/20 via-electric-blue/30 to-purple-neon/20"
              : "bg-gradient-to-b from-electric-blue/15 via-slate-900/80 to-black/90"
          }`}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-neon/60 to-transparent" />

        <div
          className={`relative z-10 flex flex-col items-center p-3 sm:p-4 lg:p-5 text-center ${
            revealed ? "min-h-full justify-start gap-2 sm:gap-3" : "h-full justify-between"
          }`}
        >
          <h3
            className={`shrink-0 text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-wider ${
              isWinner ? "text-cyan-neon" : "text-slate-300"
            }`}
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            {entry.podiumTitle}
          </h3>

          <div
            className={`w-full px-0.5 sm:px-1 ${
              revealed
                ? "flex flex-col items-center gap-2 sm:gap-2.5 py-1"
                : "flex-1 flex flex-col items-center justify-center py-1"
            }`}
          >
            <AnimatePresence mode="wait">
              {!revealed ? (
                <motion.button
                  key="btn"
                  type="button"
                  onClick={() => setRevealed(true)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className={`py-2 px-3 sm:px-4 lg:px-5 rounded-lg text-[10px] sm:text-xs lg:text-sm uppercase tracking-wider font-semibold whitespace-nowrap ${
                    isWinner
                      ? "bg-cyan-neon/15 border border-cyan-neon/40 text-cyan-neon hover:bg-cyan-neon/25"
                      : "glass border border-white/15 text-slate-300 hover:border-cyan-neon/30 hover:text-cyan-neon"
                  }`}
                >
                  Show Team
                </motion.button>
              ) : (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full space-y-1.5 sm:space-y-2"
                >
                  <p
                    className={`font-bold leading-tight ${
                      isWinner
                        ? "text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white text-glow-cyan"
                        : "text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white"
                    }`}
                    style={{ fontFamily: "var(--font-orbitron)" }}
                  >
                    {entry.teamName}
                  </p>
                  <p
                    className={`leading-snug line-clamp-2 ${
                      isWinner
                        ? "text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-cyan-neon"
                        : "text-[10px] sm:text-xs md:text-sm lg:text-base text-purple-neon/90"
                    }`}
                  >
                    {entry.projectTitle}
                  </p>
                  {entry.members.length > 0 && (
                    <MemberList members={entry.members} isWinner={isWinner} />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {revealed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="shrink-0 text-[9px] sm:text-[10px] lg:text-xs uppercase tracking-widest text-slate-500 pt-1"
            >
              Shown
            </motion.span>
          )}
        </div>
      </motion.div>

      <motion.div
        layout
        className={`w-[108%] h-2 sm:h-2.5 lg:h-3 rounded-b-md ${
          isWinner
            ? "bg-gradient-to-r from-electric-blue/40 via-cyan-neon/30 to-electric-blue/40"
            : "bg-gradient-to-r from-slate-700/50 via-slate-600/40 to-slate-700/50"
        }`}
      />
    </motion.div>
  );
}

export default function CelebrationHero() {
  const { winners, error } = useWinners();

  if (error) {
    return (
      <div className="w-full py-12 text-center text-slate-500 text-sm">
        Could not load results. Check data/results.json
      </div>
    );
  }

  if (!winners) {
    return (
      <div className="w-full py-12 flex justify-center gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-24 sm:w-32 h-32 sm:h-40 rounded-t-xl glass animate-pulse"
          />
        ))}
      </div>
    );
  }

  const ordered = PODIUM_ORDER.map(
    (id) => winners.find((w) => w.id === id)!
  );

  return (
    <>
      <Confetti />

      <div className="w-full flex flex-col items-center py-4 sm:py-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-glow-cyan mb-3 sm:mb-4 bg-gradient-to-r from-white via-cyan-neon to-purple-neon bg-clip-text text-transparent"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Congratulations!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-sm sm:text-base text-slate-400 uppercase tracking-[0.25em] mb-10 sm:mb-14"
        >
          AutoForge 12H Hackathon Winners
        </motion.p>

        <div className="w-full max-w-[95vw] xl:max-w-7xl flex items-end justify-center gap-1.5 sm:gap-3 lg:gap-5 xl:gap-6 px-1 sm:px-2">
          {ordered.map((entry, index) => (
            <motion.div
              key={`${entry.id}-${entry.teamName}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.15, duration: 0.6 }}
              className="flex justify-center"
            >
              <PodiumCard entry={entry} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
