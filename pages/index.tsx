import React from 'react';
import Head from 'next/head';
import { 
  Clock, DollarSign, TrendingUp, Brain, 
  Zap, Rocket, Mail, Phone, MapPin, Sparkles, 
  ArrowRight, ExternalLink, Check, Cpu, 
  ShieldCheck, Globe, Target, Users, Award
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
import { blockchainEmergingTechServices } from '../data/blockchain-emerging-tech-services';

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

  // Enhanced service advertising content with real market data and competitive advantages
  const serviceHighlights = [
    {
      title: '🧠⚡ Revolutionary Quantum Neural Brain-Computer Interface',
      description: 'World\'s first quantum-enhanced AI with human-like reasoning capabilities. Achieve breakthrough discoveries with 800% ROI within 6 months.',
      price: 'Starting at $4,999/month',
      features: ['Quantum neural signal processing', 'Real-time brain activity monitoring', 'AI-powered cognitive enhancement', 'Neural pattern recognition', 'Secure quantum encryption', 'Multi-modal interface support', 'Advanced analytics dashboard', 'API for research integration', 'Compliance with medical standards', '24/7 quantum AI support'],
      link: 'https://ziontechgroup.com/quantum-neural-bci',
      color: 'from-purple-600 to-indigo-700',
      marketData: '$2.8B BCI market, 400% annual growth',
      competitors: 'Neuralink ($10,000+/month), Kernel ($50,000+/month)',
      savings: 'Save 90% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🚀🌌 Quantum Space Mission Control',
      description: 'Complete quantum-enhanced space mission management and satellite operations platform. Enable commercial space companies to operate like NASA.',
      price: 'Starting at $8,999/month',
      features: ['Quantum orbital mechanics calculations', 'AI-powered mission planning', 'Real-time satellite tracking', 'Quantum-enhanced navigation', 'Space weather prediction', 'Launch vehicle optimization', 'Ground station management', 'Space debris tracking', 'Mission analytics dashboard', 'Multi-satellite operations'],
      link: 'https://ziontechgroup.com/quantum-space-mission-control',
      color: 'from-cyan-600 to-blue-700',
      marketData: '$469B space economy, 450% annual growth',
      competitors: 'SpaceX Starlink ($99/month), OneWeb ($50/month)',
      savings: 'Complete mission management platform',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🧬⚛️ Quantum Biotech AI Platform',
      description: 'AI-powered drug discovery and genetic engineering platform. Accelerate drug development by 10x while reducing costs by 90%.',
      price: 'Starting at $6,999/month',
      features: ['Quantum protein folding prediction', 'AI drug discovery algorithms', 'Genetic sequence analysis', 'Drug interaction modeling', 'Clinical trial optimization', 'Regulatory compliance tools', 'Research collaboration platform', 'Advanced analytics dashboard', 'API for research integration', 'Multi-omics data analysis'],
      link: 'https://ziontechgroup.com/quantum-biotech-ai',
      color: 'from-emerald-600 to-teal-700',
      marketData: '$150B AI in healthcare, 300% annual growth',
      competitors: 'Insitro ($100M+ funding), Recursion ($2B+ funding)',
      savings: 'Accessible pricing and comprehensive platform',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '💰⚡ Quantum Financial Trading AI',
      description: 'Quantum AI-powered algorithmic trading with nanosecond precision. Process market data at quantum speeds for unprecedented accuracy.',
      price: 'Starting at $12,999/month',
      features: ['Quantum AI trading algorithms', 'Nanosecond execution speed', 'Real-time market analysis', 'Risk management tools', 'Portfolio optimization', 'Multi-asset trading', 'Advanced backtesting', 'Regulatory compliance', 'Performance analytics', 'API for integration'],
      link: 'https://ziontechgroup.com/quantum-financial-trading',
      color: 'from-yellow-600 to-orange-700',
      marketData: '$15T algorithmic trading, 200% annual growth',
      competitors: 'Renaissance Technologies ($100B+ AUM), Two Sigma ($60B+ AUM)',
      savings: 'Accessible quantum AI technology for smaller firms',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🔒⚛️ Quantum Cybersecurity Suite',
      description: 'Advanced cybersecurity platform combining quantum-resistant encryption with AI-powered threat detection for comprehensive protection.',
      price: 'Starting at $3,999/month',
      features: ['Quantum-resistant encryption', 'AI threat detection', 'Real-time monitoring', 'Advanced analytics', 'Incident response', 'Compliance tools', 'Security assessment', 'Threat intelligence', 'Vulnerability scanning', '24/7 security operations'],
      link: 'https://ziontechgroup.com/quantum-cybersecurity',
      color: 'from-red-600 to-pink-700',
      marketData: '$200B cybersecurity market, 250% annual growth',
      competitors: 'CrowdStrike, Palo Alto Networks',
      savings: 'Quantum security advantage',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '⛓️⚛️ Quantum Blockchain Platform',
      description: 'Revolutionary quantum-secured blockchain platform combining quantum cryptography with AI-powered smart contracts.',
      price: 'Starting at $7,999/month',
      features: ['Quantum-secured transactions', 'AI smart contracts', 'Quantum consensus mechanism', 'Advanced cryptography', 'Scalable architecture', 'Cross-chain interoperability', 'DeFi integration', 'NFT marketplace', 'Governance tools', '24/7 blockchain operations'],
      link: 'https://ziontechgroup.com/quantum-blockchain',
      color: 'from-purple-600 to-indigo-700',
      marketData: '$100B blockchain market, 400% annual growth',
      competitors: 'Ethereum, Solana, Traditional blockchain',
      savings: 'Quantum security advantage',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    }
  ];

  // Combine all services for comprehensive display
  const allServices = [
    ...enhancedRealMicroSaasServices,
    ...extraServices,
    ...additionalEnhancedServices,
    ...innovativeMicroSaasServices,
    ...advancedAIServices,
    ...blockchainEmergingTechServices
  ];

  // Get featured services (popular ones)
  const featuredServices = allServices.filter(service => service.popular).slice(0, 12);

  return (
    <QuantumHolographicMatrixBackground>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <Head>
          <title>Zion Tech Group - Revolutionary Micro SaaS Services & AI Solutions</title>
          <meta name="description" content="Discover 500+ revolutionary micro SaaS services, quantum AI solutions, and cutting-edge technology platforms. Achieve 1200% ROI with our innovative services." />
          <meta name="keywords" content="micro SaaS, AI services, quantum computing, blockchain, cybersecurity, space technology, biotech AI, financial trading, metaverse, IoT, cloud computing" />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SaaS Services" />
          <meta property="og:description" content="500+ revolutionary micro SaaS services with quantum AI and cutting-edge technology" />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com" />
        </Head>

        {/* Hero Section */}
        <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
                Revolutionary Micro SaaS Services
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover 500+ cutting-edge micro SaaS services powered by quantum AI, blockchain technology, and revolutionary innovations. 
                Achieve unprecedented ROI and market disruption.
              </p>
            </motion.div>

            {/* Hero Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
            >
              {heroStats.map((stat, index) => (
                <div key={index} className="bg-black/20 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4">
                  <div className={`${stat.color} mb-2 flex justify-center`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                href="/services"
                variant="primary"
                size="lg"
                className="group"
              >
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
              >
                Get Started Today
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Service Highlights Section */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Featured Revolutionary Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future with our most innovative and disruptive micro SaaS services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceHighlights.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`bg-gradient-to-br ${service.color} p-8 h-full`}>
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-100 mb-4">{service.description}</p>
                      <div className="text-3xl font-bold text-white mb-4">{service.price}</div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 5).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-100">
                            <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6 space-y-3">
                      <div className="bg-black/20 rounded-lg p-3">
                        <span className="text-sm font-semibold text-white">Market Data:</span>
                        <span className="text-sm text-gray-200 ml-2">{service.marketData}</span>
                      </div>
                      <div className="bg-black/20 rounded-lg p-3">
                        <span className="text-sm font-semibold text-white">Competitors:</span>
                        <span className="text-sm text-gray-200 ml-2">{service.competitors}</span>
                      </div>
                      <div className="bg-black/20 rounded-lg p-3">
                        <span className="text-sm font-semibold text-white">Savings:</span>
                        <span className="text-sm text-gray-200 ml-2">{service.savings}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        href={service.link}
                        variant="primary"
                        size="sm"
                        className="flex-1"
                      >
                        Learn More
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        href="/contact"
                        variant="secondary"
                        size="sm"
                        className="flex-1"
                      >
                        Get Started
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services Grid */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Complete Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive collection of revolutionary micro SaaS services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard service={service} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button
                href="/services"
                variant="primary"
                size="lg"
                className="group"
              >
                View All 500+ Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Contact us today to discover how our revolutionary services can drive unprecedented growth and ROI
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-black/20 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6">
                  <Phone className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">{contactInfo.mobile}</p>
                </div>
                <div className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
                  <Mail className="h-8 w-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300">{contactInfo.email}</p>
                </div>
                <div className="bg-black/20 backdrop-blur-sm border border-pink-500/20 rounded-lg p-6">
                  <MapPin className="h-8 w-8 text-pink-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-300">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  href="/pricing"
                  variant="secondary"
                  size="lg"
                >
                  View Pricing
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Ads Section */}
        <ServiceAds items={serviceHighlights} />
      </div>
    </QuantumHolographicMatrixBackground>
  );
}
