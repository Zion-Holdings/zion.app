import React, { useState } from 'react';
import { motion } from 'framer-motion';
import UltraFuturisticNavigation2035 from './UltraFuturisticNavigation2035';
import UltraFuturisticFooter2035 from './UltraFuturisticFooter2035';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2035 from '../backgrounds/UltraFuturisticBackground2035';
import TopContactBar from './TopContactBar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Skip to main content for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded focus:z-50"
      >
        Skip to content
      </a>
      {/* Futuristic Background */}
      <UltraFuturisticBackground2035 />
      
      {/* Layout Structure */}
      <div className="relative z-10">
        {/* Top Contact Bar */}
        <TopContactBar />
        
        {/* Navigation */}
        <UltraFuturisticNavigation2035 />
        
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
