import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Star, Users, TrendingUp, Zap, Shield, Brain } from 'lucide-react';

interface UltraAdvancedFuturisticCardProps {
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
    category: string;
    rating: number;
    reviews: number;
    customers: number;
    variant: string;
    contactInfo: {
      mobile: string;
      email: string;
      address: string;
      website: string;
    };
  };
  className?: string;
  onClick?: () => void;
}

const UltraAdvancedFuturisticCard: React.FC<UltraAdvancedFuturisticCardProps> = ({
  service,
  className = '',
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [particleCount, setParticleCount] = useState(0);

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setParticleCount(prev => Math.min(prev + 1, 20));
      }, 100);
      return () => clearInterval(interval);
    } else {
      setParticleCount(0);
    }
  }, [isHovered]);

  const getVariantStyles = () => {
    switch (service.variant) {
      case 'quantum':
        return {
          border: 'border-cyan-400/50',
          glow: 'shadow-[0_0_30px_rgba(0,255,255,0.3)]',
          bg: 'bg-gradient-to-br from-slate-900/80 to-cyan-900/20',
          accent: 'text-cyan-400'
        };
      case 'holographic':
        return {
          border: 'border-purple-400/50',
          glow: 'shadow-[0_0_30px_rgba(139,92,246,0.3)]',
          bg: 'bg-gradient-to-br from-slate-900/80 to-purple-900/20',
          accent: 'text-purple-400'
        };
      case 'cyberpunk':
        return {
          border: 'border-pink-400/50',
          glow: 'shadow-[0_0_30px_rgba(236,73,153,0.3)]',
          bg: 'bg-gradient-to-br from-slate-900/80 to-pink-900/20',
          accent: 'text-pink-400'
        };
      case 'neural':
        return {
          border: 'border-green-400/50',
          glow: 'shadow-[0_0_30px_rgba(16,185,129,0.3)]',
          bg: 'bg-gradient-to-br from-slate-900/80 to-green-900/20',
          accent: 'text-green-400'
        };
      case 'space':
        return {
          border: 'border-blue-400/50',
          glow: 'shadow-[0_0_30px_rgba(59,130,246,0.3)]',
          bg: 'bg-gradient-to-br from-slate-900/80 to-blue-900/20',
          accent: 'text-blue-400'
        };
      case 'matrix':
        return {
          border: 'border-emerald-400/50',
          glow: 'shadow-[0_0_30px_rgba(16,185,129,0.3)]',
          bg: 'bg-gradient-to-br from-slate-900/80 to-emerald-900/20',
          accent: 'text-emerald-400'
        };
      default:
        return {
          border: 'border-cyan-400/50',
          glow: 'shadow-[0_0_30px_rgba(0,255,255,0.3)]',
          bg: 'bg-gradient-to-br from-slate-900/80 to-cyan-900/20',
          accent: 'text-cyan-400'
        };
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <motion.div
      className={`relative group cursor-pointer overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-500 ${variantStyles.border} ${variantStyles.glow} ${variantStyles.bg} ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Quantum Particle Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatePresence>
          {Array.from({ length: particleCount }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              initial={{
                x: Math.random() * 400 - 200,
                y: Math.random() * 400 - 200,
                opacity: 0,
                scale: 0
              }}
              animate={{
                x: Math.random() * 400 - 200,
                y: Math.random() * 400 - 200,
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Holographic Border Effect */}
      <div className="absolute inset-0 rounded-2xl">
        <motion.div
          className="absolute inset-0 rounded-2xl border border-transparent"
          animate={{
            background: [
              'linear-gradient(45deg, transparent, rgba(0,255,255,0.1), transparent)',
              'linear-gradient(45deg, transparent, rgba(139,92,246,0.1), transparent)',
              'linear-gradient(45deg, transparent, rgba(236,73,153,0.1), transparent)',
              'linear-gradient(45deg, transparent, rgba(0,255,255,0.1), transparent)'
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Card Content */}
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <motion.div
              className={`text-4xl ${variantStyles.accent}`}
              animate={{
                rotate: isHovered ? [0, 10, -10, 0] : 0,
                scale: isHovered ? 1.1 : 1
              }}
              transition={{ duration: 0.5 }}
            >
              {service.icon}
            </motion.div>
            <div>
              <motion.h3 
                className="text-xl font-bold text-white mb-1"
                animate={{ color: isHovered ? variantStyles.accent : '#ffffff' }}
                transition={{ duration: 0.3 }}
              >
                {service.name}
              </motion.h3>
              <p className="text-gray-300 text-sm">{service.tagline}</p>
            </div>
          </div>
          
          {service.popular && (
            <motion.div
              className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-semibold text-white"
              animate={{
                scale: isHovered ? 1.1 : 1,
                boxShadow: isHovered ? '0 0 20px rgba(245,158,11,0.5)' : '0 0 0px rgba(245,158,11,0)'
              }}
              transition={{ duration: 0.3 }}
            >
              POPULAR
            </motion.div>
          )}
        </div>

        {/* Price */}
        <motion.div 
          className="mb-4"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-white">{service.price}</span>
            <span className="text-gray-400">{service.period}</span>
          </div>
        </motion.div>

        {/* Description */}
        <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <motion.div 
            className="text-center p-2 rounded-lg bg-black/20 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-center mb-1">
              <Star className="w-4 h-4 text-yellow-400" />
            </div>
            <div className="text-sm font-semibold text-white">{service.rating}</div>
            <div className="text-xs text-gray-400">{service.reviews} reviews</div>
          </motion.div>
          
          <motion.div 
            className="text-center p-2 rounded-lg bg-black/20 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-center mb-1">
              <Users className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-sm font-semibold text-white">{service.customers}</div>
            <div className="text-xs text-gray-400">customers</div>
          </motion.div>
          
          <motion.div 
            className="text-center p-2 rounded-lg bg-black/20 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-center mb-1">
              <TrendingUp className="w-4 h-4 text-green-400" />
            </div>
            <div className="text-sm font-semibold text-white">{service.category}</div>
            <div className="text-xs text-gray-400">category</div>
          </motion.div>
        </div>

        {/* Features Preview */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
            <Zap className="w-4 h-4 mr-2 text-yellow-400" />
            Key Features
          </h4>
          <div className="space-y-1">
            {service.features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center text-sm text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                {feature}
              </motion.div>
            ))}
            {service.features.length > 3 && (
              <motion.div
                className="text-xs text-gray-400 mt-2 cursor-pointer hover:text-cyan-400 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
              >
                +{service.features.length - 3} more features
              </motion.div>
            )}
          </div>
        </div>

        {/* Expanded Features */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-4 overflow-hidden"
            >
              <div className="space-y-1 pt-2 border-t border-gray-700">
                {service.features.slice(3).map((feature, index) => (
                  <motion.div
                    key={index + 3}
                    className="flex items-center text-sm text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2" />
                    {feature}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Information */}
        <motion.div 
          className="mb-4 p-3 rounded-lg bg-black/30 backdrop-blur-sm border border-gray-700/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
            <Shield className="w-4 h-4 mr-2 text-green-400" />
            Contact Information
          </h4>
          <div className="space-y-1 text-xs text-gray-300">
            <div className="flex items-center">
              <span className="text-gray-400 w-16">Mobile:</span>
              <span className="text-white">{service.contactInfo.mobile}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-400 w-16">Email:</span>
              <span className="text-white">{service.contactInfo.email}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-400 w-16">Address:</span>
              <span className="text-white">{service.contactInfo.address}</span>
            </div>
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.div
          className="flex items-center justify-between"
          animate={{ y: isHovered ? -2 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className={`flex-1 bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.stopPropagation();
              window.open(service.link, '_blank');
            }}
          >
            <span>Get Started</span>
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* AI Assistant Indicator */}
        <motion.div
          className="absolute top-4 right-4 flex items-center space-x-1 text-xs text-gray-400"
          animate={{ opacity: isHovered ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
        >
          <Brain className="w-3 h-3 text-cyan-400" />
          <span>AI Powered</span>
        </motion.div>
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,255,255,0.1) 0%, transparent 50%)`
        }}
      />
    </motion.div>
  );
};

export default UltraAdvancedFuturisticCard;