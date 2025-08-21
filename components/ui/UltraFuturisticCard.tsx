import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Star, Zap, Shield, TrendingUp } from 'lucide-react';

interface UltraFuturisticCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  textColor: string;
  gradient: string;
  features?: string[];
  link?: string;
  popular?: boolean;
  price?: string;
  period?: string;
  variant?: string;
  className?: string;
  children?: React.ReactNode;
}

const UltraFuturisticCard: React.FC<UltraFuturisticCardProps> = ({
  title,
  description,
  icon,
  color,
  textColor,
  gradient,
  features = [],
  link,
  popular = false,
  price,
  period,
  variant = 'default',
  className = '',
  children
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    initial: { 
      scale: 1, 
      rotateY: 0,
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)"
    },
    hover: { 
      scale: 1.02, 
      rotateY: 2,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
    },
    tap: { 
      scale: 0.98 
    }
  };

  const holographicVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: [0, 1, 0], 
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const quantumVariants = {
    initial: { rotate: 0, scale: 1 },
    animate: { 
      rotate: 360, 
      scale: [1, 1.1, 1],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear" as const
      }
    }
  };

  const neuralVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: { 
      pathLength: 1, 
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut" as const
      }
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'quantum':
        return {
          border: '1px solid rgba(100, 200, 255, 0.3)',
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(20, 40, 80, 0.6) 100%)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(100, 200, 255, 0.2)'
        };
      case 'holographic':
        return {
          border: '1px solid rgba(200, 100, 255, 0.3)',
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(80, 20, 120, 0.6) 100%)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(200, 100, 255, 0.2)'
        };
      case 'neural':
        return {
          border: '1px solid rgba(100, 255, 200, 0.3)',
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(20, 80, 40, 0.6) 100%)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(100, 255, 200, 0.2)'
        };
      default:
        return {
          border: '1px solid rgba(255, 255, 255, 0.1)',
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(40, 40, 40, 0.6) 100%)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
        };
    }
  };

  return (
    <motion.div
      className={`relative group cursor-pointer ${className}`}
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
      style={getVariantStyles()}
    >
      {/* Holographic Overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-2xl"
            variants={holographicVariants}
            initial="initial"
            animate="animate"
            style={{
              background: `linear-gradient(45deg, ${color}20, transparent, ${color}20)`,
              pointerEvents: 'none'
            }}
          />
        )}
      </AnimatePresence>

      {/* Quantum Energy Field */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              `radial-gradient(circle at 20% 20%, ${color}10 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 80%, ${color}10 0%, transparent 50%)`,
              `radial-gradient(circle at 20% 20%, ${color}10 0%, transparent 50%)`
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Neural Network Pattern */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-20">
        <svg className="w-full h-full">
          <motion.path
            d="M 0 50 Q 25 25 50 50 T 100 50"
            stroke={color}
            strokeWidth="1"
            fill="none"
            variants={neuralVariants}
            initial="initial"
            animate="animate"
          />
          <motion.path
            d="M 0 75 Q 25 50 50 75 T 100 75"
            stroke={color}
            strokeWidth="1"
            fill="none"
            variants={neuralVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.5 }}
          />
        </svg>
      </div>

      {/* Popular Badge */}
      {popular && (
        <motion.div
          className="absolute -top-3 -right-3 z-10"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <Star className="w-3 h-3" />
            POPULAR
          </div>
        </motion.div>
      )}

      {/* Card Content */}
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <motion.div
              className={`p-3 rounded-xl ${color} bg-opacity-20`}
              variants={quantumVariants}
              initial="initial"
              animate="animate"
            >
              {icon}
            </motion.div>
            <div>
              <h3 className={`text-xl font-bold ${textColor} mb-1`}>
                {title}
              </h3>
              {price && (
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-white">{price}</span>
                  <span className="text-gray-400">{period}</span>
                </div>
              )}
            </div>
          </div>
          
          {link && (
            <motion.div
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </motion.div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        {features.length > 0 && (
          <div className="mb-4">
            <div className="grid grid-cols-1 gap-2">
              {features.slice(0, isExpanded ? features.length : 3).map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-2 h-2 rounded-full ${color}`} />
                  {feature}
                </motion.div>
              ))}
            </div>
            
            {features.length > 3 && (
              <motion.button
                className="mt-3 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isExpanded ? 'Show Less' : `Show ${features.length - 3} More`}
              </motion.button>
            )}
          </div>
        )}

        {/* Action Button */}
        {link && (
          <motion.button
            className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${gradient} text-white hover:shadow-lg hover:shadow-${color}50`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.stopPropagation();
              window.open(link, '_blank');
            }}
          >
            <span className="flex items-center justify-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </span>
          </motion.button>
        )}

        {/* Children Content */}
        {children && (
          <div className="mt-4 pt-4 border-t border-white/10">
            {children}
          </div>
        )}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default UltraFuturisticCard;