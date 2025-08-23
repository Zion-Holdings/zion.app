import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter, Star, Users, TrendingUp,
  Brain, Atom, Shield, Target, Rocket, Palette, Heart, 
  Truck, GraduationCap, Building, Globe, Zap, Lock,
  ArrowRight, Check, Phone, Mail, MapPin, ExternalLink
} from 'lucide-react';

// Import our new comprehensive services
import { comprehensiveServicesExpansion } from '../data/2025-comprehensive-services-expansion';
import { advancedInnovativeServices } from '../data/2025-advanced-innovative-services';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'popular' | 'price' | 'rating' | 'newest'>('popular');

  // Combine all services
  const allServices = [...comprehensiveServicesExpansion, ...advancedInnovativeServices];

  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.popular ? 1 : -1;
      case 'price':
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      default:
        return 0;
    }
  });

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Comprehensive Services Showcase - Zion Tech Group"
        description="Discover our comprehensive portfolio of innovative micro SAAS, IT, and AI services. From quantum computing to AI-powered solutions, we deliver cutting-edge technology services."
        keywords={["micro SAAS", "IT services", "AI services", "quantum computing", "blockchain", "cybersecurity", "automation", "Zion Tech Group"]}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              2025 Comprehensive
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Services Showcase
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
            >
              Discover our comprehensive portfolio of innovative micro SAAS, IT, and AI services. 
              From quantum computing breakthroughs to AI-powered automation, we deliver cutting-edge 
              technology solutions that drive business transformation.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center gap-2 text-white">
                <Users className="w-5 h-5" />
                <span>Trusted by 2,000+ companies</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>4.8/5 average rating</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span>100% growth YoY</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Ready to Transform Your Business?</h3>
              <p className="text-blue-100">Get in touch with our experts today</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href={`tel:${contactInfo.mobile}`} className="hover:text-blue-200 transition-colors">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-200 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
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
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex gap-4 items-center">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800 text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="popular" className="bg-gray-800 text-white">Most Popular</option>
                <option value="price" className="bg-gray-800 text-white">Price: Low to High</option>
                <option value="rating" className="bg-gray-800 text-white">Highest Rated</option>
                <option value="newest" className="bg-gray-800 text-white">Newest First</option>
              </select>
              
              <div className="flex bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid/List */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {filteredServices.length} Innovative Services Available
            </h2>
            <p className="text-gray-300">
              Discover cutting-edge solutions across {categories.length - 1} categories
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-semibold px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {service.tagline}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-blue-400">
                      {service.price}
                      <span className="text-sm text-gray-400">{service.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm">{service.rating}</span>
                      <span className="text-gray-400 text-sm">({service.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                      {service.category}
                    </span>
                    <a
                      href={service.link}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="text-4xl flex-shrink-0">{service.icon}</div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-1">
                            {service.name}
                          </h3>
                          <p className="text-gray-300 text-sm mb-2">
                            {service.tagline}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-400">
                            {service.price}
                            <span className="text-sm text-gray-400">{service.period}</span>
                          </div>
                          {service.popular && (
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-semibold px-2 py-1 rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features</h4>
                          <div className="space-y-1">
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                                <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">Service Details</h4>
                          <div className="space-y-1 text-sm text-gray-400">
                            <div>Category: {service.category}</div>
                            <div>Setup Time: {service.setupTime}</div>
                            <div>Trial: {service.trialDays} days</div>
                            <div>Rating: {service.rating}/5 ({service.reviews} reviews)</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span className="bg-gray-700 px-2 py-1 rounded">{service.category}</span>
                          <span>Market: {service.marketSize}</span>
                          <span>Growth: {service.growthRate}</span>
                        </div>
                        <a
                          href={service.link}
                          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-gray-600">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our team of experts is ready to help you implement these innovative solutions. 
            Get in touch today to discuss your specific needs and discover how our services 
            can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.mobile}`}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {contactInfo.mobile}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
            <a
              href={contactInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;