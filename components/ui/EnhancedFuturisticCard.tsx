import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface EnhancedFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'holographic' | 'cyberpunk' | 'quantum' | 'neural' | 'matrix' | 'holographic-matrix' | 'quantum-cyberpunk';
  intensity?: 'low' | 'medium' | 'high';
  interactive?: boolean;
  glowColor?: string;
  borderColor?: string;
  background?: 'transparent' | 'glass' | 'solid' | 'gradient';
}

export default function EnhancedFuturisticCard({
  children,
  className = '',
  variant = 'holographic',
  intensity = 'medium',
  interactive = true,
  glowColor,
  borderColor,
  background = 'glass'
}: EnhancedFuturisticCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);
  
  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const intensityMultiplier = {
    low: 0.5,
    medium: 1.0,
    high: 1.5
  }[intensity];

  const getVariantStyles = () => {
    const baseStyles = {
      holographic: {
        glow: 'shadow-[0_0_30px_rgba(0,255,255,0.3)]',
        border: 'border-cyan-400/50',
        background: 'bg-gradient-to-br from-cyan-900/20 to-blue-900/20',
        textGlow: 'text-cyan-400',
        accent: 'from-cyan-400 to-blue-500'
      },
      cyberpunk: {
        glow: 'shadow-[0_0_30px_rgba(255,0,255,0.4)]',
        border: 'border-pink-500/50',
        background: 'bg-gradient-to-br from-pink-900/20 to-purple-900/20',
        textGlow: 'text-pink-400',
        accent: 'from-pink-400 to-purple-500'
      },
      quantum: {
        glow: 'shadow-[0_0_30px_rgba(0,255,255,0.5)]',
        border: 'border-blue-400/50',
        background: 'bg-gradient-to-br from-blue-900/20 to-indigo-900/20',
        textGlow: 'text-blue-400',
        accent: 'from-blue-400 to-indigo-500'
      },
      neural: {
        glow: 'shadow-[0_0_30px_rgba(0,255,0,0.3)]',
        border: 'border-green-400/50',
        background: 'bg-gradient-to-br from-green-900/20 to-emerald-900/20',
        textGlow: 'text-green-400',
        accent: 'from-green-400 to-emerald-500'
      },
      matrix: {
        glow: 'shadow-[0_0_30px_rgba(0,255,0,0.4)]',
        border: 'border-green-500/50',
        background: 'bg-gradient-to-br from-green-900/20 to-black/40',
        textGlow: 'text-green-400',
        accent: 'from-green-400 to-green-600'
      },
      'holographic-matrix': {
        glow: 'shadow-[0_0_30px_rgba(0,255,255,0.4)]',
        border: 'border-cyan-400/50',
        background: 'bg-gradient-to-br from-cyan-900/20 to-blue-900/20',
        textGlow: 'text-cyan-400',
        accent: 'from-cyan-400 to-blue-500'
      },
      'quantum-cyberpunk': {
        glow: 'shadow-[0_0_30px_rgba(0,255,255,0.5)]',
        border: 'border-blue-400/50',
        background: 'bg-gradient-to-br from-blue-900/20 to-indigo-900/20',
        textGlow: 'text-blue-400',
        accent: 'from-blue-400 to-indigo-500'
      }
    };

    return baseStyles[variant] || baseStyles.holographic;
  };

  const getBackgroundStyle = () => {
    switch (background) {
      case 'glass':
        return 'backdrop-blur-md bg-white/5';
      case 'solid':
        return 'bg-gray-900/80';
      case 'gradient':
        return 'bg-gradient-to-br from-gray-900/80 to-black/80';
      default:
        return 'backdrop-blur-md bg-white/5';
    }
  };

  const styles = getVariantStyles();

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
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

  return (
    <motion.div
      ref={cardRef}
      className={`
        relative overflow-hidden rounded-2xl border transition-all duration-300
        ${styles.border} ${styles.background} ${getBackgroundStyle()}
        ${interactive ? 'cursor-pointer' : ''}
        ${className}
      `}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      whileHover={interactive ? { scale: 1.02 } : {}}
      whileTap={interactive ? { scale: 0.98 } : {}}
      animate={{
        scale: isPressed ? 0.98 : isHovered ? 1.02 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={() => setIsHovered(true)}
    >
      {/* 3D Transform for Interactive Cards */}
      {interactive && (
        <motion.div
          style={{
            rotateX: springRotateX,
            rotateY: springRotateY,
            transformStyle: 'preserve-3d'
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20
          }}
        >
          {/* Holographic Border Effect */}
          <div className="absolute inset-0 rounded-2xl">
            <div className={`
              absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500
              ${isHovered ? 'opacity-100' : ''}
              ${styles.glow}
            `} />
            
            {/* Animated Border Lines */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-current to-transparent"
                animate={{
                  x: isHovered ? ['0%', '100%'] : '0%',
                }}
                transition={{
                  duration: 2,
                  repeat: isHovered ? Infinity : 0,
                  ease: 'linear'
                }}
                style={{ opacity: 0.6 }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-current to-transparent"
                animate={{
                  x: isHovered ? ['100%', '0%'] : '0%',
                }}
                transition={{
                  duration: 2,
                  repeat: isHovered ? Infinity : 0,
                  ease: 'linear'
                }}
                style={{ opacity: 0.6 }}
              />
            </div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 p-6">
            {children}
          </div>

          {/* Interactive Hover Effects */}
          <>
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 bg-gradient-to-br from-current to-transparent opacity-60" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-gradient-to-bl from-current to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-gradient-to-tr from-current to-transparent opacity-60" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-gradient-to-tl from-current to-transparent opacity-60" />
            
            {/* Hover Glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor || styles.textGlow}20, transparent 50%)`
              }}
              animate={{
                opacity: isHovered ? 0.3 : 0
              }}
            />
          </>

          {/* Particle Effects for High Intensity */}
          {intensity === 'high' && (
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-current rounded-full opacity-40"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 10}%`
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.4, 0.8, 0.4],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}

      {/* Non-interactive Content */}
      {!interactive && (
        <>
          {/* Holographic Border Effect */}
          <div className="absolute inset-0 rounded-2xl">
            <div className={`
              absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500
              ${isHovered ? 'opacity-100' : ''}
              ${styles.glow}
            `} />
          </div>

          {/* Content Container */}
          <div className="relative z-10 p-6">
            {children}
          </div>
        </>
      )}
    </motion.div>
  );
}