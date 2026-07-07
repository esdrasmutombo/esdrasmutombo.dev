import Section from "../ui/section";
import HeroContent from "./hero-content";
import HeroCard from "./hero-card";

export default function Hero() {
    return (
        <Section className="scroll-mt-0 py-28 lg:py-36">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
                <HeroContent />
                <HeroCard />
            </div>
        </Section>
    );
}