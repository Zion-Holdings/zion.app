import React, { useState } from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Phone, Mail, MapPin, ExternalLink,
  FileText, Users, DollarSign, Globe, Zap, TrendingUp
} from 'lucide-react';

// Import our new comprehensive services
import { comprehensiveRealServicesExpansion2025 } from '../data/2025-comprehensive-real-services-expansion';
import { advancedITAISpecializedServices2025 } from '../data/2025-advanced-it-ai-specialized-services';
import { emergingTechInnovativeServices2025 } from '../data/2025-emerging-tech-innovative-services';

const ComprehensiveServicesShowcase2025V3: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all services
  const allServices = [
    ...comprehensiveRealServicesExpansion2025,
    ...advancedITAISpecializedServices2025,
    ...emergingTechInnovativeServices2025
  ];

  // Get unique categories
  const categories = [
    { id: 'all', name: 'All Services', icon: <Grid className="w-6 h-6" />, color: 'from-gray-500 to-slate-500' },
    { id: 'Legal Tech & Automation', name: 'Legal Tech', icon: <FileText className="w-6 h-6" />, color: 'from-blue-500 to-cyan-500' },
    { id: 'HR Tech & Automation', name: 'HR Tech', icon: <Users className="w-6 h-6" />, color: 'from-green-500 to-emerald-500' },
    { id: 'FinTech & Wealth Management', name: 'FinTech', icon: <DollarSign className="w-6 h-6" />, color: 'from-yellow-500 to-orange-500' },
    { id: 'Supply Chain & Logistics', name: 'Supply Chain', icon: <Truck className="w-6 h-6" />, color: 'from-purple-500 to-pink-500' },
    { id: 'Healthcare & AI', name: 'Healthcare', icon: <Heart className="w-6 h-6" />, color: 'from-red-500 to-pink-500' },
    { id: 'Real Estate & PropTech', name: 'Real Estate', icon: <Building className="w-6 h-6" />, color: 'from-indigo-500 to-purple-500' },
    { id: 'Energy & Sustainability', name: 'Energy', icon: <Zap className="w-6 h-6" />, color: 'from-green-500 to-teal-500' },
    { id: 'Education & EdTech', name: 'Education', icon: <GraduationCap className="w-6 h-6" />, color: 'from-blue-500 to-indigo-500' },
    { id: 'Manufacturing & Industry 4.0', name: 'Manufacturing', icon: <Cpu className="w-6 h-6" />, color: 'from-gray-500 to-blue-500' },
    { id: 'Cybersecurity & AI', name: 'Cybersecurity', icon: <Shield className="w-6 h-6" />, color: 'from-red-500 to-orange-500' },
    { id: 'Quantum Computing & AI', name: 'Quantum Computing', icon: <Atom className="w-6 h-6" />, color: 'from-purple-500 to-pink-500' },
    { id: 'DevOps & Infrastructure', name: 'DevOps', icon: <Rocket className="w-6 h-6" />, color: 'from-blue-500 to-green-500' },
    { id: 'Data & Analytics', name: 'Data & Analytics', icon: <Brain className="w-6 h-6" />, color: 'from-cyan-500 to-blue-500' },
    { id: 'Network Security & Zero Trust', name: 'Network Security', icon: <Shield className="w-6 h-6" />, color: 'from-red-500 to-pink-500' },
    { id: 'Cloud & Migration', name: 'Cloud & Migration', icon: <Globe className="w-6 h-6" />, color: 'from-blue-500 to-purple-500' },
    { id: 'API & Integration', name: 'API & Integration', icon: <Target className="w-6 h-6" />, color: 'from-green-500 to-blue-500' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge', icon: <Cpu className="w-6 h-6" />, color: 'from-purple-500 to-indigo-500' },
    { id: 'Digital Transformation & AI', name: 'Digital Transformation', icon: <TrendingUp className="w-6 h-6" />, color: 'from-orange-500 to-red-500' },
    { id: 'Metaverse & Virtual Reality', name: 'Metaverse & VR', icon: <Globe className="w-6 h-6" />, color: 'from-purple-500 to-pink-500' },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', icon: <Target className="w-6 h-6" />, color: 'from-yellow-500 to-orange-500' },
    { id: 'Autonomous Vehicles & Drones', name: 'Autonomous Tech', icon: <Rocket className="w-6 h-6" />, color: 'from-blue-500 to-cyan-500' },
    { id: 'Space Technology & Satellites', name: 'Space Tech', icon: <Globe className="w-6 h-6" />, color: 'from-indigo-500 to-purple-500' },
    { id: 'Biotechnology & Drug Discovery', name: 'Biotech', icon: <Heart className="w-6 h-6" />, color: 'from-green-500 to-blue-500' },
    { id: 'Quantum Internet & Communication', name: 'Quantum Internet', icon: <Atom className="w-6 h-6" />, color: 'from-purple-500 to-pink-500' },
    { id: 'Climate Technology & Sustainability', name: 'Climate Tech', icon: <Zap className="w-6 h-6" />, color: 'from-green-500 to-teal-500' },
    { id: 'Neuromorphic Computing & AI', name: 'Neuromorphic AI', icon: <Brain className="w-6 h-6" />, color: 'from-cyan-500 to-blue-500' }
  ];

  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getServicePricing = (service: any) => {
    if (service.pricing?.starter) return service.pricing.starter;
    if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
    if (service.price?.monthly) return `$${service.price.monthly}/month`;
    return 'Contact for pricing';
  };

  return (
    <Layout 
      title="2025 Comprehensive Services Showcase V3 - Zion Tech Group"
      description="Discover our comprehensive portfolio of innovative micro SAAS services, IT solutions, and AI-powered platforms. Transform your business with cutting-edge technology."
      keywords="micro SAAS services, IT solutions, AI services, technology platforms, Zion Tech Group, 2025 services"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                2025 Comprehensive Services Showcase V3
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our revolutionary portfolio of {allServices.length}+ innovative micro SAAS services, IT solutions, and AI-powered platforms designed to transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Contact Us
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  View All Services
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-10 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r ' + category.color + ' text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category.icon}
                    {category.name}
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                {filteredServices.length} Services Found
              </h2>
              <p className="text-gray-400">
                {selectedCategory !== 'all' ? `Showing ${selectedCategory} services` : 'Showing all services'}
              </p>
            </div>

            <AnimatePresence mode="wait">
              {viewMode === 'grid' ? (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                          <p className="text-gray-400 text-sm mb-3">{service.category}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-blue-400">{getServicePricing(service)}</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{service.marketSize}</span>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
                    >
                      <div className="grid md:grid-cols-3 gap-6 items-center">
                        <div className="md:col-span-2">
                          <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                          <p className="text-gray-400 text-sm mb-3">{service.category}</p>
                          <p className="text-gray-300 mb-4">{service.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.features?.slice(0, 4).map((feature, featureIndex) => (
                              <span
                                key={featureIndex}
                                className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="text-center md:text-right">
                          <div className="text-2xl font-bold text-blue-400 mb-2">{getServicePricing(service)}</div>
                          <div className="text-sm text-gray-500 mb-4">{service.marketSize}</div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto md:ml-auto"
                          >
                            Learn More
                            <ArrowRight className="w-5 h-5" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search terms or category filter.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Contact us today to learn how our innovative services can revolutionize your operations and drive growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 text-center"
              >
                <Phone className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-blue-400 text-lg">+1 302 464 0950</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 text-center"
              >
                <Mail className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-blue-400 text-lg">kleber@ziontechgroup.com</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 text-center"
              >
                <MapPin className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-blue-400 text-lg">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-lg font-semibold text-xl flex items-center gap-2 mx-auto"
              >
                <ArrowRight className="w-6 h-6" />
                Get Started Today
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ComprehensiveServicesShowcase2025V3;