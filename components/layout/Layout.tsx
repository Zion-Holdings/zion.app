import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;