import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Star, Zap, Shield, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Code, BookOpen, Activity, Play, Mail, Phone, MapPin, Sparkles, Atom, Brain, Eye, Trophy, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck } from 'lucide-react';

interface UltraFuturisticCardProps {
  variant?: 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'space' | 'matrix' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'quantum-space';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
  animated?: boolean;
  glowIntensity?: 'low' | 'medium' | 'high';
}

const UltraFuturisticCard: React.FC<UltraFuturisticCardProps> = ({
  variant = 'quantum',
  size = 'medium',
  children,
  className = '',
  onClick,
  hoverable = true,
  animated = true,
  glowIntensity = 'medium'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const getVariantStyles = () => {
    switch (variant) {
      case 'quantum':
        return {
          border: 'border-cyan-400/40',
          glow: 'shadow-cyan-400/20',
          bg: 'bg-gradient-to-br from-slate-900/80 via-cyan-900/20 to-slate-900/80',
          text: 'text-cyan-400',
          accent: 'from-cyan-400 to-blue-500'
        };
      case 'holographic':
        return {
          border: 'border-purple-400/40',
          glow: 'shadow-purple-400/20',
          bg: 'bg-gradient-to-br from-slate-900/80 via-purple-900/20 to-slate-900/80',
          text: 'text-purple-400',
          accent: 'from-purple-400 to-pink-500'
        };
      case 'cyberpunk':
        return {
          border: 'border-green-400/40',
          glow: 'shadow-green-400/20',
          bg: 'bg-gradient-to-br from-slate-900/80 via-green-900/20 to-slate-900/80',
          text: 'text-green-400',
          accent: 'from-green-400 to-emerald-500'
        };
      case 'neural':
        return {
          border: 'border-pink-400/40',
          glow: 'shadow-pink-400/20',
          bg: 'bg-gradient-to-br from-slate-900/80 via-pink-900/20 to-slate-900/80',
          text: 'text-pink-400',
          accent: 'from-pink-400 to-rose-500'
        };
      case 'space':
        return {
          border: 'border-blue-400/40',
          glow: 'shadow-blue-400/20',
          bg: 'bg-gradient-to-br from-slate-900/80 via-blue-900/20 to-slate-900/80',
          text: 'text-blue-400',
          accent: 'from-blue-400 to-indigo-500'
        };
      case 'matrix':
        return {
          border: 'border-green-400/40',
          glow: 'shadow-green-400/20',
          bg: 'bg-gradient-to-br from-slate-900/80 via-green-900/20 to-slate-900/80',
          text: 'text-green-400',
          accent: 'from-green-400 to-emerald-500'
        };
      case 'quantum-advanced':
        return {
          border: 'border-cyan-400/60',
          glow: 'shadow-cyan-400/30',
          bg: 'bg-gradient-to-br from-slate-900/90 via-cyan-900/30 to-slate-900/90',
          text: 'text-cyan-300',
          accent: 'from-cyan-300 to-blue-400'
        };
      case 'holographic-advanced':
        return {
          border: 'border-purple-400/60',
          glow: 'shadow-purple-400/30',
          bg: 'bg-gradient-to-br from-slate-900/90 via-purple-900/30 to-slate-900/90',
          text: 'text-purple-300',
          accent: 'from-purple-300 to-pink-400'
        };
      case 'neural-quantum':
        return {
          border: 'border-pink-400/50 border-cyan-400/30',
          glow: 'shadow-pink-400/25 shadow-cyan-400/15',
          bg: 'bg-gradient-to-br from-slate-900/85 via-pink-900/25 via-cyan-900/15 to-slate-900/85',
          text: 'text-pink-300',
          accent: 'from-pink-300 via-purple-400 to-cyan-400'
        };
      case 'quantum-cyberpunk':
        return {
          border: 'border-cyan-400/50 border-green-400/30',
          glow: 'shadow-cyan-400/25 shadow-green-400/15',
          bg: 'bg-gradient-to-br from-slate-900/85 via-cyan-900/25 via-green-900/15 to-slate-900/85',
          text: 'text-cyan-300',
          accent: 'from-cyan-300 via-blue-400 to-green-400'
        };
      case 'quantum-space':
        return {
          border: 'border-cyan-400/50 border-blue-400/30',
          glow: 'shadow-cyan-400/25 shadow-blue-400/15',
          bg: 'bg-gradient-to-br from-slate-900/85 via-cyan-900/25 via-blue-900/15 to-slate-900/85',
          text: 'text-cyan-300',
          accent: 'from-cyan-300 via-blue-400 to-indigo-400'
        };
      default:
        return {
          border: 'border-cyan-400/40',
          glow: 'shadow-cyan-400/20',
          bg: 'bg-gradient-to-br from-slate-900/80 via-cyan-900/20 to-slate-900/80',
          text: 'text-cyan-400',
          accent: 'from-cyan-400 to-blue-500'
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return 'p-4 text-sm';
      case 'large':
        return 'p-8 text-lg';
      default:
        return 'p-6 text-base';
    }
  };

  const getGlowIntensity = () => {
    switch (glowIntensity) {
      case 'low':
        return 'shadow-lg';
      case 'high':
        return 'shadow-2xl';
      default:
        return 'shadow-xl';
    }
  };

  const styles = getVariantStyles();
  const sizeStyles = getSizeStyles();
  const glowStyles = getGlowIntensity();

  const cardVariants = {
    initial: { 
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      z: 0
    },
    hover: { 
      scale: 1.02,
      rotateY: 2,
      rotateX: 2,
      z: 20
    },
    pressed: { 
      scale: 0.98,
      rotateY: 0,
      rotateX: 0,
      z: 10
    }
  };

  const glowVariants = {
    initial: { 
      opacity: 0.3,
      scale: 1
    },
    hover: { 
      opacity: 0.8,
      scale: 1.05
    }
  };

  const particleVariants = {
    initial: { 
      opacity: 0,
      scale: 0,
      y: 0
    },
    animate: { 
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      y: [-10, 0, 10],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl backdrop-blur-sm transition-all duration-300 ${styles.border} ${styles.bg} ${sizeStyles} ${glowStyles} ${className}`}
      variants={animated ? cardVariants : undefined}
      initial="initial"
      whileHover={hoverable ? "hover" : undefined}
      whileTap={onClick ? "pressed" : undefined}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTapStart={() => setIsPressed(true)}
      onTap={() => setIsPressed(false)}
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Background glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${styles.accent} opacity-0 blur-xl`}
        variants={glowVariants}
        initial="initial"
        whileHover={hoverable ? "hover" : undefined}
        style={{ zIndex: -1 }}
      />

      {/* Holographic overlay */}
      {variant.includes('holographic') && (
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-20"
          style={{
            background: `linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)`,
            backgroundSize: '200% 200%'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      )}

      {/* Quantum particle effects */}
      {variant.includes('quantum') && (
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${styles.accent}`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`
              }}
              variants={particleVariants}
              initial="initial"
              animate="animate"
              transition={{
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      )}

      {/* Cyberpunk grid effect */}
      {variant.includes('cyberpunk') && (
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-10"
          style={{
            background: `
              linear-gradient(90deg, transparent 49%, currentColor 50%, transparent 51%),
              linear-gradient(0deg, transparent 49%, currentColor 50%, transparent 51%)
            `,
            backgroundSize: '20px 20px'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      )}

      {/* Neural network connections */}
      {variant.includes('neural') && (
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <svg className="w-full h-full" style={{ zIndex: -1 }}>
            <defs>
              <linearGradient id={`neural-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 20 50 Q 50 20 80 50 Q 110 80 140 50"
              stroke="url(#neural-${variant})"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        </div>
      )}

      {/* Matrix digital rain */}
      {variant === 'matrix' && (
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-400 font-mono text-xs opacity-60"
              style={{
                left: `${i * 12.5}%`,
                top: '-20px'
              }}
              animate={{
                y: ['-20px', '120%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "linear"
              }}
            >
              {Math.random() > 0.5 ? '01' : '10'}
            </motion.div>
          ))}
        </div>
      )}

      {/* Space dust particles */}
      {variant === 'space' && (
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -20, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Interactive border glow */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className={`absolute inset-0 rounded-2xl border-2 ${styles.border}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              boxShadow: `0 0 20px ${styles.glow.replace('shadow-', '').replace('/20', '')}`,
              zIndex: -1
            }}
          />
        )}
      </AnimatePresence>

      {/* Press effect */}
      <AnimatePresence>
        {isPressed && (
          <motion.div
            className="absolute inset-0 rounded-2xl bg-white/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default UltraFuturisticCard;