import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  ChevronRight, ChevronLeft, ExternalLink, Users, Award, Clock, CheckCircle, Zap as ZapIcon,
  Phone, Mail, MapPin, DollarSign, Calendar, Headphones, Code, Server, Lock, BarChart3, Building
} from 'lucide-react';

// Import our real services
import { realEnterpriseMicroSaas2025 } from '../data/2025-real-enterprise-micro-saas';
import { realAIServices2025 } from '../data/2025-real-ai-services';
import { realITServices2025 } from '../data/2025-real-it-services';

const RealServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  // Combine all real services
  const allRealServices = [
    ...realEnterpriseMicroSaas2025,
    ...realAIServices2025,
    ...realITServices2025
  ];

  // Filter services by category and search
  const getFilteredServices = () => {
    let filtered = allRealServices;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => 
        service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        service.type.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseFloat(a.pricing.starter.replace('$', '').replace('/month', '')) - 
                 parseFloat(b.pricing.starter.replace('$', '').replace('/month', ''));
        case 'category':
          return a.category.localeCompare(b.category);
        case 'type':
          return a.type.localeCompare(b.type);
        default:
          return a.name.localeCompare(b.name);
      }
    });
    
    return filtered;
  };

  const categories = [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500', count: allRealServices.length },
    { id: 'enterprise', name: 'Enterprise Micro SAAS', icon: Building, color: 'from-emerald-500 to-teal-500', count: realEnterpriseMicroSaas2025.length },
    { id: 'ai', name: 'AI Services', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', count: realAIServices2025.length },
    { id: 'it', name: 'IT Services', icon: Cpu, color: 'from-yellow-500 to-orange-500', count: realITServices2025.length }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Real Enterprise Services 2025
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Professional, practical, and proven solutions that businesses actually need and use. 
                  From AI-powered automation to enterprise-grade infrastructure, we deliver real value.
                </p>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 max-w-4xl mx-auto border border-cyan-500/20"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-6 h-6 text-cyan-400" />
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="font-semibold">{contactInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-6 h-6 text-purple-400" />
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-semibold">{contactInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-6 h-6 text-pink-400" />
                    <div>
                      <p className="text-sm text-gray-400">Address</p>
                      <p className="font-semibold text-sm">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                  Comprehensive Service Portfolio
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our services span across enterprise micro SAAS, AI solutions, and IT infrastructure, 
                  providing end-to-end solutions for modern businesses.
                </p>
              </motion.div>

              {/* Service Categories */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
              >
                {categories.map((category) => (
                  <motion.div
                    key={category.id}
                    variants={fadeInUp}
                    className={`relative group cursor-pointer transition-all duration-300 transform hover:scale-105`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <div className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl border border-white/10 backdrop-blur-xl`}>
                      <div className="flex items-center justify-between mb-4">
                        <category.icon className="w-8 h-8 text-white" />
                        <span className="text-sm bg-white/20 px-2 py-1 rounded-full text-white">
                          {category.count}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                      <p className="text-white/80 text-sm">
                        {category.id === 'all' && 'Complete service portfolio'}
                        {category.id === 'enterprise' && 'Business automation solutions'}
                        {category.id === 'ai' && 'Intelligent AI services'}
                        {category.id === 'it' && 'Infrastructure & security'}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Search and Filter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 mb-12 border border-cyan-500/20"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Search Services</label>
                    <input
                      type="text"
                      placeholder="Search by name, description, or category..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="name">Name</option>
                      <option value="price">Price</option>
                      <option value="category">Category</option>
                      <option value="type">Type</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('all');
                      }}
                      className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Clear Filters
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Services Grid */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
              >
                {getFilteredServices().map((service) => (
                  <motion.div
                    key={service.id}
                    variants={fadeInUp}
                    className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 transform hover:scale-105"
                  >
                    {/* Service Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-gray-300 text-sm mb-3">{service.tagline}</p>
                        </div>
                        <div className="text-right">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            service.type === 'Enterprise Micro SAAS' ? 'bg-emerald-500/20 text-emerald-400' :
                            service.type === 'AI Service' ? 'bg-cyan-500/20 text-cyan-400' :
                            'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {service.type}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                    </div>

                    {/* Pricing */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">Starting at:</h4>
                      <div className="text-2xl font-bold text-cyan-400">{service.pricing.starter}</div>
                      <div className="text-sm text-gray-400 mt-1">
                        Professional: {service.pricing.professional} | Enterprise: {service.pricing.enterprise}
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-400">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Service Details */}
                    <div className="mb-6 space-y-3">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>Implementation: {service.implementationTime}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Headphones className="w-4 h-4" />
                        <span>{service.supportLevel}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <DollarSign className="w-4 h-4" />
                        <span>Market: {service.marketSize}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <a
                        href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                      >
                        Get Quote
                      </a>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="bg-white/10 hover:bg-white/20 text-white py-3 px-4 rounded-lg transition-all duration-300"
                      >
                        <Phone className="w-5 h-5" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* No Results */}
              {getFilteredServices().length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-gray-300 mb-2">No services found</h3>
                  <p className="text-gray-400 mb-6">Try adjusting your search criteria or category selection.</p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    View All Services
                  </button>
                </motion.div>
              )}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-12 border border-cyan-500/20"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Our team of experts is ready to help you implement these solutions and drive real business results. 
                  Let's discuss how we can help you achieve your goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`mailto:${contactInfo.email}?subject=Business Transformation Consultation`}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Schedule Consultation
                  </a>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-white/20"
                  >
                    Call Now
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default RealServicesShowcase2025;