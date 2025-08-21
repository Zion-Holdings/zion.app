import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, 
  Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users, 
  Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings, 
  Eye, Award, Clock, Heart, Lightbulb, Target as TargetIcon, 
  Zap as ZapIcon, Shield as ShieldIcon, Globe as GlobeIcon,
  Search, Code, TestTube, Server, Database, Network, Shield as SecurityIcon,
  Wifi, Building, Cpu as CpuIcon, TrendingUp as ChartIcon, Megaphone, HeadphonesIcon, Users as TeamIcon
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services';
import { innovativeAIServicesEnhanced2025 } from '../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025 } from '../data/2025-innovative-it-services-enhanced';
import { emergingTechServicesEnhanced2025 } from '../data/2025-emerging-tech-services-enhanced';
import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services';
import { advancedITInfrastructureServices2025 } from '../data/2025-advanced-it-infrastructure-services';
import { innovativeBusinessSolutions2025 } from '../data/2025-innovative-business-solutions';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const allServices = [
  ...innovativeAIServicesEnhanced2025,
  ...innovativeITServicesEnhanced2025,
  ...innovativeRealMicroSaasServices2025,
  ...emergingTechServicesEnhanced2025,
  ...advancedAIAutomationServices2025,
  ...advancedITInfrastructureServices2025,
  ...innovativeBusinessSolutions2025
];

const serviceCategories = [
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms with consciousness and emotional intelligence',
    services: innovativeAIServicesEnhanced2025,
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    href: '/ai-services',
    features: ['Emotional Intelligence', 'Self-Awareness', 'Consciousness Evolution']
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum computing and space technology solutions',
    services: emergingTechServicesEnhanced2025,
    icon: Atom,
    color: 'from-indigo-500 to-blue-600',
    href: '/quantum-services',
    features: ['Quantum Computing', 'Space Mining', 'Brain-Computer Interface']
  },
  {
    title: 'Enterprise IT',
    description: 'Advanced enterprise infrastructure and security solutions',
    services: innovativeITServicesEnhanced2025,
    icon: Shield,
    color: 'from-blue-500 to-cyan-600',
    href: '/enterprise-it',
    features: ['Zero Trust Security', 'Quantum Cloud', 'Autonomous Operations']
  },
  {
    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    services: innovativeRealMicroSaasServices2025,
    icon: Rocket,
    color: 'from-teal-500 to-emerald-600',
    href: '/micro-saas',
    features: ['Content Automation', 'CRM Intelligence', 'Decision Engine']
  },
  {
    title: 'Advanced AI Automation',
    description: 'Revolutionary AI automation for development, testing, DevOps, and security',
    services: advancedAIAutomationServices2025,
    icon: Brain,
    color: 'from-emerald-500 to-teal-600',
    href: '/advanced-ai-automation-services',
    features: ['Code Review AI', 'Testing Automation', 'DevOps Intelligence']
  },
  {
    title: 'Advanced IT Infrastructure',
    description: 'Next-generation infrastructure with quantum computing and edge computing',
    services: advancedITInfrastructureServices2025,
    icon: Cloud,
    color: 'from-indigo-500 to-purple-600',
    href: '/advanced-it-infrastructure-services',
    features: ['Quantum Cloud', 'Edge Computing', 'Zero Trust Security']
  },
  {
    title: 'Innovative Business Solutions',
    description: 'AI-powered business intelligence, marketing, sales, and HR solutions',
    services: innovativeBusinessSolutions2025,
    icon: Target,
    color: 'from-green-500 to-emerald-600',
    href: '/innovative-business-solutions',
    features: ['Business Intelligence', 'Marketing Automation', 'Sales Intelligence']
  }
];

const pricingTiers = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'Perfect for small businesses and startups',
    features: [
      'Basic AI automation',
      'Standard support',
      'Core features',
      'Email support',
      'Basic integrations'
    ],
    color: 'from-blue-500 to-cyan-600',
    popular: false
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'Ideal for growing businesses',
    features: [
      'Advanced AI automation',
      'Priority support',
      'All features',
      'Phone & email support',
      'Advanced integrations',
      'Custom workflows'
    ],
    color: 'from-purple-500 to-pink-600',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$999',
    period: '/month',
    description: 'For large organizations',
    features: [
      'Full AI automation suite',
      '24/7 dedicated support',
      'Custom development',
      'Dedicated account manager',
      'White-label options',
      'SLA guarantees'
    ],
    color: 'from-green-500 to-emerald-600',
    popular: false
  }
];

export default function ComprehensiveServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'low' && parseInt(service.price.replace(/[^0-9]/g, '')) < 500) ||
                        (priceRange === 'medium' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 500 && parseInt(service.price.replace(/[^0-9]/g, '')) < 2000) ||
                        (priceRange === 'high' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 2000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const uniqueCategories = [...new Set(allServices.map(service => service.category))];

  return (
    <Layout>
      <Head>
        <title>Comprehensive Services Showcase 2025 - Zion Tech Group</title>
        <meta name="description" content="Complete portfolio of all technology services including AI, quantum computing, enterprise IT, micro SAAS, and innovative business solutions. Find the perfect service for your needs." />
        <meta name="keywords" content="technology services, AI services, quantum computing, enterprise IT, micro SAAS, business solutions, Zion Tech Group" />
        <meta property="og:title" content="Comprehensive Services Showcase 2025 - Zion Tech Group" />
        <meta property="og:description" content="Complete portfolio of all technology services including AI, quantum computing, enterprise IT, micro SAAS, and innovative business solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/comprehensive-services-showcase-2025" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services-showcase-2025" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Comprehensive Services Showcase 2025
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our complete portfolio of revolutionary technology services designed to transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Explore All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href={`tel:${contactInfo.mobile}`} className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-cyan-500/30 hover:bg-white/20 transition-all duration-300">
                <Phone className="mr-2 w-5 h-5" />
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section id="search" className="py-12 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  {uniqueCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Price Filter */}
              <div>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="all">All Prices</option>
                  <option value="low">Under $500/month</option>
                  <option value="medium">$500 - $2,000/month</option>
                  <option value="high">Over $2,000/month</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section id="categories" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services organized by category
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <Link href={category.href}>
                  <div className={`${category.color} p-1 rounded-xl`}>
                    <div className="bg-gray-900 rounded-xl p-6 h-full hover:bg-gray-800 transition-colors duration-300">
                      <div className="text-center">
                        <div className={`${category.color} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <category.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                        <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                        <div className="space-y-2">
                          {category.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-xs text-gray-300">
                              <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 text-cyan-400 text-sm font-semibold">
                          {category.services.length} Services →
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              All Services ({filteredServices.length})
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our complete collection of technology services
            </p>
          </motion.div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setPriceRange('all');
                }}
                className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className={`${service.color} p-1 rounded-xl`}>
                    <div className="bg-gray-900 rounded-xl p-6 h-full">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl">{service.icon}</span>
                        {service.popular && (
                          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">{service.name}</h4>
                      <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-white">{service.price}</span>
                        <span className="text-gray-400">{service.period}</span>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <Link
                          href={service.link}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                        >
                          Learn More
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                        <Link
                          href={`tel:${contactInfo.mobile}`}
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                        >
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold px-4 py-2 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`${tier.color} p-1 rounded-xl`}>
                  <div className="bg-gray-900 rounded-xl p-6 h-full">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-white">{tier.price}</span>
                        <span className="text-gray-400">{tier.period}</span>
                      </div>
                      <p className="text-gray-300 mb-6">{tier.description}</p>
                      <ul className="space-y-3 mb-8">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`tel:${contactInfo.mobile}`}
                        className={`inline-flex items-center justify-center w-full px-6 py-3 ${tier.color} text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300`}
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of organizations that have already revolutionized their operations with our technology services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now: {contactInfo.mobile}
              </Link>
              <Link
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-cyan-500/30 hover:bg-white/20 transition-all duration-300"
              >
                <Mail className="mr-2 w-5 h-5" />
                Email Us
              </Link>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-2">📍 {contactInfo.address}</p>
              <p className="text-gray-300">🌐 {contactInfo.website}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}