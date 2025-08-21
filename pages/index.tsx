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
import { innovativeMicroSaasServicesV3 } from '../data/innovative-micro-saas-v3';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { quantumSpaceServices } from '../data/quantum-space-services';
import { quantumAIServices2025 } from '../data/quantum-ai-services-2025';
import { enterpriseITServices } from '../data/enterprise-it-services';
import { professionalServices } from '../data/professional-services';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { emergingTechnologyServices } from '../data/emerging-technology-services';
import { emergingTechServices2025 } from '../data/emerging-tech-services-2025';
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
import { revolutionary2025Innovations } from '../data/revolutionary-2025-innovations';
import { emergingTech2025Innovations } from '../data/emerging-tech-2025-innovations';
import { enterpriseIT2025Services } from '../data/enterprise-it-2025-services';

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
    ...innovativeMicroSaasServicesV3,
    ...extraServices,
    ...additionalEnhancedServices,
    ...innovativeAIServices,
    ...quantumSpaceServices,
    ...quantumAIServices2025,
    ...enterpriseITServices,
    ...nextGenerationAIServices,
    ...emergingTechnologyServices,
    ...emergingTechServices2025,
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
    ...revolutionary2025Innovations,
    ...emergingTech2025Innovations,
    ...enterpriseIT2025Services
  ];

  const featuredOffers = professionalServices.slice(0, 3);

  // Service statistics
  const serviceStats = {
    totalServices: allServices.length,
    aiServices: nextGenerationAIServices.length + innovativeAIServices.length + realMarketServices.filter(s => s.category.includes('AI')).length + revolutionary2025Services.filter(s => s.category.includes('AI')).length + nextGenInnovations2025.filter(s => s.category.includes('AI')).length + revolutionary2025Innovations.filter(s => s.category.includes('AI')).length + emergingTech2025Innovations.filter(s => s.category.includes('AI')).length,
    emergingTech: emergingTechnologyServices.length + emergingTech2025Services.length + emergingTech2025Innovations.length,
    itSolutions: comprehensiveITSolutions.length + enterpriseITServices.length + enterpriseIT2025Services.length,
    microSaas: enhancedRealMicroSaasServices.length + innovativeMicroSaasServices.length,
    revolutionaryServices: revolutionary2025Services.length + nextGenInnovations2025.length + revolutionary2025Innovations.length,
    quantumServices: quantumSpaceServices.length + revolutionary2025Innovations.filter(s => s.category.includes('Quantum')).length + emergingTech2025Innovations.filter(s => s.category.includes('Quantum')).length,
    blockchainServices: emergingTech2025Innovations.filter(s => s.category.includes('Blockchain')).length,
    spaceTech: emergingTech2025Innovations.filter(s => s.category.includes('Space')).length
  };

  return (
    <UltraAdvancedFuturisticBackground 
      intensity="extreme" 
      colorScheme="quantum"
      particleCount={400}
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
                className="text-lg md:text-xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                <span className="text-cyan-300 font-semibold">{serviceStats.totalServices}+</span> cutting-edge services delivering <span className="text-green-400 font-bold">1000% ROI</span>. From AI consciousness simulation to quantum space mining, we're building the future.
              </motion.p>
              
              {/* Service Statistics Grid */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl font-bold text-cyan-400">{serviceStats.aiServices}+</div>
                  <div className="text-sm text-gray-300">AI Services</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl font-bold text-purple-400">{serviceStats.quantumServices}+</div>
                  <div className="text-sm text-gray-300">Quantum Solutions</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl font-bold text-green-400">{serviceStats.itSolutions}+</div>
                  <div className="text-sm text-gray-300">IT Solutions</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl font-bold text-pink-400">{serviceStats.emergingTech}+</div>
                  <div className="text-sm text-gray-300">Emerging Tech</div>
                </div>
              </motion.div>
              
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
                      Explore {serviceStats.totalServices}+ Services
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

        {/* Latest Innovations Showcase */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  2025 Revolutionary Innovations
                </span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Experience the future with our latest AI, quantum, and emerging technology breakthroughs
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Business Intelligence */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group p-6 bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border border-blue-700/50 rounded-2xl hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-bold text-white mb-3">AI Business Intelligence Suite</h3>
                  <p className="text-gray-300 text-sm mb-4">Transform data into actionable business insights with AI-powered analytics and predictive modeling.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-400">$299</span>
                    <span className="text-gray-400 text-sm">/month</span>
                  </div>
                  <div className="mt-4">
                    <Button href="/ai-business-intelligence" variant="primary" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Quantum Cybersecurity */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group p-6 bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-700/50 rounded-2xl hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">🔒</div>
                  <h3 className="text-xl font-bold text-white mb-3">Quantum Cybersecurity Platform</h3>
                  <p className="text-gray-300 text-sm mb-4">Next-generation security powered by quantum computing for unbreakable encryption.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-400">$599</span>
                    <span className="text-gray-400 text-sm">/month</span>
                  </div>
                  <div className="mt-4">
                    <Button href="/quantum-cybersecurity" variant="primary" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Blockchain Infrastructure */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group p-6 bg-gradient-to-br from-emerald-900/40 to-teal-900/40 border border-emerald-700/50 rounded-2xl hover:border-emerald-500/60 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">⛓️</div>
                  <h3 className="text-xl font-bold text-white mb-3">Blockchain Infrastructure Platform</h3>
                  <p className="text-gray-300 text-sm mb-4">Enterprise-grade blockchain infrastructure and development for Web3 applications.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-emerald-400">$499</span>
                    <span className="text-gray-400 text-sm">/month</span>
                  </div>
                  <div className="mt-4">
                    <Button href="/blockchain-infrastructure" variant="primary" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Space Technology */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group p-6 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-700/50 rounded-2xl hover:border-indigo-500/60 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold text-white mb-3">Space Technology Platform</h3>
                  <p className="text-gray-300 text-sm mb-4">Revolutionary space technology solutions for satellite management and space analytics.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-indigo-400">$899</span>
                    <span className="text-gray-400 text-sm">/month</span>
                  </div>
                  <div className="mt-4">
                    <Button href="/space-technology" variant="primary" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Metaverse Development */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group p-6 bg-gradient-to-br from-pink-900/40 to-rose-900/40 border border-pink-700/50 rounded-2xl hover:border-pink-500/60 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="text-xl font-bold text-white mb-3">Metaverse Development Platform</h3>
                  <p className="text-gray-300 text-sm mb-4">Build the future of digital experiences with immersive 3D worlds and VR/AR.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-pink-400">$299</span>
                    <span className="text-gray-400 text-sm">/month</span>
                  </div>
                  <div className="mt-4">
                    <Button href="/metaverse-development" variant="primary" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Enterprise IT Services */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group p-6 bg-gradient-to-br from-gray-800/40 to-slate-900/40 border border-gray-700/50 rounded-2xl hover:border-gray-500/60 hover:shadow-2xl hover:shadow-gray-500/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">🏢</div>
                  <h3 className="text-xl font-bold text-white mb-3">Enterprise IT Solutions</h3>
                  <p className="text-gray-300 text-sm mb-4">Comprehensive enterprise solutions including cloud migration, cybersecurity, and DevOps.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-400">From $599</span>
                    <span className="text-gray-400 text-sm">/month</span>
                  </div>
                  <div className="mt-4">
                    <Button href="/enterprise-it" variant="primary" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button href="/services" variant="secondary" size="lg" className="group">
                View All {serviceStats.totalServices}+ Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
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

        {/* Latest Innovative Services Showcase */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
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
                  Latest 2025 Innovations
                </span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Experience the future with our newest revolutionary services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Business Intelligence Suite */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border border-blue-500/30 rounded-2xl p-6 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">📊</div>
                  <div className="text-blue-400 font-bold text-lg">$299/month</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  AI Business Intelligence Suite
                </h3>
                <p className="text-gray-300 mb-4">
                  Transform data into actionable insights with AI-powered analytics, predictive modeling, and automated reporting.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 text-sm font-medium">400% ROI in 6 months</span>
                  <Link href="/ai-business-intelligence-suite" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Learn More →
                  </Link>
                </div>
              </motion.div>

              {/* Quantum-Secure Communication */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">🔐</div>
                  <div className="text-purple-400 font-bold text-lg">$599/month</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  Quantum-Secure Communication
                </h3>
                <p className="text-gray-300 mb-4">
                  Unbreakable encryption for the quantum era with quantum key distribution and quantum-resistant protocols.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 text-sm font-medium">500% ROI through security</span>
                  <Link href="/quantum-secure-communication" className="text-purple-400 hover:text-purple-300 transition-colors">
                    Learn More →
                  </Link>
                </div>
              </motion.div>

              {/* Neuromorphic Computing Platform */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group bg-gradient-to-br from-pink-900/40 to-rose-900/40 border border-pink-500/30 rounded-2xl p-6 hover:border-pink-400/60 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">🧠</div>
                  <div className="text-pink-400 font-bold text-lg">$1,499/month</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">
                  Neuromorphic Computing Platform
                </h3>
                <p className="text-gray-300 mb-4">
                  Brain-inspired computing for next-generation AI with ultra-low power consumption and cognitive capabilities.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-pink-400 text-sm font-medium">700% ROI in 15 months</span>
                  <Link href="/neuromorphic-computing-platform" className="text-pink-400 hover:text-pink-300 transition-colors">
                    Learn More →
                  </Link>
                </div>
              </motion.div>

              {/* DNA Computing Platform */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group bg-gradient-to-br from-emerald-900/40 to-teal-900/40 border border-emerald-500/30 rounded-2xl p-6 hover:border-emerald-400/60 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">🧬</div>
                  <div className="text-emerald-400 font-bold text-lg">$2,999/month</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  DNA Computing Platform
                </h3>
                <p className="text-gray-300 mb-4">
                  Molecular computing for complex problem solving with exponential speed improvements for specific algorithms.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-400 text-sm font-medium">900% ROI in 20 months</span>
                  <Link href="/dna-computing-platform" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                    Learn More →
                  </Link>
                </div>
              </motion.div>

              {/* Quantum Space Mining Platform */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group bg-gradient-to-br from-sky-900/40 to-blue-900/40 border border-sky-500/30 rounded-2xl p-6 hover:border-sky-400/60 hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">🚀</div>
                  <div className="text-sky-400 font-bold text-lg">$1,299/month</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                  Quantum Space Mining Platform
                </h3>
                <p className="text-gray-300 mb-4">
                  Revolutionary space resource exploration and mining with quantum computing and AI optimization.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sky-400 text-sm font-medium">800% ROI in 18 months</span>
                  <Link href="/quantum-space-mining-platform" className="text-sky-400 hover:text-sky-300 transition-colors">
                    Learn More →
                  </Link>
                </div>
              </motion.div>

              {/* AI Metaverse Development */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group bg-gradient-to-br from-violet-900/40 to-purple-900/40 border border-violet-500/30 rounded-2xl p-6 hover:border-violet-400/60 hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">🌐</div>
                  <div className="text-violet-400 font-bold text-lg">$499/month</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                  AI Metaverse Development Platform
                </h3>
                <p className="text-gray-300 mb-4">
                  Create immersive metaverse experiences with AI-powered 3D generation and intelligent NPCs.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-violet-400 text-sm font-medium">350% ROI in 8 months</span>
                  <Link href="/ai-metaverse-development-platform" className="text-violet-400 hover:text-violet-300 transition-colors">
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105"
              >
                <span>Explore All 1000+ Services</span>
                <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </motion.div>
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

        {/* Contact Information Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Get Started Today
                </span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Ready to transform your business with cutting-edge technology? Contact our experts for a free consultation.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-700/50 rounded-2xl hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-white mb-3">Phone</h3>
                <p className="text-cyan-400 text-lg font-semibold mb-2">+1 302 464 0950</p>
                <p className="text-gray-300 text-sm">Available 24/7 for urgent inquiries</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-700/50 rounded-2xl hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="text-xl font-bold text-white mb-3">Email</h3>
                <p className="text-purple-400 text-lg font-semibold mb-2">kleber@ziontechgroup.com</p>
                <p className="text-gray-300 text-sm">Response within 2 hours</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-700/50 rounded-2xl hover:border-green-500/60 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-white mb-3">Address</h3>
                <p className="text-green-400 text-lg font-semibold mb-2">364 E Main St STE 1008</p>
                <p className="text-gray-300 text-sm">Middletown DE 19709</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Join thousands of businesses already transforming their operations with our cutting-edge solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/contact" variant="primary" size="lg" className="group">
                    <Phone className="mr-2 h-5 w-5" />
                    Free Consultation
                  </Button>
                  <Button href="/services" variant="secondary" size="lg" className="group">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Explore Services
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}
