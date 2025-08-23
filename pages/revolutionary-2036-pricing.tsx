import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, Brain, Globe, Rocket, DollarSign, Users, Clock, Award, ArrowRight } from 'lucide-react';
import { revolutionary2036FuturisticServices } from '../data/revolutionary-2036-futuristic-services';
import Layout from '../components/layout/Layout';

const Revolutionary2036Pricing: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small teams and startups',
      price: { monthly: '$999', yearly: '$9,999' },
      features: [
        'Access to 3 revolutionary services',
        'Basic AI consciousness features',
        'Standard holographic experiences',
        'Email support',
        'Setup assistance',
        '30-day trial'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and enterprises',
      price: { monthly: '$2,999', yearly: '$29,999' },
      features: [
        'Access to 7 revolutionary services',
        'Advanced AI consciousness features',
        'Premium holographic experiences',
        'Priority support',
        'Custom setup and training',
        '60-day trial',
        'API access',
        'Custom integrations'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations and government agencies',
      price: { monthly: '$5,999', yearly: '$59,999' },
      features: [
        'Access to all 10 revolutionary services',
        'Full AI consciousness capabilities',
        'Ultra-premium holographic experiences',
        '24/7 dedicated support',
        'Custom development',
        '90-day trial',
        'Full API access',
        'White-label solutions',
        'On-premise deployment',
        'Custom training programs'
      ],
      popular: false,
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const serviceCategories = [
    {
      name: 'Quantum Computing Services',
      services: revolutionary2036FuturisticServices.filter(s => 
        s.technology.includes('Quantum Computing') || s.category.includes('Quantum')
      ),
      icon: '⚛️',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Holographic Technology Services',
      services: revolutionary2036FuturisticServices.filter(s => 
        s.technology.includes('Holographic') || s.category.includes('Holographic')
      ),
      icon: '✨',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'AI & Consciousness Services',
      services: revolutionary2036FuturisticServices.filter(s => 
        s.technology.includes('AI') || s.category.includes('AI') || s.category.includes('Consciousness')
      ),
      icon: '🧠',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      name: 'Space Technology Services',
      services: revolutionary2036FuturisticServices.filter(s => 
        s.technology.includes('Space') || s.category.includes('Space')
      ),
      icon: '🚀',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                  Revolutionary 2036
                </span>
                <br />
                <span className="text-white">Pricing Plans</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Choose the perfect plan to access our revolutionary services that are 5-10 years ahead of the market
              </p>
            </motion.div>

            {/* Billing Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-4 mb-16"
            >
              <span className={`text-lg ${selectedPeriod === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setSelectedPeriod(selectedPeriod === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                  selectedPeriod === 'yearly' ? 'bg-purple-500' : 'bg-gray-600'
                }`}
              >
                <motion.div
                  className="w-6 h-6 bg-white rounded-full shadow-lg"
                  animate={{ x: selectedPeriod === 'yearly' ? 32 : 4 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
              <span className={`text-lg ${selectedPeriod === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                <span className="ml-2 text-sm text-green-400">Save 20%</span>
              </span>
            </motion.div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className={`relative rounded-2xl p-8 ${
                    tier.popular 
                      ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50' 
                      : 'bg-white/5 border border-white/10'
                  } backdrop-blur-sm`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 mb-6">{tier.description}</p>
                    <div className="text-4xl font-bold text-white mb-2">
                      {tier.price[selectedPeriod"
                      <span className="text-gray-400 text-lg">
                        {selectedPeriod === 'monthly' ? '/month' : '/year'}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 bg-gradient-to-r ${tier.color} shadow-lg`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-500/5 to-pink-500/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Service Categories & Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our revolutionary services organized by technology category with detailed pricing information
              </p>
            </motion.div>

            <div className="space-y-16">
              {serviceCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center mb-12">
                    <div className="text-5xl mb-4">{category.icon}</div>
                    <h3 className="text-3xl font-bold text-white mb-4">{category.name}</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-500"
                      >
                        {service.popular && (
                          <div className="absolute top-4 right-4 z-10">
                            <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full">
                              POPULAR
                            </span>
                          </div>
                        )}

                        <div className="p-6">
                          <div className="text-4xl mb-4">{service.icon}</div>
                          <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                            {service.description}
                          </p>

                          <div className="text-2xl font-bold text-white mb-4">
                            {service.price}
                            <span className="text-gray-400 text-lg">{service.period}</span>
                          </div>

                          <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
                            <div className="text-center">
                              <div className="text-gray-400">Trial</div>
                              <div className="text-white font-semibold">{service.trialDays} days</div>
                            </div>
                            <div className="text-center">
                              <div className="text-gray-400">Setup</div>
                              <div className="text-white font-semibold">{service.setupTime}</div>
                            </div>
                          </div>

                          <div className="mb-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30">
                              <Star className="w-3 h-3 text-purple-400" />
                              <span className="text-purple-400 text-xs font-semibold">{service.innovationLevel}</span>
                            </div>
                          </div>

                          <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 text-sm">
                            <span className="flex items-center justify-center gap-2">
                              Learn More
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          </button>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Why Choose Our Revolutionary Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our services provide unprecedented value with technology that's years ahead of the competition
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: Zap,
                  title: '5-10 Year Tech Advantage',
                  description: 'Our services use technology that won\'t be available to competitors for years',
                  color: 'from-yellow-500 to-orange-500'
                },
                {
                  icon: DollarSign,
                  title: '1000% Average ROI',
                  description: 'Customers see massive returns through breakthrough capabilities and efficiency gains',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  icon: Shield,
                  title: 'Patent-Pending Innovations',
                  description: 'Protected intellectual property ensures long-term competitive advantages',
                  color: 'from-blue-500 to-cyan-500'
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-12 border border-purple-400/20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact our team to discuss your needs and find the perfect revolutionary service package
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
                <div className="text-center md:text-left">
                  <div className="w-12 h-12 mx-auto md:mx-0 mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Contact Info</h3>
                  <p className="text-gray-300 text-sm">
                    Mobile: +1 302 464 0950<br />
                    Email: kleber@ziontechgroup.com
                  </p>
                </div>
                
                <div className="text-center md:text-left">
                  <div className="w-12 h-12 mx-auto md:mx-0 mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Response Time</h3>
                  <p className="text-gray-300 text-sm">
                    Within 24 hours<br />
                    Priority support available
                  </p>
                </div>
                
                <div className="text-center md:text-left">
                  <div className="w-12 h-12 mx-auto md:mx-0 mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Custom Solutions</h3>
                  <p className="text-gray-300 text-sm">
                    Tailored packages<br />
                    Enterprise discounts
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Schedule a Consultation
                </button>
                <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300">
                  Download Pricing Guide
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Revolutionary2036Pricing;