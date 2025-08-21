import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface UltraFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'space';
  glowColor?: string;
  interactive?: boolean;
  delay?: number;
}

const UltraFuturisticCard: React.FC<UltraFuturisticCardProps> = ({
  children,
  className = '',
  variant = 'quantum',
  glowColor,
  interactive = true,
  delay = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Get variant-specific styles
  const getVariantStyles = () => {
    switch (variant) {
      case 'quantum':
        return {
          bg: 'from-slate-900/80 via-slate-800/60 to-slate-900/80',
          border: 'border-cyan-500/30',
          glow: 'shadow-cyan-500/20',
          accent: 'from-cyan-400 to-blue-500'
        };
      case 'holographic':
        return {
          bg: 'from-purple-900/80 via-pink-800/60 to-purple-900/80',
          border: 'border-pink-500/30',
          glow: 'shadow-pink-500/20',
          accent: 'from-pink-400 to-purple-500'
        };
      case 'neural':
        return {
          bg: 'from-emerald-900/80 via-teal-800/60 to-emerald-900/80',
          border: 'border-emerald-500/30',
          glow: 'shadow-emerald-500/20',
          accent: 'from-emerald-400 to-teal-500'
        };
      case 'cyberpunk':
        return {
          bg: 'from-red-900/80 via-orange-800/60 to-red-900/80',
          border: 'border-orange-500/30',
          glow: 'shadow-orange-500/20',
          accent: 'from-orange-400 to-red-500'
        };
      case 'space':
        return {
          bg: 'from-indigo-900/80 via-blue-800/60 to-indigo-900/80',
          border: 'border-blue-500/30',
          glow: 'shadow-blue-500/20',
          accent: 'from-blue-400 to-indigo-500'
        };
      default:
        return {
          bg: 'from-slate-900/80 via-slate-800/60 to-slate-900/80',
          border: 'border-cyan-500/30',
          glow: 'shadow-cyan-500/20',
          accent: 'from-cyan-400 to-blue-500'
        };
    }
  };

  const variantStyles = getVariantStyles();
  const customGlowColor = glowColor || variantStyles.glow;

  // Mouse tracking for 3D effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });
    };

    if (interactive) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (interactive) {
        document.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [interactive]);

  // Calculate 3D rotation based on mouse position
  const get3DTransform = () => {
    if (!interactive || !isHovered) return {};
    
    const centerX = cardRef.current?.offsetWidth / 2 || 0;
    const centerY = cardRef.current?.offsetHeight / 2 || 0;
    
    const rotateX = (mousePosition.y - centerY) / 20;
    const rotateY = (mousePosition.x - centerX) / 20;
    
    return {
      rotateX: `${rotateX}deg`,
      rotateY: `${rotateY}deg`,
      translateZ: '20px'
    };
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative group overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-700 ease-out ${className}`}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: delay * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={interactive ? { scale: 1.02 } : {}}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={{
        transform: `perspective(1000px) ${get3DTransform().rotateX ? `rotateX(${get3DTransform().rotateX}) rotateY(${get3DTransform().rotateY}) translateZ(${get3DTransform().translateZ})` : ''}`,
        transition: 'transform 0.3s ease-out'
      }}
    >
      {/* Background with gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${variantStyles.bg}`} />
      
      {/* Animated border */}
      <div className={`absolute inset-0 rounded-2xl border ${variantStyles.border} transition-all duration-500`}>
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${variantStyles.accent} opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-20' : ''}`} />
      </div>

      {/* Glow effect */}
      <div 
        className={`absolute inset-0 rounded-2xl transition-all duration-500 ${customGlowColor} ${
          isHovered ? 'shadow-2xl scale-105' : 'shadow-lg'
        }`}
        style={{
          filter: isHovered ? 'blur(20px)' : 'blur(10px)',
          opacity: isHovered ? 0.6 : 0.3
        }}
      />

      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Quantum particles */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: `linear-gradient(45deg, ${variantStyles.accent})`,
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
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Holographic grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }} />
        </div>

        {/* Energy waves */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              `radial-gradient(circle at 20% 50%, ${variantStyles.accent} 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 50%, ${variantStyles.accent} 0%, transparent 50%)`,
              `radial-gradient(circle at 20% 50%, ${variantStyles.accent} 0%, transparent 50%)`
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ opacity: isHovered ? 0.1 : 0.05 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>

      {/* Interactive overlay */}
      {interactive && (
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-transparent opacity-0 transition-opacity duration-300"
          animate={{ opacity: isHovered ? 1 : 0 }}
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 100px)`
          }}
        />
      )}

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50 rounded-tl-2xl" />
      <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-cyan-400/50 rounded-tr-2xl" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-cyan-400/50 rounded-bl-2xl" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cyan-400/50 rounded-br-2xl" />

      {/* Floating elements */}
      <AnimatePresence>
        {isHovered && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                scale: 1,
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full"
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                scale: 1,
                y: [0, 8, 0],
                opacity: [0.5, 1, 0.5]
              }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full"
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default UltraFuturisticCard;