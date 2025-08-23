import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Phone, Mail, MapPin, Star, Users, TrendingUp
} from 'lucide-react';

// Import our new service data
import { advancedAIMLServices } from '../data/2025-advanced-ai-ml-services';
import { advancedCybersecurityServices } from '../data/2025-advanced-cybersecurity-services';
import { advancedCloudDevOpsServices } from '../data/2025-advanced-cloud-devops-services';
import { industrySpecificSolutions } from '../data/2025-industry-specific-solutions';
import { emergingTechnologyServices } from '../data/2025-emerging-technology-services';

// Contact information
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// All services combined
const allServices = [
  ...advancedAIMLServices,
  ...advancedCybersecurityServices,
  ...advancedCloudDevOpsServices,
  ...industrySpecificSolutions,
  ...emergingTechnologyServices
];

// Service categories
const serviceCategories = [
  'All Services',
  'AI & Machine Learning',
  'Cybersecurity',
  'Cloud & DevOps',
  'Industry Solutions',
  'Emerging Tech'
];

const ComprehensiveServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredServices, setFilteredServices] = useState(allServices);

  useEffect(() => {
    let filtered = allServices;

    // Filter by category
    if (selectedCategory !== 'All Services') {
      filtered = filtered.filter(service => 
        service.category.toLowerCase().includes(selectedCategory.toLowerCase().replace(' & ', ' ').replace(' ', '')) ||
        service.category.toLowerCase().includes(selectedCategory.toLowerCase().split(' ')[0])
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredServices(filtered);
  }, [searchTerm, selectedCategory]);

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & Machine Learning': <Brain className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'Cloud & DevOps': <Atom className="w-5 h-5" />,
      'Industry Solutions': <Building className="w-5 h-5" />,
      'Emerging Tech': <Rocket className="w-5 h-5" />
    };
    return iconMap[category] || <Target className="w-5 h-5" />;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Machine Learning': 'from-purple-500 to-indigo-600',
      'Cybersecurity': 'from-red-500 to-pink-600',
      'Cloud & DevOps': 'from-blue-500 to-cyan-600',
      'Industry Solutions': 'from-green-500 to-emerald-600',
      'Emerging Tech': 'from-orange-500 to-yellow-600'
    };
    return colorMap[category] || 'from-gray-500 to-slate-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <SEO 
        title="2025 Comprehensive Services Showcase | Zion Tech Group"
        description="Explore our complete portfolio of micro SAAS, IT services, and AI solutions. Discover innovative services designed to transform your business with cutting-edge technology."
        keywords={["micro SAAS", "AI services", "cybersecurity", "cloud infrastructure", "DevOps", "healthcare AI", "fintech", "manufacturing IoT", "quantum computing", "blockchain", "AR/VR", "robotics"]}
        ogImage="https://ziontechgroup.com/og-image.jpg"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            2025 Comprehensive Services Showcase
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto"
          >
            Discover our complete portfolio of innovative micro SAAS, IT services, and AI solutions designed to transform your business
          </motion.p>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{contactInfo.address}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto">
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
            <div className="flex flex-wrap gap-2">
              {serviceCategories.map((category) => (
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

            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600">
            Showing {filteredServices.length} of {allServices.length} services
          </p>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filters.</p>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${viewMode}-${selectedCategory}-${searchTerm}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={
                  viewMode === 'grid' 
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                    : 'space-y-6'
                }
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                  >
                    {/* Service Header */}
                    <div className={`p-6 bg-gradient-to-r ${service.color} text-white ${
                      viewMode === 'list' ? 'w-1/3' : ''
                    }`}>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl">{service.icon}</span>
                        {service.popular && (
                          <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                            POPULAR
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                      <p className="text-blue-100 text-sm">{service.tagline}</p>
                      
                      {/* Price */}
                      <div className="mt-4">
                        <span className="text-2xl font-bold">
                          {typeof service.price === 'string' 
                            ? service.price 
                            : `$${service.price.monthly.toLocaleString()}`
                          }
                        </span>
                        <span className="text-blue-100">
                          {typeof service.price === 'string' ? '' : '/month'}
                        </span>
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className={`p-6 ${viewMode === 'list' ? 'w-2/3' : ''}`}>
                      <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                      
                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Category Badge */}
                      <div className="mb-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                          {getCategoryIcon(service.category)}
                          <span className="ml-1">{service.category}</span>
                        </span>
                      </div>

                      {/* Service Info */}
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Setup:</span> {
                            'setupTime' in service 
                              ? (typeof service.setupTime === 'string' ? service.setupTime : service.setupTime)
                              : (service.price && typeof service.price === 'object' ? service.price.setupTime : 'N/A')
                          }
                        </div>
                        <div>
                          <span className="font-medium">Trial:</span> {
                            'trialDays' in service 
                              ? service.trialDays 
                              : (service.price && typeof service.price === 'object' ? service.price.trialDays : 'N/A')
                          } days
                        </div>
                      </div>

                      {/* ROI and Popularity */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm">
                          <span className="text-gray-500">Expected ROI:</span>
                          <span className="text-green-600 font-semibold ml-1">
                            {service.roi.split(' ')[0]} ROI
                          </span>
                        </div>
                        {service.popular && (
                          <div className="flex items-center gap-1 text-yellow-600">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-sm font-medium">Popular</span>
                          </div>
                        )}
                      </div>

                      {/* Customer Info */}
                      <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{service.customers.toLocaleString()} customers</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-current text-yellow-400" />
                          <span>{service.rating} ({service.reviews} reviews)</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col gap-3">
                        <a
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors text-center font-medium flex items-center justify-center"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                        <a
                          href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                          className="w-full border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors text-center font-medium flex items-center justify-center"
                        >
                          Get Quote
                          <Mail className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact our team to discuss your specific needs and discover how our services can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${contactInfo.email}?subject=Service Inquiry`}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </a>
            <a
              href={`tel:${contactInfo.mobile}`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call {contactInfo.mobile}
            </a>
          </div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">{contactInfo.mobile}</p>
            </div>
            <div>
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">{contactInfo.email}</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase;