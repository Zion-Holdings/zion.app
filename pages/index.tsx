import React from 'react';
import Head from 'next/head';
import Homepage2025 from '../components/Homepage2025';

export default function Home() {
  return (
    <>
      <Head>
        <title>ZionTech Group - Future of Technology | Revolutionary Micro SAAS, AI & IT Services</title>
        <meta name="description" content="ZionTech Group offers revolutionary micro SAAS services, cutting-edge AI solutions, advanced IT services, and emerging technologies. Transform your business with our innovative solutions. Contact us at +1 302 464 0950 or kleber@ziontechgroup.com" />
        <meta name="keywords" content="micro SAAS, AI services, IT solutions, emerging technologies, quantum computing, space mining, brain-computer interface, autonomous vehicles, ZionTech Group" />
        <meta name="author" content="ZionTech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="ZionTech Group - Future of Technology" />
        <meta property="og:description" content="Revolutionary micro SAAS services, cutting-edge AI solutions, and emerging technologies that transform businesses and industries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:site_name" content="ZionTech Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ZionTech Group - Future of Technology" />
        <meta name="twitter:description" content="Revolutionary micro SAAS services, cutting-edge AI solutions, and emerging technologies." />
        
        {/* Contact Information */}
        <meta name="contact:phone" content="+1 302 464 0950" />
        <meta name="contact:email" content="kleber@ziontechgroup.com" />
        <meta name="contact:address" content="364 E Main St STE 1008 Middletown DE 19709" />
        <meta name="contact:website" content="https://ziontechgroup.com" />
        
        {/* Business Information */}
        <meta name="business:name" content="ZionTech Group" />
        <meta name="business:type" content="Technology Services" />
        <meta name="business:services" content="Micro SAAS, AI Services, IT Solutions, Emerging Technologies" />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ZionTech Group",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png",
              "description": "Revolutionary technology solutions that transform businesses and industries.",
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
              ],
              "serviceType": [
                "Micro SAAS Services",
                "AI Services",
                "IT Solutions",
                "Emerging Technologies"
              ]
            })
          }}
        />
      </Head>

      <main>
        <Homepage2025 />
      </main>
    </>
  );
}
