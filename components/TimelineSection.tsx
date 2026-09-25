"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, GraduationCap, Users } from "lucide-react";
import { educations, experiences, organizations } from "@/data/portfolio";

type TimelineFilter = "all" | "experience" | "education" | "organization";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  desc: string;
  isCurrent?: boolean;
  index: number;
}

function TimelineCard({ title, subtitle, period, desc, isCurrent, index }: TimelineItemProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="group relative pl-8 pb-10 last:pb-0"
    >
      {/* Timeline Node */}
      <div className="absolute -left-[7px] top-1 flex items-center justify-center">
        {isCurrent ? (
          <span className="relative flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-zinc-950" />
          </span>
        ) : (
          <motion.div
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700 ring-4 ring-white dark:ring-zinc-950 group-hover:bg-blue-500 transition-colors"
          />
        )}
      </div>

      {/* Content Card */}
      <div className="group-hover:translate-x-1 transition-transform duration-200">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
            {period}
          </span>
        </div>

        <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5 mb-2">
          {subtitle}
        </div>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl text-justify">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function TimelineSection() {
  const [filter, setFilter] = useState<TimelineFilter>("all");

  const filterTabs = [
    { id: "all", label: "All Journey" },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "organization", label: "Leadership & Org", icon: Users },
  ];

  const showExperience = filter === "all" || filter === "experience";
  const showEducation = filter === "all" || filter === "education";
  const showOrganization = filter === "all" || filter === "organization";

  return (
    <section id="experience" className="pt-12">
      {/* Header with filter tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 pb-4 border-b border-zinc-200 dark:border-zinc-800/80">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
            <Briefcase className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Career & Journey
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as TimelineFilter)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                filter === tab.id
                  ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 shadow-sm"
                  : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-12">
        {/* Work Experience */}
        {showExperience && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
              <Briefcase className="w-4 h-4 text-blue-500" />
              <span>Work Experience</span>
            </div>

            <div className="relative border-l-2 border-gradient ml-2 pl-2">
              <div className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500/50 to-zinc-200 dark:to-zinc-800" />
              {experiences.map((exp, index) => (
                <TimelineCard
                  key={index}
                  index={index}
                  title={exp.title}
                  subtitle={exp.organization}
                  period={exp.period}
                  desc={exp.desc}
                  isCurrent={exp.isCurrent}
                />
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {showEducation && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-blue-500" />
              <span>Education</span>
            </div>

            <div className="relative border-l-2 border-gradient ml-2 pl-2">
              <div className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500/50 to-zinc-200 dark:to-zinc-800" />
              {educations.map((edu, index) => (
                <TimelineCard
                  key={index}
                  index={index}
                  title={edu.degree}
                  subtitle={edu.institution}
                  period={edu.period}
                  desc={edu.desc}
                  isCurrent={edu.isCurrent}
                />
              ))}
            </div>
          </div>
        )}

        {/* Organizational Experience */}
        {showOrganization && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
              <Users className="w-4 h-4 text-blue-500" />
              <span>Organizational Experience</span>
            </div>

            <div className="relative border-l-2 border-gradient ml-2 pl-2">
              <div className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500/50 to-zinc-200 dark:to-zinc-800" />
              {organizations.map((org, index) => (
                <TimelineCard
                  key={index}
                  index={index}
                  title={org.title}
                  subtitle={org.organization}
                  period={org.period}
                  desc={org.desc}
                  isCurrent={org.isCurrent}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
