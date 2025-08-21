import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, CheckCircle, XCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import AdvancedFuturisticBackground from '../components/ui/AdvancedFuturisticBackground';
import AdvancedFuturisticCard from '../components/ui/AdvancedFuturisticCard';
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
      tagline: 'Revolutionary financial modeling using quantum algorithms',
      price: '$799',
      period: '/month',
      description: 'Advanced quantum computing platform for financial modeling, risk assessment, and portfolio optimization with unprecedented accuracy and speed.',
      icon: '💰',
      category: 'Financial Technology',
      variant: 'quantum-advanced' as const,
      link: 'https://ziontechgroup.com/quantum-financial-modeling',
      features: ['Quantum Monte Carlo simulations', 'Real-time risk assessment', 'Portfolio optimization algorithms', 'Market prediction models']
    },
    {
      id: 'ai-legal-contract-analyzer',
      name: 'AI Legal Contract Analyzer',
      tagline: 'Intelligent contract analysis and risk assessment',
      price: '$399',
      period: '/month',
      description: 'Advanced AI-powered legal contract analysis platform that identifies risks, clauses, and compliance issues with unprecedented accuracy.',
      icon: '⚖️',
      category: 'Legal Technology',
      variant: 'neural-quantum' as const,
      link: 'https://ziontechgroup.com/ai-legal-contract-analyzer',
      features: ['AI-powered contract analysis', 'Risk identification and scoring', 'Compliance checking', 'Clause extraction and categorization']
    },
    {
      id: 'quantum-supply-chain-optimizer',
      name: 'Quantum Supply Chain Optimizer',
      tagline: 'Next-generation supply chain optimization using quantum computing',
      price: '$599',
      period: '/month',
      description: 'Revolutionary supply chain optimization platform that uses quantum algorithms to solve complex logistics problems in real-time.',
      icon: '🚚',
      category: 'Supply Chain & Logistics',
      variant: 'quantum-cyberpunk' as const,
      link: 'https://ziontechgroup.com/quantum-supply-chain-optimizer',
      features: ['Quantum route optimization', 'Real-time demand forecasting', 'Inventory optimization', 'Supplier risk assessment']
    },
    {
      id: 'ai-healthcare-diagnostic',
      name: 'AI Healthcare Diagnostic Platform',
      tagline: 'Advanced medical imaging and diagnostic AI',
      price: '$899',
      period: '/month',
      description: 'Cutting-edge AI-powered healthcare diagnostic platform that provides accurate medical imaging analysis and disease detection.',
      icon: '🏥',
      category: 'Healthcare & Life Sciences',
      variant: 'ai-futuristic' as const,
      link: 'https://ziontechgroup.com/ai-healthcare-diagnostic',
      features: ['AI-powered medical imaging analysis', 'Disease detection and classification', 'Radiology report generation', 'Patient risk assessment']
    }
  ];

  return (
    <AdvancedFuturisticBackground variant="neural-network" intensity="medium">
      <div className="min-h-screen">
        <Head>
          <title>500+ Real Micro SaaS Services | Zion Tech Group - AI, Quantum Computing, Cloud Solutions</title>
          <meta name="description" content="Explore 500+ real micro SaaS services from Zion Tech Group. AI-powered solutions, quantum computing, cloud infrastructure, cybersecurity, and emerging technologies. Start your free trial today." />
          <meta name="keywords" content="micro SaaS services, AI solutions, quantum computing, cloud services, cybersecurity, data analytics, IoT platform, blockchain analytics, AR/VR development" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="500+ Real Micro SaaS Services | Zion Tech Group" />
          <meta property="og:description" content="Comprehensive micro SaaS platform with AI, quantum computing, cloud, security, and emerging technology solutions." />
          <meta property="og:url" content="https://ziontechgroup.com/services" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/services" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 futuristic-glow">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  500+ Real Micro SaaS Services
                </span>
                <br />
                <span className="text-white">Ready to Deploy</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                Access enterprise-grade micro SaaS solutions across AI, quantum computing, cloud, cybersecurity, data analytics, IoT, blockchain, and emerging technologies. 
                Each service is built for immediate business impact with measurable ROI.
              </p>
              
              {/* Service Count Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {expandedMicroSaasServices.length}+
                  </div>
                  <div className="text-sm text-gray-400">Total Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-fuchsia-400 mb-2">
                    {serviceCategories.length - 1}
                  </div>
                  <div className="text-sm text-gray-400">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                    14 Days
                  </div>
                  <div className="text-sm text-gray-400">Free Trial</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                    99.9%
                  </div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                >
                  Get Started Today
                  <Rocket className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  href="/pricing"
                  variant="secondary"
                  size="lg"
                  className="text-lg px-8 py-4 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
                >
                  View Pricing
                  <DollarSign className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Innovative Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most cutting-edge solutions that are transforming industries worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredInnovativeServices.map((service, index) => (
                <AdvancedFuturisticCard
                  key={service.id}
                  variant={service.variant.includes('quantum') ? 'quantum' : service.variant.includes('neural') ? 'neural' : 'holographic'}
                  className="h-full"
                  glowIntensity="high"
                  interactive={true}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-sm text-gray-400 mb-3">{service.tagline}</p>
                    <div className="text-cyan-400 font-semibold mb-4">{service.price}{service.period}</div>
                    <div className="text-xs text-gray-500 mb-4">{service.category}</div>
                    <Button
                      href={service.link}
                      variant="secondary"
                      size="sm"
                      className="w-full"
                    >
                      Learn More
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </AdvancedFuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services by name, description, or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">Filters:</span>
                </div>
                
                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {serviceCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                {/* Price Range Filter */}
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value}>{range.label}</option>
                  ))}
                </select>

                {/* Sort Options */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>

                {/* View Mode Toggle */}
                <div className="flex bg-gray-800/50 border border-gray-700/50 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-4 py-2 ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-4 py-2 ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Results Count */}
              <div className="text-gray-400 mb-8">
                Showing {filteredServices.length} of {expandedMicroSaasServices.length} services
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredServices.map((service) => (
                  <AdvancedFuturisticCard
                    key={service.id}
                    variant={service.variant?.includes('quantum') ? 'quantum' : service.variant?.includes('neural') ? 'neural' : 'holographic'}
                    className="h-full"
                    glowIntensity="medium"
                    interactive={true}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{service.name}</h3>
                      <p className="text-sm text-gray-400 mb-3 line-clamp-2">{service.tagline}</p>
                      <div className="text-cyan-400 font-semibold mb-4">{service.price}{service.period}</div>
                      <div className="text-xs text-gray-500 mb-4">{service.category}</div>
                      <div className="flex flex-wrap gap-2 mb-4 justify-center">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <span key={index} className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Button
                        href={service.link}
                        variant="secondary"
                        size="sm"
                        className="w-full"
                      >
                        Learn More
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </AdvancedFuturisticCard>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredServices.map((service) => (
                  <AdvancedFuturisticCard
                    key={service.id}
                    variant={service.variant?.includes('quantum') ? 'quantum' : service.variant?.includes('neural') ? 'neural' : 'holographic'}
                    className="p-6"
                    glowIntensity="low"
                    interactive={true}
                  >
                    <div className="flex items-center gap-6">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                        <p className="text-gray-300 mb-3">{service.tagline}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {service.features.slice(0, 4).map((feature, index) => (
                            <span key={index} className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>{service.category}</span>
                          <span>•</span>
                          <span>{service.setupTime} setup</span>
                          <span>•</span>
                          <span>{service.trialDays} day trial</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}{service.period}</div>
                        <Button
                          href={service.link}
                          variant="secondary"
                          size="sm"
                        >
                          Learn More
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </AdvancedFuturisticCard>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-black/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Contact our team to learn more about our services and start your free trial today.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-cyan-400 mb-4" />
                  <div className="text-white font-semibold">Mobile</div>
                  <div className="text-cyan-400">{contactInfo.mobile}</div>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-purple-400 mb-4" />
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-purple-400">{contactInfo.email}</div>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-green-400 mb-4" />
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-green-400 text-sm">{contactInfo.address}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                >
                  Contact Us
                  <MessageSquare className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  href="/pricing"
                  variant="secondary"
                  size="lg"
                  className="text-lg px-8 py-4 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
                >
                  View Pricing
                  <DollarSign className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AdvancedFuturisticBackground>
  );
}