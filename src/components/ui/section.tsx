import Container from "./container";

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export default function Section({
    id,
    className,
    children,
}: SectionProps) {
    return (
        <section
            id={id}
            className={className ?? "scroll-mt-28 py-24 lg:py-32"}
        >
            <Container>
                {children}
            </Container>
        </section>
    );
}