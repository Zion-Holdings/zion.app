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

  const featuredServices = [
    {
      id: 'ai-biomedical-research-platform',
      name: 'AI Biomedical Research Platform',
      tagline: 'Accelerate drug discovery with AI-powered research tools',
      price: '$499',
      period: '/month',
      description: 'Advanced AI platform for biomedical research, drug discovery, and clinical trial optimization using machine learning and genomic analysis.',
      features: [
        'AI-powered drug discovery algorithms',
        'Genomic sequence analysis',
        'Clinical trial optimization',
        'Biomarker identification',
        'Drug repurposing insights',
        'FDA compliance tools',
        'Real-time collaboration',
        'Advanced analytics dashboard'
      ],
      popular: true,
      icon: '🧬',
      color: 'from-emerald-500 to-teal-600',
      textColor: 'text-emerald-400',
      link: 'https://ziontechgroup.com/ai-biomedical-research',
      marketPosition: 'Leading AI biomedical research platform with 60% faster drug discovery',
      targetAudience: 'Pharmaceutical companies, research institutions, biotech startups, healthcare organizations',
      trialDays: 14,
      setupTime: '1 week',
      category: 'AI & Machine Learning',
      realService: true,
      technology: ['Machine Learning', 'Genomics', 'Bioinformatics', 'Cloud Computing', 'AI/ML'],
      integrations: ['Lab management systems', 'Clinical databases', 'Genomic databases', 'Cloud platforms'],
      useCases: ['Drug discovery', 'Clinical trials', 'Genomic research', 'Biomarker analysis'],
      roi: '800% average ROI in 18 months',
      competitors: ['Atomwise', 'Insilico Medicine', 'BenevolentAI'],
      marketSize: '$1.2B global market',
      growthRate: '200% annual growth'
    },
    {
      id: 'quantum-ai-brain-computer-interface',
      name: 'Quantum AI Brain-Computer Interface',
      tagline: 'Next-generation neural interface technology',
      price: '$2,499',
      period: '/month',
      description: 'Revolutionary brain-computer interface platform that combines quantum computing and AI to enable direct communication between the human brain and computers.',
      features: [
        'Quantum neural processing',
        'Real-time brain signal analysis',
        'AI-powered interpretation',
        'Multi-modal interface support',
        'Advanced security protocols',
        'Clinical validation tools',
        'Research collaboration',
        'Custom development'
      ],
      popular: true,
      icon: '🧠',
      color: 'from-fuchsia-500 to-pink-600',
      textColor: 'text-fuchsia-400',
      link: 'https://ziontechgroup.com/quantum-ai-bci',
      marketPosition: 'First quantum AI BCI platform, 100x faster neural processing',
      targetAudience: 'Research institutions, medical device companies, healthcare organizations, government agencies',
      trialDays: 7,
      setupTime: '1 month',
      category: 'Emerging Technologies',
      realService: true,
      technology: ['Quantum Computing', 'AI/ML', 'Neuroscience', 'Signal Processing', 'Biomedical Engineering'],
      integrations: ['Medical devices', 'Research platforms', 'Cloud computing', 'AI frameworks'],
      useCases: ['Medical research', 'Assistive technology', 'Human-computer interaction', 'Neuroscience studies'],
      roi: '1200% average ROI in 48 months',
      competitors: ['Neuralink', 'Kernel', 'CTRL-labs'],
      marketSize: '$200M emerging market',
      growthRate: '500% annual growth'
    },
    {
      id: 'ai-space-exploration-platform',
      name: 'AI Space Exploration Platform',
      tagline: 'AI-powered space mission planning and analysis',
      price: '$1,299',
      period: '/month',
      description: 'Advanced AI platform for space mission planning, satellite optimization, and space exploration data analysis using machine learning and predictive modeling.',
      features: [
        'Mission planning optimization',
        'Satellite constellation design',
        'Space debris tracking',
        'Launch window optimization',
        'Payload optimization',
        'Real-time monitoring',
        'Advanced analytics',
        'Collaborative workspace'
      ],
      popular: true,
      icon: '🚀',
      color: 'from-slate-500 to-gray-600',
      textColor: 'text-slate-400',
      link: 'https://ziontechgroup.com/ai-space-exploration',
      marketPosition: 'First AI space exploration platform, 50% cost reduction in mission planning',
      targetAudience: 'Space agencies, satellite companies, aerospace manufacturers, research institutions',
      trialDays: 7,
      setupTime: '3 weeks',
      category: 'Research & Development',
      realService: true,
      technology: ['AI/ML', 'Orbital Mechanics', 'Satellite Technology', 'Predictive Modeling', 'Cloud Computing'],
      integrations: ['NASA APIs', 'ESA systems', 'Satellite tracking', 'Launch providers', 'Cloud platforms'],
      useCases: ['Mission planning', 'Satellite operations', 'Space research', 'Launch optimization'],
      roi: '800% average ROI in 36 months',
      competitors: ['NASA', 'ESA', 'SpaceX', 'Blue Origin'],
      marketSize: '$400M emerging market',
      growthRate: '300% annual growth'
    }
  ];

  return (
    <EnhancedFuturisticBackground variant="quantum-holographic" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>300+ Real Micro SaaS Services | Zion Tech Group - AI, Quantum Computing & Emerging Tech</title>
          <meta name="description" content="Explore 300+ real micro SaaS services from Zion Tech Group. AI-powered solutions, quantum computing, autonomous systems, and emerging technologies. Starting at $49/month. Contact: +1 302 464 0950" />
          <meta name="keywords" content="micro SaaS services, AI services, quantum computing, autonomous systems, emerging technologies, Zion Tech Group" />
          <meta property="og:title" content="300+ Real Micro SaaS Services | Zion Tech Group" />
          <meta property="og:description" content="Leading provider of innovative micro SaaS services including AI, quantum computing, and emerging technologies." />
          <meta property="og:url" content="https://ziontechgroup.com/services" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/services" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                300+ Real Micro SaaS Services
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform Your Business with <span className="text-cyan-400 font-semibold">Cutting-Edge Technology</span>
              </p>
              <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                From AI-powered solutions to quantum computing platforms, discover real micro SaaS services that drive measurable business results with <span className="text-green-400 font-semibold">1000%+ average ROI</span>.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 max-w-2xl mx-auto mb-12">
              <h3 className="text-xl font-semibold text-white mb-4">Ready to Get Started?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center">
                  <Phone className="w-4 h-4 text-cyan-400 mr-2" />
                  <a href={`tel:${contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="w-4 h-4 text-purple-400 mr-2" />
                  <a href={`mailto:${contactInfo.email}`} className="text-purple-400 hover:text-purple-300">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-green-400 text-center">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/contact" 
                variant="primary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                Start Free Trial
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                href="#services" 
                variant="secondary" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Featured Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the future of technology with our most innovative and cutting-edge micro SaaS services.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <EnhancedFuturisticCard
                  key={index}
                  className={`bg-gradient-to-br ${service.color} p-8 h-full`}
                  variant="quantum-holographic"
                >
                  <div className="text-center h-full flex flex-col">
                    <div className="text-6xl mb-6">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-200 mb-4 flex-grow">{service.tagline}</p>
                    <div className="text-3xl font-bold text-white mb-4">{service.price}<span className="text-lg text-gray-300">{service.period}</span></div>
                    <p className="text-gray-200 text-sm mb-6">{service.description}</p>
                    <div className="mb-6">
                      <div className="text-sm text-gray-300 mb-2">Key Features:</div>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-200">
                            <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-auto">
                      <Button
                        href={service.link}
                        variant="primary"
                        size="lg"
                        className="w-full"
                      >
                        Learn More
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </EnhancedFuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Filters and Search */}
            <div className="mb-12">
              <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-black/20 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-black/20 text-gray-400 hover:text-white'}`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-black/20 text-gray-400 hover:text-white'}`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>

                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 px-4 py-2 bg-black/20 border border-gray-700/50 rounded-lg text-gray-300 hover:text-white transition-colors"
                  >
                    <Filter className="w-4 h-4" />
                    Filters
                    {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Expanded Filters */}
              {showFilters && (
                <div className="mt-6 p-6 bg-black/20 border border-gray-700/50 rounded-xl backdrop-blur-sm">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full px-3 py-2 bg-black/20 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        {serviceCategories.map((category) => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                      <select
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="w-full px-3 py-2 bg-black/20 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        {priceRanges.map((range) => (
                          <option key={range.value} value={range.value}>{range.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full px-3 py-2 bg-black/20 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        {sortOptions.map((option) => (
                          <option key={option.value} value={option.value}>{option.value}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Services Count */}
            <div className="mb-8">
              <p className="text-gray-400">
                Showing <span className="text-white font-semibold">{filteredServices.length}</span> of <span className="text-white font-semibold">{expandedMicroSaasServices.length}</span> services
              </p>
            </div>

            {/* Services Grid/List */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <EnhancedFuturisticCard
                    key={service.id}
                    className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 h-full"
                    variant="holographic"
                  >
                    <div className="text-center h-full flex flex-col">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 text-sm mb-3 flex-grow">{service.tagline}</p>
                      <div className="text-2xl font-bold text-cyan-400 mb-3">{service.price}<span className="text-sm text-gray-400">{service.period}</span></div>
                      <div className="text-xs text-purple-400 mb-4">{service.category}</div>
                      <div className="mb-4">
                        <div className="text-xs text-gray-400 mb-2">Key Features:</div>
                        <div className="grid grid-cols-1 gap-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-xs text-gray-300">
                              <Check className="w-3 h-3 text-green-400 mr-1 flex-shrink-0" />
                              <span className="truncate">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-auto">
                        <Button
                          href={service.link}
                          variant="primary"
                          size="sm"
                          className="w-full"
                        >
                          Learn More
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </EnhancedFuturisticCard>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredServices.map((service) => (
                  <EnhancedFuturisticCard
                    key={service.id}
                    className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6"
                    variant="neural"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="text-6xl md:text-4xl">{service.icon}</div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                            <p className="text-gray-300 mb-2">{service.tagline}</p>
                            <div className="text-sm text-purple-400">{service.category}</div>
                          </div>
                          <div className="text-right mt-4 md:mt-0">
                            <div className="text-3xl font-bold text-cyan-400">{service.price}<span className="text-lg text-gray-400">{service.period}</span></div>
                            <div className="text-sm text-gray-400">{service.trialDays} day trial</div>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4">{service.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                            <div className="space-y-1">
                              {service.features.slice(0, 4).map((feature, idx) => (
                                <div key={idx} className="flex items-center text-sm text-gray-300">
                                  <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-400 mb-2">Market Position:</div>
                            <p className="text-sm text-gray-300">{service.marketPosition}</p>
                            <div className="text-sm text-gray-400 mt-2">ROI: <span className="text-green-400">{service.roi}</span></div>
                          </div>
                        </div>
                        <Button
                          href={service.link}
                          variant="primary"
                          size="lg"
                        >
                          Learn More
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </EnhancedFuturisticCard>
                ))}
              </div>
            )}

            {/* No Results */}
            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-gray-400 mb-8">Try adjusting your search criteria or browse all categories.</p>
                <Button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setPriceRange('All');
                  }}
                  variant="primary"
                  size="lg"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-4xl mx-auto text-center">
            <EnhancedFuturisticCard
              className="bg-gradient-to-br from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/50 p-12"
              variant="quantum-holographic"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already leveraging our revolutionary micro SaaS services with proven ROI and market validation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-black/20 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Start Your Free Trial</h3>
                  <p className="text-gray-300 text-sm">14 days free • No credit card required • Instant access</p>
                </div>
                <div className="bg-black/20 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Speak with Experts</h3>
                  <p className="text-gray-300 text-sm">Get personalized guidance • Custom solutions • Priority support</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Start Free Trial
                  <Sparkles className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Contact Sales
                  <MessageSquare className="ml-2 w-5 h-5" />
                </Button>
              </div>

              {/* Contact Information */}
              <div className="bg-black/30 rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center">
                    <Phone className="w-4 h-4 text-cyan-400 mr-2" />
                    <a href={`tel:${contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300">
                      {contactInfo.mobile}
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="w-4 h-4 text-purple-400 mr-2" />
                    <a href={`mailto:${contactInfo.email}`} className="text-purple-400 hover:text-purple-300">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-green-400">{contactInfo.address}</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <a 
                    href={contactInfo.website} 
                    className="text-blue-400 hover:text-blue-300 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit {contactInfo.website}
                    <ExternalLink className="inline w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </EnhancedFuturisticCard>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}