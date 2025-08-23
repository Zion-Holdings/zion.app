import React, { ReactNode } from 'react';
import EnhancedNavigation2025 from './EnhancedNavigation2025';
import EnhancedFooter2025 from './EnhancedFooter2025';
import UltraFuturisticBackground from '../backgrounds/UltraFuturisticBackground';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <UltraFuturisticBackground />
      <EnhancedNavigation2025 />
      <main className="pt-0 relative z-10">
        {children}
      </main>
      <EnhancedFooter2025 />
    </div>
  );
};

export default Layout;
