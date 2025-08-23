import React, { ReactNode } from 'react';
import UltraFuturisticNavigation2025 from './UltraFuturisticNavigation2025';
import UltraFuturisticFooter2025 from './UltraFuturisticFooter2025';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import PerformanceOptimizer from '../PerformanceOptimizer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <UltraFuturisticNavigation2025 />
      <main className="relative z-10">
        {children}
      </main>
      <UltraFuturisticFooter2025 />
      <AccessibilityEnhancer showPanel={true} autoOptimize={true} />
      <PerformanceOptimizer showMetrics={true} autoOptimize={true} />
    </div>
  );
}
