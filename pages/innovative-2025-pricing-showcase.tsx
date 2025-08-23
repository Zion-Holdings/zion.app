import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import { 
  ArrowRight, Cpu, Database, Sparkles as SparklesIcon,
  Brain as BrainIcon, Shield as ShieldIcon, Code,
  Check, BarChart3, Phone, Mail, MapPin, Zap
} from 'lucide-react';

// Import our new innovative services
import { innovativeMicroSaasExpansion2025V3 } from '../data/2025-innovative-micro-saas-expansion-v3';
import { innovativeITServicesExpansion2025V3 } from '../data/2025-innovative-it-services-expansion-v3';
import { innovativeAIServicesExpansion2025V3 } from '../data/2025-innovative-ai-services-expansion-v3';

const Innovative2025PricingShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('price');

  // Combine all innovative services
  const allInnovativeServices = [
    ...innovativeMicroSaasExpansion2025V3,
    ...innovativeITServicesExpansion2025V3,
    ...innovativeAIServicesExpansion2025V3
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500', count: allInnovativeServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', count: allInnovativeServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length },
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from-yellow-500 to-orange-500', count: allInnovativeServices.filter(s => s.category.includes('IT') || s.category.includes('Infrastructure')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500', count: allInnovativeServices.filter(s => s.category.includes('Security')).length },
    { id: 'cloud', name: 'Cloud & FinOps', icon: Database, color: 'from-blue-500 to-indigo-500', count: allInnovativeServices.filter(s => s.category.includes('Cloud') || s.category.includes('FinOps')).length },
    { id: 'developer', name: 'Developer Tools', icon: Code, color: 'from-green-500 to-teal-500', count: allInnovativeServices.filter(s => s.category.includes('Developer')).length }
  ];

  const filteredServices = allInnovativeServices.filter(service => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'ai') return service.category.includes('AI') || service.category.includes('Machine Learning');
    if (selectedCategory === 'it') return service.category.includes('IT') || service.category.includes('Infrastructure');
    if (selectedCategory === 'cybersecurity') return service.category.includes('Security');
    if (selectedCategory === 'cloud') return service.category.includes('Cloud') || service.category.includes('FinOps');
    if (selectedCategory === 'developer') return service.category.includes('Developer');
    return true;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price': {
        const priceA = parseFloat(a.price.replace('$', '').replace(',', ''));
        const priceB = parseFloat(b.price.replace('$', '').replace(',', ''));
        return priceA - priceB;
      }
      case 'name': {
        return a.name.localeCompare(b.name);
      }
      case 'popularity': {
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      }
      case 'rating': {
        return b.rating - a.rating;
      }
      default:
        return 0;
    }
  });

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic service access',
        'Email support',
        'Standard features',
        'Community forum access'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-700'
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Full service access',
        'Priority support',
        'Advanced features',
        'API access',
        'Team collaboration',
        'Analytics dashboard'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Everything in Professional',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantees',
        'Custom training',
        'On-premise options'
      ],
      popular: false,
      color: 'from-blue-500 to-indigo-700'
    }
  ];

  const marketInsights = [
    {
      title: 'AI Services Market',
      size: '$25.6B',
      growth: '180% YoY',
      trend: 'Exponential growth in autonomous AI and content generation',
      icon: BrainIcon
    },
    {
      title: 'IT Infrastructure',
      size: '$28.7B',
      growth: '65% YoY',
      trend: 'Multi-cloud and edge computing driving innovation',
      icon: Cpu
    },
    {
      title: 'Cybersecurity',
      size: '$45.2B',
      growth: '75% YoY',
      trend: 'Zero trust and AI-powered security on the rise',
      icon: ShieldIcon
    },
    {
      title: 'Developer Tools',
      size: '$15.8B',
      growth: '55% YoY',
      trend: 'AI-powered development and automation tools',
      icon: Code
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Head>
        <title>Innovative 2025 Pricing Showcase - Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's competitive pricing for innovative 2025 services including AI solutions, IT infrastructure, and micro SAAS platforms. Get transparent pricing and market analysis." />
        <meta name="keywords" content="pricing 2025, AI services pricing, IT infrastructure pricing, micro SAAS pricing, competitive pricing, Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-2025-pricing-showcase" />
      </Head>

      <div className="min-h-screen bg-black text-white overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(120,219,255,0.3),transparent_50%)]"></div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <motion.header 
            className="relative z-20 py-8 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                </Link>
                
                <nav className="hidden md:flex items-center space-x-8">
                  <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                    Services
                  </Link>
                  <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                    Pricing
                  </Link>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                    About
                  </Link>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </nav>

                <div className="flex items-center space-x-4">
                  <Link 
                    href="/contact"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </motion.header>

          {/* Hero Section */}
          <motion.section 
            className="relative z-20 py-20 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="max-w-7xl mx-auto text-center">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Transparent Pricing
                </span>
                <br />
                <span className="text-white">for 2025 Innovation</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Discover competitive pricing for our cutting-edge AI services, advanced IT infrastructure, 
                and revolutionary micro SAAS platforms. Get transparent pricing with no hidden fees.
              </motion.p>

              {/* Pricing Tiers */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {pricingTiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`relative p-8 rounded-2xl border ${
                      tier.popular 
                        ? 'border-purple-500 bg-gradient-to-br from-purple-900/20 to-pink-900/20' 
                        : 'border-gray-700 bg-gray-900/30'
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                          MOST POPULAR
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                      <div className="mb-6">
                        <span className="text-4xl font-bold text-white">{tier.price}</span>
                        <span className="text-gray-400 ml-2">{tier.period}</span>
                      </div>
                      <p className="text-gray-300 mb-8">{tier.description}</p>
                      
                      <ul className="space-y-3 mb-8 text-left">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link
                        href="/contact"
                        className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                          tier.popular
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                            : 'border border-gray-600 text-white hover:border-gray-500'
                        }`}
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* Market Insights */}
          <motion.section 
            className="relative z-20 py-16 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Market Insights & Trends
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Stay ahead of the curve with our analysis of the latest market trends and competitive landscape
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {marketInsights.map((insight, index) => (
                  <motion.div
                    key={insight.title}
                    className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-center mb-4">
                      <insight.icon className="w-12 h-12 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 text-center">{insight.title}</h3>
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-purple-400 mb-1">{insight.size}</div>
                      <div className="text-sm text-green-400 font-semibold">{insight.growth}</div>
                    </div>
                    <p className="text-gray-300 text-sm text-center">{insight.trend}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Services Pricing Grid */}
          <motion.section 
            className="relative z-20 py-16 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Detailed Service Pricing
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Compare our competitive pricing across all innovative 2025 services
                </p>
              </div>

              {/* Filters and Sorting */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                        : 'border-gray-700 text-gray-300 hover:border-gray-600 hover:text-white'
                    }`}
                  >
                    <category.icon className="w-5 h-5" />
                    <span>{category.name}</span>
                    <span className="bg-gray-700 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex justify-center mb-8">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-300">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="price">Price (Low to High)</option>
                    <option value="name">Name (A-Z)</option>
                    <option value="popularity">Popularity</option>
                    <option value="rating">Rating</option>
                  </select>
                </div>
              </div>

              {/* Services Grid */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {sortedServices.map((service) => (
                  <motion.div
                    key={service.id}
                    className="group relative"
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm">
                      {/* Service Header */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl`}>
                            {service.icon}
                          </div>
                          {service.popular && (
                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                              POPULAR
                            </div>
                          )}
                        </div>

                        {/* Service Info */}
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">
                          {service.tagline}
                        </p>

                        {/* Pricing */}
                        <div className="mb-4">
                          <div className="flex items-baseline">
                            <span className="text-3xl font-bold text-white">{service.price}</span>
                            <span className="text-gray-400 ml-2">{service.period}</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            {service.trialDays} days free trial • {service.setupTime} setup
                          </p>
                        </div>

                        {/* Key Features */}
                        <div className="space-y-2 mb-6">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-2">
                              <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Market Position */}
                        <div className="mb-6 p-3 bg-gray-800/50 rounded-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <BarChart3 className="w-4 h-4 text-blue-400" />
                            <span className="text-sm font-semibold text-white">Market Position</span>
                          </div>
                          <p className="text-xs text-gray-300">{service.marketPosition}</p>
                        </div>

                        {/* ROI and Stats */}
                        <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                          <div>
                            <div className="text-lg font-bold text-white">{service.customers}+</div>
                            <div className="text-xs text-gray-400">Customers</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-white">{service.rating}</div>
                            <div className="text-xs text-gray-400">Rating</div>
                          </div>
                        </div>

                        {/* CTA */}
                        <Link
                          href={service.link}
                          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {sortedServices.length === 0 && (
                <motion.div 
                  className="text-center py-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="text-6xl mb-6">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                  <p className="text-gray-400 mb-8">
                    Try adjusting your category filters
                  </p>
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  >
                    View All Services
                  </button>
                </motion.div>
              )}
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section 
            className="relative z-20 py-20 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Contact our team to discuss your needs and get a personalized quote for our innovative 2025 services.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Custom Quote
                </Link>
                <Link
                  href="/services"
                  className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-gray-500 transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.footer 
            className="relative z-20 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Zion Tech Group
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Transforming businesses with innovative technology solutions for the future.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold mb-4">Services</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><Link href="/services" className="hover:text-white transition-colors">AI Services</Link></li>
                    <li><Link href="/services" className="hover:text-white transition-colors">IT Infrastructure</Link></li>
                    <li><Link href="/services" className="hover:text-white transition-colors">Micro SAAS</Link></li>
                    <li><Link href="/services" className="hover:text-white transition-colors">Cybersecurity</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold mb-4">Company</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                    <li><Link href="/team" className="hover:text-white transition-colors">Our Team</Link></li>
                    <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                    <li><Link href="/news" className="hover:text-white transition-colors">News</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold mb-4">Connect</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                    <li><Link href="/support" className="hover:text-white transition-colors">Support</Link></li>
                    <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                    <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-800 text-center">
                <p className="text-gray-400 text-sm">
                  © 2025 Zion Tech Group. All rights reserved. | 
                  <Link href="/privacy" className="hover:text-white transition-colors ml-2">Privacy Policy</Link> | 
                  <Link href="/terms" className="hover:text-white transition-colors ml-2">Terms of Service</Link>
                </p>
              </div>
            </div>
          </motion.footer>
        </div>
      </div>
    </>
  );
};

export default Innovative2025PricingShowcase;