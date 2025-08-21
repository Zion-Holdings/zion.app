import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles, MessageCircle, Briefcase, Atom, Building } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground2029 from '../components/backgrounds/UltraFuturisticBackground2029';
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
import { cuttingEdgeInnovations2029 } from '../data/2029-cutting-edge-innovations';
import { emergingTechServices2029 } from '../data/2029-emerging-tech-services';
import { practicalBusinessSolutions2029 } from '../data/2029-practical-business-solutions';
import { ultimateMicroSaasServices } from '../data/ultimate-micro-saas-services';

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
    ...cuttingEdgeInnovations2029,
    ...emergingTechServices2029,
    ...practicalBusinessSolutions2029,
    ...ultimateMicroSaasServices
  ];

  // Filter real services only
  const realServices = allServices.filter(service => 'realService' in service && service.realService === true);

  return (
    <>
      <Head>
        <title>Zion Tech Group - 2029 Revolutionary Technology Services & AI Solutions</title>
        <meta name="description" content="Leading provider of revolutionary technology services, AI solutions, quantum computing, and cutting-edge innovations for 2029. Transform your business with Zion Tech Group's advanced micro SAAS solutions." />
        <meta name="keywords" content="AI services, quantum computing, technology solutions, micro SAAS, 2029 innovations, Zion Tech Group, artificial intelligence, quantum technology, business automation" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Zion Tech Group - 2029 Revolutionary Technology Services" />
        <meta property="og:description" content="Leading provider of revolutionary technology services, AI solutions, and cutting-edge innovations for 2029." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - 2029 Revolutionary Technology Services" />
        <meta name="twitter:description" content="Leading provider of revolutionary technology services, AI solutions, and cutting-edge innovations for 2029." />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      {/* Futuristic Background */}
      <UltraFuturisticBackground2029 />

      {/* Navigation */}
      <UltraFuturisticNavigation2029 />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                2029 Revolutionary
              </span>
              <br />
              <span className="text-white">Technology Services</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI, quantum computing, and revolutionary innovations. 
              Leading the future of technology with Zion Tech Group.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Explore Services
            </Link>
            <Link
              href="/support"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold text-lg rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Started
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{realServices.length}+</div>
              <div className="text-slate-400">Revolutionary Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-slate-400">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-slate-400">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">500%+</div>
              <div className="text-slate-400">Average ROI</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Featured Revolutionary Services
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover our most innovative and cutting-edge technology solutions that are transforming industries worldwide.
            </p>
          </motion.div>

          {/* Featured Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {realServices.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{'icon' in service ? service.icon : '🚀'}</div>
                    <div className="text-2xl font-bold text-cyan-400">{'price' in service ? service.price : 'Contact Us'}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-slate-400 mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-slate-500">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">
                        {'rating' in service ? service.rating : 'N/A'} ({'reviews' in service ? service.reviews : 0})
                      </span>
                    </div>
                    
                    <Link
                      href={'link' in service && service.link ? service.link : `/services/${service.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Services Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold text-lg rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105 shadow-2xl shadow-purple-500/25"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              View All {realServices.length}+ Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Technology Categories Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Technology Categories
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our comprehensive range of revolutionary technology solutions across multiple domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: 'AI & Machine Learning', count: realServices.filter(s => s.category?.includes('AI') || s.category?.includes('Machine Learning')).length, color: 'from-emerald-500 to-teal-500' },
              { icon: Atom, title: 'Quantum Computing', count: realServices.filter(s => s.category?.includes('Quantum')).length, color: 'from-indigo-500 to-purple-500' },
              { icon: Building, title: 'Enterprise IT', count: realServices.filter(s => s.category?.includes('Enterprise') || s.category?.includes('IT')).length, color: 'from-blue-500 to-cyan-500' },
              { icon: Rocket, title: 'Emerging Tech', count: realServices.filter(s => s.category?.includes('Emerging') || s.category?.includes('Innovation')).length, color: 'from-pink-500 to-rose-500' }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-4">
                    {category.count} revolutionary services
                  </p>
                  
                  <div className="flex items-center text-cyan-400 group-hover:translate-x-1 transition-transform duration-300">
                    <span className="text-sm font-medium">Explore</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join the future of technology with Zion Tech Group. Our revolutionary services are designed to give you a competitive edge in 2029 and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center space-x-2 text-slate-400">
                <Phone className="w-5 h-5" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <MapPin className="w-5 h-5" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            
            <Link
              href="/support"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-2xl shadow-cyan-500/25"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Your Transformation Today
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <UltraFuturisticFooter2029 />
    </>
  );
}
