import { Briefcase, Code, Presentation, Rocket, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// 1. Professional Experience Data
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

// 2. Hackathons & Achievements Data
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

export default function ExperiencePage() {
  return (
    <main className="container mx-auto py-16 px-6 max-w-4xl flex flex-col gap-16">
      {/* Header Section */}
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Experience & Milestones
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          A timeline of my professional roles, competitive programming
          achievements, and hackathon sprints.
        </p>
      </section>

      {/* Experience Timeline */}
      <section className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold border-b pb-2">
          Professional Experience
        </h2>
        <div className="flex flex-col gap-8 border-l-2 border-muted ml-3 pl-8 relative">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative flex flex-col gap-2">
              {/* Timeline Node */}
              <div className="absolute -left-10.75 top-1 bg-background border-2 border-primary rounded-full p-1.5">
                {exp.icon}
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <Badge variant="outline" className="w-fit">
                  {exp.date}
                </Badge>
              </div>
              <h4 className="text-primary font-medium">{exp.company}</h4>
              <p className="text-muted-foreground mt-2 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold border-b pb-2">
          Hackathons & Achievements
        </h2>
        <div className="flex flex-col gap-10 border-l-2 border-muted ml-3 pl-8 relative">
          {achievements.map((ach) => (
            <div key={ach.id} className="relative flex flex-col gap-2">
              {/* Timeline Node */}
              <div className="absolute -left-10.75 top-1 bg-background border-2 border-muted-foreground/30 rounded-full p-1.5 text-muted-foreground">
                {ach.icon}
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="text-xl font-bold">{ach.title}</h3>
                <Badge variant="outline" className="w-fit">
                  {ach.date}
                </Badge>
              </div>
              <h4 className="text-foreground font-medium">{ach.role}</h4>
              <p className="text-muted-foreground mt-1 leading-relaxed">
                {ach.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
