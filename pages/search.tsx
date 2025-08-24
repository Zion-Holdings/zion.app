import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, Grid, List, ArrowRight, ExternalLink, 
  Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  TrendingUp, BarChart3, Cloud, Network, Lightbulb, Flame, Zap as ZapIcon,
  X, Sliders, SortAsc, SortDesc
} from 'lucide-react';
import SmartHeader from '../components/SmartHeader';
import SmartFooter from '../components/SmartFooter';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    category: 'all',
    status: 'all',
    priceRange: 'all',
    technology: 'all'
  });
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);

  // Mock data for search
  const allServices = [
    {
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence',
      description: 'Transform data into actionable insights with AI-powered analytics and predictive modeling',
      category: 'AI & Machine Learning',
      status: 'active',
      price: '$499/month',
      technology: 'AI/ML',
      features: ['AI-powered dashboards', 'Predictive analytics', 'Real-time insights', 'Custom reporting'],
      link: '/ai-business-intelligence',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      relevance: 95
    },
    {
      id: 'quantum-cybersecurity',
      title: 'Quantum Cybersecurity',
      description: 'Future-proof security with quantum-resistant encryption and AI threat detection',
      category: 'Cybersecurity',
      status: 'active',
      price: '$799/month',
      technology: 'Quantum',
      features: ['Quantum-resistant encryption', 'AI threat detection', 'Zero-trust architecture', '24/7 monitoring'],
      link: '/quantum-cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      relevance: 92
    },
    {
      id: 'ai-customer-experience',
      title: 'AI Customer Experience',
      description: 'Deliver personalized customer experiences at scale with AI-driven insights',
      category: 'AI & Machine Learning',
      status: 'active',
      price: '$399/month',
      technology: 'AI/ML',
      features: ['Customer journey mapping', 'AI personalization', 'Sentiment analysis', 'Predictive support'],
      link: '/ai-customer-experience',
      icon: Users,
      color: 'from-green-500 to-teal-500',
      relevance: 88
    },
    {
      id: 'edge-computing-orchestration',
      title: 'Edge Computing Orchestration',
      description: 'Deploy and manage applications at the edge with intelligent orchestration',
      category: 'Edge Computing',
      status: 'active',
      price: '$349/month',
      technology: 'Edge',
      features: ['Edge node management', 'IoT device management', 'Real-time monitoring', 'Auto-scaling'],
      link: '/edge-computing-orchestration',
      icon: Network,
      color: 'from-purple-500 to-pink-500',
      relevance: 85
    },
    {
      id: 'space-technology',
      title: 'Space Technology Innovation',
      description: 'Accelerate space exploration with cutting-edge technology solutions',
      category: 'Space Technology',
      status: 'beta',
      price: '$2,499/month',
      technology: 'Space',
      features: ['Satellite management', 'AI mission planning', 'Quantum communication', 'Resource optimization'],
      link: '/space-technology',
      icon: Rocket,
      color: 'from-violet-500 to-purple-500',
      relevance: 82
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Development',
      description: 'Build the future of human-computer interaction with neural interfaces',
      category: 'Biotechnology',
      status: 'beta',
      price: '$899/month',
      technology: 'Biotech',
      features: ['BCI development tools', 'Neural signal processing', 'AI pattern recognition', 'Safety protocols'],
      link: '/neural-interface',
      icon: Brain,
      color: 'from-pink-500 to-rose-500',
      relevance: 78
    },
    {
      id: 'quantum-neural-networks',
      title: 'Quantum Neural Networks',
      description: 'Quantum-powered AI with advanced consciousness capabilities',
      category: 'Quantum Computing',
      status: 'beta',
      price: '$1,299/month',
      technology: 'Quantum',
      features: ['Quantum algorithms', 'Neural optimization', 'Consciousness simulation', 'Research tools'],
      link: '/quantum-neural-networks',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      relevance: 75
    },
    {
      id: 'autonomous-devops',
      title: 'Autonomous DevOps',
      description: 'AI-powered DevOps optimization and automation platform',
      category: 'Cloud & DevOps',
      status: 'active',
      price: '$599/month',
      technology: 'DevOps',
      features: ['Auto-deployment', 'Performance monitoring', 'Security scanning', 'Cost optimization'],
      link: '/autonomous-devops',
      icon: Cpu,
      color: 'from-emerald-500 to-teal-500',
      relevance: 72
    },
    {
      id: 'ai-autonomous-business',
      title: 'AI Autonomous Business Manager',
      description: 'Fully autonomous business operations powered by advanced AI',
      category: 'AI & Machine Learning',
      status: 'beta',
      price: '$1,999/month',
      technology: 'AI/ML',
      features: ['Business automation', 'Decision making', 'Resource allocation', 'Performance optimization'],
      link: '/ai-autonomous-business',
      icon: Target,
      color: 'from-indigo-500 to-purple-500',
      relevance: 70
    },
    {
      id: 'quantum-financial-trading',
      title: 'Quantum Financial Trading',
      description: 'Quantum computing powered financial analysis and trading strategies',
      category: 'Financial Technology',
      status: 'beta',
      price: '$3,999/month',
      technology: 'Quantum',
      features: ['Quantum algorithms', 'Risk assessment', 'Portfolio optimization', 'Real-time analysis'],
      link: '/quantum-financial-trading',
      icon: TrendingUp,
      color: 'from-emerald-500 to-green-500',
      relevance: 68
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', icon: '📂' },
    { id: 'AI & Machine Learning', name: 'AI & Machine Learning', icon: '🧠' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: '🛡️' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', icon: '☁️' },
    { id: 'Edge Computing', name: 'Edge Computing', icon: '🌐' },
    { id: 'Space Technology', name: 'Space Technology', icon: '🚀' },
    { id: 'Biotechnology', name: 'Biotechnology', icon: '🧬' },
    { id: 'Financial Technology', name: 'Financial Technology', icon: '💰' }
  ];

  const statuses = [
    { id: 'all', name: 'All Statuses', icon: '📊' },
    { id: 'active', name: 'Active', icon: '✅' },
    { id: 'beta', name: 'Beta', icon: '🧪' },
    { id: 'coming-soon', name: 'Coming Soon', icon: '🚧' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', icon: '💰' },
    { id: 'under-500', name: 'Under $500/month', icon: '💵' },
    { id: '500-1000', name: '$500 - $1,000/month', icon: '💵' },
    { id: '1000-2500', name: '$1,000 - $2,500/month', icon: '💵' },
    { id: 'over-2500', name: 'Over $2,500/month', icon: '💵' }
  ];

  const technologies = [
    { id: 'all', name: 'All Technologies', icon: '🔧' },
    { id: 'AI/ML', name: 'AI/ML', icon: '🧠' },
    { id: 'Quantum', name: 'Quantum', icon: '⚛️' },
    { id: 'Edge', name: 'Edge', icon: '🌐' },
    { id: 'Space', name: 'Space', icon: '🚀' },
    { id: 'Biotech', name: 'Biotech', icon: '🧬' },
    { id: 'DevOps', name: 'DevOps', icon: '⚙️' }
  ];

  // Search function
  const performSearch = () => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      const results = allServices.filter(service => {
        const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            service.technology.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesCategory = filters.category === 'all' || service.category === filters.category;
        const matchesStatus = filters.status === 'all' || service.status === filters.status;
        const matchesTechnology = filters.technology === 'all' || service.technology === filters.technology;
        
        let matchesPrice = true;
        if (filters.priceRange !== 'all') {
          const price = parseInt(service.price.replace(/[^0-9]/g, ''));
          switch (filters.priceRange) {
            case 'under-500':
              matchesPrice = price < 500;
              break;
            case '500-1000':
              matchesPrice = price >= 500 && price < 1000;
              break;
            case '1000-2500':
              matchesPrice = price >= 1000 && price < 2500;
              break;
            case 'over-2500':
              matchesPrice = price >= 2500;
              break;
          }
        }
        
        return matchesSearch && matchesCategory && matchesStatus && matchesTechnology && matchesPrice;
      });

      // Sort results
      const sortedResults = results.sort((a, b) => {
        switch (sortBy) {
          case 'relevance':
            return b.relevance - a.relevance;
          case 'price-low':
            return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
          case 'price-high':
            return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
          case 'name':
            return a.title.localeCompare(b.title);
          case 'status':
            return a.status.localeCompare(b.status);
          default:
            return 0;
        }
      });

      setSearchResults(sortedResults);
      setIsSearching(false);
    }, 500);
  };

  // Handle search on Enter key
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  };

  // Update search when filters change
  useEffect(() => {
    if (searchTerm.trim()) {
      performSearch();
    }
  }, [filters, sortBy]);

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      category: 'all',
      status: 'all',
      priceRange: 'all',
      technology: 'all'
    });
    setSortBy('relevance');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Search | Zion Tech Group</title>
        <meta name="description" content="Search across all AI and technology services, solutions, and resources at Zion Tech Group. Find exactly what you need with our advanced search and filtering." />
        <meta property="og:title" content="Search | Zion Tech Group" />
        <meta property="og:description" content="Advanced search across all services and solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/search" />
      </Head>

      <SmartHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Search Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Find the perfect AI and technology solutions for your business needs. 
              Search across our comprehensive service catalog with advanced filtering options.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Interface */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            {/* Search Bar */}
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-6">
              <div className="flex-1 max-w-2xl">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-6 h-6" />
                  <input
                    type="text"
                    placeholder="Search for services, technologies, or solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all text-lg"
                  />
                  <button
                    onClick={performSearch}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-md text-white font-medium transition-colors"
                  >
                    Search
                  </button>
                </div>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/10 text-white/60 hover:bg-white/20'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/10 text-white/60 hover:bg-white/20'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Filters and Sort */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                >
                  <Sliders className="w-4 h-4" />
                  Filters
                  {Object.values(filters).some(f => f !== 'all') && (
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  )}
                </button>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all"
                >
                  <option value="relevance">Sort by Relevance</option>
                  <option value="price-low">Sort by Price: Low to High</option>
                  <option value="price-high">Sort by Price: High to Low</option>
                  <option value="name">Sort by Name</option>
                  <option value="status">Sort by Status</option>
                </select>
              </div>

              {Object.values(filters).some(f => f !== 'all') && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Clear Filters
                </button>
              )}
            </div>

            {/* Expanded Filters */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 pt-6 border-t border-white/20"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-white font-medium mb-2">Category</label>
                    <select
                      value={filters.category}
                      onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all"
                    >
                      {categories.map(category => (
                        <option key={category.id} value={category.id} className="bg-slate-800 text-white">
                          {category.icon} {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Status Filter */}
                  <div>
                    <label className="block text-white font-medium mb-2">Status</label>
                    <select
                      value={filters.status}
                      onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all"
                    >
                      {statuses.map(status => (
                        <option key={status.id} value={status.id} className="bg-slate-800 text-white">
                          {status.icon} {status.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Price Range Filter */}
                  <div>
                    <label className="block text-white font-medium mb-2">Price Range</label>
                    <select
                      value={filters.priceRange}
                      onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all"
                    >
                      {priceRanges.map(range => (
                        <option key={range.id} value={range.id} className="bg-slate-800 text-white">
                          {range.icon} {range.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Technology Filter */}
                  <div>
                    <label className="block text-white font-medium mb-2">Technology</label>
                    <select
                      value={filters.technology}
                      onChange={(e) => setFilters(prev => ({ ...prev, technology: e.target.value }))}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all"
                    >
                      {technologies.map(tech => (
                        <option key={tech.id} value={tech.id} className="bg-slate-800 text-white">
                          {tech.icon} {tech.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Results Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {searchTerm ? `Search Results for "${searchTerm}"` : 'All Services'}
            </h2>
            <p className="text-white/60">
              {isSearching ? 'Searching...' : `${searchResults.length} services found`}
              {Object.values(filters).some(f => f !== 'all') && ' (filtered)'}
            </p>
          </div>

          {/* Loading State */}
          {isSearching && (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <p className="text-white/60">Searching our services...</p>
            </div>
          )}

          {/* No Results */}
          {!isSearching && searchTerm && searchResults.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                <Search className="w-12 h-12 text-white/40" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-white/60 mb-6">
                Try adjusting your search terms or filters
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-medium transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}

          {/* Search Results */}
          {!isSearching && searchResults.length > 0 && (
            <AnimatePresence mode="wait">
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
                {searchResults.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`group relative ${
                      viewMode === 'grid' 
                        ? 'p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'
                        : 'p-6 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-400/30 transition-all duration-300'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-cyan-400/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 flex items-center justify-center`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            service.status === 'active' ? 'bg-green-500/20 text-green-300' :
                            service.status === 'beta' ? 'bg-yellow-500/20 text-yellow-300' :
                            'bg-blue-500/20 text-blue-300'
                          }`}>
                            {service.status}
                          </span>
                          <span className="text-xs text-white/40">{service.technology}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                      <p className="text-white/70 leading-relaxed mb-4">{service.description}</p>
                      
                      {/* Price */}
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      </div>
                      
                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3 text-sm">Key Features:</h4>
                        <div className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
                              <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <a
                          href={service.link}
                          className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
                        >
                          <span className="text-sm font-medium">Learn More</span>
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                        <a
                          href="mailto:kleber@ziontechgroup.com"
                          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white text-sm font-medium transition-all duration-300 transform hover:scale-105"
                        >
                          Get Quote
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          )}

          {/* Initial State - Show all services when no search */}
          {!isSearching && !searchTerm && (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                <Search className="w-12 h-12 text-white/40" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Start Your Search</h3>
              <p className="text-white/60 mb-6">
                Enter keywords above to find the perfect technology solutions for your business
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="text-sm text-white/40">Popular searches:</span>
                {['AI', 'Cybersecurity', 'Quantum Computing', 'Edge Computing'].map((term) => (
                  <button
                    key={term}
                    onClick={() => {
                      setSearchTerm(term);
                      performSearch();
                    }}
                    className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <SmartFooter />
    </div>
  );
}