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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//cdn.ziontechgroup.com" />
        <link rel="dns-prefetch" href="//api.ziontechgroup.com" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white antialiased">
        <div className="relative min-h-screen">
          {/* Header */}
          <header className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                {/* Logo */}
                <div className="flex items-center">
                  <a href="/" className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xl">Z</span>
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      Zion Tech Group
                    </span>
                  </a>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                  <a href="/" className="text-white/80 hover:text-white transition-colors">Home</a>
                  <a href="/about" className="text-white/80 hover:text-white transition-colors">About</a>
                  <a href="/services" className="text-white/80 hover:text-white transition-colors">Services</a>
                  <a href="/solutions" className="text-white/80 hover:text-white transition-colors">Solutions</a>
                  <a href="/research" className="text-white/80 hover:text-white transition-colors">Research</a>
                  <a href="/case-studies" className="text-white/80 hover:text-white transition-colors">Case Studies</a>
                  <a href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
                </nav>

                {/* CTA Button */}
                <div className="flex items-center space-x-4">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-200 font-medium"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="bg-black/40 border-t border-white/10 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Company Info */}
                <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">Z</span>
                    </div>
                    <span className="text-lg font-bold">Zion Tech Group</span>
                  </div>
                  <p className="text-white/70 mb-4 max-w-md">
                    Leading provider of AI-powered technology solutions, autonomous systems, and innovative digital transformation services.
                  </p>
                  <div className="flex space-x-4">
                    <a href="https://twitter.com/ziontechgroup" className="text-white/60 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    </a>
                    <a href="https://linkedin.com/company/ziontechgroup" className="text-white/60 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <a href="https://github.com/ziontechgroup" className="text-white/60 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><a href="/about" className="text-white/60 hover:text-white transition-colors">About Us</a></li>
                    <li><a href="/services" className="text-white/60 hover:text-white transition-colors">Services</a></li>
                    <li><a href="/solutions" className="text-white/60 hover:text-white transition-colors">Solutions</a></li>
                    <li><a href="/case-studies" className="text-white/60 hover:text-white transition-colors">Case Studies</a></li>
                    <li><a href="/contact" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
                  </ul>
                </div>

                {/* Services */}
                <div>
                  <h3 className="text-white font-semibold mb-4">Services</h3>
                  <ul className="space-y-2">
                    <li><a href="/ai-autonomous-systems" className="text-white/60 hover:text-white transition-colors">AI Autonomous Systems</a></li>
                    <li><a href="/quantum-computing" className="text-white/60 hover:text-white transition-colors">Quantum Computing</a></li>
                    <li><a href="/digital-transformation" className="text-white/60 hover:text-white transition-colors">Digital Transformation</a></li>
                    <li><a href="/cybersecurity" className="text-white/60 hover:text-white transition-colors">Cybersecurity</a></li>
                    <li><a href="/research-development" className="text-white/60 hover:text-white transition-colors">R&D</a></li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-white/60 text-sm">
                  © 2024 Zion Tech Group. All rights reserved.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</a>
                  <a href="/terms" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</a>
                  <a href="/cookies" className="text-white/60 hover:text-white text-sm transition-colors">Cookie Policy</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}