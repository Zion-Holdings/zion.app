import React, { useState, useEffect } from 'react';
import { ENHANCED_SERVICES, SERVICE_CATEGORIES, PRICING_TIERS } from '../data/enhancedServices';
import '../styles/futuristic.css';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  aiScore?: number;
  rating?: number;
  reviewCount?: number;
  featured?: boolean;
  competitors?: string[];
  marketSize?: string;
  growthRate?: string;
}

export function EnhancedServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'aiScore' | 'name'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const filteredServices = ENHANCED_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    let aValue: any, bValue: any;
    
    switch (sortBy) {
      case 'price':
        aValue = a.price;
        bValue = b.price;
        break;
      case 'rating':
        aValue = a.rating || 0;
        bValue = b.rating || 0;
        break;
      case 'aiScore':
        aValue = a.aiScore || 0;
        bValue = b.aiScore || 0;
        break;
      case 'name':
        aValue = a.title;
        bValue = b.title;
        break;
      default:
        aValue = a.title;
        bValue = b.title;
    }

    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const getCategoryIcon = (categoryName: string) => {
    const category = SERVICE_CATEGORIES.find(cat => cat.name === categoryName);
    return category?.icon || '💼';
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}k`;
    }
    return `$${price}`;
  };

  const openServiceModal = (service: Service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen futuristic-bg py-20 px-4">
      {/* Matrix Rain Background */}
      <div className="matrix-rain"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Discover Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore cutting-edge AI services, innovative micro SAAS solutions, and comprehensive IT services 
            designed to transform your business and drive growth.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search services, features, or use cases..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="futuristic-input w-full pl-12 pr-4 py-3 text-lg"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400">
                🔍
              </div>
            </div>
            
            {/* Sort Controls */}
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="futuristic-input px-4 py-3"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
                <option value="aiScore">Sort by AI Score</option>
              </select>
              
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="futuristic-btn px-4 py-3"
              >
                {sortOrder === 'asc' ? '↑' : '↓'}
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/50'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50'
              }`}
            >
              All Services ({ENHANCED_SERVICES.length})
            </button>
            
            {SERVICE_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.name
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/50'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50'
                }`}
              >
                <span>{category.icon}</span>
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sortedServices.map((service) => (
            <div
              key={service.id}
              className="futuristic-card p-6 cursor-pointer group"
              onClick={() => openServiceModal(service)}
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl mb-2">
                  {getCategoryIcon(service.category)}
                </div>
                {service.featured && (
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold rounded-full">
                    FEATURED
                  </span>
                )}
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Service Stats */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-cyan-400">
                  {formatPrice(service.price)}
                  <span className="text-sm text-gray-500 ml-1">/{service.pricingModel}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  {service.rating && (
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-white text-sm">{service.rating}</span>
                    </div>
                  )}
                  {service.aiScore && (
                    <div className="flex items-center gap-1">
                      <span className="text-cyan-400">🤖</span>
                      <span className="text-white text-sm">{service.aiScore}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Service Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-800/50 text-cyan-400 text-xs rounded border border-cyan-400/30"
                  >
                    {tag}
                  </span>
                ))}
                {service.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded">
                    +{service.tags.length - 3}
                  </span>
                )}
              </div>

              {/* Service Benefits */}
              <div className="space-y-2">
                {service.benefits.slice(0, 2).map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-cyan-400 text-sm mt-1">✓</span>
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Pricing Tiers Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4 neon-text">
              Flexible Pricing Plans
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs with our transparent, scalable pricing options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier, index) => (
              <div
                key={index}
                className={`futuristic-card p-8 text-center relative ${
                  tier.popular ? 'border-cyan-500 border-2' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-bold rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <h4 className="text-2xl font-bold text-white mb-4">{tier.name}</h4>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                  <span className="text-gray-400">/{tier.period}</span>
                </div>

                <ul className="space-y-3 mb-8 text-left">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <span className="text-cyan-400">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="futuristic-btn w-full">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="futuristic-card p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team of experts to discuss your specific needs and find the perfect solution for your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {[
                {
                  icon: "📱",
                  title: "Phone",
                  contact: "+1 302 464 0950",
                  description: "Call us anytime for immediate assistance"
                },
                {
                  icon: "✉️",
                  title: "Email",
                  contact: "kleber@ziontechgroup.com",
                  description: "Send us a detailed message"
                },
                {
                  icon: "📍",
                  title: "Address",
                  contact: "364 E Main St STE 1008\nMiddletown DE 19709",
                  description: "Visit our office for in-person consultation"
                }
              ].map((method, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl mb-4">{method.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{method.title}</h4>
                  <p className="text-cyan-400 font-medium mb-2 whitespace-pre-line">{method.contact}</p>
                  <p className="text-gray-400 text-sm">{method.description}</p>
                </div>
              ))}
            </div>

            <button className="futuristic-btn px-10 py-4 text-lg">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {showModal && selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="futuristic-modal max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-white neon-text">
                {selectedService.title}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              {/* Service Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Description</h3>
                  <p className="text-gray-300">{selectedService.description}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Quick Info</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-cyan-400 font-bold">
                        {formatPrice(selectedService.price)}/{selectedService.pricingModel}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Delivery:</span>
                      <span className="text-white">{selectedService.estimatedDelivery}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Support:</span>
                      <span className="text-white capitalize">{selectedService.supportLevel}</span>
                    </div>
                    {selectedService.marketPrice && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Market Price:</span>
                        <span className="text-white">{selectedService.marketPrice}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Features and Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">✓</span>
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Use Cases and Target Audience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Use Cases</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.useCases.map((useCase, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-800/50 text-cyan-400 text-sm rounded border border-cyan-400/30"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Target Audience</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.targetAudience.map((audience, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-800/50 text-purple-400 text-sm rounded border border-purple-400/30"
                      >
                        {audience}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Market Information */}
              {(selectedService.competitors || selectedService.marketSize || selectedService.growthRate) && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Market Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedService.competitors && (
                      <div>
                        <h4 className="text-cyan-400 font-semibold mb-2">Competitors</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.competitors.map((competitor, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-800/50 text-white text-xs rounded"
                            >
                              {competitor}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {selectedService.marketSize && (
                      <div>
                        <h4 className="text-cyan-400 font-semibold mb-2">Market Size</h4>
                        <p className="text-white">{selectedService.marketSize}</p>
                      </div>
                    )}
                    
                    {selectedService.growthRate && (
                      <div>
                        <h4 className="text-cyan-400 font-semibold mb-2">Growth Rate</h4>
                        <p className="text-white">{selectedService.growthRate}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Contact Information */}
              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-xl font-bold text-white mb-4">Get Started</h3>
                <div className="flex flex-col md:flex-row gap-4">
                  <button className="futuristic-btn flex-1">
                    Contact Sales Team
                  </button>
                  <button className="futuristic-btn flex-1 bg-gray-800 hover:bg-gray-700">
                    Schedule Demo
                  </button>
                </div>
                
                <div className="mt-4 text-center text-gray-400">
                  <p>Contact: {selectedService.contactInfo.phone} | {selectedService.contactInfo.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}