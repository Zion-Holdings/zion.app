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

          {/* Services Display */}
          <AnimatePresence mode="wait">
            {viewMode === 'grid' ? (
              <motion.div 
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    {/* Service Header */}
                    <div className={`p-6 bg-gradient-to-r ${service.color} text-white`}>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl">{service.icon}</span>
                        {service.popular && (
                          <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                            POPULAR
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                      <p className="text-blue-100 text-sm">{service.tagline}</p>
                    </div>

                    {/* Service Content */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                      
                      {/* Price */}
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-gray-900">
                          {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}
                        </span>
                        <span className="text-gray-500">
                          {typeof service.price === 'string' ? (service as any).period || '/month' : '/month'}
                        </span>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Category Badge */}
                      <div className="mb-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                          {getCategoryIcon(service.category)}
                          <span className="ml-1">{service.category}</span>
                        </span>
                      </div>

                      {/* Action Button */}
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium flex items-center justify-center"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="p-6">
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Service Icon and Basic Info */}
                        <div className="flex items-start space-x-4">
                          <div className={`p-4 rounded-xl bg-gradient-to-r ${service.color} text-white`}>
                            <span className="text-3xl">{service.icon}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                              {service.popular && (
                                <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                                  POPULAR
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 mb-2">{service.tagline}</p>
                            <p className="text-gray-700">{service.description}</p>
                          </div>
                        </div>

                        {/* Price and Features */}
                        <div className="lg:w-1/3">
                          <div className="text-right mb-4">
                            <span className="text-3xl font-bold text-gray-900">
                              {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}
                            </span>
                            <span className="text-gray-500">
                              {typeof service.price === 'string' ? (service as any).period || '/month' : '/month'}
                            </span>
                          </div>
                          
                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                            <ul className="space-y-1 text-sm text-gray-600">
                              {service.features.slice(0, 4).map((feature, idx) => (
                                <li key={idx} className="flex items-center">
                                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Category and Action */}
                          <div className="flex flex-col items-end space-y-3">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                              {getCategoryIcon(service.category)}
                              <span className="ml-1">{service.category}</span>
                            </span>
                            
                            <a
                              href={service.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center"
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team of experts is ready to help you implement the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
