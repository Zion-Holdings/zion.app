import React from 'react';
import Head from 'next/head';
import Enhanced2026ServicesShowcaseV4 from '../components/sections/Enhanced2026ServicesShowcaseV4';
import UltraAdvancedNavigation2026 from '../components/layout/UltraAdvancedNavigation2026';
import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground';

export default function Enhanced2026ServicesShowcaseV4Page() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <>
      <Head>
        <title>Revolutionary 2026 Services - Zion Tech Group</title>
        <meta name="description" content="Discover the future of technology with our cutting-edge micro SAAS, AI, and enterprise solutions. Transform your business with services that are years ahead of the competition." />
        <meta name="keywords" content="2026 services, AI services, quantum technology, micro SAAS, enterprise IT, emerging technology, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Revolutionary 2026 Services - Zion Tech Group" />
        <meta property="og:description" content="Discover the future of technology with our cutting-edge micro SAAS, AI, and enterprise solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/enhanced-2026-services-showcase-v4" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image-2026-services.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Revolutionary 2026 Services - Zion Tech Group" />
        <meta name="twitter:description" content="Discover the future of technology with our cutting-edge micro SAAS, AI, and enterprise solutions." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image-2026-services.jpg" />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e293b" />
        <meta name="msapplication-TileColor" content="#1e293b" />
        
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
              "description": "Leading provider of revolutionary 2026 technology services including AI, quantum computing, and enterprise solutions.",
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
                "https://ziontechgroup.com",
                "https://github.com/Zion-Holdings"
              ]
            })
          }}
        />
      </Head>

      <UltraQuantumHolographicBackground 
        intensity="extreme" 
        colorScheme="neural-network"
        particleCount={500}
        animationSpeed={2.5}
        enableHolographic={true}
        enableQuantumEffects={true}
        enableNeuralNetwork={true}
        enableCosmicWaves={true}
        enableFloatingElements={true}
      >
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Navigation */}
          <UltraAdvancedNavigation2026 />
          
          {/* Main Content */}
          <main>
            <Enhanced2026ServicesShowcaseV4 />
          </main>
          
          {/* Footer Contact Information */}
          <footer className="relative z-10 bg-black/20 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Company Info */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
                <p className="text-gray-300 mb-4">
                  Leading the future of technology with revolutionary 2026 services and solutions.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://ziontechgroup.com"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
              
              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
                <div className="space-y-2 text-gray-300">
                  <p>
                    <span className="font-medium">Phone:</span>{' '}
                    <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300">
                      +1 302 464 0950
                    </a>
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{' '}
                    <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">
                      kleber@ziontechgroup.com
                    </a>
                  </p>
                  <p>
                    <span className="font-medium">Address:</span><br />
                    <span className="text-gray-300">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </span>
                  </p>
                </div>
              </div>
              
              {/* Services Overview */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
                <div className="space-y-2 text-gray-300">
                  <p>• AI & Machine Learning</p>
                  <p>• Quantum Technology</p>
                  <p>• Enterprise IT Solutions</p>
                  <p>• Micro SAAS Platforms</p>
                  <p>• Emerging Technologies</p>
                  <p>• Cybersecurity Solutions</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/10 mt-8 pt-8 text-center">
              <p className="text-gray-400">
                © 2026 Zion Tech Group. All rights reserved. | 
                <a href="https://ziontechgroup.com/privacy" className="text-purple-400 hover:text-purple-300 ml-2">
                  Privacy Policy
                </a> | 
                <a href="https://ziontechgroup.com/terms" className="text-purple-400 hover:text-purple-300 ml-2">
                  Terms of Service
                </a>
              </p>
            </div>
          </div>
        </footer>
        </div>
      </UltraQuantumHolographicBackground>
    </>
  );
}