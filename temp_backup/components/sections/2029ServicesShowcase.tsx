import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Star, Zap, Brain, Atom, Rocket, Dna, Globe2, CheckCircle, TrendingUp } from 'lucide-react';
import { futuristicAIServices2029 } from '../../data/2029-futuristic-ai-services';
import { quantumInnovationServices2029 } from '../../data/2029-quantum-innovation-services';
import { spaceInnovationServices2029 } from '../../data/2029-space-innovation-services';
import { biotechInnovationServices2029 } from '../../data/2029-biotech-innovation-services';
import { metaverseInnovationServices2029 } from '../../data/2029-metaverse-innovation-services';

export default function ServicesShowcase2029() {
  const categories = [
    {
      title: '🚀 2029 Futuristic AI Services',
      icon: Brain,
      color: 'from-violet-600 to-purple-600',
      services: futuristicAIServices2029,
      description: 'Next-generation artificial intelligence that reads emotions, orchestrates creativity, and predicts the future'
    },
    {
      title: '⚛️ 2029 Quantum Innovation',
      icon: Atom,
      color: 'from-indigo-600 to-blue-600',
      services: quantumInnovationServices2029,
      description: 'Quantum computing breakthroughs in finance, cybersecurity, drug discovery, and logistics'
    },
    {
      title: '🌌 2029 Space Innovation',
      icon: Rocket,
      color: 'from-blue-600 to-cyan-600',
      services: spaceInnovationServices2029,
      description: 'Revolutionary space technology including autonomous mining, weather prediction, and solar power'
    },
    {
      title: '🧬 2029 Biotech Innovation',
      icon: Dna,
      color: 'from-emerald-600 to-teal-600',
      services: biotechInnovationServices2029,
      description: 'Cutting-edge biotechnology with DNA computing, synthetic biology, and brain-computer interfaces'
    },
    {
      title: '🌐 2029 Metaverse Innovation',
      icon: Globe2,
      color: 'from-orange-600 to-red-600',
      services: metaverseInnovationServices2029,
      description: 'Next-generation digital reality with holographic communication and virtual economies'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-purple-900/20 to-black"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              2029 Technology
            </span>
            <br />
            <span className="text-white">Services Showcase</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Experience the future with our revolutionary 2029 technology services. 
            From AI consciousness to space mining, we're building tomorrow's solutions today.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Category Header */}
              <div className="flex items-center justify-center mb-12">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mr-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-lg text-gray-300 max-w-2xl">{category.description}</p>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-2">
                      {/* Service Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                            {service.name}
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        <div className="ml-4 text-right">
                          <div className="text-2xl font-bold text-cyan-400 mb-1">{service.price}</div>
                          <div className="text-xs text-gray-400">Starting Price</div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h5 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Key Features</h5>
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.slice(0, 4).map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-sm text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-6">
                        <h5 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Key Benefits</h5>
                        <div className="grid grid-cols-1 gap-2">
                          {service.benefits.slice(0, 3).map((benefit, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <TrendingUp className="w-4 h-4 text-blue-400 flex-shrink-0" />
                              <span className="text-sm text-gray-300">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Market Info */}
                      <div className="flex items-center justify-between mb-6 text-sm">
                        <div className="text-gray-400">
                          <span className="font-semibold text-cyan-400">Market Size:</span> {service.marketSize}
                        </div>
                        <div className="text-gray-400">
                          <span className="font-semibold text-green-400">ROI:</span> {service.roi}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <Link
                          href={`/${service.id}`}
                          className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-semibold"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                        
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-400">2029 Innovation</span>
                        </div>
                      </div>

                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Category CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <Link
                  href={`/services#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
                >
                  <span>Explore All {category.title.split(' ')[0]} Services</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Lead the 2029 Technology Revolution?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the elite companies already using our revolutionary 2029 technology services. 
              Don't wait for the future - create it with Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
              >
                <span>Get Started Today</span>
                <Zap className="w-5 h-5" />
              </Link>
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 border border-gray-600/50"
              >
                <span>Call Now</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}