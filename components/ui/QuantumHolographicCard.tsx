import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuantumHolographicCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'quantum' | 'holographic' | 'neural' | 'cyberpunk' | 'space-time';
  intensity?: 'low' | 'medium' | 'high';
  glow?: boolean;
  interactive?: boolean;
  onClick?: () => void;
}

const QuantumHolographicCard: React.FC<QuantumHolographicCardProps> = ({
  children,
  className = '',
  variant = 'quantum',
  intensity = 'medium',
  glow = true,
  interactive = true,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const getVariantStyles = () => {
    switch (variant) {
      case 'quantum':
        return {
          bg: 'bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-purple-700/20',
          border: 'border-cyan-500/30',
          glow: 'shadow-cyan-500/20',
          text: 'text-cyan-400',
          accent: 'from-cyan-400 to-blue-500'
        };
      case 'holographic':
        return {
          bg: 'bg-gradient-to-br from-emerald-500/20 via-teal-600/20 to-cyan-700/20',
          border: 'border-emerald-500/30',
          glow: 'shadow-emerald-500/20',
          text: 'text-emerald-400',
          accent: 'from-emerald-400 to-teal-500'
        };
      case 'neural':
        return {
          bg: 'bg-gradient-to-br from-purple-500/20 via-pink-600/20 to-rose-700/20',
          border: 'border-purple-500/30',
          glow: 'shadow-purple-500/20',
          text: 'text-purple-400',
          accent: 'from-purple-400 to-pink-500'
        };
      case 'cyberpunk':
        return {
          bg: 'bg-gradient-to-br from-orange-500/20 via-red-600/20 to-pink-700/20',
          border: 'border-orange-500/30',
          glow: 'shadow-orange-500/20',
          text: 'text-orange-400',
          accent: 'from-orange-400 to-red-500'
        };
      case 'space-time':
        return {
          bg: 'bg-gradient-to-br from-indigo-500/20 via-purple-600/20 to-pink-700/20',
          border: 'border-indigo-500/30',
          glow: 'shadow-indigo-500/20',
          text: 'text-indigo-400',
          accent: 'from-indigo-400 to-purple-500'
        };
      default:
        return {
          bg: 'bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-purple-700/20',
          border: 'border-cyan-500/30',
          glow: 'shadow-cyan-500/20',
          text: 'text-cyan-400',
          accent: 'from-cyan-400 to-blue-500'
        };
    }
  };

  const getIntensityMultiplier = () => {
    switch (intensity) {
      case 'low': return 1;
      case 'medium': return 1.5;
      case 'high': return 2;
      default: return 1.5;
    }
  };

  const styles = getVariantStyles();
  const intensityMultiplier = getIntensityMultiplier();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
  };

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);

  return (
    <motion.div
      ref={cardRef}
      className={`relative group cursor-pointer overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-500 ${
        styles.bg
      } ${styles.border} border ${
        glow ? styles.glow : ''
      } ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={onClick}
      whileHover={interactive ? { 
        scale: 1.02,
        rotateY: 5,
        rotateX: -5,
        z: 50
      } : {}}
      whileTap={interactive ? { 
        scale: 0.98,
        rotateY: 10,
        rotateX: -10
      } : {}}
      animate={{
        boxShadow: isHovered 
          ? `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px ${styles.border.replace('border-', '').replace('/30', '')}`
          : `0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 0 0 1px ${styles.border.replace('border-', '').replace('/30', '')}`
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut"
      }}
    >
      {/* Quantum Field Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 200, 255, 0.1) 0%, transparent 50%)`,
          transform: 'translateZ(0)'
        }}
      />

      {/* Holographic Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(100, 200, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100, 200, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
      </div>

      {/* Quantum Particles */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${styles.accent}`}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 10}%`
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Neural Network Connections */}
      {variant === 'neural' && isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <svg className="w-full h-full absolute inset-0">
            <defs>
              <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(147, 51, 234, 0.6)" />
                <stop offset="100%" stopColor="rgba(236, 72, 153, 0.6)" />
              </linearGradient>
            </defs>
            {[...Array(8)].map((_, i) => (
              <motion.line
                key={i}
                x1={`${20 + i * 10}%`}
                y1={`${20 + i * 8}%`}
                x2={`${80 - i * 10}%`}
                y2={`${80 - i * 8}%`}
                stroke="url(#neuralGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
              />
            ))}
          </svg>
        </motion.div>
      )}

      {/* Cyberpunk Matrix Effect */}
      {variant === 'cyberpunk' && isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="matrix-rain">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-cyan-400 text-xs font-mono"
                style={{
                  left: `${i * 5}%`,
                  top: '-20px'
                }}
                animate={{
                  top: ['-20px', '100%']
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.1
                }}
              >
                {String.fromCharCode(0x30A0 + Math.random() * 96)}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Space-Time Distortion */}
      {variant === 'space-time' && isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative w-full h-full">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border border-indigo-400/30"
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${20 + i * 20}%`,
                  width: `${60 - i * 20}%`,
                  height: `${60 - i * 20}%`
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>

      {/* Enhanced Glow Effect */}
      {glow && (
        <div 
          className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${styles.glow.replace('shadow-', '').replace('/20', '')} 0%, transparent 70%)`,
            transform: 'translateZ(-1px)'
          }}
        />
      )}

      {/* Quantum Entanglement Lines */}
      {variant === 'quantum' && isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <svg className="w-full h-full absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <motion.line
                key={i}
                x1="0"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="rgba(34, 211, 238, 0.4)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  ease: "easeOut"
                }}
              />
            ))}
          </svg>
        </motion.div>
      )}

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(20px, 20px); }
        }
        
        .matrix-rain {
          font-family: 'Courier New', monospace;
        }
      `}</style>
    </motion.div>
  );
};

export default QuantumHolographicCard;