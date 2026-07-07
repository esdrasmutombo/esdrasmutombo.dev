import { site } from "@/components/content/site";

const focusAreas = [
    "AI systems",
    "Embedded software",
    "Cloud engineering",
    "Product design",
];

export default function HeroCard() {
    return (
        <aside className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.28),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.16),transparent_28%)]" />

            <div className="relative flex min-h-[28rem] flex-col justify-between gap-10">
                <div className="space-y-8">
                    <div>
                        <p className="text-xs uppercase tracking-[0.4em] text-[var(--text-muted)]">
                            Profile
                        </p>
                        <div className="mt-4 flex items-center gap-4">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-2xl font-semibold tracking-[-0.08em] text-[var(--text)]">
                                EM
                            </div>
                            <div>
                                <p className="text-sm text-[var(--text-secondary)]">
                                    {site.role}
                                </p>
                                <p className="text-sm text-[var(--text-muted)]">
                                    {site.location}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                        {focusAreas.map((area) => (
                            <div
                                key={area}
                                className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm text-[var(--text-secondary)] transition-transform duration-300 hover:-translate-y-0.5 hover:border-white/20"
                            >
                                {area}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid gap-4 border-t border-white/10 pt-6 text-sm text-[var(--text-secondary)] sm:grid-cols-2">
                    <div>
                        <p className="text-[var(--text-muted)]">What I build</p>
                        <p className="mt-1 text-[var(--text)]">Production software with clear UX</p>
                    </div>
                    <div>
                        <p className="text-[var(--text-muted)]">What matters</p>
                        <p className="mt-1 text-[var(--text)]">Reliability, clarity, and measurable outcomes</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}