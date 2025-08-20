import React from 'react';
import FuturisticNavigation from './FuturisticNavigation';
import FuturisticFooter from './FuturisticFooter';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <FuturisticNavigation />
      <main className="pt-32 lg:pt-36">
        {children}
      </main>
      <FuturisticFooter />
    </div>
  );
};

export default Layout;