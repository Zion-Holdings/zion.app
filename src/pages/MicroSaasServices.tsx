import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Building, Factory, Store, Car, Plane, Ship, Home, Building2, GraduationCap, Calendar, FileText, BarChart3, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Award, Rocket, Lightbulb, Code, Palette, Megaphone, Package, Check } from 'lucide-react';
import { ADVANCED_MICRO_SAAS_SERVICES } from '../data/advancedMicroSaasServices';
import { COMPREHENSIVE_IT_SERVICES } from '../data/comprehensiveITServices';
import { COMPREHENSIVE_AI_SERVICES } from '../data/comprehensiveAIServices';

const MicroSaasServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');
  const [selectedServiceType, setSelectedServiceType] = useState<string>('all');

  // Combine all services
  const allServices = [
    ...ADVANCED_MICRO_SAAS_SERVICES.map(service => ({ ...service, type: 'Micro SAAS' })),
    ...COMPREHENSIVE_IT_SERVICES.map(service => ({ ...service, type: 'IT Services' })),
    ...COMPREHENSIVE_AI_SERVICES.map(service => ({ ...service, type: 'AI Services' }))
  ];

  const categories = ['all', 'Legal Tech', 'Real Estate', 'Healthcare', 'Restaurant Tech', 'E-commerce', 'FinTech', 'Human Resources', 'Project Management', 'Customer Experience', 'Inventory Management', 'Marketing', 'Computer Vision', 'Natural Language Processing', 'Financial AI', 'Industrial AI', 'Healthcare AI', 'Transportation AI', 'Environmental AI', 'Creative AI', 'Cloud Services', 'Cybersecurity', 'Data Analytics', 'DevOps', 'Digital Transformation', 'Software Development', 'Infrastructure', 'Managed Services', 'Network Security'];
  const pricingModels = ['all', 'monthly', 'one-time'];
  const serviceTypes = ['all', 'Micro SAAS', 'IT Services', 'AI Services'];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricing === 'all' || service.pricingModel === selectedPricing;
    const matchesType = selectedServiceType === 'all' || service.type === selectedServiceType;
    
    return matchesSearch && matchesCategory && matchesPricing && matchesType;
  });

  const formatPrice = (price: number, model: string) => {
    if (model === 'monthly') {
      return `$${price.toLocaleString()}/month`;
    } else if (model === 'one-time') {
      return `$${price.toLocaleString()}`;
    } else {
      return `$${price.toLocaleString()}`;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Legal Tech': return <FileText className="w-6 h-6" />;
      case 'Real Estate': return <Building className="w-6 h-6" />;
      case 'Healthcare': return <Heart className="w-6 h-6" />;
      case 'Restaurant Tech': return <Store className="w-6 h-6" />;
      case 'E-commerce': return <ShoppingCart className="w-6 h-6" />;
      case 'FinTech': return <CreditCard className="w-6 h-6" />;
      case 'Human Resources': return <Users className="w-6 h-6" />;
      case 'Project Management': return <Target className="w-6 h-6" />;
      case 'Customer Experience': return <MessageSquare className="w-6 h-6" />;
      case 'Inventory Management': return <Package className="w-6 h-6" />;
      case 'Marketing': return <TrendingUp className="w-6 h-6" />;
      case 'Computer Vision': return <Camera className="w-6 h-6" />;
      case 'Natural Language Processing': return <MessageSquare className="w-6 h-6" />;
      case 'Financial AI': return <Brain className="w-6 h-6" />;
      case 'Industrial AI': return <Factory className="w-6 h-6" />;
      case 'Healthcare AI': return <Heart className="w-6 h-6" />;
      case 'Transportation AI': return <Car className="w-6 h-6" />;
      case 'Environmental AI': return <Leaf className="w-6 h-6" />;
      case 'Creative AI': return <Palette className="w-6 h-6" />;
      case 'Cloud Services': return <Cloud className="w-6 h-6" />;
      case 'Cybersecurity': return <Shield className="w-6 h-6" />;
      case 'Data Analytics': return <BarChart3 className="w-6 h-6" />;
      case 'DevOps': return <Settings className="w-6 h-6" />;
      case 'Digital Transformation': return <Rocket className="w-6 h-6" />;
      case 'Software Development': return <Code className="w-6 h-6" />;
      case 'Infrastructure': return <Database className="w-6 h-6" />;
      case 'Managed Services': return <Users className="w-6 h-6" />;
      case 'Network Security': return <Shield className="w-6 h-6" />;
      default: return <Zap className="w-6 h-6" />;
    }
  };

  const getServiceTypeColor = (type: string) => {
    switch (type) {
      case 'Micro SAAS': return 'text-green-400';
      case 'IT Services': return 'text-blue-400';
      case 'AI Services': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'monthly': return 'text-green-400';
      case 'one-time': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-green-600 bg-clip-text text-transparent mb-4">
            Comprehensive Technology Services
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover our comprehensive suite of Micro SAAS, IT Services, and AI Solutions designed to transform your business operations, enhance productivity, and drive innovation across all industries
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
                         <div className="flex items-center gap-2 text-green-400">
               <Megaphone className="w-5 h-5" />
               <span>Micro SAAS Solutions</span>
             </div>
            <div className="flex items-center gap-2 text-blue-400">
              <Settings className="w-5 h-5" />
              <span>IT Services</span>
            </div>
            <div className="flex items-center gap-2 text-purple-400">
              <Brain className="w-5 h-5" />
              <span>AI Services</span>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for technology services, AI solutions, or IT services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex flex-wrap gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {pricingModels.map(pricing => (
                <option key={pricing} value={pricing} className="bg-gray-800 text-white">
                  {pricing === 'all' ? 'All Pricing Models' : pricing === 'monthly' ? 'Monthly Subscription' : 'One-time Payment'}
                </option>
              ))}
            </select>

            <select
              value={selectedServiceType}
              onChange={(e) => setSelectedServiceType(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {serviceTypes.map(type => (
                <option key={type} value={type} className="bg-gray-800 text-white">
                  {type === 'all' ? 'All Service Types' : type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-green-400">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getServiceTypeColor(service.type)} bg-opacity-20 bg-current`}>
                        {service.type}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPricingColor(service.pricingModel)} bg-opacity-20 bg-current`}>
                        {service.pricingModel === 'monthly' ? 'Monthly' : 'One-time'}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium rounded-full text-green-400 bg-green-400 bg-opacity-20">
                        {service.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <div className="text-2xl font-bold text-white mb-2">
                  {formatPrice(service.price, service.pricingModel)}
                </div>
                {service.userLimit && (
                  <div className="text-sm text-gray-400">{service.userLimit}</div>
                )}
                {service.duration && (
                  <div className="text-sm text-gray-400">Duration: {service.duration}</div>
                )}
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Perfect For:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.targetAudience.slice(0, 2).map((audience, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              {service.benefits && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                  <div className="text-xs text-gray-400">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 mb-1">
                        <Check className="w-3 h-3 text-green-400" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="border-t border-gray-600 pt-4">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Ready to get started?</span>
                  <a 
                    href={service.contactInfo.website}
                    className="text-green-400 hover:text-green-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact Us →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">{allServices.length}+</div>
            <div className="text-gray-300">Technology Services</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">25+</div>
            <div className="text-gray-300">Service Categories</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-gray-300">AI Models</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">99%+</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-6">
              Our comprehensive technology services are designed to scale with your business needs and drive innovation across all industries
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="mt-6">
              <a 
                href="https://ziontechgroup.com"
                className="inline-block bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Our Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasServices;