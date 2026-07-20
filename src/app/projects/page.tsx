import type { Metadata } from "next";
import ProjectsArchive from "@/components/projects/projects-archive";
import { projects } from "../data/projects";

export const metadata: Metadata = {
    title: "Projects | Esdras Mutombo",
    description: "Browse the full portfolio of software, embedded, mobile, and AI projects.",
};

export default function ProjectsPage() {
    return <ProjectsArchive projects={projects} />;
}