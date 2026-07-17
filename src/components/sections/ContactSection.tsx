import { FadeIn } from "@/components/ui/fade-in";

export function ContactSection() {
  return (
    <section id="contact" className="container mx-auto py-24 px-6 mb-20">
      <FadeIn className="max-w-xl mx-auto text-center md:text-left md:mx-0">
        <h2 className="text-4xl font-bold tracking-tight mb-4">
          Let's Get in Touch
        </h2>
        <p className="text-muted-foreground mb-8">
          Placeholder for the interactive Contact Form (Server Actions + Zod
          Validation).
        </p>
        <div className="border border-dashed border-border h-64 rounded-lg flex items-center justify-center text-muted-foreground bg-muted/20">
          [ Form Component Will Mount Here ]
        </div>
      </FadeIn>
    </section>
  );
}
