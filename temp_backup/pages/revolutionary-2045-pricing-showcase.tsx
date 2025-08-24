import React, { useState, useCallback } from 'react';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Check, Star, Brain, Atom, Rocket, Shield, Cpu, Database, 
  Users, Globe, Zap, Target, TrendingUp, Award, Clock, Shield as ShieldIcon
} from 'lucide-react';

// Import our new revolutionary services
import { revolutionary2045AdvancedMicroSaas } from '../data/revolutionary-2045-advanced-micro-saas';
import { revolutionary2045ITServices } from '../data/revolutionary-2045-it-services';
import { revolutionary2045AIServices } from '../data/revolutionary-2045-ai-services';

const Revolutionary2045PricingShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlan, setSelectedPlan] = useState('professional');

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
    { id: 'all', name: 'All Services', icon: Star, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & Consciousness', icon: Brain, color: 'from-cyan-500 to-blue-500' },
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, color: 'from-blue-500 to-indigo-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'space', name: 'Space Technology', icon: Rocket, color: 'from-indigo-500 to-purple-500' },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500' }
  ];

  const plans = [
    { id: 'starter', name: 'Starter', color: 'from-green-500 to-emerald-500' },
    { id: 'professional', name: 'Professional', color: 'from-blue-500 to-cyan-500' },
    { id: 'enterprise', name: 'Enterprise', color: 'from-purple-500 to-pink-500' }
  ];

  const handleServiceClick = useCallback((service: any) => {
    window.location.href = service.slug;
  }, []);

  const handleContactUs = useCallback(() => {
    window.location.href = 'mailto:kleber@ziontechgroup.com';
  }, []);

  const getPlanPrice = (service: any, plan: string) => {
    switch (plan) {
      case 'starter':
        return service.pricing.starter;
      case 'professional':
        return service.pricing.professional;
      case 'enterprise':
        return service.pricing.enterprise;
      default:
        return service.pricing.starter;
    }
  };

  return (
    <Layout>
      <main className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Revolutionary 2045
                <br />
                Pricing Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Experience the future of technology with our cutting-edge micro SAAS services, 
                IT solutions, and AI platforms powered by consciousness-driven intelligence.
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Choose from our comprehensive range of revolutionary services designed to transform 
                your business and propel you into the future of technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Plan Selection */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Plan</span>
              </h2>
              <p className="text-lg text-gray-400">
                Select the plan that best fits your business needs and budget
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`group relative px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                    selectedPlan === plan.id
                      ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-2xl shadow-cyan-500/25'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                  }`}
                >
                  {plan.name}
                  {selectedPlan === plan.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full blur-xl opacity-75" />
                  )}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Explore by <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Category</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Filter our revolutionary services by category to find exactly what you need
              </p>
            </motion.div>

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
                  className={`group relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-2xl shadow-cyan-500/25'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                  }`}
                >
                  <category.icon className="inline-block w-5 h-5 mr-2" />
                  {category.name}
                  {selectedCategory === category.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full blur-xl opacity-75" />
                  )}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {getFilteredServices().map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300"
                >
                  {/* Service Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-2xl flex items-center justify-center">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                          {service.type}
                        </span>
                        <div className="text-xs text-gray-400 mt-1">
                          {service.category}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Pricing Plans */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Pricing Plans</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {plans.map((plan) => (
                        <div key={plan.id} className="text-center p-3 bg-gray-800/50 rounded-lg">
                          <div className="text-xs text-gray-400 mb-1">{plan.name}</div>
                          <div className="text-lg font-bold text-white">
                            {getPlanPrice(service, plan.id)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.slice(0, 6).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <Check className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span className="line-clamp-2">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Benefits</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {service.benefits.slice(0, 4).map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <Star className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                          <span className="line-clamp-2">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-semibold text-gray-300 mb-2">Market Size</h5>
                        <div className="text-lg font-bold text-green-400">
                          {service.marketSize}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-gray-300 mb-2">Target Audience</h5>
                        <div className="text-sm text-gray-400 line-clamp-2">
                          {service.targetAudience.split(',')[0]}...
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Competitive Advantage */}
                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-gray-300 mb-2">Competitive Advantage</h5>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {service.competitiveAdvantage}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handleServiceClick(service)}
                      className="group/btn relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <span className="relative z-10">Learn More</span>
                      <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                    
                    <button
                      onClick={handleContactUs}
                      className="px-6 py-3 border border-cyan-400 text-cyan-400 text-sm font-semibold rounded-lg transition-all duration-300 hover:bg-cyan-400 hover:text-black"
                    >
                      Get Quote
                    </button>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business with <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">2045 Technology</span>?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Join thousands of forward-thinking organizations already leveraging our revolutionary 
                services to drive innovation and competitive advantage.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <button
                  onClick={handleContactUs}
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:from-purple-500 hover:to-pink-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  <span className="relative z-10">Contact Us Today</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <a
                  href="tel:+13024640950"
                  className="group relative px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full text-lg transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/25"
                >
                  <span className="relative z-10">Call +1 302 464 0950</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-400 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
                  <p className="text-gray-400">kleber@ziontechgroup.com</p>
                  <p className="text-gray-400">+1 302 464 0950</p>
                </div>
                
                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
                  <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-pink-400 transition-colors duration-300">
                    ziontechgroup.com
                  </a>
                </div>
                
                <div className="group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-400">364 E Main St STE 1008</p>
                  <p className="text-gray-400">Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Revolutionary2045PricingShowcase;