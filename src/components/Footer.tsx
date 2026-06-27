import Link from "next/link";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 19c-4.3 1.3-4.3-2.5-6-3" />
      <path d="M15 22v-3.9a3.2 3.2 0 0 0-.9-2.5c3-.3 6.2-1.4 6.2-6.4a4.9 4.9 0 0 0-1.3-3.4 4.6 4.6 0 0 0-.1-3.4s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.4 0C6.3 1.8 5.2 2.1 5.2 2.1a4.6 4.6 0 0 0-.1 3.4A4.9 4.9 0 0 0 3.8 8.9c0 5 3.2 6.1 6.2 6.4a3.2 3.2 0 0 0-.9 2.5V22" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      <path d="M5 10v10" />
      <path d="M10 10v10" />
      <path d="M10 15c0-3 2-5 4.5-5 2.5 0 4.5 2 4.5 5v5" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 px-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2 px-8 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left text-muted-foreground">
            Built by Ashwanth. The source code is available on{" "}
            <Link href="https://github.com/yourusername" target="_blank" className="font-medium underline underline-offset-4">
              GitHub
            </Link>.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <Link href="https://github.com/yourusername" target="_blank" aria-label="GitHub">
            <GitHubIcon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
          </Link>
          <Link href="https://linkedin.com/in/yourusername" target="_blank" aria-label="LinkedIn">
            <LinkedInIcon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
          </Link>
          <Link href="/contact" aria-label="Contact">
            <MailIcon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}