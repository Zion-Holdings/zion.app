import React from 'react';
import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import { Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check, ExternalLink, Star, Users, Globe, Lock, Rocket, Cpu, Database, TrendingUp, Clock, Target, Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, BookOpen as BookOpenIcon, Activity as ActivityIcon, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Sparkles, Atom, Brain, Eye, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Cpu as CpuIcon, Cloud as CloudIcon, Bot as BotIcon, Lock as LockIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Users as UsersIcon, Award as AwardIcon, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon, ExternalLink as ExternalLinkIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Target as TargetIcon, TrendingUp as TrendingUpIcon2, Users as UsersIcon2, Award as AwardIcon2, Star as StarIcon2, Check as CheckIcon2, ArrowRight as ArrowRightIcon2, ExternalLink as ExternalLinkIcon2, Phone as PhoneIcon2, Mail as MailIcon2, MapPin as MapPinIcon2 } from 'lucide-react';
import { realMicroSaasServices, getPopularServices } from '../data/real-micro-saas-services';
import { motion } from 'framer-motion';

export default function HomePage() {
  const heroStats = [
    { value: '300+', label: 'Revolutionary Micro SaaS Services', color: 'text-cyan-400', icon: <Sparkles className="w-5 h-5" /> },
    { value: '99.9%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <Shield className="w-5 h-5" /> },
    { value: '14', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-5 h-5" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Bot className="w-5 h-5" /> },
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
      title: 'Revolutionary Micro SaaS Services',
      description: '300+ cutting-edge micro SaaS tools including quantum computing, synthetic biology, brain-computer interfaces, and consciousness AI.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      gradient: 'from-cyan-400 to-blue-500',
      features: ['Quantum Entanglement Networks', 'Synthetic Biology Platforms', 'Brain-Computer Interfaces', 'Consciousness AI']
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'Next-Generation AI Solutions',
      description: 'Advanced AI with emergent consciousness, quantum machine learning, and synthetic reality generation. Market-leading technology with 800%+ average ROI.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      gradient: 'from-fuchsia-400 to-purple-500',
      features: ['Consciousness AI', 'Quantum ML', 'Synthetic Reality', 'Neuromorphic Computing']
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-white" />,
      title: 'Enterprise Reliability',
      description: '99.9% uptime guarantee, automated scaling, and intelligent resource management. Trusted by Fortune 500 companies worldwide.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
      features: ['Auto-scaling', 'Load Balancing', 'Disaster Recovery', 'Monitoring']
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes with our intuitive interfaces and automated onboarding. No technical expertise required.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
      features: ['One-click Deploy', 'Templates', 'Wizards', 'Documentation']
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Quantum-Safe Security',
      description: 'SOC 2 compliance, quantum-resistant encryption, and automated security monitoring. Future-proof protection against quantum threats.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
      features: ['Quantum Cryptography', 'Zero Trust', 'Compliance', 'Auditing']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Transparent Pricing',
      description: 'No hidden fees, simple monthly pricing that scales with your business needs. Competitive rates starting at $49/month.',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      gradient: 'from-teal-400 to-cyan-500',
      features: ['Pay-as-you-grow', 'Volume Discounts', 'Enterprise Plans', 'ROI Calculator']
    },
  ];

  const technologyStack = [
    { name: 'Next.js', category: 'Framework', icon: '⚡', description: 'React-based full-stack framework' },
    { name: 'React', category: 'Library', icon: '⚛️', description: 'Component-based UI library' },
    { name: 'TypeScript', category: 'Language', icon: '📘', description: 'Type-safe JavaScript' },
    { name: 'Tailwind CSS', category: 'Styling', icon: '🎨', description: 'Utility-first CSS framework' },
    { name: 'Node.js', category: 'Runtime', icon: '🟢', description: 'JavaScript runtime environment' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘', description: 'Advanced open-source database' },
    { name: 'Redis', category: 'Cache', icon: '🔴', description: 'In-memory data structure store' },
    { name: 'Docker', category: 'Containerization', icon: '🐳', description: 'Container platform' },
    { name: 'Kubernetes', category: 'Orchestration', icon: '☸️', description: 'Container orchestration' },
    { name: 'AWS', category: 'Cloud', icon: '☁️', description: 'Cloud computing platform' },
    { name: 'Terraform', category: 'Infrastructure', icon: '🏗️', description: 'Infrastructure as code' },
    { name: 'Prometheus', category: 'Monitoring', icon: '📊', description: 'Systems monitoring toolkit' },
  ];

  const features = [
    {
      icon: '🤖',
      title: 'Consciousness AI & Quantum Computing',
      description: 'Revolutionary AI systems with genuine consciousness and quantum computing capabilities for unprecedented performance.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      textColor: 'text-fuchsia-400',
      gradient: 'from-fuchsia-400 to-purple-500',
      highlights: ['Consciousness AI', 'Quantum ML', 'Synthetic Reality', 'Neuromorphic Computing']
    },
    {
      icon: '☁️',
      title: 'Advanced Cloud Infrastructure',
      description: 'Scalable, secure, and high-performance cloud solutions designed for next-generation applications.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      gradient: 'from-cyan-400 to-blue-500',
      highlights: ['Auto-scaling', 'Load Balancing', 'Global CDN', 'Multi-region Deployment']
    },
    {
      icon: '🔒',
      title: 'Quantum-Safe Security',
      description: 'Enterprise-grade security with quantum-resistant cryptography, zero-trust architecture, and compliance.',
      color: 'bg-gradient-to-br from-red-500 to-orange-600',
      textColor: 'text-red-400',
      gradient: 'from-red-400 to-orange-500',
      highlights: ['Quantum Cryptography', 'Zero Trust', 'SOC 2 Compliance', 'Real-time Monitoring']
    },
    {
      icon: '📊',
      title: 'Advanced Data Analytics',
      description: 'Comprehensive data insights and business intelligence to drive informed decisions.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
      highlights: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports', 'Data Visualization']
    },
    {
      icon: '🚀',
      title: 'Performance Optimization',
      description: 'Lightning-fast applications with advanced caching, CDN, and performance monitoring.',
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-indigo-500',
      highlights: ['Edge Computing', 'Smart Caching', 'Performance Monitoring', 'Optimization Tools']
    },
    {
      icon: '🌐',
      title: 'Global Reach',
      description: 'Worldwide deployment with local data centers and compliance with regional regulations.',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      gradient: 'from-teal-400 to-cyan-500',
      highlights: ['Global CDN', 'Local Data Centers', 'Regional Compliance', 'Multi-language Support']
    },
  ];

  const innovativeServices = [
    {
      name: 'Quantum AI Platform',
      description: 'Next-generation AI powered by quantum computing',
      price: '$2,999/month',
      icon: '⚛️',
      category: 'Emerging Technology',
      features: ['Quantum machine learning', 'Hybrid quantum-classical computing', 'Quantum optimization solvers']
    },
    {
      name: 'Synthetic Biology Platform',
      description: 'Design and engineer living organisms for industrial applications',
      price: '$2,499/month',
      icon: '🧬',
      category: 'Life Sciences',
      features: ['DNA design and synthesis', 'CRISPR gene editing', 'Lab automation integration']
    },
    {
      name: 'Brain-Computer Interface',
      description: 'Direct neural control and communication systems',
      price: '$3,999/month',
      icon: '🧠',
      category: 'Healthcare & Life Sciences',
      features: ['Non-invasive EEG recording', 'Thought-to-text conversion', 'Mental command recognition']
    },
    {
      name: 'Consciousness AI Platform',
      description: 'AI systems with genuine consciousness and understanding',
      price: '$5,999/month',
      icon: '🌟',
      category: 'Emerging Technology',
      features: ['Emergent consciousness', 'Self-awareness development', 'Genuine understanding']
    },
    {
      name: 'Synthetic Reality Engine',
      description: 'Create indistinguishable synthetic realities and simulations',
      price: '$3,499/month',
      icon: '🌍',
      category: 'Emerging Technology',
      features: ['Photorealistic rendering', 'Synthetic data generation', 'Physics simulation']
    },
    {
      name: 'Neuromorphic Computing',
      description: 'Brain-inspired computing architecture for AI acceleration',
      price: '$1,799/month',
      icon: '⚡',
      category: 'Emerging Technology',
      features: ['Spiking neural networks', 'Event-driven processing', 'Ultra-low power consumption']
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO, QuantumTech Solutions',
      company: 'Fortune 500 Technology',
      content: 'The Quantum AI Platform has revolutionized our research capabilities. We\'re solving problems in seconds that used to take months.',
      rating: 5,
      avatar: '👩‍🔬'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Innovation',
      company: 'BioGen Industries',
      content: 'The Synthetic Biology Platform has accelerated our drug discovery process by 10x. It\'s a game-changer for the industry.',
      rating: 5,
      avatar: '👨‍🔬'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director',
      company: 'NeuroTech Institute',
      content: 'The Brain-Computer Interface platform has opened new possibilities in assistive technology. The accuracy is remarkable.',
      rating: 5,
      avatar: '👩‍⚕️'
    }
  ];

  const popularServices = getPopularServices();

  return (
    <EnhancedFuturisticBackground variant="holographic-advanced" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>Zion Tech Group - Revolutionary Micro SaaS Services & AI Solutions</title>
          <meta name="description" content="Discover 300+ cutting-edge micro SaaS services including quantum computing, synthetic biology, brain-computer interfaces, and consciousness AI. Transform your business with next-generation technology." />
          <meta name="keywords" content="micro SaaS, AI services, quantum computing, synthetic biology, brain-computer interface, consciousness AI, cloud services, cybersecurity" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Zion Tech Group - Revolutionary Micro SaaS Services & AI Solutions" />
          <meta property="og:description" content="Discover 300+ cutting-edge micro SaaS services including quantum computing, synthetic biology, brain-computer interfaces, and consciousness AI." />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:type" content="website" />
          
          {/* Contact Information */}
          <meta name="contact" content="Mobile: +1 302 464 0950, Email: kleber@ziontechgroup.com" />
          <meta name="address" content="364 E Main St STE 1008 Middletown DE 19709" />
        </Head>

        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-6xl mx-auto">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Revolutionary Micro SaaS Services
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Discover 300+ cutting-edge micro SaaS tools including quantum computing, synthetic biology, 
                brain-computer interfaces, and consciousness AI. Transform your business with next-generation technology.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button 
                  href="/services" 
                  variant="primary" 
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <Button 
                  href="/contact" 
                  variant="secondary" 
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Get Started
                  <Rocket className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>

              {/* Hero Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {heroStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color} flex items-center justify-center`}>
                      {stat.icon}
                      <span className="ml-2">{stat.value}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Platform Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of technology with our comprehensive suite of revolutionary micro SaaS services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <EnhancedFuturisticCard
                    variant="holographic"
                    className="h-full"
                    background="glass"
                  >
                    <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                    
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-300">
                          <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </EnhancedFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovative Services Showcase */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                Innovative Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our most revolutionary micro SaaS services that are shaping the future of technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {innovativeServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <EnhancedFuturisticCard
                    variant={index % 2 === 0 ? 'quantum' : 'neural'}
                    className="h-full"
                    background="glass"
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-white">{service.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                    <div className="text-xs text-gray-400 mb-4">{service.category}</div>
                    
                    <ul className="space-y-1 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-gray-300 flex items-center">
                          <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      href={`/services#${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                      variant="primary"
                      size="sm"
                      className="w-full"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </EnhancedFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Services */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Popular Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most sought-after micro SaaS services trusted by thousands of businesses worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularServices.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <EnhancedFuturisticCard
                    variant="holographic"
                    className="h-full"
                    background="glass"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{service.icon}</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300 ml-1">{service.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-white">{service.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{service.tagline}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-cyan-400">
                        ${service.price.monthly}/mo
                      </div>
                      <div className="text-xs text-gray-400">
                        {service.price.trialDays} day trial
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-400 mb-4">{service.category}</div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-xs text-gray-400">
                        {service.customers.toLocaleString()}+ customers
                      </div>
                      <div className="text-xs text-gray-400">
                        {service.reviews} reviews
                      </div>
                    </div>
                    
                    <Button 
                      href={service.link}
                      variant="primary"
                      size="sm"
                      className="w-full"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </EnhancedFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built with cutting-edge technologies for maximum performance, security, and scalability
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologyStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <EnhancedFuturisticCard
                    variant="quantum"
                    size="sm"
                    className="text-center h-full"
                    background="glass"
                  >
                    <div className="text-3xl mb-3">{tech.icon}</div>
                    <h3 className="font-bold text-white mb-1">{tech.name}</h3>
                    <p className="text-xs text-gray-400 mb-2">{tech.category}</p>
                    <p className="text-xs text-gray-300">{tech.description}</p>
                  </EnhancedFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of satisfied customers who have transformed their businesses with our revolutionary services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <EnhancedFuturisticCard
                    variant="neural"
                    className="h-full"
                    background="glass"
                  >
                    <div className="flex items-center mb-6">
                      <div className="text-4xl mr-4">{testimonial.avatar}</div>
                      <div>
                        <h3 className="font-bold text-white">{testimonial.name}</h3>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                        <p className="text-xs text-gray-500">{testimonial.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">{testimonial.content}</p>
                  </EnhancedFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Get in touch with our team of experts to discover how our revolutionary micro SaaS services can accelerate your growth
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="font-bold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">{contactInfo.mobile}</p>
                </div>
                
                <div className="text-center">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="font-bold text-white mb-2">Email</h3>
                  <p className="text-gray-300">{contactInfo.email}</p>
                </div>
                
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-pink-400 mx-auto mb-4" />
                  <h3 className="font-bold text-white mb-2">Address</h3>
                  <p className="text-gray-300 text-sm">{contactInfo.address}</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  href="/contact" 
                  variant="primary" 
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Contact Us
                  <MessageSquare className="ml-2 w-5 h-5" />
                </Button>
                
                <Button 
                  href="/services" 
                  variant="secondary" 
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  View All Services
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}
