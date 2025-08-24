import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface NeoFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'holographic' | 'cyberpunk' | 'quantum' | 'neural';
  onClick?: () => void;
  disabled?: boolean;
  glowIntensity?: 'low' | 'medium' | 'high';
}

const NeoFuturisticCard: React.FC<NeoFuturisticCardProps> = ({
  children,
  className = '',
  variant = 'default',
  onClick,
  glowIntensity = 'medium'
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // Motion values for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transform mouse position to rotation
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  // Spring animation for smooth movement
  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'holographic':
        return {
          background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))',
          border: '1px solid rgba(0, 255, 255, 0.3)',
          shadow: '0 0 30px rgba(0, 255, 255, 0.3)',
          glow: 'rgba(0, 255, 255, 0.5)'
        };
      case 'cyberpunk':
        return {
          background: 'linear-gradient(135deg, rgba(255, 0, 100, 0.1), rgba(0, 255, 200, 0.1))',
          border: '1px solid rgba(255, 0, 100, 0.3)',
          shadow: '0 0 30px rgba(255, 0, 100, 0.3)',
          glow: 'rgba(255, 0, 100, 0.5)'
        };
      case 'quantum':
        return {
          background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(75, 0, 130, 0.1))',
          border: '1px solid rgba(138, 43, 226, 0.3)',
          shadow: '0 0 30px rgba(138, 43, 226, 0.3)',
          glow: 'rgba(138, 43, 226, 0.5)'
        };
      case 'neural':
        return {
          background: 'linear-gradient(135deg, rgba(0, 255, 127, 0.1), rgba(0, 191, 255, 0.1))',
          border: '1px solid rgba(0, 255, 127, 0.3)',
          shadow: '0 0 30px rgba(0, 255, 127, 0.3)',
          glow: 'rgba(0, 255, 127, 0.5)'
        };
      default:
        return {
          background: 'linear-gradient(135deg, rgba(0, 150, 255, 0.1), rgba(0, 255, 150, 0.1))',
          border: '1px solid rgba(0, 150, 255, 0.3)',
          shadow: '0 0 30px rgba(0, 150, 255, 0.3)',
          glow: 'rgba(0, 150, 255, 0.5)'
        };
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-xl backdrop-blur-sm transition-all duration-300 cursor-pointer ${className}`}
      style={{
        background: variantStyles.background,
        border: variantStyles.border,
        boxShadow: variantStyles.shadow,
        transformStyle: 'preserve-3d',
        rotateX: springRotateX,
        rotateY: springRotateY
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
      </div>

      {/* Glowing border on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{
          background: `linear-gradient(45deg, transparent, ${variantStyles.glow}, transparent)`,
          opacity: 0
        }}
        animate={{
          opacity: isHovered ? 0.6 : 0
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400/50" />
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-400/50" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-400/50" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-400/50" />

      {/* Scanning line effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        animate={{
          y: [0, '100%', 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2
            }}
          />
        ))}
      </div>

      {/* Radial glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/5 to-transparent" />

      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </motion.div>
  );
};

export default NeoFuturisticCard;