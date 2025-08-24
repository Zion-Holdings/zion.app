import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Phone, Mail, MapPin, Rocket, Brain, Zap, Shield, Globe, Cpu } from 'lucide-react';
import { cuttingEdgeInnovationServices } from '../../data/2026-cutting-edge-innovations';
import { enterpriseSolutions2026 } from '../../data/2026-enterprise-solutions';
import { specializedSolutions2026 } from '../../data/2026-specialized-solutions';

const EnhancedHero2026: React.FC = () => {
  // Get the most popular services for hero showcase
  const heroServices = [
    ...cuttingEdgeInnovationServices,
    ...enterpriseSolutions2026,
    ...specializedSolutions2026
  ].filter(service => service.popular).slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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

  const getIconComponent = (icon: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      '🧠⚛️': Brain,
      '🧠☁️': Cpu,
      '🧬💻': Cpu,
      '🛰️⚛️': Globe,
      '🛰️🚨': Shield,
      '🔒⚛️': Shield,
      '🤖🧠': Zap,
      '🌐🥽': Globe,
      '🌐⚡': Cpu,
      '😊🧠': Brain,
      '🎨✍️🎵': Star,
      '🔒🛡️': Shield,
      '🧬🔬': Cpu,
      '🛰️📡': Globe,
      '🚨🔍': Shield,
      '🧠💙': Brain
    };
    return iconMap[icon] || Star;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/30 to-cyan-900/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(56,189,248,0.1),transparent_50%)]"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Star className="w-4 h-4" />
              Revolutionary 2026 Technology
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Future of
              </span>
              <br />
              <span className="text-white">Technology</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                is Here
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl lg:max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experience the next generation of AI, quantum computing, and emerging technologies. 
              Transform your business with our cutting-edge solutions that deliver unprecedented ROI and innovation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <a
                href="/services/"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-200 text-lg group"
              >
                <Rocket className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="/contact/"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-200 text-lg"
              >
                <Shield className="w-6 h-6 mr-3" />
                Get Started
              </a>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-3 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-pink-400" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Featured Services */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {heroServices.map((service, index) => {
                const IconComponent = getIconComponent(service.icon);
                return (
                  <motion.div
                    key={service.id}
                    className="group relative"
                    variants={itemVariants}
                    whileHover={{ 
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Enhanced Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
                    
                    <div className="relative bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 h-full">
                      {/* Service Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      {/* Service Content */}
                      <div className="text-center">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {service.name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                          {service.tagline}
                        </p>
                        
                        {/* Price */}
                        <div className="mb-4">
                          <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                          <span className="text-gray-400 text-sm">{service.period}</span>
                        </div>

                        {/* Popular Badge */}
                        {service.popular && (
                          <div className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-semibold rounded-full">
                            <Star className="w-3 h-3" />
                            Popular
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Floating Stats */}
            <motion.div
              className="absolute -top-8 -right-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">1000+</div>
                <div className="text-sm text-purple-300">Services</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-8 -left-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6"
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">1000%</div>
                <div className="text-sm text-cyan-300">ROI</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero2026;