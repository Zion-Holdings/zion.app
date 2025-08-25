import React, { useState } from 'react';
import { 
  Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, 
  Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, 
  Globe, Bot, Cpu, Network, Building, Factory, Store, Car, Plane, Ship, Home, 
  Building2, GraduationCap, Calendar, FileText, BarChart3, Target, TrendingUp, PieChart, 
  Activity, Award, Rocket, Lightbulb, Code, Palette, Megaphone, Camera, MessageSquare, 
  Package, Check, ChevronDown, ChevronRight, ExternalLink, Play, Download, BookOpen,
  Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare as MessageSquareIcon,
  Camera as CameraIcon, Car as CarIcon, Leaf as LeafIcon, Brain as BrainIcon,
  Shield as ShieldIcon2, Globe as GlobeIcon2, BarChart3 as BarChart3Icon2,
  Settings as SettingsIcon2, Database as DatabaseIcon2, Building as BuildingIcon2,
  Factory as FactoryIcon2, Store as StoreIcon2, Home as HomeIcon2
} from 'lucide-react';
import { ADVANCED_MICRO_SAAS_SERVICES } from '../data/advancedMicroSaasServices';
import { COMPREHENSIVE_IT_SERVICES } from '../data/comprehensiveITServices';
import { COMPREHENSIVE_AI_SERVICES } from '../data/comprehensiveAIServices';

const ComprehensiveServicesOverview: React.FC = () => {
  const [activeTab, setActiveTab] = useState('micro-saas');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const serviceTabs = [
    { id: 'micro-saas', name: 'Micro SAAS Solutions', icon: Megaphone, color: 'green' },
    { id: 'it-services', name: 'IT Services', icon: Settings, color: 'blue' },
    { id: 'ai-services', name: 'AI Services', icon: Brain, color: 'purple' }
  ];

  const getServiceData = (tabId: string) => {
    switch (tabId) {
      case 'micro-saas':
        return ADVANCED_MICRO_SAAS_SERVICES;
      case 'it-services':
        return COMPREHENSIVE_IT_SERVICES;
      case 'ai-services':
        return COMPREHENSIVE_AI_SERVICES;
      default:
        return [];
    }
  };

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'Legal Tech': return <FileText className="w-6 h-6" />;
      case 'Real Estate': return <Building className="w-6 h-6" />;
      case 'Healthcare': return <Hospital className="w-6 h-6" />;
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

  const formatPrice = (price: number, model: string) => {
    if (model === 'monthly') {
      return `$${price.toLocaleString()}/month`;
    } else if (model === 'one-time') {
      return `$${price.toLocaleString()}`;
    } else {
      return `$${price.toLocaleString()}`;
    }
  };

  const getTabColor = (color: string) => {
    switch (color) {
      case 'green': return 'from-green-500 to-green-600';
      case 'blue': return 'from-blue-500 to-blue-600';
      case 'purple': return 'from-purple-500 to-purple-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTabTextColor = (color: string) => {
    switch (color) {
      case 'green': return 'text-green-400';
      case 'blue': return 'text-blue-400';
      case 'purple': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const services = getServiceData(activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-green-600 bg-clip-text text-transparent mb-4">
            Comprehensive Technology Services
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover our complete portfolio of innovative solutions designed to transform businesses across all industries. From Micro SAAS to Enterprise IT Services and cutting-edge AI solutions.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {serviceTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? `bg-gradient-to-r ${getTabColor(tab.color)} text-white shadow-lg`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.name}
            </button>
          ))}
        </div>

        {/* Service Overview */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">{ADVANCED_MICRO_SAAS_SERVICES.length}</div>
              <div className="text-gray-300">Micro SAAS Solutions</div>
              <div className="text-sm text-gray-400 mt-2">Starting from $79/month</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">{COMPREHENSIVE_IT_SERVICES.length}</div>
              <div className="text-gray-300">IT Services</div>
              <div className="text-sm text-gray-400 mt-2">Starting from $15,000</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">{COMPREHENSIVE_AI_SERVICES.length}</div>
              <div className="text-gray-300">AI Services</div>
              <div className="text-sm text-gray-400 mt-2">Starting from $199/month</div>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className={`text-2xl ${getTabTextColor(serviceTabs.find(t => t.id === activeTab)?.color || 'green')}`}>
                    {getServiceIcon(service.category)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 text-sm font-medium rounded-full bg-green-500/20 text-green-300">
                        {service.category}
                      </span>
                      {service.subcategory && (
                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-500/20 text-blue-300">
                          {service.subcategory}
                        </span>
                      )}
                      <span className="px-3 py-1 text-sm font-medium rounded-full bg-purple-500/20 text-purple-300">
                        {service.pricingModel === 'monthly' ? 'Monthly' : 'One-time'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white mb-1">
                    {formatPrice(service.price, service.pricingModel)}
                  </div>
                  {service.userLimit && (
                    <div className="text-sm text-gray-400">{service.userLimit}</div>
                  )}
                  {service.duration && (
                    <div className="text-sm text-gray-400">Duration: {service.duration}</div>
                  )}
                </div>
              </div>

              <p className="text-gray-300 text-lg mb-6">{service.description}</p>

              {/* Features and Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                    Key Benefits
                  </h4>
                  <div className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="text-sm font-semibold text-white mb-2">Target Audience</h5>
                  <div className="space-y-1">
                    {service.targetAudience.slice(0, 3).map((audience, index) => (
                      <div key={index} className="text-xs text-gray-400">• {audience}</div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="text-sm font-semibold text-white mb-2">Technology Stack</h5>
                  <div className="space-y-1">
                    {service.technology.slice(0, 3).map((tech, index) => (
                      <div key={index} className="text-xs text-gray-400">• {tech}</div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="text-sm font-semibold text-white mb-2">ROI & Delivery</h5>
                  <div className="space-y-1">
                    <div className="text-xs text-gray-400">ROI: {service.roi}</div>
                    <div className="text-xs text-gray-400">Delivery: {service.estimatedDelivery}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-between items-center pt-4 border-t border-gray-600">
                <div className="flex items-center gap-4">
                  {service.demoUrl && (
                    <a
                      href={service.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Play className="w-4 h-4" />
                      View Demo
                    </a>
                  )}
                  {service.documentationUrl && (
                    <a
                      href={service.documentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <BookOpen className="w-4 h-4" />
                      Documentation
                    </a>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                    className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                  >
                    <Mail className="w-4 h-4" />
                    Get Quote
                  </a>
                  <a
                    href={`tel:${service.contactInfo.phone}`}
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Our comprehensive technology services are designed to scale with your business needs and drive innovation across all industries. Contact us today to discuss your requirements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
              <div>
                <Phone className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <p className="text-white font-semibold text-lg mb-2">Phone</p>
                <p className="text-gray-300 text-lg">+1 302 464 0950</p>
                <p className="text-gray-400 text-sm mt-1">Available Mon-Fri 9AM-6PM EST</p>
              </div>
              <div>
                <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <p className="text-white font-semibold text-lg mb-2">Email</p>
                <p className="text-gray-300 text-lg">kleber@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm mt-1">24/7 support available</p>
              </div>
              <div>
                <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <p className="text-white font-semibold text-lg mb-2">Address</p>
                <p className="text-gray-300 text-lg">364 E Main St STE 1008<br />Middletown DE 19709</p>
                <p className="text-gray-400 text-sm mt-1">Serving clients worldwide</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://ziontechgroup.com"
                className="inline-block bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="w-5 h-5 inline mr-2" />
                Visit Our Website
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                <Mail className="w-5 h-5 inline mr-2" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesOverview;