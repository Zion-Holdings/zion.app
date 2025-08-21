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
    { value: '14', label: 'Day Free Trials', color: 'text-blue-400' },
    { value: '24/7', label: 'AI Support', color: 'text-green-400' },
    { value: '$75M+', label: 'Market Value', color: 'text-yellow-400' },
    { value: '600%+', label: 'Average ROI', color: 'text-purple-400' },
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
      description: 'Complete portfolio of fully functional micro SaaS tools with real implementations, not just mockups. Starting from $49/month with 14-day free trials.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI content generation, SEO automation, chatbots, business intelligence, quantum computing, and emerging technology platforms. Market-leading technology with 600%+ average ROI.',
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
      title: 'Cybersecurity',
      description: 'Advanced security solutions with AI-powered threat detection and prevention.',
      color: 'bg-gradient-to-br from-red-500 to-orange-600',
      textColor: 'text-red-400',
      gradient: 'from-red-400 to-orange-500',
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Comprehensive business intelligence and analytics solutions for data-driven decisions.',
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-indigo-500',
    },
    {
      icon: '🌐',
      title: 'IoT & Smart Cities',
      description: 'Connected solutions for smart cities, manufacturing, and industrial automation.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: '⛓️',
      title: 'Blockchain & Web3',
      description: 'Next-generation blockchain solutions and decentralized applications.',
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
      textColor: 'text-yellow-400',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      icon: '🥽',
      title: 'AR/VR & Metaverse',
      description: 'Immersive technologies for entertainment, education, and business applications.',
      color: 'bg-gradient-to-br from-pink-500 to-rose-600',
      textColor: 'text-pink-400',
      gradient: 'from-pink-400 to-rose-500',
    },
    {
      icon: '⚛️',
      title: 'Quantum Computing',
      description: 'Cutting-edge quantum solutions for complex computational problems.',
      color: 'bg-gradient-to-br from-purple-500 to-violet-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-violet-500',
    },
  ];

  const innovativeServices = [
    {
      name: 'AI Voice Cloning Studio',
      description: 'Professional voice cloning with 95% naturalness score',
      price: '$149/month',
      icon: '🎤',
      link: 'https://ziontechgroup.com/ai-voice-cloning',
      category: 'AI & Machine Learning'
    },
    {
      name: 'AI Video Generator Pro',
      description: 'Create professional videos from text and images',
      price: '$199/month',
      icon: '🎬',
      link: 'https://ziontechgroup.com/ai-video-generator',
      category: 'AI & Machine Learning'
    },
    {
      name: 'Quantum Cryptography Platform',
      description: 'Future-proof encryption using quantum principles',
      price: '$399/month',
      icon: '🔐',
      link: 'https://ziontechgroup.com/quantum-cryptography',
      category: 'Emerging Technologies'
    },
    {
      name: 'AI-Powered IoT Platform',
      description: 'Intelligent IoT device management and analytics',
      price: '$249/month',
      icon: '🌐',
      link: 'https://ziontechgroup.com/ai-iot-platform',
      category: 'IoT & Smart Cities'
    },
    {
      name: 'AI-Powered Business Intelligence',
      description: 'Intelligent business insights and predictive analytics',
      price: '$199/month',
      icon: '📊',
      link: 'https://ziontechgroup.com/ai-business-intelligence',
      category: 'Data Analytics & BI'
    },
    {
      name: 'AI-Powered Cloud Cost Optimizer',
      description: 'Reduce cloud costs by 30-50% with AI optimization',
      price: '$149/month',
      icon: '💰',
      link: 'https://ziontechgroup.com/ai-cloud-cost-optimizer',
      category: 'Cloud & Infrastructure'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      company: 'TechCorp Industries',
      content: 'Zion Tech Group\'s AI solutions have transformed our business operations. The ROI has been incredible - we\'ve seen a 500% return on investment in just 8 months.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'VP Engineering',
      company: 'InnovateSoft',
      content: 'The quantum AI optimizer is revolutionary. We\'ve achieved 10x faster model training and our AI models are now 40% more efficient than before.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Marketing',
      company: 'GrowthMax',
      content: 'The AI video generator has saved us countless hours and thousands of dollars. The quality is professional-grade and our conversion rates have increased by 35%.',
      rating: 5,
      avatar: '👩‍🎨'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Access to 50+ services',
        'Basic AI features',
        'Email support',
        '14-day free trial',
        'Standard integrations'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/pricing'
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Access to 150+ services',
        'Advanced AI features',
        'Priority support',
        'Custom integrations',
        'Analytics dashboard',
        'Team collaboration'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/pricing'
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Access to all 200+ services',
        'Premium AI features',
        '24/7 dedicated support',
        'Custom development',
        'Advanced security',
        'SLA guarantees',
        'On-premise options'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/pricing'
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

        {/* Technology Stack Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Built with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Cutting-Edge</span> Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform leverages the latest technologies to deliver exceptional performance, security, and scalability.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologyStack.map((tech, index) => (
                <div key={index} className="text-center p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <div className="text-white font-semibold text-sm">{tech.name}</div>
                  <div className="text-gray-400 text-xs">{tech.category}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the advanced capabilities that make our solutions stand out in the market.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative p-8 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className={`text-2xl font-bold ${feature.textColor} mb-4`}>{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovative Services Showcase */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500">Innovative</span> AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our cutting-edge AI-powered solutions that are transforming industries and driving unprecedented ROI.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {innovativeServices.map((service, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative p-8 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">{service.category}</span>
                    </div>
                    <a 
                      href={service.link}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-2 transition-all duration-300"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="https://ziontechgroup.com/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                View All 200+ Services <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Industry Leaders</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about the transformative impact of our AI-powered solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative p-8 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-4">{testimonial.avatar}</div>
                      <div>
                        <div className="text-white font-semibold">{testimonial.name}</div>
                        <div className="text-gray-400 text-sm">{testimonial.role}</div>
                        <div className="text-cyan-400 text-sm">{testimonial.company}</div>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 italic">"{testimonial.content}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Simple</span> Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative group ${plan.popular ? 'scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className={`relative p-8 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                    plan.popular ? 'border-purple-500/50' : 'border-gray-700/50 hover:border-purple-500/50'
                  }`}>
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="text-4xl font-bold text-purple-400 mb-1">{plan.price}</div>
                      <div className="text-gray-400">{plan.period}</div>
                      <p className="text-gray-300 text-sm mt-2">{plan.description}</p>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a 
                      href={plan.link}
                      className={`w-full text-center py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700' 
                          : 'bg-gray-700/50 text-white hover:bg-gray-600/50 border border-gray-600/50 hover:border-purple-500/50'
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-400 mb-4">Need a custom solution? Contact us for enterprise pricing.</p>
              <a 
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-6 py-3 border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 rounded-full transition-all duration-300"
              >
                Contact Sales <Mail className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get in touch with our team to discuss how our AI-powered solutions can drive your business forward.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-cyan-400 font-semibold">{contactInfo.mobile}</p>
                <p className="text-gray-400 text-sm mt-2">Available 24/7</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50">
                <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-purple-400 font-semibold">{contactInfo.email}</p>
                <p className="text-gray-400 text-sm mt-2">Response within 2 hours</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50">
                <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-green-400 font-semibold text-sm">{contactInfo.address}</p>
                <p className="text-gray-400 text-sm mt-2">Delaware, USA</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Free Trial <ArrowRight className="w-5 h-5 ml-2" />
              </a>
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
