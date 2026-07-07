import clsx from "clsx";

type Props = {
    as?: "h1" | "h2" | "h3";
    children: React.ReactNode;
    className?: string;
};

export default function Heading({
    as = "h2",
    children,
    className,
}: Props) {
    const Tag = as;

    return (
        <Tag
            className={clsx(
                "font-semibold tracking-tight text-[var(--text)]",
                as === "h1" && "text-5xl lg:text-6xl",
                as === "h2" && "text-3xl lg:text-4xl",
                as === "h3" && "text-2xl",
                className
            )}
        >
            {children}
        </Tag>
    );
}