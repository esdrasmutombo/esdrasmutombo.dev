import { ArrowUpRight, Mail, MessageSquareMore } from "lucide-react";
import Section from "../ui/section";
import Button from "../ui/button";
import { site } from "@/components/content/site";

export default function ContactCTA() {
    return (
        <Section id="contact" className="scroll-mt-28 pb-28 pt-0 lg:pb-36">
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-8 shadow-sm lg:p-12">
                <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <div className="space-y-6">
                        <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-muted)]">
                            Contact
                        </p>

                        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-[var(--text)] lg:text-5xl">
                            {site.availability}
                        </h2>

                        <p className="max-w-xl text-lg leading-8 text-[var(--text-secondary)]">
                            If you are building a product that needs calm UX, strong systems,
                            and thoughtful execution, I would be open to talking.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button href={`mailto:${site.email}`} variant="primary">
                                Email Me
                            </Button>
                            <Button href={site.resume} variant="secondary">
                                Resume
                            </Button>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <a
                            href={`mailto:${site.email}`}
                            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-[var(--text-secondary)] transition-all hover:border-white/20 hover:bg-white/10 hover:text-[var(--text)]"
                        >
                            <span className="flex items-center gap-3">
                                <Mail className="h-4 w-4 text-[var(--primary)]" />
                                {site.email}
                            </span>
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>

                        <div className="rounded-2xl border border-white/10 bg-black/10 p-5 text-sm leading-7 text-[var(--text-secondary)]">
                            <div className="flex items-center gap-3 text-[var(--text)]">
                                <MessageSquareMore className="h-4 w-4 text-[var(--primary)]" />
                                Preferred collaboration style
                            </div>
                            <p className="mt-3">
                                Small team, clear goals, and enough trust to keep the product
                                moving without unnecessary process.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}