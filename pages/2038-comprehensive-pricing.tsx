import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Check, Star, Phone, Mail, MapPin, Globe,
  Brain, Shield, Target, Rocket, Heart,
  Building, Grid
} from 'lucide-react';

// Import our new 2038 services
import { innovative2038CuttingEdgeServices } from '../data/innovative-2038-cutting-edge-services';
import { innovative2038ITMicroSaasServices } from '../data/innovative-2038-it-micro-saas-services';

// Create unified services array
const all2038Services = [
  ...innovative2038CuttingEdgeServices,
  ...innovative2038ITMicroSaasServices
];



const categories = [
  {
    id: 'ai-quantum',
    name: 'AI & Quantum',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
    description: 'Revolutionary AI and quantum computing solutions'
  },
  {
    id: 'space-tech',
    name: 'Space Technology',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-pink-500 to-rose-500',
    description: 'Next-generation space exploration and mining'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-red-500 to-orange-500',
    description: 'Quantum-powered security and threat intelligence'
  },
  {
    id: 'healthcare',
    name: 'Healthcare AI',
    icon: <Heart className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500',
    description: 'Autonomous healthcare and medical AI'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: <Target className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    description: 'Intelligent business automation solutions'
  },
  {
    id: 'it-infrastructure',
    name: 'IT Infrastructure',
    icon: <Building className="w-6 h-6" />,
    color: 'from-blue-500 to-purple-500',
    description: 'Advanced IT and DevOps solutions'
  },
  {
    id: 'climate-tech',
    name: 'Climate Technology',
    icon: <Globe className="w-6 h-6" />,
    color: 'from-teal-500 to-green-500',
    description: 'AI-powered climate prediction and analysis'
  }
];

export default function Comprehensive2038Pricing() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = selectedCategory === 'all' 
    ? all2038Services 
    : all2038Services.filter(service => 
        service.category.toLowerCase().includes(
          categories.find(cat => cat.id === selectedCategory)?.name.toLowerCase() || ''
        )
      );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        data={{
          pageTitle: "2038 Comprehensive Pricing | Zion Tech Group",
          pageDescription: "Complete pricing for our revolutionary 2038 services. AI-powered solutions, quantum computing, space technology, and intelligent micro SAAS platforms with transparent pricing.",
          pageKeywords: ["2038 pricing", "AI services pricing", "quantum computing pricing", "space technology pricing", "micro SAAS pricing"]
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              2038
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Comprehensive
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Transparent pricing for our cutting-edge 2038 services. Every solution is designed to deliver exceptional ROI 
            and transform your business with next-generation technology.
          </motion.p>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-6 h-6 text-cyan-400 mb-2" />
                <p className="text-white font-semibold">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-6 h-6 text-purple-400 mb-2" />
                <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-emerald-400 mb-2" />
                <p className="text-white font-semibold text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Pricing</span> for Every Need
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our pricing is designed to provide maximum value while ensuring accessibility for businesses of all sizes. 
              Every service includes comprehensive features and exceptional support.
            </p>
          </motion.div>

          {/* Pricing Statistics */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">${Math.min(...all2038Services.map(s => parseInt(s.price.replace(/[^0-9]/g, ''))))}</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">${Math.max(...all2038Services.map(s => parseInt(s.price.replace(/[^0-9]/g, ''))))}</div>
              <div className="text-gray-300">Premium Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">${Math.round(all2038Services.reduce((sum, s) => sum + parseInt(s.price.replace(/[^0-9]/g, '')), 0) / all2038Services.length)}</div>
              <div className="text-gray-300">Average Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
              <div className="text-gray-300">Transparent Pricing</div>
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mb-12"
          >
            <div className="flex gap-2 overflow-x-auto pb-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-gray-500 to-slate-500 text-white shadow-lg'
                    : 'bg-white/20 text-gray-300 hover:bg-white/30'
                }`}
              >
                <Grid className="w-5 h-5" />
                All Services
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-white/20 text-gray-300 hover:bg-white/30'
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Services Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                {/* Service Header */}
                <div className="p-6 border-b border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-gray-400">{service.period}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm">({service.reviews} reviews)</span>
                  </div>
                </div>

                {/* Service Features */}
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                  <ul className="space-y-3 mb-6">
                    {service.features.slice(0, 6).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {service.features.length > 6 && (
                    <p className="text-gray-400 text-sm text-center">
                      +{service.features.length - 6} more features
                    </p>
                  )}
                </div>

                {/* Service Details */}
                <div className="p-6 bg-white/5">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-gray-400 text-sm">Setup Time</p>
                      <p className="text-white font-semibold">{service.setupTime}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Trial Period</p>
                      <p className="text-white font-semibold">{service.trialDays} days</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Category</p>
                      <p className="text-white font-semibold">{service.category}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Customers</p>
                      <p className="text-white font-semibold">{service.customers}+</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-400 text-sm mb-2">Market Position</p>
                    <p className="text-white text-sm">{service.marketPosition}</p>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-400 text-sm mb-2">Expected ROI</p>
                    <p className="text-emerald-400 font-semibold">{service.roi}</p>
                  </div>
                  
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 text-white py-3 px-6 rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all duration-200 flex items-center justify-center gap-2 font-semibold"
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Pricing</span> Tiers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the pricing tier that best fits your business needs. All tiers include comprehensive features, 
              exceptional support, and guaranteed ROI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Tier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2">$2,999</div>
                <div className="text-gray-400">per month</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">Core features</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">Basic support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">Standard setup</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">Email support</span>
                </li>
              </ul>
              
              <button className="w-full bg-white/20 text-white py-3 px-6 rounded-xl hover:bg-white/30 transition-all duration-200 font-semibold">
                Choose Starter
              </button>
            </motion.div>

            {/* Professional Tier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-8 relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-white mb-2">$9,999</div>
                <div className="text-cyan-100">per month</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span className="text-white">All Starter features</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span className="text-white">Advanced features</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span className="text-white">Priority support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span className="text-white">Custom setup</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span className="text-white">Phone support</span>
                </li>
              </ul>
              
              <button className="w-full bg-white text-cyan-600 py-3 px-6 rounded-xl hover:bg-gray-100 transition-all duration-200 font-semibold">
                Choose Professional
              </button>
            </motion.div>

            {/* Enterprise Tier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-purple-400 mb-2">$25,999</div>
                <div className="text-gray-400">per month</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">All Professional features</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">Custom development</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">Dedicated support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">SLA guarantee</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">24/7 support</span>
                </li>
              </ul>
              
              <button className="w-full bg-white/20 text-white py-3 px-6 rounded-xl hover:bg-white/30 transition-all duration-200 font-semibold">
                Choose Enterprise
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Contact us today to discuss your needs and get a personalized quote for our revolutionary 2038 services.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Call Us</h3>
              <p className="text-cyan-400 font-semibold">+1 302 464 0950</p>
              <p className="text-gray-400 text-sm mt-2">Available 24/7</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Email Us</h3>
              <p className="text-purple-400 font-semibold">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm mt-2">Response within 2 hours</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <Globe className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Visit Us</h3>
              <p className="text-emerald-400 font-semibold text-sm">ziontechgroup.com</p>
              <p className="text-gray-400 text-sm mt-2">Learn more online</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Address</h3>
              <p className="text-gray-300 mb-4">
                364 E Main St STE 1008<br />
                Middletown DE 19709<br />
                United States
              </p>
              <p className="text-gray-400 text-sm">
                Visit our office for in-person consultations and demonstrations of our cutting-edge 2038 services.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}