import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Star, Users, TrendingUp, 
  DollarSign, Clock, CheckCircle, ArrowRight,
  Rocket, Monitor, Cpu, 
  Zap, Database, Cloud, Lock, Code,
  Sparkles, Target, Award, Lightbulb
} from 'lucide-react';
import { innovative2025Services } from '../data/innovative-2025-services';
import { emergingTech2025Services } from '../data/emerging-tech-2025-services';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';

export default function EnhancedServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  const allServices = [
    ...innovative2025Services,
    ...emergingTech2025Services
  ];

  // Dynamic category counts
  const aiCount = allServices.filter(service => service.category.includes('AI')).length;
  const quantumCount = allServices.filter(service => service.category.includes('Quantum')).length;
  const blockchainCount = allServices.filter(service => service.category.includes('Blockchain')).length;
  const iotCount = allServices.filter(service => service.category.includes('IoT')).length;
  const spaceCount = allServices.filter(service => service.category.includes('Space')).length;
  const cybersecurityCount = allServices.filter(service => service.category.includes('Security') || service.category.includes('Cybersecurity')).length;

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: aiCount },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️', count: quantumCount },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: '⛓️', count: blockchainCount },
    { id: 'iot', name: 'IoT & Edge Computing', icon: '🌐', count: iotCount },
    { id: 'space', name: 'Space Technology', icon: '🚀', count: spaceCount },
    { id: 'security', name: 'Cybersecurity', icon: '🔒', count: cybersecurityCount }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $2K/month', range: 'Under $2K' },
    { id: 'medium', name: '$2K - $8K/month', range: '$2K - $8K' },
    { id: 'high', name: '$8K - $20K/month', range: '$8K - $20K' },
    { id: 'premium', name: '$20K+/month', range: '$20K+' }
  ];

  const sortOptions = [
    { id: 'name', name: 'Name A-Z' },
    { id: 'price-low', name: 'Price Low to High' },
    { id: 'price-high', name: 'Price High to Low' },
    { id: 'rating', name: 'Rating' },
    { id: 'customers', name: 'Customer Count' }
  ];

  // Filter and sort services
  const filteredServices = React.useMemo(() => {
    const parsePriceToNumber = (price: string | number): number => {
      if (typeof price === 'number') return price;
      if (typeof price === 'string') {
        const match = price.replace(/[^0-9.]/g, '');
        const parsed = parseFloat(match || '0');
        return isNaN(parsed) ? 0 : parsed;
      }
      return 0;
    };

    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || 
                             (selectedCategory === 'ai' && service.category.includes('AI')) ||
                             (selectedCategory === 'quantum' && service.category.includes('Quantum')) ||
                             (selectedCategory === 'blockchain' && service.category.includes('Blockchain')) ||
                             (selectedCategory === 'iot' && service.category.includes('IoT')) ||
                             (selectedCategory === 'space' && service.category.includes('Space')) ||
                             (selectedCategory === 'security' && (service.category.includes('Security') || service.category.includes('Cybersecurity')));

      const matchesPrice = selectedPriceRange === 'all' || 
                          (selectedPriceRange === 'low' && parsePriceToNumber(service.price) < 2000) ||
                          (selectedPriceRange === 'medium' && parsePriceToNumber(service.price) >= 2000 && parsePriceToNumber(service.price) < 8000) ||
                          (selectedPriceRange === 'high' && parsePriceToNumber(service.price) >= 8000 && parsePriceToNumber(service.price) < 20000) ||
                          (selectedPriceRange === 'premium' && parsePriceToNumber(service.price) >= 20000);

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => parsePriceToNumber(a.price) - parsePriceToNumber(b.price));
        break;
      case 'price-high':
        filtered.sort((a, b) => parsePriceToNumber(b.price) - parsePriceToNumber(a.price));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'customers':
        filtered.sort((a, b) => b.customers - a.customers);
        break;
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy, allServices]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <EnhancedFuturisticBackground 
      intensity="high" 
      colorScheme="quantum"
      particleCount={300}
      animationSpeed={1.5}
    >
      <div className="min-h-screen">
        <Head>
          <title>2025 Innovative Services Showcase - Zion Tech Group | Revolutionary AI, Quantum & Emerging Tech</title>
          <meta name="description" content="Explore Zion Tech Group's revolutionary 2025 services: AI platforms, quantum computing, blockchain infrastructure, IoT solutions, and cutting-edge emerging technologies. Contact: +1 302 464 0950" />
          <meta name="keywords" content="AI services 2025, quantum computing, blockchain, IoT, edge computing, 5G, cybersecurity, metaverse, space technology, Zion Tech Group" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="2025 Innovative Services Showcase - Zion Tech Group" />
          <meta property="og:description" content="Revolutionary AI, quantum computing, and emerging technology services for 2025. Contact: +1 302 464 0950" />
          <meta property="og:url" content="https://ziontechgroup.com/enhanced-services-showcase-2025" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/enhanced-services-showcase-2025" />
        </Head>

        {/* Hero Section */}
        <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="w-12 h-12 text-cyan-400 mr-4" />
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  2025 Innovation Showcase
                </h1>
                <Sparkles className="w-12 h-12 text-pink-400 ml-4" />
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionary AI, Quantum Computing & Emerging Technology Services
              </p>
              <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                Discover our cutting-edge solutions that are transforming industries and driving the future of technology
              </p>
              
              {/* Service Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl">
                  <div className="text-3xl font-bold text-cyan-400">{allServices.length}</div>
                  <div className="text-gray-400">Total Services</div>
                </div>
                <div className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl">
                  <div className="text-3xl font-bold text-purple-400">{aiCount + quantumCount}</div>
                  <div className="text-gray-400">AI & Quantum</div>
                </div>
                <div className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl">
                  <div className="text-3xl font-bold text-green-400">{blockchainCount + iotCount}</div>
                  <div className="text-gray-400">Emerging Tech</div>
                </div>
                <div className="text-center p-6 bg-gray-800/40 border border-gray-700 rounded-2xl">
                  <div className="text-3xl font-bold text-pink-400">{spaceCount + cybersecurityCount}</div>
                  <div className="text-gray-400">Specialized</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-800/40 border border-gray-700 rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>

                {/* Price Range Filter */}
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name}
                    </option>
                  ))}
                </select>

                {/* Sort Options */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredServices.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    layout
                    className="group relative bg-gray-800/60 border border-gray-700 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      {service.popular && (
                        <div className="flex items-center space-x-1 text-yellow-400 text-sm">
                          <Star className="w-4 h-4 fill-current" />
                          <span>Popular</span>
                        </div>
                      )}
                    </div>

                    {/* Service Title and Description */}
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Price and Customer Count */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-cyan-400">
                        {service.price}<span className="text-gray-400 text-lg">{service.period}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>{service.customers}</span>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Market Position */}
                    <div className="mb-6 p-3 bg-gray-700/40 rounded-lg">
                      <div className="text-xs text-gray-400 mb-1">Market Position</div>
                      <div className="text-sm text-gray-300 line-clamp-2">
                        {service.marketPosition}
                      </div>
                    </div>

                    {/* ROI and Setup Time */}
                    <div className="flex items-center justify-between mb-6 text-sm">
                      <div className="flex items-center space-x-1 text-green-400">
                        <TrendingUp className="w-4 h-4" />
                        <span>Average ROI</span>
                      </div>
                      <div className="flex items-center space-x-1 text-blue-400">
                        <Clock className="w-4 h-4" />
                        <span>{service.setupTime}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a 
                        href={service.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-xl text-center text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                      <a 
                        href="/contact" 
                        className="flex-1 bg-gray-700/60 text-white px-4 py-2 rounded-xl text-center text-sm font-medium hover:bg-gray-600/60 transition-all duration-300 border border-gray-600 hover:border-gray-500"
                      >
                        Contact Us
                      </a>
                    </div>

                    {/* Contact Information */}
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="text-xs text-gray-400 mb-2">Contact Information:</div>
                      <div className="text-xs text-gray-300 space-y-1">
                        <div>📱 {service.contactInfo.mobile}</div>
                        <div>✉️ {service.contactInfo.email}</div>
                        <div>🌐 {service.contactInfo.website}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* No Results Message */}
            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search criteria or filters</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of companies achieving breakthrough results with our revolutionary services
              </p>
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-cyan-400" />
                  </div>
                  <span className="text-lg text-white">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-lg text-white">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-green-400" />
                  </div>
                  <span className="text-lg text-white">364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group rounded-xl transform hover:scale-105 active:scale-95 px-6 py-3 text-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-500 hover:via-blue-400 hover:to-blue-500 text-white shadow-lg hover:shadow-xl border border-blue-500/20 no-underline"
                >
                  <span className="relative">Start Your Transformation</span>
                  <Rocket className="ml-2 w-6 h-6" />
                </a>
                <a 
                  href="/pricing" 
                  className="inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group rounded-xl transform hover:scale-105 active:scale-95 px-6 py-3 text-lg bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 text-white shadow-lg hover:shadow-xl border border-gray-500/20 no-underline"
                >
                  <span className="relative">View Pricing</span>
                  <DollarSign className="ml-2 w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}