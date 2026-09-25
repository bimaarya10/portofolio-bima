"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Wrench } from "lucide-react";
import { skillsMarqueeRows } from "@/data/portfolio";

function MarqueeRow({
  skills,
  direction = "left",
  speed = 35,
}: {
  skills: string[];
  direction?: "left" | "right";
  speed?: number;
}) {
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Duplicate items for continuous seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div
      className="relative flex overflow-hidden py-1"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"],
              }
        }
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
          ...(isPaused && { duration: 0 }),
        }}
        className="flex flex-nowrap gap-3 w-max"
        style={isPaused ? { animationPlayState: "paused" } : {}}
      >
        {duplicatedSkills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 text-xs sm:text-sm font-medium rounded-full border border-zinc-200/90 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:border-blue-500/60 dark:hover:border-blue-400/60 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 hover:shadow-sm transition-all duration-200 cursor-default whitespace-nowrap select-none"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="relative w-full pt-12 pb-6 overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2.5 mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800/80"
      >
        <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
          <Wrench className="w-5 h-5" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Technologies & Tools
        </h2>
      </motion.div>

      {/* Marquee Wrapper with soft edge gradients */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-zinc-50 dark:from-zinc-950 to-transparent z-10 pointer-events-none" />

        <div className="flex flex-col gap-3.5">
          {skillsMarqueeRows.map((row, index) => (
            <MarqueeRow
              key={index}
              skills={row}
              direction={index % 2 === 0 ? "left" : "right"}
              speed={index === 1 ? 38 : 34}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
