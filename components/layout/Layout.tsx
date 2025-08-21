import React from 'react';
import NeoFuturisticNavigation from './NeoFuturisticNavigation';
import NeoFuturisticFooter from './NeoFuturisticFooter';
import AnimatedBackground from '../ui/AnimatedBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AnimatedBackground className="text-white" variant="quantum" particleCount={80} speed={1}>
      <NeoFuturisticNavigation />
      <main className="pt-24 lg:pt-28">
        {children}
      </main>
      <NeoFuturisticFooter />
    </AnimatedBackground>
  );
};

export default Layout;