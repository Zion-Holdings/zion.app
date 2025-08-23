import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, Atom,
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

// Import our new enhanced components
import EnhancedPerformanceMonitor from '../components/EnhancedPerformanceMonitor';
import EnhancedAccessibilityEnhancer from '../components/EnhancedAccessibilityEnhancer';
import EnhancedSEO from '../components/EnhancedSEO';

// Helper function to get service website safely
const getServiceWebsite = (service: { website?: string; link?: string; id?: string; name: string }) => {
  if (service.website) return service.website;
  if (service.link) return service.link;
  return `/services/${service.id || service.name.toLowerCase().replace(/\s+/g, '-')}`;
};

// Helper function to get service price safely
const getServicePrice = (service: any): string => {
  if ('price' in service && typeof service.price === 'string') {
    return service.price;
  }
  
  if ('price' in service && typeof service.price === 'object' && service.price.monthly) {
    return `$${service.price.monthly}/month`;
  }
  
  if ('pricing' in service && service.pricing) {
    if (typeof service.pricing === 'string') {
      return service.pricing;
    }
    if (typeof service.pricing === 'object' && 'starter' in service.pricing) {
      return service.pricing.starter;
    }
    if (typeof service.pricing === 'object' && 'monthly' in service.pricing) {
      return `$${service.pricing.monthly}/month`;
    }
  }
  
  return 'Contact Us';
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

const Home: NextPage = () => {
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

      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link sr-only-focusable">
        Skip to main content
      </a>

      {/* Futuristic Navigation */}
      <UltraFuturisticNavigation2026 />

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0 }}
          className="relative min-h-screen flex items-center justify-center pt-32 pb-20"
          aria-labelledby="hero-heading"
        >
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              {/* Main Heading */}
              <h1 
                id="hero-heading"
                className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
              >
                Zion Tech Group
              </h1>
              
              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                Pioneering the future of technology with revolutionary AI consciousness, 
                quantum computing, and autonomous solutions that transform businesses worldwide.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <button className="btn-primary text-lg px-8 py-4">
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="btn-secondary text-lg px-8 py-4">
                  Get Started
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Services Overview Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.0 }}
          viewport={{ once: true }}
          className="py-20 bg-gray-900/50"
          aria-labelledby="services-heading"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 
                id="services-heading"
                className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
              >
                Our Revolutionary Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From AI autonomous systems to quantum computing infrastructure, 
                we deliver cutting-edge solutions that drive innovation.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} border-transparent text-white`
                      : 'border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white'
                  }`}
                  aria-pressed={selectedCategory === category.id}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id || index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card card-hover group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {service.description || 'Revolutionary technology solution designed to transform your business operations and drive innovation.'}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 font-semibold">
                        {getServicePrice(service)}
                      </span>
                      <a
                        href={getServiceWebsite(service)}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-1"
                        aria-label={`Learn more about ${service.name}`}
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All Services Button */}
            <div className="text-center mt-12">
              <button className="btn-primary text-lg px-8 py-4">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.0 }}
          viewport={{ once: true }}
          className="py-20 bg-gray-800/50"
          aria-labelledby="contact-heading"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 
                id="contact-heading"
                className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
              >
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Let's discuss how our innovative solutions can drive your success 
                and position you at the forefront of technological advancement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="btn-primary text-lg px-8 py-4">
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Futuristic Footer */}
      <UltraFuturisticFooter2026 />

      {/* Enhanced Components */}
      <EnhancedPerformanceMonitor />
      <EnhancedAccessibilityEnhancer />
      <EnhancedSEO />
    </UltraFuturisticNeonBackground>
  );
};

export default Home;
