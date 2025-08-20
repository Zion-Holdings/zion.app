import React from 'react';
import FuturisticNavbar from './FuturisticNavbar';
import FuturisticFooter from './FuturisticFooter';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <FuturisticNavbar />
      <main className="pt-24 lg:pt-28">
        {children}
      </main>
      <FuturisticFooter />
    </div>
  );
};

export default Layout;