import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuantumCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'quantum' | 'neural' | 'holographic' | 'cyberpunk';
  intensity?: 'low' | 'medium' | 'high';
  interactive?: boolean;
  glow?: boolean;
  border?: boolean;
  shadow?: boolean;
}

const QuantumCard: React.FC<QuantumCardProps> = ({
  children,
  className = '',
  variant = 'quantum',
  intensity = 'medium',
  interactive = true,
  glow = true,
  border = true,
  shadow = true
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const variants = {
    quantum: {
      colors: {
        primary: '#00ffff',
        secondary: '#ff00ff',
        accent: '#ffff00',
        background: 'rgba(0, 0, 0, 0.8)',
        border: 'rgba(0, 255, 255, 0.3)',
        glow: 'rgba(0, 255, 255, 0.2)'
      },
      gradient: 'linear-gradient(135deg, #00ffff, #ff00ff, #ffff00)'
    },
    neural: {
      colors: {
        primary: '#ff6b6b',
        secondary: '#4ecdc4',
        accent: '#45b7d1',
        background: 'rgba(26, 26, 46, 0.9)',
        border: 'rgba(255, 107, 107, 0.3)',
        glow: 'rgba(255, 107, 107, 0.2)'
      },
      gradient: 'linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1)'
    },
    holographic: {
      colors: {
        primary: '#ff9ff3',
        secondary: '#54a0ff',
        accent: '#5f27cd',
        background: 'rgba(45, 27, 105, 0.9)',
        border: 'rgba(255, 159, 243, 0.3)',
        glow: 'rgba(255, 159, 243, 0.2)'
      },
      gradient: 'linear-gradient(135deg, #ff9ff3, #54a0ff, #5f27cd)'
    },
    cyberpunk: {
      colors: {
        primary: '#ff006e',
        secondary: '#8338ec',
        accent: '#3a86ff',
        background: 'rgba(30, 30, 30, 0.9)',
        border: 'rgba(255, 0, 110, 0.3)',
        glow: 'rgba(255, 0, 110, 0.2)'
      },
      gradient: 'linear-gradient(135deg, #ff006e, #8338ec, #3a86ff)'
    }
  };

  const currentVariant = variants[variant];
  const intensityMultiplier = {
    low: 0.5,
    medium: 1,
    high: 2
  };

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
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [interactive]);

  const cardVariants = {
    initial: {
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      boxShadow: shadow ? `0 0 20px ${currentVariant.colors.glow}` : 'none'
    },
    hover: {
      scale: 1.02,
      rotateX: interactive ? 5 : 0,
      rotateY: interactive ? 5 : 0,
      boxShadow: shadow ? `0 0 40px ${currentVariant.colors.glow}` : 'none',
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    },
    pressed: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    hover: { 
      opacity: glow ? 1 : 0, 
      scale: 1.2,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const borderVariants = {
    initial: { opacity: 0 },
    hover: { 
      opacity: border ? 1 : 0,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-xl backdrop-blur-sm ${className}`}
      variants={cardVariants}
      initial="initial"
      animate={isPressed ? "pressed" : isHovered ? "hover" : "initial"}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTap={() => setIsPressed(false)}
      style={{
        background: currentVariant.colors.background,
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Animated border */}
      <AnimatePresence>
        {border && (
          <motion.div
            className="absolute inset-0 rounded-xl"
            variants={borderVariants}
            style={{
              background: currentVariant.gradient,
              padding: '2px'
            }}
          >
            <div 
              className="w-full h-full rounded-xl"
              style={{ background: currentVariant.colors.background }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Glow effect */}
      <AnimatePresence>
        {glow && (
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            variants={glowVariants}
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${currentVariant.colors.glow} 0%, transparent 50%)`,
              filter: 'blur(20px)'
            }}
          />
        )}
      </AnimatePresence>

      {/* Quantum particles overlay */}
      {variant === 'quantum' && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: currentVariant.colors.primary,
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
                y: [0, -10, 0]
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>
      )}

      {/* Neural network overlay */}
      {variant === 'neural' && (
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <motion.path
              d="M20,30 Q50,10 80,30 Q50,50 20,70 Q50,90 80,70"
              stroke={currentVariant.colors.primary}
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: isHovered ? 1 : 0, 
                opacity: isHovered ? 0.6 : 0 
              }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            />
          </svg>
        </div>
      )}

      {/* Holographic scan lines */}
      {variant === 'holographic' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px"
              style={{
                background: currentVariant.colors.primary,
                top: `${i * 5}%`,
                opacity: 0.3
              }}
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 3 + i * 0.1,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          ))}
        </div>
      )}

      {/* Cyberpunk grid */}
      {variant === 'cyberpunk' && (
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 0, 110, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 0, 110, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>

      {/* Intensity indicator */}
      <div 
        className="absolute top-2 right-2 w-2 h-2 rounded-full"
        style={{
          background: currentVariant.colors.primary,
          opacity: intensityMultiplier[intensity] * 0.5 + 0.5
        }}
      />
    </motion.div>
  );
};

export default QuantumCard;