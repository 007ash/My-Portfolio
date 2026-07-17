import { notFound } from "next/navigation";
import { getProjectBySlug, getProjects } from "@/lib/projects";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FadeIn } from "@/components/ui/fade-in";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Case Study`,
      description: project.description,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  // In Next.js 15, dynamic route params must be awaited
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto py-12 px-6 max-w-4xl min-h-screen">
      <FadeIn>
        <Link
          href="/projects"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-10 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all projects
        </Link>
      </FadeIn>

      <FadeIn delay={0.1}>
        <header className="mb-16 glass rounded-2xl p-8 md:p-12 border border-border/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />

          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight mb-6 text-foreground">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              {project.description}
            </p>

            <div className="flex gap-2 flex-wrap mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-10 px-6"
                >
                  <FaGithub className="mr-2 h-4 w-4" />
                  View Source
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-6"
                >
                  <FaExternalLinkAlt className="mr-2 h-4 w-4" />
                  Live Preview
                </a>
              )}
            </div>
          </div>
        </header>
      </FadeIn>

      <FadeIn delay={0.2}>
        <article className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-a:text-primary hover:prose-a:text-primary/80 max-w-none">
          <ReactMarkdown>{project.content}</ReactMarkdown>
        </article>
      </FadeIn>
    </main>
  );
}
