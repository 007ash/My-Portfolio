"use client";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const routes = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Experience", path: "#experience" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Resume", path: "#resume" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Detect scroll for background transition
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // ScrollSpy implementation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: 0.1 },
    );

    routes.forEach((route) => {
      const id = route.path.substring(1); // remove '#'
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      routes.forEach((route) => {
        const id = route.path.substring(1);
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    if (path.startsWith("#")) {
      e.preventDefault();
      const id = path.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "glass border-b border-border/40 py-2 shadow-sm"
          : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo / Brand */}
        <Link
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="flex items-center space-x-2 relative group z-10"
        >
          <span className="font-heading font-bold text-2xl tracking-tighter">
            Ashwanth
            <span className="text-primary group-hover:text-blue-400 transition-colors duration-300">
              .dev
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 text-sm font-medium">
          {routes.map((route) => {
            const isActive = activeSection === route.path;

            return (
              <a
                key={route.path}
                href={route.path}
                onClick={(e) => handleLinkClick(e, route.path)}
                className={cn(
                  "relative px-4 py-2 transition-colors duration-200 hover:text-foreground",
                  isActive ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-primary/10 dark:bg-white/5 rounded-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{route.name}</span>
              </a>
            );
          })}
          <div className="ml-4 pl-4 flex items-center space-x-2 border-l border-border/40">
            <ThemeToggle />
            <Button
              variant="default"
              size="sm"
              onClick={(e) => handleLinkClick(e as any, "#contact")}
              className="font-semibold shadow-lg shadow-primary/25 rounded-full px-6"
            >
              Hire Me
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="glass border-l-border/40">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>
              <div className="mt-8 flex justify-end">
                <ThemeToggle />
              </div>
              <nav className="flex flex-col gap-4 mt-4">
                {routes.map((route) => {
                  const isActive = activeSection === route.path;
                  return (
                    <a
                      key={route.path}
                      href={route.path}
                      onClick={(e) => handleLinkClick(e, route.path)}
                      className={cn(
                        "block px-4 py-3 rounded-lg text-lg font-medium transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-primary/5 text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {route.name}
                    </a>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
