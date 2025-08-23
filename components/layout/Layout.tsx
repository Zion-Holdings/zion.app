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

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('light', savedTheme === 'light');
    }

    // Simulate loading time for better UX
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleThemeChange = (newTheme: 'dark' | 'light') => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
  };

  // Map theme to background theme
  const getBackgroundTheme = (theme: 'dark' | 'light') => {
    return theme === 'dark' ? 'quantum-neon' : 'holographic';
  };

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  // Default SEO values
  const defaultSEO: SEOConfig = {
    title: 'Zion Tech Group - Revolutionary 2044 Technology Solutions',
    description: 'Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.',
    keywords: 'AI consciousness, quantum computing, autonomous solutions, technology, Zion Tech Group, 2044',
    image: '/og-image.jpg',
    url: 'https://ziontechgroup.com',
    type: 'website'
  };

  const finalSEO = seo || defaultSEO;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <UltraFuturisticNavigation2045 />
      <main className="relative z-10">
        {children}
      </main>
      <UltraFuturisticFooter2045 />
      <AccessibilityEnhancer />
      <PerformanceMonitor />
      
      {/* Cookie Consent Banner */}
      <CookieConsentBanner />
      
      {/* Service Worker Registration */}
      <ServiceWorkerRegistration />
    </div>
    </>
  );
};
