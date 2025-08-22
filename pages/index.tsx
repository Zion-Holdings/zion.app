import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import UltraAdvancedFuturisticHero2025 from '../components/sections/UltraAdvancedFuturisticHero2025';
import UltraAdvancedServicesShowcase2025 from '../components/sections/UltraAdvancedServicesShowcase2025';
import UltraAdvancedFuturisticBackground2025 from '../components/backgrounds/UltraAdvancedFuturisticBackground2025';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Revolutionary Technology Solutions | AI, Quantum Computing, IT Infrastructure</title>
        <meta name="description" content="Transform your business with cutting-edge AI, quantum computing, and innovative micro SAAS solutions. Leading the future of technology with Zion Tech Group." />
        <meta name="keywords" content="AI services, quantum computing, IT infrastructure, micro SAAS, technology solutions, Zion Tech Group, artificial intelligence, machine learning, business automation" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI, quantum computing, and innovative micro SAAS solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI, quantum computing, and innovative micro SAAS solutions." />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ziontechgroup.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
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
              "description": "Leading the future of technology with revolutionary AI, quantum computing, and cutting-edge innovations that transform businesses and accelerate human progress.",
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
                "https://linkedin.com/company/ziontechgroup",
                "https://twitter.com/ziontechgroup",
                "https://github.com/ziontechgroup",
                "https://youtube.com/@ziontechgroup"
              ],
              "serviceType": [
                "Artificial Intelligence Services",
                "Quantum Computing Solutions",
                "IT Infrastructure Services",
                "Micro SAAS Solutions",
                "Business Automation",
                "Emerging Technology Consulting"
              ]
            })
          }}
        />
      </Head>

      <Layout>
        {/* Futuristic Background */}
        <UltraAdvancedFuturisticBackground2025 />
        
        {/* Hero Section */}
        <UltraAdvancedFuturisticHero2025 />
        
        {/* Services Showcase */}
        <UltraAdvancedServicesShowcase2025 />
        
        {/* Additional sections can be added here */}
        <section className="relative bg-black text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent">
                Ready to Get Started?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join hundreds of businesses already transforming their operations with our cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 text-lg"
              >
                Contact Us Today
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 text-lg"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
