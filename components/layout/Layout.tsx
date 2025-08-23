import React, { ReactNode } from 'react';
import UltraFuturisticNavigation2040 from './UltraFuturisticNavigation2040';
import UltraAdvancedFuturisticFooter2025 from './UltraAdvancedFuturisticFooter2025';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import PerformanceOptimizer from '../PerformanceOptimizer';
import ServiceWorkerRegistration from '../ServiceWorkerRegistration';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <ServiceWorkerRegistration />
      <UltraFuturisticNavigation2040 />
      <main className="relative z-10">
        {children}
      </main>
      <UltraAdvancedFuturisticFooter2025 />
      <AccessibilityEnhancer showPanel={true} autoOptimize={true} />
      <PerformanceOptimizer showMetrics={true} autoOptimize={true} />
    </div>
  );
}
