import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, Clock, DollarSign, Users, TrendingUp, Shield, Zap } from 'lucide-react';

interface EnhancedFuturisticCardProps {
  service: {
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
  };
}

export default function EnhancedFuturisticCard({ service }: EnhancedFuturisticCardProps) {
  const getVariantStyles = (variant: string) => {
    switch (variant) {
      case 'quantum-entanglement':
        return {
          border: 'border-cyan-400/30',
          glow: 'shadow-cyan-400/20',
          accent: 'from-cyan-400 to-blue-500'
        };
      case 'quantum-space':
        return {
          border: 'border-blue-400/30',
          glow: 'shadow-blue-400/20',
          accent: 'from-blue-400 to-indigo-500'
        };
      case 'quantum-matrix':
        return {
          border: 'border-green-400/30',
          glow: 'shadow-green-400/20',
          accent: 'from-green-400 to-emerald-500'
        };
      case 'holographic-matrix':
        return {
          border: 'border-purple-400/30',
          glow: 'shadow-purple-400/20',
          accent: 'from-purple-400 to-violet-500'
        };
      case 'neural-cyberpunk':
        return {
          border: 'border-orange-400/30',
          glow: 'shadow-orange-400/20',
          accent: 'from-orange-400 to-red-500'
        };
      case 'ai-futuristic':
        return {
          border: 'border-pink-400/30',
          glow: 'shadow-pink-400/20',
          accent: 'from-pink-400 to-rose-500'
        };
      default:
        return {
          border: 'border-slate-600/30',
          glow: 'shadow-slate-400/20',
          accent: 'from-slate-400 to-slate-500'
        };
    }
  };

  const styles = getVariantStyles(service.variant);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className={`group relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border ${styles.border} hover:${styles.border.replace('/30', '/60')} transition-all duration-500 overflow-hidden`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-2xl ${styles.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 mb-4">
        <div className="flex items-center justify-between mb-3">
          <div className={`text-4xl ${service.textColor}`}>{service.icon}</div>
          {service.popular && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold"
            >
              POPULAR
            </motion.div>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
          {service.name}
        </h3>
        
        <p className="text-slate-400 text-sm mb-3">
          {service.tagline}
        </p>
      </div>

      {/* Price and trial */}
      <div className="relative z-10 mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <DollarSign className="w-4 h-4 text-green-400" />
            <span className="text-2xl font-bold text-white">{service.price}</span>
            <span className="text-slate-400">{service.period}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-slate-400">{service.trialDays} days free</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="relative z-10 mb-4">
        <p className="text-slate-300 text-sm leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Key features */}
      <div className="relative z-10 mb-4">
        <div className="grid grid-cols-2 gap-2">
          {service.features.slice(0, 4).map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="flex items-center space-x-2"
            >
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
              <span className="text-xs text-slate-400">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 mb-4">
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="bg-slate-800/50 rounded-lg p-2">
            <div className="text-lg font-bold text-white">{service.customers.toLocaleString()}+</div>
            <div className="text-xs text-slate-400">Users</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-2">
            <div className="text-lg font-bold text-white">{service.rating}</div>
            <div className="text-xs text-slate-400">Rating</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-2">
            <div className="text-lg font-bold text-white">{service.reviews.toLocaleString()}</div>
            <div className="text-xs text-slate-400">Reviews</div>
          </div>
        </div>
      </div>

      {/* Market info */}
      <div className="relative z-10 mb-4">
        <div className="bg-slate-800/30 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-white">Market Size</span>
            <span className="text-sm text-green-400">{service.marketSize}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-white">Growth Rate</span>
            <span className="text-sm text-blue-400">{service.growthRate}</span>
          </div>
        </div>
      </div>

      {/* Contact info */}
      <div className="relative z-10 mb-4">
        <div className="bg-slate-800/20 rounded-lg p-3 border border-slate-700/30">
          <div className="text-xs text-slate-400 mb-2">Contact Information:</div>
          <div className="space-y-1 text-xs">
            <div className="text-slate-300">📱 {service.contactInfo.mobile}</div>
            <div className="text-slate-300">✉️ {service.contactInfo.email}</div>
            <div className="text-slate-300">📍 {service.contactInfo.address}</div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="relative z-10">
        <motion.a
          href={service.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`block w-full bg-gradient-to-r ${styles.accent} hover:from-cyan-500 hover:to-blue-500 text-white text-center py-3 px-4 rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25`}
        >
          <span className="flex items-center justify-center space-x-2">
            <span>Get Started</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </motion.a>
      </div>

      {/* Hover overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
    </motion.div>
  );
}