import { ArrowRight, BrainCircuit, ExternalLink, Terminal } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { getProjects } from "@/lib/projects";

export function FeaturedProjectsSection() {
  const featuredProjects = getProjects()
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <section id="projects" className="container mx-auto px-6 py-32 max-w-6xl">
      <FadeIn className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <div className="p-3 glass rounded-2xl mb-6 inline-flex">
            <BrainCircuit className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-heading mb-4">
            Featured Case Studies
          </h2>
          <p className="text-muted-foreground text-lg">
            Deep dives into my best technical work.
          </p>
        </div>
        <Button
          asChild
          variant="ghost"
          className="hidden sm:flex rounded-full hover:bg-white/5"
        >
          <Link href="/projects">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.length > 0 ? (
          featuredProjects.map((project, idx) => (
            <FadeIn
              key={project.slug}
              delay={idx * 0.2}
              direction="up"
              className="h-full"
            >
              <div className="group glass-card rounded-3xl p-1 flex flex-col h-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                <div className="bg-background/80 backdrop-blur-sm p-8 rounded-[1.4rem] h-full flex flex-col z-10 relative">
                  <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground flex-grow line-clamp-3 mb-6">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap mb-8">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/5 border border-white/10 text-foreground/80 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-sm font-semibold flex items-center hover:text-primary transition-colors"
                    >
                      Read Case Study{" "}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <FaGithub className="h-5 w-5" />
                        </Link>
                      )}
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))
        ) : (
          <div className="col-span-full border border-dashed border-white/10 rounded-2xl p-16 text-center text-muted-foreground glass">
            <Terminal className="h-10 w-10 mx-auto mb-4 opacity-50" />
            <p>
              No featured projects found. Add `featured: true` to your MDX
              files.
            </p>
          </div>
        )}
      </div>

      {/* Mobile View All Button */}
      <Button
        asChild
        variant="outline"
        className="w-full mt-10 sm:hidden rounded-full glass"
      >
        <Link href="/projects">
          View All Projects <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </section>
  );
}
