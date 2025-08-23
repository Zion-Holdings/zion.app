import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Zion OS - Launch Sovereign AI-Powered Digital Economies",
  description: "Unified deployment protocol for Zion ecosystems. Deploy AI-powered marketplaces, governance systems, and digital economies with one click.",
  keywords: "AI, blockchain, digital economy, marketplace, governance, deployment, Zion",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
        <nav className="border-b border-white/10 sticky top-0 z-50 bg-zinc-900/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Z</span>
                  </div>
                  <span className="font-bold text-xl gradient-text">Zion OS</span>
                </a>
              </div>
              
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <a href="/" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Home
                  </a>
                  <a href="/multiverse/launch" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Launch
                  </a>
                  <a href="/admin/instances" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Instances
                  </a>
                  <a href="/admin/os-deploy" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Admin
                  </a>
                </div>
              </div>

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
        
        <main className="min-h-screen">{children}</main>
        
        <footer className="border-t border-white/10 bg-zinc-900/50 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Z</span>
                  </div>
                  <span className="font-bold text-xl gradient-text">Zion OS</span>
                </div>
                <p className="text-white/70 max-w-md">
                  Launch sovereign AI-powered digital economies with one click. 
                  Unified deployment protocol for the future of decentralized business.
                </p>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Platform</h3>
                <ul className="space-y-2 text-white/70">
                  <li><a href="/multiverse/launch" className="hover:text-white transition-colors">Launch Wizard</a></li>
                  <li><a href="/admin/instances" className="hover:text-white transition-colors">Manage Instances</a></li>
                  <li><a href="/admin/os-deploy" className="hover:text-white transition-colors">Admin Panel</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-white/70">
                  <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
              <p>&copy; 2024 Zion OS. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}