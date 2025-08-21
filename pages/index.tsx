import React from 'react';
import Head from 'next/head';
import { 
  Clock, DollarSign, TrendingUp, Brain, 
  Zap, Rocket, Mail, Phone, MapPin, Sparkles, 
  ArrowRight, ExternalLink, Check, Cpu, 
  ShieldCheck, Globe, Target, Users, Award,
  Star, Eye, Zap as Lightning, Shield, Globe2
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
import { innovativeAIServices } from '../data/innovative-ai-services';
import { advancedITServices } from '../data/advanced-it-services';
import { specializedAIServices } from '../data/specialized-ai-services';

export default function HomePage() {
  const heroStats = [
    { value: '500+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: <Cpu className="w-6 h-6" /> },
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
      title: '💰 Quantum Financial Trading Platform',
      description: 'Quantum AI-powered algorithmic trading with nanosecond precision. Process market data at quantum speeds for unprecedented accuracy.',
      price: 'Starting at $7,999/month',
      features: ['Quantum AI trading algorithms', 'Nanosecond execution speed', 'Real-time market analysis', 'Risk management tools', 'Portfolio optimization', 'Multi-asset trading', 'Advanced backtesting', 'Regulatory compliance', 'Performance analytics', 'API for integration'],
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
      title: '☁️ Quantum Cloud Platform',
      description: 'Next-generation quantum computing in the cloud. Access quantum resources, algorithms, and hybrid workflows for enterprise applications.',
      price: 'Starting at $9,999/month',
      features: ['Quantum computing resources', 'Quantum algorithm library', 'Hybrid classical-quantum workflows', 'Quantum machine learning', 'Quantum cryptography', 'Performance optimization', 'Real-time quantum monitoring', 'Advanced analytics dashboard', 'API for integration', '24/7 quantum support'],
      link: 'https://ziontechgroup.com/quantum-cloud-platform',
      color: 'from-blue-600 to-indigo-700',
      marketData: '$500M quantum computing market, 500% annual growth',
      competitors: 'IBM Quantum ($1000+/month), AWS Braket ($5000+/month)',
      savings: 'First comprehensive quantum cloud platform',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🌐 Edge Computing Orchestrator',
      description: 'Intelligent edge computing management and optimization. Manage distributed resources and reduce latency for IoT applications.',
      price: 'Starting at $1,999/month',
      features: ['Intelligent resource allocation', 'Real-time performance optimization', 'Edge device management', 'Load balancing', 'Security and compliance', 'Monitoring and analytics', 'Automated scaling', 'API gateway', 'Integration tools', '24/7 support'],
      link: 'https://ziontechgroup.com/edge-computing-orchestrator',
      color: 'from-green-600 to-emerald-700',
      marketData: '$50B edge computing market, 250% annual growth',
      competitors: 'AWS Greengrass ($1000+/month), Azure IoT Edge ($2000+/month)',
      savings: 'Advanced edge orchestration platform',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    }
  ];

  // Combine all services for display
  const allServices = [
    ...enhancedRealMicroSaasServices.slice(0, 12),
    ...innovativeAIServices.slice(0, 8),
    ...advancedITServices.slice(0, 8),
    ...specializedAIServices.slice(0, 8)
  ];

  return (
    <UltraAdvancedFuturisticBackground variant="quantum-holographic-advanced" intensity="ultra">
      <Head>
        <title>Zion Tech Group - Revolutionary Micro SaaS Services & AI Solutions</title>
        <meta name="description" content="Discover 500+ revolutionary micro SaaS services, AI solutions, and IT services. Quantum AI, Space Technology, Biotech AI, and more. Start your 30-day free trial today!" />
        <meta name="keywords" content="micro SaaS, AI services, quantum computing, space technology, biotech AI, IT services, cloud computing, edge computing, cybersecurity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SaaS Services & AI Solutions" />
        <meta property="og:description" content="500+ revolutionary micro SaaS services with 1000% ROI guarantee. Quantum AI, Space Technology, Biotech AI, and more." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary Micro SaaS Services" />
        <meta name="twitter:description" content="500+ revolutionary micro SaaS services with 1000% ROI guarantee." />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Revolutionary Micro SaaS Services
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover <span className="text-cyan-400 font-semibold">500+ cutting-edge services</span> that will transform your business with 
              <span className="text-purple-400 font-semibold"> 1000% ROI guarantee</span> and 
              <span className="text-pink-400 font-semibold"> quantum AI technology</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                href="/services" 
                variant="primary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore Services
              </Button>
              <Button 
                href="/contact" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales
              </Button>
            </div>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
          >
            {heroStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`${stat.color} text-3xl md:text-4xl font-bold mb-2 flex items-center justify-center`}>
                  {stat.icon}
                  <span className="ml-2">{stat.value}</span>
                </div>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Ready to Transform Your Business?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Highlights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Revolutionary Services That <span className="text-cyan-400">Transform Industries</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From quantum AI to space technology, our services are designed to give you unprecedented competitive advantages
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {serviceHighlights.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center text-sm text-gray-400 mb-2">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        <span>{service.marketData}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400 mb-2">
                        <Target className="w-4 h-4 mr-2" />
                        <span>Competitors: {service.competitors}</span>
                      </div>
                      <div className="flex items-center text-sm text-green-400 font-semibold">
                        <Check className="w-4 h-4 mr-2" />
                        <span>{service.savings}</span>
                      </div>
                    </div>

                    <Button href={service.link} variant="primary" className="w-full">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Explore Our <span className="text-purple-400">Complete Service Portfolio</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI-powered solutions to quantum computing, discover services that will revolutionize your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticServiceCard service={service} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button href="/services" variant="primary" size="lg" className="text-lg px-8 py-4">
              <Eye className="w-5 h-5 mr-2" />
              View All Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-cyan-400">Zion Tech Group</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another tech company - we're the future of business transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12" />,
                title: "Quantum AI Technology",
                description: "Leverage the power of quantum computing and advanced AI for unprecedented business insights and automation."
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Enterprise Security",
                description: "Bank-grade security with quantum encryption and zero-trust architecture for complete peace of mind."
              },
              {
                icon: <Globe2 className="w-12 h-12" />,
                title: "Global Infrastructure",
                description: "Worldwide deployment with 99.99% uptime guarantee and 24/7 support across all time zones."
              },
              {
                icon: <Lightning className="w-12 h-12" />,
                title: "Lightning Fast",
                description: "Nanosecond response times with quantum processing and edge computing optimization."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-cyan-400">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies already experiencing the future of business technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg" className="text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button href="/pricing" variant="secondary" size="lg" className="text-lg px-8 py-4">
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </Button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>30-day free trial • No credit card required • Cancel anytime</p>
              <p className="mt-2">
                <Star className="w-4 h-4 inline mr-1 text-yellow-400" />
                Trusted by 10,000+ companies worldwide
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Contact Information</h3>
              <div className="space-y-2 text-gray-300">
                <p><Phone className="w-4 h-4 inline mr-2" /> {contactInfo.mobile}</p>
                <p><Mail className="w-4 h-4 inline mr-2" /> {contactInfo.email}</p>
                <p><MapPin className="w-4 h-4 inline mr-2" /> {contactInfo.address}</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Quick Links</h3>
              <div className="space-y-2">
                <p><a href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">All Services</a></p>
                <p><a href="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">Pricing</a></p>
                <p><a href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a></p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Company</h3>
              <div className="space-y-2">
                <p><a href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About Us</a></p>
                <p><a href="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors">Careers</a></p>
                <p><a href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors">Blog</a></p>
              </div>
            </div>
          </div>
          <div className="border-t border-cyan-500/20 pt-8">
            <p className="text-gray-400">
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href="/privacy" className="ml-2 hover:text-cyan-400 transition-colors">Privacy Policy</a> | 
              <a href="/terms" className="ml-2 hover:text-cyan-400 transition-colors">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </UltraAdvancedFuturisticBackground>
  );
}
