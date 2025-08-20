import React from 'react';
import FuturisticNav from './FuturisticNav';
import FuturisticFooter from './FuturisticFooter';
import AnimatedBackground from '../ui/AnimatedBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Animated background */}
      <AnimatedBackground variant="stars" intensity="low" />
      
      {/* Navigation */}
      <FuturisticNav />
      
      {/* Main content */}
      <main className="relative z-10">
        {children}
      </main>
      
      {/* Footer */}
      <FuturisticFooter />
    </div>
  );
};

export default Layout;