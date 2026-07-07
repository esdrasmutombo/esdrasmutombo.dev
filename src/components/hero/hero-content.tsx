import { ArrowRight, Code2, ShieldCheck, Sparkles } from "lucide-react";
import { hero } from "@/components/content/hero";
import Heading from "../ui/heading";
import Button from "../ui/button";

export default function HeroContent() {
    return (
        <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.35em] text-[var(--text-muted)]">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                {hero.eyebrow}
            </div>

            <div className="space-y-6">
                <Heading as="h1" className="max-w-3xl text-[clamp(3rem,6.6vw,5.2rem)] leading-[0.94] tracking-[-0.06em]">
                    {hero.title}
                </Heading>

                <p className="max-w-2xl text-lg leading-8 text-[var(--text-secondary)] lg:text-xl lg:leading-9">
                    {hero.description}
                </p>
            </div>

            <div className="flex flex-wrap gap-4">
                <Button href={hero.primaryAction.href} variant="primary">
                    {hero.primaryAction.label}
                </Button>

                <Button href={hero.secondaryAction.href} variant="secondary">
                    {hero.secondaryAction.label}
                </Button>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-medium uppercase tracking-[0.3em] text-[var(--text-muted)]">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    Mobile products
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    AI systems
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    Cloud architecture
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    Product design
                </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
                {[
                    {
                        icon: Sparkles,
                        label: "Product thinking",
                        value: "Clear interfaces that feel easy to trust",
                    },
                    {
                        icon: ShieldCheck,
                        label: "Engineering rigor",
                        value: "Reliable systems built to scale and evolve",
                    },
                    {
                        icon: Code2,
                        label: "Delivery",
                        value: "Fast iteration without losing architectural discipline",
                    },
                ].map(({ icon: Icon, label, value }) => (
                    <div
                        key={label}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
                    >
                        <Icon className="h-5 w-5 text-[var(--primary)]" />
                        <p className="mt-4 text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
                            {label}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                            {value}
                        </p>
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <ArrowRight className="h-4 w-4" />
                <span>Available for focused product work and technical collaboration.</span>
            </div>
        </div>
    );
}