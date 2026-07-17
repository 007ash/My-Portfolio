import { ArrowLeft, Code, Presentation, Rocket, Trophy } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";

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

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container mx-auto px-6 py-24 max-w-4xl flex flex-col gap-10">
        <FadeIn className="flex flex-col gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80 w-fit"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Achievements & Highlights
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A collection of my hackathons, competitions, and academic milestones.
          </p>
        </FadeIn>

        <div className="flex flex-col gap-8">
          {achievements.map((achievement, idx) => (
            <FadeIn
              key={achievement.id}
              delay={idx * 0.1}
              direction="up"
              className="rounded-2xl border border-border/60 bg-card/70 p-6 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="rounded-full border border-primary/20 bg-primary/10 p-2">
                    {achievement.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">{achievement.title}</h2>
                    <p className="text-primary font-medium">{achievement.role}</p>
                  </div>
                </div>
                <Badge variant="outline" className="w-fit">
                  {achievement.date}
                </Badge>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
