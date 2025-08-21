import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Star, CheckCircle, ArrowRight, 
  Brain, Atom, Shield, Rocket, Target, Microscope,
  Phone, Mail, MapPin, TrendingUp, Users, Award,
  Zap, Sparkles, Code, BarChart, Lock, Globe,
  Cpu, Database, Cloud, Eye, BarChart3
} from 'lucide-react';
import Link from 'next/link';

// Import the new 2024 services
import { realMicroSaasServices2024 } from '../data/2024-real-micro-saas-services';
import { innovativeITServices2024 } from '../data/2024-innovative-it-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    id: 'ai-services',
    title: '🧠 AI & Machine Learning',
    description: 'Revolutionary AI-powered solutions for business automation and intelligence',
    icon: Brain,
    color: 'from-violet-500 to-purple-500',
    services: realMicroSaasServices2024.filter(s => s.category.includes('AI')),
    gradient: 'from-violet-500/20 to-indigo-500/20'
  },
  {
    id: 'quantum-security',
    title: '⚛️ Quantum & Security',
    description: 'Future-proof quantum-resistant encryption and blockchain solutions',
    icon: Atom,
    color: 'from-indigo-500 to-blue-500',
    services: [
      ...realMicroSaasServices2024.filter(s => s.category.includes('Quantum') || s.category.includes('Blockchain')),
      ...innovativeITServices2024.filter(s => s.category.includes('Security'))
    ],
    gradient: 'from-indigo-500/20 to-cyan-500/20'
  },
  {
    id: 'enterprise-it',
    title: '🏙️ Enterprise IT Solutions',
    description: 'Autonomous operations and intelligent infrastructure management',
    icon: Cpu,
    color: 'from-blue-500 to-cyan-500',
    services: innovativeITServices2024.filter(s => s.category.includes('Enterprise') || s.category.includes('DevOps')),
    gradient: 'from-blue-500/20 to-teal-500/20'
  },
  {
    id: 'api-development',
    title: '🔌 API & Development',
    description: 'Intelligent API management and development tools',
    icon: Code,
    color: 'from-teal-500 to-emerald-500',
    services: innovativeITServices2024.filter(s => s.category.includes('API') || s.category.includes('Development')),
    gradient: 'from-teal-500/20 to-green-500/20'
  },
  {
    id: 'business-analytics',
    title: '💰 Business & Analytics',
    description: 'AI-powered business intelligence and optimization solutions',
    icon: BarChart,
    color: 'from-green-500 to-yellow-500',
    services: realMicroSaasServices2024.filter(s => s.category.includes('Business') || s.category.includes('Analytics')),
    gradient: 'from-green-500/20 to-orange-500/20'
  },
  {
    id: 'marketing-automation',
    title: '📱 Marketing & Automation',
    description: 'Intelligent marketing automation and social media management',
    icon: Target,
    color: 'from-orange-500 to-red-500',
    services: realMicroSaasServices2024.filter(s => s.category.includes('Marketing') || s.category.includes('Social')),
    gradient: 'from-orange-500/20 to-pink-500/20'
  }
];

export default function Services2024Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const filteredServices = serviceCategories.flatMap(category => category.services).filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'low' && parseInt(service.price.replace('$', '')) < 200) ||
                        (priceRange === 'medium' && parseInt(service.price.replace('$', '')) >= 200 && parseInt(service.price.replace('$', '')) < 500) ||
                        (priceRange === 'high' && parseInt(service.price.replace('$', '')) >= 500);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', ''));
      case 'price-high':
        return parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'popularity':
      default:
        return b.popular ? 1 : -1;
    }
  });

  return (
    <>
      <Head>
        <title>2024 Revolutionary Services - Zion Tech Group | AI, Quantum, Enterprise Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's revolutionary 2024 services including AI automation, quantum security, enterprise IT solutions, and innovative micro SAAS platforms." />
        <meta name="keywords" content="AI automation, quantum security, enterprise IT, micro SAAS, business intelligence, marketing automation, API management, DevOps automation" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="2024 Revolutionary Services - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI automation, quantum security, and enterprise IT solutions for 2024 and beyond." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services-2024" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <link rel="canonical" href="https://ziontechgroup.com/services-2024" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  2024 Revolutionary
                </span>
                <br />
                <span className="text-white">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Experience the future of technology with our cutting-edge AI automation, quantum security, 
                and enterprise IT solutions designed for the modern digital landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/pricing-2033"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105"
                >
                  View Pricing
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 rounded-lg transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-black/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-black/50 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
              >
                <option value="all">All Categories</option>
                <option value="ai">AI & Machine Learning</option>
                <option value="quantum">Quantum & Security</option>
                <option value="enterprise">Enterprise IT</option>
                <option value="api">API & Development</option>
                <option value="business">Business & Analytics</option>
                <option value="marketing">Marketing & Automation</option>
              </select>

              {/* Price Filter */}
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-3 bg-black/50 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
              >
                <option value="all">All Prices</option>
                <option value="low">Under $200/month</option>
                <option value="medium">$200-$500/month</option>
                <option value="high">Over $500/month</option>
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-black/50 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
              >
                <option value="popularity">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Service Categories */}
          <div className="space-y-16">
            {serviceCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} mb-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{category.title}</h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service) => (
                    <motion.div
                      key={service.id}
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="group relative bg-black/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300"
                    >
                      {/* Popular Badge */}
                      {service.popular && (
                        <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          ⭐ Most Popular
                        </div>
                      )}

                      {/* Service Icon */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} mb-4`}>
                        <span className="text-2xl">{service.icon}</span>
                      </div>

                      {/* Service Info */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 mb-4 line-clamp-3">{service.description}</p>

                      {/* Price */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                        <div className="text-sm text-gray-500">{service.period}</div>
                      </div>

                      {/* Features Preview */}
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-sm text-cyan-400">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          {service.rating} ({service.reviews} reviews)
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 text-cyan-400 mr-1" />
                          {service.customers.toLocaleString()}+ customers
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Link
                        href={service.link}
                        className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105"
                      >
                        Get Started
                      </Link>

                      {/* Trial Info */}
                      <div className="text-center mt-3 text-sm text-gray-400">
                        {service.trialDays}-day free trial • Setup in {service.setupTime}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/20 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our revolutionary services to accelerate growth, 
              enhance security, and automate operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                href="/pricing-2033"
                className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 rounded-lg transition-all duration-300"
              >
                View All Pricing
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need Help Choosing?
              </h2>
              <p className="text-xl text-gray-300">
                Our experts are here to help you find the perfect solution for your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <a 
                  href={`tel:${contactInfo.mobile}`}
                  className="text-cyan-300 hover:text-cyan-200 transition-colors"
                >
                  {contactInfo.mobile}
                </a>
              </div>
              
              <div className="text-center">
                <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-purple-300 hover:text-purple-200 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="text-center">
                <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-pink-300">{contactInfo.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}