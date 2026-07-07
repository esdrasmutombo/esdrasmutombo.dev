import Section from "../ui/section";
import Heading from "../ui/heading";
import { site } from "@/components/content/site";
import { Code2, Layers3, Sparkles, UserRound } from "lucide-react";

export default function AboutPreview() {
    return (
        <Section id="about">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

                <div className="space-y-6">
                    <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-muted)]">
                        About
                    </p>

                    <Heading as="h2">Engineering with purpose.</Heading>

                    <p className="max-w-xl text-lg leading-8 text-[var(--text-secondary)]">
                        I build software with the same standards I expect from the best
                        product teams: sharp hierarchy, quiet confidence, and systems that
                        stay easy to understand as they grow.
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                        {[
                            {
                                icon: Code2,
                                title: "Systems thinking",
                                description: "Designing for the whole product, not just a feature slice.",
                            },
                            {
                                icon: Layers3,
                                title: "Long-term structure",
                                description: "Keeping architecture, UI, and delivery simple to evolve.",
                            },
                            {
                                icon: Sparkles,
                                title: "Polished execution",
                                description: "Turning complexity into clear, calm user experiences.",
                            },
                            {
                                icon: UserRound,
                                title: "Human-centered",
                                description: "Making technical products feel approachable and useful.",
                            },
                        ].map(({ icon: Icon, title, description }) => (
                            <div
                                key={title}
                                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
                            >
                                <Icon className="h-5 w-5 text-[var(--primary)]" />
                                <h3 className="mt-4 text-base font-semibold text-[var(--text)]">{title}</h3>
                                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.35em] text-[var(--text-muted)]">
                        Working style
                    </p>

                    <div className="mt-6 grid gap-4 text-sm leading-7 text-[var(--text-secondary)]">
                        <p>
                            I work on products that need to feel trustworthy from the first
                            interaction. That means careful information hierarchy, deliberate
                            spacing, and interfaces that never ask the user to think harder than
                            the problem requires.
                        </p>
                        <p>
                            Across AI, embedded systems, cloud backends, and front-end product
                            work, I optimize for clarity, performance, and maintainability over
                            decorative complexity.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        {[
                            site.role,
                            site.location,
                            "Secure by default",
                            "Built to scale",
                        ].map((item) => (
                            <div
                                key={item}
                                className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm text-[var(--text)]"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}