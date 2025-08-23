import React, { useState } from 'react';
import Head from 'next/head';
import UltraFuturisticNavigation2044 from './UltraFuturisticNavigation2044';
import UltraFuturisticFooter2044 from './UltraFuturisticFooter2044';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2043 from '../backgrounds/UltraFuturisticBackground2043';
import TopContactBar from './TopContactBar';
import PerformanceMonitor from '../PerformanceMonitor';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import CookieConsentBanner from '../CookieConsentBanner';

interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  image: string;
  url: string;
  type: string;
}

interface LayoutProps {
  children: React.ReactNode;
  seo?: SEOConfig;
}

export default function Layout({ children, seo }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* SEO Head */}
      <Head>
        <title>{finalSEO.title}</title>
        <meta name="description" content={finalSEO.description} />
        <meta name="keywords" content={finalSEO.keywords} />
        <meta property="og:title" content={finalSEO.title} />
        <meta property="og:description" content={finalSEO.description} />
        <meta property="og:image" content={finalSEO.image} />
        <meta property="og:url" content={finalSEO.url} />
        <meta property="og:type" content={finalSEO.type} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={finalSEO.title} />
        <meta name="twitter:description" content={finalSEO.description} />
        <meta name="twitter:image" content={finalSEO.image} />
        <link rel="canonical" href={finalSEO.url} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </Head>

      {/* Skip to content link for accessibility */}
      <a href="#main" className="skip-link">Skip to main content</a>
      
      {/* Futuristic Background */}
      <UltraFuturisticBackground2043 theme="consciousness" intensity="high" />
      
      {/* Layout Structure */}
      <div className="relative z-10">
        {/* Top Contact Bar */}
        <TopContactBar />
        
        {/* Navigation */}
        <UltraFuturisticNavigation2044 />
        
        {/* Sidebar and Main Content */}
        <div className="flex">
          <EnhancedSidebar2025 
            isOpen={sidebarOpen} 
            onClose={() => setSidebarOpen(false)} 
          />
          
          <main id="main" role="main" className="flex-1 pt-24 lg:pt-28">
            {children}
          </main>
        </div>
        
        {/* Footer */}
        <UltraFuturisticFooter2044 />
      </div>

      {/* Accessibility and Performance Tools */}
      <AccessibilityEnhancer />
      <PerformanceMonitor />
      
      {/* Cookie Consent Banner */}
      <CookieConsentBanner />
    </div>
  );
}
