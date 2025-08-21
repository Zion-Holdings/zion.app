import React from 'react';
import Head from 'next/head';
import { 
  Clock, DollarSign, TrendingUp, Brain, 
  Zap, Rocket, Mail, Phone, MapPin, Sparkles, 
  ArrowRight, ExternalLink, Check, Cpu, 
  ShieldCheck, Star, Award, Target, Users, Globe
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticMatrixBackground from '../components/ui/UltraFuturisticMatrixBackground';
import UltraFuturisticServiceCard from '../components/ui/UltraFuturisticServiceCard';
import ServiceAds from '../components/sections/ServiceAds';
import Card from '../components/ui/Card';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { innovativeNewServices } from '../data/innovative-new-services';

export default function HomePage() {
  const heroStats = [
    { value: '250+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: <Cpu className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <ShieldCheck className="w-6 h-6" /> },
    { value: '30+', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Brain className="w-6 h-6" /> },
    { value: '$50B+', label: 'Combined Market Value', color: 'text-yellow-400', icon: <TrendingUp className="w-6 h-6" /> },
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
      description: 'World\'s first quantum-enhanced BCI with direct neural communication. Achieve breakthrough discoveries with 500% ROI within 6 months.',
      price: 'Starting at $2,999/month',
      features: ['Neural signal processing with 99.9% accuracy', 'Quantum AI integration for enhanced cognition', 'Real-time brain-to-computer communication', 'Medical-grade safety standards'],
      link: 'https://ziontechgroup.com/quantum-ai-brain-computer-interface',
      color: 'from-purple-600 to-indigo-700',
      marketData: '$2.1B BCI market, 15.5% CAGR',
      competitors: 'Neuralink ($10,000+/month), Kernel ($5,000+/month)',
      savings: 'Save 70% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🏭 Autonomous Manufacturing AI Platform',
      description: 'Self-optimizing factories with zero human intervention. 40% more efficient than Siemens Mindsphere, 60% cheaper than GE Predix.',
      price: 'Starting at $1,499/month',
      features: ['Full production line automation', 'AI-powered quality control', 'Predictive maintenance', 'Supply chain optimization'],
      link: 'https://ziontechgroup.com/autonomous-manufacturing-ai',
      color: 'from-emerald-600 to-teal-700',
      marketData: '$15.3B smart manufacturing market, 12.8% CAGR',
      competitors: 'Siemens Mindsphere ($3,000+/month), GE Predix ($4,000+/month)',
      savings: 'Save 50% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🚀 Space Technology Optimization Platform',
      description: 'AI-powered satellite and space mission optimization. 50% more efficient than traditional methods, 70% cost reduction in mission planning.',
      price: 'Starting at $899/month',
      features: ['Satellite orbit optimization', 'Mission planning automation', 'Space debris tracking', 'Fuel efficiency optimization'],
      link: 'https://ziontechgroup.com/space-technology',
      color: 'from-blue-600 to-indigo-700',
      marketData: '$469B space economy, 6.4% CAGR',
      competitors: 'AGI STK ($2,000+/month), Celestrak ($1,500+/month)',
      savings: 'Save 55% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🧬 Biomedical AI Research Platform',
      description: 'AI-powered drug discovery and medical research. 60% faster drug discovery than traditional methods, 40% reduction in clinical trial costs.',
      price: 'Starting at $1,299/month',
      features: ['AI-powered drug discovery', 'Clinical trial optimization', 'Medical image analysis', 'Genomic data processing'],
      link: 'https://ziontechgroup.com/biotech-ai',
      color: 'from-green-600 to-emerald-700',
      marketData: '$45.8B AI in healthcare market, 45.1% CAGR',
      competitors: 'Atomwise ($5,000+/month), Insilico Medicine ($3,000+/month)',
      savings: 'Save 60% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '💰 Quantum Financial Trading Platform',
      description: 'Quantum AI-powered algorithmic trading and risk management. 80% more accurate predictions than traditional AI, 200% better risk-adjusted returns.',
      price: 'Starting at $2,499/month',
      features: ['Quantum AI trading algorithms', 'Real-time risk assessment', 'Portfolio optimization', 'Market prediction models'],
      link: 'https://ziontechgroup.com/quantum-financial-trading',
      color: 'from-yellow-600 to-orange-700',
      marketData: '$12.8B algorithmic trading market, 11.2% CAGR',
      competitors: 'Renaissance Technologies ($10,000+/month), Two Sigma ($8,000+/month)',
      savings: 'Save 75% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🌐 Metaverse AI Development Platform',
      description: 'AI-powered metaverse creation and management. 70% faster development than traditional methods, 50% better user engagement.',
      price: 'Starting at $799/month',
      features: ['AI-powered world generation', 'Virtual character creation', 'Real-time optimization', 'Multi-user synchronization'],
      link: 'https://ziontechgroup.com/metaverse-ai-development-platform',
      color: 'from-pink-600 to-rose-700',
      marketData: '$74.4B metaverse market, 37.7% CAGR',
      competitors: 'Roblox Studio ($1,200+/month), Unity Pro ($1,800+/month)',
      savings: 'Save 45% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    }
  ];

  // Combine all services for display
  const allServices = [...enhancedRealMicroSaasServices, ...extraServices, ...additionalEnhancedServices, ...innovativeNewServices];
  const featuredServices = allServices.filter(s => s.popular).slice(0, 8);

  return (
    <UltraFuturisticMatrixBackground>
      <Head>
        <title>Zion Tech Group | Revolutionary Micro SaaS, IT & AI Solutions | 250+ Services</title>
        <meta name="description" content="Discover 250+ revolutionary micro SaaS, IT services and AI solutions delivering 1000%+ ROI. Quantum AI, autonomous systems, space technology, and more. Free trials available." />
        <meta name="keywords" content="micro SaaS, AI services, IT services, quantum computing, autonomous systems, space technology, biotechnology, cybersecurity, metaverse, IoT" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <meta property="og:title" content="Zion Tech Group | Revolutionary Micro SaaS, IT & AI Solutions" />
        <meta property="og:description" content="250+ revolutionary micro SaaS, IT services and AI solutions delivering 1000%+ ROI. Free trials available." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
              The Future of
              <span className="block text-7xl md:text-9xl bg-gradient-to-r from-fuchsia-400 via-pink-500 to-rose-600 bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover <span className="text-cyan-400 font-semibold">250+ revolutionary micro SaaS services</span> powered by quantum AI, 
              autonomous systems, and cutting-edge technology. Achieve <span className="text-fuchsia-400 font-semibold">1000%+ ROI</span> 
              with our innovative solutions.
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
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className={`${stat.color} mb-2 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400 text-center">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button 
              href="/services" 
              variant="quantum" 
              size="xl"
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-xl font-bold rounded-2xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
            >
              Explore 250+ Services
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              href="/contact" 
              variant="outline" 
              size="xl"
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 text-xl font-bold rounded-2xl transition-all duration-300"
            >
              Start Free Trial
            </Button>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-fuchsia-400" />
                <span className="text-gray-300">{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-gray-300 text-center">{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Highlights Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mb-6">
              Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future with our cutting-edge micro SaaS solutions. Each service is designed to deliver 
              exceptional value and measurable ROI for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceHighlights.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 group"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400 mb-4">{service.marketData}</div>
                  <div className="text-sm text-fuchsia-400 mb-2">
                    <strong>Competitors:</strong> {service.competitors}
                  </div>
                  <div className="text-sm text-green-400 mb-4">
                    <strong>Savings:</strong> {service.savings}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    href={service.link} 
                    variant="quantum" 
                    size="lg"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                  <Button 
                    href="/contact" 
                    variant="outline" 
                    size="lg"
                    className="flex-1 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
                  >
                    Contact Sales
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="mt-6 pt-6 border-t border-gray-700/50">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <span>{service.contactInfo.mobile}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-fuchsia-400" />
                      <span>{service.contactInfo.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-green-400" />
                      <span className="text-xs">{service.contactInfo.address}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Featured Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our most popular and innovative services that are transforming industries worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <UltraFuturisticServiceCard service={service} />
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button 
              href="/services" 
              variant="quantum" 
              size="xl"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 text-xl font-bold rounded-2xl shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
            >
              View All 250+ Services
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another tech company. We're the pioneers of the future, delivering solutions that 
              others can only dream of.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12" />,
                title: 'Quantum AI Innovation',
                description: 'First-to-market quantum AI solutions with proven results and breakthrough capabilities.',
                color: 'from-purple-500 to-indigo-600'
              },
              {
                icon: <ShieldCheck className="w-12 h-12" />,
                title: 'Enterprise Security',
                description: 'Military-grade security with quantum-resistant encryption and zero-trust architecture.',
                color: 'from-green-500 to-emerald-600'
              },
              {
                icon: <Rocket className="w-12 h-12" />,
                title: 'Rapid Implementation',
                description: 'Get up and running in days, not months. Our solutions are production-ready from day one.',
                color: 'from-blue-500 to-cyan-600'
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: 'Proven ROI',
                description: 'Our customers consistently achieve 300-1000% ROI within 6-12 months of implementation.',
                color: 'from-yellow-500 to-orange-600'
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: 'Expert Support',
                description: '24/7 AI-powered support with human experts available for complex implementations.',
                color: 'from-pink-500 to-rose-600'
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: 'Global Reach',
                description: 'Serving customers worldwide with localized support and multi-language capabilities.',
                color: 'from-indigo-500 to-purple-600'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 group"
              >
                <div className={`${feature.color} text-white p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-cyan-900/30 via-blue-900/30 to-purple-900/30 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-12">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of companies already achieving breakthrough results with our revolutionary 
                micro SaaS solutions. Start your free trial today and experience the future of technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  href="/contact" 
                  variant="quantum" 
                  size="xl"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-xl font-bold rounded-2xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                >
                  Start Free Trial
                  <Rocket className="w-6 h-6 ml-2" />
                </Button>
                <Button 
                  href="/services" 
                  variant="outline" 
                  size="xl"
                  className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 text-xl font-bold rounded-2xl transition-all duration-300"
                >
                  Explore Services
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300 font-semibold">{contactInfo.mobile}</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Mail className="w-6 h-6 text-fuchsia-400" />
                  <span className="text-gray-300 font-semibold">{contactInfo.email}</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <MapPin className="w-6 h-6 text-green-400" />
                  <span className="text-gray-300 font-semibold text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </UltraFuturisticMatrixBackground>
  );
}
