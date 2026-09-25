"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Banknote, CalendarDays } from "lucide-react";

interface Achievement {
  title: string;
  description: string;
  year: string;
  type: "competition" | "funding";
  organization?: string;
  issuedDate?: string;
  associatedWith?: string;
  detail?: string;
}

const achievements: Achievement[] = [
  {
    title: "3rd Honorable Mention",
    description: "KAVINYA 2026 Digital Innovation Competition",
    year: "2026",
    type: "competition",
    organization: "LLDIKTI Wilayah XV",
    issuedDate: "May 2026",
  },
  {
    title: "2nd Place",
    description:
      "76th World Meteorological Day Infographic Poster Competition",
    year: "2026",
    type: "competition",
    organization: "BMKG Bali",
    issuedDate: "Apr 2026",
  },
  {
    title: "Silver Medal",
    description:
      "Health Category – Nusantara Creative Competition 3 (2026)",
    year: "2026",
    type: "competition",
    organization: "Lembaga Setara Prisma Nusantara (Nusantara Muda)",
    issuedDate: "Apr 2026",
  },
  {
    title: "Wirausaha Merdeka Program Funding",
    description:
      "Funding recipient of a national entrepreneurship program by the Ministry of Education.",
    year: "2025",
    type: "funding",
    organization: "Ministry of Education",
    issuedDate: "January 2025",
    associatedWith: "Universitas Lambung Mangkurat",
  },
];

function AchievementCard({
  achievement,
  index,
}: {
  achievement: Achievement;
  index: number;
}) {
  const isCompetition = achievement.type === "competition";
  const Icon = isCompetition ? Trophy : Banknote;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-2xl bg-white/90 dark:bg-zinc-900/70 border border-zinc-200/70 dark:border-zinc-800 hover:border-blue-400/60 dark:hover:border-blue-500/40 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-blue-500/8 dark:hover:shadow-blue-500/5 overflow-hidden flex flex-col gap-3"
    >
      {/* Icon + Title row */}
      <div className="flex items-start gap-3">
        <div className="shrink-0 p-2 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-950/70 transition-colors duration-200">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex flex-col gap-1 min-w-0">
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {achievement.title}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {achievement.description}
          </p>
        </div>
      </div>

      {/* Meta info */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-2 border-t border-zinc-100 dark:border-zinc-800/60">
        {/* Year / Issued date */}
        <span className="inline-flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
          <CalendarDays className="w-3 h-3" />
          {achievement.issuedDate ?? achievement.year}
        </span>

        {/* Organization (funding type) */}
        {achievement.organization && (
          <span className="inline-flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
            <Award className="w-3 h-3 text-blue-500 dark:text-blue-400" />
            {achievement.organization}
          </span>
        )}

        {/* Type badge */}
        <span
          className={`ml-auto text-[10px] px-2 py-0.5 rounded-full font-medium ${
            isCompetition
              ? "bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/50"
              : "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/50"
          }`}
        >
          {isCompetition ? "Competition" : "Program Recognition"}
        </span>
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative pt-12">
      {/* Subtle section background */}
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-transparent via-[#f0f5ff]/30 to-transparent dark:from-transparent dark:via-blue-950/5 dark:to-transparent pointer-events-none" />

      {/* Section Header — matches Skills/About/Experience pattern */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2.5 mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800/80"
      >
        <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
          <Trophy className="w-5 h-5" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Achievements
        </h2>
      </motion.div>

      {/* 2-column card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={achievement.title}
            achievement={achievement}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
