import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Star, Check, Zap, TrendingUp, 
  Brain, Atom, Shield, Rocket, Target,
  Clock, Users, Globe, Award, Sparkles
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

interface ServiceCardProps {
  service: {
    id: string;
    name: string;
    tagline: string;
    description: string;
    category: string;
    price: {
      monthly: number;
      yearly: number;
      currency: string;
      trialDays: number;
      setupTime: string;
      enterprise: string;
    };
    features: string[];
    benefits: string[];
    targetAudience: string[];
    marketPosition: string;
    competitors: string[];
    techStack: string[];
    realImplementation: boolean;
    implementationDetails: string;
    roi: string;
    useCases: string[];
    integrations: string[];
    support: string;
    compliance: string[];
    link: string;
    icon: string;
    color: string;
    popular: boolean;
    launchDate: string;
    customers: number;
    rating: number;
    reviews: number;
    marketSize: string;
    growthRate: string;
  };
  variant?: 'ai' | 'quantum' | 'automation' | 'consciousness' | 'cybersecurity' | 'blockchain';
}

export default function UltraFuturisticServiceCard2038({ service, variant = 'ai' }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const getVariantStyles = () => {
    switch (variant) {
      case 'consciousness':
        return {
          gradient: 'from-purple-500 via-pink-500 to-rose-500',
          border: 'border-purple-500/30',
          glow: 'shadow-purple-500/25',
          accent: 'text-purple-400'
        };
      case 'quantum':
        return {
          gradient: 'from-blue-500 via-cyan-500 to-teal-500',
          border: 'border-blue-500/30',
          glow: 'shadow-blue-500/25',
          accent: 'text-blue-400'
        };
      case 'cybersecurity':
        return {
          gradient: 'from-red-500 via-orange-500 to-yellow-500',
          border: 'border-red-500/30',
          glow: 'shadow-red-500/25',
          accent: 'text-red-400'
        };
      case 'blockchain':
        return {
          gradient: 'from-yellow-500 via-orange-500 to-red-500',
          border: 'border-yellow-500/30',
          glow: 'shadow-yellow-500/25',
          accent: 'text-yellow-400'
        };
      case 'automation':
        return {
          gradient: 'from-green-500 via-emerald-500 to-teal-500',
          border: 'border-green-500/30',
          glow: 'shadow-green-500/25',
          accent: 'text-green-400'
        };
      default: // ai
        return {
          gradient: 'from-purple-500 via-pink-500 to-rose-500',
          border: 'border-purple-500/30',
          glow: 'shadow-purple-500/25',
          accent: 'text-purple-400'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <motion.div
      className={`relative group bg-black/40 backdrop-blur-sm border ${styles.border} rounded-2xl p-6 overflow-hidden transition-all duration-500 hover:bg-black/60`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.02,
        y: -5
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-2xl ${styles.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">{service.icon}</div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                {service.name}
              </h3>
              <p className="text-sm text-gray-400">{service.category}</p>
            </div>
          </div>
          
          {service.popular && (
            <motion.div
              className="flex items-center space-x-1 px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-medium text-black"
              whileHover={{ scale: 1.1 }}
            >
              <Star className="w-3 h-3 fill-current" />
              <span>Popular</span>
            </motion.div>
          )}
        </div>

        {/* Tagline */}
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
          {service.tagline}
        </p>

        {/* Description */}
        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
          {service.description}
        </p>

        {/* Pricing */}
        <div className="mb-6">
          <div className="flex items-baseline space-x-2 mb-2">
            <span className="text-3xl font-bold text-white">
              ${service.price.monthly}
            </span>
            <span className="text-gray-400">/month</span>
          </div>
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <span>${service.price.yearly}/year</span>
            <span>•</span>
            <span>{service.price.trialDays} days free trial</span>
            <span>•</span>
            <span>{service.price.setupTime} setup</span>
          </div>
        </div>

        {/* Key metrics */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="text-lg font-bold text-white">{service.customers.toLocaleString()}+</div>
            <div className="text-xs text-gray-400">Customers</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-white">{service.rating}</div>
            <div className="text-xs text-gray-400">Rating</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-white">{service.reviews.toLocaleString()}</div>
            <div className="text-xs text-gray-400">Reviews</div>
          </div>
        </div>

        {/* Features preview */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
            <Zap className="w-4 h-4 mr-2 text-yellow-400" />
            Key Features
          </h4>
          <div className="space-y-2">
            {service.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
            {service.features.length > 3 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                {isExpanded ? 'Show less' : `+${service.features.length - 3} more features`}
              </button>
            )}
          </div>
        </div>

        {/* Expanded features */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-6 overflow-hidden"
            >
              <div className="space-y-2">
                {service.features.slice(3).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                    <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Market info */}
        <div className="mb-6 p-3 bg-gray-900/50 rounded-lg">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400">Market Size:</span>
            <span className="text-white font-medium">{service.marketSize}</span>
          </div>
          <div className="flex items-center justify-between text-xs mt-1">
            <span className="text-gray-400">Growth Rate:</span>
            <span className="text-green-400 font-medium">{service.growthRate}</span>
          </div>
        </div>

        {/* CTA Button */}
        <Link href={service.link}>
          <motion.button
            className={`w-full py-3 px-4 bg-gradient-to-r ${styles.gradient} text-white font-semibold rounded-lg hover:from-opacity-90 hover:to-opacity-90 transition-all duration-300 transform hover:scale-105 ${styles.glow}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center justify-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </Link>

        {/* Additional info */}
        <div className="mt-4 text-center">
          <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
            <span className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>{service.price.setupTime}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Users className="w-3 h-3" />
              <span>{service.customers.toLocaleString()}+ users</span>
            </span>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
      </div>
      <div className="absolute bottom-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
        <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000" />
      </div>
    </motion.div>
  );
}