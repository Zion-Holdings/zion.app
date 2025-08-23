import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, Brain, Atom, Rocket, Shield, Heart, Globe, Cpu } from 'lucide-react';
import { futuristicInnovations2030 } from '../../data/2030-futuristic-innovations';
import { aiAutonomousEcosystem2030 } from '../../data/2030-ai-autonomous-ecosystem';
import { enterpriseITBreakthroughs2030 } from '../../data/2030-enterprise-it-breakthroughs';
import { innovativeMicroSaas2030 } from '../../data/2030-innovative-micro-saas';

const UltraFuturisticServiceShowcase2030: React.FC = () => {
  const allServices = [
    ...futuristicInnovations2030,
    ...aiAutonomousEcosystem2030,
    ...enterpriseITBreakthroughs2030,
    ...innovativeMicroSaas2030
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

  const getIcon = (icon: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      '🧠': <Brain className="w-8 h-8" />,
      '🧬': <Atom className="w-8 h-8" />,
      '🚀': <Rocket className="w-8 h-8" />,
      '⚡': <Zap className="w-8 h-8" />,
      '🔒': <Shield className="w-8 h-8" />,
      '❤️': <Heart className="w-8 h-8" />,
      '🌐': <Globe className="w-8 h-8" />,
      '⚙️': <Cpu className="w-8 h-8" />,
      '🎭': <Star className="w-8 h-8" />,
      '👻': <Brain className="w-8 h-8" />,
      '📝': <Zap className="w-8 h-8" />,
      '🔐': <Shield className="w-8 h-8" />,
      '🛡️': <Shield className="w-8 h-8" />,
      '⛓️': <Globe className="w-8 h-8" />,
      '📡': <Rocket className="w-8 h-8" />
    };
    return iconMap[icon] || <Star className="w-8 h-8" />;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-purple-900/10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/5 to-indigo-900/5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              2030 Revolutionary Services
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of technology with our cutting-edge 2030 innovations. 
            From AI consciousness to quantum DNA computing, we're building tomorrow's solutions today.
          </p>
        </motion.div>

        {/* Service Categories */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* AI & Consciousness Services */}
          <motion.div 
            className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 backdrop-blur-xl"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">AI & Consciousness</h3>
                <p className="text-purple-300">Next-generation AI consciousness and emotional intelligence</p>
              </div>
            </div>
            <div className="space-y-3">
              {allServices.filter(service => 
                service.category.includes('AI') || service.category.includes('Consciousness') || service.category.includes('Psychology')
              ).slice(0, 4).map((service) => (
                <div key={service.id} className="flex items-center justify-between p-3 rounded-xl bg-purple-800/20 border border-purple-500/20">
                  <span className="text-white font-medium">{service.name}</span>
                  <span className="text-purple-400 font-bold">{service.price}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quantum & Emerging Tech */}
          <motion.div 
            className="p-8 rounded-3xl bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/20 backdrop-blur-xl"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <Atom className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Quantum & Emerging Tech</h3>
                <p className="text-cyan-300">Quantum computing and beyond</p>
              </div>
            </div>
            <div className="space-y-3">
              {allServices.filter(service => 
                service.category.includes('Quantum') || service.category.includes('DNA') || service.category.includes('Neuromorphic')
              ).slice(0, 4).map((service) => (
                <div key={service.id} className="flex items-center justify-between p-3 rounded-xl bg-cyan-800/20 border border-cyan-500/20">
                  <span className="text-white font-medium">{service.name}</span>
                  <span className="text-cyan-400 font-bold">{service.price}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Featured Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {allServices.slice(0, 9).map((service, index) => (
            <motion.div
              key={service.id}
              className="group cursor-pointer"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-sm h-full">
                {/* Service Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(service.icon)}
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                  {service.description.length > 150 
                    ? `${service.description.substring(0, 150)}...` 
                    : service.description
                  }
                </p>

                {/* Innovation Level Badge */}
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    service.innovationLevel === 'Revolutionary' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                    service.innovationLevel === 'Breakthrough' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                    service.innovationLevel === 'Advanced' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    'bg-green-500/20 text-green-400 border border-green-500/30'
                  }`}>
                    {service.innovationLevel}
                  </span>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-cyan-400 font-semibold text-lg">{service.price}</span>
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-white">Ready to Experience the Future?</h3>
              <p className="text-gray-300">Join the revolution with our 2030 technology services</p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-200">
              Explore All Services
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraFuturisticServiceShowcase2030;