"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Layout,
  Database,
  BarChart2,
  BrainCircuit,
  Network,
  Smartphone,
  Layers,
} from "lucide-react";
import { skillCategories, SkillCategory, SkillCategoryType } from "@/data/portfolio";

function getCategoryIcon(cat: SkillCategoryType) {
  switch (cat) {
    case "frontend":
      return <Layout className="w-5 h-5" />;
    case "backend":
      return <Database className="w-5 h-5" />;
    case "datascience":
      return <BarChart2 className="w-5 h-5" />;
    case "ml":
      return <BrainCircuit className="w-5 h-5" />;
    case "deeplearning":
      return <Network className="w-5 h-5" />;
    case "mobile":
      return <Smartphone className="w-5 h-5" />;
    default:
      return <Layers className="w-5 h-5" />;
  }
}

function SkillCard({ skill, index }: { skill: SkillCategory; index: number }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800 hover:border-blue-500/50 dark:hover:border-blue-500/40 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-blue-500/5 overflow-hidden flex flex-col gap-4"
    >
      {/* Cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: isHovered
            ? `radial-gradient(320px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.09), transparent 70%)`
            : "none",
        }}
        aria-hidden="true"
      />

      {/* Icon + Name */}
      <div className="relative z-10 flex items-center gap-3 text-zinc-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
        <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-inherit group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 transition-colors duration-200 shrink-0">
          {getCategoryIcon(skill.category)}
        </div>
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {skill.name}
        </h3>
      </div>

      {/* Tech description */}
      <p className="relative z-10 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-mono">
        {skill.tech}
      </p>

      {/* Tags */}
      <div className="relative z-10 flex flex-wrap gap-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-800/60">
        {skill.items.map((item, i) => (
          <span
            key={i}
            className="text-[11px] px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800/70 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="pt-12">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2.5 mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800/80"
      >
        <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
          <Layers className="w-5 h-5" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Skills &amp; Specializations
        </h2>
      </motion.div>

      {/* 2-column grid: 3 rows on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {skillCategories.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
}
