import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import UltraAdvancedNavigation2026 from '../components/layout/UltraAdvancedNavigation2026';
import Enhanced2026ServicesShowcaseV3 from '../components/sections/Enhanced2026ServicesShowcaseV3';
import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground';

export default function ServicesShowcase2026V3() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <UltraQuantumHolographicBackground 
      intensity="extreme" 
      colorScheme="neural-network"
      particleCount={500}
      animationSpeed={3}
    >
      <Head>
        <title>Revolutionary 2026 Services Showcase | Zion Tech Group</title>
        <meta name="description" content="Discover our cutting-edge 2026 micro SAAS, AI, and emerging technology solutions. Transform your business with revolutionary services designed for the future." />
        <meta name="keywords" content="2026 services, AI services, quantum computing, micro SAAS, emerging technology, blockchain, metaverse, autonomous systems, biotech AI, climate AI" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Revolutionary 2026 Services Showcase | Zion Tech Group" />
        <meta property="og:description" content="Discover our cutting-edge 2026 micro SAAS, AI, and emerging technology solutions. Transform your business with revolutionary services designed for the future." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/2026-services-showcase-v3" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image-2026-services.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Revolutionary 2026 Services Showcase | Zion Tech Group" />
        <meta name="twitter:description" content="Discover our cutting-edge 2026 micro SAAS, AI, and emerging technology solutions." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image-2026-services.jpg" />
        <link rel="canonical" href="https://ziontechgroup.com/2026-services-showcase-v3" />
      </Head>

      <div className="min-h-screen">
        {/* Navigation */}
        <UltraAdvancedNavigation2026 />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Revolutionary 2026 Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of technology with our cutting-edge micro SAAS, AI, and emerging technology solutions. 
                Transform your business with services designed for tomorrow's challenges.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-200"
                >
                  Explore Services
                </motion.a>
                <motion.a
                  href={`tel:${contactInfo.mobile}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-purple-500/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-200"
                >
                  Get Started
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Showcase */}
        <div id="services">
          <Enhanced2026ServicesShowcaseV3 />
        </div>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </span>
              </h2>
              <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already leveraging our revolutionary 2026 services to achieve unprecedented growth and innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.a
                  href={`tel:${contactInfo.mobile}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-200"
                >
                  <span>Call {contactInfo.mobile}</span>
                </motion.a>
                
                <motion.a
                  href={`mailto:${contactInfo.email}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-8 py-4 border-2 border-purple-500/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-200"
                >
                  <span>Email Us</span>
                </motion.a>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-cyan-900/20 rounded-2xl border border-purple-500/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-white font-medium">{contactInfo.mobile}</div>
                    <div className="text-gray-400 text-sm">Mobile</div>
                  </div>
                  <div>
                    <div className="text-white font-medium">{contactInfo.email}</div>
                    <div className="text-gray-400 text-sm">Email</div>
                  </div>
                  <div>
                    <div className="text-white font-medium">{contactInfo.address}</div>
                    <div className="text-gray-400 text-sm">Address</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraQuantumHolographicBackground>
  );
}