import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Star, CheckCircle, ArrowRight, 
  Brain, Atom, Shield, Rocket, Target, Microscope,
  Phone, Mail, MapPin, TrendingUp, Users, Award
} from 'lucide-react';

// Import all the new 2032 service data
import { futuristicAIServices2032 } from '../data/2032-futuristic-ai-services';
import { quantumEmergingTechServices2032 } from '../data/2032-quantum-emerging-tech-services';
import { spaceMetaverseServices2032 } from '../data/2032-space-metaverse-services';
import { innovativeMicroSaasServices2032 } from '../data/2032-innovative-micro-saas';
import { researchDevelopmentServices2032 } from '../data/2032-research-development-services';
import { enterpriseITServices2032 } from '../data/2032-enterprise-it-services';

// Import all the new 2033 service data
import { innovativeMicroSaasServices2033 } from '../data/2033-innovative-micro-saas-v2';
import { innovativeAIServices2033 } from '../data/2033-innovative-ai-services-v2';
import { quantumEmergingTechServices2033 } from '../data/2033-quantum-emerging-tech-services-v2';
import { spaceMetaverseServices2033 } from '../data/2033-space-metaverse-services-v2';
import { researchDevelopmentServices2033 } from '../data/2033-research-development-services-v2';
import { enterpriseITServices2033 } from '../data/2033-enterprise-it-services-v2';

// Import new 2024 real market services
import { realMarketServices } from '../data/2024-real-market-services';
import { aiEmergingTechServices } from '../data/2024-ai-emerging-tech-services';

// Import existing services for comprehensive coverage
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';
import { quantumSpaceServices } from '../data/quantum-space-services';
import { enterpriseITServices } from '../data/enterprise-it-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    id: 'ai-services',
    title: '🧠 Revolutionary AI Services',
    description: 'Next-generation AI consciousness and creativity',
    icon: Brain,
    color: 'from-violet-500 to-purple-500',
    services: [...futuristicAIServices2032, ...innovativeAIServices2033, ...aiEmergingTechServices.filter(s => s.category.includes('AI'))],
    gradient: 'from-violet-500/20 to-indigo-500/20'
  },
  {
    id: 'quantum-emerging',
    title: '⚛️ Quantum & Emerging Tech',
    description: 'Quantum computing, DNA computing, and beyond',
    icon: Atom,
    color: 'from-indigo-500 to-blue-500',
    services: [...quantumEmergingTechServices2032, ...quantumEmergingTechServices2033, ...aiEmergingTechServices.filter(s => s.category.includes('Quantum') || s.category.includes('Blockchain'))],
    gradient: 'from-indigo-500/20 to-cyan-500/20'
  },
  {
    id: 'enterprise-it',
    title: '🏙️ Enterprise IT Solutions',
    description: 'Autonomous operations and zero-trust security',
    icon: Shield,
    color: 'from-blue-500 to-cyan-500',
    services: [...enterpriseITServices2032, ...enterpriseITServices2033, ...realMarketServices.filter(s => s.category.includes('Security') || s.category.includes('HR') || s.category.includes('Project'))],
    gradient: 'from-blue-500/20 to-teal-500/20'
  },
  {
    id: 'business-automation',
    title: '🛒 Business Automation',
    description: 'Streamline business operations',
    icon: Target,
    color: 'from-teal-500 to-emerald-500',
    services: [...realMarketServices.filter(s => s.category.includes('E-commerce') || s.category.includes('Marketing') || s.category.includes('Finance'))],
    gradient: 'from-teal-500/20 to-green-500/20'
  },
  {
    id: 'robotics-automation',
    title: '🤖 Robotics & Automation',
    description: 'Intelligent automation solutions',
    icon: Rocket,
    color: 'from-green-500 to-yellow-500',
    services: [...aiEmergingTechServices.filter(s => s.category.includes('Robotics') || s.category.includes('Edge'))],
    gradient: 'from-green-500/20 to-orange-500/20'
  },
  {
    id: 'research-development',
    title: '🔬 Research & Development',
    description: 'Breakthrough technologies and innovations',
    icon: Microscope,
    color: 'from-orange-500 to-red-500',
    services: [...researchDevelopmentServices2032, ...researchDevelopmentServices2033, ...aiEmergingTechServices.filter(s => s.category.includes('Drug') || s.category.includes('Climate'))],
    gradient: 'from-orange-500/20 to-pink-500/20'
  }
];

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  // Combine all services for search
  const allServices = serviceCategories.flatMap(category => 
    category.services.map(service => ({ ...service, category: category.id }))
  );

  // Filter services based on search and filters
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    // Helper function to get service price for filtering
    const getServicePrice = (service: any) => {
      if (service.price) {
        return parseFloat(service.price.replace(/[^0-9.]/g, ''));
      } else if (service.pricing && service.pricing.monthly) {
        return parseFloat(service.pricing.monthly.replace(/[^0-9.]/g, ''));
      }
      return 0;
    };

    const servicePrice = getServicePrice(service);
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'low' && servicePrice < 1000) ||
                        (priceRange === 'medium' && servicePrice >= 1000 && servicePrice < 10000) ||
                        (priceRange === 'high' && servicePrice >= 10000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const totalServices = allServices.length;
  const totalCategories = serviceCategories.length;

  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group | 2032 Revolutionary Technology Solutions</title>
        <meta name="description" content="Explore our comprehensive portfolio of 1000+ cutting-edge technology services. From AI consciousness to space mining automation, discover solutions that transform businesses." />
        <meta name="keywords" content="AI services, quantum computing, space technology, metaverse development, enterprise IT, micro SaaS, research development, technology solutions" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-black via-purple-900/20 to-black">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Revolutionary Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the future with our comprehensive portfolio of cutting-edge AI, quantum computing, 
              and emerging technology services. Transform your business with solutions that were once science fiction.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
          >
            {[
              { number: `${totalServices}+`, label: 'Total Services', icon: TrendingUp, color: 'from-cyan-400 to-blue-400' },
              { number: `${totalCategories}`, label: 'Technology Domains', icon: Target, color: 'from-purple-400 to-pink-400' },
              { number: '1000%', label: 'Average ROI', icon: Star, color: 'from-yellow-400 to-orange-400' },
              { number: '24/7', label: 'Expert Support', icon: Users, color: 'from-green-400 to-emerald-400' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r ${stat.color} rounded-2xl`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Ready to Transform Your Business?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-purple-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-purple-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-green-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50"
              >
                <option value="all">All Categories</option>
                {serviceCategories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.title.split(' ')[0]} {category.title.split(' ')[1]}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Price:</span>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50"
              >
                <option value="all">All Prices</option>
                <option value="low">Under $1K</option>
                <option value="medium">$1K - $10K</option>
                <option value="high">$10K+</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Showing {filteredServices.length} of {totalServices} services
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 h-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50">
                    {/* Popular Badge */}
                    {('popular' in service && service.popular) || ('pricing' in service && service.pricing && service.pricing.monthly) ? (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="inline-flex items-center gap-1 px-3 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-semibold rounded-full">
                          <Star className="w-3 h-3" />
                          {'popular' in service && service.popular ? 'Popular' : 'Featured'}
                        </div>
                      </div>
                    ) : null}

                    {/* Service Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${'color' in service ? service.color : 'from-purple-500 to-blue-500'} rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110`}>
                      <span className="text-2xl">{'icon' in service ? service.icon : '🚀'}</span>
                    </div>

                    {/* Service Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                        {service.name}
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features Preview */}
                      <div className="space-y-2">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-sm text-gray-500">+{service.features.length - 3} more features</div>
                        )}
                      </div>

                      {/* Service Stats */}
                      <div className="grid grid-cols-3 gap-4 pt-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-cyan-400">
                            {'customers' in service ? service.customers : '1000+'}
                          </div>
                          <div className="text-xs text-gray-500">Customers</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-purple-400">
                            {'rating' in service ? service.rating : '5.0'}
                          </div>
                          <div className="text-xs text-gray-500">Rating</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-pink-400">
                            {'reviews' in service ? service.reviews : '4.9'}
                          </div>
                          <div className="text-xs text-gray-500">Reviews</div>
                        </div>
                      </div>

                      {/* Price and CTA */}
                      <div className="pt-4 border-t border-gray-700/50">
                        <div className="flex justify-between items-center">
                          <div className="text-3xl font-bold text-white">
                          {'price' in service ? service.price : (service.pricing ? service.pricing.monthly : 'Contact Us')}
                        </div>
                                                     <a
                                                           href={'link' in service ? service.link : `/services/${service.id}`}
                             className="inline-flex items-center space-x-2 text-purple-400 hover:text-cyan-400 transition-colors group/btn"
                           >
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Hover Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${serviceCategories.find(cat => cat.id === service.category)?.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setPriceRange('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Technology Domains
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive portfolio spans across all cutting-edge technology domains, 
              providing end-to-end solutions for the most ambitious projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                    {category.services.length}+ Services
                  </div>

                  <a
                    href={`#${category.id}`}
                    className="inline-flex items-center space-x-2 text-purple-400 hover:text-cyan-400 transition-colors group/btn"
                  >
                    <span>View Services</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies already leveraging our revolutionary 
              2032 services. Start your transformation journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                <span>Call {contactInfo.mobile}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}