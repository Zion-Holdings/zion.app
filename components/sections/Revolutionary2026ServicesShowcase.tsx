import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Zap, Shield, Rocket, Sparkles, Star, TrendingUp, Globe, Cpu, Lock, Cloud, Atom, Microscope, Satellite, DollarSign, Users, Target, Layers } from 'lucide-react';
import Link from 'next/link';
import { revolutionary2026Innovations } from '../../data/revolutionary-2026-innovations';
import { nextGenAI2026Services } from '../../data/next-gen-ai-2026-services';

const Revolutionary2026ServicesShowcase = () => {
  // Combine all revolutionary services
  const allRevolutionaryServices = [...revolutionary2026Innovations, ...nextGenAI2026Services];

  const categories = [
    { name: 'AI & Consciousness', count: '2+', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { name: 'Quantum Technology', count: '4+', icon: Atom, color: 'from-blue-500 to-cyan-500' },
    { name: 'Space & Innovation', count: '3+', icon: Rocket, color: 'from-yellow-500 to-orange-500' },
    { name: 'Healthcare AI', count: '2+', icon: Shield, color: 'from-green-500 to-emerald-500' },
    { name: 'Financial Tech', count: '2+', icon: DollarSign, color: 'from-emerald-500 to-teal-500' },
    { name: 'Manufacturing AI', count: '2+', icon: Cpu, color: 'from-gray-500 to-slate-500' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-cyan-900/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-full px-6 py-3 mb-6"
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">2026 Revolutionary Innovations</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              The Future of Technology
            </span>
            <br />
            <span className="text-white">is Here Today</span>
          </h2>
          
          <p className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Experience groundbreaking AI, quantum computing, and emerging technology solutions that will transform industries and redefine what's possible.
          </p>
        </motion.div>

        {/* Service Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="relative bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 text-center hover:border-purple-500/40 transition-all duration-300">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">{category.name}</h3>
                <p className="text-purple-300 text-sm font-medium">{category.count} Services</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Revolutionary Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {allRevolutionaryServices.slice(0, 9).map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover="hover"
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-20 group-hover:opacity-30`}></div>
              
              {/* Service Card */}
              <div className="relative bg-black/50 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300 h-full">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center`}>
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 leading-tight">{service.name}</h3>
                      <p className="text-gray-400 text-sm">{service.category}</p>
                    </div>
                  </div>
                  {service.popular && (
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      POPULAR
                    </div>
                  )}
                </div>

                {/* Service Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{service.price}</div>
                    <div className="text-gray-400 text-sm">{service.period}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{service.customers}</div>
                    <div className="text-gray-400 text-sm">Customers</div>
                  </div>
                </div>

                {/* Market Position */}
                <div className="mb-6 p-4 bg-purple-900/20 rounded-xl border border-purple-500/20">
                  <h4 className="text-white font-semibold mb-2">Market Position</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.marketPosition}
                  </p>
                </div>

                {/* ROI and Growth */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-green-900/20 rounded-xl border border-green-500/20">
                    <div className="text-lg font-bold text-green-400">ROI</div>
                    <div className="text-gray-300 text-sm">{service.roi.split(' ')[0]}</div>
                  </div>
                  <div className="text-center p-3 bg-blue-900/20 rounded-xl border border-blue-500/20">
                    <div className="text-lg font-bold text-blue-400">Growth</div>
                    <div className="text-gray-300 text-sm">{service.growthRate}</div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex items-center justify-between">
                  <Link 
                    href={service.link}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm">({service.reviews})</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-3xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 text-xl mb-8 max-w-3xl mx-auto">
              Join the revolution and be among the first to experience the future of technology. 
              Our cutting-edge solutions are designed to give you a competitive advantage in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-2xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/revolutionary-2025-services-showcase"
                className="inline-flex items-center px-8 py-4 border border-purple-500/50 text-purple-300 font-bold rounded-2xl hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Revolutionary2026ServicesShowcase;