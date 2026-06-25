"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { sponsors } from "@/lib/data";

interface SponsorShowcaseProps {
  variant?: "hero" | "standalone";
}

function SponsorLogo({
  sponsor,
  large,
}: {
  sponsor: (typeof sponsors)[0];
  large?: boolean;
}) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center px-6 sm:px-10 md:px-14">
      <div
        className={`glass-strong rounded-2xl border border-white/10 hover:border-cyan-neon/30 transition-all duration-300 hover:scale-105 glow-blue ${
          large
            ? "px-10 py-7 sm:px-14 sm:py-9 min-w-[200px] sm:min-w-[260px] md:min-w-[300px]"
            : "px-8 py-6 sm:px-12 sm:py-8 min-w-[180px] sm:min-w-[220px]"
        }`}
      >
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          width={240}
          height={96}
          className={`w-auto object-contain mx-auto opacity-90 hover:opacity-100 transition-opacity ${
            large ? "h-14 sm:h-20 md:h-24" : "h-12 sm:h-16"
          }`}
        />
      </div>
    </div>
  );
}

function SponsorCarousel({ large }: { large?: boolean }) {
  const doubled = [...sponsors, ...sponsors];

  return (
    <div className="relative w-full">
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

      <div className="overflow-hidden sponsor-track">
        <div className="flex animate-scroll w-max">
          {doubled.map((sponsor, index) => (
            <SponsorLogo
              key={`${sponsor.name}-${index}`}
              sponsor={sponsor}
              large={large}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SponsorShowcase({
  variant = "standalone",
}: SponsorShowcaseProps) {
  const isHero = variant === "hero";

  if (isHero) {
    return (
      <motion.div
        id="sponsors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="w-full mt-10 sm:mt-14 md:mt-16"
      >
        <p
          className="text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] text-slate-400 mb-5 sm:mb-7"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Proudly Supported By
        </p>
        <SponsorCarousel large />
      </motion.div>
    );
  }

  return (
    <section id="sponsors" className="py-16 sm:py-24 overflow-hidden">
      <div className="px-4 sm:px-6 mb-10 sm:mb-14 text-center">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-white text-glow-blue"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Proudly Supported By
        </h2>
        <div className="mt-4 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-neon to-transparent" />
      </div>
      <SponsorCarousel />
    </section>
  );
}
