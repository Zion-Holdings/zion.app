import React from 'react';
import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import { Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check, ExternalLink, Star, Users, Globe, Lock, Rocket, Cpu, Database, TrendingUp, Clock, Target, Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, BookOpen as BookOpenIcon, Activity as ActivityIcon, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Sparkles, Atom, Brain, Eye, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Cpu as CpuIcon, Cloud as CloudIcon, Bot as BotIcon, Lock as LockIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Users as UsersIcon, Award as AwardIcon, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon, ExternalLink as ExternalLinkIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Trophy, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Zap as ZapIcon2, Brain as BrainIcon, Atom as AtomIcon, Globe as GlobeIcon2, Cpu as CpuIcon2, Cloud as CloudIcon2, Bot as BotIcon2, Lock as LockIcon2, BarChart3 as BarChart3Icon2, TrendingUp as TrendingUpIcon2, Users as UsersIcon2, Award as AwardIcon2, Star as StarIcon2, Check as CheckIcon2, ArrowRight as ArrowRightIcon2, ExternalLink as ExternalLinkIcon2, Phone as PhoneIcon2, Mail as MailIcon2, MapPin as MapPinIcon2 } from 'lucide-react';

export default function HomePage() {
  const heroStats = [
    { value: '300+', label: 'Real Micro SaaS Services', color: 'text-cyan-400', icon: <Cloud className="w-6 h-6" /> },
    { value: '99.9%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <Shield className="w-6 h-6" /> },
    { value: '14', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-6 h-6" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Bot className="w-6 h-6" /> },
    { value: '$250M+', label: 'Market Value', color: 'text-yellow-400', icon: <DollarSign className="w-6 h-6" /> },
    { value: '1000%+', label: 'Average ROI', color: 'text-purple-400', icon: <TrendingUp className="w-6 h-6" /> },
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
      title: '300+ Real Micro SaaS Services',
      description: 'Complete portfolio of fully functional micro SaaS tools with real implementations, not just mockups. Starting from $49/month with 14-day free trials. All services are production-ready and deployed.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      gradient: 'from-cyan-400 to-blue-500',
      link: 'https://ziontechgroup.com/services',
      features: ['AI Content Generation', 'Quantum Computing', 'Blockchain Solutions', 'Cybersecurity Tools']
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI content generation, quantum AI training, biomedical research, legal contract analysis, and quantum computing platforms. Market-leading technology with 1000%+ average ROI. First-to-market quantum AI solutions.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      gradient: 'from-fuchsia-400 to-purple-500',
      link: 'https://ziontechgroup.com/ai-services',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-white" />,
      title: 'Enterprise Reliability',
      description: '99.9% uptime guarantee, automated scaling, and intelligent resource management. Trusted by Fortune 500 companies worldwide. SOC 2 compliant with enterprise-grade security.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
      link: 'https://ziontechgroup.com/enterprise',
      features: ['High Availability', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery']
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes with our intuitive interfaces and automated onboarding. No technical expertise required. Average setup time: 2-8 hours depending on service complexity.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
      link: 'https://ziontechgroup.com/get-started',
      features: ['One-click Deployment', 'Automated Setup', 'Templates Library', 'Migration Tools']
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Bank-Level Security',
      description: 'SOC 2 compliance, quantum-resistant encryption, and automated security monitoring. Future-proof protection against quantum threats. Military-grade security protocols.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
      link: 'https://ziontechgroup.com/security',
      features: ['Quantum Encryption', 'Zero Trust', 'Threat Detection', 'Compliance']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Transparent Pricing',
      description: 'No hidden fees, simple monthly pricing that scales with your business needs. Competitive rates starting at $49/month. Volume discounts available for enterprise clients.',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      gradient: 'from-teal-400 to-cyan-500',
      link: 'https://ziontechgroup.com/pricing',
      features: ['Pay-as-you-go', 'Volume Discounts', 'Enterprise Plans', 'Custom Pricing']
    },
  ];

  const technologyStack = [
    { name: 'Next.js', category: 'Framework', icon: '⚡', description: 'React framework for production' },
    { name: 'React', category: 'Library', icon: '⚛️', description: 'JavaScript library for UIs' },
    { name: 'TypeScript', category: 'Language', icon: '📘', description: 'Typed JavaScript' },
    { name: 'Tailwind CSS', category: 'Styling', icon: '🎨', description: 'Utility-first CSS framework' },
    { name: 'Node.js', category: 'Runtime', icon: '🟢', description: 'JavaScript runtime' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘', description: 'Advanced open source database' },
    { name: 'Redis', category: 'Cache', icon: '🔴', description: 'In-memory data structure store' },
    { name: 'Docker', category: 'Containerization', icon: '🐳', description: 'Container platform' },
    { name: 'Kubernetes', category: 'Orchestration', icon: '☸️', description: 'Container orchestration' },
    { name: 'AWS', category: 'Cloud', icon: '☁️', description: 'Cloud computing platform' },
    { name: 'Terraform', category: 'Infrastructure', icon: '🏗️', description: 'Infrastructure as code' },
    { name: 'Prometheus', category: 'Monitoring', icon: '📊', description: 'Monitoring system' },
  ];

  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Automation',
      description: 'Intelligent systems that learn, adapt, and optimize your business processes automatically.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      textColor: 'text-fuchsia-400',
      gradient: 'from-fuchsia-400 to-purple-500',
      link: 'https://ziontechgroup.com/ai-automation'
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and high-performance cloud solutions designed for modern applications.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      gradient: 'from-cyan-400 to-blue-500',
      link: 'https://ziontechgroup.com/cloud-infrastructure'
    },
    {
      icon: '🔒',
      title: 'Advanced Security',
      description: 'Enterprise-grade security with quantum-resistant encryption and AI-powered threat detection.',
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
      title: 'Performance Optimization',
      description: 'Lightning-fast applications with advanced caching and optimization techniques.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      gradient: 'from-orange-400 to-red-500',
      link: 'https://ziontechgroup.com/performance'
    },
    {
      icon: '🌐',
      title: 'Global CDN',
      description: 'Worldwide content delivery network for optimal performance and reliability.',
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-indigo-500',
      link: 'https://ziontechgroup.com/cdn'
    },
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO, QuantumTech Solutions',
      company: 'Fortune 500 Technology',
      content: 'Zion Tech Group\'s quantum computing platform has revolutionized our research capabilities. We\'ve achieved breakthroughs in drug discovery that would have taken years with traditional methods.',
      rating: 5,
      avatar: '👩‍🔬'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'VP of Engineering',
      company: 'Blockchain Innovations Inc.',
      content: 'The AI-powered security solutions from Zion Tech Group have given us enterprise-grade protection at startup prices. Their quantum-resistant encryption is truly future-proof.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director',
      company: 'Biomedical Research Institute',
      content: 'We\'ve integrated Zion Tech Group\'s AI research platform across our entire organization. The results have been phenomenal - 10x faster research cycles and breakthrough discoveries.',
      rating: 5,
      avatar: '👩‍⚕️'
    }
  ];

  const latestServices = [
    {
      name: 'Quantum AI Optimizer',
      description: 'Next-generation AI optimization using quantum algorithms',
      price: '$299/month',
      category: 'AI & Machine Learning',
      icon: '⚛️',
      color: 'from-cyan-500 to-blue-600',
      link: 'https://ziontechgroup.com/quantum-ai-optimizer'
    },
    {
      name: 'Biomedical AI Research Platform',
      description: 'AI-powered drug discovery and medical research',
      price: '$499/month',
      category: 'Healthcare & Biotech',
      icon: '🧬',
      color: 'from-green-500 to-emerald-600',
      link: 'https://ziontechgroup.com/biomedical-ai'
    },
    {
      name: 'Quantum Blockchain Platform',
      description: 'Quantum-resistant blockchain with advanced security',
      price: '$399/month',
      category: 'Blockchain & Web3',
      icon: '🔗',
      color: 'from-blue-500 to-indigo-600',
      link: 'https://ziontechgroup.com/quantum-blockchain'
    },
    {
      name: 'AI Cybersecurity Sentinel',
      description: 'Intelligent threat detection and prevention',
      price: '$199/month',
      category: 'Cybersecurity',
      icon: '🛡️',
      color: 'from-red-500 to-orange-600',
      link: 'https://ziontechgroup.com/ai-cybersecurity'
    }
  ];

  return (
    <EnhancedFuturisticBackground variant="quantum-holographic-advanced" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>Zion Tech Group - Leading AI & Quantum Computing Solutions</title>
          <meta name="description" content="Discover 300+ real micro SaaS services powered by AI, quantum computing, and cutting-edge technology. Transform your business with Zion Tech Group's innovative solutions." />
          <meta name="keywords" content="AI, quantum computing, micro SaaS, blockchain, cybersecurity, biomedical research, Zion Tech Group" />
          <meta property="og:title" content="Zion Tech Group - AI & Quantum Computing Solutions" />
          <meta property="og:description" content="300+ real micro SaaS services with AI, quantum computing, and cutting-edge technology." />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com" />
        </Head>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/40 to-cyan-900/40 z-0"></div>
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Leading the future with <span className="text-cyan-400 font-semibold">300+ Real Micro SaaS Services</span> powered by 
                <span className="text-purple-400 font-semibold"> AI</span>, 
                <span className="text-green-400 font-semibold"> Quantum Computing</span>, and 
                <span className="text-blue-400 font-semibold"> Cutting-edge Technology</span>
              </p>
              <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
                Transform your business with production-ready solutions that deliver 1000%+ ROI. 
                From AI content generation to quantum blockchain platforms, we have the tools you need to succeed.
              </p>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
              {heroStats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="flex items-center justify-center mb-2 text-white/80">
                    {stat.icon}
                  </div>
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                href="https://ziontechgroup.com/services"
                variant="primary"
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore Services
              </Button>
              <Button
                href="https://ziontechgroup.com/contact"
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Started
              </Button>
            </div>

            {/* Contact Information */}
            <div className="mt-16 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Ready to Transform Your Business?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-6 h-6 text-cyan-400 mb-2" />
                  <div className="text-white font-medium">{contactInfo.mobile}</div>
                  <div className="text-gray-300 text-sm">Call us anytime</div>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-6 h-6 text-purple-400 mb-2" />
                  <div className="text-white font-medium">{contactInfo.email}</div>
                  <div className="text-gray-300 text-sm">Email us today</div>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-6 h-6 text-green-400 mb-2" />
                  <div className="text-white font-medium text-sm">{contactInfo.address}</div>
                  <div className="text-gray-300 text-sm">Visit our office</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another tech company. We're the future of business technology, 
                delivering real solutions that drive real results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <EnhancedFuturisticCard
                  key={index}
                  className={`${feature.color} p-6 h-full`}
                  variant="quantum-advanced"
                >
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-bold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-200 mb-4 leading-relaxed">{feature.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white/80 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {feature.features.map((feat, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <Check className="w-4 h-4 text-green-400 mr-2" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    href={feature.link}
                    variant="secondary"
                    size="sm"
                    className="w-full mt-4 bg-white/20 hover:bg-white/30 text-white border-white/30"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </EnhancedFuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black/50 via-purple-900/20 to-cyan-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Latest <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Innovations</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our newest cutting-edge services that are revolutionizing industries worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {latestServices.map((service, index) => (
                <Card
                  key={index}
                  className={`bg-gradient-to-br ${service.color} p-6 h-full border-0`}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-200 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="text-white font-semibold mb-3">{service.price}</div>
                  <div className="text-xs text-white/70 mb-4">{service.category}</div>
                  <Button
                    href={service.link}
                    variant="secondary"
                    size="sm"
                    className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                href="https://ziontechgroup.com/services"
                variant="primary"
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Built with <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Cutting-edge</span> Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform leverages the latest technologies to deliver unmatched performance, 
                security, and scalability.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologyStack.map((tech, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="text-3xl mb-3">{tech.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{tech.name}</h3>
                  <p className="text-xs text-gray-400 mb-2">{tech.category}</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black/50 via-purple-900/20 to-cyan-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                What Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Clients</span> Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of satisfied customers who have transformed their businesses with our solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{testimonial.avatar}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-sm text-gray-300">{testimonial.role}</p>
                      <p className="text-xs text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-200 leading-relaxed">{testimonial.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of technology with Zion Tech Group. Start your 14-day free trial today 
              and experience the power of AI, quantum computing, and cutting-edge innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                href="https://ziontechgroup.com/contact"
                variant="primary"
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button
                href="https://ziontechgroup.com/services"
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10"
              >
                <Search className="w-5 h-5 mr-2" />
                Explore Services
              </Button>
            </div>

            {/* Final Contact Information */}
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-6 h-6 text-cyan-400 mb-2" />
                  <div className="text-white font-medium">{contactInfo.mobile}</div>
                  <div className="text-gray-300 text-sm">24/7 Support</div>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-6 h-6 text-purple-400 mb-2" />
                  <div className="text-white font-medium">{contactInfo.email}</div>
                  <div className="text-gray-300 text-sm">Quick Response</div>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-6 h-6 text-green-400 mb-2" />
                  <div className="text-white font-medium text-sm">{contactInfo.address}</div>
                  <div className="text-gray-300 text-sm">Global Presence</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}
