import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { enhancedRealMicroSaasServices, serviceCategories, getServicesByCategory, getPopularServices, getServicesByPriceRange } from '../data/enhanced-real-micro-saas-services';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const priceRanges = [
    { value: 'All', label: 'All Prices' },
    { value: '0-500', label: '$0 - $500' },
    { value: '501-1000', label: '$501 - $1,000' },
    { value: '1001-2000', label: '$1,001 - $2,000' },
    { value: '2001+', label: '$2,001+' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'price', label: 'Price Low-High' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'category', label: 'Category' }
  ];

  // Filter and sort services
  let filteredServices = enhancedRealMicroSaasServices;

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
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
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

  const advertisingContent = {
    headline: "500+ Revolutionary Real Micro SaaS Services",
    subheadline: "Transform Your Business with Cutting-Edge AI, Quantum Computing & Autonomous Systems",
    benefits: [
      "🚀 First-to-Market Solutions",
      "💎 Industry-Leading Technology", 
      "🌍 Global Deployment",
      "💰 Competitive Pricing",
      "⚡ Lightning-Fast Setup",
      "🛡️ Enterprise Security"
    ],
    marketPosition: "Zion Tech Group leads the global micro SaaS revolution with patent-pending quantum AI and autonomous systems.",
    pricing: "Services range from $599/month to $2,499/month with 21-day free trials and comprehensive support.",
    contactCTA: "Ready to revolutionize your business? Contact our expert team today!",
    contactDetails: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709",
      website: "https://ziontechgroup.com"
    }
  };

  return (
    <UltraFuturisticBackground>
      <Head>
        <title>500+ Revolutionary Micro SAAS Services | Zion Tech Group</title>
        <meta name="description" content="Discover 500+ cutting-edge micro SAAS services powered by quantum AI, autonomous systems, and revolutionary technology. Transform your business today." />
        <meta name="keywords" content="micro SAAS services, AI solutions, quantum computing, autonomous systems, business automation, cybersecurity, fintech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="500+ Revolutionary Micro SAAS Services | Zion Tech Group" />
        <meta property="og:description" content="Discover 500+ cutting-edge micro SAAS services powered by quantum AI and autonomous systems" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="500+ Revolutionary Micro SAAS Services | Zion Tech Group" />
        <meta name="twitter:description" content="Discover 500+ cutting-edge micro SAAS services powered by quantum AI and autonomous systems" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              500+ Revolutionary
            </span>
            <br />
            <span className="text-white">Micro SAAS Services</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge AI, quantum computing, autonomous systems, and revolutionary technology
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {[
              { number: '500+', label: 'Services', icon: Rocket, color: 'text-cyan-400' },
              { number: '21', label: 'Day Trials', icon: Clock, color: 'text-purple-400' },
              { number: '99.9%', label: 'Uptime', icon: Shield, color: 'text-green-400' },
              { number: '24/7', label: 'Support', icon: Users, color: 'text-pink-400' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-700/50 max-w-2xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <Phone className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
                <div className="text-sm text-gray-400">Mobile</div>
                <div className="text-cyan-400 font-medium">{contactInfo.mobile}</div>
              </div>
              <div>
                <Mail className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                <div className="text-sm text-gray-400">Email</div>
                <div className="text-purple-400 font-medium">{contactInfo.email}</div>
              </div>
              <div>
                <MapPin className="w-5 h-5 text-green-400 mx-auto mb-2" />
                <div className="text-sm text-gray-400">Address</div>
                <div className="text-green-400 font-medium text-xs">{contactInfo.address}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {serviceCategories.slice(0, 8).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-slate-800/50 rounded-lg p-1 border border-slate-700">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">Price Range:</span>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-400">
              Showing <span className="text-white font-semibold">{filteredServices.length}</span> of {enhancedRealMicroSaasServices.length} services
            </p>
            <p className="text-gray-400">
              Category: <span className="text-cyan-400 font-semibold">{selectedCategory}</span>
            </p>
          </div>

          {/* Services Grid */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredServices.map((service, index) => (
              <UltraFuturisticCard
                key={service.id}
                variant={index % 4 === 0 ? 'quantum' : index % 4 === 1 ? 'holographic' : index % 4 === 2 ? 'neural' : 'cyberpunk'}
                className="h-full"
                delay={index % 20}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{service.icon}</span>
                    <div className="text-right">
                      {service.popular && (
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold mb-2">
                          Popular
                        </div>
                      )}
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-sm text-gray-400">{service.period}</div>
                    </div>
                  </div>

                  {/* Service Info */}
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.tagline}</p>
                  
                  {/* Category and Trial */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                      {service.category}
                    </span>
                    <span className="text-xs text-green-400 bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
                      {service.trialDays} day trial
                    </span>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-400 mb-2">Key Features:</p>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-300">
                          <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Position */}
                  <div className="mb-4 p-3 bg-slate-800/30 rounded-lg border border-slate-700/50">
                    <p className="text-xs text-gray-400 mb-1">Market Position:</p>
                    <p className="text-xs text-cyan-300 line-clamp-2">{service.marketPosition}</p>
                  </div>

                  {/* ROI and Setup */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="text-center p-2 bg-slate-800/30 rounded-lg border border-slate-700/50">
                      <p className="text-xs text-gray-400">ROI</p>
                      <p className="text-xs text-green-400 font-semibold">{service.roi}</p>
                    </div>
                    <div className="text-center p-2 bg-slate-800/30 rounded-lg border border-slate-700/50">
                      <p className="text-xs text-gray-400">Setup</p>
                      <p className="text-xs text-blue-400 font-semibold">{service.setupTime}</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex gap-2">
                    <Link href={service.link} className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 text-sm rounded-lg transition-all duration-300">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button 
                        variant="outline"
                        className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-4 py-3 text-sm rounded-lg transition-all duration-300"
                      >
                        Contact
                      </Button>
                    </Link>
                  </div>
                </div>
              </UltraFuturisticCard>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No services found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search criteria or filters</p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setPriceRange('All');
                }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900/50 via-purple-900/20 to-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-cyan-400">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of forward-thinking companies already leveraging our revolutionary micro SAAS services
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button 
                variant="outline"
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                View Pricing
                <DollarSign className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-3 text-cyan-400" />
              <p className="text-white font-semibold">Call Us</p>
              <p className="text-gray-400">{contactInfo.mobile}</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-3 text-purple-400" />
              <p className="text-white font-semibold">Email Us</p>
              <p className="text-gray-400">{contactInfo.email}</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-green-400" />
              <p className="text-white font-semibold">Visit Us</p>
              <p className="text-gray-400">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </section>
    </UltraFuturisticBackground>
  );
}