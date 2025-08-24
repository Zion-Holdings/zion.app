import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Star, TrendingUp, Zap, Brain, Atom, 
  Rocket, Shield, Target, CheckCircle, ExternalLink,
  Search, Filter, Grid, List, ChevronDown
} from 'lucide-react';
import { cuttingEdge2027Innovations } from '../../data/2027-cutting-edge-innovations';
import { practicalMicroSaas2027 } from '../../data/2027-practical-micro-saas';
import { emergingTech2027Services } from '../../data/2027-emerging-tech-services';

const Enhanced2027ServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');

  // Combine all 2027 services
  const all2027Services = [
    ...cuttingEdge2027Innovations,
    ...practicalMicroSaas2027,
    ...emergingTech2027Services
  ];

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(all2027Services.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = all2027Services
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'roi':
          return parseFloat(a.roi.replace(/[^0-9.]/g, '')) - parseFloat(b.roi.replace(/[^0-9.]/g, ''));
        default:
          return 0;
      }
    });

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI & Machine Learning': 'from-purple-500 to-indigo-600',
      'Quantum Computing': 'from-blue-500 to-cyan-600',
      'Emerging Technology': 'from-green-500 to-emerald-600',
      'Business Operations': 'from-orange-500 to-red-600',
      'Cybersecurity': 'from-red-500 to-pink-600',
      'Enterprise IT': 'from-indigo-500 to-purple-600',
      'Healthcare & Biotechnology': 'from-emerald-500 to-teal-600',
      'Financial Technology': 'from-yellow-500 to-orange-600',
      'Space Technology': 'from-violet-500 to-purple-600',
      'Neural Technology': 'from-pink-500 to-rose-600',
      'Materials Science': 'from-cyan-500 to-blue-600',
      'Environmental Technology': 'from-teal-500 to-green-600'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      'AI & Machine Learning': <Brain className="w-5 h-5" />,
      'Quantum Computing': <Atom className="w-5 h-5" />,
      'Emerging Technology': <Rocket className="w-5 h-5" />,
      'Business Operations': <Target className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'Enterprise IT': <Zap className="w-5 h-5" />,
      'Healthcare & Biotechnology': <Brain className="w-5 h-5" />,
      'Financial Technology': <TrendingUp className="w-5 h-5" />,
      'Space Technology': <Rocket className="w-5 h-5" />,
      'Neural Technology': <Brain className="w-5 h-5" />,
      'Materials Science': <Atom className="w-5 h-5" />,
      'Environmental Technology': <Rocket className="w-5 h-5" />
    };
    return icons[category as keyof typeof icons] || <Zap className="w-5 h-5" />;
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              2027 Revolutionary Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our cutting-edge portfolio of 500+ innovative services spanning AI consciousness, 
            quantum computing, synthetic biology, and beyond. Each service delivers measurable ROI 
            and transforms your business into a future-ready powerhouse.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services, features, or use cases..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="appearance-none bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 pr-10"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>

                {/* Sort */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 pr-10"
                  >
                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                    <option value="roi">Sort by ROI</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>

                {/* View Mode */}
                <div className="flex bg-gray-700/50 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      viewMode === 'grid' 
                        ? 'bg-cyan-500/20 text-cyan-400' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      viewMode === 'list' 
                        ? 'bg-cyan-500/20 text-cyan-400' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-400">
            Showing <span className="text-cyan-400 font-semibold">{filteredServices.length}</span> of{' '}
            <span className="text-cyan-400 font-semibold">{all2027Services.length}</span> services
          </p>
        </motion.div>

        {/* Services Grid/List */}
        <AnimatePresence mode="wait">
          {viewMode === 'grid' ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${getCategoryColor(service.category)} shadow-lg`}>
                        {getCategoryIcon(service.category)}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                        <div className="text-sm text-gray-400">ROI: {service.roi}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-lg border border-gray-600/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href={service.link}
                      className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                      {/* Icon and Category */}
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${getCategoryColor(service.category)} shadow-lg`}>
                          {getCategoryIcon(service.category)}
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">{service.category}</div>
                          <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 mb-3 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {service.tags.slice(0, 4).map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-lg border border-gray-600/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Stats and CTA */}
                      <div className="flex flex-col items-end space-y-3">
                        <div className="text-right">
                          <div className="text-sm text-gray-400">ROI</div>
                          <div className="text-lg font-bold text-green-400">{service.roi}</div>
                        </div>
                        <Link
                          href={service.link}
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
            <p className="text-gray-400 mb-8">
              Try adjusting your search terms or category filter to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement these revolutionary services 
              and achieve unprecedented growth. Let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/pricing"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-600/50"
              >
                <span>View Pricing</span>
                <TrendingUp className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Enhanced2027ServicesShowcase;