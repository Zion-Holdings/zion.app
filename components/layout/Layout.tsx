import React from 'react';
import EnhancedFuturisticNavigation from './EnhancedFuturisticNavigation';
import EnhancedFuturisticFooter from './EnhancedFuturisticFooter';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <EnhancedFuturisticNavigation />
      <main className="pt-24 lg:pt-28">
        {children}
      </main>
      <EnhancedFuturisticFooter />
    </div>
  );
};

export default Layout;