"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, FolderGit2, Sparkles } from "lucide-react";
import { projects } from "@/data/project";

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" className="relative pt-12">
      {/* Blue-accented section background */}
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-[#eef3ff]/70 via-[#f5f8ff]/50 to-transparent dark:from-blue-950/8 dark:via-transparent dark:to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-2/3 h-1/2 bg-[radial-gradient(ellipse_50%_60%_at_90%_20%,rgba(99,102,241,0.06),transparent_70%)] dark:bg-[radial-gradient(ellipse_50%_60%_at_90%_20%,rgba(99,102,241,0.08),transparent_70%)] pointer-events-none -z-10" />
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-10 pb-4 border-b border-zinc-200 dark:border-zinc-800/80"
      >
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
            <FolderGit2 className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Featured Projects
          </h2>
        </div>
        <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
          {projects.length} Works
        </span>
      </motion.div>

      {/* Dynamic Editorial Grid */}
      <div className="flex flex-col gap-6">
        {/* Project 1: Large Featured Card */}
        {projects.length > 0 && (() => {
          const featured = projects[0];
          const hasImage = featured.images && featured.images.length > 0;

          return (
            <motion.div
              initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55 }}
              whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
              className="group relative rounded-3xl bg-white dark:bg-zinc-900/70 border border-blue-100/60 dark:border-zinc-800 hover:border-blue-400/60 dark:hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 overflow-hidden"
            >
              <Link href={`/project/${featured.id}`} className="block p-6 sm:p-8">
                {/* Gradient ambient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  {/* Left: Project Info */}
                  <div className="lg:col-span-6 flex flex-col justify-between h-full order-2 lg:order-1">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/60">
                          Featured Work
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-2">
                        <span>{featured.title}</span>
                        <ArrowUpRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200 text-blue-500 shrink-0" />
                      </h3>
                      <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-4">
                        {featured.desc}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {featured.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Featured Thumbnail */}
                  <div className="lg:col-span-6 order-1 lg:order-2">
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950">
                      {hasImage ? (
                        <Image
                          src={featured.images[0]}
                          alt={featured.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 550px"
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                          priority
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-zinc-400">
                          No preview
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })()}

        {/* Projects 2 & 3 (Medium 2-column cards) */}
        {projects.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(1, 3).map((project, idx) => {
              const hasImage = project.images && project.images.length > 0;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
                  className="group relative rounded-3xl bg-white dark:bg-zinc-900/70 border border-blue-100/60 dark:border-zinc-800 hover:border-blue-400/60 dark:hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 overflow-hidden flex flex-col"
                >
                  <Link href={`/project/${project.id}`} className="flex flex-col h-full p-6 sm:p-7">
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 mb-5">
                      {hasImage ? (
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 450px"
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-zinc-400">
                          No preview
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200 text-blue-500 shrink-0 mt-1" />
                    </div>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3 mb-4 flex-grow">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-[11px] rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Projects 4+ (Responsive Grid) */}
        {projects.length > 3 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.slice(3).map((project, idx) => {
              const hasImage = project.images && project.images.length > 0;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
                  className="group relative rounded-2xl bg-white dark:bg-zinc-900/70 border border-blue-100/60 dark:border-zinc-800 hover:border-blue-400/60 dark:hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 overflow-hidden flex flex-col"
                >
                  <Link href={`/project/${project.id}`} className="flex flex-col h-full p-5">
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 mb-4">
                      {hasImage ? (
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 320px"
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-zinc-400">
                          No preview
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="flex items-start justify-between gap-1 mb-2">
                      <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200 text-blue-500 shrink-0 mt-0.5" />
                    </div>

                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3 mb-4 flex-grow">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-1.5 py-0.5 text-[10px] rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-[10px] text-zinc-400 self-center">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
