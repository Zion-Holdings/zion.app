import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, Eye, Target as TargetIcon, Zap as ZapIcon2, Shield as ShieldIcon, Globe as GlobeIcon, Cpu as CpuIcon, Cloud as CloudIcon, Bot as BotIcon, Lock as LockIcon, BarChart3 as BarChart3Icon, TrendingUp as TrendingUpIcon, Users as UsersIcon, Award as AwardIcon, Star as StarIcon, Check as CheckIcon, ArrowRight as ArrowRightIcon, ExternalLink as ExternalLinkIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Trophy, FlaskConical as FlaskConicalIcon, Dna as DnaIcon, Car as CarIcon, Leaf as LeafIcon, Factory as FactoryIcon, Truck as TruckIcon, Microscope as MicroscopeIcon, GraduationCap as GraduationCapIcon, ShieldCheck as ShieldCheckIcon } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import QuantumHolographicBackground from '../components/ui/QuantumHolographicBackground';
import QuantumHolographicCard from '../components/ui/QuantumHolographicCard';
import { innovativeMicroSaasServices, getInnovativeServicesByCategory, getPopularInnovativeServices, getInnovativeServicesByPriceRange, getInnovativeServiceCategories } from '../data/innovative-micro-saas-services';

export default function InnovativeServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('innovation');
  const [showFilters, setShowFilters] = useState(false);

  const priceRanges = [
    { value: 'All', label: 'All Prices' },
    { value: '0-1000', label: '$0 - $1,000' },
    { value: '1001-2000', label: '$1,001 - $2,000' },
    { value: '2001-3000', label: '$2,001 - $3,000' },
    { value: '3001-5000', label: '$3,001 - $5,000' },
    { value: '5001+', label: '$5,001+' }
  ];

  const sortOptions = [
    { value: 'innovation', label: 'Innovation Level' },
    { value: 'price', label: 'Price Low-High' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'category', label: 'Category' },
    { value: 'roi', label: 'Highest ROI' }
  ];

  // Filter and sort services
  let filteredServices = innovativeMicroSaasServices;

  // Category filter
  if (selectedCategory !== 'All') {
    filteredServices = getInnovativeServicesByCategory(selectedCategory);
  }

  // Price range filter
  if (priceRange !== 'All') {
    const [min, max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
    filteredServices = getInnovativeServicesByPriceRange(min, max);
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
        return a.price.monthly - b.price.monthly;
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'roi': {
        const aRoi = parseInt(a.roi.match(/\d+/)?.[0] || '0');
        const bRoi = parseInt(b.roi.match(/\d+/)?.[0] || '0');
        return bRoi - aRoi;
      }
              default: {
          // Innovation level sorting
          const innovationOrder = { 'Breakthrough': 3, 'Advanced': 2, 'Standard': 1 };
          const aLevel = a.innovationLevel.split(' - ')[0];
          const bLevel = b.innovationLevel.split(' - ')[0];
          return (innovationOrder[aLevel as keyof typeof innovationOrder] || 0) - (innovationOrder[bLevel as keyof typeof innovationOrder] || 0);
        }
    }
  });

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const popularServices = getPopularInnovativeServices();
  const categories = getInnovativeServiceCategories();

  return (
    <>
      <Head>
        <title>Innovative Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Discover revolutionary quantum AI, blockchain, cybersecurity, and autonomous systems. Cutting-edge micro SAAS services with breakthrough innovation and unprecedented ROI." />
        <meta name="keywords" content="quantum AI, blockchain, cybersecurity, autonomous systems, micro SAAS, innovation, quantum computing, AI services" />
        <meta property="og:title" content="Innovative Micro SAAS Services - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary quantum AI, blockchain, and autonomous systems. Breakthrough micro SAAS services with unprecedented innovation." />
        <meta property="og:url" content="https://ziontechgroup.com/innovative-services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services" />
      </Head>

      <QuantumHolographicBackground>
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
                  Revolutionary Innovation
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Discover the future of technology with our breakthrough micro SAAS services. 
                  From quantum AI to autonomous systems, we're redefining what's possible.
                </p>
              </div>

              {/* Innovation Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">10</div>
                  <div className="text-gray-400">Breakthrough Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">$25B+</div>
                  <div className="text-gray-400">Market Value</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">2500%</div>
                  <div className="text-gray-400">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">99.99%</div>
                  <div className="text-gray-400">Accuracy Rate</div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 mb-12 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-5 h-5 text-pink-400" />
                    <span className="text-gray-300">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Filters and Search */}
          <section className="px-4 sm:px-6 lg:px-8 mb-12">
            <div className="max-w-7xl mx-auto">
              <div className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Search */}
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search innovative services..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="flex-shrink-0">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="All">All Categories</option>
                      {categories.map((category) => (
                        <option key={category.name} value={category.name}>
                          {category.name} ({category.count})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Price Range Filter */}
                  <div className="flex-shrink-0">
                    <select
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      {priceRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Sort Options */}
                  <div className="flex-shrink-0">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.value}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* View Mode Toggle */}
                  <div className="flex-shrink-0">
                    <div className="flex bg-white/10 rounded-xl p-1 border border-white/20">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`px-3 py-2 rounded-lg transition-all ${
                          viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <Grid className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`px-3 py-2 rounded-lg transition-all ${
                          viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <List className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid/List */}
          <section className="px-4 sm:px-6 lg:px-8 mb-20">
            <div className="max-w-7xl mx-auto">
              {filteredServices.length === 0 ? (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                  <p className="text-gray-400">Try adjusting your search criteria or filters</p>
                </div>
              ) : (
                <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
                  {filteredServices.map((service) => (
                    <QuantumHolographicCard key={service.id} className="group">
                      <div className="p-6">
                        {/* Service Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="text-3xl">{service.icon}</div>
                            <div>
                              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                {service.name}
                              </h3>
                              <p className="text-sm text-gray-400">{service.category}</p>
                            </div>
                          </div>
                          {service.popular && (
                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                              POPULAR
                            </div>
                          )}
                        </div>

                        {/* Tagline */}
                        <p className="text-gray-300 mb-4 font-medium">{service.tagline}</p>

                        {/* Description */}
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">{service.description}</p>

                        {/* Innovation Level */}
                        <div className="mb-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                            <span className="text-sm font-medium text-yellow-400">Innovation Level</span>
                          </div>
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-lg text-xs font-bold text-center">
                            {service.innovationLevel}
                          </div>
                        </div>

                        {/* Price and ROI */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400">${service.price.monthly.toLocaleString()}</div>
                            <div className="text-xs text-gray-400">per month</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-400">{service.roi.split(' ')[0]}</div>
                            <div className="text-xs text-gray-400">average ROI</div>
                          </div>
                        </div>

                        {/* Key Features */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
                          <div className="space-y-2">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                                <span className="text-xs text-gray-300">{feature}</span>
                              </div>
                            ))}
                            {service.features.length > 3 && (
                              <div className="text-xs text-cyan-400 text-center pt-2">
                                +{service.features.length - 3} more features
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Market Info */}
                        <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
                          <div>
                            <div className="text-gray-400">Market Size</div>
                            <div className="text-white font-medium">{service.marketSize}</div>
                          </div>
                          <div>
                            <div className="text-gray-400">Growth Rate</div>
                            <div className="text-white font-medium">{service.growthRate}</div>
                          </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex space-x-3">
                          <Button
                            href={service.link}
                            variant="primary"
                            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                          <Button
                            href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                            variant="secondary"
                            className="px-4"
                          >
                            <Mail className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Contact Info */}
                        <div className="mt-4 pt-4 border-t border-white/10 text-xs text-gray-400 text-center">
                          <div>Contact: {contactInfo.mobile} | {contactInfo.email}</div>
                          <div className="mt-1">{contactInfo.website}</div>
                        </div>
                      </div>
                    </QuantumHolographicCard>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Call to Action */}
          <section className="px-4 sm:px-6 lg:px-8 mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <EnhancedFuturisticCard className="p-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Lead the Future?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join the revolution with our breakthrough micro SAAS services. 
                  Transform your business with quantum AI, autonomous systems, and cutting-edge technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    href={`tel:${contactInfo.mobile}`}
                    variant="primary"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 text-lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: {contactInfo.mobile}
                  </Button>
                  <Button
                    href={`mailto:${contactInfo.email}`}
                    variant="secondary"
                    className="px-8 py-4 text-lg"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </Button>
                </div>
                <div className="mt-8 text-sm text-gray-400">
                  <div>Address: {contactInfo.address}</div>
                  <div className="mt-1">Website: {contactInfo.website}</div>
                </div>
              </EnhancedFuturisticCard>
            </div>
          </section>
        </div>
      </QuantumHolographicBackground>
    </>
  );
}