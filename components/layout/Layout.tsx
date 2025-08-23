import React, { ReactNode } from 'react';
import UltraFuturisticNavigation2038 from './UltraFuturisticNavigation2038';
import UltraFuturisticFooter2038 from './UltraFuturisticFooter2038';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import PerformanceOptimizer from '../PerformanceOptimizer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <UltraFuturisticNavigation2038 />
      <main className="relative z-10 pt-32">
        {children}
      </main>
      <UltraFuturisticFooter2038 />
      <AccessibilityEnhancer />
      <PerformanceOptimizer showMetrics={true} autoOptimize={true} />
    </div>
  );
};

export default Layout;
