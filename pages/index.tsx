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
import QuantumMatrixBackground from '../components/ui/QuantumMatrixBackground';
import { motion } from 'framer-motion';

export default function HomePage() {
  const heroStats = [
    { value: '600+', label: 'Real Micro SaaS Services', color: 'text-cyan-400' },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400' },
    { value: '30', label: 'Day Free Trials', color: 'text-blue-400' },
    { value: '24/7', label: 'AI Support', color: 'text-green-400' },
    { value: '$18.5B+', label: 'Market Value', color: 'text-yellow-400' },
    { value: '600%+', label: 'Average ROI', color: 'text-purple-400' },
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
    subtitle: "600+ Real, Innovative, AI-Powered Micro SaaS Services That Actually Work",
    description: "Transform your business with cutting-edge micro SaaS solutions. From Quantum AI Drug Discovery to Autonomous Factory Orchestration, we deliver real results with proven ROI. No mock services, no empty promises - just innovative technology that drives growth.",
    highlights: [
      "🚀 First-to-Market Quantum AI Solutions",
      "🏭 Industry 4.0 Autonomous Manufacturing",
      "🛡️ Quantum-Resistant Cybersecurity",
      "🧬 AI-Powered Drug Discovery",
      "💰 Quantum Financial Optimization",
      "🚀 Space Exploration AI Platform",
      "🌱 AI Climate Prediction",
      "🏥 Quantum Healthcare Diagnostics"
    ],
    cta: "Explore Our Revolutionary Services",
    ctaSecondary: "Schedule a Demo"
  };

  // Enhanced statistics with real market data
  const enhancedStats = [
    { 
      value: '$18.5B+', 
      label: 'Total Market Value', 
      description: 'Combined market value of all our micro SaaS services',
      color: 'text-emerald-400'
    },
    { 
      value: '2,800+', 
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
      value: '600%+', 
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
      marketSize: '$12.5B',
      growthRate: '300%',
      services: ['Quantum AI Drug Discovery', 'Quantum Financial Optimizer', 'Quantum Healthcare Diagnostics'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Autonomous Systems & Robotics',
      description: 'Next-generation autonomous manufacturing and robotics platforms',
      icon: <FactoryIcon className="w-8 h-8" />,
      marketSize: '$180B',
      growthRate: '200%',
      services: ['Autonomous Factory Orchestrator', 'AI Robotics Platform', 'Smart Manufacturing Suite'],
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Healthcare & Biotechnology',
      description: 'AI-powered biomedical research and drug discovery platforms',
      icon: <FlaskIcon className="w-8 h-8" />,
      marketSize: '$75B',
      growthRate: '280%',
      services: ['Quantum AI Drug Discovery', 'Quantum Healthcare Diagnostics', 'AI Medical Imaging'],
      color: 'from-emerald-500 to-teal-600'
    },
    {
      name: 'Space Technology',
      description: 'AI-powered space mission planning and satellite optimization',
      icon: <RocketIcon className="w-8 h-8" />,
      marketSize: '$8B',
      growthRate: '400%',
      services: ['Space Exploration AI Platform', 'Satellite Optimization Suite', 'Mission Planning AI'],
      color: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'Cybersecurity & Defense',
      description: 'Quantum-resistant encryption and AI-powered threat detection',
      icon: <ShieldIcon className="w-8 h-8" />,
      marketSize: '$180B',
      growthRate: '200%',
      services: ['Quantum Cybersecurity Shield', 'AI Threat Intelligence', 'Zero Trust Security'],
      color: 'from-red-500 to-pink-600'
    },
    {
      name: 'Environmental Technology',
      description: 'AI-powered climate prediction and sustainability optimization',
      icon: <GlobeIcon className="w-8 h-8" />,
      marketSize: '$12B',
      growthRate: '250%',
      services: ['AI Climate Prediction Platform', 'Sustainability Analytics', 'Green Energy Optimization'],
      color: 'from-green-500 to-emerald-600'
    }
  ];

  // Revolutionary services data
  const revolutionaryServices = [
    {
      name: 'Quantum AI Drug Discovery',
      category: 'Healthcare & Biotechnology',
      description: 'Accelerate pharmaceutical research with quantum AI algorithms',
      price: '$299/month',
      growthRate: '250% growth',
      marketSize: '$45B market',
      features: ['Quantum molecular simulation', 'AI compound screening', 'Clinical trial optimization'],
      link: 'https://ziontechgroup.com/quantum-ai-drug-discovery',
      variant: 'quantum-advanced',
      icon: '🧬'
    },
    {
      name: 'Autonomous Factory Orchestrator',
      category: 'Manufacturing & Industry 4.0',
      description: 'Transform factories with AI-powered autonomous operations',
      price: '$199/month',
      growthRate: '180% growth',
      marketSize: '$150B market',
      features: ['AI production planning', 'Predictive maintenance', 'Quality control'],
      link: 'https://ziontechgroup.com/autonomous-factory',
      variant: 'neural-cyberpunk',
      icon: '🏭'
    },
    {
      name: 'Space Exploration AI Platform',
      category: 'Space Technology',
      description: 'AI-powered space mission planning and satellite optimization',
      price: '$599/month',
      growthRate: '400% growth',
      marketSize: '$8B market',
      features: ['Mission planning', 'Satellite optimization', 'Space debris tracking'],
      link: 'https://ziontechgroup.com/space-exploration-ai',
      variant: 'quantum-space',
      icon: '🚀'
    }
  ];

  // Emerging tech services data
  const emergingTechServices = [
    {
      name: 'Metaverse Development Platform',
      category: 'Virtual Reality & Metaverse',
      description: 'Build immersive virtual worlds and experiences',
      price: '$149/month',
      growthRate: '350% growth',
      marketSize: '$12B market',
      features: ['3D world building', 'Avatar creation', 'Social interactions'],
      link: 'https://ziontechgroup.com/metaverse-platform',
      variant: 'holographic-advanced',
      icon: '🌐'
    },
    {
      name: 'Blockchain DeFi Analytics',
      category: 'Blockchain & DeFi',
      description: 'Advanced analytics for decentralized finance protocols',
      price: '$99/month',
      growthRate: '280% growth',
      marketSize: '$25B market',
      features: ['Portfolio tracking', 'Risk assessment', 'Yield optimization'],
      link: 'https://ziontechgroup.com/blockchain-defi',
      variant: 'quantum-cyberpunk',
      icon: '🔗'
    }
  ];

  // Market insights data
  const marketInsights = [
    {
      metric: '600%+',
      label: 'Average ROI',
      description: 'Typical return on investment for our customers',
      icon: '📈'
    },
    {
      metric: '$18.5B+',
      label: 'Total Market Value',
      description: 'Combined market value of all our services',
      icon: '💰'
    },
    {
      metric: '2,800+',
      label: 'Active Customers',
      description: 'Businesses using our revolutionary services',
      icon: '👥'
    }
  ];

  // Platform features data
  const platformFeatures = [
    {
      title: 'Quantum Computing',
      description: 'Access to quantum computing power for complex problem solving',
      icon: <Atom className="w-8 h-8 text-cyan-400" />,
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Advanced AI algorithms for intelligent automation and insights',
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      color: 'bg-gradient-to-br from-purple-500 to-pink-600'
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-operating systems that adapt and optimize automatically',
      icon: <Factory className="w-8 h-8 text-orange-400" />,
      color: 'bg-gradient-to-br from-orange-500 to-red-600'
    },
    {
      title: 'Cybersecurity',
      description: 'Quantum-resistant encryption and AI-powered threat detection',
      icon: <Shield className="w-8 h-8 text-green-400" />,
      color: 'bg-gradient-to-br from-green-500 to-emerald-600'
    }
  ];

  return (
    <QuantumMatrixBackground variant="intense">
      <div className="min-h-screen">
        <Head>
          <title>Zion Tech Group - 600+ Revolutionary Micro SaaS Services | AI, Quantum Computing, Autonomous Systems</title>
          <meta name="description" content="Transform your business with 600+ real, innovative micro SaaS services. From Quantum AI Drug Discovery to Autonomous Factory Orchestration. Start your free trial today at Zion Tech Group." />
          <meta name="keywords" content="micro SaaS services, AI solutions, quantum computing, autonomous systems, cybersecurity, healthcare technology, space technology, Zion Tech Group" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="Zion Tech Group - 600+ Revolutionary Micro SaaS Services" />
          <meta property="og:description" content="Transform your business with cutting-edge micro SaaS solutions. AI, Quantum Computing, Autonomous Systems, and more." />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 futuristic-glow">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {heroContent.title}
                  </span>
                </h1>
                <p className="text-2xl md:text-3xl text-gray-300 mb-6 leading-relaxed">
                  {heroContent.subtitle}
                </p>
                <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
                  {heroContent.description}
                </p>
              </motion.div>

              {/* Highlights Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
              >
                {heroContent.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-sm text-gray-300">{highlight}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              >
                <Button 
                  href="/services" 
                  variant="primary" 
                  size="lg"
                  className="group quantum-button"
                >
                  {heroContent.cta}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  href="/contact" 
                  variant="secondary" 
                  size="lg"
                  className="holographic-card"
                >
                  {heroContent.ctaSecondary}
                </Button>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="p-6 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Ready to Transform Your Business?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center">
                    <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                    <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      +1 302 464 0950
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="w-4 h-4 mr-2 text-purple-400" />
                    <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-4 h-4 mr-2 text-green-400" />
                    <span className="text-gray-300">364 E Main St STE 1008 Middletown DE 19709</span>
                  </div>
                </div>
              </motion.div>
            </div>
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
                Discover 600+ micro SaaS services across cutting-edge categories. Each category represents 
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
                  >
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-3 text-cyan-400">{category.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{category.name}</h3>
                        <p className="text-sm text-gray-400">{category.services.length} Services</p>
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
                className="group"
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Enhanced Statistics Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Proven Results & Market Leadership
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our track record speaks for itself. Join thousands of businesses already transforming their operations with our revolutionary micro SaaS services.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {enhancedStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300 font-medium mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-400">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
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
          <div className="max-w-6xl mx-auto">
            <UltraFuturisticCard variant="quantum" className="p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-4">
                  Join <span className="text-cyan-400 font-bold">2,500+ companies</span> already leveraging our revolutionary micro SaaS services 
                  to achieve unprecedented growth and innovation.
                </p>
                <p className="text-lg text-gray-400">
                  Our team of experts is ready to help you implement the perfect solution for your business needs.
                </p>
              </div>
              
              {/* Enhanced Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center p-6 bg-black/20 rounded-lg border border-cyan-500/30">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-white font-bold text-lg mb-2">Phone Support</div>
                  <div className="text-cyan-400 font-semibold text-xl mb-2">{contactInfo.mobile}</div>
                  <div className="text-gray-400 text-sm">Available 24/7</div>
                  <div className="text-green-400 text-xs mt-2">✓ Instant Response</div>
                </div>
                
                <div className="text-center p-6 bg-black/20 rounded-lg border border-purple-500/30">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-white font-bold text-lg mb-2">Email Support</div>
                  <div className="text-purple-400 font-semibold text-lg mb-2">{contactInfo.email}</div>
                  <div className="text-gray-400 text-sm">Response within 2 hours</div>
                  <div className="text-green-400 text-xs mt-2">✓ Expert Team</div>
                </div>
                
                <div className="text-center p-6 bg-black/20 rounded-lg border border-green-500/30">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-white font-bold text-lg mb-2">Global Headquarters</div>
                  <div className="text-green-400 font-semibold text-sm mb-2">{contactInfo.address}</div>
                  <div className="text-gray-400 text-sm">Strategic location</div>
                  <div className="text-green-400 text-xs mt-2">✓ Worldwide Support</div>
                </div>
              </div>

              {/* Enhanced Benefits Section */}
              <div className="bg-gradient-to-r from-black/40 to-black/20 rounded-lg p-8 mb-12 border border-cyan-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Why Choose Zion Tech Group?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">500+ Revolutionary Services</div>
                      <div className="text-gray-400 text-sm">Cutting-edge micro SaaS solutions</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">99.99% Uptime Guarantee</div>
                      <div className="text-gray-400 text-sm">Enterprise-grade reliability</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">30-Day Free Trials</div>
                      <div className="text-gray-400 text-sm">Risk-free testing</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">24/7 AI Support</div>
                      <div className="text-gray-400 text-sm">Round-the-clock assistance</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Starting from $49/month</div>
                      <div className="text-gray-400 text-sm">Affordable innovation</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">2500%+ Average ROI</div>
                      <div className="text-gray-400 text-sm">Proven results</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced CTA Section */}
              <div className="text-center">
                <div className="mb-6">
                  <p className="text-lg text-gray-300 mb-4">
                    Get started with a <span className="text-cyan-400 font-bold">free consultation</span> and see the difference our technology can make.
                  </p>
                  <p className="text-sm text-gray-400">
                    No commitment required • Expert guidance • Custom solution design
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    href="/contact" 
                    variant="primary" 
                    size="lg"
                    className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                  >
                    Start Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    href="/services" 
                    variant="secondary" 
                    size="lg"
                    className="text-lg px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
                  >
                    Explore All Services
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-400">
                    🚀 <span className="text-cyan-400">500+ Services</span> • 💰 <span className="text-green-400">Free Trials</span> • 🌍 <span className="text-purple-400">Global Support</span>
                  </p>
                </div>
              </div>
            </UltraFuturisticCard>
          </div>
        </section>
      </div>
    </QuantumMatrixBackground>
  );
}
