import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Search, 
  Filter, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Cloud, 
  Brain,
  Building,
  Globe,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Heart,
  GitCompare,
  Grid3X3,
  List,
  FilterX,
  Bookmark,
  Eye,
  Clock,
  DollarSign
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES, SERVICE_CATEGORIES as INNOVATIVE_CATEGORIES } from '../data/innovativeMicroSaasServices';
import { SPECIALIZED_IT_SERVICES, SPECIALIZED_SERVICE_CATEGORIES } from '../data/specializedITServices';

export default function InnovativeServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricingTier, setSelectedPricingTier] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [compareList, setCompareList] = useState<string[]>([]);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);

  // Load favorites from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('zion-favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('zion-favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Combine all services
  const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES, ...SPECIALIZED_IT_SERVICES];
  const allCategories = [...INNOVATIVE_CATEGORIES, ...SPECIALIZED_SERVICE_CATEGORIES];

  // Get unique technologies and industries
  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    allServices.forEach(service => {
      if (service.technologies) {
        service.technologies.forEach(tech => techs.add(tech));
      }
    });
    return Array.from(techs).sort();
  }, [allServices]);

  const allIndustries = useMemo(() => {
    const industries = new Set<string>();
    allServices.forEach(service => {
      if (service.industryFocus) {
        service.industryFocus.forEach(industry => industries.add(industry));
      }
    });
    return Array.from(industries).sort();
  }, [allServices]);

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesPricing = selectedPricingTier === 'all' || service.pricingTier === selectedPricingTier;
      
      // Advanced filters
      const matchesPriceRange = (service.price.monthly || service.price.oneTime || 0) >= priceRange.min &&
                               (service.price.monthly || service.price.oneTime || 0) <= priceRange.max;
      
      const matchesTechnologies = selectedTechnologies.length === 0 || 
        (service.technologies && selectedTechnologies.some(tech => service.technologies.includes(tech)));
      
      const matchesIndustries = selectedIndustries.length === 0 ||
        (service.industryFocus && selectedIndustries.some(industry => service.industryFocus.includes(industry)));
      
      return matchesSearch && matchesCategory && matchesPricing && matchesPriceRange && matchesTechnologies && matchesIndustries;
    });

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          return (a.price.monthly || a.price.oneTime || 0) - (b.price.monthly || b.price.oneTime || 0);
        case 'name':
          return a.title.localeCompare(b.title);
        case 'reviews':
          return b.reviewCount - a.reviewCount;
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedPricingTier, sortBy, priceRange, selectedTechnologies, selectedIndustries, allServices]);

  const getServiceIcon = (category: string) => {
    const categoryData = allCategories.find(cat => cat.name === category);
    return categoryData?.icon || '🚀';
  };

  const formatPrice = (service: any) => {
    if (service.price.oneTime && service.price.oneTime > 0) {
      return `$${service.price.oneTime.toLocaleString()}`;
    }
    if (service.price.monthly && service.price.monthly > 0) {
      return `$${service.price.monthly}/month`;
    }
    if (service.price.yearly && service.price.yearly > 0) {
      return `$${service.price.yearly}/year`;
    }
    return 'Contact Us';
  };

  const toggleFavorite = (serviceId: string) => {
    setFavorites(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const toggleCompare = (serviceId: string) => {
    setCompareList(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedPricingTier('all');
    setPriceRange({ min: 0, max: 10000 });
    setSelectedTechnologies([]);
    setSelectedIndustries([]);
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (selectedCategory !== 'all') count++;
    if (selectedPricingTier !== 'all') count++;
    if (priceRange.min > 0 || priceRange.max < 10000) count++;
    if (selectedTechnologies.length > 0) count++;
    if (selectedIndustries.length > 0) count++;
    return count;
  };

  return (
    <>
      <Helmet>
        <title>Innovative Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive portfolio of innovative micro SAAS services, AI solutions, IT infrastructure, and specialized industry solutions designed to transform your business." />
        <meta name="keywords" content="micro SAAS, AI services, IT solutions, digital transformation, enterprise services, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Innovative <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Services</span> Showcase
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed mb-8">
              Discover our comprehensive portfolio of cutting-edge micro SAAS services, AI solutions, 
              and specialized IT services designed to accelerate your digital transformation journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-zion-cyan" />
                <span>{allServices.length}+ Services</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-zion-cyan" />
                <span>4.8+ Average Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-zion-cyan" />
                <span>Global Delivery</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30">
              {/* Basic Filters */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-zion-blue-light/30 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50"
                  />
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-zion-blue-light/30 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan/50"
                >
                  <option value="all">All Categories</option>
                  {allCategories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>

                {/* Pricing Tier Filter */}
                <select
                  value={selectedPricingTier}
                  onChange={(e) => setSelectedPricingTier(e.target.value)}
                  className="px-4 py-3 bg-zion-blue-light/30 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan/50"
                >
                  <option value="all">All Pricing Tiers</option>
                  <option value="Starter">Starter</option>
                  <option value="Professional">Professional</option>
                  <option value="Enterprise">Enterprise</option>
                  <option value="Custom">Custom</option>
                </select>

                {/* Sort By */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-zion-blue-light/30 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan/50"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="price">Sort by Price</option>
                  <option value="name">Sort by Name</option>
                  <option value="reviews">Sort by Reviews</option>
                  <option value="newest">Sort by Newest</option>
                </select>
              </div>

              {/* Advanced Filters Toggle */}
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                  className="flex items-center gap-2 text-zion-cyan hover:text-zion-cyan/80 transition-colors"
                >
                  <Filter className="w-4 h-4" />
                  Advanced Filters
                  {getActiveFiltersCount() > 0 && (
                    <span className="bg-zion-cyan text-black text-xs px-2 py-1 rounded-full">
                      {getActiveFiltersCount()}
                    </span>
                  )}
                </button>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-zion-cyan text-black' : 'text-zion-slate-light hover:text-white'}`}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-zion-cyan text-black' : 'text-zion-slate-light hover:text-white'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Advanced Filters */}
              {showAdvancedFilters && (
                <div className="border-t border-zion-purple/30 pt-4 space-y-4">
                  {/* Price Range */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Price Range</label>
                    <div className="flex items-center gap-4">
                      <input
                        type="number"
                        placeholder="Min"
                        value={priceRange.min}
                        onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                        className="flex-1 px-3 py-2 bg-zion-blue-light/30 border border-zion-purple/30 rounded text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50"
                      />
                      <span className="text-zion-slate-light">to</span>
                      <input
                        type="number"
                        placeholder="Max"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                        className="flex-1 px-3 py-2 bg-zion-blue-light/30 border border-zion-purple/30 rounded text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50"
                      />
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Technologies</label>
                    <div className="flex flex-wrap gap-2">
                      {allTechnologies.map(tech => (
                        <button
                          key={tech}
                          onClick={() => setSelectedTechnologies(prev => 
                            prev.includes(tech) 
                              ? prev.filter(t => t !== tech)
                              : [...prev, tech]
                          )}
                          className={`px-3 py-1 rounded-full text-xs transition-colors ${
                            selectedTechnologies.includes(tech)
                              ? 'bg-zion-cyan text-black'
                              : 'bg-zion-blue-light/30 text-zion-slate-light hover:bg-zion-blue-light/50'
                          }`}
                        >
                          {tech}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Industries */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Industries</label>
                    <div className="flex flex-wrap gap-2">
                      {allIndustries.map(industry => (
                        <button
                          key={industry}
                          onClick={() => setSelectedIndustries(prev => 
                            prev.includes(industry) 
                              ? prev.filter(i => i !== industry)
                              : [...prev, industry]
                          )}
                          className={`px-3 py-1 rounded-full text-xs transition-colors ${
                            selectedIndustries.includes(industry)
                              ? 'bg-zion-cyan text-black'
                              : 'bg-zion-blue-light/30 text-zion-slate-light hover:bg-zion-blue-light/50'
                          }`}
                        >
                          {industry}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Clear Filters */}
                  <div className="flex justify-end">
                    <button
                      onClick={clearAllFilters}
                      className="flex items-center gap-2 text-zion-slate-light hover:text-white transition-colors"
                    >
                      <FilterX className="w-4 h-4" />
                      Clear All Filters
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Compare Bar */}
        {compareList.length > 0 && (
          <section className="py-4 px-4 bg-zion-blue-light/30 border-b border-zion-purple/30">
            <div className="container mx-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-white font-medium">Comparing {compareList.length} services:</span>
                  <div className="flex gap-2">
                    {compareList.map(serviceId => {
                      const service = allServices.find(s => s.id === serviceId);
                      return service ? (
                        <div key={serviceId} className="flex items-center gap-2 bg-zion-blue-light/20 px-3 py-1 rounded-full">
                          <span className="text-white text-sm">{service.title}</span>
                          <button
                            onClick={() => toggleCompare(serviceId)}
                            className="text-zion-slate-light hover:text-white"
                          >
                            ×
                          </button>
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
                <button
                  onClick={() => setCompareList([])}
                  className="text-zion-slate-light hover:text-white"
                >
                  Clear All
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Services Grid/List */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {filteredServices.length} Services Found
              </h2>
              <p className="text-zion-slate-light text-lg">
                Discover the perfect solution for your business needs
              </p>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <div key={service.id} className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{getServiceIcon(service.category)}</span>
                        <div>
                          <span className="inline-block px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full mb-1">
                            {service.pricingTier}
                          </span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-white text-sm">{service.rating}</span>
                            <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleFavorite(service.id)}
                          className={`p-2 rounded-full transition-colors ${
                            favorites.includes(service.id)
                              ? 'text-red-400 hover:text-red-300'
                              : 'text-zion-slate-light hover:text-white'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${favorites.includes(service.id) ? 'fill-current' : ''}`} />
                        </button>
                        <button
                          onClick={() => toggleCompare(service.id)}
                          className={`p-2 rounded-full transition-colors ${
                            compareList.includes(service.id)
                              ? 'text-zion-cyan'
                              : 'text-zion-slate-light hover:text-white'
                          }`}
                        >
                          <GitCompare className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="text-zion-cyan font-semibold text-lg mb-4">
                      {formatPrice(service)}
                    </div>

                    {/* Service Title and Description */}
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Category and Status */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-zion-cyan text-sm font-medium">
                        {service.category}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        service.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                        service.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {service.status}
                      </span>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-zion-slate-light text-xs">
                            <CheckCircle className="w-3 h-3 text-zion-cyan" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <span className="text-zion-slate-light text-xs">
                            +{service.features.length - 3} more features
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm">Key Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, index) => (
                          <div key={index} className="flex items-center gap-2 text-zion-slate-light text-xs">
                            <TrendingUp className="w-3 h-3 text-zion-cyan" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Delivery and Support */}
                    <div className="flex items-center justify-between mb-4 text-xs text-zion-slate-light">
                      <span>Delivery: {service.estimatedDelivery}</span>
                      <span>{service.supportLevel}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <a
                        href={service.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-zion-cyan hover:bg-zion-cyan/80 text-black font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        Learn More
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                        className="bg-zion-purple hover:bg-zion-purple/80 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        Contact
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Contact Information */}
                    <div className="mt-4 pt-4 border-t border-zion-purple/30">
                      <div className="flex items-center gap-2 text-zion-slate-light text-xs mb-2">
                        <MapPin className="w-3 h-3 text-zion-cyan" />
                        <span>{service.contactInfo.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zion-slate-light text-xs">
                        <Phone className="w-3 h-3 text-zion-cyan" />
                        <span>{service.contactInfo.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredServices.map((service) => (
                  <div key={service.id} className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <span className="text-4xl">{getServiceIcon(service.category)}</span>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-zion-slate-light text-sm mb-3">{service.description}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => toggleFavorite(service.id)}
                              className={`p-2 rounded-full transition-colors ${
                                favorites.includes(service.id)
                                  ? 'text-red-400 hover:text-red-300'
                                  : 'text-zion-slate-light hover:text-white'
                              }`}
                            >
                              <Heart className={`w-4 h-4 ${favorites.includes(service.id) ? 'fill-current' : ''}`} />
                            </button>
                            <button
                              onClick={() => toggleCompare(service.id)}
                              className={`p-2 rounded-full transition-colors ${
                                compareList.includes(service.id)
                                  ? 'text-zion-cyan'
                                  : 'text-zion-slate-light hover:text-white'
                              }`}
                            >
                              <GitCompare className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                            <DollarSign className="w-4 h-4 text-zion-cyan" />
                            <span className="text-white font-medium">{formatPrice(service)}</span>
                          </div>
                          <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span className="text-white">{service.rating} ({service.reviewCount} reviews)</span>
                          </div>
                          <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                            <Clock className="w-4 h-4 text-zion-cyan" />
                            <span className="text-white">{service.estimatedDelivery}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 mb-4">
                          <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                            {service.category}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            service.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                            service.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {service.status}
                          </span>
                          <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-sm rounded-full">
                            {service.pricingTier}
                          </span>
                        </div>

                        <div className="flex gap-2">
                          <a
                            href={service.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-zion-cyan hover:bg-zion-cyan/80 text-black font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                          >
                            Learn More
                            <ExternalLink className="w-4 h-4" />
                          </a>
                          <a
                            href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                            className="bg-zion-purple hover:bg-zion-purple/80 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                          >
                            Contact
                            <Mail className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-zion-slate-light text-xl mb-4">
                  No services found matching your criteria
                </div>
                <button
                  onClick={clearAllFilters}
                  className="bg-zion-cyan hover:bg-zion-cyan/80 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="bg-zion-blue-light/20 rounded-xl p-8 border border-zion-purple/30 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
                Our team of experts is ready to help you implement the perfect solution. 
                Get in touch today to discuss your needs and discover how we can accelerate your digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-zion-cyan hover:bg-zion-cyan/80 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Us: +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-zion-purple hover:bg-zion-purple/80 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
              <div className="mt-6 text-zion-slate-light">
                <p>364 E Main St STE 1008, Middletown DE 19709</p>
                <p>Available 24/7 for enterprise support</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}