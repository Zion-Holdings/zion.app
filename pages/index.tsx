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
import { Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check, ExternalLink, Star, Users, Globe, Lock, Rocket, Cpu, Database, TrendingUp, Clock, Target, Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, BookOpen as BookOpenIcon, Activity as ActivityIcon, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Sparkles, Atom, Brain, Eye, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Cpu as CpuIcon, Cloud as CloudIcon, Bot as BotIcon, Lock as LockIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Users as UsersIcon, Award as AwardIcon, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon, ExternalLink as ExternalLinkIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Trophy, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, ChevronRight, ChevronDown, Menu, X, ArrowUpRight, Sparkle, Zap as ZapIcon2, Brain as BrainIcon, Cpu as CpuIcon2, Database as DatabaseIcon2, Globe as GlobeIcon2, Shield as ShieldIcon2, Users as UsersIcon2, TrendingUp as TrendingUpIcon2, Award as AwardIcon2, Star as StarIcon2, Check as CheckIcon2, ArrowRight as ArrowRightIcon2, ExternalLink as ExternalLinkIcon2, Phone as PhoneIcon2, Mail as MailIcon2, MapPin as MapPinIcon2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { enhancedMicroSaasServices } from '../data/enhanced-micro-saas-services';

export default function HomePage() {
  const heroStats = [
    { value: '400+', label: 'Real Micro SaaS Services', color: 'text-cyan-400', icon: <Cloud className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <Shield className="w-6 h-6" /> },
    { value: '21', label: 'Day Free Trials', color: 'text-blue-400', icon: <Calendar className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Bot className="w-6 h-6" /> },
    { value: '$500M+', label: 'Market Value', color: 'text-yellow-400', icon: <DollarSign className="w-6 h-6" /> },
    { value: '2000%+', label: 'Average ROI', color: 'text-purple-400', icon: <TrendingUp className="w-6 h-6" /> },
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
      link: 'https://ziontechgroup.com/services',
      features: ['Quantum AI Optimization', 'Autonomous Manufacturing', 'Biomedical Research', 'Space Technology', 'Quantum Finance']
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'Next-Generation AI & Quantum Solutions',
      description: 'Revolutionary quantum AI cognitive platforms, autonomous AI factories, quantum cybersecurity, and biomedical AI research. Market-leading technology with 2000%+ average ROI. First-to-market quantum AI solutions with 99.99% accuracy.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      gradient: 'from-fuchsia-400 to-purple-500',
      link: 'https://ziontechgroup.com/ai-assistant',
      features: ['Quantum Neural Networks', 'AI Cybersecurity', 'Autonomous Systems', 'Predictive Analytics', 'Machine Learning']
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-white" />,
      title: 'Enterprise-Grade Reliability & Innovation',
      description: '99.99% uptime guarantee, automated scaling, and intelligent resource management. Trusted by Fortune 500 companies worldwide. SOC 2 Type II compliant with enterprise-grade security and 24/7 monitoring.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
      link: 'https://ziontechgroup.com/automation',
      features: ['High Availability', 'Auto-scaling', 'Security Compliance', 'Performance Monitoring', 'Disaster Recovery']
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Lightning Fast Setup & Deployment',
      description: 'Get started in minutes with our intuitive interfaces and automated onboarding. No technical expertise required. Average setup time: 2-8 hours depending on service complexity. AI-powered configuration assistance.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
      link: 'https://ziontechgroup.com/cloud-platform',
      features: ['Quick Setup', 'AI Configuration', 'Automated Onboarding', 'Templates Library', 'Integration Wizards']
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Quantum-Safe Security & Compliance',
      description: 'SOC 2 Type II compliance, quantum-resistant encryption, and automated security monitoring. Future-proof protection against quantum threats. Military-grade security protocols with zero-trust architecture.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
      link: 'https://ziontechgroup.com/security',
      features: ['Quantum Encryption', 'Zero Trust', 'SOC 2 Compliance', 'Threat Detection', 'Security Automation']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Transparent Pricing & ROI Guarantee',
      description: 'No hidden fees, simple monthly pricing that scales with your business needs. Competitive rates starting at $49/month. Volume discounts available for enterprise clients. ROI guarantee on all services.',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      gradient: 'from-teal-400 to cyan-500',
      link: 'https://ziontechgroup.com/pricing',
      features: ['Transparent Pricing', 'ROI Guarantee', 'Volume Discounts', 'No Hidden Fees', 'Flexible Plans']
    },
  ];

  const technologyStack = [
    { name: 'Next.js', category: 'Framework', icon: '⚡', description: 'React-based full-stack framework' },
    { name: 'React', category: 'Library', icon: '⚛️', description: 'Modern UI component library' },
    { name: 'TypeScript', category: 'Language', icon: '📘', description: 'Type-safe JavaScript' },
    { name: 'Tailwind CSS', category: 'Styling', icon: '🎨', description: 'Utility-first CSS framework' },
    { name: 'Node.js', category: 'Runtime', icon: '🟢', description: 'Server-side JavaScript' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘', description: 'Advanced open-source database' },
    { name: 'Redis', category: 'Cache', icon: '🔴', description: 'In-memory data structure store' },
    { name: 'Docker', category: 'Containerization', icon: '🐳', description: 'Container platform' },
    { name: 'Kubernetes', category: 'Orchestration', icon: '☸️', description: 'Container orchestration' },
    { name: 'AWS', category: 'Cloud', icon: '☁️', description: 'Leading cloud platform' },
    { name: 'Terraform', category: 'Infrastructure', icon: '🏗️', description: 'Infrastructure as code' },
    { name: 'Prometheus', category: 'Monitoring', icon: '📊', description: 'Metrics collection' },
  ];

  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Automation',
      description: 'Intelligent systems that learn, adapt, and optimize your business processes automatically. Achieve 600% ROI with autonomous AI agents.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      textColor: 'text-fuchsia-400',
      gradient: 'from-fuchsia-400 to-purple-500',
      link: 'https://ziontechgroup.com/automation'
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and high-performance cloud solutions designed for modern applications. 99.99% uptime guaranteed.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      gradient: 'from-cyan-400 to-blue-500',
      link: 'https://ziontechgroup.com/cloud-platform'
    },
    {
      icon: '🔒',
      title: 'Advanced Security',
      description: 'Enterprise-grade security with zero-trust architecture and AI-powered threat detection.',
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      textColor: 'text-red-400',
      gradient: 'from-red-400 to-pink-500',
      link: 'https://ziontechgroup.com/security'
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Real-time insights and predictive analytics to drive data-driven decision making.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
      link: 'https://ziontechgroup.com/analytics'
    },
    {
      icon: '🚀',
      title: 'Space Technology Solutions',
      description: 'Cutting-edge space exploration and satellite optimization platforms.',
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-pink-500',
      link: 'https://ziontechgroup.com/space-technology'
    },
    {
      icon: '🧬',
      title: 'Biomedical AI Research',
      description: 'Revolutionary AI-powered drug discovery and medical research platforms.',
      color: 'bg-gradient-to-br from-pink-500 to-rose-600',
      textColor: 'text-pink-400',
      gradient: 'from-pink-400 to-rose-500',
      link: 'https://ziontechgroup.com/biomedical-ai'
    }
  ];

  const marketMetrics = [
    {
      metric: '$1.5B',
      label: 'Quantum Finance Market',
      description: '300% annual growth rate',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'from-yellow-400 to-amber-500'
    },
    {
      metric: '$3.5B',
      label: 'Autonomous Vehicle AI',
      description: '200% annual growth rate',
      icon: <Car className="w-6 h-6" />,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      metric: '$1.6B',
      label: 'Smart Energy Market',
      description: '150% annual growth rate',
      icon: <Leaf className="w-6 h-6" />,
      color: 'from-green-400 to-emerald-500'
    },
    {
      metric: '$45B',
      label: 'AI Healthcare Market',
      description: '45% annual growth rate',
      icon: <FlaskConical className="w-6 h-6" />,
      color: 'from-pink-400 to-rose-500'
    },
    {
      metric: '$350B',
      label: 'Space Economy',
      description: '70% annual growth rate',
      icon: <Rocket className="w-6 h-6" />,
      color: 'from-purple-400 to-indigo-500'
    },
    {
      metric: '$150B',
      label: 'Industry 4.0 Market',
      description: '20% annual growth rate',
      icon: <Factory className="w-6 h-6" />,
      color: 'from-orange-400 to-red-500'
    }
  ];

  const innovativeServices = enhancedMicroSaasServices.slice(0, 6);

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO, QuantumTech Solutions',
      company: 'Fortune 500 Tech Company',
      content: 'Zion Tech Group\'s quantum AI platform has revolutionized our research capabilities. We\'ve achieved 1000x faster processing speeds and unprecedented accuracy in our AI models.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Security',
      company: 'Global Financial Institution',
      content: 'The AI cybersecurity platform has provided us with 99.99% threat detection accuracy. Our security posture has never been stronger, and we\'ve reduced incident response time by 90%.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director',
      company: 'Leading Biotech Research Institute',
      content: 'The biomedical AI research platform has accelerated our drug discovery process by 1000x. We\'ve identified promising compounds that would have taken years to discover traditionally.',
      rating: 5,
      avatar: '👩‍🔬'
    }
  ];

  const ctaSection = {
    title: 'Ready to Transform Your Business with Quantum AI?',
    subtitle: 'Join thousands of companies already achieving unprecedented results',
    features: [
      '21-day free trial on all services',
      'No credit card required',
      'Instant setup and deployment',
      '24/7 AI-powered support',
      'ROI guarantee on all services'
    ],
    primaryButton: {
      text: 'Start Free Trial',
      link: 'https://ziontechgroup.com/contact',
      icon: <ArrowRight className="w-5 h-5" />
    },
    secondaryButton: {
      text: 'View All Services',
      link: 'https://ziontechgroup.com/services',
      icon: <ExternalLink className="w-5 h-5" />
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Head>
        <title>Zion Tech Group - Revolutionary Micro SaaS Services & Quantum AI Solutions</title>
        <meta name="description" content="Transform your business with 400+ cutting-edge micro SaaS services, quantum AI solutions, and autonomous systems. 21-day free trials, 99.99% uptime, 2000%+ average ROI." />
        <meta name="keywords" content="micro SaaS, quantum AI, autonomous systems, biomedical research, space technology, quantum finance, cybersecurity, automation" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SaaS Services" />
        <meta property="og:description" content="400+ cutting-edge micro SaaS services with quantum AI and autonomous systems" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      {/* Enhanced Futuristic Background */}
      <QuantumHolographicBackground>
        <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
              <Sparkle className="w-4 h-4 mr-2" />
              Revolutionary Micro SaaS Platform
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent mb-6">
              The Future of
              <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text">
                Business Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with 400+ cutting-edge micro SaaS services powered by quantum AI, 
              autonomous systems, and emerging technologies. Achieve unprecedented results with our 
              revolutionary platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                href="https://ziontechgroup.com/contact"
                variant="primary"
                size="lg"
                className="group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                href="https://ziontechgroup.com/services"
                variant="secondary"
                size="lg"
                className="group"
              >
                Explore Services
                <ExternalLink className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
          >
            {heroStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-center mb-2">
                  <div className="p-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
                    {stat.icon}
                  </div>
                </div>
                <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 border border-cyan-500/20"
          >
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Ready to Get Started?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
              Revolutionary Platform Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of next-generation technology with our comprehensive suite of 
              micro SaaS services designed for the future of business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <EnhancedFuturisticCard
                  className="h-full p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {feature.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <Check className="w-4 h-4 mr-2 text-cyan-400" />
                        {feat}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </EnhancedFuturisticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
              Built on Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform leverages the most advanced technologies to deliver unparalleled 
              performance, security, and scalability.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologyStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-white">{tech.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{tech.category}</p>
                <p className="text-xs text-gray-500">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Metrics Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
              Market Leadership & Growth
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're at the forefront of emerging technology markets, driving innovation 
              and delivering exceptional value to our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <QuantumHolographicCard className="h-full p-8 text-center">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${metric.color} flex items-center justify-center mx-auto mb-6`}>
                    <div className="text-white">
                      {metric.icon}
                    </div>
                  </div>
                  <div className="text-4xl font-bold mb-2 text-white">
                    {metric.metric}
                  </div>
                  <div className="text-lg font-semibold mb-2 text-cyan-400">
                    {metric.label}
                  </div>
                  <div className="text-gray-400">
                    {metric.description}
                  </div>
                </QuantumHolographicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovative Services Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
              Featured Innovative Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most revolutionary micro SaaS services that are transforming 
              industries and creating unprecedented business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovativeServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <EnhancedFuturisticCard className="h-full p-6 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{service.icon}</div>
                    {service.popular && (
                      <div className="px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-xs font-semibold text-white">
                        Popular
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.tagline}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-cyan-400">
                      {service.price}
                      <span className="text-sm text-gray-400">{service.period}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {service.trialDays} days free
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <Check className="w-4 h-4 mr-2 text-cyan-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button
                    href={service.link}
                    variant="primary"
                    size="sm"
                    className="w-full group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </EnhancedFuturisticCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              href="https://ziontechgroup.com/services"
              variant="secondary"
              size="lg"
              className="group"
            >
              View All 400+ Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied clients who have transformed their businesses 
              with our revolutionary micro SaaS services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <EnhancedFuturisticCard className="h-full p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-cyan-400">{testimonial.role}</div>
                      <div className="text-xs text-gray-400">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </EnhancedFuturisticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
              {ctaSection.title}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {ctaSection.subtitle}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {ctaSection.features.map((feature, index) => (
                <div key={index} className="flex items-center text-left">
                  <Check className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href={ctaSection.primaryButton.link}
                variant="primary"
                size="lg"
                className="group"
              >
                {ctaSection.primaryButton.text}
                {ctaSection.primaryButton.icon}
              </Button>
              <Button
                href={ctaSection.secondaryButton.link}
                variant="secondary"
                size="lg"
                className="group"
              >
                {ctaSection.secondaryButton.text}
                {ctaSection.secondaryButton.icon}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Footer */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-8 border border-cyan-500/20"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 text-white">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl text-gray-300">
                Contact us today to learn how our revolutionary micro SaaS services can help you achieve unprecedented results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Call Us</h4>
                <a 
                  href={`tel:${contactInfo.mobile}`} 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-medium"
                >
                  {contactInfo.mobile}
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Email Us</h4>
                <a 
                  href={`mailto:${contactInfo.email}`} 
                  className="text-purple-400 hover:text-purple-300 transition-colors text-lg font-medium"
                >
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Visit Us</h4>
                <p className="text-green-400 text-sm">
                  {contactInfo.address}
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Button
                href="https://ziontechgroup.com/contact"
                variant="primary"
                size="lg"
                className="group"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
        </div>
      </QuantumHolographicBackground>
    </div>
  );
}
