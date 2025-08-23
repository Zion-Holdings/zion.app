import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import Head from 'next/head';
import UltraFuturisticNavigation2045 from './UltraFuturisticNavigation2045';
import UltraFuturisticFooter2045 from './UltraFuturisticFooter2045';
=======
import { motion, AnimatePresence } from 'framer-motion';
import UltraFuturisticNavigation2037 from './UltraFuturisticNavigation2037';
import UltraFuturisticFooter2037 from './UltraFuturisticFooter2037';
>>>>>>> 4e26761e9808218b595a40eae6dfbc7c204b5906
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2038 from '../backgrounds/UltraFuturisticBackground2038';
import TopContactBar from './TopContactBar';
<<<<<<< HEAD
import EnhancedPerformanceMonitor from '../EnhancedPerformanceMonitor';
import AccessibilityEnhancer from '../EnhancedAccessibilityEnhancer';
import CookieConsentBanner from '../CookieConsentBanner';
import EnhancedErrorBoundary from '../EnhancedErrorBoundary';
=======
>>>>>>> 4e26761e9808218b595a40eae6dfbc7c204b5906

interface LayoutProps {
  children: React.ReactNode;
  seo?: SEOConfig;
}

<<<<<<< HEAD
export default function Layout({ 
  children, 
  title = "Zion Tech Group - Revolutionary 2045 Technology",
  description = "Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.",
  keywords = "AI consciousness, quantum computing, autonomous solutions, space technology, cybersecurity, business intelligence, Zion Tech Group, 2045 technology",
  ogImage = "/og-image.jpg",
  canonicalUrl
}: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Check online status
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();

    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New version available
                  if (typeof window !== 'undefined' && window.confirm) {
                    if (window.confirm('A new version is available! Would you like to update?')) {
                      newWorker.postMessage({ type: 'SKIP_WAITING' });
                      window.location.reload();
                    }
                  }
                }
              });
            }
          });
        })
        .catch((error) => {
          // Silently handle service worker registration errors
          // eslint-disable-next-line no-console
          console.error('Service Worker registration failed:', error);
        });
    }

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="theme-color" content="#06b6d4" />
        
        {/* Canonical URL */}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#06b6d4" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
        
        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
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
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site" content="@ziontechgroup" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="application-name" content="Zion Tech Group" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Preload Critical Resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/_next/static/css/app.css" as="style" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
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
                      "name": "AI Consciousness Evolution 2045",
                      "description": "Next-generation AI consciousness with emotional intelligence"
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Background Effects */}
        <UltraFuturisticBackground2045 />
        
        {/* Top Contact Bar */}
        <TopContactBar />
        
        {/* Navigation */}
        <UltraFuturisticNavigation2045 />
=======
export default function Layout({ children, seo }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showEnhancements, setShowEnhancements] = useState(false);

  return (
    <div 
      className="min-h-screen bg-black text-white relative overflow-x-hidden"
      onKeyDown={handleKeyDown}
      role="application"
      aria-label="Zion Tech Group Application"
    >
      {/* Skip to content link for accessibility */}
      <a 
        href="#main" 
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
      >
        Skip to main content
      </a>

      {/* Enhanced Futuristic Background */}
      <UltraFuturisticBackground2037 intensity="medium" theme="quantum-neon" />

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
        
        {/* Enhanced Navigation */}
        <UltraFuturisticNavigation2037 
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          aria-expanded={sidebarOpen}
        />
>>>>>>> 4e26761e9808218b595a40eae6dfbc7c204b5906
        
        {/* Sidebar and Main Content */}
        <div className="flex">
          <EnhancedSidebar2025 
            isOpen={sidebarOpen} 
<<<<<<< HEAD
            onClose={() => setSidebarOpen(false)} 
          />
          
          <main id="main" role="main" className="flex-1 pt-24 lg:pt-28">
            <EnhancedErrorBoundary>
              {children}
            </EnhancedErrorBoundary>
          </main>
        </div>
        
        {/* Footer */}
        <UltraFuturisticFooter2045 />
        
        {/* Performance Monitor */}
        <EnhancedPerformanceMonitor />
        
        {/* Accessibility Enhancer */}
        <AccessibilityEnhancer />
        
        {/* Cookie Consent Banner */}
        <CookieConsentBanner />
        
        {/* Offline Indicator */}
        {!isOnline && (
          <div className="fixed bottom-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span>You're currently offline. Some features may be limited.</span>
            </div>
          </div>
        )}
        
        {/* Service Worker Update Notification */}
        <div id="sw-update-notification" className="hidden fixed bottom-4 right-4 bg-cyan-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold mb-1">Update Available</h4>
              <p className="text-sm text-cyan-100 mb-3">A new version of Zion Tech Group is available.</p>
              <div className="flex gap-2">
                <button 
                  onClick={() => window.location.reload()} 
                  className="bg-white text-cyan-600 px-3 py-1 rounded text-sm font-medium hover:bg-cyan-500 transition-colors"
                >
                  Update Now
                </button>
                <button 
                  onClick={() => document.getElementById('sw-update-notification')?.classList.add('hidden')} 
                  className="text-cyan-100 hover:text-white text-sm transition-colors"
                >
                  Later
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
=======
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
        <UltraFuturisticFooter2037 />
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
>>>>>>> 4e26761e9808218b595a40eae6dfbc7c204b5906
  );
}
