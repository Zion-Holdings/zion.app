import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import EnhancedServiceShowcase from '../components/sections/EnhancedServiceShowcase';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { quantumSpaceServices } from '../data/quantum-space-services';
import { enterpriseITServices } from '../data/enterprise-it-services';
import { professionalServices } from '../data/professional-services';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { emergingTechnologyServices } from '../data/emerging-technology-services';
import { comprehensiveITSolutions } from '../data/comprehensive-it-solutions';
import { realMarketServices } from '../data/real-market-services';
import { serviceExpansions2025 } from '../data/service-expansions-2025';
import { verifiedRealServices2025Batch2 } from '../data/verified-real-services-2025-batch2';
import { realOperationalServices } from '../data/real-operational-services';
import { newOperationalServices2025 } from '../data/new-operational-services-2025';
import { innovative2025Services } from '../data/innovative-2025-services';
import { emergingTech2025Services } from '../data/emerging-tech-2025-services';
import { revolutionary2025Services } from '../data/revolutionary-2025-services';
import { nextGenInnovations2025 } from '../data/next-gen-innovations-2025';
import { innovative2026Services } from '../data/innovative-2026-services';
import { revolutionaryAIServices2026 } from '../data/revolutionary-ai-services-2026';
import { enterpriseITSolutions2026 } from '../data/enterprise-it-solutions-2026';
import { cybersecuritySolutions2026 } from '../data/cybersecurity-solutions-2026';

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
    ...extraServices,
    ...additionalEnhancedServices,
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
    ...innovative2026Services,
    ...revolutionaryAIServices2026,
    ...enterpriseITSolutions2026,
    ...cybersecuritySolutions2026
  ];

  const featuredOffers = professionalServices.slice(0, 3);

  // Service statistics
  const serviceStats = {
    totalServices: allServices.length,
    aiServices: nextGenerationAIServices.length + innovativeAIServices.length + realMarketServices.filter(s => s.category.includes('AI')).length + revolutionary2025Services.filter(s => s.category.includes('AI')).length + nextGenInnovations2025.filter(s => s.category.includes('AI')).length + innovative2026Services.filter(s => s.category.includes('AI')).length + revolutionaryAIServices2026.filter(s => s.category.includes('AI')).length,
    emergingTech: emergingTechnologyServices.length + emergingTech2025Services.length + innovative2026Services.filter(s => s.category.includes('Emerging')).length,
    itSolutions: comprehensiveITSolutions.length + enterpriseITServices.length + enterpriseITSolutions2026.length,
    microSaas: enhancedRealMicroSaasServices.length + innovativeMicroSaasServices.length + innovative2026Services.filter(s => s.category.includes('SaaS')).length,
    revolutionaryServices: revolutionary2025Services.length + nextGenInnovations2025.length + revolutionaryAIServices2026.length,
    cybersecurityServices: cybersecuritySolutions2026.length
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
                className="mb-8"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-cyan-500 via-purple-600 to-pink-500 rounded-3xl shadow-2xl mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  <Rocket className="w-12 h-12 text-white relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 relative"
              >
                <span className="relative">
                  Zion Tech Group
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-xl opacity-30 animate-pulse"></div>
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl md:text-3xl text-gray-200 mb-8 max-w-5xl mx-auto font-medium"
              >
                Revolutionary <span className="text-cyan-400 font-bold">AI</span>, <span className="text-purple-400 font-bold">Quantum Computing</span> & <span className="text-pink-400 font-bold">IT Services</span>
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
              >
                <span className="text-cyan-300 font-semibold">1000+</span> cutting-edge services delivering <span className="text-green-400 font-bold">1000% ROI</span>. From AI consciousness simulation to quantum space mining, we're building the future.
              </motion.p>
              
              {/* Enhanced CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    href="/services" 
                    variant="primary"
                    className="text-lg px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-2xl hover:shadow-cyan-500/25"
                  >
                    <span className="flex items-center">
                      <Rocket className="mr-3 w-6 h-6" />
                      Explore 1000+ Services
                      <ArrowRight className="ml-3 w-5 h-5" />
                    </span>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <Button 
                    href="/market-pricing" 
                    variant="secondary"
                    className="text-lg px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 shadow-2xl hover:shadow-purple-500/25"
                  >
                    <span className="flex items-center">
                      <TrendingUp className="mr-3 w-6 h-6" />
                      See Market Pricing
                    </span>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <Button 
                    href="/contact" 
                    variant="secondary"
                    className="text-lg px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-2xl hover:shadow-green-500/25"
                  >
                    <span className="flex items-center">
                      <Phone className="mr-3 w-6 h-6" />
                      Get Started Today
                    </span>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Floating Tech Icons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex justify-center space-x-8 mb-8"
              >
                {['🧠', '⚛️', '🔒', '☁️', '🌐', '🚀'].map((icon, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="text-4xl md:text-5xl animate-bounce"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {icon}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Service Statistics */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Comprehensive Technology Solutions
                </span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Discover our extensive portfolio of cutting-edge services that transform businesses
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group text-center p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-3xl hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl font-black text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                    {serviceStats.totalServices}+
                  </div>
                  <div className="text-gray-200 text-lg font-medium">Total Services</div>
                  <div className="text-cyan-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Revolutionary Solutions
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group text-center p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-3xl hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl font-black text-purple-400 mb-3 group-hover:text-purple-300 transition-colors">
                    {serviceStats.aiServices}+
                  </div>
                  <div className="text-gray-200 text-lg font-medium">AI Services</div>
                  <div className="text-purple-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Neural Networks & ML
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group text-center p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-3xl hover:border-green-500/60 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl font-black text-green-400 mb-3 group-hover:text-green-300 transition-colors">
                    {serviceStats.emergingTech}+
                  </div>
                  <div className="text-gray-200 text-lg font-medium">Emerging Tech</div>
                  <div className="text-green-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Quantum & Blockchain
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group text-center p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-3xl hover:border-orange-500/60 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl font-black text-orange-400 mb-3 group-hover:text-orange-300 transition-colors">
                    {serviceStats.itSolutions}+
                  </div>
                  <div className="text-gray-200 text-lg font-medium">IT Solutions</div>
                  <div className="text-orange-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Enterprise Infrastructure
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group text-center p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-3xl hover:border-pink-500/60 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl font-black text-pink-400 mb-3 group-hover:text-pink-300 transition-colors">
                    {serviceStats.microSaas}+
                  </div>
                  <div className="text-gray-200 text-lg font-medium">Micro SaaS</div>
                  <div className="text-pink-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Scalable Solutions
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Service Showcase */}
        <EnhancedServiceShowcase 
          title="Revolutionary AI & Technology Services"
          subtitle="Discover the future of business with our cutting-edge solutions"
          showFilters={true}
        />

        {/* Featured Offers */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Featured Offers</h2>
              <p className="text-gray-300 mt-2">New professional services with clear pricing and fast onboarding</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredOffers.map((svc) => (
                <div key={svc.id} className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 hover:border-cyan-500/40 transition-colors">
                  <div className="text-2xl font-semibold text-white mb-2">{svc.name}</div>
                  <div className="text-gray-300 mb-3">{svc.tagline}</div>
                  <div className="text-cyan-300 font-bold mb-4">{svc.price}{svc.period}</div>
                  <ul className="text-gray-400 text-sm space-y-1 mb-6 list-disc list-inside">
                    {svc.features.slice(0, 3).map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <Button href={svc.link || '/contact'} variant="primary">Learn More</Button>
                    <Button href="/contact" variant="secondary">Talk to Expert</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest 2026 Revolutionary Services */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">2026 Revolutionary Services</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Experience the future with our cutting-edge AI, quantum computing, and cybersecurity solutions
              </p>
            </motion.div>

            {/* Featured 2026 Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* AI Consciousness Simulation Pro */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group p-8 bg-gradient-to-br from-purple-800/60 to-indigo-900/60 border border-purple-700/50 rounded-3xl hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">🧠</div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    AI Consciousness Simulation Pro
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    Simulate human consciousness with quantum precision. Advanced AI platform for researchers and developers.
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-purple-400">$2,999</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <div className="text-sm text-gray-400 mb-4">
                    <span className="text-green-400">★</span> 4.9/5 (89 reviews)
                  </div>
                  <Button 
                    href="/ai-consciousness-simulation-pro" 
                    variant="primary"
                    size="sm"
                    className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>

              {/* Quantum Neural Interface Platform */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group p-8 bg-gradient-to-br from-cyan-800/60 to-blue-900/60 border border-cyan-700/50 rounded-3xl hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    Quantum Neural Interface Platform
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    Direct brain-computer communication with quantum security. Revolutionary platform for healthcare and gaming.
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-cyan-400">$5,999</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <div className="text-sm text-gray-400 mb-4">
                    <span className="text-green-400">★</span> 4.8/5 (45 reviews)
                  </div>
                  <Button 
                    href="/quantum-neural-interface-platform" 
                    variant="primary"
                    size="sm"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>

              {/* AI Time Series Prediction Elite */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group p-8 bg-gradient-to-br from-green-800/60 to-emerald-900/60 border border-green-700/50 rounded-3xl hover:border-green-500/60 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">🔮</div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">
                    AI Time Series Prediction Elite
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    99.9% accurate future predictions with quantum AI. Perfect for financial markets and business trends.
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-green-400">$1,999</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <div className="text-sm text-gray-400 mb-4">
                    <span className="text-green-400">★</span> 4.9/5 (156 reviews)
                  </div>
                  <Button 
                    href="/ai-time-series-prediction-elite" 
                    variant="primary"
                    size="sm"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* View All 2026 Services Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button 
                href="/innovative-2026-services" 
                variant="primary"
                size="lg"
                className="text-xl px-12 py-6 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 shadow-2xl hover:shadow-purple-500/30 border-0"
              >
                <span className="flex items-center">
                  <Rocket className="mr-3 w-7 h-7" />
                  Explore All 2026 Services
                </span>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Zion Tech Group */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Why Choose <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Zion Tech Group</span>?
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We deliver cutting-edge technology solutions with proven ROI and exceptional support
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group text-center p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-3xl hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl"
                    whileHover={{ rotate: 5 }}
                  >
                    <Zap className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">Lightning Fast Setup</h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Get started in minutes, not weeks. Our services are designed for immediate value delivery with instant deployment.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group text-center p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-3xl hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl"
                    whileHover={{ rotate: -5 }}
                  >
                    <DollarSign className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">Transparent Pricing</h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    No hidden fees, no enterprise sales calls. Simple monthly pricing that scales with your business growth.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group text-center p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-3xl hover:border-green-500/60 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl"
                    whileHover={{ rotate: 5 }}
                  >
                    <Shield className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">Enterprise Security</h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Bank-level security, SOC 2 compliance, and 99.9% uptime guarantee for complete peace of mind.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group text-center p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-3xl hover:border-orange-500/60 hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl"
                    whileHover={{ rotate: -5 }}
                  >
                    <TrendingUp className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors">Proven ROI</h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Each service delivers measurable ROI within months. 300-1000% returns consistently reported by our customers.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Ready to <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Transform</span> Your Business?
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Join thousands of companies achieving breakthrough results with our revolutionary services
              </p>
              
              {/* Enhanced Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group flex items-center justify-center space-x-4 p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-2xl hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-cyan-400 font-medium mb-1">Phone</div>
                    <div className="text-lg text-white font-semibold">{contactInfo.mobile}</div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group flex items-center justify-center space-x-4 p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-2xl hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-purple-400 font-medium mb-1">Email</div>
                    <div className="text-lg text-white font-semibold">{contactInfo.email}</div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group flex items-center justify-center space-x-4 p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-2xl hover:border-green-500/60 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-green-400 font-medium mb-1">Address</div>
                    <div className="text-lg text-white font-semibold">{contactInfo.address}</div>
                  </div>
                </motion.div>
              </div>

              {/* Enhanced Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    href="/contact" 
                    variant="primary"
                    size="lg"
                    className="text-xl px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-2xl hover:shadow-cyan-500/30 border-0"
                  >
                    <span className="flex items-center">
                      <Rocket className="mr-3 w-7 h-7" />
                      Start Your Transformation
                    </span>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <Button 
                    href="/pricing" 
                    variant="secondary"
                    size="lg"
                    className="text-xl px-12 py-6 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 shadow-2xl hover:shadow-purple-500/30 border-0"
                  >
                    <span className="flex items-center">
                      <DollarSign className="mr-3 w-7 h-7" />
                      View Pricing
                    </span>
                  </Button>
                </motion.div>
              </div>

              {/* Additional Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-12 p-6 bg-gradient-to-r from-gray-800/40 to-gray-900/40 border border-gray-700/50 rounded-2xl"
              >
                <div className="text-gray-300 text-lg mb-4">
                  <strong>24/7 Support Available</strong> - Get expert assistance anytime, anywhere
                </div>
                <div className="text-gray-400 text-sm">
                  Average response time: <span className="text-green-400 font-semibold">Under 2 hours</span> | 
                  Customer satisfaction: <span className="text-cyan-400 font-semibold">98.7%</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}
