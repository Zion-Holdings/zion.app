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
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.label}</span>
              <span className="ml-2 px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentServices.map((service, index) => (
            <div
              key={`${service.title}-${index}`}
              className="card-futuristic group hover:transform hover:scale-105 transition-all duration-500"
            >
              {/* Service Header */}
              <div className="p-6 border-b border-gray-700/50">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{getServiceIcon(service.category)}</div>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm text-gray-300">
                      {service.rating || 4.8}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Service Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6">
                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Starting Price</span>
                    <span className="text-cyan-400 font-semibold">
                      {formatPrice(service.price, service.currency, service.pricingModel)}
                    </span>
                  </div>
                </div>

                {/* Service Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {service.aiScore && (
                    <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                      <div className="text-2xl font-bold text-cyan-400">{service.aiScore}</div>
                      <div className="text-xs text-gray-400">AI Score</div>
                    </div>
                  )}
                  
                  {service.marketSize && (
                    <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                      <div className="text-sm font-semibold text-blue-400">{service.marketSize}</div>
                      <div className="text-xs text-gray-400">Market Size</div>
                    </div>
                  )}
                  
                  {service.roi && (
                    <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                      <div className="text-sm font-semibold text-green-400">{service.roi}</div>
                      <div className="text-xs text-gray-400">ROI</div>
                    </div>
                  )}
                  
                  {service.reviewCount && (
                    <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                      <div className="text-sm font-semibold text-purple-400">{service.reviewCount}</div>
                      <div className="text-xs text-gray-400">Reviews</div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link
                    to="/enhanced-services"
                    className="flex-1 btn-futuristic text-center"
                  >
                    Learn More
                  </Link>
                  <button className="px-4 py-2 border border-cyan-500/50 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <Link
            to="/enhanced-services"
            className="btn-futuristic px-8 py-4 text-lg inline-flex items-center gap-2"
          >
            <span>View All Services</span>
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EnhancedServicesShowcase;
