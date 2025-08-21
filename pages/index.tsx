import React from 'react';
import Head from 'next/head';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import QuantumHolographicBackground from '../components/ui/QuantumHolographicBackground';
import QuantumHolographicCard from '../components/ui/QuantumHolographicCard';
import { Cloud, Bot, RefreshCw, Zap, Shield, BarChart3, ArrowRight, Check, ExternalLink, Star, Users, Globe, Lock, Rocket, Cpu, Database, TrendingUp, Clock, Target, Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, BookOpen as BookOpenIcon, Activity as ActivityIcon, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Sparkles, Atom, Brain, Eye, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Cpu as CpuIcon, Cloud as CloudIcon, Bot as BotIcon, Lock as LockIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Users as UsersIcon, Award as AwardIcon, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon, ExternalLink as ExternalLinkIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Trophy, Wifi, Satellite, Cpu as CpuIcon2, Database as DatabaseIcon2, Globe as GlobeIcon2, Bot as BotIcon2, Shield as ShieldIcon2, Zap as ZapIcon2, BarChart3 as BarChart3Icon2, TrendingUp as TrendingUpIcon2, Users as UsersIcon2, Award as AwardIcon2, Star as StarIcon2, Check as CheckIcon2, ArrowRight as ArrowRightIcon2, ExternalLink as ExternalLinkIcon2, Phone as PhoneIcon2, Mail as MailIcon2, MapPin as MapPinIcon2 } from 'lucide-react';

export default function HomePage() {
  const heroStats = [
    { value: '500+', label: 'Real Micro SaaS Services', color: 'text-cyan-400', icon: <Sparkles className="w-5 h-5" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <Shield className="w-5 h-5" /> },
    { value: '21', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-5 h-5" /> },
    { value: '24/7', label: 'AI Support', color: 'text-green-400', icon: <Bot className="w-5 h-5" /> },
    { value: '$500M+', label: 'Market Value', color: 'text-yellow-400', icon: <Trophy className="w-5 h-5" /> },
    { value: '1200%+', label: 'Average ROI', color: 'text-purple-400', icon: <TrendingUp className="w-5 h-5" /> },
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
      title: '500+ Real Micro SaaS Services',
      description: 'Complete portfolio of fully functional micro SaaS tools with real implementations, not just mockups. Starting from $29/month with 21-day free trials.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      gradient: 'from-cyan-400 to-blue-500',
      features: ['Quantum Computing', 'Edge AI', 'Autonomous Systems', 'Synthetic Biology', 'Neuromorphic Computing']
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI content generation, quantum AI training, biomedical research, legal contract analysis, and quantum computing platforms. Market-leading technology with 1200%+ average ROI.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      gradient: 'from-fuchsia-400 to-purple-500',
      features: ['Machine Learning', 'Neural Networks', 'Computer Vision', 'NLP', 'Quantum AI']
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-white" />,
      title: 'Enterprise Reliability',
      description: '99.99% uptime guarantee, automated scaling, and intelligent resource management. Trusted by Fortune 500 companies worldwide.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
      features: ['Auto-scaling', 'Load Balancing', 'Disaster Recovery', 'Monitoring', 'AIOps']
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes with our intuitive interfaces and automated onboarding. No technical expertise required.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500',
      features: ['One-click Deploy', 'Templates', 'Wizards', 'Documentation', 'AI Assistant']
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Bank-Level Security',
      description: 'SOC 2 compliance, quantum-resistant encryption, and automated security monitoring. Future-proof protection against quantum threats.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
      features: ['Quantum Cryptography', 'Zero Trust', 'Compliance', 'Auditing', 'AI Security']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Transparent Pricing',
      description: 'No hidden fees, simple monthly pricing that scales with your business needs. Competitive rates starting at $29/month.',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      gradient: 'from-teal-400 to-cyan-500',
      features: ['Pay-as-you-grow', 'Volume Discounts', 'Enterprise Plans', 'ROI Calculator', 'Free Trials']
    },
  ];

  const technologyStack = [
    { name: 'Next.js 15', category: 'Framework', icon: '⚡', description: 'React-based full-stack framework with App Router' },
    { name: 'React 18', category: 'Library', icon: '⚛️', description: 'Component-based UI library with concurrent features' },
    { name: 'TypeScript 5', category: 'Language', icon: '📘', description: 'Type-safe JavaScript with advanced features' },
    { name: 'Tailwind CSS 4', category: 'Styling', icon: '🎨', description: 'Utility-first CSS framework with modern design' },
    { name: 'Node.js 20', category: 'Runtime', icon: '🟢', description: 'JavaScript runtime environment with performance improvements' },
    { name: 'PostgreSQL 16', category: 'Database', icon: '🐘', description: 'Advanced open-source database with AI features' },
    { name: 'Redis 7', category: 'Cache', icon: '🔴', description: 'In-memory data structure store with AI capabilities' },
    { name: 'Docker', category: 'Containerization', icon: '🐳', description: 'Container platform with AI optimization' },
    { name: 'Kubernetes', category: 'Orchestration', icon: '☸️', description: 'Container orchestration with AI-driven scaling' },
    { name: 'AWS', category: 'Cloud', icon: '☁️', description: 'Cloud computing platform with AI services' },
    { name: 'Terraform', category: 'Infrastructure', icon: '🏗️', description: 'Infrastructure as code with AI validation' },
    { name: 'Prometheus', category: 'Monitoring', icon: '📊', description: 'Systems monitoring toolkit with AI insights' },
  ];

  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Automation',
      description: 'Intelligent systems that learn, adapt, and optimize your business processes automatically.',
      color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
      textColor: 'text-fuchsia-400',
      gradient: 'from-fuchsia-400 to-purple-500',
      features: ['Machine Learning', 'Neural Networks', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision']
    },
    {
      icon: '⚛️',
      title: 'Quantum Computing Solutions',
      description: 'Revolutionary quantum computing platforms for solving complex problems that are impossible for classical computers.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400',
      gradient: 'from-cyan-400 to-blue-500',
      features: ['Quantum Algorithms', 'Quantum Cryptography', 'Quantum Machine Learning', 'Quantum Simulation', 'Quantum Optimization']
    },
    {
      icon: '🧠',
      title: 'Neuromorphic Computing',
      description: 'Brain-inspired computing systems that process information like the human brain for ultra-efficient AI.',
      color: 'bg-gradient-to-br from-emerald-500 to-teal-600',
      textColor: 'text-emerald-400',
      gradient: 'from-emerald-400 to-teal-500',
      features: ['Spiking Neural Networks', 'Event-Driven Processing', 'Low Power Consumption', 'Real-time Learning', 'Adaptive Systems']
    },
    {
      icon: '🧬',
      title: 'Synthetic Biology Platform',
      description: 'Automated DNA synthesis and genetic engineering platform for revolutionary biotech applications.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
      features: ['DNA Synthesis', 'CRISPR Gene Editing', 'Protein Engineering', 'Metabolic Design', 'Lab Automation']
    },
    {
      icon: '🌐',
      title: 'Quantum Internet Protocol',
      description: 'Unhackable quantum-secured communication network using quantum entanglement and quantum key distribution.',
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-indigo-500',
      features: ['Quantum Entanglement', 'Quantum Key Distribution', 'Post-Quantum Cryptography', 'Quantum Repeaters', 'Global Networks']
    },
    {
      icon: '🤖',
      title: 'Autonomous Robotics',
      description: 'Self-learning robotic systems that operate independently in complex industrial environments.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      gradient: 'from-orange-400 to-red-500',
      features: ['Computer Vision', 'Natural Language Processing', 'Predictive Maintenance', 'Multi-robot Coordination', 'Safety Protocols']
    }
  ];

  const newInnovativeServices = [
    {
      name: 'Quantum Blockchain Oracle',
      description: 'Quantum-secured blockchain data verification with 100% tamper-proof security',
      price: '$399/month',
      icon: '🔗',
      variant: 'quantum' as const,
      link: 'https://ziontechgroup.com/quantum-blockchain-oracle'
    },
    {
      name: 'Neuromorphic Computing Platform',
      description: 'Brain-inspired computing for edge AI with 1000x efficiency improvement',
      price: '$599/month',
      icon: '🧠',
      variant: 'neural' as const,
      link: 'https://ziontechgroup.com/neuromorphic-computing'
    },
    {
      name: 'Synthetic Biology Automation',
      description: 'Automated DNA synthesis and engineering platform for biotech research',
      price: '$799/month',
      icon: '🧬',
      variant: 'biometric' as const,
      link: 'https://ziontechgroup.com/synthetic-biology'
    },
    {
      name: 'Quantum Internet Protocol',
      description: 'Unhackable quantum-secured global communication network',
      price: '$999/month',
      icon: '🌐',
      variant: 'quantum' as const,
      link: 'https://ziontechgroup.com/quantum-internet'
    },
    {
      name: 'Autonomous Robotics Platform',
      description: 'Self-learning robotic systems for Industry 4.0 automation',
      price: '$699/month',
      icon: '🤖',
      variant: 'cyber' as const,
      link: 'https://ziontechgroup.com/autonomous-robotics'
    },
    {
      name: 'Quantum Financial Modeling',
      description: 'Quantum-powered financial risk assessment and portfolio optimization',
      price: '$899/month',
      icon: '💰',
      variant: 'quantum' as const,
      link: 'https://ziontechgroup.com/quantum-financial'
    }
  ];

  const marketInsights = [
    {
      metric: 'Quantum Computing Market',
      value: '$2.5B',
      growth: '+45% YoY',
      description: 'Rapidly growing market with quantum advantage in multiple industries'
    },
    {
      metric: 'AI & Machine Learning',
      value: '$200B',
      growth: '+37% YoY',
      description: 'Largest tech market with AI becoming ubiquitous across all sectors'
    },
    {
      metric: 'Synthetic Biology',
      value: '$18B',
      growth: '+65% YoY',
      description: 'Revolutionary field combining biology, engineering, and AI'
    },
    {
      metric: 'Neuromorphic Computing',
      value: '$8.5B',
      growth: '+120% YoY',
      description: 'Emerging brain-inspired computing paradigm for edge AI'
    }
  ];

  return (
    <QuantumHolographicBackground variant="quantum-holographic" intensity="high">
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <Head>
          <title>Zion Tech Group - 500+ Real Micro SaaS Services | Quantum Computing | AI Solutions</title>
          <meta name="description" content="Discover 500+ real micro SaaS services including quantum computing, AI solutions, synthetic biology, and neuromorphic computing. Starting from $29/month with 21-day free trials. Contact us at +1 302 464 0950 or kleber@ziontechgroup.com" />
          <meta name="keywords" content="micro SaaS, quantum computing, AI solutions, synthetic biology, neuromorphic computing, blockchain, cybersecurity, Zion Tech Group" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="Zion Tech Group - 500+ Real Micro SaaS Services" />
          <meta property="og:description" content="Leading provider of quantum computing, AI, and emerging technology solutions. Contact: +1 302 464 0950" />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com" />
        </Head>

        {/* Hero Section */}
        <Hero />

        {/* Platform Features */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Revolutionary
                </span>{' '}
                Micro SaaS Platform
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of business technology with our comprehensive portfolio of 500+ real micro SaaS services, 
                powered by quantum computing, AI, and cutting-edge emerging technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, index) => (
                <QuantumHolographicCard
                  key={index}
                  variant={index % 2 === 0 ? 'quantum' : 'holographic'}
                  intensity="high"
                  className="h-full"
                >
                  <div className="text-center">
                    <div className={`inline-flex p-3 rounded-full ${feature.color} mb-4`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <div className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <Check className="w-4 h-4 text-green-400 mr-2" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </QuantumHolographicCard>
              ))}
            </div>
          </div>
        </section>

        {/* New Innovative Services */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Cutting-Edge
                </span>{' '}
                Innovation Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our latest breakthrough services that are reshaping industries and creating new possibilities 
                through quantum computing, synthetic biology, and neuromorphic computing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newInnovativeServices.map((service, index) => (
                <QuantumHolographicCard
                  key={index}
                  variant={service.variant}
                  intensity="extreme"
                  className="h-full cursor-pointer"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.open(service.link, '_blank');
                    }
                  }}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-white mb-4">{service.price}</div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => {
                        if (typeof window !== 'undefined') {
                          window.open(service.link, '_blank');
                        }
                      }}
                    >
                      Learn More <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </QuantumHolographicCard>
              ))}
            </div>
          </div>
        </section>

        {/* Market Insights */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Market
                </span>{' '}
                Intelligence & Growth
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay ahead of the curve with our comprehensive market insights and growth projections 
                for emerging technology sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {marketInsights.map((insight, index) => (
                <QuantumHolographicCard
                  key={index}
                  variant="neural"
                  intensity="medium"
                  className="text-center"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{insight.metric}</h3>
                  <div className="text-3xl font-bold text-green-400 mb-1">{insight.value}</div>
                  <div className="text-sm text-green-300 mb-3">{insight.growth}</div>
                  <p className="text-sm text-gray-300">{insight.description}</p>
                </QuantumHolographicCard>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of companies already leveraging our revolutionary micro SaaS services. 
              Start your 21-day free trial today and experience the future of business technology.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300">{contactInfo.mobile}</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">{contactInfo.email}</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">{contactInfo.address}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.open('/contact', '_self');
                  }
                }}
              >
                Start Free Trial <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.open('/services', '_self');
                  }
                }}
              >
                View All Services <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Enterprise-Grade
                </span>{' '}
                Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built on the latest technologies and frameworks, ensuring scalability, security, and performance 
                for enterprise applications.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologyStack.map((tech, index) => (
                <QuantumHolographicCard
                  key={index}
                  variant="cyber"
                  intensity="low"
                  className="text-center"
                >
                  <div className="text-3xl mb-3">{tech.icon}</div>
                  <h3 className="font-semibold text-white mb-1">{tech.name}</h3>
                  <p className="text-xs text-gray-400 mb-2">{tech.category}</p>
                  <p className="text-sm text-gray-300">{tech.description}</p>
                </QuantumHolographicCard>
              ))}
            </div>
          </div>
        </section>
      </div>
    </QuantumHolographicBackground>
  );
}
