"use client";

import { motion } from "framer-motion";
import { rules } from "@/lib/data";
import { SectionWrapper, SectionTitle } from "./AnimatedBackground";

export default function HackathonRules() {
  return (
    <SectionWrapper id="rules" className="px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <SectionTitle subtitle="Play fair, build great things">
          Hackathon Rules
        </SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {rules.map((rule, index) => (
            <motion.div
              key={rule.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-5 sm:p-6 border border-white/5 hover:border-purple-neon/30 transition-all duration-300 group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {rule.icon}
              </div>
              <h3
                className="text-sm sm:text-base font-semibold text-white mb-2 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                {rule.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {rule.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
