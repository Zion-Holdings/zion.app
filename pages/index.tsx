import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import UltraAdvancedNavigation2026 from '../components/layout/UltraAdvancedNavigation2026';
import EnhancedServiceShowcase from '../components/sections/EnhancedServiceShowcase';
import Enhanced2026ServicesShowcase from '../components/sections/Enhanced2026ServicesShowcase';
import UltraAdvancedHero2026 from '../components/sections/UltraAdvancedHero2026';
import Revolutionary2026ServicesShowcase from '../components/sections/Revolutionary2026ServicesShowcase';
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
import { revolutionary2025Services } from '../data/revolutionary-2025-services';
import { nextGenInnovations2025 } from '../data/next-gen-innovations-2025';
import { innovative2026Services } from '../data/innovative-2026-services';
import { emergingTech2026Services } from '../data/emerging-tech-2026-services';
import { enterpriseIT2026Services } from '../data/enterprise-it-2026-services';
import { innovative2026MicroSaasServices } from '../data/innovative-2026-micro-saas';
import { emergingTech2026Services as emergingTech2026ServicesNew } from '../data/emerging-tech-2026-services';
import { enterpriseIT2026Services as enterpriseIT2026ServicesNew } from '../data/enterprise-it-2026-services';
import { innovative2026MicroSaasServicesV2 } from '../data/innovative-2026-micro-saas-v2';
import { emergingTech2026ServicesV2 } from '../data/emerging-tech-2026-services-v2';
import { enterpriseIT2026ServicesV2 } from '../data/enterprise-it-2026-services-v2';
import { revolutionary2026Innovations } from '../data/revolutionary-2026-innovations';
import { nextGenAI2026Services } from '../data/next-gen-ai-2026-services';
import { revolutionary2026AIServices } from '../data/revolutionary-2026-ai-services';
import { emergingTech2026Innovations } from '../data/emerging-tech-2026-innovations';
import { enterpriseIT2026Comprehensive } from '../data/enterprise-it-2026-comprehensive';
import { comprehensiveMicroSaas2026 } from '../data/comprehensive-micro-saas-2026';

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
    ...emergingTechServices2025,
    ...revolutionary2025Services,
    ...nextGenInnovations2025,
    ...innovative2026Services,
    ...emergingTech2026Services,
    ...enterpriseIT2026Services,
    ...innovative2026MicroSaasServices,
    ...emergingTech2026ServicesNew,
    ...enterpriseIT2026ServicesNew,
    ...innovative2026MicroSaasServicesV2,
    ...emergingTech2026ServicesV2,
    ...enterpriseIT2026ServicesV2,
    ...revolutionary2026Innovations,
    ...nextGenAI2026Services,
    ...revolutionary2026AIServices,
    ...emergingTech2026Innovations,
    ...enterpriseIT2026Comprehensive,
    ...comprehensiveMicroSaas2026
  ];

  const featuredOffers = professionalServices.slice(0, 3);

  // Service statistics
  const serviceStats = {
    totalServices: allServices.length,
    aiServices: nextGenerationAIServices.length + innovativeAIServices.length + realMarketServices.filter(s => s.category.includes('AI')).length + revolutionary2025Services.filter(s => s.category.includes('AI')).length + nextGenInnovations2025.filter(s => s.category.includes('AI')).length + innovative2026Services.filter(s => s.category.includes('AI')).length + emergingTech2026Services.filter(s => s.category.includes('AI')).length + innovative2026MicroSaasServices.filter(s => s.category.includes('AI')).length + innovative2026MicroSaasServicesV2.filter(s => s.category.includes('AI')).length + emergingTech2026ServicesV2.filter(s => s.category.includes('AI')).length + enterpriseIT2026ServicesV2.filter(s => s.category.includes('AI')).length,
    emergingTech: emergingTechnologyServices.length + emergingTechServices2025.length + emergingTech2026Services.length + emergingTech2026ServicesNew.length + emergingTech2026ServicesV2.length,
    itSolutions: comprehensiveITSolutions.length + enterpriseITServices.length + enterpriseIT2026Services.length + enterpriseIT2026ServicesNew.length + enterpriseIT2026ServicesV2.length,
    microSaas: enhancedRealMicroSaasServices.length + innovativeMicroSaasServices.length + innovative2026Services.filter(s => s.category.includes('SaaS')).length + innovative2026MicroSaasServices.length + innovative2026MicroSaasServicesV2.length,
    revolutionaryServices: revolutionary2025Services.length + nextGenInnovations2025.length + innovative2026Services.length + emergingTech2026Services.length + enterpriseIT2026Services.length + innovative2026MicroSaasServices.length + innovative2026MicroSaasServicesV2.length + emergingTech2026ServicesV2.length + enterpriseIT2026ServicesV2.length,
    quantumServices: quantumSpaceServices.length + quantumAIServices2025.filter(s => s.category.includes('Quantum')).length,
    blockchainServices: enterpriseIT2026Services.filter(s => s.category.includes('Blockchain')).length,
    spaceTech: quantumSpaceServices.filter(s => s.category.includes('Space')).length
  };

  return (
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
        <UltraAdvancedNavigation2026 />

        {/* Enhanced Hero Section 2026 */}
        <UltraAdvancedHero2026 />

        {/* Revolutionary 2026 Services Showcase */}
        <Revolutionary2026ServicesShowcase />

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
                  2026 Revolutionary Innovations
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
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">AI Business Intelligence Elite 2026</h3>
                      <p className="text-purple-300 text-sm">Next-generation analytics</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Transform your business data into actionable intelligence with our advanced AI-powered analytics platform.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-400">$299</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <Link href="/ai-business-intelligence-elite-2026" className="mt-4 inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>

              {/* Autonomous AI Agents */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Autonomous AI Agents Platform 2026</h3>
                      <p className="text-blue-300 text-sm">Business automation</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Build, deploy, and manage autonomous AI agents that can handle complex business tasks without human intervention.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-400">$199</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <Link href="/autonomous-ai-agents-platform-2026" className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>

              {/* Quantum Cybersecurity */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Quantum Cybersecurity Suite 2026</h3>
                      <p className="text-red-300 text-sm">Future-proof security</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Next-generation cybersecurity platform that uses quantum-resistant algorithms to protect against current and future cyber threats.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-red-400">$599</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <Link href="/quantum-cybersecurity-suite-2026" className="mt-4 inline-flex items-center text-red-400 hover:text-red-300 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Service Showcase */}
        <Enhanced2026ServicesShowcase />

        {/* Service Statistics */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
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
                  Revolutionary Service Portfolio
                </span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                Discover our comprehensive range of cutting-edge services designed to transform your business
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{serviceStats.aiServices}+</h3>
                <p className="text-cyan-300 font-medium">AI Services</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{serviceStats.emergingTech}+</h3>
                <p className="text-purple-300 font-medium">Emerging Tech</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{serviceStats.itSolutions}+</h3>
                <p className="text-green-300 font-medium">IT Solutions</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{serviceStats.revolutionaryServices}+</h3>
                <p className="text-yellow-300 font-medium">Revolutionary</p>
              </motion.div>
            </div>
          </div>
        </section>

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
                  Ready to Transform Your Business?
                </span>
              </h2>
              <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already leveraging our revolutionary AI, quantum, and IT services to achieve unprecedented growth and innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.a
                  href={`tel:${contactInfo.mobile}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call {contactInfo.mobile}</span>
                </motion.a>
                
                <motion.a
                  href={`mailto:${contactInfo.email}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </motion.a>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 rounded-2xl border border-cyan-500/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Phone className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                    <p className="text-white font-medium">{contactInfo.mobile}</p>
                  </div>
                  <div>
                    <Mail className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <p className="text-white font-medium">{contactInfo.email}</p>
                  </div>
                  <div>
                    <MapPin className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                    <p className="text-white font-medium">{contactInfo.address}</p>
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
