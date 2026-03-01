"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { projects } from "../../../data/project"; // Sesuaikan path

export default function ProjectDetail() {
    const params = useParams();
    const projectId = params.id;

    // Cari data proyek berdasarkan ID dari URL
    const project = projects.find((p) => p.id === projectId);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
                <h1 className="text-2xl">Project not found</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans selection:bg-blue-500/30">
            <main className="max-w-4xl pt-20 pb-12 mx-auto px-6 sm:pt-24 sm:pb-12 flex flex-col gap-12">

                {/* Tombol Kembali */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                    <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        <span>Back to Portfolio</span>
                    </Link>
                </motion.div>

                {/* Header Proyek */}
                <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">{project.title}</h1>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed text-justify">
                        {project.desc}
                    </p>
                </motion.section>

                {/* Galeri Gambar */}
                {project.images && project.images.length > 0 && (
                    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <h3 className="text-2xl font-semibold mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-4">Project Gallery</h3>

                        {/* MENGGUNAKAN GRID: 1 kolom di HP, 2 kolom di Tablet dan Laptop/PC */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {project.images.map((img, index) => (
                                <div key={index} className="relative w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-md bg-white dark:bg-zinc-900 group flex items-center justify-center">
                                    <Image
                                        src={img}
                                        alt={`${project.title} screenshot ${index + 1}`}
                                        width={1920}
                                        height={1080}
                                        className="w-full h-auto object-contain group-hover:scale-[1.03] transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>

                    </motion.section>
                )}

            </main>
        </div>
    );
}