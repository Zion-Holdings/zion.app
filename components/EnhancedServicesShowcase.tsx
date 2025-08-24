import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, Clock, Users, TrendingUp, CheckCircle, ExternalLink, 
  ChevronRight, Shield, Zap, Globe, Rocket, Brain, Atom
} from 'lucide-react';
import { enhancedMicroSaasServices } from '../data/enhanced-micro-saas-services-2025';

export default function EnhancedServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀' },
    { id: 'AI & Machine Learning', name: 'AI & ML', icon: '🧠' },
    { id: 'Quantum Computing & AI', name: 'Quantum AI', icon: '⚛️' },
    { id: 'Cybersecurity', name: 'Security', icon: '🛡️' },
    { id: 'Space Technology', name: 'Space Tech', icon: '🚀' },
    { id: 'DevOps & Infrastructure', name: 'DevOps', icon: '⚙️' },
    { id: 'Edge Computing', name: 'Edge Computing', icon: '🌐' },
    { id: 'Healthcare AI', name: 'Healthcare', icon: '🏥' },
    { id: 'Blockchain & DeFi', name: 'Blockchain', icon: '🔗' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? enhancedMicroSaasServices 
    : enhancedMicroSaasServices.filter(service => service.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData?.icon || '🚀';
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Revolutionary Micro SAAS Services
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Discover our cutting-edge micro SAAS solutions that are transforming industries and driving the future of technology
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 text-white/60">
            <Shield className="w-5 h-5" />
            <span>Enterprise-grade security</span>
            <span>•</span>
            <Zap className="w-5 h-5" />
            <span>AI-powered optimization</span>
            <span>•</span>
            <Globe className="w-5 h-5" />
            <span>Global deployment</span>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Popular
                    </div>
                  </div>
                )}

                {/* Service Content */}
                <div className="p-8">
                  {/* Icon and Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 flex items-center justify-center text-2xl`}>
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-white/60 mb-1">{getCategoryIcon(service.category)}</div>
                      <div className="text-xs text-white/40">{service.category}</div>
                    </div>
                  </div>

                  {/* Service Info */}
                  <h3 className="text-xl font-bold mb-3 text-white">{service.name}</h3>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">{service.tagline}</p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-bold text-white">{service.price}</span>
                      <span className="text-white/60">{service.period}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-white/50">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {service.setupTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {service.customers} customers
                      </span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                    <div className="space-y-2">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                          <TrendingUp className="w-3 h-3 text-blue-400" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ROI and Market Info */}
                  <div className="mb-6 p-4 bg-white/5 rounded-lg">
                    <div className="text-xs text-white/60 mb-2">ROI & Market Position</div>
                    <div className="text-xs text-white/80 leading-relaxed">{service.roi}</div>
                    <div className="mt-2 text-xs text-white/60">
                      Market: {service.marketSize} • Growth: {service.growthRate}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedService(service.id)}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                    </button>
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-white/20 hover:border-cyan-400/30 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 hover:bg-white/5"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit
                    </a>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="text-xs text-white/50 mb-2">Ready to get started?</div>
                    <div className="text-xs text-white/70">
                      Contact: {service.contactInfo.email}
                    </div>
                    <div className="text-xs text-white/70">
                      Phone: {service.contactInfo.mobile}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-cyan-400/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-white/70 mb-8">
              Join hundreds of companies already using Zion Tech Group&apos;s revolutionary micro SAAS services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-white/60">
              <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 rounded-2xl border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const service = enhancedMicroSaasServices.find(s => s.id === selectedService);
                if (!service) return null;

                return (
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} p-5 flex items-center justify-center text-4xl`}>
                          {service.icon}
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-white mb-2">{service.name}</h2>
                          <p className="text-xl text-white/70">{service.tagline}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedService(null)}
                        className="text-white/60 hover:text-white text-2xl"
                      >
                        ×
                      </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-4">Service Overview</h3>
                        <p className="text-white/80 leading-relaxed mb-6">{service.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                          <div className="space-y-2">
                            {service.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-white/70">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Capabilities</h4>
                          <div className="space-y-2">
                            {service.capabilities.map((capability, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-white/70">
                                <Zap className="w-4 h-4 text-blue-400" />
                                {capability}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="bg-white/5 rounded-lg p-6 mb-6">
                          <h4 className="text-lg font-semibold text-white mb-4">Pricing & Details</h4>
                          <div className="text-3xl font-bold text-white mb-2">{service.price}{service.period}</div>
                          <div className="space-y-3 text-sm text-white/70">
                            <div className="flex justify-between">
                              <span>Trial Period:</span>
                              <span>{service.trialDays} days</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Setup Time:</span>
                              <span>{service.setupTime}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Current Customers:</span>
                              <span>{service.customers}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Rating:</span>
                              <span className="flex items-center gap-1">
                                {service.rating}/5 <Star className="w-4 h-4 text-yellow-400" />
                                ({service.reviews} reviews)
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/5 rounded-lg p-6 mb-6">
                          <h4 className="text-lg font-semibold text-white mb-4">Market Information</h4>
                          <div className="space-y-3 text-sm text-white/70">
                            <div>
                              <span className="font-medium">Market Size:</span> {service.marketSize}
                            </div>
                            <div>
                              <span className="font-medium">Growth Rate:</span> {service.growthRate}
                            </div>
                            <div>
                              <span className="font-medium">ROI:</span> {service.roi}
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/5 rounded-lg p-6">
                          <h4 className="text-lg font-semibold text-white mb-4">Contact Information</h4>
                          <div className="space-y-3 text-sm text-white/70">
                            <div>
                              <span className="font-medium">Email:</span> {service.contactInfo.email}
                            </div>
                            <div>
                              <span className="font-medium">Phone:</span> {service.contactInfo.mobile}
                            </div>
                            <div>
                              <span className="font-medium">Address:</span> {service.contactInfo.address}
                            </div>
                            <div>
                              <span className="font-medium">Website:</span> {service.contactInfo.website}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex gap-4">
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105"
                      >
                        Visit Service Page
                      </a>
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                        className="flex-1 px-6 py-3 border border-white/20 hover:border-cyan-400/30 rounded-lg font-semibold text-center transition-all duration-300 hover:bg-white/5"
                      >
                        Contact Sales
                      </a>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}