import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Zap, Brain, Atom, Rocket, Target, Shield, Cpu, Globe, Sparkles, DollarSign, Users, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface Service {
  id: string;
  name: string;
  description: string;
  category: string[];
  price: string;
  features: string[];
  benefits: string[];
  marketSize: string;
  roi: string;
  contact: {
    mobile: string;
    email: string;
    website: string;
    address: string;
  };
}

interface UltraFuturisticServiceShowcase2029Props {
  services: Service[];
}

export default function UltraFuturisticServiceShowcase2029({ services }: UltraFuturisticServiceShowcase2029Props) {
  const categories = [
    { name: 'AI & Consciousness', icon: Brain, color: 'from-violet-500 to-purple-600', services: services.filter(s => s.category.includes('AI')) },
    { name: 'Quantum Computing', icon: Atom, color: 'from-blue-500 to-cyan-600', services: services.filter(s => s.category.includes('Quantum')) },
    { name: 'Space Technology', icon: Rocket, color: 'from-emerald-500 to-teal-600', services: services.filter(s => s.category.includes('Space')) },
    { name: 'Enterprise IT', icon: Cpu, color: 'from-cyan-500 to-teal-600', services: services.filter(s => s.category.includes('IT')) },
    { name: 'Micro SAAS', icon: Target, color: 'from-orange-500 to-red-600', services: services.filter(s => s.category.includes('Micro')) },
    { name: 'Emerging Tech', icon: Globe, color: 'from-green-500 to-emerald-600', services: services.filter(s => s.category.includes('Emerging')) }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`,
            backgroundSize: '100px 100px'
          }} />
        </div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              2029
            </span>
            <span className="text-white"> Revolutionary Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of technology with our cutting-edge 2029 services. 
            From AI consciousness to quantum space mining, we're building tomorrow's solutions today.
          </p>
        </motion.div>

        {/* Service Categories */}
        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">{category.name}</h3>
                  <p className="text-gray-400">Cutting-edge {category.name.toLowerCase()} solutions</p>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.slice(0, 6).map((service, serviceIndex) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/50 hover:transform hover:scale-105"
                  >
                    {/* Service Header */}
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Price and ROI */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-green-400" />
                        <span className="text-lg font-bold text-white">{service.price}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-cyan-400">{service.roi}</span>
                      </div>
                    </div>

                    {/* Market Size */}
                    <div className="mb-4 p-3 rounded-lg bg-gray-700/30">
                      <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-gray-300">Market Size: {service.marketSize}</span>
                      </div>
                    </div>

                    {/* Features Preview */}
                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-medium text-white">Key Features</span>
                      </div>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            <span className="text-xs text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={`/services/${service.id}`}
                      className="group/btn w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </motion.div>
                ))}
              </div>

              {/* View All Button for Category */}
              {category.services.length > 6 && (
                <div className="text-center">
                  <Link
                    href={`/services/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center space-x-2 px-6 py-3 border border-cyan-500/50 text-cyan-400 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
                  >
                    <span>View All {category.name} Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of forward-thinking companies already using our revolutionary 2029 technology services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25"
              >
                Get Started Today
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}