import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { StaggeredText } from "@/components/ui/staggered-text";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative container mx-auto px-6 pt-32 pb-20 md:py-40 flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-6xl"
    >
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
          <StaggeredText text="Hi, I'm Ashwanth SenthilKumar" delay={0.2} />
          <span >
            <FadeIn delay={0.8} direction="up">
              I build intelligent systems.
            </FadeIn>
          </span>
        </h1>

        <FadeIn delay={1.0}>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
            A Computer Science engineer specializing in Artificial Intelligence
            and Machine Learning. I bridge the gap between complex ML models and
            high-performance, full-stack web applications.
          </p>
        </FadeIn>

        <FadeIn delay={1.2} className="flex flex-wrap gap-4 w-full sm:w-auto">
          <Button
            asChild
            size="lg"
            className="font-semibold rounded-full px-8 shadow-lg shadow-primary/25 group"
          >
            <Link href="#projects">
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
            <Link href="#contact">
              <Mail className="mr-2 h-4 w-4" /> Let's Talk
            </Link>
          </Button>
        </FadeIn>

        {/* Social Links */}
        <FadeIn delay={1.4} className="flex gap-6 mt-12">
          <Link
            href="https://github.com/007ash"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1"
          >
            <FaGithub className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/in/ashwanth-senthilkumar"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1"
          >
            <FaLinkedin className="h-6 w-6" />
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
  );
}
