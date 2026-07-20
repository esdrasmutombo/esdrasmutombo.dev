import Link from "next/link";
import Container from "../ui/container";
import { site } from "@/components/content/site";
import { social } from "@/components/content/socials";

function GitHubIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
            <path d="M12 2C6.477 2 2 6.53 2 12.136c0 4.482 2.865 8.281 6.839 9.62.5.093.683-.22.683-.49 0-.243-.01-.888-.014-1.743-2.782.619-3.369-1.366-3.369-1.366-.454-1.175-1.11-1.488-1.11-1.488-.908-.634.069-.62.069-.62 1.004.072 1.532 1.05 1.532 1.05.893 1.55 2.345 1.102 2.916.842.09-.66.349-1.101.635-1.354-2.22-.257-4.555-1.133-4.555-5.042 0-1.115.39-2.027 1.029-2.742-.103-.257-.446-1.295.097-2.7 0 0 .84-.274 2.75 1.047A9.38 9.38 0 0 1 12 7.79c.85.004 1.705.117 2.504.344 1.909-1.32 2.747-1.047 2.747-1.047.545 1.405.202 2.443.1 2.7.64.715 1.028 1.627 1.028 2.742 0 3.92-2.339 4.782-4.566 5.035.359.318.678.944.678 1.903 0 1.373-.012 2.48-.012 2.816 0 .273.18.589.688.489C19.137 20.411 22 16.61 22 12.136 22 6.53 17.523 2 12 2Z" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.038-1.85-3.038-1.851 0-2.134 1.445-2.134 2.94v5.667H9.355V9h3.414v1.561h.048c.476-.9 1.637-1.85 3.368-1.85 3.6 0 4.265 2.37 4.265 5.452v6.289ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.116 20.452H3.558V9h3.558v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.731v20.538C0 23.226.792 24 1.771 24h20.451C23.204 24 24 23.226 24 22.269V1.731C24 .774 23.204 0 22.225 0Z" />
        </svg>
    );
}

export default function Footer() {
    const socialLinks = [
        { label: "GitHub", href: social.github, icon: GitHubIcon },
        { label: "LinkedIn", href: social.linkedin, icon: LinkedInIcon },
    ];

    return (
        <footer className="mt-20 border-t border-white/10 bg-[rgba(10,10,14,0.45)]">
            <Container>
                <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-[var(--text)]">
                            {site.name}
                        </p>
                        <p className="text-sm text-[var(--text-secondary)]">
                            Building thoughtful software across AI, embedded systems, and the web.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        {socialLinks.map(({ label, href, icon: Icon }) => (
                            <Link
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={label}
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--text-secondary)] transition-colors hover:border-white/20 hover:bg-white/10 hover:text-[var(--text)]"
                            >
                                <Icon />
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    );
}