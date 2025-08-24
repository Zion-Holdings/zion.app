import "./globals.css";
import type { ReactNode } from "react";
import { Navigation } from "@/components/Navigation";

export const metadata = {
  title: "Zion Tech Group - AI-Powered Digital Economy Solutions",
  description: "Launch sovereign AI-powered digital economies with one click. Advanced AI automation, quantum computing, and autonomous business solutions for the future.",
  keywords: "AI automation, quantum computing, digital economy, autonomous business, Zion Tech Group, AI consciousness, blockchain, cybersecurity",
  authors: [{ name: "Zion Tech Group" }],
  creator: "Zion Tech Group",
  publisher: "Zion Tech Group",
  robots: "index, follow",
  metadataBase: new URL('https://ziontechgroup.com'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ziontechgroup.com",
    siteName: "Zion Tech Group",
    title: "Zion Tech Group - AI-Powered Digital Economy Solutions",
    description: "Launch sovereign AI-powered digital economies with one click. Advanced AI automation, quantum computing, and autonomous business solutions for the future.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zion Tech Group - AI-Powered Digital Economy Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zion Tech Group - AI-Powered Digital Economy Solutions",
    description: "Launch sovereign AI-powered digital economies with one click. Advanced AI automation, quantum computing, and autonomous business solutions for the future.",
    images: ["/og-image.jpg"],
    creator: "@ziontechgroup",
    site: "@ziontechgroup",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://ziontechgroup.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <meta name="google-site-verification" content="your-verification-code" />
        <meta name="msvalidate.01" content="your-verification-code" />
      </head>
      <body className="min-h-screen bg-[var(--bg)] text-[var(--fg)] antialiased">
        <nav className="border-b border-white/10 sticky top-0 z-50 bg-zinc-900/50 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
            <a href="/" className="font-semibold">Zion Tech Group</a>
            <a href="/services" className="text-sm opacity-80 hover:opacity-100">Services</a>
            <a href="/solutions" className="text-sm opacity-80 hover:opacity-100">Solutions</a>
            <a href="/about" className="text-sm opacity-80 hover:opacity-100">About</a>
            <a href="/contact" className="text-sm opacity-80 hover:opacity-100">Contact</a>
            <a href="/multiverse/launch" className="text-sm opacity-80 hover:opacity-100">Launch</a>
            <a href="/admin/os-deploy" className="text-sm opacity-80 hover:opacity-100">Admin Deploy</a>
            <a href="/admin/instances" className="text-sm opacity-80 hover:opacity-100">Instances</a>
            <a href="/services" className="text-sm opacity-80 hover:opacity-100">Services</a>
            <a href="/about" className="text-sm opacity-80 hover:opacity-100">About</a>
            <a href="/contact" className="text-sm opacity-80 hover:opacity-100">Contact</a>
          </div>
        </nav>
        <main className="pt-20">
          {children}
        </main>
        <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm mt-20">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold gradient-text mb-4">Zion Tech Group</h3>
                <p className="text-sm text-gray-400">
                  Pioneering the future of AI-powered digital economies.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Services</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/services" className="hover:text-white transition-colors">AI Services</a></li>
                  <li><a href="/solutions" className="hover:text-white transition-colors">Solutions</a></li>
                  <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Platform</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/multiverse/launch" className="hover:text-white transition-colors">Launch Wizard</a></li>
                  <li><a href="/admin/instances" className="hover:text-white transition-colors">Instances</a></li>
                  <li><a href="/admin/os-deploy" className="hover:text-white transition-colors">Admin Deploy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Connect</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                  <li><a href="https://twitter.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a></li>
                  <li><a href="https://github.com/Zion-Holdings" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                  <li><a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">Email</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}