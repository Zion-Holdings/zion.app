import React from 'react';
import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import { Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check, ExternalLink, Star, Users, Globe, Lock, Rocket, Cpu, Database, TrendingUp, Clock, Target, Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, BookOpen as BookOpenIcon, Activity as ActivityIcon, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Sparkles, Atom, Brain, Eye, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Cpu as CpuIcon, Cloud as CloudIcon, Bot as BotIcon, Lock as LockIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Users as UsersIcon, Award as AwardIcon, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon, ExternalLink as ExternalLinkIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon } from 'lucide-react';

export default function HomePage() {
  const heroStats = [
    { value: '200+', label: 'Real Micro SaaS Services', color: 'text-cyan-400' },
    { value: '99.9%', label: 'Uptime Guarantee', color: 'text-fuchsia-400' },
    { value: '21', label: 'Day Free Trials', color: 'text-blue-400' },
    { value: '24/7', label: 'AI Support', color: 'text-green-400' },
    { value: '$100M+', label: 'Market Value', color: 'text-yellow-400' },
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
      title: '200+ Real Micro SaaS Services',
      description: 'Complete portfolio of fully functional micro SaaS tools with real implementations, not just mockups. Starting from $49/month with 21-day free trials.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI content generation, SEO automation, chatbots, business intelligence, and quantum computing platforms. Market-leading technology with 800%+ average ROI.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      gradient: 'from-fuchsia-400 to-purple-500',
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-white" />,
      title: 'Enterprise Reliability',
      description: '99.9% uptime guarantee, automated scaling, and intelligent resource management. Trusted by Fortune 500 companies worldwide.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes with our intuitive interfaces and automated onboarding. No technical expertise required.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Bank-Level Security',
      description: 'SOC 2 compliance, advanced encryption, and automated security monitoring. Quantum-resistant cryptography for future-proof protection.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Transparent Pricing',
      description: 'No hidden fees, simple monthly pricing that scales with your business needs. Competitive rates starting at $49/month.',
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
    <EnhancedFuturisticBackground variant="quantum-advanced" intensity="high">
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
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Revolutionary Technology Solutions
                </div>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-8 futuristic-glow">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Future of Technology
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Starts Here
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Experience the next generation of micro SaaS services powered by AI, quantum computing, 
                blockchain, and emerging technologies. Transform your business with our revolutionary solutions.
              </p>

              {/* Hero Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {heroStats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 transition-all duration-300 group-hover:scale-110`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Button
                  href="/services"
                  variant="primary"
                  size="lg"
                  className="group transform hover:scale-105 transition-all duration-300"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  className="group transform hover:scale-105 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Enhanced Contact Information Banner */}
              <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 max-w-5xl mx-auto shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Ready to Transform Your Business?</h3>
                  <p className="text-gray-300">Get in touch with our team of technology experts</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm text-gray-400 mb-2">Mobile</div>
                    <div className="text-white font-semibold text-lg">{contactInfo.mobile}</div>
                    <a href={`tel:${contactInfo.mobile}`} className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors mt-2">
                      Call Now →
                    </a>
                  </div>
                  <div className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm text-gray-400 mb-2">Email</div>
                    <div className="text-white font-semibold text-lg">{contactInfo.email}</div>
                    <a href={`mailto:${contactInfo.email}`} className="text-purple-400 text-sm hover:text-purple-300 transition-colors mt-2">
                      Send Email →
                    </a>
                  </div>
                  <div className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm text-gray-400 mb-2">Address</div>
                    <div className="text-white font-semibold text-sm leading-tight">{contactInfo.address}</div>
                    <a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="text-emerald-400 text-sm hover:text-emerald-300 transition-colors mt-2">
                      View on Map →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Zion Tech Group</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with enterprise-grade reliability to deliver solutions that transform businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`${feature.color} rounded-3xl p-8 text-white transform hover:scale-105 transition-all duration-500 hover:shadow-2xl`}
                >
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-100 leading-relaxed">{feature.description}</p>
                </div>
              ))}
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
                We're not just another tech company. We're your strategic partner in digital transformation, offering 200+ real micro SaaS solutions that drive measurable results.
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
                    <span className="font-semibold">200+ Real Micro SaaS Services</span> - Not mockups, actual working solutions
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span className="font-semibold">$100M+ Market Value</span> - Proven track record of success
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span className="font-semibold">800%+ Average ROI</span> - Real results for our clients
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
                  All plans include 21-day free trials
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

        {/* Expanded Service Categories Showcase */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Complete <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Service Portfolio</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Explore our comprehensive range of 200+ micro SaaS services across cutting-edge technology categories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  title: 'AI & Machine Learning',
                  count: '45+ Services',
                  description: 'Advanced AI solutions for every industry',
                  icon: '🤖',
                  color: 'from-fuchsia-500 to-purple-600',
                  link: '/services?category=AI%20%26%20Machine%20Learning'
                },
                {
                  title: 'Quantum Computing',
                  count: '25+ Services',
                  description: 'Next-generation quantum solutions',
                  icon: '⚛️',
                  color: 'from-cyan-500 to-blue-600',
                  link: '/services?category=Quantum%20Computing'
                },
                {
                  title: 'Blockchain & Web3',
                  count: '20+ Services',
                  description: 'Decentralized future technologies',
                  icon: '🔗',
                  color: 'from-purple-500 to-violet-600',
                  link: '/services?category=Blockchain%20%26%20Web3'
                },
                {
                  title: 'Emerging Technologies',
                  count: '35+ Services',
                  description: 'Cutting-edge innovation platforms',
                  icon: '🚀',
                  color: 'from-orange-500 to-red-600',
                  link: '/services?category=Emerging%20Technologies'
                },
                {
                  title: 'IoT & Smart Cities',
                  count: '18+ Services',
                  description: 'Connected world solutions',
                  icon: '🏙️',
                  color: 'from-teal-500 to-cyan-600',
                  link: '/services?category=IoT%20%26%20Smart%20Cities'
                },
                {
                  title: 'AR/VR & Metaverse',
                  count: '22+ Services',
                  description: 'Immersive digital experiences',
                  icon: '🥽',
                  color: 'from-violet-500 to-purple-600',
                  link: '/services?category=AR%2FVR%20%26%20Metaverse'
                },
                {
                  title: 'Cybersecurity',
                  count: '15+ Services',
                  description: 'Advanced security solutions',
                  icon: '🛡️',
                  color: 'from-red-500 to-pink-600',
                  link: '/services?category=Cybersecurity'
                },
                {
                  title: 'Sustainable Technology',
                  count: '20+ Services',
                  description: 'Green tech for the future',
                  icon: '🌍',
                  color: 'from-green-500 to-emerald-600',
                  link: '/services?category=Sustainable%20Technology'
                }
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl group cursor-pointer"
                  onClick={() => window.location.href = category.link}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{category.count}</div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Explore Services</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                href="/services"
                variant="primary"
                size="lg"
                className="group transform hover:scale-105 transition-all duration-300"
              >
                View Complete Portfolio
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
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
                Join thousands of businesses that have already revolutionized their operations with our 200+ cutting-edge solutions.
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
