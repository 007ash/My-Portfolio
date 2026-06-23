import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Project {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  content: string;
}

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

export function getProjects(): Project[] {
  // Check if directory exists, if not return empty array
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjects = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the project metadata section
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        tags: data.tags || [],
        githubUrl: data.githubUrl,
        liveUrl: data.liveUrl,
        featured: data.featured || false,
        content,
      } as Project;
    });

  // Sort projects by date descending (newest first)
  return allProjects.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getProjectBySlug(slug: string): Project | null {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    tags: data.tags || [],
    githubUrl: data.githubUrl,
    liveUrl: data.liveUrl,
    featured: data.featured || false,
    content,
  } as Project;
}