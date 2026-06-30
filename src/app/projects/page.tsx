import { getProjects } from "@/lib/projects";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold tracking-tight mb-8">All Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="border rounded-lg p-6 flex flex-col gap-3"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-muted-foreground line-clamp-3">
              {project.description}
            </p>
            <div className="flex gap-2 flex-wrap mt-auto pt-4">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
