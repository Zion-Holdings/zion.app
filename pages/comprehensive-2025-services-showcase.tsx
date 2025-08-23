import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Database, Cloud, Lock, Star, TrendingUp,
  Globe, Zap, Users, BarChart3, Smartphone, Server
} from 'lucide-react';

// Import all our new service data
import { advancedAIServices } from '../data/advanced-ai-services-2025';
import { innovativeITInfrastructureServices } from '../data/innovative-it-infrastructure-2025';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-2025';
import { quantumSpaceTechServices } from '../data/quantum-space-tech-services-2025';

// Contact information
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Create unified services array
const allServices = [
  ...advancedAIServices,
  ...innovativeITInfrastructureServices,
  ...innovativeMicroSaasServices,
  ...quantumSpaceTechServices
];

const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of innovative services'
  },
  {
    id: 'AI & Data',
    name: 'AI & Data',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-600 to-indigo-700',
    description: 'Advanced AI and machine learning solutions'
  },
  {
    id: 'IT Infrastructure',
    name: 'IT Infrastructure',
    icon: <Server className="w-6 h-6" />,
    color: 'from-blue-600 to-cyan-700',
    description: 'Cutting-edge infrastructure and security'
  },
  {
    id: 'Business Automation',
    name: 'Business Automation',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-green-600 to-emerald-700',
    description: 'Streamline operations with intelligent automation'
  },
  {
    id: 'Quantum Computing & AI',
    name: 'Quantum Computing',
    icon: <Atom className="w-6 h-6" />,
    color: 'from-purple-600 to-pink-700',
    description: 'Next-generation quantum solutions'
  },
  {
    id: 'Space Technology',
    name: 'Space Technology',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-indigo-600 to-blue-700',
    description: 'Innovative space and satellite solutions'
  }
];

const ComprehensiveServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'AI & Data': return <Brain className="w-5 h-5" />;
      case 'IT Infrastructure': return <Server className="w-5 h-5" />;
      case 'Business Automation': return <Zap className="w-5 h-5" />;
      case 'Quantum Computing & AI': return <Atom className="w-5 h-5" />;
      case 'Space Technology': return <Rocket className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  // Combine all services
  const allServices: UnifiedService[] = [
    ...advancedAIAutomationServices2025.map(normalizeService),
    ...innovative2025ITInfrastructureServices.map(normalizeService),
    ...innovativeMicroSaasSolutions2025.map(normalizeService),
    ...cuttingEdgeAIServices2025.map(normalizeService),
    ...realMicroSaasServices.map(normalizeService),
    ...innovativeAIServices.map(normalizeService),
    ...enterpriseITServices.map(normalizeService)
  ];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name': {
          return a.name.localeCompare(b.name);
        }
        case 'price': {
          const priceA = a.price_monthly || (typeof a.price === 'string' ? parseFloat(a.price.replace(/[^0-9.]/g, '')) : 0);
          const priceB = b.price_monthly || (typeof b.price === 'string' ? parseFloat(b.price.replace(/[^0-9.]/g, '')) : 0);
          return priceA - priceB;
        }
        case 'rating': {
          return b.rating - a.rating;
        }
        case 'popularity': {
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        }
        default:
          return 0;
      }
    });

  const getServiceIcon = (service: UnifiedService) => {
    if (service.icon) return service.icon;
    switch (service.category) {
      case 'AI Automation':
        return '🤖';
      case 'IT Infrastructure':
        return '🏗️';
      case 'Micro SAAS':
        return '💻';
      case 'AI Services':
        return '🧠';
      default:
        return '⚡';
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEO 
        title="Comprehensive 2025 Services Showcase | Zion Tech Group"
        description="Discover our comprehensive portfolio of innovative AI, IT infrastructure, micro SAAS, and quantum technology services. Real solutions with proven ROI and market validation."
        keywords={["AI services", "IT infrastructure", "micro SAAS", "quantum computing", "space technology", "business automation", "Zion Tech Group"]}
        image="/og-image-services-showcase.jpg"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Comprehensive 2025 Services Showcase
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Discover our portfolio of innovative AI, IT infrastructure, micro SAAS, and cutting-edge quantum technology services. 
              Real solutions with proven ROI and market validation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-blue-200">
                <Check className="w-5 h-5 text-green-400" />
                <span>30+ Real Services</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-200">
                <Check className="w-5 h-5 text-green-400" />
                <span>Proven ROI</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-200">
                <Check className="w-5 h-5 text-green-400" />
                <span>Market Validated</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-lg">
              <div className="flex items-center space-x-2">
                <span>📱</span>
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <div className="mt-4">
              <a 
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center px-6 py-3 bg-white text-emerald-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-500'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-500'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredServices.length === 0 ? (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        ) : (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 ${
                  viewMode === 'list' ? 'p-6' : 'p-6'
                }`}
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`text-3xl ${service.popular ? 'animate-pulse' : ''}`}>
                      {service.icon}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        {getServiceIcon(service.category)}
                        <span className="text-sm text-gray-500">{service.category}</span>
                      </div>
                      {service.popular && (
                        <div className="flex items-center space-x-1 mt-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-xs text-yellow-600 font-medium">Popular</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                    <div className="text-sm text-gray-500">{service.period}</div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-3">{service.tagline}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-blue-600 font-medium">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Market Info */}
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-gray-500">Market Size:</span>
                      <div className="font-medium text-gray-900">{service.marketSize}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Growth Rate:</span>
                      <div className="font-medium text-gray-900">{service.growthRate}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">ROI:</span>
                      <div className="font-medium text-gray-900">{service.roi}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Setup Time:</span>
                      <div className="font-medium text-gray-900">{service.setupTime}</div>
                    </div>
                  </div>
                </div>

                {/* Service Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Users className="w-4 h-4" />
                    <span>{service.customers} customers</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{service.rating}</span>
                      <span>({service.reviews})</span>
                    </div>
                  </div>
                  <a
                    href={service.link}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Accelerate Your Digital Transformation?
          </h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
            Our comprehensive portfolio of innovative services is designed to help businesses of all sizes 
            leverage cutting-edge technology for competitive advantage. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${contactInfo.email}?subject=Services Consultation Request`}
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href={`tel:${contactInfo.mobile}`}
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-900 transition-colors text-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer Contact */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
              <p className="text-gray-400">
                Leading provider of innovative technology solutions for the modern enterprise.
              </p>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>📱 {contactInfo.mobile}</p>
                <p>✉️ {contactInfo.email}</p>
                <p>📍 {contactInfo.address}</p>
              </div>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="/services" className="block text-gray-400 hover:text-white transition-colors">
                  All Services
                </a>
                <a href="/about" className="block text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
                <a href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://ziontechgroup.com" className="text-gray-400 hover:text-white transition-colors">
                  🌐 Website
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ComprehensiveServicesShowcase;