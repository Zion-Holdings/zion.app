import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Check, Star, Users, Zap, Shield, Globe, 
  TrendingUp, Award, Clock, CheckCircle, ExternalLink,
  Brain, Atom, Rocket, Cpu, Database, Target, Sparkles,
  ChevronRight, Search, Filter, Grid, List
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import { advancedMicroSaasServices2026 } from '../data/2026-advanced-micro-saas-expansion';
import { specializedIndustrySolutions2026 } from '../data/2026-specialized-industry-solutions';

export default function Comprehensive2026ServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Combine all services
  const allServices = [...advancedMicroSaasServices2026, ...specializedIndustrySolutions2026];

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'AI & Machine Learning', name: 'AI & ML', icon: '🧠', count: allServices.filter(s => s.category === 'AI & Machine Learning').length },
    { id: 'Quantum Computing & AI', name: 'Quantum AI', icon: '⚛️', count: allServices.filter(s => s.category === 'Quantum Computing & AI').length },
    { id: 'Cybersecurity', name: 'Security', icon: '🛡️', count: allServices.filter(s => s.category === 'Cybersecurity').length },
    { id: 'Edge Computing & IoT', name: 'Edge & IoT', icon: '🌐', count: allServices.filter(s => s.category === 'Edge Computing & IoT').length },
    { id: 'Healthcare AI', name: 'Healthcare', icon: '🏥', count: allServices.filter(s => s.category === 'Healthcare AI').length },
    { id: 'Blockchain & DeFi', name: 'Blockchain', icon: '🔗', count: allServices.filter(s => s.category === 'Blockchain & DeFi').length },
    { id: 'Space Technology', name: 'Space Tech', icon: '🛰️', count: allServices.filter(s => s.category === 'Space Technology').length },
    { id: 'Neural Technology & BCI', name: 'Neural Tech', icon: '🧬', count: allServices.filter(s => s.category === 'Neural Technology & BCI').length },
    { id: 'DevOps & Infrastructure', name: 'DevOps', icon: '⚙️', count: allServices.filter(s => s.category === 'DevOps & Infrastructure').length },
    { id: 'Financial Technology', name: 'FinTech', icon: '💰', count: allServices.filter(s => s.category === 'Financial Technology').length },
    { id: 'Energy & Sustainability', name: 'Energy', icon: '⚡', count: allServices.filter(s => s.category === 'Energy & Sustainability').length },
    { id: 'Transportation & Logistics', name: 'Logistics', icon: '🚚', count: allServices.filter(s => s.category === 'Transportation & Logistics').length },
    { id: 'Education Technology', name: 'EdTech', icon: '🎓', count: allServices.filter(s => s.category === 'Education Technology').length },
    { id: 'Real Estate Technology', name: 'PropTech', icon: '🏠', count: allServices.filter(s => s.category === 'Real Estate Technology').length },
    { id: 'Legal Technology', name: 'LegalTech', icon: '⚖️', count: allServices.filter(s => s.category === 'Legal Technology').length },
    { id: 'Manufacturing Technology', name: 'Manufacturing', icon: '🏭', count: allServices.filter(s => s.category === 'Manufacturing Technology').length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData?.icon || '🚀';
  };

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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>2026 Comprehensive Services Showcase — Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive collection of innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services for 2026. Real solutions with proven ROI." />
        <meta property="og:title" content="2026 Comprehensive Services Showcase — Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive collection of innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services for 2026." />
        <meta name="keywords" content="micro SAAS, AI services, quantum computing, cybersecurity, edge computing, space technology, neural interfaces, Zion Tech Group, 2026 services" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-2026-services-showcase" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              2026 Comprehensive Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover our revolutionary collection of micro SAAS services, AI solutions, quantum technologies, 
              and cutting-edge IT services that are transforming industries and driving the future of technology.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">{allServices.length}+</div>
                <div className="text-white/60">Services Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">15+</div>
                <div className="text-white/60">Technology Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">$500B+</div>
                <div className="text-white/60">Total Market Size</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">300%+</div>
                <div className="text-white/60">Average ROI</div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Ready to Transform Your Business?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">📱</span>
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">✉️</span>
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">📍</span>
                  <span>Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:bg-white/20"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-white/10 text-white/60 hover:bg-white/20'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-white/10 text-white/60 hover:bg-white/20'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
          >
            <AnimatePresence mode="wait">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className={viewMode === 'grid' ? 
                    "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl" :
                    "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300"
                  }
                >
                  {/* Service Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{service.icon}</span>
                        <div>
                          <h3 className="text-xl font-bold text-white">{service.name}</h3>
                          <p className="text-white/60 text-sm">{service.tagline}</p>
                        </div>
                      </div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                          POPULAR
                        </span>
                      )}
                    </div>

                    <p className="text-white/80 mb-4 leading-relaxed">{service.description}</p>

                    {/* Price and Trial */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-cyan-400">
                        {service.price}<span className="text-white/60 text-lg">{service.period}</span>
                      </div>
                      <div className="text-sm text-white/60">
                        {service.trialDays} days free trial
                      </div>
                    </div>

                    {/* Market Position */}
                    <div className="bg-white/5 rounded-lg p-3 mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Market Position</h4>
                      <p className="text-xs text-white/70">{service.marketPosition}</p>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits and ROI */}
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-3 mb-4">
                      <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits & ROI</h4>
                      <p className="text-xs text-white/70">{service.roi}</p>
                    </div>

                    {/* Technology Stack */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Technology Stack</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.technology.slice(0, 4).map((tech, idx) => (
                          <span key={idx} className="text-xs bg-white/10 text-white/60 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Target Audience */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Target Audience</h4>
                      <p className="text-xs text-white/70">{service.targetAudience}</p>
                    </div>

                    {/* Setup and Contact */}
                    <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                      <span>Setup: {service.setupTime}</span>
                      <span>Rating: {service.rating}/5 ({service.reviews} reviews)</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
                      >
                        Learn More
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <button
                        onClick={() => setSelectedService(service.id)}
                        className="px-4 py-3 border border-white/20 text-white hover:border-cyan-400 transition-all duration-300 rounded-lg"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-white/60">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedService && (() => {
                const service = allServices.find(s => s.id === selectedService);
                if (!service) return null;

                return (
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <span className="text-5xl">{service.icon}</span>
                        <div>
                          <h2 className="text-3xl font-bold text-white">{service.name}</h2>
                          <p className="text-xl text-white/60">{service.tagline}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedService(null)}
                        className="text-white/60 hover:text-white text-2xl"
                      >
                        ×
                      </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div>
                        <div className="mb-6">
                          <h3 className="text-xl font-semibold text-cyan-400 mb-3">Description</h3>
                          <p className="text-white/80 leading-relaxed">{service.description}</p>
                        </div>

                        <div className="mb-6">
                          <h3 className="text-xl font-semibold text-cyan-400 mb-3">Features</h3>
                          <div className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-white/80">
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h3 className="text-xl font-semibold text-cyan-400 mb-3">Benefits</h3>
                          <div className="space-y-2">
                            {service.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-white/80">
                                <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div>
                        <div className="mb-6">
                          <h3 className="text-xl font-semibold text-cyan-400 mb-3">Pricing & Market</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-white/60">Our Price:</span>
                              <span className="text-2xl font-bold text-cyan-400">{service.price}{service.period}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/60">Market Average:</span>
                              <span className="text-white/80">{service.averageMarketPrice}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/60">Trial Period:</span>
                              <span className="text-white/80">{service.trialDays} days</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/60">Setup Time:</span>
                              <span className="text-white/80">{service.setupTime}</span>
                            </div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h3 className="text-xl font-semibold text-cyan-400 mb-3">Technology & Integrations</h3>
                          <div className="space-y-3">
                            <div>
                              <h4 className="text-sm font-medium text-white/80 mb-2">Technology Stack</h4>
                              <div className="flex flex-wrap gap-1">
                                {service.technology.map((tech, idx) => (
                                  <span key={idx} className="text-xs bg-white/10 text-white/60 px-2 py-1 rounded">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-white/80 mb-2">Integrations</h4>
                              <div className="flex flex-wrap gap-1">
                                {service.integrations.slice(0, 6).map((integration, idx) => (
                                  <span key={idx} className="text-xs bg-white/10 text-white/60 px-2 py-1 rounded">
                                    {integration}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h3 className="text-xl font-semibold text-cyan-400 mb-3">Market Information</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-white/60">Market Size:</span>
                              <span className="text-white/80">{service.marketSize}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/60">Growth Rate:</span>
                              <span className="text-white/80">{service.growthRate}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/60">Customers:</span>
                              <span className="text-white/80">{service.customers}+</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/60">Rating:</span>
                              <span className="text-white/80">{service.rating}/5 ({service.reviews} reviews)</span>
                            </div>
                          </div>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-4">
                          <h3 className="text-lg font-semibold text-cyan-400 mb-3">Get Started Today</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-400">📱</span>
                              <span className="text-white/80">{service.contactInfo.mobile}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-400">✉️</span>
                              <span className="text-white/80">{service.contactInfo.email}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-400">🌐</span>
                              <span className="text-white/80">{service.contactInfo.website}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-8 pt-6 border-t border-white/10">
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                      >
                        Visit Service Page
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <button
                        onClick={() => setSelectedService(null)}
                        className="px-8 py-4 border border-white/20 text-white hover:border-cyan-400 transition-all duration-300 rounded-lg"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <EnhancedFooter />
    </div>
  );
}