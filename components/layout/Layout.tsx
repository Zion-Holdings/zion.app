import React from 'react';
import NeoFuturisticNavigation from './NeoFuturisticNavigation';
import NeoFuturisticFooter from './NeoFuturisticFooter';
import EnhancedFuturisticBackground from '../ui/EnhancedFuturisticBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <EnhancedFuturisticBackground variant="quantum" intensity="high">
        <NeoFuturisticNavigation />
        <main className="pt-24 lg:pt-28">
          {children}
        </main>
        <NeoFuturisticFooter />
      </EnhancedFuturisticBackground>
    </div>
  );
};

export default Layout;