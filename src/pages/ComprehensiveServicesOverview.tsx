import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Shield, 
  Scale, 
  Leaf, 
  Heart, 
  Cpu, 
  TrendingUp, 
  Atom, 
  Truck, 
  Globe,
  Star,
  Zap,
  Users,
  Target,
  Award,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  Grid,
  List,
  DollarSign,
  Clock,
  TrendingUp as TrendingUpIcon
} from 'lucide-react';
import { INNOVATIVE_NEW_SERVICES } from '../data/innovativeNewServices';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';

export default function ComprehensiveServicesOverview() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  // Combine all services
  const allServices = [...INNOVATIVE_NEW_SERVICES, ...COMPREHENSIVE_SERVICES];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Price ranges
  const priceRanges = [
    'All',
    'Under $500',
    '$500 - $1,000',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    'Over $5,000'
  ];

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
      case 'AI & Creative Services':
      case 'AI & Legal Tech':
      case 'AI & Healthcare':
      case 'AI & FinTech':
      case 'AI & Supply Chain':
        return Brain;
      case 'Cybersecurity':
        return Shield;
      case 'Blockchain & Web3':
        return Scale;
      case 'Sustainability & Tech':
        return Leaf;
      case 'Internet of Things':
        return Heart;
      case 'Edge Computing':
        return Cpu;
      case 'Quantum Computing':
        return Atom;
      case 'Metaverse & VR':
        return Globe;
      default:
        return Star;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
      case 'AI & Creative Services':
      case 'AI & Legal Tech':
      case 'AI & Healthcare':
      case 'AI & FinTech':
      case 'AI & Supply Chain':
        return 'from-purple-500 to-pink-500';
      case 'Cybersecurity':
        return 'from-red-500 to-orange-500';
      case 'Blockchain & Web3':
        return 'from-blue-500 to-indigo-500';
      case 'Sustainability & Tech':
        return 'from-green-500 to-emerald-500';
      case 'Internet of Things':
        return 'from-pink-500 to-red-500';
      case 'Edge Computing':
        return 'from-cyan-500 to-blue-500';
      case 'Quantum Computing':
        return 'from-violet-500 to-purple-500';
      case 'Metaverse & VR':
        return 'from-indigo-500 to-purple-500';
      default:
        return 'from-gray-500 to-gray-700';
    }
  };

  const isInPriceRange = (price: number, range: string) => {
    switch (range) {
      case 'Under $500':
        return price < 500;
      case '$500 - $1,000':
        return price >= 500 && price < 1000;
      case '$1,000 - $2,500':
        return price >= 1000 && price < 2500;
      case '$2,500 - $5,000':
        return price >= 2500 && price < 5000;
      case 'Over $5,000':
        return price >= 5000;
      default:
        return true;
    }
  };

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesPrice = isInPriceRange(service.price, selectedPriceRange);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const totalServices = allServices.length;
  const filteredCount = filteredServices.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Comprehensive Services Overview - Zion Tech Group" 
        description="Explore our complete portfolio of micro SAAS services, IT solutions, and AI platforms. Find the perfect solution for your business needs with detailed pricing and features."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Complete Services Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-zion-blue-light mb-8 max-w-4xl mx-auto">
              Discover our comprehensive range of innovative solutions designed to transform your business and drive growth
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">{totalServices}+ Services</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">AI-Powered Solutions</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">Competitive Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-white/10 backdrop-blur-sm border-t border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-white mb-2">Need Help Choosing?</h3>
              <p className="text-zion-blue-light">Our experts are here to guide you</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-blue-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-blue-light focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-zion-blue-dark text-white">
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {priceRanges.map(range => (
                  <option key={range} value={range} className="bg-zion-blue-dark text-white">
                    {range}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-lg transition-colors duration-200 ${
                  viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-white/10 text-zion-blue-light hover:bg-white/20'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-lg transition-colors duration-200 ${
                  viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-white/10 text-zion-blue-light hover:bg-white/20'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between">
            <p className="text-zion-blue-light">
              Showing {filteredCount} of {totalServices} services
            </p>
            <div className="flex items-center gap-4 text-sm text-zion-blue-light">
              <span className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Competitive Pricing
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Fast Delivery
              </span>
              <span className="flex items-center gap-2">
                <TrendingUpIcon className="w-4 h-4" />
                Proven ROI
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {filteredServices.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
              <Search className="w-16 h-16 text-zion-blue-light mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-zion-blue-light mb-6">
                Try adjusting your search criteria or contact us for custom solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                    setSelectedPriceRange('All');
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Clear Filters
                </button>
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-2 gap-8' : 'space-y-6'}>
            {filteredServices.map((service) => {
              const IconComponent = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              
              return (
                <div 
                  key={service.id}
                  className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${
                    viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                  }`}
                >
                  {/* Service Header */}
                  <div className={`bg-gradient-to-r ${categoryColor} p-6 ${viewMode === 'list' ? 'md:w-1/3' : ''}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-white/20 p-3 rounded-xl">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{service.title}</h3>
                          <p className="text-white/80 text-sm">{service.category}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleService(service.id)}
                        className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors duration-200"
                      >
                        {expandedService === service.id ? (
                          <ChevronUp className="w-5 h-5 text-white" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-white" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className={`p-6 ${viewMode === 'list' ? 'md:w-2/3' : ''}`}>
                    <p className="text-zion-blue-light mb-4">{service.description}</p>
                    
                    {/* Pricing */}
                    <div className="bg-gradient-to-r from-zion-blue to-zion-purple p-4 rounded-xl mb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white/80 text-sm">Starting at</p>
                          <p className="text-2xl font-bold text-white">
                            ${service.price.toLocaleString()}
                            <span className="text-lg text-white/80">/{service.pricingModel}</span>
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-white/80 text-sm">Market Price</p>
                          <p className="text-white font-semibold">{service.marketPrice}</p>
                        </div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-zion-blue-light">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4 text-green-400" />
                        Key Benefits
                      </h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-zion-blue-light">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                                         {/* ROI and Delivery */}
                     <div className="grid grid-cols-2 gap-4 mb-4">
                       <div className="bg-white/5 p-3 rounded-lg">
                         <p className="text-white/80 text-xs">ROI</p>
                         <p className="text-white font-semibold text-sm">
                           {('roi' in service && typeof service.roi === 'string') ? service.roi : 'Varies by implementation'}
                         </p>
                       </div>
                       <div className="bg-white/5 p-3 rounded-lg">
                         <p className="text-white/80 text-xs">Delivery</p>
                         <p className="text-white font-semibold text-sm">{service.estimatedDelivery}</p>
                       </div>
                     </div>

                    {/* Expandable Details */}
                    {expandedService === service.id && (
                      <div className="border-t border-white/10 pt-4 space-y-4">
                                                 {/* Technology Stack */}
                         {'technology' in service && Array.isArray(service.technology) && (
                           <div>
                             <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                               <Cpu className="w-4 h-4 text-blue-400" />
                               Technology Stack
                             </h5>
                             <div className="flex flex-wrap gap-2">
                               {service.technology.map((tech, index) => (
                                 <span key={index} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                                   {tech}
                                 </span>
                               ))}
                             </div>
                           </div>
                         )}

                                                 {/* Integrations */}
                         {'integrations' in service && Array.isArray(service.integrations) && (
                           <div>
                             <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                               <Users className="w-4 h-4 text-green-400" />
                               Integrations
                             </h5>
                             <div className="flex flex-wrap gap-2">
                               {service.integrations.map((integration, index) => (
                                 <span key={index} className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">
                                   {integration}
                                 </span>
                               ))}
                             </div>
                           </div>
                         )}

                                                 {/* Compliance */}
                         {'compliance' in service && Array.isArray(service.compliance) && (
                           <div>
                             <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                               <Award className="w-4 h-4 text-yellow-400" />
                               Compliance
                             </h5>
                             <div className="flex flex-wrap gap-2">
                               {service.compliance.map((compliance, index) => (
                                 <span key={index} className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-xs">
                                   {compliance}
                                 </span>
                               ))}
                             </div>
                           </div>
                         )}

                                                 {/* Unique Value */}
                         {'uniqueValue' in service && typeof service.uniqueValue === 'string' && (
                           <div>
                             <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                               <Star className="w-4 h-4 text-purple-400" />
                               Unique Value
                             </h5>
                             <p className="text-zion-blue-light text-sm">{service.uniqueValue}</p>
                           </div>
                         )}

                        {/* Use Cases */}
                        <div>
                          <h5 className="text-white font-semibold mb-2">Use Cases</h5>
                          <div className="grid grid-cols-2 gap-2">
                            {service.useCases.map((useCase, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm text-zion-blue-light">
                                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                {useCase}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                      <a
                        href={`tel:+13024640950`}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        Call Now
                      </a>
                      <a
                        href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                        className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        Email Us
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Our team of experts is ready to help you implement these innovative solutions and drive growth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Call Us</h3>
              <p className="text-white/80 text-sm">Speak directly with our experts</p>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                +1 302 464 0950
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Email Us</h3>
              <p className="text-white/80 text-sm">Send us a detailed inquiry</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 font-semibold">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <MapPin className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Visit Us</h3>
              <p className="text-white/80 text-sm">Our headquarters location</p>
              <p className="text-green-400 font-semibold text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-zion-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Visit Our Website
            </a>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}