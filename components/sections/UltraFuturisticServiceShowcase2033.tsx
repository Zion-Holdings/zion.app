import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, DollarSign, ArrowRight, Star, TrendingUp,
  Play, CheckCircle, CircuitBoard, Satellite,
  Dna, Microchip, Telescope, Beaker, TestTube,
  Syringe, Pill, Stethoscope, HeartPulse, Activity,
  Lightbulb, Flame, Battery, Power,
  Wifi, Bluetooth, Radio, Antenna, Signal,
  Compass, Navigation, Map, Globe2,
  ExternalLink, ArrowUpRight
} from 'lucide-react';
import { futuristicInnovations2032 } from '../../data/2032-futuristic-innovations';
import { enterpriseInnovations2032 } from '../../data/2032-enterprise-innovations';

const featuredServices = [
  ...futuristicInnovations2032.slice(0, 4),
  ...enterpriseInnovations2032.slice(0, 4)
];

const serviceCategories = [
  {
    title: 'AI & Consciousness',
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    description: 'Next-generation AI consciousness and creativity',
    services: futuristicInnovations2032.filter(s => s.category.includes('AI'))
  },
  {
    title: 'Quantum & Emerging Tech',
    icon: Atom,
    color: 'from-indigo-500 to-blue-600',
    description: 'Quantum computing and beyond',
    services: futuristicInnovations2032.filter(s => s.category.includes('Quantum'))
  },
  {
    title: 'Enterprise IT Solutions',
    icon: CircuitBoard,
    color: 'from-blue-500 to-cyan-600',
    description: 'Autonomous enterprise infrastructure',
    services: enterpriseInnovations2032.filter(s => s.category.includes('Enterprise'))
  },
  {
    title: 'Space & Metaverse',
    icon: Rocket,
    color: 'from-teal-500 to-emerald-600',
    description: 'Space exploration and digital reality',
    services: futuristicInnovations2032.filter(s => s.category.includes('Space'))
  }
];

export default function UltraFuturisticServiceShowcase2033() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>🚀 2033 Revolutionary Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Cutting-Edge
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Technology
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Experience the future with our revolutionary AI consciousness, quantum computing, space technology, and autonomous enterprise solutions.
          </p>
        </motion.div>

        {/* Featured Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-105 h-full">
                {/* Service Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <span className="text-3xl">{service.icon}</span>
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Price */}
                <div className="text-2xl font-bold text-cyan-400 mb-4">
                  {service.price}
                  <span className="text-white/50 text-sm font-normal">{service.period}</span>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-white/60 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={service.link}
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>

                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full">
                    Popular
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {serviceCategories.map((category, categoryIndex) => (
            <div key={category.title} className="relative">
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 mb-8"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} bg-opacity-20 rounded-2xl`}>
                  <category.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">{category.title}</h3>
                  <p className="text-white/70 text-lg">{category.description}</p>
                </div>
              </motion.div>

              {/* Services Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {category.services.slice(0, 6).map((service, serviceIndex) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + categoryIndex * 0.1 + serviceIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 transform hover:scale-105"
                  >
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                          {service.name}
                        </h4>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-cyan-400 font-bold text-lg">{service.price}</div>
                        <div className="text-white/50 text-sm">{service.period}</div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 2).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-white/60 text-sm">
                          <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href={service.link}
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 font-medium rounded-lg hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-500/50 transition-all duration-300"
                    >
                      <span>Learn More</span>
                      <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </Link>

                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute -top-2 -right-2 px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full">
                        Popular
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* View All Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="text-center mt-8"
              >
                <Link
                  href={`/services/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 font-medium rounded-xl hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <span>View All {category.title}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of technology leaders who are already shaping tomorrow with our revolutionary solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-2xl hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 font-bold text-lg rounded-2xl hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
=======
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Star, CheckCircle, TrendingUp, 
  Zap, Shield, Brain, Atom, Rocket, Target,
  Microscope, Cpu, Globe, Sparkles
} from 'lucide-react';
import { cuttingEdgeInnovations2033 } from '../../data/2033-cutting-edge-innovations';
import { innovativeMicroSaas2033 } from '../../data/2033-innovative-micro-saas';
import { enterpriseITServices2033 } from '../../data/2033-enterprise-it-services';

const UltraFuturisticServiceShowcase2033: React.FC = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-blue-900/10 to-purple-900/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-60 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 rounded-full border border-cyan-500/30">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">2033 Technology Showcase</span>
            </div>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary
            </span>
            <br />
            <span className="text-white">Technology Solutions</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the future of AI, quantum computing, and enterprise technology. 
            Our cutting-edge solutions are reshaping industries and unlocking unprecedented possibilities.
          </motion.p>
        </motion.div>

        {/* AI & Consciousness Services */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center space-x-3">
              <Brain className="w-8 h-8 text-cyan-400" />
              <span>🧠 Revolutionary AI Services</span>
            </h3>
            <p className="text-gray-400 text-lg">Next-generation AI consciousness and creativity platforms</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cuttingEdgeInnovations2033.slice(0, 3).map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover="hover"
                className="group relative"
              >
                <div className="relative p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      {service.popular && (
                        <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs">
                          <Star className="w-3 h-3 fill-current" />
                          <span>Popular</span>
                        </div>
                      )}
                    </div>
                    
                    <h4 className="text-xl font-semibold text-white mb-2">{service.name}</h4>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-500">{service.period}</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{service.trialDays} days trial</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{service.rating}</span>
                        <span className="text-xs text-gray-500">({service.reviews})</span>
                      </div>
                    </div>
                    
                    <Link
                      href={service.link}
                      className="inline-flex items-center space-x-2 w-full justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quantum & Emerging Tech */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center space-x-3">
              <Atom className="w-8 h-8 text-blue-400" />
              <span>⚛️ Quantum & Emerging Tech</span>
            </h3>
            <p className="text-gray-400 text-lg">Quantum computing and beyond-current technology</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cuttingEdgeInnovations2033.slice(3, 6).map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover="hover"
                className="group relative"
              >
                <div className="relative p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      {service.popular && (
                        <div className="flex items-center space-x-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs">
                          <Star className="w-3 h-3 fill-current" />
                          <span>Popular</span>
                        </div>
                      )}
                    </div>
                    
                    <h4 className="text-xl font-semibold text-white mb-2">{service.name}</h4>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                      <span className="text-gray-500">{service.period}</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{service.trialDays} days trial</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{service.rating}</span>
                        <span className="text-xs text-gray-500">({service.reviews})</span>
                      </div>
                    </div>
                    
                    <Link
                      href={service.link}
                      className="inline-flex items-center space-x-2 w-full justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enterprise IT Solutions */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center space-x-3">
              <Cpu className="w-8 h-8 text-purple-400" />
              <span>🏙️ Enterprise IT Solutions</span>
            </h3>
            <p className="text-gray-400 text-lg">Autonomous enterprise infrastructure and operations</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enterpriseITServices2033.slice(0, 3).map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover="hover"
                className="group relative"
              >
                <div className="relative p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      {service.popular && (
                        <div className="flex items-center space-x-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs">
                          <Star className="w-3 h-3 fill-current" />
                          <span>Popular</span>
                        </div>
                      )}
                    </div>
                    
                    <h4 className="text-xl font-semibold text-white mb-2">{service.name}</h4>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                      <span className="text-gray-500">{service.period}</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{service.trialDays} days trial</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{service.rating}</span>
                        <span className="text-xs text-gray-500">({service.reviews})</span>
                      </div>
                    </div>
                    
                    <Link
                      href={service.link}
                      className="inline-flex items-center space-x-2 w-full justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Innovative Micro SAAS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center space-x-3">
              <Target className="w-8 h-8 text-green-400" />
              <span>🎯 Innovative Micro SAAS</span>
            </h3>
            <p className="text-gray-400 text-lg">Cutting-edge micro solutions for modern businesses</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {innovativeMicroSaas2033.slice(0, 3).map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover="hover"
                className="group relative"
              >
                <div className="relative p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      {service.popular && (
                        <div className="flex items-center space-x-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs">
                          <Star className="w-3 h-3 fill-current" />
                          <span>Popular</span>
                        </div>
                      )}
                    </div>
                    
                    <h4 className="text-xl font-semibold text-white mb-2">{service.name}</h4>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>
                      <span className="text-gray-500">{service.period}</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{service.trialDays} days trial</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{service.rating}</span>
                        <span className="text-xs text-gray-500">({service.reviews})</span>
                      </div>
                    </div>
                    
                    <Link
                      href={service.link}
                      className="inline-flex items-center space-x-2 w-full justify-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20 rounded-3xl p-12 border border-cyan-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already leveraging our revolutionary technology solutions. 
              Start your journey into the future today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 text-lg font-semibold">
                Get Started Now
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 text-lg font-semibold">
                Schedule Demo
              </button>
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>24/7 support</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraFuturisticServiceShowcase2033;
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-5359
