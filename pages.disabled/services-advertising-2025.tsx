import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List, Star, Check, ArrowRight,
  Brain, Atom, Shield, Globe,
  Cloud, Network
} from 'lucide-react';

// Import our new service data
import { innovative2025Q4NewServices } from '../data/innovative-2025-q4-new-services';
import { emergingTech2025Innovations } from '../data/emerging-tech-2025-innovations';

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Combine all services
const allServices = [
  ...innovative2025Q4NewServices,
  ...emergingTech2025Innovations
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
    id: 'ai-business',
    name: 'AI & Business',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-blue-500 to-purple-500',
    description: 'AI-powered business solutions and intelligence'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-red-500 to-orange-500',
    description: 'Advanced security and threat intelligence'
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    icon: <Cloud className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Cloud optimization and autonomous DevOps'
  },
  {
    id: 'emerging-tech',
    name: 'Emerging Tech',
    icon: <Atom className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Space technology, quantum computing, and more'
  },
  {
    id: 'blockchain-iot',
    name: 'Blockchain & IoT',
    icon: <Network className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-500',
    description: 'Blockchain solutions and IoT platforms'
  }
];

export default function ServicesAdvertising2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Innovative Services 2025 - Zion Tech Group"
        description="Discover our cutting-edge micro SAAS services, IT solutions, and AI platforms. Transform your business with our innovative technology solutions."
        keywords="micro SAAS, AI services, cybersecurity, cloud optimization, blockchain, IoT, quantum computing, space technology"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Innovative Services 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our cutting-edge micro SAAS services, AI-powered solutions, 
              and emerging technology platforms. Stay ahead of the competition with Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`tel:${contact.mobile}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {contact.mobile}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-white">
            <div className="flex items-center space-x-6 mb-4 sm:mb-0">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span className="font-semibold">{contact.mobile}</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span className="font-semibold">{contact.email}</span>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="font-semibold">{contact.address}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white/10 text-gray-400 hover:bg-white/20'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white/10 text-gray-400 hover:bg-white/20'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mt-8">
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {selectedCategory === 'all' ? 'All Services' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-gray-400">
              {filteredServices.length} services available
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
                  className="group relative"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                          POPULAR
                        </span>
                      )}
                    </div>

                    {/* Service Info */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-white">
                        {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}
                        <span className="text-lg text-gray-400">
                          {typeof service.price === 'string' ? (('period' in service ? service.period : '') || '') : ''}
                        </span>
                      </div>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-5 h-5 fill-current" />
                        <span className="ml-1 text-white">{service.rating}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">KEY FEATURES</h4>
                      <div className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Market Info */}
                    <div className="mb-6 space-y-2">
                      <div className="text-xs text-gray-400">
                        <span className="font-semibold">Market Position:</span> {('marketPosition' in service ? service.marketPosition : '')}
                      </div>
                      <div className="text-xs text-gray-400">
                        <span className="font-semibold">ROI:</span> {service.roi}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={service.link}
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
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
                  className="group"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Service Icon and Basic Info */}
                      <div className="flex-shrink-0">
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white mb-2">
                            {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}
                            <span className="text-lg text-gray-400">
                              {typeof service.price === 'string' ? (('period' in service ? service.period : '') || '') : ''}
                            </span>
                          </div>
                          <div className="flex items-center justify-center text-yellow-400 mb-2">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="ml-1 text-white text-sm">{service.rating}</span>
                          </div>
                          {service.popular && (
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                              POPULAR
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Service Details */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                              {service.name}
                            </h3>
                            <p className="text-gray-300 mb-4">
                              {service.description}
                            </p>
                          </div>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-400 mb-2">KEY FEATURES</h4>
                            <div className="space-y-2">
                              {service.features.slice(0, 4).map((feature, idx) => (
                                <div key={idx} className="flex items-center text-sm text-gray-300">
                                  <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-400 mb-2">MARKET INFO</h4>
                            <div className="space-y-2 text-sm text-gray-300">
                              <div><span className="font-semibold">Market Position:</span> {('marketPosition' in service ? service.marketPosition : '')}</div>
                              <div><span className="font-semibold">ROI:</span> {service.roi}</div>
                              <div><span className="font-semibold">Category:</span> {service.category}</div>
                            </div>
                          </div>
                        </div>

                        {/* Technology and Use Cases */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-400 mb-2">TECHNOLOGY</h4>
                            <div className="flex flex-wrap gap-2">
                              {('technology' in service ? service.technology : ('techStack' in service ? service.techStack : [])).slice(0, 4).map((tech, idx) => (
                                <span key={idx} className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-400 mb-2">USE CASES</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.useCases.slice(0, 3).map((useCase, idx) => (
                                <span key={idx} className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded">
                                  {useCase}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-400">
                            <span className="font-semibold">Target Audience:</span> {service.targetAudience}
                          </div>
                          <a
                            href={service.link}
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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

      {/* Contact CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our team to discuss how our innovative services can help you 
              achieve your business goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`tel:${contact.mobile}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {contact.mobile}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email {contact.email}
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Visit us at: <a href={contact.website} className="text-blue-400 hover:text-blue-300 underline">{contact.website}</a></p>
              <p className="mt-2">{contact.address}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 mb-4">
                Leading provider of innovative micro SAAS services, AI solutions, and emerging technology platforms.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>📱 {contact.mobile}</p>
                <p>✉️ {contact.email}</p>
                <p>📍 {contact.address}</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="/services" className="block text-gray-400 hover:text-white transition-colors">All Services</a>
                <a href="/about" className="block text-gray-400 hover:text-white transition-colors">About Us</a>
                <a href="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
                <a href="/blog" className="block text-gray-400 hover:text-white transition-colors">Blog</a>
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
}

// Missing icon components
const Phone = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const Mail = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const MapPin = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);