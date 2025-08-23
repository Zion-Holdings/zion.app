import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Calculator, Brain, Atom, Rocket, Shield, Users, CheckCircle, ArrowRight, Star, Zap, Globe, Mail, Phone, MapPin } from 'lucide-react';

const Quote: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-indigo-900/20 to-purple-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm mb-6">
                <Calculator className="w-4 h-4" />
                Get Your Quote
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Get Your Quote
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Receive a personalized quote for our revolutionary AI consciousness, quantum computing, and space technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300">
                  Request Quote Now
                </button>
                <button className="px-8 py-4 border border-indigo-500/30 text-indigo-300 rounded-2xl hover:bg-indigo-500/10 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quote Calculator */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quote Calculator
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Get an instant estimate based on your specific requirements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Calculator Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="p-8 bg-black/40 border border-indigo-500/20 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Calculate Your Quote</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-semibold mb-3">Service Category</label>
                    <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20">
                      <option>Select Service Category</option>
                      <option>AI Consciousness Evolution</option>
                      <option>Quantum Computing Solutions</option>
                      <option>Space Technology Platform</option>
                      <option>Autonomous Systems</option>
                      <option>Enterprise Solutions</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-3">Company Size</label>
                    <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20">
                      <option>Select Company Size</option>
                      <option>Startup (1-50 employees)</option>
                      <option>SMB (51-500 employees)</option>
                      <option>Enterprise (500+ employees)</option>
                      <option>Government/Non-profit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-3">Implementation Timeline</label>
                    <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20">
                      <option>Select Timeline</option>
                      <option>Immediate (1-3 months)</option>
                      <option>Short-term (3-6 months)</option>
                      <option>Medium-term (6-12 months)</option>
                      <option>Long-term (12+ months)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-3">Additional Services</label>
                    <div className="space-y-3">
                      {[
                        "Custom Development",
                        "Training & Support",
                        "Integration Services",
                        "24/7 Monitoring",
                        "Compliance & Security"
                      ].map((service, index) => (
                        <label key={index} className="flex items-center gap-3">
                          <input type="checkbox" className="w-5 h-5 text-indigo-500 bg-gray-800 border-gray-600 rounded focus:ring-indigo-500" />
                          <span className="text-gray-300">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button className="w-full px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300">
                    Calculate Quote
                  </button>
                </div>
              </motion.div>

              {/* Quote Display */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="p-8 bg-black/40 border border-indigo-500/20 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Your Estimated Quote</h3>
                
                <div className="space-y-6">
                  <div className="text-center p-6 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl border border-indigo-500/30">
                    <div className="text-4xl font-bold text-indigo-400 mb-2">$25,000 - $75,000</div>
                    <div className="text-gray-400">Estimated Range</div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">What's Included:</h4>
                    <ul className="space-y-3">
                      {[
                        "Core platform implementation",
                        "Basic configuration & setup",
                        "Standard training materials",
                        "Email support",
                        "30-day warranty"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-indigo-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-gray-800/30 rounded-xl">
                    <div className="text-sm text-gray-400 mb-2">Note:</div>
                    <div className="text-sm text-gray-300">
                      This is an estimate based on standard configurations. Final pricing may vary based on specific requirements and customizations.
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Pricing Tiers
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Choose the plan that best fits your needs and budget
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$25,000",
                  description: "Perfect for small teams and startups",
                  features: [
                    "Basic platform access",
                    "Standard features",
                    "Email support",
                    "30-day warranty",
                    "Basic training"
                  ],
                  color: "from-blue-500 to-cyan-500",
                  popular: false
                },
                {
                  name: "Professional",
                  price: "$75,000",
                  description: "Ideal for growing businesses",
                  features: [
                    "Advanced platform features",
                    "Custom configurations",
                    "Priority support",
                    "90-day warranty",
                    "Comprehensive training",
                    "Integration assistance"
                  ],
                  color: "from-indigo-500 to-purple-500",
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "$150,000+",
                  description: "For large organizations",
                  features: [
                    "Full platform capabilities",
                    "Custom development",
                    "24/7 dedicated support",
                    "1-year warranty",
                    "Custom training",
                    "Full integration services",
                    "Compliance & security"
                  ],
                  color: "from-purple-500 to-pink-500",
                  popular: false
                }
              ].map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-8 bg-black/40 border rounded-2xl relative ${
                    tier.popular 
                      ? 'border-indigo-500/50 ring-2 ring-indigo-500/20' 
                      : 'border-indigo-500/20'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-indigo-400 mb-2">{tier.price}</div>
                    <p className="text-gray-400">{tier.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-indigo-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full px-6 py-3 bg-gradient-to-r ${tier.color} text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300`}>
                    Get Quote
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need a Custom Quote?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Contact our team for personalized pricing and solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Phone className="w-8 h-8 text-indigo-400" />,
                  title: "Call Us",
                  contact: "+1 302 464 0950",
                  description: "Speak directly with our experts"
                },
                {
                  icon: <Mail className="w-8 h-8 text-purple-400" />,
                  title: "Email Us",
                  contact: "kleber@ziontechgroup.com",
                  description: "Send us your requirements"
                },
                {
                  icon: <MapPin className="w-8 h-8 text-pink-400" />,
                  title: "Visit Us",
                  contact: "364 E Main St STE 1008, Middletown DE 19709",
                  description: "Schedule an in-person meeting"
                }
              ].map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-black/40 border border-indigo-500/20 rounded-2xl"
                >
                  <div className="mb-4">{method.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                  <div className="text-indigo-400 font-semibold mb-2">{method.contact}</div>
                  <p className="text-gray-400 text-sm">{method.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Request your personalized quote and begin your transformation journey
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 flex items-center gap-2">
                  Request Quote Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 border border-indigo-500/30 text-indigo-300 rounded-2xl hover:bg-indigo-500/10 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Quote;