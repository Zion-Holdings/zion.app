import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Star, ArrowRight, CheckCircle, 
  Brain, Atom, Shield, Rocket, Target, Cloud,
  Phone, Mail, MapPin, Globe, Users, Award,
  TrendingUp, Zap, Lock, Database, Network, Server
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services';
import { innovativeAIServicesEnhanced2025 } from '../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025 } from '../data/2025-innovative-it-services-enhanced';
import { emergingTechServicesEnhanced2025 } from '../data/2025-emerging-tech-services-enhanced';
import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services';
import { advancedITInfrastructureServices2025 } from '../data/2025-advanced-it-infrastructure-services';
import { innovativeBusinessSolutions2025 } from '../data/2025-innovative-business-solutions';
import { ultimateInnovativeServices2025 } from '../data/2025-ultimate-innovative-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Combine all services
const allServices = [
  ...ultimateInnovativeServices2025,
  ...innovativeAIServicesEnhanced2025,
  ...innovativeRealMicroSaasServices2025,
  ...innovativeITServicesEnhanced2025,
  ...emergingTechServicesEnhanced2025,
  ...advancedAIAutomationServices2025,
  ...advancedITInfrastructureServices2025,
  ...innovativeBusinessSolutions2025
];

// Service categories for filtering
const serviceCategories = [
  { id: 'all', name: 'All Services', icon: Globe, color: 'from-cyan-500 to-blue-600' },
  { id: 'ai-consciousness', name: 'AI & Consciousness', icon: Brain, color: 'from-violet-500 to-purple-600' },
  { id: 'quantum-emerging', name: 'Quantum & Emerging Tech', icon: Atom, color: 'from-indigo-500 to-blue-600' },
  { id: 'enterprise-it', name: 'Enterprise IT', icon: Shield, color: 'from-blue-500 to-cyan-600' },
  { id: 'micro-saas', name: 'Micro SAAS', icon: Rocket, color: 'from-teal-500 to-emerald-600' },
  { id: 'ai-automation', name: 'AI Automation', icon: Brain, color: 'from-emerald-500 to-teal-600' },
  { id: 'it-infrastructure', name: 'IT Infrastructure', icon: Cloud, color: 'from-indigo-500 to-purple-600' },
  { id: 'business-solutions', name: 'Business Solutions', icon: Target, color: 'from-green-500 to-emerald-600' }
];

export default function ComprehensiveServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || 
                             service.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
      
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'price-low':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'price-high':
          return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        default:
          return 0;
      }
    });

  return (
    <Layout>
      <Head>
        <title>Comprehensive Services Showcase 2025 | Zion Tech Group</title>
        <meta name="description" content="Explore our complete portfolio of innovative technology services including AI, quantum computing, autonomous systems, and more. Find the perfect solution for your business needs." />
        <meta name="keywords" content="technology services, AI services, quantum computing, autonomous systems, business solutions, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services-showcase-2025" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-cyan-900/20 to-blue-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              <span className="text-white">Services Showcase</span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-300/80 max-w-4xl mx-auto leading-relaxed">
              Discover our complete portfolio of revolutionary technology services. From AI consciousness 
              to quantum computing, we have solutions that define the future of technology.
            </p>
            <div className="flex items-center justify-center space-x-4 text-cyan-300/70">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5" />
                <span>{allServices.length}+ Services</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>1000+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span>99.9% Success Rate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-black border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-900/80 border border-cyan-500/30 rounded-lg text-white placeholder-cyan-300/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-400 text-cyan-300'
                      : 'bg-gray-900/80 border-cyan-500/30 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-200'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-cyan-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-gray-900/80 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-all duration-200"
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-cyan-300/70">
              Showing {filteredServices.length} of {allServices.length} services
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  {/* Service Icon and Popular Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    {service.popular && (
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  {/* Service Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200 line-clamp-2">
                        {service.name}
                      </h3>
                      <p className="text-cyan-300/70 text-sm leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    {/* Category */}
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-xs text-cyan-300/60 uppercase tracking-wide">
                        {service.category}
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div className="text-xl font-bold text-cyan-400">
                        {service.price}
                        <span className="text-sm text-gray-400 font-normal">{service.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{service.rating}</span>
                        <span className="text-xs text-gray-500">({service.reviews})</span>
                      </div>
                    </div>

                    {/* Features Preview */}
                    <div className="space-y-2">
                      {service.features.slice(0, 2).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-cyan-400" />
                          <span className="text-xs text-gray-300 line-clamp-1">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 2 && (
                        <div className="text-xs text-cyan-400/70">
                          +{service.features.length - 2} more features
                        </div>
                      )}
                    </div>

                    {/* CTA */}
                    <Link
                      href={service.link}
                      className="group/btn w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-200"
                    >
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-cyan-300/70 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-black to-blue-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Transform Your
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Business?
              </span>
            </h2>
            <p className="text-xl text-cyan-300/80 max-w-2xl mx-auto">
              Our revolutionary technology services are designed to drive innovation and accelerate your business growth. 
              Get started today and join the future of technology.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25"
              >
                <span className="flex items-center space-x-2">
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>
              <Link
                href="/pricing"
                className="group px-8 py-4 border-2 border-cyan-500/50 rounded-xl text-cyan-400 font-semibold text-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105"
              >
                <span>View Pricing</span>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="pt-8 border-t border-cyan-500/20">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-cyan-300/70">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}