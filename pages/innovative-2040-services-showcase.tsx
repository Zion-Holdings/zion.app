import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Database, Cloud, Lock, Globe,
  Zap, Star, TrendingUp, Users, Award, Clock,
  Phone, Mail, MapPin, Search
} from 'lucide-react';

// Import our new 2040 services
import { innovative2040MicroSaasServices } from '../data/innovative-2040-micro-saas-services';
import { innovative2040ITServices } from '../data/innovative-2040-it-services';
import { innovative2040AIServices } from '../data/innovative-2040-ai-services';

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const Innovative2040ServicesShowcase: React.FC = () => {
  const allServices = [
    ...innovative2040MicroSaasServices,
    ...innovative2040ITServices,
    ...innovative2040AIServices
  ];

  const categories = [
    {
      id: 'micro-saas',
      name: 'Micro SAAS Solutions',
      icon: <Target className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600',
      description: 'Innovative business solutions for modern enterprises'
    },
    {
      id: 'it-services',
      name: 'IT & Infrastructure',
      icon: <Building className="w-6 h-6" />,
      color: 'from-blue-500 to-purple-600',
      description: 'Advanced IT solutions and infrastructure management'
    },
    {
      id: 'ai-services',
      name: 'AI & Consciousness',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-500',
      description: 'Revolutionary AI and consciousness technologies'
    }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category?.toLowerCase().includes(selectedCategory) ||
      service.variant?.includes(selectedCategory);
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Innovative 2040 Services Showcase - Zion Tech Group"
        description="Discover our revolutionary 2040 services featuring AI consciousness, quantum computing, and autonomous systems. Transform your business with cutting-edge technology."
        keywords={["AI consciousness", "quantum computing", "autonomous systems", "2040 technology", "innovative services", "Zion Tech Group"]}
        image="https://ziontechgroup.com/og-image-innovative-2040.jpg"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Innovative 2040
              </span>
              <br />
              <span className="text-white">Services Showcase</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our revolutionary services featuring AI consciousness, 
              quantum computing, and autonomous systems that will transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2"
              >
                Explore Services <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-purple-800 to-pink-800 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-purple-300 mb-2" />
              <p className="text-purple-300 text-sm">Phone</p>
              <p className="text-white font-semibold">{contact.mobile}</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-purple-300 mb-2" />
              <p className="text-purple-300 text-sm">Email</p>
              <p className="text-white font-semibold">{contact.email}</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-purple-300 mb-2" />
              <p className="text-purple-300 text-sm">Address</p>
              <p className="text-white font-semibold text-sm">{contact.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-white/10 border border-purple-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                All Services
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
                  {/* Service Header */}
                  <div className={`p-6 bg-gradient-to-r ${service.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-white/90 text-sm">{service.tagline}</p>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-white">{service.price}</span>
                        <span className="text-gray-400">{service.period}</span>
                      </div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-semibold">
                          Popular
                        </span>
                      )}
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        Key Features
                      </h4>
                      <div className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <p className="text-xs text-gray-500 text-center">
                            +{service.features.length - 3} more features
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Market Info */}
                    <div className="space-y-2 mb-6 text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <TrendingUp className="w-4 h-4" />
                        <span>Market: {service.marketSize}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Zap className="w-4 h-4" />
                        <span>Growth: {service.growthRate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>{service.customers} customers</span>
                      </div>
                    </div>

                    {/* ROI */}
                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-3 rounded-lg mb-6">
                      <p className="text-green-400 text-sm font-semibold">ROI Impact</p>
                      <p className="text-white text-sm">{service.roi}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                      >
                        Learn More
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-4 py-3 border border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                      >
                        Contact
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of technology with our innovative 2040 services. 
              Contact us today to learn how we can help you achieve breakthrough results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Schedule a Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Get Pricing
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 text-sm">
                Leading the future of technology with innovative solutions and cutting-edge services.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>{contact.mobile}</p>
                <p>{contact.email}</p>
                <p>{contact.address}</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Micro SAAS Solutions</p>
                <p>IT & Infrastructure</p>
                <p>AI & Consciousness</p>
                <p>Quantum Computing</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Website: {contact.website}</p>
                <p>LinkedIn</p>
                <p>Twitter</p>
                <p>GitHub</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Zion Tech Group. All rights reserved. | 
              <a href="/privacy" className="text-purple-400 hover:text-purple-300 ml-2">Privacy Policy</a> | 
              <a href="/terms" className="text-purple-400 hover:text-purple-300 ml-2">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Innovative2040ServicesShowcase;