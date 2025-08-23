import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  ArrowRight, 
  Brain, 
  Atom, 
  Zap, 
  Rocket, 
  Eye, 
  BarChart3, 
  Shield, 
  Cloud,
  Sparkles,
  Crown,
  Infinity,
  Target,
  TrendingUp,
  Globe,
  Lock,
  Database,
  Network,
  Code,
  Heart,
  Clock,
  Users,
  Award,
  CheckCircle,
  ArrowUpRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Link from 'next/link';
import { revolutionary2037FuturisticServices } from '../data/revolutionary-2037-futuristic-services';
import { revolutionary2037ITandAIServices } from '../data/revolutionary-2037-it-ai-services';
import { revolutionary2037MicroSaasServices } from '../data/revolutionary-2037-micro-saas-services';

const Comprehensive2037ServicesShowcase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);

  const allServices = [
    ...revolutionary2037FuturisticServices,
    ...revolutionary2037ITandAIServices,
    ...revolutionary2037MicroSaasServices
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: allServices.length },
    { id: 'AI & Consciousness', name: 'AI & Consciousness', icon: Brain, count: allServices.filter(s => s.category.includes('AI')).length },
    { id: 'Quantum', name: 'Quantum Technology', icon: Atom, count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'Space', name: 'Space Technology', icon: Rocket, count: allServices.filter(s => s.category.includes('Space')).length },
    { id: 'Security', name: 'Security & Cloud', icon: Shield, count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Cloud')).length },
    { id: 'Business', name: 'Business & Operations', icon: TrendingUp, count: allServices.filter(s => s.category.includes('Business') || s.category.includes('Operations')).length },
    { id: 'Micro SAAS', name: 'Micro SAAS', icon: Target, count: allServices.filter(s => s.category.includes('Micro') || s.category.includes('SAAS')).length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
    
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'price-low':
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'price-high':
        return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality is already handled by the filter
  };

  return (
    <Layout>
      <SEO 
        title="Revolutionary 2037 Services Showcase | Zion Tech Group"
        description="Discover our comprehensive suite of revolutionary 2037 technology services including AI consciousness, quantum computing, space technology, and autonomous systems."
        keywords="2037 services, AI consciousness, quantum computing, space technology, autonomous systems, revolutionary technology"
      />
      
      <main className="relative z-10 pt-8">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-lg font-medium mb-6">
                <Sparkles className="w-5 h-5 mr-2" />
                Revolutionary 2037 Technology Solutions
              </div>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              2037 Services Showcase
            </motion.h1>
            
            <motion.p
              className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experience the future with our revolutionary AI consciousness, quantum computing, space technology, and autonomous systems that transform businesses and industries
            </motion.p>

            {/* Enhanced Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-4xl mx-auto mb-8"
            >
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-7 h-7 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for AI consciousness, quantum solutions, autonomous systems, space technology..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-16 pr-6 py-6 bg-white/10 border border-cyan-400/40 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-400/60 transition-all duration-300 text-xl"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                  >
                    Search
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {[
                { number: allServices.length.toString(), label: 'Total Services', icon: Target, color: 'from-cyan-500 to-blue-500' },
                { number: allServices.filter(s => s.popular).length.toString(), label: 'Featured Services', icon: Star, color: 'from-purple-500 to-pink-500' },
                { number: '24/7', label: 'Support Available', icon: Clock, color: 'from-emerald-500 to-teal-500' },
                { number: '∞', label: 'Future Possibilities', icon: Infinity, color: 'from-yellow-500 to-orange-500' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-r ${stat.color} p-4`}>
                    <stat.icon className="w-full h-full text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Filters and Controls */}
        <section className="py-8 px-4 bg-black/20 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Category Filters */}
              <div className="flex flex-wrap items-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-400'
                        : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/30'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded-full">{category.count}</span>
                  </button>
                ))}
              </div>

              {/* Sort and Filter Controls */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <label className="text-gray-300 text-sm">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name A-Z</option>
                  </select>
                </div>

                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-gray-300 hover:bg-white/20 transition-all duration-300"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                  {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Additional Filters */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 pt-6 border-t border-white/10"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Price Range</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Min"
                        className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                      />
                      <input
                        type="text"
                        placeholder="Max"
                        className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Features</label>
                    <div className="flex flex-wrap gap-2">
                      {['AI', 'Quantum', 'Autonomous', 'Security', 'Cloud'].map((feature) => (
                        <button
                          key={feature}
                          className="px-3 py-1 bg-white/5 border border-white/20 rounded-lg text-gray-300 text-sm hover:bg-white/10 transition-all duration-300"
                        >
                          {feature}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Popularity</label>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/50 rounded-lg text-cyan-400 text-sm">
                        Featured
                      </button>
                      <button className="px-3 py-1 bg-white/5 border border-white/20 rounded-lg text-gray-300 text-sm hover:bg-white/10 transition-all duration-300">
                        All
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {sortedServices.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-gray-400 mb-8">Try adjusting your search criteria or filters</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <p className="text-gray-400">
                    Showing {sortedServices.length} of {allServices.length} revolutionary services
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {sortedServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                      <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105">
                        {/* Service Header */}
                        <div className="flex items-start justify-between mb-6">
                          <div className="text-4xl">{service.icon}</div>
                          {service.popular && (
                            <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs rounded-full">
                              <Star className="w-3 h-3 fill-current" />
                              Featured
                            </div>
                          )}
                        </div>

                        {/* Service Info */}
                        <div className="mb-6">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-sm text-cyan-400 mb-3 font-medium">
                            {service.tagline}
                          </p>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        {/* Features */}
                        <div className="mb-6">
                          <div className="flex flex-wrap gap-2">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300"
                              >
                                {feature}
                              </span>
                            ))}
                            {service.features.length > 3 && (
                              <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-lg text-xs text-cyan-400">
                                +{service.features.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Price and CTA */}
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-2xl font-bold text-white">{service.price}</div>
                            <div className="text-gray-400 text-sm">{service.period}</div>
                          </div>
                          <Link href={`/${service.id}`}>
                            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                              <span className="text-sm font-medium">Learn More</span>
                              <ArrowUpRight className="w-4 h-4" />
                            </button>
                          </Link>
                        </div>

                        {/* Market Price Comparison */}
                        {service.marketPrice && (
                          <div className="mt-4 pt-4 border-t border-white/10">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-400">Market Price:</span>
                              <span className="text-green-400 font-medium">{service.marketPrice}</span>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              <span className="text-xs text-green-400">Competitive Pricing</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl p-16 border border-cyan-400/30"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Ready to Transform Your Business with 2037 Technology?
              </h2>
              <p className="text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Join hundreds of companies already leveraging our revolutionary AI consciousness, quantum computing, and autonomous solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 text-xl"
                  onClick={() => window.location.href = '/get-started'}
                >
                  <span className="flex items-center gap-3">
                    <Crown className="w-6 h-6" />
                    Start Your Revolutionary Journey
                  </span>
                </button>
                <button 
                  className="px-12 py-6 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-opacity-50 text-xl"
                  onClick={() => window.location.href = '/contact'}
                >
                  <span className="flex items-center gap-3">
                    <Users className="w-6 h-6" />
                    Contact Our Experts
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Comprehensive2037ServicesShowcase;