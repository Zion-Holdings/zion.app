import React, { useState, useEffect } from 'react';
import { Header } from '../components/header/Header';
import { Footer } from '../components/Footer';
import { Helmet } from 'react-helmet-async';

interface LayoutProps {
  children: React.ReactNode;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
    canonicalUrl?: string;
    ogImage?: string;
  };
}

export function Layout({ children, seo }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const title = seo?.title || 'Zion Tech Group - Revolutionary Technology Solutions';
  const description = seo?.description || 'Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.';
  const keywords = seo?.keywords || 'AI, artificial intelligence, quantum computing, blockchain, cybersecurity, cloud computing, IoT, machine learning, automation, technology solutions';
  const canonicalUrl = seo?.canonicalUrl || 'https://ziontechgroup.com';
  const ogImage = seo?.ogImage || 'https://ziontechgroup.com/og-image.jpg';

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setSidebarOpen(false);
    }
  };

  return (
    <div 
      className="min-h-screen bg-black text-white relative overflow-x-hidden"
      onKeyDown={handleKeyDown}
      role="application"
      aria-label="Zion Tech Group Application"
    >
      <Helmet>
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
              }
            })
          }}
        />
      </Helmet>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-zion-blue-dark border-l border-zion-blue-light transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-full ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-zion-blue-light">
          <h2 className="text-xl font-semibold text-white">Menu</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-zion-slate-light hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="p-6">
          <div className="space-y-4">
            <a href="/" className="block text-zion-slate-light hover:text-white transition-colors">
              Home
            </a>
            <a href="/services" className="block text-zion-slate-light hover:text-white transition-colors">
              Services
            </a>
            <a href="/about" className="block text-zion-slate-light hover:text-white transition-colors">
              About
            </a>
            <a href="/contact" className="block text-zion-slate-light hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}