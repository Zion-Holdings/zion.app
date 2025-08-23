import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface UltraAdvancedNeonEffects2047Props {
  children?: React.ReactNode;
  intensity?: number;
  color?: string;
  animation?: 'pulse' | 'glow' | 'wave' | 'quantum' | 'neon';
}

const UltraAdvancedNeonEffects2047: React.FC<UltraAdvancedNeonEffects2047Props> = ({
  children,
  intensity = 1,
  color = 'cyan',
  animation = 'neon'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Get color values based on color prop
  const getColorValues = (colorName: string) => {
    const colors = {
      cyan: { primary: '#00ffff', secondary: '#00cccc', glow: 'rgba(0, 255, 255, 0.3)' },
      purple: { primary: '#9333ea', secondary: '#7c3aed', glow: 'rgba(147, 51, 234, 0.3)' },
      pink: { primary: '#ec4899', secondary: '#db2777', glow: 'rgba(236, 72, 153, 0.3)' },
      blue: { primary: '#3b82f6', secondary: '#2563eb', glow: 'rgba(59, 130, 246, 0.3)' },
      green: { primary: '#10b981', secondary: '#059669', glow: 'rgba(16, 185, 129, 0.3)' },
      yellow: { primary: '#f59e0b', secondary: '#d97706', glow: 'rgba(245, 158, 11, 0.3)' },
      red: { primary: '#ef4444', secondary: '#dc2626', glow: 'rgba(239, 68, 68, 0.3)' },
      orange: { primary: '#f97316', secondary: '#ea580c', glow: 'rgba(249, 115, 22, 0.3)' }
    };
    return colors[colorName as keyof typeof colors] || colors.cyan;
  };

  const colorValues = getColorValues(color);

  // Animation variants
  const animationVariants = {
    pulse: {
      animate: {
        scale: [1, 1.05, 1],
        opacity: [0.8, 1, 0.8],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut" as const
        }
      }
    },
    glow: {
      animate: {
        boxShadow: [
          `0 0 20px ${colorValues.glow}`,
          `0 0 40px ${colorValues.glow}`,
          `0 0 20px ${colorValues.glow}`
        ],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut" as const
        }
      }
    },
    wave: {
      animate: {
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut" as const
        }
      }
    },
    quantum: {
      animate: {
        scale: [1, 1.1, 0.9, 1],
        rotate: [0, 180, 360],
        opacity: [0.7, 1, 0.7],
        transition: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut" as const
        }
      }
    },
    neon: {
      animate: {
        boxShadow: [
          `0 0 10px ${colorValues.primary}`,
          `0 0 20px ${colorValues.primary}`,
          `0 0 30px ${colorValues.primary}`,
          `0 0 20px ${colorValues.primary}`,
          `0 0 10px ${colorValues.primary}`
        ],
        textShadow: [
          `0 0 5px ${colorValues.primary}`,
          `0 0 10px ${colorValues.primary}`,
          `0 0 15px ${colorValues.primary}`,
          `0 0 10px ${colorValues.primary}`,
          `0 0 5px ${colorValues.primary}`
        ],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut" as const
        }
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Enhanced neon glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${colorValues.glow} 0%, transparent 70%)`,
            filter: 'blur(20px)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Quantum energy field */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: `conic-gradient(from 0deg, transparent, ${colorValues.glow}, transparent)`,
            filter: 'blur(15px)'
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Neural network overlay */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke={colorValues.primary} strokeWidth="0.1" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Main content with neon effects */}
      <motion.div
        className="relative z-10"
        variants={animationVariants[animation]}
        animate="animate"
        style={{
          border: `2px solid ${colorValues.primary}`,
          borderRadius: '8px',
          background: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)`,
          backdropFilter: 'blur(10px)',
          boxShadow: `
            0 0 20px ${colorValues.glow},
            inset 0 0 20px rgba(0,0,0,0.5)
          `
        }}
      >
        {/* Inner glow effect */}
        <div 
          className="absolute inset-0 rounded-lg opacity-30"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${colorValues.primary} 0%, transparent 50%)`,
            filter: 'blur(10px)'
          }}
        />
        
        {/* Content wrapper */}
        <div className="relative z-20 p-6">
          {children}
        </div>
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-current opacity-60"
             style={{ borderColor: colorValues.primary }} />
        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-current opacity-60"
             style={{ borderColor: colorValues.primary }} />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-current opacity-60"
             style={{ borderColor: colorValues.primary }} />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-current opacity-60"
             style={{ borderColor: colorValues.primary }} />
      </motion.div>

      {/* Floating energy particles */}
      <AnimatePresence>
        {isVisible && (
          <>
            <motion.div
              className="absolute w-2 h-2 rounded-full pointer-events-none"
              style={{ 
                background: colorValues.primary,
                boxShadow: `0 0 10px ${colorValues.primary}`
              }}
              initial={{ x: -20, y: -20, opacity: 0, scale: 0 }}
              animate={{ 
                x: [0, 20, 0],
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0
              }}
            />
            <motion.div
              className="absolute w-1 h-1 rounded-full pointer-events-none"
              style={{ 
                background: colorValues.secondary,
                boxShadow: `0 0 8px ${colorValues.secondary}`
              }}
              initial={{ x: -15, y: 15, opacity: 0, scale: 0 }}
              animate={{ 
                x: [0, -15, 0],
                y: [0, 15, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div
              className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
              style={{ 
                background: colorValues.primary,
                boxShadow: `0 0 12px ${colorValues.primary}`
              }}
              initial={{ x: 15, y: -15, opacity: 0, scale: 0 }}
              animate={{ 
                x: [0, 15, 0],
                y: [0, -15, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default UltraAdvancedNeonEffects2047;