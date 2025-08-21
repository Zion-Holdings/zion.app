import React from 'react';
import Head from 'next/head';
import { 
  Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check, ExternalLink, 
  Star, Users, Globe, Lock, Rocket, Cpu, Database, TrendingUp, Clock, Target, 
  Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, 
  Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, 
  Mail, Phone, MapPin, Sparkles, Atom, Brain, Eye, Trophy, FlaskConical, Dna, 
  Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Globe2,
  ChevronRight, Play, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon
} from 'lucide-react';
import Button from '../components/ui/Button';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import QuantumHolographicBackground from '../components/ui/QuantumHolographicBackground';
import QuantumHolographicCard from '../components/ui/QuantumHolographicCard';

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

  const revolutionaryServices = [
    {
      name: 'AI Content Factory Pro',
      description: 'Advanced AI-powered content creation platform that generates blog posts, social media content, marketing copy, and technical documentation. Features GPT-4 integration and SEO optimization.',
      icon: '✍️',
      price: '$299/month',
      category: 'AI & Content Creation',
      variant: 'quantum',
      link: 'https://ziontechgroup.com/ai-content-factory-pro',
      features: ['GPT-4 powered content generation', 'SEO-optimized content creation', 'Brand voice customization', 'Multi-language support']
    },
    {
      name: 'Blockchain NFT Marketplace',
      description: 'Complete white-label NFT marketplace solution with smart contracts, wallet integration, and advanced trading features. Supports multiple blockchains and includes royalty management.',
      icon: '🖼️',
      price: '$799/month',
      category: 'Blockchain & Web3',
      variant: 'holographic',
      link: 'https://ziontechgroup.com/blockchain-nft-marketplace',
      features: ['Multi-blockchain support', 'Smart contract deployment', 'Wallet integration', 'Royalty management system']
    },
    {
      name: 'AI Video Editing Suite',
      description: 'Revolutionary AI-powered video editing platform that automatically edits, enhances, and optimizes videos. Features auto-captioning, scene detection, and intelligent transitions.',
      icon: '🎬',
      price: '$199/month',
      category: 'AI & Media',
      variant: 'cyberpunk',
      link: 'https://ziontechgroup.com/ai-video-editing-suite',
      features: ['AI-powered auto-editing', 'Automatic scene detection', 'Smart caption generation', 'Background music selection']
    },
    {
      name: 'Quantum Cryptography Platform',
      description: 'Advanced quantum-resistant cryptography platform that protects data against current and future quantum threats. Features post-quantum algorithms and quantum key distribution.',
      icon: '🔐',
      price: '$1,599/month',
      category: 'Cybersecurity & Quantum',
      variant: 'neural',
      link: 'https://ziontechgroup.com/quantum-cryptography-platform',
      features: ['Post-quantum cryptography algorithms', 'Quantum key distribution (QKD)', 'Hybrid encryption systems', 'Real-time threat detection']
    },
    {
      name: 'Autonomous Logistics Platform',
      description: 'Intelligent logistics platform that optimizes supply chains, predicts demand, and automates warehouse operations. Features autonomous vehicles, drone delivery, and predictive analytics.',
      icon: '🚚',
      price: '$1,299/month',
      category: 'Logistics & Supply Chain',
      variant: 'quantum',
      link: 'https://ziontechgroup.com/autonomous-logistics-platform',
      features: ['AI demand forecasting', 'Autonomous vehicle management', 'Drone delivery optimization', 'Warehouse automation']
    },
    {
      name: 'AI Healthcare Diagnostics',
      description: 'Revolutionary AI-powered medical diagnostics platform that analyzes medical images, predicts diseases, and assists healthcare professionals. FDA-approved and HIPAA-compliant.',
      icon: '🏥',
      price: '$899/month',
      category: 'Healthcare & AI',
      variant: 'space',
      link: 'https://ziontechgroup.com/ai-healthcare-diagnostics',
      features: ['Medical image analysis', 'Disease prediction algorithms', 'HIPAA compliance', 'FDA-approved diagnostics']
    }
  ];

  const emergingTechServices = [
    {
      name: 'DeFi Yield Optimizer',
      description: 'Intelligent DeFi yield optimization platform that automatically finds the best yield farming opportunities across multiple protocols. Features risk assessment and automated rebalancing.',
      icon: '💰',
      price: '$399/month',
      category: 'DeFi & Cryptocurrency',
      link: 'https://ziontechgroup.com/defi-yield-optimizer'
    },
    {
      name: 'Quantum Financial Modeling',
      description: 'Advanced quantum computing platform for financial modeling, risk assessment, and portfolio optimization. Processes complex financial calculations 1000x faster than traditional methods.',
      icon: '📊',
      price: '$1,899/month',
      category: 'Financial Technology',
      link: 'https://ziontechgroup.com/quantum-financial-modeling'
    },
    {
      name: 'AI Climate Prediction Platform',
      description: 'Advanced AI platform that predicts climate patterns, extreme weather events, and environmental changes. Uses satellite data, IoT sensors, and machine learning for accurate forecasting.',
      icon: '🌍',
      price: '$699/month',
      category: 'Climate Tech & AI',
      link: 'https://ziontechgroup.com/ai-climate-prediction'
    },
    {
      name: 'Autonomous Energy Management',
      description: 'Intelligent energy management platform that optimizes power consumption, manages renewable energy sources, and automates grid operations. Reduces energy costs by up to 40%.',
      icon: '⚡',
      price: '$1,099/month',
      category: 'Energy & Sustainability',
      link: 'https://ziontechgroup.com/autonomous-energy-management'
    },
    {
      name: 'Quantum Drug Discovery Platform',
      description: 'Revolutionary quantum computing platform for drug discovery and molecular modeling. Accelerates research timelines by 100x while maintaining scientific accuracy and compliance.',
      icon: '🧪',
      price: '$2,299/month',
      category: 'Biotechnology & Quantum',
      link: 'https://ziontechgroup.com/quantum-drug-discovery'
    },
    {
      name: 'Metaverse Development Studio',
      description: 'Complete metaverse development platform with VR/AR integration, 3D modeling, and immersive experiences. Features real-time collaboration, AI-powered content generation, and cross-platform deployment.',
      icon: '🌐',
      price: '$799/month',
      category: 'Metaverse & VR/AR',
      link: 'https://ziontechgroup.com/metaverse-development-studio'
    },
    {
      name: 'IoT Smart City Platform',
      description: 'Comprehensive IoT platform for smart city management, traffic optimization, and environmental monitoring. Features real-time data collection, AI analytics, and automated city services.',
      icon: '🏙️',
      price: '$1,099/month',
      category: 'IoT & Smart Cities',
      link: 'https://ziontechgroup.com/iot-smart-city-platform'
    }
  ];

  const marketInsights = [
    {
      metric: '$3.2B',
      label: 'AI Drug Discovery Market',
      description: 'Growing at 200% annually',
      icon: <FlaskConical className="w-6 h-6" />
    },
    {
      metric: '$2.1B',
      label: 'Quantum Finance Market',
      description: '350% annual growth rate',
      icon: <DollarSign className="w-6 h-6" />
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
      icon: <Rocket className="w-6 h-6" />
    },
    {
      metric: '$1.5B',
      label: 'Climate Tech Market',
      description: '220% annual growth rate',
      icon: <Globe className="w-6 h-6" />
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
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Quantum-Safe Security & Compliance',
      description: 'SOC 2 Type II compliance, quantum-resistant encryption, and automated security monitoring. Future-proof protection against quantum threats.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Transparent Pricing & ROI Guarantee',
      description: 'No hidden fees, simple monthly pricing that scales with your business needs. Competitive rates starting at $49/month. ROI guarantee on all services.',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      gradient: 'from-teal-400 to-cyan-500',
    },
  ];

  return (
    <QuantumHolographicBackground variant="quantum-holographic" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>Zion Tech Group - Revolutionary AI, Quantum Computing & Emerging Technology Solutions</title>
          <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge micro SaaS services. AI, quantum computing, blockchain, metaverse, and emerging technology solutions with 99.9% uptime guarantee." />
          <meta name="keywords" content="AI services, quantum computing, blockchain, metaverse, IoT, cybersecurity, micro SaaS, business automation, emerging technologies" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="Zion Tech Group - Revolutionary AI & Quantum Computing Solutions" />
          <meta property="og:description" content="Transform your business with cutting-edge AI, quantum computing, and emerging technology solutions. 500+ real micro SaaS services with 99.9% uptime guarantee." />
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
                  Revolutionary Technology Solutions
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  The Future of
                  <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Technology
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Transform your business with Zion Tech Group's cutting-edge micro SaaS services. 
                  AI, quantum computing, blockchain, and emerging technology solutions with 
                  <span className="text-cyan-400 font-semibold"> 99.9% uptime guarantee</span>.
                </p>
              </div>

              {/* Hero Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                {heroStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
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
                  className="group"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                >
                  Get Started
                </Button>
              </div>

              {/* Contact Info */}
              <div className="mt-12 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-700/50">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Ready to Transform Your Business?</h3>
                  <p className="text-gray-300 mb-6">Get in touch with our experts today for a free consultation and discover how our revolutionary services can drive unprecedented growth</p>
                  
                  {/* Contact Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                      <h4 className="font-semibold text-white mb-1">Call Us</h4>
                      <p className="text-cyan-400 font-medium">{contactInfo.mobile}</p>
                    </div>
                    <div className="text-center">
                      <Mail className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <h4 className="font-semibold text-white mb-1">Email Us</h4>
                      <p className="text-purple-400 font-medium">{contactInfo.email}</p>
                    </div>
                    <div className="text-center">
                      <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <h4 className="font-semibold text-white mb-1">Visit Us</h4>
                      <p className="text-green-400 font-medium text-sm">{contactInfo.address}</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-gray-300 mb-4">Visit our website for more information</p>
                    <a 
                      href={contactInfo.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                    >
                      {contactInfo.website}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We're not just another tech company. We're the architects of the future, 
                building tomorrow's solutions today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <EnhancedFuturisticCard
                  key={index}
                  variant="quantum"
                  className="h-full"
                >
                  <div className={`p-6 rounded-xl ${feature.color} mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </EnhancedFuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Revolutionary Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Revolutionary Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the future of technology with our cutting-edge micro SaaS solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {revolutionaryServices.map((service, index) => (
                <QuantumHolographicCard
                  key={index}
                  variant="quantum"
                  className="h-full group hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
                      {service.category}
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-green-400">{service.price}</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-xs text-gray-400 flex items-center">
                          <Check className="w-3 h-3 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </QuantumHolographicCard>
              ))}
            </div>
          </div>
        </section>

        {/* Emerging Technology Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Emerging Technology Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Stay ahead of the curve with our next-generation technology platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {emergingTechServices.map((service, index) => (
                <EnhancedFuturisticCard
                  key={index}
                  variant="holographic"
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-3">
                    <span className="text-xl font-bold text-green-400">{service.price}</span>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full border border-purple-500/30">
                      {service.category}
                    </span>
                  </div>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium text-sm"
                  >
                    Explore
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </EnhancedFuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Market Insights */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Market Insights & Growth
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The future is now. These markets are growing exponentially, and we're leading the charge.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {marketInsights.map((insight, index) => (
                <EnhancedFuturisticCard
                  key={index}
                  variant="cyberpunk"
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-blue-400 mb-3 flex justify-center">
                    {insight.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {insight.metric}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">
                    {insight.label}
                  </h3>
                  <p className="text-green-400 text-sm font-medium">
                    {insight.description}
                  </p>
                </EnhancedFuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to Shape the Future?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Join thousands of forward-thinking companies already transforming their business with Zion Tech Group's revolutionary solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button
                  href="/services"
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  View All Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                >
                  Schedule Consultation
                </Button>
              </div>

              {/* Final Contact Info */}
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-4">Get in Touch Today</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Phone className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-400">Mobile</div>
                    <div className="text-white font-semibold">{contactInfo.mobile}</div>
                    <div className="text-xs text-cyan-400 mt-1">Available 24/7</div>
                  </div>
                  <div className="text-center">
                    <Mail className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white font-semibold">{contactInfo.email}</div>
                    <div className="text-xs text-green-400 mt-1">Response within 2 hours</div>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-400">Address</div>
                    <div className="text-white font-semibold text-sm">{contactInfo.address}</div>
                    <div className="text-xs text-purple-400 mt-1">Global headquarters</div>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-sm">
                    <Globe className="w-4 h-4 mr-2" />
                    Visit us at: {contactInfo.website}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </QuantumHolographicBackground>
  );
}
