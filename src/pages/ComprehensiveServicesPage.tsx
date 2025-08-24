import React, { useState, useMemo } from 'react';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, CONTACT_INFO } from '@/data/comprehensiveServices';
import { Search, Filter, Star, Clock, Users, Zap, Shield, TrendingUp, Phone, Mail, Globe, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        (priceRange === 'low' && service.price.monthly < 50) ||
        (priceRange === 'medium' && service.price.monthly >= 50 && service.price.monthly < 100) ||
        (priceRange === 'high' && service.price.monthly >= 100);
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, selectedCategory, priceRange]);

  const getPriceDisplay = (service: any) => {
    if (service.price.monthly === 0) {
      return 'Free';
    }
    return `$${service.price.monthly}/month`;
  };

  const getCategoryIcon = (category: string) => {
    const categoryData = SERVICE_CATEGORIES.find(cat => cat.name === category);
    return categoryData?.icon || '💼';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
              {" "}Services
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Discover our complete suite of AI-powered solutions, IT services, and micro SAAS platforms 
            designed to transform your business operations and drive growth.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
              <input
                type="text"
                placeholder="Search for services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-zion-purple/30 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 focus:bg-white/20 transition-all duration-300"
              />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">
                {COMPREHENSIVE_SERVICES.length}+
              </div>
              <div className="text-zion-slate-light">Services Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-purple-light mb-2">
                {SERVICE_CATEGORIES.length}
              </div>
              <div className="text-zion-slate-light">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">
                4.8★
              </div>
              <div className="text-zion-slate-light">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white dark:bg-slate-800 py-8 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <Filter className="h-5 w-5 text-slate-600 dark:text-slate-400" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Filters:</span>
              
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {SERVICE_CATEGORIES.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>

              {/* Price Filter */}
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="low">Under $50/month</option>
                <option value="medium">$50 - $100/month</option>
                <option value="high">Over $100/month</option>
              </select>
            </div>

            <div className="text-sm text-slate-600 dark:text-slate-400">
              {filteredServices.length} services found
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {filteredServices.length === 0 ? (
            <div className="text-center py-16">
              <Search className="h-16 w-16 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                No services found
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Try adjusting your search criteria or filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl hover:border-zion-cyan/50 transition-all duration-300 group"
                >
                  {/* Service Image */}
                  <div className="relative h-48 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {service.badge && (
                      <div className="absolute top-4 right-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          service.badge === 'New' ? 'bg-zion-cyan text-white' :
                          service.badge === 'Featured' ? 'bg-zion-purple text-white' :
                          service.badge === 'Popular' ? 'bg-zion-blue text-white' :
                          'bg-slate-600 text-white'
                        }`}>
                          {service.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{getCategoryIcon(service.category)}</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                        Key Features:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                          >
                            <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price and Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-zion-cyan">
                        {getPriceDisplay(service)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-slate-900 dark:text-white">
                          {service.rating}
                        </span>
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          ({service.reviewCount})
                        </span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      to={service.link}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-xl hover:from-zion-purple-light hover:to-zion-cyan-light transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border-t border-zion-purple/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
            Contact our team to discuss your specific needs and get a customized solution 
            that fits your business requirements.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
              <Phone className="h-5 w-5 text-zion-cyan" />
              <a href={`tel:${CONTACT_INFO.phone}`} className="text-lg font-medium">
                {CONTACT_INFO.phone}
              </a>
            </div>
            <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
              <Mail className="h-5 w-5 text-zion-cyan" />
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-medium">
                {CONTACT_INFO.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-zion-slate-light">
              <Globe className="h-5 w-5 text-zion-cyan" />
              <span className="text-lg font-medium">
                {CONTACT_INFO.website}
              </span>
            </div>
          </div>

          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-semibold rounded-xl hover:from-zion-purple-light hover:to-zion-cyan-light transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-zion-cyan/30"
            >
              <Sparkles className="h-5 w-5" />
              Get Custom Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}