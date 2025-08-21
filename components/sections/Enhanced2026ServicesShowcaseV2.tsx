import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Star, TrendingUp, Brain, Atom, Sparkles, 
  Shield, Target, Satellite, Code, Lock, Zap, 
  CheckCircle, Users, Globe, Award, Rocket, Search
} from 'lucide-react';
import { innovative2026MicroSaasServicesV2 } from '../../data/innovative-2026-micro-saas-v2';
import { emergingTech2026V2Services } from '../../data/emerging-tech-2026-v2-services';

const serviceCategories = [
  {
    title: 'AI & Machine Learning 2026',
    icon: Brain,
    color: 'from-purple-600 to-pink-600',
    services: [
      'ai-business-intelligence-elite-2026',
      'autonomous-ai-agents-platform-2026',
      'ai-healthcare-companion-2026',
      'ai-creative-studio-platform-2026'
    ]
  },
  {
    title: 'Quantum Computing & Security',
    icon: Atom,
    color: 'from-blue-600 to-cyan-600',
    services: [
      'quantum-cybersecurity-suite-2026'
    ]
  },
  {
    title: 'Emerging Technologies 2026',
    icon: Sparkles,
    color: 'from-green-600 to-emerald-600',
    services: [
      'neuromorphic-computing-platform-2026',
      'dna-computing-platform-2026',
      'photonic-computing-platform-2026',
      'holographic-display-platform-2026'
    ]
  },
  {
    title: 'Enterprise IT Solutions 2026',
    icon: Shield,
    color: 'from-red-600 to-orange-600',
    services: [
      'zero-trust-network-architecture-2026',
      'edge-computing-orchestration-2026',
      '5g-private-network-solutions-2026',
      'blockchain-infrastructure-platform-2026'
    ]
  },
  {
    title: 'Autonomous Systems & Robotics',
    icon: Target,
    color: 'from-indigo-600 to-purple-600',
    services: [
      'swarm-robotics-platform-2026'
    ]
  },
  {
    title: 'Space Technology & Innovation',
    icon: Satellite,
    color: 'from-yellow-600 to-orange-600',
    services: [
      'space-debris-tracking-system-2026'
    ]
  }
];

const Enhanced2026ServicesShowcaseV2 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Combine all services
  const allServices = [
    ...innovative2026MicroSaasServicesV2,
    ...emergingTech2026V2Services
  ];

  // Filter services based on category and search
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      serviceCategories.some(cat => 
        cat.services.includes(service.id)
      );
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryForService = (serviceId: string) => {
    return serviceCategories.find(cat => cat.services.includes(serviceId));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              2026 Revolutionary Services
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Discover our cutting-edge AI, quantum, and emerging technology solutions designed to transform your business
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center space-x-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                All Services
              </button>
              {serviceCategories.map((category) => (
                <button
                  key={category.title}
                  onClick={() => setSelectedCategory(category.title)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.title
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => {
            const category = getCategoryForService(service.id);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all duration-300 h-full">
                  
                  {/* Service Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                        {service.name}
                      </h3>
                      {service.popular && (
                        <span className="inline-flex items-center px-2 py-1 text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features Preview */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-lg"
                        >
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-purple-600/20 text-purple-300 rounded-lg">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Pricing and Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                      {service.period && (
                        <span className="text-gray-400 text-sm ml-1">{service.period}</span>
                      )}
                    </div>
                    {category && (
                      <div className="text-right">
                        <span className="text-xs text-gray-400">Category</span>
                        <div className="flex items-center space-x-1">
                          <category.icon className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-300">{category.title.split(' ')[0]}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 text-xs text-gray-400">
                    <span>⭐ {service.rating} ({service.reviews} reviews)</span>
                    <span>👥 {service.customers.toLocaleString()} customers</span>
                  </div>

                  {/* CTA */}
                  <Link 
                    href={service.link}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group-hover:text-white"
                  >
                    Learn More 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging our revolutionary 2026 technology solutions
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105">
                  Get Started Today
                </button>
              </Link>
              <Link href="/pricing">
                <button className="px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-200">
                  View Pricing
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Enhanced2026ServicesShowcaseV2;