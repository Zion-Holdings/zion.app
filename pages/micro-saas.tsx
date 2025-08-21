import React, { useState } from 'react';
import Head from 'next/head';
import { Shield, Clock, DollarSign, TrendingUp, Brain, Rocket, ArrowRight, ExternalLink, Search, Filter, Grid, List, Phone, Mail, MapPin, Star, Check, Sparkles, Atom, Cpu, Globe, FlaskConical, MessageSquare } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import { enhancedRealMicroSaasServices, serviceCategories, getServicesByCategory, getPopularServices } from '../data/enhanced-real-micro-saas-services';
import { motion } from 'framer-motion';

export default function MicroSaasPage() {
  // Function to map service variants to EnhancedFuturisticCard variants
  const mapVariant = (serviceVariant: string) => {
    if (serviceVariant.includes('quantum')) return 'quantum';
    if (serviceVariant.includes('holographic')) return 'holographic';
    if (serviceVariant.includes('cyberpunk')) return 'cyberpunk';
    if (serviceVariant.includes('neural')) return 'neural';
    if (serviceVariant.includes('space')) return 'space';
    return 'default';
  };

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'innovation'>('innovation');
  const [searchQuery, setSearchQuery] = useState('');
  
  const competitiveAdvantages = [
    {
      icon: '⚡',
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes, not weeks. Our services are designed for immediate value delivery with minimal configuration.',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-500/10 to-orange-500/10'
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'No hidden fees, no enterprise sales calls. Simple monthly pricing that scales with your business needs.',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-500/10 to-emerald-500/10'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-level security, SOC 2 compliance, and 99.9% uptime guarantee for all services.',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-500/10 to-blue-500/10'
    },
    {
      icon: '📊',
      title: 'Real Business Value',
      description: 'Each service solves a specific business problem with measurable ROI and immediate impact.',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-500/10 to-purple-500/10'
    },
    {
      icon: '🌐',
      title: 'Unified Platform',
      description: 'Access all services through ziontechgroup.com with single sign-on and integrated billing.',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'from-teal-500/10 to-cyan-500/10'
    },
    {
      icon: '🎯',
      title: 'Focused Solutions',
      description: 'Specialized tools that do one thing exceptionally well, without enterprise complexity.',
      color: 'from-rose-500 to-pink-600',
      bgColor: 'from-rose-500/10 to-pink-500/10'
    }
  ];

  // Filter and sort services
  let filteredServices = selectedCategory === 'all' || selectedCategory === 'All'
    ? enhancedRealMicroSaasServices 
    : getServicesByCategory(selectedCategory);

  // Apply search filter
  if (searchQuery) {
    filteredServices = filteredServices.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.technology.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }

  // Apply sorting
  filteredServices.sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'innovation': {
        // Sort by realImplementation first, then by popularity
        if (a.realImplementation && !b.realImplementation) return -1;
        if (!a.realImplementation && b.realImplementation) return 1;
        if (a.popular && !b.popular) return -1;
        if (!a.popular && b.popular) return 1;
        return 0;
      }
      default:
        return 0;
    }
  });

  const revolutionaryServices = enhancedRealMicroSaasServices.filter(service => 
    service.realImplementation && service.popular
  );

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Head>
        <title>Micro SaaS Services - Zion Tech Group | Revolutionary Business Technology Solutions</title>
        <meta name="description" content="Explore 150+ revolutionary micro SaaS services powered by AI, quantum computing, and cutting-edge technology. Transform your business with proven ROI solutions." />
        <meta name="keywords" content="micro SaaS, AI services, quantum computing, space technology, autonomous manufacturing, cybersecurity, metaverse development, biomedical AI, business technology" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Micro SaaS Services - Zion Tech Group" />
        <meta property="og:description" content="Explore 150+ revolutionary micro SaaS services powered by AI, quantum computing, and cutting-edge technology." />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
        <meta property="og:type" content="website" />
        
        {/* Contact Information */}
        <meta name="contact:mobile" content="+1 302 464 0950" />
        <meta name="contact:email" content="kleber@ziontechgroup.com" />
        <meta name="contact:address" content="364 E Main St STE 1008 Middletown DE 19709" />
      </Head>

      <UltraAdvancedFuturisticBackground>
        {/* Hero Section */}
      <section className="futuristic-hero relative z-10">
        <div className="futuristic-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="futuristic-hero-title text-gradient-quantum">
              Revolutionary Micro SaaS Services
            </h1>
            <p className="futuristic-hero-subtitle">
              Discover 150+ cutting-edge micro SaaS solutions that deliver unprecedented ROI and competitive advantages. 
              From quantum computing to autonomous manufacturing, transform your business with next-generation technology.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button 
                href="/contact" 
                className="futuristic-button quantum-glow"
                icon={<MessageSquare className="w-5 h-5" />}
              >
                Get Started Today
              </Button>
              <Button 
                href="#services" 
                variant="outline"
                className="futuristic-button"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competitive Advantages Section */}
      <section className="futuristic-section">
        <div className="futuristic-container">
          <div className="futuristic-section-header">
            <h2 className="futuristic-section-title text-gradient-cyan">
              Why Choose Zion Tech Group?
            </h2>
            <p className="futuristic-section-subtitle">
              Discover the competitive advantages that make our micro SaaS services the preferred choice for forward-thinking businesses
            </p>
          </div>

          <div className="futuristic-grid">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                className="futuristic-feature"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="futuristic-feature-icon">{advantage.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gradient-cyan">{advantage.title}</h3>
                <p className="text-gray-400">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="futuristic-section bg-gradient-to-b from-black to-gray-900">
        <div className="futuristic-container">
          <div className="futuristic-section-header">
            <h2 className="futuristic-section-title text-gradient-rainbow">
              Featured Revolutionary Services
            </h2>
            <p className="futuristic-section-subtitle">
              Experience the future of business technology with our most popular and innovative micro SaaS solutions
            </p>
          </div>

          <div className="futuristic-grid">
            {revolutionaryServices.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="futuristic-card p-6 h-full">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 ml-1">{service.period}</span>
                    </div>
                    <div className="flex items-center justify-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm ml-2">({service.reviews})</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-4">{service.category}</div>
                    <Button
                      href={service.link}
                      variant="secondary"
                      size="sm"
                      className="w-full"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="futuristic-section">
        <div className="futuristic-container">
          <div className="futuristic-section-header">
            <h2 className="futuristic-section-title text-gradient-purple">
              All Micro SaaS Services
            </h2>
            <p className="futuristic-section-subtitle">
              Browse our complete catalog of revolutionary micro SaaS services across all technology domains
            </p>
          </div>

          {/* Search and Filter Controls */}
          <div className="futuristic-form mb-8">
            <div className="futuristic-grid">
              {/* Search */}
              <div className="futuristic-form-group">
                <label className="futuristic-form-label">Search Services</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name, description, or technology..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="futuristic-input pl-10 w-full"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="futuristic-form-group">
                <label className="futuristic-form-label">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="futuristic-input w-full"
                >
                  <option value="All">All Categories</option>
                  {serviceCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div className="futuristic-form-group">
                <label className="futuristic-form-label">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="futuristic-input w-full"
                >
                  <option value="innovation">Innovation & Popularity</option>
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="rating">Rating</option>
                </select>
              </div>

              {/* View Mode */}
              <div className="futuristic-form-group">
                <label className="futuristic-form-label">View Mode</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`futuristic-button ${viewMode === 'grid' ? 'quantum-glow' : ''}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`futuristic-button ${viewMode === 'list' ? 'quantum-glow' : ''}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid/List */}
          <div className={viewMode === 'grid' ? 'futuristic-grid' : 'space-y-6'}>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {viewMode === 'grid' ? (
                  <div className="futuristic-card p-6 h-full">
                    <div className="text-center">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                      <div className="flex items-center justify-center mb-4">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <span className="text-gray-400 ml-1">{service.period}</span>
                      </div>
                      <div className="flex items-center justify-center mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-gray-400 text-sm ml-2">({service.reviews})</span>
                      </div>
                      <div className="text-sm text-gray-400 mb-4">{service.category}</div>
                      <Button
                        href={service.link}
                        variant="secondary"
                        size="sm"
                        className="w-full"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="futuristic-card p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="text-4xl">{service.icon}</div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gradient-cyan mb-2">{service.name}</h3>
                            <p className="text-gray-400 mb-2">{service.tagline}</p>
                            <div className="flex items-center gap-4 text-sm">
                              <span className="text-cyan-400 font-semibold">{service.category}</span>
                              <div className="flex items-center">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                                <span>{service.rating}</span>
                                <span className="text-gray-500 ml-1">({service.reviews})</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gradient-purple mb-1">
                              {service.price}<span className="text-gray-400 text-lg">{service.period}</span>
                            </div>
                            <div className="text-sm text-gray-400 mb-2">{service.trialDays} day free trial</div>
                            <Button 
                              href={service.link}
                              className="futuristic-button"
                              icon={<ExternalLink className="w-4 h-4" />}
                            >
                              Learn More
                            </Button>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4">{service.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.features.slice(0, 5).map((feature, featureIndex) => (
                            <span key={featureIndex} className="futuristic-badge">
                              {feature}
                            </span>
                          ))}
                          {service.features.length > 5 && (
                            <span className="futuristic-badge">
                              +{service.features.length - 5} more
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                          <span><strong>ROI:</strong> {service.roi}</span>
                          <span><strong>Setup:</strong> {service.setupTime}</span>
                          <span><strong>Customers:</strong> {service.customers.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2 text-gradient-cyan">No services found</h3>
              <p className="text-gray-400 mb-4">
                Try adjusting your search criteria or browse all categories
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="futuristic-button"
                icon={<Filter className="w-4 h-4" />}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="futuristic-section bg-gradient-to-b from-gray-900 to-black">
        <div className="futuristic-container">
          <div className="futuristic-section-header">
            <h2 className="futuristic-section-title text-gradient-cyan">
              Ready to Transform Your Business?
            </h2>
            <p className="futuristic-section-subtitle">
              Get in touch with our team to discover how our revolutionary micro SaaS services can accelerate your growth
            </p>
          </div>

          <div className="futuristic-form max-w-4xl mx-auto">
            <div className="futuristic-grid">
              <div className="futuristic-feature text-center">
                <div className="futuristic-feature-icon">📞</div>
                <h3 className="text-xl font-bold mb-3 text-gradient-cyan">Call Us</h3>
                <p className="text-gray-400 mb-4">
                  Speak directly with our technology experts
                </p>
                <a 
                  href={`tel:${contactInfo.mobile}`}
                  className="futuristic-link text-lg font-semibold"
                >
                  {contactInfo.mobile}
                </a>
              </div>

              <div className="futuristic-feature text-center">
                <div className="futuristic-feature-icon">✉️</div>
                <h3 className="text-xl font-bold mb-3 text-gradient-purple">Email Us</h3>
                <p className="text-gray-400 mb-4">
                  Send us a detailed message about your needs
                </p>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="futuristic-link text-lg font-semibold"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div className="futuristic-feature text-center">
                <div className="futuristic-feature-icon">📍</div>
                <h3 className="text-xl font-bold mb-3 text-gradient-green">Visit Us</h3>
                <p className="text-gray-400 mb-4">
                  Our headquarters in Delaware
                </p>
                <p className="text-gray-300 text-sm">
                  {contactInfo.address}
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button 
                href="/contact" 
                className="futuristic-button quantum-glow"
                icon={<MessageSquare className="w-5 h-5" />}
              >
                Start Your Transformation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="futuristic-footer py-12">
        <div className="futuristic-container">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gradient-cyan">
              Zion Tech Group
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Leading the future of business technology with revolutionary micro SaaS services powered by AI, quantum computing, and cutting-edge innovation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <a href="/" className="futuristic-link">Home</a>
              <a href="/micro-saas" className="futuristic-link">Services</a>
              <a href="/about" className="futuristic-link">About</a>
              <a href="/contact" className="futuristic-link">Contact</a>
              <a href="/pricing" className="futuristic-link">Pricing</a>
            </div>

            <div className="text-gray-500 text-sm">
              <p>© 2024 Zion Tech Group. All rights reserved.</p>
              <p className="mt-2">
                <a href="/privacy" className="futuristic-link text-sm">Privacy Policy</a> • 
                <a href="/terms" className="futuristic-link text-sm ml-2">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      </UltraAdvancedFuturisticBackground>
    </div>
  );
}