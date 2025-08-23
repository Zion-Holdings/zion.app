import React, { useState } from 'react';
import UltraFuturisticNavigation2037 from './UltraFuturisticNavigation2037';
import UltraFuturisticFooter2037 from './UltraFuturisticFooter2037';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2037 from '../backgrounds/UltraFuturisticBackground2037';
import TopContactBar from './TopContactBar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Skip to content link for accessibility */}
      <a href="#main" className="skip-link">Skip to main content</a>
      {/* Futuristic Background */}
      <UltraFuturisticBackground2037 intensity="high" theme="quantum" />
      
      {/* Layout Structure */}
      <div className="relative z-10">
        {/* Top Contact Bar */}
        <TopContactBar />
        
        {/* Navigation */}
        <UltraFuturisticNavigation2037 />
        
        {/* Sidebar and Main Content */}
        <div className="flex">
          <EnhancedSidebar2025 
            isOpen={sidebarOpen} 
            onClose={() => setSidebarOpen(false)} 
          />
          
          <main id="main" role="main" className="flex-1 pt-24 lg:pt-28">
            {children}
          </main>
        </div>
        
        {/* Footer */}
        <UltraFuturisticFooter2037 />
      </div>
    </div>
  );
}
