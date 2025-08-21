import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List, Filter, Star, CheckCircle, ArrowRight,
  Brain, Atom, Shield, Target, Rocket, Zap, Globe, Cpu,
  Building, Database, Cloud, Lock, Palette, Heart, Truck,
  GraduationCap, Phone, Mail, MapPin, DollarSign, Users
} from 'lucide-react';
import Layout from '../components/layout/Layout';

// Import all service data
import { innovativeAIAutomationServices2025 } from '../data/2025-innovative-ai-automation-services';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeEmergingTechServices2025 } from '../data/2025-innovative-emerging-tech-services';
import { innovativeMicroSaasSolutions2025 } from '../data/2025-innovative-micro-saas-solutions';
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services';
import { innovativeAIServicesEnhanced2025 } from '../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025 } from '../data/2025-innovative-it-services-enhanced';
import { emergingTechServicesEnhanced2025 } from '../data/2025-emerging-tech-services-enhanced';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Create comprehensive services array
const allServices = [
  ...innovativeAIAutomationServices2025,
  ...innovativeITInfrastructureServices2025,
  ...innovativeEmergingTechServices2025,
  ...innovativeMicroSaasSolutions2025,
  ...innovativeRealMicroSaasServices2025,
  ...innovativeAIServicesEnhanced2025,
  ...innovativeITServicesEnhanced2025,
  ...emergingTechServicesEnhanced2025
];

const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of all services',
    count: allServices.length
  },
  {
    id: 'ai-automation',
    name: 'AI & Automation',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
    description: 'Revolutionary AI automation and consciousness',
    count: allServices.filter(s => s.category?.includes('AI') || s.tags?.some(tag => tag.includes('AI'))).length
  },
  {
    id: 'quantum-emerging',
    name: 'Quantum & Emerging Tech',
    icon: <Atom className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Quantum computing and breakthrough technologies',
    count: allServices.filter(s => s.category?.includes('Quantum') || s.category?.includes('Emerging') || s.tags?.some(tag => tag.includes('Quantum'))).length
  },
  {
    id: 'enterprise-it',
    name: 'Enterprise IT',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-blue-500 to-purple-500',
    description: 'Enterprise solutions and infrastructure',
    count: allServices.filter(s => s.category?.includes('IT') || s.category?.includes('Enterprise') || s.tags?.some(tag => tag.includes('IT'))).length
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-teal-500 to-emerald-500',
    description: 'Innovative business solutions',
    count: allServices.filter(s => s.category?.includes('SAAS') || s.category?.includes('Micro') || s.tags?.some(tag => tag.includes('SAAS'))).length
  }
];

export default function ComprehensiveServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category?.toLowerCase().includes(selectedCategory.replace('-', ' ')) ||
      service.tags?.some(tag => tag.toLowerCase().includes(selectedCategory.replace('-', ' ')));
    
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const getServicePricing = (service: any) => {
    if (service.pricing?.starter?.price) return `$${service.pricing.starter.price}/month`;
    if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
    if (service.price?.monthly) return `$${service.price.monthly}/month`;
    return 'Contact for pricing';
  };

  return (
    <Layout>
      <Head>
        <title>Comprehensive Services Showcase 2025 - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive portfolio of 500+ cutting-edge technology solutions including AI, quantum computing, emerging technologies, and micro SAAS services." />
        <meta name="keywords" content="AI services, quantum computing, emerging technology, micro SAAS, enterprise IT, technology solutions" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Comprehensive Services Showcase 2025 - Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive portfolio of 500+ cutting-edge technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/comprehensive-services-showcase-2025" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Contact Information */}
        <meta name="contact:phone" content="+1 302 464 0950" />
        <meta name="contact:email" content="kleber@ziontechgroup.com" />
        <meta name="contact:address" content="364 E Main St STE 1008 Middletown DE 19709" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 via-cyan-900/30 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Comprehensive Services
              </span>
              <br />
              <span className="text-white">Showcase 2025</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover our revolutionary portfolio of 500+ cutting-edge technology solutions designed to transform your business and accelerate growth
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{allServices.length}+</div>
                <div className="text-gray-400">Total Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">5</div>
                <div className="text-gray-400">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-black/50 backdrop-blur-sm">
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
                className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-cyan-500 text-white' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'list' 
                    ? 'bg-cyan-500 text-white' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-xl text-left transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-gray-900/50 text-gray-300 hover:bg-gray-800/50 border border-gray-700 hover:border-cyan-500/50'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  {category.icon}
                  <span className="font-semibold">{category.name}</span>
                </div>
                <div className="text-sm opacity-80">{category.description}</div>
                <div className="mt-2 text-xs opacity-60">{category.count} services</div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 overflow-hidden">
                    {/* Hover Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Header */}
                    <div className="relative mb-4">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="relative mb-4 flex flex-wrap gap-2">
                      {service.tags?.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Features Preview */}
                    <div className="relative mb-4">
                      <div className="space-y-2">
                        {service.features?.slice(0, 2).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span className="text-gray-300 truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing and CTA */}
                    <div className="relative flex items-center justify-between">
                      <div className="text-cyan-400 font-semibold">
                        {getServicePricing(service)}
                      </div>
                      <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Get Started?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss your specific needs and discover how our revolutionary technology solutions can transform your business
            </p>
            
            {/* Contact Information */}
            <div className="mt-12 p-8 bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-center gap-3 text-center group"
                >
                  <div className="p-3 rounded-full bg-cyan-400/10 group-hover:bg-cyan-400/20 transition-all duration-300">
                    <Phone className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
                  </div>
                  <span className="text-white font-medium">{contactInfo.mobile}</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-center gap-3 text-center group"
                >
                  <div className="p-3 rounded-full bg-cyan-400/10 group-hover:bg-cyan-400/20 transition-all duration-300">
                    <Mail className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
                  </div>
                  <span className="text-white font-medium">{contactInfo.email}</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-center gap-3 text-center group"
                >
                  <div className="p-3 rounded-full bg-cyan-400/10 group-hover:bg-cyan-400/20 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
                  </div>
                  <span className="text-white font-medium text-center">{contactInfo.address}</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}