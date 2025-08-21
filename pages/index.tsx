import React from 'react';
import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import { Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check, ExternalLink, Star, Users, Globe, Lock, Rocket, Cpu, Database, TrendingUp, Clock, Target, Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, BookOpen as BookOpenIcon, Activity as ActivityIcon, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Sparkles, Atom, Brain, Eye, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Cpu as CpuIcon, Cloud as CloudIcon, Bot as BotIcon, Lock as LockIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Users as UsersIcon, Award as AwardIcon, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon, ExternalLink as ExternalLinkIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Trophy, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Heart, User } from 'lucide-react';

export default function HomePage() {
  const heroStats = [
    { value: '300+', label: 'Real Micro SaaS Services', color: 'text-cyan-400' },
    { value: '99.9%', label: 'Uptime Guarantee', color: 'text-fuchsia-400' },
    { value: '14', label: 'Day Free Trials', color: 'text-blue-400' },
    { value: '24/7', label: 'AI Support', color: 'text-green-400' },
    { value: '$150M+', label: 'Market Value', color: 'text-yellow-400' },
    { value: '800%+', label: 'Average ROI', color: 'text-purple-400' },
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const platformFeatures = [
    {
      icon: <Cloud className="w-8 h-8 text-white" />,
      title: '300+ Real Micro SaaS Services',
      description: 'Complete portfolio of fully functional micro SaaS tools with real implementations, not just mockups. Starting from $49/month with 14-day free trials. All services are production-ready with real APIs, databases, and infrastructure.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI content generation, quantum AI training, biomedical research, legal contract analysis, and quantum computing platforms. Market-leading technology with 800%+ average ROI. Includes cutting-edge neural interfaces and brain-computer communication.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      gradient: 'from-fuchsia-400 to-purple-500',
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-white" />,
      description: '99.9% uptime guarantee, automated scaling, and intelligent resource management. Trusted by Fortune 500 companies worldwide. Includes quantum-resistant security and autonomous systems.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes with our intuitive interfaces and automated onboarding. No technical expertise required. Includes quantum computing access and AI-powered automation.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Bank-Level Security',
      description: 'SOC 2 compliance, quantum-resistant encryption, and automated security monitoring. Future-proof protection against quantum threats. Includes AI-powered threat detection and zero-trust architecture.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Transparent Pricing',
      description: 'No hidden fees, simple monthly pricing that scales with your business needs. Competitive rates starting at $49/month. Includes enterprise packages and custom solutions.',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      gradient: 'from-teal-400 to-cyan-500',
    },
  ];

  const technologyStack = [
    { name: 'Next.js', category: 'Framework', icon: '⚡' },
    { name: 'React', category: 'Library', icon: '⚛️' },
    { name: 'TypeScript', category: 'Language', icon: '📘' },
    { name: 'Tailwind CSS', category: 'Styling', icon: '🎨' },
    { name: 'Node.js', category: 'Runtime', icon: '🟢' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
    { name: 'Redis', category: 'Cache', icon: '🔴' },
    { name: 'Docker', category: 'Containerization', icon: '🐳' },
    { name: 'Kubernetes', category: 'Orchestration', icon: '☸️' },
    { name: 'AWS', category: 'Cloud', icon: '☁️' },
    { name: 'Terraform', category: 'Infrastructure', icon: '🏗️' },
    { name: 'Prometheus', category: 'Monitoring', icon: '📊' },
    { name: 'Quantum Computing', category: 'Emerging Tech', icon: '⚛️' },
    { name: 'AI/ML', category: 'Intelligence', icon: '🤖' },
    { name: 'Blockchain', category: 'Web3', icon: '⛓️' },
    { name: 'IoT', category: 'Connected Devices', icon: '📡' },
  ];

  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Automation',
      description: 'Intelligent systems that learn, adapt, and optimize your business processes automatically. Includes quantum AI hybrid platforms and neural interfaces.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      textColor: 'text-fuchsia-400',
      gradient: 'from-fuchsia-400 to-purple-500',
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and high-performance cloud solutions designed for modern applications. Includes quantum cloud computing and AI-optimized infrastructure.',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      icon: '🔐',
      title: 'Advanced Security',
      description: 'Enterprise-grade security with quantum-resistant encryption, AI threat detection, and automated incident response. Future-proof protection against emerging threats.',
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      textColor: 'text-red-400',
      gradient: 'from-red-400 to-pink-500',
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Powerful analytics and business intelligence tools powered by AI and quantum computing. Real-time insights and predictive analytics for data-driven decisions.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: '⚛️',
      title: 'Quantum Computing',
      description: 'Access to cutting-edge quantum computing resources for complex problem-solving, optimization, and research. Includes quantum AI hybrid algorithms.',
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-indigo-500',
    },
    {
      icon: '🚀',
      title: 'Innovation Hub',
      description: 'Center for emerging technology research, startup incubation, and industry partnerships. Shape the future of quantum AI and emerging technologies.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      gradient: 'from-orange-400 to-red-500',
    },
  ];

  const innovativeServices = [
    {
      name: 'Quantum AI Optimizer',
      description: 'Next-generation AI optimization using quantum algorithms',
      price: '$299/month',
      category: 'AI & Quantum Computing',
      icon: '⚛️',
      color: 'from-cyan-500 to-blue-600',
      link: 'https://ziontechgroup.com/quantum-ai-optimizer',
      variant: 'quantum-holographic' as const
    },
    {
      name: 'AI Biomedical Research',
      description: 'Revolutionary AI-powered drug discovery platform',
      price: '$899/month',
      category: 'Biomedical & Healthcare',
      icon: '🧬',
      color: 'from-green-500 to-emerald-600',
      link: 'https://ziontechgroup.com/ai-biomedical-research',
      variant: 'holographic' as const
    },
    {
      name: 'Quantum Financial Modeling',
      description: 'Quantum-powered financial analytics and risk assessment',
      price: '$699/month',
      category: 'Financial Technology',
      icon: '💰',
      color: 'from-yellow-500 to-orange-600',
      link: 'https://ziontechgroup.com/quantum-financial-modeling',
      variant: 'quantum' as const
    },
    {
      name: 'AI Climate Prediction',
      description: 'Advanced AI-powered climate modeling and prediction',
      price: '$599/month',
      category: 'Climate & Environment',
      icon: '🌍',
      color: 'from-teal-500 to-cyan-600',
      link: 'https://ziontechgroup.com/ai-climate-prediction',
      variant: 'neural' as const
    },
    {
      name: 'AI Autonomous Vehicles',
      description: 'Next-generation autonomous vehicle intelligence',
      price: '$999/month',
      category: 'Transportation & Logistics',
      icon: '🚗',
      color: 'from-blue-500 to-indigo-600',
      link: 'https://ziontechgroup.com/ai-autonomous-vehicle',
      variant: 'cyberpunk' as const
    },
    {
      name: 'Quantum Supply Chain',
      description: 'Quantum-powered supply chain optimization',
      price: '$799/month',
      category: 'Manufacturing & Industry 4.0',
      icon: '📦',
      color: 'from-orange-500 to-red-600',
      link: 'https://ziontechgroup.com/quantum-supply-chain',
      variant: 'quantum-holographic' as const
    }
  ];

  const marketInsights = [
    {
      metric: '$2.8B',
      label: 'AI Drug Discovery Market',
      description: 'Growing at 180% annually',
      icon: <FlaskConical className="w-6 h-6" />
    },
    {
      metric: '$1.5B',
      label: 'Quantum Finance Market',
      description: '300% annual growth rate',
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      metric: '$3.5B',
      label: 'Autonomous Vehicle AI',
      description: '200% annual growth rate',
      icon: <Car className="w-6 h-6" />
    },
    {
      metric: '$1.6B',
      label: 'Smart Energy Market',
      description: '150% annual growth rate',
      icon: <Leaf className="w-6 h-6" />
    }
  ];

  const serviceCategories = [
    {
      name: 'AI & Quantum Computing',
      count: '100+',
      description: 'Advanced AI models, quantum algorithms, and neural interfaces for unparalleled intelligence.',
      icon: <Brain className="w-12 h-12 text-purple-400" />
    },
    {
      name: 'Biomedical & Healthcare',
      count: '50+',
      description: 'Revolutionary AI-powered drug discovery, personalized medicine, and healthcare analytics.',
      icon: <Heart className="w-12 h-12 text-red-400" />
    },
    {
      name: 'Financial Technology',
      count: '40+',
      description: 'Quantum-powered financial modeling, risk assessment, and fraud detection.',
      icon: <DollarSign className="w-12 h-12 text-yellow-400" />
    },
    {
      name: 'Climate & Environment',
      count: '30+',
      description: 'Advanced AI-powered climate modeling, prediction, and sustainable solutions.',
      icon: <Leaf className="w-12 h-12 text-green-400" />
    },
    {
      name: 'Transportation & Logistics',
      count: '20+',
      description: 'Next-generation autonomous vehicle intelligence and supply chain optimization.',
      icon: <Truck className="w-12 h-12 text-blue-400" />
    },
    {
      name: 'Manufacturing & Industry 4.0',
      count: '10+',
      description: 'Quantum-powered manufacturing processes, supply chain optimization, and quality control.',
      icon: <Factory className="w-12 h-12 text-orange-400" />
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$49/month',
      period: 'per service',
      description: 'Ideal for startups and small businesses. Access to 10+ core services.',
      features: [
        'Access to 10+ core services',
        '14-day free trial',
        'Basic support',
        'Scalable infrastructure',
      ],
      color: 'from-gray-900 to-gray-800',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$199/month',
      period: 'per service',
      description: 'Perfect for growing businesses. Access to 50+ services.',
      features: [
        'Access to 50+ services',
        '14-day free trial',
        'Priority support',
        'Enterprise-grade infrastructure',
      ],
      color: 'from-gray-900 to-gray-800',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$999/month',
      period: 'per service',
      description: 'For large enterprises and complex deployments. Custom solutions.',
      features: [
        'Custom solutions',
        'Priority support',
        'Dedicated account manager',
        'Enterprise-grade SLA',
      ],
      color: 'from-gray-900 to-gray-800',
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, Tech Innovations Inc.',
      company: 'Tech Innovations Inc.',
      content: 'Zion Tech Group has revolutionized our development process. Their AI-powered tools have significantly improved our productivity and innovation. The 99.9% uptime guarantee is a game-changer for our critical applications.',
      rating: 5,
      avatar: <User className="w-10 h-10 text-purple-400" />
    },
    {
      name: 'Michael Chen',
      role: 'Founder, Quantum Solutions Ltd.',
      company: 'Quantum Solutions Ltd.',
      content: 'The quantum AI optimizer has been instrumental in our research. It\'s not just a tool; it\'s a partner in discovering new solutions. The 800%+ ROI is incredible.',
      rating: 5,
      avatar: <User className="w-10 h-10 text-blue-400" />
    },
    {
      name: 'Emma Rodriguez',
      role: 'CEO, BioPharma Corp.',
      company: 'BioPharma Corp.',
      content: 'Their AI-powered drug discovery platform has accelerated our research by months. The neural interfaces are incredibly intuitive and effective. Highly recommend.',
      rating: 5,
      avatar: <User className="w-10 h-10 text-green-400" />
    },
  ];

  const stats = [
    { value: '1000+', label: 'Active Users', description: 'across all services' },
    { value: '250+', label: 'Services', description: 'in our portfolio' },
    { value: '99.9%', label: 'Uptime', description: 'guarantee across all services' },
    { value: '100%', label: 'Satisfaction', description: 'customer retention rate' },
    { value: '$100M+', label: 'Market Value', description: 'estimated for our services' },
    { value: '800%+', label: 'Average ROI', description: 'across our portfolio' },
  ];

  const ctaSection = {
    title: 'Ready to Transform Your Business?',
    subtitle: 'Join thousands of companies already leveraging our revolutionary technology solutions. Start your 14-day free trial today.',
    features: [
      'Access to 300+ production-ready micro SaaS services',
      '14-day free trial for all services',
      'No credit card required',
      'Cancel anytime',
    ],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Head>
        <title>Zion Tech Group - 300+ Real Micro SaaS Services | Quantum AI Platform</title>
        <meta name="description" content="Transform your business with 300+ real micro SaaS services powered by quantum computing and AI. Starting at $49/month with 14-day free trials. Contact us: +1 302 464 0950" />
        <meta name="keywords" content="micro SaaS, quantum computing, AI services, neural interfaces, quantum AI, microservices, business automation" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Zion Tech Group - 300+ Real Micro SaaS Services" />
        <meta property="og:description" content="Transform your business with 300+ real micro SaaS services powered by quantum computing and AI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - 300+ Real Micro SaaS Services" />
        <meta name="twitter:description" content="Transform your business with 300+ real micro SaaS services powered by quantum computing and AI." />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      <EnhancedFuturisticBackground variant="quantum-holographic-advanced" intensity="high">
        {/* Hero Section */}
        <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Transform Your Business with
                <span className="block text-6xl sm:text-7xl lg:text-8xl mt-2">300+ Real Micro SaaS</span>
                <span className="block text-5xl sm:text-6xl lg:text-7xl mt-2">Quantum AI Services</span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Access the future of technology with our comprehensive portfolio of production-ready micro SaaS services. 
                From quantum computing to neural interfaces, we're shaping tomorrow's innovations today.
              </p>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
              {heroStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl lg:text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                href="/services" 
                variant="primary" 
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              >
                Explore 300+ Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                href="/contact" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
              >
                Start Free Trial
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Contact Info */}
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Ready to Get Started?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-2 md:col-span-2">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another SaaS provider. We're the pioneers of quantum AI technology, 
                offering real, production-ready services that transform businesses and industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <EnhancedFuturisticCard
                  key={index}
                  className={`${feature.color} p-8 h-full transform hover:scale-105 transition-all duration-300`}
                >
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-200 leading-relaxed">{feature.description}</p>
                </EnhancedFuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Comprehensive Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From AI and quantum computing to biomedical research and space technology, 
                we cover every aspect of emerging technology innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{category.name}</h3>
                  <div className="text-3xl font-bold text-purple-400 mb-3">{category.count}</div>
                  <p className="text-gray-300">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Cutting-Edge Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built on the latest technologies including quantum computing, AI/ML, and emerging innovations
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {technologyStack.map((tech, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <div className="text-sm font-semibold text-white">{tech.name}</div>
                  <div className="text-xs text-gray-400">{tech.category}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of technology with our groundbreaking features and capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`${feature.color} rounded-2xl p-8 transform hover:scale-105 transition-all duration-300`}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className={`text-2xl font-bold mb-4 ${feature.textColor}`}>{feature.title}</h3>
                  <p className="text-gray-200 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include 14-day free trials.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br ${tier.color} rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 ${
                    tier.popular ? 'ring-4 ring-purple-500 scale-105' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2 text-white">{tier.name}</h3>
                    <div className="text-4xl font-bold text-white mb-2">
                      {tier.price}
                      <span className="text-lg text-gray-200">{tier.period}</span>
                    </div>
                    <p className="text-gray-200 mb-6">{tier.description}</p>
                    <ul className="text-left space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-400" />
                          <span className="text-gray-200">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      href="/contact"
                      variant="primary"
                      size="lg"
                      className="w-full bg-white text-black hover:bg-gray-100"
                    >
                      Start Free Trial
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of satisfied customers who have transformed their businesses with our services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                      <div className="text-sm text-gray-400">{testimonial.company}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{testimonial.content}</p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {ctaSection.title}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {ctaSection.subtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
              {ctaSection.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                href="/services" 
                variant="primary" 
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              >
                Explore All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                href="/contact" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
              >
                Contact Sales Team
                <Phone className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Contact Information */}
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Get in Touch Today</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                <div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <span className="font-semibold">Phone</span>
                  </div>
                  <div className="text-lg text-white">{ctaSection.contactInfo.phone}</div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span className="font-semibold">Email</span>
                  </div>
                  <div className="text-lg text-white">{ctaSection.contactInfo.email}</div>
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <span className="font-semibold">Address</span>
                  </div>
                  <div className="text-lg text-white">{ctaSection.contactInfo.address}</div>
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Globe className="w-5 h-5 text-purple-400" />
                    <span className="font-semibold">Website</span>
                  </div>
                  <div className="text-lg text-white">{ctaSection.contactInfo.website}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </EnhancedFuturisticBackground>
    </div>
  );
}
