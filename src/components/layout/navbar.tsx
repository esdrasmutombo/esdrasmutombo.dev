"use client";

import { useEffect, useState } from "react";
import Container from "../ui/container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/components/content/site";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { label: "About", href: "/#about" },
        {
            label: "Projects",
            href: pathname.startsWith("/projects") ? "/projects" : "/#projects",
        },
        { label: "Contact", href: "/#contact" },
    ];

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`
        fixed inset-x-0 top-4 z-50 transition-all duration-300
        ${scrolled
                    ? ""
                    : ""
                }
      `}
        >
            <Container>
                <div
                    className={`flex h-16 items-center justify-between rounded-full border px-4 shadow-sm backdrop-blur-xl transition-colors duration-300 lg:px-6 ${scrolled
                        ? "border-white/10 bg-[rgba(10,10,14,0.78)]"
                        : "border-white/10 bg-[rgba(10,10,14,0.58)]"
                        }`}
                >

                    <Link
                        href="/"
                        className="flex items-center gap-3 text-sm font-semibold tracking-wide text-[var(--text)]"
                    >
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs tracking-[0.3em] text-[var(--text)]">
                            EM
                        </span>
                        <span className="hidden sm:block">{site.name}</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="
                  text-sm
                  text-[var(--text-secondary)]
                  hover:text-[var(--text)]
                  transition-colors
                "
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                </div>
            </Container>
        </header>
    );
}