import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import {
  Brain,
  Atom,
  Rocket,
  Shield,
  Cloud,
  Target,
  Star,
  Check,
  ArrowRight,
  Zap,
  TrendingUp,
  Users,
  Globe,
  Cpu,
  Database,
  Lock,
  BarChart3,
  Lightbulb,
  Settings,
  HelpCircle,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Infinity,
  Eye,
  Heart,
  Infinity as InfinityIcon,
  X
} from 'lucide-react';

// Import our revolutionary services
import { revolutionary2045AdvancedMicroSaas } from '../data/revolutionary-2045-advanced-micro-saas';
import { revolutionary2045ITServices } from '../data/revolutionary-2045-it-services';
import { revolutionary2045AIServices } from '../data/revolutionary-2045-ai-services';

const Revolutionary2045PricingShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Combine all revolutionary services
  const allRevolutionaryServices = [
    ...revolutionary2045AdvancedMicroSaas,
    ...revolutionary2045ITServices,
    ...revolutionary2045AIServices
  ];

  // Filter services by category
  const getFilteredServices = () => {
    if (selectedCategory === 'all') return allRevolutionaryServices;
    return allRevolutionaryServices.filter(service =>
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      service.type.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  };

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, color: 'from-purple-500 to-pink-500', count: allRevolutionaryServices.length },
    { id: 'ai', name: 'AI & Consciousness', icon: Brain, color: 'from-cyan-500 to-blue-500', count: revolutionary2045AIServices.length },
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, color: 'from-blue-500 to-indigo-500', count: revolutionary2045ITServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'space', name: 'Space Technology', icon: Rocket, color: 'from-indigo-500 to-purple-500', count: revolutionary2045ITServices.filter(s => s.category.includes('Space')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500', count: revolutionary2045ITServices.filter(s => s.category.includes('Security')).length },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500', count: revolutionary2045AdvancedMicroSaas.filter(s => s.category.includes('Business')).length }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI') || category.includes('Consciousness')) return Brain;
    if (category.includes('Quantum')) return Atom;
    if (category.includes('Space')) return Rocket;
    if (category.includes('Security') || category.includes('Cybersecurity')) return Shield;
    if (category.includes('Cloud') || category.includes('Infrastructure')) return Cloud;
    if (category.includes('Business')) return Target;
    return Sparkles;
  };

  return (
    <Layout>
      <SEO 
        title="Revolutionary 2045 Technology Services & Pricing | Zion Tech Group"
        description="Experience the future of technology with our cutting-edge 2045 micro SAAS services, AI consciousness platforms, and quantum-powered solutions. Explore pricing and features."
        canonical="https://ziontechgroup.com/revolutionary-2045-pricing-showcase"
        section="2045 Services"
        tags={['2045 Technology', 'AI Consciousness', 'Quantum Computing', 'Space Technology', 'Micro SAAS', 'Pricing']}
      />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-black via-purple-900/20 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
          
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Revolutionary 2045
              </h1>
              <h2 className="text-3xl md:text-4xl text-white mb-6">
                Technology Services & Pricing
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-4xl mx-auto leading-relaxed">
                Experience the future of technology with our cutting-edge micro SAAS services,
                AI consciousness platforms, and quantum-powered solutions that operate autonomously
                with unprecedented intelligence and efficiency.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {allRevolutionaryServices.length}+
                  </div>
                  <div className="text-white/70">Revolutionary Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                    99.99%
                  </div>
                  <div className="text-white/70">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">
                    24/7
                  </div>
                  <div className="text-white/70">AI Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">
                    250+
                  </div>
                  <div className="text-white/70">Countries Served</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-16 px-4 bg-gradient-to-b from-black/50 to-black/80">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Revolutionary</span> Services
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Discover cutting-edge technology solutions across AI consciousness, quantum computing,
                space technology, and autonomous business systems.
              </p>
            </motion.div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <category.icon className="inline-block w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  {category.name}
                  <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredServices().map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer overflow-hidden"
                  onClick={() => handleServiceClick(service)}
                >
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Service Icon */}
                  <div className="relative z-10 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-white/70 mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Pricing */}
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-cyan-400">
                        {service.pricing.starter}
                      </span>
                      <span className="text-white/50 text-sm ml-2">/month</span>
                    </div>

                    {/* Features Preview */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Market Size */}
                    <div className="text-sm text-white/50 mb-4">
                      Market Size: <span className="text-emerald-400 font-semibold">{service.marketSize}</span>
                    </div>

                    {/* Learn More Button */}
                    <div className="flex items-center text-cyan-400 group-hover:text-purple-400 transition-colors duration-300">
                      <span className="text-sm font-semibold mr-2">Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Future</span>?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Contact our team to learn more about our revolutionary 2045 technology solutions
                and how they can transform your organization.
              </p>
              
              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <Phone className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <a href={`tel:${contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 mx-auto mb-4 text-purple-400" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <a href={`mailto:${contactInfo.email}`} className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-4 text-pink-400" />
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-white/70">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/25"
                >
                  <span className="relative z-10">Contact Our Team</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <ArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>

                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-full text-lg transition-all duration-300 hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-400/25"
                >
                  Explore All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-black/95 backdrop-blur-xl rounded-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/20 p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Service Header */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    {React.createElement(getCategoryIcon(selectedService.category), { className: "w-8 h-8 text-white" })}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{selectedService.name}</h2>
                    <p className="text-cyan-400 text-lg">{selectedService.tagline}</p>
                  </div>
                </div>
                <p className="text-white/70 text-lg leading-relaxed">{selectedService.description}</p>
              </div>

              {/* Service Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Pricing */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Pricing Plans</h3>
                    <div className="space-y-3">
                      {Object.entries(selectedService.pricing).map(([plan, price]) => (
                        <div key={plan} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                          <span className="text-white/70 capitalize">{plan}</span>
                          <span className="text-cyan-400 font-semibold">{String(price)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Market Information</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <span className="text-white/70">Market Size</span>
                        <span className="text-emerald-400 font-semibold">{selectedService.marketSize}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <span className="text-white/70">Target Audience</span>
                        <span className="text-white/90 text-sm">{selectedService.targetAudience}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedService.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 p-2 bg-white/5 rounded-lg">
                          <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-white/70 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedService.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2 p-2 bg-white/5 rounded-lg">
                          <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          <span className="text-white/70 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Use Cases</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {selectedService.useCases.map((useCase, index) => (
                    <div key={index} className="p-3 bg-white/5 rounded-lg text-center">
                      <span className="text-white/70 text-sm">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 text-center">
                <a
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/25"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Revolutionary2045PricingShowcase;