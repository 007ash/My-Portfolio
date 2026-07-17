import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { BackToTop } from "@/components/ui/back-to-top";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ashwanth | Full-Stack Developer",
    template: "%s | Ashwanth",
  },
  description:
    "Portfolio and technical case studies by Ashwanth. Building intelligent systems and high-performance web applications.",
  openGraph: {
    title: "Ashwanth | Full-Stack Developer",
    description: "Portfolio and technical case studies by Ashwanth.",
    url: siteUrl,
    siteName: "Ashwanth.dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashwanth | Full-Stack Developer",
    description: "Portfolio and technical case studies by Ashwanth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {/* Main dynamically renders whatever page the user is currently on */}
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
