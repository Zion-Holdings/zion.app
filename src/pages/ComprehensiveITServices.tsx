import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Server, Code, Smartphone, Monitor, Router, HardDrive, Wifi, Lock, Key, Bug, CheckCircle, AlertTriangle, Info, ArrowRight, ExternalLink, Sparkles, Rocket, Shield as ShieldIcon2, Zap as ZapIcon3 } from 'lucide-react';
import { enhancedITServices2025 } from '@/data/comprehensiveServices2025';

const ComprehensiveITServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');

  // Use the enhanced IT services data
  const itServices = enhancedITServices2025;

  const categories = ['all', ...Array.from(new Set(itServices.map(service => service.category)))];
  const pricingOptions = ['all', 'Enterprise', 'Professional', 'Standard'];

  const filteredServices = itServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricing === 'all' || service.pricing === selectedPricing;
    
    return matchesSearch && matchesCategory && matchesPricing;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Infrastructure': return <Server className="w-6 h-6" />;
      case 'Cloud Services': return <Cloud className="w-6 h-6" />;
      case 'Security': return <Shield className="w-6 h-6" />;
      case 'DevOps': return <Code className="w-6 h-6" />;
      case 'Analytics': return <BarChart3 className="w-6 h-6" />;
      default: return <Cpu className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Enhanced Header Section */}
      <div className="bg-zion-blue-darker py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center animate-pulse">
              <Server className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent">
              Comprehensive IT Services
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
            Enterprise-grade IT solutions designed to transform your business infrastructure, 
            enhance security, and drive digital transformation with AI-powered optimization
          </p>
          
          {/* IT Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{itServices.length}+</div>
              <div className="text-zion-slate-light text-sm">IT Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-zion-slate-light text-sm">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-zion-slate-light text-sm">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-zion-slate-light text-sm">Projects</div>
            </div>
          </div>
          
          {/* Enhanced Search and Filters */}
          <div className="max-w-4xl mx-auto space-y-6 mt-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search revolutionary IT services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-zion-blue-light/20 backdrop-blur-md border border-zion-cyan/30 rounded-2xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 text-lg transition-all duration-300"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-cyan w-6 h-6" />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <Sparkles className="w-5 h-5 text-zion-cyan animate-pulse" />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-6 py-3 bg-zion-blue-light/20 backdrop-blur-md border border-zion-cyan/30 rounded-xl text-white focus:outline-none focus:border-zion-cyan transition-all duration-300 hover:bg-zion-blue-light/30"
              >
                <option value="all">🚀 All Categories</option>
                {categories.slice(1).map(category => (
                  <option key={category} value={category}>✨ {category}</option>
                ))}
              </select>
              
              <select
                value={selectedPricing}
                onChange={(e) => setSelectedPricing(e.target.value)}
                className="px-6 py-3 bg-zion-blue-light/20 backdrop-blur-md border border-zion-cyan/30 rounded-xl text-white focus:outline-none focus:border-zion-cyan transition-all duration-300 hover:bg-zion-blue-light/30"
              >
                <option value="all">💰 All Pricing</option>
                {pricingOptions.slice(1).map(option => (
                  <option key={option} value={option}>💎 {option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="group bg-zion-blue-light/10 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/30 hover:scale-105 relative overflow-hidden">
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {getCategoryIcon(service.category)}
                    </div>
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-zion-blue-light/20 text-zion-slate-light text-sm rounded-full">
                    {service.pricing}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-zion-cyan group-hover:text-blue-400 transition-colors duration-300">{service.name}</h3>
                <p className="text-zion-slate-light mb-6 text-lg leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-zion-cyan" />
                    <span className="text-3xl font-bold">${service.projectRate.toLocaleString()}</span>
                    <span className="text-zion-slate-light">/ {service.pricingModel}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Clock className="w-4 h-4" />
                    <span>{service.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light mt-2">
                    <Users className="w-4 h-4" />
                    <span>{service.userLimit}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-zion-cyan flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Key Features:
                  </h4>
                  <ul className="space-y-2 text-sm text-zion-slate-light">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-zion-cyan flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Benefits:
                  </h4>
                  <ul className="space-y-2 text-sm text-zion-slate-light">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-zion-cyan" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="text-center p-3 bg-zion-blue-light/10 rounded-lg">
                    <div className="text-blue-400 font-semibold">{service.responseTime}</div>
                    <div className="text-zion-slate-light">Response</div>
                  </div>
                  <div className="text-center p-3 bg-zion-blue-light/10 rounded-lg">
                    <div className="text-cyan-400 font-semibold">{service.sla}</div>
                    <div className="text-zion-slate-light">SLA</div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-zion-cyan flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Certifications:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.certifications.slice(0, 3).map((cert, index) => (
                      <span key={index} className="text-xs bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded border border-zion-cyan/30">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                    <Users className="w-4 h-4" />
                    <span>{service.userLimit}</span>
                  </div>
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=IT Services Inquiry - ${service.name}`}
                    className="px-6 py-3 bg-zion-cyan text-zion-blue-dark font-semibold rounded-xl hover:bg-zion-cyan/80 transition-colors duration-300 group flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Contact Section */}
      <div className="bg-zion-blue-darker py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zion-cyan flex items-center justify-center gap-3">
            <Server className="w-8 h-8" />
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
            Contact our expert team to discuss your IT needs and get a customized solution
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg text-white">{itServices[0].contactInfo.phone}</span>
            </div>
            <div className="flex items-center justify-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg text-white">{itServices[0].contactInfo.email}</span>
            </div>
            <div className="flex items-center justify-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg text-white">Middletown, DE</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-zion-cyan text-zion-blue-dark font-semibold rounded-xl hover:bg-zion-cyan/80 transition-colors duration-300 group"
            >
              Visit Our Website
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href={`mailto:${itServices[0].contactInfo.email}?subject=IT Services Inquiry`}
              className="inline-flex items-center gap-2 px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold hover:bg-zion-cyan hover:text-zion-blue-dark transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveITServices;