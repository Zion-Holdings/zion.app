import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, ArrowRight, CheckCircle, Star, Users, 
  Zap, Shield, Brain, Atom, Rocket, Globe, Building,
  Target, TrendingUp, Award, Cpu, Database, Lock, Satellite,
  Search, Grid, List, Check, Palette, 
  Heart, Truck, GraduationCap, Phone, Mail, MapPin, ExternalLink
} from 'lucide-react';
import Link from 'next/link';

// Import our comprehensive service data
import { innovative2025MicroSaasExpansion } from '../data/innovative-2025-micro-saas-expansion';
import { innovative2025ITServicesExpansion } from '../data/innovative-2025-it-services-expansion';
import { innovative2025AIServicesExpansion } from '../data/innovative-2025-ai-services-expansion';

const ComprehensiveServicesShowcase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'popular' | 'price' | 'rating' | 'newest'>('popular');

  // Combine all services
  const allServices = [...comprehensiveServicesExpansion, ...advancedInnovativeServices];

  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.popular ? 1 : -1;
      case 'price':
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      default:
        return 0;
    }
  });

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  const serviceCategories = [
    {
      category: "AI Consciousness & Evolution",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      services: [
        {
          name: "AI Consciousness Evolution Platform 2045",
          description: "Revolutionary platform for developing conscious AI systems",
          path: "/ai-consciousness-evolution-2045",
          features: ["Consciousness Mapping", "Ethical AI Development", "Neural Evolution"]
        },
        {
          name: "Quantum AI Cognitive Platform 2045",
          description: "Quantum-powered cognitive computing solutions",
          path: "/quantum-ai-cognitive-2045",
          features: ["Quantum Cognition", "Neural Networks", "Advanced Analytics"]
        }
      ]
    },
    {
      category: "Cybersecurity & Defense",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      services: [
        {
          name: "Advanced Threat Detection",
          description: "AI-powered cybersecurity threat detection and prevention",
          path: "/security",
          features: ["Real-time Monitoring", "AI Analysis", "Automated Response"]
        },
        {
          name: "Quantum Encryption",
          description: "Unbreakable quantum encryption for data protection",
          path: "/security",
          features: ["Quantum Key Distribution", "Post-Quantum Security", "Zero Trust"]
        }
      ]
    },
    {
      category: "Space Technology & Exploration",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      services: [
        {
          name: "Satellite Systems",
          description: "Advanced satellite technology for global connectivity",
          path: "/services",
          features: ["Low Earth Orbit", "High-Speed Data", "Global Coverage"]
        },
        {
          name: "Space Infrastructure",
          description: "Building the foundation for space exploration",
          path: "/services",
          features: ["Space Stations", "Lunar Bases", "Mars Colonies"]
        }
      ]
    },
    {
      category: "Business Intelligence & Analytics",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      services: [
        {
          name: "Market Intelligence Platform",
          description: "AI-driven market analysis and predictive insights",
          path: "/market-pricing",
          features: ["Real-time Data", "Predictive Analytics", "Market Trends"]
        },
        {
          name: "Business Process Optimization",
          description: "Streamline operations with AI-powered automation",
          path: "/services",
          features: ["Process Mining", "Automation", "Efficiency Metrics"]
        }
      ]
    }
  ];

        {/* Services Grid/List */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {filteredServices.length} Innovative Services Available
            </h2>
            <p className="text-gray-300">
              Discover cutting-edge solutions across {categories.length - 1} categories
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {item.metric}
                  </div>
                  <div className="text-gray-400 font-medium">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {category === 'all' ? 'All Services' : category}
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex bg-white/20 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-white hover:bg-white/20'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-white hover:bg-white/20'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid/List */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AnimatePresence mode="wait">
            {filteredServices.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-gray-400 text-xl">No services found matching your criteria.</div>
              </motion.div>
            ) : (
              <motion.div
                key={`${viewMode}-${selectedCategory}-${searchQuery}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 ${
                      viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''
                    }`}
                  >
                    {/* Service Header */}
                    <div className={`p-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{service.icon}</div>
                        {service.popular && (
                          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                            POPULAR
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                      
                      {/* Pricing */}
                      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-4 mb-4">
                        <div className="text-2xl font-bold text-white">
                          ${service.price.monthly}
                          <span className="text-lg text-gray-300">/month</span>
                        </div>
                        <div className="text-sm text-gray-300">
                          ${service.price.yearly}/year (save ${(service.price.monthly * 12 - service.price.yearly).toLocaleString()})
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          {service.price.trialDays}-day free trial • Setup: {service.price.setupTime}
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full mb-4">
                        {service.category}
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className={`p-6 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      
                      {/* Key Benefits */}
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Key Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-300">
                              <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Market Position */}
                      <div className="mb-4 p-3 bg-white/10 rounded-lg">
                        <h4 className="text-white font-semibold mb-2 text-sm">Market Position:</h4>
                        <p className="text-xs text-gray-300">{service.marketPosition}</p>
                      </div>

                      {/* ROI */}
                      <div className="mb-4 p-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg">
                        <h4 className="text-white font-semibold mb-2 text-sm">ROI:</h4>
                        <p className="text-xs text-gray-300">{service.roi}</p>
                      </div>

                      {/* Contact & Action */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center"
                        >
                          Learn More
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                        <a
                          href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                          className="flex-1 bg-white/20 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-200 flex items-center justify-center"
                        >
                          Contact Sales
                          <Mail className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Featured Technologies */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Core Technologies
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our revolutionary technologies power the future of computing and exploration
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-semibold px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {service.tagline}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-blue-400">
                      {service.price}
                      <span className="text-sm text-gray-400">{service.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm">{service.rating}</span>
                      <span className="text-gray-400 text-sm">({service.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                      {service.category}
                    </span>
                    <a
                      href={service.link}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="text-4xl flex-shrink-0">{service.icon}</div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-1">
                            {service.name}
                          </h3>
                          <p className="text-gray-300 text-sm mb-2">
                            {service.tagline}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-400">
                            {service.price}
                            <span className="text-sm text-gray-400">{service.period}</span>
                          </div>
                          {service.popular && (
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-semibold px-2 py-1 rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features</h4>
                          <div className="space-y-1">
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                                <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">Service Details</h4>
                          <div className="space-y-1 text-sm text-gray-400">
                            <div>Category: {service.category}</div>
                            <div>Setup Time: {service.setupTime}</div>
                            <div>Trial: {service.trialDays} days</div>
                            <div>Rating: {service.rating}/5 ({service.reviews} reviews)</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span className="bg-gray-700 px-2 py-1 rounded">{service.category}</span>
                          <span>Market: {service.marketSize}</span>
                          <span>Growth: {service.growthRate}</span>
                        </div>
                        <a
                          href={service.link}
                          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-gray-600">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our team of experts is ready to help you implement these innovative solutions. 
            Get in touch today to discuss your specific needs and discover how our services 
            can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.mobile}`}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Join the future of technology with Zion Tech Group's revolutionary services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 border border-white/20">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our team of experts is ready to help you implement the perfect solution for your business needs. 
                Get in touch today to discuss your requirements and discover how our services can transform your operations.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-lg"
                >
                  Get Free Consultation
                </a>
                <a
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-200 text-lg"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black/50 border-t border-white/20 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-400">
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
              <p className="mt-2">
                Transforming businesses through innovative technology solutions
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default ComprehensiveServicesShowcase;