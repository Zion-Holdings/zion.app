import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface NeonEffectProps {
  children: React.ReactNode;
  variant?: 'cyberpunk' | 'holographic' | 'quantum' | 'neon' | 'glitch' | 'consciousness' | 'quantum-neon' | 'neural' | 'quantum-consciousness' | 'quantum-holographic';
  intensity?: 'low' | 'medium' | 'high';
  interactive?: boolean;
  className?: string;
  consciousness?: number;
  pulseRate?: number;
  quantumState?: number;
}

interface NeonGlowProps {
  children: React.ReactNode;
  color: string;
  intensity: number;
  spread?: number;
  className?: string;
  consciousness?: number;
  quantumState?: number;
}

// Enhanced Neon Glow Component with consciousness and quantum effects
const NeonGlow: React.FC<NeonGlowProps> = ({ 
  children, 
  color, 
  intensity, 
  spread = 20, 
  className = '',
  consciousness = 0,
  quantumState = 0
}) => {
  const baseColor = color;
  const glowColor = color + '80';
  const shadowColor = color + '40';
  const consciousnessGlow = consciousness > 0 ? `0 0 ${spread * (1 + consciousness)}px ${color}` : '';
  const quantumGlow = quantumState > 0 ? `0 0 ${spread * (1 + Math.sin(quantumState) * 0.5)}px ${color}40` : '';

  return (
    <div className={`relative ${className}`}>
      {/* Multiple shadow layers for realistic glow with consciousness and quantum enhancement */}
      <div
        className="absolute inset-0"
        style={{
          filter: `
            drop-shadow(0 0 ${spread * 0.5}px ${shadowColor})
            drop-shadow(0 0 ${spread}px ${glowColor})
            drop-shadow(0 0 ${spread * 1.5}px ${baseColor})
            drop-shadow(0 0 ${spread * 2}px ${shadowColor})
            ${consciousnessGlow}
            ${quantumGlow}
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
export default function UltraAdvancedNeonEffects2046({ 
  children, 
  variant = 'quantum-consciousness',
  intensity = 'medium',
  interactive = true,
  className = '',
  consciousness = 0.5,
  pulseRate = 2000,
  quantumState = 0
}: NeonEffectProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [pulseState, setPulseState] = useState(0);
  const [quantumPhase, setQuantumPhase] = useState(0);
  const pulseRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const quantumRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive]);

  // Enhanced pulse effect for consciousness and quantum states
  useEffect(() => {
    if (variant === 'consciousness' || variant === 'quantum-neon' || variant === 'quantum-consciousness') {
      pulseRef.current = setInterval(() => {
        setPulseState(prev => (prev + 1) % 100);
      }, pulseRate / 100);
    }

    if (variant === 'quantum' || variant === 'quantum-holographic' || variant === 'quantum-consciousness') {
      quantumRef.current = setInterval(() => {
        setQuantumPhase(prev => (prev + 1) % 100);
      }, 50);
    }

    return () => {
      if (pulseRef.current) {
        clearInterval(pulseRef.current);
      }
      if (quantumRef.current) {
        clearInterval(quantumRef.current);
      }
    };
  }, [variant, pulseRate]);

  const getNeonStyles = () => {
    const baseIntensity = intensity === 'low' ? 1 : intensity === 'medium' ? 1.5 : 2;
    const consciousnessMultiplier = consciousness * baseIntensity;
    const quantumMultiplier = Math.sin(quantumPhase * 0.1) * 0.5 + 1;

    switch (variant) {
      case 'quantum-consciousness':
        return {
          textShadow: `
            0 0 ${10 * consciousnessMultiplier}px rgba(139, 92, 246, 0.8),
            0 0 ${20 * consciousnessMultiplier}px rgba(139, 92, 246, 0.6),
            0 0 ${30 * consciousnessMultiplier}px rgba(139, 92, 246, 0.4),
            0 0 ${40 * consciousnessMultiplier}px rgba(139, 92, 246, 0.2),
            0 0 ${50 * consciousnessMultiplier}px rgba(139, 92, 246, 0.1),
            0 0 ${15 * quantumMultiplier}px rgba(6, 182, 212, 0.8),
            0 0 ${25 * quantumMultiplier}px rgba(6, 182, 212, 0.6),
            0 0 ${35 * quantumMultiplier}px rgba(6, 182, 212, 0.4)
          `,
          boxShadow: `
            0 0 ${10 * consciousnessMultiplier}px rgba(139, 92, 246, 0.8),
            0 0 ${20 * consciousnessMultiplier}px rgba(139, 92, 246, 0.6),
            0 0 ${30 * consciousnessMultiplier}px rgba(139, 92, 246, 0.4),
            inset 0 0 ${20 * consciousnessMultiplier}px rgba(139, 92, 246, 0.2)
          `
        };
      case 'quantum-holographic':
        return {
          textShadow: `
            0 0 ${10 * baseIntensity}px rgba(6, 182, 212, 0.8),
            0 0 ${20 * baseIntensity}px rgba(6, 182, 212, 0.6),
            0 0 ${30 * baseIntensity}px rgba(6, 182, 212, 0.4),
            0 0 ${40 * baseIntensity}px rgba(6, 182, 212, 0.2),
            0 0 ${15 * quantumMultiplier}px rgba(236, 72, 153, 0.8),
            0 0 ${25 * quantumMultiplier}px rgba(236, 72, 153, 0.6)
          `,
          boxShadow: `
            0 0 ${10 * baseIntensity}px rgba(6, 182, 212, 0.8),
            0 0 ${20 * baseIntensity}px rgba(6, 182, 212, 0.6),
            0 0 ${30 * baseIntensity}px rgba(6, 182, 212, 0.4),
            inset 0 0 ${20 * baseIntensity}px rgba(6, 182, 212, 0.2)
          `
        };
      case 'consciousness':
        return {
          textShadow: `
            0 0 ${10 * consciousnessMultiplier}px rgba(139, 92, 246, 0.8),
            0 0 ${20 * consciousnessMultiplier}px rgba(139, 92, 246, 0.6),
            0 0 ${30 * consciousnessMultiplier}px rgba(139, 92, 246, 0.4),
            0 0 ${40 * consciousnessMultiplier}px rgba(139, 92, 246, 0.2),
            0 0 ${50 * consciousnessMultiplier}px rgba(139, 92, 246, 0.1)
          `,
          boxShadow: `
            0 0 ${10 * consciousnessMultiplier}px rgba(139, 92, 246, 0.8),
            0 0 ${20 * consciousnessMultiplier}px rgba(139, 92, 246, 0.6),
            0 0 ${30 * consciousnessMultiplier}px rgba(139, 92, 246, 0.4),
            inset 0 0 ${20 * consciousnessMultiplier}px rgba(139, 92, 246, 0.2)
          `
        };
      case 'quantum':
        return {
          textShadow: `
            0 0 ${10 * baseIntensity}px rgba(6, 182, 212, 0.8),
            0 0 ${20 * baseIntensity}px rgba(6, 182, 212, 0.6),
            0 0 ${30 * baseIntensity}px rgba(6, 182, 212, 0.4),
            0 0 ${40 * baseIntensity}px rgba(6, 182, 212, 0.2),
            0 0 ${15 * quantumMultiplier}px rgba(6, 182, 212, 0.8),
            0 0 ${25 * quantumMultiplier}px rgba(6, 182, 212, 0.6)
          `,
          boxShadow: `
            0 0 ${10 * baseIntensity}px rgba(6, 182, 212, 0.8),
            0 0 ${20 * baseIntensity}px rgba(6, 182, 212, 0.6),
            0 0 ${30 * baseIntensity}px rgba(6, 182, 212, 0.4),
            inset 0 0 ${20 * baseIntensity}px rgba(6, 182, 212, 0.2)
          `
        };
      case 'holographic':
        return {
          textShadow: `
            0 0 ${10 * baseIntensity}px rgba(236, 72, 153, 0.8),
            0 0 ${20 * baseIntensity}px rgba(236, 72, 153, 0.6),
            0 0 ${30 * baseIntensity}px rgba(236, 72, 153, 0.4),
            0 0 ${40 * baseIntensity}px rgba(236, 72, 153, 0.2),
            0 0 ${15 * baseIntensity}px rgba(16, 185, 129, 0.8),
            0 0 ${25 * baseIntensity}px rgba(16, 185, 129, 0.6)
          `,
          boxShadow: `
            0 0 ${10 * baseIntensity}px rgba(236, 72, 153, 0.8),
            0 0 ${20 * baseIntensity}px rgba(236, 72, 153, 0.6),
            0 0 ${30 * baseIntensity}px rgba(236, 72, 153, 0.4),
            inset 0 0 ${20 * baseIntensity}px rgba(236, 72, 153, 0.2)
          `
        };
      case 'cyberpunk':
        return {
          textShadow: `
            0 0 ${10 * baseIntensity}px rgba(255, 0, 85, 0.8),
            0 0 ${20 * baseIntensity}px rgba(255, 0, 85, 0.6),
            0 0 ${30 * baseIntensity}px rgba(255, 0, 85, 0.4),
            0 0 ${40 * baseIntensity}px rgba(255, 0, 85, 0.2),
            0 0 ${15 * baseIntensity}px rgba(0, 255, 255, 0.8),
            0 0 ${25 * baseIntensity}px rgba(0, 255, 255, 0.6)
          `,
          boxShadow: `
            0 0 ${10 * baseIntensity}px rgba(255, 0, 85, 0.8),
            0 0 ${20 * baseIntensity}px rgba(255, 0, 85, 0.6),
            0 0 ${30 * baseIntensity}px rgba(255, 0, 85, 0.4),
            inset 0 0 ${20 * baseIntensity}px rgba(255, 0, 85, 0.2)
          `
        };
      case 'neon':
        return {
          textShadow: `
            0 0 ${10 * baseIntensity}px rgba(255, 0, 128, 0.8),
            0 0 ${20 * baseIntensity}px rgba(255, 0, 128, 0.6),
            0 0 ${30 * baseIntensity}px rgba(255, 0, 128, 0.4),
            0 0 ${40 * baseIntensity}px rgba(255, 0, 128, 0.2)
          `,
          boxShadow: `
            0 0 ${10 * baseIntensity}px rgba(255, 0, 128, 0.8),
            0 0 ${20 * baseIntensity}px rgba(255, 0, 128, 0.6),
            0 0 ${30 * baseIntensity}px rgba(255, 0, 128, 0.4),
            inset 0 0 ${20 * baseIntensity}px rgba(255, 0, 128, 0.2)
          `
        };
      case 'glitch':
        return {
          textShadow: `
            0 0 ${10 * baseIntensity}px rgba(255, 0, 255, 0.8),
            0 0 ${20 * baseIntensity}px rgba(255, 0, 255, 0.6),
            0 0 ${30 * baseIntensity}px rgba(255, 0, 255, 0.4),
            0 0 ${40 * baseIntensity}px rgba(255, 0, 255, 0.2),
            2px 0 0 rgba(255, 0, 255, 0.8),
            -2px 0 0 rgba(0, 255, 255, 0.8)
          `,
          boxShadow: `
            0 0 ${10 * baseIntensity}px rgba(255, 0, 255, 0.8),
            0 0 ${20 * baseIntensity}px rgba(255, 0, 255, 0.6),
            0 0 ${30 * baseIntensity}px rgba(255, 0, 255, 0.4),
            inset 0 0 ${20 * baseIntensity}px rgba(255, 0, 255, 0.2)
          `
        };
      case 'neural':
        return {
          textShadow: `
            0 0 ${10 * baseIntensity}px rgba(16, 185, 129, 0.8),
            0 0 ${20 * baseIntensity}px rgba(16, 185, 129, 0.6),
            0 0 ${30 * baseIntensity}px rgba(16, 185, 129, 0.4),
            0 0 ${40 * baseIntensity}px rgba(16, 185, 129, 0.2),
            0 0 ${15 * baseIntensity}px rgba(139, 92, 246, 0.8),
            0 0 ${25 * baseIntensity}px rgba(139, 92, 246, 0.6)
          `,
          boxShadow: `
            0 0 ${10 * baseIntensity}px rgba(16, 185, 129, 0.8),
            0 0 ${20 * baseIntensity}px rgba(16, 185, 129, 0.6),
            0 0 ${30 * baseIntensity}px rgba(16, 185, 129, 0.4),
            inset 0 0 ${20 * baseIntensity}px rgba(16, 185, 129, 0.2)
          `
        };
      default:
        return {
          textShadow: `
            0 0 ${10 * baseIntensity}px rgba(139, 92, 246, 0.8),
            0 0 ${20 * baseIntensity}px rgba(139, 92, 246, 0.6),
            0 0 ${30 * baseIntensity}px rgba(139, 92, 246, 0.4),
            0 0 ${40 * baseIntensity}px rgba(139, 92, 246, 0.2)
          `,
          boxShadow: `
            0 0 ${10 * baseIntensity}px rgba(139, 92, 246, 0.8),
            0 0 ${20 * baseIntensity}px rgba(139, 92, 246, 0.6),
            0 0 ${30 * baseIntensity}px rgba(139, 92, 246, 0.4),
            inset 0 0 ${20 * baseIntensity}px rgba(139, 92, 246, 0.2)
          `
        };
    }
  };

  const neonStyles = getNeonStyles();

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        scale: isHovered ? 1.05 : 1,
        rotateY: isHovered ? 5 : 0,
        rotateX: isHovered ? 5 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
      style={{
        ...neonStyles,
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Enhanced Neon Glow with consciousness and quantum effects */}
      <NeonGlow 
        color={variant === 'quantum-consciousness' ? '#8b5cf6' : '#00d4ff'} 
        intensity={intensity === 'high' ? 2 : intensity === 'medium' ? 1.5 : 1}
        consciousness={consciousness}
        quantumState={quantumPhase}
      >
        {children}
      </NeonGlow>
      
      {/* Additional quantum-consciousness effects */}
      {(variant === 'quantum-consciousness' || variant === 'quantum-holographic') && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute inset-0 rounded-lg"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`,
              opacity: 0.3
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      )}
    </motion.div>
  );
}