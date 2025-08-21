import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface EnhancedFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'holographic' | 'quantum' | 'neural' | 'cyberpunk';
  intensity?: 'low' | 'medium' | 'high';
  interactive?: boolean;
  glowColor?: string;
  borderColor?: string;
  background?: 'transparent' | 'glass' | 'solid';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const EnhancedFuturisticCard: React.FC<EnhancedFuturisticCardProps> = ({
  children,
  className = '',
  variant = 'holographic',
  intensity = 'medium',
  interactive = true,
  glowColor,
  borderColor,
  background = 'glass',
  size = 'md'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
  const scale = useSpring(isHovered ? 1.05 : 1, springConfig);
  const glowIntensity = useSpring(isHovered ? 1 : 0.3, springConfig);

  const getVariantStyles = () => {
    switch (variant) {
      case 'quantum':
        return {
          glow: glowColor || '#00ffff',
          border: borderColor || '#00ffff',
          background: 'rgba(0, 255, 255, 0.05)',
          shadow: '0 0 30px rgba(0, 255, 255, 0.3)'
        };
      case 'neural':
        return {
          glow: glowColor || '#ff6b6b',
          border: borderColor || '#ff6b6b',
          background: 'rgba(255, 107, 107, 0.05)',
          shadow: '0 0 30px rgba(255, 107, 107, 0.3)'
        };
      case 'cyberpunk':
        return {
          glow: glowColor || '#00ff00',
          border: borderColor || '#00ff00',
          background: 'rgba(0, 255, 0, 0.05)',
          shadow: '0 0 30px rgba(0, 255, 0, 0.3)'
        };
      default: // holographic
        return {
          glow: glowColor || '#ff00ff',
          border: borderColor || '#ff00ff',
          background: 'rgba(255, 0, 255, 0.05)',
          shadow: '0 0 30px rgba(255, 0, 255, 0.3)'
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'p-4 text-sm';
      case 'md':
        return 'p-6 text-base';
      case 'lg':
        return 'p-8 text-lg';
      case 'xl':
        return 'p-10 text-xl';
      default:
        return 'p-6 text-base';
    }
  };

  const getBackgroundStyles = () => {
    switch (background) {
      case 'glass':
        return 'backdrop-blur-md bg-white/10';
      case 'solid':
        return 'bg-gray-900/80';
      default:
        return 'bg-transparent';
    }
  };

  const styles = getVariantStyles();
  const sizeStyles = getSizeStyles();
  const bgStyles = getBackgroundStyles();

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set((event.clientX - centerX) / (rect.width / 2));
    mouseY.set((event.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    if (!interactive) return;
    
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handleMouseDown = () => {
    if (!interactive) return;
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    if (!interactive) return;
    setIsPressed(false);
  };

  // Add floating particles effect
  useEffect(() => {
    if (!cardRef.current || !isHovered) return;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
    }> = [];

    const createParticle = () => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;

      particles.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: 100,
        maxLife: 100
      });
    };

    const interval = setInterval(() => {
      if (particles.length < 10) {
        createParticle();
      }
    }, 200);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${sizeStyles} ${bgStyles} ${className}`}
      style={{
        borderColor: styles.border,
        boxShadow: styles.shadow,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={() => setIsHovered(true)}
      whileHover={interactive ? { scale: 1.05 } : {}}
      whileTap={interactive ? { scale: 0.98 } : {}}
    >
      {/* Holographic border effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(45deg, transparent, ${styles.border}20, transparent)`,
            opacity: glowIntensity
          }}
          animate={{
            x: isHovered ? ['0%', '100%'] : '0%'
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: "linear"
          }}
        />
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-current opacity-60" />
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-current opacity-60" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-current opacity-60" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-current opacity-60" />

      {/* Holographic grid overlay */}
      {variant === 'holographic' && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-20">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute border-l border-current"
                style={{
                  left: `${(i + 1) * 20}%`,
                  height: '100%',
                  opacity: 0.3
                }}
              />
            ))}
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute border-t border-current"
                style={{
                  top: `${(i + 1) * 20}%`,
                  width: '100%',
                  opacity: 0.3
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Quantum field effect */}
      {variant === 'quantum' && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              left: '20%',
              top: '30%'
            }}
            animate={{
              scale: [0, 2, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              right: '25%',
              bottom: '40%'
            }}
            animate={{
              scale: [0, 2, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1,
              ease: "easeInOut"
            }}
          />
        </div>
      )}

      {/* Neural network effect */}
      {variant === 'neural' && (
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" style={{ opacity: 0.3 }}>
            <defs>
              <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={styles.glow} stopOpacity="0.5" />
                <stop offset="100%" stopColor={styles.glow} stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 20 50 Q 50 20 80 50 Q 110 80 140 50"
              stroke={styles.glow}
              strokeWidth="1"
              fill="none"
              animate={{
                d: [
                  "M 20 50 Q 50 20 80 50 Q 110 80 140 50",
                  "M 20 50 Q 50 80 80 50 Q 110 20 140 50",
                  "M 20 50 Q 50 20 80 50 Q 110 80 140 50"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        </div>
      )}

      {/* Cyberpunk glitch effect */}
      {variant === 'cyberpunk' && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute inset-0 bg-green-400"
            style={{ opacity: 0.1 }}
            animate={{
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 0.1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Interactive glow effect */}
      {interactive && (
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${styles.glow}20, transparent 50%)`,
            opacity: glowIntensity
          }}
        />
      )}

      {/* Floating particles on hover */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-current rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
                y: [0, -20, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default EnhancedFuturisticCard;