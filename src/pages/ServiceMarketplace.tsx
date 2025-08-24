import React, { useState, useMemo } from 'react';
import { SEO } from '@/components/SEO';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Shield, Cloud, Brain, Globe, Database } from 'lucide-react';
import { EXPANDED_SERVICES } from '@/data/expandedServices';

const ServiceMarketplace: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricing, setSelectedPricing] = useState('all');
  const [selectedSupport, setSelectedSupport] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe },
    { id: 'AI & Machine Learning', name: 'AI & ML', icon: Brain },
    { id: 'Cybersecurity', name: 'Security', icon: Shield },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'Data & Analytics', name: 'Data & Analytics', icon: Database },
    { id: 'Emerging Technologies', name: 'Emerging Tech', icon: Zap }
  ];

  const pricingModels = [
    { id: 'all', name: 'All Pricing' },
    { id: 'hourly', name: 'Hourly' },
    { id: 'project', name: 'Project-based' },
    { id: 'subscription', name: 'Subscription' },
    { id: 'one-time', name: 'One-time' }
  ];

  const supportLevels = [
    { id: 'all', name: 'All Support' },
    { id: 'basic', name: 'Basic' },
    { id: 'premium', name: 'Premium' },
    { id: 'enterprise', name: 'Enterprise' }
  ];

  const filteredServices = useMemo(() => {
    return EXPANDED_SERVICES.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesPricing = selectedPricing === 'all' || service.pricingModel === selectedPricing;
      const matchesSupport = selectedSupport === 'all' || service.supportLevel === selectedSupport;

      return matchesSearch && matchesCategory && matchesPricing && matchesSupport;
    }).sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'ai-score':
          return b.aiScore - a.aiScore;
        default:
          return b.rating - a.rating; // popularity
      }
    });
  }, [searchTerm, selectedCategory, selectedPricing, selectedSupport, sortBy]);

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(c => c.id === category);
    return categoryData ? React.createElement(categoryData.icon, { className: "w-5 h-5" }) : <Globe className="w-5 h-5" />;
  };

  const getPricingDisplay = (service: any) => {
    switch (service.pricingModel) {
      case 'hourly':
        return `$${service.price}/hr`;
      case 'project':
        return `$${service.price.toLocaleString()}`;
      case 'subscription':
        return `$${service.price}/mo`;
      case 'one-time':
        return `$${service.price.toLocaleString()}`;
      default:
        return `$${service.price}`;
    }
  };

  return (
    <>
      <SEO 
        title="Service Marketplace - Zion Tech Group" 
        description="Browse and discover our comprehensive marketplace of IT and AI services with advanced filtering and search capabilities."
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Service Marketplace
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover and compare our comprehensive range of IT and AI services. 
              Find the perfect solution for your business needs with advanced filtering and search.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-zion-blue-dark/50 backdrop-blur-sm rounded-xl p-6 border border-zion-blue-light/30 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services, features, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
                />
              </div>

              {/* Sort */}
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-zion-blue-light/20 border border-zion-blue-light/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
                >
                  <option value="popularity">Sort by: Popularity</option>
                  <option value="rating">Sort by: Rating</option>
                  <option value="ai-score">Sort by: AI Score</option>
                  <option value="price-low">Sort by: Price (Low to High)</option>
                  <option value="price-high">Sort by: Price (High to Low)</option>
                </select>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="space-y-4">
              {/* Categories */}
              <div>
                <label className="block text-zion-slate-light text-sm font-medium mb-2">Categories</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-zion-cyan text-zion-blue-dark'
                          : 'bg-zion-blue-light/20 text-zion-slate-light hover:text-white hover:bg-zion-blue-light/30'
                      }`}
                    >
                      {React.createElement(category.icon, { className: "w-4 h-4" })}
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pricing Models */}
              <div>
                <label className="block text-zion-slate-light text-sm font-medium mb-2">Pricing Models</label>
                <div className="flex flex-wrap gap-2">
                  {pricingModels.map((pricing) => (
                    <button
                      key={pricing.id}
                      onClick={() => setSelectedPricing(pricing.id)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        selectedPricing === pricing.id
                          ? 'bg-zion-cyan text-zion-blue-dark'
                          : 'bg-zion-blue-light/20 text-zion-slate-light hover:text-white hover:bg-zion-blue-light/30'
                      }`}
                    >
                      {pricing.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Support Levels */}
              <div>
                <label className="block text-zion-slate-light text-sm font-medium mb-2">Support Levels</label>
                <div className="flex flex-wrap gap-2">
                  {supportLevels.map((support) => (
                    <button
                      key={support.id}
                      onClick={() => setSelectedSupport(support.id)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        selectedSupport === support.id
                          ? 'bg-zion-cyan text-zion-blue-dark'
                          : 'bg-zion-blue-light/20 text-zion-slate-light hover:text-white hover:bg-zion-blue-light/30'
                      }`}
                    >
                      {support.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-zion-slate-light">
              Showing {filteredServices.length} of {EXPANDED_SERVICES.length} services
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-zion-blue-dark/50 backdrop-blur-sm rounded-xl p-6 border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/20">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(service.category)}
                    <span className="text-zion-cyan text-sm font-medium">{service.category}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">{service.rating}</span>
                  </div>
                </div>

                {/* Service Title and Description */}
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">{service.description}</p>

                {/* Key Features */}
                <div className="mb-4">
                  <p className="text-zion-slate-light text-xs mb-2">Key Features:</p>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Service Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-8 h-8 bg-zion-cyan/20 rounded-lg mx-auto mb-1">
                      <Brain className="w-4 h-4 text-zion-cyan" />
                    </div>
                    <p className="text-white text-sm font-medium">{service.aiScore}</p>
                    <p className="text-zion-slate-light text-xs">AI Score</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-8 h-8 bg-zion-cyan/20 rounded-lg mx-auto mb-1">
                      <Clock className="w-4 h-4 text-zion-cyan" />
                    </div>
                    <p className="text-white text-sm font-medium">{service.deliveryTime}</p>
                    <p className="text-zion-slate-light text-xs">Delivery</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-8 h-8 bg-zion-cyan/20 rounded-lg mx-auto mb-1">
                      <Users className="w-4 h-4 text-zion-cyan" />
                    </div>
                    <p className="text-white text-sm font-medium">{service.reviewCount}</p>
                    <p className="text-zion-slate-light text-xs">Reviews</p>
                  </div>
                </div>

                {/* Pricing and CTA */}
                <div className="border-t border-zion-blue-light/30 pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-zion-cyan text-2xl font-bold">{getPricingDisplay(service)}</p>
                      <p className="text-zion-slate-light text-sm">Market: ${service.marketPrice.average.toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-400 text-sm font-medium">
                        Save ${((service.marketPrice.average - service.price) / service.marketPrice.average * 100).toFixed(0)}%
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark font-medium rounded-lg transition-colors">
                      Get Quote
                    </button>
                    <button className="px-4 py-2 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-zion-blue-light/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-zion-slate-light" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No Services Found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedPricing('all');
                  setSelectedSupport('all');
                }}
                className="px-6 py-3 bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark font-medium rounded-lg transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ServiceMarketplace;