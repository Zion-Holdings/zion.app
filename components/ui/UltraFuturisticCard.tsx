import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Zap, Brain, Atom, Shield, Rocket, Star, Check, ArrowRight, ExternalLink, TrendingUp, Users, Globe, Lock, Cpu, Database, BarChart3, Clock, Target, Building, Award, DollarSign, ChartBar, Code, BookOpen, Activity, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, Settings, Mail, Phone, MapPin } from 'lucide-react';

interface UltraFuturisticCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
  glowIntensity?: 'low' | 'medium' | 'high';
  animationSpeed?: 'slow' | 'normal' | 'fast';
}

const UltraFuturisticCard: React.FC<UltraFuturisticCardProps> = ({
  children,
  variant = 'default',
  className = '',
  onClick,
  interactive = false,
  glowIntensity = 'medium',
  animationSpeed = 'normal'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [particleCount, setParticleCount] = useState(0);

  // Animation speed multipliers
  const speedMultipliers = {
    slow: 2,
    normal: 1,
    fast: 0.5
  };

  // Glow intensity classes
  const glowClasses = {
    low: 'shadow-lg',
    medium: 'shadow-2xl',
    high: 'shadow-[0_0_50px_rgba(139,92,246,0.5)]'
  };

  // Variant-specific styling
  const getVariantStyles = () => {
    const baseStyles = 'relative overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-500';
    
    switch (variant) {
      case 'quantum':
        return `${baseStyles} border-purple-500/30 bg-gradient-to-br from-purple-900/20 via-purple-800/10 to-indigo-900/20`;
      case 'holographic':
        return `${baseStyles} border-green-400/30 bg-gradient-to-br from-green-900/20 via-emerald-800/10 to-teal-900/20`;
      case 'cyberpunk':
        return `${baseStyles} border-red-500/30 bg-gradient-to-br from-red-900/20 via-orange-800/10 to-yellow-900/20`;
      case 'neural':
        return `${baseStyles} border-cyan-400/30 bg-gradient-to-br from-cyan-900/20 via-blue-800/10 to-indigo-900/20`;
      case 'quantum-holographic':
        return `${baseStyles} border-purple-400/30 bg-gradient-to-br from-purple-900/20 via-green-800/10 to-teal-900/20`;
      case 'quantum-advanced':
        return `${baseStyles} border-indigo-500/30 bg-gradient-to-br from-indigo-900/20 via-purple-800/10 to-pink-900/20`;
      case 'holographic-advanced':
        return `${baseStyles} border-emerald-400/30 bg-gradient-to-br from-emerald-900/20 via-teal-800/10 to-cyan-900/20`;
      case 'neural-quantum':
        return `${baseStyles} border-cyan-400/30 bg-gradient-to-br from-cyan-900/20 via-purple-800/10 to-indigo-900/20`;
      case 'quantum-cyberpunk':
        return `${baseStyles} border-purple-400/30 bg-gradient-to-br from-purple-900/20 via-red-800/10 to-orange-900/20`;
      case 'holographic-neural':
        return `${baseStyles} border-green-400/30 bg-gradient-to-br from-green-900/20 via-cyan-800/10 to-blue-900/20`;
      case 'quantum-holographic-advanced':
        return `${baseStyles} border-purple-400/30 bg-gradient-to-br from-purple-900/20 via-green-800/10 to-cyan-900/20`;
      case 'quantum-matrix':
        return `${baseStyles} border-purple-400/30 bg-gradient-to-br from-purple-900/20 via-indigo-800/10 to-blue-900/20`;
      case 'neural-cyberpunk':
        return `${baseStyles} border-cyan-400/30 bg-gradient-to-br from-cyan-900/20 via-red-800/10 to-orange-900/20`;
      case 'holographic-quantum':
        return `${baseStyles} border-green-400/30 bg-gradient-to-br from-green-900/20 via-purple-800/10 to-indigo-900/20`;
      case 'quantum-neural-advanced':
        return `${baseStyles} border-purple-400/30 bg-gradient-to-br from-purple-900/20 via-cyan-800/10 to-blue-900/20`;
      case 'cyberpunk-holographic':
        return `${baseStyles} border-red-400/30 bg-gradient-to-br from-red-900/20 via-green-800/10 to-teal-900/20`;
      case 'quantum-space':
        return `${baseStyles} border-purple-400/30 bg-gradient-to-br from-purple-900/20 via-indigo-800/10 to-blue-900/20`;
      case 'ai-futuristic':
        return `${baseStyles} border-blue-400/30 bg-gradient-to-br from-blue-900/20 via-indigo-800/10 to-purple-900/20`;
      case 'quantum-entanglement':
        return `${baseStyles} border-purple-400/30 bg-gradient-to-br from-purple-900/20 via-pink-800/10 to-indigo-900/20`;
      case 'holographic-matrix':
        return `${baseStyles} border-green-400/30 bg-gradient-to-br from-green-900/20 via-emerald-800/10 to-teal-900/20`;
      case 'neural-quantum-cyberpunk':
        return `${baseStyles} border-cyan-400/30 bg-gradient-to-br from-cyan-900/20 via-purple-800/10 to-red-900/20`;
      default:
        return `${baseStyles} border-gray-500/30 bg-gradient-to-br from-gray-900/20 via-slate-800/10 to-gray-900/20`;
    }
  };

  // Hover effects
  const hoverEffects = {
    scale: interactive ? 1.02 : 1,
    rotateY: interactive ? 2 : 0,
    rotateX: interactive ? 1 : 0,
  };

  // Particle animation
  useEffect(() => {
    if (isHovered && interactive) {
      const interval = setInterval(() => {
        setParticleCount(prev => (prev + 1) % 20);
      }, 100 * speedMultipliers[animationSpeed]);
      
      return () => clearInterval(interval);
    }
  }, [isHovered, interactive, animationSpeed]);

  // Generate floating particles
  const generateParticles = () => {
    const particles = [];
    for (let i = 0; i < 8; i++) {
      particles.push(
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full ${
            variant.includes('quantum') ? 'bg-purple-400' :
            variant.includes('holographic') ? 'bg-green-400' :
            variant.includes('cyberpunk') ? 'bg-red-400' :
            variant.includes('neural') ? 'bg-cyan-400' : 'bg-blue-400'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2 * speedMultipliers[animationSpeed],
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      );
    }
    return particles;
  };

  // Generate holographic grid
  const generateHolographicGrid = () => {
    if (!variant.includes('holographic')) return null;
    
    return (
      <div className="absolute inset-0 opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-green-400/30"
            style={{
              left: `${i * 20}%`,
              top: `${i * 20}%`,
              width: `${100 - i * 20}%`,
              height: `${100 - i * 20}%`,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3 * speedMultipliers[animationSpeed],
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  };

  // Generate quantum field lines
  const generateQuantumField = () => {
    if (!variant.includes('quantum')) return null;
    
    return (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              transform: 'rotate(-15deg)',
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4 * speedMultipliers[animationSpeed],
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  };

  // Generate neural network
  const generateNeuralNetwork = () => {
    if (!variant.includes('neural')) return null;
    
    return (
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/60 rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + Math.sin(i) * 20}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2 * speedMultipliers[animationSpeed],
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  };

  // Generate cyberpunk elements
  const generateCyberpunkElements = () => {
    if (!variant.includes('cyberpunk')) return null;
    
    return (
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-8 bg-red-400/60"
            style={{
              left: `${15 + i * 25}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              height: [32, 48, 32],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.5 * speedMultipliers[animationSpeed],
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <motion.div
      className={`${getVariantStyles()} ${glowClasses[glowIntensity]} ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onClick={onClick}
      whileHover={hoverEffects}
      whileTap={interactive ? { scale: 0.98 } : {}}
      animate={{
        boxShadow: isHovered || isFocused 
          ? `0 0 30px ${variant.includes('quantum') ? 'rgba(139, 92, 246, 0.4)' : 
                       variant.includes('holographic') ? 'rgba(16, 185, 129, 0.4)' :
                       variant.includes('cyberpunk') ? 'rgba(239, 68, 68, 0.4)' :
                       variant.includes('neural') ? 'rgba(6, 182, 212, 0.4)' : 'rgba(59, 130, 246, 0.4)'}`
          : '0 0 20px rgba(0, 0, 0, 0.1)'
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut"
      }}
      style={{
        cursor: interactive ? 'pointer' : 'default',
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5" />
        
        {/* Holographic grid */}
        {generateHolographicGrid()}
        
        {/* Quantum field lines */}
        {generateQuantumField()}
        
        {/* Neural network */}
        {generateNeuralNetwork()}
        
        {/* Cyberpunk elements */}
        {generateCyberpunkElements()}
        
        {/* Floating particles */}
        <AnimatePresence>
          {isHovered && interactive && generateParticles()}
        </AnimatePresence>
      </div>

      {/* Glow effects */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <motion.div
          className={`absolute inset-0 rounded-2xl ${
            variant.includes('quantum') ? 'bg-gradient-to-r from-purple-500/20 via-transparent to-indigo-500/20' :
            variant.includes('holographic') ? 'bg-gradient-to-r from-green-500/20 via-transparent to-teal-500/20' :
            variant.includes('cyberpunk') ? 'bg-gradient-to-r from-red-500/20 via-transparent to-orange-500/20' :
            variant.includes('neural') ? 'bg-gradient-to-r from-cyan-500/20 via-transparent to-blue-500/20' : 'bg-gradient-to-r from-blue-500/20 via-transparent to-indigo-500/20'
          }`}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 4 * speedMultipliers[animationSpeed],
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>

      {/* Interactive border glow */}
      {interactive && (
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-transparent"
          style={{
            background: `linear-gradient(45deg, 
              ${variant.includes('quantum') ? '#8B5CF6' : 
                variant.includes('holographic') ? '#10B981' :
                variant.includes('cyberpunk') ? '#EF4444' :
                variant.includes('neural') ? '#06B6D4' : '#3B82F6'}, 
              transparent, 
              ${variant.includes('quantum') ? '#06B6D4' : 
                variant.includes('holographic') ? '#F59E0B' :
                variant.includes('cyberpunk') ? '#F59E0B' :
                variant.includes('neural') ? '#10B981' : '#8B5CF6'})`,
            backgroundSize: '200% 200%',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 3 * speedMultipliers[animationSpeed],
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-current opacity-50" />
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-current opacity-50" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-current opacity-50" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-current opacity-50" />
    </motion.div>
  );
};

export default UltraFuturisticCard;