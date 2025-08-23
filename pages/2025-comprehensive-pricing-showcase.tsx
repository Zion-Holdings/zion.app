import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter, Check, X,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, DollarSign, Leaf, Globe, BookOpen,
  TrendingUp, Zap, Lock, Eye, Users, Star, Cloud,
  Phone, Mail, MapPin, Calendar, Clock, Users as UsersIcon
} from 'lucide-react';

// Import our comprehensive service data
import { advancedFinancialTechServices2025 } from '../data/2025-advanced-financial-tech-services';
import { advancedHealthcareTechServices2025 } from '../data/2025-advanced-healthcare-tech-services';
import { advancedCybersecurityIoTServices2025 } from '../data/2025-advanced-cybersecurity-iot-services';
import { advancedSustainabilityTechServices2025 } from '../data/2025-advanced-sustainability-tech-services';
import { advancedEducationTechServices2025 } from '../data/2025-advanced-education-tech-services';
import { innovativeAIServices2025 } from '../data/2025-innovative-ai-services';
import { innovativeITServices2025 } from '../data/2025-innovative-it-services';
import { innovativeMicroSaasSolutions2025 } from '../data/2025-innovative-micro-saas-solutions';

interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  price: {
    monthly: number;
    yearly: number;
    currency: string;
    trialDays: number;
    setupTime: string;
  };
  features: string[];
  benefits?: string[];
  targetAudience?: string[];
  marketPosition: string;
  competitors: string[];
  techStack?: string[];
  realImplementation: boolean;
  implementationDetails: string;
  roi: string;
  useCases: string[];
  integrations: string[];
  support?: string;
  compliance?: string[];
  link: string;
  icon: string;
  color: string;
  popular: boolean;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

const ComprehensivePricingShowcase2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'popularity' | 'name'>('price');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);

  // Function to normalize services to unified interface
  const normalizeService = (service: any): Service => {
    if ('price' in service && typeof service.price === 'object' && 'monthly' in service.price) {
      // Already in correct format
      return service as Service;
    } else {
      // Convert from innovativeMicroSaasSolutions2025 format
      const priceStr = service.price.replace('$', '').replace('/month', '');
      const monthlyPrice = parseInt(priceStr);
      const yearlyPrice = Math.round(monthlyPrice * 12 * 0.9); // 10% discount for yearly
      
      return {
        id: service.id,
        name: service.name,
        tagline: service.tagline,
        description: service.description,
        category: service.category,
        price: {
          monthly: monthlyPrice,
          yearly: yearlyPrice,
          currency: 'USD',
          trialDays: service.trialDays,
          setupTime: service.setupTime
        },
        features: service.features,
        benefits: service.useCases, // Map useCases to benefits
        targetAudience: service.targetAudience ? [service.targetAudience] : [],
        marketPosition: service.marketPosition,
        competitors: service.competitors,
        techStack: service.technology,
        realImplementation: service.realImplementation,
        implementationDetails: service.implementationDetails,
        roi: service.roi,
        useCases: service.useCases,
        integrations: service.integrations,
        support: '24/7 support, dedicated specialist, implementation assistance, and comprehensive documentation.',
        compliance: ['SOC 2 Type II, GDPR, CCPA, Industry standards'],
        link: service.link,
        icon: service.icon,
        color: service.color,
        popular: service.popular,
        launchDate: service.launchDate,
        customers: service.customers,
        rating: service.rating,
        reviews: service.reviews
      };
    }
  };

  // Combine all services
  const allServices: Service[] = [
    ...advancedFinancialTechServices2025,
    ...advancedHealthcareTechServices2025,
    ...advancedCybersecurityIoTServices2025,
    ...advancedSustainabilityTechServices2025,
    ...advancedEducationTechServices2025,
    ...innovativeAIServices2025,
    ...innovativeITServices2025,
    ...innovativeMicroSaasSolutions2025.map(normalizeService)
  ];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => 
      (selectedCategory === 'All' || service.category === selectedCategory) &&
      (searchTerm === '' || 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
      service.price.monthly >= priceRange[0] && service.price.monthly <= priceRange[1]
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return a.price.monthly - b.price.monthly;
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
        default:
          return b.customers - a.customers;
      }
    });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Financial Technology':
        return <DollarSign className="w-5 h-5" />;
      case 'Healthcare AI':
      case 'Telemedicine & AI':
      case 'Health Analytics':
        return <Heart className="w-5 h-5" />;
      case 'Quantum Security':
      case 'IoT Security':
      case 'AI Security':
        return <Shield className="w-5 h-5" />;
      case 'Sustainability Analytics':
      case 'Energy Management':
      case 'Circular Economy':
        return <Leaf className="w-5 h-5" />;
      case 'AI Education':
      case 'VR Education':
      case 'Blockchain Education':
        return <BookOpen className="w-5 h-5" />;
      case 'AI & Consciousness':
      case 'AI & Automation':
        return <Brain className="w-5 h-5" />;
      case 'Cloud & Infrastructure':
      case 'IT Infrastructure':
        return <Cloud className="w-5 h-5" />;
      case 'Micro SAAS':
        return <Rocket className="w-5 h-5" />;
      default:
        return <Star className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Financial Technology':
        return 'from-green-500 to-emerald-600';
      case 'Healthcare AI':
      case 'Telemedicine & AI':
      case 'Health Analytics':
        return 'from-blue-500 to-teal-600';
      case 'Quantum Security':
      case 'IoT Security':
      case 'AI Security':
        return 'from-red-500 to-orange-600';
      case 'Sustainability Analytics':
      case 'Energy Management':
      case 'Circular Economy':
        return 'from-green-500 to-blue-600';
      case 'AI Education':
      case 'VR Education':
      case 'Blockchain Education':
        return 'from-purple-500 to-pink-600';
      case 'AI & Consciousness':
      case 'AI & Automation':
        return 'from-purple-500 to-indigo-600';
      case 'Cloud & Infrastructure':
      case 'IT Infrastructure':
        return 'from-blue-500 to-indigo-600';
      case 'Micro SAAS':
        return 'from-orange-500 to-red-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}K`;
    }
    return `$${price}`;
  };

  const getPriceTier = (price: number) => {
    if (price < 100) return 'Budget';
    if (price < 500) return 'Professional';
    if (price < 1000) return 'Enterprise';
    return 'Premium';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <SEO 
        title="2025 Comprehensive Pricing Showcase | Zion Tech Group"
        description="Compare pricing for our complete portfolio of innovative micro SAAS, IT services, and AI solutions. Find the perfect solution for your budget and business needs with transparent pricing and detailed feature comparisons."
        keywords={["pricing", "micro SAAS pricing", "IT services pricing", "AI solutions pricing", "cost comparison", "Zion Tech Group"]}
        image="https://ziontechgroup.com/og-image-2025-pricing-showcase.jpg"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 via-blue-600 to-purple-700 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              2025 Comprehensive Pricing Showcase
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transparent pricing for our complete portfolio of innovative services. 
              Compare features, benefits, and costs to find the perfect solution for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                {allServices.length}+ Services Available
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Transparent Pricing
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                No Hidden Fees
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-sm">
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
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Mode and Sort */}
            <div className="flex gap-4 items-center">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-500'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-500'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="price">Price: Low to High</option>
                <option value="rating">Highest Rated</option>
                <option value="popularity">Most Popular</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="mt-6 flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">Price Range:</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">${priceRange[0]}</span>
              <input
                type="range"
                min="0"
                max="2000"
                step="50"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-32"
              />
              <span className="text-sm text-gray-500">${priceRange[1]}</span>
            </div>
            <button
              onClick={() => setPriceRange([0, 2000])}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Reset
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
              <div className="text-2xl font-bold text-green-600 mb-2">Budget</div>
              <div className="text-sm text-green-600">Under $100/month</div>
              <div className="text-xs text-green-500 mt-1">
                {allServices.filter(s => s.price.monthly < 100).length} services
              </div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-2xl font-bold text-blue-600 mb-2">Professional</div>
              <div className="text-sm text-blue-600">$100 - $500/month</div>
              <div className="text-xs text-blue-500 mt-1">
                {allServices.filter(s => s.price.monthly >= 100 && s.price.monthly < 500).length} services
              </div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg border border-purple-200">
              <div className="text-2xl font-bold text-purple-600 mb-2">Enterprise</div>
              <div className="text-sm text-purple-600">$500 - $1000/month</div>
              <div className="text-xs text-purple-500 mt-1">
                {allServices.filter(s => s.price.monthly >= 500 && s.price.monthly < 1000).length} services
              </div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg border border-orange-200">
              <div className="text-2xl font-bold text-orange-600 mb-2">Premium</div>
              <div className="text-sm text-orange-600">$1000+/month</div>
              <div className="text-xs text-orange-500 mt-1">
                {allServices.filter(s => s.price.monthly >= 1000).length} services
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {selectedCategory === 'All' ? 'All Services' : selectedCategory}
            </h2>
            <p className="text-gray-600">
              {filteredServices.length} services available • 
              Price range: ${priceRange[0]} - ${priceRange[1]}/month
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-200"
                >
                  {/* Service Header */}
                  <div className={`bg-gradient-to-r ${getCategoryColor(service.category)} p-6 text-white relative`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl">{service.icon}</span>
                      <div className="flex gap-2">
                        {service.popular && (
                          <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                            POPULAR
                          </span>
                        )}
                        <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {getPriceTier(service.price.monthly)}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                    <p className="text-blue-100 text-sm">{service.tagline}</p>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                    
                    {/* Pricing */}
                    <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-900 mb-1">
                          {formatPrice(service.price.monthly)}
                          <span className="text-sm font-normal text-gray-500">/month</span>
                        </div>
                        <div className="text-sm text-gray-500 mb-2">
                          {formatPrice(service.price.yearly)} annually
                        </div>
                        <div className="text-xs text-green-600 font-medium">
                          Save ${(service.price.monthly * 12 - service.price.yearly).toLocaleString()} annually
                        </div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ROI and Stats */}
                    <div className="mb-4 text-sm text-gray-500">
                      <div className="flex items-center justify-between mb-2">
                        <span>⭐ {service.rating}/5 ({service.reviews} reviews)</span>
                        <span>👥 {service.customers.toLocaleString()} customers</span>
                      </div>
                      <div className="text-green-600 font-medium">
                        Expected ROI: {service.roi.split(' ')[0]} ROI
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="space-y-3">
                      <a
                        href={service.link}
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center block"
                      >
                        View Details
                      </a>
                      <a
                        href="mailto:kleber@ziontechgroup.com?subject=Pricing inquiry for %20{service.name}"
                        className="w-full border border-blue-600 text-blue-600 py-2 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors text-center block"
                      >
                        Get Custom Quote
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-200"
                >
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Service Icon and Category */}
                      <div className="flex-shrink-0">
                        <div className={`w-20 h-20 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-lg flex items-center justify-center text-white text-3xl`}>
                          {service.icon}
                        </div>
                        <div className="mt-3 text-center space-y-2">
                          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full block">
                            {service.category}
                          </span>
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full block">
                            {getPriceTier(service.price.monthly)}
                          </span>
                        </div>
                      </div>

                      {/* Service Details */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                            <p className="text-gray-600 text-lg">{service.tagline}</p>
                          </div>
                          {service.popular && (
                            <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                              POPULAR
                            </span>
                          )}
                        </div>

                        <p className="text-gray-600 mb-4">{service.description}</p>

                        {/* Features and Benefits */}
                                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                           <div>
                             <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                             <ul className="space-y-1">
                               {service.features.slice(0, 4).map((feature, idx) => (
                                 <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                   <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                                   {feature}
                                 </li>
                               ))}
                             </ul>
                           </div>
                           <div>
                             <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                             <ul className="space-y-1">
                               {(service.benefits || service.useCases || []).slice(0, 3).map((benefit, idx) => (
                                 <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                   <ArrowRight className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                   {benefit}
                                 </li>
                               ))}
                             </ul>
                           </div>
                         </div>

                        {/* Pricing and Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold text-gray-900">
                              {formatPrice(service.price.monthly)}
                              <span className="text-sm font-normal text-gray-500">/month</span>
                            </div>
                            <div className="text-sm text-gray-500">
                              {formatPrice(service.price.yearly)} annually
                            </div>
                          </div>
                          <div className="text-center p-4 bg-blue-50 rounded-lg">
                            <div className="text-lg font-semibold text-blue-900 mb-1">Expected ROI</div>
                            <div className="text-blue-600 font-medium">
                              {service.roi.split(' ')[0]} ROI
                            </div>
                          </div>
                          <div className="text-center p-4 bg-green-50 rounded-lg">
                            <div className="text-lg font-semibold text-green-900 mb-1">Annual Savings</div>
                            <div className="text-green-600 font-medium">
                              ${(service.price.monthly * 12 - service.price.yearly).toLocaleString()}
                            </div>
                          </div>
                        </div>

                        {/* Additional Info */}
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 text-sm text-gray-500">
                          <div className="flex items-center gap-6">
                            <span>⭐ {service.rating}/5 ({service.reviews} reviews)</span>
                            <span>👥 {service.customers.toLocaleString()} customers</span>
                            <span>🚀 Launched {new Date(service.launchDate).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span>⏱️ Setup: {service.price.setupTime}</span>
                            <span>🆓 Trial: {service.price.trialDays} days</span>
                          </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-3">
                          <a
                            href={service.link}
                            className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                          >
                            View Details
                          </a>
                          <a
                            href="mailto:kleber@ziontechgroup.com?subject=Pricing inquiry for %20{service.name}"
                            className="border border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                          >
                            Get Custom Quote
                          </a>
                          <a
                            href="tel:+13024640950"
                            className="border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                          >
                            Call Sales
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Solution or Pricing?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our team can create custom pricing plans tailored to your specific needs. 
              Contact us today to discuss your requirements and get a personalized quote.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Custom Pricing</h3>
                <p className="text-blue-100">Tailored plans for your business needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
                <p className="text-blue-100">Expert advice on choosing the right solution</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
                <p className="text-blue-100">Get pricing within 24 hours</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="bg-blue-600 text-white py-4 px-8 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Custom pricing inquiry"
                className="bg-transparent border-2 border-white text-white py-4 px-8 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-colors flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get Custom Quote
              </a>
            </div>

            <div className="mt-8 text-blue-100">
              <p className="text-lg">
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
              <p className="text-lg">
                <strong>Website:</strong> <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingShowcase2025;