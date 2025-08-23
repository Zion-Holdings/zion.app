import React, { ReactNode } from 'react';
import UltraAdvancedFuturisticNavigation2025 from './UltraAdvancedFuturisticNavigation2025';
import UltraAdvancedFuturisticFooter2025 from './UltraAdvancedFuturisticFooter2025';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import PerformanceMonitor from '../PerformanceMonitor';
import FloatingActionMenu from '../FloatingActionMenu';

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [focusTrap, setFocusTrap] = useState(false);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Focus trap for sidebar
  useEffect(() => {
    if (sidebarOpen) {
      setFocusTrap(true);
      // Focus first focusable element in sidebar
      const firstFocusable = document.querySelector('[data-sidebar] button, [data-sidebar] a, [data-sidebar] input');
      if (firstFocusable instanceof HTMLElement) {
        firstFocusable.focus();
      }
    } else {
      setFocusTrap(false);
    }
  }, [sidebarOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [sidebarOpen]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl text-gray-300">Loading...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <UltraAdvancedFuturisticNavigation2025 />
      <main className="relative z-10">
        {children}
      </main>
      <UltraAdvancedFuturisticFooter2025 />
      <AccessibilityEnhancer />
      <PerformanceMonitor />
      <FloatingActionMenu />
    </div>
  );
}
