import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles,
  ArrowRight, CheckCircle, DollarSign, Users, Award, Clock, Phone, Mail, MapPin,
  ExternalLink, Search, Filter, Grid, List
} from 'lucide-react';

// Import our new 2025 Ultimate Real Services
import { ultimateRealMicroSaas2025Expansion } from '../data/2025-ultimate-real-micro-saas-expansion';
import { ultimateRealITServices2025Expansion } from '../data/2025-ultimate-real-it-services-expansion';
import { ultimateRealAIServices2025Expansion } from '../data/2025-ultimate-real-ai-services-expansion';

const UltimateServicesShowcase2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all services
  const allServices = useMemo(() => [
    ...ultimateRealMicroSaas2025Expansion,
    ...ultimateRealITServices2025Expansion,
    ...ultimateRealAIServices2025Expansion
  ], []);

  // Filter services based on search and category
  const filteredServices = useMemo(() => {
    let filtered = allServices;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => 
        service.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [allServices, searchTerm, selectedCategory]);

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(allServices.map(service => service.category))];
    return ['all', ...uniqueCategories];
  }, [allServices]);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Head>
        <title>2025 Ultimate Real Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive collection of real, innovative micro SAAS services, IT solutions, and AI services for 2025. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="micro SAAS, IT services, AI services, business solutions, technology services, Zion Tech Group" />
        <meta property="og:title" content="2025 Ultimate Real Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Discover our comprehensive collection of real, innovative micro SAAS services, IT solutions, and AI services for 2025." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/2025-ultimate-services-showcase" />
        <link rel="canonical" href="https://ziontechgroup.com/2025-ultimate-services-showcase" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                2025 Ultimate Real Services Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our comprehensive collection of real, innovative micro SAAS services, 
                IT solutions, and AI services designed to transform your business in 2025 and beyond.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-full">
                  <span className="font-semibold">{allServices.length}+ Services</span>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full">
                  <span className="font-semibold">AI-Powered Solutions</span>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 rounded-full">
                  <span className="font-semibold">Quantum-Secure</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="bg-gray-900 rounded-2xl p-6">
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {category === 'all' ? 'All Categories' : category}
                    </button>
                  ))}
                </div>

                {/* View Mode Toggle */}
                <div className="flex bg-gray-800 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-all ${
                      viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-all ${
                      viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div {...staggerContainer}>
              {filteredServices.length === 0 ? (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-semibold mb-2">No services found</h3>
                  <p className="text-gray-400">Try adjusting your search or filter criteria</p>
                </div>
              ) : (
                <div className={`grid gap-6 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                    : 'grid-cols-1'
                }`}>
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-cyan-500 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 ${
                        viewMode === 'list' ? 'flex flex-col lg:flex-row gap-6' : ''
                      }`}
                    >
                      {/* Service Header */}
                      <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                            <p className="text-gray-400 text-sm mb-3">{service.tagline}</p>
                            <div className="flex items-center gap-2 mb-3">
                              <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                                {service.type}
                              </span>
                              <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                                {service.category}
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

                        {/* Features */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                          <div className="grid grid-cols-1 gap-1">
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                            {service.features.length > 4 && (
                              <div className="text-sm text-gray-400 ml-6">
                                +{service.features.length - 4} more features
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Benefits */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Benefits:</h4>
                          <div className="grid grid-cols-1 gap-1">
                            {service.benefits.slice(0, 3).map((benefit, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Service Sidebar */}
                      <div className={`${viewMode === 'list' ? 'lg:w-80 flex-shrink-0' : ''}`}>
                        {/* Pricing */}
                        <div className="bg-gray-800 rounded-xl p-4 mb-4">
                          <h4 className="text-sm font-semibold text-gray-400 mb-3">Pricing Plans</h4>
                          <div className="space-y-2">
                            {Object.entries(service.pricing).map(([plan, price]) => (
                              <div key={plan} className="flex justify-between items-center text-sm">
                                <span className="text-gray-300 capitalize">{plan}:</span>
                                <span className="text-white font-semibold">{price}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Market Info */}
                        <div className="bg-gray-800 rounded-xl p-4 mb-4">
                          <h4 className="text-sm font-semibold text-gray-400 mb-3">Market Information</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-300">Market Size:</span>
                              <span className="text-white">{service.marketSize}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-300">Target Audience:</span>
                              <span className="text-white text-right max-w-32">{service.targetAudience.split(',')[0]}...</span>
                            </div>
                          </div>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-4 border border-cyan-500/30">
                          <h4 className="text-sm font-semibold text-cyan-400 mb-3">Contact Information</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-gray-300">
                              <Phone className="w-4 h-4 text-cyan-400" />
                              <span>{service.mobile}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <Mail className="w-4 h-4 text-cyan-400" />
                              <span>kleber@ziontechgroup.com</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <MapPin className="w-4 h-4 text-cyan-400" />
                              <span className="text-xs">{service.address}</span>
                            </div>
                          </div>
                          <a
                            href={service.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm mt-3 transition-colors"
                          >
                            Visit Website <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>

                        {/* CTA Button */}
                        <button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all transform hover:scale-105">
                          Get Started
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-gray-900 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to learn more about our comprehensive suite of services 
                and how we can help you achieve your business goals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-800 rounded-xl p-6">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-6">
                  <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-6">
                  <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-xl transition-all transform hover:scale-105"
              >
                Visit Our Website <ExternalLink className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UltimateServicesShowcase2025;