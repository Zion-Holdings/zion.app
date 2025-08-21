import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Star, CheckCircle, Users, TrendingUp,
  Brain, Atom, Rocket, Shield, Target, Microscope
} from 'lucide-react';

// Import the new service data
import { futuristicAIServices2032 } from '../../data/2032-futuristic-ai-services';
import { quantumEmergingTechServices2032 } from '../../data/2032-quantum-emerging-tech-services';
import { spaceMetaverseServices2032 } from '../../data/2032-space-metaverse-services';
import { innovativeMicroSaasServices2032 } from '../../data/2032-innovative-micro-saas';
import { researchDevelopmentServices2032 } from '../../data/2032-research-development-services';
import { enterpriseITServices2032 } from '../../data/2032-enterprise-it-services';

const serviceCategories = [
  {
    title: '🧠 Revolutionary AI Services',
    description: 'Next-generation AI consciousness and creativity',
    icon: Brain,
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    services: futuristicAIServices2032,
    gradient: 'from-violet-500/20 to-indigo-500/20'
  },
  {
    title: '⚛️ Quantum & Emerging Tech',
    description: 'Quantum computing and beyond',
    icon: Atom,
    color: 'from-indigo-600 via-blue-600 to-cyan-600',
    services: quantumEmergingTechServices2032,
    gradient: 'from-indigo-500/20 to-cyan-500/20'
  },
  {
    title: '🏙️ Enterprise IT Solutions',
    description: 'Autonomous enterprise infrastructure',
    icon: Shield,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    services: enterpriseITServices2032,
    gradient: 'from-blue-500/20 to-teal-500/20'
  },
  {
    title: '🌌 Space & Metaverse Tech',
    description: 'Space exploration and digital reality',
    icon: Rocket,
    color: 'from-teal-600 via-emerald-600 to-green-600',
    services: spaceMetaverseServices2032,
    gradient: 'from-teal-500/20 to-green-500/20'
  },
  {
    title: '🎯 Innovative Micro SAAS',
    description: 'Cutting-edge micro solutions',
    icon: Target,
    color: 'from-green-600 via-yellow-600 to-orange-600',
    services: innovativeMicroSaasServices2032,
    gradient: 'from-green-500/20 to-orange-500/20'
  },
  {
    title: '🔬 Research & Development',
    description: 'Breakthrough research solutions',
    icon: Microscope,
    color: 'from-orange-600 via-red-600 to-pink-600',
    services: researchDevelopmentServices2032,
    gradient: 'from-orange-500/20 to-pink-500/20'
  }
];

export default function UltraFuturisticServiceShowcase2032() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              2032 Revolutionary Services
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of technology with our cutting-edge AI, quantum computing, 
            and emerging technology services. Transform your business with solutions that 
            were once science fiction.
          </p>
        </motion.div>

        {/* Service Categories */}
        <div className="space-y-24">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Category Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-3 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl md:text-4xl font-bold text-white">{category.title}</h3>
                    <p className="text-lg text-gray-400">{category.description}</p>
                  </div>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <Link
                      href={service.link}
                      className="block relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 h-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50"
                    >
                      {/* Popular Badge */}
                      {service.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <div className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-semibold rounded-full">
                            <Star className="w-3 h-3" />
                            Popular
                          </div>
                        </div>
                      )}

                      {/* Service Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110`}>
                        <span className="text-2xl">{service.icon}</span>
                      </div>

                      {/* Service Content */}
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                          {service.name}
                        </h3>
                        
                        <p className="text-gray-300 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Features Preview */}
                        <div className="space-y-2">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                          {service.features.length > 3 && (
                            <div className="text-sm text-gray-500">+{service.features.length - 3} more features</div>
                          )}
                        </div>

                        {/* Service Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-4 text-center">
                          <div>
                            <div className="text-lg font-bold text-cyan-400">{service.customers}</div>
                            <div className="text-xs text-gray-500">Customers</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-purple-400">{service.rating}</div>
                            <div className="text-xs text-gray-500">Rating</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-pink-400">{service.reviews}</div>
                            <div className="text-xs text-gray-500">Reviews</div>
                          </div>
                        </div>

                        {/* Price and CTA */}
                        <div className="pt-4 border-t border-gray-700/50">
                          <div className="flex justify-between items-center">
                            <div className="text-3xl font-bold text-white">{service.price}</div>
                            <div className="text-purple-400 group-hover:text-cyan-400 transition-colors">
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Hover Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Category CTA */}
              <div className="text-center mt-12">
                <Link
                  href={`/services#${category.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-3 rounded-xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-200 transform hover:scale-105"
                >
                  <span>View All {category.title.split(' ')[0]} Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies already leveraging our revolutionary 
              2032 services. Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={`tel:+13024640950`}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span>Call +1 302 464 0950</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}