import React, { useState, useMemo } from 'react';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES } from '../data/comprehensiveServices';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap } from 'lucide-react';

const ComprehensiveServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [selectedPricingModel, setSelectedPricingModel] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('rating');

  // Create categories and subcategories from the data
  const serviceCategories = ['all', ...Array.from(new Set(COMPREHENSIVE_SERVICES.map(service => service.category)))];
  
  const serviceSubcategories = COMPREHENSIVE_SERVICES.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    if (!acc[service.category].includes(service.subcategory)) {
      acc[service.category].push(service.subcategory);
    }
    return acc;
  }, {} as Record<string, string[]>);

  const filteredServices = useMemo(() => {
    return COMPREHENSIVE_SERVICES.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;
      const matchesPricing = selectedPricingModel === 'all' || service.pricingModel === selectedPricingModel;
      
      return matchesSearch && matchesCategory && matchesSubcategory && matchesPricing;
    }).sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return 0; // No rating field in current data
        case 'price':
          return a.price - b.price;
        case 'name':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });
  }, [searchTerm, selectedCategory, selectedSubcategory, selectedPricingModel, sortBy]);

  const getSubcategories = () => {
    if (selectedCategory === 'all') return [];
    return serviceSubcategories[selectedCategory as keyof typeof serviceSubcategories] || [];
  };

  const formatPrice = (price: number, model: string) => {
    switch (model) {
      case 'monthly':
        return `$${price}/month`;
      case 'hourly':
        return `$${price}/hour`;
      case 'project-based':
        return `$${price}`;
      case 'one-time':
        return `$${price}`;
      default:
        return `$${price}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Comprehensive Services & Solutions
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover our extensive portfolio of AI-powered services, cloud solutions, cybersecurity, 
            and digital transformation services designed to accelerate your business growth.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-zion-blue-dark py-8 border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-purple"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setSelectedSubcategory('all');
              }}
              className="px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:outline-none focus:border-zion-purple"
            >
              <option value="all">All Categories</option>
              {serviceCategories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Subcategory Filter */}
            <select
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              className="px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:outline-none focus:border-zion-purple"
            >
              <option value="all">All Subcategories</option>
              {getSubcategories().map(subcategory => (
                <option key={subcategory} value={subcategory}>{subcategory}</option>
              ))}
            </select>

            {/* Pricing Model Filter */}
            <select
              value={selectedPricingModel}
              onChange={(e) => setSelectedPricingModel(e.target.value)}
              className="px-4 py-3 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:outline-none focus:border-zion-purple"
            >
              <option value="all">All Pricing Models</option>
              <option value="monthly">Monthly</option>
              <option value="hourly">Hourly</option>
              <option value="project-based">Project-based</option>
              <option value="one-time">One-time</option>
            </select>
          </div>

          {/* Sort Options */}
          <div className="mt-4 flex items-center gap-4">
            <span className="text-zion-slate-light">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 bg-zion-blue border border-zion-blue-light rounded-lg text-white focus:outline-none focus:border-zion-purple"
            >
              <option value="rating">Rating</option>
              <option value="price">Price</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            {filteredServices.length} Services Found
          </h2>
          <p className="text-zion-slate-light">
            Showing results for your search criteria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-purple transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20">
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-zion-slate-light text-sm">{service.category} • {service.subcategory}</p>
                </div>
                {service.supportLevel === 'premium' && (
                  <span className="bg-zion-purple text-white text-xs px-2 py-1 rounded-full font-medium">
                    Premium
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-zion-slate-light mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-white font-medium mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                      <Zap className="w-3 h-3 text-zion-purple" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing and Details */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light text-sm">Price:</span>
                  <span className="text-white font-bold">
                    {formatPrice(service.price, service.pricingModel)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light text-sm">Market Price:</span>
                  <span className="text-zion-cyan text-sm">{service.marketPrice}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light text-sm">Delivery:</span>
                  <span className="text-zion-slate-light text-sm">{service.estimatedDelivery}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light text-sm">Support:</span>
                  <span className="text-zion-slate-light text-sm capitalize">{service.supportLevel}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-zion-blue/20 text-zion-slate-light text-xs rounded border border-zion-blue/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-4">
                <div className="text-center mb-3">
                  <p className="text-zion-slate-light text-sm mb-2">Ready to get started?</p>
                  <div className="flex items-center justify-center gap-4 text-xs text-zion-slate-light">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {service.estimatedDelivery}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {service.supportLevel}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                    className="flex-1 bg-zion-purple hover:bg-zion-purple-dark text-white text-center py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    Contact Us
                  </a>
                  <a
                    href={service.contactInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-zion-blue hover:bg-zion-blue-light text-white text-center py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-zion-slate-light text-lg mb-4">
              No services found matching your criteria
            </div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedSubcategory('all');
                setSelectedPricingModel('all');
              }}
              className="bg-zion-purple hover:bg-zion-purple-dark text-white px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Our team of experts can create tailored solutions to meet your specific business requirements. 
            Let's discuss how we can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-zion-purple px-8 py-3 rounded-lg font-medium hover:bg-zion-slate-light transition-colors duration-200"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-zion-purple transition-colors duration-200"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-zion-slate-dark py-12 border-t border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-zion-slate-light mb-4">
                Pioneering the future of technology with revolutionary AI consciousness, 
                quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>
              <div className="flex items-center gap-4 text-zion-slate-light">
                <a href="https://ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-zion-slate-light">
                <p>📱 +1 302 464 0950</p>
                <p>✉️ kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <div className="space-y-2">
                <a href="/comprehensive-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Comprehensive Services
                </a>
                <a href="/ai-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  AI Services
                </a>
                <a href="/enterprise-solutions" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Enterprise Solutions
                </a>
                <a href="/micro-saas-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Micro SAAS Services
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-zion-blue-light mt-8 pt-8 text-center">
            <p className="text-zion-slate-light text-sm">
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href="/privacy" className="ml-2 hover:text-zion-cyan transition-colors">Privacy Policy</a> | 
              <a href="/terms" className="ml-2 hover:text-zion-cyan transition-colors">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesPage;