import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Section from "../ui/section";
import SectionHeader from "../ui/section-header";
import { featuredProjects } from "@/app/data/projects";
import Button from "../ui/button";

export default function ProjectsShowcase() {
    return (
        <Section id="projects">
            <SectionHeader
                label="Selected Work"
                title="Projects built for real-world constraints."
                description="A small set of case studies that show how I approach product problems, technical tradeoffs, and execution quality."
            />

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
                {featuredProjects.map((project, index) => (
                    <article
                        key={project.slug}
                        id={project.slug}
                        className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
                    >
                        <div className="border-b border-white/10 p-4 sm:p-5">
                            <div
                                className={`relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ${project.previewMode === "mobile"
                                    ? "mx-auto max-w-[240px] aspect-[10/16]"
                                    : "aspect-[16/10]"
                                    }`}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.imageAlt}
                                    fill
                                    sizes={project.previewMode === "mobile" ? "240px" : "(min-width: 1024px) 33vw, 100vw"}
                                    className={`transition-transform duration-500 group-hover:scale-[1.03] ${project.previewMode === "mobile" ? "object-contain p-3" : "object-cover"}`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between px-6 pt-6">
                            <span className="text-sm font-mono text-[var(--text-muted)]">
                                0{index + 1}
                            </span>
                            <ArrowUpRight className="h-5 w-5 text-[var(--text-muted)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--text)]" />
                        </div>

                        <div className="space-y-4 px-6 pt-6">
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
                                    {project.subtitle}
                                </p>
                                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--text)]">
                                    {project.title}
                                </h3>
                            </div>

                            <p className="text-sm leading-7 text-[var(--text-secondary)]">
                                {project.problem}
                            </p>
                            <p className="text-sm leading-7 text-[var(--text-secondary)]">
                                {project.solution}
                            </p>
                            <p className="text-sm leading-7 text-[var(--text-secondary)]">
                                {project.outcome}
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2 px-6 pb-6">
                            {project.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="rounded-full border border-white/10 bg-black/10 px-3 py-1 text-xs text-[var(--text-secondary)]"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>

            <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 lg:p-8">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="space-y-2">
                        <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-muted)]">
                            View all projects
                        </p>
                        <p className="max-w-2xl text-sm leading-7 text-[var(--text-secondary)]">
                            The full projects archive will live on a dedicated page. For now,
                            this section highlights the work I want visitors to see first.
                        </p>
                    </div>

                    <Button href="/projects" variant="secondary">
                        View more projects
                    </Button>
                </div>
            </div>
        </Section>
    );
}