import React, { useState } from 'react';
import { motion } from 'framer-motion';
import UltraFuturisticNavigation2037 from './UltraFuturisticNavigation2037';
import UltraFuturisticFooter2037 from './UltraFuturisticFooter2037';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2037 from '../backgrounds/UltraFuturisticBackground2037';
import TopContactBar from './TopContactBar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-1 pt-20 sm:pt-24 lg:pt-28">
        {children}
      </main>
      <Footer />
    </div>
  );
}
