import React from 'react';
import Head from 'next/head';
import { 
  Shield, Rocket, Clock, DollarSign, TrendingUp, Brain, Factory, Globe, 
  Zap, Link, Building2, FlaskConical, Leaf, Car, Truck, Microscope, 
  GraduationCap, ShieldCheck, Globe2, Cloud, Cpu, Database, Lock, 
  Smartphone, Palette, Search, MessageSquare, FileText, Calendar, 
  CreditCard, BarChart3, Code, BookOpen, Activity, Settings, Mail, 
  Phone, MapPin, Sparkles, Atom, Eye, Trophy, Dna, ArrowRight, 
  ExternalLink, Star, Users, ChevronRight, Play, Check, CpuIcon, 
  BrainCircuit, Network, Satellite, ShieldAlert, FlaskConicalIcon,
  RocketIcon, GlobeIcon, CpuIcon as CpuIcon2
} from 'lucide-react';
import Button from '../components/ui/Button';
import QuantumHolographicMatrixBackground from '../components/ui/QuantumHolographicMatrixBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices, getServicesByCategory, getPopularServices, serviceCategories } from '../data/enhanced-real-micro-saas-services';

export default function HomePage() {
  const heroStats = [
    { value: '150+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: <CpuIcon className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <ShieldCheck className="w-6 h-6" /> },
    { value: '30+', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Brain className="w-6 h-6" /> },
    { value: '$15B+', label: 'Combined Market Value', color: 'text-yellow-400', icon: <TrendingUp className="w-6 h-6" /> },
    { value: '500%+', label: 'Average ROI', color: 'text-purple-400', icon: <DollarSign className="w-6 h-6" /> },
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
      title: '🤖 AI Autonomous Enterprise Platform',
      icon: '🤖',
      description: 'Revolutionary autonomous enterprise platform that manages all business operations without human intervention. Achieve 2000% ROI through complete automation and optimization.',
      price: 'Starting at $1,299/month',
      features: ['Autonomous decision-making AI with 99.9% accuracy', 'Self-healing infrastructure and systems', 'Predictive business intelligence and forecasting', 'Automated resource allocation and optimization'],
      link: 'https://ziontechgroup.com/ai-autonomous-enterprise',
      color: 'from-indigo-600 to-purple-700',
      marketData: '$45B enterprise software market, 280% annual growth',
      competitors: 'SAP S/4HANA ($5000+/month), Oracle ERP Cloud ($4000+/month), Microsoft Dynamics 365 ($3000+/month)',
      savings: 'Save 75% vs. competitors'
    },
    {
      title: '💊 Quantum AI Drug Discovery Platform',
      icon: '💊',
      description: 'Breakthrough quantum AI platform that accelerates drug discovery by 1000x. Achieve pharmaceutical breakthroughs in weeks, not years.',
      price: 'Starting at $2,999/month',
      features: ['Quantum-enhanced molecular modeling', 'AI-powered drug target identification', 'Predictive toxicity and efficacy analysis', 'Real-time clinical trial optimization'],
      link: 'https://ziontechgroup.com/quantum-ai-drug-discovery',
      color: 'from-emerald-600 to-teal-700',
      marketData: '$12B AI drug discovery market, 450% annual growth',
      competitors: 'Insitro ($2000+/month), Atomwise ($1500+/month), BenevolentAI ($3000+/month)',
      savings: 'Save 50% vs. competitors'
    },
    {
      title: '🛡️ AI Cybersecurity Command Center',
      icon: '🛡️',
      description: 'Revolutionary AI-powered cybersecurity platform that autonomously prevents, detects, and responds to threats in real-time. Achieve 99.99% security with zero false positives.',
      price: 'Starting at $899/month',
      features: ['AI-powered threat detection with 99.99% accuracy', 'Autonomous threat response and mitigation', 'Predictive security analytics', 'Zero-trust architecture implementation'],
      link: 'https://ziontechgroup.com/ai-cybersecurity-command-center',
      color: 'from-red-600 to-pink-700',
      marketData: '$8.5B AI cybersecurity market, 320% annual growth',
      competitors: 'CrowdStrike ($8.99/user/month), Palo Alto Networks ($50+/user/month), SentinelOne ($8.99/user/month)',
      savings: 'Save 80% vs. competitors'
    },
    {
      title: '💰 Quantum Financial AI Platform',
      icon: '💰',
      description: 'Revolutionary quantum-enhanced financial AI platform that delivers unprecedented trading performance and risk management. Achieve 2000% ROI through quantum algorithms.',
      price: 'Starting at $3,999/month',
      features: ['Quantum-enhanced trading algorithms', 'AI-powered market prediction', 'Real-time risk management', 'Portfolio optimization with quantum algorithms'],
      link: 'https://ziontechgroup.com/quantum-financial-ai-platform',
      color: 'from-violet-600 to-purple-700',
      marketData: '$28B financial AI market, 380% annual growth',
      competitors: 'Bloomberg Terminal ($2000+/month), Refinitiv ($1000+/month), FactSet ($1000+/month)',
      savings: 'Save 100% vs. competitors'
    },
    {
      title: '🚚 AI Autonomous Supply Chain Platform',
      icon: '🚚',
      description: 'Revolutionary AI-powered supply chain platform that autonomously optimizes, predicts, and manages all supply chain operations. Achieve 1000% ROI through complete automation.',
      price: 'Starting at $1,599/month',
      features: ['Autonomous supply chain optimization', 'AI-powered demand forecasting', 'Real-time inventory management', 'Automated supplier management'],
      link: 'https://ziontechgroup.com/ai-autonomous-supply-chain',
      color: 'from-blue-600 to-indigo-700',
      marketData: '$15B supply chain AI market, 280% annual growth',
      competitors: 'SAP Ariba ($500+/month), Oracle Supply Chain ($400+/month), JDA Software ($300+/month)',
      savings: 'Save 70% vs. competitors'
    },
    {
      title: '🌍 Quantum AI Climate Prediction Platform',
      icon: '🌍',
      description: 'Breakthrough quantum AI platform that predicts climate patterns with unprecedented accuracy. Achieve 1500% ROI through improved climate insights and planning.',
      price: 'Starting at $2,499/month',
      features: ['Quantum-enhanced climate modeling', 'AI-powered weather prediction', 'Long-term climate forecasting', 'Extreme event prediction'],
      link: 'https://ziontechgroup.com/quantum-ai-climate-prediction',
      color: 'from-green-600 to-emerald-700',
      marketData: '$6B climate technology market, 320% annual growth',
      competitors: 'Traditional climate models ($5000+/month), Weather services ($1000+/month), Environmental consulting ($2000+/month)',
      savings: 'Save 50% vs. competitors'
    }
  ];

  const popularServices = getPopularServices().slice(0, 6);

  return (
    <QuantumHolographicMatrixBackground intensity="high">
      <Head>
        <title>Zion Tech Group - Revolutionary Micro SAAS Services & AI Solutions</title>
        <meta name="description" content="Discover 150+ revolutionary micro SAAS services powered by quantum AI, autonomous systems, and cutting-edge technology. Achieve 500%+ ROI with our innovative solutions." />
        <meta name="keywords" content="micro saas, quantum AI, autonomous systems, blockchain, cybersecurity, space technology, biotech AI, financial trading, zion tech group" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SAAS Services & AI Solutions" />
        <meta property="og:description" content="150+ revolutionary micro SAAS services with 500%+ ROI. Quantum AI, autonomous systems, and cutting-edge technology." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      <div className="min-h-screen bg-black/90 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
                Welcome to the Future of Business Technology
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Zion Tech Group delivers 150+ revolutionary micro SAAS services powered by quantum AI, autonomous systems, and breakthrough technology. 
                Transform your business with 500%+ ROI.
              </p>
              
              {/* Enhanced Contact Information Banner */}
              <div className="bg-gradient-to-r from-blue-900/60 to-purple-900/60 backdrop-blur-md border-2 border-blue-400/40 rounded-3xl p-8 mb-8 shadow-2xl shadow-blue-500/20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Ready to Transform Your Business?</h3>
                  <p className="text-blue-200 text-lg">Get in touch with our AI experts today</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center gap-3 p-4 bg-gradient-to-br from-blue-800/40 to-blue-700/40 rounded-2xl border border-blue-400/30 hover:border-blue-300/50 transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-center">
                      <p className="text-blue-200 text-sm font-medium">Phone</p>
                      <p className="text-blue-100 font-bold text-lg">{contactInfo.mobile}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-3 p-4 bg-gradient-to-br from-purple-800/40 to-purple-700/40 rounded-2xl border border-purple-400/30 hover:border-purple-300/50 transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-center">
                      <p className="text-purple-200 text-sm font-medium">Email</p>
                      <p className="text-purple-100 font-bold text-lg">{contactInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-3 p-4 bg-gradient-to-br from-green-800/40 to-green-700/40 rounded-2xl border border-green-400/30 hover:border-green-300/50 transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-center">
                      <p className="text-green-200 text-sm font-medium">Address</p>
                      <p className="text-green-100 font-bold text-lg">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <p className="text-blue-200 text-sm">
                    Visit our website: <a href={contactInfo.website} className="text-blue-300 hover:text-blue-200 underline font-semibold" target="_blank" rel="noopener noreferrer">{contactInfo.website}</a>
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="/micro-saas"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  href="https://ziontechgroup.com/contact"
                  variant="outline"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
                Zion Tech Group by the Numbers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our revolutionary services are delivering unprecedented results across industries worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-gray-700/50 rounded-3xl p-6 text-center hover:border-gray-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                    <div className={`${stat.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="p-4">
                    <div className="text-3xl mb-2">🚀</div>
                    <h4 className="text-white font-semibold mb-2">First-to-Market</h4>
                    <p className="text-gray-300 text-sm">Pioneering revolutionary AI and quantum technologies</p>
                  </div>
                  <div className="p-4">
                    <div className="text-3xl mb-2">💰</div>
                    <h4 className="text-white font-semibold mb-2">Unprecedented ROI</h4>
                    <p className="text-gray-300 text-sm">Average 500%+ return on investment within months</p>
                  </div>
                  <div className="p-4">
                    <div className="text-3xl mb-2">🔒</div>
                    <h4 className="text-white font-semibold mb-2">Enterprise Security</h4>
                    <p className="text-gray-300 text-sm">Bank-level security with 99.99% uptime guarantee</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Service Highlights Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
                Revolutionary AI & Quantum Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our cutting-edge micro SAAS services that are transforming industries worldwide. 
                Each service delivers unprecedented ROI and competitive advantages.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceHighlights.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className={`bg-gradient-to-br ${service.color} p-1 rounded-3xl hover:scale-105 transition-all duration-500`}>
                    <div className="bg-gray-900/90 backdrop-blur-sm rounded-3xl p-8 h-full">
                      <div className="flex items-start justify-between mb-6">
                        <div className="text-4xl">{service.icon}</div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white mb-1">{service.price}</div>
                          <div className="text-sm text-gray-300">per month</div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                              <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
                        <div className="bg-gray-800/50 rounded-lg p-3">
                          <div className="text-gray-400 font-medium">Market Size</div>
                          <div className="text-white font-semibold">{service.marketData}</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-3">
                          <div className="text-gray-400 font-medium">Savings vs Competitors</div>
                          <div className="text-green-400 font-semibold">{service.savings}</div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-2">Competitors:</h4>
                        <p className="text-gray-300 text-sm">{service.competitors}</p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          href={service.link}
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button
                          href="https://ziontechgroup.com/contact"
                          variant="outline"
                          className="flex-1 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-3 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                        >
                          Get Quote
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8">
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-xl text-gray-300 mb-6">
                  Join thousands of businesses already transforming their operations with our AI services
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    href="/micro-saas"
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    Explore All Services
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    href="https://ziontechgroup.com/contact"
                    variant="outline"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    Schedule Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Popular Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
                Most Popular Revolutionary Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most sought-after AI and quantum services that are transforming businesses worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className={`bg-gradient-to-br ${service.color} p-1 rounded-3xl hover:scale-105 transition-all duration-500`}>
                    <div className="bg-gray-900/90 backdrop-blur-sm rounded-3xl p-6 h-full">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl">{service.icon}</div>
                        {service.popular && (
                          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                            POPULAR
                          </div>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.tagline}</p>
                      
                      <div className="mb-4">
                        <div className="text-2xl font-bold text-white mb-1">{service.price}</div>
                        <div className="text-sm text-gray-400">{service.period}</div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-gray-300 text-xs">
                              <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                          <div className="text-gray-400 text-xs font-medium">ROI</div>
                          <div className="text-green-400 font-bold text-sm">{service.roi}</div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <Button
                          href={service.link}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 font-semibold rounded-xl text-sm transition-all duration-300 hover:scale-105"
                        >
                          Learn More
                          <ArrowRight className="w-3 h-3 ml-2" />
                        </Button>
                        <Button
                          href="https://ziontechgroup.com/contact"
                          variant="outline"
                          className="w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black py-2 font-semibold rounded-xl text-sm transition-all duration-300 hover:scale-105"
                        >
                          Get Started
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8">
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
                <p className="text-xl text-gray-300 mb-6">
                  Join the AI revolution and achieve unprecedented growth with our revolutionary services
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    href="/micro-saas"
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    View All Services
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    href="https://ziontechgroup.com/contact"
                    variant="outline"
                    className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    Contact Sales
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already achieving breakthrough results with our revolutionary micro SAAS services.
              </p>
              
              <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center gap-3">
                    <Phone className="w-8 h-8 text-blue-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Mobile</p>
                      <p className="text-white font-semibold">{contactInfo.mobile}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <Mail className="w-8 h-8 text-purple-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white font-semibold">{contactInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <MapPin className="w-8 h-8 text-green-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Address</p>
                      <p className="text-white font-semibold text-center">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="https://ziontechgroup.com/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  href="https://ziontechgroup.com"
                  variant="outline"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Visit Our Website
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </QuantumHolographicMatrixBackground>
  );
}
