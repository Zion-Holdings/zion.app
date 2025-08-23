import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, Check, Shield, Zap, Brain, Atom, Rocket,
  Phone, Mail, Building, Globe, Award, TrendingUp, Users
} from 'lucide-react';
import { innovativeMicroSAASServices } from '../data/innovative-2025-new-micro-saas-services';
import Link from 'next/link';

const Innovative2025MicroSAASServices: React.FC = () => {
  return (
    <Layout>
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Revolutionary 2025 Services
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Discover our <span className="text-purple-400 font-semibold">cutting-edge micro SAAS solutions</span> that are transforming industries and shaping the future of technology
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-400">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>100% Real Services</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span>Production Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-blue-400" />
                  <span>Instant Deployment</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {innovativeMicroSAASServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:bg-black/50">
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">{service.icon}</div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                          <p className="text-gray-400 text-lg">{service.tagline}</p>
                        </div>
                      </div>
                      {service.popular && (
                        <div className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-full">
                          Popular
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Pricing */}
                    <div className="flex items-center space-x-2 mb-6">
                      <span className="text-3xl font-bold text-white">{service.price}</span>
                      <span className="text-gray-400 text-lg">{service.period}</span>
                      <div className="ml-auto">
                        <span className="text-sm text-gray-500">Trial: {service.trialDays} days</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Market Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <span className="text-gray-500">Market Size:</span>
                        <p className="text-white font-medium">{service.marketSize}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Growth Rate:</span>
                        <p className="text-white font-medium">{service.growthRate}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">ROI:</span>
                        <p className="text-white font-medium">{service.roi}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Setup Time:</span>
                        <p className="text-white font-medium">{service.setupTime}</p>
                      </div>
                    </div>

                    {/* Technology Stack */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Technology Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technology.slice(0, 4).map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href={service.link} className="flex-1">
                        <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                          Get Started
                        </button>
                      </Link>
                      <Link href="/contact" className="flex-1">
                        <button className="w-full px-6 py-3 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300">
                          Contact Sales
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section className="py-24 px-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 relative">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
                Join the future of technology with Zion Tech Group. Our revolutionary services are ready to accelerate your success.
              </p>
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Phone</h3>
                  <p className="text-cyan-400 text-lg">+1 302 464 0950</p>
                </div>
                
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Email</h3>
                  <p className="text-purple-400 text-lg">kleber@ziontechgroup.com</p>
                </div>
                
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Address</h3>
                  <p className="text-green-400 text-lg">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <button className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 text-lg">
                    Start Your Journey
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-12 py-6 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg">
                    Explore All Services
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Market Statistics */}
        <section className="py-24 px-4 bg-black/40 relative">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Market Impact & Growth
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our services are driving innovation across industries and creating measurable business value
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: '500+', label: 'Active Customers', icon: <Users className="w-8 h-8" />, color: 'from-blue-500 to-cyan-600' },
                { number: '$2B+', label: 'Market Value Created', icon: <TrendingUp className="w-8 h-8" />, color: 'from-green-500 to-emerald-600' },
                { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-8 h-8" />, color: 'from-purple-500 to-pink-600' },
                { number: '24/7', label: 'Global Support', icon: <Globe className="w-8 h-8" />, color: 'from-orange-500 to-red-600' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Innovative2025MicroSAASServices;