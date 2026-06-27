import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Terminal, Code2, BrainCircuit } from "lucide-react";
import { getProjects } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  // Fetch our projects and filter only the ones marked as "featured"
  const featuredProjects = getProjects().filter((project) => project.featured).slice(0, 3);

  return (
    <main className="flex flex-col min-h-screen pb-20">
      
      {/* 1. HERO SECTION WITH IMAGE */}
      <section className="container mx-auto px-6 py-20 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-6xl">
        
        {/* Left Column: Text */}
        <div className="flex flex-col items-start text-left max-w-2xl flex-1">
          <Badge variant="secondary" className="mb-6 flex items-center gap-2 px-3 py-1 text-sm font-medium">
            <Terminal className="h-4 w-4" />
            <span>Available for 2026 Opportunities</span>
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Hi, I'm Ashwanth. <br className="hidden md:block" />
            <span className="text-muted-foreground">I build intelligent systems.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            A Computer Science engineer specializing in Artificial Intelligence and Machine Learning. I bridge the gap between complex ML models and high-performance, full-stack web applications.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="font-semibold">
              <Link href="/projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-semibold">
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" /> Let's Talk
              </Link>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4 mt-10">
            <Link href="https://github.com/yourusername" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.72 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
              </svg>
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-9.75 7.5H7.5v6.75h1.75V10.5Zm-.88-3.12a1.01 1.01 0 1 0 .01-2.02 1.01 1.01 0 0 0-.01 2.02Zm7.13 3.12h-1.67v1.04c0 .99-.02 2.26-1.38 2.26-1.38 0-1.59-1.08-1.59-2.19V10.5H10.6v6.75h1.75v-3.37c0-.18.01-.36.07-.49.15-.36.48-.73 1.04-.73.73 0 .99.55.99 1.36v2.23H18V10.5Z" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 shrink-0 rounded-full overflow-hidden border-4 border-muted shadow-2xl mb-10 md:mb-0">
          <Image 
            src="/profile.jpg" 
            alt="Ashwanth Senthilkumar" 
            fill
            className="object-cover"
            priority 
          />
        </div>
      </section>

      {/* 2. TECH STACK SECTION (Categorized for clarity) */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-6 py-16 max-w-6xl">
          <div className="flex flex-col items-center mb-10 text-center">
            <Code2 className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-2xl font-bold tracking-tight">Core Arsenal</h2>
            <p className="text-muted-foreground mt-2">Tools and frameworks I use to bring ideas to production.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 border rounded-xl bg-background shadow-sm">
              <h3 className="font-semibold mb-4 text-sm text-muted-foreground uppercase tracking-wider">AI / ML</h3>
              <ul className="flex flex-col gap-3 font-medium">
                <li>Python</li>
                <li>Explainable AI (XAI)</li>
                <li>OpenCV</li>
              </ul>
            </div>
            <div className="p-6 border rounded-xl bg-background shadow-sm">
              <h3 className="font-semibold mb-4 text-sm text-muted-foreground uppercase tracking-wider">Frontend</h3>
              <ul className="flex flex-col gap-3 font-medium">
                <li>Next.js / React</li>
                <li>Tailwind CSS</li>
                <li>Streamlit</li>
              </ul>
            </div>
            <div className="p-6 border rounded-xl bg-background shadow-sm">
              <h3 className="font-semibold mb-4 text-sm text-muted-foreground uppercase tracking-wider">Backend</h3>
              <ul className="flex flex-col gap-3 font-medium">
                <li>FastAPI</li>
                <li>Node.js</li>
                <li>REST APIs</li>
              </ul>
            </div>
            <div className="p-6 border rounded-xl bg-background shadow-sm">
              <h3 className="font-semibold mb-4 text-sm text-muted-foreground uppercase tracking-wider">Fundamentals</h3>
              <ul className="flex flex-col gap-3 font-medium">
                <li>Data Structures</li>
                <li>Java (DSA Practice)</li>
                <li>Git / CI-CD</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS SECTION */}
      <section className="container mx-auto px-6 py-24 max-w-6xl">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <BrainCircuit className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">Featured Case Studies</h2>
            </div>
            <p className="text-muted-foreground">Deep dives into my best technical work.</p>
          </div>
          <Button asChild variant="ghost" className="hidden sm:flex">
            <Link href="/projects">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.length > 0 ? (
            featuredProjects.map((project) => (
              <div key={project.slug} className="group border rounded-xl p-6 flex flex-col gap-4 bg-card hover:border-primary transition-colors h-full">
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
                <Button asChild variant="outline" className="w-full mt-auto">
                  <Link href={`/projects/${project.slug}`}>
                    Read Case Study
                  </Link>
                </Button>
              </div>
            ))
          ) : (
            <div className="col-span-full border border-dashed rounded-xl p-12 text-center text-muted-foreground">
              No featured projects found. Add `featured: true` to your MDX files.
            </div>
          )}
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