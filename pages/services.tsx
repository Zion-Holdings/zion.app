import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import { expandedMicroSaasServices, serviceCategories, getServicesByCategory, getPopularServices, getServicesByPriceRange } from '../data/expanded-micro-saas-services';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const priceRanges = [
    { value: 'All', label: 'All Prices' },
    { value: '0-50', label: '$0 - $50' },
    { value: '51-100', label: '$51 - $100' },
    { value: '101-200', label: '$101 - $200' },
    { value: '201+', label: '$201+' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'price', label: 'Price Low-High' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'category', label: 'Category' }
  ];

  // Filter and sort services
  let filteredServices = expandedMicroSaasServices;

  // Category filter
  if (selectedCategory !== 'All') {
    filteredServices = getServicesByCategory(selectedCategory);
  }

  // Price range filter
  if (priceRange !== 'All') {
    const [min, max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
    filteredServices = getServicesByPriceRange(min, max);
  }

  // Search filter
  if (searchQuery) {
    filteredServices = filteredServices.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Sort services
  filteredServices.sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const popularServices = getPopularServices();

  const categoryIcons: { [key: string]: React.ReactNode } = {
    'AI & Machine Learning': <Brain className="w-6 h-6" />,
    'Blockchain & Web3': <Globe2 className="w-6 h-6" />,
    'AR/VR & Metaverse': <Globe className="w-6 h-6" />,
    'IoT & Smart Cities': <Smartphone className="w-6 h-6" />,
    'Cloud & Infrastructure': <Cloud className="w-6 h-6" />,
    'Data Analytics & BI': <BarChart3 className="w-6 h-6" />,
    'Cybersecurity': <Shield className="w-6 h-6" />,
    'Emerging Technologies': <Rocket className="w-6 h-6" />,
    'Quantum Computing': <Atom className="w-6 h-6" />,
    'Autonomous Systems': <Bot className="w-6 h-6" />,
    'Sustainable Technology': <Leaf className="w-6 h-6" />,
    'Biomedical & Healthcare': <FlaskConical className="w-6 h-6" />,
    'Financial Technology': <DollarSign className="w-6 h-6" />,
    'Climate & Environment': <Leaf className="w-6 h-6" />,
    'Manufacturing & Industry 4.0': <Factory className="w-6 h-6" />,
    'Transportation & Logistics': <Truck className="w-6 h-6" />,
    'Energy & Utilities': <Zap className="w-6 h-6" />,
    'Research & Development': <Microscope className="w-6 h-6" />,
    'Government & Defense': <ShieldCheck className="w-6 h-6" />,
    'Education & Training': <GraduationCap className="w-6 h-6" />
  };

  const contactSection = (
    <div className="relative z-10 bg-black/50 backdrop-blur-xl rounded-3xl border border-white/20 p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Get Started Today
        </h2>
        <p className="text-xl text-gray-300 mb-6">
          Ready to transform your business with our cutting-edge micro SaaS solutions?
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="text-center p-6 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl border border-cyan-500/30">
          <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
          <p className="text-cyan-400 font-mono">{contactInfo.mobile}</p>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl border border-purple-500/30">
          <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
          <p className="text-purple-400 font-mono">{contactInfo.email}</p>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-2xl border border-green-500/30">
          <MapPin className="w-8 h-8 text-green-400 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
          <p className="text-green-400 text-sm">{contactInfo.address}</p>
        </div>
      </div>

      <div className="text-center">
        <Button 
          href="https://ziontechgroup.com/contact"
          variant="primary"
          size="lg"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Start Your Free Trial Today
        </Button>
        <p className="text-gray-400 mt-4 text-sm">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </div>
  );

  return (
    <EnhancedFuturisticBackground variant="neural-quantum" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>Complete Services Portfolio | Zion Tech Group - AI, Cloud, Security & More</title>
          <meta name="description" content="Explore our complete portfolio of 250+ micro SaaS services. AI solutions, cloud infrastructure, cybersecurity, data analytics, IoT, blockchain, and emerging technologies." />
          <meta name="keywords" content="AI services, cloud solutions, cybersecurity, data analytics, IoT platform, blockchain, quantum computing, AR/VR, micro SaaS, business automation" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="Complete Services Portfolio | Zion Tech Group" />
          <meta property="og:description" content="Comprehensive technology services portfolio with AI, cloud, security, and emerging technology solutions." />
          <meta property="og:url" content="https://ziontechgroup.com/services" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/services" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Complete Technology Portfolio
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  250+ Revolutionary
                  <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Micro SaaS Services
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Transform your business with our comprehensive portfolio of cutting-edge technology solutions. 
                  From AI and quantum computing to blockchain and emerging technologies.
                </p>
              </div>

              {/* Service Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">250+</div>
                  <div className="text-sm text-gray-400">Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">20</div>
                  <div className="text-sm text-gray-400">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">14</div>
                  <div className="text-sm text-gray-400">Day Trial</div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-700/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <Phone className="w-6 h-6 text-blue-400 mb-2" />
                    <div className="text-sm text-gray-400">Mobile</div>
                    <div className="text-white font-semibold">{contactInfo.mobile}</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <Mail className="w-6 h-6 text-green-400 mb-2" />
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white font-semibold">{contactInfo.email}</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <MapPin className="w-6 h-6 text-purple-400 mb-2" />
                    <div className="text-sm text-gray-400">Address</div>
                    <div className="text-white font-semibold text-sm">{contactInfo.address}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Most Popular Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover our most sought-after solutions that are transforming businesses worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularServices.slice(0, 6).map((service, index) => (
                <EnhancedFuturisticCard
                  key={service.id}
                  variant={index % 3 === 0 ? 'quantum' : index % 3 === 1 ? 'holographic' : 'neural'}
                  intensity="high"
                  className="h-full group cursor-pointer"
                  interactive={true}
                  onClick={() => window.open(service.link, '_blank')}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <div className="inline-flex items-center px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium mb-3">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                    <div className="text-sm text-gray-400 mb-2">{service.category}</div>
                    <div className="text-lg font-bold text-cyan-400 mb-4">{service.price}{service.period}</div>
                    <div className="inline-flex items-center text-blue-400 text-sm group-hover:text-blue-300 transition-colors">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </EnhancedFuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Service Categories
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our comprehensive range of technology solutions organized by industry and technology type.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {serviceCategories.filter(cat => cat !== 'All').map((category, index) => {
                const categoryServices = getServicesByCategory(category);
                const icon = categoryIcons[category] || <Settings className="w-6 h-6" />;
                
                return (
                  <EnhancedFuturisticCard
                    key={category}
                    variant={index % 4 === 0 ? 'holographic' : index % 4 === 1 ? 'quantum' : index % 4 === 2 ? 'neural' : 'cyberpunk'}
                    intensity="medium"
                    className="text-center cursor-pointer group"
                    interactive={true}
                    onClick={() => setSelectedCategory(category)}
                  >
                    <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                      {icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{category}</h3>
                    <div className="text-sm text-gray-400 mb-3">{categoryServices.length} services</div>
                    <div className="inline-flex items-center text-blue-400 text-sm group-hover:text-blue-300 transition-colors">
                      View Services <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </EnhancedFuturisticCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {contactSection}
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 mb-8">
                <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                  {/* Search */}
                  <div className="flex-1 w-full lg:w-auto">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search services..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full lg:w-80 pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                    >
                      {serviceCategories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>

                    <select
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                    >
                      {priceRanges.map((range) => (
                        <option key={range.value} value={range.value}>{range.label}</option>
                      ))}
                    </select>

                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* View Mode Toggle */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-3 rounded-xl transition-colors ${
                        viewMode === 'grid' 
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                          : 'bg-gray-800/50 text-gray-400 border border-gray-600/50 hover:bg-gray-700/50'
                      }`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-3 rounded-xl transition-colors ${
                        viewMode === 'list' 
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                          : 'bg-gray-800/50 text-gray-400 border border-gray-600/50 hover:bg-gray-700/50'
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Results Count */}
              <div className="text-center mb-8">
                <p className="text-gray-400">
                  Showing <span className="text-white font-semibold">{filteredServices.length}</span> services
                  {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
              </div>

              {/* Services Grid/List */}
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredServices.map((service, index) => (
                    <EnhancedFuturisticCard
                      key={service.id}
                      variant={index % 4 === 0 ? 'quantum' : index % 4 === 1 ? 'holographic' : index % 4 === 2 ? 'neural' : 'cyberpunk'}
                      intensity="medium"
                      className="h-full group cursor-pointer"
                      interactive={true}
                      onClick={() => window.open(service.link, '_blank')}
                    >
                      <div className="text-center">
                        <div className="text-4xl mb-4">{service.icon}</div>
                        {service.popular && (
                          <div className="inline-flex items-center px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium mb-3">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </div>
                        )}
                        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                        <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                        <div className="text-sm text-gray-400 mb-2">{service.category}</div>
                        <div className="text-lg font-bold text-cyan-400 mb-4">{service.price}{service.period}</div>
                        <div className="inline-flex items-center text-blue-400 text-sm group-hover:text-blue-300 transition-colors">
                          Learn More <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </EnhancedFuturisticCard>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredServices.map((service, index) => (
                    <EnhancedFuturisticCard
                      key={service.id}
                      variant={index % 4 === 0 ? 'quantum' : index % 4 === 1 ? 'holographic' : index % 4 === 2 ? 'neural' : 'cyberpunk'}
                      intensity="low"
                      className="group cursor-pointer"
                      interactive={true}
                      onClick={() => window.open(service.link, '_blank')}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">{service.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-bold text-white">{service.name}</h3>
                            {service.popular && (
                              <div className="inline-flex items-center px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                                <Star className="w-3 h-3 mr-1" />
                                Popular
                              </div>
                            )}
                          </div>
                          <p className="text-gray-300 text-sm mb-2">{service.tagline}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>{service.category}</span>
                            <span>•</span>
                            <span>{service.setupTime} setup</span>
                            <span>•</span>
                            <span>{service.trialDays} day trial</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}{service.period}</div>
                          <div className="inline-flex items-center text-blue-400 text-sm group-hover:text-blue-300 transition-colors">
                            Learn More <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                        </div>
                      </div>
                    </EnhancedFuturisticCard>
                  ))}
                </div>
              )}

              {/* No Results */}
              {filteredServices.length === 0 && (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                  <p className="text-gray-400 mb-6">Try adjusting your search criteria or browse all categories.</p>
                  <Button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                      setPriceRange('All');
                    }}
                    variant="primary"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <EnhancedFuturisticCard
              variant="quantum-holographic"
              intensity="high"
              className="max-w-4xl mx-auto"
            >
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Contact our team to discuss your specific needs and find the perfect solution for your business. 
                  Get a free consultation and start your 14-day trial today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Button href="/contact" variant="primary" size="lg">
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button href="/pricing" variant="secondary" size="lg">
                    View Pricing
                  </Button>
                </div>
                <div className="mt-6 text-sm text-gray-400 mb-8">
                  Free 14-day trial • No credit card required • Expert support included • 99.9% uptime guarantee
                </div>
                
                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30">
                    <Phone className="w-6 h-6 text-blue-400 mb-2" />
                    <div className="text-sm text-gray-400">Mobile</div>
                    <div className="text-white font-semibold">{contactInfo.mobile}</div>
                    <div className="text-xs text-blue-400 mt-1">Available 24/7</div>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30">
                    <Mail className="w-6 h-6 text-green-400 mb-2" />
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white font-semibold">{contactInfo.email}</div>
                    <div className="text-xs text-green-400 mt-1">Response within 2 hours</div>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30">
                    <MapPin className="w-6 h-6 text-purple-400 mb-2" />
                    <div className="text-sm text-gray-400">Address</div>
                    <div className="text-white font-semibold text-sm">{contactInfo.address}</div>
                    <div className="text-xs text-purple-400 mt-1">Global headquarters</div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-sm">
                    <Globe className="w-4 h-4 mr-2" />
                    Visit us at: {contactInfo.website}
                  </div>
                </div>
              </div>
            </EnhancedFuturisticCard>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}