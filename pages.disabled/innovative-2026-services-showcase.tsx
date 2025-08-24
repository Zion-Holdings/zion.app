import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List, Star, Users, Clock, DollarSign,
  Brain, Atom, Target, ArrowRight, Check,
  Building, Globe, Eye, Cpu, Database
} from 'lucide-react';

// Import all 2026 innovative services
import { innovative2026AIServicesAdditions } from '../data/innovative-2026-ai-services-additions';
import { innovative2026ITServicesAdditions } from '../data/innovative-2026-it-services-additions';
import { innovative2026MicroSaasAdditions } from '../data/innovative-2026-micro-saas-additions';
import { innovative2026IndustryAIServices } from '../data/innovative-2026-industry-ai-services';
import { innovative2026EmergingTechServices } from '../data/innovative-2026-emerging-tech-services';

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Combine all services
const allInnovativeServices = [
  ...innovative2026AIServicesAdditions,
  ...innovative2026ITServicesAdditions,
  ...innovative2026MicroSaasAdditions,
  ...innovative2026IndustryAIServices,
  ...innovative2026EmergingTechServices
];

const categories = [
  { id: 'all', name: 'All Services', icon: <Grid className="w-5 h-5" /> },
  { id: 'ai', name: 'AI Services', icon: <Brain className="w-5 h-5" /> },
  { id: 'it', name: 'IT Services', icon: <Cpu className="w-5 h-5" /> },
  { id: 'micro-saas', name: 'Micro SAAS', icon: <Target className="w-5 h-5" /> },
  { id: 'industry', name: 'Industry AI', icon: <Building className="w-5 h-5" /> },
  { id: 'emerging', name: 'Emerging Tech', icon: <Atom className="w-5 h-5" /> }
];

const sortOptions = [
  { value: 'name', label: 'Name A-Z' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'customers', label: 'Most Customers' }
];

export default function Innovative2026ServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');

  // Filter and sort services
  const filteredServices = allInnovativeServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || 
                             service.category.toLowerCase().includes(selectedCategory) ||
                             (selectedCategory === 'ai' && service.category.includes('AI')) ||
                             (selectedCategory === 'it' && service.category.includes('IT')) ||
                             (selectedCategory === 'micro-saas' && service.category.includes('SAAS')) ||
                             (selectedCategory === 'industry' && service.category.includes('Industry')) ||
                             (selectedCategory === 'emerging' && service.category.includes('Emerging'));
      
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'price-high':
          return parseFloat(b.price.replace('$', '').replace(',', '')) - parseFloat(a.price.replace('$', '').replace(',', ''));
        case 'popular':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'rating':
          return b.rating - a.rating;
        case 'customers':
          return b.customers - a.customers;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI')) return <Brain className="w-5 h-5" />;
    if (category.includes('IT')) return <Cpu className="w-5 h-5" />;
    if (category.includes('SAAS')) return <Target className="w-5 h-5" />;
    if (category.includes('Industry')) return <Building className="w-5 h-5" />;
    if (category.includes('Emerging')) return <Atom className="w-5 h-5" />;
    return <Globe className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Innovative 2026 Services Showcase | Zion Tech Group"
        description="Discover our cutting-edge 2026 services including AI, IT, Micro SAAS, Industry AI, and Emerging Technology solutions. Transform your business with innovative technology."
        keywords={["AI services", "IT services", "micro SAAS", "industry AI", "emerging technology", "2026", "innovation", "Zion Tech Group"]}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Innovative 2026
              </span>
              <br />
              Services Showcase
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our cutting-edge portfolio of AI, IT, Micro SAAS, Industry AI, and Emerging Technology solutions. 
              Transform your business with innovative technology designed for the future.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{allInnovativeServices.length}+ Services</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.8+ Average Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>Global Reach</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5" />
              <span>Ready to get started? Contact us today!</span>
            </div>
            <div className="flex items-center gap-6">
              <a href={`tel:${contact.mobile}`} className="flex items-center gap-2 hover:text-purple-200 transition-colors">
                <span>{contact.mobile}</span>
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-purple-200 transition-colors">
                <span>{contact.email}</span>
              </a>
              <a href={contact.website} className="flex items-center gap-2 hover:text-purple-200 transition-colors">
                <span>{contact.website}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/20 text-gray-300 hover:bg-white/30'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Sort and View */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>

              <div className="flex bg-white/20 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">
              {filteredServices.length} Services Found
            </h2>
            <div className="text-gray-400">
              Showing {filteredServices.length} of {allInnovativeServices.length} services
            </div>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-purple-500/50"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{service.icon}</div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Service Info */}
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign className="w-5 h-5 text-green-400" />
                    <span className="text-2xl font-bold text-green-400">{service.price}</span>
                    <span className="text-gray-400">{service.period}</span>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <Check className="w-3 h-3 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{service.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{service.customers}+ customers</span>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="flex items-center gap-2 mb-4">
                    {getCategoryIcon(service.category)}
                    <span className="text-xs text-gray-400">{service.category}</span>
                  </div>

                  {/* CTA */}
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-xl text-center font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Service Icon and Basic Info */}
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-white">{service.name}</h3>
                          {service.popular && (
                            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-gray-300 mb-3">{service.tagline}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span>{service.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{service.customers}+ customers</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{service.reviews} reviews</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Price and Features */}
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="text-center lg:text-right">
                        <div className="flex items-center justify-center lg:justify-end gap-2 mb-2">
                          <DollarSign className="w-5 h-5 text-green-400" />
                          <span className="text-3xl font-bold text-green-400">{service.price}</span>
                          <span className="text-gray-400">{service.period}</span>
                        </div>
                        <div className="text-sm text-gray-400 mb-3">
                          {service.trialDays} days free trial
                        </div>
                        <a
                          href={service.link}
                          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-6 rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 inline-flex items-center gap-2"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>

                      {/* Features List */}
                      <div className="flex-1">
                        <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                          {service.features.slice(0, 6).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                              <Check className="w-3 h-3 text-green-400" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our innovative 2026 services are designed to help you stay ahead of the competition. 
            Contact us today to discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${contact.mobile}`}
              className="bg-white text-purple-600 py-3 px-6 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <span>Call {contact.mobile}</span>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="bg-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}