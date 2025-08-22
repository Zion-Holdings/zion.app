import React, { useState } from 'react';
import { motion } from 'framer-motion';
import UltraFuturisticNavigation2035 from './UltraFuturisticNavigation2035';
import UltraFuturisticFooter2035 from './UltraFuturisticFooter2035';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2035 from '../backgrounds/UltraFuturisticBackground2035';
import TopContactBar from './TopContactBar';
import { Menu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Futuristic Background */}
      <UltraFuturisticBackground2035 />
      
      {/* Layout Structure */}
      <div className="relative z-10">
        {/* Top Contact Bar */}
        <TopContactBar />
        
        {/* Navigation */}
        <div className="sticky top-0 z-50">
          <div className="absolute left-4 top-5 lg:hidden">
            <button
              aria-label="Open sidebar"
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-lg bg-gray-900/80 border border-gray-700/60 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-colors"
            >
              <Menu className="w-5 h-5 text-gray-300" />
            </button>
          </div>
          <UltraFuturisticNavigation2035 />
        </div>
        
        {/* Sidebar and Main Content */}
        <div className="flex">
          <EnhancedSidebar2025 
            isOpen={sidebarOpen} 
            onClose={() => setSidebarOpen(false)} 
          />
          
          <main id="main" className="flex-1 pt-24 lg:pt-28">
            {children}
          </main>
        </div>
        
        {/* Footer */}
        <UltraFuturisticFooter2035 />
      </div>
    </div>
  );
}
