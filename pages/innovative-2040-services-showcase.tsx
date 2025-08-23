import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Check, Star, ArrowRight, Brain, Cpu, Shield, 
  Rocket, Zap, Globe, Lock, Database, Cloud,
  TrendingUp, Users, Target, Award, Clock,
  Phone, Mail, MapPin
} from 'lucide-react';

// Import our new services
import { innovative2040MicroSaasServices } from '../data/innovative-2040-micro-saas-services';
import { innovative2040ITServices } from '../data/innovative-2040-it-services';
import { innovative2040AIServices } from '../data/innovative-2040-ai-services';

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const Innovative2040ServicesShowcase = () => {
  const [activeTab, setActiveTab] = useState('all');

  const allServices = [
    ...innovative2040MicroSaasServices,
    ...innovative2040ITServices,
    ...innovative2040AIServices
  ];

  const filteredServices = activeTab === 'all' 
    ? allServices 
    : allServices.filter(service => service.category.toLowerCase().includes(activeTab.toLowerCase()));

  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5" />, count: allServices.length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Target className="w-5 h-5" />, count: innovative2040MicroSaasServices.length },
    { id: 'it', name: 'IT Services', icon: <Cpu className="w-5 h-5" />, count: innovative2040ITServices.length },
    { id: 'ai', name: 'AI Services', icon: <Brain className="w-5 h-5" />, count: innovative2040AIServices.length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Innovative 2040 Services Showcase - Zion Tech Group"
        description="Discover our revolutionary 2040 services including AI-powered solutions, quantum computing, autonomous systems, and cutting-edge micro SAAS platforms. Transform your business with next-generation technology."
        keywords="2040 services, AI services, quantum computing, micro SAAS, IT services, autonomous systems, innovative technology"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Innovative 2040
              </span>
              <br />
              <span className="text-white">Services Showcase</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our revolutionary services that combine AI, quantum computing, 
              and autonomous systems to transform your business and unlock unprecedented possibilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <Brain className="w-5 h-5 mr-2 text-purple-400" />
                <span>AI-Powered Solutions</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <Rocket className="w-5 h-5 mr-2 text-blue-400" />
                <span>Quantum Computing</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                <span>Autonomous Systems</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contact.mobile}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Clock className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Users className="w-5 h-5 mr-2" />
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-2 text-blue-200" />
              <p className="text-sm text-blue-200">Phone</p>
              <a href={`tel:${contact.mobile}`} className="text-lg font-semibold hover:text-blue-200 transition-colors">
                {contact.mobile}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-2 text-blue-200" />
              <p className="text-sm text-blue-200">Email</p>
              <a href={`mailto:${contact.email}`} className="text-lg font-semibold hover:text-blue-200 transition-colors">
                {contact.email}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-2 text-blue-200" />
              <p className="text-sm text-blue-200">Address</p>
              <p className="text-lg font-semibold">{contact.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
                <span className="ml-2 bg-white/20 rounded-full px-2 py-1 text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                {/* Service Header */}
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{service.tagline}</p>
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(service.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-400">
                      {service.rating} ({service.reviews} reviews)
                    </span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-white mb-2">
                    {service.price}
                    <span className="text-lg text-gray-400">{service.period}</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    {service.trialDays} days free trial • {service.setupTime} setup
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-300">
                        <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Market Info */}
                <div className="mb-6 space-y-2">
                  <div className="flex items-center text-sm">
                    <TrendingUp className="w-4 h-4 text-blue-400 mr-2" />
                    <span className="text-gray-300">Growth: </span>
                    <span className="text-green-400 ml-1 font-semibold">{service.growthRate}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Target className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="text-gray-300">Market: </span>
                    <span className="text-blue-400 ml-1 font-semibold">{service.marketSize}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="text-gray-300">Customers: </span>
                    <span className="text-white ml-1 font-semibold">{service.customers}</span>
                  </div>
                </div>

                {/* ROI */}
                <div className="mb-6 p-4 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg border border-green-500/20">
                  <h4 className="text-white font-semibold mb-2">ROI Impact:</h4>
                  <p className="text-sm text-gray-300">{service.roi}</p>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <a
                    href={service.link}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 w-full justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>

                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                      POPULAR
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another technology company. We're pioneers in the future of AI, quantum computing, 
              and autonomous systems, delivering real solutions that transform businesses and industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12 text-yellow-400" />,
                title: "Proven Track Record",
                description: "Over 500+ successful implementations across industries with measurable ROI improvements."
              },
              {
                icon: <Brain className="w-12 h-12 text-purple-400" />,
                title: "Cutting-Edge Innovation",
                description: "First-to-market solutions in AI consciousness, quantum computing, and autonomous systems."
              },
              {
                icon: <Shield className="w-12 h-12 text-green-400" />,
                title: "Enterprise Security",
                description: "Bank-level security with quantum encryption and zero-trust architecture for all solutions."
              },
              {
                icon: <Users className="w-12 h-12 text-blue-400" />,
                title: "Expert Support",
                description: "24/7 expert support with dedicated success managers and comprehensive training programs."
              },
              {
                icon: <Rocket className="w-12 h-12 text-red-400" />,
                title: "Rapid Implementation",
                description: "Quick setup and deployment with our proven implementation methodology and automation."
              },
              {
                icon: <Globe className="w-12 h-12 text-cyan-400" />,
                title: "Global Reach",
                description: "Serving clients worldwide with localized support and multi-language capabilities."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of technology with our innovative 2040 services. 
              Get started today and experience unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contact.mobile}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Clock className="w-5 h-5 mr-2" />
                Start Your Journey
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Users className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
            <p className="text-gray-400 mb-6">
              Pioneering the future of technology with innovative AI, quantum computing, and autonomous systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-400">
              <span>Phone: {contact.mobile}</span>
              <span>Email: {contact.email}</span>
              <span>Address: {contact.address}</span>
            </div>
            <div className="mt-6">
              <a
                href={contact.website}
                className="text-blue-400 hover:text-blue-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit our website: {contact.website}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Innovative2040ServicesShowcase;