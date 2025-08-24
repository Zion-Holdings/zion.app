import "./globals.css";
import type { ReactNode } from "react";
import { Navigation } from "@/components/Navigation";
import { Analytics } from "@/components/Analytics";
import { StructuredData } from "@/components/StructuredData";

export const metadata = {
  title: "Zion Tech Group - Sovereign AI-Powered Digital Economies",
  description: "Launch sovereign AI-powered digital economies with one click. Unified deployment protocol for Zion ecosystems with marketplace, governance, identity, and more.",
  keywords: "AI, digital economy, blockchain, governance, marketplace, deployment, Zion, Web3, DAO, cryptocurrency, token economics, KYC, identity verification",
  authors: [{ name: "Zion Tech Group" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    title: "Zion OS - Sovereign AI-Powered Digital Economies",
    description: "Launch sovereign AI-powered digital economies with one click. Unified deployment protocol for Zion ecosystems with marketplace, governance, identity, and more.",
    type: "website",
    locale: "en_US",
    url: "https://ziontechgroup.com",
    siteName: "Zion OS",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zion OS - Sovereign AI-Powered Digital Economies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zion OS - Sovereign AI-Powered Digital Economies",
    description: "Launch sovereign AI-powered digital economies with one click",
    images: ["/og-image.jpg"],
    creator: "@ziontechgroup",
  },
  alternates: {
    canonical: "https://ziontechgroup.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zion OS - Sovereign AI-Powered Digital Economies",
    description: "Launch sovereign AI-powered digital economies with one click",
    images: ["/og-image.jpg"]
  },
  alternates: {
    canonical: "https://ziontechgroup.com"
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code"
  }
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
        </footer>
        <Analytics />
      </body>
    </html>
  );
}