import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, CheckCircle, ExternalLink, Phone, Mail, MapPin, 
  Globe as GlobeIcon, ArrowRight, Shield, Zap, Users, Clock,
  TrendingUp, BarChart3, Rocket, Brain, Atom, Cpu, Database
} from 'lucide-react';
import { zionTechServices } from '../../data/enhanced-zion-tech-services-2025';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', description: 'Complete portfolio of technology solutions' },
    { id: 'AI & Machine Learning', name: 'AI & ML', icon: '🧠', description: 'Advanced artificial intelligence and machine learning platforms' },
    { id: 'Quantum Computing & AI', name: 'Quantum AI', icon: '⚛️', description: 'Quantum computing integration with AI capabilities' },
    { id: 'Cybersecurity', name: 'Security', icon: '🛡️', description: 'Next-generation cybersecurity and threat protection' },
    { id: 'Space Technology', name: 'Space Tech', icon: '🚀', description: 'Space resource intelligence and optimization' },
    { id: 'DevOps & Infrastructure', name: 'DevOps', icon: '⚙️', description: 'Autonomous DevOps and infrastructure management' },
    { id: 'Edge Computing', name: 'Edge Computing', icon: '🌐', description: 'Edge computing orchestration and optimization' },
    { id: 'Healthcare AI', name: 'Healthcare', icon: '🏥', description: 'AI-powered healthcare and biomedical research' },
    { id: 'Blockchain & DeFi', name: 'Blockchain', icon: '🔗', description: 'Blockchain and DeFi optimization platforms' },
    { id: 'Neural Technology', name: 'Neural Tech', icon: '🧬', description: 'Brain-computer interface and neural technology' },
    { id: 'Autonomous Vehicles', name: 'AV Tech', icon: '🚗', description: 'Autonomous vehicle simulation and testing' },
    { id: 'Customer Experience', name: 'CX Platform', icon: '👥', description: 'AI-powered customer experience optimization' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? zionTechServices 
    : zionTechServices.filter(service => service.category === selectedCategory);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const getCategoryStats = (categoryId: string) => {
    if (categoryId === 'all') {
      return {
        totalServices: zionTechServices.length,
        totalCustomers: zionTechServices.reduce((sum, service) => sum + service.customers, 0),
        avgRating: (zionTechServices.reduce((sum, service) => sum + service.rating, 0) / zionTechServices.length).toFixed(1)
      };
    }
    const categoryServices = zionTechServices.filter(service => service.category === categoryId);
    return {
      totalServices: categoryServices.length,
      totalCustomers: categoryServices.reduce((sum, service) => sum + service.customers, 0),
      avgRating: (categoryServices.reduce((sum, service) => sum + service.rating, 0) / categoryServices.length).toFixed(1)
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Discover our comprehensive portfolio of cutting-edge technology solutions designed to transform your business and drive innovation.
            </p>
            
            {/* Category Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl p-4"
              >
                <div className="text-2xl font-bold text-white">{getCategoryStats(selectedCategory).totalServices}</div>
                <div className="text-white/70 text-sm">Total Services</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-4"
              >
                <div className="text-2xl font-bold text-white">{getCategoryStats(selectedCategory).totalCustomers.toLocaleString()}</div>
                <div className="text-white/70 text-sm">Active Customers</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-xl p-4"
              >
                <div className="text-2xl font-bold text-white">{getCategoryStats(selectedCategory).avgRating}</div>
                <div className="text-white/70 text-sm">Average Rating</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-6 backdrop-blur-xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-600/20 rounded-full">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Ready to Get Started?</p>
                  <p className="text-white/70 text-sm">Contact us for consultations, demos, and custom implementations</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 text-sm">
                <div className="flex items-center gap-2 text-white/80">
                  <Phone className="w-4 h-4" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Mail className="w-4 h-4" />
                  <span>{contactInfo.email}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                  selectedCategory === category.id
                    ? 'border-cyan-400/50 bg-gradient-to-r from-cyan-600/20 to-blue-600/20'
                    : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{category.icon}</span>
                  <span className="font-semibold text-white">{category.name}</span>
                </div>
                <p className="text-white/70 text-sm">{category.description}</p>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatePresence mode="wait">
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
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Popular
                      </div>
                    </div>
                  )}

                  {/* Service Header */}
                  <div className="p-6 border-b border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{service.price}</div>
                        <div className="text-white/60 text-sm">{service.period}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-white/70 text-sm mb-4">{service.tagline}</p>
                    
                    {/* Rating and Stats */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(service.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-white/20'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-white/60 text-sm">{service.rating}</span>
                      <span className="text-white/40 text-sm">({service.reviews} reviews)</span>
                      <span className="text-white/40 text-sm">•</span>
                      <span className="text-white/40 text-sm">{service.customers} customers</span>
                    </div>

                    {/* Trial and Setup */}
                    <div className="flex items-center gap-4 text-sm text-white/60">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{service.trialDays} days free trial</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Zap className="w-4 h-4" />
                        <span>Setup: {service.setupTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="p-6">
                    <p className="text-white/80 text-sm mb-6">{service.description}</p>
                    
                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold text-sm mb-3">Key Features:</h4>
                      <div className="space-y-2">
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-white/70 text-xs">
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technology and Integrations */}
                    <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-white/60">Technology Stack</div>
                        <div className="text-white font-medium line-clamp-2">{service.technology.join(', ')}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-white/60">Integrations</div>
                        <div className="text-white font-medium line-clamp-2">{service.integrations.join(', ')}</div>
                      </div>
                    </div>

                    {/* Market Info */}
                    <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-white/60">Market Size</div>
                        <div className="text-white font-medium">{service.marketSize}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <div className="text-white/60">Growth Rate</div>
                        <div className="text-white font-medium">{service.growthRate}</div>
                      </div>
                    </div>

                    {/* ROI */}
                    <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-3 mb-6">
                      <div className="text-green-400 font-semibold text-sm">ROI Impact</div>
                      <div className="text-white/80 text-xs">{service.roi}</div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold text-sm mb-3">Key Benefits:</h4>
                      <div className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-white/70 text-xs">
                            <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Capabilities */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold text-sm mb-3">Capabilities:</h4>
                      <div className="space-y-2">
                        {service.capabilities.map((capability, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-white/70 text-xs">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
                            <span>{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Market Advantage */}
                    <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-lg p-3 mb-6">
                      <div className="text-blue-400 font-semibold text-sm">Market Advantage</div>
                      <div className="text-white/80 text-xs">{service.marketAdvantage}</div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-sm font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
                      >
                        Learn More
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={`mailto:${contactInfo.email}?subject=Service Inquiry for ${service.name}`}
                        className="bg-white/10 hover:bg-white/20 text-white text-sm font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center"
                      >
                        Contact
                      </a>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Enterprise Solutions CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-xl text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Need Custom Enterprise Solutions?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              We specialize in custom enterprise implementations with dedicated support, 
              custom integrations, and on-premise deployment options tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${contactInfo.email}?subject=Enterprise Solution Inquiry`}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Sales
              </a>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Ready to transform your business with cutting-edge technology? Contact us today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl"
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 mb-4">
                <Phone className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-white/70 mb-4">{contactInfo.mobile}</p>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                Call Now
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl"
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 mb-4">
                <Mail className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-white/70 mb-4">{contactInfo.email}</p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                Send Email
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl"
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 mb-4">
                <GlobeIcon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Website</h3>
              <p className="text-white/70 mb-4">{contactInfo.website}</p>
              <a
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                Visit Site
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

