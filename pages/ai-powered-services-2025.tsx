import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, Zap, TrendingUp, Heart, Star, Check, ArrowRight,
  Brain, Rocket, Target, Users, Clock, DollarSign, Award
} from 'lucide-react';
import { innovative2025AIPoweredServices } from '../data/innovative-2025-ai-powered-services';

const AIPoweredServices2025 = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: Brain },
    { id: 'Cybersecurity & AI', name: 'Cybersecurity', icon: Shield },
    { id: 'DevOps & Automation', name: 'DevOps', icon: Zap },
    { id: 'Financial Technology & AI', name: 'FinTech', icon: TrendingUp },
    { id: 'Healthcare & AI', name: 'Healthcare', icon: Heart }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? innovative2025AIPoweredServices
    : innovative2025AIPoweredServices.filter(service => service.category === selectedCategory);

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(selectedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="AI-Powered Services 2025 | Zion Tech Group"
        description="Discover our cutting-edge AI-powered services including cybersecurity, DevOps automation, financial analytics, and healthcare solutions. Transform your business with intelligent automation."
        keywords={["AI services", "cybersecurity", "DevOps automation", "financial analytics", "healthcare AI", "machine learning", "artificial intelligence"]}
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
              AI-Powered Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Revolution 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From cybersecurity to healthcare, our AI-powered services deliver unprecedented 
              efficiency, accuracy, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Explore Services
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl">{service.icon}</div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-6">{service.tagline}</p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span>{service.rating}/5 ({service.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Users className="w-5 h-5 text-blue-500" />
                    <span>{service.customers}+ customers</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="w-5 h-5 text-green-500" />
                    <span>Setup: {service.pricing.setupTime}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Pricing</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-400">Starter</div>
                      <div className="text-xl font-bold text-white">${service.pricing.starter}</div>
                      <div className="text-xs text-gray-500">/month</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-400">Professional</div>
                      <div className="text-xl font-bold text-white">${service.pricing.professional}</div>
                      <div className="text-xs text-gray-500">/month</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-400">Enterprise</div>
                      <div className="text-xl font-bold text-white">${service.pricing.enterprise}</div>
                      <div className="text-xs text-gray-500">/month</div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleServiceClick(service.id)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 mb-4"
                >
                  {selectedService === service.id ? 'Hide Details' : 'View Details'}
                </button>

                <AnimatePresence>
                  {selectedService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/20 pt-6 space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                          <ul className="space-y-2">
                            {service.features.slice(0, 5).map((feature, index) => (
                              <li key={index} className="flex items-center gap-2 text-gray-300">
                                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                          <ul className="space-y-2">
                            {service.benefits.slice(0, 3).map((benefit, index) => (
                              <li key={index} className="flex items-center gap-2 text-gray-300">
                                <Award className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                                <span className="text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">ROI</h4>
                          <p className="text-gray-300 text-sm">{service.roi}</p>
                        </div>

                        <div className="pt-4">
                          <a
                            href={service.link}
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
                          >
                            Learn More <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with deep industry expertise to deliver 
              solutions that transform businesses and drive measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI-First Approach</h3>
              <p className="text-gray-300">Built from the ground up with artificial intelligence at the core</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Rapid Implementation</h3>
              <p className="text-gray-300">Get up and running in days, not months with our streamlined setup</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300">Track record of delivering 200-400% ROI for our customers</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">SOC 2 Type II, ISO 27001, and industry-leading compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI-powered services can drive innovation, efficiency, 
            and growth for your organization.
          </p>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300 text-sm">Round-the-clock technical support and monitoring</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-green-600 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Dedicated Team</h3>
                <p className="text-gray-300 text-sm">Expert engineers and consultants assigned to your project</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Guaranteed Results</h3>
                <p className="text-gray-300 text-sm">Performance guarantees and ROI commitments</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <DollarSign className="w-5 h-5 text-green-500" />
                <span>Free consultation and demo</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <Check className="w-5 h-5 text-blue-500" />
                <span>30-day free trial on all services</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>No setup fees or hidden costs</span>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-2">Contact Information</h3>
                <div className="space-y-2 text-gray-300">
                  <p>📱 Mobile: +1 302 464 0950</p>
                  <p>✉️ Email: kleber@ziontechgroup.com</p>
                  <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Call Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Zion Tech Group. All rights reserved. | 
            <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300 ml-2">
              Visit our website
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AIPoweredServices2025;