import React from 'react';
import Head from 'next/head';
import { 
  Clock, DollarSign, TrendingUp, Brain, 
  Zap, Rocket, Mail, Phone, MapPin, Sparkles, 
  ArrowRight, ExternalLink, Check, Cpu, 
  ShieldCheck, Globe, Target, Users, Award,
  Star, TrendingDown, Activity, Eye, Lock,
  Cloud, Database, Network, Server, Code,
  Palette, Music, Video, Camera, Shield,
  Heart, Zap as Lightning, Globe as World,
  Smartphone, Monitor, Laptop, Tablet
} from 'lucide-react';
import Button from '../components/ui/Button';
import QuantumHolographicMatrixBackground from '../components/ui/QuantumHolographicMatrixBackground';
import UltraFuturisticServiceCard from '../components/ui/UltraFuturisticServiceCard';
import ServiceAds from '../components/sections/ServiceAds';
import Card from '../components/ui/Card';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';
import { advancedAIServices } from '../data/advanced-ai-services';
import { quantumAdvancedServices } from '../data/quantum-advanced-services';
import { emergingTechServices } from '../data/emerging-tech-services';
import { spaceTechServices } from '../data/space-tech-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { cybersecurityAIServices } from '../data/cybersecurity-ai-services';
import { blockchainWeb3Services } from '../data/blockchain-web3-services';
import { iotEdgeServices } from '../data/iot-edge-services';
import { cloudDataServices } from '../data/cloud-data-services';

export default function HomePage() {
  const heroStats = [
    { value: '850+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: <Cpu className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <ShieldCheck className="w-6 h-6" /> },
    { value: '30+', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Brain className="w-6 h-6" /> },
    { value: '$100B+', label: 'Combined Market Value', color: 'text-yellow-400', icon: <TrendingUp className="w-6 h-6" /> },
    { value: '1500%+', label: 'Average ROI', color: 'text-purple-400', icon: <DollarSign className="w-6 h-6" /> },
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
      description: 'World\'s first quantum-enhanced AI with human-like reasoning capabilities. Achieve breakthrough discoveries with 1500% ROI within 6 months.',
      price: 'Starting at $2,999/month',
      features: ['Quantum neural signal processing', 'Real-time brain activity monitoring', 'AI-powered cognitive enhancement', 'Neural pattern recognition', 'Secure quantum encryption'],
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
      features: ['Satellite mission planning', 'Orbital mechanics calculations', 'Real-time satellite tracking', 'Space weather monitoring', 'Launch vehicle integration'],
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
      features: ['AI drug discovery algorithms', 'Genetic sequence analysis', 'Protein folding prediction', 'Drug interaction modeling', 'Clinical trial optimization'],
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
      title: '💰 Quantum Financial Trading Platform',
      description: 'Quantum AI-powered algorithmic trading with nanosecond precision. Process market data at quantum speeds for unprecedented accuracy.',
      price: 'Starting at $7,999/month',
      features: ['Quantum AI trading algorithms', 'Nanosecond execution speed', 'Real-time market analysis', 'Risk management tools', 'Portfolio optimization'],
      link: 'https://ziontechgroup.com/quantum-financial-trading',
      color: 'from-yellow-600 to-orange-700',
      marketData: '$15T algorithmic trading, 150% annual growth',
      competitors: 'Renaissance Technologies ($100B+ AUM), Two Sigma ($60B+ AUM)',
      savings: 'Accessible quantum AI technology for smaller firms',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🤖 AI Autonomous Robotics Platform',
      description: 'Next-generation autonomous robotics for industrial automation. Achieve 600% ROI through increased productivity and reduced labor costs.',
      price: 'Starting at $1,299/month',
      features: ['Autonomous robot navigation', 'AI-powered decision making', 'Computer vision integration', 'Adaptive learning algorithms', 'Multi-robot coordination'],
      link: 'https://ziontechgroup.com/ai-autonomous-robotics',
      color: 'from-green-600 to-emerald-700',
      marketData: '$12.5B autonomous robotics market, 320% annual growth',
      competitors: 'Boston Dynamics ($100K+), ABB ($50K+)',
      savings: 'Accessible pricing and comprehensive platform',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🛡️ AI Cybersecurity Threat Hunting',
      description: 'Proactive threat detection and response with AI-powered security intelligence. Save $2M annually through improved threat detection.',
      price: 'Starting at $399/month',
      features: ['AI-powered threat hunting', 'Real-time anomaly detection', 'Behavioral analysis', 'Threat intelligence feeds', 'Automated incident response'],
      link: 'https://ziontechgroup.com/ai-cybersecurity-threat-hunting',
      color: 'from-red-600 to-orange-700',
      marketData: '$15.8B AI cybersecurity market, 250% annual growth',
      competitors: 'Darktrace ($50K+), CrowdStrike ($100K+)',
      savings: 'Accessible pricing and comprehensive security',
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
    ...advancedAIServices.slice(0, 6),
    ...quantumAdvancedServices.slice(0, 6),
    ...emergingTechServices.slice(0, 6),
    ...spaceTechServices.slice(0, 6),
    ...innovativeAIServices.slice(0, 6),
    ...cybersecurityAIServices.slice(0, 6),
    ...blockchainWeb3Services.slice(0, 6),
    ...iotEdgeServices.slice(0, 6),
    ...cloudDataServices.slice(0, 6)
  ];

  // Service categories for better organization
  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: <Brain className="w-8 h-8" />,
      count: '200+ Services',
      color: 'from-purple-600 to-indigo-700',
      description: 'Advanced AI solutions for every industry'
    },
    {
      name: 'Quantum Computing',
      icon: <Zap className="w-8 h-8" />,
      count: '100+ Services',
      color: 'from-cyan-600 to-blue-700',
      description: 'Quantum-powered solutions for complex problems'
    },
    {
      name: 'Cybersecurity',
      icon: <Shield className="w-8 h-8" />,
      count: '125+ Services',
      color: 'from-red-600 to-orange-700',
      description: 'Next-generation security solutions'
    },
    {
      name: 'Blockchain & Web3',
      icon: <Network className="w-8 h-8" />,
      count: '100+ Services',
      color: 'from-green-600 to-emerald-700',
      description: 'Decentralized and blockchain solutions'
    },
    {
      name: 'IoT & Edge Computing',
      icon: <Globe className="w-8 h-8" />,
      count: '110+ Services',
      color: 'from-teal-600 to-cyan-700',
      description: 'Connected and intelligent systems'
    },
    {
      name: 'Cloud & Data',
      icon: <Cloud className="w-8 h-8" />,
      count: '95+ Services',
      color: 'from-blue-600 to-indigo-700',
      description: 'Cloud computing and data analytics'
    },
    {
      name: 'Space Technology',
      icon: <Rocket className="w-8 h-8" />,
      count: '50+ Services',
      color: 'from-purple-600 to-pink-700',
      description: 'Space exploration and satellite solutions'
    }
  ];

  return (
    <QuantumHolographicMatrixBackground variant="quantum" intensity={1.5}>
      <div className="min-h-screen bg-black/50 text-white overflow-hidden">
        <Head>
          <title>Zion Tech Group - Revolutionary AI, Quantum & Space Technology Solutions</title>
          <meta name="description" content="Leading provider of revolutionary AI, quantum computing, and space technology solutions. 850+ micro SaaS services with 1500%+ ROI guarantee. Contact: +1 302 464 0950" />
          <meta name="keywords" content="AI, quantum computing, space technology, micro SaaS, technology solutions, Zion Tech Group" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
          <meta property="og:description" content="Leading provider of AI, quantum computing, and space technology solutions with 1500%+ ROI guarantee." />
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
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Leading the future with 850+ revolutionary AI, quantum computing, and space technology solutions. 
                Achieve breakthrough results with our cutting-edge micro SaaS services.
              </p>
              
              {/* Contact Information Banner */}
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-purple-500/30 shadow-2xl">
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

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                  <Button 
                    href="/services" 
                    variant="primary"
                    className="text-lg px-8 py-4"
                  >
                    Explore 850+ Services
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
                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105">
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

        {/* Service Categories Section */}
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
                Explore Our Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover comprehensive solutions across all major technology domains with our organized service categories.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className={`bg-gradient-to-r ${category.color} p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{category.name}</h3>
                    <p className="text-gray-300 mb-4">{category.description}</p>
                    <div className="text-2xl font-bold text-cyan-400">{category.count}</div>
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
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
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
                From AI and quantum computing to space technology and emerging tech - discover 850+ revolutionary solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
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
                  View All 850+ Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/30 shadow-2xl"
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
    </QuantumHolographicMatrixBackground>
  );
}
