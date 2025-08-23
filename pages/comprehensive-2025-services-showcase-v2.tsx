import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Zap, Globe, Lock, Database, Network,
  Cloud, Server, Code, Users, TrendingUp, Star, Phone, Mail, MapPin, Search
} from 'lucide-react';

// Import our new service data
import { innovativeMicroSaasExpansionV2 } from '../data/2025-innovative-micro-saas-expansion-v2';
import { innovativeITInfrastructureExpansionV2 } from '../data/2025-innovative-it-infrastructure-expansion-v2';
import { cuttingEdgeAIServicesExpansionV2 } from '../data/2025-cutting-edge-ai-services-expansion-v2';

const Comprehensive2025ServicesShowcaseV2 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Combine all new services
  const allNewServices = [
    ...innovativeMicroSaasExpansionV2,
    ...innovativeITInfrastructureExpansionV2,
    ...cuttingEdgeAIServicesExpansionV2
  ];

  const categories = [
    {
      id: 'all',
      name: 'All Services',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-gray-500 to-slate-500',
      description: 'Complete portfolio of innovative services'
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS',
      icon: <Target className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      description: 'Innovative micro SAAS solutions'
    },
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure',
      icon: <Building className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500',
      description: 'Cutting-edge infrastructure solutions'
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-blue-500 to-purple-500',
      description: 'Advanced AI and automation services'
    }
  ];

  const getServiceCategory = (service: any) => {
    if (service.type === 'Micro SAAS') return 'micro-saas';
    if (service.type === 'IT Infrastructure') return 'it-infrastructure';
    if (service.type === 'AI Services') return 'ai-services';
    return 'other';
  };

  const filteredServices = allNewServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || getServiceCategory(service) === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Comprehensive Services Showcase - Zion Tech Group"
        description="Discover our comprehensive portfolio of innovative micro SAAS, IT infrastructure, and AI services. Cutting-edge solutions for the future of business technology."
        keywords={["micro SAAS", "IT infrastructure", "AI services", "quantum computing", "autonomous AI", "innovative technology", "Zion Tech Group"]}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                2025 Comprehensive Services Showcase
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our revolutionary portfolio of innovative micro SAAS, cutting-edge IT infrastructure, 
              and advanced AI services that are shaping the future of business technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-blue-600/20 px-4 py-2 rounded-full">
                <Star className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300">30+ New Services</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-600/20 px-4 py-2 rounded-full">
                <Zap className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300">Quantum Technology</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-600/20 px-4 py-2 rounded-full">
                <Brain className="w-5 h-5 text-green-400" />
                <span className="text-green-300">Autonomous AI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 mb-2" />
              <span className="font-semibold">Phone</span>
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 mb-2" />
              <span className="font-semibold">Email</span>
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 mb-2" />
              <span className="font-semibold">Address</span>
              <span>364 E Main St STE 1008</span>
              <span>Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {category.icon}
                    <span>{category.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-gray-400 mb-6">
            Showing {filteredServices.length} of {allNewServices.length} services
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  {/* Service Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 text-sm mb-3">
                          {service.tagline}
                        </p>
                      </div>
                      <div className={`p-2 rounded-lg ${
                        service.type === 'Micro SAAS' ? 'bg-green-600/20 text-green-400' :
                        service.type === 'IT Infrastructure' ? 'bg-blue-600/20 text-blue-400' :
                        'bg-purple-600/20 text-purple-400'
                      }`}>
                        {service.type === 'Micro SAAS' ? <Target className="w-5 h-5" /> :
                         service.type === 'IT Infrastructure' ? <Building className="w-5 h-5" /> :
                         <Brain className="w-5 h-5" />}
                      </div>
                    </div>
                  </div>

                  {/* Service Description */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Starting from:</div>
                    <div className="text-2xl font-bold text-white">
                      {service.pricing.starter}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Key Benefits:</div>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Size */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-1">Market Size:</div>
                    <div className="text-sm text-white font-semibold">
                      {service.marketSize}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex space-x-3">
                    <a
                      href={`mailto:${service.contact}?subject=Inquiry about ${service.name}`}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-center font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
                    >
                      Get Quote
                    </a>
                    <a
                      href={service.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-200"
                    >
                      Learn More
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of technology with our innovative services. 
              Get in touch today to discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
              >
                Contact Us Today
              </a>
              <a
                href="tel:+13024640950"
                className="border border-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-200"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 text-sm">
                Leading the future of technology with innovative micro SAAS, 
                IT infrastructure, and AI services.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Micro SAAS Solutions</li>
                <li>IT Infrastructure</li>
                <li>AI Services</li>
                <li>Quantum Technology</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+1 302 464 0950</li>
                <li>kleber@ziontechgroup.com</li>
                <li>Middletown, DE 19709</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Website</h4>
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm"
              >
                ziontechgroup.com
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Comprehensive2025ServicesShowcaseV2;