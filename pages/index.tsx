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
  Link as LinkIcon, Building2 as Building2Icon, Users as UsersIcon
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { motion } from 'framer-motion';

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
  ];

  // Enhanced contact section with prominent display
  const enhancedContactSection = (
    <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-xl">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
        <p className="text-xl text-purple-200 mb-6">Get in touch with our experts and start your journey to the future</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="text-center p-4 bg-purple-900/30 rounded-xl border border-purple-400/30">
          <Phone className="w-8 h-8 text-purple-400 mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-white mb-2">Call Us</h4>
          <p className="text-purple-200 text-lg font-mono">{contactInfo.mobile}</p>
        </div>
        
        <div className="text-center p-4 bg-purple-900/30 rounded-xl border border-purple-400/30">
          <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-white mb-2">Email Us</h4>
          <p className="text-purple-200 text-lg font-mono">{contactInfo.email}</p>
        </div>
        
        <div className="text-center p-4 bg-purple-900/30 rounded-xl border border-purple-400/30">
          <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-white mb-2">Visit Us</h4>
          <p className="text-purple-200 text-sm font-mono">{contactInfo.address}</p>
        </div>
      </div>
      
      <div className="text-center">
        <Button 
          href="/contact" 
          variant="primary" 
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold"
        >
          Start Your Free Trial Today
        </Button>
        <p className="text-purple-300 mt-4 text-sm">30-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );

  // Enhanced service showcase section
  const enhancedServiceShowcase = (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Revolutionary Micro SAAS Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our cutting-edge micro SAAS services that are transforming industries and driving innovation across the globe
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {revolutionaryServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <UltraFuturisticCard
                variant={service.variant as any}
                className="h-full group hover:scale-105 transition-transform duration-300"
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30">
                      {service.icon}
                    </div>
                    <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                      <span>{service.marketSize}</span>
                      <span>{service.growthRate}</span>
                    </div>
                    
                    <Button
                      href={service.link}
                      variant="secondary"
                      size="sm"
                      className="w-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 border-purple-500/50 text-purple-300 hover:text-white"
                    >
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </UltraFuturisticCard>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            href="/services"
            variant="primary"
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold"
          >
            View All 500+ Services
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );

  // Enhanced stats section
  const enhancedStatsSection = (
    <section className="py-20 bg-gradient-to-r from-slate-900/50 via-purple-900/30 to-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {heroStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <UltraFuturisticBackground variant="quantum-entanglement" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>Zion Tech Group | Revolutionary Micro SAAS Solutions & AI Services</title>
          <meta name="description" content="Discover 500+ revolutionary micro SAAS services, AI solutions, and quantum computing platforms. Transform your business with cutting-edge technology from Zion Tech Group." />
          <meta name="keywords" content="micro SAAS, AI services, quantum computing, cybersecurity, automation, cloud solutions, Zion Tech Group" />
          <meta property="og:title" content="Zion Tech Group | Revolutionary Micro SAAS Solutions" />
          <meta property="og:description" content="500+ revolutionary micro SAAS services and AI solutions transforming businesses worldwide." />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com" />
        </Head>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 opacity-90"></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                The Future of
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Micro SAAS
                </span>
                is Here
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover 500+ revolutionary micro SAAS services powered by AI, quantum computing, and cutting-edge technology. 
                Transform your business with solutions that were once science fiction.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button
                  href="/services"
                  variant="primary"
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-xl font-semibold"
                >
                  Explore Services
                  <ArrowRightIcon className="w-6 h-6 ml-2" />
                </Button>
                
                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  className="border-purple-500/50 text-purple-300 hover:text-white hover:bg-purple-500/20 px-8 py-4 text-xl font-semibold"
                >
                  Start Free Trial
                  <Play className="w-6 h-6 ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        {enhancedStatsSection}

        {/* Enhanced Service Showcase */}
        {enhancedServiceShowcase}

        {/* Enhanced Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {enhancedContactSection}
          </div>
        </section>

        {/* Why Choose Zion Tech Group */}
        <section className="py-20 bg-gradient-to-r from-slate-900/50 via-purple-900/30 to-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another tech company. We're the pioneers of the future, delivering solutions that redefine what's possible.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-400/30">
                  <RocketIcon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">First-to-Market Solutions</h3>
                <p className="text-gray-300">
                  We're the first to bring quantum computing, autonomous AI, and revolutionary cybersecurity to the market.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-400/30">
                  <ShieldIcon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">99.99% Uptime Guarantee</h3>
                <p className="text-gray-300">
                  Our enterprise-grade infrastructure ensures your business never stops, with guaranteed uptime and reliability.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-400/30">
                  <UsersIcon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">24/7 AI Support</h3>
                <p className="text-gray-300">
                  Get instant support from our advanced AI systems, available around the clock to help you succeed.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our revolutionary micro SAAS solutions. 
                Start your 30-day free trial today and experience the future of technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-xl font-semibold"
                >
                  Start Free Trial
                  <ArrowRightIcon className="w-6 h-6 ml-2" />
                </Button>
                
                <Button
                  href="/services"
                  variant="secondary"
                  size="lg"
                  className="border-purple-500/50 text-purple-300 hover:text-white hover:bg-purple-500/20 px-8 py-4 text-xl font-semibold"
                >
                  View All Services
                  <ExternalLink className="w-6 h-6 ml-2" />
                </Button>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-purple-300 text-lg font-semibold mb-2">Contact Information</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-400">
                  <span className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    {contactInfo.mobile}
                  </span>
                  <span className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    {contactInfo.email}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {contactInfo.address}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
}
