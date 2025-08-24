import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Check, Zap, Brain, Shield } from 'lucide-react';
import Link from 'next/link';

interface UltraAdvancedServiceCard2025Props {
  service: {
    id: string;
    name: string;
    tagline: string;
    description: string;
    price: string;
    period?: string;
    features: string[];
    benefits?: string[];
    icon: string;
    color: string;
    textColor: string;
    category: string;
    popular?: boolean;
    rating?: number;
    reviews?: number;
    link?: string;
    technology?: string[];
    realImplementation?: string;
    launchDate?: string;
    customers?: string;
  };
  variant?: 'default' | 'premium' | 'quantum' | 'space' | 'ai';
}

const UltraAdvancedServiceCard2025: React.FC<UltraAdvancedServiceCard2025Props> = ({
  service,
  variant = 'default'
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'premium':
        return {
          border: 'border-yellow-400/40',
          glow: 'shadow-yellow-400/20',
          accent: 'from-yellow-400 to-orange-500'
        };
      case 'quantum':
        return {
          border: 'border-purple-400/40',
          glow: 'shadow-purple-400/20',
          accent: 'from-purple-400 to-pink-500'
        };
      case 'space':
        return {
          border: 'border-blue-400/40',
          glow: 'shadow-blue-400/20',
          accent: 'from-blue-400 to-cyan-500'
        };
      case 'ai':
        return {
          border: 'border-green-400/40',
          glow: 'shadow-green-400/20',
          accent: 'from-green-400 to-emerald-500'
        };
      default:
        return {
          border: 'border-cyan-400/40',
          glow: 'shadow-cyan-400/20',
          accent: 'from-cyan-400 to-blue-500'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <motion.div
      className={`group relative bg-gray-900/80 backdrop-blur-xl border ${styles.border} rounded-2xl p-6 hover:bg-gray-800/90 transition-all duration-500 overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -5,
        scale: 1.02,
        boxShadow: `0 20px 40px ${styles.glow}`
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glowing Border Effect */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${styles.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
      
      {/* Service Icon */}
      <motion.div
        className={`relative w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}
        whileHover={{ rotate: 5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl" />
        <span className="relative z-10">{service.icon}</span>
        
        {/* Icon Glow */}
        <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
      </motion.div>

      {/* Popular Badge */}
      {service.popular && (
        <motion.div
          className="absolute top-4 right-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            Popular
          </div>
        </motion.div>
      )}

      {/* Service Info */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
          {service.name}
        </h3>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {service.tagline}
        </p>

        {/* Category Badge */}
        <div className="mb-4">
          <span className={`inline-block px-3 py-1 bg-gray-800/50 text-${service.textColor} text-xs font-medium rounded-full border border-gray-700/50`}>
            {service.category}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-2xl font-bold text-cyan-400">
            {service.price}
            <span className="text-sm text-gray-400 ml-1">
              {service.period || '/month'}
            </span>
          </div>
          
          {service.rating && (
            <div className="flex items-center space-x-1 text-yellow-400">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">{service.rating}</span>
              {service.reviews && (
                <span className="text-gray-400 text-xs">({service.reviews})</span>
              )}
            </div>
          )}
        </div>

        {/* Features Preview */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400" />
            Key Features
          </h4>
          <ul className="space-y-2">
            {service.features.slice(0, 3).map((feature, idx) => (
              <motion.li
                key={idx}
                className="flex items-center text-xs text-gray-400"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Check className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                {feature}
              </motion.li>
            ))}
            {service.features.length > 3 && (
              <li className="text-xs text-cyan-400 ml-5">
                +{service.features.length - 3} more features
              </li>
            )}
          </ul>
        </div>

        {/* Technology Stack */}
        {service.technology && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
              <Brain className="w-4 h-4 text-purple-400" />
              Technology
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.technology.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-700/50"
                >
                  {tech}
                </span>
              ))}
              {service.technology.length > 4 && (
                <span className="px-2 py-1 bg-gray-800/50 text-cyan-400 text-xs rounded border border-gray-700/50">
                  +{service.technology.length - 4}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex-1 bg-gradient-to-r ${styles.accent} text-white py-3 px-4 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 relative overflow-hidden`}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-3 border border-cyan-400 text-cyan-400 rounded-lg text-sm font-medium hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
          >
            Contact
          </motion.button>
        </div>

        {/* Real Implementation Info */}
        {service.realImplementation && (
          <div className="mt-4 p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
            <div className="flex items-center gap-2 text-green-400 text-xs">
              <Shield className="w-3 h-3" />
              <span className="font-medium">Real Implementation</span>
            </div>
            <p className="text-green-300 text-xs mt-1">{service.realImplementation}</p>
          </div>
        )}

        {/* Launch Date & Customers */}
        {(service.launchDate || service.customers) && (
          <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
            {service.launchDate && (
              <span>Launch: {service.launchDate}</span>
            )}
            {service.customers && (
              <span>{service.customers}</span>
            )}
          </div>
        )}
      </div>

      {/* Hover Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${styles.accent} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
      
      {/* Corner Accent */}
      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${styles.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-bl-2xl`} />
    </motion.div>
  );
};

export default UltraAdvancedServiceCard2025;