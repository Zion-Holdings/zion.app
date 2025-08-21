import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Star, CheckCircle, ArrowRight, 
  Brain, Atom, Shield, Rocket, Target, Microscope,
  Phone, Mail, MapPin, TrendingUp, Users, Award,
  Zap, Globe, Cpu, Database, Lock, Cloud
} from 'lucide-react';

// Import all the new 2025 service data
import { realMicroSaasServices2025 } from '../data/2025-real-micro-saas-services';
import { innovativeAIServices2025 } from '../data/2025-innovative-ai-services';
import { innovativeITServices2025 } from '../data/2025-innovative-it-services';
import { emergingTechServices2025 } from '../data/2025-emerging-tech-services';

// Import advanced 2025 services
import { advancedMicroSaasServices2025 } from '../data/2025-advanced-micro-saas-services';
import { advancedAIServices2025 } from '../data/2025-advanced-ai-services';
import { advancedITServices2025 } from '../data/2025-advanced-it-services';
import { advancedEmergingTechServices2025 } from '../data/2025-advanced-emerging-tech-services';

// Import existing services for comprehensive coverage
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';
import { quantumSpaceServices } from '../data/quantum-space-services';
import { enterpriseITServices } from '../data/enterprise-it-services';

// Define a union type for all service types
type ServiceUnion = 
  | typeof realMicroSaasServices2025[0]
  | typeof innovativeAIServices2025[0]
  | typeof innovativeITServices2025[0]
  | typeof emergingTechServices2025[0]
  | typeof enhancedRealMicroSaasServices[0]
  | typeof innovativeMicroSaasServices[0]
  | typeof quantumSpaceServices[0]
  | typeof enterpriseITServices[0];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories: Array<{
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  services: ServiceUnion[];
  gradient: string;
}> = [
  {
    id: 'ai-consciousness',
    title: '🧠 AI & Consciousness',
    description: 'Revolutionary AI consciousness and emotional intelligence platforms',
    icon: Brain,
    color: 'from-violet-500 to-purple-500',
    services: [...innovativeAIServices2025, ...advancedAIServices2025],
    gradient: 'from-violet-500/20 to-indigo-500/20'
  },
  {
    id: 'quantum-emerging',
    title: '⚛️ Quantum & Emerging Tech',
    description: 'Quantum computing, DNA computing, and beyond',
    icon: Atom,
    color: 'from-indigo-500 to-blue-500',
    services: [...emergingTechServices2025, ...advancedEmergingTechServices2025],
    gradient: 'from-indigo-500/20 to-cyan-500/20'
  },
  {
    id: 'enterprise-it',
    title: '🏙️ Enterprise IT',
    description: 'Autonomous operations and zero-trust security',
    icon: Shield,
    color: 'from-blue-500 to-cyan-500',
    services: [...innovativeITServices2025, ...advancedITServices2025],
    gradient: 'from-blue-500/20 to-teal-500/20'
  },
  {
    id: 'space-metaverse',
    title: '🌌 Space & Metaverse',
    description: 'Space mining, metaverse development, and more',
    icon: Rocket,
    color: 'from-teal-500 to-emerald-500',
    services: [...quantumSpaceServices],
    gradient: 'from-teal-500/20 to-green-500/20'
  },
  {
    id: 'micro-saas',
    title: '🎯 Micro SAAS',
    description: 'Innovative solutions for every business need',
    icon: Target,
    color: 'from-green-500 to-yellow-500',
    services: [...realMicroSaasServices2025, ...enhancedRealMicroSaasServices, ...advancedMicroSaasServices2025],
    gradient: 'from-green-500/20 to-orange-500/20'
  },
  {
    id: 'research-development',
    title: '🔬 Research & Development',
    description: 'Breakthrough technologies and innovations',
    icon: Microscope,
    color: 'from-orange-500 to-red-500',
    services: [...enterpriseITServices],
    gradient: 'from-orange-500/20 to-pink-500/20'
  }
];

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const allServices = serviceCategories.flatMap(category => category.services);
  
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ('tags' in service && service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    
    const matchesCategory = selectedCategory === 'all' || 
                           serviceCategories.find(cat => cat.id === selectedCategory)?.services.includes(service);
    
    // Handle different pricing structures
    let servicePrice = 0;
    if ('pricing' in service && service.pricing) {
      if ('starter' in service.pricing && service.pricing.starter?.price) {
        servicePrice = service.pricing.starter.price;
      } else if ('research' in service.pricing && service.pricing.research?.price) {
        servicePrice = service.pricing.research.price;
      }
    }
    
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'low' && servicePrice <= 100) ||
                        (priceRange === 'medium' && servicePrice > 100 && servicePrice <= 500) ||
                        (priceRange === 'high' && servicePrice > 500);
    
    return matchesSearch && matchesCategory && matchesPrice;
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
    <>
      <Head>
        <title>Innovative Services & Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive range of innovative micro SAAS services, AI solutions, quantum computing platforms, and emerging technology services. Transform your business with cutting-edge solutions." />
        <meta name="keywords" content="micro SAAS, AI services, quantum computing, emerging technology, IT services, business solutions" />
        <meta property="og:title" content="Innovative Services & Solutions | Zion Tech Group" />
        <meta property="og:description" content="Discover our comprehensive range of innovative micro SAAS services, AI solutions, quantum computing platforms, and emerging technology services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Revolutionary Services
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover our comprehensive range of innovative micro SAAS services, AI solutions, quantum computing platforms, and emerging technology services that are transforming industries worldwide.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 text-cyan-400">
                <CheckCircle className="w-5 h-5" />
                <span>500+ Services</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Star className="w-5 h-5" />
                <span>Industry Leading</span>
              </div>
              <div className="flex items-center gap-2 text-pink-400">
                <TrendingUp className="w-5 h-5" />
                <span>Future Ready</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Search */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services, features, or categories..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    {serviceCategories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.title}
                      </option>
                    ))}
                  </select>

                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="all">All Prices</option>
                    <option value="low">Under $100/month</option>
                    <option value="medium">$100 - $500/month</option>
                    <option value="high">Over $500/month</option>
                  </select>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {serviceCategories.map((category) => (
                <motion.div
                  key={category.id}
                  className={`relative group cursor-pointer transition-all duration-300 transform hover:scale-105`}
                  variants={itemVariants}
                  onClick={() => setSelectedCategory(category.id === selectedCategory ? 'all' : category.id)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 group-hover:border-gray-600 transition-all duration-300">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-4`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-400 mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{category.services.length} services</span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {filteredServices.length} Services Found
              </h2>
              <p className="text-gray-400">
                Discover innovative solutions that transform your business
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  className="group bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
                  variants={itemVariants}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-400">5.0</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {'tags' in service && service.tags && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {service.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-lg"
                            >
                              {tag}
                            </span>
                          ))}
                          {service.tags.length > 3 && (
                            <span className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-lg">
                              +{service.tags.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {'marketSize' in service && service.marketSize && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Market Size:</span>
                          <span className="text-cyan-400 font-semibold">{service.marketSize}</span>
                        </div>
                      </div>
                    )}

                    <div className="mb-6">
                      <div className="text-sm text-gray-400 mb-2">Starting at:</div>
                      <div className="text-2xl font-bold text-white">
                        ${(() => {
                          if ('pricing' in service && service.pricing) {
                            if ('starter' in service.pricing && service.pricing.starter?.price) {
                              return service.pricing.starter.price;
                            } else if ('research' in service.pricing && service.pricing.research?.price) {
                              return service.pricing.research.price;
                            }
                          }
                          return 'Contact';
                        })()}
                        <span className="text-sm text-gray-400 font-normal">
                          {(() => {
                            if ('pricing' in service && service.pricing) {
                              if ('starter' in service.pricing && service.pricing.starter?.price) {
                                return '/month';
                              } else if ('research' in service.pricing && service.pricing.research?.price) {
                                return '/project';
                              }
                            }
                            return '';
                          })()}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={'website' in service && service.website ? service.website : '#'}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105"
                      >
                        Learn More
                      </a>
                      <button className="px-4 py-3 border border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-cyan-400 rounded-xl transition-all duration-300">
                        <Phone className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredServices.length === 0 && (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-gray-400 text-lg mb-4">
                  No services found matching your criteria
                </div>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setPriceRange('all');
                  }}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-gray-800"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our innovative services can drive your success
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-pink-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  className="border border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-cyan-400 font-semibold py-4 px-8 rounded-xl transition-all duration-300"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}