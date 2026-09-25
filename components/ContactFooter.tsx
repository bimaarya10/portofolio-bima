"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check, MessageSquare } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("bimaaryasena7@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="relative pt-16 pb-12 overflow-hidden">
      {/* Background glow element */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[500px] h-[300px] rounded-full bg-blue-500/[0.04] dark:bg-blue-500/[0.06] blur-3xl" />
      </div>

      {/* Main Closing Callout */}
      <motion.div
        initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55 }}
        className="relative rounded-3xl bg-white dark:bg-zinc-900/60 border border-zinc-200/90 dark:border-zinc-800 p-8 sm:p-12 text-center flex flex-col items-center gap-6 shadow-sm overflow-hidden"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/50">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>

        <div className="max-w-xl space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Let&apos;s build something meaningful.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Have a project, idea, or opportunity? Feel free to reach out.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {/* Direct Email Link */}
          <a
            href={personalInfo.socials.email}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white transition-all duration-200 active:scale-95 shadow-sm"
          >
            <Mail className="w-4 h-4 text-blue-400 dark:text-blue-600" />
            <span>Say Hello</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>

          {/* Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200 active:scale-95"
            title="Copy email address"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400 text-xs">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-zinc-500" />
                <span className="text-xs">Copy email</span>
              </>
            )}
          </button>
        </div>

        {/* Socials Link Row */}
        <div className="flex items-center gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 w-full justify-center">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <span className="text-zinc-300 dark:text-zinc-700">•</span>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <span className="text-zinc-300 dark:text-zinc-700">•</span>
          <a
            href={personalInfo.socials.email}
            className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>bimaaryasena7@gmail.com</span>
          </a>
        </div>
      </motion.div>

      {/* Copyright Note */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 dark:text-zinc-500 gap-2 border-t border-zinc-200/60 dark:border-zinc-800/60 pt-6">
        <p>© {new Date().getFullYear()} Bima Arya Sena. All rights reserved.</p>
        <p className="flex items-center gap-1">
          <span>Crafted with Next.js, Tailwind &amp; Framer Motion</span>
        </p>
      </div>
    </footer>
  );
}
