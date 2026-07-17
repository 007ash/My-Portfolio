import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen pb-20 overflow-hidden">
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <SkillsSection />
      <ExperienceSection />
      <FeaturedProjectsSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}
