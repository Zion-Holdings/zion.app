import "./globals.css";
import type { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zion Tech Group - AI-Powered Technology Solutions",
  description: "Leading provider of AI-powered technology solutions, autonomous systems, quantum computing, and innovative digital transformation services. Transform your business with cutting-edge AI technology.",
  keywords: "AI, artificial intelligence, autonomous systems, quantum computing, technology solutions, digital transformation, Zion Tech Group",
  authors: [{ name: "Zion Tech Group" }],
  creator: "Zion Tech Group",
  publisher: "Zion Tech Group",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ziontechgroup.com",
    title: "Zion Tech Group - AI-Powered Technology Solutions",
    description: "Leading provider of AI-powered technology solutions, autonomous systems, quantum computing, and innovative digital transformation services.",
    siteName: "Zion Tech Group",
    images: [
      {
        url: "https://ziontechgroup.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zion Tech Group - AI Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zion Tech Group - AI-Powered Technology Solutions",
    description: "Leading provider of AI-powered technology solutions, autonomous systems, quantum computing, and innovative digital transformation services.",
    images: ["https://ziontechgroup.com/og-image.jpg"],
    creator: "@ziontechgroup",
    site: "@ziontechgroup",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://ziontechgroup.com",
  },
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
            <a href="/contact" className="text-sm opacity-80 hover:opacity-100">Contact</a>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}