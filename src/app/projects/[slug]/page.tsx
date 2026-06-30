import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  // In Next.js 15, dynamic route params must be awaited
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto py-12 px-6 max-w-3xl">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          {project.title}
        </h1>
        <div className="flex gap-2 flex-wrap mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* For now, we are just outputting the raw markdown string. 
        In the UI phase, we will process this into beautiful HTML. 
      */}
      <article className="prose prose-invert lg:prose-xl">
        <pre className="whitespace-pre-wrap font-sans text-muted-foreground">
          {project.content}
        </pre>
      </article>
    </main>
  );
}
