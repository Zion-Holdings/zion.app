import React, { ReactNode } from 'react';
import UltraFuturisticNavigation2045 from './UltraFuturisticNavigation2045';
import UltraFuturisticFooter2045 from './UltraFuturisticFooter2045';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import PerformanceOptimizer from '../PerformanceOptimizer';

interface LayoutProps {
  children: React.ReactNode;
  seo?: SEOConfig;
}

export default function Layout({ children, seo }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <UltraFuturisticNavigation2045 />
      <main className="relative z-10">
        {children}
      </main>
      <UltraFuturisticFooter2045 />
      <AccessibilityEnhancer />
      <PerformanceOptimizer showMetrics={true} autoOptimize={true} />
    </div>
  );
};
