import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

// We use Inter for a clean, modern, sans-serif look for body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// We use Outfit for premium, geometric headings
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Ashwanth | Full-Stack Developer",
  description: "Portfolio and technical case studies by Ashwanth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary-foreground`}
      >
        <Navbar />
        {/* Main dynamically renders whatever page the user is currently on */}
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
