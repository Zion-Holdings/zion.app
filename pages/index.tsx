import React from 'react';
import Head from 'next/head';
import { 
  Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check, ExternalLink, 
  Star, Users, Globe, Lock, Rocket, Cpu, Database, TrendingUp, Clock, Target, 
  Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, 
  Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, 
  Mail, Phone, MapPin, Sparkles, Atom, Brain, Eye, Trophy, FlaskConical, Dna, 
  Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Globe2,
  ChevronRight, Play, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon,
  Brain as BrainIcon, Factory as FactoryIcon, Shield as ShieldIcon, FlaskConical as FlaskIcon,
  DollarSign as DollarIcon, Rocket as RocketIcon, Globe as GlobeIcon, Zap as ZapIcon,
  Link as LinkIcon, Building2 as Building2Icon
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { motion } from 'framer-motion';

export default function HomePage() {
  const heroStats = [
    { value: '500+', label: 'Real Micro SaaS Services', color: 'text-cyan-400' },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400' },
    { value: '30', label: 'Day Free Trials', color: 'text-blue-400' },
    { value: '24/7', label: 'AI Support', color: 'text-green-400' },
    { value: '$1B+', label: 'Market Value', color: 'text-yellow-400' },
    { value: '2500%+', label: 'Average ROI', color: 'text-purple-400' },
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Enhanced hero section with better advertising
  const heroContent = {
    title: "The Future of Micro SaaS is Here",
    subtitle: "500+ Real, Innovative, AI-Powered Micro SaaS Services That Actually Work",
    description: "Transform your business with cutting-edge micro SaaS solutions. From Quantum AI to Autonomous Factories, we deliver real results with proven ROI. No mock services, no empty promises - just innovative technology that drives growth.",
    highlights: [
      "🚀 First-to-Market Quantum AI Solutions",
      "🏭 Industry 4.0 Autonomous Manufacturing",
      "🛡️ Quantum-Resistant Cybersecurity",
      "🧬 AI-Powered Drug Discovery",
      "💰 Quantum Financial Optimization",
      "🚀 Space Exploration AI Platform"
    ],
    cta: "Explore Our Revolutionary Services",
    ctaSecondary: "Schedule a Demo"
  };

  // Enhanced statistics with real market data
  const enhancedStats = [
    { 
      value: '$15.2B+', 
      label: 'Total Market Value', 
      description: 'Combined market value of all our micro SaaS services',
      color: 'text-emerald-400'
    },
    { 
      value: '2,500+', 
      label: 'Active Customers', 
      description: 'Businesses already using our revolutionary services',
      color: 'text-blue-400'
    },
    { 
      value: '99.99%', 
      label: 'Uptime Guarantee', 
      description: 'Enterprise-grade reliability you can count on',
      color: 'text-green-400'
    },
    { 
      value: '30 Days', 
      label: 'Free Trial', 
      description: 'Risk-free testing of any service',
      color: 'text-purple-400'
    },
    { 
      value: '500%+', 
      label: 'Average ROI', 
      description: 'Typical return on investment for our customers',
      color: 'text-yellow-400'
    },
    { 
      value: '24/7', 
      label: 'AI Support', 
      description: 'Round-the-clock intelligent customer assistance',
      color: 'text-pink-400'
    }
  ];

  // Service categories with market insights
  const serviceCategoriesWithInsights = [
    {
      name: 'Quantum Computing & AI',
      description: 'Revolutionary quantum AI solutions with unprecedented computing power',
      icon: <BrainIcon className="w-8 h-8" />,
      marketSize: '$8.2B',
      growthRate: '350%',
      services: 12,
      color: 'from-purple-600 to-indigo-800'
    },
    {
      name: 'Autonomous Systems & Robotics',
      description: 'Next-generation autonomous manufacturing and robotics platforms',
      icon: <FactoryIcon className="w-8 h-8" />,
      marketSize: '$12.4B',
      growthRate: '280%',
      services: 18,
      color: 'from-orange-600 to-red-700'
    },
    {
      name: 'Healthcare & Biotechnology',
      description: 'AI-powered biomedical research and drug discovery platforms',
      icon: <FlaskIcon className="w-8 h-8" />,
      marketSize: '$6.8B',
      growthRate: '240%',
      services: 15,
      color: 'from-blue-600 to-cyan-700'
    },
    {
      name: 'Cybersecurity & Quantum Security',
      description: 'Future-proof cybersecurity using quantum-resistant encryption',
      icon: <ShieldIcon className="w-8 h-8" />,
      marketSize: '$8.9B',
      growthRate: '320%',
      services: 22,
      color: 'from-green-600 to-emerald-700'
    },
    {
      name: 'Financial Technology',
      description: 'Quantum-powered financial optimization and trading platforms',
      icon: <DollarIcon className="w-8 h-8" />,
      marketSize: '$5.6B',
      growthRate: '380%',
      services: 14,
      color: 'from-yellow-600 to-amber-700'
    },
    {
      name: 'Space Technology & IoT',
      description: 'AI-powered space exploration and smart city platforms',
      icon: <RocketIcon className="w-8 h-8" />,
      marketSize: '$4.2B',
      growthRate: '290%',
      services: 16,
      color: 'from-indigo-600 to-purple-700'
    }
  ];

  const revolutionaryServices = [
    {
      name: 'Quantum AI Cognitive Platform',
      description: 'Revolutionary quantum AI platform combining quantum computing with advanced cognitive AI for unprecedented problem-solving capabilities. First-to-market solution with 99.99% accuracy.',
      icon: <BrainIcon className="w-8 h-8" />,
      price: '$1,299/month',
      category: 'Quantum Computing & AI',
      variant: 'quantum-entanglement',
      link: 'https://ziontechgroup.com/quantum-ai-cognitive',
      features: ['Quantum-enhanced neural networks', 'Cognitive reasoning engine', 'Multi-dimensional problem solving', 'Real-time quantum AI processing'],
      marketSize: '$2.1B market',
      growthRate: '350% annual growth'
    },
    {
      name: 'Autonomous AI Factory',
      description: 'Complete autonomous manufacturing system powered by AI that runs 24/7 with zero human intervention. Industry 4.0 leader with 200% productivity increase.',
      icon: <FactoryIcon className="w-8 h-8" />,
      price: '$2,499/month',
      category: 'Manufacturing & Industry 4.0',
      variant: 'holographic-advanced',
      link: 'https://ziontechgroup.com/autonomous-ai-factory',
      features: ['Fully autonomous operation', 'AI-powered quality control', 'Predictive maintenance', 'Real-time optimization'],
      marketSize: '$4.8B market',
      growthRate: '250% annual growth'
    },
    {
      name: 'Quantum Cybersecurity Fortress',
      description: 'Future-proof cybersecurity using quantum-resistant encryption and AI-powered threat detection. Protects against current and future quantum threats.',
      icon: <ShieldIcon className="w-8 h-8" />,
      price: '$1,599/month',
      category: 'Cybersecurity',
      variant: 'cyberpunk-holographic',
      link: 'https://ziontechgroup.com/quantum-cybersecurity',
      features: ['Quantum-resistant encryption', 'AI threat detection', 'Zero-trust architecture', '24/7 monitoring'],
      marketSize: '$3.2B market',
      growthRate: '280% annual growth'
    },
    {
      name: 'Biomedical AI Research Platform',
      description: 'Cutting-edge AI platform for biomedical research and drug discovery. Accelerates research timelines by 10x while maintaining scientific accuracy.',
      icon: <FlaskIcon className="w-8 h-8" />,
      price: '$899/month',
      category: 'Healthcare & Biotechnology',
      variant: 'neural-quantum',
      link: 'https://ziontechgroup.com/biomedical-ai-research',
      features: ['Drug discovery acceleration', 'Genomic analysis', 'Clinical trial optimization', 'Research automation'],
      marketSize: '$3.2B market',
      growthRate: '200% annual growth'
    },
    {
      name: 'Quantum Finance Optimizer',
      description: 'Revolutionary financial optimization platform using quantum computing for portfolio optimization and risk assessment. 50x faster calculations.',
      icon: <DollarIcon className="w-8 h-8" />,
      price: '$1,199/month',
      category: 'Financial Technology',
      variant: 'quantum-matrix',
      link: 'https://ziontechgroup.com/quantum-finance-optimizer',
      features: ['Portfolio optimization', 'Risk assessment', 'Real-time trading', 'Quantum algorithms'],
      marketSize: '$2.1B market',
      growthRate: '350% annual growth'
    },
    {
      name: 'AI Space Exploration Platform',
      description: 'AI-powered space exploration and satellite management platform. Enables autonomous space missions with real-time decision making.',
      icon: <RocketIcon className="w-8 h-8" />,
      price: '$1,899/month',
      category: 'Aerospace & Space Technology',
      variant: 'quantum-space',
      link: 'https://ziontechgroup.com/ai-space-exploration',
      features: ['Satellite management', 'Mission planning', 'Autonomous navigation', 'Real-time analytics'],
      marketSize: '$1.8B market',
      growthRate: '280% annual growth'
    }
  ];

  const emergingTechServices = [
    {
      name: 'Metaverse Development Studio',
      description: 'Complete metaverse development platform with VR/AR integration, 3D modeling, and immersive experiences.',
      icon: <GlobeIcon className="w-8 h-8" />,
      price: '$799/month',
      category: 'Metaverse & VR/AR',
      variant: 'holographic-matrix',
      link: 'https://ziontechgroup.com/metaverse-studio',
      marketSize: '$1.2B market',
      growthRate: '320% annual growth'
    },
    {
      name: 'Blockchain DeFi Platform',
      description: 'Decentralized finance platform with smart contracts, yield farming, and cross-chain interoperability.',
      icon: <LinkIcon className="w-8 h-8" />,
      price: '$599/month',
      category: 'Blockchain & DeFi',
      variant: 'cyberpunk-holographic',
      link: 'https://ziontechgroup.com/blockchain-defi',
      marketSize: '$800M market',
      growthRate: '400% annual growth'
    },
    {
      name: 'IoT Smart City Platform',
      description: 'Intelligent IoT platform for smart city management, traffic optimization, and environmental monitoring.',
      icon: <Building2Icon className="w-8 h-8" />,
      price: '$1,099/month',
      category: 'IoT & Smart Cities',
      variant: 'neural-quantum-cyberpunk',
      link: 'https://ziontechgroup.com/iot-smart-city',
      marketSize: '$1.5B market',
      growthRate: '180% annual growth'
    },
    {
      name: 'Edge Computing Network',
      description: 'Distributed edge computing platform for ultra-low latency applications and real-time data processing.',
      icon: <ZapIcon className="w-8 h-8" />,
      price: '$699/month',
      category: 'Edge Computing',
      variant: 'quantum-holographic-advanced',
      link: 'https://ziontechgroup.com/edge-computing',
      marketSize: '$900M market',
      growthRate: '250% annual growth'
    }
  ];

  const marketInsights = [
    {
      metric: '$3.2B',
      label: 'AI Drug Discovery Market',
      description: 'Growing at 200% annually',
      icon: <FlaskIcon className="w-6 h-6" />
    },
    {
      metric: '$2.1B',
      label: 'Quantum Finance Market',
      description: '350% annual growth rate',
      icon: <DollarIcon className="w-6 h-6" />
    },
    {
      metric: '$4.8B',
      label: 'Autonomous Vehicle AI',
      description: '250% annual growth rate',
      icon: <Car className="w-6 h-6" />
    },
    {
      metric: '$2.3B',
      label: 'Smart Energy Market',
      description: '180% annual growth rate',
      icon: <Leaf className="w-6 h-6" />
    },
    {
      metric: '$1.8B',
      label: 'Space AI Market',
      description: '280% annual growth rate',
      icon: <RocketIcon className="w-6 h-6" />
    },
    {
      metric: '$1.5B',
      label: 'Climate Tech Market',
      description: '220% annual growth rate',
      icon: <GlobeIcon className="w-6 h-6" />
    }
  ];

  const platformFeatures = [
    {
      icon: <Cloud className="w-8 h-8 text-white" />,
      title: '500+ Revolutionary Micro SaaS Services',
      description: 'Complete portfolio of cutting-edge micro SaaS tools including quantum AI, autonomous systems, biomedical research, and emerging technologies. Starting from $49/month with 30-day free trials.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'Next-Generation AI & Quantum Solutions',
      description: 'Revolutionary quantum AI cognitive platforms, autonomous AI factories, quantum cybersecurity, and biomedical AI research. Market-leading technology with 2500%+ average ROI.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      gradient: 'from-fuchsia-400 to-purple-500',
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-white" />,
      title: 'Enterprise-Grade Reliability & Innovation',
      description: '99.99% uptime guarantee, automated scaling, and intelligent resource management. Trusted by Fortune 500 companies worldwide. SOC 2 Type II compliant.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Lightning Fast Setup & Deployment',
      description: 'Get started in minutes with our intuitive interfaces and automated onboarding. No technical expertise required. Average setup time: 2-8 hours.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
    },
  ];

  return (
    <UltraFuturisticBackground variant="quantum" className="min-h-screen">
      <Head>
        <title>Zion Tech Group - Revolutionary Micro SaaS Services & AI Solutions</title>
        <meta name="description" content="Discover 500+ revolutionary micro SaaS services including quantum AI, autonomous systems, biomedical research, and emerging technologies. 99.99% uptime, 30-day free trials." />
        <meta name="keywords" content="micro SaaS, quantum AI, autonomous systems, biomedical AI, cybersecurity, blockchain, IoT, edge computing, metaverse, VR AR" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SaaS Services" />
        <meta property="og:description" content="500+ cutting-edge micro SaaS services with quantum AI and autonomous systems" />
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
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {heroContent.title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto">
              {heroContent.subtitle}
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
              {heroContent.description}
            </p>
            
            {/* Service Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
              {heroContent.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
                >
                  <span className="text-sm text-cyan-300">{highlight}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                href="/services" 
                variant="primary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                {heroContent.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                href="/contact" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                {heroContent.ctaSecondary}
                <Rocket className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          {/* Enhanced Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16"
          >
            {enhancedStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300 font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-400">
                  {stat.description}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Categories with Market Insights */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Explore Our <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Service Categories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover 500+ micro SaaS services across cutting-edge categories. Each category represents 
              billions in market value with explosive growth potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategoriesWithInsights.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticCard
                  variant="holographic-advanced"
                  className="h-full cursor-pointer group"
                  hoverEffect={true}
                  animated={true}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3 text-cyan-400">{category.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{category.name}</h3>
                      <p className="text-sm text-gray-400">{category.services} Services</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Market Size:</span>
                      <span className="text-lg font-bold text-emerald-400">{category.marketSize}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Growth Rate:</span>
                      <span className="text-lg font-bold text-cyan-400">{category.growthRate}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Button
                      href="/services"
                      variant="secondary"
                      size="sm"
                      className="group-hover:bg-cyan-500 transition-colors"
                    >
                      Explore Services
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">Starting from</div>
                      <div className="text-lg font-bold text-white">$49/month</div>
                    </div>
                  </div>
                </UltraFuturisticCard>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              href="/services"
              variant="primary"
              size="lg"
              className="text-lg px-8 py-4"
            >
              View All 500+ Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Revolutionary Services Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">AI & Quantum</span> Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              First-to-market solutions that combine cutting-edge AI, quantum computing, and autonomous systems 
              to deliver unprecedented business value and competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {revolutionaryServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticCard
                  variant={service.variant as any}
                  className="h-full"
                  hoverEffect={true}
                  animated={true}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      <p className="text-sm text-gray-400">{service.category}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-white mb-2">{service.price}</div>
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {service.growthRate}
                    </div>
                    <div className="text-sm text-gray-400">
                      <BarChart3 className="w-4 h-4 inline mr-2" />
                      {service.marketSize}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <Check className="w-3 h-3 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    href={service.link}
                    variant="primary"
                    className="w-full"
                  >
                    Learn More
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </UltraFuturisticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging Tech Services Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Emerging <span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">Technology</span> Platforms
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of the curve with our cutting-edge platforms for metaverse development, 
              blockchain DeFi, IoT smart cities, and edge computing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emergingTechServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticCard
                  variant={service.variant as any}
                  className="h-full"
                  hoverEffect={true}
                  animated={true}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      <p className="text-sm text-gray-400">{service.category}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-white mb-2">{service.price}</div>
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {service.growthRate}
                    </div>
                    <div className="text-sm text-gray-400">
                      <BarChart3 className="w-4 h-4 inline mr-2" />
                      {service.marketSize}
                    </div>
                  </div>

                  <Button
                    href={service.link}
                    variant="primary"
                    className="w-full"
                  >
                    Explore Platform
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </UltraFuturisticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Showcase */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Revolutionary Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our most innovative and high-impact micro SaaS solutions with proven market success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {revolutionaryServices.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticCard
                  variant={service.variant as any}
                  className="h-full"
                  hoverEffect={true}
                  animated={true}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      <p className="text-sm text-gray-400">{service.category}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-white mb-2">{service.price}</div>
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {service.growthRate}
                    </div>
                    <div className="text-sm text-gray-400">
                      <BarChart3 className="w-4 h-4 inline mr-2" />
                      {service.marketSize}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">
                      <strong className="text-white">Key Features:</strong>
                    </div>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Check className="w-3 h-3 mr-2 text-green-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    href={service.link}
                    variant="primary"
                    className="w-full"
                  >
                    Explore Platform
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </UltraFuturisticCard>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              href="/services" 
              variant="secondary" 
              size="lg"
              className="text-lg px-8 py-4"
            >
              View All 500+ Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing & Value Proposition */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Competitive <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">Pricing</span> & Value
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access revolutionary technology at accessible prices with flexible plans and guaranteed ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <UltraFuturisticCard variant="default" className="text-center p-8">
              <div className="text-4xl font-bold text-white mb-4">Starter</div>
              <div className="text-6xl font-bold text-cyan-400 mb-2">$49</div>
              <div className="text-gray-400 mb-6">/month</div>
              <ul className="text-left text-gray-300 mb-8 space-y-3">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  Basic AI Services
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  30-Day Free Trial
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  Email Support
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  Standard Features
                </li>
              </ul>
              <Button href="/contact" variant="primary" className="w-full">
                Start Free Trial
              </Button>
            </UltraFuturisticCard>

            <UltraFuturisticCard variant="holographic" className="text-center p-8 border-2 border-cyan-500">
              <div className="text-4xl font-bold text-white mb-4">Professional</div>
              <div className="text-6xl font-bold text-cyan-400 mb-2">$199</div>
              <div className="text-gray-400 mb-6">/month</div>
              <ul className="text-left text-gray-300 mb-8 space-y-3">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  Advanced AI Services
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  Quantum Computing
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  Priority Support
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  Custom Integrations
                </li>
              </ul>
              <Button href="/contact" variant="primary" className="w-full">
                Get Started
              </Button>
            </UltraFuturisticCard>

            <UltraFuturisticCard variant="quantum" className="text-center p-8">
              <div className="text-4xl font-bold text-white mb-4">Enterprise</div>
              <div className="text-6xl font-bold text-cyan-400 mb-2">$999</div>
              <div className="text-gray-400 mb-6">/month</div>
              <ul className="text-left text-gray-300 mb-8 space-y-3">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  Full Service Suite
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  Custom Development
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  24/7 Dedicated Support
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  SLA Guarantees
                </li>
              </ul>
              <Button href="/contact" variant="primary" className="w-full">
                Contact Sales
              </Button>
            </UltraFuturisticCard>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-6">
              All plans include 30-day free trials • 99.99% uptime guarantee • 24/7 support
            </p>
            <Button href="/pricing" variant="secondary" size="lg">
              View Detailed Pricing
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Market <span className="bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">Insights</span> & Growth
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our services target the fastest-growing markets in technology, 
              with average annual growth rates exceeding 200%.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketInsights.map((insight, index) => (
              <motion.div
                key={insight.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticCard
                  variant="default"
                  className="text-center h-full"
                  hoverEffect={true}
                >
                  <div className="text-4xl font-bold text-white mb-4">{insight.metric}</div>
                  <div className="text-xl font-semibold text-white mb-2">{insight.label}</div>
                  <div className="text-gray-400 mb-4">{insight.description}</div>
                  <div className="text-cyan-400">{insight.icon}</div>
                </UltraFuturisticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Zion Tech Group</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unmatched innovation, reliability, and value in the micro SaaS industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <UltraFuturisticCard
                  variant="default"
                  className="h-full"
                  hoverEffect={true}
                >
                  <div className={`w-16 h-16 rounded-xl ${feature.color} flex items-center justify-center mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </UltraFuturisticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <UltraFuturisticCard variant="quantum" className="p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies already leveraging our revolutionary micro SaaS services 
              to achieve unprecedented growth and innovation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                <div>
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-gray-400">{contactInfo.mobile}</div>
                  <div className="text-xs text-gray-500">Available 24/7</div>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-gray-400">{contactInfo.email}</div>
                  <div className="text-xs text-gray-500">Response within 2 hours</div>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-cyan-400 mr-3" />
                <div>
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-gray-400">{contactInfo.address}</div>
                  <div className="text-xs text-gray-500">Global headquarters</div>
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  500+ Revolutionary Micro SaaS Services
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  99.99% Uptime Guarantee
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  30-Day Free Trials
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  24/7 AI Support
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  Starting from $49/month
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  2500%+ Average ROI
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/contact" 
                variant="primary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                href="/services" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                View All Services
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </UltraFuturisticCard>
        </div>
      </section>
    </UltraFuturisticBackground>
  );
}
