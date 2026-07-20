export interface Project {
    slug: string;

    image: string;

    imageAlt: string;

    previewMode: "mobile" | "desktop";

    title: string;

    subtitle: string;

    summary: string;

    problem: string;

    solution: string;

    outcome: string;

    role: string;

    year: string;

    category: string;

    tags: string[];

    technologies: string[];

    highlights: string[];

    githubUrl?: string;

    liveUrl?: string;

    featured: boolean;
}