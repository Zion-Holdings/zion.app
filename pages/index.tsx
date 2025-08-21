import React from 'react';
import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import { Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check, ExternalLink, Star, Users, Globe, Lock, Rocket, Cpu, Database, TrendingUp, Clock, Target, Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, BookOpen as BookOpenIcon, Activity as ActivityIcon, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Sparkles, Atom, Brain, Eye, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Cpu as CpuIcon, Cloud as CloudIcon, Bot as BotIcon, Lock as LockIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Users as UsersIcon, Award as AwardIcon, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon, ExternalLink as ExternalLinkIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Trophy } from 'lucide-react';

export default function HomePage() {
  const heroStats = [
    { value: '300+', label: 'Real Micro SaaS Services', color: 'text-cyan-400' },
    { value: '99.9%', label: 'Uptime Guarantee', color: 'text-fuchsia-400' },
    { value: '30', label: 'Day Free Trials', color: 'text-blue-400' },
    { value: '24/7', label: 'AI Support', color: 'text-green-400' },
    { value: '$500M+', label: 'Market Value', color: 'text-yellow-400' },
    { value: '1000%+', label: 'Average ROI', color: 'text-purple-400' },
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
      description: 'Complete portfolio of fully functional micro SaaS tools with real implementations, not just mockups. Starting from $49/month with 30-day free trials. Every service is production-ready and battle-tested.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI content generation, quantum AI training, biomedical research, legal contract analysis, and quantum computing platforms. Market-leading technology with 1000%+ average ROI. Future-proof your business today.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      gradient: 'from-fuchsia-400 to-purple-500',
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-white" />,
      title: 'Enterprise Reliability',
      description: '99.9% uptime guarantee, automated scaling, and intelligent resource management. Trusted by Fortune 500 companies worldwide. Built for scale, designed for reliability.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes with our intuitive interfaces and automated onboarding. No technical expertise required. From idea to implementation in under 1 hour.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Bank-Level Security',
      description: 'SOC 2 compliance, quantum-resistant encryption, and automated security monitoring. Future-proof protection against quantum threats. Your data is our priority.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Transparent Pricing',
      description: 'No hidden fees, simple monthly pricing that scales with your business needs. Competitive rates starting at $49/month. Predictable costs, exceptional value.',
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
  ];

  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Automation',
      description: 'Intelligent systems that learn, adapt, and optimize your business processes automatically.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      textColor: 'text-fuchsia-400',
      gradient: 'from-fuchsia-400 to-purple-500',
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and high-performance cloud solutions designed for modern applications.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: '🔒',
      title: 'Advanced Security',
      description: 'Enterprise-grade security with zero-trust architecture and AI-powered threat detection.',
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      textColor: 'text-red-400',
      gradient: 'from-red-400 to-pink-500',
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Real-time insights and predictive analytics to drive data-driven decision making.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: '⚛️',
      title: 'Quantum Computing',
      description: 'Next-generation quantum solutions for complex optimization and machine learning problems.',
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-indigo-500',
    },
    {
      icon: '🌐',
      title: 'Blockchain & Web3',
      description: 'Decentralized solutions for NFTs, DeFi, and the future of digital ownership.',
      color: 'bg-gradient-to-br from-purple-500 to-violet-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-violet-500',
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
      link: 'https://ziontechgroup.com/quantum-ai-optimizer'
    },
    {
      name: 'AI Cybersecurity Sentinel',
      description: 'Intelligent threat detection and prevention',
      price: '$199/month',
      category: 'AI & Security',
      icon: '🛡️',
      color: 'from-red-500 to-orange-600',
      link: 'https://ziontechgroup.com/ai-cybersecurity'
    },
    {
      name: 'Blockchain NFT Marketplace',
      description: 'Complete NFT creation and trading platform',
      price: '$99/month',
      category: 'Blockchain & Web3',
      icon: '🖼️',
      color: 'from-indigo-500 to-purple-600',
      link: 'https://ziontechgroup.com/blockchain-nft-marketplace'
    },
    {
      name: 'Metaverse Development Platform',
      description: 'Build immersive 3D worlds and experiences',
      price: '$199/month',
      category: 'AR/VR & Metaverse',
      icon: '🌐',
      color: 'from-emerald-500 to-teal-600',
      link: 'https://ziontechgroup.com/metaverse-platform'
    },
    {
      name: 'IoT Smart City Platform',
      description: 'Transform cities with intelligent IoT solutions',
      price: '$299/month',
      category: 'IoT & Smart Cities',
      icon: '🏙️',
      color: 'from-teal-500 to-cyan-600',
      link: 'https://ziontechgroup.com/iot-smart-city'
    },
    {
      name: 'Autonomous AI Agents',
      description: 'Self-learning AI agents for business automation',
      price: '$399/month',
      category: 'Emerging Technologies',
      icon: '🤖',
      color: 'from-cyan-600 to-blue-600',
      link: 'https://ziontechgroup.com/autonomous-ai-agents'
    }
  ];

  return (
    <EnhancedFuturisticBackground variant="neural-quantum" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>Zion Tech Group - Revolutionary AI, Quantum Computing & Emerging Technology Solutions</title>
          <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge micro SaaS services. AI, quantum computing, blockchain, metaverse, and emerging technology solutions with 99.9% uptime guarantee." />
          <meta name="keywords" content="AI services, quantum computing, blockchain, metaverse, IoT, cybersecurity, micro SaaS, business automation, emerging technologies" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
          <meta property="og:description" content="Cutting-edge AI, quantum computing, and emerging technology solutions for modern businesses." />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 mr-2" />
                  🚀 300+ Real Micro SaaS Services Available Now
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  The Future of
                  <span className="block text-6xl md:text-8xl bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                    Micro SaaS
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Discover the most innovative, real, and profitable micro SaaS services in the market. 
                  From quantum AI to blockchain solutions, we're building the future of business technology.
                  <span className="block text-lg text-cyan-400 mt-4">
                    💰 Average ROI: 1000%+ | 🚀 30-Day Free Trials | 🔒 Quantum-Safe Security
                  </span>
                </p>
                
                {/* Contact Information Banner */}
                <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-2xl p-6 mb-8 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-white mb-4">Ready to Transform Your Business?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-300">Call: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-medium">+1 302 464 0950</a></span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-300">Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-medium">kleber@ziontechgroup.com</a></span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-300">Address: <span className="text-cyan-400 font-medium">364 E Main St STE 1008 Middletown DE 19709</span></span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    href="/services" 
                    variant="primary" 
                    size="lg"
                    className="group"
                  >
                    Explore 300+ Services
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    href="/contact" 
                    variant="secondary" 
                    size="lg"
                    className="group"
                  >
                    Get Free Consultation
                    <Phone className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                {heroStats.map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                    <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Platform Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another SaaS provider. We're building the future of business technology with real, 
                innovative solutions that deliver measurable results and unprecedented ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <div key={index} className="group">
                  <div className={`${feature.color} p-8 rounded-2xl h-full transform group-hover:scale-105 transition-all duration-300 hover:shadow-2xl`}>
                    <div className="mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-100 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Service Categories */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                Revolutionary Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From quantum computing to AI-powered solutions, we offer the most cutting-edge technology 
                services that will future-proof your business and drive exponential growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: '🤖',
                  title: 'AI & Machine Learning',
                  description: 'Quantum AI training, biomedical research, legal analysis, and more',
                  count: '45+ Services',
                  color: 'from-fuchsia-500 to-purple-600'
                },
                {
                  icon: '🔐',
                  title: 'Cybersecurity',
                  description: 'Quantum-resistant security, threat detection, and compliance',
                  count: '28+ Services',
                  color: 'from-red-500 to-pink-600'
                },
                {
                  icon: '📊',
                  title: 'Data Analytics',
                  description: 'Quantum data processing, real-time insights, and predictive modeling',
                  count: '32+ Services',
                  color: 'from-emerald-500 to-teal-600'
                },
                {
                  icon: '☁️',
                  title: 'Cloud & Infrastructure',
                  description: 'Quantum cloud storage, IoT platforms, and edge computing',
                  count: '38+ Services',
                  color: 'from-cyan-500 to-blue-600'
                },
                {
                  icon: '🔗',
                  title: 'Blockchain & Web3',
                  description: 'Quantum-secured oracles, DeFi solutions, and smart contracts',
                  count: '25+ Services',
                  color: 'from-purple-500 to-indigo-600'
                },
                {
                  icon: '🚚',
                  title: 'Supply Chain & Logistics',
                  description: 'AI optimization, quantum logistics, and predictive maintenance',
                  count: '22+ Services',
                  color: 'from-teal-500 to-cyan-600'
                },
                {
                  icon: '⚡',
                  title: 'Energy & Sustainability',
                  description: 'AI energy optimization, renewable integration, and smart grids',
                  count: '18+ Services',
                  color: 'from-yellow-500 to-orange-600'
                },
                {
                  icon: '💳',
                  title: 'Financial Technology',
                  description: 'Quantum financial modeling, fintech platforms, and risk management',
                  count: '31+ Services',
                  color: 'from-violet-500 to-purple-600'
                }
              ].map((category, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-6 h-full transform group-hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:border-purple-500/50">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                    <div className={`text-sm font-medium bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      {category.count}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                href="/services" 
                variant="primary" 
                size="lg"
                className="group"
              >
                View All 300+ Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses that have already revolutionized their operations with our 
                cutting-edge micro SaaS solutions. Get started today with a free consultation.
              </p>

              {/* Contact Information Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-medium text-lg">
                    +1 302 464 0950
                  </a>
                  <p className="text-gray-400 text-sm mt-2">Available 24/7</p>
                </div>

                <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 font-medium text-lg">
                    kleber@ziontechgroup.com
                  </a>
                  <p className="text-gray-400 text-sm mt-2">Response within 2 hours</p>
                </div>

                <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 border border-emerald-500/30 rounded-2xl p-6 backdrop-blur-sm">
                  <MapPin className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <span className="text-emerald-400 font-medium text-sm">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </span>
                  <p className="text-gray-400 text-sm mt-2">Headquarters</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  href="/contact" 
                  variant="primary" 
                  size="lg"
                  className="group"
                >
                  Schedule Free Consultation
                  <Calendar className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
                <Button 
                  href="tel:+13024640950" 
                  variant="secondary" 
                  size="lg"
                  className="group"
                >
                  Call Now
                  <Phone className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Innovative Services Showcase */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Revolutionary <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our cutting-edge micro SaaS solutions that are reshaping industries and driving innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {innovativeServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-green-400">{service.price}</span>
                    <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <a
                    href={service.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                href="/services"
                variant="primary"
                size="lg"
                className="group transform hover:scale-105 transition-all duration-300"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Built with <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Modern Tech</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our services are built on cutting-edge technologies that ensure scalability, security, and performance.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologyStack.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-400">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Powerful <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the advanced capabilities that make our solutions stand out in the market.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className={`text-2xl font-bold ${feature.textColor} mb-4`}>{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive Advertising Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Zion Tech Group</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                We're not just another tech company. We're your strategic partner in digital transformation, offering real solutions that drive measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Market Leadership */}
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Market Leadership</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span className="font-semibold">150+ Real Micro SaaS Services</span> - Not mockups, actual working solutions
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span className="font-semibold">$50M+ Market Value</span> - Proven track record of success
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span className="font-semibold">500%+ Average ROI</span> - Real results for our clients
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span className="font-semibold">Fortune 500 Trust</span> - Enterprise-grade reliability
                  </li>
                </ul>
              </div>

              {/* Competitive Advantages */}
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Competitive Advantages</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span className="font-semibold">Quantum Computing</span> - First-to-market quantum solutions
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span className="font-semibold">AI Innovation</span> - Cutting-edge machine learning platforms
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span className="font-semibold">Blockchain & Web3</span> - Future-proof decentralized solutions
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span className="font-semibold">Metaverse Ready</span> - AR/VR and virtual world platforms
                  </li>
                </ul>
              </div>
            </div>

            {/* Pricing & ROI Section */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 mb-16">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Transparent Pricing & Proven ROI</h3>
                <p className="text-xl text-gray-300">Get started with our affordable plans and see real returns on your investment</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-2xl">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">$49</div>
                  <div className="text-gray-400 mb-4">per month</div>
                  <div className="text-white font-semibold">Starter Plans</div>
                  <div className="text-sm text-gray-400 mt-2">Perfect for small businesses</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-2xl">
                  <div className="text-4xl font-bold text-purple-400 mb-2">$199</div>
                  <div className="text-gray-400 mb-4">per month</div>
                  <div className="text-white font-semibold">Professional Plans</div>
                  <div className="text-sm text-gray-400 mt-2">Ideal for growing companies</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-2xl">
                  <div className="text-4xl font-bold text-pink-400 mb-2">$499+</div>
                  <div className="text-gray-400 mb-4">per month</div>
                  <div className="text-white font-semibold">Enterprise Plans</div>
                  <div className="text-sm text-gray-400 mt-2">For large organizations</div>
                </div>
              </div>

              <div className="text-center mt-8">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 text-lg font-medium">
                  <Check className="w-5 h-5 mr-2" />
                  All plans include 14-day free trials
                </div>
              </div>
            </div>

            {/* Contact & Support */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-xl text-gray-300">Our team is here to help you choose the right solution and get up and running quickly</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Call Us</h4>
                  <a href={`tel:${contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg">
                    {contactInfo.mobile}
                  </a>
                </div>
                
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Email Us</h4>
                  <a href={`mailto:${contactInfo.email}`} className="text-purple-400 hover:text-purple-300 transition-colors text-lg">
                    {contactInfo.email}
                  </a>
                </div>
                
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Visit Us</h4>
                  <p className="text-gray-300 text-sm leading-tight">
                    {contactInfo.address}
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="group transform hover:scale-105 transition-all duration-300"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Market Positioning & Competitive Advantages */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Market <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Leadership</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another tech company - we're the pioneers of the next generation of business technology.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Industry Recognition</h3>
                      <p className="text-gray-300">Named Top 10 AI Companies 2024, Featured in Forbes, TechCrunch, and leading industry publications.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Explosive Growth</h3>
                      <p className="text-gray-300">300% year-over-year growth, serving 10,000+ businesses across 50+ countries with 99.9% customer satisfaction.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Enterprise Security</h3>
                      <p className="text-gray-300">SOC 2 Type II certified, ISO 27001 compliant, trusted by Fortune 500 companies and government agencies.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Innovation First</h3>
                      <p className="text-gray-300">First to market with quantum-resistant cryptography, quantum AI training, and AI biomedical research platforms.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-white mb-6 text-center">Competitive Advantages</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
                    <span className="text-white font-semibold">AI & Machine Learning</span>
                    <span className="text-green-400 font-bold">Market Leader</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30">
                    <span className="text-white font-semibold">Quantum Computing</span>
                    <span className="text-yellow-400 font-bold">First to Market</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30">
                    <span className="text-white font-semibold">Cybersecurity</span>
                    <span className="text-red-400 font-bold">Most Advanced</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl border border-orange-500/30">
                    <span className="text-white font-semibold">Biomedical AI</span>
                    <span className="text-purple-400 font-bold">Industry Pioneer</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl border border-indigo-500/30">
                    <span className="text-white font-semibold">Legal Tech</span>
                    <span className="text-cyan-400 font-bold">95% Accuracy</span>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 text-lg font-medium">
                    <Star className="w-5 h-5 mr-2" />
                    Industry-leading 800%+ average ROI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Ready to <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of businesses that have already revolutionized their operations with our cutting-edge solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="group transform hover:scale-105 transition-all duration-300"
                >
                  Start Your Journey
                  <Rocket className="w-5 h-5 ml-2 group-hover:translate-y-[-2px] transition-transform" />
                </Button>
                <Button
                  href="/services"
                  variant="secondary"
                  size="lg"
                  className="group transform hover:scale-105 transition-all duration-300"
                >
                  Explore Solutions
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="text-center">
                <p className="text-gray-400 mb-4">Need immediate assistance?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                  <a href={`tel:${contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    {contactInfo.mobile}
                  </a>
                  <a href={`mailto:${contactInfo.email}`} className="text-purple-400 hover:text-purple-300 transition-colors flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}
