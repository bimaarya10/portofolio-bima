"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check, MessageSquare } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("bimaaryasena7@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    /*
     * Sits outside max-w-4xl <main> for full-bleed background coverage.
     * Light treatment — soft blue/indigo tint that reads as the portfolio's
     * natural conclusion, not an abrupt dark section.
     */
    <footer id="contact" className="w-full">

      {/* ═══════════════════════════════════════════
          CONTACT SECTION — soft blue/indigo tinted
      ═══════════════════════════════════════════ */}
      <section
        aria-label="Contact"
        className="relative w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #eef3ff 0%, #f0f5ff 35%, #f5f7ff 65%, #f8faff 100%)",
        }}
      >
        {/* Very soft centered radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(59,130,246,0.07), transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* Subtle indigo tint top-right */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 90% 15%, rgba(99,102,241,0.06), transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 28, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
            className="flex flex-col items-center text-center gap-7 max-w-2xl mx-auto"
          >
            {/* Badge — matches Hero badge visual language */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-200/70 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/50">
              <MessageSquare className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
              <span>Get in Touch</span>
            </div>

            {/* Heading + description */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-[2.5rem] font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
                Let&apos;s build something meaningful.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
                Have a project, idea, or opportunity? Feel free to reach out.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* Primary — blue */}
              <a
                href={personalInfo.socials.email}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 active:scale-95 shadow-md shadow-blue-500/20"
              >
                <Mail className="w-4 h-4" />
                <span>Say Hello</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
              </a>

              {/* Secondary — light */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900/60 text-slate-700 dark:text-zinc-200 hover:bg-blue-50 dark:hover:bg-zinc-900 hover:border-blue-200 dark:hover:border-zinc-600 hover:text-blue-700 dark:hover:text-blue-400 transition-all duration-200 active:scale-95"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 text-xs">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span className="text-xs">Copy email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social links row */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 border-t border-blue-100/80 dark:border-zinc-800/60 w-full">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-300 dark:text-zinc-700" aria-hidden="true">•</span>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-300 dark:text-zinc-700" aria-hidden="true">•</span>
              <a
                href={personalInfo.socials.email}
                className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>bimaaryasena7@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER — light gray-blue, visually separated
      ═══════════════════════════════════════════ */}
      <div
        className="w-full border-t border-slate-200/80 dark:border-zinc-800/60"
        style={{ background: "#f0f4f8" }}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p className="text-slate-500 dark:text-zinc-500">
            © {new Date().getFullYear()} Bima Arya Sena. All rights reserved.
          </p>
          <p className="text-slate-500 dark:text-zinc-500">
            Crafted with Next.js, Tailwind &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
