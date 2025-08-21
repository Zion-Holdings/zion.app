import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Brain, Rocket, Dna, Globe, Shield, 
  Wifi, Package, Bot, Car, Building2, DollarSign, 
  Monitor, Users, Cpu, Zap, Star, TrendingUp
} from 'lucide-react';
import Button from '../components/ui/Button';
import EnhancedServiceCard from '../components/ui/EnhancedServiceCard';
import EnhancedNavigation from '../components/layout/EnhancedNavigation';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { advancedAIServices } from '../data/advanced-ai-services';
import { quantumAdvancedServices } from '../data/quantum-advanced-services';
import { emergingTechServices } from '../data/emerging-tech-services';
import { spaceTechServices } from '../data/space-tech-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { quantumInnovationServices } from '../data/quantum-innovation-services';
import { spaceInnovationServices } from '../data/space-innovation-services';
import { emergingInnovationServices } from '../data/emerging-innovation-services';
import { itInnovationServices } from '../data/it-innovation-services';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  // Combine all services
  const allServices = [
    ...enhancedRealMicroSaasServices,
    ...advancedAIServices,
    ...quantumAdvancedServices,
    ...emergingTechServices,
    ...spaceTechServices,
    ...innovativeAIServices,
    ...quantumInnovationServices,
    ...spaceInnovationServices,
    ...emergingInnovationServices,
    ...itInnovationServices
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Services', icon: <Monitor className="w-5 h-5" />, count: allServices.length },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length },
    { id: 'quantum', name: 'Quantum Computing', icon: <Zap className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Space')).length },
    { id: 'emerging', name: 'Emerging Tech', icon: <Star className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Emerging')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Cybersecurity')).length },
    { id: 'robotics', name: 'Robotics & Automation', icon: <Bot className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Robotics') || s.category.includes('Automation')).length },
    { id: 'biotech', name: 'Biotech & Healthcare', icon: <Dna className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Biotech') || s.category.includes('Healthcare')).length },
    { id: 'finance', name: 'Financial Technology', icon: <DollarSign className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Financial') || s.category.includes('Trading')).length },
    { id: 'iot', name: 'IoT & Edge Computing', icon: <Wifi className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('IoT') || s.category.includes('Edge')).length }
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || 
                             service.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
      
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'rating':
          return b.rating - a.rating;
        case 'price-low':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'price-high':
          return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        default:
          return 0;
      }
    });

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <EnhancedNavigation />
      <Head>
        <title>800+ Revolutionary Technology Services - Zion Tech Group</title>
        <meta name="description" content="Explore 800+ revolutionary AI, quantum computing, space technology, IT innovation, and emerging tech services. Transform your business with cutting-edge solutions. Contact: +1 302 464 0950" />
        <meta name="keywords" content="AI services, quantum computing, space technology, micro SaaS, technology solutions, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="800+ Revolutionary Technology Services - Zion Tech Group" />
        <meta property="og:description" content="Explore 800+ revolutionary AI, quantum computing, space technology, and IT innovation services." />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              500+ Revolutionary Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge AI, quantum computing, space technology, and emerging tech solutions.
            </p>
            
            {/* Contact Information Banner */}
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-purple-500/30 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Total Services</p>
                    <p className="text-2xl font-bold text-white">{allServices.length}+</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Categories</p>
                    <p className="text-2xl font-bold text-white">{categories.length}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Happy Customers</p>
                    <p className="text-2xl font-bold text-white">10K+</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
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
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-4">
              <label className="text-gray-300 text-sm">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 border-purple-500 text-white'
                    : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-gray-700/50 hover:border-gray-600'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
                <span className="bg-gray-700/50 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-400 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-gray-400 text-center">
                  Showing {filteredServices.length} of {allServices.length} services
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredServices.map((service, index) => (
                  <EnhancedServiceCard
                    key={service.id}
                    service={service}
                    index={index}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/30"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss your specific needs and find the perfect solution for your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                </div>
                <p className="text-sm text-gray-400">Call Us</p>
                <p className="text-lg font-semibold text-white">{contactInfo.mobile}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-purple-400" />
                </div>
                <p className="text-sm text-gray-400">Email Us</p>
                <p className="text-lg font-semibold text-white">{contactInfo.email}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-pink-400" />
                </div>
                <p className="text-sm text-gray-400">Visit Us</p>
                <p className="text-lg font-semibold text-white">{contactInfo.address}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/contact" 
                variant="primary"
                className="text-lg px-8 py-4"
              >
                Contact Our Team
                <TrendingUp className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                href="/pricing" 
                variant="secondary"
                className="text-lg px-8 py-4"
              >
                View Pricing
                <Star className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}