import React from 'react';
import Head from 'next/head';
import { 
  Clock, DollarSign, TrendingUp, Brain, 
  Mail, Phone, MapPin, 
  ArrowRight, Rocket, Star, Users, Shield, Zap
} from 'lucide-react';
import Button from '../components/ui/Button';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
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
import { realOperationalServices } from '../data/real-operational-services';
import { newOperationalServices2025 } from '../data/new-operational-services-2025';
import { newRealMarketAdditions } from '../data/new-real-market-additions';

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
    ...newRealMarketAdditions
  ];

  const featuredOffers = professionalServices.slice(0, 3);

  // Service statistics
  const serviceStats = {
    totalServices: allServices.length,
    aiServices: nextGenerationAIServices.length + innovativeAIServices.length + realMarketServices.filter(s => s.category.includes('AI')).length,
    emergingTech: emergingTechnologyServices.length,
    itSolutions: comprehensiveITSolutions.length + enterpriseITServices.length,
    microSaas: enhancedRealMicroSaasServices.length + innovativeMicroSaasServices.length
  };

  return (
    <EnhancedFuturisticBackground 
      intensity="high" 
      colorScheme="quantum"
      particleCount={200}
      animationSpeed={1.2}
    >
      <div className="min-h-screen">
        <Head>
          <title>Zion Tech Group - Revolutionary AI, Quantum & IT Services | 800+ Solutions</title>
          <meta name="description" content="Zion Tech Group offers 800+ revolutionary AI, quantum computing, and IT services. Achieve 1000% ROI with our cutting-edge solutions. Contact: +1 302 464 0950" />
          <meta name="keywords" content="AI services, quantum computing, IT services, micro SaaS, cybersecurity, cloud migration, neural interface, quantum internet, blockchain, metaverse, IoT, edge computing" />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Zion Tech Group - Revolutionary AI, Quantum & IT Services" />
          <meta property="og:description" content="800+ cutting-edge services with 1000% ROI guarantee. Contact: +1 302 464 0950" />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com" />
        </Head>

        {/* Hero Section */}
        <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionary AI, Quantum Computing & IT Services
              </p>
              <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                800+ cutting-edge services delivering 1000% ROI. From neural quantum brain interfaces to enterprise IT infrastructure.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button 
                  href="/services" 
                  variant="primary"
                  className="text-lg px-8 py-4"
                >
                  Explore 800+ Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  href="/market-pricing" 
                  variant="secondary"
                  className="text-lg px-8 py-4"
                >
                  See Market Pricing
                  <TrendingUp className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  href="/contact" 
                  variant="secondary"
                  className="text-lg px-8 py-4"
                >
                  Get Started Today
                  <Phone className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Statistics */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Technology Solutions
              </h2>
              <p className="text-gray-300 text-lg">
                Discover our extensive portfolio of cutting-edge services
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl hover:border-cyan-500/40 transition-colors"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">{serviceStats.totalServices}+</div>
                <div className="text-gray-300 text-sm">Total Services</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl hover:border-purple-500/40 transition-colors"
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">{serviceStats.aiServices}+</div>
                <div className="text-gray-300 text-sm">AI Services</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl hover:border-green-500/40 transition-colors"
              >
                <div className="text-3xl font-bold text-green-400 mb-2">{serviceStats.emergingTech}+</div>
                <div className="text-gray-300 text-sm">Emerging Tech</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl hover:border-orange-500/40 transition-colors"
              >
                <div className="text-3xl font-bold text-orange-400 mb-2">{serviceStats.itSolutions}+</div>
                <div className="text-gray-300 text-sm">IT Solutions</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl hover:border-pink-500/40 transition-colors"
              >
                <div className="text-3xl font-bold text-pink-400 mb-2">{serviceStats.microSaas}+</div>
                <div className="text-gray-300 text-sm">Micro SaaS</div>
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

        {/* Why Choose Zion Tech Group */}
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
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver cutting-edge technology solutions with proven ROI and exceptional support
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl hover:border-cyan-500/40 transition-colors"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast Setup</h3>
                <p className="text-gray-300 text-sm">
                  Get started in minutes, not weeks. Our services are designed for immediate value delivery.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl hover:border-purple-500/40 transition-colors"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Transparent Pricing</h3>
                <p className="text-gray-300 text-sm">
                  No hidden fees, no enterprise sales calls. Simple monthly pricing that scales with your business.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl hover:border-green-500/40 transition-colors"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300 text-sm">
                  Bank-level security, SOC 2 compliance, and 99.9% uptime guarantee for peace of mind.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl hover:border-orange-500/40 transition-colors"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Proven ROI</h3>
                <p className="text-gray-300 text-sm">
                  Each service delivers measurable ROI within months. 300-1000% returns reported by our customers.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of companies achieving breakthrough results with our revolutionary services
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <span className="text-lg">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <span className="text-lg">{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-6 h-6 text-green-400" />
                  <span className="text-lg">{contactInfo.address}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  href="/contact" 
                  variant="primary"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Start Your Transformation
                  <Rocket className="ml-2 w-6 h-6" />
                </Button>
                <Button 
                  href="/pricing" 
                  variant="secondary"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  View Pricing
                  <DollarSign className="ml-2 w-6 h-6" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}
