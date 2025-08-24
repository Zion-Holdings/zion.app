import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NeonEffectProps {
  children: React.ReactNode;
  variant?: 'cyberpunk' | 'holographic' | 'quantum' | 'neon' | 'glitch';
  intensity?: 'low' | 'medium' | 'high';
  interactive?: boolean;
  className?: string;
}

interface NeonGlowProps {
  children: React.ReactNode;
  color: string;
  intensity: number;
  spread?: number;
  className?: string;
}

// Neon Glow Component
const NeonGlow: React.FC<NeonGlowProps> = ({ 
  children, 
  color, 
  intensity, 
  spread = 20, 
  className = '' 
}) => {
  const baseColor = color;
  const glowColor = color + '80';
  const shadowColor = color + '40';

  return (
    <div className={`relative ${className}`}>
      {/* Multiple shadow layers for realistic glow */}
      <div
        className="absolute inset-0"
        style={{
          filter: `
            drop-shadow(0 0 ${spread * 0.5}px ${shadowColor})
            drop-shadow(0 0 ${spread}px ${glowColor})
            drop-shadow(0 0 ${spread * 1.5}px ${baseColor})
            drop-shadow(0 0 ${spread * 2}px ${shadowColor})
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
export default function UltraAdvancedNeonEffects({ 
  children, 
  variant = 'cyberpunk',
  intensity = 'medium',
  interactive = true,
  className = ''
}: NeonEffectProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive]);

  const getNeonStyles = () => {
    const baseStyles = {
      cyberpunk: {
        primary: '#ff0066',
        secondary: '#00ffff',
        accent: '#ff6600',
        glow: '#ff0066',
        border: '#ff0066'
      },
      holographic: {
        primary: '#ff1493',
        secondary: '#00bfff',
        accent: '#ffd700',
        glow: '#ff1493',
        border: '#ff1493'
      },
      quantum: {
        primary: '#00ffff',
        secondary: '#ff00ff',
        accent: '#ffff00',
        glow: '#00ffff',
        border: '#00ffff'
      },
      neon: {
        primary: '#00ff00',
        secondary: '#ff00ff',
        accent: '#00ffff',
        glow: '#00ff00',
        border: '#00ff00'
      },
      glitch: {
        primary: '#ff0000',
        secondary: '#00ff00',
        accent: '#0000ff',
        glow: '#ff0000',
        border: '#ff0000'
      }
    };

    return baseStyles[variant] || baseStyles.cyberpunk;
  };

  const styles = getNeonStyles();
  const intensityMultiplier = intensity === 'high' ? 1.5 : intensity === 'medium' ? 1 : 0.7;

  return (
    <motion.div
      className={`relative ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={interactive ? { scale: 1.02 } : {}}
      animate={{
        boxShadow: isHovered 
          ? `0 0 ${30 * intensityMultiplier}px ${styles.glow}80, 0 0 ${60 * intensityMultiplier}px ${styles.glow}40`
          : `0 0 ${15 * intensityMultiplier}px ${styles.glow}40, 0 0 ${30 * intensityMultiplier}px ${styles.glow}20`
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${styles.glow}40 0%, transparent 50%)`
        }}
        animate={{
          opacity: isHovered ? 0.4 : 0.2
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          border: `2px solid ${styles.border}`,
          boxShadow: `inset 0 0 ${20 * intensityMultiplier}px ${styles.glow}40`
        }}
        animate={{
          boxShadow: isHovered 
            ? `inset 0 0 ${30 * intensityMultiplier}px ${styles.glow}60, 0 0 ${40 * intensityMultiplier}px ${styles.glow}40`
            : `inset 0 0 ${20 * intensityMultiplier}px ${styles.glow}40`
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Corner Accents */}
      <div className="absolute inset-0">
        {/* Top Left Corner */}
        <motion.div
          className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2"
          style={{ borderColor: styles.accent }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Top Right Corner */}
        <motion.div
          className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2"
          style={{ borderColor: styles.secondary }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        {/* Bottom Left Corner */}
        <motion.div
          className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2"
          style={{ borderColor: styles.secondary }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Bottom Right Corner */}
        <motion.div
          className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2"
          style={{ borderColor: styles.accent }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </div>

      {/* Scanning Line Effect */}
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-lg"
        style={{ pointerEvents: 'none' }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-0.5"
          style={{
            background: `linear-gradient(90deg, transparent, ${styles.primary}, transparent)`
          }}
          animate={{
            y: [0, '100%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      {/* Glitch Effect for Glitch Variant */}
      {variant === 'glitch' && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 rounded-lg"
              style={{
                background: `linear-gradient(45deg, ${styles.primary}20, ${styles.secondary}20, ${styles.accent}20)`
              }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 0.3, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.1 }}
            />
          )}
        </AnimatePresence>
      )}

      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: styles.primary,
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

// Export individual components for specific use cases
export { NeonGlow };
export { UltraAdvancedNeonEffects as NeonEffects };