import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Check, Star, Phone, Mail, MapPin, ArrowRight,
  Brain, Building, Target, Zap, Shield, Globe, Grid
} from 'lucide-react';

// Import our new service data
import { innovativeMicroSaasExpansionV2 } from '../data/2025-innovative-micro-saas-expansion-v2';
import { innovativeITInfrastructureExpansion } from '../data/2025-innovative-it-infrastructure-expansion';
import { innovativeAIServicesExpansion } from '../data/2025-innovative-ai-services-expansion';

// Create unified services array
const allNewServices = [
  ...innovativeMicroSaasExpansionV2,
  ...innovativeITInfrastructureExpansion,
  ...innovativeAIServicesExpansion
];

const serviceCategories = [
  {
    id: 'micro-saas',
    name: 'Micro SAAS Solutions',
    icon: <Target className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    services: innovativeMicroSaasExpansionV2
  },
  {
    id: 'it-infrastructure',
    name: 'IT Infrastructure',
    icon: <Building className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-500',
    services: innovativeITInfrastructureExpansion
  },
  {
    id: 'ai-services',
    name: 'AI Services',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    services: innovativeAIServicesExpansion
  }
];

export default function ComprehensivePricingExpansion2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<any>(null);

  const filteredServices = selectedCategory === 'all' 
    ? allNewServices 
    : serviceCategories.find(cat => cat.id === selectedCategory)?.services || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Comprehensive Pricing Expansion - Zion Tech Group"
        description="Explore our latest innovative services pricing. Micro SAAS, IT infrastructure, and AI services with competitive pricing and exceptional value."
        keywords={["pricing", "micro SAAS pricing", "IT infrastructure pricing", "AI services pricing", "Zion Tech Group"]}
        image="/og-image.svg"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            2025 Comprehensive
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Pricing Expansion
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Discover competitive pricing for our latest innovative services. 
            Transform your business with cutting-edge solutions at exceptional value.
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
                <Phone className="w-6 h-6 text-blue-400 mb-2" />
                <p className="text-sm text-gray-300">Mobile</p>
                <p className="text-white font-semibold">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-6 h-6 text-purple-400 mb-2" />
                <p className="text-sm text-gray-300">Email</p>
                <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-pink-400 mb-2" />
                <p className="text-sm text-gray-300">Address</p>
                <p className="text-white font-semibold text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-gray-500 to-slate-500 text-white shadow-lg'
                  : 'bg-white/10 backdrop-blur-lg text-gray-300 hover:bg-white/20'
              }`}
            >
              <Grid className="w-5 h-5 inline mr-2" />
              All Services
            </button>
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                    : 'bg-white/10 backdrop-blur-lg text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Service Header */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mx-auto mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                  
                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold text-white">{service.price}</span>
                      <span className="text-gray-400 text-lg">{service.period}</span>
                    </div>
                    <p className="text-gray-400 text-sm">14-day free trial</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-center gap-1 mb-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{service.rating}</span>
                    <span className="text-gray-400 text-sm">({service.reviews} reviews)</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6 text-center">{service.description}</p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 5).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 5 && (
                      <div className="text-blue-400 text-sm text-center pt-2">
                        +{service.features.length - 5} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Market Info */}
                <div className="mb-6 p-3 bg-white/5 rounded-lg">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <p className="text-gray-400">Market Size:</p>
                      <p className="text-white font-medium">{service.marketSize}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Growth Rate:</p>
                      <p className="text-white font-medium">{service.growthRate}</p>
                    </div>
                  </div>
                </div>

                {/* ROI Benefits */}
                <div className="mb-6 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-green-400 text-sm font-medium mb-2">ROI Benefits:</p>
                  <p className="text-green-300 text-xs">{service.roi}</p>
                </div>

                {/* Setup Info */}
                <div className="mb-6 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <p className="text-gray-400">Setup Time:</p>
                      <p className="text-white font-medium">{service.setupTime}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Customers:</p>
                      <p className="text-white font-medium">{service.customers.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl text-center font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Pricing Inquiry for ${service.name}`}
                    className="w-full bg-white/10 backdrop-blur-lg border border-white/20 text-white px-6 py-3 rounded-xl text-center font-medium hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Get Quote
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Pricing Comparison by Category
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-4 px-4 text-white font-semibold">Service Category</th>
                    <th className="py-4 px-4 text-white font-semibold">Starting Price</th>
                    <th className="py-4 px-4 text-white font-semibold">Average Price</th>
                    <th className="py-4 px-4 text-white font-semibold">Premium Price</th>
                    <th className="py-4 px-4 text-white font-semibold">Value Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {serviceCategories.map((category, index) => {
                    const services = category.services;
                    const prices = services.map(s => parseInt(s.price.replace('$', '')));
                    const avgPrice = Math.round(prices.reduce((a, b) => a + b, 0) / prices.length);
                    const minPrice = Math.min(...prices);
                    const maxPrice = Math.max(...prices);
                    
                    return (
                      <tr key={category.id} className="border-b border-white/10">
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                              {category.icon}
                            </div>
                            <span className="text-white font-medium">{category.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-green-400 font-semibold">${minPrice}/month</td>
                        <td className="py-4 px-4 text-blue-400 font-semibold">${avgPrice}/month</td>
                        <td className="py-4 px-4 text-purple-400 font-semibold">${maxPrice}/month</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
                              />
                            ))}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-3xl p-12 border border-white/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a personalized consultation and discover how our innovative services 
              can transform your business at competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Pricing Consultation Request"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get Free Pricing Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call for Immediate Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}