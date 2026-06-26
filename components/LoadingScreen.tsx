"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BRANDING } from "@/lib/data";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        >
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0, 102, 255, 0.15) 0%, transparent 70%)",
            }}
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 flex flex-col items-center"
          >
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mb-8"
            >
              <Image
                src={BRANDING.hackathonLogo}
                alt="UoM AutoForge Hackathon"
                width={320}
                height={320}
                unoptimized
                priority
                className="w-36 h-auto sm:w-44 drop-shadow-[0_0_40px_rgba(0,212,255,0.3)]"
              />
            </motion.div>

            <motion.p
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-xs text-slate-500 uppercase tracking-[0.4em] mb-8"
            >
              Initializing...
            </motion.p>

            <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-electric-blue via-cyan-neon to-purple-neon rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
