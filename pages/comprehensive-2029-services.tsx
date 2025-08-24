import React from 'react';
import Head from 'next/head';
import Comprehensive2029ServicesShowcase from '../components/sections/Comprehensive2029ServicesShowcase';
import UltraFuturisticNavigation2031 from '../components/layout/UltraFuturisticNavigation2031';
import UltraFuturisticFooter2030 from '../components/layout/UltraFuturisticFooter2030';

export default function Comprehensive2029ServicesPage() {
  return (
    <>
      <Head>
        <title>2029 Cutting-Edge Innovation Hub - Zion Tech Group</title>
        <meta name="description" content="Discover the future of technology with our comprehensive suite of revolutionary AI, quantum computing, space technology, and emerging tech solutions. Transform your business with cutting-edge innovations." />
        <meta name="keywords" content="AI consciousness, quantum computing, space mining, DNA computing, neuromorphic computing, swarm robotics, photonic computing, metaverse development, AI healthcare, blockchain supply chain, quantum security, business intelligence" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="2029 Cutting-Edge Innovation Hub - Zion Tech Group" />
        <meta property="og:description" content="Discover the future of technology with our comprehensive suite of revolutionary AI, quantum computing, space technology, and emerging tech solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/comprehensive-2029-services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image-2029-services.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2029 Cutting-Edge Innovation Hub - Zion Tech Group" />
        <meta name="twitter:description" content="Discover the future of technology with our comprehensive suite of revolutionary AI, quantum computing, space technology, and emerging tech solutions." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image-2029-services.jpg" />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
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
              "description": "Leading provider of cutting-edge technology solutions including AI consciousness, quantum computing, space technology, and emerging tech innovations.",
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
                "https://ziontechgroup.com"
              ]
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-black">
        <UltraFuturisticNavigation2031 />
        <main>
          <Comprehensive2029ServicesShowcase />
        </main>
        <UltraFuturisticFooter2030 />
      </div>
    </>
  );
}