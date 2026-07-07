import Hero from "@/components/hero/hero";
import About from "@/components/sections/about-preview"
import EngineeringPrinciples from "@/components/sections/principles-section";
import ProjectsShowcase from "@/components/sections/projects-showcase";
import ContactCTA from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProjectsShowcase />
      <EngineeringPrinciples />
      <ContactCTA />
    </main>
  );
}
