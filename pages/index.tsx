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
    { value: '200+', label: 'Real Micro SaaS Services', color: 'text-cyan-400', icon: <Sparkles className="w-5 h-5" /> },
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
      title: 'Real Micro SaaS Services',
      description: '200+ fully functional micro SaaS tools with real implementations, not just mockups.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      gradient: 'from-cyan-400 to-blue-500',
      features: ['Quantum Computing', 'Edge AI', 'Autonomous Systems', 'Synthetic Biology']
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI content generation, SEO automation, chatbots, business intelligence, and quantum computing platforms. Market-leading technology with 500%+ average ROI.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      gradient: 'from-fuchsia-400 to-purple-500',
      features: ['Machine Learning', 'Neural Networks', 'Computer Vision', 'NLP']
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
      title: 'Bank-Level Security',
      description: 'SOC 2 compliance, advanced encryption, and automated security monitoring. Quantum-resistant cryptography for future-proof protection.',
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
      title: 'AI-Powered Automation',
      description: 'Intelligent systems that learn, adapt, and optimize your business processes automatically.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      textColor: 'text-fuchsia-400',
      gradient: 'from-fuchsia-400 to-purple-500',
      highlights: ['Machine Learning', 'Neural Networks', 'Predictive Analytics', 'Process Optimization']
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and high-performance cloud solutions designed for modern applications.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      gradient: 'from-cyan-400 to-blue-500',
      highlights: ['Auto-scaling', 'Load Balancing', 'Global CDN', 'Multi-region Deployment']
    },
    {
      icon: '🔒',
      title: 'Advanced Security',
      description: 'Enterprise-grade security with quantum cryptography, zero-trust architecture, and compliance.',
      color: 'bg-gradient-to-br from-red-500 to-orange-600',
      textColor: 'text-red-400',
      gradient: 'from-red-400 to-orange-500',
      highlights: ['Quantum Cryptography', 'Zero Trust', 'SOC 2 Compliance', 'Real-time Monitoring']
    },
    {
      icon: '📊',
      title: 'Data Analytics',
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
      name: 'Quantum AI Optimizer',
      description: 'Next-generation AI optimization using quantum algorithms',
      price: '$299/month',
      icon: '⚛️',
      category: 'Quantum Computing',
      features: ['Quantum-inspired algorithms', '10x faster training', 'Multi-objective optimization']
    },
    {
      name: 'Edge AI Inference Engine',
      description: 'Ultra-fast AI inference at the edge with <10ms latency',
      price: '$199/month',
      icon: '⚡',
      category: 'Edge AI',
      features: ['Ultra-low latency', 'Model optimization', 'Power efficient']
    },
    {
      name: 'Autonomous Robotics Platform',
      description: 'Self-navigating robotics for any environment',
      price: '$799/month',
      icon: '🤖',
      category: 'Autonomous Systems',
      features: ['Advanced SLAM', 'Multi-sensor fusion', 'Real-time learning']
    },
    {
      name: 'Neuromorphic Computing',
      description: 'Brain-inspired computing architecture',
      price: '$999/month',
      icon: '🧠',
      category: 'Emerging Tech',
      features: ['Spiking neural networks', 'Event-driven processing', 'Ultra-low power']
    },
    {
      name: 'Synthetic Biology Platform',
      description: 'Design and engineer biological systems',
      price: '$899/month',
      icon: '🧬',
      category: 'Life Sciences',
      features: ['DNA design', 'Genetic circuits', 'Lab automation']
    },
    {
      name: 'Brain-Computer Interface',
      description: 'Direct neural control and communication',
      price: '$1,299/month',
      icon: '🧠',
      category: 'Healthcare',
      features: ['EEG recording', 'Thought recognition', 'Medical integration']
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO, QuantumTech Solutions',
      company: 'QuantumTech Solutions',
      content: 'Zion Tech Group\'s quantum AI platform has revolutionized our research capabilities. The 10x performance improvement is game-changing.',
      rating: 5,
      avatar: '👩‍🔬'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'VP Engineering, AutoDrive Inc',
      company: 'AutoDrive Inc',
      content: 'Their autonomous systems platform enabled us to deploy self-driving vehicles in record time. Exceptional quality and support.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director, BioGen Labs',
      company: 'BioGen Labs',
      content: 'The synthetic biology platform has accelerated our drug discovery process by 5x. Incredible innovation and reliability.',
      rating: 5,
      avatar: '👩‍⚕️'
    }
  ];

  return (
    <EnhancedFuturisticBackground variant="quantum-holographic" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>Zion Tech Group - Future-Forward Micro SaaS Solutions | AI, Quantum Computing, Edge AI & More</title>
          <meta name="description" content="Discover 200+ innovative micro SaaS services including Quantum AI, Edge AI, Autonomous Systems, Synthetic Biology, and Brain-Computer Interfaces. Transform your business with cutting-edge technology." />
          <meta name="keywords" content="micro SaaS, AI services, quantum computing, edge AI, autonomous systems, synthetic biology, brain-computer interface, Zion Tech Group, future technology" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="Zion Tech Group - Future-Forward Micro SaaS Solutions" />
          <meta property="og:description" content="200+ innovative micro SaaS services including Quantum AI, Edge AI, Autonomous Systems, and more. Transform your business with cutting-edge technology." />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 text-sm font-medium mb-8 backdrop-blur-sm">
                  <Sparkles className="w-5 h-5 mr-2" />
                  🚀 200+ Real Micro SaaS Services Available Now
                </div>
                
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                  <span className="text-quantum">Future-Forward</span>
                  <br />
                  <span className="text-holographic">Micro SaaS</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
                    Solutions
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Transform your business with cutting-edge technology including <span className="text-cyan-400 font-semibold">Quantum AI</span>, 
                  <span className="text-purple-400 font-semibold"> Edge AI</span>, <span className="text-green-400 font-semibold">Autonomous Systems</span>, 
                  and <span className="text-pink-400 font-semibold">Synthetic Biology</span>. 
                  Real implementations, not just concepts.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                  <Button
                    href="/services"
                    variant="primary"
                    size="lg"
                    className="group hover-quantum"
                  >
                    <span className="flex items-center space-x-2">
                      <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                      <span>Explore Services</span>
                    </span>
                  </Button>
                  
                  <Button
                    href="/contact"
                    variant="secondary"
                    size="lg"
                    className="hover-glow"
                  >
                    <span className="flex items-center space-x-2">
                      <Phone className="w-5 h-5" />
                      <span>Get Started</span>
                    </span>
                  </Button>
                </div>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {heroStats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-black/40 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-500 hover:scale-105">
                      <div className="flex items-center justify-center mb-3">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color.replace('text-', 'bg-')} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                          {stat.icon}
                        </div>
                      </div>
                      <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-sm font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-quantum">Platform</span> Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive platform provides everything you need to build, deploy, and scale innovative solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <div key={index} className="group">
                  <div className="card-futuristic h-full">
                    <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-white">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="space-y-2">
                      {feature.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                          <Check className="w-4 h-4 text-green-400" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovative Services Showcase */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-holographic">Innovative</span> Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most cutting-edge micro SaaS solutions that are shaping the future of technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {innovativeServices.map((service, index) => (
                <div key={index} className="group">
                  <div className="card-futuristic h-full hover-quantum">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="text-2xl font-bold text-cyan-400 mb-4">
                      {service.price}
                    </div>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                          <Check className="w-4 h-4 text-green-400" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      href="/services"
                      variant="primary"
                      size="sm"
                      className="w-full"
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-quantum">Technology</span> Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built with the most advanced and reliable technologies available
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologyStack.map((tech, index) => (
                <div key={index} className="group text-center">
                  <div className="card-futuristic hover-glow">
                    <div className="text-3xl mb-3">{tech.icon}</div>
                    <h3 className="font-semibold text-white mb-1">{tech.name}</h3>
                    <p className="text-xs text-gray-400 mb-2">{tech.category}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-holographic">Why</span> Choose Us
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions that cover every aspect of modern business technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="card-futuristic h-full hover-quantum">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    
                    <h3 className="text-xl font-bold mb-4 text-white">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="space-y-2">
                      {feature.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                          <Check className="w-4 h-4 text-green-400" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-quantum">Customer</span> Success
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our innovative solutions are transforming businesses across industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group">
                  <div className="card-futuristic h-full hover-glow">
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-3">{testimonial.avatar}</div>
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                        <p className="text-xs text-blue-400">{testimonial.company}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to <span className="text-quantum">Transform</span> Your Business?
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of businesses already using our innovative micro SaaS solutions. 
                Get started today with a 14-day free trial.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="hover-quantum"
                >
                  <span className="flex items-center space-x-2">
                    <Rocket className="w-5 h-5" />
                    <span>Start Free Trial</span>
                  </span>
                </Button>
                
                <Button
                  href="/services"
                  variant="secondary"
                  size="lg"
                  className="hover-glow"
                >
                  <span className="flex items-center space-x-2">
                    <ArrowRight className="w-5 h-5" />
                    <span>View All Services</span>
                  </span>
                </Button>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="group">
                  <div className="p-4 rounded-2xl bg-black/20 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                    <Phone className="w-6 h-6 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-300">{contactInfo.mobile}</p>
                  </div>
                </div>
                
                <div className="group">
                  <div className="p-4 rounded-2xl bg-black/20 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <Mail className="w-6 h-6 text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">{contactInfo.email}</p>
                  </div>
                </div>
                
                <div className="group">
                  <div className="p-4 rounded-2xl bg-black/20 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-white font-semibold">Address</p>
                    <p className="text-gray-300 text-sm">{contactInfo.address}</p>
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
