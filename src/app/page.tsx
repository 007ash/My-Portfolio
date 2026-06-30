import {
  ArrowRight,
  BrainCircuit,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { StaggeredText } from "@/components/ui/staggered-text";
import { getProjects } from "@/lib/projects";

export default function Home() {
  // Fetch our projects and filter only the ones marked as "featured"
  const featuredProjects = getProjects()
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <main className="flex flex-col min-h-screen pb-20 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative container mx-auto px-6 pt-32 pb-20 md:py-40 flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-6xl">
        {/* Glowing Ambient Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

        {/* Left Column: Text */}
        <div className="flex flex-col items-start text-left max-w-2xl flex-1 z-10">
          <FadeIn delay={0.1}>
            <Badge
              variant="outline"
              className="mb-6 flex items-center gap-2 px-4 py-1.5 text-sm font-medium border-primary/30 bg-primary/5 text-primary backdrop-blur-sm rounded-full"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>Available for 2026 Opportunities</span>
            </Badge>
          </FadeIn>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight font-heading">
            <StaggeredText text="Hi, I'm Ashwanth." delay={0.2} />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 block mt-2">
              <FadeIn delay={0.8} direction="up">
                I build intelligent systems.
              </FadeIn>
            </span>
          </h1>

          <FadeIn delay={1.0}>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
              A Computer Science engineer specializing in Artificial
              Intelligence and Machine Learning. I bridge the gap between
              complex ML models and high-performance, full-stack web
              applications.
            </p>
          </FadeIn>

          <FadeIn delay={1.2} className="flex flex-wrap gap-4 w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="font-semibold rounded-full px-8 shadow-lg shadow-primary/25 group"
            >
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-semibold rounded-full px-8 glass hover:bg-white/5 border-white/10"
            >
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" /> Let's Talk
              </Link>
            </Button>
          </FadeIn>

          {/* Social Links */}
          <FadeIn delay={1.4} className="flex gap-6 mt-12">
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </FadeIn>
        </div>

        {/* Right Column: Image */}
        <FadeIn
          delay={0.6}
          direction="left"
          className="relative shrink-0 mb-10 md:mb-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
            {/* Decorative Ring */}
            <div className="absolute inset-0 rounded-full border border-primary/30 scale-105 animate-[spin_10s_linear_infinite] pointer-events-none" />
            <div className="absolute inset-0 rounded-full border border-dashed border-white/20 scale-110 animate-[spin_15s_linear_infinite_reverse] pointer-events-none" />

            <div className="w-full h-full rounded-full overflow-hidden border-4 border-background/50 shadow-2xl relative z-10 glass">
              <Image
                src="/profile.jpg"
                alt="Ashwanth Senthilkumar"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 2. TECH STACK SECTION */}
      <section className="relative py-24 mt-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <FadeIn className="flex flex-col items-center mb-16 text-center">
            <div className="p-3 glass rounded-2xl mb-6 inline-flex">
              <Code2 className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-heading mb-4">
              Core Arsenal
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Tools and frameworks I use to bring ideas to production.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "AI / ML",
                tools: ["Python", "Explainable AI (XAI)", "OpenCV"],
              },
              {
                title: "Frontend",
                tools: ["Next.js / React", "Tailwind CSS", "Streamlit"],
              },
              { title: "Backend", tools: ["FastAPI", "Node.js", "REST APIs"] },
              {
                title: "Fundamentals",
                tools: ["Data Structures", "Java (DSA)", "Git / CI-CD"],
              },
            ].map((category, idx) => (
              <FadeIn
                key={category.title}
                delay={idx * 0.15}
                direction="up"
                className="h-full"
              >
                <div className="glass-card p-8 rounded-2xl h-full flex flex-col group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-500" />
                  <h3 className="font-heading font-semibold mb-6 text-sm text-primary uppercase tracking-wider relative z-10">
                    {category.title}
                  </h3>
                  <ul className="flex flex-col gap-4 font-medium relative z-10">
                    {category.tools.map((tool) => (
                      <li
                        key={tool}
                        className="flex items-center gap-3 text-foreground/80 group-hover:text-foreground transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary group-hover:scale-150 transition-all" />
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS SECTION */}
      <section className="container mx-auto px-6 py-32 max-w-6xl">
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
                            <Github className="h-5 w-5" />
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
    </main>
  );
}
