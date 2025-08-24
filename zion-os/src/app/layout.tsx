import "./globals.css";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata = {
  title: "Zion OS",
  description: "Unified deployment protocol for Zion ecosystems",
  keywords: "AI, digital economy, deployment, governance, marketplace",
  authors: [{ name: "Zion Team" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[var(--bg)] text-[var(--fg)] transition-colors duration-200">
        {/* Skip to main content link for screen readers */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-zion-blue text-white px-4 py-2 rounded z-50"
        >
          Skip to main content
        </a>
        
        <header className="border-b border-white/10 sticky top-0 z-50 bg-zinc-900/50 backdrop-blur">
          <nav className="max-w-6xl mx-auto px-4 py-3" role="navigation" aria-label="Main navigation">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <a href="/" className="font-semibold text-lg" aria-label="Zion OS Home">Zion OS</a>
                <a 
                  href="/multiverse/launch" 
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  aria-label="Launch new instance"
                >
                  Launch
                </a>
                <a 
                  href="/admin/os-deploy" 
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  aria-label="Admin deployment panel"
                >
                  Admin Deploy
                </a>
                <a 
                  href="/admin/instances" 
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  aria-label="Manage instances"
                >
                  Instances
                </a>
              </div>
              <ThemeToggle />
            </div>
          </nav>
        </header>
        
        <ThemeProvider>
          <main id="main-content" className="max-w-6xl mx-auto px-4 py-8" role="main">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}