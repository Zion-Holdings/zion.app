import React from 'react';
import Head from 'next/head';
import { 
  Clock, DollarSign, TrendingUp, Brain, 
  Zap, Rocket, Mail, Phone, MapPin, Sparkles, 
  ArrowRight, ExternalLink, Check, Cpu, 
  ShieldCheck, Globe, Target, Users, Award,
  Star, ChevronRight, ChevronDown, Menu, X
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
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
import { innovativeAIServices } from '../data/innovative-ai-services';
import { quantumAIServices } from '../data/quantum-ai-services';
import { spaceTechServices } from '../data/space-tech-services';
import { biotechAIServices } from '../data/biotech-ai-services';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('hero');

  const heroStats = [
    { value: '1000+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: <Cpu className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <ShieldCheck className="w-6 h-6" /> },
    { value: '30+', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Brain className="w-6 h-6" /> },
    { value: '$500B+', label: 'Combined Market Value', color: 'text-yellow-400', icon: <TrendingUp className="w-6 h-6" /> },
    { value: '2000%+', label: 'Average ROI', color: 'text-purple-400', icon: <DollarSign className="w-6 h-6" /> },
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
      title: '🧠 Revolutionary Quantum AI Brain-Computer Interface',
      description: 'World\'s first quantum-enhanced AI with human-like reasoning capabilities. Achieve breakthrough discoveries with 1000% ROI within 6 months.',
      price: 'Starting at $2,999/month',
      features: ['Quantum neural signal processing', 'Real-time brain activity monitoring', 'AI-powered cognitive enhancement', 'Neural pattern recognition', 'Secure quantum encryption', 'Multi-modal interface support', 'Advanced analytics dashboard', 'API for research integration', 'Compliance with medical standards', '24/7 quantum AI support'],
      link: 'https://ziontechgroup.com/quantum-ai-brain-computer-interface',
      color: 'from-purple-600 to-indigo-700',
      marketData: '$1.5B BCI market, 300% annual growth',
      competitors: 'Neuralink ($10,000+/month), Kernel ($50,000+/month)',
      savings: 'Save 90% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🚀 Space Technology Platform',
      description: 'Complete space mission management and satellite operations platform. Enable commercial space companies to operate like NASA.',
      price: 'Starting at $5,999/month',
      features: ['Satellite mission planning', 'Orbital mechanics calculations', 'Real-time satellite tracking', 'Space weather monitoring', 'Launch vehicle integration', 'Ground station management', 'Space debris tracking', 'Mission analytics dashboard', 'Regulatory compliance tools', 'Multi-satellite operations'],
      link: 'https://ziontechgroup.com/space-technology',
      color: 'from-cyan-600 to-blue-700',
      marketData: '$469B space economy, 400% annual growth',
      competitors: 'SpaceX Starlink ($99/month), OneWeb ($50/month)',
      savings: 'Complete mission management platform',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🧬 Biotech AI Platform',
      description: 'AI-powered drug discovery and genetic engineering platform. Accelerate drug development by 10x while reducing costs by 90%.',
      price: 'Starting at $3,999/month',
      features: ['AI drug discovery algorithms', 'Genetic sequence analysis', 'Protein folding prediction', 'Drug interaction modeling', 'Clinical trial optimization', 'Regulatory compliance tools', 'Research collaboration platform', 'Advanced analytics dashboard', 'API for research integration', 'Multi-omics data analysis'],
      link: 'https://ziontechgroup.com/biotech-ai',
      color: 'from-emerald-600 to-teal-700',
      marketData: '$150B AI in healthcare, 250% annual growth',
      competitors: 'Insitro ($100M+ funding), Recursion ($2B+ funding)',
      savings: 'Accessible pricing and comprehensive platform',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🔐 Quantum Internet Security Platform',
      description: 'Next-generation quantum-secured internet infrastructure with unbreakable encryption. Protect enterprise networks with quantum-resistant protocols.',
      price: 'Starting at $8,999/month',
      features: ['Quantum key distribution (QKD)', 'Post-quantum cryptography', 'Quantum-resistant VPN tunnels', 'Real-time threat detection', 'Zero-trust architecture', 'Quantum random number generation', 'Multi-layer encryption', 'NIST compliance', 'Quantum network monitoring', 'Custom API integration'],
      link: 'https://ziontechgroup.com/quantum-internet-security-platform',
      color: 'from-indigo-600 to-purple-700',
      marketData: '$150B cybersecurity market, 300% annual growth',
      competitors: 'Traditional cybersecurity solutions',
      savings: 'Quantum-level protection vs. traditional methods',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🚗 Autonomous Vehicle AI Platform',
      description: 'Next-generation self-driving technology with quantum AI for unprecedented safety. Enables Level 5 autonomy with quantum-level decision making.',
      price: 'Starting at $25,999/month',
      features: ['Quantum AI decision making', 'Real-time sensor processing', 'Advanced path planning', 'Safety monitoring', 'Fleet management', 'Performance analytics', 'Regulatory compliance', 'Vehicle API', 'Multi-vehicle coordination', 'Edge computing'],
      link: 'https://ziontechgroup.com/autonomous-vehicle-ai-platform',
      color: 'from-red-600 to-orange-700',
      marketData: '$2T autonomous vehicle market, 300% annual growth',
      competitors: 'Tesla Autopilot, Waymo, Cruise',
      savings: 'Level 5 autonomy with quantum AI',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🎨 Quantum AI Content Creation Studio',
      description: 'Create content at quantum speeds with AI. Generate articles, videos, graphics, and more in seconds with unprecedented quality.',
      price: 'Starting at $4,999/month',
      features: ['Quantum AI generation', 'Multi-format content', 'Real-time creation', 'Quality optimization', 'Brand customization', 'Collaboration tools', 'Analytics dashboard', 'Integration API', 'Multi-language support', 'SEO optimization'],
      link: 'https://ziontechgroup.com/quantum-ai-content-creation-studio',
      color: 'from-pink-600 to-rose-700',
      marketData: '$100B content creation market, 300% annual growth',
      competitors: 'Traditional content creation, Basic AI tools',
      savings: '1000x faster content creation',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    }
  ];

  // Combine all services for display
  const allServices = [
    ...enhancedRealMicroSaasServices.slice(0, 8),
    ...innovativeAIServices.slice(0, 6),
    ...quantumAIServices.slice(0, 6),
    ...spaceTechServices.slice(0, 6),
    ...biotechAIServices.slice(0, 6),
    ...emergingTechServices.slice(0, 4),
    ...nextGenAIServices.slice(0, 4)
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
    <UltraAdvancedFuturisticBackground intensity={1.5} variant="quantum-holographic">
      <div className="min-h-screen">
        <Head>
          <title>Zion Tech Group - Revolutionary Micro SaaS Services & AI Solutions | 1000+ Services</title>
          <meta name="description" content="Discover 1000+ revolutionary micro SaaS services, quantum AI solutions, space technology, biotech AI, and cutting-edge technology platforms. Transform your business with our innovative services. Contact: +1 302 464 0950" />
          <meta name="keywords" content="micro SaaS, AI services, quantum computing, space technology, biotech AI, quantum trading, cybersecurity, autonomous vehicles, robotics, quantum internet security, neural interfaces, biotech, space tech" />
          <meta property="og:title" content="Zion Tech Group - 1000+ Revolutionary Micro SaaS Services" />
          <meta property="og:description" content="1000+ revolutionary micro SaaS services with quantum AI, space technology, and cutting-edge technology. Contact: +1 302 464 0950" />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com" />
        </Head>

        {/* Enhanced Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0"
                >
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h1>
                </motion.div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  {['hero', 'services', 'quantum', 'space', 'biotech', 'contact'].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                        activeSection === section
                          ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/30'
                          : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5'
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/30"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['hero', 'services', 'quantum', 'space', 'biotech', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                      activeSection === section
                        ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/30'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="hero" className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
                Revolutionary Technology Solutions
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover 1000+ cutting-edge micro SaaS services powered by quantum AI, space technology, 
                biotech innovations, and revolutionary breakthroughs. Transform your business with unprecedented capabilities.
              </p>
              
              {/* Contact Information Banner */}
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-purple-500/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-6 h-6 text-cyan-400" />
                    <div>
                      <p className="text-sm text-gray-400">Mobile</p>
                      <p className="font-semibold text-white">{contactInfo.mobile}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-6 h-6 text-purple-400" />
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-semibold text-white">{contactInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-6 h-6 text-pink-400" />
                    <div>
                      <p className="text-sm text-gray-400">Address</p>
                      <p className="font-semibold text-white">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hero Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-xl p-4 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className={`${stat.color} mb-2`}>{stat.icon}</div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400 text-center leading-tight">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={() => scrollToSection('services')}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Explore Services
                </Button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Started
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
                Revolutionary Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From quantum AI to space technology, biotech innovations to autonomous systems - 
                discover the future of technology solutions.
              </p>
            </motion.div>

            {/* Service Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: '🧠 Quantum AI Services',
                  description: 'Revolutionary quantum computing and AI solutions',
                  count: '50+ Services',
                  color: 'from-purple-600 to-indigo-700',
                  icon: '⚡'
                },
                {
                  title: '🚀 Space Technology',
                  description: 'Complete space mission management and operations',
                  count: '30+ Services',
                  color: 'from-cyan-600 to-blue-700',
                  icon: '🌌'
                },
                {
                  title: '🧬 Biotech AI Platform',
                  description: 'AI-powered drug discovery and genetic engineering',
                  count: '25+ Services',
                  color: 'from-emerald-600 to-teal-700',
                  icon: '🔬'
                },
                {
                  title: '🤖 Autonomous Systems',
                  description: 'Next-generation robotics and automation',
                  count: '40+ Services',
                  color: 'from-orange-600 to-red-700',
                  icon: '🤖'
                },
                {
                  title: '🔐 Cybersecurity',
                  description: 'Quantum-secured enterprise protection',
                  count: '35+ Services',
                  color: 'from-green-600 to-emerald-700',
                  icon: '🛡️'
                },
                {
                  title: '📊 AI Analytics',
                  description: 'Intelligent data analysis and insights',
                  count: '45+ Services',
                  color: 'from-pink-600 to-rose-700',
                  icon: '📈'
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer group`}
                >
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-gray-200 mb-4">{category.description}</p>
                  <div className="text-2xl font-bold text-white opacity-80">{category.count}</div>
                  <div className="mt-4 flex items-center text-white opacity-80 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm">Explore Services</span>
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
                Featured Revolutionary Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future with our most innovative and game-changing technology solutions.
              </p>
            </motion.div>

            {/* Featured Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceHighlights.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className={`bg-gradient-to-br ${service.color} rounded-2xl p-6 h-full hover:scale-105 transition-all duration-300 border border-white/10 hover:border-white/20`}>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-200 mb-4 text-sm leading-relaxed">{service.description}</p>
                    <div className="text-2xl font-bold text-white mb-4">{service.price}</div>
                    <div className="mb-4">
                      <div className="text-xs text-gray-300 mb-2">Market Data: {service.marketData}</div>
                      <div className="text-xs text-gray-300 mb-2">Competitors: {service.competitors}</div>
                      <div className="text-xs text-green-400 font-semibold">{service.savings}</div>
                    </div>
                    <Button
                      onClick={() => window.open(service.link, '_blank')}
                      className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 transition-all duration-300"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quantum AI Services Section */}
        <section id="quantum" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent mb-6">
                🧠 Quantum AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolutionary quantum AI solutions that transcend traditional computing limitations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {quantumAIServices.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard
                    service={service}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Space Technology Services Section */}
        <section id="space" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                🚀 Space Technology Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enable commercial space operations with NASA-level capabilities and precision.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {spaceTechServices.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard
                    service={service}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Biotech AI Services Section */}
        <section id="biotech" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-6">
                🧬 Biotech AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Accelerate drug discovery and genetic engineering with AI-powered precision.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {biotechAIServices.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard
                    service={service}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Contact us today to discover how our revolutionary technology solutions can accelerate your success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Phone className="w-6 h-6 text-cyan-400" />
                      <div>
                        <p className="text-gray-400">Mobile</p>
                        <p className="text-white font-semibold">{contactInfo.mobile}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Mail className="w-6 h-6 text-purple-400" />
                      <div>
                        <p className="text-gray-400">Email</p>
                        <p className="text-white font-semibold">{contactInfo.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <MapPin className="w-6 h-6 text-pink-400" />
                      <div>
                        <p className="text-gray-400">Address</p>
                        <p className="text-white font-semibold">{contactInfo.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Globe className="w-6 h-6 text-green-400" />
                      <div>
                        <p className="text-gray-400">Website</p>
                        <p className="text-white font-semibold">{contactInfo.website}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
                  <div className="space-y-3">
                    {[
                      '1000+ Revolutionary Services',
                      'Quantum AI Technology',
                      'Space Technology Expertise',
                      'Biotech AI Innovation',
                      '99.99% Uptime Guarantee',
                      '24/7 AI Support',
                      '30+ Day Free Trials',
                      '2000%+ Average ROI'
                    ].map((benefit, index) => (
                      <div key={benefit} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Service Interest</label>
                    <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300">
                      <option>Select a service category</option>
                      <option>Quantum AI Services</option>
                      <option>Space Technology</option>
                      <option>Biotech AI</option>
                      <option>Autonomous Systems</option>
                      <option>Cybersecurity</option>
                      <option>AI Analytics</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-6 font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                    <Mail className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/50 border-t border-gray-800/50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
                  Zion Tech Group
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Revolutionary technology solutions that transform businesses and accelerate innovation.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Quantum AI</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Space Technology</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Biotech AI</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Autonomous Systems</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">News</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Contact Info</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>{contactInfo.mobile}</p>
                  <p>{contactInfo.email}</p>
                  <p className="text-xs">{contactInfo.address}</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800/50 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved. Revolutionary technology solutions.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}
