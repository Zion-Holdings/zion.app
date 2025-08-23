import React from 'react';
import Head from 'next/head';
import EnhancedNavigation2025 from './EnhancedNavigation2025';
import UltraFuturisticFooter2044 from './UltraFuturisticFooter2044';

interface UltraFuturisticLayout2045Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

const UltraFuturisticLayout2045: React.FC<UltraFuturisticLayout2045Props> = ({
  children,
  title = "Zion Tech Group - Revolutionary 2045 Futuristic Technology Solutions",
  description = "Discover revolutionary AI consciousness, quantum computing, and space technology solutions that will transform your business and propel humanity into the future.",
  keywords = "AI consciousness, quantum computing, space technology, metaverse, cybersecurity, futuristic technology, 2045, Zion Tech Group",
  ogImage = "https://ziontechgroup.com/og-image-2045.jpg",
  canonical = "https://ziontechgroup.com"
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Canonical */}
        <link rel="canonical" href={canonical} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
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
              "description": "Revolutionary AI consciousness, quantum computing, and space technology solutions",
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
                "https://facebook.com/ziontechgroup",
                "https://twitter.com/ziontechgroup",
                "https://linkedin.com/company/ziontechgroup",
                "https://youtube.com/ziontechgroup",
                "https://github.com/ziontechgroup"
              ]
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Navigation */}
        <EnhancedNavigation2025 />
        
        {/* Main Content */}
        <main className="relative z-10">
          {children}
        </main>
        
        {/* Footer */}
        <UltraFuturisticFooter2044 />
      </div>
    </>
  );
};

export default UltraFuturisticLayout2045;