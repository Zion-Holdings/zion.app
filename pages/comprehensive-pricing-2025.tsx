import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Check, Star, Shield, Rocket, Database, 
  DollarSign, Heart, ArrowRight, Phone, Mail, MapPin, Globe
} from 'lucide-react';

// Import our new advanced services
import { advancedCybersecurityServices2025 } from '../data/2025-advanced-cybersecurity-services';
import { advancedDevOpsInfrastructure2025 } from '../data/2025-advanced-devops-infrastructure';
import { advancedDataAnalyticsBI2025 } from '../data/2025-advanced-data-analytics-bi';
import { advancedFintechBlockchain2025 } from '../data/2025-advanced-fintech-blockchain';
import { advancedHealthcareBiotech2025 } from '../data/2025-advanced-healthcare-biotech';

// Combine all services
const allAdvancedServices = [
  ...advancedCybersecurityServices2025,
  ...advancedDevOpsInfrastructure2025,
  ...advancedDataAnalyticsBI2025,
  ...advancedFintechBlockchain2025,
  ...advancedHealthcareBiotech2025
];

// Service categories with pricing tiers
const serviceCategories = [
  {
    name: 'Advanced Cybersecurity',
    description: 'Enterprise-grade security solutions for modern threats',
    icon: Shield,
    color: 'from-red-600 to-pink-600',
    services: advancedCybersecurityServices2025,
    avgPrice: '$3,200',
    marketSize: '$150B+',
    growthRate: '35%'
  },
  {
    name: 'DevOps & Infrastructure',
    description: 'Modern infrastructure and automation solutions',
    icon: Rocket,
    color: 'from-purple-600 to-pink-600',
    services: advancedDevOpsInfrastructure2025,
    avgPrice: '$2,500',
    marketSize: '$80B+',
    growthRate: '40%'
  },
  {
    name: 'Data Analytics & BI',
    description: 'AI-powered insights and business intelligence',
    icon: Database,
    color: 'from-blue-600 to-indigo-600',
    services: advancedDataAnalyticsBI2025,
    avgPrice: '$3,200',
    marketSize: '$120B+',
    growthRate: '30%'
  },
  {
    name: 'Fintech & Blockchain',
    description: 'Next-generation financial technology solutions',
    icon: DollarSign,
    color: 'from-green-600 to-emerald-600',
    services: advancedFintechBlockchain2025,
    avgPrice: '$2,800',
    marketSize: '$200B+',
    growthRate: '50%'
  },
  {
    name: 'Healthcare & Biotech',
    description: 'Revolutionary healthcare and biotechnology platforms',
    icon: Heart,
    color: 'from-teal-600 to-cyan-600',
    services: advancedHealthcareBiotech2025,
    avgPrice: '$4,000',
    marketSize: '$180B+',
    growthRate: '45%'
  }
];

export default function ComprehensivePricing2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'price' | 'name' | 'rating'>('price');

  const filteredServices = selectedCategory === 'all' 
    ? allAdvancedServices 
    : allAdvancedServices.filter(service => service.category === selectedCategory);

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'name':
        return a.name.localeCompare(b.name);
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <SEO 
        title="2025 Comprehensive Pricing | Advanced Services | Zion Tech Group"
        description="Explore our comprehensive pricing for advanced micro SAAS, IT, and AI services. Competitive pricing with enterprise-grade solutions across cybersecurity, DevOps, data analytics, fintech, and healthcare."
        keywords={["pricing", "advanced services", "micro SAAS", "IT services", "AI services", "cybersecurity", "DevOps", "data analytics", "fintech", "blockchain", "healthcare biotech"]}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                2025 Comprehensive Pricing
              </span>
              <br />
              <span className="text-white">Advanced Services Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transparent, competitive pricing for our cutting-edge micro SAAS, IT, and AI services. 
              Enterprise-grade solutions at accessible prices with proven ROI.
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold text-white mb-4">Get Custom Pricing & Consultation</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-blue-100">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="h-5 w-5 text-blue-300" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="h-5 w-5 text-blue-300" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Globe className="h-5 w-5 text-blue-300" />
                  <span>ziontechgroup.com</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Call for Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-lg text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300"
              >
                Request Proposal
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Market Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Market-Leading Solutions
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
            Our services compete with industry leaders while offering superior value, 
            advanced features, and comprehensive support.
          </p>

          {/* Market Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="text-4xl font-bold text-blue-400 mb-2">$730B+</div>
              <div className="text-blue-200">Total Addressable Market</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="text-4xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-blue-200">Average Annual Growth</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="text-4xl font-bold text-purple-400 mb-2">500%+</div>
              <div className="text-blue-200">Average Customer ROI</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Service Categories Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} mb-4`}>
                <category.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
              <p className="text-blue-100 mb-4">{category.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-blue-300">Services:</span>
                  <span className="text-white font-semibold">{category.services.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-300">Avg. Price:</span>
                  <span className="text-white font-semibold">{category.avgPrice}/month</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-300">Market Size:</span>
                  <span className="text-white font-semibold">{category.marketSize}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-300">Growth Rate:</span>
                  <span className="text-white font-semibold">{category.growthRate}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedCategory(category.name)}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                View Services
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Services Display */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Controls */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-white font-semibold">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="all" className="bg-gray-800 text-white">All Services</option>
                {serviceCategories.map(category => (
                  <option key={category.name} value={category.name} className="bg-gray-800 text-white">
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-white font-semibold">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'price' | 'name' | 'rating')}
                className="px-4 py-2 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="price" className="bg-gray-800 text-white">Price</option>
                <option value="name" className="bg-gray-800 text-white">Name</option>
                <option value="rating" className="bg-gray-800 text-white">Rating</option>
              </select>
            </div>

            <div className="text-blue-200">
              <span className="font-semibold">{filteredServices.length}</span> services available
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              {/* Service Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`text-4xl ${service.color} bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.icon}
                  </div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-blue-100 text-sm mb-4">{service.tagline}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-bold text-white">
                    {service.price}
                    <span className="text-sm text-blue-300 font-normal">{service.period}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">{service.rating}</span>
                    <span className="text-blue-300 text-sm">({service.reviews})</span>
                  </div>
                </div>

                <div className="text-sm text-blue-200 mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span>📊</span>
                    <span>{service.marketSize}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>📈</span>
                    <span>{service.growthRate}</span>
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6 bg-white/5">
                <p className="text-blue-100 text-sm mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-blue-200">
                        <Check className="h-3 w-3 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 text-sm">ROI:</h4>
                  <p className="text-xs text-blue-200">{service.roi}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xs text-blue-300">
                    <span className="block">Setup: {service.setupTime}</span>
                    <span className="block">Trial: {service.trialDays} days</span>
                  </div>
                  
                  <a
                    href={service.link}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
            <p className="text-blue-100">Try selecting a different category.</p>
          </motion.div>
        )}
      </div>

      {/* Pricing Comparison */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Competitive Pricing Analysis
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            See how our pricing compares to industry leaders while offering superior features and support.
          </p>
        </motion.div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Industry Leaders</h3>
              <div className="text-4xl font-bold text-red-400 mb-2">$50K+</div>
              <div className="text-blue-200 mb-4">Average Annual Cost</div>
              <ul className="text-left text-blue-200 space-y-2">
                <li>• High setup costs</li>
                <li>• Long implementation</li>
                <li>• Limited customization</li>
                <li>• Basic support</li>
              </ul>
            </div>
            
            <div className="text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  RECOMMENDED
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
              <div className="text-4xl font-bold text-green-400 mb-2">$3K</div>
              <div className="text-blue-200 mb-4">Average Monthly Cost</div>
              <ul className="text-left text-blue-200 space-y-2">
                <li>• Competitive pricing</li>
                <li>• Fast implementation</li>
                <li>• Full customization</li>
                <li>• Premium support</li>
                <li>• Proven ROI</li>
              </ul>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Budget Options</h3>
              <div className="text-4xl font-bold text-yellow-400 mb-2">$500</div>
              <div className="text-blue-200 mb-4">Average Monthly Cost</div>
              <ul className="text-left text-blue-200 space-y-2">
                <li>• Limited features</li>
                <li>• Basic functionality</li>
                <li>• No customization</li>
                <li>• Minimal support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for custom pricing, implementation timelines, and to discuss how our advanced services can transform your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-lg text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300"
            >
              Send Email
            </a>
          </div>
          
          <div className="text-blue-100">
            <p className="text-lg font-semibold mb-2">Visit our headquarters:</p>
            <p>364 E Main St STE 1008, Middletown DE 19709</p>
            <p className="mt-2">
              <a 
                href="https://ziontechgroup.com" 
                className="text-white hover:text-blue-200 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                ziontechgroup.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}