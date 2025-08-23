import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Zap, Shield, Brain, Atom, Rocket } from 'lucide-react';
import Link from 'next/link';
import { innovativeMicroSaas2029V3 } from '../../data/2029-innovative-micro-saas-v3';
import { innovativeITServices2029V3 } from '../../data/2029-innovative-it-services-v3';
import { innovativeAIServices2029V3 } from '../../data/2029-innovative-ai-services-v3';

const Enhanced2029ServicesShowcase: React.FC = () => {
  const allNewServices = [
    ...innovativeMicroSaas2029V3,
    ...innovativeITServices2029V3,
    ...innovativeAIServices2029V3
  ];

  const featuredServices = allNewServices.filter(service => service.popular).slice(0, 8);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900/20 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-6 py-3 mb-6">
            <Zap className="h-5 w-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">2029 Revolutionary Services</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              New
            </span>{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Revolutionary
            </span>{' '}
            <span className="bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our latest {allNewServices.length}+ cutting-edge services spanning AI consciousness, 
            quantum computing, neuromorphic computing, and revolutionary business solutions.
          </p>
        </motion.div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25">
                {/* Service Icon */}
                <div className="p-6 text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  {/* Service Name */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.name}
                  </h3>
                  
                  {/* Tagline */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {service.tagline}
                  </p>
                  
                  {/* Features Preview */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-xs text-gray-500">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Price */}
                  <div className="text-2xl font-bold text-cyan-400 mb-4">
                    {service.price}
                    <span className="text-sm text-gray-500 font-normal">{service.period}</span>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-center gap-1 mb-4">
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
                    <span className="text-sm text-gray-500 ml-2">
                      ({service.reviews})
                    </span>
                  </div>
                  
                  {/* CTA Button */}
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 w-full justify-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      Popular
                    </div>
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-gray-800/80 text-gray-300 text-xs px-3 py-1 rounded-full font-medium">
                    {service.category}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white px-10 py-4 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            <Rocket className="w-6 h-6" />
            View All {allNewServices.length}+ Services
            <ArrowRight className="w-6 h-6" />
          </Link>
        </motion.div>

        {/* Service Categories Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Service Categories
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Services */}
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30">
              <div className="text-4xl mb-4">🧠</div>
              <h4 className="text-xl font-bold text-blue-400 mb-2">AI & Consciousness</h4>
              <p className="text-gray-400 text-sm mb-4">
                Revolutionary AI consciousness, emotional intelligence, and creativity platforms
              </p>
              <div className="text-blue-400 font-semibold">
                {innovativeAIServices2029V3.length} Services
              </div>
            </div>

            {/* IT Services */}
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-900/20 to-teal-900/20 border border-green-500/30">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-bold text-green-400 mb-2">IT & Infrastructure</h4>
              <p className="text-gray-400 text-sm mb-4">
                Autonomous DevOps, zero trust security, and edge computing solutions
              </p>
              <div className="text-green-400 font-semibold">
                {innovativeITServices2029V3.length} Services
              </div>
            </div>

            {/* Micro SAAS */}
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-bold text-purple-400 mb-2">Micro SAAS</h4>
              <p className="text-gray-400 text-sm mb-4">
                Innovative business solutions, automation, and optimization platforms
              </p>
              <div className="text-purple-400 font-semibold">
                {innovativeMicroSaas2029V3.length} Services
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Enhanced2029ServicesShowcase;