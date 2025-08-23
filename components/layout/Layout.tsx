import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import UltraFuturisticNavigation2040 from './UltraFuturisticNavigation2040';
import UltraFuturisticFooter2040 from './UltraFuturisticFooter2040';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import TopContactBar from './TopContactBar';
import UltraFuturisticBackground2045 from '../backgrounds/UltraFuturisticBackground2045';
import EnhancedPerformanceMonitor from '../EnhancedPerformanceMonitor';
import EnhancedAccessibilityEnhancer from '../EnhancedAccessibilityEnhancer';
import MobileOptimizer from '../MobileOptimizer';
import CookieConsentBanner from '../CookieConsentBanner';
import EnhancedErrorBoundary from '../EnhancedErrorBoundary';

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
  title = "Zion Tech Group - Revolutionary 2046 Technology",
  description = "Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.",
  keywords = "AI consciousness, quantum computing, autonomous solutions, space technology, cybersecurity, business intelligence, Zion Tech Group, 2046 technology",
  ogImage = "/og-image.jpg",
  canonicalUrl
}: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [accessibilitySettings, setAccessibilitySettings] = useState({});
  const [mobileOptimizationSettings, setMobileOptimizationSettings] = useState({});

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
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl || "https://ziontechgroup.com"} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Zion Tech Group - Revolutionary 2046 Technology" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalUrl || "https://ziontechgroup.com"} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={ogImage} />
        <meta property="twitter:site" content="@ziontechgroup" />
        <meta property="twitter:creator" content="@ziontechgroup" />
        
        {/* Additional Meta Tags */}
        <meta name="application-name" content="Zion Tech Group" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* Performance Hints */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        
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
              "description": "Revolutionary technology solutions for the future",
              "foundingDate": "2020",
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
              ]
            })
          }}
        />
      </Head>

      {/* Online/Offline Status Indicator */}
      {!isOnline && (
        <div className="fixed top-0 left-0 right-0 bg-red-500 text-white text-center py-2 z-50">
          You are currently offline. Some features may not be available.
        </div>
      )}

      {/* Main Layout */}
      <div className="min-h-screen bg-black text-white">
        {/* Background Effects */}
        <UltraFuturisticBackground2045 />
        
        {/* Top Contact Bar */}
        <TopContactBar />
        
        {/* Navigation */}
        <UltraFuturisticNavigation2040 />
        
        {/* Sidebar */}
        <EnhancedSidebar2025 isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        {/* Main Content */}
        <main 
          id="main-content"
          role="main"
          className="relative z-10"
          tabIndex={-1}
        >
          {children}
        </main>
        
        {/* Footer */}
        <UltraFuturisticFooter2040 />
        
        {/* Enhancement Components */}
        <EnhancedAccessibilityEnhancer 
          onAccessibilityChange={setAccessibilitySettings}
        />
        <MobileOptimizer 
          onMobileOptimizationChange={setMobileOptimizationSettings}
        />
        <EnhancedPerformanceMonitor />
        <CookieConsentBanner />
        
        {/* Error Boundary */}
        <EnhancedErrorBoundary>
          <div className="hidden">
            {/* Additional error boundary content if needed */}
          </div>
        </EnhancedErrorBoundary>
      </div>

      {/* Global Styles for Accessibility */}
      <style jsx global>{`
        :root {
          --contrast-multiplier: 1;
          --border-width: 1px;
          --animation-duration: 0.3s;
          --transition-duration: 0.3s;
          --font-size-base: 16px;
          --font-size-lg: 18px;
          --font-size-xl: 20px;
          --saturation-multiplier: 1;
          --focus-ring-width: 3px;
          --focus-ring-color: #06b6d4;
          --touch-target-size: auto;
          --touch-spacing: auto;
          --animation-reduce: 1;
          --transition-reduce: 1;
          --line-height: 1.5;
        }
        
        /* Accessibility Enhancements */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        
        /* Focus Indicators */
        *:focus {
          outline: var(--focus-ring-width) solid var(--focus-ring-color);
          outline-offset: 2px;
        }
        
        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        /* High Contrast */
        .high-contrast {
          filter: contrast(150%);
        }
        
        /* Large Text */
        .large-text {
          font-size: 1.2em;
          line-height: 1.6;
        }
        
        /* Touch Optimization */
        .touch-optimized button,
        .touch-optimized a,
        .touch-optimized input {
          min-height: var(--touch-target-size);
          min-width: var(--touch-target-size);
          padding: var(--touch-spacing);
        }
        
        /* Mobile Layout */
        .mobile-layout {
          --container-padding: 1rem;
          --section-spacing: 2rem;
        }
        
        /* Data Optimization */
        .data-optimized img {
          loading: lazy;
        }
        
        /* Haptic Feedback */
        .haptic-enabled button:active {
          transform: scale(0.98);
        }
        
        /* Swipe Navigation */
        .swipe-enabled {
          touch-action: pan-y;
        }
        
        /* Mobile First */
        .mobile-first {
          --grid-columns: 1;
        }
        
        @media (min-width: 768px) {
          .mobile-first {
            --grid-columns: 2;
          }
        }
        
        @media (min-width: 1024px) {
          .mobile-first {
            --grid-columns: 3;
          }
        }
        
        /* Line Clamp Utility */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
