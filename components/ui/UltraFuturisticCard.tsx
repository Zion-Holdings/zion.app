import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Star } from 'lucide-react';

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
    initial: { opacity: 0, rotate: 0 },
    animate: { 
      opacity: [0, 1, 0], 
      rotate: [0, 360],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear" as const
      }
    }
  };

  const neuralVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { 
      opacity: [0, 1, 0], 
      scale: [0.5, 1.5, 0.5],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'quantum':
        return {
          background: `linear-gradient(135deg, ${gradient})`,
          border: `2px solid ${color}`,
          boxShadow: `0 0 30px ${color}40`
        };
      case 'holographic':
        return {
          background: `linear-gradient(135deg, ${gradient})`,
          border: `1px solid ${color}60`,
          backdropFilter: 'blur(10px)',
          boxShadow: `0 0 40px ${color}30`
        };
      case 'neural':
        return {
          background: `linear-gradient(135deg, ${gradient})`,
          border: `2px solid ${color}`,
          boxShadow: `0 0 50px ${color}50`
        };
      default:
        return {
          background: `linear-gradient(135deg, ${gradient})`,
          border: `1px solid ${color}40`
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
            d="M 0 50 Q 100 0 200 50 T 400 50"
            stroke={color}
            strokeWidth="1"
            fill="none"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.path
            d="M 0 150 Q 100 100 200 150 T 400 150"
            stroke={color}
            strokeWidth="1"
            fill="none"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </svg>
      </div>

      {/* Popular Badge */}
      {popular && (
        <motion.div
          className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <Star className="w-4 h-4 inline mr-1" />
          Popular
        </motion.div>
      )}

      {/* Card Content */}
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <motion.div
              className="p-3 rounded-xl"
              style={{ backgroundColor: `${color}20` }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {icon}
            </motion.div>
            <div>
              <h3 className={`text-xl font-bold ${textColor} mb-1`}>{title}</h3>
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
              className="p-2 rounded-lg"
              style={{ backgroundColor: `${color}20` }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </motion.div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>

        {/* Features */}
        {features.length > 0 && (
          <div className="mb-4">
            <div className="grid grid-cols-1 gap-2">
              {features.slice(0, isExpanded ? features.length : 3).map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 text-gray-300 text-sm"
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
                className="mt-3 text-sm text-blue-400 hover:text-blue-300 transition-colors"
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
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <span className="flex items-center justify-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default UltraFuturisticCard;