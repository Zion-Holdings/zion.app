import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Rocket, Target, Microscope, Cpu, 
  Shield, Zap, Sparkles, Star, ArrowRight, CheckCircle,
  Phone, Mail, MapPin, Globe, TrendingUp, DollarSign
} from 'lucide-react';
import Link from 'next/link';
import { cuttingEdgeInnovations2029 } from '../../data/2029-cutting-edge-innovations';
import { innovativeMicroSaas2029 } from '../../data/2029-innovative-micro-saas';
import { enterpriseITServices2029 } from '../../data/2029-enterprise-it-services';
import { emergingTechServices2029 } from '../../data/2029-emerging-tech-services';

const UltraFuturisticServiceShowcase2030: React.FC = () => {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
      
      {/* Quantum Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
            variants={itemVariants}
          >
            2030 Cutting-Edge Innovations
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Experience the future with our revolutionary AI consciousness, quantum creativity, 
            biotech DNA computing, and space mining automation platforms
          </motion.p>
        </motion.div>

        {/* Service Categories */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* AI Consciousness & Innovation */}
          <motion.div
            className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">AI Consciousness & Innovation</h3>
                <p className="text-purple-200">Breakthrough AI consciousness and quantum creativity</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {cuttingEdgeInnovations2029.slice(0, 2).map((service) => (
                <div key={service.id} className="bg-white/5 rounded-lg p-4 border border-purple-500/20">
                  <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
                  <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-400 font-bold">{service.price}</span>
                    <Link 
                      href={`/services/${service.id}`}
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Enterprise IT & Security */}
          <motion.div
            className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/30"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise IT & Security</h3>
                <p className="text-blue-200">Autonomous DevOps and quantum cloud infrastructure</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {enterpriseITServices2029.slice(0, 2).map((service) => (
                <div key={service.id} className="bg-white/5 rounded-lg p-4 border border-blue-500/20">
                  <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
                  <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 font-bold">{service.price}</span>
                    <Link 
                      href={`/services/${service.id}`}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Emerging Technology Services */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
            variants={itemVariants}
          >
            Emerging Technology Breakthroughs
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergingTechServices2029.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-xl p-6 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300"
                variants={cardVariants}
                whileHover="hover"
                custom={index}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mr-3">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">{service.name}</h4>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-gray-400 text-sm">New</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{service.marketSize}</span>
                  <Link 
                    href={`/services/${service.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                  >
                    Explore <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Micro SAAS Innovation Hub */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
            variants={itemVariants}
          >
            Micro SAAS Innovation Hub
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {innovativeMicroSaas2029.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 backdrop-blur-xl rounded-2xl p-8 border border-emerald-500/30"
                variants={cardVariants}
                whileHover="hover"
                custom={index}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">{service.name}</h4>
                    <p className="text-emerald-200">{service.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">{service.price}</div>
                    <div className="text-emerald-200 text-sm">Starting Price</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">{service.roi}</div>
                    <div className="text-emerald-200 text-sm">ROI</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-200 text-sm">{service.marketSize}</span>
                  </div>
                  <Link 
                    href={`/services/${service.id}`}
                    className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300"
                  >
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact & CTA Section */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div 
            className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl rounded-2xl p-12 border border-purple-500/30"
            variants={itemVariants}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the future with our cutting-edge AI, quantum computing, and emerging technology solutions. 
              Contact us today to discuss how we can revolutionize your operations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-white">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-white">{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-white">{contactInfo.address}</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Your Transformation
              </Link>
              <Link 
                href="/services"
                className="inline-flex items-center border border-purple-500 text-purple-400 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraFuturisticServiceShowcase2030;