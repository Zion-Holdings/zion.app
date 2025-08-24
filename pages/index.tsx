import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Cpu, Target, Microscope, TestTube, Clock, ShieldCheck } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground2029 from '../components/ui/UltraFuturisticBackground2029';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import UltraAdvancedNavigation2026 from '../components/layout/UltraAdvancedNavigation2026';
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029';
import UltraFuturisticFooter2029 from '../components/layout/UltraFuturisticFooter2029';
import EnhancedServiceShowcase from '../components/sections/EnhancedServiceShowcase';
import Enhanced2026ServicesShowcase from '../components/sections/Enhanced2026ServicesShowcase';
import Enhanced2026ServicesShowcaseV4 from '../components/sections/Enhanced2026ServicesShowcaseV4';
import Revolutionary2026ServiceShowcase from '../components/sections/Revolutionary2026ServiceShowcase';
import EnhancedHero2026 from '../components/sections/EnhancedHero2026';
import UltraFuturisticHero2029 from '../components/sections/UltraFuturisticHero2029';
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
import { futuristic2028Services } from '../data/2028-futuristic-innovations';
import { emergingTech2028Services } from '../data/2028-emerging-tech-services';
import { futuristic2029AIServices } from '../data/2029-futuristic-ai-services';
import { quantumInnovation2029Services } from '../data/2029-quantum-innovation-services';
import { emergingTech2029Services } from '../data/2029-emerging-tech-services';
import { enterpriseIT2029Services } from '../data/2029-enterprise-it-services';
import { practicalBusiness2029Solutions } from '../data/2029-practical-business-solutions';

export default function HomePage() {
  const heroStats = [
    { value: '500+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: <Cpu className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <ShieldCheck className="w-6 h-6" /> },
    { value: '30+', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Brain className="w-6 h-6" /> },
    { value: '$100B+', label: 'Combined Market Value', color: 'text-yellow-400', icon: <TrendingUp className="w-6 h-6" /> },
    { value: '1200%+', label: 'Average ROI', color: 'text-purple-400', icon: <DollarSign className="w-6 h-6" /> },
  ];

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
    ...futuristic2028Services,
    ...emergingTech2028Services,
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
    ...futuristic2029AIServices,
    ...quantumInnovation2029Services,
    ...emergingTech2029Services,
    ...enterpriseIT2029Services,
    ...practicalBusiness2029Solutions
  ];

  // Service statistics
  const serviceStats = {
    totalServices: allServices.length,
    aiServices: nextGenerationAIServices.length + innovativeAIServices.length + realMarketServices.filter(s => s.category.includes('AI')).length + revolutionary2025Services.filter(s => s.category.includes('AI')).length + nextGenInnovations2025.filter(s => s.category.includes('AI')).length + innovative2026Services.filter(s => s.category.includes('AI')).length + emergingTech2026Services.filter(s => s.category.includes('AI')).length + innovative2026MicroSaasServices.filter(s => s.category.includes('AI')).length + innovative2026MicroSaasServicesV2.filter(s => s.category.includes('AI')).length + emergingTech2026ServicesV2.filter(s => s.category.includes('AI')).length + enterpriseIT2026ServicesV2.filter(s => s.category.includes('AI')).length + revolutionary2026AIServices.length + revolutionary2027Services.filter(s => s.category.includes('AI')).length + emergingTech2027Services.filter(s => s.category.includes('AI')).length + futuristic2029AIServices.length + emergingTech2029Services.filter(s => s.category.includes('AI')).length + enterpriseIT2029Services.filter(s => s.category.includes('AI')).length + practicalBusiness2029Solutions.filter(s => s.category.includes('AI')).length,
    quantumServices: quantumSpaceServices.length + quantumAIServices2025.length + revolutionary2027Services.filter(s => s.category.includes('Quantum')).length + quantumInnovation2029Services.length,
    spaceServices: quantumSpaceServices.length + revolutionary2027Services.filter(s => s.category.includes('Space')).length + emergingTech2029Services.filter(s => s.category.includes('Space')).length,
    biotechServices: revolutionary2027Services.filter(s => s.category.includes('Biotech')).length + emergingTech2027Services.filter(s => s.category.includes('Biotech')).length + emergingTech2029Services.filter(s => s.category.includes('Biotech')).length
  };

  const heroFeatures = [
    {
      title: 'AI Consciousness Evolution',
      description: 'Revolutionary AI that develops emotional intelligence and self-awareness',
      icon: <Brain className="w-6 h-6" />,
      href: '/ai-consciousness-evolution-2025'
    },
    {
      title: 'AI Code Generation & Review Platform',
      description: 'Advanced AI platform for automated code generation, review, and optimization across multiple languages.',
      price: '$199/month',
      category: 'AI Automation',
      icon: '💻',
      color: 'from-emerald-500 to-teal-600',
      href: '/ai-code-generation-review'
    },
    {
      title: 'Zero Trust Security Platform',
      description: 'Comprehensive zero trust security with continuous verification and adaptive access controls.',
      price: '$599/month',
      category: 'Cybersecurity',
      icon: '🔒',
      color: 'from-red-500 to-pink-600',
      href: '/zero-trust-security-platform'
    },
    {
      title: 'Quantum Computing Services',
      description: 'Next-generation quantum computing solutions for complex problem solving.',
      price: '$2,999/month',
      category: 'Quantum Technology',
      icon: '⚛️',
      color: 'from-purple-500 to-indigo-600',
      href: '/quantum-computing-services'
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - Revolutionary AI, Quantum Computing & Emerging Technology Solutions</title>
        <meta name="description" content="Leading provider of cutting-edge AI services, quantum computing solutions, and emerging technology platforms. Transform your business with our revolutionary micro SaaS services and AI automation tools." />
        <meta name="keywords" content="AI services, quantum computing, emerging technology, micro SaaS, automation, cybersecurity, business intelligence, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary AI & Technology Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI, quantum computing, and emerging technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary AI & Technology Solutions" />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI, quantum computing, and emerging technology solutions." />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      <UltraFuturisticBackground2029 />
      
      <UltraFuturisticNavigation2029 />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-4 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Revolutionizing the future with cutting-edge AI, quantum computing, and emerging technology solutions that transform businesses and drive innovation.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Button
                  href="/services"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Button>
              </div>

              {/* Hero Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`${stat.color} mb-2 flex justify-center`}>
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hero Features */}
        <section className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-900/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Technology Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our cutting-edge platforms that are reshaping industries and driving the future of technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {heroFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={feature.href} className="block">
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-400/20 group-hover:scale-105">
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                      {feature.price && (
                        <div className="text-cyan-400 font-semibold text-lg mb-3">
                          {feature.price}
                        </div>
                      )}
                      {feature.category && (
                        <span className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 text-xs px-3 py-1 rounded-full border border-cyan-400/30">
                          {feature.category}
                        </span>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Statistics */}
        <section className="py-20 bg-gradient-to-b from-gray-900/80 to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions spanning AI, quantum computing, space technology, and enterprise IT.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8"
              >
                <div className="text-5xl mb-4">🚀</div>
                <div className="text-4xl font-bold text-white mb-2">{serviceStats.totalServices}+</div>
                <div className="text-gray-300">Total Services</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8"
              >
                <div className="text-5xl mb-4">🤖</div>
                <div className="text-4xl font-bold text-white mb-2">{serviceStats.aiServices}+</div>
                <div className="text-gray-300">AI Services</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8"
              >
                <div className="text-5xl mb-4">⚛️</div>
                <div className="text-4xl font-bold text-white mb-2">{serviceStats.quantumServices}+</div>
                <div className="text-gray-300">Quantum Services</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8"
              >
                <div className="text-5xl mb-4">🌌</div>
                <div className="text-4xl font-bold text-white mb-2">{serviceStats.spaceServices}+</div>
                <div className="text-gray-300">Space Tech</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to transform your business with cutting-edge technology? Contact us today.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
              >
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Phone</h3>
                <p className="text-gray-300">{contactInfo.mobile}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
              >
                <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Email</h3>
                <p className="text-gray-300">{contactInfo.email}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
              >
                <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Address</h3>
                <p className="text-gray-300 text-sm">{contactInfo.address}</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-10 py-4 text-xl font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Start Your Journey
                <Rocket className="ml-2 w-6 h-6" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <UltraFuturisticFooter2029 />
    </>
  );
}
