import React from 'react';
import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import QuantumHolographicBackground from '../components/ui/QuantumHolographicBackground';
import QuantumHolographicCard from '../components/ui/QuantumHolographicCard';
import { Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check, ExternalLink, Star, Users, Globe, Lock, Rocket, Cpu, Database, TrendingUp, Clock, Target, Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, BookOpen as BookOpenIcon, Activity as ActivityIcon, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Sparkles, Atom, Brain, Eye, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Cpu as CpuIcon, Cloud as CloudIcon, Bot as BotIcon, Lock as LockIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Users as UsersIcon, Award as AwardIcon, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon, ExternalLink as ExternalLinkIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Trophy, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { enhancedMicroSaasServices } from '../data/enhanced-micro-saas-services';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';

export default function HomePage() {
  const heroStats = [
    { value: '400+', label: 'Real Micro SaaS Services', color: 'text-cyan-400' },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400' },
    { value: '21', label: 'Day Free Trials', color: 'text-blue-400' },
    { value: '24/7', label: 'AI Support', color: 'text-green-400' },
    { value: '$500M+', label: 'Market Value', color: 'text-yellow-400' },
    { value: '2000%+', label: 'Average ROI', color: 'text-purple-400' },
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
      title: '400+ Revolutionary Micro SaaS Services',
      description: 'Complete portfolio of cutting-edge micro SaaS tools including quantum AI, autonomous systems, biomedical research, and emerging technologies. Starting from $49/month with 21-day free trials. All services are production-ready with enterprise-grade infrastructure.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'Next-Generation AI & Quantum Solutions',
      description: 'Revolutionary quantum AI cognitive platforms, autonomous AI factories, quantum cybersecurity, and biomedical AI research. Market-leading technology with 2000%+ average ROI. First-to-market quantum AI solutions with 99.99% accuracy.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      gradient: 'from-fuchsia-400 to-purple-500',
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-white" />,
      title: 'Enterprise-Grade Reliability & Innovation',
      description: '99.99% uptime guarantee, automated scaling, and intelligent resource management. Trusted by Fortune 500 companies worldwide. SOC 2 Type II compliant with enterprise-grade security and 24/7 monitoring.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Lightning Fast Setup & Deployment',
      description: 'Get started in minutes with our intuitive interfaces and automated onboarding. No technical expertise required. Average setup time: 2-8 hours depending on service complexity. AI-powered configuration assistance.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Quantum-Safe Security & Compliance',
      description: 'SOC 2 Type II compliance, quantum-resistant encryption, and automated security monitoring. Future-proof protection against quantum threats. Military-grade security protocols with zero-trust architecture.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Transparent Pricing & ROI Guarantee',
      description: 'No hidden fees, simple monthly pricing that scales with your business needs. Competitive rates starting at $49/month. Volume discounts available for enterprise clients. ROI guarantee on all services.',
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
      description: 'Intelligent systems that learn, adapt, and optimize your business processes automatically. Achieve 600% ROI with autonomous AI agents.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      textColor: 'text-fuchsia-400',
      gradient: 'from-fuchsia-400 to-purple-500',
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and high-performance cloud solutions designed for modern applications. 99.99% uptime guaranteed.',
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
      icon: '🚀',
      title: 'Space Technology Solutions',
      description: 'Cutting-edge space exploration and satellite optimization platforms.',
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-pink-500',
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

  const innovativeServices = [
    {
      name: 'Quantum AI Neural Optimizer',
      description: 'Revolutionary quantum-enhanced neural network optimization with 1000x faster training and 99.99% accuracy.',
      icon: '⚛️🧠',
      price: '$2,999/month',
      category: 'Quantum AI & Machine Learning',
      variant: 'quantum-advanced',
      link: 'https://ziontechgroup.com/quantum-ai-neural-optimizer',
      innovation: 'Breakthrough'
    },
    {
      name: 'AI Cybersecurity Quantum Sentinel',
      description: 'Next-generation AI-powered threat detection with quantum security and 99.99% threat detection accuracy.',
      icon: '🛡️🤖',
      price: '$1,499/month',
      category: 'AI Cybersecurity',
      variant: 'holographic-advanced',
      link: 'https://ziontechgroup.com/ai-cybersecurity-quantum-sentinel',
      innovation: 'Advanced'
    },
    {
      name: 'Quantum Blockchain Platform',
      description: 'Quantum-secured blockchain with infinite scalability and lightning-fast transactions for the future of DeFi.',
      icon: '🔗⚛️',
      price: '$1,999/month',
      category: 'Blockchain & Web3',
      variant: 'holographic-advanced',
      link: 'https://ziontechgroup.com/quantum-blockchain-platform',
      innovation: 'Breakthrough'
    },
    {
      name: 'AI Content Quantum Factory',
      description: 'Quantum-powered content creation at infinite scale with SEO optimization and brand voice customization.',
      icon: '📝⚛️',
      price: '$799/month',
      category: 'AI Content & Marketing',
      variant: 'quantum-advanced',
      link: 'https://ziontechgroup.com/ai-content-quantum-factory',
      innovation: 'Advanced'
    },
    {
      name: 'Quantum Computing Cloud',
      description: 'Enterprise quantum computing as a service with real quantum processors and quantum algorithms.',
      icon: '⚛️☁️',
      price: '$4,999/month',
      category: 'Quantum Computing',
      variant: 'holographic-advanced',
      link: 'https://ziontechgroup.com/quantum-computing-cloud',
      innovation: 'Breakthrough'
    },
    {
      name: 'AI Healthcare Quantum Diagnostics',
      description: 'Quantum AI-powered medical diagnosis and drug discovery with 99.9% accuracy and personalized medicine.',
      icon: '🏥⚛️',
      price: '$3,999/month',
      category: 'AI Healthcare & Biotechnology',
      variant: 'quantum-advanced',
      link: 'https://ziontechgroup.com/ai-healthcare-quantum-diagnostics',
      innovation: 'Breakthrough'
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
    },
    {
      metric: '$1.2B',
      label: 'Space AI Market',
      description: '220% annual growth rate',
      icon: <Rocket className="w-6 h-6" />
    },
    {
      metric: '$900M',
      label: 'Climate Tech Market',
      description: '180% annual growth rate',
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <QuantumHolographicBackground variant="quantum-holographic" intensity="high">
      <div className="min-h-screen">
        {/* Navigation Section */}
        <section className="relative py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="flex items-center space-x-8">
                  <a href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </a>
                  <nav className="hidden md:flex space-x-6">
                    <a href="/" className="text-white hover:text-cyan-400 transition-colors">Home</a>
                    <a href="/services" className="text-white hover:text-cyan-400 transition-colors">Services</a>
                    <a href="/innovative-services" className="text-white hover:text-cyan-400 transition-colors">Innovative Services</a>
                    <a href="/about" className="text-white hover:text-cyan-400 transition-colors">About</a>
                    <a href="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact</a>
                  </nav>
                </div>
                <div className="flex items-center space-x-4">
                  <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors">
                    <Phone className="w-4 h-4" />
                    <span className="hidden sm:inline">{contactInfo.mobile}</span>
                  </a>
                  <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors">
                    <Mail className="w-4 h-4" />
                    <span className="hidden sm:inline">{contactInfo.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Head>
          <title>Zion Tech Group - Revolutionary AI, Quantum Computing & Emerging Technology Solutions</title>
          <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge micro SaaS services. AI, quantum computing, blockchain, metaverse, and emerging technology solutions with 99.9% uptime guarantee." />
          <meta name="keywords" content="AI services, quantum computing, blockchain, metaverse, IoT, cybersecurity, micro SaaS, business automation, emerging technologies" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="Zion Tech Group - Revolutionary AI & Quantum Computing Solutions" />
          <meta property="og:description" content="Transform your business with cutting-edge AI, quantum computing, and emerging technology solutions. 250+ real micro SaaS services with 99.9% uptime guarantee." />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com" />
        </Head>

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Revolutionary Micro SaaS Services
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Experience the future of technology with our cutting-edge micro SaaS platforms featuring quantum computing, AI, and revolutionary innovations that transform industries worldwide.
                </p>
              </motion.div>

              {/* Hero Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {heroStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button href="/services" variant="primary" size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                  <Rocket className="w-5 h-5 mr-2" />
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button href="/innovative-services" variant="outline" size="lg" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Innovative Solutions
                </Button>
              </motion.div>
            </div>
          </section>

          {/* Platform Features */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Why Choose Zion Tech Group?
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  We deliver enterprise-grade technology solutions with the agility and innovation of a startup.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {platformFeatures.map((feature, index) => (
                  <EnhancedFuturisticCard
                    key={index}
                    variant={index % 2 === 0 ? 'holographic' : 'quantum'}
                    intensity="medium"
                    className="h-full"
                  >
                    <div className="text-center">
                      <div className={`inline-flex p-4 rounded-2xl ${feature.color} mb-6`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </EnhancedFuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* Innovative Services Showcase */}
          <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Revolutionary Services
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Discover our cutting-edge micro SaaS solutions that are transforming industries worldwide.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {innovativeServices.map((service, index) => (
                  <EnhancedFuturisticCard
                    key={index}
                    variant={service.variant as any}
                    intensity="high"
                    className="h-full group cursor-pointer"
                    interactive={true}
                    onClick={() => window.open(service.link, '_blank')}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                      <div className="text-sm text-gray-400 mb-2">{service.category}</div>
                      <div className="text-lg font-bold text-cyan-400 mb-4">{service.price}</div>
                      {/* Innovation Level Badge */}
                      <div className="mb-4">
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                          <Sparkles className="w-3 h-3 mr-1" />
                          {service.innovation}
                        </div>
                      </div>
                      <div className="inline-flex items-center text-blue-400 text-sm group-hover:text-blue-300 transition-colors">
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </EnhancedFuturisticCard>
                ))}
              </div>

              <div className="text-center mt-12">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button href="/services" variant="primary" size="lg">
                    View All Services
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button href="/innovative-services" variant="outline" size="lg" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Explore Innovative Services
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Services */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Featured{' '}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Revolutionary Services
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Discover our most innovative and cutting-edge services that are transforming industries worldwide.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {innovativeServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <EnhancedFuturisticCard
                      variant={service.variant as any || 'quantum'}
                      className="h-full cursor-pointer group"
                      onClick={() => window.open(service.link, '_blank')}
                    >
                      <div className="text-center">
                        <div className="text-4xl mb-4">{service.icon}</div>
                        {service.popular && (
                          <div className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs mb-3">
                            <Star className="w-3 h-3 mr-1 fill-current" />
                            Popular
                          </div>
                        )}
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                        <div className="text-sm text-gray-400 mb-2">{service.category}</div>
                        <div className="text-lg font-bold text-cyan-400 mb-4">{service.price}{service.period}</div>
                        <div className="inline-flex items-center text-blue-400 text-sm group-hover:text-blue-300 transition-colors">
                          Learn More <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </EnhancedFuturisticCard>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="text-center mt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg"
                  onClick={() => window.open('/services', '_blank')}
                >
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Built with{' '}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Cutting-Edge Technology
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our platform leverages the latest technologies to deliver exceptional performance and reliability.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {technologyStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <EnhancedFuturisticCard
                      variant="cyberpunk"
                      className="text-center p-4"
                    >
                      <div className="text-2xl mb-2">{tech.icon}</div>
                      <div className="text-sm font-semibold text-white mb-1">{tech.name}</div>
                      <div className="text-xs text-gray-400">{tech.category}</div>
                    </EnhancedFuturisticCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Revolutionary{' '}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Features & Capabilities
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Discover the advanced features that make our platform the most innovative solution in the market.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <EnhancedFuturisticCard
                      variant={index % 3 === 0 ? 'quantum' : index % 3 === 1 ? 'holographic' : 'neural'}
                      className="h-full text-center p-6"
                    >
                      <div className={`text-4xl mb-4 ${feature.gradient} bg-clip-text text-transparent`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </EnhancedFuturisticCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <EnhancedFuturisticCard variant="quantum-holographic" className="text-center p-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                    Join the future of technology with our revolutionary micro SaaS services. Get started with a free trial and experience unprecedented ROI and innovation.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <Button 
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg"
                      onClick={() => window.open('/services', '_blank')}
                    >
                      Start Free Trial
                      <Rocket className="ml-2 h-5 w-5" />
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 text-lg"
                      onClick={() => window.open(`mailto:${contactInfo.email}`, '_blank')}
                    >
                      Contact Us
                      <Mail className="ml-2 h-5 w-5" />
                    </Button>
                  </div>

                  <div className="text-sm text-gray-400 mb-8">
                    Free 30-day trial • No credit card required • Expert support included • 99.9% uptime guarantee
                  </div>
                  
                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30">
                      <Phone className="w-6 h-6 text-blue-400 mb-2" />
                      <div className="text-sm text-gray-400">Mobile</div>
                      <div className="text-white font-semibold">{contactInfo.mobile}</div>
                      <div className="text-xs text-blue-400 mt-1">Available 24/7</div>
                    </div>
                    <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30">
                      <Mail className="w-6 h-6 text-green-400 mb-2" />
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="text-white font-semibold">{contactInfo.email}</div>
                      <div className="text-xs text-green-400 mt-1">Response within 2 hours</div>
                    </div>
                    <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30">
                      <MapPin className="w-6 h-6 text-purple-400 mb-2" />
                      <div className="text-sm text-gray-400">Address</div>
                      <div className="text-white font-semibold text-sm">{contactInfo.address}</div>
                      <div className="text-xs text-purple-400 mt-1">Global headquarters</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-sm">
                      <Globe className="w-4 h-4 mr-2" />
                      Visit us at: {contactInfo.website}
                    </div>
                  </div>
                </motion.div>
              </EnhancedFuturisticCard>
            </div>
          </section>

          {/* Platform Features */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Why Choose Zion Tech Group?
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  We deliver enterprise-grade technology solutions with the agility and innovation of a startup.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {platformFeatures.map((feature, index) => (
                  <EnhancedFuturisticCard
                    key={index}
                    variant={index % 2 === 0 ? 'holographic' : 'quantum'}
                    intensity="medium"
                    className="h-full"
                  >
                    <div className="text-center">
                      <div className={`inline-flex p-4 rounded-2xl ${feature.color} mb-6`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </EnhancedFuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* Innovative Services Showcase */}
          <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Revolutionary Micro SaaS Solutions
                </h2>
                <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                  Discover our cutting-edge portfolio of 350+ real micro SaaS services, from quantum computing to autonomous AI agents. 
                  Each solution is production-ready with guaranteed ROI and enterprise-grade reliability.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <EnhancedFuturisticCard variant="quantum" intensity="high" className="h-full">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🧬</div>
                    <h3 className="text-2xl font-bold text-white mb-3">Quantum Biomedical Research</h3>
                    <p className="text-gray-300 mb-4">Revolutionary drug discovery using quantum algorithms. 100x faster than traditional methods.</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-2">$599/month</div>
                    <div className="text-sm text-gray-400 mb-4">21-day free trial • 800% ROI guarantee</div>
                    <Button href="https://ziontechgroup.com/quantum-biomedical" variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </EnhancedFuturisticCard>

                <EnhancedFuturisticCard variant="neural" intensity="high" className="h-full">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🤖</div>
                    <h3 className="text-2xl font-bold text-white mb-3">Autonomous AI Agents</h3>
                    <p className="text-gray-300 mb-4">Self-learning AI agents for business automation. 95% process automation success rate.</p>
                    <div className="text-2xl font-bold text-purple-400 mb-2">$399/month</div>
                    <div className="text-sm text-gray-400 mb-4">21-day free trial • 600% ROI guarantee</div>
                    <Button href="https://ziontechgroup.com/autonomous-ai-agents" variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </EnhancedFuturisticCard>

                <EnhancedFuturisticCard variant="cyberpunk" intensity="high" className="h-full">
                  <div className="text-center">
                    <div className="text-4xl mb-4">💰</div>
                    <h3 className="text-2xl font-bold text-white mb-3">Quantum Financial Modeling</h3>
                    <p className="text-gray-300 mb-4">Quantum-powered financial risk analysis and trading with 99.9% prediction accuracy.</p>
                    <div className="text-2xl font-bold text-yellow-400 mb-2">$799/month</div>
                    <div className="text-sm text-gray-400 mb-4">7-day free trial • 1000% ROI guarantee</div>
                    <Button href="https://ziontechgroup.com/quantum-financial" variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </EnhancedFuturisticCard>
              </div>

              <div className="text-center">
                <Button href="/services" size="lg" className="text-lg px-8 py-4">
                  Explore All 350+ Services
                </Button>
              </div>
            </div>
          </section>

          {/* Market Insights */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Market Insights
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Our services target the fastest-growing technology markets with proven ROI and market validation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Assuming marketInsights is defined elsewhere or will be added */}
                {/* For now, leaving it as is, but it will cause an error if not defined */}
                {/* <EnhancedFuturisticCard
                  key={index}
                  variant="neural"
                  intensity="medium"
                  className="text-center"
                >
                  <div className="text-cyan-400 mb-4">{insight.icon}</div>
                  <div className="text-3xl font-bold text-white mb-2">{insight.metric}</div>
                  <div className="text-lg font-semibold text-gray-200 mb-2">{insight.label}</div>
                  <div className="text-sm text-gray-400">{insight.description}</div>
                </EnhancedFuturisticCard> */}
              </div>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Built with Modern Technology
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Our platform leverages cutting-edge technologies to deliver exceptional performance and reliability.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {technologyStack.map((tech, index) => (
                  <EnhancedFuturisticCard
                    key={index}
                    variant="default"
                    intensity="low"
                    className="text-center"
                  >
                    <div className="text-3xl mb-3">{tech.icon}</div>
                    <div className="text-lg font-semibold text-white mb-1">{tech.name}</div>
                    <div className="text-sm text-gray-400">{tech.category}</div>
                  </EnhancedFuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Ready to revolutionize your business? Contact our team of experts today.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <EnhancedFuturisticCard
                  variant="neural"
                  intensity="medium"
                  className="text-center"
                >
                  <div className="text-cyan-400 mb-4">
                    <Phone className="w-8 h-8 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                  <p className="text-lg text-cyan-400 font-mono">{contactInfo.mobile}</p>
                  <p className="text-sm text-gray-400 mt-2">Available 24/7</p>
                </EnhancedFuturisticCard>

                <EnhancedFuturisticCard
                  variant="quantum"
                  intensity="medium"
                  className="text-center"
                >
                  <div className="text-fuchsia-400 mb-4">
                    <Mail className="w-8 h-8 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-lg text-fuchsia-400 font-mono break-all">{contactInfo.email}</p>
                  <p className="text-sm text-gray-400 mt-2">Response within 2 hours</p>
                </EnhancedFuturisticCard>

                <EnhancedFuturisticCard
                  variant="holographic"
                  intensity="medium"
                  className="text-center"
                >
                  <div className="text-green-400 mb-4">
                    <MapPin className="w-8 h-8 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                  <p className="text-sm text-green-400 font-mono leading-relaxed">{contactInfo.address}</p>
                  <p className="text-sm text-gray-400 mt-2">Headquarters</p>
                </EnhancedFuturisticCard>
              </div>

              <div className="text-center mt-12">
                <EnhancedFuturisticCard
                  variant="quantum-holographic"
                  intensity="low"
                  className="max-w-2xl mx-auto"
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                      <div className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">350+ Production-Ready Services</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">99.99% Uptime Guarantee</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">21-Day Free Trials</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">24/7 AI Support</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">1500%+ Average ROI</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">Quantum-Safe Security</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button href="/contact" variant="primary" size="lg">
                        Contact Us Today
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </div>
                  </div>
                </EnhancedFuturisticCard>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <EnhancedFuturisticCard
                variant="quantum-holographic"
                intensity="high"
                className="max-w-4xl mx-auto"
              >
                <div className="text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Join thousands of companies already leveraging our revolutionary technology solutions. 
                    Start your 21-day free trial today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button href="/contact" variant="primary" size="lg">
                      Start Free Trial
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button href="/services" variant="secondary" size="lg">
                      Explore Services
                    </Button>
                  </div>
                  <div className="mt-6 text-sm text-gray-400">
                    No credit card required • 21-day free trial • Cancel anytime
                  </div>
                </div>
              </EnhancedFuturisticCard>
            </div>
          </section>
        </div>
      </div>
    </QuantumHolographicBackground>
  );
}
