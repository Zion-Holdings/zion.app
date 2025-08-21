import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Zap, Shield, TrendingUp, ArrowRight, ExternalLink, Check, Sparkles, Atom, Brain, Rocket, Globe, Cpu, Database, Lock, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Code, BookOpen, Activity, Settings, Mail, Phone, MapPin } from 'lucide-react';

interface UltraAdvancedFuturisticCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
  color?: string;
  textColor?: string;
  features?: string[];
  price?: string;
  period?: string;
  popular?: boolean;
  onClick?: () => void;
  link?: string;
  className?: string;
  children?: React.ReactNode;
  contactInfo?: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
}

const UltraAdvancedFuturisticCard: React.FC<UltraAdvancedFuturisticCardProps> = ({
  title,
  description,
  icon,
  variant = 'default',
  color = 'from-blue-500 to-purple-600',
  textColor = 'text-blue-400',
  features = [],
  price,
  period,
  popular = false,
  onClick,
  link,
  className = '',
  children,
  contactInfo
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; vx: number; vy: number; life: number }>>([]);

  useEffect(() => {
    if (isHovered && variant.includes('quantum')) {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 300,
        y: Math.random() * 200,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        life: 0
      }));
      setParticles(newParticles);
    }
  }, [isHovered, variant]);

  useEffect(() => {
    if (particles.length > 0) {
      const interval = setInterval(() => {
        setParticles(prev => 
          prev.map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            life: p.life + 1
          })).filter(p => p.life < 100)
        );
      }, 50);
      return () => clearInterval(interval);
    }
  }, [particles]);

  const getVariantStyles = () => {
    switch (variant) {
      case 'quantum':
        return {
          background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
          border: '1px solid rgba(0, 255, 255, 0.3)',
          boxShadow: '0 0 30px rgba(0, 255, 255, 0.2), inset 0 0 30px rgba(0, 255, 255, 0.05)'
        };
      case 'holographic':
        return {
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1), rgba(245, 158, 11, 0.1))',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          boxShadow: '0 0 30px rgba(139, 92, 246, 0.2), inset 0 0 30px rgba(139, 92, 246, 0.05)'
        };
      case 'cyberpunk':
        return {
          background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(245, 158, 11, 0.1), rgba(239, 68, 68, 0.1))',
          border: '1px solid rgba(236, 72, 153, 0.3)',
          boxShadow: '0 0 30px rgba(236, 72, 153, 0.2), inset 0 0 30px rgba(236, 72, 153, 0.05)'
        };
      case 'neural':
        return {
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          boxShadow: '0 0 30px rgba(16, 185, 129, 0.2), inset 0 0 30px rgba(16, 185, 129, 0.05)'
        };
      case 'quantum-entanglement':
        return {
          background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.15), rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.15), rgba(16, 185, 129, 0.15))',
          border: '2px solid rgba(0, 255, 255, 0.4)',
          boxShadow: '0 0 40px rgba(0, 255, 255, 0.3), inset 0 0 40px rgba(0, 255, 255, 0.1)'
        };
      case 'holographic-matrix':
        return {
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.15), rgba(16, 185, 129, 0.15))',
          border: '2px solid rgba(139, 92, 246, 0.4)',
          boxShadow: '0 0 40px rgba(139, 92, 246, 0.3), inset 0 0 40px rgba(139, 92, 246, 0.1)'
        };
      case 'neural-quantum-cyberpunk':
        return {
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.15))',
          border: '2px solid rgba(16, 185, 129, 0.4)',
          boxShadow: '0 0 40px rgba(16, 185, 129, 0.3), inset 0 0 40px rgba(16, 185, 129, 0.1)'
        };
      default:
        return {
          background: `linear-gradient(135deg, ${color.replace('from-', 'rgba(').replace('to-', 'rgba(').replace('-', ', 0.1), ').replace('500', '500, 0.1)')}`,
          border: `1px solid ${textColor.replace('text-', 'rgba(').replace('-', ', 0.3)')}`,
          boxShadow: `0 0 30px ${textColor.replace('text-', 'rgba(').replace('-', ', 0.2)')}, inset 0 0 30px ${textColor.replace('text-', 'rgba(').replace('-', ', 0.05)')}`
        };
    }
  };

  const handleClick = () => {
    if (onClick) {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 200);
      onClick();
    }
  };

  const handleExternalClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-500 ${className}`}
      style={getVariantStyles()}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
    >
      {/* Quantum particle effects */}
      {variant.includes('quantum') && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map(particle => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: particle.x,
                top: particle.y,
                opacity: 1 - particle.life / 100
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 2 }}
            />
          ))}
        </div>
      )}

      {/* Holographic grid effect */}
      {variant.includes('holographic') && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-10">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border-l border-purple-400"
                style={{ left: `${i * 10}%` }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border-t border-purple-400"
                style={{ top: `${i * 10}%` }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Cyberpunk glitch effect */}
      {variant.includes('cyberpunk') && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-cyan-500/5"
            animate={{
              opacity: [0, 0.1, 0],
              x: [0, 2, -2, 0]
            }}
            transition={{
              duration: 0.1,
              repeat: Infinity,
              repeatDelay: 3
            }}
          />
        </div>
      )}

      {/* Neural network connections */}
      {variant.includes('neural') && (
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full">
            {[...Array(8)].map((_, i) => (
              <motion.line
                key={i}
                x1={Math.random() * 100}
                y1={Math.random() * 100}
                x2={Math.random() * 100}
                y2={Math.random() * 100}
                stroke="rgba(16, 185, 129, 0.3)"
                strokeWidth="1"
                animate={{
                  opacity: [0, 1, 0],
                  strokeDasharray: [0, 100]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </svg>
        </div>
      )}

      {/* Popular badge */}
      {popular && (
        <motion.div
          className="absolute -top-3 -right-3 z-10"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            POPULAR
          </div>
        </motion.div>
      )}

      {/* Card content */}
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {icon && (
              <motion.div
                className={`text-3xl ${textColor}`}
                animate={isHovered ? { rotate: 360, scale: 1.1 } : {}}
                transition={{ duration: 0.5 }}
              >
                {icon}
              </motion.div>
            )}
            <div>
              <motion.h3
                className={`text-xl font-bold ${textColor} mb-1`}
                animate={isHovered ? { x: 5 } : {}}
                transition={{ duration: 0.3 }}
              >
                {title}
              </motion.h3>
              {price && (
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-white">{price}</span>
                  {period && <span className="text-gray-400">{period}</span>}
                </div>
              )}
            </div>
          </div>
          
          {/* Action button */}
          {(onClick || link) && (
            <motion.button
              className={`p-2 rounded-full ${textColor} hover:bg-white/10 transition-colors`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={link ? handleExternalClick : handleClick}
            >
              {link ? <ExternalLink className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </motion.button>
          )}
        </div>

        {/* Description */}
        <motion.p
          className="text-gray-300 mb-4 leading-relaxed"
          animate={isHovered ? { color: "#ffffff" } : {}}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>

        {/* Features */}
        {features.length > 0 && (
          <div className="mb-4">
            <h4 className={`text-sm font-semibold ${textColor} mb-2 flex items-center gap-2`}>
              <Sparkles className="w-4 h-4" />
              Key Features
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {features.slice(0, 3).map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
              {features.length > 3 && (
                <motion.div
                  className="text-sm text-gray-400 italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  +{features.length - 3} more features
                </motion.div>
              )}
            </div>
          </div>
        )}

        {/* Contact Information */}
        {contactInfo && (
          <motion.div
            className="mt-4 p-3 bg-black/20 rounded-lg border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h4 className={`text-sm font-semibold ${textColor} mb-2 flex items-center gap-2`}>
              <Phone className="w-4 h-4" />
              Contact Information
            </h4>
            <div className="space-y-1 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3" />
                <span className="text-xs">{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Children content */}
        {children && (
          <motion.div
            className="mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {children}
          </motion.div>
        )}

        {/* Quantum entanglement effect */}
        {variant.includes('quantum-entanglement') && (
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute inset-0 border border-cyan-400/20 rounded-2xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        )}
      </div>

      {/* Click effect */}
      <AnimatePresence>
        {isClicked && (
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-2xl"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default UltraAdvancedFuturisticCard;