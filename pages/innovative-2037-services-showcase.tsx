import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Database, Cloud, Lock, Zap, Globe, ChartBar,
  Users, Briefcase, TrendingUp, Award, Star, Clock, DollarSign
} from 'lucide-react';

// Import our new innovative services
import { innovative2037MicroSaasServices } from '../data/innovative-2037-micro-saas-services';
import { innovative2037ITServices } from '../data/innovative-2037-it-services';
import { innovative2037AIServices } from '../data/innovative-2037-ai-services';

const Innovative2037ServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all services
  const allServices = [
    ...innovative2037MicroSaasServices.map(service => ({ ...service, type: 'micro-saas' })),
    ...innovative2037ITServices.map(service => ({ ...service, type: 'it-service' })),
    ...innovative2037AIServices.map(service => ({ ...service, type: 'ai-service' }))
  ];

  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
                           service.type === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', name: 'All Services', icon: <Grid className="w-5 h-5" />, count: allServices.length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Rocket className="w-5 h-5" />, count: innovative2037MicroSaasServices.length },
    { id: 'it-service', name: 'IT Services', icon: <Cpu className="w-5 h-5" />, count: innovative2037ITServices.length },
    { id: 'ai-service', name: 'AI Services', icon: <Brain className="w-5 h-5" />, count: innovative2037AIServices.length },
    { id: 'customer-success', name: 'Customer Success', icon: <Users className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Customer')).length },
    { id: 'data-analytics', name: 'Data Analytics', icon: <ChartBar className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Data') || s.category.includes('Analytics')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Cyber')).length },
    { id: 'cloud-infrastructure', name: 'Cloud & Infrastructure', icon: <Cloud className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Cloud') || s.category.includes('Infrastructure')).length }
  ];

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
        title="Innovative 2037 Services Showcase | Zion Tech Group"
        description="Discover our cutting-edge 2037 services including AI-powered solutions, quantum-secure infrastructure, and innovative micro SAAS platforms. Transform your business with next-generation technology."
        keywords="AI services, quantum computing, micro SAAS, IT services, cybersecurity, cloud infrastructure, Zion Tech Group"
        image="https://ziontechgroup.com/og-innovative-2037-services.jpg"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Innovative 2037
              </span>
              <br />
              <span className="text-white">Services Showcase</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge micro SAAS, IT services, and AI solutions that are transforming industries and driving the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-blue-400">
                <Star className="w-5 h-5" />
                <span>Market-Validated Solutions</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <Check className="w-5 h-5" />
                <span>Real Implementation</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <TrendingUp className="w-5 h-5" />
                <span>Proven ROI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 border-blue-600 text-white'
                        : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                    <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex bg-white/10 rounded-lg p-1 border border-white/20">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
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
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 ${
                    viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''
                  }`}
                >
                  {/* Service Header */}
                  <div className={`p-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                          POPULAR
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                    
                    <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
                      <Clock className="w-4 h-4" />
                      <span>Setup: {'setupTime' in service ? service.setupTime : 'Contact for details'}</span>
                    </div>

                    {/* Pricing */}
                    <div className="mb-4">
                      {service.price ? (
                        <div className="flex items-baseline space-x-2">
                          <span className="text-3xl font-bold text-white">
                            {typeof service.price === 'string' ? service.price : `$${service.price.monthly}`}
                          </span>
                          <span className="text-gray-400">
                            {typeof service.price === 'string' ? ('period' in service ? service.period : '/month') : '/month'}
                          </span>
                        </div>
                      ) : (
                        <div className="text-2xl font-bold text-white">Contact for pricing</div>
                      )}
                    </div>

                    {/* Trial Info */}
                    {('trialDays' in service && service.trialDays) && (
                      <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 mb-4">
                        <div className="flex items-center space-x-2 text-green-400">
                          <Check className="w-4 h-4" />
                          <span className="text-sm font-medium">{service.trialDays}-day free trial</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Service Details */}
                  <div className={`p-6 bg-white/5 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    
                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center space-x-2">
                        <Zap className="w-4 h-4" />
                        <span>Key Features</span>
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                            <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 4 && (
                          <div className="text-xs text-gray-500 mt-1">
                            +{service.features.length - 4} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Target Audience */}
                    {service.targetAudience && (
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>Perfect For</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {Array.isArray(service.targetAudience) 
                            ? service.targetAudience.slice(0, 3).map((audience, index) => (
                                <span key={index} className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded-full">
                                  {audience}
                                </span>
                              ))
                            : service.targetAudience.split(',').slice(0, 3).map((audience, index) => (
                                <span key={index} className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded-full">
                                  {audience.trim()}
                                </span>
                              ))
                          }
                        </div>
                      </div>
                    )}

                    {/* ROI and Benefits */}
                    {service.roi && (
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2 flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4" />
                          <span>Expected ROI</span>
                        </h4>
                        <p className="text-green-400 text-sm font-medium">{service.roi}</p>
                      </div>
                    )}

                    {/* Contact and CTA */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                      <a
                        href={service.link}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="mailto:kleber@ziontechgroup.com"
                        className="bg-white/10 text-white py-3 px-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-200 border border-white/20"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our team to discuss how our innovative 2037 services can help you achieve your goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-blue-400 font-medium">+1 302 464 0950</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">✉️</div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-blue-400 font-medium">kleber@ziontechgroup.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">🌐</div>
                <h3 className="text-white font-semibold mb-2">Website</h3>
                <p className="text-blue-400 font-medium">ziontechgroup.com</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-gray-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Innovative2037ServicesShowcase;