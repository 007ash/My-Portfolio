import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { getProjects } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  // Fetch our projects and filter only the ones marked as "featured"
  const featuredProjects = getProjects().filter((project) => project.featured).slice(0, 3);

  // A simple array to map out your tech stack visually
  const techStack = [
    "TypeScript", "Next.js", "React", "Node.js", "Tailwind CSS", "PostgreSQL", "Python", "Docker"
  ];

  return (
    <main className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-start text-left max-w-4xl">
        <Badge variant="secondary" className="mb-6">
          Available for new opportunities
        </Badge>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          I engineer <span className="text-primary">high-performance</span> web applications.
        </h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
          Full-stack developer specializing in React, Node, and modern system architecture. 
          I turn complex problems into elegant, scalable solutions.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href="/projects">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">
              <Mail className="mr-2 h-4 w-4" /> Let's Talk
            </Link>
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex gap-4 mt-10">
          <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.72 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
            </svg>
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-9.75 7.5H7.5v6.75h1.75V10.5Zm-.88-3.12a1.01 1.01 0 1 0 .01-2.02 1.01 1.01 0 0 0-.01 2.02Zm7.13 3.12h-1.67v1.04c0 .99-.02 2.26-1.38 2.26-1.38 0-1.59-1.08-1.59-2.19V10.5H10.6v6.75h1.75v-3.37c0-.18.01-.36.07-.49.15-.36.48-.73 1.04-.73.73 0 .99.55.99 1.36v2.23H18V10.5Z" />
            </svg>
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </section>

      {/* 2. TECH STACK SECTION */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-6 py-12 max-w-5xl">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6 text-center">
            The Arsenal
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm py-1.5 px-4 bg-background">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS SECTION */}
      <section className="container mx-auto px-6 py-24 max-w-6xl">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Case Studies</h2>
            <p className="text-muted-foreground">Deep dives into my best technical work.</p>
          </div>
          <Button asChild variant="ghost" className="hidden sm:flex">
            <Link href="/projects">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div key={project.slug} className="group border rounded-xl p-6 flex flex-col gap-4 bg-card hover:border-primary transition-colors">
              <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground flex-grow line-clamp-3">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap mb-4">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link href={`/projects/${project.slug}`}>
                  Read Case Study
                </Link>
              </Button>
            </div>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <Button asChild variant="ghost" className="w-full mt-8 sm:hidden">
          <Link href="/projects">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>
    </main>
  );
}