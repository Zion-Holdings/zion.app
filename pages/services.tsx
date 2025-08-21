import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, CheckCircle, XCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import QuantumHolographicBackground from '../components/ui/QuantumHolographicBackground';
import QuantumHolographicCard from '../components/ui/QuantumHolographicCard';
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

  // Featured Innovative Services
  const featuredInnovativeServices = [
    {
      id: 'quantum-financial-modeling',
      name: 'Quantum Financial Modeling Platform',
      tagline: 'Revolutionary drug discovery using quantum algorithms',
      price: '$799',
      period: '/month',
      description: 'Advanced quantum computing platform for pharmaceutical research, enabling 100x faster drug discovery and molecular simulation.',
      icon: '💰',
      category: 'Financial Technology',
      theme: 'quantum' as const,
      link: 'https://ziontechgroup.com/quantum-financial',
      features: ['Quantum portfolio optimization', 'AI drug screening', 'Protein analysis', 'Clinical optimization']
    },
    {
      id: 'ai-legal-contract-analyzer',
      name: 'AI Legal Contract Analyzer',
      tagline: 'Intelligent contract analysis and risk assessment',
      price: '$299',
      period: '/month',
      description: 'Advanced AI platform that analyzes legal contracts, identifies risks, suggests improvements, and ensures compliance.',
      icon: '⚖️',
      category: 'Legal Technology',
      theme: 'neural' as const,
      link: 'https://ziontechgroup.com/ai-legal-contracts',
      features: ['Contract risk assessment', 'AI-powered clause analysis', 'Regulatory compliance', 'Legal research']
    },
    {
      id: 'quantum-supply-chain-optimizer',
      name: 'Quantum Supply Chain Optimizer',
      tagline: 'Quantum-powered supply chain optimization',
      price: '$599',
      period: '/month',
      description: 'Revolutionary supply chain platform using quantum algorithms to optimize logistics and reduce costs.',
      icon: '🚚',
      category: 'Supply Chain & Logistics',
      theme: 'quantum' as const,
      link: 'https://ziontechgroup.com/quantum-supply-chain',
      features: ['Quantum route optimization', 'Real-time inventory', 'Predictive forecasting', 'Cost optimization']
    },
    {
      id: 'ai-healthcare-diagnostics',
      name: 'AI Healthcare Diagnostics Platform',
      tagline: 'Advanced medical imaging and diagnostic AI',
      price: '$899',
      period: '/month',
      description: 'Cutting-edge AI platform for medical imaging analysis with FDA approval and clinical validation.',
      icon: '🏥',
      category: 'Healthcare & Life Sciences',
      theme: 'neural' as const,
      link: 'https://ziontechgroup.com/ai-healthcare',
      features: ['Medical image analysis', 'Disease detection', 'Clinical decision support', 'HIPAA compliance']
    },
    {
      id: 'quantum-energy-optimization',
      name: 'Quantum Energy Optimization Platform',
      tagline: 'Quantum algorithms for energy grid optimization',
      price: '$699',
      period: '/month',
      description: 'Revolutionary energy platform using quantum computing to optimize power grids and reduce waste.',
      icon: '⚡',
      category: 'Energy & Utilities',
      theme: 'quantum' as const,
      link: 'https://ziontechgroup.com/quantum-energy',
      features: ['Grid load balancing', 'Renewable integration', 'Predictive maintenance', 'Smart city support']
    },
    {
      id: 'ai-autonomous-manufacturing',
      name: 'AI Autonomous Manufacturing Platform',
      tagline: 'Intelligent factory automation and quality control',
      price: '$799',
      period: '/month',
      description: 'Advanced AI platform for autonomous manufacturing with predictive maintenance and quality control.',
      icon: '🏭',
      category: 'Manufacturing & Industry 4.0',
      theme: 'cyberpunk' as const,
      link: 'https://ziontechgroup.com/ai-manufacturing',
      features: ['Predictive maintenance', 'Quality automation', 'Production optimization', 'Remote operation']
    }
  ];

  return (
    <EnhancedFuturisticBackground theme="quantum" intensity="high" className="min-h-screen">
      <Head>
        <title>Micro SaaS Services - Zion Tech Group | 500+ Revolutionary Solutions</title>
        <meta name="description" content="Discover 500+ revolutionary micro SaaS services powered by quantum computing and AI. From financial modeling to healthcare diagnostics, transform your business with cutting-edge technology." />
        <meta name="keywords" content="micro SaaS services, AI solutions, quantum computing, financial modeling, healthcare AI, supply chain optimization, legal tech, manufacturing automation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Micro SaaS Services - Zion Tech Group | 500+ Revolutionary Solutions" />
        <meta property="og:description" content="Discover 500+ revolutionary micro SaaS services powered by quantum computing and AI. Transform your business today." />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:type" content="website" />
        
        {/* Contact Information */}
        <meta name="contact:mobile" content="+1 302 464 0950" />
        <meta name="contact:email" content="kleber@ziontechgroup.com" />
        <meta name="contact:address" content="364 E Main St STE 1008 Middletown DE 19709" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 opacity-90" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              500+ Revolutionary
            </span>
            <br />
            <span className="text-white">Micro SaaS Services</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge micro SaaS solutions powered by quantum computing and AI. 
            From financial modeling to healthcare diagnostics, we deliver the future of business technology.
          </p>
          
          {/* Contact Info Banner */}
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-6 h-6 text-cyan-400 mb-2" />
                <span className="text-sm text-gray-400">Mobile</span>
                <span className="text-white font-semibold">{contactInfo.mobile}</span>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-6 h-6 text-cyan-400 mb-2" />
                <span className="text-sm text-gray-400">Email</span>
                <span className="text-white font-semibold">{contactInfo.email}</span>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-cyan-400 mb-2" />
                <span className="text-sm text-gray-400">Address</span>
                <span className="text-white font-semibold text-xs">{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Innovative Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured Revolutionary Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the future of business technology with our most innovative micro SaaS solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredInnovativeServices.map((service, index) => (
              <EnhancedFuturisticCard
                key={service.id}
                theme={service.theme}
                className="h-full p-8 group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-400 mb-4 text-sm">{service.tagline}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-center">
                        <Check className="w-3 h-3 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-gray-400">{service.period}</span>
                  </div>
                  <Button
                    href={service.link}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </EnhancedFuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto">
          <EnhancedFuturisticCard theme="neural" className="p-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 items-center">
                {/* Category Filter */}
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="appearance-none bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent pr-10"
                  >
                    {serviceCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>

                {/* Price Range Filter */}
                <div className="relative">
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="appearance-none bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent pr-10"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>

                {/* Sort Options */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent pr-10"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>

                {/* View Mode Toggle */}
                <div className="flex bg-gray-800/50 rounded-lg p-1 border border-gray-700/50">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-400 hover:text-white'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-400 hover:text-white'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </EnhancedFuturisticCard>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              All Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our complete portfolio of {filteredServices.length} revolutionary micro SaaS services
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <EnhancedFuturisticCard
                  key={service.id}
                  theme={getServiceTheme(service.category)}
                  className="h-full p-6 group hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{service.name}</h3>
                  <p className="text-gray-400 mb-4 text-sm line-clamp-2">{service.tagline}</p>
                  
                  <div className="mb-4">
                    <span className="inline-block px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {service.category}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-gray-400">{service.period}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      {service.trialDays} day trial
                    </div>
                    <Button
                      href={service.link}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </Button>
                  </div>
                </EnhancedFuturisticCard>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredServices.map((service, index) => (
                <EnhancedFuturisticCard
                  key={service.id}
                  theme={getServiceTheme(service.category)}
                  className="p-6 group hover:scale-102 transition-transform duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{service.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                        <p className="text-gray-400 text-sm">{service.tagline}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="inline-block px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                            {service.category}
                          </span>
                          {service.popular && (
                            <span className="inline-block px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">
                        {service.price}{service.period}
                      </div>
                      <div className="text-sm text-gray-400 mb-2">
                        {service.trialDays} day trial
                      </div>
                      <Button
                        href={service.link}
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="ml-1 w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </EnhancedFuturisticCard>
              ))}
            </div>
          )}

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-400 mb-8">Try adjusting your search criteria or filters</p>
              <Button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setPriceRange('All');
                }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <EnhancedFuturisticCard theme="cyberpunk" className="p-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our revolutionary micro SaaS services. 
              Start your 14-day free trial today and experience the future of business technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                href="/contact"
                variant="outline"
                className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                Contact Sales
              </Button>
            </div>
          </EnhancedFuturisticCard>
        </div>
      </section>
    </EnhancedFuturisticBackground>
  );
}

// Helper function to get theme based on service category
function getServiceTheme(category: string): 'quantum' | 'cyberpunk' | 'neural' | 'holographic' {
  const categoryThemes: { [key: string]: 'quantum' | 'cyberpunk' | 'neural' | 'holographic' } = {
    'AI & Machine Learning': 'neural',
    'Quantum Computing': 'quantum',
    'Financial Technology': 'quantum',
    'Healthcare & Life Sciences': 'neural',
    'Cybersecurity': 'cyberpunk',
    'Supply Chain & Logistics': 'quantum',
    'Energy & Utilities': 'quantum',
    'Manufacturing & Industry 4.0': 'cyberpunk',
    'Legal Technology': 'neural',
    'Education Technology': 'neural',
    'Space Technology': 'quantum',
    'Environmental Technology': 'quantum',
    'Blockchain & Web3': 'cyberpunk',
    'IoT & Smart Cities': 'holographic',
    'Biomedical Research': 'neural',
    'Autonomous Vehicles': 'cyberpunk',
    'Robotics & Automation': 'cyberpunk',
    'Data Analytics': 'holographic',
    'Cloud Infrastructure': 'holographic',
    'Mobile Applications': 'holographic'
  };
  
  return categoryThemes[category] || 'quantum';
}