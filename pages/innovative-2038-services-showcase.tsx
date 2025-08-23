import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter, Star, TrendingUp,
  Brain, Atom, Shield, Target, Rocket, ArrowRight,
  Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Globe, Zap, Users, Award
} from 'lucide-react';

// Import our new innovative 2038 services
import { innovative2038MicroSaasExpansions } from '../data/innovative-2038-micro-saas-expansions';
import { innovative2038ITServicesExpansions } from '../data/innovative-2038-it-services-expansions';
import { innovative2038AIServicesExpansions } from '../data/innovative-2038-ai-services-expansions';

// Contact information
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Create unified services array
const allInnovativeServices = [
  ...innovative2038MicroSaasExpansions,
  ...innovative2038ITServicesExpansions,
  ...innovative2038AIServicesExpansions
];

const categories = [
  {
    id: 'all',
    name: 'All Innovative Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Complete portfolio of innovative 2038 services'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS Solutions',
    icon: <Target className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    description: 'Innovative business solutions and automation'
  },
  {
    id: 'it-services',
    name: 'IT Infrastructure',
    icon: <Building className="w-6 h-6" />,
    color: 'from-blue-500 to-purple-500',
    description: 'Advanced IT solutions and infrastructure'
  },
  {
    id: 'ai-services',
    name: 'AI & Consciousness',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
    description: 'Revolutionary AI and consciousness technology'
  }
];

const sortOptions = [
  { value: 'popular', label: 'Most Popular', icon: <Star className="w-4 h-4" /> },
  { value: 'trending', label: 'Trending', icon: <TrendingUp className="w-4 h-4" /> },
  { value: 'price-low', label: 'Price: Low to High', icon: <TrendingUp className="w-4 h-4" /> },
  { value: 'price-high', label: 'Price: High to Low', icon: <TrendingUp className="w-4 h-4" /> },
  { value: 'newest', label: 'Newest First', icon: <TrendingUp className="w-4 h-4" /> }
];

export default function Innovative2038ServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [filteredServices, setFilteredServices] = useState(allInnovativeServices);

  useEffect(() => {
    let filtered = allInnovativeServices;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        if (selectedCategory === 'micro-saas') return service.category.includes('Legal') || service.category.includes('Financial') || service.category.includes('Healthcare') || service.category.includes('Supply Chain');
        if (selectedCategory === 'it-services') return service.category.includes('Cloud') || service.category.includes('DevOps') || service.category.includes('Edge') || service.category.includes('Blockchain') || service.category.includes('Data Center');
        if (selectedCategory === 'ai-services') return service.category.includes('AI Consciousness') || service.category.includes('Quantum AI') || service.category.includes('Space') || service.category.includes('Climate') || service.category.includes('Biotechnology');
        return true;
      });
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.rating - a.rating;
        case 'trending':
          return b.customers - a.customers;
        case 'price-low':
          return a.price.monthly - b.price.monthly;
        case 'price-high':
          return b.price.monthly - a.price.monthly;
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        default:
          return 0;
      }
    });

    setFilteredServices(filtered);
  }, [selectedCategory, sortBy, searchQuery]);

  const getServiceCategory = (service: any) => {
    if (service.category.includes('Legal') || service.category.includes('Financial') || service.category.includes('Healthcare') || service.category.includes('Supply Chain')) return 'micro-saas';
    if (service.category.includes('Cloud') || service.category.includes('DevOps') || service.category.includes('Edge') || service.category.includes('Blockchain') || service.category.includes('Data Center')) return 'it-services';
    if (service.category.includes('AI Consciousness') || service.category.includes('Quantum AI') || service.category.includes('Space') || service.category.includes('Climate') || service.category.includes('Biotechnology')) return 'ai-services';
    return 'other';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Innovative 2038 Services Showcase - Zion Tech Group"
        description="Discover revolutionary micro SAAS, IT infrastructure, and AI consciousness services. Leading-edge technology solutions for the future."
        keywords={["innovative services", "micro SAAS", "AI consciousness", "quantum computing", "blockchain", "space technology", "biotechnology"]}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Innovative 2038
              </span>
              <br />
              <span className="text-white">Services Showcase</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              Discover revolutionary micro SAAS solutions, cutting-edge IT infrastructure, and breakthrough AI consciousness technology. 
              Leading the future of technology innovation.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center space-x-2 text-white">
                <Users className="w-5 h-5" />
                <span>500+ Enterprise Clients</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Award className="w-5 h-5" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Zap className="w-5 h-5" />
                <span>24/7 Support</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Ready to Transform Your Business?</h3>
              <p className="text-purple-100">Get in touch with our innovation experts</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">📱</span>
                <a href={`tel:${contactInfo.mobile}`} className="hover:text-purple-200 transition-colors">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">✉️</span>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-purple-200 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">📍</span>
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search innovative services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white/10 text-gray-400 hover:bg-white/20'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white/10 text-gray-400 hover:bg-white/20'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg scale-105'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:scale-105'
                }`}
              >
                <div className="flex items-center space-x-2">
                  {category.icon}
                  <span className="font-medium">{category.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${sortBy}-${searchQuery}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  viewMode === 'list' ? 'flex items-center space-x-6' : ''
                }`}
              >
                {viewMode === 'list' ? (
                  // List View
                  <>
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl`}>
                        {service.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-white truncate">{service.name}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-yellow-400">★</span>
                          <span className="text-white">{service.rating}</span>
                          <span className="text-gray-400">({service.reviews})</span>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-3">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>📅 {service.launchDate}</span>
                          <span>👥 {service.customers} customers</span>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">${service.price.monthly}</div>
                          <div className="text-sm text-gray-400">per month</div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  // Grid View
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-xl`}>
                        {service.icon}
                      </div>
                      {service.popular && (
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium rounded-full">
                          Popular
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Category:</span>
                        <span className="text-white text-sm font-medium">{service.category}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Rating:</span>
                        <div className="flex items-center space-x-1">
                          <span className="text-yellow-400">★</span>
                          <span className="text-white text-sm">{service.rating}</span>
                          <span className="text-gray-400 text-sm">({service.reviews})</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Customers:</span>
                        <span className="text-white text-sm font-medium">{service.customers.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="border-t border-white/10 pt-4 mb-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white">
                          ${typeof service.price.monthly === 'number' ? service.price.monthly : 'Contact'}
                        </div>
                        <div className="text-gray-400 text-sm">per month</div>
                        {service.price.yearly && typeof service.price.yearly === 'number' && (
                          <div className="text-xs text-gray-500 mt-1">
                            ${service.price.yearly.toLocaleString()}/year (save ${(service.price.monthly * 12 - service.price.yearly).toLocaleString()})
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      {service.price.setupTime && (
                        <div className="text-xs text-gray-400">
                          <span className="font-medium">Setup:</span> {service.price.setupTime}
                        </div>
                      )}
                      {service.price.trialDays && (
                        <div className="text-xs text-gray-400">
                          <span className="font-medium">Trial:</span> {service.price.trialDays} days
                        </div>
                      )}
                    </div>

                    <a
                      href={service.link}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg font-medium text-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-xl mb-4">No services found</div>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Lead the Future of Technology?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join hundreds of forward-thinking organizations already transforming their business with our innovative 2038 services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.mobile}`}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <span>📞 Call Now</span>
              <span>{contactInfo.mobile}</span>
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center space-x-2"
            >
              <span>✉️ Email Us</span>
              <span>{contactInfo.email}</span>
            </a>
          </div>
          <div className="mt-8 text-purple-100">
            <p className="text-lg font-medium mb-2">📍 Visit Our Office</p>
            <p className="text-base">{contactInfo.address}</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 text-sm">
                Leading the future of technology innovation with cutting-edge micro SAAS, IT infrastructure, and AI consciousness solutions.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📱 {contactInfo.mobile}</p>
                <p>✉️ {contactInfo.email}</p>
                <p>📍 {contactInfo.address}</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• Micro SAAS Solutions</p>
                <p>• IT Infrastructure</p>
                <p>• AI & Consciousness</p>
                <p>• Quantum Computing</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• Documentation</p>
                <p>• API Reference</p>
                <p>• Support Center</p>
                <p>• Blog & Updates</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved. Leading innovation in technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}