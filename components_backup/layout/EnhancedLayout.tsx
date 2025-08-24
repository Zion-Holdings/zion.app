import React from 'react';
<<<<<<< HEAD
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
import dynamic from 'next/dynamic';

interface EnhancedLayoutProps {
  children: ReactNode;
}

// Lazy-load chat widget to avoid adding to initial critical path
const ChatWidget = dynamic(() => import('../chat/ChatWidget'), { ssr: false });

export default function EnhancedLayout({ children }: EnhancedLayoutProps) {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <AnimatedBackground />
      <header className="relative z-10">
        <EnhancedNavigation />
      </header>
      <main className="relative z-10 flex-1 container mx-auto px-4 py-6">{children}</main>
      <footer className="relative z-10">
        <EnhancedFooter />
      </footer>
      {/* Global chat assistant */}
      <ChatWidget />
    </div>
  );
}
=======
import Head from 'next/head';
import EnhancedNavigation from '../EnhancedNavigation';
import EnhancedFooter from '../EnhancedFooter';

interface EnhancedLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  structuredData?: object;
}

const EnhancedLayout: React.FC<EnhancedLayoutProps> = ({
  children,
  title = 'Zion Tech Group - Leading AI & Technology Solutions',
  description = 'Transform your business with Zion Tech Group\'s cutting-edge AI development, cloud architecture, and digital transformation services.',
  keywords = 'AI development, cloud architecture, web development, cybersecurity, IoT platforms, digital transformation, technology consulting',
  ogImage = 'https://ziontechgroup.com/og-image.png',
  structuredData
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading technology consulting firm specializing in AI development, cloud architecture, and digital transformation solutions.",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
      "https://github.com/ziontechgroup"
    ],
    "foundingDate": "2010",
    "numberOfEmployees": "50-100",
    "serviceType": [
      "AI Development",
      "Cloud Architecture", 
      "Web Development",
      "Cybersecurity",
      "IoT Platforms",
      "Digital Transformation"
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ziontechgroup.com" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={ogImage} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(finalStructuredData) }}
        />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Performance Optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/poppins-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <EnhancedNavigation />
        
        <main className="flex-1">
          {children}
        </main>
        
        <EnhancedFooter />
      </div>
    </>
  );
};

export default EnhancedLayout;
>>>>>>> 6d7be8fce1d5e66d749ea8dd439e0663bfd83322
