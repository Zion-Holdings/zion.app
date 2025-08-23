import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ExternalLink, Star, Zap, Shield, Users, TrendingUp } from 'lucide-react';

interface AdvancedFuturisticCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  price?: string;
  period?: string;
  features?: string[];
  link?: string;
  variant?: 'default' | 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'space' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-space';
  popular?: boolean;
  badge?: string;
  stats?: Array<{
    label: string;
    value: string;
    icon: React.ReactNode;
  }>;
  className?: string;
  children?: React.ReactNode;
}

export default function AdvancedFuturisticCard({
  title,
  description,
  icon,
  price,
  period,
  features = [],
  link,
  variant = 'default',
  popular = false,
  badge,
  stats = [],
  className = '',
  children
}: AdvancedFuturisticCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Variant-specific styling
  const getVariantStyles = () => {
    const baseStyles = {
      quantum: {
        border: 'border-purple-500/30',
        glow: 'shadow-purple-500/20',
        gradient: 'from-purple-500/10 via-indigo-500/10 to-purple-500/10',
        accent: 'text-purple-400',
        bg: 'bg-gradient-to-br from-purple-900/20 via-indigo-900/20 to-purple-900/20'
      },
      holographic: {
        border: 'border-cyan-500/30',
        glow: 'shadow-cyan-500/20',
        gradient: 'from-cyan-500/10 via-blue-500/10 to-cyan-500/10',
        accent: 'text-cyan-400',
        bg: 'bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-cyan-900/20'
      },
      cyberpunk: {
        border: 'border-red-500/30',
        glow: 'shadow-red-500/20',
        gradient: 'from-red-500/10 via-orange-500/10 to-red-500/10',
        accent: 'text-red-400',
        bg: 'bg-gradient-to-br from-red-900/20 via-orange-900/20 to-red-900/20'
      },
      neural: {
        border: 'border-green-500/30',
        glow: 'shadow-green-500/20',
        gradient: 'from-green-500/10 via-emerald-500/10 to-green-500/10',
        accent: 'text-green-400',
        bg: 'bg-gradient-to-br from-green-900/20 via-emerald-900/20 to-green-900/20'
      },
      space: {
        border: 'border-blue-500/30',
        glow: 'shadow-blue-500/20',
        gradient: 'from-blue-500/10 via-indigo-500/10 to-purple-500/10',
        accent: 'text-blue-400',
        bg: 'bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-purple-900/20'
      },
      'quantum-entanglement': {
        border: 'border-purple-500/40',
        glow: 'shadow-purple-500/30',
        gradient: 'from-purple-500/15 via-indigo-500/15 to-purple-500/15',
        accent: 'text-purple-400',
        bg: 'bg-gradient-to-br from-purple-900/25 via-indigo-900/25 to-purple-900/25'
      },
      'holographic-matrix': {
        border: 'border-cyan-500/40',
        glow: 'shadow-cyan-500/30',
        gradient: 'from-cyan-500/15 via-blue-500/15 to-cyan-500/15',
        accent: 'text-cyan-400',
        bg: 'bg-gradient-to-br from-cyan-900/25 via-blue-900/25 to-cyan-900/25'
      },
      'neural-quantum': {
        border: 'border-green-500/40',
        glow: 'shadow-green-500/30',
        gradient: 'from-green-500/15 via-emerald-500/15 to-purple-500/15',
        accent: 'text-green-400',
        bg: 'bg-gradient-to-br from-green-900/25 via-emerald-900/25 to-purple-900/25'
      },
      'quantum-cyberpunk': {
        border: 'border-purple-500/40',
        glow: 'shadow-purple-500/30',
        gradient: 'from-purple-500/15 via-red-500/15 to-purple-500/15',
        accent: 'text-purple-400',
        bg: 'bg-gradient-to-br from-purple-900/25 via-red-900/25 to-purple-900/25'
      },
      'holographic-neural': {
        border: 'border-cyan-500/40',
        glow: 'shadow-cyan-500/30',
        gradient: 'from-cyan-500/15 via-green-500/15 to-cyan-500/15',
        accent: 'text-cyan-400',
        bg: 'bg-gradient-to-br from-cyan-900/25 via-green-900/25 to-cyan-900/25'
      },
      'quantum-space': {
        border: 'border-purple-500/40',
        glow: 'shadow-purple-500/30',
        gradient: 'from-purple-500/15 via-blue-500/15 to-indigo-500/15',
        accent: 'text-purple-400',
        bg: 'bg-gradient-to-br from-purple-900/25 via-blue-900/25 to-indigo-900/25'
      },
      default: {
        border: 'border-blue-500/30',
        glow: 'shadow-blue-500/20',
        gradient: 'from-blue-500/10 via-indigo-500/10 to-blue-500/10',
        accent: 'text-blue-400',
        bg: 'bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-blue-900/20'
      }
    };

    return baseStyles[variant as keyof typeof baseStyles] || baseStyles.default;
  };

  const variantStyles = getVariantStyles();

  // Holographic effect
  useEffect(() => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    if (isHovered) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovered]);

  return (
    <motion.div
      ref={cardRef}
      className={`relative group cursor-pointer transition-all duration-500 ease-out ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Holographic border effect */}
      <div className={`absolute inset-0 rounded-2xl ${variantStyles.border} ${variantStyles.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Main card */}
      <motion.div
        className={`relative overflow-hidden rounded-2xl ${variantStyles.bg} backdrop-blur-xl border border-white/10 ${variantStyles.border} transition-all duration-500`}
        whileHover={{ 
          scale: 1.02,
          boxShadow: `0 20px 40px ${variantStyles.glow}`,
        }}
        animate={{
          boxShadow: isHovered 
            ? `0 20px 40px ${variantStyles.glow}` 
            : '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Holographic overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative p-6 space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              {icon && (
                <motion.div
                  className={`text-3xl ${variantStyles.accent}`}
                  animate={{ rotate: isHovered ? 360 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {icon}
                </motion.div>
              )}
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors duration-300">
                  {title}
                </h3>
                {badge && (
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                    {badge}
                  </span>
                )}
              </div>
            </div>
            
            {popular && (
              <motion.div
                className="flex items-center space-x-1 text-yellow-400"
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">Popular</span>
              </motion.div>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>

          {/* Price */}
          {price && (
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-white">{price}</span>
              {period && (
                <span className="text-gray-400">{period}</span>
              )}
            </div>
          )}

          {/* Stats */}
          {stats.length > 0 && (
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`${variantStyles.accent}`}>
                    {stat.icon}
                  </div>
                  <div>
                    <div className="font-medium text-white">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Features */}
          {features.length > 0 && (
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="pt-4 border-t border-white/10"
                >
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center space-x-2 text-sm text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${variantStyles.accent} bg-current`} />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          )}

          {/* Action button */}
          {link && (
            <motion.div
              className="pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r ${variantStyles.gradient} text-white font-medium hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </motion.div>
          )}

          {/* Expand/Collapse indicator */}
          {features.length > 0 && (
            <motion.div
              className="flex justify-center pt-2"
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronRight className={`w-5 h-5 ${variantStyles.accent} transition-colors duration-300`} />
            </motion.div>
          )}
        </div>

        {/* Holographic particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 ${variantStyles.accent} rounded-full`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Children content */}
      {children && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </motion.div>
  );
}