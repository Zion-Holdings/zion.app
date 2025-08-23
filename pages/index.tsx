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
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import UltraAdvancedNavigation2026 from '../components/layout/UltraAdvancedNavigation2026';
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029';
import UltraFuturisticFooter2028 from '../components/layout/UltraFuturisticFooter2028';
import EnhancedServiceShowcase from '../components/sections/EnhancedServiceShowcase';
import Enhanced2026ServicesShowcase from '../components/sections/Enhanced2026ServicesShowcase';
import Revolutionary2026ServiceShowcase from '../components/sections/Revolutionary2026ServiceShowcase';
import Revolutionary2027ServicesShowcase from '../components/sections/Revolutionary2027ServicesShowcase';
import Revolutionary2027Hero from '../components/sections/Revolutionary2027Hero';
import EnhancedHero2026 from '../components/sections/EnhancedHero2026';
import UltraFuturisticHero2029 from '../components/sections/UltraFuturisticHero2029';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
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

  const platformFeatures = [
    {
      icon: <Cloud className="w-8 h-8 text-white" />,
      title: 'Real Micro SaaS Services',
      description: '75+ fully functional micro SaaS tools with real implementations, not just mockups.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI content generation, SEO automation, chatbots, and business intelligence.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      gradient: 'from-fuchsia-400 to-purple-500',
      pricing: 'Free tier, Pro from $29/month'
    },
    {
      icon: <Lock className="w-8 h-8 text-white" />,
      title: 'API Rate Limiter',
      description: 'Intelligent rate limiting with configurable policies, real-time analytics, and Express.js middleware support.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
      pricing: 'Free tier, Enterprise from $99/month'
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: 'Email Validator',
      description: 'Comprehensive email validation with security risk assessment, disposable email detection, and MX record validation.',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      gradient: 'from-blue-400 to-cyan-500',
      pricing: 'Free tier, Pro from $19/month'
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Password Strength Checker',
      description: 'Advanced password analysis with security recommendations, policy enforcement, and strong password generation.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
      pricing: 'Free tier, Pro from $15/month'
    },
    {
      icon: <Link className="w-8 h-8 text-white" />,
      title: 'URL Shortener',
      description: 'Professional URL shortening with analytics, custom aliases, password protection, and expiration dates.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
      pricing: 'Free tier, Pro from $25/month'
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: 'JSON Formatter',
      description: 'Advanced JSON processing with validation, transformation, schema generation, and performance optimization.',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      gradient: 'from-teal-400 to-cyan-500',
      pricing: 'Free tier, Pro from $20/month'
    },
    {
      icon: <QrCode className="w-8 h-8 text-white" />,
      title: 'QR Code Generator',
      description: 'Professional QR code creation with customization, security validation, and multiple content types support.',
      color: 'bg-gradient-to-br from-pink-500 to-rose-600',
      gradient: 'from-pink-400 to-rose-500',
      pricing: 'Free tier, Pro from $30/month'
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: 'File Type Detector',
      description: 'Intelligent file analysis with security scanning, metadata extraction, and magic number detection.',
      color: 'bg-gradient-to-br from-amber-500 to-orange-600',
      gradient: 'from-amber-400 to-orange-500',
      pricing: 'Free tier, Pro from $35/month'
    }
  ];

  // Combine all services for comprehensive showcase
  const allServices = [
    ...enhancedRealMicroSaasServices,
    ...innovativeMicroSaasServices,
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
    ...cuttingEdge2028MicroSaas,
    ...practicalBusinessSolutions2028,
    ...futuristicAIServices2029,
    ...quantumInnovationServices2029,
    ...spaceInnovationServices2029,
    ...emergingTechServices2029,
    ...enterpriseITServices2029
  ];

  // Get unique services by ID to avoid duplicates
  const uniqueServices = allServices.filter((service, index, self) => 
    index === self.findIndex(s => s.id === service.id)
  );

  // Service statistics
  const serviceStats = {
    totalServices: allServices.length,
    aiServices: nextGenerationAIServices.length + innovativeAIServices.length + realMarketServices.filter(s => s.category.includes('AI')).length + revolutionary2025Services.filter(s => s.category.includes('AI')).length + revolutionary2026Services.filter(s => s.category.includes('AI')).length + emergingTech2026Services.filter(s => s.category.includes('AI')).length,
    emergingTech: emergingTechnologyServices.length + emergingTech2025Services.length + emergingTech2026Services.length,
    itSolutions: comprehensiveITSolutions.length + enterpriseITServices.length + comprehensiveIT2026Services.length,
    microSaas: enhancedRealMicroSaasServices.length + innovativeMicroSaasServices.length,
    revolutionaryServices: revolutionary2025Services.length + nextGenInnovations2025.length + revolutionary2026Services.length
=======
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
    <UltraAdvancedFuturisticBackground 
      intensity="extreme" 
      colorScheme="quantum-fusion"
      particleCount={500}
      animationSpeed={2.0}
      enableHolographic={true}
      enableQuantumEffects={true}
    >
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
              initial={{ opacity: 0, y: 30 }}
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
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-25"></div>
                </div>
              </motion.div>

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
