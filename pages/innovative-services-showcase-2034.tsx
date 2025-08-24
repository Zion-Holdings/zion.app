import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, Star, CheckCircle, ArrowRight, 
  Brain, Atom, Shield, Rocket, Target, Microscope,
  Phone, Mail, MapPin, TrendingUp, Users, Award,
  ExternalLink, Zap, Globe, Cpu, Database, Cloud,
  Lock, BarChart3, Settings, Code, Palette, MessageSquare
} from 'lucide-react';

// Import all innovative services
import { innovativeMicroSaasSolutions } from '../data/2034-innovative-micro-saas-solutions';
import { innovativeITSolutions } from '../data/2034-innovative-it-solutions';
import { innovativeAISolutions } from '../data/2034-innovative-ai-solutions';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    id: 'micro-saas',
    title: '🎯 Micro SaaS Solutions',
    description: 'Ready-to-use business solutions that drive growth and efficiency',
    icon: Target,
    color: 'from-yellow-500 to-orange-500',
    services: innovativeMicroSaasSolutions,
    gradient: 'from-yellow-500/20 to-orange-500/20',
    count: innovativeMicroSaasSolutions.length
  },
  {
    id: 'it-solutions',
    title: '🏙️ Enterprise IT Solutions',
    description: 'Advanced IT infrastructure and enterprise solutions',
    icon: Shield,
    color: 'from-green-500 to-emerald-500',
    services: innovativeITSolutions,
    gradient: 'from-green-500/20 to-emerald-500/20',
    count: innovativeITSolutions.length
  },
  {
    id: 'ai-solutions',
    title: '🧠 AI & Machine Learning',
    description: 'Cutting-edge AI solutions for business transformation',
    icon: Brain,
    color: 'from-pink-500 to-rose-500',
    services: innovativeAISolutions,
    gradient: 'from-pink-500/20 to-rose-500/20',
    count: innovativeAISolutions.length
  }
];

export default function InnovativeServicesShowcase2034() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const allServices = [
    ...innovativeMicroSaasSolutions,
    ...innovativeITSolutions,
    ...innovativeAISolutions
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    return matchesSearch && matchesCategory;
  });

  const totalServices = allServices.length;

  return (
    <>
      <Head>
        <title>Innovative Services Showcase 2034 - Zion Tech Group | Revolutionary Micro SaaS, IT & AI Solutions</title>
        <meta name="description" content="Discover our comprehensive portfolio of innovative micro SaaS, enterprise IT, and AI solutions. Transform your business with cutting-edge technology from Zion Tech Group." />
        <meta name="keywords" content="micro SaaS, enterprise IT, AI solutions, business automation, digital transformation, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Innovative Services Showcase 2034 - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary micro SaaS, enterprise IT, and AI solutions for business transformation." />
        <meta property="og:url" content="https://ziontechgroup.com/innovative-services-showcase-2034" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Innovative Services Showcase 2034 - Zion Tech Group" />
        <meta name="twitter:description" content="Revolutionary micro SaaS, enterprise IT, and AI solutions for business transformation." />
        
        {/* Contact Information */}
        <meta name="contact:phone" content="+1 302 464 0950" />
        <meta name="contact:email" content="kleber@ziontechgroup.com" />
        <meta name="contact:address" content="364 E Main St STE 1008 Middletown DE 19709" />
        
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase-2034" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full text-cyan-300 text-lg font-medium mb-8"
            >
              <Star className="w-5 h-5 mr-2 text-cyan-400" />
              2034 Innovative Services Showcase
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">Innovation Portfolio</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Experience the future with our comprehensive portfolio of innovative micro SaaS, enterprise IT, 
              and AI solutions designed to transform businesses and drive unprecedented growth.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
            >
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{totalServices}+</div>
                <div className="text-gray-300">Innovative Services</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">$100B+</div>
                <div className="text-gray-300">Market Opportunity</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300">Expert Support</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-center mb-16"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Service Categories
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className={`p-8 rounded-2xl bg-gradient-to-br ${category.gradient} border border-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white">{category.count}</div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                    <p className="text-gray-200 mb-6 leading-relaxed">{category.description}</p>
                    
                    <button
                      onClick={() => setSelectedCategory(category.id)}
                      className="w-full py-3 px-6 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-medium transition-all duration-200 hover:scale-105"
                    >
                      Explore Services
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-black/30 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>

                {/* Category Filter */}
                <div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    {serviceCategories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Results Count */}
                <div className="flex items-center justify-center">
                  <span className="text-gray-300">
                    {filteredServices.length} of {totalServices} services
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              {filteredServices.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group relative"
                    >
                      <div className="bg-black/40 border border-white/10 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:border-cyan-500/50">
                        {/* Service Header */}
                        <div className="mb-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                              <Target className="w-6 h-6 text-cyan-400" />
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-cyan-400 font-medium">{service.category}</div>
                              <div className="text-xs text-gray-400">{service.launchDate}</div>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                            {service.name}
                          </h3>
                          
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        {/* Key Features */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
                          <div className="space-y-2">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                            {service.features.length > 3 && (
                              <div className="text-sm text-gray-400">
                                +{service.features.length - 3} more features
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Pricing */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-white mb-3">Starting From</h4>
                          <div className="text-2xl font-bold text-cyan-400">
                            {service.pricing.starter}
                          </div>
                        </div>

                        {/* Benefits */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-white mb-3">Key Benefits</h4>
                          <div className="space-y-2">
                            {service.benefits.slice(0, 2).map((benefit, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-300">
                                <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-3">
                          <a
                            href={service.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-2 px-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 text-center"
                          >
                            View Demo
                          </a>
                          <a
                            href={service.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-2 px-4 border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-all duration-200"
                          >
                            Learn More
                          </a>
                        </div>

                        {/* Contact Info */}
                        <div className="mt-6 pt-6 border-t border-white/10">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center text-gray-400">
                              <Mail className="w-4 h-4 mr-2" />
                              <span>{service.contact}</span>
                            </div>
                            <a
                              href={`mailto:${service.contact}`}
                              className="text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                              Contact
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <div className="text-6xl mb-6">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                  <p className="text-gray-400 mb-8">Try adjusting your search criteria or browse all categories.</p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                  >
                    View All Services
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-2xl p-12 backdrop-blur-sm"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Contact our team of experts to discuss how our innovative solutions can drive your business forward.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-2xl shadow-cyan-500/25"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-6 h-6" />
                </a>
                
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-black/50 border-2 border-cyan-500/50 text-cyan-300 font-bold text-lg rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
                >
                  <span>Contact Sales</span>
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}