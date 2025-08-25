import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Rocket, Award, CheckCircle, ArrowRight, ExternalLink, Wrench, Server, Laptop, Smartphone, Router, HardDrive, Lock, Globe2, ShieldCheck, Zap as ZapIcon3 } from 'lucide-react';
import { ADVANCED_IT_SERVICES } from '../data/advancedITServices';

const ITOnsiteServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');

  const categories = ['all', 'Cloud Services', 'Cybersecurity', 'DevOps', 'Infrastructure', 'Network Security', 'Business Continuity'];
  const pricingModels = ['all', 'monthly', 'yearly', 'one-time', 'per-user', 'per-project', 'usage-based'];

  const filteredServices = ADVANCED_IT_SERVICES.filter(service => {
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
        return `$${price.toLocaleString()}/month`;
      case 'yearly':
        return `$${(price * 12).toLocaleString()}/year`;
      case 'one-time':
        return `$${price.toLocaleString()}`;
      case 'per-user':
        return `$${price}/user/month`;
      case 'per-project':
        return `$${price.toLocaleString()}`;
      case 'usage-based':
        return `$${price}/usage`;
      default:
        return `$${price.toLocaleString()}`;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cloud Services': return <Cloud className="w-6 h-6" />;
      case 'Cybersecurity': return <Shield className="w-6 h-6" />;
      case 'DevOps': return <ZapIcon3 className="w-6 h-6" />;
      case 'Infrastructure': return <Server className="w-6 h-6" />;
      case 'Network Security': return <Network className="w-6 h-6" />;
      case 'Business Continuity': return <ShieldCheck className="w-6 h-6" />;
      default: return <Cpu className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Cloud Services': return 'text-blue-400';
      case 'Cybersecurity': return 'text-green-400';
      case 'DevOps': return 'text-purple-400';
      case 'Infrastructure': return 'text-orange-400';
      case 'Network Security': return 'text-red-400';
      case 'Business Continuity': return 'text-cyan-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4">
            IT Onsite Services & Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Comprehensive IT infrastructure, cybersecurity, and managed services delivered globally with 24/7 support and onsite expertise
          </p>
        </div>

        {/* Service Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Global Coverage",
              description: "Onsite IT services available worldwide with local expertise and rapid response times",
              icon: <Globe2 className="w-8 h-8" />,
              color: "from-blue-500 to-cyan-500"
            },
            {
              title: "24/7 Support",
              description: "Round-the-clock monitoring, support, and emergency response for critical IT infrastructure",
              icon: <Clock className="w-8 h-8" />,
              color: "from-green-500 to-emerald-500"
            },
            {
              title: "Expert Team",
              description: "Certified IT professionals with deep expertise in enterprise infrastructure and security",
              icon: <Users className="w-8 h-8" />,
              color: "from-purple-500 to-pink-500"
            }
          ].map((highlight, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <div className={`bg-gradient-to-r ${highlight.color} p-3 rounded-lg inline-block mb-4 text-white`}>
                {highlight.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{highlight.title}</h3>
              <p className="text-gray-300 text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search IT services..."
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-blue-400">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(service.category)} bg-opacity-20 bg-current`}>
                        {service.category}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium rounded-full text-green-400 bg-green-400 bg-opacity-20">
                        {service.subcategory}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              {/* Pricing and Rating */}
              <div className="mb-4">
                <div className="text-2xl font-bold text-white mb-2">
                  {formatPrice(service.price, service.pricingModel)}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  {service.rating && (
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      {service.rating}
                    </div>
                  )}
                  {service.reviewCount && (
                    <span>({service.reviewCount} reviews)</span>
                  )}
                </div>
              </div>

              {/* Features */}
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

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              {/* Onsite Support Indicator */}
              {service.onsiteSupport && (
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <Wrench className="w-4 h-4" />
                    Onsite Support Available
                  </div>
                </div>
              )}

              {/* Global Coverage Indicator */}
              {service.globalCoverage && (
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-blue-400 text-sm">
                    <Globe className="w-4 h-4" />
                    Global Coverage
                  </div>
                </div>
              )}

              {/* Contact and Actions */}
              <div className="border-t border-gray-600 pt-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {service.estimatedDelivery}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a 
                      href={service.demoUrl}
                      className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                    <a 
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors flex items-center gap-1"
                    >
                      <Mail className="w-4 h-4" />
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-gray-300 mb-6">
              Our comprehensive IT services are designed to meet your specific business needs with global coverage and 24/7 support
            </p>
            <div className="mb-6">
              <a 
                href="/comprehensive-services"
                className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 mb-4"
              >
                Explore Our Complete Service Portfolio →
              </a>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITOnsiteServicesPage;
