import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface UltraFuturisticCardProps {
  children: React.ReactNode;
  variant?: 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'space' | 'energy';
  className?: string;
  glowIntensity?: 'low' | 'medium' | 'high';
  interactive?: boolean;
  onClick?: () => void;
  delay?: number;
}

const UltraFuturisticCard: React.FC<UltraFuturisticCardProps> = ({
  children,
  variant = 'quantum',
  className = '',
  glowIntensity = 'medium',
  interactive = true,
  onClick,
  delay = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; vx: number; vy: number; life: number }>>([]);

  // Generate variant-specific styles
  const getVariantStyles = () => {
    switch (variant) {
      case 'quantum':
        return {
          border: 'border-cyan-400/30 border-purple-400/30',
          glow: 'shadow-cyan-400/20 shadow-purple-400/20',
          bg: 'bg-gradient-to-br from-slate-900/80 via-cyan-900/20 to-purple-900/20',
          accent: 'from-cyan-400 to-purple-400',
          particleColor: 'bg-cyan-400'
        };
      case 'holographic':
        return {
          border: 'border-fuchsia-400/30 border-pink-400/30',
          glow: 'shadow-fuchsia-400/20 shadow-pink-400/20',
          bg: 'bg-gradient-to-br from-slate-900/80 via-fuchsia-900/20 to-pink-900/20',
          accent: 'from-fuchsia-400 to-pink-400',
          particleColor: 'bg-fuchsia-400'
        };
      case 'cyberpunk':
        return {
          border: 'border-red-400/30 border-orange-400/30',
          glow: 'shadow-red-400/20 shadow-orange-400/20',
          bg: 'bg-gradient-to-br from-slate-900/80 via-red-900/20 to-orange-900/20',
          accent: 'from-red-400 to-orange-400',
          particleColor: 'bg-red-400'
        };
      case 'neural':
        return {
          border: 'border-emerald-400/30 border-green-400/30',
          glow: 'shadow-emerald-400/20 shadow-green-400/20',
          bg: 'bg-gradient-to-br from-slate-900/80 via-emerald-900/20 to-green-900/20',
          accent: 'from-emerald-400 to-green-400',
          particleColor: 'bg-emerald-400'
        };
      case 'space':
        return {
          border: 'border-blue-400/30 border-indigo-400/30',
          glow: 'shadow-blue-400/20 shadow-indigo-400/20',
          bg: 'bg-gradient-to-br from-slate-900/80 via-blue-900/20 to-indigo-900/20',
          accent: 'from-blue-400 to-indigo-400',
          particleColor: 'bg-blue-400'
        };
      case 'energy':
        return {
          border: 'border-yellow-400/30 border-amber-400/30',
          glow: 'shadow-yellow-400/20 shadow-amber-400/20',
          bg: 'bg-gradient-to-br from-slate-900/80 via-yellow-900/20 to-amber-900/20',
          accent: 'from-yellow-400 to-amber-400',
          particleColor: 'bg-yellow-400'
        };
      default:
        return {
          border: 'border-cyan-400/30 border-purple-400/30',
          glow: 'shadow-cyan-400/20 shadow-purple-400/20',
          bg: 'bg-gradient-to-br from-slate-900/80 via-cyan-900/20 to-purple-900/20',
          accent: 'from-cyan-400 to-purple-400',
          particleColor: 'bg-cyan-400'
        };
    }
  };

  const styles = getVariantStyles();

  // Particle system for enhanced effects
  useEffect(() => {
    if (!interactive || !isHovered) return;

    const interval = setInterval(() => {
      setParticles(prev => {
        const newParticles = prev
          .map(p => ({ ...p, life: p.life - 1 }))
          .filter(p => p.life > 0);

        if (newParticles.length < 8) {
          newParticles.push({
            id: Date.now() + Math.random(),
            x: Math.random() * 100,
            y: Math.random() * 100,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            life: 30
          });
        }

        return newParticles;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [interactive, isHovered]);

  // Glow intensity mapping
  const getGlowIntensity = () => {
    switch (glowIntensity) {
      case 'low':
        return 'shadow-lg';
      case 'medium':
        return 'shadow-xl shadow-2xl';
      case 'high':
        return 'shadow-2xl shadow-3xl';
      default:
        return 'shadow-xl';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative group overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-500 ease-out ${
        styles.bg
      } ${styles.border} ${getGlowIntensity()} ${styles.glow} ${className}`}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={interactive ? { 
        scale: 1.02, 
        y: -5,
        transition: { duration: 0.3 }
      } : {}}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onClick={onClick}
      style={{
        background: `linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, ${styles.bg.includes('cyan') ? 'rgba(8, 145, 178, 0.1)' : styles.bg.includes('fuchsia') ? 'rgba(168, 85, 247, 0.1)' : 'rgba(34, 197, 94, 0.1)'} 50%, rgba(15, 23, 42, 0.8) 100%)`
      }}
    >
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl">
        <motion.div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${styles.accent} opacity-0`}
          animate={{
            opacity: isHovered ? [0, 0.3, 0] : 0
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Quantum particle effects */}
      <AnimatePresence>
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className={`absolute w-1 h-1 ${styles.particleColor} rounded-full`}
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0], 
                  scale: [0, 1, 0],
                  x: particle.vx * 20,
                  y: particle.vy * 20
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5 }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Holographic grid overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent transform -skew-y-12" />
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50 rounded-tl-2xl" />
      <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-purple-400/50 rounded-tr-2xl" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-emerald-400/50 rounded-bl-2xl" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-fuchsia-400/50 rounded-br-2xl" />

      {/* Floating energy orbs */}
      <motion.div
        className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-60"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-60"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Content wrapper with enhanced backdrop */}
      <div className="relative z-10 p-6">
        <div className="relative">
          {/* Content background with subtle pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-30" />
          
          {/* Main content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </div>

      {/* Interactive glow effect */}
      {interactive && (
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-purple-400/0 opacity-0"
          animate={{
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Focus ring for accessibility */}
      {isFocused && (
        <div className="absolute inset-0 rounded-2xl ring-2 ring-cyan-400/50 ring-offset-2 ring-offset-slate-900" />
      )}
    </motion.div>
  );
};

export default UltraFuturisticCard;