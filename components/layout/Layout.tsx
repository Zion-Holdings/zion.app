import React, { ReactNode } from 'react';
import UltraAdvancedFuturisticNavigation2035 from './UltraAdvancedFuturisticNavigation2035';
import UltraAdvancedFuturisticFooter2025 from './UltraAdvancedFuturisticFooter2025';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import PerformanceOptimizer from '../PerformanceOptimizer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <UltraAdvancedFuturisticNavigation2035 />
      <main className="relative z-10">
        {children}
      </main>
      <UltraAdvancedFuturisticFooter2025 />
      <AccessibilityEnhancer />
      <PerformanceOptimizer showMetrics={true} autoOptimize={true} />
    </div>
  );
};

export default Layout;
