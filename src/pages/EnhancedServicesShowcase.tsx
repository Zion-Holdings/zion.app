import React, { useState } from 'react';
import { 
  Brain, 
  Cpu, 
  Settings, 
  Zap, 
  Star, 
  TrendingUp, 
  Shield, 
  Globe,
  Rocket,
  Target,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Search
} from 'lucide-react';
import { ADVANCED_MICRO_SAAS_SERVICES } from '../data/advancedMicroSaasServices';
import { COMPREHENSIVE_IT_SERVICES } from '../data/comprehensiveITServices';
import { COMPREHENSIVE_AI_SERVICES } from '../data/comprehensiveAIServices';

const EnhancedServicesShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allServices = [
    ...ADVANCED_MICRO_SAAS_SERVICES.map(service => ({ ...service, type: 'Micro SAAS', category: 'Micro SAAS Solutions' })),
    ...COMPREHENSIVE_IT_SERVICES.map(service => ({ ...service, type: 'IT Services', category: 'IT Services' })),
    ...COMPREHENSIVE_AI_SERVICES.map(service => ({ ...service, type: 'AI Services', category: 'AI Services' }))
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: allServices.length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Settings, count: ADVANCED_MICRO_SAAS_SERVICES.length },
    { id: 'it-services', name: 'IT Services', icon: Cpu, count: COMPREHENSIVE_IT_SERVICES.length },
    { id: 'ai-services', name: 'AI Services', icon: Brain, count: COMPREHENSIVE_AI_SERVICES.length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.type.toLowerCase().includes(activeCategory.replace('-', ' '));
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Micro SAAS Solutions': return Settings;
      case 'IT Services': return Cpu;
      case 'AI Services': return Brain;
      default: return Globe;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Micro SAAS Solutions': return 'from-green-500 to-emerald-600';
      case 'IT Services': return 'from-blue-500 to-cyan-600';
      case 'AI Services': return 'from-purple-500 to-pink-600';
      default: return 'from-gray-500 to-slate-600';
    }
  };

  const stats = [
    { label: 'Total Services', value: allServices.length, icon: Star, color: 'text-yellow-500' },
    { label: 'Categories', value: categories.length - 1, icon: Target, color: 'text-blue-500' },
    { label: 'AI Models', value: 15, icon: Brain, color: 'text-purple-500' },
    { label: 'Success Rate', value: '99.5%', icon: CheckCircle, color: 'text-green-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge technology services, from innovative Micro SAAS solutions to enterprise-grade IT services and revolutionary AI platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-gray-600 rounded-xl p-6 text-center">
                  <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                activeCategory === category.id
                  ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                  : 'border-gray-600 bg-white/5 text-gray-300 hover:border-gray-500 hover:bg-white/10'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for services, features, or technologies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <Globe className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const CategoryIcon = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            
            return (
              <div key={service.id} className="group bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${categoryColor}`}>
                    <CategoryIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">{service.type}</div>
                    <div className="text-2xl font-bold text-white">${service.price.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">
                      {service.pricingModel === 'monthly' ? '/month' : 'project'}
                    </div>
                  </div>
                </div>

                {/* Service Name and Description */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Key Features
                  </h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-gray-500">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    Key Benefits
                  </h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/10 border border-gray-600 rounded-full text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </button>
                  <button className="flex-1 bg-white/10 border border-gray-600 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Contact
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you implement cutting-edge technology solutions that drive innovation and growth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <Mail className="w-5 h-5 text-purple-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <MapPin className="w-5 h-5 text-green-400" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Visit Our Website
              <ArrowRight className="w-5 h-5" />
            </a>
            <button className="inline-flex items-center gap-2 bg-white/10 border border-gray-600 text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-all duration-300">
              Schedule Consultation
              <Rocket className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedServicesShowcase;