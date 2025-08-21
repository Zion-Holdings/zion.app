import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Star, ArrowRight, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, 
  Rocket, Brain, Sparkles, Atom, Dna, Users, Globe, Cpu, Target, Microscope, 
  Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb,
  CheckCircle, ChevronRight, ExternalLink, Play, Pause, Volume2, VolumeX
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { advancedAIAutomationServices2026 } from '../data/2026-advanced-ai-automation-services';
import { advancedCybersecurityServices2026 } from '../data/2026-advanced-cybersecurity-services';
import { advancedFintechServices2026 } from '../data/2026-advanced-fintech-services';
import { advancedHealthcareBiotechServices2026 } from '../data/2026-advanced-healthcare-biotech-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const heroStats = [
  { label: 'Services Delivered', value: '1000+', icon: <Star className="w-5 h-5" /> },
  { label: 'Happy Clients', value: '2500+', icon: <Users className="w-5 h-5" /> },
  { label: 'Success Rate', value: '99.9%', icon: <Award className="w-5 h-5" /> },
  { label: 'ROI Average', value: '500%', icon: <TrendingUp className="w-5 h-5" /> }
];

const serviceCategories = [
  {
    title: 'AI & Automation',
    description: 'Revolutionary AI platforms with autonomous business processing and intelligence',
    services: advancedAIAutomationServices2026,
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    href: '/ai-automation-services',
    features: ['Autonomous Business Processing', 'Predictive Analytics', 'Customer Success AI']
  },
  {
    title: 'Cybersecurity & Quantum',
    description: 'Quantum-powered security solutions with unbreakable encryption',
    services: advancedCybersecurityServices2026,
    icon: Shield,
    color: 'from-red-500 to-pink-600',
    href: '/cybersecurity-quantum-services',
    features: ['Quantum Encryption', 'Zero Trust Security', 'Autonomous Threat Hunting']
  },
  {
    title: 'Fintech & Blockchain',
    description: 'Next-generation financial technology with quantum computing',
    services: advancedFintechServices2026,
    icon: DollarSign,
    color: 'from-green-500 to-emerald-600',
    href: '/fintech-blockchain-services',
    features: ['Quantum Trading', 'AI Wealth Management', 'Blockchain Finance']
  },
  {
    title: 'Healthcare & Biotech',
    description: 'Breakthrough medical technology with AI and quantum computing',
    services: advancedHealthcareBiotechServices2026,
    icon: Dna,
    color: 'from-blue-500 to-cyan-600',
    href: '/healthcare-biotech-services',
    features: ['AI Medical Diagnostics', 'Quantum Drug Discovery', 'Genomic Analysis']
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

const pricingTiers = [
  {
    name: 'Starter',
    price: '$499',
    period: '/month',
    description: 'Perfect for small businesses and startups',
    features: [
      'Basic AI automation',
      'Standard security features',
      'Email support',
      'Basic integrations',
      '5GB storage'
    ],
    popular: false,
    color: 'from-blue-500 to-cyan-600'
  },
  {
    name: 'Professional',
    price: '$1,999',
    period: '/month',
    description: 'Ideal for growing enterprises',
    features: [
      'Advanced AI automation',
      'Quantum security features',
      'Priority support',
      'Advanced integrations',
      '100GB storage',
      'Custom training'
    ],
    popular: true,
    color: 'from-purple-500 to-pink-600'
  },
  {
    name: 'Enterprise',
    price: '$4,999',
    period: '/month',
    description: 'For large organizations and corporations',
    features: [
      'Full AI autonomy',
      'Military-grade security',
      '24/7 dedicated support',
      'Custom integrations',
      'Unlimited storage',
      'White-label options',
      'SLA guarantees'
    ],
    popular: false,
    color: 'from-green-500 to-emerald-600'
  }
];

export default function UltimateServicesShowcase2026() {
  return (
    <Layout>
      <Head>
        <title>2026 Ultimate Services Showcase - Zion Tech Group | Revolutionary AI, Quantum & Emerging Technology Solutions</title>
        <meta name="description" content="Discover our comprehensive portfolio of revolutionary AI automation, quantum cybersecurity, fintech blockchain, and healthcare biotech services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI automation, quantum cybersecurity, fintech blockchain, healthcare biotech, Zion Tech Group, 2026 services" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="2026 Ultimate Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI, quantum computing, and emerging technology solutions for 2026." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/2026-ultimate-services-showcase" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image-2026.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2026 Ultimate Services Showcase - Zion Tech Group" />
        <meta name="twitter:description" content="Revolutionary AI, quantum computing, and emerging technology solutions for 2026." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image-2026.jpg" />
        
        {/* Contact Information */}
        <meta name="contact:mobile" content="+1 302 464 0950" />
        <meta name="contact:email" content="kleber@ziontechgroup.com" />
        <meta name="contact:address" content="364 E Main St STE 1008 Middletown DE 19709" />
        <meta name="contact:website" content="https://ziontechgroup.com" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900 to-black">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(156,146,172,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(156,146,172,0.1),transparent_50%)]"></div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              2026 Ultimate Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our revolutionary portfolio of AI automation, quantum cybersecurity, fintech blockchain, and healthcare biotech services. 
              Transform your business with cutting-edge technology that defines the future.
            </p>
            
            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
                >
                  <div className="flex items-center justify-center mb-3 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive portfolio spans the most advanced technologies in AI, quantum computing, 
              cybersecurity, fintech, and healthcare biotech.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={category.href}>
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                    <p className="text-gray-300 mb-6">{category.description}</p>
                    <ul className="space-y-2 mb-6">
                      {category.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future with our most innovative and game-changing service offerings.
            </p>
          </motion.div>

          {/* AI Automation Services */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">AI & Automation Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advancedAIAutomationServices2026.slice(0, 3).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                  <p className="text-gray-300 mb-4">{service.tagline}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">
                    {service.price}<span className="text-gray-400 text-lg">{service.period}</span>
                  </div>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link href={service.link}>
                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300">
                      Learn More
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cybersecurity Services */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Cybersecurity & Quantum Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advancedCybersecurityServices2026.slice(0, 3).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                  <p className="text-gray-300 mb-4">{service.tagline}</p>
                  <div className="text-2xl font-bold text-red-400 mb-4">
                    {service.price}<span className="text-gray-400 text-lg">{service.period}</span>
                  </div>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link href={service.link}>
                    <button className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white py-3 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300">
                      Learn More
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Fintech Services */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Fintech & Blockchain Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advancedFintechServices2026.slice(0, 3).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                  <p className="text-gray-300 mb-4">{service.tagline}</p>
                  <div className="text-2xl font-bold text-green-400 mb-4">
                    {service.price}<span className="text-gray-400 text-lg">{service.period}</span>
                  </div>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link href={service.link}>
                    <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300">
                      Learn More
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Healthcare Services */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Healthcare & Biotech Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advancedHealthcareBiotechServices2026.slice(0, 3).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                  <p className="text-gray-300 mb-4">{service.tagline}</p>
                  <div className="text-2xl font-bold text-blue-400 mb-4">
                    {service.price}<span className="text-gray-400 text-lg">{service.period}</span>
                  </div>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link href={service.link}>
                    <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300">
                      Learn More
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs with our flexible pricing options.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${tier.popular ? 'scale-105' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-6">{tier.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">{tier.price}</div>
                  <div className="text-gray-400 mb-8">{tier.period}</div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-2xl font-semibold text-white bg-gradient-to-r ${tier.color} hover:shadow-2xl transition-all duration-300`}>
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders have to say about our revolutionary services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies already leveraging our revolutionary technology to gain competitive advantages and drive unprecedented growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Schedule Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Sales
              </motion.button>
            </div>

            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Phone className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-gray-300">{contactInfo.mobile}</div>
                </div>
                <div>
                  <Mail className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-gray-300">{contactInfo.email}</div>
                </div>
                <div>
                  <MapPin className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-gray-300">{contactInfo.address}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}