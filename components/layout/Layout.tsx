import React, { useState } from 'react';
import { motion } from 'framer-motion';
import UltraFuturisticNavigation2036 from './UltraFuturisticNavigation2036';
import UltraFuturisticFooter2036 from './UltraFuturisticFooter2036';
import UltraFuturisticSidebar2036 from './UltraFuturisticSidebar2036';
import UltraAdvancedFuturisticBackground2036 from '../backgrounds/UltraAdvancedFuturisticBackground2036';
import TopContactBar from './TopContactBar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: React.PropsWithChildren<LayoutProps>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Futuristic Background */}
      <UltraAdvancedFuturisticBackground2036 />
      
      {/* Layout Structure */}
      <div className="relative z-10">
        {/* Top Contact Bar */}
        <TopContactBar />
        
        {/* Navigation */}
        <UltraFuturisticNavigation2036 />
        
        {/* Sidebar and Main Content */}
        <div className="flex">
          <UltraFuturisticSidebar2036 
            isOpen={sidebarOpen} 
            onClose={() => setSidebarOpen(false)} 
          />
          
          <main id="main" className="flex-1 pt-24 lg:pt-28">
            {children}
          </main>
        </div>
        
        {/* Footer */}
        <UltraFuturisticFooter2036 />
      </div>
    </div>
  );
}
