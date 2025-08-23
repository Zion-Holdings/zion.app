import React from 'react';
import Head from 'next/head';
import Homepage2040 from '../components/Homepage2040';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';

const HomePage: React.FC = () => {
  // Structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.",
    "foundingDate": "2020",
    "industry": "Technology",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup"
    ],
    "offers": {
      "@type": "Offer",
      "description": "Revolutionary AI consciousness, quantum computing, and autonomous solutions",
      "category": "Technology Services"
    }
  };

  return (
    <>
      <Head>
        <title>Zion Tech Group - Revolutionary AI Consciousness & Quantum Computing Solutions</title>
        <meta name="description" content="Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide. Experience the cutting edge of 2040-2041 technology." />
        <meta name="keywords" content="AI consciousness, quantum computing, autonomous systems, space technology, cybersecurity, business intelligence, Zion Tech Group, revolutionary technology, 2040 technology" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary AI Consciousness & Quantum Computing Solutions" />
        <meta property="og:description" content="Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide." />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ziontechgroup.com" />
        <meta property="twitter:title" content="Zion Tech Group - Revolutionary AI Consciousness & Quantum Computing Solutions" />
        <meta property="twitter:description" content="Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide." />
        <meta property="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#06b6d4" />
        <meta name="msapplication-TileColor" content="#06b6d4" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ziontechgroup.com" />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
      <ErrorBoundary>
        <SEOOptimizer />
        <AnalyticsTracker />
        <Homepage2040 />
        <PerformanceMonitor />
        <AccessibilityEnhancer />
      </ErrorBoundary>
    </>
  );
};

export default HomePage;
