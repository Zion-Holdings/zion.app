import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface NeonEffectProps {
  children: React.ReactNode;
  variant?: 'cyberpunk' | 'holographic' | 'quantum' | 'neon' | 'glitch' | 'consciousness' | 'quantum-neon' | 'neural';
  intensity?: 'low' | 'medium' | 'high';
  interactive?: boolean;
  className?: string;
  consciousness?: number;
  pulseRate?: number;
}

interface NeonGlowProps {
  children: React.ReactNode;
  color: string;
  intensity: number;
  spread?: number;
  className?: string;
  consciousness?: number;
}

// Enhanced Neon Glow Component with consciousness effects
const NeonGlow: React.FC<NeonGlowProps> = ({ 
  children, 
  color, 
  intensity, 
  spread = 20, 
  className = '',
  consciousness = 0
}) => {
  const baseColor = color;
  const glowColor = color + '80';
  const shadowColor = color + '40';
  const consciousnessGlow = consciousness > 0 ? `0 0 ${spread * (1 + consciousness)}px ${color}` : '';

  return (
    <div className={`relative ${className}`}>
      {/* Multiple shadow layers for realistic glow with consciousness enhancement */}
      <div
        className="absolute inset-0"
        style={{
          filter: `
            drop-shadow(0 0 ${spread * 0.5}px ${shadowColor})
            drop-shadow(0 0 ${spread}px ${glowColor})
            drop-shadow(0 0 ${spread * 1.5}px ${baseColor})
            drop-shadow(0 0 ${spread * 2}px ${shadowColor})
            ${consciousnessGlow}
          `
        }}
      >
        {children}
      </div>
      {children}
    </div>
  );
};

// Main Enhanced Neon Effects Component
export default function UltraAdvancedNeonEffects2043({ 
  children, 
  variant = 'consciousness',
  intensity = 'medium',
  interactive = true,
  className = '',
  consciousness = 0.5,
  pulseRate = 2000
}: NeonEffectProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [pulseState, setPulseState] = useState(0);
  const pulseRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive]);

  // Enhanced pulse effect for consciousness
  useEffect(() => {
    if (variant === 'consciousness' || variant === 'quantum-neon') {
      pulseRef.current = setInterval(() => {
        setPulseState(prev => (prev + 1) % 100);
      }, pulseRate / 100);
    }

    return () => {
      if (pulseRef.current) {
        clearInterval(pulseRef.current);
      }
    };
  }, [variant, pulseRate]);

  const getNeonStyles = () => {
    const baseStyles = {
      consciousness: {
        primary: '#ff0080',
        secondary: '#00ffff',
        accent: '#ffff00',
        glow: '#ff0080',
        border: '#ff0080',
        neural: '#ff1493',
        quantum: '#00ffff'
      },
      'quantum-neon': {
        primary: '#00ffff',
        secondary: '#ff00ff',
        accent: '#ffff00',
        glow: '#00ffff',
        border: '#00ffff',
        neural: '#ff1493',
        quantum: '#8000ff'
      },
      cyberpunk: {
        primary: '#ff0066',
        secondary: '#00ffff',
        accent: '#ff6600',
        glow: '#ff0066',
        border: '#ff0066',
        neural: '#ff1493',
        quantum: '#8000ff'
      },
      holographic: {
        primary: '#ff1493',
        secondary: '#00bfff',
        accent: '#ffd700',
        glow: '#ff1493',
        border: '#ff1493',
        neural: '#ff1493',
        quantum: '#8000ff'
      },
      quantum: {
        primary: '#00ffff',
        secondary: '#ff00ff',
        accent: '#ffff00',
        glow: '#00ffff',
        border: '#00ffff',
        neural: '#ff1493',
        quantum: '#8000ff'
      },
      neon: {
        primary: '#00ff00',
        secondary: '#ff00ff',
        accent: '#ffff00',
        glow: '#00ff00',
        border: '#00ff00',
        neural: '#ff1493',
        quantum: '#8000ff'
      },
      neural: {
        primary: '#ff1493',
        secondary: '#00bfff',
        accent: '#ffd700',
        glow: '#ff1493',
        border: '#ff1493',
        neural: '#ff1493',
        quantum: '#8000ff'
      },
      glitch: {
        primary: '#ff0000',
        secondary: '#00ff00',
        accent: '#0000ff',
        glow: '#ff0000',
        border: '#ff0000',
        neural: '#ff1493',
        quantum: '#8000ff'
      }
    };

    return baseStyles[variant] || baseStyles.consciousness;
  };

  const styles = getNeonStyles();
  const intensityMultiplier = intensity === 'low' ? 0.5 : intensity === 'medium' ? 1 : 1.5;
  const consciousnessMultiplier = consciousness * intensityMultiplier;

  // Enhanced consciousness pulse effect
  const getPulseEffect = () => {
    if (variant === 'consciousness' || variant === 'quantum-neon') {
      return {
        scale: 1 + (Math.sin(pulseState * 0.1) * 0.05 * consciousnessMultiplier),
        opacity: 0.8 + (Math.sin(pulseState * 0.1) * 0.2 * consciousnessMultiplier),
        filter: `hue-rotate(${pulseState * 3.6}deg)`
      };
    }
    return {};
  };

  // Neural network effect for consciousness variant
  const renderNeuralEffect = () => {
    if (variant === 'consciousness' || variant === 'neural') {
      return (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
                x: [0, (Math.random() - 0.5) * 50],
                y: [0, (Math.random() - 0.5) * 50],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      );
    }
    return null;
  };

  // Quantum field effect
  const renderQuantumField = () => {
    if (variant === 'quantum-neon' || variant === 'quantum') {
      return (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"
            animate={{
              background: [
                'radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 80%, rgba(128, 0, 255, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)',
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={getPulseEffect()}
      style={{
        '--neon-primary': styles.primary,
        '--neon-secondary': styles.secondary,
        '--neon-accent': styles.accent,
        '--neon-glow': styles.glow,
        '--neon-border': styles.border,
        '--consciousness-intensity': consciousnessMultiplier,
      } as React.CSSProperties}
    >
      {/* Enhanced neon glow with consciousness */}
      <NeonGlow 
        color={styles.primary} 
        intensity={intensityMultiplier} 
        spread={20 * intensityMultiplier}
        consciousness={consciousness}
      >
        {children}
      </NeonGlow>

      {/* Interactive hover effects */}
      {interactive && isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${styles.primary}20 0%, transparent 100px)`
          }}
        />
      )}

      {/* Neural network effect */}
      {renderNeuralEffect()}

      {/* Quantum field effect */}
      {renderQuantumField()}

      {/* Consciousness pulse rings */}
      {(variant === 'consciousness' || variant === 'quantum-neon') && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border border-current rounded-full"
              style={{
                borderColor: styles.primary + '40',
                left: `${i * 10}px`,
                top: `${i * 10}px`,
                right: `${i * 10}px`,
                bottom: `${i * 10}px`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Enhanced border glow */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          boxShadow: `
            0 0 ${20 * intensityMultiplier}px ${styles.primary}40,
            0 0 ${40 * intensityMultiplier}px ${styles.primary}20,
            0 0 ${60 * intensityMultiplier}px ${styles.primary}10,
            inset 0 0 ${10 * intensityMultiplier}px ${styles.primary}20
          `,
          border: `1px solid ${styles.primary}60`
        }}
        animate={{
          boxShadow: [
            `0 0 ${20 * intensityMultiplier}px ${styles.primary}40, 0 0 ${40 * intensityMultiplier}px ${styles.primary}20, 0 0 ${60 * intensityMultiplier}px ${styles.primary}10, inset 0 0 ${10 * intensityMultiplier}px ${styles.primary}20`,
            `0 0 ${25 * intensityMultiplier}px ${styles.primary}60, 0 0 ${50 * intensityMultiplier}px ${styles.primary}30, 0 0 ${75 * intensityMultiplier}px ${styles.primary}15, inset 0 0 ${15 * intensityMultiplier}px ${styles.primary}30`,
            `0 0 ${20 * intensityMultiplier}px ${styles.primary}40, 0 0 ${40 * intensityMultiplier}px ${styles.primary}20, 0 0 ${60 * intensityMultiplier}px ${styles.primary}10, inset 0 0 ${10 * intensityMultiplier}px ${styles.primary}20`
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}