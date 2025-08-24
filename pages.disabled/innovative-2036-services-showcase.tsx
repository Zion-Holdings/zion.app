import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Star, Brain, Rocket, Shield, MessageCircle, 
  TrendingUp, Globe, Zap, Atom, Cpu,
  ArrowRight, CheckCircle, Users, Award, Clock
} from 'lucide-react';
import Link from 'next/link';
import { innovativeMicroSaasServices2036 } from '../data/innovative-2036-micro-saas-services';

const Innovative2036ServicesShowcase: React.FC = () => {
  return (
    <Layout>
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-blue-400/20 rounded-full animate-pulse delay-3000"></div>
            <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-green-400/20 transform rotate-12 animate-pulse delay-4000"></div>
          </div>
          
          <div className="text-center max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Innovation Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-purple-400 text-lg font-medium"
              >
                <Star className="w-5 h-5" />
                <span>Innovation Leader 2036</span>
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                Future of Technology
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover our revolutionary micro SAAS services that are reshaping industries and defining the future of technology
              </p>
              
              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
                  <div className="text-gray-300 text-sm">Revolutionary Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
                  <div className="text-gray-300 text-sm">Innovation Potential</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm">Autonomous Operation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                  <div className="text-gray-300 text-sm">Future Ready</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Revolutionary Services
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our cutting-edge micro SAAS solutions combine artificial intelligence, quantum computing, and emerging technologies to deliver unprecedented value
              </p>
            </motion.div>

            {/* Service Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Brain,
                  title: 'AI & Machine Learning',
                  description: 'Autonomous systems that learn and evolve',
                  color: 'from-cyan-500 to-blue-600',
                  count: '3 services'
                },
                {
                  icon: Atom,
                  title: 'Quantum Technology',
                  description: 'Next-generation quantum computing solutions',
                  color: 'from-purple-500 to-indigo-600',
                  count: '2 services'
                },
                {
                  icon: Rocket,
                  title: 'Space Technology',
                  description: 'Revolutionary space exploration and mining',
                  color: 'from-orange-500 to-red-600',
                  count: '1 service'
                },
                {
                  icon: Shield,
                  title: 'Cybersecurity',
                  description: 'AI-powered zero-trust security',
                  color: 'from-green-500 to-emerald-600',
                  count: '1 service'
                },
                {
                  icon: MessageCircle,
                  title: 'Business Automation',
                  description: 'Intelligent process optimization',
                  color: 'from-blue-500 to-indigo-600',
                  count: '2 services'
                },
                {
                  icon: Globe,
                  title: 'Emerging Tech',
                  description: 'Metaverse and future technologies',
                  color: 'from-pink-500 to-purple-600',
                  count: '1 service'
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-2xl hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">{category.title}</h3>
                  <p className="text-gray-300 text-center mb-3">{category.description}</p>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full">
                      {category.count}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-900/30 to-black/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Featured Services
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Explore our most revolutionary and in-demand micro SAAS solutions
              </p>
            </motion.div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {innovativeMicroSaasServices2036.filter(service => service.popular).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden"
                >
                  <div className="relative p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/50 rounded-3xl hover:border-gray-600/50 transition-all duration-500 hover:transform hover:scale-105">
                    {/* Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                    
                    {/* Service Header */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-3xl`}>
                            {service.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                            <p className="text-gray-300">{service.tagline}</p>
                          </div>
                        </div>
                        {service.popular && (
                          <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-semibold rounded-full">
                            <Star className="w-4 h-4 mr-1" />
                            Popular
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{service.customers}+</div>
                          <div className="text-gray-400 text-xs">Customers</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{service.rating}</div>
                          <div className="text-gray-400 text-xs">Rating</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{service.reviews}</div>
                          <div className="text-gray-400 text-xs">Reviews</div>
                        </div>
                      </div>

                      {/* Pricing and CTA */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-3xl font-bold text-white">{service.price}</div>
                          <div className="text-gray-400 text-sm">per {service.period}</div>
                        </div>
                        <Link href={service.link}>
                          <button className={`px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300 flex items-center space-x-2`}>
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
                Complete Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Explore our entire range of innovative micro SAAS solutions
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {innovativeMicroSaasServices2036.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={service.link}>
                    <div className="p-6 bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/50 rounded-2xl hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
                      {/* Service Icon */}
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                        {service.icon}
                      </div>
                      
                      {/* Service Info */}
                      <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                      
                      {/* Key Features */}
                      <div className="space-y-2 mb-4">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                            <span className="text-gray-400 text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-lg font-bold text-white">{service.price}</div>
                          <div className="text-gray-400 text-xs">per {service.period}</div>
                        </div>
                        <div className="text-gray-400 group-hover:text-white transition-colors">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the future of technology with our revolutionary micro SAAS services. Let's build something extraordinary together.
              </p>
              
              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold">Contact Us</div>
                    <div className="text-gray-400 text-sm">+1 302 464 0950</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-400 text-sm">kleber@ziontechgroup.com</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold">Location</div>
                    <div className="text-gray-400 text-sm">Middletown, DE</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    Get Started Today
                  </button>
                </Link>
                <Link href="/demo">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    Request Demo
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Innovative2036ServicesShowcase;