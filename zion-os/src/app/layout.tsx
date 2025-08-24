import "./globals.css";
import type { ReactNode } from "react";
import { Navigation } from "@/components/Navigation";
import { Analytics } from "@/components/Analytics";
import { StructuredData } from "@/components/StructuredData";

export const metadata = {
  title: "Zion OS - Sovereign AI-Powered Digital Economies",
  description: "Launch sovereign AI-powered digital economies with one click. Unified deployment protocol for Zion ecosystems with marketplace, governance, identity, and more.",
  keywords: "AI, digital economy, blockchain, governance, marketplace, deployment, Zion, Web3, DAO, cryptocurrency, DeFi",
  authors: [{ name: "Zion Tech Group" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
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
        alt: "Zion OS - Sovereign AI-Powered Digital Economies"
      }
    ]
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="msapplication-TileColor" content="#0a0a0a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <StructuredData />
      </head>
      <body className="min-h-screen bg-[var(--bg)] text-[var(--fg)] antialiased">
        <Navigation />
        <main className="pt-20" role="main">
          {children}
        </main>
        <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm mt-20" role="contentinfo">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold gradient-text mb-4">Zion OS</h3>
                <p className="text-sm text-gray-400">
                  Unified deployment protocol for sovereign AI-powered digital economies.
                </p>
                <div className="flex space-x-4 mt-4">
                  <a href="https://twitter.com/ziontechgroup" aria-label="Follow us on Twitter" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/ziontechgroup" aria-label="Visit our GitHub" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/company/ziontechgroup" aria-label="Connect on LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Platform</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/multiverse/launch" className="hover:text-white transition-colors">Launch Wizard</a></li>
                  <li><a href="/admin/instances" className="hover:text-white transition-colors">Instances</a></li>
                  <li><a href="/admin/os-deploy" className="hover:text-white transition-colors">Admin Deploy</a></li>
                  <li><a href="/docs" className="hover:text-white transition-colors">Documentation</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Features</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Marketplace & Jobs</li>
                  <li>AI Governance</li>
                  <li>Token Systems</li>
                  <li>Identity & KYC</li>
                  <li>AI-Powered Tools</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Support</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/docs" className="hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="/api" className="hover:text-white transition-colors">API Reference</a></li>
                  <li><a href="/community" className="hover:text-white transition-colors">Community</a></li>
                  <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
              <div className="mt-2 space-x-4">
                <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}