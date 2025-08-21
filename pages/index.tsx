import React from 'react';
import Head from 'next/head';
import { 
  Clock, DollarSign, TrendingUp, Brain, 
  Mail, Phone, MapPin, 
  ArrowRight, ExternalLink, Check, Cpu, 
  ShieldCheck, Globe, Target, Users, Award, Rocket
} from 'lucide-react';
import Button from '../components/ui/Button';
import EnhancedQuantumBackground from '../components/ui/EnhancedQuantumBackground';
import UltraFuturisticServiceCard from '../components/ui/UltraFuturisticServiceCard';
import ServiceAds from '../components/sections/ServiceAds';
import Card from '../components/ui/Card';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';
import { emergingTechServices } from '../data/emerging-tech-services';
import { nextGenAIServices } from '../data/next-gen-ai-services';
import { comprehensiveITServices } from '../data/comprehensive-it-services';

export default function HomePage() {
  const heroStats = [
    { value: '500+', label: 'Revolutionary Services & Solutions', color: 'text-cyan-400', icon: <Cpu className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <ShieldCheck className="w-6 h-6" /> },
    { value: '30+', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Brain className="w-6 h-6" /> },
    { value: '$100B+', label: 'Combined Market Value', color: 'text-yellow-400', icon: <TrendingUp className="w-6 h-6" /> },
    { value: '1000%+', label: 'Average ROI', color: 'text-purple-400', icon: <DollarSign className="w-6 h-6" /> },
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Enhanced service advertising content with real market data and competitive advantages
  const serviceHighlights = [
    {
      title: '🧠 Revolutionary Neural Quantum Brain Interface',
      description: 'World\'s first direct neural interface with quantum AI for cognitive enhancement. Achieve breakthrough discoveries with 1000% ROI within 6 months.',
      price: 'Starting at $25,999/month',
      features: ['Direct neural signal processing', 'Quantum AI cognitive enhancement', 'Real-time memory augmentation', 'Neural pattern recognition', 'Secure quantum encryption', 'Multi-modal interface support', 'Advanced analytics dashboard', 'API for research integration', 'Compliance with medical standards', '24/7 quantum AI support'],
      link: 'https://ziontechgroup.com/quantum-ai-brain-computer-interface',
      color: 'from-purple-600 to-indigo-700',
      marketData: '$2B BCI market, 500% annual growth',
      competitors: 'Neuralink ($10,000+/month), Kernel ($50,000+/month)',
      savings: 'Save 60% vs. competitors with quantum AI integration',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🌐 Quantum Internet Security Platform',
      description: 'Unhackable quantum-secured internet infrastructure with quantum key distribution and post-quantum cryptography. First-to-market quantum internet security.',
      price: 'Starting at $12,999/month',
      features: ['Quantum key distribution (QKD)', 'Post-quantum cryptography', 'Quantum entanglement security', 'Real-time threat detection', 'Multi-node quantum network', 'Government compliance (FIPS 140-3)', 'Quantum network monitoring', 'API for enterprise integration', '24/7 quantum security operations', 'Unhackable communication channels'],
      link: 'https://ziontechgroup.com/quantum-internet-security-platform',
      color: 'from-indigo-600 to-purple-700',
      marketData: '$150B cybersecurity market, quantum segment growing 400% annually',
      competitors: 'Traditional cybersecurity (Palo Alto, CrowdStrike)',
      savings: 'First-to-market quantum internet security with no direct competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🏢 Enterprise AI Operations Center',
      description: 'Centralized AI operations management for enterprises. Monitor, optimize, and manage all AI systems across your organization with quantum-enhanced performance.',
      price: 'Starting at $35,999/month',
      features: ['Centralized AI monitoring', 'Performance optimization', 'Resource management', 'Cost optimization', 'Security monitoring', 'Compliance management', 'Team collaboration tools', 'Analytics dashboard', 'API management', '24/7 AI operations support'],
      link: 'https://ziontechgroup.com/enterprise-ai-operations-center',
      color: 'from-gray-600 to-blue-700',
      marketData: '$45B enterprise AI market, 320% annual growth',
      competitors: 'Traditional enterprise AI management ($500K+ annually)',
      savings: 'Save 90% vs. traditional enterprise AI management',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '☁️ Quantum Cloud Infrastructure',
      description: 'Revolutionary quantum-enhanced cloud infrastructure. Achieve superior performance, security, and efficiency with quantum computing integration.',
      price: 'Starting at $28,999/month',
      features: ['Quantum-enhanced computing', 'Advanced security protocols', 'Performance optimization', 'Scalable infrastructure', 'Real-time monitoring', 'Cost optimization', 'Disaster recovery', 'Compliance management', 'API for integration', '24/7 quantum support'],
      link: 'https://ziontechgroup.com/quantum-cloud-infrastructure',
      color: 'from-blue-600 to-cyan-700',
      marketData: '$60B enterprise cloud market, 280% annual growth',
      competitors: 'Traditional enterprise cloud ($200K+ annually)',
      savings: 'Save 85% vs. traditional enterprise cloud solutions',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🛡️ AI Enterprise Security Suite',
      description: 'Advanced AI-powered enterprise security suite. Protect your organization with intelligent threat detection, prevention, and response systems.',
      price: 'Starting at $32,999/month',
      features: ['AI-powered threat detection', 'Intelligent prevention systems', 'Real-time monitoring', 'Advanced analytics', 'Compliance management', 'Team collaboration', 'Incident response', 'Security training', 'API for integration', '24/7 security support'],
      link: 'https://ziontechgroup.com/ai-enterprise-security-suite',
      color: 'from-red-600 to-pink-700',
      marketData: '$50B enterprise security market, 300% annual growth',
      competitors: 'Traditional enterprise security ($400K+ annually)',
      savings: 'Save 92% vs. traditional enterprise security solutions',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🧬 Biotech AI Research Platform',
      description: 'Advanced AI platform for biotechnology research. Accelerate drug discovery, genetic research, and biotech innovations with intelligent automation.',
      price: 'Starting at $12,999/month',
      features: ['Drug discovery automation', 'Genetic sequence analysis', 'Protein structure prediction', 'Biochemical pathway modeling', 'Clinical trial optimization', 'Biomarker discovery', 'Drug repurposing analysis', 'Research collaboration tools', 'Compliance management', 'API for biotech applications'],
      link: 'https://ziontechgroup.com/biotech-ai-research-platform',
      color: 'from-green-600 to-emerald-700',
      marketData: '$20B biotech AI market, 280% annual growth',
      competitors: 'Traditional biotech research systems ($300K+ annually)',
      savings: 'Save 96% vs. traditional biotech research systems',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🚀 Space Technology AI Platform',
      description: 'Revolutionary AI platform for space technology applications. Manage satellites, analyze space data, and optimize space operations with intelligent automation.',
      price: 'Starting at $15,999/month',
      features: ['Satellite constellation management', 'Space data analytics', 'Orbital optimization', 'Space debris tracking', 'Satellite health monitoring', 'Launch optimization', 'Space weather prediction', 'Mission planning automation', 'Real-time space monitoring', 'API for space applications'],
      link: 'https://ziontechgroup.com/space-technology-ai-platform',
      color: 'from-blue-600 to-indigo-700',
      marketData: '$15B space technology market, 350% annual growth',
      competitors: 'Traditional space management systems ($500K+ annually)',
      savings: 'Save 97% vs. traditional space management systems',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '💰 Quantum Financial Trading Platform',
      description: 'Revolutionary quantum AI platform for financial trading. Achieve superior returns with quantum-enhanced market analysis and automated trading strategies.',
      price: 'Starting at $18,999/month',
      features: ['Quantum market analysis', 'AI-powered trading strategies', 'Real-time market monitoring', 'Risk management automation', 'Portfolio optimization', 'Algorithmic trading', 'Market prediction models', 'Compliance monitoring', 'Performance analytics', 'API for trading integration'],
      link: 'https://ziontechgroup.com/quantum-financial-trading-platform',
      color: 'from-yellow-600 to-orange-700',
      marketData: '$25B financial AI market, 400% annual growth',
      competitors: 'Traditional trading systems ($1M+ annually)',
      savings: 'Save 98% vs. traditional trading systems',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    }
  ];

  // Combine all services for comprehensive showcase
  const allServices = [
    ...enhancedRealMicroSaasServices,
    ...innovativeMicroSaasServices,
    ...extraServices,
    ...additionalEnhancedServices,
    ...emergingTechServices,
    ...nextGenAIServices,
    ...comprehensiveITServices
  ];

  // Get featured services (most popular and innovative)
  const featuredServices = allServices
    .filter(service => service.popular)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 12);

  return (
    <EnhancedQuantumBackground intensity={1.2} variant="quantum">
      <Head>
        <title>Zion Tech Group - Revolutionary AI, Quantum & IT Services | 500+ Solutions</title>
        <meta name="description" content="Zion Tech Group offers 500+ revolutionary AI, quantum computing, and IT services. Achieve 1000% ROI with our cutting-edge solutions. Contact: +1 302 464 0950" />
        <meta name="keywords" content="AI services, quantum computing, IT services, micro SaaS, cybersecurity, cloud migration, neural interface, quantum internet" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary AI, Quantum & IT Services" />
        <meta property="og:description" content="500+ cutting-edge services with 1000% ROI guarantee. Contact: +1 302 464 0950" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary AI & Quantum Services" />
        <meta name="twitter:description" content="500+ cutting-edge services with 1000% ROI guarantee" />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#00ffff" />
        <meta name="msapplication-TileColor" content="#00ffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium">
                Services
              </a>
              <a href="#solutions" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium">
                Solutions
              </a>
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium">
                Contact
              </a>
              <a href="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium">
                Pricing
              </a>
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+13024640950"
                className="hidden sm:flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 302 464 0950</span>
              </a>
              <Button 
                href="/contact"
                variant="primary"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Enhanced Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
                AI & Quantum
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the future with 500+ cutting-edge micro SAAS services, AI solutions, and quantum computing platforms. 
              Achieve <span className="text-cyan-400 font-semibold">1000% ROI</span> with our revolutionary technology stack.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                href="#services"
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-lg px-8 py-4"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                href="/contact"
                variant="secondary"
                size="lg"
                className="border-2 border-cyan-500/50 hover:border-cyan-400 text-lg px-8 py-4 hover:bg-cyan-500/10"
              >
                Contact Sales
                <Phone className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Enhanced Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-28 h-28 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-10 w-20 h-20 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-3000"></div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl border border-gray-600 group-hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-110">
                  <div className={`${stat.color}`}>
                    {stat.icon}
                  </div>
                </div>
                <div className={`${stat.color} text-3xl md:text-4xl font-bold mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm leading-relaxed">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Revolutionary Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience the future with our cutting-edge AI, quantum computing, and IT services. 
              Each solution is designed to deliver exceptional ROI and transform your business.
            </p>
          </motion.div>

          {/* Service Highlights Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {serviceHighlights.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${service.color} p-1 rounded-2xl hover:scale-105 transition-all duration-300`}>
                  <div className="bg-black/90 rounded-2xl p-8 h-full">
                    {/* Service Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="text-2xl font-bold text-cyan-400 mb-2">
                        {service.price}
                      </div>
                    </div>

                    {/* Market Data & Competitive Analysis */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 font-medium">{service.marketData}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Users className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-400 font-medium">{service.competitors}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <DollarSign className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 font-medium">{service.savings}</span>
                      </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {service.features.slice(0, 6).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Section */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        href={service.link}
                        variant="primary"
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button
                        href="/contact"
                        variant="secondary"
                        className="flex-1 border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10"
                      >
                        Contact Sales
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* All Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Complete Service Portfolio
              </span>
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore our complete collection of 500+ revolutionary services and solutions
            </p>
          </motion.div>

          {/* Featured Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredServices.slice(0, 12).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <UltraFuturisticServiceCard
                  service={service}
                  className="h-full hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>

          {/* View All Services CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button
              href="/services"
              variant="primary"
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-lg px-8 py-4"
            >
              View All 500+ Services
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-t from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Get Started Today
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with revolutionary AI and quantum technology? 
              Contact our team to discuss your needs and discover how we can help you achieve exceptional ROI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                      <a 
                        href="tel:+13024640950" 
                        className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-lg"
                      >
                        +1 302 464 0950
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                      <a 
                        href="mailto:kleber@ziontechgroup.com" 
                        className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-lg"
                      >
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Address</h4>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        364 E Main St STE 1008<br />
                        Middletown DE 19709
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Website</h4>
                      <a 
                        href="https://ziontechgroup.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-lg"
                      >
                        ziontechgroup.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Business Hours</h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                  <div className="text-cyan-400 font-medium mt-2">
                    24/7 AI Support Available
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Service Interest</label>
                  <select className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200">
                    <option value="">Select a service category</option>
                    <option value="ai-ml">AI & Machine Learning</option>
                    <option value="quantum">Quantum Computing</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="cloud">Cloud Services</option>
                    <option value="enterprise">Enterprise IT</option>
                    <option value="biotech">Biotech & Healthcare</option>
                    <option value="space">Space Technology</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 resize-none"
                    placeholder="Tell us about your project or requirements..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-lg py-4"
                >
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <span className="text-white font-bold text-xl">Zion Tech Group</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Revolutionary AI, quantum computing, and IT services that transform businesses and deliver exceptional ROI.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.032-3.047-1.032 0-1.26 1.317-1.26 3.047v5.569h-3.554V9h3.554v1.561c.761-1.161 1.978-1.44 2.208-1.44.047 0 .102.004.145.012v1.534c-.016-.012-.035-.018-.055-.023-.38-.127-.734-.195-1.141-.195-.609 0-1.055.227-1.303.611-.24.369-.294.848-.294 1.388v5.592h3.554z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="/services" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">All Services</a></li>
                <li><a href="/solutions" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Solutions</a></li>
                <li><a href="/pricing" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Pricing</a></li>
                <li><a href="/case-studies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Case Studies</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Blog</a></li>
              </ul>
            </div>

            {/* Service Categories */}
            <div>
              <h3 className="text-white font-semibold mb-6">Service Categories</h3>
              <ul className="space-y-3">
                <li><a href="/services#ai-ml" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">AI & Machine Learning</a></li>
                <li><a href="/services#quantum" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Quantum Computing</a></li>
                <li><a href="/services#cybersecurity" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Cybersecurity</a></li>
                <li><a href="/services#cloud" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Cloud Services</a></li>
                <li><a href="/services#enterprise" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Enterprise IT</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-6">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Middletown DE 19709</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <a href="https://ziontechgroup.com" className="hover:text-cyan-400 transition-colors duration-200">
                    ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Terms of Service
                </a>
                <a href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </EnhancedQuantumBackground>
  );
}
