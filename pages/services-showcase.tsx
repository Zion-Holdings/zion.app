import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Rocket, 
  Cloud, 
  Globe, 
  Lock, 
  BarChart3, 
  Users, 
  Target,
  Star,
  Check,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Search
} from 'lucide-react';
import { cuttingEdgeInnovationServices } from '../data/2029-cutting-edge-innovations';
import { enterpriseITServices2029 } from '../data/2029-enterprise-it-services';
import { innovativeMicroSaasServices2029 } from '../data/2029-innovative-micro-saas';

const ServicesShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allServices = [
    ...cuttingEdgeInnovationServices,
    ...enterpriseITServices2029,
    ...innovativeMicroSaasServices2029
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: <Star className="w-5 h-5" />, count: allServices.length },
    { id: 'ai', name: 'AI Services', icon: <Brain className="w-5 h-5" />, count: allServices.filter(s => s.category.toLowerCase().includes('ai')).length },
    { id: 'quantum', name: 'Quantum Tech', icon: <Zap className="w-5 h-5" />, count: allServices.filter(s => s.category.toLowerCase().includes('quantum')).length },
    { id: 'enterprise', name: 'Enterprise IT', icon: <Shield className="w-5 h-5" />, count: allServices.filter(s => s.category.toLowerCase().includes('enterprise') || s.category.toLowerCase().includes('it')).length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Rocket className="w-5 h-5" />, count: allServices.filter(s => s.category.toLowerCase().includes('saas')).length },
    { id: 'security', name: 'Security', icon: <Lock className="w-5 h-5" />, count: allServices.filter(s => s.category.toLowerCase().includes('security') || s.category.toLowerCase().includes('cyber')).length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || 
      service.category.toLowerCase().includes(activeCategory) ||
      service.name.toLowerCase().includes(activeCategory) ||
      service.description.toLowerCase().includes(activeCategory);
    
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    if (category.toLowerCase().includes('ai')) return 'from-purple-600 to-pink-500';
    if (category.toLowerCase().includes('quantum')) return 'from-cyan-600 to-blue-500';
    if (category.toLowerCase().includes('enterprise') || category.toLowerCase().includes('it')) return 'from-emerald-600 to-teal-500';
    if (category.toLowerCase().includes('saas')) return 'from-orange-600 to-red-500';
    if (category.toLowerCase().includes('security') || category.toLowerCase().includes('cyber')) return 'from-red-600 to-pink-500';
    return 'from-gray-600 to-gray-500';
  };

  return (
    <>
      <Head>
        <title>Innovative Services Showcase | Zion Tech Group</title>
        <meta name="description" content="Discover our cutting-edge AI, Quantum, Enterprise IT, and Micro SAAS services. Real solutions with transparent pricing and measurable ROI." />
        <link rel="canonical" href="https://ziontechgroup.com/services-showcase" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20" />
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
            >
              Innovative Services Showcase
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              Discover our cutting-edge AI, Quantum Computing, Enterprise IT, and Micro SAAS solutions. 
              Real services with transparent pricing, measurable ROI, and expert implementation support.
            </motion.p>
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-black/30 border border-gray-700/50 rounded-2xl p-6 mb-12 max-w-2xl mx-auto"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Contact Zion Tech Group</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                      : 'border-gray-600 text-gray-400 hover:border-gray-500 hover:text-gray-300'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                  <span className="bg-gray-700 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-black/30 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm"
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-3 left-6">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                        Popular
                      </span>
                    </div>
                  )}

                  {/* Service Icon */}
                  <div className="text-4xl mb-4">{service.icon}</div>

                  {/* Service Name */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-gray-400 text-sm mb-4">{service.tagline}</p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-gray-400">{service.period}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-6 line-clamp-3">{service.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                          <Check className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Market Position */}
                  <div className="mb-6 p-3 bg-gray-800/50 rounded-lg">
                    <h4 className="text-white font-semibold mb-2 text-sm">Market Position:</h4>
                    <p className="text-gray-300 text-xs">{service.marketPosition}</p>
                  </div>

                  {/* ROI */}
                  <div className="mb-6 p-3 bg-emerald-900/20 border border-emerald-500/30 rounded-lg">
                    <h4 className="text-emerald-400 font-semibold mb-2 text-sm">ROI Promise:</h4>
                    <p className="text-emerald-300 text-xs">{service.roi}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                      className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      Contact
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-6 pt-4 border-t border-gray-700/50">
                    <div className="text-xs text-gray-400 space-y-1">
                      <div>📱 {service.contactInfo.mobile}</div>
                      <div>✉️ {service.contactInfo.email}</div>
                      <div>📍 {service.contactInfo.address}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search criteria or category filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20 border border-cyan-500/30 rounded-2xl p-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our innovative services are designed to deliver measurable results and competitive advantages. 
                Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Free Consultation Request"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  Call Now
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesShowcase;