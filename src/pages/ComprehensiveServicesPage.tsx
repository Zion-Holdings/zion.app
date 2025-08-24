import React, { useState, useMemo } from 'react';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, CONTACT_INFO } from '@/data/comprehensiveServices';
import { Search, Filter, Star, Clock, Users, Zap, Shield, TrendingUp } from 'lucide-react';

export default function ComprehensiveServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const filteredServices = useMemo(() => {
    return COMPREHENSIVE_SERVICES.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      
      const matchesPrice = priceRange === 'all' || 
        (priceRange === 'low' && service.price < 5000) ||
        (priceRange === 'medium' && service.price >= 5000 && service.price < 15000) ||
        (priceRange === 'high' && service.price >= 15000);
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, selectedCategory, priceRange]);

  const getPriceDisplay = (service: any) => {
    if (service.priceType === 'monthly') {
      return `$${service.price}/month`;
    } else if (service.priceType === 'yearly') {
      return `$${service.price}/year`;
    } else if (service.priceType === 'per-user') {
      return `$${service.price}/user`;
    } else {
      return `$${service.price.toLocaleString()}`;
    }
  };

  const getCategoryIcon = (category: string) => {
    const categoryData = SERVICE_CATEGORIES.find(cat => cat.name === category);
    return categoryData?.icon || '💼';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Comprehensive Services</h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Discover our complete portfolio of micro SAAS, IT, and AI services designed to transform your business
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>{COMPREHENSIVE_SERVICES.length} Services Available</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>4.8+ Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Enterprise-Grade Security</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border-b border-zion-slate/10 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services, features, or technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-zion-slate/20 rounded-lg focus:border-zion-cyan focus:outline-none"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-zion-slate/20 rounded-lg focus:border-zion-cyan focus:outline-none"
              >
                <option value="all">All Categories</option>
                {SERVICE_CATEGORIES.map(category => (
                  <option key={category.name} value={category.name}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div className="lg:w-48">
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-4 py-3 border border-zion-slate/20 rounded-lg focus:border-zion-cyan focus:outline-none"
              >
                <option value="all">All Prices</option>
                <option value="low">Under $5,000</option>
                <option value="medium">$5,000 - $15,000</option>
                <option value="high">Over $15,000</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {filteredServices.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-zion-slate mb-2">No services found</h3>
              <p className="text-zion-slate-light">Try adjusting your search criteria or filters</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-zion-blue mb-2">
                  {filteredServices.length} Services Found
                </h2>
                <p className="text-zion-slate-light">
                  Showing {filteredServices.length} of {COMPREHENSIVE_SERVICES.length} available services
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <div key={service.id} className="bg-white rounded-xl shadow-lg border border-zion-slate/10 overflow-hidden hover:shadow-xl transition-all duration-300">
                    {/* Service Header */}
                    <div className="p-6 border-b border-zion-slate/10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{getCategoryIcon(service.category)}</span>
                          <div>
                            <span className="text-xs font-medium text-zion-slate bg-zion-slate/10 px-2 py-1 rounded-full">
                              {service.category}
                            </span>
                          </div>
                        </div>
                        {service.featured && (
                          <span className="text-xs font-medium text-zion-purple bg-zion-purple/10 px-2 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-zion-blue mb-2">{service.title}</h3>
                      <p className="text-zion-slate-light text-sm mb-4 line-clamp-2">{service.description}</p>

                      {/* Price and Rating */}
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-zion-purple">
                          {getPriceDisplay(service)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium text-zion-slate">{service.rating}</span>
                          <span className="text-xs text-zion-slate-light">({service.reviewCount})</span>
                        </div>
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="p-6">
                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-zion-slate mb-3 flex items-center gap-2">
                          <Zap className="w-4 h-4 text-zion-cyan" />
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                              <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                              {feature}
                            </div>
                          ))}
                          {service.features.length > 3 && (
                            <div className="text-xs text-zion-slate-light mt-2">
                              +{service.features.length - 3} more features
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-zion-slate mb-3 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-zion-green" />
                          Key Benefits
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.benefits.slice(0, 2).map((benefit, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                              <div className="w-1.5 h-1.5 bg-zion-green rounded-full"></div>
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Service Info */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <Clock className="w-4 h-4 text-zion-cyan" />
                          <span>{service.deliveryTime}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <Shield className="w-4 h-4 text-zion-green" />
                          <span>{service.support}</span>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-zion-slate mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.slice(0, 4).map((tech, index) => (
                            <span key={index} className="text-xs bg-zion-slate/10 text-zion-slate px-2 py-1 rounded-full">
                              {tech}
                            </span>
                          ))}
                          {service.technologies.length > 4 && (
                            <span className="text-xs text-zion-slate-light">
                              +{service.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-6 rounded-lg font-semibold hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300">
                        Get Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-zion-blue-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Contact our team to discuss your project requirements and get a personalized quote
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-zion-slate-light">{CONTACT_INFO.phone}</p>
              <p className="text-zion-slate-light text-sm">{CONTACT_INFO.businessHours}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-zion-slate-light">{CONTACT_INFO.email}</p>
              <p className="text-zion-slate-light text-sm">24/7 Support Available</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-zion-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-zion-slate-light text-sm">{CONTACT_INFO.address}</p>
              <p className="text-zion-slate-light text-sm">By appointment</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href={`mailto:${CONTACT_INFO.email}?subject=Service Inquiry`}
              className="inline-block bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300"
            >
              Start Your Project Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}