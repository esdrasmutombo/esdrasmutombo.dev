import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, Code2, Globe, Layers3, Sparkles } from "lucide-react";
import type { Project } from "@/app/types/project";
import Container from "../ui/container";

type ProjectDetailProps = {
    project: Project;
};

function LinkCard({
    href,
    label,
    description,
    icon: Icon,
}: {
    href?: string;
    label: string;
    description: string;
    icon: typeof Code2;
}) {
    return href ? (
        <a
            href={href}
            className="group flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]"
            target="_blank"
            rel="noreferrer"
        >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/10 text-[var(--text)]">
                <Icon className="h-5 w-5" />
            </span>
            <span className="space-y-1">
                <span className="block text-sm font-medium text-[var(--text)]">
                    {label}
                </span>
                <span className="block text-sm leading-6 text-[var(--text-secondary)]">
                    {description}
                </span>
            </span>
            <ArrowUpRight className="ml-auto h-4 w-4 text-[var(--text-muted)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
    ) : (
        <div className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/10 text-[var(--text)]">
                <Icon className="h-5 w-5" />
            </span>
            <span className="space-y-1">
                <span className="block text-sm font-medium text-[var(--text)]">
                    {label}
                </span>
                <span className="block text-sm leading-6 text-[var(--text-secondary)]">
                    {description}
                </span>
            </span>
        </div>
    );
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
    return (
        <main className="pt-28 pb-20 sm:pt-32">
            <Container>
                <div className="mb-8 flex flex-wrap items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
                    <Link href="/projects" className="inline-flex items-center gap-2 transition-colors hover:text-[var(--text)]">
                        <ChevronLeft className="h-4 w-4" />
                        Back to all projects
                    </Link>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 uppercase tracking-[0.3em]">
                        <Sparkles className="h-3.5 w-3.5" />
                        {project.category}
                    </span>
                </div>

                <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                    <div className="space-y-8">
                        <div className="space-y-5">
                            <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-muted)]">
                                {project.year} • {project.role}
                            </p>
                            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
                                {project.title}
                            </h1>
                            <p className="max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
                                {project.subtitle}
                            </p>
                            <p className="max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
                                {project.summary}
                            </p>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-3">
                            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                                <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">Focus</p>
                                <p className="mt-2 text-sm text-[var(--text)]">{project.category}</p>
                            </div>
                            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                                <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">Role</p>
                                <p className="mt-2 text-sm text-[var(--text)]">{project.role}</p>
                            </div>
                            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                                <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">Delivery</p>
                                <p className="mt-2 text-sm text-[var(--text)]">{project.previewMode === "mobile" ? "Mobile-first" : "Desktop-first"}</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {project.githubUrl ? (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white text-black px-5 py-3 text-sm font-medium transition-colors hover:bg-white/90"
                                >
                                    <Code2 className="h-4 w-4" />
                                    GitHub
                                </a>
                            ) : (
                                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/60 px-5 py-3 text-sm font-medium text-black/70">
                                    <Code2 className="h-4 w-4" />
                                    GitHub coming soon
                                </span>
                            )}

                            {project.liveUrl ? (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-[var(--text)] transition-colors hover:border-white/20 hover:bg-white/10"
                                >
                                    <Globe className="h-4 w-4" />
                                    Live demo
                                </a>
                            ) : (
                                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-[var(--text-muted)]">
                                    <Globe className="h-4 w-4" />
                                    Live demo coming soon
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_45%)]" />
                        <div className={`relative ${project.previewMode === "mobile" ? "mx-auto max-w-[280px] p-6 sm:p-8" : "p-4 sm:p-6"}`}>
                            <div className={`relative overflow-hidden rounded-[1.5rem] border border-white/10 ${project.previewMode === "mobile" ? "aspect-[10/16]" : "aspect-[16/10]"}`}>
                                <Image
                                    src={project.image}
                                    alt={project.imageAlt}
                                    fill
                                    priority
                                    sizes={project.previewMode === "mobile" ? "280px" : "(min-width: 1024px) 40vw, 100vw"}
                                    className={`transition-transform duration-500 hover:scale-[1.03] ${project.previewMode === "mobile" ? "object-contain p-3" : "object-cover"}`}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="space-y-6">
                        <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                            <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-muted)]">Challenge</p>
                            <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                                {project.problem}
                            </p>
                        </article>

                        <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                            <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-muted)]">Approach</p>
                            <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                                {project.solution}
                            </p>
                        </article>

                        <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                            <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-muted)]">Outcome</p>
                            <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                                {project.outcome}
                            </p>
                        </article>

                        <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                            <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-muted)]">Highlights</p>
                            <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--text-secondary)]">
                                {project.highlights.map((highlight) => (
                                    <li key={highlight} className="flex gap-3">
                                        <Layers3 className="mt-1 h-4 w-4 shrink-0 text-[var(--text-muted)]" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </div>

                    <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
                        <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                            <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-muted)]">Tech Stack</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.technologies.map((technology) => (
                                    <span key={technology} className="rounded-full border border-white/10 bg-black/10 px-3 py-1.5 text-xs text-[var(--text-secondary)]">
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </article>

                        <article className="space-y-3 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                            <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-muted)]">Source Links</p>
                            <LinkCard
                                href={project.githubUrl}
                                label="GitHub repository"
                                description="Source code and engineering notes will live here when available."
                                icon={Code2}
                            />
                            <LinkCard
                                href={project.liveUrl}
                                label="Live demo"
                                description="A public preview or production link can be placed here later."
                                icon={Globe}
                            />
                        </article>

                        <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                            <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-muted)]">Tags</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-[var(--text-secondary)]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </article>
                    </aside>
                </section>
            </Container>
        </main>
    );
}