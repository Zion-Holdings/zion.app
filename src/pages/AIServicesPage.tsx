import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, ArrowRight, CheckCircle, ExternalLink, Sparkles, Rocket, TrendingUp, BarChart3, Target, Users as UsersIcon, Brain as BrainIcon, MessageSquare } from 'lucide-react';
import { enhancedAIServices2025 } from '@/data/comprehensiveServices2025';

const AIServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Use the enhanced AI services data
  const aiServices = enhancedAIServices2025;

  const categories = ['all', ...Array.from(new Set(aiServices.map(service => service.category)))];

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const formatPrice = (price: number, model: string) => {
    switch (model) {
      case 'monthly':
        return `$${price.toLocaleString()}/month`;
      case 'hourly':
        return `$${price}/hour`;
      case 'project-based':
        return `$${price.toLocaleString()}`;
      default:
        return `$${price.toLocaleString()}`;
    }
  };

  const getAIScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 80) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Business Intelligence': return <BarChart3 className="w-6 h-6" />;
      case 'Language AI': return <Brain className="w-6 h-6" />;
      case 'Visual AI': return <Eye className="w-6 h-6" />;
      case 'Predictive AI': return <TrendingUp className="w-6 h-6" />;
      case 'Process Automation': return <Zap className="w-6 h-6" />;
      case 'Conversational AI': return <MessageSquare className="w-6 h-6" />;
      default: return <BrainIcon className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Enhanced Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center animate-pulse">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Services & Solutions
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to transform your business operations, 
            enhance customer experiences, and drive innovation across all aspects of your organization.
          </p>
          
          {/* AI Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{aiServices.length}+</div>
              <div className="text-purple-100 text-sm">AI Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">95%+</div>
              <div className="text-purple-100 text-sm">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-purple-100 text-sm">AI Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99%</div>
              <div className="text-purple-100 text-sm">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Search and Filter Section */}
      <div className="bg-slate-800 py-12 border-b border-slate-700 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Enhanced Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-lg transition-all duration-300"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
              </div>
            </div>

            {/* Enhanced Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-6 py-4 bg-slate-700 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-lg transition-all duration-300"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-slate-800 text-white">
                    {category === 'all' ? '🚀 All AI Categories' : `✨ ${category}`}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <Brain className="w-5 h-5 text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="group bg-slate-800 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 relative overflow-hidden">
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="p-8 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {getCategoryIcon(service.category)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="inline-block bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                          {service.category}
                        </span>
                        <span className="inline-block bg-slate-600 text-slate-300 text-xs px-3 py-1 rounded-full">
                          {service.pricingModel}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                      {formatPrice(service.price, service.pricingModel)}
                    </span>
                    <div className={`text-sm font-semibold ${getAIScoreColor(service.aiScore)} flex items-center gap-1 mt-1`}>
                      <Brain className="w-4 h-4" />
                      AI Score: {service.aiScore}%
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Key Features:
                  </h4>
                  <ul className="text-sm text-slate-300 space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-purple-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                    Use Cases:
                  </h4>
                  <ul className="text-sm text-slate-300 space-y-2">
                    {service.useCases.slice(0, 3).map((useCase, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-green-400" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4 text-yellow-400" />
                    AI Models:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.aiModels.slice(0, 3).map((model, index) => (
                      <span key={index} className="text-xs bg-purple-600 text-purple-300 px-2 py-1 rounded border border-purple-500/30">
                        {model}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    Compliance:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.compliance.slice(0, 3).map((compliance, index) => (
                      <span key={index} className="text-xs bg-green-600 text-green-300 px-2 py-1 rounded border border-green-500/30">
                        {compliance}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <span key={index} className="text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-lg border border-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                    <div className="text-purple-400 font-semibold">{service.accuracy}</div>
                    <div className="text-slate-400">Accuracy</div>
                  </div>
                  <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                    <div className="text-blue-400 font-semibold">{service.marketPrice}</div>
                    <div className="text-slate-400">Market Price</div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Get Started with AI
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Contact Section */}
      <div className="bg-slate-800 py-20 border-t border-slate-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-blue-400 to-pink-400"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <Brain className="w-8 h-8 text-purple-400" />
            Ready to Harness AI Power?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-slate-300">{aiServices[0].contactInfo.phone}</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-slate-300">{aiServices[0].contactInfo.email}</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://ziontechgroup.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group"
            >
              Visit Our Website
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a 
              href={`mailto:${aiServices[0].contactInfo.email}?subject=AI Services Inquiry`}
              className="inline-flex items-center gap-2 px-8 py-4 border border-purple-400 text-purple-400 rounded-xl font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
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

export default AIServicesPage;