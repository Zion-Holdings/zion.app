import React from 'react';
import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import { Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check, ExternalLink, Star, Users, Globe, Lock, Rocket, Cpu, Database, TrendingUp, Clock, Target, Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, BookOpen as BookOpenIcon, Activity as ActivityIcon, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Sparkles, Atom, Brain, Eye, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Cpu as CpuIcon, Cloud as CloudIcon, Bot as BotIcon, Lock as LockIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Users as UsersIcon, Award as AwardIcon, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon, ExternalLink as ExternalLinkIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Target as TargetIcon, TrendingUp as TrendingUpIcon2, Users as UsersIcon2, Award as AwardIcon2, Star as StarIcon2, Check as CheckIcon2, ArrowRight as ArrowRightIcon2, ExternalLink as ExternalLinkIcon2, Phone as PhoneIcon2, Mail as MailIcon2, MapPin as MapPinIcon2 } from 'lucide-react';

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
      name: 'Quantum Entanglement Network',
      description: 'Instant global communication through quantum entanglement',
      price: '$1,999/month',
      icon: '🌌',
      category: 'Quantum Computing',
      features: ['Instant global communication', 'Quantum encryption (unhackable)', 'Zero latency data transfer']
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
      category: 'Healthcare',
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
      role: 'Chief AI Officer',
      company: 'QuantumTech Industries',
      content: 'Zion Tech Group\'s Consciousness AI Platform has revolutionized our research. We\'ve achieved breakthroughs in AI consciousness that seemed impossible just months ago.',
      rating: 5,
      avatar: '👩‍🔬'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      company: 'BioSynth Solutions',
      content: 'The Synthetic Biology Platform has accelerated our drug discovery process by 10x. The lab automation and CRISPR tools are game-changing.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director',
      company: 'Neural Dynamics Lab',
      content: 'The Brain-Computer Interface platform has opened new frontiers in neuroscience. The non-invasive approach and accuracy are remarkable.',
      rating: 5,
      avatar: '👩‍⚕️'
    },
    {
      name: 'Alex Thompson',
      role: 'VP Engineering',
      company: 'QuantumCorp',
      content: 'The Quantum Entanglement Network is truly revolutionary. We\'ve achieved instant communication across continents with perfect security.',
      rating: 5,
      avatar: '👨‍🔬'
    }
  ];

  const stats = [
    { value: '300+', label: 'Revolutionary Services', icon: '🚀' },
    { value: '99.9%', label: 'Uptime Guarantee', icon: '🛡️' },
    { value: '800%+', label: 'Average ROI', icon: '📈' },
    { value: '24/7', label: 'AI Support', icon: '🤖' },
    { value: '50+', label: 'Countries Served', icon: '🌍' },
    { value: '10,000+', label: 'Happy Customers', icon: '😊' }
  ];

  return (
    <EnhancedFuturisticBackground variant="holographic-advanced" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>Zion Tech Group - Revolutionary AI, Quantum Computing & Emerging Technology Solutions</title>
          <meta name="description" content="Discover 300+ revolutionary micro SaaS services including Consciousness AI, Quantum Computing, Synthetic Biology, Brain-Computer Interfaces, and more. Leading the future of technology." />
          <meta name="keywords" content="AI, quantum computing, synthetic biology, brain-computer interface, consciousness AI, emerging technology, micro SaaS, Zion Tech Group" />
          <meta property="og:title" content="Zion Tech Group - Revolutionary AI & Emerging Technology" />
          <meta property="og:description" content="300+ cutting-edge micro SaaS services including Consciousness AI, Quantum Computing, and Synthetic Biology." />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com" />
        </Head>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Revolutionizing
                </span>
                <br />
                <span className="text-white">Technology</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Through Innovation
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover 300+ revolutionary micro SaaS services including Consciousness AI, Quantum Computing, 
                Synthetic Biology, Brain-Computer Interfaces, and more. Leading the future of technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  href="/services" 
                  variant="primary" 
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <span className="relative z-10">Explore Services</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
                <Button 
                  href="/contact" 
                  variant="secondary" 
                  size="lg"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-40 left-20 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-2000"></div>
            <div className="absolute bottom-20 right-10 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-3000"></div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Revolutionary
                </span>
                {' '}Platform Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of technology with our cutting-edge platform designed for the next generation of innovation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <div key={index} className="group">
                  <div className={`${feature.color} p-8 rounded-2xl h-full transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl`}>
                    <div className="mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-200 mb-6 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-200">
                          <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovative Services Showcase */}
        <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Cutting-Edge
                </span>
                {' '}Innovations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most revolutionary services that are reshaping the future of technology and human potential.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {innovativeServices.map((service, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 p-8 rounded-2xl h-full transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:border-cyan-400/50">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                    <div className="text-xs text-gray-400 mb-4">{service.category}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      href="/services" 
                      variant="primary" 
                      size="sm"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Built on
                </span>
                {' '}Cutting-Edge Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform leverages the latest technologies to deliver unparalleled performance and reliability.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologyStack.map((tech, index) => (
                <div key={index} className="group text-center">
                  <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-xl border border-gray-600/50 p-6 rounded-xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:border-cyan-400/50">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                    <p className="text-xs text-gray-400 mb-2">{tech.category}</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Trusted by
                </span>
                {' '}Innovation Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what industry leaders and researchers say about our revolutionary technology platform.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 p-6 rounded-2xl h-full transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:border-pink-400/50">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {testimonial.avatar}
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed italic">"{testimonial.content}"</p>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Experience the
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Future</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of innovators who are already transforming their businesses with our revolutionary technology platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                href="/contact" 
                variant="primary" 
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Start Your Journey
              </Button>
              <Button 
                href="/services" 
                variant="secondary" 
                size="lg"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-gradient-to-br from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-xl border border-gray-600/50 p-6 rounded-xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:border-cyan-400/50">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">{contactInfo.mobile}</p>
                </div>
              </div>
              <div className="group">
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-xl border border-gray-600/50 p-6 rounded-xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:border-purple-400/50">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300">{contactInfo.email}</p>
                </div>
              </div>
              <div className="group">
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-xl border border-gray-600/50 p-6 rounded-xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:border-pink-400/50">
                  <MapPin className="w-8 h-8 text-pink-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-300">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}
