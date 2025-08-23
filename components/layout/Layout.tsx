import React, { ReactNode } from 'react';
import EnhancedNavigation2025 from './EnhancedNavigation2025';
import EnhancedFooter2025 from './EnhancedFooter2025';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Skip to content link for accessibility */}
      <a href="#main" className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded z-50">
        Skip to main content
      </a>
      
      <EnhancedNavigation2025 />
      <main id="main" role="main" className="pt-0">
        {children}
      </main>
      <EnhancedFooter2025 />
    </div>
  );
};

export default Layout;
