"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

interface EasterEggToastProps {
  show: boolean;
  message?: string;
}

export default function EasterEggToast({
  show,
  message = "Still building things 🚀",
}: EasterEggToastProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.92, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 16, scale: 0.92, filter: "blur(4px)" }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-zinc-900/95 dark:bg-zinc-100/95 text-zinc-100 dark:text-zinc-900 text-xs sm:text-sm font-mono border border-zinc-800 dark:border-zinc-200 shadow-2xl backdrop-blur-md"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center gap-1.5 text-blue-400 dark:text-blue-600 font-bold">
            <Terminal className="w-3.5 h-3.5" />
            <span>bima@sys:~$</span>
          </div>
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
