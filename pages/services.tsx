import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useMemo } from 'react';
import { enhancedRealMicroSaasServices, serviceCategories, getServicesByCategory, getServicesByTechnology, getServicesByPriceRange } from '../data/enhanced-real-micro-saas-services';

const Services: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const filteredServices = useMemo(() => {
    let services = enhancedRealMicroSaasServices;

    // Filter by category
    if (selectedCategory !== 'All') {
      services = getServicesByCategory(selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      services = services.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.technology.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by price range
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      services = getServicesByPriceRange(min, max === 0 ? Infinity : max);
    }

    // Sort services
    services.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
        case 'popularity':
          return b.popular ? 1 : -1;
        case 'growth':
          return parseFloat(b.growthRate) - parseFloat(a.growthRate);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return services;
  }, [selectedCategory, searchTerm, priceRange, sortBy]);

  const getPriceRangeLabel = (range: string) => {
    switch (range) {
      case '0-100': return 'Under $100/month';
      case '100-300': return '$100 - $300/month';
      case '300-500': return '$300 - $500/month';
      case '500-1000': return '$500 - $1000/month';
      case '1000-0': return 'Over $1000/month';
      default: return 'All Prices';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Head>
        <title>Micro SAAS Services - Zion Tech Group | Innovative Technology Solutions</title>
        <meta name="description" content="Discover our comprehensive portfolio of innovative micro SAAS services including AI, quantum computing, cybersecurity, and more. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="micro SAAS services, AI solutions, quantum computing, cybersecurity, DevOps, healthcare AI, metaverse platform" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary Micro SAAS Services
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Discover our cutting-edge portfolio of innovative technology solutions designed to transform your business. 
            From AI-powered analytics to quantum computing platforms, we're building the future today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>🚀 8+ Revolutionary Services</span>
            <span>⚡ 99.9% Uptime Guarantee</span>
            <span>🤖 AI-Powered Solutions</span>
            <span>💰 Competitive Pricing</span>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="grid md:grid-cols-4 gap-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {serviceCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="0-100">Under $100/month</option>
                <option value="100-300">$100 - $300/month</option>
                <option value="300-500">$300 - $500/month</option>
                <option value="500-1000">$500 - $1000/month</option>
                <option value="1000-0">Over $1000/month</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="popularity">Popularity</option>
                <option value="growth">Growth Rate</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredServices.length}</span> services
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
            {priceRange !== 'all' && ` in ${getPriceRangeLabel(priceRange)}`}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Service Header */}
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-sm opacity-90">{service.tagline}</p>
                {service.popular && (
                  <span className="inline-block bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold mt-2">
                    ⭐ Popular
                  </span>
                )}
              </div>

              {/* Service Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                
                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                  <span className="text-gray-500">{service.period}</span>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-blue-600">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Technology Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Technology:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technology.slice(0, 3).map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {service.technology.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        +{service.technology.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Market Info */}
                <div className="mb-4 text-sm text-gray-600">
                  <div className="flex justify-between mb-1">
                    <span>Market Size:</span>
                    <span className="font-medium">{service.marketSize}</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Growth Rate:</span>
                    <span className="font-medium text-green-600">{service.growthRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ROI:</span>
                    <span className="font-medium text-blue-600">{service.roi}</span>
                  </div>
                </div>

                {/* Trial & Setup */}
                <div className="mb-4 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Free Trial:</span>
                    <span className="font-medium">{service.trialDays} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Setup Time:</span>
                    <span className="font-medium">{service.setupTime}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={service.link}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                  >
                    Learn More
                  </a>
                  <a
                    href="/contact"
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search terms to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
                setPriceRange('all');
                setSortBy('name');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Our team of experts is ready to help you implement the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;