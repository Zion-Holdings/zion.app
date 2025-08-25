import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ENHANCED_MICRO_SAAS_SERVICES } from '../data/enhancedMicroSaasServices';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, CpuIcon, Monitor, Smartphone, Leaf, Heart, Clock, MessageSquare as MessageSquare2 } from 'lucide-react';

const ComprehensiveServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');

  const categories = [
    'all',
    'AI & Business Intelligence',
    'AI & Customer Service',
    'Blockchain & Supply Chain',
    'Quantum Computing',
    'AR/VR & Immersive Tech',
    'IoT & Smart Cities',
    'Edge Computing',
    'Cybersecurity',
    'Green Tech & Sustainability',
    'Digital Twin & Simulation',
    'FinTech & Payments',
    'HealthTech & AI',
    'EdTech & Education'
  ];

  const pricingModels = ['all', 'monthly', 'yearly', 'one-time'];

  const filteredServices = ENHANCED_MICRO_SAAS_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricing === 'all' || service.pricingModel === selectedPricing;
    
    return matchesSearch && matchesCategory && matchesPricing;
  });

  const formatPrice = (price: number, model: string) => {
    switch (model) {
      case 'monthly':
        return `$${price}/month`;
      case 'yearly':
        return `$${price * 12}/year`;
      case 'one-time':
        return `$${price.toLocaleString()}`;
      default:
        return `$${price}`;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Business Intelligence': return <Brain className="w-6 h-6" />;
      case 'AI & Customer Service': return <MessageSquare className="w-6 h-6" />;
      case 'Blockchain & Supply Chain': return <CpuIcon className="w-6 h-6" />;
      case 'Quantum Computing': return <CpuIcon className="w-6 h-6" />;
      case 'AR/VR & Immersive Tech': return <Monitor className="w-6 h-6" />;
      case 'IoT & Smart Cities': return <Smartphone className="w-6 h-6" />;
      case 'Edge Computing': return <CpuIcon className="w-6 h-6" />;
      case 'Cybersecurity': return <Shield className="w-6 h-6" />;
      case 'Green Tech & Sustainability': return <Leaf className="w-6 h-6" />;
      case 'Digital Twin & Simulation': return <Monitor className="w-6 h-6" />;
      case 'FinTech & Payments': return <CreditCard className="w-6 h-6" />;
      case 'HealthTech & AI': return <Heart className="w-6 h-6" />;
      case 'EdTech & Education': return <BookOpen className="w-6 h-6" />;
      default: return <ZapIcon2 className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Business Intelligence': return 'from-blue-500 to-purple-600';
      case 'AI & Customer Service': return 'from-green-500 to-blue-600';
      case 'Blockchain & Supply Chain': return 'from-orange-500 to-red-600';
      case 'Quantum Computing': return 'from-purple-500 to-pink-600';
      case 'AR/VR & Immersive Tech': return 'from-indigo-500 to-purple-600';
      case 'IoT & Smart Cities': return 'from-teal-500 to-green-600';
      case 'Edge Computing': return 'from-yellow-500 to-orange-600';
      case 'Cybersecurity': return 'from-red-500 to-pink-600';
      case 'Green Tech & Sustainability': return 'from-emerald-500 to-teal-600';
      case 'Digital Twin & Simulation': return 'from-violet-500 to-indigo-600';
      case 'FinTech & Payments': return 'from-cyan-500 to-blue-600';
      case 'HealthTech & AI': return 'from-rose-500 to-red-600';
      case 'EdTech & Education': return 'from-lime-500 to-green-600';
      default: return 'from-gray-500 to-gray-600';
    }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-green-600 bg-clip-text text-transparent mb-4">
            Comprehensive Services Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover our cutting-edge portfolio of AI, blockchain, quantum computing, and emerging technology solutions designed to transform businesses across industries
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search comprehensive services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex flex-wrap gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {pricingModels.map(pricing => (
                <option key={pricing} value={pricing} className="bg-gray-800 text-white">
                  {pricing === 'all' ? 'All Pricing Models' : pricing}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                    <div className="text-white">
                      {getCategoryIcon(service.category)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 text-xs font-medium rounded-full text-blue-400 bg-blue-400 bg-opacity-20">
                        {service.category}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium rounded-full text-green-400 bg-green-400 bg-opacity-20">
                        {service.subcategory}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
              
              <div className="mb-4">
                <div className="text-2xl font-bold text-white mb-2">
                  {formatPrice(service.price, service.pricingModel)}
                </div>
                <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Perfect For:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.targetAudience.slice(0, 2).map((audience, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded">
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">ROI:</h4>
                <div className="text-sm text-green-400 font-semibold">{service.roi}</div>
              </div>

              <div className="border-t border-gray-600 pt-4">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Delivery: {service.estimatedDelivery}</span>
                  <a 
                    href={service.contactInfo.website}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-6">
              Our comprehensive portfolio of cutting-edge technology solutions is designed to drive innovation and growth
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="mt-6">
              <a 
                href="https://ziontechgroup.com"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Our Website
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveServices;