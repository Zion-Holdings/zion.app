import "./globals.css";
import type { ReactNode } from "react";
import { Navigation } from "@/components/Navigation";

export const metadata = {
  title: "Zion OS - Sovereign AI-Powered Digital Economies",
  description: "Launch sovereign AI-powered digital economies with one click. Unified deployment protocol for Zion ecosystems with marketplace, governance, identity, and more.",
  keywords: "AI, digital economy, blockchain, governance, marketplace, deployment, Zion",
  authors: [{ name: "Zion Tech Group" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Zion OS - Sovereign AI-Powered Digital Economies",
    description: "Launch sovereign AI-powered digital economies with one click",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-[var(--bg)] text-[var(--fg)] antialiased">
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm mt-20">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold gradient-text mb-4">Zion OS</h3>
                <p className="text-sm text-gray-400">
                  Unified deployment protocol for sovereign AI-powered digital economies.
                </p>
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
                <h4 className="font-semibold mb-3">Features</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Marketplace & Jobs</li>
                  <li>AI Governance</li>
                  <li>Token Systems</li>
                  <li>Identity & KYC</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Support</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Documentation</li>
                  <li>API Reference</li>
                  <li>Community</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}