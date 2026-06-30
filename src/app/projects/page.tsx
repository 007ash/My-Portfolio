import { getProjects } from "@/lib/projects";
import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Projects",
  description: "Explore my latest case studies and technical projects.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className="container mx-auto py-24 px-6 min-h-screen">
      <FadeIn>
        <div className="max-w-2xl mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4 text-gradient">
            Projects & Case Studies
          </h1>
          <p className="text-xl text-muted-foreground">
            A deep dive into some of the applications and systems I've built.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <FadeIn key={project.slug} delay={index * 0.1}>
            <Link href={`/projects/${project.slug}`} className="group h-full flex">
              <div className="glass-card rounded-xl p-8 flex flex-col gap-4 w-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <h2 className="text-2xl font-semibold font-heading mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground line-clamp-3 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-2 flex-wrap mt-auto mb-6">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-primary/5 border border-primary/20 text-foreground/80 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-sm font-medium text-primary mt-auto">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </main>
  );
}
