import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Star, Users, TrendingUp,
  ArrowRight, Check, Zap, Shield, Brain, Rocket,
  Globe, Lock, BarChart3, Palette, Truck, Heart
} from 'lucide-react';

// Import our new innovative breakthrough services
import { innovativeMicroSaasBreakthroughs2025 } from '../data/2025-innovative-micro-saas-breakthroughs';
import { innovativeITInfrastructureBreakthroughs2025 } from '../data/2025-innovative-it-infrastructure-breakthroughs';
import { innovativeAIBreakthroughs2025 } from '../data/2025-innovative-ai-breakthroughs';

const InnovativeBreakthroughServicesShowcase2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allServices = [
    ...innovativeMicroSaasBreakthroughs2025,
    ...innovativeITInfrastructureBreakthroughs2025,
    ...innovativeAIBreakthroughs2025
  ];

  const categories = ['all', ...new Set(allServices.map(service => service.category))];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Innovative Breakthrough Services Showcase | Zion Tech Group"
        description="Discover revolutionary micro SAAS, IT infrastructure, and AI services that are transforming industries. Real, innovative, and market-ready solutions with proven ROI."
        keywords={["innovative services", "breakthrough technology", "micro SAAS", "AI services", "IT infrastructure", "quantum computing", "edge computing", "zero-trust security"]}
        ogImage="/og-innovative-breakthrough-services.jpg"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                2025 Innovative Breakthrough Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary micro SAAS, IT infrastructure, and AI services that are transforming industries. 
              Real, innovative, and market-ready solutions with proven ROI and competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-yellow-400">
                <Star className="w-5 h-5 mr-2" />
                <span className="text-white">15+ Breakthrough Services</span>
              </div>
              <div className="flex items-center text-green-400">
                <Users className="w-5 h-5 mr-2" />
                <span className="text-white">1000+ Satisfied Customers</span>
              </div>
              <div className="flex items-center text-blue-400">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span className="text-white">300%+ Average ROI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-purple-600 text-white'
                        : 'bg-white/20 text-gray-300 hover:bg-white/30'
                    }`}
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex bg-white/20 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 ${
                  viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''
                }`}
              >
                {/* Service Header */}
                <div className={`p-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`text-4xl ${service.color.includes('from-') ? 'bg-gradient-to-r ' + service.color + ' bg-clip-text text-transparent' : ''}`}>
                      {service.icon}
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-white">
                      {service.price}
                      <span className="text-gray-400 text-sm font-normal">{service.period}</span>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 mr-1" />
                      <span className="text-white text-sm">{service.rating}</span>
                      <span className="text-gray-400 text-sm ml-1">({service.reviews})</span>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{service.customers} customers</span>
                  </div>
                </div>

                {/* Service Content */}
                <div className={`p-6 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.slice(0, 6).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <Check className="w-3 h-3 mr-2 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Position */}
                  <div className="mb-4 p-3 bg-white/5 rounded-lg">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <BarChart3 className="w-4 h-4 mr-2 text-blue-400" />
                      Market Position
                    </h4>
                    <p className="text-sm text-gray-300">{service.marketPosition}</p>
                  </div>

                  {/* ROI & Benefits */}
                  <div className="mb-4 p-3 bg-white/5 rounded-lg">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
                      ROI & Benefits
                    </h4>
                    <p className="text-sm text-gray-300">{service.roi}</p>
                  </div>

                  {/* Technology Stack */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <Brain className="w-4 h-4 mr-2 text-purple-400" />
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technology.slice(0, 4).map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-white/10 text-xs text-gray-300 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact & Action */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={service.link}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                      className="px-6 py-3 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-200 text-center"
                    >
                      Contact Sales
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-300">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our innovative breakthrough services are designed to give you a competitive edge. 
              Contact us today to learn how we can help you achieve extraordinary results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="text-white font-semibold mb-2">Call Us</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-4">✉️</div>
                <h3 className="text-white font-semibold mb-2">Email Us</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-4">📍</div>
                <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Innovative Services Consultation"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 text-lg"
              >
                Get Free Consultation
              </a>
              <a
                href="https://ziontechgroup.com"
                className="border border-white/30 text-white py-4 px-8 rounded-xl font-semibold hover:bg-white/10 transition-all duration-200 text-lg"
              >
                Visit Our Website
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeBreakthroughServicesShowcase2025;