import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield,
  ArrowRight,
  Building, Cpu, Phone, Mail, MapPin
} from 'lucide-react';

// Import our new innovative services
import { innovativeAIAutonomousServicesExpansion2025 } from '../data/2025-innovative-ai-autonomous-services-expansion';
import { innovativeITInfrastructureExpansion2025 } from '../data/2025-innovative-it-infrastructure-expansion';
import { innovativeMicroSaasExpansionV32025 } from '../data/2025-innovative-micro-saas-expansion-v3';

// Import existing service data
import { realMicroSaasServices } from '../data/real-micro-saas-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { enterpriseITServices } from '../data/enterprise-it-services';
import { emergingTechServices } from '../data/emerging-tech-services';
import { newRealServices } from '../data/new-real-services';
import { realOperationalServices } from '../data/real-operational-services';
import { marketReadyServices } from '../data/market-ready-services';
import { marketValidatedServices } from '../data/market-validated-services';
import { industryRealServices } from '../data/industry-real-services';

// Import our new futuristic components
import UltraFuturisticNeonBackground from '../components/ui/UltraFuturisticNeonBackground';
import UltraFuturisticNavigation2026 from '../components/layout/UltraFuturisticNavigation2026';
import UltraFuturisticFooter2026 from '../components/layout/UltraFuturisticFooter2026';

// Helper function to get service website safely
const getServiceWebsite = (service: any) => {
  if (service.website) return service.website;
  if (service.link) return service.link;
  return `/services/${service.id || service.name.toLowerCase().replace(/\s+/g, '-')}`;
};

const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Combine all services for showcase
  const allServices = [
    ...innovativeAIAutonomousServicesExpansion2025,
    ...innovativeITInfrastructureExpansion2025,
    ...innovativeMicroSaasExpansionV32025,
    ...realMicroSaasServices,
    ...innovativeAIServices,
    ...enterpriseITServices,
    ...emergingTechServices,
    ...newRealServices,
    ...realOperationalServices,
    ...marketReadyServices,
    ...marketValidatedServices,
    ...industryRealServices
  ];

  // Get featured services
  const featuredServices = allServices.slice(0, 6);

  const categories = [
    { id: 'all', name: 'All Services', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & Autonomous', icon: Brain, color: 'from-cyan-500 to-blue-500' },
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, color: 'from-blue-500 to-indigo-500' },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Cpu, color: 'from-green-500 to-teal-500' },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Building, color: 'from-orange-500 to-red-500' }
  ];

  return (
    <UltraFuturisticNeonBackground>
      <SEO 
        title="Zion Tech Group - Innovative AI, IT & Micro SAAS Solutions"
        description="Transform your business with our cutting-edge AI autonomous systems, quantum computing infrastructure, and revolutionary micro SAAS solutions. Leading innovation since 2025."
        keywords={[
          'AI autonomous systems',
          'quantum computing',
          'IT infrastructure',
          'micro SAAS',
          'innovative technology',
          'Zion Tech Group'
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
                Zion Tech Group
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.6 }}
              className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Pioneering the Future of Technology with Revolutionary AI Autonomous Systems, 
              Quantum Computing Infrastructure, and Innovative Micro SAAS Solutions
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <a
                href="/services"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white font-bold text-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25"
              >
                <span className="relative z-10">Explore Our Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              
              <a
                href="/2025-innovative-services-showcase-v2"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl text-white font-bold text-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/25"
              >
                <span className="relative z-10">2025 Innovation Showcase</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="tel:+13024640950"
                className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl text-white font-bold text-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-green-500/25"
              >
                <span className="relative z-10">Call Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 1.0 }}
              className="flex flex-wrap justify-center gap-8 text-gray-300"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-purple-400" />
                <span className="text-lg">+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-blue-400" />
                <span className="text-lg">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <span className="text-lg">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
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

          {/* Category Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} border-transparent text-white shadow-lg`
                    : 'bg-gray-800/50 border-gray-600/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Featured Services Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Service Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-8 h-8 text-white" />
                  </div>

                  {/* Service Info */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      {service.category || 'Innovative Service'}
                    </span>
                  </div>

                  {/* Action Button */}
                  <a
                    href={getServiceWebsite(service)}
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Services CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <a
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white font-bold text-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25"
            >
              View All Services
              <ArrowRight className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Innovation Highlights Section */}
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Innovation at the Edge
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Pushing the boundaries of what's possible with cutting-edge technologies
            </p>
          </motion.div>

          {/* Innovation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI Autonomous Systems',
                description: 'Revolutionary AI systems that operate independently with human-like reasoning capabilities',
                color: 'from-cyan-500 to-blue-500'
              },
              {
                icon: Atom,
                title: 'Quantum Computing',
                description: 'Next-generation quantum computing solutions for complex problem-solving',
                color: 'from-blue-500 to-indigo-500'
              },
              {
                icon: Cpu,
                title: 'Advanced Infrastructure',
                description: 'Cutting-edge IT infrastructure designed for the future',
                color: 'from-green-500 to-teal-500'
              },
              {
                icon: Building,
                title: 'Micro SAAS Solutions',
                description: 'Innovative business solutions that scale with your needs',
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: Shield,
                title: 'Cybersecurity',
                description: 'Advanced security solutions for the digital age',
                color: 'from-red-500 to-orange-500'
              },
              {
                icon: ArrowRight, // Changed from Rocket to ArrowRight for consistency
                title: 'Emerging Technologies',
                description: 'Exploring the frontiers of technological innovation',
                color: 'from-purple-500 to-pink-500'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact CTA Section */}
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
            className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20 rounded-3xl p-16 text-center border border-gray-700/50"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Our innovative services are designed to give you a competitive edge in the rapidly evolving technology landscape. 
              Contact us today to learn how we can help you achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href="tel:+13024640950"
                className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 rounded-2xl text-white font-bold text-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-6 h-6" />
                +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-2xl text-white font-bold text-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-6 h-6" />
                kleber@ziontechgroup.com
              </a>
            </div>

            <div className="text-gray-400 text-lg">
              <p className="mb-2">364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Visit us at: <a href="https://ziontechgroup.com" className="text-purple-400 hover:text-purple-300 font-medium">ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Futuristic Footer */}
      <UltraFuturisticFooter2026 />
    </UltraFuturisticNeonBackground>
  );
};

export default HomePage;
