import React from 'react';
import NeoFuturisticNavigation from './NeoFuturisticNavigation';
import NeoFuturisticFooter from './NeoFuturisticFooter';
import EnhancedFuturisticBackground from '../ui/EnhancedFuturisticBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <EnhancedFuturisticBackground variant="quantum" intensity="low">
        <NeoFuturisticNavigation />
        <main className="pt-24 lg:pt-28">
          <div className="sticky top-16 z-30 bg-gradient-to-r from-cyan-900/40 via-purple-900/40 to-pink-900/40 backdrop-blur-xl border-y border-white/10">
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="text-sm text-white/90">
                Scale faster with our managed AI and IT services. Call +1 302 464 0950 • Email kleber@ziontechgroup.com • 364 E Main St STE 1008 Middletown DE 19709
              </div>
              <div className="flex gap-2">
                <a href="/ai-services" className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-sm">AI Services</a>
                <a href="/it-services" className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-sm">IT Services</a>
                <a href="/micro-saas" className="px-3 py-1.5 rounded-lg bg-pink-600 hover:bg-pink-700 text-white text-sm">Micro SaaS</a>
                <a href="/contact" className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm">Contact</a>
              </div>
            </div>
          </div>
          {children}
        </main>
        <NeoFuturisticFooter />
      </EnhancedFuturisticBackground>
    </div>
  );
};

export default Layout;