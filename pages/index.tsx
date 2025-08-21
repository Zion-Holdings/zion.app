import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, Shield, Mail, MapPin, Rocket, Brain, Sparkles, MessageCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground2029 from '../components/ui/UltraFuturisticBackground2029';
import UltraFuturisticNavigation2029V2 from '../components/layout/UltraFuturisticNavigation2029V2';
import UltraFuturisticFooter2029V2 from '../components/layout/UltraFuturisticFooter2029V2';
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
import { aiAutonomousEcosystemServices2029 } from '../data/2029-ai-autonomous-ecosystem';
import { emergingTechBreakthroughServices2029 } from '../data/2029-emerging-tech-breakthroughs';
import { practicalBusinessSolutionServices2029 } from '../data/2029-practical-business-solutions';
import { cuttingEdge2029Services } from '../data/2029-cutting-edge-innovations-v2';
import { practicalBusinessSolutions2029 } from '../data/2029-practical-business-solutions-v2';

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
    ...professionalServices,
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
    ...aiAutonomousEcosystemServices2029,
    ...emergingTechBreakthroughServices2029,
    ...practicalBusinessSolutionServices2029,
    ...cuttingEdge2029Services,
    ...practicalBusinessSolutions2029
  ];

  // Get popular services for hero section
  const popularServices = allServices.filter(service => service.popular).slice(0, 6);

  return (
    <UltraFuturisticBackground2029>
      <div className="min-h-screen bg-black/90">
        <Head>
          <title>Zion Tech Group - Future Technology Solutions | AI, Quantum Computing, Space Tech</title>
          <meta name="description" content="Leading the future with cutting-edge AI, quantum computing, space technology, and innovative micro SAAS solutions. Transform your business with next-generation technology." />
          <meta name="keywords" content="AI, quantum computing, space technology, micro SAAS, enterprise IT, future technology, Zion Tech Group" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Zion Tech Group - Future Technology Solutions" />
          <meta property="og:description" content="Leading the future with cutting-edge AI, quantum computing, space technology, and innovative micro SAAS solutions." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Zion Tech Group - Future Technology Solutions" />
          <meta name="twitter:description" content="Leading the future with cutting-edge AI, quantum computing, space technology, and innovative micro SAAS solutions." />
          <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        </Head>

        {/* Enhanced Navigation */}
        <UltraFuturisticNavigation2029V2 />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-8"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Future Technology
                </span>
                <br />
                <span className="text-white">Solutions</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              >
                Leading the future with cutting-edge AI consciousness, quantum computing breakthroughs, 
                space mining automation, and revolutionary micro SAAS solutions. Transform your business 
                with next-generation technology that's already here.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 text-lg"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Get Started Today
                </Link>
                
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 text-lg"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Explore Services
                </Link>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-300"
              >
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">2029 Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future with our cutting-edge AI consciousness, quantum computing, space technology, 
                and innovative micro SAAS solutions that are transforming industries worldwide.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={service.link}>
                    <div className={`p-6 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 h-full hover:transform hover:scale-105`}>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl">{service.icon}</span>
                        {service.popular && (
                          <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {service.name}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-cyan-400">
                          {service.price}
                          <span className="text-sm text-gray-400">{service.period}</span>
                        </div>
                        
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(service.rating) 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-gray-600'
                              }`}
                            />
                          ))}
                          <span className="text-sm text-gray-400 ml-2">({service.reviews})</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Setup: {service.setupTime}</span>
                          <span className="text-gray-400">{service.trialDays} day trial</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 text-lg"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Service Categories Overview */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Technology <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Categories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of future technology solutions across multiple cutting-edge domains.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'AI & Consciousness',
                  description: 'Next-generation AI consciousness, emotional intelligence, and autonomous business management',
                  icon: '🧠',
                  color: 'from-violet-600 via-purple-600 to-indigo-600',
                  services: 15,
                  href: '/services/ai-consciousness'
                },
                {
                  title: 'Quantum Technology',
                  description: 'Quantum computing, quantum security, DNA computing, and quantum financial trading',
                  icon: '⚛️',
                  color: 'from-indigo-600 via-blue-600 to-cyan-600',
                  services: 12,
                  href: '/services/quantum-technology'
                },
                {
                  title: 'Space & Metaverse',
                  description: 'Space mining automation, metaverse platforms, and virtual reality solutions',
                  icon: '🌌',
                  color: 'from-teal-600 via-emerald-600 to-green-600',
                  services: 18,
                  href: '/services/space-metaverse'
                },
                {
                  title: 'Enterprise IT',
                  description: 'AI business intelligence, supply chain optimization, and intelligent HR management',
                  icon: '🏙️',
                  color: 'from-blue-600 via-cyan-600 to-teal-600',
                  services: 25,
                  href: '/services/enterprise-it'
                },
                {
                  title: 'Micro SAAS',
                  description: 'Innovative micro software solutions for customer experience, marketing, and sales',
                  icon: '🎯',
                  color: 'from-green-600 via-yellow-600 to-orange-600',
                  services: 30,
                  href: '/services/micro-saas'
                },
                {
                  title: 'Research & Development',
                  description: 'Breakthrough research solutions, AI research assistants, and biotech research suites',
                  icon: '🔬',
                  color: 'from-orange-600 via-red-600 to-pink-600',
                  services: 20,
                  href: '/services/research-development'
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={category.href}>
                    <div className={`p-8 rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 h-full hover:transform hover:scale-105`}>
                      <div className="text-center">
                        <span className="text-5xl mb-4 block">{category.icon}</span>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                          {category.title}
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {category.description}
                        </p>
                        <div className="flex items-center justify-center space-x-4 text-sm">
                          <span className="text-cyan-400 font-semibold">{category.services} Services</span>
                          <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Service Showcase */}
        <UltraFuturisticServiceShowcase2029 services={allServices} />

        {/* Contact CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Business?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Join the future with Zion Tech Group. Our cutting-edge solutions are already helping businesses 
                achieve unprecedented growth and innovation. Let's discuss how we can transform your organization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 text-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Us Today
                </Link>
                
                <div className="flex items-center space-x-6 text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <UltraFuturisticFooter2029V2 />
      </div>
    </UltraFuturisticBackground2029>
  );
}