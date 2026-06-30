import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Brain, Code, Database, Layout, Terminal } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// 1. Define our Skills Data Structure
const skillCategories = [
  {
    title: "Artificial Intelligence & ML",
    icon: <Brain className="h-5 w-5 text-primary" />,
    skills: ["Python", "TensorFlow", "PyTorch", "Computer Vision", "Explainable AI (XAI)", "Scikit-Learn"],
  },
  {
    title: "Frontend Development",
    icon: <Layout className="h-5 w-5 text-primary" />,
    skills: ["React.js", "Next.js 15", "TypeScript", "Tailwind CSS", "Figma", "Framer Motion"],
  },
  {
    title: "Backend & Systems",
    icon: <Database className="h-5 w-5 text-primary" />,
    skills: ["Node.js", "FastAPI", "PostgreSQL", "MongoDB", "REST APIs", "Prisma ORM"],
  },
  {
    title: "DevOps & Tools",
    icon: <Terminal className="h-5 w-5 text-primary" />,
    skills: ["Git & GitHub", "Docker", "CI/CD Pipelines", "Vercel", "Linux", "AWS (EC2/S3)"],
  },
];

// 2. Define our Certificates Data
const certificates = [
  {
    id: "cert-1",
    title: "Machine Learning Specialization",
    issuer: "Coursera / DeepLearning.AI",
    date: "Aug 2024",
    image: "/certificates/machine-learning-certification.jpg", // Update this to match your actual file name
  },
  {
    id: "cert-2",
    title: "Python for Everybody Specialization",
    issuer: "Infosys Springboard",
    date: "Jan 2025",
    image: "/certificates/python-certification.jpg", // Update this to match your actual file name
  },
];

export default function SkillsPage() {
  return (
    <main className="container mx-auto py-16 px-6 max-w-5xl flex flex-col gap-16">
      
      {/* Header Section */}
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Technical Arsenal</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          A comprehensive overview of my technical skills, tools, and formal certifications.
        </p>
      </section>

      {/* Skills Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="flex flex-col gap-4 p-6 border rounded-xl bg-card">
            <div className="flex items-center gap-3 border-b pb-4">
              {category.icon}
              <h2 className="text-xl font-bold">{category.title}</h2>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm font-medium">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Certificates Section */}
      <section className="flex flex-col gap-8 pt-8 border-t">
        <div className="flex items-center gap-3">
          <Award className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold">Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div key={cert.id} className="flex items-center justify-between p-6 border rounded-xl bg-card/50">
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-lg">{cert.title}</h3>
                <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                <p className="text-muted-foreground text-xs font-medium">{cert.date}</p>
              </div>
              
              {/* Interactive Modal (Dialog) for the Certificate */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">View Certificate</Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl border-muted bg-background p-1">
                  <DialogHeader className="p-4 pb-0">
                    <DialogTitle>{cert.title}</DialogTitle>
                  </DialogHeader>
                  <div className="relative w-full aspect-[4/3] rounded-b-lg overflow-hidden mt-4">
                    <Image 
                      src={cert.image} 
                      alt={cert.title}
                      fill
                      className="object-contain bg-muted/20"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}