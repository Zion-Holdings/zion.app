import React from 'react';
import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import { Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check, ExternalLink, Star, Users, Globe, Lock, Rocket, Cpu, Database, TrendingUp, Clock, Target, Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, BookOpen as BookOpenIcon, Activity as ActivityIcon, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Sparkles, Atom, Brain, Eye, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Cpu as CpuIcon, Cloud as CloudIcon, Bot as BotIcon, Lock as LockIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Users as UsersIcon, Award as AwardIcon, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon, ExternalLink as ExternalLinkIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon } from 'lucide-react';

export default function HomePage() {
  const heroStats = [
    { value: '30+', label: 'Real Micro SaaS Services', color: 'text-cyan-400' },
    { value: '99.9%', label: 'Uptime Guarantee', color: 'text-fuchsia-400' },
    { value: '14', label: 'Day Free Trials', color: 'text-blue-400' },
    { value: '24/7', label: 'AI Support', color: 'text-green-400' },
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
      description: '30+ fully functional micro SaaS tools with real implementations, not just mockups.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI content generation, cybersecurity, business intelligence, and autonomous agents.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      gradient: 'from-fuchsia-400 to-purple-500',
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-white" />,
      title: 'Enterprise Reliability',
      description: '99.9% uptime guarantee, automated scaling, and intelligent resource management.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes with our intuitive interfaces and automated onboarding.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Bank-Level Security',
      description: 'SOC 2 compliance, advanced encryption, and automated security monitoring.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Transparent Pricing',
      description: 'No hidden fees, simple monthly pricing that scales with your business needs.',
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
      description: 'Advanced security solutions including AI threat detection, zero-trust architecture, and compliance management.',
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      textColor: 'text-red-400',
      gradient: 'from-red-400 to-pink-500',
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Comprehensive data analytics and business intelligence tools for informed decision-making.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: '🌐',
      title: 'IoT & Smart Cities',
      description: 'Innovative IoT solutions for smart cities, industrial automation, and connected devices.',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      gradient: 'from-teal-400 to-cyan-500',
    },
    {
      icon: '⛓️',
      title: 'Blockchain & Web3',
      description: 'Cutting-edge blockchain solutions including DeFi platforms, NFT marketplaces, and smart contracts.',
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
      textColor: 'text-yellow-400',
      gradient: 'from-yellow-400 to-orange-500',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO at TechFlow',
      company: 'TechFlow Inc.',
      content: 'Zion Tech Group transformed our development process with their AI-powered tools. 40% faster development cycles!',
      avatar: '👩‍💻',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Operations',
      company: 'Global Retail Solutions',
      content: 'The AI business intelligence platform gave us insights we never had before. ROI exceeded 500% in just 8 months.',
      avatar: '👨‍💼',
      rating: 5
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director',
      company: 'Quantum Research Labs',
      content: 'Their quantum computing simulator is revolutionary. We\'ve accelerated our research by 10x.',
      avatar: '👩‍🔬',
      rating: 5
    }
  ];

  return (
    <EnhancedFuturisticBackground variant="quantum-cyberpunk" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>Zion Tech Group - Leading AI, Cloud & Emerging Technology Solutions</title>
          <meta name="description" content="Transform your business with Zion Tech Group's 30+ real micro SaaS services. AI solutions, cloud infrastructure, cybersecurity, blockchain, and emerging technologies." />
          <meta name="keywords" content="AI services, cloud solutions, cybersecurity, blockchain, quantum computing, micro SaaS, business automation, Zion Tech Group" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="Zion Tech Group - Leading AI, Cloud & Emerging Technology Solutions" />
          <meta property="og:description" content="Transform your business with our comprehensive technology solutions portfolio." />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 mr-2" />
                  #1 AI & Emerging Technology Provider
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Future-Ready
                  </span>
                  <br />
                  <span className="text-white">Technology Solutions</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Transform your business with our comprehensive portfolio of 30+ real micro SaaS services. 
                  From AI-powered automation to quantum computing, we deliver cutting-edge solutions that drive innovation.
                </p>
                
                {/* Contact Information Banner */}
                <EnhancedFuturisticCard 
                  variant="holographic" 
                  intensity="medium" 
                  className="max-w-4xl mx-auto mb-8"
                  background="glass"
                >
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="flex flex-col items-center">
                      <Phone className="w-6 h-6 text-cyan-400 mb-2" />
                      <span className="text-sm text-gray-400">Mobile</span>
                      <span className="text-white font-semibold">{contactInfo.mobile}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Mail className="w-6 h-6 text-purple-400 mb-2" />
                      <span className="text-sm text-gray-400">Email</span>
                      <span className="text-white font-semibold">{contactInfo.email}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <MapPin className="w-6 h-6 text-green-400 mb-2" />
                      <span className="text-sm text-gray-400">Address</span>
                      <span className="text-white font-semibold text-sm">{contactInfo.address}</span>
                    </div>
                  </div>
                </EnhancedFuturisticCard>

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
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {heroStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm md:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven business solutions to deliver exceptional value and results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <EnhancedFuturisticCard 
                  key={index}
                  variant={index % 2 === 0 ? 'holographic' : 'cyberpunk'}
                  intensity="medium"
                  className="h-full"
                  background="glass"
                >
                  <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 mx-auto`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </EnhancedFuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Built with <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Modern Technology</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform leverages the latest technologies to ensure scalability, security, and performance.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologyStack.map((tech, index) => (
                <EnhancedFuturisticCard 
                  key={index}
                  variant="quantum"
                  intensity="low"
                  className="text-center p-4"
                  background="glass"
                >
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <div className="text-white font-semibold text-sm">{tech.name}</div>
                  <div className="text-gray-400 text-xs">{tech.category}</div>
                </EnhancedFuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Solution Portfolio</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From AI automation to emerging technologies, we provide end-to-end solutions for modern businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <EnhancedFuturisticCard 
                  key={index}
                  variant={index % 3 === 0 ? 'holographic' : index % 3 === 1 ? 'cyberpunk' : 'quantum'}
                  intensity="medium"
                  className="h-full group"
                  background="glass"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className={`text-xl font-bold ${feature.textColor} mb-4`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-6">
                    <Button 
                      href="/services" 
                      variant="ghost" 
                      size="sm"
                      className={`text-${feature.textColor.split('-')[1]}-400 hover:bg-${feature.textColor.split('-')[1]}-400/10`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </EnhancedFuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join hundreds of satisfied customers who have transformed their businesses with our solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <EnhancedFuturisticCard 
                  key={index}
                  variant="neural"
                  intensity="medium"
                  className="h-full"
                  background="glass"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{testimonial.avatar}</div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      <div className="text-gray-500 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </EnhancedFuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <EnhancedFuturisticCard 
              variant="holographic-matrix" 
              intensity="high"
              className="max-w-4xl mx-auto"
              background="gradient"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Start your journey with our 14-day free trial. No credit card required, instant access to all features.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
                  Contact Sales
                </Button>
              </div>
              
              {/* Contact Information */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div className="flex items-center justify-center">
                    <Phone className="w-4 h-4 text-cyan-400 mr-2" />
                    <span className="text-gray-300">{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="text-gray-300">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300 text-xs">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </EnhancedFuturisticCard>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}
