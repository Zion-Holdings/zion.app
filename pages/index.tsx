import React from 'react';
import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import QuantumNeuralBackground from '../components/ui/QuantumNeuralBackground';
import { Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check, ExternalLink, Star, Users, Globe, Lock, Rocket, Cpu, Database, TrendingUp, Clock, Target, Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, BookOpen as BookOpenIcon, Activity as ActivityIcon, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Sparkles, Atom, Brain, Eye, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Cpu as CpuIcon, Cloud as CloudIcon, Bot as BotIcon, Lock as LockIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Users as UsersIcon, Award as AwardIcon, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon, ExternalLink as ExternalLinkIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon } from 'lucide-react';

export default function HomePage() {
  const heroStats = [
    { value: '85+', label: 'Real Micro SaaS Services', color: 'text-cyan-400' },
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
      description: '85+ fully functional micro SaaS tools with real implementations, not just mockups.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI content generation, SEO automation, chatbots, and business intelligence.',
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
      title: 'Advanced Security',
      description: 'Enterprise-grade security with zero-trust architecture and AI-powered threat detection.',
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      textColor: 'text-red-400',
      gradient: 'from-red-400 to-pink-500',
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Real-time insights and predictive analytics to drive data-driven decision making.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: '⚛️',
      title: 'Quantum Computing',
      description: 'Next-generation quantum solutions for complex optimization and machine learning problems.',
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-indigo-500',
    },
    {
      icon: '🌐',
      title: 'Blockchain & Web3',
      description: 'Decentralized solutions for NFTs, DeFi, and the future of digital ownership.',
      color: 'bg-gradient-to-br from-purple-500 to-violet-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-violet-500',
    },
  ];

  const innovativeServices = [
    {
      name: 'Quantum AI Optimizer',
      description: 'Next-generation AI optimization using quantum algorithms',
      price: '$299/month',
      category: 'AI & Quantum Computing',
      icon: '⚛️',
      color: 'from-cyan-500 to-blue-600',
      link: 'https://ziontechgroup.com/quantum-ai-optimizer'
    },
    {
      name: 'AI Cybersecurity Sentinel',
      description: 'Intelligent threat detection and prevention',
      price: '$199/month',
      category: 'AI & Security',
      icon: '🛡️',
      color: 'from-red-500 to-orange-600',
      link: 'https://ziontechgroup.com/ai-cybersecurity'
    },
    {
      name: 'Blockchain NFT Marketplace',
      description: 'Complete NFT creation and trading platform',
      price: '$99/month',
      category: 'Blockchain & Web3',
      icon: '🖼️',
      color: 'from-indigo-500 to-purple-600',
      link: 'https://ziontechgroup.com/blockchain-nft-marketplace'
    },
    {
      name: 'Metaverse Development Platform',
      description: 'Build immersive 3D worlds and experiences',
      price: '$199/month',
      category: 'AR/VR & Metaverse',
      icon: '🌐',
      color: 'from-emerald-500 to-teal-600',
      link: 'https://ziontechgroup.com/metaverse-platform'
    },
    {
      name: 'IoT Smart City Platform',
      description: 'Transform cities with intelligent IoT solutions',
      price: '$299/month',
      category: 'IoT & Smart Cities',
      icon: '🏙️',
      color: 'from-teal-500 to-cyan-600',
      link: 'https://ziontechgroup.com/iot-smart-city'
    },
    {
      name: 'Autonomous AI Agents',
      description: 'Self-learning AI agents for business automation',
      price: '$399/month',
      category: 'Emerging Technologies',
      icon: '🤖',
      color: 'from-cyan-600 to-blue-600',
      link: 'https://ziontechgroup.com/autonomous-ai-agents'
    }
  ];

  return (
    <QuantumNeuralBackground variant="quantum" intensity="high">
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
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
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
                  <div key={index} className="text-center">
                    <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
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
                  className="group"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  className="group"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Contact Information Banner */}
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center justify-center md:justify-start">
                    <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                    <div>
                      <div className="text-sm text-gray-400">Mobile</div>
                      <div className="text-white font-medium">{contactInfo.mobile}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <Mail className="w-5 h-5 text-purple-400 mr-3" />
                    <div>
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="text-white font-medium">{contactInfo.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <MapPin className="w-5 h-5 text-emerald-400 mr-3" />
                    <div>
                      <div className="text-sm text-gray-400">Address</div>
                      <div className="text-white font-medium text-sm">{contactInfo.address}</div>
                    </div>
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
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Why Choose Zion Tech Group?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another tech company. We're the pioneers of tomorrow's technology, 
                delivering real solutions that transform businesses and drive innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className={`${feature.color} p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
                >
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-200 leading-relaxed">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Innovative Services Showcase */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Revolutionary Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our cutting-edge micro SaaS services that are reshaping industries 
                and defining the future of technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {innovativeServices.map((service, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 p-6 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`text-3xl ${service.icon}`}></div>
                    <div className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30">
                      {service.category}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    <Button
                      href={service.link}
                      variant="primary"
                      size="sm"
                      className="group"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
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
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Built with Modern Technology
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform is built on cutting-edge technologies that ensure scalability, 
                security, and performance for enterprise-grade applications.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologyStack.map((tech, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <div className="text-white font-semibold mb-1">{tech.name}</div>
                  <div className="text-sm text-gray-400">{tech.category}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Comprehensive Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From AI automation to quantum computing, we provide end-to-end solutions 
                that address the most complex business challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className={`${feature.color} p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
                >
                  <div className="text-4xl mb-6">{feature.icon}</div>
                  <h3 className={`text-2xl font-bold ${feature.textColor} mb-4`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of businesses that have already revolutionized their operations 
                with Zion Tech Group's cutting-edge solutions. Start your transformation today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  href="/services"
                  variant="secondary"
                  size="lg"
                  className="group"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Final Contact Banner */}
              <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Phone className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-400">Mobile</div>
                    <div className="text-white font-medium">{contactInfo.mobile}</div>
                  </div>
                  <div>
                    <Mail className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white font-medium">{contactInfo.email}</div>
                  </div>
                  <div>
                    <MapPin className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-400">Address</div>
                    <div className="text-white font-medium text-sm">{contactInfo.address}</div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Button
                    href={contactInfo.website}
                    variant="secondary"
                    size="lg"
                    className="group"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </QuantumNeuralBackground>
  );
}
