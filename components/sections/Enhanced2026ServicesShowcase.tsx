import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Zap, Shield, Brain, Rocket, Globe, Cpu, Lock } from 'lucide-react';
import { cuttingEdgeInnovationServices } from '../../data/2026-cutting-edge-innovations';
import { enterpriseSolutions2026 } from '../../data/2026-enterprise-solutions';
import { specializedSolutions2026 } from '../../data/2026-specialized-solutions';

const Enhanced2026ServicesShowcase: React.FC = () => {
  // Combine all new services
  const allNewServices = [
    ...cuttingEdgeInnovationServices,
    ...enterpriseSolutions2026,
    ...specializedSolutions2026
  ];

  // Get featured services (most popular and innovative)
  const featuredServices = allNewServices.filter(service => service.popular).slice(0, 6);

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
        duration: 0.5,
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
      '🔒⚛️': Lock,
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-cyan-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              2026 Cutting-Edge Innovations
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the future with our revolutionary AI, quantum computing, and emerging technology breakthroughs. 
            Transform your business with next-generation solutions that deliver unprecedented ROI.
          </motion.p>
          
          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">25+</h3>
              <p className="text-cyan-300 font-medium">AI Services</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">18+</h3>
              <p className="text-purple-300 font-medium">Quantum Tech</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">32+</h3>
              <p className="text-green-300 font-medium">Emerging Tech</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">45+</h3>
              <p className="text-yellow-300 font-medium">IT Solutions</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredServices.map((service, index) => {
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
                
                <div className="relative bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300 h-full">
                  {/* Service Icon and Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Service Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-400 text-sm">
                          <Star className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-gray-500">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Service Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div className="text-center">
                      <div className="text-lg font-bold text-cyan-400">{service.customers}</div>
                      <div className="text-xs text-gray-500">Customers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-400">{service.rating}</div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-pink-400">{service.reviews}</div>
                      <div className="text-xs text-gray-500">Reviews</div>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 text-sm">{service.period}</span>
                    </div>
                    <a 
                      href={service.link}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 transition-transform duration-200"
                    >
                      Learn More 
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>

                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <div className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-semibold rounded-full">
                        <Star className="w-3 h-3" />
                        Popular
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 border border-cyan-500/20 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
              Join thousands of forward-thinking companies already leveraging our revolutionary 2026 services. 
              Start your transformation journey today and achieve unprecedented growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="/services/"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-200 text-lg"
              >
                <Rocket className="w-6 h-6 mr-3" />
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/contact/"
                className="inline-flex items-center px-10 py-5 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-200 text-lg"
              >
                <Shield className="w-6 h-6 mr-3" />
                Get Started Today
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Enhanced2026ServicesShowcase;