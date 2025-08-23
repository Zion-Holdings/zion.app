import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Check, Star, Users, Zap, Shield, Brain, Rocket,
  ArrowRight, TrendingUp, Globe, Lock, BarChart3
} from 'lucide-react';

// Import our new innovative breakthrough services
import { innovativeMicroSaasBreakthroughs2025 } from '../data/2025-innovative-micro-saas-breakthroughs';
import { innovativeITInfrastructureBreakthroughs2025 } from '../data/2025-innovative-it-infrastructure-breakthroughs';
import { innovativeAIBreakthroughs2025 } from '../data/2025-innovative-ai-breakthroughs';

const InnovativeBreakthroughPricing2025: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allServices = [
    ...innovativeMicroSaasBreakthroughs2025,
    ...innovativeITInfrastructureBreakthroughs2025,
    ...innovativeAIBreakthroughs2025
  ];

  const categories = ['all', ...new Set(allServices.map(service => service.category))];

  const filteredServices = allServices.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const getDiscountedPrice = (price: string) => {
    const numericPrice = parseInt(price.replace(/[^0-9]/g, ''));
    if (selectedPeriod === 'yearly') {
      return `$${Math.round(numericPrice * 10 * 0.8)}`; // 20% discount for yearly
    }
    return price;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Innovative Breakthrough Services Pricing | Zion Tech Group"
        description="Comprehensive pricing for revolutionary micro SAAS, IT infrastructure, and AI services. Competitive pricing with proven ROI and market-leading features."
        keywords={["innovative services pricing", "breakthrough technology pricing", "micro SAAS pricing", "AI services pricing", "IT infrastructure pricing"]}
        ogImage="/og-innovative-breakthrough-pricing.jpg"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Innovative Breakthrough Services Pricing
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent, competitive pricing for revolutionary services that transform industries. 
              Choose the plan that fits your business needs and start your transformation journey.
            </p>
            
            {/* Pricing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-lg ${selectedPeriod === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setSelectedPeriod(selectedPeriod === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative w-16 h-8 rounded-full transition-colors duration-200 ${
                  selectedPeriod === 'yearly' ? 'bg-purple-600' : 'bg-gray-600'
                }`}
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-200 ${
                  selectedPeriod === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                }`} />
              </button>
              <span className={`text-lg ${selectedPeriod === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                <span className="ml-2 text-sm text-green-400">Save 20%</span>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-yellow-400">
                <Star className="w-5 h-5 mr-2" />
                <span className="text-white">15+ Breakthrough Services</span>
              </div>
              <div className="flex items-center text-green-400">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span className="text-white">300%+ Average ROI</span>
              </div>
              <div className="flex items-center text-blue-400">
                <Shield className="w-5 h-5 mr-2" />
                <span className="text-white">Enterprise Security</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                {/* Service Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`text-4xl ${service.color.includes('from-') ? 'bg-gradient-to-r ' + service.color + ' bg-clip-text text-transparent' : ''}`}>
                      {service.icon}
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                        MOST POPULAR
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                  
                  {/* Pricing */}
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-white">
                      {getDiscountedPrice(service.price)}
                      <span className="text-gray-400 text-sm font-normal">{service.period}</span>
                    </div>
                    {selectedPeriod === 'yearly' && (
                      <p className="text-green-400 text-sm mt-1">
                        Save 20% with yearly billing
                      </p>
                    )}
                  </div>

                  {/* Rating and Customers */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 mr-1" />
                      <span className="text-white">{service.rating}</span>
                      <span className="text-gray-400 ml-1">({service.reviews})</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{service.customers} customers</span>
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      {service.features.slice(0, 8).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <Check className="w-3 h-3 mr-2 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Brain className="w-4 h-4 mr-2 text-purple-400" />
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technology.slice(0, 4).map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-white/10 text-xs text-gray-300 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Market Position */}
                  <div className="mb-6 p-3 bg-white/5 rounded-lg">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <BarChart3 className="w-4 h-4 mr-2 text-blue-400" />
                      Market Position
                    </h4>
                    <p className="text-sm text-gray-300">{service.marketPosition}</p>
                  </div>

                  {/* ROI & Benefits */}
                  <div className="mb-6 p-3 bg-white/5 rounded-lg">
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
                      ROI & Benefits
                    </h4>
                    <p className="text-sm text-gray-300">{service.roi}</p>
                  </div>

                  {/* Trial & Setup */}
                  <div className="mb-6 p-3 bg-white/5 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Trial:</span>
                        <span className="text-white ml-2">{service.trialDays} days</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Setup:</span>
                        <span className="text-white ml-2">{service.setupTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <a
                      href={service.link}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Pricing Inquiry for ${service.name}`}
                      className="w-full border border-white/30 text-white py-3 px-6 rounded-xl font-semibold hover:bg-white/10 transition-all duration-200 text-center block"
                    >
                      Contact Sales
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-300">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Enterprise Solutions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We offer custom enterprise packages with dedicated support, custom integrations, 
              and tailored solutions for large organizations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-4">🏢</div>
                <h3 className="text-white font-semibold mb-2">Custom Solutions</h3>
                <p className="text-gray-300">Tailored to your specific business needs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-4">👥</div>
                <h3 className="text-white font-semibold mb-2">Dedicated Support</h3>
                <p className="text-gray-300">24/7 priority support and account management</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-4">🔧</div>
                <h3 className="text-white font-semibold mb-2">Custom Integrations</h3>
                <p className="text-gray-300">Seamless integration with your existing systems</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Enterprise Solutions Inquiry"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 text-lg"
              >
                Contact Enterprise Sales
              </a>
              <a
                href="https://ziontechgroup.com"
                className="border border-white/30 text-white py-4 px-8 rounded-xl font-semibold hover:bg-white/10 transition-all duration-200 text-lg"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team is ready to help you choose the right plan and get you started 
              with your transformation journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="text-white font-semibold mb-2">Call Us</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-4">✉️</div>
                <h3 className="text-white font-semibold mb-2">Email Us</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-4">📍</div>
                <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Service Consultation"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 text-lg"
              >
                Get Free Consultation
              </a>
              <a
                href="https://ziontechgroup.com"
                className="border border-white/30 text-white py-4 px-8 rounded-xl font-semibold hover:bg-white/10 transition-all duration-200 text-lg"
              >
                Visit Our Website
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeBreakthroughPricing2025;