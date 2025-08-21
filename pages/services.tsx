import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Search, Filter, Brain, Rocket, Dna, Globe, Shield, 
  Wifi, Package, Bot, Car, Building2, DollarSign, 
  Monitor, Users, Cpu, Zap, Star, TrendingUp, Grid, Lock, Truck, Gamepad2, Factory, List, ArrowRight
} from 'lucide-react';
import EnhancedQuantumBackground from '../components/ui/EnhancedQuantumBackground';
import UltraFuturisticServiceCard from '../components/ui/UltraFuturisticServiceCard';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { emergingTechServices } from '../data/emerging-tech-services';
import { nextGenAIServices } from '../data/next-gen-ai-services';
import { comprehensiveITServices } from '../data/comprehensive-it-services';
import { newInnovativeServices } from '../data/innovative-micro-saas-services';
import { enhancedEnterpriseITServices } from '../data/enhanced-enterprise-it-services';
import { advancedAISolutions } from '../data/advanced-ai-solutions';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all services
  const allServices = [
    ...enhancedRealMicroSaasServices,
    ...innovativeMicroSaasServices,
    ...extraServices,
    ...additionalEnhancedServices,
    ...emergingTechServices,
    ...nextGenAIServices,
    ...comprehensiveITServices,
    ...newInnovativeServices,
    ...enhancedEnterpriseITServices,
    ...advancedAISolutions
  ];

  // Enhanced categories with icons and better organization
  const categories = [
    { id: 'all', name: 'All Services', icon: <Grid className="w-4 h-4" />, count: allServices.length },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: <Brain className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning') || s.category.includes('Neural')).length },
    { id: 'quantum', name: 'Quantum Computing', icon: <Zap className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Quantum') || s.name.includes('Quantum')).length },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Space') || s.name.includes('Space')).length },
    { id: 'biotech', name: 'Biotech & Healthcare', icon: <Dna className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Biotech') || s.category.includes('Healthcare')).length },
    { id: 'finance', name: 'Financial Services', icon: <DollarSign className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Finance') || s.category.includes('Trading')).length },
    { id: 'security', name: 'Cybersecurity', icon: <Lock className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Cybersecurity')).length },
    { id: 'internet', name: 'Internet & Network', icon: <Globe className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Internet') || s.category.includes('Network')).length },
    { id: 'iot', name: 'IoT & Smart Devices', icon: <Wifi className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('IoT') || s.name.includes('IoT')).length },
    { id: 'logistics', name: 'Logistics & Supply Chain', icon: <Truck className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Logistics') || s.category.includes('Supply Chain')).length },
    { id: 'metaverse', name: 'Metaverse & AR/VR', icon: <Gamepad2 className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Metaverse') || s.category.includes('AR/VR')).length },
    { id: 'robotics', name: 'Robotics & Automation', icon: <Bot className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Robotics') || s.category.includes('Automation')).length },
    { id: 'manufacturing', name: 'Manufacturing', icon: <Factory className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Manufacturing') || s.name.includes('Manufacturing')).length },
    { id: 'vehicles', name: 'Autonomous Vehicles', icon: <Car className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Vehicle') || s.name.includes('Vehicle')).length },
    { id: 'enterprise', name: 'Enterprise IT', icon: <Users className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Enterprise') || s.category.includes('IT Infrastructure')).length },
    { id: 'cloud', name: 'Cloud Services', icon: <Globe className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Cloud') || s.name.includes('Cloud')).length },
    { id: 'content', name: 'Content & Media', icon: <Brain className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Content') || s.category.includes('Media') || s.category.includes('Video')).length },
    { id: 'research', name: 'Research & Development', icon: <Brain className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Research') || s.name.includes('Research')).length },
    { id: 'energy', name: 'Energy & Sustainability', icon: <Zap className="w-4 h-4" />, count: allServices.filter(s => s.category.includes('Energy') || s.name.includes('Energy')).length }
  ];

  // Filter and sort services
  const filteredServices = React.useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (service.tagline && service.tagline.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || 
                             service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
                             service.name.toLowerCase().includes(selectedCategory.toLowerCase());
      
      return matchesSearch && matchesCategory;
    });

    // Sort services
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price':
        filtered.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ''));
          const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ''));
          return priceA - priceB;
        });
        break;
      case 'popularity':
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.launchDate || '2024-01-01').getTime() - new Date(a.launchDate || '2024-01-01').getTime());
        break;
    }

    return filtered;
  }, [allServices, searchTerm, selectedCategory, sortBy]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <UltraAdvancedFuturisticBackground variant="quantum-holographic-advanced">
      <Head>
        <title>Our Services - Zion Tech Group | 500+ Revolutionary AI, Quantum & IT Solutions</title>
        <meta name="description" content="Explore our comprehensive portfolio of 500+ revolutionary AI services, quantum computing solutions, and IT services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI services, quantum computing, IT solutions, micro SaaS, cybersecurity, cloud migration, autonomous vehicles, biotech AI" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Our Services - Zion Tech Group | 500+ Revolutionary Solutions" />
        <meta property="og:description" content="Explore our comprehensive portfolio of revolutionary AI, quantum computing, and IT services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      {/* Enhanced Header Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Our Revolutionary Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive portfolio of <span className="text-cyan-400 font-semibold">500+ cutting-edge solutions</span> 
              that are transforming industries and delivering unprecedented ROI.
            </p>
          </motion.div>

          {/* Enhanced Search and Filter Controls */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for services, technologies, or use cases..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Enhanced Category Filter */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-6">
                {categories.slice(0, 10).map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex flex-col items-center p-3 rounded-xl border transition-all duration-300 hover:scale-105 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400'
                        : 'bg-black/30 border-white/10 text-gray-300 hover:bg-black/50 hover:border-white/20'
                    }`}
                  >
                    <div className="mb-2">{category.icon}</div>
                    <div className="text-sm font-medium text-center">{category.name}</div>
                    <div className="text-xs text-gray-400 mt-1">({category.count})</div>
                  </button>
                ))}
              </div>

              {/* Sort and View Controls */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="flex items-center gap-4">
                  <label className="text-gray-300 text-sm font-medium">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-black/30 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="newest">Newest</option>
                    <option value="name">Name A-Z</option>
                    <option value="price">Price Low-High</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === 'grid'
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'bg-black/30 text-gray-400 hover:bg-black/50'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === 'list'
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'bg-black/30 text-gray-400 hover:bg-black/50'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Results Summary */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <p className="text-gray-300">
              Showing <span className="text-cyan-400 font-semibold">{filteredServices.length}</span> of{' '}
              <span className="text-white font-semibold">{allServices.length}</span> services
            </p>
          </motion.div>

          {/* Services Grid/List */}
          <AnimatePresence mode="wait">
            {filteredServices.length > 0 ? (
              <motion.div
                key={`${viewMode}-${selectedCategory}-${sortBy}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                    : 'space-y-4'
                }
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="group"
                  >
                    <UltraFuturisticServiceCard
                      service={service}
                      className="h-full hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  variant="primary"
                  size="lg"
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss your specific needs and find the perfect solution
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
              >
                Call +1 302 464 0950
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </UltraAdvancedFuturisticBackground>
  );
}