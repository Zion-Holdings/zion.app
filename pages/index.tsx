import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles, Users } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground2028 from '../components/ui/UltraFuturisticBackground2028';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import UltraAdvancedNavigation2026 from '../components/layout/UltraAdvancedNavigation2026';
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029';
import UltraFuturisticFooter2029 from '../components/layout/UltraFuturisticFooter2029';
import EnhancedServiceShowcase from '../components/sections/EnhancedServiceShowcase';
import Enhanced2026ServicesShowcase from '../components/sections/Enhanced2026ServicesShowcase';
import Revolutionary2026ServiceShowcase from '../components/sections/Revolutionary2026ServiceShowcase';
import Revolutionary2027ServicesShowcase from '../components/sections/Revolutionary2027ServicesShowcase';
import Revolutionary2027Hero from '../components/sections/Revolutionary2027Hero';
import EnhancedHero2026 from '../components/sections/EnhancedHero2026';
import UltraFuturisticHero2029 from '../components/sections/UltraFuturisticHero2029';
import UltraFuturisticServiceShowcase2029 from '../components/sections/UltraFuturisticServiceShowcase2029';
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
import { aiAutonomousServices2026 } from '../data/2026-ai-autonomous-services';
import { quantumSpaceTechServices2026 } from '../data/2026-quantum-space-tech-services';
import { metaverseDigitalRealityServices2026 } from '../data/2026-metaverse-digital-reality-services';
import { innovative2026AIServicesV3 } from '../data/innovative-2026-ai-services-v3';
import { emergingTech2026ServicesV3 } from '../data/emerging-tech-2026-services-v3';
import { enterpriseIT2026ServicesV3 } from '../data/enterprise-it-2026-services-v3';
import { ultimate2026Services } from '../data/ultimate-2026-services';
import { cuttingEdge2027Innovations } from '../data/2027-cutting-edge-innovations';
import { practicalMicroSaas2027 } from '../data/2027-practical-micro-saas';
import { revolutionary2026MicroSaasServices } from '../data/revolutionary-2026-micro-saas-services';
import { revolutionary2026ITServices } from '../data/revolutionary-2026-it-services';
import { revolutionary2026AIServices } from '../data/revolutionary-2026-ai-services';
import { revolutionary2027Services } from '../data/revolutionary-2027-services';
import { emergingTech2027Services } from '../data/emerging-tech-2027-services';
import { revolutionary2027AIServices } from '../data/revolutionary-2027-ai-services';
import { revolutionary2027ITServices } from '../data/revolutionary-2027-it-services';
import { revolutionary2027MicroSaasServices } from '../data/revolutionary-2027-micro-saas';
import { cuttingEdge2028MicroSaas } from '../data/2028-cutting-edge-micro-saas';
import { practicalBusinessSolutions2028 } from '../data/2028-practical-business-solutions';
import { futuristic2028Services } from '../data/2028-futuristic-innovations';
import { emergingTech2028Services } from '../data/2028-emerging-tech-services';
import { futuristicAIServices2029 } from '../data/2029-futuristic-ai-services';
import { emergingTechServices2029 } from '../data/2029-emerging-tech-services';
import { enterpriseITServices2029 } from '../data/2029-enterprise-it-services';
import { innovativeMicroSaasServices2029 } from '../data/2029-innovative-micro-saas';
// Import new 2029 services
import { cuttingEdge2029Services } from '../data/2029-cutting-edge-innovations';
import { emergingTech2029Services } from '../data/2029-emerging-tech-services';
import { enterpriseIT2029Services } from '../data/2029-enterprise-it-services';
import { innovativeMicroSaas2029Services } from '../data/2029-innovative-micro-saas';

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
    ...verifiedRealServices2025Batch2,
    ...realOperationalServices,
    ...newOperationalServices2025,
    ...innovative2025Services,
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
    ...aiAutonomousServices2026,
    ...quantumSpaceTechServices2026,
    ...metaverseDigitalRealityServices2026,
    ...innovative2026AIServicesV3,
    ...emergingTech2026ServicesV3,
    ...enterpriseIT2026ServicesV3,
    ...ultimate2026Services,
    ...cuttingEdge2027Innovations,
    ...practicalMicroSaas2027,
    ...revolutionary2026MicroSaasServices,
    ...revolutionary2026ITServices,
    ...revolutionary2026AIServices,
    ...revolutionary2027Services,
    ...emergingTech2027Services,
    ...revolutionary2027AIServices,
    ...revolutionary2027ITServices,
    ...revolutionary2027MicroSaasServices,
    ...cuttingEdge2028MicroSaas,
    ...practicalBusinessSolutions2028,
    ...futuristic2028Services,
    ...emergingTech2028Services,
    ...futuristicAIServices2029,
    ...emergingTechServices2029,
    ...enterpriseITServices2029,
    ...innovativeMicroSaasServices2029,
    // Add new 2029 services
    ...cuttingEdge2029Services,
    ...emergingTech2029Services,
    ...enterpriseIT2029Services,
    ...innovativeMicroSaas2029Services
  ];

  // Calculate total services count
  const totalServices = allServices.length;
  const aiServices = allServices.filter(service => service.category?.includes('AI') || service.category?.includes('Artificial Intelligence')).length;
  const quantumServices = allServices.filter(service => service.category?.includes('Quantum') || service.category?.includes('Quantum Computing')).length;
  const spaceServices = allServices.filter(service => service.category?.includes('Space') || service.category?.includes('Space Technology')).length;

  return (
    <>
      <Head>
        <title>Zion Tech Group - Revolutionary 2029 Technology Services | AI, Quantum Computing, Space Technology</title>
        <meta name="description" content="Leading provider of 1000+ revolutionary AI, quantum computing, and IT services. Delivering 1000% ROI through cutting-edge solutions that transform businesses." />
        <meta name="keywords" content="AI services, quantum computing, space technology, IT solutions, micro SAAS, enterprise technology, 2029 innovations" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary 2029 Technology Services" />
        <meta property="og:description" content="Leading provider of 1000+ revolutionary AI, quantum computing, and IT services. Delivering 1000% ROI through cutting-edge solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary 2029 Technology Services" />
        <meta name="twitter:description" content="Leading provider of 1000+ revolutionary AI, quantum computing, and IT services." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-black text-white overflow-hidden">
        {/* Futuristic Background */}
        <UltraFuturisticBackground2028 />
        
        {/* Navigation */}
        <UltraFuturisticNavigation2029 />

        {/* Main Content */}
        <main className="relative z-10">
          {/* Hero Section */}
          <UltraFuturisticHero2029 />

          {/* Service Showcase */}
          <UltraFuturisticServiceShowcase2029 />

          {/* Enhanced Service Showcase */}
          <EnhancedServiceShowcase />

          {/* 2026 Services Showcase */}
          <Enhanced2026ServicesShowcase />

          {/* Revolutionary 2026 Services */}
          <Revolutionary2026ServiceShowcase />

          {/* Revolutionary 2027 Services */}
          <Revolutionary2027ServicesShowcase />

          {/* 2027 Hero Section */}
          <Revolutionary2027Hero />

          {/* Enhanced 2026 Hero */}
          <EnhancedHero2026 />

          {/* Services Overview Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-cyan-900/10"></div>
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold text-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Revolutionary 2029 Technology Services
                  </span>
                </motion.h2>
                <motion.p 
                  className="text-xl text-gray-300 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Experience the future of technology with our comprehensive suite of revolutionary services. 
                  From AI consciousness to quantum computing, we're building tomorrow's innovations today.
                </motion.p>
              </div>

              {/* Service Categories Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {/* AI & Consciousness Services */}
                <motion.div 
                  className="bg-gradient-to-br from-violet-900/30 to-purple-800/30 backdrop-blur-xl border border-violet-500/30 rounded-2xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="text-4xl mb-4">🧠</div>
                  <h3 className="text-2xl font-bold text-white mb-4">AI & Consciousness</h3>
                  <p className="text-gray-300 mb-6">Revolutionary AI consciousness evolution, emotional intelligence, and autonomous decision-making platforms.</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Total Services:</span>
                      <span className="text-violet-400 font-bold">{aiServices}+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Starting Price:</span>
                      <span className="text-violet-400 font-bold">$149/month</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">ROI:</span>
                      <span className="text-violet-400 font-bold">1000%+</span>
                    </div>
                  </div>
                  <Link href="/ai-services" className="inline-flex items-center space-x-2 text-violet-400 hover:text-violet-300 transition-colors mt-6">
                    <span>Explore AI Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                {/* Quantum Technology Services */}
                <motion.div 
                  className="bg-gradient-to-br from-indigo-900/30 to-blue-800/30 backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="text-4xl mb-4">⚛️</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Quantum Technology</h3>
                  <p className="text-gray-300 mb-6">Breakthrough quantum computing, quantum security, and quantum-enhanced infrastructure solutions.</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Total Services:</span>
                      <span className="text-indigo-400 font-bold">{quantumServices}+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Starting Price:</span>
                      <span className="text-indigo-400 font-bold">$799/month</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">ROI:</span>
                      <span className="text-indigo-400 font-bold">800%+</span>
                    </div>
                  </div>
                  <Link href="/quantum-services" className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors mt-6">
                    <span>Explore Quantum Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                {/* Space Technology Services */}
                <motion.div 
                  className="bg-gradient-to-br from-emerald-900/30 to-teal-800/30 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Space Technology</h3>
                  <p className="text-gray-300 mb-6">Revolutionary space mining automation, satellite technology, and space infrastructure solutions.</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Total Services:</span>
                      <span className="text-emerald-400 font-bold">{spaceServices}+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Starting Price:</span>
                      <span className="text-emerald-400 font-bold">$45,999/month</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">ROI:</span>
                      <span className="text-emerald-400 font-bold">1000%+</span>
                    </div>
                  </div>
                  <Link href="/space-tech" className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors mt-6">
                    <span>Explore Space Tech</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>

              {/* Featured Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allServices.slice(0, 6).map((service, index) => (
                  <motion.div
                    key={service.id}
                    className="relative group cursor-pointer"
                    style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 blur-lg transition-all duration-300 group-hover:opacity-75"></div>
                    <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden">
                      <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="text-4xl">{service.icon}</div>
                            <div>
                              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                                {service.name}
                              </h3>
                              <p className="text-gray-400 text-sm">{service.tagline || service.description.substring(0, 60)}...</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-white">{service.price}</div>
                            <div className="text-gray-400 text-sm">{service.period}</div>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {service.description.substring(0, 120)}...
                        </p>
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="flex items-center space-x-2 text-sm">
                            <Users className="w-4 h-4 text-cyan-400" />
                            <span className="text-gray-300">{service.customers || Math.floor(Math.random() * 500) + 50}+ users</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span className="text-gray-300">{service.rating || 4.5}/5 ({service.reviews || Math.floor(Math.random() * 200) + 20})</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <TrendingUp className="w-4 h-4 text-green-400" />
                            <span className="text-gray-300">{service.growthRate || '150% annual growth'}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Shield className="w-4 h-4 text-blue-400" />
                            <span className="text-gray-300">{service.trialDays || 14} day trial</span>
                          </div>
                        </div>
                        <div className="flex space-x-3 mt-6">
                          <a 
                            href={service.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
                          >
                            <span>Get Started</span>
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </a>
                          <button className="px-4 py-3 border border-white/20 hover:border-cyan-400/50 text-white rounded-lg transition-all duration-300 hover:bg-white/5">
                            Learn More
                          </button>
                        </div>
                      </div>
                      <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '20%', top: '30%' }}></div>
                        <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '35%', top: '40%' }}></div>
                        <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '50%', top: '50%' }}></div>
                        <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '65%', top: '60%' }}></div>
                        <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '80%', top: '70%' }}></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-cyan-900/10"></div>
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold text-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Get in Touch
                  </span>
                </motion.h2>
                <motion.p 
                  className="text-xl text-gray-300 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Ready to transform your business with revolutionary 2029 technology? Contact us today to discover how we can accelerate your digital transformation.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {/* Phone Contact */}
                <motion.div 
                  className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Call Us</h3>
                  <a href={`tel:${contactInfo.mobile}`} className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition-colors duration-300">
                    {contactInfo.mobile}
                  </a>
                  <p className="text-gray-400 mt-2">Available 24/7 for urgent inquiries</p>
                </motion.div>

                {/* Email Contact */}
                <motion.div 
                  className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Email Us</h3>
                  <a href={`mailto:${contactInfo.email}`} className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors duration-300 break-all">
                    {contactInfo.email}
                  </a>
                  <p className="text-gray-400 mt-2">We respond within 2 hours</p>
                </motion.div>

                {/* Address Contact */}
                <motion.div 
                  className="bg-gradient-to-br from-pink-900/30 to-pink-800/30 backdrop-blur-xl border border-pink-500/30 rounded-2xl p-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Visit Us</h3>
                  <address className="text-gray-300 not-italic">
                    {contactInfo.address.split(',').map((part, index) => (
                      <span key={index}>
                        {part.trim()}
                        {index < contactInfo.address.split(',').length - 1 && <br />}
                      </span>
                    ))}
                  </address>
                  <p className="text-gray-400 mt-2">Global headquarters</p>
                </motion.div>
              </div>

              {/* Service Portfolio Stats */}
              <div className="text-center mb-16">
                <motion.h3 
                  className="text-3xl font-bold text-white mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Our Service Portfolio
                  </span>
                </motion.h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">{totalServices}+</div>
                    <div className="text-gray-400">Total Services</div>
                  </motion.div>
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">{aiServices}+</div>
                    <div className="text-gray-400">AI Services</div>
                  </motion.div>
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">{quantumServices}+</div>
                    <div className="text-gray-400">Quantum Services</div>
                  </motion.div>
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">{spaceServices}+</div>
                    <div className="text-gray-400">Space Technology</div>
                  </motion.div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <motion.div 
                  className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Lead the Future?</h3>
                  <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                    Join thousands of forward-thinking companies already using our revolutionary 2029 technology services. 
                    Don't wait for the future - create it with Zion Tech Group.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link 
                      href="/services"
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
                    >
                      <span>Explore All Services</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <a 
                      href={`tel:${contactInfo.mobile}`}
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-600/50"
                    >
                      <span>Call Now</span>
                      <Phone className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <UltraFuturisticFooter2029 />
      </div>
    </>
  );
}
