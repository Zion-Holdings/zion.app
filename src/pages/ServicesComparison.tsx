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
  Check,
  X,
  Minus,
  Search,
  Filter,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { INNOVATIVE_NEW_SERVICES } from '../data/innovativeNewServices';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';

export default function ServicesComparison() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showComparison, setShowComparison] = useState(false);

  // Combine all services
  const allServices = [...INNOVATIVE_NEW_SERVICES, ...COMPREHENSIVE_SERVICES];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const toggleServiceSelection = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    } else if (selectedServices.length < 4) {
      setSelectedServices([...selectedServices, serviceId]);
    }
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

  const selectedServicesData = allServices.filter(service => selectedServices.includes(service.id));

  const comparisonFeatures = [
    'Price',
    'Pricing Model',
    'Estimated Delivery',
    'Support Level',
    'Market Price',
    'Category',
    'Subcategory'
  ];

  const getFeatureValue = (service: any, feature: string) => {
    switch (feature) {
      case 'Price':
        return `$${service.price.toLocaleString()}`;
      case 'Pricing Model':
        return service.pricingModel;
      case 'Estimated Delivery':
        return service.estimatedDelivery;
      case 'Support Level':
        return service.supportLevel;
      case 'Market Price':
        return service.marketPrice;
      case 'Category':
        return service.category;
      case 'Subcategory':
        return service.subcategory;
      default:
        return 'N/A';
    }
  };

  const getFeatureIcon = (service: any, feature: string) => {
    const value = getFeatureValue(service, feature);
    
    if (feature === 'Price') {
      const price = service.price;
      if (price < 500) return <Check className="w-4 h-4 text-green-400" />;
      if (price < 1000) return <Minus className="w-4 h-4 text-yellow-400" />;
      return <X className="w-4 h-4 text-red-400" />;
    }
    
    if (feature === 'Estimated Delivery') {
      if (value.includes('1-2') || value.includes('2-3')) return <Check className="w-4 h-4 text-green-400" />;
      if (value.includes('3-4') || value.includes('4-5')) return <Minus className="w-4 h-4 text-yellow-400" />;
      return <X className="w-4 h-4 text-red-400" />;
    }
    
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Services Comparison - Zion Tech Group" 
        description="Compare our micro SAAS services, IT solutions, and AI platforms side by side. Find the perfect solution for your business needs with detailed feature comparisons."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Services Comparison
            </h1>
            <p className="text-xl md:text-2xl text-zion-blue-light mb-8 max-w-4xl mx-auto">
              Compare our innovative solutions side by side to find the perfect fit for your business needs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">Side-by-Side Analysis</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">Feature Comparison</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">Pricing Analysis</span>
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
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Service Selection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search and Filters */}
            <div className="flex-1 space-y-4">
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

            {/* Selected Services Count */}
            <div className="lg:w-64">
              <div className="bg-gradient-to-r from-zion-blue to-zion-purple p-4 rounded-xl text-center">
                <p className="text-white/80 text-sm mb-2">Selected Services</p>
                <p className="text-2xl font-bold text-white mb-2">
                  {selectedServices.length}/4
                </p>
                <button
                  onClick={() => setShowComparison(true)}
                  disabled={selectedServices.length < 2}
                  className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    selectedServices.length >= 2
                      ? 'bg-white text-zion-blue hover:bg-gray-100 transform hover:scale-105'
                      : 'bg-white/20 text-white/50 cursor-not-allowed'
                  }`}
                >
                  Compare Services
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            const isSelected = selectedServices.includes(service.id);
            
            return (
              <div 
                key={service.id}
                className={`bg-white/5 backdrop-blur-sm border rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                  isSelected ? 'border-cyan-400 bg-cyan-500/10' : 'border-white/10'
                }`}
                onClick={() => toggleServiceSelection(service.id)}
              >
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${categoryColor} p-4`}>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white line-clamp-2">{service.title}</h3>
                      <p className="text-white/80 text-sm">{service.category}</p>
                    </div>
                    {isSelected && (
                      <div className="bg-cyan-400 text-white p-1 rounded-full">
                        <Check className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-4">
                  <p className="text-zion-blue-light text-sm mb-4 line-clamp-3">{service.description}</p>
                  
                  {/* Pricing */}
                  <div className="bg-gradient-to-r from-zion-blue to-zion-purple p-3 rounded-lg mb-4">
                    <div className="text-center">
                      <p className="text-white/80 text-xs mb-1">Starting at</p>
                      <p className="text-xl font-bold text-white">
                        ${service.price.toLocaleString()}
                        <span className="text-sm text-white/80">/{service.pricingModel}</span>
                      </p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Key Features</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs text-zion-blue-light">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Selection Status */}
                  <div className="text-center">
                    <button
                      className={`w-full py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-300 ${
                        isSelected
                          ? 'bg-red-500 hover:bg-red-600 text-white'
                          : 'bg-cyan-500 hover:bg-cyan-600 text-white'
                      }`}
                    >
                      {isSelected ? 'Remove from Comparison' : 'Add to Comparison'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Comparison Table */}
      {showComparison && selectedServicesData.length >= 2 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-zion-blue to-zion-purple p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Services Comparison</h2>
                <button
                  onClick={() => setShowComparison(false)}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-white font-semibold">Features</th>
                    {selectedServicesData.map((service) => (
                      <th key={service.id} className="text-center p-4 text-white font-semibold min-w-[250px]">
                        <div className="bg-gradient-to-r from-zion-blue to-zion-purple p-3 rounded-lg">
                          <h3 className="text-white font-bold text-sm mb-1">{service.title}</h3>
                          <p className="text-white/80 text-xs">{service.category}</p>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature) => (
                    <tr key={feature} className="border-b border-white/10">
                      <td className="p-4 text-white font-semibold">{feature}</td>
                      {selectedServicesData.map((service) => (
                        <td key={service.id} className="text-center p-4">
                          <div className="flex items-center justify-center gap-2">
                            {getFeatureIcon(service, feature)}
                            <span className="text-zion-blue-light text-sm">
                              {getFeatureValue(service, feature)}
                            </span>
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                  
                  {/* Features Comparison */}
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white font-semibold">Key Features</td>
                    {selectedServicesData.map((service) => (
                      <td key={service.id} className="p-4">
                        <div className="space-y-2">
                          {service.features.slice(0, 5).map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-zion-blue-light">
                              <Check className="w-3 h-3 text-green-400" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Benefits Comparison */}
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white font-semibold">Key Benefits</td>
                    {selectedServicesData.map((service) => (
                      <td key={service.id} className="p-4">
                        <div className="space-y-2">
                          {service.benefits.slice(0, 5).map((benefit, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-zion-blue-light">
                              <Target className="w-3 h-3 text-blue-400" />
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Use Cases Comparison */}
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white font-semibold">Use Cases</td>
                    {selectedServicesData.map((service) => (
                      <td key={service.id} className="p-4">
                        <div className="space-y-2">
                          {service.useCases.slice(0, 5).map((useCase, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-zion-blue-light">
                              <Users className="w-3 h-3 text-purple-400" />
                              {useCase}
                            </div>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CTA Section */}
            <div className="p-6 bg-gradient-to-r from-zion-blue to-zion-purple">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4">Ready to Choose Your Solution?</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-white text-zion-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call for Consultation
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Get Detailed Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Help Making a Decision?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Our team of experts is ready to help you choose the perfect solution for your business needs.
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