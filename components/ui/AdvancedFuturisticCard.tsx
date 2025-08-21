import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AdvancedFuturisticCardProps {
  variant?: 'quantum' | 'neural' | 'holographic' | 'cyberpunk' | 'quantum-entanglement';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
  glowIntensity?: 'low' | 'medium' | 'high';
  borderAnimation?: boolean;
  particleEffect?: boolean;
}

export default function AdvancedFuturisticCard({
  variant = 'quantum',
  children,
  className = '',
  onClick,
  interactive = true,
  glowIntensity = 'medium',
  borderAnimation = true,
  particleEffect = true
}: AdvancedFuturisticCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Array<{ x: number; y: number; vx: number; vy: number; life: number }>>([]);

  // Generate particles on hover
  useEffect(() => {
    if (!particleEffect || !isHovered) return;

    const interval = setInterval(() => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const newParticle = {
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          life: 60
        };
        setParticles(prev => [...prev, newParticle]);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isHovered, particleEffect]);

  // Update particle positions
  useEffect(() => {
    if (!particleEffect || particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            life: particle.life - 1
          }))
          .filter(particle => particle.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, [particles, particleEffect]);

  const getVariantStyles = () => {
    switch (variant) {
      case 'quantum':
        return {
          bg: 'bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-purple-700/10',
          border: 'border-cyan-500/30',
          glow: 'shadow-cyan-500/20',
          text: 'text-cyan-400',
          accent: 'from-cyan-400 to-blue-500'
        };
      case 'neural':
        return {
          bg: 'bg-gradient-to-br from-purple-500/10 via-pink-600/10 to-red-700/10',
          border: 'border-purple-500/30',
          glow: 'shadow-purple-500/20',
          text: 'text-purple-400',
          accent: 'from-purple-400 to-pink-500'
        };
      case 'holographic':
        return {
          bg: 'bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-indigo-700/10',
          border: 'border-cyan-500/30',
          glow: 'shadow-cyan-500/20',
          text: 'text-cyan-400',
          accent: 'from-cyan-400 to-indigo-500'
        };
      case 'cyberpunk':
        return {
          bg: 'bg-gradient-to-br from-red-500/10 via-pink-600/10 to-purple-700/10',
          border: 'border-red-500/30',
          glow: 'shadow-red-500/20',
          text: 'text-red-400',
          accent: 'from-red-400 to-pink-500'
        };
      case 'quantum-entanglement':
        return {
          bg: 'bg-gradient-to-br from-violet-500/10 via-purple-600/10 to-indigo-700/10',
          border: 'border-violet-500/30',
          glow: 'shadow-violet-500/20',
          text: 'text-violet-400',
          accent: 'from-violet-400 to-indigo-500'
        };
      default:
        return {
          bg: 'bg-gradient-to-br from-blue-500/10 via-purple-600/10 to-pink-700/10',
          border: 'border-blue-500/30',
          glow: 'shadow-blue-500/20',
          text: 'text-blue-400',
          accent: 'from-blue-400 to-purple-500'
        };
    }
  };

  const getGlowIntensity = () => {
    switch (glowIntensity) {
      case 'low':
        return 'shadow-lg';
      case 'medium':
        return 'shadow-xl';
      case 'high':
        return 'shadow-2xl';
      default:
        return 'shadow-xl';
    }
  };

  const styles = getVariantStyles();

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-2xl backdrop-blur-xl border ${styles.bg} ${styles.border} ${getGlowIntensity()} ${styles.glow} ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTap={() => setIsPressed(true)}
      onClick={onClick}
      whileHover={interactive ? { scale: 1.02, y: -5 } : {}}
      whileTap={interactive ? { scale: 0.98 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Animated border */}
      {borderAnimation && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <motion.div
            className={`absolute inset-0 bg-gradient-to-r ${styles.accent} opacity-0`}
            animate={{
              opacity: isHovered ? [0, 0.3, 0] : 0,
              scale: isHovered ? [1, 1.1, 1] : 1
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      )}

      {/* Particle effects */}
      {particleEffect && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <AnimatePresence>
            {particles.map((particle, index) => (
              <motion.div
                key={index}
                className={`absolute w-1 h-1 bg-gradient-to-r ${styles.accent} rounded-full`}
                style={{
                  left: particle.x,
                  top: particle.y,
                  opacity: particle.life / 60
                }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: [0, 1, 0], opacity: [1, 0.8, 0] }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Holographic overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 bg-gradient-to-br ${styles.accent} opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-5' : ''}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-current opacity-30" />
      <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-current opacity-30" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-current opacity-30" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-current opacity-30" />

      {/* Scanning line effect */}
      {isHovered && (
        <motion.div
          className={`absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent ${styles.accent} to-transparent`}
          initial={{ top: 0, opacity: 0 }}
          animate={{ top: '100%', opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      )}

      {/* Glow effect on hover */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${styles.accent} opacity-0 blur-xl`}
        animate={{
          opacity: isHovered ? 0.1 : 0
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}