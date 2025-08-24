import "./globals.css";
import type { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "@/contexts/AuthContext";
import { OnboardingWalkthrough } from "@/components/OnboardingWalkthrough";
import { LayoutWrapper } from "@/components/LayoutWrapper";

export const metadata = {
  title: "Zion Tech Group - AI-Powered Enterprise Solutions & Autonomous Systems",
  description: "Leading provider of AI-powered enterprise solutions, autonomous business systems, quantum computing, and next-generation technology services. Transform your business with cutting-edge AI technology.",
  keywords: "AI, artificial intelligence, autonomous systems, quantum computing, enterprise solutions, business automation, AI consulting, technology services",
  authors: [{ name: "Zion Tech Group" }],
  openGraph: {
    title: "Zion Tech Group - AI-Powered Enterprise Solutions",
    description: "Leading provider of AI-powered enterprise solutions and autonomous systems",
    url: "https://ziontechgroup.com",
    siteName: "Zion Tech Group",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zion Tech Group - AI-Powered Enterprise Solutions",
    description: "Leading provider of AI-powered enterprise solutions and autonomous systems",
  },
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
        <nav className="border-b border-white/10 sticky top-0 z-50 bg-zinc-900/50 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
            <a href="/" className="font-semibold">Zion OS</a>
            <a href="/services" className="text-sm opacity-80 hover:opacity-100">Services</a>
            <a href="/multiverse/launch" className="text-sm opacity-80 hover:opacity-100">Launch</a>
            <a href="/admin/os-deploy" className="text-sm opacity-80 hover:opacity-100">Admin Deploy</a>
            <a href="/admin/instances" className="text-sm opacity-80 hover:opacity-100">Instances</a>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}