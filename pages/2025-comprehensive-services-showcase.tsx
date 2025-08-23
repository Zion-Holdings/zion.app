import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Search, Star, DollarSign, CheckCircle,
  ArrowRight, Rocket, Phone, Mail, MapPin, Grid, List,
  ChevronDown, Brain, Shield, Globe, Zap, Building, Users
} from 'lucide-react';

// Import our new 2025 services
import { advancedEnterpriseSolutions } from '../data/2025-advanced-enterprise-solutions';
import { innovativeAISolutions } from '../data/2025-innovative-ai-solutions';
import { innovativeMicroSaasSolutions } from '../data/2025-innovative-micro-saas-solutions';
import { innovativeITInfrastructureServices } from '../data/2025-innovative-it-infrastructure';

export default function Comprehensive2025ServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all new 2025 services
  const allServices = [
    ...advancedEnterpriseSolutions,
    ...innovativeAISolutions,
    ...innovativeMicroSaasSolutions,
    ...innovativeITInfrastructureServices
  ];

  // Dynamic category counts
  const enterpriseCount = allServices.filter(service =>
    service.category?.includes('Enterprise') || service.category?.includes('Automation')
  ).length;
  const aiCount = allServices.filter(service =>
    service.category?.includes('AI') || service.category?.includes('Machine Learning')
  ).length;
  const microSaasCount = allServices.filter(service =>
    service.category?.includes('Management') || service.category?.includes('Marketing')
  ).length;
  const infrastructureCount = allServices.filter(service =>
    service.category?.includes('Infrastructure') || service.category?.includes('Computing')
  ).length;

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'enterprise', name: 'Enterprise Solutions', icon: '🏢', count: enterpriseCount },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: aiCount },
    { id: 'microsaas', name: 'Micro SAAS', icon: '💼', count: microSaasCount },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: '⚙️', count: infrastructureCount }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $100/month', range: 'Under $100' },
    { id: 'medium', name: '$100 - $1K/month', range: '$100 - $1K' },
    { id: 'high', name: '$1K - $5K/month', range: '$1K - $5K' },
    { id: 'enterprise', name: 'Custom pricing', range: 'Custom' }
  ];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'all' ||
        (selectedCategory === 'enterprise' && (service.category.includes('Enterprise') || service.category.includes('Automation'))) ||
        (selectedCategory === 'ai' && (service.category.includes('AI') || service.category.includes('Machine Learning'))) ||
        (selectedCategory === 'microsaas' && (service.category.includes('Management') || service.category.includes('Marketing'))) ||
        (selectedCategory === 'infrastructure' && (service.category.includes('Infrastructure') || service.category.includes('Computing')));

      const matchesPrice = selectedPriceRange === 'all' ||
        (selectedPriceRange === 'low' && service.price.monthly < 100) ||
        (selectedPriceRange === 'medium' && service.price.monthly >= 100 && service.price.monthly <= 1000) ||
        (selectedPriceRange === 'high' && service.price.monthly > 1000 && service.price.monthly <= 5000) ||
        (selectedPriceRange === 'enterprise' && service.price.monthly > 5000);

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort services
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price':
        filtered.sort((a, b) => a.price.monthly - b.price.monthly);
        break;
      case 'popularity':
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'customers':
        filtered.sort((a, b) => b.customers - a.customers);
        break;
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  const getPriceDisplay = (service: any) => {
    return `$${service.price.monthly.toLocaleString()}/month`;
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes('Enterprise')) return '🏢';
    if (category.includes('AI')) return '🧠';
    if (category.includes('Management')) return '📦';
    if (category.includes('Marketing')) return '📱';
    if (category.includes('Infrastructure')) return '⚙️';
    if (category.includes('Computing')) return '💻';
    if (category.includes('Security')) return '🛡️';
    if (category.includes('Legal')) return '⚖️';
    if (category.includes('Healthcare')) return '🏥';
    if (category.includes('Financial')) return '📈';
    if (category.includes('Content')) return '🎨';
    if (category.includes('Customer')) return '💬';
    if (category.includes('Scheduling')) return '📅';
    if (category.includes('Feedback')) return '💬';
    if (category.includes('Social')) return '📱';
    if (category.includes('Email')) return '📧';
    if (category.includes('Quantum')) return '⚛️';
    if (category.includes('Blockchain')) return '🔗';
    if (category.includes('Edge')) return '🌐';
    if (category.includes('DevOps')) return '🚀';
    return '🚀';
  };

  return (
    <>
      <Head>
        <title>2025 Comprehensive Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive 2025 services including AI solutions, enterprise automation, micro SAAS platforms, and cutting-edge IT infrastructure. Transform your business with Zion Tech Group." />
        <meta name="keywords" content="AI services, enterprise solutions, micro SAAS, IT infrastructure, quantum computing, blockchain, edge computing, 2025 technology" />
        <meta property="og:title" content="2025 Comprehensive Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive 2025 services including AI solutions, enterprise automation, and cutting-edge IT infrastructure." />
        <meta property="og:url" content="https://ziontechgroup.com/2025-comprehensive-services-showcase" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/2025-comprehensive-services-showcase" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                2025 Comprehensive Services Showcase
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
                Transform your business with our cutting-edge AI solutions, enterprise automation platforms, 
                innovative micro SAAS services, and next-generation IT infrastructure
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200">
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  <span>AI-Powered Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  <span>Enterprise Grade</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  <span>Micro SAAS Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  <span>Global Infrastructure</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Information Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5" />
                <span>{contactInfo.mobile}</span>
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email}</span>
                <MapPin className="w-5 h-5" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-blue-100">Ready to transform your business?</span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range and Sort */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mt-6">
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setSelectedPriceRange(range.id)}
                    className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                      selectedPriceRange === range.id
                        ? 'bg-green-600 text-white'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {range.name}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white/20 border border-white/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="popularity">Sort by Popularity</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="customers">Sort by Customers</option>
                </select>

                <div className="flex bg-white/20 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded transition-colors ${
                      viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-white hover:bg-white/20'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded transition-colors ${
                      viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-white hover:bg-white/20'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid/List */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          {filteredServices.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or filters</p>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{getCategoryIcon(service.category)}</div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-1">{service.name}</h3>
                          <p className="text-blue-200 text-sm">{service.category}</p>
                        </div>
                      </div>
                      {service.popular && (
                        <div className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                          Popular
                        </div>
                      )}
                    </div>

                    <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Starting Price:</span>
                        <span className="text-2xl font-bold text-green-400">{getPriceDisplay(service)}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Setup Time:</span>
                        <span className="text-white">{service.price.setupTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Trial:</span>
                        <span className="text-white">{service.price.trialDays} days</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{service.rating} ({service.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Users className="w-4 h-4 text-blue-400" />
                        <span>{service.customers.toLocaleString()} customers</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-white text-sm">Key Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={service.link}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                        className="px-6 py-3 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                      >
                        Contact Sales
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Contact CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our team of experts is ready to help you implement the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call {contactInfo.mobile}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
            <div className="mt-8 text-blue-100">
              <p className="text-lg font-semibold mb-2">Visit our headquarters:</p>
              <p className="text-lg">{contactInfo.address}</p>
              <p className="text-lg mt-2">Website: <a href={contactInfo.website} className="underline hover:text-white">{contactInfo.website}</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
