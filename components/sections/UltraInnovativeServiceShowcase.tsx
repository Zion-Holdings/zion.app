import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Clock, Users, Zap, Shield, Globe, Rocket, Brain, Atom, Cpu } from 'lucide-react';
import { innovative2025Services } from '../../data/innovative-2025-services';

interface UltraInnovativeServiceShowcaseProps {
  className?: string;
  maxServices?: number;
}

export default function UltraInnovativeServiceShowcase({ 
  className = '', 
  maxServices = 6 
}: UltraInnovativeServiceShowcaseProps) {
  const featuredServices = innovative2025Services
    .filter(service => service.popular)
    .slice(0, maxServices);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.9,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      rotateX: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const
      }
    }
  };

  const getServiceIcon = (icon: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      '🔮': <Brain className="w-8 h-8" />,
      '💝': <Heart className="w-8 h-8" />,
      '⚛️': <Atom className="w-8 h-8" />,
      '🔗': <Link className="w-8 h-8" />,
      '🌐': <Globe className="w-8 h-8" />,
      '🛡️': <Shield className="w-8 h-8" />,
      '🏥': <Activity className="w-8 h-8" />,
      '📈': <TrendingUp className="w-8 h-8" />
    };
    return iconMap[icon] || <Zap className="w-8 h-8" />;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Machine Learning': 'from-purple-500 to-indigo-600',
      'AI & Emotional Intelligence': 'from-pink-500 to-rose-600',
      'Quantum Computing & AI': 'from-cyan-500 to-blue-600',
      'Blockchain & Web3': 'from-green-500 to-emerald-600',
      'Metaverse & VR': 'from-violet-500 to-purple-600',
      'IoT & Edge Computing': 'from-orange-500 to-red-600',
      'Cybersecurity': 'from-red-500 to-pink-600',
      'Healthcare AI': 'from-blue-500 to-indigo-600',
      'Financial Technology': 'from-green-500 to-emerald-600'
    };
    return colorMap[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <section className={`py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-8"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Revolutionary
            </span>{' '}
            Innovation Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Experience the future with our cutting-edge AI, quantum computing, and emerging technology services
          </motion.p>
          
          {/* Innovation Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
          >
            {[
              { label: 'AI Services', value: '50+', icon: Brain, color: 'from-purple-500 to-pink-600' },
              { label: 'Quantum Solutions', value: '25+', icon: Atom, color: 'from-cyan-500 to-blue-600' },
              { label: 'Emerging Tech', value: '100+', icon: Rocket, color: 'from-green-500 to-emerald-600' },
              { label: 'Success Rate', value: '99.9%', icon: Star, color: 'from-yellow-500 to-orange-600' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              {/* Service Card */}
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 rounded-3xl p-8 h-full backdrop-blur-xl hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 overflow-hidden">
                
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quantum Particle Effect */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full animate-ping" />
                  <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" />
                </div>

                {/* Header */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      {getServiceIcon(service.icon)}
                    </div>
                    {service.popular && (
                      <div className="flex items-center space-x-1 text-yellow-400 text-sm bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
                        <Star className="w-4 h-4 fill-current" />
                        <span>Popular</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Price and Stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-3xl font-bold text-cyan-400">
                      {service.price}
                      <span className="text-gray-400 text-lg font-normal">{service.period}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>{service.customers}</span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <div className="text-sm text-gray-400 mb-3 font-medium">Key Features:</div>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 * idx }}
                          className="flex items-center text-sm text-gray-300"
                        >
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Market Position */}
                  <div className="mb-6 p-4 bg-gray-700/40 rounded-xl border border-gray-600/30">
                    <div className="text-xs text-gray-400 mb-2 font-medium">Market Position</div>
                    <div className="text-sm text-gray-300 line-clamp-3 leading-relaxed">
                      {service.marketPosition}
                    </div>
                  </div>

                  {/* ROI and Setup Time */}
                  <div className="flex items-center justify-between mb-6 text-sm">
                    <div className="flex items-center space-x-1 text-green-400">
                      <TrendingUp className="w-4 h-4" />
                      <span>ROI</span>
                    </div>
                    <div className="flex items-center space-x-1 text-blue-400">
                      <Clock className="w-4 h-4" />
                      <span>{service.setupTime}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-3 rounded-xl text-center text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group/btn"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </a>
                    <a
                      href="/contact"
                      className="flex-1 bg-gray-700/60 text-white px-4 py-3 rounded-xl text-center text-sm font-medium hover:bg-gray-600/60 transition-all duration-300 border border-gray-600 hover:border-gray-500"
                    >
                      Contact Us
                    </a>
                  </div>

                  {/* Contact Information */}
                  <div className="mt-6 pt-6 border-t border-gray-700/50">
                    <div className="text-xs text-gray-400 mb-2 font-medium">Contact Information:</div>
                    <div className="text-xs text-gray-300 space-y-1">
                      <div>📱 {service.contactInfo.mobile}</div>
                      <div>✉️ {service.contactInfo.email}</div>
                      <div>🌐 {service.contactInfo.website}</div>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <motion.a
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-500 via-pink-600 to-cyan-500 text-white rounded-2xl font-semibold hover:from-purple-600 hover:via-pink-700 hover:to-cyan-600 transition-all duration-300 text-xl shadow-2xl hover:shadow-purple-500/30"
          >
            <Rocket className="w-6 h-6 mr-3" />
            Explore All Innovation Services
            <ArrowRight className="w-6 h-6 ml-3" />
          </motion.a>
          
          <p className="text-gray-400 mt-6 text-lg">
            Join thousands of companies transforming their business with cutting-edge technology
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Missing icon components
const Heart = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const Link = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const Activity = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);