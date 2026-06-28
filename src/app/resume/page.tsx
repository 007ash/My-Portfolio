import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="container mx-auto py-16 px-6 max-w-5xl flex flex-col gap-10">
      
      {/* Header & Download Action */}
      <section className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Resume</h1>
          <p className="text-muted-foreground text-lg">
            Review my professional experience, education, and technical skills.
          </p>
        </div>
        
        {/* The Download Button */}
        {/* We use an anchor tag (<a>) pointing to the file in the public folder, with the 'download' attribute */}
        <Button asChild size="lg" className="font-semibold shadow-lg shrink-0">
          <a href="/Ashwanth_Senthilkumar.pdf" download="Ashwanth_Senthilkumar_Resume.pdf">
            <Download className="mr-2 h-5 w-5" /> Download CV
          </a>
        </Button>
      </section>

      <div className="h-px w-full bg-border"></div>

      {/* Embedded PDF Viewer */}
      <section className="w-full h-[800px] border rounded-xl overflow-hidden bg-muted/30 shadow-sm flex items-center justify-center relative">
        {/* 
          This object tag attempts to render the PDF natively in the browser. 
          If their browser doesn't support PDF viewing, it provides a fallback message.
        */}
        <object 
          data="/Ashwanth_Senthilkumar.pdf" 

          type="application/pdf" 
          className="w-full h-full"
        >
          <div className="flex flex-col items-center justify-center p-8 text-center h-full gap-4">
            <FileText className="h-12 w-12 text-muted-foreground" />
            <p className="text-muted-foreground">
              Your browser doesn't support native PDF viewing.
            </p>
            <Button asChild variant="outline">
              <a href="/Ashwanth_Senthilkumar.pdf" download="Ashwanth_Senthilkumar_Resume.pdf">
                Download the PDF instead
              </a>
            </Button>
          </div>
        </object>
      </section>

    </main>
  );
}