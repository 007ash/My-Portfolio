import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// We use Inter for a clean, modern, sans-serif look
const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-foreground antialiased`}>
        <Navbar />
        {/* Main dynamically renders whatever page the user is currently on */}
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}