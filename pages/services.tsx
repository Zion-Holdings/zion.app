import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Users, DollarSign, Settings, TrendingUp, BarChart3, ChevronDown,
  Code, Cloud, Lock, Database, Globe, Zap, Building2, Star
} from 'lucide-react';

// Import all service data
import { realMicroSaasServices2025 } from '../data/2025-real-micro-saas-services';
import { innovativeAIServices } from '../data/2025-innovative-ai-services';
import { innovativeMicroSaasExpansion } from '../data/2025-innovative-micro-saas-expansion';
import { specializedAITServices } from '../data/2025-specialized-ai-it-services';
import { innovativeBusinessSolutions } from '../data/2025-innovative-business-solutions';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    id: 'ai-services',
    title: '🧠 AI & Machine Learning',
    description: 'Advanced AI-powered solutions for business automation and intelligence',
    icon: Brain,
    color: 'from-violet-500 to-purple-500',
    services: [...innovativeAIServices],
    gradient: 'from-violet-500/20 to-indigo-500/20'
  },
  {
    id: 'micro-saas',
    title: '🎯 Micro SAAS Solutions',
    description: 'Innovative micro SAAS applications for every business need',
    icon: Target,
    color: 'from-green-500 to-yellow-500',
    services: [...realMicroSaasServices2025, ...innovativeMicroSaasExpansion],
    gradient: 'from-green-500/20 to-orange-500/20'
  },
  {
    id: 'it-infrastructure',
    title: '🏗️ IT Infrastructure',
    description: 'AI-powered IT infrastructure and DevOps automation',
    icon: Shield,
    color: 'from-blue-500 to-cyan-500',
    services: [...specializedAITServices],
    gradient: 'from-blue-500/20 to-teal-500/20'
  },
  {
    id: 'business-solutions',
    title: '💼 Business Solutions',
    description: 'Comprehensive business optimization and management platforms',
    icon: Building2,
    color: 'from-teal-500 to-emerald-500',
    services: [...innovativeBusinessSolutions],
    gradient: 'from-teal-500/20 to-green-500/20'
  },
  {
    id: 'development-tools',
    title: '💻 Development Tools',
    description: 'AI-powered development and coding assistance',
    icon: Code,
    color: 'from-indigo-500 to-blue-500',
    services: specializedAITServices.filter(s => s.category === 'Development Tools'),
    gradient: 'from-indigo-500/20 to-blue-500/20'
  },
  {
    id: 'data-analytics',
    title: '📊 Data Analytics',
    description: 'Intelligent data processing and business intelligence',
    icon: BarChart3,
    color: 'from-purple-500 to-pink-500',
    services: specializedAITServices.filter(s => s.category === 'Data Analytics'),
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    id: 'cybersecurity',
    title: '🔒 Cybersecurity',
    description: 'AI-powered security monitoring and threat detection',
    icon: Lock,
    color: 'from-red-500 to-orange-500',
    services: specializedAITServices.filter(s => s.category === 'Cybersecurity'),
    gradient: 'from-red-500/20 to-orange-500/20'
  },
  {
    id: 'cloud-management',
    title: '☁️ Cloud Management',
    description: 'Intelligent cloud infrastructure optimization',
    icon: Cloud,
    color: 'from-blue-500 to-indigo-500',
    services: specializedAITServices.filter(s => s.category === 'Cloud Management'),
    gradient: 'from-blue-500/20 to-indigo-500/20'
  }
];

const allServices = [
  ...realMicroSaasServices2025,
  ...innovativeAIServices,
  ...innovativeMicroSaasExpansion,
  ...specializedAITServices,
  ...innovativeBusinessSolutions
];

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || 
                           service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', ...Array.from(new Set(allServices.map(s => s.category)))];

  return (
    <>
      <Head>
        <title>Innovative Micro SAAS Services & AI Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive range of innovative micro SAAS services, AI-powered solutions, and cutting-edge IT infrastructure. Transform your business with Zion Tech Group's advanced technology solutions." />
        <meta name="keywords" content="micro SAAS, AI services, IT solutions, business automation, cloud management, cybersecurity, data analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                Innovative Micro SAAS Services
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
              >
                Transform your business with our comprehensive suite of AI-powered micro SAAS solutions, 
                cutting-edge IT infrastructure, and innovative business optimization platforms.
              </motion.p>
              
              {/* Contact Information */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-gray-300">Mobile</p>
                    <p className="text-white font-semibold">{contactInfo.mobile}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Email</p>
                    <p className="text-white font-semibold">{contactInfo.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Address</p>
                    <p className="text-white font-semibold">{contactInfo.address}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800 text-white">
                    {category}
                  </option>
                ))}
              </select>

              {/* View Mode Toggle */}
              <div className="flex bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-400'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-400'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          <div className="space-y-12">
            {serviceCategories.map((category) => {
              const categoryServices = filteredServices.filter(service => 
                service.category === category.id || category.services.includes(service)
              );
              
              if (categoryServices.length === 0) return null;

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">{category.title}</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">{category.description}</p>
                  </div>

                  <div className={`grid gap-6 ${
                    viewMode === 'grid' 
                      ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                      : 'grid-cols-1'
                  }`}>
                    {categoryServices.map((service) => (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 ${
                          viewMode === 'list' ? 'flex items-center space-x-4' : ''
                        }`}
                      >
                        <div className={`${viewMode === 'list' ? 'flex-shrink-0' : 'mb-4'}`}>
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl`}>
                            {service.icon}
                          </div>
                        </div>
                        
                        <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                          <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                          <p className="text-gray-300 mb-3">{service.tagline}</p>
                          
                          {viewMode === 'grid' && (
                            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                              {service.description}
                            </p>
                          )}

                          <div className="flex items-center justify-between mb-4">
                            <div className="text-2xl font-bold text-white">
                              ${service.price.monthly}
                              <span className="text-sm text-gray-400 font-normal">/month</span>
                            </div>
                            {service.popular && (
                              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                                Popular
                              </span>
                            )}
                          </div>

                          <div className="space-y-2 mb-4">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <div key={index} className="flex items-center text-sm text-gray-300">
                                <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 text-sm text-gray-400">
                              <Star className="w-4 h-4 text-yellow-400" />
                              <span>{service.rating}</span>
                              <span>({service.reviews})</span>
                            </div>
                            <Link
                              href={service.link}
                              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact our team to discuss how our innovative micro SAAS services can help 
                optimize your operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
                >
                  Call Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}