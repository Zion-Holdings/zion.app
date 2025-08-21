import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground2030 from '../components/ui/UltraFuturisticBackground2030';
import UltraFuturisticBackground2031 from '../components/ui/UltraFuturisticBackground2031';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import UltraAdvancedNavigation2026 from '../components/layout/UltraAdvancedNavigation2026';
import UltraFuturisticNavigation2031 from '../components/layout/UltraFuturisticNavigation2031';
import UltraFuturisticFooter2030 from '../components/layout/UltraFuturisticFooter2030';
import UltraFuturisticFooter2031 from '../components/layout/UltraFuturisticFooter2031';
import EnhancedServiceShowcase from '../components/sections/EnhancedServiceShowcase';
import Enhanced2026ServicesShowcase from '../components/sections/Enhanced2026ServicesShowcase';
import Revolutionary2026ServiceShowcase from '../components/sections/Revolutionary2026ServiceShowcase';
import Revolutionary2027ServicesShowcase from '../components/sections/Revolutionary2027ServicesShowcase';
import Revolutionary2027Hero from '../components/sections/Revolutionary2027Hero';
import EnhancedHero2026 from '../components/sections/EnhancedHero2026';
import UltraFuturisticHero2030 from '../components/sections/UltraFuturisticHero2030';
import UltraFuturisticServiceShowcase2029 from '../components/sections/UltraFuturisticServiceShowcase2029';
import Enhanced2029ServicesShowcase from '../components/sections/Enhanced2029ServicesShowcase';
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
import { cuttingEdgeInnovations2029 } from '../data/2029-cutting-edge-innovations';
import { practicalBusinessSolutions2028 } from '../data/2028-practical-business-solutions';
import { futuristic2028Services } from '../data/2028-futuristic-innovations';
import { emergingTech2028Services } from '../data/2028-emerging-tech-services';
import { futuristicAIServices2029 } from '../data/2029-futuristic-ai-services';
import { emergingTech2029Services } from '../data/2029-emerging-tech-services';
import { enterpriseIT2029Services } from '../data/2029-enterprise-it-services';
import { innovativeMicroSaasServices2029 } from '../data/2029-innovative-micro-saas';
import { innovativeMicroSaasServices2029V2 } from '../data/2029-innovative-micro-saas-v2';
import { innovativeITServices2029V2 } from '../data/2029-innovative-it-services-v2';
import { innovativeAIServices2029V2 } from '../data/2029-innovative-ai-services-v2';
// Import new 2029 services
import { emergingTechBreakthroughs2029V3 } from '../data/2029-emerging-tech-breakthroughs-v3';
import { aiAutonomousEcosystem2029V2 } from '../data/2029-ai-autonomous-ecosystem-v2';
// Import new 2029 V3 services
import { innovativeMicroSaas2029V3 } from '../data/2029-innovative-micro-saas-v3';
import { innovativeITServices2029V3 } from '../data/2029-innovative-it-services-v3';
import { innovativeAIServices2029V3 } from '../data/2029-innovative-ai-services-v3';

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
    ...cuttingEdgeInnovations2029,
    ...practicalBusinessSolutions2028,
    ...futuristic2028Services,
    ...emergingTech2028Services,
    ...futuristicAIServices2029,
    ...emergingTech2029Services,
    ...enterpriseIT2029Services,
    ...innovativeMicroSaasServices2029,
    ...innovativeMicroSaasServices2029V2,
    ...innovativeITServices2029V2,
    ...innovativeAIServices2029V2,
    // Add new 2029 services
    ...cuttingEdgeInnovations2029,
    ...emergingTechBreakthroughs2029V3,
    ...aiAutonomousEcosystem2029V2,
    // Add new 2029 V3 services
    ...innovativeMicroSaas2029V3,
    ...innovativeITServices2029V3,
    ...innovativeAIServices2029V3
  ];

  // Calculate total services count
  const totalServices = allServices.length;
  const totalCategories = new Set(allServices.map(service => service.category)).size;

  return (
    <>
      <Head>
        <title>Zion Tech Group - Revolutionary AI, Quantum & Space Technology Solutions | 2029</title>
        <meta name="description" content="Discover cutting-edge AI consciousness, quantum computing, space mining, and revolutionary technology solutions. Leading the future with 500+ innovative services. Contact: +1 302 464 0950" />
        <meta name="keywords" content="AI consciousness, quantum computing, space mining, neuromorphic computing, DNA computing, autonomous business, edge computing, metaverse development, blockchain supply chain, AI health analytics" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary Technology Solutions 2029" />
        <meta property="og:description" content="Leading the future with AI consciousness, quantum computing, space mining, and 500+ revolutionary technology solutions." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary Technology Solutions 2029" />
        <meta name="twitter:description" content="Leading the future with AI consciousness, quantum computing, space mining, and 500+ revolutionary technology solutions." />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Enhanced Navigation */}
      <UltraFuturisticNavigation2031 />

      {/* Main Content */}
      <main id="main-content" className="min-h-screen bg-black text-white">
        {/* Hero Section with Enhanced Background */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <UltraFuturisticBackground2031>
            {/* Enhanced Hero Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="space-y-8"
              >
                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                  <span className="text-neon-cyan animate-quantum-pulse">Revolutionary</span>
                  <br />
                  <span className="text-neon-purple animate-holographic-float">Technology</span>
                  <br />
                  <span className="text-neon-pink animate-cyberpunk-flicker">Solutions</span>
                  <br />
                  <span className="text-neon-green animate-neural-wave">2029</span>
                </h1>

                {/* Enhanced Subtitle */}
                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Leading the future with <span className="text-neon-cyan">AI consciousness</span>,{' '}
                  <span className="text-neon-purple">quantum computing</span>,{' '}
                  <span className="text-neon-pink">space mining</span>, and{' '}
                  <span className="text-neon-green">500+ revolutionary services</span>
                </p>

                {/* Enhanced Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-neon-cyan animate-quantum-pulse">
                      {totalServices}+
                    </div>
                    <div className="text-sm text-gray-400">Innovative Services</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-neon-purple animate-holographic-float">
                      {totalCategories}+
                    </div>
                    <div className="text-sm text-gray-400">Technology Categories</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-neon-pink animate-cyberpunk-flicker">
                      100%
                    </div>
                    <div className="text-sm text-gray-400">Real Services</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-neon-green animate-neural-wave">
                      24/7
                    </div>
                    <div className="text-sm text-gray-400">Support Available</div>
                  </motion.div>
                </div>

                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    <Button
                      href="/services"
                      className="btn-futuristic glow-quantum hover-glow-quantum text-lg px-8 py-4"
                    >
                      <Rocket className="w-5 h-5 mr-2" />
                      Explore Services
                    </Button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    <Button
                      href="/pricing"
                      variant="outline"
                      className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black text-lg px-8 py-4 transition-all duration-300"
                    >
                      <DollarSign className="w-5 h-5 mr-2" />
                      View Pricing
                    </Button>
                  </motion.div>
                </div>

                {/* Enhanced Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-400"
                >
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-neon-cyan" />
                    <a href={`tel:${contactInfo.mobile}`} className="link-futuristic">
                      {contactInfo.mobile}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-neon-purple" />
                    <a href={`mailto:${contactInfo.email}`} className="link-futuristic">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-neon-pink" />
                    <span>{contactInfo.address}</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </UltraFuturisticBackground2031>
        </section>

        {/* Enhanced Services Showcase */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-neon-cyan">Revolutionary</span>{' '}
                <span className="text-neon-purple">Services</span>{' '}
                <span className="text-neon-pink">2029</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our cutting-edge portfolio of {totalServices}+ innovative services spanning AI consciousness, 
                quantum computing, space technology, and beyond.
              </p>
            </motion.div>

            {/* Featured Service Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* AI Consciousness & Research */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="card-futuristic hover-glow-ai-consciousness"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">🧠</div>
                  <h3 className="text-2xl font-bold text-neon-cyan mb-3">AI Consciousness & Research</h3>
                  <p className="text-gray-300 mb-4">
                    Revolutionary AI consciousness development, emotional intelligence, and dream interpretation platforms.
                  </p>
                  <div className="text-neon-cyan font-semibold">Starting at $299/month</div>
                </div>
              </motion.div>

              {/* Quantum & Emerging Tech */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="card-futuristic hover-glow-quantum-creativity"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">⚛️</div>
                  <h3 className="text-2xl font-bold text-neon-purple mb-3">Quantum & Emerging Tech</h3>
                  <p className="text-gray-300 mb-4">
                    Quantum computing, DNA computing, photonic computing, and neuromorphic computing solutions.
                  </p>
                  <div className="text-neon-purple font-semibold">Starting at $449/month</div>
                </div>
              </motion.div>

              {/* Space Technology & Mining */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="card-futuristic hover-glow-space-mining"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-neon-pink mb-3">Space Technology & Mining</h3>
                  <p className="text-gray-300 mb-4">
                    Autonomous space mining, asteroid resource extraction, and space manufacturing platforms.
                  </p>
                  <div className="text-neon-pink font-semibold">Starting at $45,999/month</div>
                </div>
              </motion.div>

              {/* Metaverse & Digital Reality */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="card-futuristic hover-glow-metaverse-ai"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">🌌</div>
                  <h3 className="text-2xl font-bold text-neon-green mb-3">Metaverse & Digital Reality</h3>
                  <p className="text-gray-300 mb-4">
                    Metaverse development platforms, virtual reality experiences, and digital world creation tools.
                  </p>
                  <div className="text-neon-green font-semibold">Starting at $499/month</div>
                </div>
              </motion.div>

              {/* Autonomous Business & IT */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="card-futuristic hover-glow-swarm-robotics"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold text-neon-blue mb-3">Autonomous Business & IT</h3>
                  <p className="text-gray-300 mb-4">
                    Fully autonomous business management, DevOps automation, and IT operations platforms.
                  </p>
                  <div className="text-neon-blue font-semibold">Starting at $699/month</div>
                </div>
              </motion.div>

              {/* Blockchain & Supply Chain */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="card-futuristic hover-glow-dna-computing"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">🔗</div>
                  <h3 className="text-2xl font-bold text-neon-orange mb-3">Blockchain & Supply Chain</h3>
                  <p className="text-gray-300 mb-4">
                    Blockchain supply chain transparency, quantum-secure communication, and decentralized solutions.
                  </p>
                  <div className="text-neon-orange font-semibold">Starting at $399/month</div>
                </div>
              </motion.div>
            </div>

            {/* Enhanced Service Showcase Components */}
            <Enhanced2026ServicesShowcase />
            <Revolutionary2026ServiceShowcase />
            <Revolutionary2027ServicesShowcase />
            <Enhanced2029ServicesShowcase />
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-quantum-gradient">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Ready to <span className="text-neon-cyan">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of forward-thinking companies already leveraging our revolutionary technology solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  href={`tel:${contactInfo.mobile}`}
                  className="btn-futuristic glow-quantum hover-glow-quantum text-lg px-8 py-4"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: {contactInfo.mobile}
                </Button>
                
                <Button
                  href={`mailto:${contactInfo.email}`}
                  variant="outline"
                  className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black text-lg px-8 py-4 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div className="text-center">
                  <div className="text-4xl font-bold text-neon-cyan mb-2">500+</div>
                  <div className="text-gray-300">Innovative Services</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-neon-purple mb-2">24/7</div>
                  <div className="text-gray-300">Expert Support</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-neon-pink mb-2">100%</div>
                  <div className="text-gray-300">Real Solutions</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <UltraFuturisticFooter2031 />
    </>
  );
}
