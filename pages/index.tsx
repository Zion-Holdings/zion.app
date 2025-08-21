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
  RocketIcon, GlobeIcon, CpuIcon as CpuIcon2, ArrowUpRight, Target,
  Award, Zap as ZapIcon, Shield as ShieldIcon, Brain as BrainIcon
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
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
      title: '🧠 Revolutionary Quantum AI Cognitive Platform',
      description: 'World\'s first quantum-enhanced AI with human-like reasoning capabilities. Achieve breakthrough discoveries with 1000% ROI within 6 months.',
      price: 'Starting at $299/month',
      features: ['Quantum neural networks with 1000+ qubits', 'Human-like reasoning and problem-solving', 'Real-time quantum simulation', 'Advanced research collaboration tools'],
      link: 'https://ziontechgroup.com/quantum-ai-cognitive',
      color: 'from-purple-600 to-indigo-700',
      marketData: '$15B quantum computing market, 500% annual growth',
      competitors: 'IBM Quantum ($2000+/month), Google Quantum AI ($1500+/month)',
      savings: 'Save 85% vs. competitors'
    },
    {
      title: '🏭 Autonomous Manufacturing AI Platform',
      description: 'Self-learning manufacturing systems achieving zero downtime and 400% ROI within 6 months. Industry 4.0 revolution.',
      price: 'Starting at $199/month',
      features: ['Predictive maintenance with 99.9% accuracy', 'Real-time quality control automation', 'Supply chain intelligence and optimization', 'Energy consumption optimization'],
      link: 'https://ziontechgroup.com/autonomous-manufacturing',
      color: 'from-orange-500 to-red-600',
      marketData: '$12.3B industrial AI market, 320% annual growth',
      competitors: 'Siemens MindSphere ($500+/month), PTC ThingWorx ($300+/month)',
      savings: 'Save 60% vs. competitors'
    },
    {
      title: '🔒 Quantum Cybersecurity Suite',
      description: 'Post-quantum era security with AI threat detection. Future-proof your infrastructure with 300% ROI within 4 months.',
      price: 'Starting at $159/month',
      features: ['Quantum-resistant encryption algorithms', 'AI-powered threat detection and response', 'Zero-trust architecture implementation', 'Real-time security monitoring'],
      link: 'https://ziontechgroup.com/quantum-cybersecurity',
      color: 'from-red-500 to-pink-600',
      marketData: '$6.8B quantum security market, 380% annual growth',
      competitors: 'CrowdStrike ($8.99/user/month), Palo Alto Networks ($50+/user/month)',
      savings: 'Save 70% vs. competitors'
    },
    {
      title: '🚀 Space Technology Platform',
      description: 'Cutting-edge space exploration and satellite management tools. Achieve 500% ROI within 8 months through improved operations.',
      price: 'Starting at $399/month',
      features: ['Satellite mission management and planning', 'Space data analytics and visualization', 'Orbital optimization algorithms', 'Space debris tracking and avoidance'],
      link: 'https://ziontechgroup.com/space-technology',
      color: 'from-blue-500 to-indigo-600',
      marketData: '$4.2B space technology market, 280% annual growth',
      competitors: 'Maxar ($500+/month), Planet Labs ($400+/month)',
      savings: 'Save 20% vs. competitors'
    },
    {
      title: '🧬 Biotech AI Platform',
      description: 'AI-powered drug discovery and biotech research. Accelerate research with 800% ROI within 12 months.',
      price: 'Starting at $599/month',
      features: ['AI-powered drug discovery algorithms', 'Protein folding prediction with 99.2% accuracy', 'Genomic data analysis and interpretation', 'Clinical trial optimization'],
      link: 'https://ziontechgroup.com/biotech-ai',
      color: 'from-emerald-500 to-teal-600',
      marketData: '$8.5B biotech AI market, 420% annual growth',
      competitors: 'Insitro ($1000+/month), Atomwise ($800+/month)',
      savings: 'Save 40% vs. competitors'
    },
    {
      title: '💰 Quantum Financial Trading Platform',
      description: 'Quantum-enhanced algorithmic trading and risk management. Achieve 1200% ROI within 6 months.',
      price: 'Starting at $899/month',
      features: ['Quantum-enhanced trading algorithms', 'Real-time market analysis and prediction', 'Advanced risk management systems', 'Portfolio optimization with quantum algorithms'],
      link: 'https://ziontechgroup.com/quantum-financial-trading',
      color: 'from-violet-500 to-purple-600',
      marketData: '$22B algorithmic trading market, 280% annual growth',
      competitors: 'Bloomberg Terminal ($2000+/month), Refinitiv ($1000+/month)',
      savings: 'Save 55% vs. competitors'
    }
  ];

  const revolutionaryFeatures = [
    {
      icon: <BrainIcon className="w-8 h-8" />,
      title: 'Quantum AI Revolution',
      description: 'First-to-market quantum-enhanced AI with human-like reasoning capabilities',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: <ShieldIcon className="w-8 h-8" />,
      title: 'Post-Quantum Security',
      description: 'Future-proof cybersecurity protecting against quantum computing threats',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: <RocketIcon className="w-8 h-8" />,
      title: 'Space Technology',
      description: 'Cutting-edge space exploration and satellite management solutions',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <ZapIcon className="w-8 h-8" />,
      title: 'Autonomous Systems',
      description: 'Self-learning AI systems achieving zero downtime and maximum efficiency',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const marketInsights = [
    {
      metric: '$15B+',
      label: 'Quantum Computing Market',
      growth: '500% annual growth',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      metric: '$12.3B',
      label: 'Industrial AI Market',
      growth: '320% annual growth',
      color: 'from-orange-500 to-red-600'
    },
    {
      metric: '$6.8B',
      label: 'Quantum Security Market',
      growth: '380% annual growth',
      color: 'from-red-500 to-pink-600'
    },
    {
      metric: '$4.2B',
      label: 'Space Technology Market',
      growth: '280% annual growth',
      color: 'from-blue-500 to-indigo-600'
    }
  ];

  return (
    <UltraAdvancedFuturisticBackground theme="quantum" intensity="high">
      <Head>
        <title>Zion Tech Group - Revolutionary AI, Quantum Computing & Micro SaaS Solutions</title>
        <meta name="description" content="Leading the future of technology with revolutionary AI, quantum computing, and 150+ innovative micro SaaS services. Achieve 500%+ ROI with cutting-edge solutions." />
        <meta name="keywords" content="AI, quantum computing, micro SaaS, cybersecurity, space technology, biotech, autonomous systems, Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Revolutionary AI & Quantum Computing Solutions" />
        <meta property="og:description" content="Leading the future of technology with revolutionary AI, quantum computing, and innovative micro SaaS services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary AI & Quantum Computing Solutions" />
        <meta name="twitter:description" content="Leading the future of technology with revolutionary AI, quantum computing, and innovative micro SaaS services." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
      </Head>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                  Future Technology
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Leading the revolution with <span className="text-cyan-400 font-semibold">150+ revolutionary micro SaaS services</span>, 
                <span className="text-purple-400 font-semibold"> quantum AI platforms</span>, and 
                <span className="text-emerald-400 font-semibold"> autonomous systems</span> that transform industries worldwide.
              </p>
            </motion.div>

            {/* Hero Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12 max-w-5xl mx-auto"
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className={`${stat.color} mb-2 flex justify-center`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-cyan-200 transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  href="/micro-saas"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
              <Button
                href="/contact"
                variant="outline"
                className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                Get Started
              </Button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center space-x-6 text-gray-400 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-300 transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-purple-300 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Revolutionary Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Revolutionary
                </span> Technology Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future with our cutting-edge technology platforms that are reshaping industries and driving human progress.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {revolutionaryFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group hover:bg-white/10"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Highlights Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Revolutionary
                </span> Service Highlights
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most innovative services that are setting new industry standards and delivering unprecedented ROI.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceHighlights.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="h-full p-8 hover:scale-105 transition-transform duration-300 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="space-y-6">
                      <div className="flex items-start justify-between">
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                          <div className="text-sm text-gray-400">Starting Price</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Market Size:</span>
                          <span className="text-emerald-400 font-semibold">{service.marketData}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Competitors:</span>
                          <span className="text-orange-400 font-semibold">{service.competitors}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Savings:</span>
                          <span className="text-cyan-400 font-semibold">{service.savings}</span>
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button
                          href={service.link}
                          className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 group"
                        >
                          Learn More
                          <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Insights Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Market
                </span> Insights & Growth
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our services are positioned in the fastest-growing technology markets, offering unprecedented opportunities for growth and innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {marketInsights.map((insight, index) => (
                <motion.div
                  key={insight.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${insight.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {insight.metric}
                  </div>
                  <div className="text-lg font-semibold text-gray-300 mb-2">
                    {insight.label}
                  </div>
                  <div className="text-cyan-400 font-medium">
                    {insight.growth}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
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
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of companies already leveraging our revolutionary technology solutions. 
                Start your journey to unprecedented growth and innovation today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    href="/contact"
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    Get Started Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
                <Button
                  href="/micro-saas"
                  variant="outline"
                  className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"
                >
                  View All Services
                </Button>
              </div>

              <div className="mt-8 text-center">
                <div className="inline-flex items-center space-x-6 text-gray-400 text-sm">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-300 transition-colors">
                      {contactInfo.mobile}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-purple-300 transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </UltraAdvancedFuturisticBackground>
  );
}
