import React, { useState } from 'react';
import Head from 'next/head';
import { 
  Search, Filter, Grid, List, Star, Users, 
  TrendingUp, Clock, Shield, Zap, Brain, 
  Globe, Rocket, Cpu, Database, Lock, 
  Cloud, Server, Code, BarChart3, Target
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraFuturisticServiceCard from '../components/ui/UltraFuturisticServiceCard';
import Card from '../components/ui/Card';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { advancedITServices } from '../data/advanced-it-services';
import { specializedAIServices } from '../data/specialized-ai-services';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'popularity' | 'newest'>('popularity');

  // Combine all services
  const allServices = [
    ...enhancedRealMicroSaasServices,
    ...innovativeAIServices,
    ...advancedITServices,
    ...specializedAIServices,
    ...extraServices,
    ...additionalEnhancedServices,
    ...innovativeMicroSaasServices
  ];

  // Categories
  const categories = [
    { id: 'all', name: 'All Services', icon: <Grid className="w-4 h-4" />, count: allServices.length },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: <Brain className="w-4 h-4" />, count: allServices.filter(s => s.category.toLowerCase().includes('ai') || s.category.toLowerCase().includes('machine learning')).length },
    { id: 'quantum', name: 'Quantum Computing', icon: <Cpu className="w-4 h-4" />, count: allServices.filter(s => s.category.toLowerCase().includes('quantum')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Lock className="w-4 h-4" />, count: allServices.filter(s => s.category.toLowerCase().includes('security') || s.category.toLowerCase().includes('cyber')).length },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: <Cloud className="w-4 h-4" />, count: allServices.filter(s => s.category.toLowerCase().includes('cloud') || s.category.toLowerCase().includes('infrastructure')).length },
    { id: 'devops', name: 'DevOps & Automation', icon: <Code className="w-4 h-4" />, count: allServices.filter(s => s.category.toLowerCase().includes('devops') || s.category.toLowerCase().includes('automation')).length },
    { id: 'data', name: 'Data & Analytics', icon: <BarChart3 className="w-4 h-4" />, count: allServices.filter(s => s.category.toLowerCase().includes('data') || s.category.toLowerCase().includes('analytics')).length },
    { id: 'iot', name: 'IoT & Edge Computing', icon: <Server className="w-4 h-4" />, count: allServices.filter(s => s.category.toLowerCase().includes('iot') || s.category.toLowerCase().includes('edge')).length },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: <Globe className="w-4 h-4" />, count: allServices.filter(s => s.category.toLowerCase().includes('blockchain') || s.category.toLowerCase().includes('web3')).length },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-4 h-4" />, count: allServices.filter(s => s.category.toLowerCase().includes('space')).length }
  ];

  // Filter and search services
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
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
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
    <UltraAdvancedFuturisticBackground variant="quantum-holographic-advanced" intensity="ultra">
      <Head>
        <title>All Services - Zion Tech Group | 500+ Revolutionary Micro SaaS Services</title>
        <meta name="description" content="Explore our complete portfolio of 500+ revolutionary micro SaaS services, AI solutions, and IT services. Find the perfect solution for your business needs." />
        <meta name="keywords" content="micro SaaS services, AI solutions, IT services, quantum computing, cybersecurity, cloud computing, DevOps, data analytics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Explore <span className="text-cyan-400">500+ Revolutionary</span> Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              From quantum AI to space technology, discover services that will transform your business and give you unprecedented competitive advantages
            </p>
            
            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services by name, description, or category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-black/30 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                        : 'border-gray-600 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                    <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* View Controls */}
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === 'grid'
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                        : 'text-gray-400 hover:text-cyan-400'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      viewMode === 'list'
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                        : 'text-gray-400 hover:text-cyan-400'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-black/30 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500/50"
                >
                  <option value="popularity">Sort by Popularity</option>
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="newest">Sort by Newest</option>
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-300">
              Showing <span className="text-cyan-400 font-semibold">{filteredServices.length}</span> of{' '}
              <span className="text-cyan-400 font-semibold">{allServices.length}</span> services
            </p>
          </div>

          {/* Services Display */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                >
                  <UltraFuturisticServiceCard service={service} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                >
                  <Card className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="text-2xl">{service.icon}</span>
                            <div>
                              <h3 className="text-xl font-bold text-white">{service.name}</h3>
                              <p className="text-sm text-gray-400">{service.category}</p>
                            </div>
                          </div>
                          <p className="text-gray-300 mb-4">{service.description}</p>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                              <div className="text-xs text-gray-400">Price</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-semibold text-purple-400">{service.trialDays}</div>
                              <div className="text-xs text-gray-400">Trial Days</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-semibold text-green-400">{service.rating}</div>
                              <div className="text-xs text-gray-400">Rating</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-semibold text-yellow-400">{service.customers}</div>
                              <div className="text-xs text-gray-400">Customers</div>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.features.slice(0, 5).map((feature, featureIndex) => (
                              <span
                                key={featureIndex}
                                className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
                              >
                                {feature}
                              </span>
                            ))}
                            {service.features.length > 5 && (
                              <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full">
                                +{service.features.length - 5} more
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end space-y-3 ml-6">
                          <div className="text-right">
                            <div className="text-sm text-gray-400 mb-1">Market Size</div>
                            <div className="text-sm text-green-400 font-semibold">{service.marketSize}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-400 mb-1">Growth Rate</div>
                            <div className="text-sm text-purple-400 font-semibold">{service.growthRate}</div>
                          </div>
                          <Button href={service.link} variant="primary" size="sm">
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search terms or category filters
              </p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                variant="secondary"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Popular <span className="text-purple-400">Service Categories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most in-demand service categories that are transforming industries worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12" />,
                title: "AI & Machine Learning",
                description: "Revolutionary AI services including content generation, legal analysis, HR automation, and market research.",
                count: categories.find(c => c.id === 'ai-ml')?.count || 0,
                color: "from-purple-600 to-pink-600"
              },
              {
                icon: <Cpu className="w-12 h-12" />,
                title: "Quantum Computing",
                description: "Next-generation quantum services for AI, finance, cybersecurity, and scientific research.",
                count: categories.find(c => c.id === 'quantum')?.count || 0,
                color: "from-cyan-600 to-blue-600"
              },
              {
                icon: <Lock className="w-12 h-12" />,
                title: "Cybersecurity",
                description: "Advanced security solutions with quantum encryption, zero-trust architecture, and AI threat detection.",
                count: categories.find(c => c.id === 'cybersecurity')?.count || 0,
                color: "from-red-600 to-orange-600"
              },
              {
                icon: <Cloud className="w-12 h-12" />,
                title: "Cloud & Infrastructure",
                description: "Enterprise-grade cloud platforms, edge computing, and quantum-enhanced data centers.",
                count: categories.find(c => c.id === 'cloud')?.count || 0,
                color: "from-blue-600 to-indigo-600"
              },
              {
                icon: <Code className="w-12 h-12" />,
                title: "DevOps & Automation",
                description: "AI-powered DevOps platforms with intelligent automation, testing, and monitoring.",
                count: categories.find(c => c.id === 'devops')?.count || 0,
                color: "from-green-600 to-emerald-600"
              },
              {
                icon: <Rocket className="w-12 h-12" />,
                title: "Space Technology",
                description: "Complete space mission management and satellite operations platforms.",
                count: categories.find(c => c.id === 'space')?.count || 0,
                color: "from-purple-600 to-indigo-600"
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105">
                  <div className="p-6 text-center">
                    <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${category.color} mb-4`}>
                      <div className="text-white">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                    <p className="text-gray-300 mb-4">{category.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{category.count} Services</div>
                    <Button href={`/services?category=${category.title.toLowerCase().replace(/\s+/g, '-')}`} variant="secondary" className="w-full">
                      Explore Category
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team of experts can create custom solutions tailored to your specific business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg" className="text-lg px-8 py-4">
                <Users className="w-5 h-5 mr-2" />
                Contact Sales Team
              </Button>
              <Button href="/pricing" variant="secondary" size="lg" className="text-lg px-8 py-4">
                <TrendingUp className="w-5 h-5 mr-2" />
                View Pricing
              </Button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>Custom development • Enterprise solutions • Dedicated support</p>
              <p className="mt-2">
                <Star className="w-4 h-4 inline mr-1 text-yellow-400" />
                Free consultation and proof of concept
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Contact Information</h3>
              <div className="space-y-2 text-gray-300">
                <p><Users className="w-4 h-4 inline mr-2" /> {contactInfo.mobile}</p>
                <p><Target className="w-4 h-4 inline mr-2" /> {contactInfo.email}</p>
                <p><Globe className="w-4 h-4 inline mr-2" /> {contactInfo.address}</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Quick Links</h3>
              <div className="space-y-2">
                <p><a href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</a></p>
                <p><a href="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">Pricing</a></p>
                <p><a href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a></p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Support</h3>
              <div className="space-y-2">
                <p><a href="/docs" className="text-gray-300 hover:text-cyan-400 transition-colors">Documentation</a></p>
                <p><a href="/support" className="text-gray-300 hover:text-cyan-400 transition-colors">Support Center</a></p>
                <p><a href="/status" className="text-gray-300 hover:text-cyan-400 transition-colors">System Status</a></p>
              </div>
            </div>
          </div>
          <div className="border-t border-cyan-500/20 pt-8">
            <p className="text-gray-400">
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href="/privacy" className="ml-2 hover:text-cyan-400 transition-colors">Privacy Policy</a> | 
              <a href="/terms" className="ml-2 hover:text-cyan-400 transition-colors">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </UltraAdvancedFuturisticBackground>
  );
}