import React, { ReactNode } from 'react';
import UltraAdvancedFuturisticNavigation2035 from './UltraAdvancedFuturisticNavigation2035';
import UltraAdvancedFuturisticFooter2025 from './UltraAdvancedFuturisticFooter2025';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraAdvancedFuturisticBackground2025 from '../backgrounds/UltraAdvancedFuturisticBackground2025';
import TopContactBar from './TopContactBar';
import PerformanceMonitor from '../PerformanceMonitor';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import PerformanceOptimizer from '../PerformanceOptimizer';

interface LayoutProps {
  children: React.ReactNode;
  seo?: SEOConfig;
}

export default function Layout({ children, seo }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showEnhancements, setShowEnhancements] = useState(false);

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
