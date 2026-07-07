import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
}

export default function Card({
    children,
    className,
}: CardProps) {
    return (
        <div
            className={cn(
                `
        rounded-3xl
        border
        border-[var(--border)]
        bg-[var(--surface)]
        shadow-sm
        transition-all
        duration-300
        `,
                className
            )}
        >
            {children}
        </div>
    );
}