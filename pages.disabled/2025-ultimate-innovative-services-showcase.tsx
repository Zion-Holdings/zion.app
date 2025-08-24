import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Cpu, Building, Zap, Star,
  ArrowRight, CheckCircle, TrendingUp, Users, Globe
} from 'lucide-react';

// Import all our innovative services
import { innovativeAIAutonomousServicesExpansion2025 } from '../data/2025-innovative-ai-autonomous-services-expansion';
import { innovativeITInfrastructureExpansion2025 } from '../data/2025-innovative-it-infrastructure-expansion';
import { innovativeMicroSaasExpansionV32025 } from '../data/2025-innovative-micro-saas-expansion-v3';
import { innovativeMicroSaasExpansionV42025 } from '../data/2025-innovative-micro-saas-expansion-v4';
import { innovativeITInfrastructureExpansionV22025 } from '../data/2025-innovative-it-infrastructure-expansion-v2';
import { innovativeAIServicesExpansionV22025 } from '../data/2025-innovative-ai-services-expansion-v2';

// Import existing service data
import { realMicroSaasServices } from '../data/real-micro-saas-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { enterpriseITServices } from '../data/enterprise-it-services';
import { emergingTechServices } from '../data/emerging-tech-services';

// Import our futuristic components
import UltraFuturisticNeonBackground from '../components/ui/UltraFuturisticNeonBackground';
import UltraFuturisticNavigation2026 from '../components/layout/UltraFuturisticNavigation2026';
import UltraFuturisticFooter2026 from '../components/layout/UltraFuturisticFooter2026';

const UltimateInnovativeServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Combine all services for showcase
  const allServices = [
    ...innovativeAIAutonomousServicesExpansion2025,
    ...innovativeITInfrastructureExpansion2025,
    ...innovativeMicroSaasExpansionV32025,
    ...innovativeMicroSaasExpansionV42025,
    ...innovativeITInfrastructureExpansionV22025,
    ...innovativeAIServicesExpansionV22025,
    ...realMicroSaasServices,
    ...innovativeAIServices,
    ...enterpriseITServices,
    ...emergingTechServices
  ];

  // Filter services based on category and search
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & Autonomous', icon: Brain, color: 'from-cyan-500 to-blue-500' },
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, color: 'from-blue-500 to-indigo-500' },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Cpu, color: 'from-green-500 to-teal-500' },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Building, color: 'from-orange-500 to-red-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-pink-500' }
  ];

  const getCategoryColor = (category: string) => {
    const categoryLower = category.toLowerCase();
    if (categoryLower.includes('ai') || categoryLower.includes('autonomous')) return 'from-cyan-500 to-blue-500';
    if (categoryLower.includes('quantum')) return 'from-blue-500 to-indigo-500';
    if (categoryLower.includes('infrastructure') || categoryLower.includes('it')) return 'from-green-500 to-teal-500';
    if (categoryLower.includes('saas') || categoryLower.includes('software')) return 'from-orange-500 to-red-500';
    if (categoryLower.includes('security') || categoryLower.includes('cyber')) return 'from-red-500 to-pink-500';
    return 'from-purple-500 to-pink-500';
  };

  return (
    <UltraFuturisticNeonBackground>
      <SEO 
        title="2025 Ultimate Innovative Services Showcase - Zion Tech Group"
        description="Discover our comprehensive portfolio of cutting-edge AI autonomous systems, quantum computing infrastructure, and revolutionary micro SAAS solutions. Leading innovation since 2025."
        keywords={[
          'AI autonomous systems',
          'quantum computing',
          'IT infrastructure',
          'micro SAAS',
          'innovative technology',
          'Zion Tech Group',
          '2025 services'
        ]}
      />

      {/* Futuristic Navigation */}
      <UltraFuturisticNavigation2026 />

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0 }}
        className="relative min-h-screen flex items-center justify-center pt-32 pb-20"
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.4 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                2025 Ultimate
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
                Services Showcase
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.6 }}
              className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Experience the Future of Technology with Our Revolutionary AI Autonomous Systems, 
              Quantum Computing Infrastructure, and Innovative Micro SAAS Solutions
            </motion.p>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
            >
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{allServices.length}+</div>
                <div className="text-gray-400">Innovative Services</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">$500B+</div>
                <div className="text-gray-400">Market Opportunity</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-400">Autonomous Operation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">100%</div>
                <div className="text-gray-400">Future-Ready</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <a
                href="tel:+13024640950"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white font-bold text-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25"
              >
                <span className="relative z-10">Call Now +1 302 464 0950</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl text-white font-bold text-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/25"
              >
                <span className="relative z-10">Email Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Overview Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        className="py-20 relative"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Revolutionary Services Portfolio
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Discover our comprehensive range of cutting-edge services designed to transform 
              businesses and drive innovation across industries
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
                    }`}
                  >
                    <category.icon className="inline-block w-5 h-5 mr-2" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 hover:border-cyan-500/50 hover:bg-gray-900/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className={`inline-block p-3 rounded-2xl bg-gradient-to-r ${getCategoryColor(service.category)} mb-4`}>
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Service Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="font-semibold">{service.category}</span>
                  </div>
                  {(service as any).marketSize && (
                    <div className="flex items-center text-sm text-gray-300">
                      <TrendingUp className="w-4 h-4 text-blue-400 mr-2" />
                      <span>Market: {(service as any).marketSize}</span>
                    </div>
                  )}
                  {(service as any).growthRate && (
                    <div className="flex items-center text-sm text-gray-300">
                      <Users className="w-4 h-4 text-purple-400 mr-2" />
                      <span>Growth: {(service as any).growthRate}</span>
                    </div>
                  )}
                </div>

                {/* Pricing */}
                {(service as any).pricing && (
                  <div className="mb-6">
                    <div className="text-sm text-gray-400 mb-2">Starting from:</div>
                    <div className="text-2xl font-bold text-cyan-400">
                      {(service as any).pricing.starter}
                    </div>
                  </div>
                )}

                {/* Features Preview */}
                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-3">Key Features:</div>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-cyan-400">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex justify-between items-center">
                  <a
                    href={(service as any).website || `/services/${service.id}`}
                    className="group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                  {(service as any).contact?.phone && (
                    <a
                      href={`tel:${(service as any).contact.phone}`}
                      className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      {(service as any).contact.phone}
                    </a>
                  )}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

          {/* Results Count */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12 text-gray-400"
          >
            Showing {filteredServices.length} of {allServices.length} services
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        className="py-20 relative"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12">
              Contact us today to discover how our innovative services can revolutionize your operations
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-400">+1 302 464 0950</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-gray-400">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white font-bold text-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25"
              >
                <span className="relative z-10">Call Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl text-white font-bold text-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/25"
              >
                <span className="relative z-10">Send Email</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Futuristic Footer */}
      <UltraFuturisticFooter2026 />
    </UltraFuturisticNeonBackground>
  );
};

export default UltimateInnovativeServicesShowcase2025;