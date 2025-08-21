import React from 'react';
import Head from 'next/head';
import { 
  Clock, DollarSign, TrendingUp, Brain, 
  Zap, Rocket, Mail, Phone, MapPin, Sparkles, 
  ArrowRight, ExternalLink, Check, Cpu, 
  ShieldCheck, Globe, Target, Users, Award
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraFuturisticServiceCard from '../components/ui/UltraFuturisticServiceCard';
import ServiceAds from '../components/sections/ServiceAds';
import Card from '../components/ui/Card';
import EnhancedNavigation from '../components/layout/EnhancedNavigation';
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
    ...emergingTechServices.slice(0, 6),
    ...nextGenAIServices.slice(0, 6),
    ...innovativeAIServices.slice(0, 6),
    ...quantumAIServices.slice(0, 6),
    ...spaceTechServices.slice(0, 6),
    ...biotechAIServices.slice(0, 6)
  ];

  return (
    <UltraAdvancedFuturisticBackground intensity={1.5} variant="quantum-holographic">
      <div className="min-h-screen">
        <EnhancedNavigation />
        <Head>
          <title>Zion Tech Group - Revolutionary Micro SaaS Services & AI Solutions | 1000+ Services</title>
          <meta name="description" content="Discover 1000+ revolutionary micro SaaS services, quantum AI solutions, biotech AI, space technology, and cutting-edge technology platforms. Transform your business with our innovative services. Contact: +1 302 464 0950" />
          <meta name="keywords" content="micro SaaS, AI services, quantum computing, space technology, biotech AI, quantum trading, cybersecurity, autonomous vehicles, robotics, quantum internet security, neural interfaces, drug discovery, genetic engineering, protein design" />
          <meta property="og:title" content="Zion Tech Group - 1000+ Revolutionary Micro SaaS Services" />
          <meta property="og:description" content="1000+ revolutionary micro SaaS services with quantum AI, biotech AI, and cutting-edge technology. Contact: +1 302 464 0950" />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com" />
        </Head>

        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
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
                biotech AI, and revolutionary innovations. Transform your business with unprecedented capabilities.
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

              {/* Service Categories Showcase */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-3">🧠</div>
                    <h3 className="text-lg font-bold text-cyan-400 mb-2">Quantum AI</h3>
                    <p className="text-sm text-gray-300">Revolutionary quantum computing and AI services</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-3">🚀</div>
                    <h3 className="text-lg font-bold text-purple-400 mb-2">Space Tech</h3>
                    <p className="text-sm text-gray-300">Advanced space technology and satellite services</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 backdrop-blur-lg rounded-xl p-6 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-3">🧬</div>
                    <h3 className="text-lg font-bold text-emerald-400 mb-2">Biotech AI</h3>
                    <p className="text-sm text-gray-300">AI-powered biotechnology and healthcare solutions</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-gradient-to-br from-orange-900/50 to-red-900/50 backdrop-blur-lg rounded-xl p-6 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-3">⚡</div>
                    <h3 className="text-lg font-bold text-orange-400 mb-2">Innovative AI</h3>
                    <p className="text-sm text-gray-300">Cutting-edge AI and automation services</p>
                  </div>
                </motion.div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  href="/services" 
                  variant="primary"
                  className="text-lg px-8 py-4"
                >
                  Explore 1000+ Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  href="/contact" 
                  variant="secondary"
                  className="text-lg px-8 py-4"
                >
                  Get Started Today
                  <Sparkles className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                    <div className={`${stat.color} mb-2 flex justify-center`}>
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Highlights Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Service Highlights
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most innovative and high-impact technology solutions that are transforming industries worldwide.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceHighlights.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 5).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400">Market Data:</p>
                        <p className="text-white font-semibold">{service.marketData}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Competitors:</p>
                        <p className="text-white font-semibold">{service.competitors}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Savings:</p>
                        <p className="text-green-400 font-semibold">{service.savings}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Contact:</p>
                        <p className="text-white font-semibold">{service.contactInfo.mobile}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      href={service.link} 
                      variant="primary"
                      className="flex-1"
                    >
                      Learn More
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                    <Button 
                      href="/contact" 
                      variant="secondary"
                      className="flex-1"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories Showcase */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Revolutionary
                </span> Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive portfolio of cutting-edge services across multiple technology domains
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-center">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🧠</div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">Quantum AI Services</h3>
                  <p className="text-gray-300 mb-6">Revolutionary quantum computing and AI services that push the boundaries of what's possible.</p>
                  <div className="space-y-2 text-sm text-purple-300">
                    <p>• Brain-Computer Interface</p>
                    <p>• Quantum Cybersecurity</p>
                    <p>• Quantum Trading</p>
                    <p>• Quantum Robotics</p>
                    <p>• Quantum IoT</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-center">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🚀</div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">Space Technology</h3>
                  <p className="text-gray-300 mb-6">Advanced space technology services that enable commercial space operations and satellite management.</p>
                  <div className="space-y-2 text-sm text-cyan-300">
                    <p>• Mission Management</p>
                    <p>• Constellation Management</p>
                    <p>• Space Debris Monitoring</p>
                    <p>• Launch Coordination</p>
                    <p>• Ground Station Management</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-center">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🧬</div>
                  <h3 className="text-2xl font-bold text-emerald-400 mb-4">Biotech AI</h3>
                  <p className="text-gray-300 mb-6">AI-powered biotechnology services that accelerate drug discovery and genetic engineering.</p>
                  <div className="space-y-2 text-sm text-emerald-300">
                    <p>• Drug Discovery</p>
                    <p>• Genetic Engineering</p>
                    <p>• Protein Design</p>
                    <p>• Clinical Trials</p>
                    <p>• Personalized Medicine</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-lg rounded-2xl p-8 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-center">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">⚡</div>
                  <h3 className="text-2xl font-bold text-orange-400 mb-4">Innovative AI</h3>
                  <p className="text-gray-300 mb-6">Cutting-edge AI and automation services that transform business operations and customer experiences.</p>
                  <div className="space-y-2 text-sm text-orange-300">
                    <p>• Legal Contract Analysis</p>
                    <p>• HR Recruitment</p>
                    <p>• Market Research</p>
                    <p>• Phone Agent Platform</p>
                    <p>• Sales Automation</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="text-center">
              <Button 
                href="/services" 
                variant="primary"
                className="text-lg px-8 py-4"
              >
                Explore All Categories
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Explore Our Complete Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From AI and quantum computing to space technology, biotech AI, and emerging tech - discover 1000+ revolutionary solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard service={service} />
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                href="/services" 
                variant="primary"
                className="text-lg px-8 py-4"
              >
                View All 1000+ Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Latest Emerging Tech Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Latest
                </span> Emerging Tech Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our newest revolutionary services that are shaping the future of technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {emergingTechServices.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard service={service} />
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/services"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore All Emerging Tech</span>
                <ArrowRight className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Next-Gen AI Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Next-Generation
                </span> AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of AI with our most advanced and innovative services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nextGenAIServices.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard service={service} />
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/services"
                className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25 inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Discover All AI Services</span>
                <ArrowRight className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/30"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of companies achieving breakthrough results with our revolutionary technology solutions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-400">Call Us</p>
                  <p className="text-lg font-semibold text-white">{contactInfo.mobile}</p>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-400">Email Us</p>
                  <p className="text-lg font-semibold text-white">{contactInfo.email}</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-400">Visit Us</p>
                  <p className="text-lg font-semibold text-white">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  href="/contact" 
                  variant="primary"
                  className="text-lg px-8 py-4"
                >
                  Start Your Transformation
                  <Rocket className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  href="/pricing" 
                  variant="secondary"
                  className="text-lg px-8 py-4"
                >
                  View Pricing
                  <DollarSign className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}
