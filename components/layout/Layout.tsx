'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { TopContactBar } from './TopContactBar';
import { UltraFuturisticNavigation2046 } from './UltraFuturisticNavigation2046';
import { EnhancedSidebar2025 } from './EnhancedSidebar2025';
import { UltraFuturisticFooter2047 } from './UltraFuturisticFooter2047';
import { UltraFuturisticBackground2045 } from './UltraFuturisticBackground2045';
import { AccessibilityEnhancer } from './AccessibilityEnhancer';
import { EnhancedPerformanceMonitor } from './EnhancedPerformanceMonitor';
import { CookieConsentBanner } from './CookieConsentBanner';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  structuredData?: object;
}

export default function Layout({
  children,
  title = 'Zion Tech Group - Leading Edge Technology Solutions',
  description = 'Zion Tech Group delivers cutting-edge AI, quantum computing, and autonomous systems solutions. Transform your business with next-generation technology.',
  keywords = 'AI, artificial intelligence, quantum computing, autonomous systems, machine learning, technology solutions, Zion Tech Group',
  canonicalUrl = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogUrl = 'https://ziontechgroup.com',
  twitterCard = 'summary_large_image',
  structuredData
}: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Handle online/offline status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check initial status
    setIsOnline(navigator.onLine);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    // Service Worker Registration
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // Show update notification
                  const notification = document.getElementById('sw-update-notification');
                  if (notification) {
                    notification.classList.remove('hidden');
                  }
                }
              });
            }
          });
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="theme-color" content="#000000" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site" content="@ziontechgroup" />
        <meta name="twitter:creator" content="@ziontechgroup" />
        
        {/* Additional Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
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
              "description": "Leading edge technology solutions in AI, quantum computing, and autonomous systems",
              "foundingDate": "2020",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Technology Drive",
                "addressLocality": "Wilmington",
                "addressRegion": "DE",
                "postalCode": "19801",
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
        
        {/* Layout Structure */}
        <div className="relative z-10">
          {/* Top Contact Bar */}
          <TopContactBar />
          
          {/* Navigation */}
          <UltraFuturisticNavigation2046 />
          
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
          <UltraFuturisticFooter2047 />
        </div>
      </div>

      {/* Accessibility and Performance Tools */}
      <AccessibilityEnhancer />
      <EnhancedPerformanceMonitor />
      
      {/* Cookie Consent Banner */}
      <CookieConsentBanner />
      
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
    </>
  );
}
