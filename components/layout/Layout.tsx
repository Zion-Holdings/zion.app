import React, { useState } from 'react';
import { motion } from 'framer-motion';
import UltraAdvancedNavigation2035 from './UltraAdvancedNavigation2035';
import UltraAdvancedFooter2035 from './UltraAdvancedFooter2035';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraAdvancedFuturisticBackground2035 from './UltraAdvancedFuturisticBackground2035';
import TopContactBar from './TopContactBar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Futuristic Background */}
      <UltraAdvancedFuturisticBackground2035 />
      
      {/* Layout Structure */}
      <div className="relative z-10">
        {/* Top Contact Bar */}
        <TopContactBar />
        
        {/* Navigation */}
        <UltraAdvancedNavigation2035 />
        
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
        <UltraAdvancedFooter2035 />
      </div>
    </div>
  );
}
