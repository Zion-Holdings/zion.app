import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import EnhancedServiceShowcase from '../components/sections/EnhancedServiceShowcase';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';

import { innovativeAIServices } from '../data/innovative-ai-services';
import { quantumSpaceServices } from '../data/quantum-space-services';
import { enterpriseITServices } from '../data/enterprise-it-services';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { emergingTechnologyServices } from '../data/emerging-technology-services';
import { comprehensiveITSolutions } from '../data/comprehensive-it-solutions';
import { realMarketServices } from '../data/real-market-services';
import { serviceExpansions2025 } from '../data/service-expansions-2025';
import { realOperationalServices } from '../data/real-operational-services';
import { verifiedRealServices2025Batch2 } from '../data/verified-real-services-2025-batch2';
import { professionalServices } from '../data/professional-services';
import { newOperationalServices2025 } from '../data/new-operational-services-2025';
import { innovative2025Services } from '../data/innovative-2025-services';
import { emergingTech2025Services } from '../data/emerging-tech-2025-services';
import { revolutionary2025Services } from '../data/revolutionary-2025-services';
import { nextGenInnovations2025 } from '../data/next-gen-innovations-2025';
import { innovative2025Batch3Services } from '../data/innovative-2025-batch3';

export default function HomePage() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all services for comprehensive showcase
  const allServices = [
    ...enhancedRealMicroSaasServices,
    ...innovativeMicroSaasServices,
    ...innovativeAIServices,
    ...quantumSpaceServices,
    ...enterpriseITServices,
    ...nextGenerationAIServices,
    ...emergingTechnologyServices,
    ...comprehensiveITSolutions,
    ...realMarketServices,
    ...serviceExpansions2025,
    ...realOperationalServices,
    ...newOperationalServices2025,
    ...verifiedRealServices2025Batch2,
    ...innovative2025Services,
    ...emergingTech2025Services,
    ...revolutionary2025Services,
    ...nextGenInnovations2025,
    ...innovative2025Batch3Services
  ];

  const featuredOffers = professionalServices.slice(0, 3);

  // Service statistics
  const serviceStats = {
    totalServices: allServices.length,
    aiServices: nextGenerationAIServices.length + innovativeAIServices.length + realMarketServices.filter(s => s.category.includes('AI')).length + revolutionary2025Services.filter(s => s.category.includes('AI')).length,
    emergingTech: emergingTechnologyServices.length + emergingTech2025Services.length,
    itSolutions: comprehensiveITSolutions.length + enterpriseITServices.length,
    microSaas: enhancedRealMicroSaasServices.length + innovativeMicroSaasServices.length,
    revolutionaryServices: revolutionary2025Services.length + nextGenInnovations2025.length
  };

  return (
    <UltraAdvancedFuturisticBackground 
      intensity="extreme" 
      colorScheme="quantum-fusion"
      particleCount={500}
      animationSpeed={2.0}
      enableHolographic={true}
      enableQuantumEffects={true}
    >
      <div className="min-h-screen">
        <Head>
          <title>Zion Tech Group - Revolutionary AI, Quantum & IT Services | 1000+ Solutions</title>
          <meta name="description" content="Zion Tech Group offers 1000+ revolutionary AI, quantum computing, and IT services. Achieve 1000% ROI with our cutting-edge solutions. Contact: +1 302 464 0950" />
          <meta name="keywords" content="AI services, quantum computing, IT services, micro SaaS, cybersecurity, cloud migration, neural interface, quantum internet, blockchain, metaverse, IoT, edge computing, consciousness simulation, quantum brain interface" />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Zion Tech Group - Revolutionary AI, Quantum & IT Services" />
          <meta property="og:description" content="1000+ cutting-edge services with 1000% ROI guarantee. Contact: +1 302 464 0950" />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com" />
        </Head>

        {/* Ultra Advanced Navigation */}
        <UltraAdvancedNavigation />

        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Futuristic Logo Animation */}
              <motion.div
                initial={{ scale: 0.8, rotate: -5 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="inline-block mb-8"
              >
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/25 mx-auto">
                    <span className="text-4xl">🚀</span>
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-25"></div>
                </div>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                Revolutionary AI, Quantum Computing & IT Services
                <br />
                <span className="text-cyan-400 font-semibold">1000+ Cutting-Edge Solutions</span> with 
                <span className="text-purple-400 font-semibold"> 1000% ROI Guarantee</span>
              </motion.p>

              {/* Service Statistics */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12"
              >
                <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{serviceStats.totalServices}+</div>
                  <div className="text-gray-400 text-sm">Total Services</div>
                </div>
                <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{serviceStats.aiServices}+</div>
                  <div className="text-gray-400 text-sm">AI Services</div>
                </div>
                <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-pink-400 mb-2">{serviceStats.emergingTech}+</div>
                  <div className="text-gray-400 text-sm">Emerging Tech</div>
                </div>
                <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-green-400 mb-2">{serviceStats.itSolutions}+</div>
                  <div className="text-gray-400 text-sm">IT Solutions</div>
                </div>
                <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">{serviceStats.microSaas}+</div>
                  <div className="text-gray-400 text-sm">Micro SaaS</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
                >
                  Get Started Today
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Explore Services
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Service Showcase */}
        <EnhancedServiceShowcase
          services={allServices}
          title="Revolutionary AI, Quantum & IT Services"
          subtitle="Discover 1000+ cutting-edge solutions that deliver 1000% ROI through breakthrough technology"
          maxServices={12}
        />

        {/* Contact Information Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of companies already leveraging our revolutionary AI and quantum solutions
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3 text-cyan-300">
                  <span className="text-2xl">📱</span>
                  <span className="font-semibold">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-purple-300">
                  <span className="text-2xl">✉️</span>
                  <span className="font-semibold">{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-pink-300">
                  <span className="text-2xl">📍</span>
                  <span className="font-semibold text-sm">{contactInfo.address}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us Now
                </a>
                <a
                  href="/pricing"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
                >
                  View Pricing
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}
