import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuantumCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'quantum' | 'neural' | 'holographic';
  interactive?: boolean;
  glow?: boolean;
  border?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function QuantumCard({
  children,
  className = '',
  variant = 'default',
  interactive = true,
  glow = true,
  border = true,
  size = 'md'
}: QuantumCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    if (interactive) {
      document.addEventListener('mousemove', handleMouseMove);
      return () => document.removeEventListener('mousemove', handleMouseMove);
    }
  }, [interactive]);

  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const variantStyles = {
    default: {
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
      borderColor: 'rgba(59, 130, 246, 0.3)',
      glowColor: 'rgba(59, 130, 246, 0.5)'
    },
    quantum: {
      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1))',
      borderColor: 'rgba(16, 185, 129, 0.4)',
      glowColor: 'rgba(16, 185, 129, 0.6)'
    },
    neural: {
      background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(147, 51, 234, 0.1))',
      borderColor: 'rgba(239, 68, 68, 0.4)',
      glowColor: 'rgba(239, 68, 68, 0.6)'
    },
    holographic: {
      background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))',
      borderColor: 'rgba(168, 85, 247, 0.4)',
      glowColor: 'rgba(168, 85, 247, 0.6)'
    }
  };

  const currentStyle = variantStyles[variant];

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-500 ${sizeClasses[size]} ${className}`}
      style={{
        background: currentStyle.background,
        border: border ? `1px solid ${currentStyle.borderColor}` : 'none',
        boxShadow: glow && isHovered 
          ? `0 0 40px ${currentStyle.glowColor}, 0 0 80px ${currentStyle.glowColor}40`
          : '0 4px 20px rgba(0, 0, 0, 0.1)'
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      whileHover={interactive ? { scale: 1.02, y: -5 } : {}}
      whileTap={interactive ? { scale: 0.98 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Quantum particle effect */}
      {variant === 'quantum' && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 100],
                  y: [0, (Math.random() - 0.5) * 100]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Neural network effect */}
      {variant === 'neural' && (
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <defs>
              <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#9333ea" />
              </linearGradient>
            </defs>
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.circle
                key={i}
                cx={20 + (i * 80)}
                cy={20 + (i * 40)}
                r="2"
                fill="url(#neuralGradient)"
                animate={{
                  r: [2, 4, 2],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.line
                key={`line-${i}`}
                x1={20 + (i * 80)}
                y1={20 + (i * 40)}
                x2={100 + (i * 80)}
                y2={60 + (i * 40)}
                stroke="url(#neuralGradient)"
                strokeWidth="1"
                opacity="0.5"
                animate={{
                  opacity: [0.2, 0.8, 0.2]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </svg>
        </div>
      )}

      {/* Holographic effect */}
      {variant === 'holographic' && (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: `linear-gradient(45deg, 
                transparent 30%, 
                rgba(168, 85, 247, 0.3) 50%, 
                transparent 70%
              )`,
              backgroundSize: '200% 200%'
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
        </div>
      )}

      {/* Interactive tilt effect */}
      {interactive && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
              ${currentStyle.glowColor}20 0%, 
              transparent 50%)`
          }}
          animate={{
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Animated border */}
      {border && (
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `linear-gradient(45deg, 
              ${currentStyle.borderColor}, 
              transparent, 
              ${currentStyle.glowColor}, 
              transparent, 
              ${currentStyle.borderColor}
            )`,
            backgroundSize: '400% 400%'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      )}

      {/* Focus ring */}
      <AnimatePresence>
        {isFocused && (
          <motion.div
            className="absolute inset-0 rounded-2xl ring-2 ring-offset-2 ring-offset-black"
            style={{ 
              boxShadow: `0 0 0 2px ${currentStyle.glowColor}`,
              outline: `2px solid ${currentStyle.glowColor}`,
              outlineOffset: '2px'
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}