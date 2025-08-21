import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EnhancedNavigation2025 from './EnhancedNavigation2025';
import UltraFuturisticFooter2026 from './UltraFuturisticFooter2026';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2026 from '../backgrounds/UltraFuturisticBackground2026';
import TopContactBar from './TopContactBar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Futuristic Background */}
      <UltraFuturisticBackground2026 />
      
      {/* Layout Structure */}
      <div className="relative z-10">
        {/* Top Contact Bar */}
        <TopContactBar />
        
        {/* Navigation */}
        <EnhancedNavigation2025 />
        
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
        <UltraFuturisticFooter2026 />
      </div>
    </div>
  );
}
