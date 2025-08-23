import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Globe, Cpu, Database, 
  TrendingUp, Users, Star, Zap, Lock, Target,
  ArrowRight, Phone, Mail, MapPin, ExternalLink
} from 'lucide-react';
import { innovative2025AIServices } from '../data/innovative-2025-ai-services-batch';
import { innovative2025ITServices } from '../data/innovative-2025-it-services-batch';
import { innovative2025MicroSaasServices } from '../data/innovative-2025-micro-saas-batch';

const Innovative2025ServicesShowcase: React.FC = () => {
  const allServices = [
    ...innovative2025AIServices,
    ...innovative2025ITServices,
    ...innovative2025MicroSaasServices
  ];

  const categories = [
    { name: 'AI & Machine Learning', icon: Brain, color: 'from-purple-600 to-pink-700' },
    { name: 'IT & Infrastructure', icon: Cpu, color: 'from-blue-600 to-cyan-700' },
    { name: 'Micro SAAS', icon: Rocket, color: 'from-green-600 to-emerald-700' },
    { name: 'Quantum Computing', icon: Zap, color: 'from-indigo-600 to-purple-700' },
    { name: 'Cybersecurity', icon: Shield, color: 'from-red-600 to-orange-700' },
    { name: 'Edge Computing', icon: Globe, color: 'from-teal-600 to-green-700' }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <Layout>
      <SEO 
        title="Innovative 2025 Services Showcase | Zion Tech Group"
        description="Discover our cutting-edge 2025 services including AI platforms, quantum computing, autonomous systems, and innovative micro SAAS solutions. Transform your business with next-generation technology."
        keywords={[
          'AI services', 'quantum computing', 'autonomous systems', 'micro SAAS', 
          'IT services', '2025 technology', 'innovation', 'Zion Tech Group'
        ]}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Futuristic Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
          
          {/* Animated Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        </div>

        <div className="text-center max-w-6xl mx-auto relative z-10">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Innovative 2025
            </span>
            <br />
            <span className="text-white">Services Showcase</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the future of technology with our revolutionary AI platforms, quantum computing solutions, 
            autonomous systems, and innovative micro SAAS services that are transforming industries worldwide.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="#services"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              Explore Services
            </a>
            <a 
              href={`tel:${contactInfo.mobile}`}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2 inline" />
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Bar */}
      <section className="py-6 bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>24/7 Support Available</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary 2025 Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From AI-powered autonomous systems to quantum computing solutions, 
              our services represent the cutting edge of technological innovation
            </p>
          </motion.div>

          {/* Category Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-10 border border-white/10 group-hover:bg-opacity-20 transition-all duration-300 text-center`}>
                  <category.icon className="w-8 h-8 mx-auto mb-3 text-white" />
                  <h3 className="text-sm font-medium text-white">{category.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative p-6">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{service.icon}</span>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{service.name}</h3>
                        <p className="text-sm text-gray-400">{service.tagline}</p>
                      </div>
                    </div>
                    {service.popular && (
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full">
                        POPULAR
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    <span className="text-gray-400">{service.period}</span>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Market Info */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                    <div>
                      <span className="text-gray-400">Market Size:</span>
                      <p className="text-white font-medium">{service.marketSize}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Growth Rate:</span>
                      <p className="text-white font-medium">{service.growthRate}</p>
                    </div>
                  </div>

                  {/* ROI */}
                  <div className="mb-4 p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
                    <span className="text-xs text-gray-400">ROI Impact:</span>
                    <p className="text-sm text-green-400 font-medium">{service.roi}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={service.link}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center"
                    >
                      Learn More
                    </a>
                    <a
                      href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                      className="px-4 py-2 border border-cyan-400 text-cyan-400 text-sm font-medium rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>Contact: {contactInfo.mobile}</span>
                      <a 
                        href={contactInfo.website}
                        className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
                      >
                        Visit Website
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-400/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already leveraging our cutting-edge 2025 technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2 inline" />
                Call Now
              </a>
              <a
                href={`mailto:${contactInfo.email}?subject=Business Transformation Inquiry`}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2 inline" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Innovative2025ServicesShowcase;