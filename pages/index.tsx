import React from 'react';
import Head from 'next/head';
import { 
  Clock, DollarSign, TrendingUp, Brain, 
  Zap, Rocket, Mail, Phone, MapPin, Sparkles, 
  ArrowRight, ExternalLink, Check, Cpu, 
  ShieldCheck, Star, Users, Globe, Target
} from 'lucide-react';
import Button from '../components/ui/Button';
import QuantumNeuralBackground from '../components/ui/QuantumNeuralBackground';
import QuantumCard from '../components/ui/QuantumCard';
import { Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check, ExternalLink, Star, Users, Globe, Lock, Rocket, Cpu, Database, TrendingUp, Clock, Target, Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, BookOpen as BookOpenIcon, Activity as ActivityIcon, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Brain, Atom, Cpu as CpuIcon, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Rocket as RocketIcon } from 'lucide-react';

export default function HomePage() {
  const heroStats = [
    { value: '100+', label: 'Real Micro SaaS Services', color: 'text-cyan-400' },
    { value: '99.9%', label: 'Uptime Guarantee', color: 'text-fuchsia-400' },
    { value: '30', label: 'Day Free Trials', color: 'text-blue-400' },
    { value: '24/7', label: 'AI Support', color: 'text-green-400' },
    { value: '$500M+', label: 'Market Value', color: 'text-yellow-400' },
    { value: '2500%+', label: 'Average ROI', color: 'text-purple-400' },
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

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
      category: 'Space Technology',
      variant: 'quantum-space',
      link: 'https://ziontechgroup.com/ai-space-exploration',
      features: ['Satellite management', 'Mission planning', 'Real-time monitoring', 'Autonomous navigation'],
      marketSize: '$1.8B market',
      growthRate: '400% annual growth'
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
      icon: <Brain className="w-8 h-8 text-white" />,
      title: '100+ Real Micro SaaS Services',
      description: 'Comprehensive portfolio of fully functional micro SaaS tools with real implementations, not just mockups.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: <Atom className="w-8 h-8 text-white" />,
      title: 'Quantum & AI Solutions',
      description: 'Cutting-edge quantum computing, AI-powered automation, and next-generation technology solutions.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      gradient: 'from-fuchsia-400 to-purple-500',
    },
    {
      icon: <ShieldIcon className="w-8 h-8 text-white" />,
      title: 'Enterprise Security',
      description: '99.9% uptime guarantee, quantum-safe cryptography, and intelligent security monitoring.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: <ZapIcon className="w-8 h-8 text-white" />,
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes with our intuitive interfaces and automated onboarding processes.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: <GlobeIcon className="w-8 h-8 text-white" />,
      title: 'Global Infrastructure',
      description: 'Multi-cloud deployment, edge computing, and worldwide CDN for optimal performance.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
    },
    {
      icon: <RocketIcon className="w-8 h-8 text-white" />,
      title: 'Innovation First',
      description: 'Pioneering emerging technologies including blockchain, AR/VR, and quantum computing.',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      gradient: 'from-teal-400 to-cyan-500',
    },
  ];

  const technologyStack = [
    { name: 'Next.js 14', category: 'Framework', icon: '⚡' },
    { name: 'React 18', category: 'Library', icon: '⚛️' },
    { name: 'TypeScript 5', category: 'Language', icon: '📘' },
    { name: 'Tailwind CSS', category: 'Styling', icon: '🎨' },
    { name: 'Node.js 20', category: 'Runtime', icon: '🟢' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
    { name: 'Redis', category: 'Cache', icon: '🔴' },
    { name: 'Docker', category: 'Containerization', icon: '🐳' },
    { name: 'Kubernetes', category: 'Orchestration', icon: '☸️' },
    { name: 'AWS', category: 'Cloud', icon: '☁️' },
    { name: 'Terraform', category: 'Infrastructure', icon: '🏗️' },
    { name: 'Prometheus', category: 'Monitoring', icon: '📊' },
    { name: 'Quantum Computing', category: 'Emerging Tech', icon: '⚛️' },
    { name: 'AI/ML', category: 'Intelligence', icon: '🤖' },
    { name: 'Blockchain', category: 'Web3', icon: '🔗' },
    { name: 'IoT', category: 'Connected', icon: '🌐' },
  ];

  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Automation',
      description: 'Intelligent systems that learn, adapt, and optimize your business processes automatically with quantum-enhanced capabilities.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      textColor: 'text-fuchsia-400',
      gradient: 'from-fuchsia-400 to-purple-500',
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and high-performance cloud solutions designed for modern applications with quantum computing integration.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: '🔒',
      title: 'Quantum Security',
      description: 'Next-generation cybersecurity with quantum-resistant cryptography and AI threat detection.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: '📊',
      title: 'Data Intelligence',
      description: 'Advanced analytics, machine learning, and business intelligence for data-driven decisions.',
      color: 'bg-gradient-to-br from-purple-500 to-violet-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-violet-500',
    },
    {
      icon: '🌐',
      title: 'IoT & Edge Computing',
      description: 'Connected devices and edge processing for real-time insights and automation.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: '⛓️',
      title: 'Blockchain Solutions',
      description: 'Decentralized applications, smart contracts, and Web3 infrastructure.',
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
      textColor: 'text-yellow-400',
      gradient: 'from-yellow-400 to-orange-500',
    },
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: '🤖',
      count: '25+ Services',
      description: 'Advanced AI solutions for content generation, automation, and business intelligence',
      color: 'from-fuchsia-500 to-purple-600'
    },
    {
      name: 'Cybersecurity & Quantum',
      icon: '🔐',
      count: '20+ Services',
      description: 'Quantum-safe cryptography and AI-powered threat detection',
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Blockchain & Web3',
      icon: '⛓️',
      count: '15+ Services',
      description: 'DeFi platforms, decentralized identity, and smart contract solutions',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      name: 'IoT & Edge Computing',
      icon: '🌐',
      count: '12+ Services',
      description: 'Edge AI, device management, and real-time data processing',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Quantum Computing',
      icon: '⚛️',
      count: '8+ Services',
      description: 'Quantum algorithms, simulation, and optimization platforms',
      color: 'from-purple-500 to-violet-600'
    },
    {
      name: 'AR/VR & Immersive Tech',
      icon: '🥽',
      count: '10+ Services',
      description: 'Enterprise AR/VR platforms and immersive experiences',
      color: 'from-pink-500 to-rose-600'
    }
  ];

  return (
    <QuantumNeuralBackground variant="quantum" intensity="medium">
      <div className="min-h-screen">
        <Head>
          <title>Zion Tech Group - 100+ Micro SaaS Services | AI, Quantum, Blockchain & More</title>
          <meta name="description" content="Explore 100+ real micro SaaS services from Zion Tech Group. AI-powered solutions, quantum computing, blockchain, cybersecurity, IoT, and emerging technologies. Start your free trial today." />
          <meta name="keywords" content="micro SaaS services, AI solutions, quantum computing, blockchain, cybersecurity, IoT platform, AR/VR, edge computing, Zion Tech Group" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="Zion Tech Group - 100+ Micro SaaS Services" />
          <meta property="og:description" content="Comprehensive technology services portfolio with AI, quantum, blockchain, and emerging technology solutions." />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-6xl md:text-8xl font-bold mb-8 futuristic-glow">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <br />
                <span className="text-white text-4xl md:text-6xl">100+ Micro SaaS Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                Pioneering the future with cutting-edge micro SaaS solutions across AI, quantum computing, blockchain, 
                cybersecurity, IoT, and emerging technologies. Each service delivers immediate business value with measurable ROI.
              </p>
              
              {/* Contact Information Banner */}
              <motion.div
                className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-2xl p-6 mb-8 max-w-4xl mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center space-y-2">
                    <Phone className="w-6 h-6 text-cyan-400" />
                    <div>
                      <div className="text-sm text-gray-400">Phone</div>
                      <div className="text-white font-semibold">{contactInfo.mobile}</div>
                    </div>
                    <div className="text-gray-400 text-sm md:text-base">
                      {stat.label}
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Mail className="w-6 h-6 text-fuchsia-400" />
                    <div>
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="text-white font-semibold">{contactInfo.email}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <MapPin className="w-6 h-6 text-green-400" />
                    <div>
                      <div className="text-sm text-gray-400">Address</div>
                      <div className="text-white font-semibold text-sm">{contactInfo.address}</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Button
                  href="/services"
                  variant="primary"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Get Started
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

              {/* Contact Info */}
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-white mb-4">Ready to Transform Your Business?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center">
                    <Phone className="w-4 h-4 text-cyan-400 mr-2" />
                    <span className="text-gray-300">{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="text-gray-300">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Platform Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built for the future with enterprise-grade reliability, cutting-edge technology, and intelligent automation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <QuantumCard
                  key={index}
                  variant="quantum"
                  intensity="medium"
                  className="h-full"
                >
                  <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </QuantumCard>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Service Categories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive portfolio covering the entire spectrum of modern technology needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <QuantumCard
                  key={index}
                  variant="holographic"
                  intensity="medium"
                  className="h-full cursor-pointer"
                  onClick={() => window.location.href = `/services?category=${encodeURIComponent(category.name)}`}
                >
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                  <div className="text-2xl font-bold text-cyan-400 mb-3">{category.count}</div>
                  <p className="text-gray-300 leading-relaxed">{category.description}</p>
                  <div className="mt-4 flex items-center text-cyan-400">
                    <span className="text-sm">Explore Services</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </QuantumCard>
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                href="/services"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Technology Stack
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built with the latest technologies and best practices for maximum performance and scalability.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologyStack.map((tech, index) => (
                <QuantumCard
                  key={index}
                  variant="neural"
                  intensity="low"
                  className="text-center p-4"
                >
                  <div className="text-3xl mb-3">{tech.icon}</div>
                  <h3 className="font-semibold text-white mb-1">{tech.name}</h3>
                  <p className="text-xs text-gray-400">{tech.category}</p>
                </QuantumCard>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Core Capabilities
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions designed to address every aspect of modern business technology needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <QuantumCard
                  key={index}
                  variant="cyberpunk"
                  intensity="medium"
                  className="h-full"
                >
                  <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </QuantumCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <QuantumCard variant="quantum" intensity="high" className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Build the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using Zion Tech Group services to accelerate their digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  href="/services"
                  variant="primary"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Schedule Demo
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>14-day free trial • No credit card required • 24/7 support</p>
              </div>
            </QuantumCard>
          </div>
        </section>
      </div>
    </QuantumNeuralBackground>
  );
}
