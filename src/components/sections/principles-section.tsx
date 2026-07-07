import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import PrincipleCard from "@/components/ui/principles-card";

import { philosophy } from "@/components/content/philosophy";

export default function EngineeringPrinciples() {
    return (
        <Section id="principles">
            <SectionHeader
                label={philosophy.label}
                title={philosophy.title}
                description={philosophy.description}
            />

            <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-2 lg:px-8">
                {philosophy.principles.map((principle) => (
                    <PrincipleCard
                        key={principle.number}
                        {...principle}
                    />
                ))}
            </div>
        </Section>
    );
}