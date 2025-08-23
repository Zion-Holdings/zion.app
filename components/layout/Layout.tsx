import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import UltraFuturisticNavigation2045 from './UltraFuturisticNavigation2045';
import UltraFuturisticFooter2045 from './UltraFuturisticFooter2045';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import TopContactBar from './TopContactBar';
import UltraFuturisticBackground2036 from '../backgrounds/UltraFuturisticBackground2036';
import EnhancedPerformanceMonitor from '../EnhancedPerformanceMonitor';
import EnhancedAccessibilityEnhancer from '../EnhancedAccessibilityEnhancer';
import CookieConsentBanner from '../CookieConsentBanner';
import EnhancedErrorBoundary from '../EnhancedErrorBoundary';
import ThemeToggle from '../ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export default function Layout({ 
  children, 
  title = "Zion Tech Group - Revolutionary 2044 Technology",
  description = "Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.",
  keywords = "AI consciousness, quantum computing, autonomous solutions, space technology, cybersecurity, business intelligence, Zion Tech Group, 2044 technology",
  ogImage = "/og-image.jpg",
  canonicalUrl
}: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Check online status
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();

    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    }

    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
      clearTimeout(timer);
    };
  }, []);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-cyan-900">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
          <h2 className="text-2xl font-semibold text-white">Loading Zion Tech Group</h2>
          <p className="text-white/70">Preparing the future of technology...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Canonical URL */}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06b6d4" />
        <meta name="msapplication-TileColor" content="#06b6d4" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
        
        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonicalUrl || "https://ziontechgroup.com"} />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site" content="@ziontechgroup" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="application-name" content="Zion Tech Group" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png",
              "description": description,
              "foundingDate": "2024",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "364 E Main St STE 1008",
                "addressLocality": "Middletown",
                "addressRegion": "DE",
                "postalCode": "19709",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "email": "kleber@ziontechgroup.com"
              },
              "sameAs": [
                "https://github.com/Zion-Holdings",
                "https://linkedin.com/company/zion-tech-group"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Technology Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Consciousness Evolution 2044",
                      "description": "Next-generation AI consciousness with emotional intelligence"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Quantum Neural Network Platform 2044",
                      "description": "Quantum-powered neural networks with consciousness integration"
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>

      <div className={`min-h-screen transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-black text-white' 
          : 'bg-gray-50 text-gray-900'
      }`}>
        {/* Skip Link for Accessibility */}
        <a 
          href="#main-content" 
          className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          Skip to main content
        </a>

        {/* Top Contact Bar */}
        <TopContactBar />

        {/* Navigation */}
        <UltraFuturisticNavigation2045 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen}
          theme={theme}
          onThemeToggle={toggleTheme}
        />

        {/* Theme Toggle */}
        <div className="fixed top-24 right-4 z-50">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>

        {/* Main Content */}
        <main id="main-content" className="relative z-10">
          {children}
        </main>

        {/* Footer */}
        <UltraFuturisticFooter2045 />

        {/* Sidebar */}
        <EnhancedSidebar2025 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
        />

        {/* Background */}
        <UltraFuturisticBackground2036 />

        {/* Performance Monitor */}
        <EnhancedPerformanceMonitor />

        {/* Accessibility Enhancer */}
        <EnhancedAccessibilityEnhancer />

        {/* Cookie Consent */}
        <CookieConsentBanner />

        {/* Error Boundary */}
        <EnhancedErrorBoundary>
          {children}
        </EnhancedErrorBoundary>
      </div>
    </>
  );
}
