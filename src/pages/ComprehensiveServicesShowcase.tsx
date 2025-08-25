import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Rocket, Award, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { ADVANCED_AI_SERVICES } from '../data/advancedAIServices';
import { ADVANCED_IT_SERVICES } from '../data/advancedITServices';
import { EMERGING_TECH_SERVICES } from '../data/emergingTechServices';
import { INDUSTRY_SPECIFIC_SOLUTIONS } from '../data/industrySpecificSolutions';

const ComprehensiveServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');

  // Combine all services
  const allServices = [
    ...ADVANCED_AI_SERVICES.map(service => ({ ...service, type: 'AI Services', category: service.category })),
    ...ADVANCED_IT_SERVICES.map(service => ({ ...service, type: 'IT Services', category: service.category })),
    ...EMERGING_TECH_SERVICES.map(service => ({ ...service, type: 'Emerging Tech', category: service.category })),
    ...INDUSTRY_SPECIFIC_SOLUTIONS.map(service => ({ ...service, type: 'Industry Solutions', category: service.category, industry: service.industry }))
  ];

  const categories = ['all', 'AI Services', 'IT Services', 'Emerging Tech', 'Industry Solutions'];
  const industries = ['all', 'Healthcare', 'Manufacturing', 'Financial Services', 'Retail & E-commerce', 'Energy & Utilities', 'Transportation & Logistics'];
  const pricingModels = ['all', 'monthly', 'yearly', 'one-time', 'per-user', 'per-project', 'usage-based'];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.type === selectedCategory;
    const matchesIndustry = selectedIndustry === 'all' || !service.industry || service.industry === selectedIndustry;
    const matchesPricing = selectedPricing === 'all' || service.pricingModel === selectedPricing;
    
    return matchesSearch && matchesCategory && matchesIndustry && matchesPricing;
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

  const getServiceIcon = (type: string) => {
    switch (type) {
      case 'AI Services': return <Brain className="w-6 h-6" />;
      case 'IT Services': return <Cpu className="w-6 h-6" />;
      case 'Emerging Tech': return <Rocket className="w-6 h-6" />;
      case 'Industry Solutions': return <Building className="w-6 h-6" />;
      default: return <ZapIcon2 className="w-6 h-6" />;
    }
  };

  const getServiceColor = (type: string) => {
    switch (type) {
      case 'AI Services': return 'from-purple-500 to-blue-500';
      case 'IT Services': return 'from-blue-500 to-cyan-500';
      case 'Emerging Tech': return 'from-green-500 to-emerald-500';
      case 'Industry Solutions': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 95) return 'text-green-400';
    if (score >= 90) return 'text-yellow-400';
    if (score >= 85) return 'text-orange-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4">
            Comprehensive Services Showcase
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover our complete portfolio of cutting-edge AI, IT, and emerging technology solutions designed to transform businesses across all industries
          </p>
        </div>

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
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {industries.map(industry => (
                <option key={industry} value={industry} className="bg-gray-800 text-white">
                  {industry === 'all' ? 'All Industries' : industry}
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
                  <div className={`bg-gradient-to-r ${getServiceColor(service.type)} p-2 rounded-lg`}>
                    {getServiceIcon(service.type)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 text-xs font-medium rounded-full text-blue-400 bg-blue-400 bg-opacity-20">
                        {service.type}
                      </span>
                      {service.industry && (
                        <span className="px-2 py-1 text-xs font-medium rounded-full text-green-400 bg-green-400 bg-opacity-20">
                          {service.industry}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
              
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
                  {service.aiScore && (
                    <div className={`flex items-center gap-1 ${getScoreColor(service.aiScore)}`}>
                      <Brain className="w-4 h-4" />
                      {service.aiScore}%
                    </div>
                  )}
                  {service.industryExpertise && (
                    <div className={`flex items-center gap-1 ${getScoreColor(service.industryExpertise)}`}>
                      <Award className="w-4 h-4" />
                      {service.industryExpertise}%
                    </div>
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

              {/* Tags */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-gray-500/20 text-gray-300 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

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

        {/* Service Categories Overview */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Service Categories Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "AI Services",
                description: "Advanced artificial intelligence solutions for business transformation",
                count: ADVANCED_AI_SERVICES.length,
                icon: <Brain className="w-8 h-8" />,
                color: "from-purple-500 to-blue-500",
                link: "/ai-services"
              },
              {
                title: "IT Services",
                description: "Comprehensive IT infrastructure and managed services",
                count: ADVANCED_IT_SERVICES.length,
                icon: <Cpu className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500",
                link: "/it-services"
              },
              {
                title: "Emerging Tech",
                description: "Cutting-edge technology solutions for future-ready businesses",
                count: EMERGING_TECH_SERVICES.length,
                icon: <Rocket className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500",
                link: "/emerging-tech"
              },
              {
                title: "Industry Solutions",
                description: "Tailored solutions for specific industry verticals",
                count: INDUSTRY_SPECIFIC_SOLUTIONS.length,
                icon: <Building className="w-8 h-8" />,
                color: "from-orange-500 to-red-500",
                link: "/industry-solutions"
              }
            ].map((category, index) => (
              <div key={category.title} className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg inline-block mb-4 text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                <div className="text-2xl font-bold text-blue-400 mb-4">{category.count} Services</div>
                <a 
                  href={category.link}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Explore Services <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-6">
              Our comprehensive suite of services is designed to meet your specific business needs and drive innovation
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Our Website <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesShowcase;