import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NeonEffect2036Props {
  children: React.ReactNode;
  variant?: 'cyberpunk' | 'holographic' | 'quantum' | 'neon' | 'glitch' | 'energy' | 'data' | 'space';
  intensity?: 'low' | 'medium' | 'high';
  interactive?: boolean;
  animated?: boolean;
  className?: string;
  glowColor?: string;
  pulseSpeed?: number;
}

interface NeonGlow2036Props {
  children: React.ReactNode;
  color: string;
  intensity: number;
  spread?: number;
  className?: string;
  animated?: boolean;
}

// Enhanced Neon Glow Component
const NeonGlow2036: React.FC<NeonGlow2036Props> = ({ 
  children, 
  color, 
  intensity, 
  spread = 20, 
  className = '',
  animated = false
}) => {
  const baseColor = color;
  const glowColor = color + '80';
  const shadowColor = color + '40';
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    if (!animated) return;
    
    const interval = setInterval(() => {
      setPulse(prev => (prev + 1) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, [animated]);

  const pulseIntensity = animated ? Math.sin(pulse * Math.PI / 180) * 0.3 + 0.7 : 1;
  const currentSpread = spread * pulseIntensity;

  return (
    <div className={`relative ${className}`}>
      {/* Multiple shadow layers for realistic glow */}
      <div
        className="absolute inset-0"
        style={{
          filter: `
            drop-shadow(0 0 ${currentSpread * 0.5}px ${shadowColor})
            drop-shadow(0 0 ${currentSpread}px ${glowColor})
            drop-shadow(0 0 ${currentSpread * 1.5}px ${baseColor})
            drop-shadow(0 0 ${currentSpread * 2}px ${shadowColor})
            drop-shadow(0 0 ${currentSpread * 2.5}px ${shadowColor}40)
          `
        }}
      >
        {children}
      </div>
      {children}
    </div>
  );
};

// Main Neon Effects Component
export default function UltraAdvancedNeonEffects2036({ 
  children, 
  variant = 'cyberpunk',
  intensity = 'medium',
  interactive = true,
  animated = true,
  className = '',
  glowColor,
  pulseSpeed = 1
}: NeonEffect2036Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isGlitching, setIsGlitching] = useState(false);
  const glitchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive]);

  // Random glitch effect
  useEffect(() => {
    if (!animated) return;

    const triggerGlitch = () => {
      setIsGlitching(true);
      glitchTimeoutRef.current = setTimeout(() => {
        setIsGlitching(false);
      }, 200);
    };

    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) { // 10% chance every interval
        triggerGlitch();
      }
    }, 3000);

    return () => {
      clearInterval(glitchInterval);
      if (glitchTimeoutRef.current) {
        clearTimeout(glitchTimeoutRef.current);
      }
    };
  }, [animated]);

  const getNeonStyles = () => {
    const baseStyles = {
      cyberpunk: {
        primary: '#ff0066',
        secondary: '#00ffff',
        accent: '#ff6600',
        glow: '#ff0066',
        border: '#ff0066',
        text: '#ff0066'
      },
      holographic: {
        primary: '#ff1493',
        secondary: '#00bfff',
        accent: '#ffd700',
        glow: '#ff1493',
        border: '#ff1493',
        text: '#ff1493'
      },
      quantum: {
        primary: '#00ffff',
        secondary: '#ff00ff',
        accent: '#ffff00',
        glow: '#00ffff',
        border: '#00ffff',
        text: '#00ffff'
      },
      neon: {
        primary: '#00ff00',
        secondary: '#ff00ff',
        accent: '#00ffff',
        glow: '#00ff00',
        border: '#00ff00',
        text: '#00ff00'
      },
      glitch: {
        primary: '#ff0000',
        secondary: '#00ff00',
        accent: '#0000ff',
        glow: '#ff0000',
        border: '#ff0000',
        text: '#ff0000'
      },
      energy: {
        primary: '#ffff00',
        secondary: '#ff6600',
        accent: '#ff0066',
        glow: '#ffff00',
        border: '#ffff00',
        text: '#ffff00'
      },
      data: {
        primary: '#00ffff',
        secondary: '#0080ff',
        accent: '#8000ff',
        glow: '#00ffff',
        border: '#00ffff',
        text: '#00ffff'
      },
      space: {
        primary: '#4c1d95',
        secondary: '#7c3aed',
        accent: '#a855f7',
        glow: '#4c1d95',
        border: '#4c1d95',
        text: '#4c1d95'
      }
    };

    return baseStyles[variant] || baseStyles.cyberpunk;
  };

  const styles = getNeonStyles();
  const finalGlowColor = glowColor || styles.glow;
  const intensityMultiplier = intensity === 'low' ? 0.5 : intensity === 'medium' ? 1 : 2;

  const neonVariants = {
    initial: { 
      filter: 'brightness(1)',
      textShadow: `0 0 5px ${finalGlowColor}`,
      boxShadow: `0 0 10px ${finalGlowColor}, 0 0 20px ${finalGlowColor}, 0 0 30px ${finalGlowColor}`
    },
    hover: { 
      filter: 'brightness(1.2)',
      textShadow: `0 0 10px ${finalGlowColor}, 0 0 20px ${finalGlowColor}, 0 0 30px ${finalGlowColor}`,
      boxShadow: `0 0 15px ${finalGlowColor}, 0 0 30px ${finalGlowColor}, 0 0 45px ${finalGlowColor}`
    },
    glitch: {
      filter: 'brightness(1.5) hue-rotate(90deg)',
      textShadow: `0 0 20px ${finalGlowColor}, 0 0 40px ${finalGlowColor}`,
      boxShadow: `0 0 25px ${finalGlowColor}, 0 0 50px ${finalGlowColor}`
    }
  };

  const glitchVariants = {
    initial: { x: 0, y: 0 },
    glitch: { 
      x: [0, -2, 2, -1, 1, 0],
      y: [0, 1, -1, 2, -2, 0],
      transition: { duration: 0.2, ease: "easeInOut" as const }
    }
  };

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      variants={neonVariants}
      initial="initial"
      animate={isGlitching ? "glitch" : isHovered ? "hover" : "initial"}
      whileHover={interactive ? "hover" : undefined}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Glitch effect overlay */}
      <AnimatePresence>
        {isGlitching && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            variants={glitchVariants}
            initial="initial"
            animate="glitch"
            exit="initial"
            style={{
              background: `linear-gradient(45deg, transparent 30%, ${styles.secondary}40 50%, transparent 70%)`,
              mixBlendMode: 'overlay'
            }}
          />
        )}
      </AnimatePresence>

      {/* Enhanced neon glow */}
      <NeonGlow2036
        color={finalGlowColor}
        intensity={intensityMultiplier}
        spread={20 * intensityMultiplier}
        animated={animated}
      >
        <div
          className="relative"
          style={{
            border: `2px solid ${styles.border}`,
            borderRadius: '8px',
            padding: '8px 16px',
            background: `linear-gradient(135deg, ${styles.primary}10, ${styles.secondary}10)`,
            backdropFilter: 'blur(10px)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Animated border */}
          {animated && (
            <motion.div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(90deg, transparent, ${styles.accent}, transparent)`,
                backgroundSize: '200% 100%'
              }}
              animate={{
                backgroundPosition: ['200% 0', '-200% 0']
              }}
              transition={{
                duration: 3 / pulseSpeed,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          )}

          {/* Content */}
          <div className="relative z-10">
            {children}
          </div>

          {/* Interactive mouse trail effect */}
          {interactive && isHovered && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${styles.accent}20, transparent 100px)`,
                mixBlendMode: 'overlay'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </div>
      </NeonGlow2036>

      {/* Additional effects based on variant */}
      {variant === 'quantum' && (
        <motion.div
          className="absolute -inset-1 opacity-30"
          style={{
            background: `conic-gradient(from 0deg, ${styles.primary}, ${styles.secondary}, ${styles.accent}, ${styles.primary})`,
            borderRadius: '10px',
            filter: 'blur(8px)'
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      )}

      {variant === 'holographic' && (
        <motion.div
          className="absolute -inset-1 opacity-20"
          style={{
            background: `linear-gradient(45deg, ${styles.primary}, ${styles.secondary}, ${styles.accent})`,
            borderRadius: '10px',
            filter: 'blur(6px)'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {variant === 'space' && (
        <motion.div
          className="absolute -inset-1 opacity-25"
          style={{
            background: `radial-gradient(circle, ${styles.primary}, ${styles.secondary}, ${styles.accent})`,
            borderRadius: '10px',
            filter: 'blur(10px)'
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.25, 0.4, 0.25]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </motion.div>
  );
}

// Utility components for different neon effects
export const CyberpunkNeon: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <UltraAdvancedNeonEffects2036 variant="cyberpunk" intensity="high" className={className}>
    {children}
  </UltraAdvancedNeonEffects2036>
);

export const HolographicNeon: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <UltraAdvancedNeonEffects2036 variant="holographic" intensity="medium" className={className}>
    {children}
  </UltraAdvancedNeonEffects2036>
);

export const QuantumNeon: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <UltraAdvancedNeonEffects2036 variant="quantum" intensity="high" className={className}>
    {children}
  </UltraAdvancedNeonEffects2036>
);

export const EnergyNeon: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <UltraAdvancedNeonEffects2036 variant="energy" intensity="medium" className={className}>
    {children}
  </UltraAdvancedNeonEffects2036>
);

export const DataNeon: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <UltraAdvancedNeonEffects2036 variant="data" intensity="low" className={className}>
    {children}
  </UltraAdvancedNeonEffects2036>
);

export const SpaceNeon: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <UltraAdvancedNeonEffects2036 variant="space" intensity="medium" className={className}>
    {children}
  </UltraAdvancedNeonEffects2036>
);