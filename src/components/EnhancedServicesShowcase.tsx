import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ENHANCED_MICRO_SAAS_SERVICES, ENHANCED_IT_SERVICES, ENHANCED_AI_SERVICES } from '../data';
import '../styles/futuristic.css';

const EnhancedServicesShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'micro-saas' | 'it' | 'ai'>('all');

  // Get featured services from each category
  const featuredMicroSaas = ENHANCED_MICRO_SAAS_SERVICES.filter(service => service.featured).slice(0, 3);
  const featuredIT = ENHANCED_IT_SERVICES.filter(service => service.featured).slice(0, 3);
  const featuredAI = ENHANCED_AI_SERVICES.filter(service => service.featured).slice(0, 3);

  const getCurrentServices = () => {
    switch (activeCategory) {
      case 'micro-saas':
        return featuredMicroSaas;
      case 'it':
        return featuredIT;
      case 'ai':
        return featuredAI;
      default:
        return [...featuredMicroSaas, ...featuredIT, ...featuredAI].slice(0, 6);
    }
  };

  const getServiceIcon = (category: string) => {
    const iconMap: { [key: string]: string } = {
      'AI & Analytics': '🤖',
      'AI & Marketing': '📊',
      'AI & Customer Service': '💬',
      'AI & Sales': '💰',
      'AI & HR': '👥',
      'AI & Finance': '💳',
      'AI & Project Management': '📋',
      'AI & E-commerce': '🛒',
      'AI & Legal': '⚖️',
      'AI & Healthcare': '🏥',
      'Cloud Services': '☁️',
      'Security': '🔒',
      'DevOps': '⚙️',
      'Data & Analytics': '📈',
      'Networking': '🌐',
      'Support & Management': '🛠️',
      'Development': '💻',
      'Consulting': '💡',
      'AI & ML': '🧠'
    };
    return iconMap[category] || '🚀';
  };

  const formatPrice = (price: number, currency: string, pricingModel: string) => {
    if (pricingModel === 'hourly') {
      return `${currency}${price}/hour`;
    } else if (pricingModel === 'per-user') {
      return `${currency}${price}/user/month`;
    } else if (pricingModel === 'per-project') {
      return `${currency}${price}`;
    } else {
      return `${currency}${price}/${pricingModel}`;
    }
  };

  const currentServices = getCurrentServices();

  return (
    <section className="py-20 px-4 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-32 left-32 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-futuristic mb-6">
            Featured Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our most popular and innovative services designed to transform your business 
            with cutting-edge AI, comprehensive IT solutions, and powerful Micro SAAS platforms.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'all', label: 'All Services', icon: '🚀', count: featuredMicroSaas.length + featuredIT.length + featuredAI.length },
            { id: 'micro-saas', label: 'Micro SAAS', icon: '💻', count: featuredMicroSaas.length },
            { id: 'it', label: 'IT Services', icon: '🔧', count: featuredIT.length },
            { id: 'ai', label: 'AI Services', icon: '🤖', count: featuredAI.length }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`btn-futuristic ${activeCategory === tab.id ? 'neon-glow' : ''}`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentServices.map((service) => (
            <div key={service.id} className="card-futuristic hover-lift group">
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl mr-3 group-hover:scale-110 transition-transform duration-300">
                  {getServiceIcon(service.category)}
                </div>
                <div className="text-right">
                  {service.featured && (
                    <span className="inline-block px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-xs text-white rounded-full mb-2">
                      Featured
                    </span>
                  )}
                  <div className="text-xl font-bold text-gradient-primary">
                    {formatPrice(service.price, service.currency, service.pricingModel)}
                  </div>
                </div>
              </div>

              {/* Service Title and Category */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm text-cyan-400">{service.category}</span>
                <span className="text-gray-500">•</span>
                <span className="text-sm text-gray-400">{service.subcategory}</span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                {service.description.length > 120 
                  ? `${service.description.substring(0, 120)}...` 
                  : service.description
                }
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {service.aiScore && (
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400">{service.aiScore}</div>
                    <div className="text-xs text-gray-400">AI Score</div>
                  </div>
                )}
                {service.rating && (
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">{service.rating}</div>
                    <div className="text-xs text-gray-400">Rating</div>
                  </div>
                )}
                {service.marketSize && (
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">{service.marketSize}</div>
                    <div className="text-xs text-gray-400">Market Size</div>
                  </div>
                )}
                {service.roi && (
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-400">{service.roi}</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                )}
              </div>

              {/* Top Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-800/50 text-xs text-cyan-400 rounded-full border border-cyan-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Top Benefit */}
              {service.benefits.length > 0 && (
                <div className="mb-4 p-3 bg-gray-800/30 rounded-lg border-l-4 border-cyan-400">
                  <p className="text-xs text-gray-300">
                    <span className="text-cyan-400 font-semibold">Key Benefit:</span> {service.benefits[0]}
                  </p>
                </div>
              )}

              {/* Action Button */}
              <div className="border-t border-gray-700 pt-4">
                <button className="w-full btn-futuristic text-sm">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center">
          <Link 
            to="/enhanced-services" 
            className="btn-futuristic inline-flex items-center gap-2 px-8 py-4 text-lg"
          >
            <span>View All Services</span>
            <span className="text-xl">→</span>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: '50+', label: 'AI Services', icon: '🤖', color: 'from-cyan-500 to-blue-500' },
            { number: '100+', label: 'Micro SAAS Solutions', icon: '💻', color: 'from-purple-500 to-pink-500' },
            { number: '25+', label: 'IT Services', icon: '🔧', color: 'from-green-500 to-cyan-500' },
            { number: '24/7', label: 'Support Available', icon: '🔄', color: 'from-orange-500 to-red-500' }
          ].map((stat, index) => (
            <div key={index} className="card-futuristic text-center group">
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedServicesShowcase;