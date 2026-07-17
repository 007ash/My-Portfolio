import {
  ArrowRight,
  Briefcase,
  Code,
  Presentation,
  Rocket,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

const experiences = [
  {
    id: "exp-1",
    role: "Machine Learning Intern",
    company: "Qono Technologies",
    date: "2025 - 2026",
    description:
      "Developed and optimized machine learning models. Applied theoretical ML concepts to real-world datasets, focusing on predictive accuracy and efficient data pipelines.",
    icon: <Briefcase className="h-5 w-5 text-primary" />,
  },
];

const achievements = [
  {
    id: "ach-1",
    title: "Hacksprint 2.0 (36-Hour National Hackathon)",
    role: "Developer - 'Web Seeker'",
    date: "February 2026",
    description:
      "Collaborated in a high-pressure environment to build and deploy 'Web Seeker'. Handled end-to-end development integrations during the 36-hour sprint.",
    icon: <Rocket className="h-5 w-5 text-primary" />,
  },
  {
    id: "ach-2",
    title: "IEEEXtreme 19.0",
    role: "Global Programming Competition",
    date: "2025",
    description:
      "Competed in the globally recognized IEEE programming competition, solving complex algorithmic challenges and optimizing code under strict time constraints.",
    icon: <Code className="h-5 w-5 text-primary" />,
  },
  {
    id: "ach-3",
    title: "Paper Presentation - Supply Chain Forecasting",
    role: "Government College of Technology, Coimbatore",
    date: "April 3, 2025",
    description:
      "Presented research and technical implementations on 'Supply Chain Forecasting' to an academic panel, demonstrating the application of predictive modeling in logistics.",
    icon: <Presentation className="h-5 w-5 text-primary" />,
  },
  {
    id: "ach-4",
    title: "100 Days Badge - 2025",
    role: "LeetCode",
    date: "2025",
    description:
      "Earned the 100 Days Badge by consistently solving Data Structures and Algorithms (DSA) problems, demonstrating a sustained commitment to algorithmic proficiency.",
    icon: <Trophy className="h-5 w-5 text-primary" />,
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="container mx-auto py-24 px-6 max-w-4xl flex flex-col gap-16"
    >
      {/* Header Section */}
      <FadeIn className="flex flex-col gap-4">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Experience & Milestones
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl">
          A timeline of my professional roles, competitive programming
          achievements, and hackathon sprints.
        </p>
      </FadeIn>

      {/* Experience Timeline */}
      <div className="flex flex-col gap-8">
        <FadeIn>
          <h3 className="text-2xl font-bold border-b pb-2">
            Professional Experience
          </h3>
        </FadeIn>
        <div className="flex flex-col gap-8 border-l-2 border-muted ml-3 pl-8 relative">
          {experiences.map((exp, idx) => (
            <FadeIn
              key={exp.id}
              delay={idx * 0.15}
              direction="up"
              className="relative flex flex-col gap-2"
            >
              {/* Timeline Node */}
              <div className="absolute -left-10.75 top-1 bg-background border-2 border-primary rounded-full p-1.5">
                {exp.icon}
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h4 className="text-xl font-bold">{exp.role}</h4>
                <Badge variant="outline" className="w-fit">
                  {exp.date}
                </Badge>
              </div>
              <h5 className="text-primary font-medium">{exp.company}</h5>
              <p className="text-muted-foreground mt-2 leading-relaxed">
                {exp.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Achievements Timeline */}
      <div className="flex flex-col gap-8">
        <FadeIn className="flex justify-between items-end border-b pb-2">
          <h3 className="text-2xl font-bold">Hackathons & Achievements</h3>
          <Button
            asChild
            variant="ghost"
            className="hidden sm:flex rounded-full hover:bg-white/5 h-auto py-1 px-3"
          >
            <Link href="/achievements" className="text-sm">
              View More <ArrowRight className="ml-2 h-3 w-3" />
            </Link>
          </Button>
        </FadeIn>
        <div className="flex flex-col gap-10 border-l-2 border-muted ml-3 pl-8 relative">
          {achievements.map((ach, idx) => (
            <FadeIn
              key={ach.id}
              delay={idx * 0.15}
              direction="up"
              className="relative flex flex-col gap-2"
            >
              {/* Timeline Node */}
              <div className="absolute -left-10.75 top-1 bg-background border-2 border-muted-foreground/30 rounded-full p-1.5 text-muted-foreground">
                {ach.icon}
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h4 className="text-xl font-bold">{ach.title}</h4>
                <Badge variant="outline" className="w-fit">
                  {ach.date}
                </Badge>
              </div>
              <h5 className="text-foreground font-medium">{ach.role}</h5>
              <p className="text-muted-foreground mt-1 leading-relaxed">
                {ach.description}
              </p>
            </FadeIn>
          ))}
        </div>

        {/* Mobile View More Button */}
        <Button
          asChild
          variant="outline"
          className="w-full mt-2 sm:hidden rounded-full glass"
        >
          <Link href="/achievements">
            View More Achievements <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
