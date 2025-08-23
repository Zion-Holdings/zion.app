import React, { useState } from 'react';
import Head from 'next/head';
import MicroSaasServices from '../components/sections/MicroSaasServices';
import ServiceComparison from '../components/sections/ServiceComparison';
import { microSaasServices, serviceCategories, getServicesByCategory } from '../data/micro-saas-services';
import { Search, Filter, TrendingUp, Star, Zap, Users, Globe, Shield } from 'lucide-react';

export default function MicroSaasPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'launchDate' | 'marketSize'>('name');

  const filteredServices = microSaasServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseInt(a.pricing.starter) - parseInt(b.pricing.starter);
        case 'launchDate':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        case 'marketSize':
          return parseFloat(b.marketSize.replace(/[^0-9.]/g, '')) - parseFloat(a.marketSize.replace(/[^0-9.]/g, ''));
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'Content & Marketing': <Zap className="w-4 h-4" />,
      'Analytics & Business Intelligence': <TrendingUp className="w-4 h-4" />,
      'Customer Support': <Users className="w-4 h-4" />,
      'SEO & Marketing': <Globe className="w-4 h-4" />,
      'Project Management': <Users className="w-4 h-4" />,
      'Email Marketing': <Zap className="w-4 h-4" />,
      'Social Media': <Globe className="w-4 h-4" />,
      'E-commerce & Inventory': <TrendingUp className="w-4 h-4" />,
      'Human Resources': <Users className="w-4 h-4" />,
      'Finance & Accounting': <TrendingUp className="w-4 h-4" />,
      'Design & Creative': <Star className="w-4 h-4" />,
      'Video & Media': <Star className="w-4 h-4" />,
      'Legal & Compliance': <Shield className="w-4 h-4" />
    };
    
    return iconMap[category] || <Zap className="w-4 h-4" />;
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'active': { color: 'bg-green-500/10 text-green-400 border-green-500/20', text: 'Active' },
      'beta': { color: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20', text: 'Beta' },
      'coming-soon': { color: 'bg-blue-500/10 text-blue-400 border-blue-500/20', text: 'Coming Soon' }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.active;
    
    return (
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${config.color}`}>
        {config.text}
      </span>
    );
  };

  return (
    <>
      <Head>
        <title>Micro SaaS Services | Zion Tech Group - AI-Powered Solutions</title>
        <meta name="description" content="Explore our comprehensive portfolio of micro SaaS services. AI-powered solutions for content creation, analytics, customer support, SEO, project management, and more." />
        <meta property="og:title" content="Micro SaaS Services | Zion Tech Group" />
        <meta property="og:description" content="AI-powered micro SaaS solutions for modern businesses" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Micro SaaS Portfolio
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Micro SaaS Services
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Discover our collection of innovative, AI-powered micro SaaS solutions designed to solve specific business problems. 
              Each service is built with cutting-edge technology and competitive pricing.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{microSaasServices.length}</div>
                <div className="text-gray-400">Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">{serviceCategories.length}</div>
                <div className="text-gray-400">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">$19</div>
                <div className="text-gray-400">Starting Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">14+</div>
                <div className="text-gray-400">Free Trial Days</div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-12 bg-gray-900/50 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-4">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  {serviceCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="flex items-center gap-4">
                <span className="text-gray-400">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="launchDate">Launch Date</option>
                  <option value="marketSize">Market Size</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                {filteredServices.length} Service{filteredServices.length !== 1 ? 's' : ''} Found
              </h2>
              <p className="text-gray-400">
                {selectedCategory !== 'all' ? `Showing services in ${selectedCategory}` : 'Showing all services'}
                {searchTerm && ` matching "${searchTerm}"`}
              </p>
            </div>

            {filteredServices.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-gray-400 text-lg mb-4">No services found</div>
                <p className="text-gray-500">Try adjusting your search terms or category filter</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <div
                    key={service.id}
                    className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {getCategoryIcon(service.category)}
                        <span className="text-sm text-gray-400">{service.category}</span>
                      </div>
                      {getStatusBadge(service.status)}
                    </div>

                    {/* Service Title & Description */}
                    <h3 className="text-xl font-bold mb-3 text-white hover:text-blue-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Pricing */}
                    <div className="mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-2xl font-bold text-white">${service.pricing.starter}</span>
                        <span className="text-gray-400">/month</span>
                      </div>
                      <p className="text-xs text-gray-400">Starting from {service.pricing.starter} USD/month</p>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>
                      <div className="space-y-2">
                        {service.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 4 && (
                          <div className="text-xs text-gray-500 mt-2">
                            +{service.features.length - 4} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4 text-xs mb-6">
                      <div>
                        <span className="text-gray-400">Market Size:</span>
                        <div className="text-white font-medium">{service.marketSize}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Free Trial:</span>
                        <div className="text-white font-medium">{service.trialDays} days</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={service.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                      >
                        <span>Visit Service</span>
                      </a>
                      <a
                        href={`/services/${service.id}`}
                        className="flex-1 border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white text-center py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                      >
                        <span>Learn More</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Service Comparison */}
        <ServiceComparison services={filteredServices} />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Choose from our portfolio of micro SaaS services and start your free trial today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                Get Started
              </a>
              <a
                href="/pricing"
                className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}