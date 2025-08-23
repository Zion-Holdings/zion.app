import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import TopContactBar from './TopContactBar';
import UltraFuturisticNavigation2025 from './UltraFuturisticNavigation2025';
import UltraFuturisticFooter2025 from './UltraFuturisticFooter2025';
import EnhancedSidebar2025 from './EnhancedSidebar2025';
import UltraFuturisticBackground2036 from '../backgrounds/UltraFuturisticBackground2036';
import PerformanceMonitor from '../PerformanceMonitor';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import MobileOptimizer from '../MobileOptimizer';
import CookieConsentBanner from '../CookieConsentBanner';

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
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [showAccessibility, setShowAccessibility] = useState(false);
  const [showMobileOptimizer, setShowMobileOptimizer] = useState(false);
  const [showTools, setShowTools] = useState(false);

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

  // Keyboard shortcuts for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl + Alt + P: Toggle Performance Monitor
      if (e.ctrlKey && e.altKey && e.key === 'p') {
        e.preventDefault();
        setShowPerformanceMonitor(prev => !prev);
      }
      
      // Ctrl + Alt + A: Toggle Accessibility
      if (e.ctrlKey && e.altKey && e.key === 'a') {
        e.preventDefault();
        setShowAccessibility(prev => !prev);
      }
      
      // Ctrl + Alt + M: Toggle Mobile Optimizer
      if (e.ctrlKey && e.altKey && e.key === 'm') {
        e.preventDefault();
        setShowMobileOptimizer(prev => !prev);
      }
      
      // Ctrl + Alt + T: Toggle All Tools
      if (e.ctrlKey && e.altKey && e.key === 't') {
        e.preventDefault();
        setShowTools(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl || "https://ziontechgroup.com"} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site" content="@ziontechgroup" />
        
        {/* Additional Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Zion Tech Group" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="//fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      </Head>

      <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
        {/* Skip to content link for accessibility */}
        <a href="#main" className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded">
          Skip to main content
        </a>
        
        {/* Online/Offline Status Indicator */}
        {!isOnline && (
          <div className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center py-2 z-50">
            <span className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              You're currently offline. Some features may be limited.
            </span>
          </div>
        )}
        
        {/* Futuristic Background */}
        <UltraFuturisticBackground2036 />
        
        {/* Layout Structure */}
        <div className="relative z-10">
          {/* Top Contact Bar */}
          <TopContactBar />
          
          {/* Navigation */}
          <UltraFuturisticNavigation2025 />
          
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
          <UltraFuturisticFooter2025 />
        </div>

        {/* Accessibility and Performance Tools */}
        <AccessibilityEnhancer 
          isVisible={showAccessibility} 
          onToggle={setShowAccessibility} 
        />
        <PerformanceMonitor 
          isVisible={showPerformanceMonitor} 
          onToggle={setShowPerformanceMonitor} 
        />
        <MobileOptimizer 
          isVisible={showMobileOptimizer} 
          onToggle={setShowMobileOptimizer} 
        />
        
        {/* Cookie Consent Banner */}
        <CookieConsentBanner />

        {/* Tools Toggle Button */}
        <button
          onClick={() => setShowTools(!showTools)}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 p-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-black"
          aria-label="Toggle accessibility and performance tools"
          title="Toggle Tools (Ctrl + Alt + T)"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>

        {/* Keyboard Shortcuts Info */}
        <div className="fixed top-4 left-4 z-30 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg p-3 text-xs text-white/60">
          <div className="font-medium mb-2">Keyboard Shortcuts:</div>
          <div className="space-y-1">
            <div><kbd className="px-1 py-0.5 bg-white/10 rounded">Ctrl + Alt + A</kbd> Accessibility</div>
            <div><kbd className="px-1 py-0.5 bg-white/10 rounded">Ctrl + Alt + P</kbd> Performance</div>
            <div><kbd className="px-1 py-0.5 bg-white/10 rounded">Ctrl + Alt + M</kbd> Mobile</div>
            <div><kbd className="px-1 py-0.5 bg-white/10 rounded">Ctrl + Alt + T</kbd> All Tools</div>
          </div>
        </div>

        {/* Global CSS for accessibility features */}
        <style jsx global>{`
          /* Skip link styles */
          .skip-link {
            position: absolute;
            top: -40px;
            left: 6px;
            background: #000;
            color: white;
            padding: 8px;
            text-decoration: none;
            z-index: 10000;
            border-radius: 4px;
          }
          
          .skip-link:focus {
            top: 6px;
          }

          /* Accessibility highlight for audit issues */
          .accessibility-highlight {
            outline: 3px solid #ff6b6b !important;
            outline-offset: 2px !important;
            animation: accessibility-pulse 2s ease-in-out infinite;
          }

          @keyframes accessibility-pulse {
            0%, 100% { outline-color: #ff6b6b; }
            50% { outline-color: #ff8e8e; }
          }

          /* High contrast mode */
          .high-contrast {
            --text-color: #ffffff !important;
            --bg-color: #000000 !important;
            --accent-color: #ffff00 !important;
          }

          .high-contrast * {
            background-color: var(--bg-color) !important;
            color: var(--text-color) !important;
            border-color: var(--accent-color) !important;
          }

          /* Large text mode */
          .large-text {
            --font-size-base: 20px !important;
            --line-height-base: 1.8 !important;
          }

          .large-text * {
            font-size: var(--font-size-base) !important;
            line-height: var(--line-height-base) !important;
          }

          /* Reduced motion */
          .reduced-motion *,
          .reduced-motion *::before,
          .reduced-motion *::after {
            animation-duration: 0.1s !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.1s !important;
          }

          /* Focus indicators */
          .focus-visible *:focus {
            outline: var(--focus-outline, 3px solid #00ffff) !important;
            outline-offset: var(--focus-outline-offset, 2px) !important;
          }

          /* Color blindness simulation */
          .colorblind-protanopia {
            filter: url('#protanopia-filter') !important;
          }

          .colorblind-deuteranopia {
            filter: url('#deuteranopia-filter') !important;
          }

          .colorblind-tritanopia {
            filter: url('#tritanopia-filter') !important;
          }

          /* Mobile optimizations */
          .mobile-optimized {
            --touch-target-size: 44px !important;
          }

          .mobile-optimized button,
          .mobile-optimized a,
          .mobile-optimized input {
            min-height: var(--touch-target-size) !important;
            min-width: var(--touch-target-size) !important;
          }

          .low-bandwidth * {
            animation-duration: 0.05s !important;
            transition-duration: 0.05s !important;
          }

          /* Performance modes */
          .performance-mode {
            --animation-duration: 0.3s !important;
            --transition-duration: 0.3s !important;
          }

          .battery-saver {
            --animation-duration: 0.5s !important;
            --transition-duration: 0.5s !important;
          }

          /* Screen reader only content */
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

          /* CSS Custom Properties for dynamic theming */
          :root {
            --font-size: 16px;
            --line-height: 1.5;
            --letter-spacing: 0px;
            --word-spacing: 0px;
            --animation-duration: 0.3s;
            --transition-duration: 0.3s;
          }

          /* Apply custom typography */
          * {
            font-size: var(--font-size);
            line-height: var(--line-height);
            letter-spacing: var(--letter-spacing);
            word-spacing: var(--word-spacing);
          }

          /* Enhanced focus styles */
          *:focus-visible {
            outline: 2px solid #00ffff;
            outline-offset: 2px;
          }

          /* Improved button and link styles */
          button:focus-visible,
          a:focus-visible,
          input:focus-visible,
          select:focus-visible,
          textarea:focus-visible {
            outline: 3px solid #00ffff;
            outline-offset: 2px;
          }

          /* High contrast focus styles */
          .high-contrast *:focus-visible {
            outline: 3px solid var(--accent-color);
            outline-offset: 2px;
          }
        `}</style>

        {/* SVG Filters for Color Blindness Simulation */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
          <defs>
            <filter id="protanopia-filter">
              <feColorMatrix type="matrix" values="0.567,0.433,0,0,0 0.558,0.442,0,0,0 0,0.242,0.758,0,0 0,0,0,1,0"/>
            </filter>
            <filter id="deuteranopia-filter">
              <feColorMatrix type="matrix" values="0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0"/>
            </filter>
            <filter id="tritanopia-filter">
              <feColorMatrix type="matrix" values="0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0"/>
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
}
