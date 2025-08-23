import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Check, 
  Star, 
  Zap, 
  Brain, 
  Atom, 
  Shield, 
  Rocket,
  TrendingUp,
  Award
} from 'lucide-react';

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

  // Get variant-specific styles with enhanced colors
  const getVariantStyles = useCallback((variant: string) => {
    switch (variant) {
      case 'quantum':
        return {
          border: 'border-cyan-500/40 hover:border-cyan-400/80',
          gradient: 'from-cyan-500/20 via-blue-500/20 to-cyan-600/20',
          text: 'text-cyan-400',
          accent: 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30',
          button: 'from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700',
          shadow: 'hover:shadow-2xl hover:shadow-cyan-500/25'
        };
      case 'ai':
        return {
          border: 'border-purple-500/40 hover:border-purple-400/80',
          gradient: 'from-purple-500/20 via-pink-500/20 to-purple-600/20',
          text: 'text-purple-400',
          accent: 'bg-gradient-to-r from-purple-500/30 to-pink-500/30',
          button: 'from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700',
          shadow: 'hover:shadow-2xl hover:shadow-purple-500/25'
        };
      case 'automation':
        return {
          border: 'border-emerald-500/40 hover:border-emerald-400/80',
          gradient: 'from-emerald-500/20 via-green-500/20 to-emerald-600/20',
          text: 'text-emerald-400',
          accent: 'bg-gradient-to-r from-emerald-500/30 to-green-500/30',
          button: 'from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700',
          shadow: 'hover:shadow-2xl hover:shadow-emerald-500/25'
        };
      case 'it':
        return {
          border: 'border-blue-500/40 hover:border-blue-400/80',
          gradient: 'from-blue-500/20 via-indigo-500/20 to-blue-600/20',
          text: 'text-blue-400',
          accent: 'bg-gradient-to-r from-blue-500/30 to-indigo-500/30',
          button: 'from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700',
          shadow: 'hover:shadow-2xl hover:shadow-blue-500/25'
        };
      case 'emerging':
        return {
          border: 'border-amber-500/40 hover:border-amber-400/80',
          gradient: 'from-amber-500/20 via-orange-500/20 to-amber-600/20',
          text: 'text-amber-400',
          accent: 'bg-gradient-to-r from-amber-500/30 to-orange-500/30',
          button: 'from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700',
          shadow: 'hover:shadow-2xl hover:shadow-amber-500/25'
        };
      case 'enterprise':
        return {
          border: 'border-indigo-500/40 hover:border-indigo-400/80',
          gradient: 'from-indigo-500/20 via-purple-500/20 to-indigo-600/20',
          text: 'text-indigo-400',
          accent: 'bg-gradient-to-r from-indigo-500/30 to-purple-500/30',
          button: 'from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700',
          shadow: 'hover:shadow-2xl hover:shadow-indigo-500/25'
        };
      case 'premium':
        return {
          border: 'border-amber-500/40 hover:border-amber-400/80',
          gradient: 'from-amber-500/20 via-yellow-500/20 to-amber-600/20',
          text: 'text-amber-400',
          accent: 'bg-gradient-to-r from-amber-500/30 to-yellow-500/30',
          button: 'from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700',
          shadow: 'hover:shadow-2xl hover:shadow-amber-500/25'
        };
      default:
        return {
          border: 'border-gray-500/40 hover:border-gray-400/80',
          gradient: 'from-gray-500/20 via-slate-500/20 to-gray-600/20',
          text: 'text-gray-400',
          accent: 'bg-gradient-to-r from-gray-500/30 to-slate-500/30',
          button: 'from-gray-500 to-slate-600 hover:from-gray-600 hover:to-slate-700',
          shadow: 'hover:shadow-2xl hover:shadow-gray-500/25'
        };
    }
  }, []);

  const variantStyles = getVariantStyles(variant);

  const handleCardClick = useCallback(() => {
    if (onClick) {
      onClick();
    } else {
      setIsExpanded(!isExpanded);
    }
  }, [onClick, isExpanded]);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai':
        return <Brain className="w-5 h-5" />;
      case 'quantum':
        return <Atom className="w-5 h-5" />;
      case 'automation':
        return <Zap className="w-5 h-5" />;
      case 'it':
        return <Shield className="w-5 h-5" />;
      case 'emerging':
        return <Rocket className="w-5 h-5" />;
      case 'enterprise':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <Award className="w-5 h-5" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`relative group cursor-pointer transition-all duration-500 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Popular Badge */}
      {service.popular && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="px-4 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full shadow-lg flex items-center space-x-1">
            <Star className="w-3 h-3 fill-current" />
            <span>Most Popular</span>
          </div>
        </motion.div>
      )}

      {/* Main Card */}
      <motion.div
        animate={{
          scale: isHovered ? 1.02 : 1,
          rotateY: isHovered ? 2 : 0
        }}
        transition={{ duration: 0.3 }}
        className={`relative overflow-hidden rounded-2xl border-2 ${variantStyles.border} bg-gradient-to-br ${variantStyles.gradient} backdrop-blur-sm transition-all duration-500 ${variantStyles.shadow}`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>

        {/* Content */}
        <div className="relative p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 ${variantStyles.accent} rounded-xl flex items-center justify-center text-2xl`}>
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                <p className="text-sm text-gray-300">{service.tagline}</p>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-yellow-400">
              {getCategoryIcon(service.category)}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-white">{service.price}</span>
              <span className="text-gray-400">/{service.period}</span>
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
            <div className="space-y-2">
              {service.features.slice(0, isExpanded ? service.features.length : 3).map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center space-x-2 text-sm text-gray-300"
                >
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Show More/Less */}
            {service.features.length > 3 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
                className="mt-3 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 flex items-center space-x-1"
              >
                <span>{isExpanded ? 'Show Less' : `Show ${service.features.length - 3} More`}</span>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-3 h-3" />
                </motion.div>
              </button>
            )}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-3 px-6 bg-gradient-to-r ${variantStyles.button} text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group/btn`}
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </div>

        {/* Hover Effects */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={false}
        />
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </motion.div>
  );
};

export default UltraFuturisticServiceCard2026;