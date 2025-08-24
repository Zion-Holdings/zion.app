import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import UltraFuturisticBackground2026 from '../components/ui/UltraFuturisticBackground2026';
import UltraAdvancedNavigation2026 from '../components/layout/UltraAdvancedNavigation2026';
import Enhanced2026ServicesShowcaseV4 from '../components/sections/Enhanced2026ServicesShowcaseV4';
import { innovative2026MicroSaasServicesV4 } from '../data/innovative-2026-micro-saas-v4';
import { emergingTech2026ServicesV4 } from '../data/emerging-tech-2026-services-v4';
import { enterpriseIT2026ServicesV4 } from '../data/enterprise-it-2026-services-v4';
import { innovative2026AIServicesV4 } from '../data/innovative-2026-ai-services-v4';

export default function ServicesShowcase2026V4() {
  const allServices = [
    ...innovative2026MicroSaasServicesV4,
    ...emergingTech2026ServicesV4,
    ...enterpriseIT2026ServicesV4,
    ...innovative2026AIServicesV4
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <UltraFuturisticBackground2026>
      <div className="min-h-screen">
        <Head>
          <title>2026 Revolutionary Services V4 - Zion Tech Group | Cutting-Edge AI & Quantum Solutions</title>
          <meta name="description" content="Experience the future with our revolutionary 2026 services including AI consciousness interface, quantum AI hybrid computing, neuromorphic computing, and more. Contact: +1 302 464 0950" />
          <meta name="keywords" content="2026 services, AI consciousness, quantum AI, neuromorphic computing, synthetic biology, holographic displays, autonomous drones, zero-trust security, data governance" />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="2026 Revolutionary Services V4 - Zion Tech Group" />
          <meta property="og:description" content="Cutting-edge AI, quantum computing, and emerging technology services for 2026" />
          <meta property="og:url" content="https://ziontechgroup.com/2026-services-showcase-v4" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/2026-services-showcase-v4" />
        </Head>

        {/* Ultra Advanced Navigation */}
        <UltraAdvancedNavigation2026 />

        {/* Hero Section */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  2026 Revolutionary Services
                </span>
                <br />
                <span className="text-white">Version 4.0</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                Experience the future of technology with our cutting-edge AI, quantum computing, and emerging technology solutions that are reshaping industries and unlocking unprecedented possibilities.
              </p>
              
              {/* Service Categories */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">AI Services</h3>
                  <p className="text-sm text-gray-400">Consciousness & Intelligence</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">⚛️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Quantum Tech</h3>
                  <p className="text-sm text-gray-400">Computing & Security</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Emerging Tech</h3>
                  <p className="text-sm text-gray-400">Neuromorphic & Holographic</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Enterprise IT</h3>
                  <p className="text-sm text-gray-400">Operations & Security</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Showcase */}
        <Enhanced2026ServicesShowcaseV4
          services={allServices}
          title="Revolutionary 2026 Services V4"
          subtitle="Experience the latest innovations in AI, quantum computing, and emerging technologies"
        />

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
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Ready to Experience the Future?
                </span>
              </h2>
              <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
                Join the revolution and transform your business with our cutting-edge 2026 services. Contact us today to get started.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.a
                  href={`tel:${contactInfo.mobile}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-200"
                >
                  <span>Call {contactInfo.mobile}</span>
                </motion.a>
                
                <motion.a
                  href={`mailto:${contactInfo.email}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-200"
                >
                  <span>Email Us</span>
                </motion.a>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 rounded-2xl border border-cyan-500/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-cyan-400 font-medium mb-1">Phone</p>
                    <p className="text-white font-medium">{contactInfo.mobile}</p>
                  </div>
                  <div>
                    <p className="text-purple-400 font-medium mb-1">Email</p>
                    <p className="text-white font-medium">{contactInfo.email}</p>
                  </div>
                  <div>
                    <p className="text-pink-400 font-medium mb-1">Address</p>
                    <p className="text-white font-medium">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground2026>
  );
}