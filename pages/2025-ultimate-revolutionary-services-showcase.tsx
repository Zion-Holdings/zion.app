import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Zap, Star, Globe, Lock, Cloud, Database
} from 'lucide-react';

// Import all our revolutionary services
import { advancedAIAutonomousEcosystemServices2025 } from '../data/2025-advanced-ai-autonomous-ecosystem-services';
import { cuttingEdgeITInfrastructureInnovations2025 } from '../data/2025-cutting-edge-it-infrastructure-innovations';
import { revolutionaryMicroSaasInnovations2025 } from '../data/2025-revolutionary-micro-saas-innovations';
import { emergingTechnologyBreakthroughs2025 } from '../data/2025-emerging-technology-breakthroughs';
import { specializedEnterpriseSolutions2025 } from '../data/2025-specialized-enterprise-solutions';

// Combine all services
const allRevolutionaryServices = [
  ...advancedAIAutonomousEcosystemServices2025,
  ...cuttingEdgeITInfrastructureInnovations2025,
  ...revolutionaryMicroSaasInnovations2025,
  ...emergingTechnologyBreakthroughs2025,
  ...specializedEnterpriseSolutions2025
];

const serviceCategories = [
  {
    id: 'ai-autonomous-ecosystem',
    name: 'AI Autonomous Ecosystem',
    icon: <Brain className="w-8 h-8" />,
    color: 'from-cyan-500 to-blue-500',
    description: 'Revolutionary AI autonomous systems and consciousness',
    services: advancedAIAutonomousEcosystemServices2025
  },
  {
    id: 'it-infrastructure-innovations',
    name: 'IT Infrastructure Innovations',
    icon: <Building className="w-8 h-8" />,
    color: 'from-indigo-500 to-purple-500',
    description: 'Cutting-edge IT infrastructure and quantum-safe solutions',
    services: cuttingEdgeITInfrastructureInnovations2025
  },
  {
    id: 'revolutionary-micro-saas',
    name: 'Revolutionary Micro SAAS',
    icon: <Target className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Breakthrough micro SAAS solutions and innovations',
    services: revolutionaryMicroSaasInnovations2025
  },
  {
    id: 'emerging-technology',
    name: 'Emerging Technology',
    icon: <Rocket className="w-8 h-8" />,
    color: 'from-pink-500 to-rose-500',
    description: 'Space technology, metaverse, and bio-computing',
    services: emergingTechnologyBreakthroughs2025
  },
  {
    id: 'specialized-enterprise',
    name: 'Specialized Enterprise',
    icon: <Shield className="w-8 h-8" />,
    color: 'from-red-500 to-orange-500',
    description: 'Industry-specific enterprise solutions and platforms',
    services: specializedEnterpriseSolutions2025
  }
];

const ServiceShowcaseCard = ({ service, category }: { service: any; category: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-500 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        scale: 1.02,
        y: -8,
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hover Effect Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />

      {/* Service Header */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center shadow-lg`}>
            {category.icon}
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-cyan-400">{service.category}</div>
            <div className="text-xs text-gray-400">{service.type}</div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {service.name}
        </h3>
        
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {service.tagline}
        </p>

        {/* Pricing */}
        <div className="mb-4">
          <div className="text-2xl font-bold text-cyan-400">
            {service.pricing.starter}
          </div>
          <div className="text-xs text-gray-400">Starting price</div>
        </div>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {service.features.slice(0, 4).map((feature: string, index: number) => (
              <li key={index} className="flex items-center text-xs text-gray-300">
                <Check className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
          <ul className="space-y-1">
            {service.benefits.slice(0, 3).map((benefit: string, index: number) => (
              <li key={index} className="flex items-center text-xs text-gray-300">
                <Zap className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Market Info */}
        <div className="mb-4 p-3 bg-white/5 rounded-lg">
          <div className="text-xs text-gray-400 mb-1">Market Size</div>
          <div className="text-sm font-semibold text-green-400">{service.marketSize}</div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => window.location.href = service.slug}
          className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Contact Info */}
        <div className="mt-4 text-center">
          <div className="text-xs text-gray-400 mb-1">Contact Us</div>
          <div className="text-xs text-cyan-400">{service.contact}</div>
          <div className="text-xs text-cyan-400">{service.mobile}</div>
        </div>
      </div>
    </motion.div>
  );
};

const CategorySection = ({ category }: { category: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-8">
        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl mb-4`}>
          {category.icon}
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">{category.name}</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">{category.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.services.map((service: any, index: number) => (
          <ServiceShowcaseCard key={service.id} service={service} category={category} />
        ))}
      </div>

      {category.services.length > 6 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
          >
            {isExpanded ? 'Show Less' : `Show All ${category.services.length} Services`}
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default function UltimateRevolutionaryServicesShowcase() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <SEO
        title="2025 Ultimate Revolutionary Services Showcase | Zion Tech Group"
        description="Discover our revolutionary micro SAAS services, AI autonomous ecosystem, quantum computing solutions, and cutting-edge IT infrastructure innovations. Transform your business with next-generation technology."
        keywords={["revolutionary services", "AI autonomous ecosystem", "quantum computing", "micro SAAS", "IT infrastructure", "emerging technology", "Zion Tech Group"]}
        ogImage="/og-revolutionary-services.jpg"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  2025 Ultimate
                </span>
                <br />
                <span className="text-white">Revolutionary Services</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Experience the future of technology with our revolutionary micro SAAS services, 
                AI autonomous ecosystem, quantum computing solutions, and cutting-edge IT infrastructure innovations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105">
                  Explore Services
                </button>
                <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">20+</div>
                <div className="text-gray-400">Revolutionary Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">$500B+</div>
                <div className="text-gray-400">Total Market Size</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-400">Autonomous Operation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">1000x</div>
                <div className="text-gray-400">Performance Improvement</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Showcase */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive portfolio of cutting-edge services across five revolutionary categories
              </p>
            </motion.div>

            {/* Category Sections */}
            {serviceCategories.map((category, index) => (
              <CategorySection key={category.id} category={category} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the revolution and gain competitive advantage with our cutting-edge services
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>

              <div className="mt-8 text-center">
                <div className="text-gray-400 mb-2">Contact Information</div>
                <div className="text-cyan-400 font-semibold">kleber@ziontechgroup.com</div>
                <div className="text-cyan-400 font-semibold">+1 302 464 0950</div>
                <div className="text-gray-300 text-sm">364 E Main St STE 1008 Middletown DE 19709</div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}