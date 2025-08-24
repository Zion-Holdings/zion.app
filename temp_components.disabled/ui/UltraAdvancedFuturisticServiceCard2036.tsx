import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  variant: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

interface UltraAdvancedFuturisticServiceCard2036Props {
  service: Service;
  variant?: 'ai' | 'quantum' | 'security' | 'iot' | 'fintech' | 'default';
}

export default function UltraAdvancedFuturisticServiceCard2036({ 
  service, 
  variant = 'default' 
}: UltraAdvancedFuturisticServiceCard2036Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const getVariantStyles = () => {
    switch (variant) {
      case 'ai':
        return {
          gradient: 'from-purple-600 via-pink-600 to-cyan-600',
          borderColor: 'border-purple-500',
          glowColor: 'shadow-purple-500/50',
          textColor: 'text-purple-400'
        };
      case 'quantum':
        return {
          gradient: 'from-cyan-600 via-blue-600 to-indigo-600',
          borderColor: 'border-cyan-500',
          glowColor: 'shadow-cyan-500/50',
          textColor: 'text-cyan-400'
        };
      case 'security':
        return {
          gradient: 'from-red-600 via-orange-600 to-yellow-600',
          borderColor: 'border-red-500',
          glowColor: 'shadow-red-500/50',
          textColor: 'text-red-400'
        };
      case 'iot':
        return {
          gradient: 'from-green-600 via-emerald-600 to-teal-600',
          borderColor: 'border-green-500',
          glowColor: 'shadow-green-500/50',
          textColor: 'text-green-400'
        };
      case 'fintech':
        return {
          gradient: 'from-yellow-600 via-amber-600 to-orange-600',
          borderColor: 'border-yellow-500',
          glowColor: 'shadow-yellow-500/50',
          textColor: 'text-yellow-400'
        };
      default:
        return {
          gradient: 'from-gray-600 via-slate-600 to-zinc-600',
          borderColor: 'border-gray-500',
          glowColor: 'shadow-gray-500/50',
          textColor: 'text-gray-400'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <motion.div
      className={`relative group cursor-pointer overflow-hidden rounded-2xl bg-black/20 backdrop-blur-xl border ${styles.borderColor} border-opacity-50 transition-all duration-500`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent" />
      <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* Glow Effect */}
      <div className={`absolute inset-0 ${styles.glowColor} blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <motion.div
              className="text-3xl"
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.6 }}
            >
              {service.icon}
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
              <p className="text-sm text-gray-400">{service.tagline}</p>
            </div>
          </div>
          
          {service.popular && (
            <motion.div
              className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              POPULAR
            </motion.div>
          )}
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-white">{service.price}</span>
            <span className="text-gray-400">{service.period}</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">{service.description}</p>
        </div>

        {/* Features Preview */}
        <div className="mb-4">
          <div className="grid grid-cols-1 gap-2">
            {service.features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 text-sm text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${styles.gradient}`} />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
          
          {service.features.length > 3 && (
            <motion.div
              className="text-sm text-gray-500 mt-2 cursor-pointer hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
            >
              +{service.features.length - 3} more features
            </motion.div>
          )}
        </div>

        {/* Expanded Features */}
        <motion.div
          className="overflow-hidden"
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isExpanded && (
            <div className="pt-4 border-t border-gray-700/50">
              <div className="grid grid-cols-1 gap-2 mb-4">
                {service.features.slice(3).map((feature, index) => (
                  <motion.div
                    key={index + 3}
                    className="flex items-center space-x-2 text-sm text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${styles.gradient}`} />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* Additional Service Details */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Setup Time:</span>
                  <span className="text-white">{service.setupTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Trial:</span>
                  <span className="text-white">{service.trialDays} days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Customers:</span>
                  <span className="text-white">{service.customers.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Rating:</span>
                  <span className="text-white">⭐ {service.rating}/5 ({service.reviews} reviews)</span>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Action Buttons */}
        <div className="flex space-x-3 mt-6">
          <motion.button
            className={`flex-1 px-4 py-2 bg-gradient-to-r ${styles.gradient} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              window.open(service.link, '_blank');
            }}
          >
            Get Started
          </motion.button>
          
          <motion.button
            className="px-4 py-2 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? 'Less' : 'More'}
          </motion.button>
        </div>

        {/* Market Info */}
        <motion.div
          className="mt-4 pt-4 border-t border-gray-700/50 text-xs text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="text-gray-500">Market Size:</span>
              <div className="text-white">{service.marketSize}</div>
            </div>
            <div>
              <span className="text-gray-500">Growth Rate:</span>
              <div className="text-white">{service.growthRate}</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hover Effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)`,
          transform: 'translateX(-100%)'
        }}
        animate={{
          x: isHovered ? '100%' : '-100%'
        }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}