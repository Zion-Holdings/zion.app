import React, { useState, useCallback } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Search, Filter, Star, TrendingUp, Brain, Infinity, Code
} from 'lucide-react';

// Import our revolutionary services
import { revolutionary2045AdvancedMicroSaas } from '../data/revolutionary-2045-advanced-micro-saas';
import { revolutionary2045ITServices } from '../data/revolutionary-2045-it-services';
import { revolutionary2045AIServices } from '../data/revolutionary-2045-ai-services';

const Revolutionary2045ServicesShowcase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  // Combine all services
  const allServices = [
    ...revolutionary2045AdvancedMicroSaas,
    ...revolutionary2045ITServices,
    ...revolutionary2045AIServices
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || 
                             service.category.toLowerCase().includes(selectedCategory.toLowerCase());
      
      const matchesType = selectedType === 'all' || 
                          service.type.toLowerCase().includes(selectedType.toLowerCase());
      
      return matchesSearch && matchesCategory && matchesType;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseFloat(a.pricing.starter.replace(/[^0-9.]/g, '')) - 
                 parseFloat(b.pricing.starter.replace(/[^0-9.]/g, ''));
        case 'market':
          return parseFloat(a.marketSize.replace(/[^0-9.]/g, '')) - 
                 parseFloat(b.marketSize.replace(/[^0-9.]/g, ''));
        default:
          return 0;
      }
    });

  // Get unique categories and types
  const categories = ['all', ...Array.from(new Set(allServices.map(s => s.category)))];
  const types = ['all', ...Array.from(new Set(allServices.map(s => s.type)))];

  const handleServiceClick = useCallback((service: { slug: string }) => {
    window.location.href = service.slug;
  }, []);

  const stats = [
    { number: allServices.length.toString(), label: "Total Services", icon: Star },
    { number: "2045", label: "Technology Year", icon: TrendingUp },
    { number: "100%", label: "AI-Powered", icon: Brain },
    { number: "∞", label: "Possibilities", icon: Infinity }
  ];

  return (
    <Layout>
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
                Revolutionary 2045 Services
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
                Experience the future of technology with our cutting-edge solutions
              </p>
              <p className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
                Discover our comprehensive portfolio of revolutionary AI consciousness, quantum computing, 
                space technology, and cybersecurity solutions designed for the future.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            >
              {stats.map((stat, _index) => (
                <div key={stat.label} className="text-center">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mb-4">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-12 px-6 bg-gradient-to-b from-black to-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-200"
                  />
                </div>

                {/* Category Filter */}
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-200 appearance-none"
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className="bg-black text-white">
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Type Filter */}
                <div className="relative">
                  <Code className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-200 appearance-none"
                  >
                    {types.map(type => (
                      <option key={type} value={type} className="bg-black text-white">
                        {type === 'all' ? 'All Types' : type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort */}
                <div className="relative">
                  <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:bg-white/20 transition-all duration-200 appearance-none"
                  >
                    <option value="name" className="bg-black text-white">Sort by Name</option>
                    <option value="price" className="bg-black text-white">Sort by Price</option>
                    <option value="market" className="bg-black text-white">Sort by Market Size</option>
                  </select>
                </div>
              </div>

              {/* Results Count */}
              <div className="mt-4 text-center">
                <span className="text-white/70">
                  Showing {filteredServices.length} of {allServices.length} services
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-white/10 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                            {service.type}
                          </span>
                          <span className="text-white/50 text-sm">{service.pricing.starter}</span>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                          {service.name}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-white/70 text-sm mb-4 line-clamp-3">
                          {service.description}
                        </p>
                        
                        {/* Category */}
                        <div className="mb-4">
                          <span className="text-xs text-cyan-400 font-medium">{service.category}</span>
                        </div>
                        
                        {/* Features Preview */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <span key={idx} className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded-md">
                                {feature}
                              </span>
                            ))}
                            {service.features.length > 3 && (
                              <span className="px-2 py-1 bg-white/5 text-white/40 text-xs rounded-md">
                                +{service.features.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                        
                        {/* Market Size */}
                        <div className="mb-4 p-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg">
                          <div className="text-center">
                            <p className="text-white/50 text-xs">Market Size</p>
                            <p className="text-cyan-400 font-semibold text-sm">{service.marketSize}</p>
                          </div>
                        </div>
                        
                        {/* Footer */}
                        <div className="flex items-center justify-between">
                          <button
                            onClick={() => handleServiceClick(service)}
                            className="inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors duration-300"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </button>
                          
                          <div className="text-right">
                            <p className="text-white/50 text-xs">Target Audience</p>
                            <p className="text-white/70 text-xs line-clamp-1 max-w-32">
                              {service.targetAudience}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center py-20"
              >
                <div className="inline-flex p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-white/10 mb-6">
                  <Search className="w-12 h-12 text-white/50" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-white/70 mb-6">
                  Try adjusting your search criteria or filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedType('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto">
                Join thousands of forward-thinking organizations already leveraging our revolutionary 2045 technology solutions. 
                Get in touch to discuss how we can help you achieve the future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  <span className="relative z-10">Contact Our Team</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                
                <button
                  onClick={() => window.location.href = '/quote'}
                  className="group relative px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                >
                  Request Quote
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Revolutionary2045ServicesShowcase;