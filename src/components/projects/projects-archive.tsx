"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2, Filter, Globe } from "lucide-react";
import { useState } from "react";
import type { Project } from "@/app/types/project";

type ProjectsArchiveProps = {
    projects: Project[];
};

export default function ProjectsArchive({ projects }: ProjectsArchiveProps) {
    const [activeFilter, setActiveFilter] = useState("All");

    const filters = ["All", ...new Set(projects.flatMap((project) => project.tags))];

    const visibleProjects =
        activeFilter === "All"
            ? projects
            : projects.filter((project) => project.tags.includes(activeFilter));

    return (
        <main className="pt-28 pb-20 sm:pt-32">
            <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]">
                <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px]" />
                <div className="relative mx-auto w-full max-w-[1200px] px-6 py-16 lg:px-10 lg:py-20">
                    <div className="max-w-3xl space-y-6">
                        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.35em] text-[var(--text-muted)]">
                            <Filter className="h-3.5 w-3.5" />
                            Project archive
                        </p>
                        <h1 className="text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
                            A complete list of projects with interactive case studies.
                        </h1>
                        <p className="max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
                            Browse the full portfolio, filter by technology, and open any project for a deeper look at the problem, solution, results, and source links.
                        </p>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-3">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                type="button"
                                onClick={() => setActiveFilter(filter)}
                                className={`rounded-full border px-4 py-2 text-sm transition-colors ${activeFilter === filter
                                    ? "border-white/20 bg-white text-black"
                                    : "border-white/10 bg-white/[0.04] text-[var(--text-secondary)] hover:border-white/20 hover:text-[var(--text)]"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto w-full max-w-[1200px] px-6 py-16 lg:px-10">
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {visibleProjects.map((project) => (
                        <article
                            key={project.slug}
                            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] transition-transform duration-300 hover:-translate-y-1"
                        >
                            <Link href={`/projects/${project.slug}`} className="block p-4 sm:p-5">
                                <div className={`relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] ${project.previewMode === "mobile" ? "mx-auto max-w-[240px] aspect-[10/16]" : "aspect-[16/10]"}`}>
                                    <Image
                                        src={project.image}
                                        alt={project.imageAlt}
                                        fill
                                        sizes={project.previewMode === "mobile" ? "240px" : "(min-width: 1280px) 33vw, 100vw"}
                                        className={`transition-transform duration-500 group-hover:scale-[1.04] ${project.previewMode === "mobile" ? "object-contain p-3" : "object-cover"}`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                                </div>
                            </Link>

                            <div className="space-y-4 px-6 pb-6">
                                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">
                                    <span>{project.category}</span>
                                    <span>•</span>
                                    <span>{project.year}</span>
                                </div>
                                <div className="space-y-2">
                                    <Link href={`/projects/${project.slug}`} className="inline-flex">
                                        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)] transition-colors group-hover:text-white">
                                            {project.title}
                                        </h2>
                                    </Link>
                                    <p className="text-sm leading-7 text-[var(--text-secondary)]">
                                        {project.summary}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.slice(0, 4).map((tag) => (
                                        <span key={tag} className="rounded-full border border-white/10 bg-black/10 px-3 py-1 text-xs text-[var(--text-secondary)]">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-3 pt-1 text-sm">
                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[var(--text)] transition-colors hover:border-white/20 hover:bg-white/10"
                                    >
                                        Open case study
                                        <ArrowUpRight className="h-4 w-4" />
                                    </Link>
                                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[var(--text-muted)]">
                                        <Globe className="h-4 w-4" />
                                        Mobile friendly
                                    </span>
                                </div>

                                <div className="grid gap-3 rounded-2xl border border-white/10 bg-black/10 p-4 text-sm text-[var(--text-secondary)]">
                                    <div className="flex items-center gap-2">
                                        <Code2 className="h-4 w-4 text-[var(--text-muted)]" />
                                        <span>Source and live links are placed on the detail page.</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {visibleProjects.length === 0 ? (
                    <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center text-[var(--text-secondary)]">
                        No projects match this filter yet.
                    </div>
                ) : null}
            </section>
        </main>
    );
}