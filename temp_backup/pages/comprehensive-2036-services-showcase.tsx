import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, Rocket, Shield, Zap, Atom, Globe, 
  Cpu,
  ArrowRight, CheckCircle,
  Phone, Mail, MapPin, ExternalLink
} from 'lucide-react';
import { innovativeServices2036 } from '../data/real-2036-innovative-services';
import { itInfrastructureServices2036 } from '../data/real-2036-it-infrastructure-services';
import { specializedSolutions2036 } from '../data/real-2036-specialized-solutions';

const Comprehensive2036ServicesShowcase: React.FC = () => {
  const allServices = [
    ...innovativeServices2036,
    ...itInfrastructureServices2036,
    ...specializedSolutions2036
  ];

  const categories = [
    { name: 'AI & Innovation', icon: Brain, color: 'from-purple-600 to-indigo-700' },
    { name: 'Quantum Technology', icon: Atom, color: 'from-cyan-600 to-blue-700' },
    { name: 'Space Technology', icon: Rocket, color: 'from-orange-600 to-red-700' },
    { name: 'IT Infrastructure', icon: Cpu, color: 'from-blue-600 to-cyan-700' },
    { name: 'Cybersecurity', icon: Shield, color: 'from-red-600 to-pink-700' },
    { name: 'Industry Solutions', icon: Globe, color: 'from-green-600 to-emerald-700' }
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
        title="Comprehensive 2036 Services Showcase | Zion Tech Group"
        description="Discover our comprehensive range of innovative AI, quantum, space, and IT infrastructure services designed to transform your business in 2036 and beyond."
        keywords="AI services, quantum computing, space technology, IT infrastructure, cybersecurity, industry solutions, Zion Tech Group"
      />
      
      <main className="relative z-10 pt-8">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                2036 Services Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Pioneering the future with cutting-edge AI, quantum computing, space technology, and IT infrastructure solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#services" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Explore Services
                </a>
                <a href="#contact" className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Get Started
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              <div className="p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{allServices.length}+</div>
                <div className="text-gray-300">Innovative Services</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Global Support</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-green-400 mb-2">∞</div>
                <div className="text-gray-300">Future Possibilities</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 px-4" id="categories">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of cutting-edge technology solutions across multiple domains
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 hover:scale-105 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                  <p className="text-gray-300 mb-6">
                    Cutting-edge solutions designed to transform your business operations and drive innovation
                  </p>
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-black/20" id="services">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Discover our comprehensive range of innovative technology solutions designed to transform your business
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                      POPULAR
                    </div>
                  )}
                  
                  {/* Service Icon */}
                  <div className="text-4xl mb-4">{service.icon}</div>
                  
                  {/* Service Name */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.name}
                  </h3>
                  
                  {/* Tagline */}
                  <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-gray-400">{service.period}</span>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Market Info */}
                  <div className="mb-6 p-4 bg-gray-800/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">Market Size:</span>
                      <span className="text-green-400 text-sm font-semibold">{service.marketSize}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Growth Rate:</span>
                      <span className="text-blue-400 text-sm font-semibold">{service.growthRate}</span>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                  >
                    <span>Learn More</span>
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven expertise to deliver exceptional results
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI-First Approach</h3>
                <p className="text-gray-300">Leading-edge artificial intelligence solutions that adapt and evolve</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Atom className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Quantum Innovation</h3>
                <p className="text-gray-300">Next-generation quantum computing and security solutions</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-300">Military-grade security and compliance solutions</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Rapid Deployment</h3>
                <p className="text-gray-300">Fast implementation and continuous optimization</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-black/30" id="contact">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the future of technology with Zion Tech Group. Let's build something extraordinary together.
              </p>
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-cyan-400 mb-2" />
                  <span className="text-gray-300 text-sm">Phone</span>
                  <a href={`tel:${contactInfo.mobile}`} className="text-white font-semibold hover:text-cyan-400 transition-colors duration-300">
                    {contactInfo.mobile}
                  </a>
                </div>
                
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-cyan-400 mb-2" />
                  <span className="text-gray-300 text-sm">Email</span>
                  <a href={`mailto:${contactInfo.email}`} className="text-white font-semibold hover:text-cyan-400 transition-colors duration-300">
                    {contactInfo.email}
                  </a>
                </div>
                
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-cyan-400 mb-2" />
                  <span className="text-gray-300 text-sm">Address</span>
                  <span className="text-white font-semibold text-center">
                    {contactInfo.address}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${contactInfo.email}?subject=Inquiry about Zion Tech Group Services`}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href={contactInfo.website}
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Visit Our Website
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Comprehensive2036ServicesShowcase;