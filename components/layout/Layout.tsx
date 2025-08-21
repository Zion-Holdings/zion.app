import React from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <EnhancedNavigation />
      <main className="pt-24 lg:pt-28">
        {children}
      </main>
      <EnhancedFooter />
    </div>
  );
};

export default Layout;