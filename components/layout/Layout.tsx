import React from 'react';
import NeoFuturisticNavigation from './NeoFuturisticNavigation';
import NeoFuturisticFooter from './NeoFuturisticFooter';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NeoFuturisticNavigation />
      <main className="pt-24 lg:pt-28">
        {children}
      </main>
      <NeoFuturisticFooter />
    </div>
  );
};

export default Layout;