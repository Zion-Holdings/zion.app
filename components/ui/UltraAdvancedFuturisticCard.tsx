import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, ExternalLink, Star, Zap, Shield, TrendingUp } from 'lucide-react';

interface UltraAdvancedFuturisticCardProps {
  title: string;
  description: string;
  price?: string;
  features?: string[];
  link?: string;
  color?: string;
  marketData?: string;
  competitors?: string;
  savings?: string;
  contactInfo?: string;
  icon?: string;
  variant?: 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum-holographic';
  className?: string;
  children?: React.ReactNode;
}

const UltraAdvancedFuturisticCard: React.FC<UltraAdvancedFuturisticCardProps> = ({
  title,
  description,
  price,
  features = [],
  link,
  color = 'from-purple-500 to-indigo-600',
  marketData,
  competitors,
  savings,
  contactInfo,
  icon,
  variant = 'default',
  className = '',
  children
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);
  
  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'quantum':
        return {
          border: 'border-cyan-400/30',
          glow: 'shadow-cyan-400/20',
          accent: 'from-cyan-400 to-blue-500',
          text: 'text-cyan-400'
        };
      case 'holographic':
        return {
          border: 'border-purple-400/30',
          glow: 'shadow-purple-400/20',
          accent: 'from-purple-400 to-pink-500',
          text: 'text-purple-400'
        };
      case 'cyberpunk':
        return {
          border: 'border-red-400/30',
          glow: 'shadow-red-400/20',
          accent: 'from-red-400 to-orange-500',
          text: 'text-red-400'
        };
      case 'neural':
        return {
          border: 'border-green-400/30',
          glow: 'shadow-green-400/20',
          accent: 'from-green-400 to-emerald-500',
          text: 'text-green-400'
        };
      default:
        return {
          border: 'border-slate-600/30',
          glow: 'shadow-slate-400/20',
          accent: 'from-slate-400 to-gray-500',
          text: 'text-slate-400'
        };
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <motion.div
      ref={cardRef}
      className={`relative group cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl" />
      
      {/* Animated Border */}
      <div className={`absolute inset-0 rounded-2xl border ${variantStyles.border} transition-all duration-500`}>
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${variantStyles.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
      </div>

      {/* Glow Effect */}
      <div className={`absolute inset-0 rounded-2xl ${variantStyles.glow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Main Card Content */}
      <motion.div
        className="relative p-6 rounded-2xl h-full"
        style={{
          transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)',
          rotateX: springRotateX,
          rotateY: springRotateY,
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            {icon && (
              <div className="text-3xl mb-3 animate-pulse">
                {icon}
              </div>
            )}
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
              {title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Price and Market Data */}
        {price && (
          <div className="mb-4">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
              {price}
            </div>
            {marketData && (
              <div className="text-xs text-slate-400 bg-slate-800/50 px-2 py-1 rounded-full inline-block">
                📊 {marketData}
              </div>
            )}
          </div>
        )}

        {/* Features */}
        {features.length > 0 && (
          <div className="mb-4">
            <div className="text-sm font-semibold text-slate-300 mb-2 flex items-center">
              <Zap className="w-4 h-4 mr-2 text-yellow-400" />
              Key Features
            </div>
            <ul className="space-y-2">
              {features.slice(0, 4).map((feature, index) => (
                <motion.li
                  key={index}
                  className="text-xs text-slate-400 flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-2" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {/* Competitive Analysis */}
        {(competitors || savings) && (
          <div className="mb-4 p-3 bg-slate-800/30 rounded-lg border border-slate-700/50">
            {competitors && (
              <div className="text-xs text-slate-400 mb-1">
                <span className="text-slate-500">vs.</span> {competitors}
              </div>
            )}
            {savings && (
              <div className="text-sm font-semibold text-green-400 flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                {savings}
              </div>
            )}
          </div>
        )}

        {/* Contact Information */}
        {contactInfo && (
          <div className="mb-4 p-3 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-lg border border-slate-600/50">
            <div className="text-xs text-slate-300 font-mono">
              {contactInfo}
            </div>
          </div>
        )}

        {/* Action Button */}
        {link && (
          <motion.div
            className="mt-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r ${color} hover:from-opacity-90 hover:to-opacity-90 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25`}
            >
              Explore Service
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        )}

        {/* Children Content */}
        {children}

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          {/* Animated particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-30"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Hover Effects Overlay */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-purple-500/5 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      {/* Press Effect */}
      {isPressed && (
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.div>
  );
};

export default UltraAdvancedFuturisticCard;