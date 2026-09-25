"use client";

import { motion } from "framer-motion";
import { User, Briefcase, FlaskConical } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="pt-12">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2.5 mb-10 pb-4 border-b border-zinc-200 dark:border-zinc-800/80"
      >
        <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
          <User className="w-5 h-5" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          About Me
        </h2>
      </motion.div>

      <div className="flex flex-col gap-8">
        {/* Primary narrative text */}
        <motion.p
          initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed text-justify max-w-3xl"
        >
          {personalInfo.about}
        </motion.p>

        {/* Highlight panels */}
        <motion.div
          initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {/* What I do */}
          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
                <Briefcase className="w-4 h-4" />
              </div>
              What I Do
            </div>
            <ul className="flex flex-col gap-1.5">
              {[
                "Build full-stack web applications",
                "Develop and evaluate ML models",
                "Explore deep learning architectures",
                "Analyze datasets & visualize insights",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Interest areas */}
          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
                <FlaskConical className="w-4 h-4" />
              </div>
              Interests & Focus Areas
            </div>
            <ul className="flex flex-col gap-1.5">
              {[
                "Machine Learning & Model Development",
                "Data Science & Statistical Analysis",
                "Deep Learning & Neural Networks",
                "Software Engineering & System Design",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
