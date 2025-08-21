import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import UltraAdvancedNavigation2026 from '../components/layout/UltraAdvancedNavigation2026';
import UltraFuturisticNavigation2027 from '../components/layout/UltraFuturisticNavigation2027';
import EnhancedServiceShowcase from '../components/sections/EnhancedServiceShowcase';
import Enhanced2026ServicesShowcase from '../components/sections/Enhanced2026ServicesShowcase';
import Revolutionary2026ServiceShowcase from '../components/sections/Revolutionary2026ServiceShowcase';
import Revolutionary2027ServicesShowcase from '../components/sections/Revolutionary2027ServicesShowcase';
import Revolutionary2027Hero from '../components/sections/Revolutionary2027Hero';
import EnhancedHero2026 from '../components/sections/EnhancedHero2026';
import UltraFuturisticHero2027 from '../components/sections/UltraFuturisticHero2027';
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
import { innovative2028Services } from '../data/innovative-2028-services';
import { emergingTech2028Services } from '../data/emerging-tech-2028-services';
import { enterpriseIT2028Services } from '../data/enterprise-it-2028-services';

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
    ...innovative2028Services,
    ...emergingTech2028Services,
    ...enterpriseIT2028Services
  ];

  const featuredOffers = professionalServices.slice(0, 3);

  // Service statistics
  const serviceStats = {
    totalServices: allServices.length,
    aiServices: nextGenerationAIServices.length + innovativeAIServices.length + realMarketServices.filter(s => s.category.includes('AI')).length + revolutionary2025Services.filter(s => s.category.includes('AI')).length + nextGenInnovations2025.filter(s => s.category.includes('AI')).length + innovative2026Services.filter(s => s.category.includes('AI')).length + emergingTech2026Services.filter(s => s.category.includes('AI')).length + innovative2026MicroSaasServices.filter(s => s.category.includes('AI')).length + innovative2026MicroSaasServicesV2.filter(s => s.category.includes('AI')).length + emergingTech2026ServicesV2.filter(s => s.category.includes('AI')).length + enterpriseIT2026ServicesV2.filter(s => s.category.includes('AI')).length + revolutionary2026AIServices.length + revolutionary2027Services.filter(s => s.category.includes('AI')).length + emergingTech2027Services.filter(s => s.category.includes('AI')).length,
    quantumServices: quantumSpaceServices.length + quantumAIServices2025.length + revolutionary2027Services.filter(s => s.category.includes('Quantum')).length,
    spaceServices: quantumSpaceServices.length + revolutionary2027Services.filter(s => s.category.includes('Space')).length,
    biotechServices: revolutionary2027Services.filter(s => s.category.includes('Biotech')).length + emergingTech2027Services.filter(s => s.category.includes('Biotech')).length
  };

  return (
    <>
      <Head>
        <title>Zion Tech Group - Revolutionary 2027 Technology Services | AI, Quantum Computing, Space Tech</title>
        <meta name="description" content="Experience the future of technology with Zion Tech Group's revolutionary 2027 services. Quantum AI, autonomous space mining, DNA computing, and cutting-edge emerging technologies. Transform your business with solutions that were once science fiction." />
        <meta name="keywords" content="quantum AI, space technology, DNA computing, autonomous systems, emerging technology, 2027 technology, AI services, quantum computing, biotechnology, space mining" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Revolutionary 2027 Technology Services" />
        <meta property="og:description" content="Experience the future of technology with our cutting-edge AI, quantum computing, and emerging technology services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary 2027 Technology Services" />
        <meta name="twitter:description" content="Experience the future of technology with our cutting-edge AI, quantum computing, and emerging technology services." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8b5cf6" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "description": "Revolutionary 2027 technology services including quantum AI, space technology, and emerging technologies",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "email": "kleber@ziontechgroup.com"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "364 E Main St STE 1008",
                "addressLocality": "Middletown",
                "addressRegion": "DE",
                "postalCode": "19709",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://github.com/Zion-Holdings"
              ]
            })
          }}
        />
      </Head>

      <UltraQuantumHolographicBackground>
        {/* Ultra Advanced Navigation */}
        <UltraFuturisticNavigation2027 />

        {/* Ultra Futuristic Hero Section 2027 */}
        <UltraFuturisticHero2027 />

        {/* Revolutionary 2027 Hero Section */}
        <Revolutionary2027Hero />

        {/* Revolutionary 2027 Services Showcase */}
        <Revolutionary2027ServicesShowcase />

        {/* Enhanced 2026 Services Showcase */}
        <Enhanced2026ServicesShowcase />

        {/* Revolutionary 2026 Services Showcase */}
        <Revolutionary2026ServiceShowcase />

        {/* Enhanced Services Showcase */}
        <EnhancedServiceShowcase 
          services={allServices.filter(service => 'variant' in service).slice(0, 12)}
          title="Enhanced Services Showcase"
          subtitle="Discover our comprehensive range of innovative solutions"
          maxServices={12}
        />

        {/* Contact Information Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-cyan-900/10"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Get in Touch
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to transform your business with revolutionary 2027 technology? 
                Contact us today to discover how we can accelerate your digital transformation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Call Us</h3>
                <a 
                  href="tel:+13024640950"
                  className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  +1 302 464 0950
                </a>
                <p className="text-gray-400 mt-2">Available 24/7 for urgent inquiries</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Email Us</h3>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors duration-300 break-all"
                >
                  kleber@ziontechgroup.com
                </a>
                <p className="text-gray-400 mt-2">We respond within 2 hours</p>
              </div>

              <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/30 backdrop-blur-xl border border-pink-500/30 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Visit Us</h3>
                <address className="text-gray-300 not-italic">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709<br />
                  United States
                </address>
                <p className="text-gray-400 mt-2">Global headquarters</p>
              </div>
            </motion.div>

            {/* Service Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-20 text-center"
            >
              <h3 className="text-3xl font-bold text-white mb-12">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Our Service Portfolio
                </span>
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{serviceStats.totalServices}+</div>
                  <div className="text-gray-400">Total Services</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{serviceStats.aiServices}+</div>
                  <div className="text-gray-400">AI Services</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{serviceStats.quantumServices}+</div>
                  <div className="text-gray-400">Quantum Services</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{serviceStats.spaceServices}+</div>
                  <div className="text-gray-400">Space Technology</div>
                </div>
              </div>
            </motion.div>

            {/* Final CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-20 text-center"
            >
              <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Lead the Future?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join thousands of forward-thinking companies already using our revolutionary 2027 technology services. 
                  Don't wait for the future - create it with Zion Tech Group.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link 
                    href="https://ziontechgroup.com/services"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
                  >
                    <span>Explore All Services</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a 
                    href="tel:+13024640950"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-600/50"
                  >
                    <span>Call Now</span>
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </UltraQuantumHolographicBackground>
    </>
  );
}
