import React, { useState, useEffect, useRef } from 'react';
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
  glowColor = '#00ffff',
  interactive = true,
  delay = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  // Get variant-specific styles
  const getVariantStyles = () => {
    switch (variant) {
      case 'quantum':
        return {
          borderColor: 'rgba(0, 255, 255, 0.3)',
          bgGradient: 'from-cyan-900/20 via-cyan-800/10 to-transparent',
          glowColor: '#00ffff',
          accentColor: '#00ffff'
        };
      case 'holographic':
        return {
          borderColor: 'rgba(255, 105, 180, 0.3)',
          bgGradient: 'from-pink-900/20 via-purple-800/10 to-transparent',
          glowColor: '#ff69b4',
          accentColor: '#ff69b4'
        };
      case 'neural':
        return {
          borderColor: 'rgba(50, 205, 50, 0.3)',
          bgGradient: 'from-green-900/20 via-emerald-800/10 to-transparent',
          glowColor: '#32cd32',
          accentColor: '#32cd32'
        };
      case 'cyberpunk':
        return {
          borderColor: 'rgba(255, 0, 128, 0.3)',
          bgGradient: 'from-red-900/20 via-pink-800/10 to-transparent',
          glowColor: '#ff0080',
          accentColor: '#ff0080'
        };
      case 'space':
        return {
          borderColor: 'rgba(135, 206, 235, 0.3)',
          bgGradient: 'from-blue-900/20 via-indigo-800/10 to-transparent',
          glowColor: '#87ceeb',
          accentColor: '#87ceeb'
        };
      default:
        return {
          borderColor: 'rgba(0, 255, 255, 0.3)',
          bgGradient: 'from-cyan-900/20 via-cyan-800/10 to-transparent',
          glowColor: '#00ffff',
          accentColor: '#00ffff'
        };
    }
  };

  const variantStyles = getVariantStyles();

  // Canvas animation for holographic effects
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Holographic interference pattern
    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw interference pattern
      ctx.save();
      ctx.strokeStyle = variantStyles.accentColor;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.1;
      
      for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 2) {
          const y = canvas.height / 2 + 
            Math.sin((x + time * 50 + i * 20) * 0.02) * 30 +
            Math.sin((x + time * 30 + i * 10) * 0.01) * 15;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
      
      // Draw quantum dots
      for (let i = 0; i < 15; i++) {
        const x = Math.sin(time + i) * canvas.width / 2 + canvas.width / 2;
        const y = Math.cos(time * 0.7 + i) * canvas.height / 2 + canvas.height / 2;
        const size = Math.sin(time * 2 + i) * 3 + 2;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = variantStyles.accentColor;
        ctx.globalAlpha = 0.3;
        ctx.fill();
      }
      
      ctx.restore();
      time += 0.02;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [variantStyles.accentColor]);

  // Hover effects
  const handleMouseEnter = () => {
    if (interactive) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (interactive) setIsHovered(false);
  };

  const handleFocus = () => {
    if (interactive) setIsFocused(true);
  };

  const handleBlur = () => {
    if (interactive) setIsFocused(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative group overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-500 ${
        interactive ? 'cursor-pointer' : ''
      } ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      whileHover={interactive ? { scale: 1.02, y: -5 } : {}}
      whileTap={interactive ? { scale: 0.98 } : {}}
    >
      {/* Canvas background for holographic effects */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
        style={{ zIndex: 0 }}
      />

      {/* Main card content */}
      <div
        className={`relative z-10 p-6 border-2 rounded-2xl bg-gradient-to-br ${variantStyles.bgGradient} backdrop-blur-xl transition-all duration-500 ${
          isHovered || isFocused
            ? 'border-opacity-60 shadow-2xl'
            : 'border-opacity-30 shadow-lg'
        }`}
        style={{
          borderColor: variantStyles.borderColor,
          boxShadow: isHovered || isFocused
            ? `0 0 40px ${variantStyles.glowColor}40, 0 0 80px ${variantStyles.glowColor}20`
            : `0 0 20px ${variantStyles.glowColor}20, 0 0 40px ${variantStyles.glowColor}10`
        }}
      >
        {/* Holographic overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent opacity-20" />
        </div>

        {/* Animated border glow */}
        <AnimatePresence>
          {(isHovered || isFocused) && (
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: `linear-gradient(45deg, transparent, ${variantStyles.glowColor}20, transparent)`,
                  animation: 'spin 3s linear infinite'
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-current opacity-30 rounded-tl-2xl" />
        <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-current opacity-30 rounded-tr-2xl" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-current opacity-30 rounded-bl-2xl" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-current opacity-30 rounded-br-2xl" />

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-current rounded-full opacity-20"
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${30 + (i * 10)}%`,
                color: variantStyles.accentColor
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.2
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-20">
          {children}
        </div>

        {/* Bottom glow line */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-30"
          initial={{ width: 0 }}
          animate={{ width: isHovered || isFocused ? '100%' : '0%' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>

      {/* External glow effect */}
      <div
        className={`absolute -inset-1 rounded-2xl blur-xl transition-all duration-500 ${
          isHovered || isFocused ? 'opacity-100' : 'opacity-50'
        }`}
        style={{
          background: `linear-gradient(45deg, ${variantStyles.glowColor}20, transparent, ${variantStyles.glowColor}20)`
        }}
      />

      {/* Hover state enhancements */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${variantStyles.glowColor}10, transparent 70%)`
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default UltraFuturisticCard;