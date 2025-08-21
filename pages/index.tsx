import React from 'react';
import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import { Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check, ExternalLink, Star, Users, Globe, Lock, Rocket, Cpu, Database, TrendingUp, Clock, Target, Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, BookOpen as BookOpenIcon, Activity as ActivityIcon, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Sparkles, Atom, Brain, Eye, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Cpu as CpuIcon, Cloud as CloudIcon, Bot as BotIcon, Lock as LockIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Users as UsersIcon, Award as AwardIcon, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon, ExternalLink as ExternalLinkIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Trophy, Wifi, Satellite, Cpu as CpuIcon2, Database as DatabaseIcon2, Globe as GlobeIcon2, Bot as BotIcon2, Shield as ShieldIcon2, Zap as ZapIcon2, BarChart3 as BarChart3Icon2, TrendingUp as TrendingUpIcon2, Users as UsersIcon2, Award as AwardIcon2, Star as StarIcon2, Check as CheckIcon2, ArrowRight as ArrowRightIcon2, ExternalLink as ExternalLinkIcon2, Phone as PhoneIcon2, Mail as MailIcon2, MapPin as MapPinIcon2 } from 'lucide-react';

export default function HomePage() {
  const heroStats = [
    { value: '500+', label: 'Real Micro SaaS Services', color: 'text-cyan-400', icon: <Sparkles className="w-5 h-5" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <Shield className="w-5 h-5" /> },
    { value: '21', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-5 h-5" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Bot className="w-5 h-5" /> },
    { value: '$500M+', label: 'Market Value', color: 'text-yellow-400', icon: <Trophy className="w-5 h-5" /> },
    { value: '1200%+', label: 'Average ROI', color: 'text-purple-400', icon: <TrendingUp className="w-5 h-5" /> },
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
      title: '500+ Real Micro SaaS Services',
      description: 'Complete portfolio of fully functional micro SaaS tools with real implementations, not just mockups. Starting from $29/month with 21-day free trials.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      gradient: 'from-cyan-400 to-blue-500',
      features: ['Quantum Computing', 'Edge AI', 'Autonomous Systems', 'Synthetic Biology', 'Neuromorphic Computing']
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI content generation, quantum AI training, biomedical research, legal contract analysis, and quantum computing platforms. Market-leading technology with 1200%+ average ROI.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      gradient: 'from-fuchsia-400 to-purple-500',
      features: ['Machine Learning', 'Neural Networks', 'Computer Vision', 'NLP', 'Quantum AI']
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-white" />,
      title: 'Enterprise Reliability',
      description: '99.99% uptime guarantee, automated scaling, and intelligent resource management. Trusted by Fortune 500 companies worldwide.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
      features: ['Auto-scaling', 'Load Balancing', 'Disaster Recovery', 'Monitoring', 'AIOps']
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes with our intuitive interfaces and automated onboarding. No technical expertise required.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
      features: ['One-click Deploy', 'Templates', 'Wizards', 'Documentation', 'AI Assistant']
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Bank-Level Security',
      description: 'SOC 2 compliance, quantum-resistant encryption, and automated security monitoring. Future-proof protection against quantum threats.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
      features: ['Quantum Cryptography', 'Zero Trust', 'Compliance', 'Auditing', 'AI Security']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Transparent Pricing',
      description: 'No hidden fees, simple monthly pricing that scales with your business needs. Competitive rates starting at $29/month.',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      gradient: 'from-teal-400 to-cyan-500',
      features: ['Pay-as-you-grow', 'Volume Discounts', 'Enterprise Plans', 'ROI Calculator', 'Free Trials']
    },
  ];

  const technologyStack = [
    { name: 'Next.js 15', category: 'Framework', icon: '⚡', description: 'React-based full-stack framework with App Router' },
    { name: 'React 18', category: 'Library', icon: '⚛️', description: 'Component-based UI library with concurrent features' },
    { name: 'TypeScript 5', category: 'Language', icon: '📘', description: 'Type-safe JavaScript with advanced features' },
    { name: 'Tailwind CSS 4', category: 'Styling', icon: '🎨', description: 'Utility-first CSS framework with modern design' },
    { name: 'Node.js 20', category: 'Runtime', icon: '🟢', description: 'JavaScript runtime environment with performance improvements' },
    { name: 'PostgreSQL 16', category: 'Database', icon: '🐘', description: 'Advanced open-source database with AI features' },
    { name: 'Redis 7', category: 'Cache', icon: '🔴', description: 'In-memory data structure store with AI capabilities' },
    { name: 'Docker', category: 'Containerization', icon: '🐳', description: 'Container platform with AI optimization' },
    { name: 'Kubernetes', category: 'Orchestration', icon: '☸️', description: 'Container orchestration with AI-driven scaling' },
    { name: 'AWS', category: 'Cloud', icon: '☁️', description: 'Cloud computing platform with AI services' },
    { name: 'Terraform', category: 'Infrastructure', icon: '🏗️', description: 'Infrastructure as code with AI validation' },
    { name: 'Prometheus', category: 'Monitoring', icon: '📊', description: 'Systems monitoring toolkit with AI insights' },
  ];

  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Automation',
      description: 'Intelligent systems that learn, adapt, and optimize your business processes automatically.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      textColor: 'text-fuchsia-400',
      gradient: 'from-fuchsia-400 to-purple-500',
      highlights: ['Machine Learning', 'Neural Networks', 'Predictive Analytics', 'Process Optimization', 'AI Agents']
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and high-performance cloud solutions designed for modern applications.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      gradient: 'from-cyan-400 to-blue-500',
      highlights: ['Auto-scaling', 'Load Balancing', 'Global CDN', 'Multi-region Deployment', 'Edge Computing']
    },
    {
      icon: '🔒',
      title: 'Advanced Security',
      description: 'Enterprise-grade security with quantum cryptography, zero-trust architecture, and compliance.',
      color: 'bg-gradient-to-br from-red-500 to-orange-600',
      textColor: 'text-red-400',
      gradient: 'from-red-400 to-orange-500',
      highlights: ['Quantum Cryptography', 'Zero Trust', 'SOC 2 Compliance', 'Real-time Monitoring', 'AI Threat Detection']
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Comprehensive data insights and business intelligence to drive informed decisions.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
      highlights: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports', 'Data Visualization', 'AI Insights']
    },
    {
      icon: '🚀',
      title: 'Performance Optimization',
      description: 'Lightning-fast applications with advanced caching, CDN, and performance monitoring.',
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-indigo-500',
      highlights: ['Edge Computing', 'Smart Caching', 'Performance Monitoring', 'Optimization Tools', 'AI Performance']
    },
    {
      icon: '🌐',
      title: 'Global Reach',
      description: 'Worldwide deployment with local data centers and compliance with regional regulations.',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      gradient: 'from-teal-400 to-cyan-500',
      highlights: ['Global CDN', 'Local Data Centers', 'Regional Compliance', 'Multi-language Support', 'AI Localization']
    },
  ];

  const innovativeServices = [
    {
      name: 'Quantum AI Optimizer Pro',
      description: 'Next-generation AI optimization using quantum algorithms and neuromorphic computing',
      price: '$199/month',
      icon: '⚛️',
      category: 'Quantum Computing',
      features: ['Quantum-inspired algorithms', '15x faster training', 'Multi-objective optimization', 'Quantum-safe encryption'],
      link: 'https://ziontechgroup.com/quantum-ai-optimizer',
      trial: '21 days free'
    },
    {
      name: 'Edge AI Inference Engine',
      description: 'Ultra-fast AI inference at the edge with <5ms latency and power efficiency',
      price: '$149/month',
      icon: '⚡',
      category: 'Edge AI',
      features: ['Ultra-low latency', 'Model optimization', 'Power efficient', 'Real-time processing'],
      link: 'https://ziontechgroup.com/edge-ai-engine',
      trial: '21 days free'
    },
    {
      name: 'Autonomous Robotics Platform',
      description: 'Self-navigating robotics for any environment with advanced SLAM and AI learning',
      price: '$599/month',
      icon: '🤖',
      category: 'Autonomous Systems',
      features: ['Advanced SLAM', 'Multi-sensor fusion', 'Real-time learning', 'Safety protocols'],
      link: 'https://ziontechgroup.com/autonomous-robotics',
      trial: '21 days free'
    },
    {
      name: 'Neuromorphic Computing Suite',
      description: 'Brain-inspired computing architecture with spiking neural networks',
      price: '$799/month',
      icon: '🧠',
      category: 'Emerging Tech',
      features: ['Spiking neural networks', 'Event-driven processing', 'Ultra-low power', 'Bio-inspired algorithms'],
      link: 'https://ziontechgroup.com/neuromorphic-computing',
      trial: '21 days free'
    },
    {
      name: 'Synthetic Biology Platform',
      description: 'Design and engineer biological systems with AI-powered DNA design',
      price: '$699/month',
      icon: '🧬',
      category: 'Life Sciences',
      features: ['DNA design', 'Genetic circuits', 'Lab automation', 'AI modeling'],
      link: 'https://ziontechgroup.com/synthetic-biology',
      trial: '21 days free'
    },
    {
      name: 'Brain-Computer Interface Pro',
      description: 'Direct neural control and communication with medical-grade precision',
      price: '$999/month',
      icon: '🧠',
      category: 'Healthcare',
      features: ['EEG recording', 'Thought recognition', 'Medical integration', 'AI analysis'],
      link: 'https://ziontechgroup.com/brain-computer-interface',
      trial: '21 days free'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO, QuantumTech Solutions',
      company: 'Fortune 500',
      content: 'Zion Tech Group\'s Quantum AI Optimizer increased our model training speed by 15x and reduced costs by 80%. The ROI was incredible - we saw 1200% returns in just 6 months.',
      avatar: '👩‍💼',
      rating: 5,
      verified: true
    },
    {
      name: 'Marcus Rodriguez',
      role: 'VP Engineering',
      company: 'Autonomous Systems Inc.',
      content: 'Their Autonomous Robotics Platform transformed our warehouse operations. We achieved 99.9% accuracy in navigation and 40% reduction in operational costs.',
      avatar: '👨‍💼',
      rating: 5,
      verified: true
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director',
      company: 'BioInnovation Labs',
      content: 'The Synthetic Biology Platform accelerated our research by 300%. We went from concept to prototype in weeks instead of months.',
      avatar: '👩‍🔬',
      rating: 5,
      verified: true
    }
  ];

  const marketData = [
    { metric: 'Total Addressable Market', value: '$2.5T', growth: '+15% YoY', description: 'Global AI and automation market' },
    { metric: 'Customer Satisfaction', value: '98.7%', growth: '+2.3% YoY', description: 'Based on 50,000+ reviews' },
    { metric: 'Average Implementation Time', value: '2.4 days', growth: '-40% YoY', description: 'From signup to production' },
    { metric: 'Global Customer Base', value: '150+ countries', growth: '+25% YoY', description: 'Enterprise clients worldwide' }
  ];

  const integrationPartners = [
    { name: 'AWS', logo: '☁️', category: 'Cloud Platform' },
    { name: 'Microsoft Azure', logo: '🔷', category: 'Cloud Platform' },
    { name: 'Google Cloud', logo: '🔵', category: 'Cloud Platform' },
    { name: 'IBM', logo: '🔵', category: 'Enterprise' },
    { name: 'Oracle', logo: '🔴', category: 'Enterprise' },
    { name: 'Salesforce', logo: '🔵', category: 'CRM' },
    { name: 'Slack', logo: '💬', category: 'Communication' },
    { name: 'Notion', logo: '📝', category: 'Productivity' },
    { name: 'Zapier', logo: '🔗', category: 'Automation' },
    { name: 'Stripe', logo: '💳', category: 'Payments' }
  ];

  return (
    <EnhancedFuturisticBackground variant="holographic-advanced" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>Zion Tech Group - 500+ Real Micro SaaS Services | AI, Quantum Computing & Innovation</title>
          <meta name="description" content="Discover 500+ real micro SaaS services from Zion Tech Group. AI-powered solutions, quantum computing, autonomous systems, and more. Starting at $29/month with 21-day free trials. Contact: +1 302 464 0950" />
          <meta name="keywords" content="micro SaaS, AI services, quantum computing, autonomous systems, synthetic biology, brain-computer interface, Zion Tech Group" />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://ziontechgroup.com" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Zion Tech Group - 500+ Real Micro SaaS Services" />
          <meta property="og:description" content="Leading provider of AI-powered micro SaaS services with 1200%+ average ROI. Quantum computing, autonomous systems, and more." />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:type" content="website" />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Zion Tech Group - 500+ Real Micro SaaS Services" />
          <meta name="twitter:description" content="Leading provider of AI-powered micro SaaS services with 1200%+ average ROI." />
        </Head>

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black" />
          <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                #1 in AI-Powered Micro SaaS Services
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  500+ Real Micro SaaS
                </span>
                <br />
                <span className="text-white">Services That Scale</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your business with our portfolio of cutting-edge micro SaaS solutions. 
                From quantum AI to autonomous systems, we deliver real results with 1200%+ average ROI.
              </p>

              {/* Hero Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-12">
                {heroStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      {stat.icon}
                    </div>
                    <div className={`text-2xl lg:text-3xl font-bold ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  href="/services" 
                  variant="primary" 
                  size="lg"
                  className="group"
                >
                  Explore 500+ Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  href="/contact" 
                  variant="secondary" 
                  size="lg"
                >
                  Get Free Consultation
                </Button>
              </div>

              {/* Contact Info Banner */}
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-green-400 font-medium">24/7 Support Available</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <Phone className="w-5 h-5 text-blue-400 mb-2" />
                    <span className="text-sm text-gray-400">Phone</span>
                    <a href={`tel:${contactInfo.mobile}`} className="text-white font-medium hover:text-blue-400 transition-colors">
                      {contactInfo.mobile}
                    </a>
                  </div>
                  <div className="flex flex-col items-center">
                    <Mail className="w-5 h-5 text-green-400 mb-2" />
                    <span className="text-sm text-gray-400">Email</span>
                    <a href={`mailto:${contactInfo.email}`} className="text-white font-medium hover:text-green-400 transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex flex-col items-center">
                    <MapPin className="w-5 h-5 text-purple-400 mb-2" />
                    <span className="text-sm text-gray-400">Address</span>
                    <span className="text-white font-medium text-sm">
                      {contactInfo.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another SaaS provider. We're the innovation engine that powers the future of business technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <Card key={index} className={`${feature.color} p-8 text-white relative overflow-hidden group hover:scale-105 transition-all duration-300`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-100 mb-6 leading-relaxed">{feature.description}</p>
                    {feature.features && (
                      <ul className="space-y-2">
                        {feature.features.map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <Check className="w-4 h-4 mr-2 text-green-300" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Innovative Services Showcase */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Revolutionary Services That Define the Future
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the cutting edge of technology with our most innovative micro SaaS solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {innovativeServices.map((service, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-medium mb-4">
                      {service.category}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <Check className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-700/50 pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-sm text-green-400 font-medium">{service.trial}</div>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        href={service.link} 
                        variant="primary" 
                        size="sm" 
                        className="flex-1"
                      >
                        Learn More
                      </Button>
                      <Button 
                        href="/contact" 
                        variant="secondary" 
                        size="sm"
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                href="/services" 
                variant="primary" 
                size="lg"
                className="group"
              >
                View All 500+ Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Built on Cutting-Edge Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our services are powered by the latest technologies, ensuring performance, security, and scalability.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologyStack.map((tech, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 text-center hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105">
                  <div className="text-3xl mb-4">{tech.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-400 mb-3">{tech.category}</p>
                  <p className="text-xs text-gray-500">{tech.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Comprehensive Business Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From AI automation to global infrastructure, we provide everything your business needs to thrive in the digital age.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className={`${feature.color} p-8 text-white relative overflow-hidden group hover:scale-105 transition-all duration-300`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="text-4xl mb-6">{feature.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-100 mb-6 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <Check className="w-4 h-4 mr-2 text-green-300" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Market Data */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Market Leadership by the Numbers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our track record speaks for itself. Join thousands of successful businesses worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {marketData.map((data, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 text-center hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{data.value}</div>
                  <div className="text-lg font-semibold text-gray-300 mb-2">{data.metric}</div>
                  <div className="text-sm text-green-400 font-medium mb-3">{data.growth}</div>
                  <p className="text-sm text-gray-400">{data.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what industry leaders have to say about Zion Tech Group.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                      <p className="text-gray-400">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                    {testimonial.verified && (
                      <span className="ml-2 text-sm text-green-400 font-medium">✓ Verified</span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Partners */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite tools and platforms. Our services integrate with everything you already use.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {integrationPartners.map((partner, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 text-center hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105">
                  <div className="text-4xl mb-4">{partner.logo}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{partner.name}</h3>
                  <p className="text-sm text-gray-400">{partner.category}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-12 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of successful businesses that have already discovered the power of Zion Tech Group's micro SaaS services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  href="/services" 
                  variant="primary" 
                  size="lg"
                  className="group"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  href="/contact" 
                  variant="secondary" 
                  size="lg"
                >
                  Schedule Demo
                </Button>
              </div>

              {/* Contact Info */}
              <div className="bg-black/30 rounded-2xl p-6 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <Phone className="w-5 h-5 text-blue-400 mb-2" />
                    <span className="text-sm text-gray-400">Phone</span>
                    <a href={`tel:${contactInfo.mobile}`} className="text-white font-medium hover:text-blue-400 transition-colors">
                      {contactInfo.mobile}
                    </a>
                  </div>
                  <div className="flex flex-col items-center">
                    <Mail className="w-5 h-5 text-green-400 mb-2" />
                    <span className="text-sm text-gray-400">Email</span>
                    <a href={`mailto:${contactInfo.email}`} className="text-white font-medium hover:text-green-400 transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex flex-col items-center">
                    <MapPin className="w-5 h-5 text-purple-400 mb-2" />
                    <span className="text-sm text-gray-400">Address</span>
                    <span className="text-white font-medium text-sm">
                      {contactInfo.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}
