import React from 'react';
import QuantumNavigation from './QuantumNavigation';
import QuantumFooter from './QuantumFooter';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <QuantumNavigation />
      <main className="pt-24 lg:pt-28">
        {children}
      </main>
      <QuantumFooter />
    </div>
  );
};

export default Layout;