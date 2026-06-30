"use client";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const routes = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Resume", path: "/resume" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full glass border-b-0 border-white/5">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo / Brand */}
        <Link
          href="/"
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
            const isActive = pathname === route.path;

            return (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "relative px-4 py-2 transition-colors duration-200 hover:text-foreground",
                  isActive ? "text-foreground" : "text-foreground/60",
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-white/5 rounded-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{route.name}</span>
              </Link>
            );
          })}
          <div className="ml-4 pl-4 border-l border-white/10">
            <Button
              asChild
              variant="default"
              size="sm"
              className="font-semibold shadow-lg shadow-primary/25 rounded-full px-6"
            >
              <Link href="/contact">Hire Me</Link>
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
            <SheetContent side="right" className="glass border-l-white/10">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>
              <nav className="flex flex-col gap-4 mt-8">
                {routes.map((route) => {
                  const isActive = pathname === route.path;
                  return (
                    <Link
                      key={route.path}
                      href={route.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block px-4 py-3 rounded-lg text-lg font-medium transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-white/5 text-foreground/80 hover:text-foreground",
                      )}
                    >
                      {route.name}
                    </Link>
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
