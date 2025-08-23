import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List, Star, TrendingUp, Zap, Brain, Atom, Shield, 
  Target, Cloud, Cpu, ArrowRight, CheckCircle
} from 'lucide-react';

// Import all our innovative services
import { innovativeAIAutonomousServices2025 } from '../data/2025-innovative-ai-autonomous-services';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { realEnterpriseMicroSaas2025 } from '../data/2025-real-enterprise-micro-saas';

const InnovativeServicesShowcase2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');

  // Combine all services
  const allServices = [
    ...innovativeAIAutonomousServices2025,
    ...innovativeITInfrastructureServices2025,
    ...realEnterpriseMicroSaas2025
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || 
                             service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
                             service.type.toLowerCase().includes(selectedCategory.toLowerCase());
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price': {
          const priceA = a.pricing?.starter || '0';
          const priceB = b.pricing?.starter || '0';
          return parseFloat(priceA.replace(/[^0-9.]/g, '')) - parseFloat(priceB.replace(/[^0-9.]/g, ''));
        }
        case 'category': {
          return a.category.localeCompare(b.category);
        }
        default: {
          return a.name.localeCompare(b.name);
        }
      }
    });

  // Get unique categories
  const categories = [
    { id: 'all', name: 'All Services', icon: Star, count: allServices.length, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & Autonomous', icon: Brain, count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Autonomous')).length, color: 'from-cyan-500 to-blue-500' },
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, count: allServices.filter(s => s.category.includes('Quantum')).length, color: 'from-blue-500 to-indigo-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Cybersecurity')).length, color: 'from-red-500 to-orange-500' },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, count: allServices.filter(s => s.category.includes('Cloud') || s.category.includes('Infrastructure')).length, color: 'from-indigo-500 to-purple-500' },
    { id: 'business', name: 'Business Solutions', icon: Target, count: allServices.filter(s => s.type === 'Micro SAAS').length, color: 'from-emerald-500 to-teal-500' },
    { id: 'edge', name: 'Edge Computing', icon: Cpu, count: allServices.filter(s => s.category.includes('Edge')).length, color: 'from-green-500 to-emerald-500' }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <>
      <Head>
        <title>2025 Innovative Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive showcase of innovative 2025 technology services including AI, quantum computing, cybersecurity, and enterprise solutions." />
        <meta name="keywords" content="innovative services 2025, AI services, quantum computing, cybersecurity, enterprise solutions, Zion Tech Group" />
        <meta property="og:title" content="2025 Innovative Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Discover the future of technology with our innovative 2025 services showcase." />
        <meta property="og:url" content="https://ziontechgroup.com/2025-innovative-services-showcase" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/2025-innovative-services-showcase" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
          <div className="relative max-w-7xl mx-auto text-center z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              2025 Innovative Services
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"> Showcase</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              Discover our comprehensive collection of cutting-edge technology services designed to transform your business 
              and propel you into the future of innovation.
            </motion.p>
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
            >
              <div className="flex flex-col items-center space-y-2 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm text-gray-400">Mobile</span>
                <a href={`tel:${contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm text-gray-400">Email</span>
                <a href={`mailto:${contactInfo.email}`} className="text-purple-400 hover:text-purple-300 transition-colors font-semibold">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-600 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm text-gray-400">Website</span>
                <a href={contactInfo.website} className="text-pink-400 hover:text-pink-300 transition-colors font-semibold">
                  {contactInfo.website.replace('https://', '')}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters and Controls */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 border border-gray-600/50'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* View Controls */}
              <div className="flex items-center space-x-4">
                <div className="flex bg-gray-700/50 rounded-lg p-1 border border-gray-600/50">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'category')}
                  className="px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="category">Sort by Category</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-center mb-2">
                {filteredServices.length} Innovative Services Found
              </h2>
              <p className="text-gray-400 text-center">
                Discover cutting-edge solutions for your business needs
              </p>
            </motion.div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/25 group cursor-pointer"
                    onClick={() => window.location.href = service.slug}
                  >
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm line-clamp-3">
                      {service.description}
                    </p>
                    
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-full border border-gray-600/50">
                        {service.category}
                      </span>
                    </div>
                    
                    {/* Pricing */}
                    {service.pricing && (
                      <div className="mb-4 p-3 bg-gray-700/30 rounded-lg">
                        <span className="text-xs text-gray-400">Starting at</span>
                        <div className="text-lg font-bold text-cyan-400">
                          {service.pricing.starter || 'Contact for pricing'}
                        </div>
                      </div>
                    )}
                    
                    {/* Features Preview */}
                    {service.features && service.features.length > 0 && (
                      <div className="mb-4">
                        <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                        <div className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-xs text-gray-300">
                              <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                              <span className="line-clamp-1">{feature}</span>
                            </div>
                          ))}
                          {service.features.length > 3 && (
                            <div className="text-xs text-cyan-400">
                              +{service.features.length - 3} more features
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/25 group cursor-pointer"
                    onClick={() => window.location.href = service.slug}
                  >
                    <div className="flex items-start space-x-6">
                      <div className="text-4xl flex-shrink-0">🚀</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {service.name}
                          </h3>
                          <span className="inline-block px-3 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-full border border-gray-600/50">
                            {service.category}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-4">
                          {service.description}
                        </p>
                        
                        {/* Features */}
                        {service.features && service.features.length > 0 && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                            {service.features.slice(0, 6).map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            {service.pricing && (
                              <div className="text-sm">
                                <span className="text-gray-400">Starting at: </span>
                                <span className="text-cyan-400 font-semibold">
                                  {service.pricing.starter || 'Contact for pricing'}
                                </span>
                              </div>
                            )}
                            <div className="text-sm text-gray-400">
                              Type: <span className="text-white">{service.type}</span>
                            </div>
                          </div>
                          <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {filteredServices.length === 0 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search terms or category filters
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Contact us today to learn more about our innovative services and how they can benefit your organization.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href={`mailto:${contactInfo.email}`}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 text-lg shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
              </a>
              <a 
                href={`tel:${contactInfo.mobile}`}
                className="px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-300 font-bold rounded-xl hover:bg-purple-500/10 transition-all duration-200 text-lg shadow-lg hover:shadow-purple-500/25"
              >
                Call Us Now
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InnovativeServicesShowcase2025;