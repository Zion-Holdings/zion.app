import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Cpu, Target, Microscope, TestTube } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground2029 from '../components/ui/UltraFuturisticBackground2029';
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
import { innovativeMicroSaasServices2029V2 } from '../data/2029-innovative-micro-saas-v2';
import { emergingTechServices2029V2 } from '../data/2029-emerging-tech-services-v2';
import { enterpriseITServices2029V2 } from '../data/2029-enterprise-it-services-v2';
import { spaceMetaverseServices2029V2 } from '../data/2029-space-metaverse-services-v2';
import { researchDevelopmentServices2029V2 } from '../data/2029-research-development-services-v2';

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
    ...innovativeMicroSaasServices2029V2,
    ...emergingTechServices2029V2,
    ...enterpriseITServices2029V2,
    ...spaceMetaverseServices2029V2,
    ...researchDevelopmentServices2029V2
  ];

  // Get unique services by ID to avoid duplicates
  const uniqueServices = allServices.filter((service, index, self) => 
    index === self.findIndex(s => s.id === service.id)
  );

  // Group services by category for better organization
  const servicesByCategory = {
    'AI & Machine Learning': uniqueServices.filter(s => 
      s.category.some(cat => cat.toLowerCase().includes('ai') || cat.toLowerCase().includes('machine learning'))
    ),
    'Quantum Computing': uniqueServices.filter(s => 
      s.category.some(cat => cat.toLowerCase().includes('quantum'))
    ),
    'Enterprise IT': uniqueServices.filter(s => 
      s.category.some(cat => cat.toLowerCase().includes('enterprise') || cat.toLowerCase().includes('it'))
    ),
    'Space & Metaverse': uniqueServices.filter(s => 
      s.category.some(cat => cat.toLowerCase().includes('space') || cat.toLowerCase().includes('metaverse'))
    ),
    'Micro SAAS': uniqueServices.filter(s => 
      s.category.some(cat => cat.toLowerCase().includes('micro') || cat.toLowerCase().includes('saas'))
    ),
    'Research & Development': uniqueServices.filter(s => 
      s.category.some(cat => cat.toLowerCase().includes('research') || cat.toLowerCase().includes('development'))
    ),
    'Biotechnology': uniqueServices.filter(s => 
      s.category.some(cat => cat.toLowerCase().includes('biotech') || cat.toLowerCase().includes('dna'))
    ),
    'Cybersecurity': uniqueServices.filter(s => 
      s.category.some(cat => cat.toLowerCase().includes('security') || cat.toLowerCase().includes('cyber'))
    )
  };

  return (
    <UltraFuturisticBackground2029>
      <Head>
        <title>Zion Tech Group - 2029 Future Technology Solutions | AI, Quantum Computing, Enterprise IT</title>
        <meta name="description" content="Zion Tech Group delivers cutting-edge 2029 technology solutions including AI consciousness, quantum computing, space technology, and autonomous enterprise systems. Transform your business with future-ready innovations." />
        <meta name="keywords" content="AI consciousness, quantum computing, space technology, autonomous systems, enterprise IT, micro SAAS, 2029 technology, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Zion Tech Group - 2029 Future Technology Solutions" />
        <meta property="og:description" content="Leading provider of cutting-edge 2029 technology solutions including AI, quantum computing, and space technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - 2029 Future Technology Solutions" />
        <meta name="twitter:description" content="Leading provider of cutting-edge 2029 technology solutions including AI, quantum computing, and space technology." />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      {/* Enhanced Navigation */}
      <UltraFuturisticNavigation2029 />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  2029 Future Technology
                </span>
                <br />
                <span className="text-white">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your business with cutting-edge AI consciousness, quantum computing, 
                space technology, and autonomous enterprise systems. 
                <span className="text-cyan-400 font-semibold"> Future-ready innovations available now.</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/services"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Get Started</span>
                <Phone className="w-5 h-5" />
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
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
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Comprehensive 2029
              </span>
              <br />
              <span className="text-white">Technology Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI consciousness to quantum space technology, we offer the most advanced 
              and innovative solutions available in 2029.
            </p>
          </motion.div>

          {/* Service Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(servicesByCategory).map(([category, services]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto">
                    {category === 'AI & Machine Learning' && <Brain className="w-8 h-8 text-white" />}
                    {category === 'Quantum Computing' && <Atom className="w-8 h-8 text-white" />}
                    {category === 'Enterprise IT' && <Cpu className="w-8 h-8 text-white" />}
                    {category === 'Space & Metaverse' && <Rocket className="w-8 h-8 text-white" />}
                    {category === 'Micro SAAS' && <Target className="w-8 h-8 text-white" />}
                    {category === 'Research & Development' && <Microscope className="w-8 h-8 text-white" />}
                    {category === 'Biotechnology' && <TestTube className="w-8 h-8 text-white" />}
                    {category === 'Cybersecurity' && <Shield className="w-8 h-8 text-white" />}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category}</h3>
                  <p className="text-gray-400 text-sm">
                    {services.length} cutting-edge solutions
                  </p>
                  <Link
                    href={`/services#${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Featured 2029
              </span>
              <br />
              <span className="text-white">Innovations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most revolutionary and cutting-edge technology solutions
            </p>
          </motion.div>

          {/* Featured Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {uniqueServices.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <span className="text-cyan-400 font-semibold text-sm">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.category.slice(0, 3).map((cat) => (
                      <span
                        key={cat}
                        className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-500/20"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Services CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              <span>View All {uniqueServices.length} Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 rounded-2xl p-12 border border-cyan-500/20 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"> 2029 Technology?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Contact us today to discuss how our cutting-edge solutions can revolutionize your operations, 
              enhance your competitive advantage, and prepare you for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Call Now</span>
                <Phone className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p className="text-sm">
                <strong>Contact:</strong> {contactInfo.mobile} | {contactInfo.email}
              </p>
              <p className="text-sm mt-2">
                <strong>Address:</strong> {contactInfo.address}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <UltraFuturisticFooter2029 />
    </UltraFuturisticBackground2029>
  );
}
