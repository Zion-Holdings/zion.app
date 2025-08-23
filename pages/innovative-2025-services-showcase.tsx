import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Database, Cloud, Lock, Globe,
  Star, Users, TrendingUp, Zap, Sparkles
} from 'lucide-react';

// Import our new innovative services
import { innovative2025MicroSaasExpansion } from '../data/innovative-2025-micro-saas-expansion';
import { innovative2025ITServicesExpansion } from '../data/innovative-2025-it-services-expansion';
import { innovative2025AIServicesExpansion } from '../data/innovative-2025-ai-services-expansion';

// Combine all innovative services
const allInnovativeServices = [
  ...innovative2025MicroSaasExpansion,
  ...innovative2025ITServicesExpansion,
  ...innovative2025AIServicesExpansion
];

const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of innovative services'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: <Target className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    description: 'Innovative business solutions'
  },
  {
    id: 'it-services',
    name: 'IT Services',
    icon: <Building className="w-6 h-6" />,
    color: 'from-blue-500 to-purple-500',
    description: 'Enterprise IT solutions and infrastructure'
  },
  {
    id: 'ai-services',
    name: 'AI Services',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
    description: 'Revolutionary AI and machine learning'
  },
  {
    id: 'quantum',
    name: 'Quantum Computing',
    icon: <Atom className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Quantum-enhanced solutions'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500',
    description: 'Advanced security solutions'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: <Heart className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Healthcare and biotech solutions'
  },
  {
    id: 'finance',
    name: 'Financial Tech',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'from-yellow-500 to-amber-500',
    description: 'Financial technology solutions'
  }
];

export default function Innovative2025ServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');

  // Filter services based on category and search
  const filteredServices = allInnovativeServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      (selectedCategory === 'quantum' && service.name.toLowerCase().includes('quantum')) ||
      (selectedCategory === 'cybersecurity' && service.category.toLowerCase().includes('security')) ||
      (selectedCategory === 'healthcare' && service.category.toLowerCase().includes('health')) ||
      (selectedCategory === 'finance' && service.category.toLowerCase().includes('financial'));
    
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return a.price.monthly - b.price.monthly;
      case 'rating':
        return b.rating - a.rating;
      case 'popularity':
        return b.customers - a.customers;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Innovative 2025 Services Showcase - Zion Tech Group"
        description="Discover our revolutionary 2025 services portfolio featuring quantum computing, AI-powered solutions, and cutting-edge micro SAAS platforms. Transform your business with next-generation technology."
        keywords={["innovative services 2025", "quantum computing", "AI services", "micro SAAS", "IT solutions", "cybersecurity", "healthcare AI", "financial technology"]}
        image="https://ziontechgroup.com/og-innovative-2025-services.jpg"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-yellow-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Innovative 2025
              </h1>
              <Sparkles className="w-8 h-8 text-yellow-400 ml-3" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
              Services Showcase
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our revolutionary portfolio of quantum-enhanced, AI-powered, and cutting-edge micro SAAS solutions. 
              Transform your business with next-generation technology that's already shaping the future.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-green-400 mr-2" />
                {allInnovativeServices.length}+ Innovative Services
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-green-400 mr-2" />
                Quantum Computing Integration
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-green-400 mr-2" />
                AI-Powered Solutions
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-green-400 mr-2" />
                Production Ready
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Controls Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-6 mb-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-lg transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white/10 text-gray-400 hover:bg-white/20'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-lg transition-all ${
                  viewMode === 'list' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white/10 text-gray-400 hover:bg-white/20'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="popularity">Sort by Popularity</option>
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
            </select>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.icon}
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">
            {filteredServices.length} Innovative Services Found
          </h3>
          <p className="text-gray-400">
            Discover cutting-edge solutions that combine quantum computing, AI, and innovative technology
          </p>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    {service.popular && (
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-bold">
                        POPULAR
                      </div>
                    )}
                  </div>

                  {/* Service Info */}
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {service.name}
                  </h4>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {service.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-white">
                      ${service.price.monthly}
                      <span className="text-sm text-gray-400 font-normal">/month</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      ${service.price.yearly}/year (save ${service.price.monthly * 12 - service.price.yearly})
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {service.rating} ({service.reviews} reviews)
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-blue-400 mr-1" />
                      {service.customers.toLocaleString()}+ users
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold text-center block hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Service Icon and Basic Info */}
                    <div className="flex items-start gap-4">
                      <div className="text-5xl">{service.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {service.name}
                          </h4>
                          {service.popular && (
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-bold">
                              POPULAR
                            </div>
                          )}
                        </div>
                        <p className="text-gray-300 mb-3">
                          {service.tagline}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            {service.rating} ({service.reviews} reviews)
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 text-blue-400 mr-1" />
                            {service.customers.toLocaleString()}+ users
                          </div>
                          <div className="flex items-center">
                            <Zap className="w-4 h-4 text-green-400 mr-1" />
                            {service.price.setupTime} setup
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Price and Features */}
                    <div className="lg:w-80">
                      <div className="mb-4">
                        <div className="text-3xl font-bold text-white">
                          ${service.price.monthly}
                          <span className="text-sm text-gray-400 font-normal">/month</span>
                        </div>
                        <div className="text-sm text-gray-400">
                          ${service.price.yearly}/year (save ${service.price.monthly * 12 - service.price.yearly})
                        </div>
                      </div>

                      {/* Features Preview */}
                      <div className="mb-4">
                        <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                        <div className="space-y-1">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-300">
                              <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                              <span className="line-clamp-1">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <a
                        href={service.link}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold text-center block hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 inline ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-12 border border-white/20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Join thousands of forward-thinking companies already leveraging our innovative 2025 services. 
              Get started today and experience the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="bg-white/10 text-white py-4 px-8 rounded-xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Call +1 (302) 464-0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>Contact: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
