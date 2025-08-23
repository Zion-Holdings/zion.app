import React, { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Crown, Building, Rocket } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  tagline?: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  category: string;
  icon?: string;
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
  const variantStyles = useMemo(() => {
    if (variant === 'premium') {
      return {
        container: 'border-cyan-400/50 bg-gradient-to-br from-cyan-900/20 to-blue-900/20',
        icon: <Crown className="w-5 h-5 text-yellow-400" />,
        badge: 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black',
        button: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700'
      };
    }
    
    if (variant === 'enterprise') {
      return {
        container: 'border-purple-400/50 bg-gradient-to-br from-purple-900/20 to-pink-900/20',
        icon: <Building className="w-5 h-5 text-purple-400" />,
        badge: 'bg-gradient-to-r from-purple-500 to-pink-600',
        button: 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700'
      };
    }
    
    // Default variant
    return {
      container: 'border-gray-600/50 bg-gradient-to-br from-gray-800/20 to-gray-700/20',
      icon: <Rocket className="w-5 h-5 text-cyan-400" />,
      badge: 'bg-gradient-to-r from-cyan-500 to-blue-600',
      button: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700'
    };
  }, [variant]);

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
      <div className={`absolute inset-0 bg-gradient-to-br ${variantStyles.container} transition-all duration-500`}></div>
      <div className={`absolute inset-0 bg-gradient-to-br ${variantStyles.container} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
      
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
            <div className="text-4xl mb-2" aria-hidden="true">
              {service.icon || '🚀'}
            </div>
            <div className="flex items-center gap-2">
              {variantStyles.icon}
            </div>
          </div>
          {service.popular && (
            <motion.div 
              className={`px-3 py-1 rounded-full text-xs font-semibold ${variantStyles.badge}`}
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
            {service.tagline || service.description.substring(0, 100) + '...'}
          </motion.p>
          
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-2xl font-bold text-white">{service.price}</span>
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
          className={`w-full mt-4 py-3 px-4 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-cyan-400 ${variantStyles.button} hover:bg-opacity-30 focus:ring-opacity-40 flex items-center justify-center gap-2`}
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