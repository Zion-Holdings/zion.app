import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import UltraAdvancedFuturisticBackground2035 from './UltraAdvancedFuturisticBackground2035';
import UltraAdvancedNavigation2035 from './UltraAdvancedNavigation2035';
import UltraAdvancedFooter2035 from './UltraAdvancedFooter2035';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import TopContactBar from './TopContactBar';

interface LayoutProps {
  children: React.ReactNode;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: string;
    url?: string;
    type?: 'website' | 'article' | 'product';
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
    structuredData?: any;
    noindex?: boolean;
    nofollow?: boolean;
  };
}

export default function Layout({ children, seo }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showEnhancements, setShowEnhancements] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const defaultSEO = {
    title: 'Zion Tech Group - Revolutionary AI, Quantum Computing & Space Technology Solutions',
    description: 'Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.',
    keywords: ['AI', 'artificial intelligence', 'quantum computing', 'space technology', 'cybersecurity', 'machine learning', 'automation', 'Zion Tech Group'],
    image: '/images/zion-tech-group-og-image.jpg',
    url: 'https://ziontechgroup.com',
    type: 'website' as const,
    author: 'Zion Tech Group',
    noindex: false,
    nofollow: false
  };

  const finalSEO = { ...defaultSEO, ...seo };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <Head>
        <title>{finalSEO.title}</title>
        <meta name="description" content={finalSEO.description} />
        <meta name="keywords" content={finalSEO.keywords.join(', ')} />
        <meta name="author" content={finalSEO.author} />
        <meta name="robots" content={finalSEO.noindex ? 'noindex' : 'index'} />
        {finalSEO.nofollow && <meta name="robots" content="nofollow" />}
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={finalSEO.title} />
        <meta property="og:description" content={finalSEO.description} />
        <meta property="og:type" content={finalSEO.type} />
        <meta property="og:url" content={finalSEO.url} />
        <meta property="og:image" content={finalSEO.image} />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ziontechgroup" />
        <meta name="twitter:creator" content="@ziontechgroup" />
        <meta name="twitter:title" content={finalSEO.title} />
        <meta name="twitter:description" content={finalSEO.description} />
        <meta name="twitter:image" content={finalSEO.image} />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={finalSEO.url} />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </Head>

      {/* Futuristic Background */}
      <UltraAdvancedFuturisticBackground2035 />
      
      {/* Skip to content link for accessibility */}
      <a 
        href="#main" 
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
      >
        Skip to main content
      </a>

      {/* Loading State */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          >
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-cyan-400 text-lg font-semibold">Loading Zion Tech Group</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Layout Structure */}
      <div className="relative z-10">
        {/* Top Contact Bar */}
        <TopContactBar />
        
        {/* Navigation */}
        <UltraAdvancedNavigation2035 />
        
        {/* Sidebar and Main Content */}
        <div className="flex">
          <EnhancedSidebar2025 
            isOpen={sidebarOpen} 
            onClose={() => setSidebarOpen(false)}
            aria-hidden={!sidebarOpen}
            aria-label="Main navigation menu"
          />
          
          <main 
            id="main" 
            role="main" 
            className="flex-1 pt-24 lg:pt-28 min-h-screen"
            aria-label="Main content"
          >
            {/* Announcement for screen readers when sidebar opens/closes */}
            <div 
              aria-live="polite" 
              aria-atomic="true" 
              className="sr-only"
            >
              {sidebarOpen ? 'Sidebar opened' : 'Sidebar closed'}
            </div>
            
            {children}
          </main>
        </div>
        
        {/* Footer */}
        <UltraAdvancedFooter2035 />
      </div>

      {/* Back to top button */}
      <motion.button
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-300/50"
        aria-label="Back to top"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </motion.button>
    </div>
  );
}
