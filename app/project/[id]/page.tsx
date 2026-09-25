"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, Layers, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { projects } from "@/data/project";
import ScrollProgress from "@/components/ScrollProgress";
import SpotlightCursor from "@/components/SpotlightCursor";

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.id;
  const shouldReduceMotion = useReducedMotion();

  // Find project by ID
  const projectIndex = projects.findIndex((p) => p.id === projectId);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 px-6">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 transition-transform active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>
      </div>
    );
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans selection:bg-blue-500/20 selection:text-blue-600 dark:selection:text-blue-300">
      <ScrollProgress />
      <SpotlightCursor />

      <main className="max-w-4xl mx-auto px-5 sm:px-8 pt-12 sm:pt-16 pb-20 flex flex-col gap-10">
        {/* Back Link with subtle animation */}
        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Portfolio</span>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.section
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20, filter: shouldReduceMotion ? "none" : "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="space-y-6"
        >
          <div className="space-y-3">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60">
              Project Case Study
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
              {project.title}
            </h1>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-800"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 shadow-sm">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3">
              Overview &amp; Implementation
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed text-justify">
              {project.desc}
            </p>
          </div>
        </motion.section>

        {/* Project Image Gallery */}
        {project.images && project.images.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25, filter: shouldReduceMotion ? "none" : "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800/80">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-blue-500" />
                <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                  Project Gallery
                </h2>
              </div>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                {project.images.length} Screenshots
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.images.map((img, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl overflow-hidden border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center">
                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={1280}
                      height={720}
                      className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-500"
                      priority={index === 0}
                    />
                  </div>
                  <div className="px-4 py-2 text-xs font-mono text-zinc-400 dark:text-zinc-500 bg-zinc-50 dark:bg-zinc-900/80 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                    <span>Fig {index + 1}</span>
                    <span className="text-[11px] text-zinc-400">Preview</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Next Project Footer Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between"
        >
          <Link
            href="/"
            className="text-xs sm:text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Projects</span>
          </Link>

          {nextProject && (
            <Link
              href={`/project/${nextProject.id}`}
              className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
            >
              <span>Next: {nextProject.title.split(" - ")[0]}</span>
              <span>→</span>
            </Link>
          )}
        </motion.div>
      </main>
    </div>
  );
}