import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List, Filter, Star, TrendingUp, 
  Brain, Atom, Shield, Target, Rocket, Heart, 
  Building, Cpu, ShoppingCart, Users, GraduationCap,
  ArrowRight, Check, Palette, Truck, Globe, Zap,
  Phone, Mail, MapPin
} from 'lucide-react';

// Import our new innovative services
import { innovativeServicesExpansion2025 } from '../data/2025-innovative-services-expansion';
import { emergingTechServices2025 } from '../data/2025-emerging-tech-services';
import { specializedIndustryServices2025 } from '../data/2025-specialized-industry-services';

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Combine all new services
const allNewServices = [
  ...innovativeServicesExpansion2025,
  ...emergingTechServices2025,
  ...specializedIndustryServices2025
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
    id: 'ai-data',
    name: 'AI & Data',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
    description: 'Artificial intelligence and data analytics solutions'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-red-500 to-orange-500',
    description: 'Advanced security and compliance solutions'
  },
  {
    id: 'devops-infrastructure',
    name: 'DevOps & Infrastructure',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Development operations and infrastructure automation'
  },
  {
    id: 'customer-experience',
    name: 'Customer Experience',
    icon: <Heart className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Customer experience and support solutions'
  },
  {
    id: 'fintech',
    name: 'FinTech',
    icon: <Building className="w-6 h-6" />,
    color: 'from-yellow-500 to-orange-500',
    description: 'Financial technology and compliance solutions'
  },
  {
    id: 'healthcare-biotech',
    name: 'Healthcare & Biotech',
    icon: <Heart className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500',
    description: 'Healthcare technology and biotechnology solutions'
  },
  {
    id: 'ecommerce-retail',
    name: 'E-commerce & Retail',
    icon: <ShoppingCart className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    description: 'E-commerce optimization and retail solutions'
  },
  {
    id: 'supply-chain',
    name: 'Supply Chain & Logistics',
    icon: <Truck className="w-6 h-6" />,
    color: 'from-green-500 to-blue-500',
    description: 'Supply chain optimization and logistics solutions'
  },
  {
    id: 'education-research',
    name: 'Education & Research',
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'from-yellow-500 to-orange-500',
    description: 'Educational technology and research solutions'
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    icon: <Building className="w-6 h-6" />,
    color: 'from-blue-500 to-green-500',
    description: 'Real estate technology and analytics solutions'
  },
  {
    id: 'legal-compliance',
    name: 'Legal & Compliance',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-gray-500 to-blue-500',
    description: 'Legal technology and compliance automation'
  },
  {
    id: 'marketing-advertising',
    name: 'Marketing & Advertising',
    icon: <Target className="w-6 h-6" />,
    color: 'from-pink-500 to-purple-500',
    description: 'Marketing intelligence and advertising solutions'
  },
  {
    id: 'hr-talent',
    name: 'HR & Talent',
    icon: <Users className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    description: 'Human resources and talent management solutions'
  },
  {
    id: 'quantum-emerging',
    name: 'Quantum & Emerging Tech',
    icon: <Atom className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Quantum computing and breakthrough technologies'
  },
  {
    id: 'space-metaverse',
    name: 'Space & Metaverse',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-pink-500 to-rose-500',
    description: 'Space technology and metaverse solutions'
  },
  {
    id: 'iot-edge',
    name: 'IoT & Edge Computing',
    icon: <Globe className="w-6 h-6" />,
    color: 'from-green-500 to-blue-500',
    description: 'Internet of Things and edge computing solutions'
  },
  {
    id: 'ar-vr',
    name: 'AR/VR & Metaverse',
    icon: <Palette className="w-6 h-6" />,
    color: 'from-pink-500 to-purple-500',
    description: 'Augmented reality and virtual reality solutions'
  },
  {
    id: 'autonomous-systems',
    name: 'Autonomous Systems',
    icon: <Cpu className="w-6 h-6" />,
    color: 'from-gray-500 to-blue-500',
    description: 'Autonomous systems and robotics solutions'
  },
  {
    id: 'biotechnology',
    name: 'Biotechnology',
    icon: <Heart className="w-6 h-6" />,
    color: 'from-green-500 to-blue-500',
    description: 'Synthetic biology and biotechnology solutions'
  },
  {
    id: 'energy-sustainability',
    name: 'Energy & Sustainability',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-yellow-500 to-green-500',
    description: 'Smart energy and sustainability solutions'
  },
  {
    id: 'transportation-mobility',
    name: 'Transportation & Mobility',
    icon: <Truck className="w-6 h-6" />,
    color: 'from-blue-500 to-green-500',
    description: 'Intelligent transportation and mobility solutions'
  },
  {
    id: 'manufacturing-industry',
    name: 'Manufacturing & Industry 4.0',
    icon: <Cpu className="w-6 h-6" />,
    color: 'from-gray-500 to-blue-500',
    description: 'Smart manufacturing and industrial automation'
  }
];

const sortOptions = [
  { value: 'name', label: 'Name A-Z' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'newest', label: 'Newest First' },
  { value: 'rating', label: 'Highest Rated' }
];

export default function InnovativeServicesShowcase2025() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 24;

  // Filter services based on search and category
  const filteredServices = allNewServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedCategory === 'all') return matchesSearch;
    
    const serviceCategory = service.category.toLowerCase();
    const categoryName = categories.find(cat => cat.id === selectedCategory)?.name.toLowerCase();
    
    return matchesSearch && serviceCategory.includes(categoryName || '');
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price-low':
        return (parseInt(a.price.replace(/[^0-9]/g, '')) || 0) - 
               (parseInt(b.price.replace(/[^0-9]/g, '')) || 0);
      case 'price-high':
        return (parseInt(b.price.replace(/[^0-9]/g, '')) || 0) - 
               (parseInt(a.price.replace(/[^0-9]/g, '')) || 0);
      case 'newest':
        return new Date(b.launchDate || '2020-01-01').getTime() - 
               new Date(a.launchDate || '2020-01-01').getTime();
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'popular':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedServices.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentServices = sortedServices.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Innovative Services Showcase - Zion Tech Group"
        description="Discover our comprehensive portfolio of innovative micro SAAS, IT, and AI services for 2025. Cutting-edge solutions across all industries."
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
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                2025 Innovative Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge micro SAAS, IT, and AI services. 
              Real solutions for real businesses, powered by the latest technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-white">
                <Check className="w-5 h-5 text-green-400" />
                <span>{allNewServices.length}+ Services</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>4.8+ Average Rating</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <span>Real ROI Results</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white/10 backdrop-blur-sm border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Phone className="w-6 h-6 text-blue-400" />
              <span className="text-white font-medium">{contact.mobile}</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Mail className="w-6 h-6 text-purple-400" />
              <span className="text-white font-medium">{contact.email}</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-6 h-6 text-green-400" />
              <span className="text-white font-medium">{contact.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex-shrink-0">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id} className="bg-gray-800 text-white">
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Options */}
            <div className="flex-shrink-0">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-blue-500 focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex-shrink-0">
              <div className="flex bg-white/20 rounded-xl p-1 border border-white/30">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentServices.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 text-xl mb-4">No services found</div>
            <div className="text-gray-500">Try adjusting your search or filter criteria</div>
          </div>
        ) : (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {currentServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                          POPULAR
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-gray-400 text-sm">{service.period}</div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-white text-sm">{service.rating}</span>
                        <span className="text-gray-400 text-sm">({service.reviews})</span>
                      </div>
                      <div className="text-gray-400 text-sm">{service.customers} customers</div>
                    </div>
                    
                    <a
                      href={service.link}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-4 rounded-xl font-medium text-center block hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                    >
                      Learn More
                    </a>
                  </div>
                ) : (
                  // List View
                  <div className="flex-1 p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl flex-shrink-0">{service.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                          {service.popular && (
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                              POPULAR
                            </span>
                          )}
                        </div>
                        <p className="text-gray-300 text-lg mb-3">{service.tagline}</p>
                        <p className="text-gray-400 mb-4">{service.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="text-white font-semibold mb-2">Key Features</h4>
                            <ul className="space-y-1">
                              {service.features.slice(0, 4).map((feature, idx) => (
                                <li key={idx} className="flex items-center space-x-2">
                                  <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                                  <span className="text-gray-300 text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-white font-semibold mb-2">Details</h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-400">Price:</span>
                                <span className="text-white">{service.price}{service.period}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Category:</span>
                                <span className="text-white">{service.category}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Rating:</span>
                                <span className="text-white">{service.rating}/5 ({service.reviews} reviews)</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Customers:</span>
                                <span className="text-white">{service.customers}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-400">
                            ROI: {service.roi}
                          </div>
                          <a
                            href={service.link}
                            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-6 rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-white/10 text-white rounded-lg border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    currentPage === page
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-white/10 text-white rounded-lg border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our innovative services are designed to drive real results. 
              Get in touch to discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contact.mobile}`}
                className="bg-white text-blue-600 py-4 px-8 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Call {contact.mobile}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="border-2 border-white text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}