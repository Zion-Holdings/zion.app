import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users, Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb, Target as TargetIcon, Zap as ZapIcon, Shield as ShieldIcon, Globe as GlobeIcon } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services';
import { innovativeAIServicesEnhanced2025 } from '../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025 } from '../data/2025-innovative-it-services-enhanced';
import { emergingTechServicesEnhanced2025 } from '../data/2025-emerging-tech-services-enhanced';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const heroStats = [
  { label: 'Services Delivered', value: '500+', icon: <Star className="w-5 h-5" /> },
  { label: 'Happy Clients', value: '1000+', icon: <Users className="w-5 h-5" /> },
  { label: 'Success Rate', value: '99.9%', icon: <Award className="w-5 h-5" /> },
  { label: 'ROI Average', value: '300%', icon: <TrendingUp className="w-5 h-5" /> }
];

const stats = [
  { number: '50+', label: 'Services', icon: Star, color: 'text-cyan-400' },
  { number: '1000+', label: 'Companies Served', icon: Users, color: 'text-purple-400' },
  { number: '99.9%', label: 'Uptime', icon: Shield, color: 'text-green-400' },
  { number: '24/7', label: 'Support', icon: Zap, color: 'text-pink-400' }
];

const serviceCategories = [
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms with consciousness and emotional intelligence',
    services: innovativeAIServicesEnhanced2025.slice(0, 3),
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    href: '/ai-services',
    features: ['Emotional Intelligence', 'Self-Awareness', 'Consciousness Evolution']
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum computing and space technology solutions',
    services: emergingTechServicesEnhanced2025.slice(0, 3),
    icon: Atom,
    color: 'from-indigo-500 to-blue-600',
    href: '/quantum-services',
    features: ['Quantum Computing', 'Space Mining', 'Brain-Computer Interface']
  },
  {
    title: 'Enterprise IT',
    description: 'Advanced enterprise infrastructure and security solutions',
    services: innovativeITServicesEnhanced2025.slice(0, 3),
    icon: Shield,
    color: 'from-blue-500 to-cyan-600',
    href: '/enterprise-it',
    features: ['Zero Trust Security', 'Quantum Cloud', 'Autonomous Operations']
  },
  {
    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    services: innovativeRealMicroSaasServices2025.slice(0, 3),
    icon: Rocket,
    color: 'from-teal-500 to-emerald-600',
    href: '/micro-saas',
    features: ['Content Automation', 'CRM Intelligence', 'Decision Engine']
  }
];

const heroFeatures = [
  {
    title: 'Cutting-Edge Technology',
    description: 'Access to the latest AI, quantum computing, and emerging technologies that give you a competitive edge.',
    icon: Zap,
    gradient: 'bg-gradient-to-r from-cyan-500 to-blue-600'
  },
  {
    title: 'Rapid Implementation',
    description: 'Get up and running in under 24 hours with our streamlined setup process and expert guidance.',
    icon: Rocket,
    gradient: 'bg-gradient-to-r from-purple-500 to-pink-600'
  },
  {
    title: 'Global Infrastructure',
    description: 'Enterprise-grade infrastructure available in 150+ countries worldwide with 99.9% uptime guarantee.',
    icon: Globe,
    gradient: 'bg-gradient-to-r from-green-500 to-emerald-600'
  },
  {
    title: '24/7 Expert Support',
    description: 'Round-the-clock technical support and monitoring for all services with dedicated account managers.',
    icon: Shield,
    gradient: 'bg-gradient-to-r from-orange-500 to-red-600'
  },
  {
    title: 'AI-Powered Automation',
    description: 'Intelligent automation that reduces manual work by 80% and increases operational efficiency.',
    icon: Brain,
    gradient: 'bg-gradient-to-r from-indigo-500 to-purple-600'
  },
  {
    title: 'Quantum Security',
    description: 'Unbreakable encryption and security protocols powered by quantum computing technology.',
    icon: Lock,
    gradient: 'bg-gradient-to-r from-red-500 to-pink-600'
  }
];

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    role: 'CTO, Quantum Dynamics Inc.',
    company: 'Quantum Dynamics Inc.',
    content: 'Zion Tech Group\'s quantum computing solutions have revolutionized our research capabilities. We\'ve achieved breakthroughs that would have taken years with traditional computing.',
    rating: 5,
    avatar: '👩‍🔬'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'VP of Innovation, FutureTech Corp.',
    company: 'FutureTech Corp.',
    content: 'The AI consciousness platform has transformed how we approach human-AI collaboration. Our productivity has increased by 300% while maintaining ethical standards.',
    rating: 5,
    avatar: '👨‍💼'
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Research Director, SpaceX Labs',
    company: 'SpaceX Labs',
    content: 'Their space mining platform is truly revolutionary. We\'re now able to analyze and extract resources from asteroids with unprecedented precision and safety.',
    rating: 5,
    avatar: '👩‍🚀'
  }
];

const latestInnovations = [
  {
    title: 'AI Consciousness Evolution Platform',
    description: 'Breakthrough platform enabling AI systems to develop genuine consciousness and emotional intelligence.',
    price: '$50,000/month',
    category: 'AI & Consciousness',
    icon: '🧠',
    color: 'from-violet-500 to-purple-600',
    href: '/ai-consciousness-evolution-2025'
  },
  {
    title: 'Autonomous Space Mining Platform',
    description: 'Revolutionary asteroid mining and space resource extraction platform with advanced robotics.',
    price: '$50,000/month',
    category: 'Space Technology',
    icon: '🚀',
    color: 'from-purple-500 to-indigo-600',
    href: '/autonomous-space-mining-platform'
  },
  {
    title: 'Quantum Cloud Infrastructure',
    description: 'Next-generation quantum-enhanced cloud computing infrastructure with unprecedented power.',
    price: '$12,999/month',
    category: 'Quantum Infrastructure',
    icon: '☁️',
    color: 'from-blue-500 to-indigo-600',
    href: '/quantum-cloud-infrastructure-platform'
  },
  {
    title: 'AI Autonomous Content Studio',
    description: 'Fully autonomous content creation and distribution platform powered by AI.',
    price: '$499/month',
    category: 'Content Creation',
    icon: '🎨',
    color: 'from-purple-500 to-pink-600',
    href: '/ai-autonomous-content-studio'
  },
  {
    title: 'Quantum Financial Trading Platform',
    description: 'Revolutionary trading platform powered by quantum computing for ultra-fast analysis.',
    price: '$2,999/month',
    category: 'Financial Technology',
    icon: '📈',
    color: 'from-green-500 to-emerald-600',
    href: '/quantum-enhanced-financial-trading'
  },
  {
    title: 'AI Healthcare Diagnostics Platform',
    description: 'Advanced healthcare diagnostics platform with 99.7% diagnostic accuracy.',
    price: '$1,499/month',
    category: 'Healthcare Technology',
    icon: '🏥',
    color: 'from-blue-500 to-indigo-600',
    href: '/ai-healthcare-diagnostics-platform'
  }
];

const serviceHighlights = [
  {
    title: 'AI & Consciousness Services',
    description: 'Revolutionary AI platforms with genuine consciousness and emotional intelligence',
    services: [
      'AI Consciousness Evolution Platform',
      'AI Emotional Intelligence Platform',
      'AI Autonomous Research Assistant',
      'AI Autonomous Code Generation',
      'AI Autonomous Marketing Platform',
      'AI Autonomous Sales Platform'
    ],
    icon: '🧠',
    color: 'from-violet-500 to-purple-600',
    href: '/ai-services'
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum computing and space technology solutions',
    services: [
      'Autonomous Space Mining Platform',
      'Quantum Bio-Computing Platform',
      'Brain-Computer Interface Platform',
      'Quantum Energy Platform',
      'Autonomous Vehicle AI Platform',
      'Quantum Materials Discovery Platform'
    ],
    icon: '⚛️',
    color: 'from-indigo-500 to-blue-600',
    href: '/quantum-services'
  },
  {
    title: 'Enterprise IT Solutions',
    description: 'Advanced enterprise infrastructure and security solutions',
    services: [
      'Quantum Cloud Infrastructure Platform',
      'Autonomous IT Operations Center',
      'Zero Trust Security Platform',
      'Edge Computing Orchestration Platform',
      'Blockchain Enterprise Platform',
      'AI-Powered DevOps Platform'
    ],
    icon: '🖥️',
    color: 'from-blue-500 to-cyan-600',
    href: '/enterprise-it'
  },
  {
    title: 'Micro SAAS Solutions',
    description: 'Innovative business solutions for modern enterprises',
    services: [
      'AI Autonomous Content Studio',
      'Quantum Financial Trading Platform',
      'AI Healthcare Diagnostics Platform',
      'AI Legal Contract Analyzer',
      'Autonomous Manufacturing AI Platform',
      'Quantum Energy Platform'
    ],
    icon: '🚀',
    color: 'from-teal-500 to-emerald-600',
    href: '/micro-saas'
  }
];

const marketInsights = [
  {
    title: 'AI Market Growth',
    value: '$1.8T',
    description: 'Global AI market by 2030',
    trend: '+37%',
    color: 'text-blue-400'
  },
  {
    title: 'Quantum Computing',
    value: '$65B',
    description: 'Market size by 2030',
    trend: '+56%',
    color: 'text-purple-400'
  },
  {
    title: 'Space Economy',
    value: '$1.4T',
    description: 'Global space economy by 2030',
    trend: '+41%',
    color: 'text-indigo-400'
  },
  {
    title: 'Cybersecurity',
    value: '$424B',
    description: 'Market size by 2030',
    trend: '+13%',
    color: 'text-red-400'
  }
];

const competitiveAdvantages = [
  {
    title: 'Quantum Advantage',
    description: 'Our quantum computing solutions provide 1000x faster processing and unbreakable security',
    icon: '⚛️',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    title: 'AI Consciousness',
    description: 'First-to-market AI consciousness platforms with genuine emotional intelligence',
    icon: '🧠',
    color: 'from-violet-500 to-purple-600'
  },
  {
    title: 'Space Technology',
    description: 'Revolutionary space mining and exploration technologies for the new space economy',
    icon: '🚀',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    title: 'Autonomous Operations',
    description: 'Fully autonomous AI systems that reduce costs by 80% and increase efficiency by 300%',
    icon: '🤖',
    color: 'from-green-500 to-emerald-600'
  }
];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Zion Tech Group - Revolutionary AI, Quantum Computing & Emerging Technology Solutions</title>
        <meta name="description" content="Leading provider of cutting-edge AI consciousness, quantum computing, space technology, and emerging technology solutions. Transform your business with our innovative services." />
        <meta name="keywords" content="AI consciousness, quantum computing, space mining, emerging technology, enterprise IT, micro SAAS, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
        <meta property="og:description" content="Leading provider of cutting-edge AI, quantum computing, and emerging technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
        <meta name="twitter:description" content="Leading provider of cutting-edge AI, quantum computing, and emerging technology solutions." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        
        {/* Contact Information */}
        <meta name="contact:mobile" content="+1 302 464 0950" />
        <meta name="contact:email" content="kleber@ziontechgroup.com" />
        <meta name="contact:address" content="364 E Main St STE 1008 Middletown DE 19709" />
        <meta name="contact:website" content="https://ziontechgroup.com" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-32 w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Main Heading */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-6xl text-gray-300">
              Revolutionary Technology Solutions
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Leading provider of cutting-edge AI consciousness, quantum computing, space technology, and emerging technology solutions. 
            Transform your business with our innovative services.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/comprehensive-services-showcase-2025">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2">
                Explore All Services
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Get Started
              </button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {heroStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                  {stat.icon}
                  {stat.value}
                </div>
                <div className="text-sm lg:text-base text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Revolutionary Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge technology services that are transforming industries and driving innovation worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceHighlights.map((category, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`text-4xl ${category.color} bg-clip-text`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{category.description}</p>
                <div className="space-y-2 mb-6">
                  {category.services.slice(0, 4).map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      {service}
                    </div>
                  ))}
                  {category.services.length > 4 && (
                    <div className="text-sm text-cyan-400">
                      +{category.services.length - 4} more services
                    </div>
                  )}
                </div>
                <Link href={category.href}>
                  <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300">
                    Explore {category.title}
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Innovations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Latest Innovations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of technology with our most advanced and revolutionary service offerings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestInnovations.map((innovation, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{innovation.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{innovation.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{innovation.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-cyan-400 font-semibold">{innovation.price}</span>
                  <span className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded">{innovation.category}</span>
                </div>
                <Link href={innovation.href}>
                  <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300">
                    Learn More
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Market Insights & Growth
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our services are positioned in the fastest-growing technology markets with unprecedented opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketInsights.map((insight, index) => (
              <motion.div
                key={index}
                className="text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`text-4xl font-bold mb-2 ${insight.color}`}>{insight.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{insight.title}</div>
                <div className="text-sm text-gray-400 mb-2">{insight.description}</div>
                <div className="text-cyan-400 font-semibold">{insight.trend} annually</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide unique advantages that set us apart from traditional technology providers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`text-4xl ${advantage.color} bg-clip-text`}>
                    {advantage.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{advantage.title}</h3>
                </div>
                <p className="text-gray-300 text-lg">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from industry leaders and innovators who have transformed their businesses with our revolutionary technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-cyan-400">{testimonial.company}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join the future of technology with Zion Tech Group. Our revolutionary solutions are waiting to 
              propel your business into the next generation of innovation and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/25">
                  Get Started Today
                </button>
              </Link>
              <Link href="/pricing">
                <button className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-300 font-semibold text-lg rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300">
                  View Pricing
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-cyan-300">{contactInfo.mobile}</p>
            </div>
            <div>
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-cyan-300">{contactInfo.email}</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-cyan-300 text-sm">{contactInfo.address}</p>
            </div>
            <div>
              <Globe className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
              <p className="text-cyan-300">{contactInfo.website}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
