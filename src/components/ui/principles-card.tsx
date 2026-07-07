interface PrincipleCardProps {
    number: string;
    title: string;
    description: string;
}

export default function PrincipleCard({
    number,
    title,
    description,
}: PrincipleCardProps) {
    return (
        <div
            className="
      group
            border-b
            border-white/10
            py-8
      transition-all
      duration-300
            last:border-b-0
      "
        >
            <div className="grid md:grid-cols-12 gap-6">

                <div className="md:col-span-2">
                    <span
                        className="
            text-sm
            font-mono
            text-[var(--text-muted)]
            "
                    >
                        {number}
                    </span>
                </div>

                <div className="md:col-span-10">

                    <h3
                        className="
            text-xl
            font-semibold
            tracking-tight
            mb-4
            "
                    >
                        {title}
                    </h3>

                    <p
                        className="
            text-base
            leading-8
            text-[var(--text-secondary)]
            max-w-2xl
            "
                    >
                        {description}
                    </p>

                </div>

            </div>
        </div>
    );
}