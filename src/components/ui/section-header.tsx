import Heading from "./heading";

interface SectionHeaderProps {
    label: string;
    title: string;
    description: string;
}

export default function SectionHeader({
    label,
    title,
    description,
}: SectionHeaderProps) {
    return (
        <div className="max-w-3xl space-y-5">
            <p
                className="
        text-sm
        uppercase
        tracking-[0.35em]
        text-[var(--text-muted)]
        "
            >
                {label}
            </p>

            <Heading as="h2">
                {title}
            </Heading>

            <p
                className="
        text-lg
        leading-8
        text-[var(--text-secondary)]
        "
            >
                {description}
            </p>
        </div>
    );
}