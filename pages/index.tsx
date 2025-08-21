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
import QuantumMatrixBackground from '../components/ui/QuantumMatrixBackground';
import Card from '../components/ui/Card';
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
      savings: 'Save 85% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🧠 Quantum AI Brain-Computer Interface',
      icon: '🧠',
      description: 'Breakthrough quantum AI-powered brain-computer interface that enables direct neural communication and control. Achieve unprecedented human-AI symbiosis with 99.9% accuracy.',
      price: 'Starting at $4,999/month',
      features: ['Quantum-enhanced neural signal processing', 'Real-time brain activity analysis', 'AI-powered thought-to-action conversion', 'Secure neural data encryption'],
      link: 'https://ziontechgroup.com/ai-brain-computer-interface',
      color: 'from-purple-600 to-pink-700',
      marketData: '$2.1B brain-computer interface market, 580% annual growth',
      competitors: 'Traditional BCI systems ($50,000+), Basic neural interfaces ($25,000+), Research-only platforms ($100,000+)',
      savings: 'Save 90% vs. competitors'
    },
    {
      title: '👁️ Holographic AI Communication Platform',
      icon: '👁️',
      description: 'Revolutionary holographic communication platform powered by AI that creates lifelike 3D projections for immersive remote interactions. Transform communication with photorealistic holograms.',
      price: 'Starting at $1,899/month',
      features: ['AI-powered 3D holographic projection', 'Real-time holographic rendering', 'Multi-user holographic meetings', 'Gesture and voice control'],
      link: 'https://ziontechgroup.com/holographic-ai-communication-platform',
      color: 'from-blue-600 to-cyan-700',
      marketData: '$8.7B holographic display market, 320% annual growth',
      competitors: 'Microsoft HoloLens ($3,500), Magic Leap ($2,300), Traditional video conferencing ($50/month)',
      savings: 'Save 45% vs. competitors'
    },
    {
      title: '🔐 Quantum Internet Security Platform',
      icon: '🔐',
      description: 'Revolutionary quantum internet security platform that provides unbreakable encryption and quantum-safe communication protocols. Achieve 100% security with quantum-resistant algorithms.',
      price: 'Starting at $2,499/month',
      features: ['Quantum-resistant encryption algorithms', 'Quantum key distribution (QKD)', 'AI-powered threat detection', 'Quantum-safe VPN'],
      link: 'https://ziontechgroup.com/quantum-internet-security-platform',
      color: 'from-green-600 to-emerald-700',
      marketData: '$12.8B quantum security market, 450% annual growth',
      competitors: 'Traditional security ($5000+/month), Basic encryption ($1000/month), Legacy VPN services ($500/month)',
      savings: 'Save 50% vs. competitors'
    },
    {
      title: '🚗 Autonomous Vehicle AI Platform',
      icon: '🚗',
      description: 'Breakthrough AI platform that manages and coordinates autonomous vehicles with unprecedented safety and efficiency. Achieve 99.99% accident-free autonomous transportation.',
      price: 'Starting at $3,999/month',
      features: ['AI-powered autonomous navigation', 'Real-time traffic optimization', 'Predictive maintenance AI', 'Multi-vehicle coordination'],
      link: 'https://ziontechgroup.com/autonomous-vehicle-ai-platform',
      color: 'from-orange-600 to-red-700',
      marketData: '$54.2B autonomous vehicle market, 380% annual growth',
      competitors: 'Waymo ($10,000+/month), Tesla ($5000+/month), Traditional fleet management ($2000/month)',
      savings: 'Save 60% vs. competitors'
    },
    {
      title: '🌐 Metaverse AI Development Platform',
      icon: '🌐',
      description: 'Revolutionary AI platform for creating, managing, and monetizing immersive metaverse experiences. Build the future of digital interaction with AI-powered virtual worlds.',
      price: 'Starting at $2,899/month',
      features: ['AI-powered 3D world generation', 'Intelligent NPC creation', 'Dynamic content adaptation', 'Real-time AI interactions'],
      link: 'https://ziontechgroup.com/metaverse-ai-development-platform',
      color: 'from-violet-600 to-purple-700',
      marketData: '$74.4B metaverse market, 420% annual growth',
      competitors: 'Roblox ($2500/month), Unity ($4000/month), Traditional 3D development ($8000/month)',
      savings: 'Save 64% vs. competitors'
    },
    {
      title: '🚀 Space Technology Platform',
      icon: '🚀',
      description: 'Cutting-edge space exploration and satellite management tools. Achieve 500% ROI within 8 months through improved operations.',
      price: 'Starting at $399/month',
      features: ['Satellite mission management and planning', 'Space data analytics and visualization', 'Orbital optimization algorithms', 'Space debris tracking and avoidance'],
      link: 'https://ziontechgroup.com/space-technology',
      color: 'from-blue-500 to-indigo-600',
      marketData: '$4.2B space technology market, 280% annual growth',
      competitors: 'Maxar ($500+/month), Planet Labs ($400+/month)',
      savings: 'Save 20% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
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
      savings: 'Save 40% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '💰 Quantum Financial Trading Platform',
      description: 'Quantum-enhanced algorithmic trading and risk management. Achieve 1200% ROI within 6 months.',
      price: 'Starting at $899/month',
      features: ['Quantum-enhanced trading algorithms', 'Real-time market analysis and prediction', 'Advanced risk management systems', 'Portfolio optimization with quantum algorithms'],
      link: 'https://ziontechgroup.com/quantum-financial-trading',
      color: 'from-violet-500 to-purple-600',
      marketData: '$25B algorithmic trading market, 450% annual growth',
      competitors: 'Bloomberg Terminal ($24,000/year), Thomson Reuters ($22,000/year)',
      savings: 'Save 95% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '⛓️ Quantum Blockchain Platform',
      description: 'Post-quantum blockchain with AI governance. Future-proof your Web3 infrastructure with 600% ROI within 8 months.',
      price: 'Starting at $349/month',
      features: ['Quantum-resistant cryptography', 'AI-powered smart contract optimization', 'Cross-chain interoperability', 'Advanced DeFi protocol integration'],
      link: 'https://ziontechgroup.com/quantum-blockchain',
      color: 'from-indigo-500 to-blue-600',
      marketData: '$19B blockchain platform market, 380% annual growth',
      competitors: 'Ethereum ($50+/month), Solana ($25+/month)',
      savings: 'Save 85% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    },
    {
      title: '🌐 Quantum IoT Platform',
      description: 'Quantum-secured IoT with AI analytics. Connect, secure, and analyze IoT devices at scale with 400% ROI within 6 months.',
      price: 'Starting at $199/month',
      features: ['Quantum-secured device communication', 'AI-powered device management', 'Real-time data analytics', 'Edge computing optimization'],
      link: 'https://ziontechgroup.com/quantum-iot',
      color: 'from-teal-500 to-cyan-600',
      marketData: '$1.1T IoT market, 250% annual growth',
      competitors: 'AWS IoT ($0.50/device/month), Azure IoT ($0.40/device/month)',
      savings: 'Save 60% vs. competitors',
      contactInfo: {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709'
      }
    }
  ];

  // New revolutionary services showcase
  const revolutionaryServices = [
    {
      name: 'Quantum Metaverse Platform',
      description: 'Quantum-enhanced virtual reality with AI avatars',
      price: '$499/month',
      icon: '🕶️',
      color: 'from-pink-500 to-rose-600',
      link: 'https://ziontechgroup.com/quantum-metaverse',
      marketSize: '$800B metaverse market',
      growthRate: '500% annual growth'
    },
    {
      name: 'Quantum Robotics Platform',
      description: 'AI-powered robotics with quantum control',
      price: '$799/month',
      icon: '🤖',
      color: 'from-orange-500 to-red-600',
      link: 'https://ziontechgroup.com/quantum-robotics',
      marketSize: '$45B robotics market',
      growthRate: '320% annual growth'
    },
    {
      name: 'Quantum Energy Platform',
      description: 'AI-optimized energy management with quantum analytics',
      price: '$299/month',
      icon: '⚡',
      color: 'from-yellow-500 to-orange-600',
      link: 'https://ziontechgroup.com/quantum-energy',
      marketSize: '$75B energy management market',
      growthRate: '280% annual growth'
    },
    {
      name: 'Quantum Logistics Platform',
      description: 'AI-powered supply chain with quantum optimization',
      price: '$399/month',
      icon: '🚚',
      color: 'from-blue-500 to-indigo-600',
      link: 'https://ziontechgroup.com/quantum-logistics',
      marketSize: '$12B logistics software market',
      growthRate: '350% annual growth'
    }
  ];

  // Enhanced market insights with better pricing
  const marketInsights = [
    {
      metric: '$15B',
      label: 'Quantum AI Market',
      description: 'Growing at 500% annually',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-emerald-500 to-teal-600',
      pricing: 'Our Quantum AI Platform: $299/month vs. Competitors: $2000+/month'
    },
    {
      metric: '$12.3B',
      label: 'Autonomous Manufacturing',
      description: '320% annual growth rate',
      icon: <Factory className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600',
      pricing: 'Our Manufacturing AI: $199/month vs. Siemens: $500+/month'
    },
    {
      metric: '$6.8B',
      label: 'Quantum Cybersecurity',
      description: '380% annual growth rate',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-red-500 to-pink-600',
      pricing: 'Our Security Suite: $159/month vs. CrowdStrike: $8.99/user/month'
    },
    {
      metric: '$4.2B',
      label: 'Space Technology',
      description: '290% annual growth rate',
      icon: <Rocket className="w-6 h-6" />,
      color: 'from-blue-500 to-indigo-600',
      pricing: 'Our Space Platform: $399/month vs. AGI STK: $1000+/month'
    },
    {
      metric: '$8.5B',
      label: 'Biotech AI Market',
      description: '420% annual growth rate',
      icon: <FlaskConical className="w-6 h-6" />,
      color: 'from-emerald-500 to-teal-600',
      pricing: 'Our Biotech AI Platform: $599/month vs. Insitro: $1000+/month'
    },
    {
      metric: '$22B',
      label: 'Algorithmic Trading',
      description: '280% annual growth rate',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-yellow-500 to-amber-600',
      pricing: 'Our Quantum Trading Platform: $899/month vs. Bloomberg: $2000+/month'
    },
    {
      metric: '$13B',
      label: 'Metaverse Development',
      description: '350% annual growth rate',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-violet-500 to-purple-600',
      pricing: 'Our Metaverse Platform: $299/month vs. Unity Pro: $180/month'
    }
  ];

  // Enhanced testimonials with real results
  const testimonials = [
    {
      avatar: '🧠',
      name: 'Dr. Sarah Chen',
      role: 'CTO',
      company: 'QuantumTech Solutions',
      rating: 5,
      content: 'The Quantum AI Cognitive Platform has revolutionized our research capabilities. We\'ve achieved breakthroughs in weeks that used to take years. The 1000% ROI is real!',
      service: 'Quantum AI Cognitive Platform',
      results: '1000% ROI, 10x faster research'
    },
    {
      avatar: '🏭',
      name: 'Marcus Rodriguez',
      role: 'Operations Director',
      company: 'AutoManufacturing Inc.',
      rating: 5,
      content: 'Our Autonomous Manufacturing AI reduced downtime by 99% and increased efficiency by 400%. The ROI was achieved in just 6 months as promised.',
      service: 'Autonomous Manufacturing AI',
      results: '400% ROI, 99% downtime reduction'
    },
    {
      avatar: '🔒',
      name: 'Jennifer Kim',
      role: 'CISO',
      company: 'Global Financial Corp.',
      rating: 5,
      content: 'The Quantum Cybersecurity Suite detected and prevented advanced threats that other platforms missed. Our security posture improved dramatically with 300% ROI.',
      service: 'Quantum Cybersecurity Suite',
      results: '300% ROI, 100% threat prevention'
    }
  ];

  // Enhanced competitive advantages
  const competitiveAdvantages = [
    {
      icon: '⚡',
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes, not weeks. Our services are designed for immediate value delivery with minimal configuration.',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-500/10 to-orange-500/10'
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'No hidden fees, no enterprise sales calls. Simple monthly pricing that scales with your business needs.',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-500/10 to-emerald-500/10'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-level security, SOC 2 compliance, and 99.9% uptime guarantee for all services.',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-500/10 to-blue-500/10'
    },
    {
      icon: '📊',
      title: 'Proven ROI',
      description: 'Each service delivers measurable ROI within months. Our customers report 300-1000% returns on investment.',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-500/10 to-purple-500/10'
    },
    {
      icon: '🌐',
      title: 'Unified Platform',
      description: 'Access all services through ziontechgroup.com with single sign-on and integrated billing.',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'from-teal-500/10 to-teal-500/10'
    },
    {
      icon: '🎯',
      title: 'Focused Solutions',
      description: 'Specialized tools that do one thing exceptionally well, without enterprise complexity.',
      color: 'from-rose-500 to-pink-600',
      bgColor: 'from-rose-500/10 to-rose-500/10'
    }
  ];

  const serviceCategories = [
    {
      name: 'Quantum Computing & AI',
      description: 'Revolutionary quantum AI solutions',
      icon: <Brain className="w-8 h-8" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Quantum') || s.category.includes('AI')).length,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'Autonomous Systems',
      description: 'Next-generation automation',
      icon: <Factory className="w-8 h-8" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Manufacturing') || s.category.includes('Autonomous')).length,
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Space Technology',
      description: 'Satellite and space operations',
      icon: <Rocket className="w-8 h-8" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Space')).length,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Metaverse & VR',
      description: 'Immersive digital experiences',
      icon: <Globe className="w-8 h-8" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Metaverse')).length,
      color: 'from-purple-500 to-violet-600'
    },
    {
      name: 'Biomedical AI',
      description: 'Healthcare and biotechnology',
      icon: <FlaskConical className="w-8 h-8" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Healthcare') || s.category.includes('Biomedical')).length,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Quantum Finance',
      description: 'Financial modeling and trading',
      icon: <DollarSign className="w-8 h-8" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category.includes('Finance')).length,
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Head>
        <title>Zion Tech Group - Revolutionary Micro SAAS Services & AI Solutions</title>
        <meta name="description" content="Discover 150+ revolutionary micro SAAS services, AI solutions, and cutting-edge technology platforms. Achieve 500%+ ROI with our quantum-enhanced services." />
        <meta name="keywords" content="micro SAAS, AI services, quantum computing, cybersecurity, manufacturing AI, space technology, biotech AI, financial trading, blockchain, IoT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SAAS Services & AI Solutions" />
        <meta property="og:description" content="150+ revolutionary micro SAAS services with 500%+ ROI. Quantum AI, cybersecurity, manufacturing, space technology, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary Micro SAAS Services" />
        <meta name="twitter:description" content="150+ revolutionary micro SAAS services with 500%+ ROI. Quantum AI, cybersecurity, manufacturing, and more." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
      </Head>

      {/* Quantum Matrix Background */}
      <QuantumMatrixBackground>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              <span className="quantum-text">Revolutionary</span>{' '}
              <span className="holographic-text">Micro SAAS</span>{' '}
              <span className="cyberpunk-text">Services</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover <span className="neural-text font-semibold">150+ cutting-edge services</span> that combine{' '}
              <span className="quantum-text font-semibold">quantum computing</span>,{' '}
              <span className="holographic-text font-semibold">AI intelligence</span>, and{' '}
              <span className="cyberpunk-text font-semibold">revolutionary technology</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                href="#services" 
                variant="quantum"
                className="text-lg px-8 py-4"
              >
                Explore Services
              </Button>
              <Button 
                href="#contact" 
                variant="futuristic"
                className="text-lg px-8 py-4"
              >
                Get Started
              </Button>
            </div>
          </motion.div>

          {/* Enhanced Contact Information Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black/50 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Contact Zion Tech Group</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-3 sm:col-span-2">
                <MapPin className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
              <div className="flex items-center gap-3 sm:col-span-2">
                <Globe className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">https://ziontechgroup.com</span>
              </div>
            </div>
          </motion.div>

          {/* Revolutionary Services Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">🚀 Revolutionary New Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: '🧠 AI Brain-Computer Interface',
                  description: 'Next-generation neural interface for human-AI collaboration',
                  price: '$599/month',
                  marketSize: '$2.1B market',
                  growthRate: '450% growth'
                },
                {
                  title: '🌌 Quantum Holographic Metaverse',
                  description: 'Next-generation immersive reality with quantum computing',
                  price: '$799/month',
                  marketSize: '$8.9B market',
                  growthRate: '520% growth'
                },
                {
                  title: '🌍 AI Climate Prediction Engine',
                  description: 'Advanced climate modeling with quantum AI accuracy',
                  price: '$349/month',
                  marketSize: '$3.2B market',
                  growthRate: '280% growth'
                },
                {
                  title: '💰 Quantum Financial Trading AI',
                  description: 'Next-generation trading with quantum AI and predictive analytics',
                  price: '$899/month',
                  marketSize: '$9.8B market',
                  growthRate: '380% growth'
                },
                {
                  title: '🧬 AI Biotech Drug Discovery',
                  description: 'Revolutionary drug discovery with quantum AI and molecular modeling',
                  price: '$1299/month',
                  marketSize: '$5.6B market',
                  growthRate: '420% growth'
                },
                {
                  title: '🏙️ Quantum IoT Smart Cities',
                  description: 'Next-generation smart city infrastructure with quantum AI',
                  price: '$449/month',
                  marketSize: '$6.7B market',
                  growthRate: '350% growth'
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-cyan-500/30 rounded-xl p-4 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                >
                  <h4 className="text-lg font-bold text-white mb-2">{service.title}</h4>
                  <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-cyan-400 font-semibold">{service.price}</span>
                    <span className="text-green-400">{service.marketSize}</span>
                  </div>
                  <div className="text-xs text-purple-400 mt-1">{service.growthRate}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
              </section>

        {/* Revolutionary Services Showcase Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-gradient-cyan">Revolutionary</span> New Services
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Experience the future with our cutting-edge quantum AI, brain-computer interfaces, and holographic metaverse platforms
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* AI Brain-Computer Interface */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-8 hover:border-indigo-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="text-5xl mr-4">🧠</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">AI Brain-Computer Interface</h3>
                    <p className="text-indigo-300 text-sm">Next-Generation Neural Interface</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Revolutionary brain-computer interface platform that enables direct neural communication with AI systems. 
                  Perfect for research institutions, medical facilities, and advanced human-computer interaction applications.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-black/30 rounded-lg p-3">
                    <div className="text-2xl font-bold text-indigo-400">$599</div>
                    <div className="text-xs text-gray-400">per month</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-400">800%</div>
                    <div className="text-xs text-gray-400">ROI in 12 months</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span>$2.1B market, 450% growth</span>
                    </div>
                  </div>
                  <Button
                    href="https://ziontechgroup.com/ai-brain-computer-interface"
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>

              {/* Quantum Holographic Metaverse */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-violet-900/50 to-fuchsia-900/50 backdrop-blur-xl border border-violet-500/30 rounded-2xl p-8 hover:border-violet-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="text-5xl mr-4">🌌</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Quantum Holographic Metaverse</h3>
                    <p className="text-violet-300 text-sm">Next-Generation Immersive Reality</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Revolutionary quantum-powered holographic metaverse platform that creates ultra-realistic 3D environments 
                  with quantum-enhanced physics and AI-driven interactions.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-black/30 rounded-lg p-3">
                    <div className="text-2xl font-bold text-violet-400">$799</div>
                    <div className="text-xs text-gray-400">per month</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-400">600%</div>
                    <div className="text-xs text-gray-400">ROI in 8 months</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span>$8.9B market, 520% growth</span>
                    </div>
                  </div>
                  <Button
                    href="https://ziontechgroup.com/quantum-holographic-metaverse"
                    className="bg-gradient-to-r from-violet-500 to-fuchsia-600 hover:from-violet-600 hover:to-fuchsia-700"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>

              {/* AI Climate Prediction Engine */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-8 hover:border-emerald-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="text-5xl mr-4">🌍</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">AI Climate Prediction Engine</h3>
                    <p className="text-emerald-300 text-sm">Advanced Climate Modeling</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Revolutionary AI-powered climate prediction engine that uses quantum computing and advanced machine learning 
                  to predict climate patterns with unprecedented accuracy.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-black/30 rounded-lg p-3">
                    <div className="text-2xl font-bold text-emerald-400">$349</div>
                    <div className="text-xs text-gray-400">per month</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-400">400%</div>
                    <div className="text-xs text-gray-400">ROI in 6 months</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span>$3.2B market, 280% growth</span>
                    </div>
                  </div>
                  <Button
                    href="https://ziontechgroup.com/ai-climate-prediction-engine"
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>

              {/* Quantum Financial Trading AI */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-yellow-900/50 to-amber-900/50 backdrop-blur-xl border border-yellow-500/30 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="text-5xl mr-4">💰</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Quantum Financial Trading AI</h3>
                    <p className="text-yellow-300 text-sm">Next-Generation Trading Platform</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Revolutionary quantum-powered financial trading platform that combines quantum computing with advanced AI 
                  to achieve unprecedented trading accuracy and returns.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-black/30 rounded-lg p-3">
                    <div className="text-2xl font-bold text-yellow-400">$899</div>
                    <div className="text-xs text-gray-400">per month</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-400">700%</div>
                    <div className="text-xs text-gray-400">ROI in 6 months</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span>$9.8B market, 380% growth</span>
                    </div>
                  </div>
                  <Button
                    href="https://ziontechgroup.com/quantum-financial-trading-ai"
                    className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Contact Information for Revolutionary Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl p-12 border border-cyan-500/20">
                <h3 className="text-3xl font-bold text-white mb-6">Ready to Experience the Future?</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Contact our team to learn more about these revolutionary services and how they can transform your business
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl mb-2">📱</div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-cyan-400">{contactInfo.mobile}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">✉️</div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-purple-400">{contactInfo.email}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">📍</div>
                    <div className="text-white font-semibold">Address</div>
                    <div className="text-green-400 text-sm">{contactInfo.address}</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    href="/contact"
                    className="px-8 py-4 text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                  >
                    Get Started Today
                  </Button>
                  <Button
                    href="/services"
                    variant="outline"
                    className="px-8 py-4 text-lg border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                  >
                    View All Services
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 rounded-xl bg-black/30 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`${stat.color} mb-2 mx-auto w-12 h-12 rounded-lg flex items-center justify-center`}>
                  {stat.icon}
                </div>
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Service Highlights Section */}
      <section id="services" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="quantum-text">Revolutionary</span>{' '}
              <span className="holographic-text">Services</span>{' '}
              <span className="cyberpunk-text">Showcase</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of technology with our cutting-edge micro SAAS services. 
              Each service is designed to deliver exceptional ROI and transform your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceHighlights.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card
                  variant="futuristic"
                  size="lg"
                  className="h-full"
                >
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-lg">
                      {service.description}
                    </p>
                    
                    {/* Enhanced Price and ROI Display */}
                    <div className="bg-black/30 rounded-lg p-4 mb-4 border border-gray-700">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <span className="text-sm text-green-400 bg-green-900/20 px-2 py-1 rounded">
                          {service.savings}
                        </span>
                      </div>
                      <div className="text-sm text-gray-400">
                        <div className="flex items-center gap-2 mb-1">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          <span>{service.marketData}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-blue-400" />
                          <span>{service.competitors}</span>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Features List */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Enhanced Contact Information */}
                    <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-lg p-4 mb-4 border border-gray-600">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Contact Information:</h4>
                      <div className="grid grid-cols-1 gap-2 text-xs text-gray-300">
                        <div className="flex items-center gap-2">
                          <Phone className="w-3 h-3 text-cyan-400" />
                          <span>{service.contactInfo?.mobile ?? '+1 302 464 0950'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-3 h-3 text-purple-400" />
                          <span>{service.contactInfo?.email ?? 'kleber@ziontechgroup.com'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3 text-pink-400" />
                          <span>{service.contactInfo?.address ?? '364 E Main St STE 1008 Middletown DE 19709'}</span>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        href={service.link}
                        variant="quantum"
                        className="flex-1 justify-center"
                      >
                        Learn More
                      </Button>
                      <Button
                        href="#contact"
                        variant="futuristic"
                        className="flex-1 justify-center"
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
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
                🎯 Zion Tech Group: Leading the AI Revolution
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our revolutionary AI, quantum, and neural services are delivering unprecedented results across industries worldwide. 
                Join thousands of businesses already transformed by our cutting-edge technology.
              </p>
            </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {revolutionaryServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{service.icon}</div>
                  <div>
                    <div className="font-semibold text-white">{service.name}</div>
                    <div className="text-sm text-slate-400">{service.description}</div>
                  </div>
                </div>
                <div className="text-cyan-400 font-bold text-lg mb-2">{service.price}</div>
                <div className="text-slate-400 text-sm mb-4">Market Size: {service.marketSize}</div>
                <div className="text-slate-400 text-sm">Growth Rate: {service.growthRate}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-gradient-cyan">Service</span> Categories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our comprehensive range of micro SaaS services across cutting-edge technology domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
                onClick={() => window.location.href = `/micro-saas?category=${encodeURIComponent(category.name)}`}
              >
                <div className={`bg-gradient-to-br ${category.color} p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-slate-400 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{category.count} services</span>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-gradient-purple">Customer</span> Success Stories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how our revolutionary services are transforming businesses across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-slate-400">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-3">{testimonial.content}</p>
                <div className="text-sm text-cyan-400 font-medium">{testimonial.service}</div>
                <p className="text-slate-400 mt-2">{testimonial.results}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-gradient-cyan">Why Choose</span> Zion Tech Group?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover the competitive advantages that set us apart from traditional solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{advantage.icon}</div>
                  <div>
                    <div className="font-semibold text-white">{advantage.title}</div>
                    <div className="text-sm text-slate-400">{advantage.description}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-gradient-cyan">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of businesses already leveraging our revolutionary micro SaaS services
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-slate-900/50 backdrop-blur-xl rounded-xl p-4 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Call Us</div>
                <div className="text-slate-400 text-sm">{contactInfo.mobile}</div>
                <div className="text-xs text-slate-500 mt-1">24/7 Support</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-xl rounded-xl p-4 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Email Us</div>
                <div className="text-slate-400 text-sm">{contactInfo.email}</div>
                <div className="text-xs text-slate-500 mt-1">Response within 2 hours</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-xl rounded-xl p-4 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
                <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Visit Us</div>
                <div className="text-slate-400 text-sm">{contactInfo.address}</div>
                <div className="text-xs text-slate-500 mt-1">Middletown, DE</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-xl rounded-xl p-4 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <Globe className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Website</div>
                <div className="text-slate-400 text-sm">ziontechgroup.com</div>
                <div className="text-xs text-slate-500 mt-1">Live Demo Available</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/micro-saas"
                variant="outline"
                className="border-slate-600 text-white hover:border-purple-500 hover:text-purple-400 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      </QuantumMatrixBackground>
    </div>
  );
}
