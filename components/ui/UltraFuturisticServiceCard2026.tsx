import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, CheckCircle, Zap, Brain, Atom, Rocket } from 'lucide-react';
import { renderServicePrice } from '../../utils/serviceUtils';

interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  category: string;
  icon: string;
}

interface UltraFuturisticServiceCard2026Props {
  service: Service;
  variant?: 'default' | 'quantum' | 'ai' | 'automation' | 'it' | 'emerging' | 'enterprise' | 'premium';
  theme?: 'quantum' | 'cyber' | 'neon';
  className?: string;
  onClick?: () => void;
}

const UltraFuturisticServiceCard2026: React.FC<UltraFuturisticServiceCard2026Props> = ({
  service,
  variant = 'default',
  theme = 'quantum',
  className = '',
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Get variant-specific styles
  const getVariantStyles = useCallback((variant: string) => {
    switch (variant) {
      case 'quantum':
        return {
          border: 'border-cyan-500/30 hover:border-cyan-400/60',
          gradient: 'from-cyan-500/20 to-blue-500/20',
          text: 'text-cyan-400',
          accent: 'bg-cyan-500/20',
          icon: <Atom className="w-6 h-6 text-cyan-400" />
        };
      case 'ai':
        return {
          border: 'border-purple-500/30 hover:border-purple-400/60',
          gradient: 'from-purple-500/20 to-pink-500/20',
          text: 'text-purple-400',
          accent: 'bg-purple-500/20',
          icon: <Brain className="w-6 h-6 text-purple-400" />
        };
      case 'automation':
        return {
          border: 'border-green-500/30 hover:border-green-400/60',
          gradient: 'from-green-500/20 to-emerald-500/20',
          text: 'text-green-400',
          accent: 'bg-green-500/20',
          icon: <Zap className="w-6 h-6 text-green-400" />
        };
      case 'it':
        return {
          border: 'border-blue-500/30 hover:border-blue-400/60',
          gradient: 'from-blue-500/20 to-indigo-500/20',
          text: 'text-blue-400',
          accent: 'bg-blue-500/20',
          icon: <Rocket className="w-6 h-6 text-blue-400" />
        };
      case 'emerging':
        return {
          border: 'border-yellow-500/30 hover:border-yellow-400/60',
          gradient: 'from-yellow-500/20 to-orange-500/20',
          text: 'text-yellow-400',
          accent: 'bg-yellow-500/20',
          icon: <Star className="w-6 h-6 text-yellow-400" />
        };
      case 'enterprise':
        return {
          border: 'border-indigo-500/30 hover:border-indigo-400/60',
          gradient: 'from-indigo-500/20 to-purple-500/20',
          text: 'text-indigo-400',
          accent: 'bg-indigo-500/20',
          icon: <CheckCircle className="w-6 h-6 text-indigo-400" />
        };
      case 'premium':
        return {
          border: 'border-amber-500/30 hover:border-amber-400/60',
          gradient: 'from-amber-500/20 to-yellow-500/20',
          text: 'text-amber-400',
          accent: 'bg-amber-500/20',
          icon: <Star className="w-6 h-6 text-amber-400" />
        };
      default:
        return {
          border: 'border-white/20 hover:border-white/40',
          gradient: 'from-white/10 to-white/5',
          text: 'text-white',
          accent: 'bg-white/10',
          icon: <Star className="w-6 h-6 text-white" />
        };
    }
  }, []);

  const variantStyles = getVariantStyles(variant);

  const handleCardClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  const toggleExpanded = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer ${className}`}
      role="button"
      tabIndex={0}
      aria-label={`${service.name} service card`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Layers */}
      <div className={`absolute inset-0 bg-gradient-to-br ${variantStyles.gradient} ${variantStyles.border} transition-all duration-500`}></div>
      <div className={`absolute inset-0 bg-gradient-to-br ${variantStyles.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
      
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          rotate: isHovered ? 360 : 0,
        }}
        transition={{ duration: 20, ease: "linear" }}
      >
        <div className="absolute top-4 right-4 w-16 h-16 border border-current opacity-20 rounded-full"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 border border-current opacity-20 transform rotate-45"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-4xl mb-2" aria-hidden="true">{service.icon}</div>
            <div className="flex items-center gap-2">
              {variantStyles.icon}
            </div>
          </div>
          {service.popular && (
            <motion.div 
              className={`px-3 py-1 rounded-full text-xs font-semibold ${variantStyles.accent} ${variantStyles.text}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              Popular
            </motion.div>
          )}
        </div>

        {/* Service Info */}
        <div className="flex-1">
          <motion.h3 
            className={`text-xl font-bold mb-2 ${variantStyles.text}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {service.name}
          </motion.h3>
          
          <motion.p 
            className="text-gray-300 text-sm mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {service.tagline}
          </motion.p>
          
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-2xl font-bold text-white">{renderServicePrice(service)}</span>
            <span className="text-gray-400 text-sm ml-1">{service.period}</span>
          </motion.div>

          {/* Features */}
          <motion.div 
            className="space-y-2 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {service.features.slice(0, isExpanded ? service.features.length : 3).map((feature, index) => (
              <motion.div 
                key={feature}
                className="flex items-center text-sm text-gray-300"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className={`w-2 h-2 rounded-full mr-3 ${variantStyles.accent}`}></div>
                {feature}
              </motion.div>
            ))}
          </motion.div>

          {/* Show More/Less Button */}
          {service.features.length > 3 && (
            <motion.button 
              className={`text-sm ${variantStyles.text} hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-cyan-400`}
              onClick={toggleExpanded}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? 'Show Less' : `Show ${service.features.length - 3} More`}
            </motion.button>
          )}
        </div>

        {/* Action Button */}
        <motion.button 
          className={`w-full mt-4 py-3 px-4 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-cyan-400 ${variantStyles.accent} ${variantStyles.text} hover:bg-opacity-30 focus:ring-opacity-40 flex items-center justify-center gap-2`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </motion.button>

        {/* Hover Effect Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </div>
    </motion.div>
  );
};

export default UltraFuturisticServiceCard2026;