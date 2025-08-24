import "./globals.css";
import type { ReactNode } from "react";
import { Metadata } from "next";

export const metadata = {
  title: "Zion OS - Sovereign AI-Powered Digital Economies",
  description: "Launch sovereign AI-powered digital economies with one click. Unified deployment protocol for Zion ecosystems.",
  keywords: "AI, digital economy, blockchain, DAO, marketplace, Zion, autonomous systems",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 glass border-b border-white/10 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Z</span>
                </div>
                <a href="/" className="text-xl font-bold gradient-text">Zion OS</a>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="/" className="text-white/80 hover:text-white transition-colors duration-200 font-medium">
                  Dashboard
                </a>
                <a href="/multiverse/launch" className="text-white/80 hover:text-white transition-colors duration-200 font-medium">
                  Launch
                </a>
                <a href="/admin/os-deploy" className="text-white/80 hover:text-white transition-colors duration-200 font-medium">
                  Deploy
                </a>
                <a href="/admin/instances" className="text-white/80 hover:text-white transition-colors duration-200 font-medium">
                  Instances
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button className="text-white/80 hover:text-white p-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="fade-in">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-20 border-t border-white/10 glass">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Z</span>
                  </div>
                  <span className="text-xl font-bold gradient-text">Zion OS</span>
                </div>
                <p className="text-white/60 text-sm">
                  Launch sovereign AI-powered digital economies with one click.
                </p>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/multiverse/launch" className="text-white/60 hover:text-white transition-colors">Launch Wizard</a></li>
                  <li><a href="/admin/instances" className="text-white/60 hover:text-white transition-colors">Manage Instances</a></li>
                  <li><a href="/admin/os-deploy" className="text-white/60 hover:text-white transition-colors">OS Deployment</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">API Reference</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-white/40 text-sm">
                © 2024 Zion OS. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}