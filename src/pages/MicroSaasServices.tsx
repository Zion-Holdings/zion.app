import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, ArrowRight, CheckCircle, ExternalLink, Sparkles, Rocket, Shield as ShieldIcon2, Zap as ZapIcon3 } from 'lucide-react';
import { enhancedMicroSaasServices2025 } from '@/data/comprehensiveServices2025';

const MicroSaasServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');

  // Use the enhanced services data
  const microSaasServices = enhancedMicroSaasServices2025;

  const categories = ['all', ...Array.from(new Set(microSaasServices.map(service => service.category)))];
  const pricingModels = ['all', 'Freemium', 'Subscription', 'One-time'];

  const filteredServices = microSaasServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricing === 'all' || service.pricing === selectedPricing;
    
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
      case 'Productivity': return <Target className="w-6 h-6" />;
      case 'Finance': return <CreditCardIcon className="w-6 h-6" />;
      case 'Marketing': return <TrendingUp className="w-6 h-6" />;
      case 'CRM': return <UsersIcon className="w-6 h-6" />;
      case 'Analytics': return <BarChart3 className="w-6 h-6" />;
      case 'Scheduling': return <Calendar className="w-6 h-6" />;
      case 'Content': return <FileText className="w-6 h-6" />;
      case 'Security': return <Shield className="w-6 h-6" />;
      case 'Media': return <Video className="w-6 h-6" />;
      case 'Education': return <BookOpen className="w-6 h-6" />;
      default: return <ZapIcon2 className="w-6 h-6" />;
    }
  };

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'Freemium': return 'text-green-400';
      case 'Subscription': return 'text-blue-400';
      case 'One-time': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-400 to-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-blue-400 to-green-500 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center animate-pulse">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-green-600 bg-clip-text text-transparent animate-gradient-x">
              Micro SAAS Services
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Revolutionary AI-powered software solutions designed specifically for modern businesses, 
            startups, and entrepreneurs. Transform your operations with cutting-edge technology.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">{microSaasServices.length}+</div>
              <div className="text-gray-400 text-sm">Services Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">10+</div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99%</div>
              <div className="text-gray-400 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
          </div>
        </div>

        {/* Enhanced Search and Filters */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Search revolutionary micro SAAS services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg transition-all duration-300"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Sparkles className="w-5 h-5 text-green-400 animate-pulse" />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-6 py-3 bg-white/10 backdrop-blur-md border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:bg-white/20"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-800 text-white">
                  {category === 'all' ? '🚀 All Categories' : `✨ ${category}`}
                </option>
              ))}
            </select>
            
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="px-6 py-3 bg-white/10 backdrop-blur-md border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:bg-white/20"
            >
              {pricingModels.map(pricing => (
                <option key={pricing} value={pricing} className="bg-gray-800 text-white">
                  {pricing === 'all' ? '💰 All Pricing Models' : `💎 ${pricing}`}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service) => (
            <div key={service.id} className="group bg-white/5 backdrop-blur-md border border-gray-600 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/30 hover:scale-105 hover:border-green-500/50 relative overflow-hidden">
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {getCategoryIcon(service.category)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`px-3 py-1 text-sm font-medium rounded-full ${getPricingColor(service.pricing)} bg-opacity-20 bg-current`}>
                          {service.pricing}
                        </span>
                        <span className="px-3 py-1 text-sm font-medium rounded-full text-green-400 bg-green-400 bg-opacity-20">
                          {service.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                    {formatPrice(service.price, service.pricingModel)}
                  </div>
                  <div className="text-sm text-gray-400 mb-2">{service.userLimit}</div>
                  <div className="text-sm text-green-400 font-medium">
                    Market Price: {service.marketPrice}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Key Features:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <span key={index} className="px-3 py-1 text-xs bg-green-500/20 text-green-300 rounded-lg border border-green-500/30">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                    Benefits:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <span key={index} className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-lg border border-blue-500/30">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-400" />
                    Perfect For:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.targetAudience.slice(0, 2).map((audience, index) => (
                      <span key={index} className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-lg border border-purple-500/30">
                        {audience}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-green-400 font-semibold">{service.roi}</div>
                    <div className="text-gray-400">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-blue-400 font-semibold">{service.setupTime}</div>
                    <div className="text-gray-400">Setup</div>
                  </div>
                </div>

                <div className="border-t border-gray-600 pt-6">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-green-400" />
                      Start your free trial today
                    </span>
                    <a 
                      href={service.contactInfo.website}
                      className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                  
                  {/* Free Tier Badge */}
                  {service.freeTier && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs border border-green-500/30">
                      <CheckCircle className="w-3 h-3" />
                      Free Tier Available
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Contact Information */}
        <div className="mt-20 text-center">
          <div className="bg-white/5 backdrop-blur-md border border-gray-600 rounded-2xl p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-blue-400 to-purple-400"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center justify-center gap-3">
                <Rocket className="w-8 h-8 text-green-400" />
                Ready to Scale Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our revolutionary micro SAAS solutions are designed to grow with your business needs. 
                Experience the future of business software today.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">Phone</p>
                  <p className="text-gray-300">{microSaasServices[0].contactInfo.phone}</p>
                </div>
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">Email</p>
                  <p className="text-gray-300">{microSaasServices[0].contactInfo.email}</p>
                </div>
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">Address</p>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 group"
                >
                  Visit Our Website
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a 
                  href={`mailto:${microSaasServices[0].contactInfo.email}?subject=Micro SAAS Services Inquiry`}
                  className="inline-flex items-center gap-2 px-8 py-4 border border-green-400 text-green-400 rounded-xl font-semibold hover:bg-green-400 hover:text-white transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasServices;