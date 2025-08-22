import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Star, TrendingUp, Users, Award, Zap, Brain, Atom, Shield, Rocket, Target,
  Search, Filter, ArrowRight, Phone, Mail, MapPin, Globe, Cpu, Lock, Cloud,
  BarChart3, Settings, Eye, Clock, Heart, Lightbulb, CheckCircle, ChevronDown
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { cuttingEdgeAIServices2025 } from '../data/2025-cutting-edge-ai-services';
import { cuttingEdgeITInfrastructure2025 } from '../data/2025-cutting-edge-it-infrastructure';
import { cuttingEdgeMicroSaas2025 } from '../data/2025-cutting-edge-micro-saas';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const heroStats = [
  { label: 'Cutting-Edge Services', value: '15+', icon: <Star className="w-5 h-5" /> },
  { label: 'AI-Powered Solutions', value: '100%', icon: <Brain className="w-5 h-5" /> },
  { label: 'Success Rate', value: '99.9%', icon: <Award className="w-5 h-5" /> },
  { label: 'ROI Average', value: '500%', icon: <TrendingUp className="w-5 h-5" /> }
];

const serviceCategories = [
  {
    title: 'AI & Machine Learning',
    description: 'Revolutionary AI services with consciousness and emotional intelligence',
    services: cuttingEdgeAIServices2025,
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    count: cuttingEdgeAIServices2025.length
  },
  {
    title: 'IT Infrastructure',
    description: 'Next-generation infrastructure with quantum computing and edge computing',
    services: cuttingEdgeITInfrastructure2025,
    icon: Cloud,
    color: 'from-blue-500 to-cyan-600',
    count: cuttingEdgeITInfrastructure2025.length
  },
  {
    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    services: cuttingEdgeMicroSaas2025,
    icon: Rocket,
    color: 'from-teal-500 to-emerald-600',
    count: cuttingEdgeMicroSaas2025.length
  }
];

const allServices = [
  ...cuttingEdgeAIServices2025,
  ...cuttingEdgeITInfrastructure2025,
  ...cuttingEdgeMicroSaas2025
];

export default function CuttingEdgeServices2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
    
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.popular ? 1 : -1;
      case 'price-low':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'price-high':
        return parseFloat(b.price.replace('$', '').replace(',', '')) - parseFloat(a.price.replace('$', '').replace(',', ''));
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <Layout>
      <Head>
        <title>Cutting-Edge Services 2025 | Zion Tech Group</title>
        <meta name="description" content="Discover our revolutionary cutting-edge AI, IT infrastructure, and micro SAAS services for 2025. Transform your business with next-generation technology solutions." />
        <meta name="keywords" content="AI services, IT infrastructure, micro SAAS, quantum computing, edge computing, blockchain, cybersecurity, Zion Tech Group" />
        <meta property="og:title" content="Cutting-Edge Services 2025 | Zion Tech Group" />
        <meta property="og:description" content="Revolutionary technology services for the future. AI, quantum computing, edge computing, and more." />
        <meta property="og:url" content="https://ziontechgroup.com/cutting-edge-services-2025" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Cutting-Edge Services 2025
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary AI, quantum computing, and next-generation infrastructure solutions that will transform your business and propel you into the future.
            </p>
            
            {/* Hero Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
                >
                  <div className="flex items-center justify-center mb-3">
                    <div className="text-cyan-400">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Phone className="mr-2 w-5 h-5" />
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cutting-edge services are organized into three revolutionary categories, each designed to transform different aspects of your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div className={`bg-gradient-to-br ${category.color} p-8 rounded-3xl h-full transform transition-all duration-500 group-hover:scale-105`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl">{React.createElement(category.icon, { className: "w-12 h-12 text-white" })}</div>
                    <div className="bg-white/20 backdrop-blur-lg px-3 py-1 rounded-full text-sm text-white font-semibold">
                      {category.count} Services
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-white/90 mb-6">{category.description}</p>
                  <div className="space-y-3">
                    {category.services.slice(0, 3).map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center text-white/80">
                        <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                        <span className="text-sm">{service.name}</span>
                      </div>
                    ))}
                  </div>
                  {category.services.length > 3 && (
                    <div className="mt-4 text-white/60 text-sm">
                      +{category.services.length - 3} more services
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              All Cutting-Edge Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our complete portfolio of revolutionary services designed to transform your business operations and drive unprecedented growth.
            </p>
          </motion.div>

          {/* Search and Filter Controls */}
          <div className="mb-12 space-y-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div className="flex gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="all">All Categories</option>
                  <option value="AI">AI & Machine Learning</option>
                  <option value="IT">IT Infrastructure</option>
                  <option value="SAAS">Micro SAAS</option>
                </select>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="popular">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
            <div className="text-center text-gray-400">
              Showing {filteredServices.length} of {allServices.length} services
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 h-full border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-4xl">{service.icon}</div>
                    {service.popular && (
                      <div className="bg-gradient-to-r from-pink-500 to-purple-500 px-3 py-1 rounded-full text-xs text-white font-semibold">
                        Popular
                      </div>
                    )}
                  </div>

                  {/* Service Info */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline mb-6">
                    <span className="text-3xl font-bold text-white">{service.price}</span>
                    <span className="text-gray-400 ml-1">{service.period}</span>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-gray-500 text-sm">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  {/* Service Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span>{service.rating}</span>
                      <span className="mx-1">•</span>
                      <span>{service.reviews} reviews</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{service.customers}+ customers</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={service.link}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-400 mb-8">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSortBy('popular');
                }}
                className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-2xl hover:bg-cyan-600 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our cutting-edge services are designed to propel your business into the future. 
              Get in touch with our experts to discuss your specific needs and discover how we can help you achieve unprecedented growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                <Phone className="mr-2 w-5 h-5" />
                Contact Us
              </Link>
              <a href={`tel:${contactInfo.mobile}`} className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Phone className="mr-2 w-5 h-5" />
                {contactInfo.mobile}
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">{contactInfo.mobile}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">{contactInfo.email}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <MapPin className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300 text-sm">{contactInfo.address}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}