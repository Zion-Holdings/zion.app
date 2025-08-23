import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import UltraFuturisticNavigation2037 from './UltraFuturisticNavigation2037';
import UltraFuturisticFooter2037 from './UltraFuturisticFooter2037';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2038 from '../backgrounds/UltraFuturisticBackground2038';
import TopContactBar from './TopContactBar';

interface LayoutProps {
  children: React.ReactNode;
  seo?: SEOConfig;
}

export default function Layout({ children, seo }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showEnhancements, setShowEnhancements] = useState(false);

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
