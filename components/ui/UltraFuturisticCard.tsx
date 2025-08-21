import React from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticCardProps {
  variant?: 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  hover?: boolean;
  glow?: boolean;
  animated?: boolean;
}

const UltraFuturisticCard: React.FC<UltraFuturisticCardProps> = ({
  variant = 'quantum-holographic-advanced',
  className = '',
  children,
  onClick,
  hover = true,
  glow = true,
  animated = true
}) => {
  const getCardStyles = () => {
    const baseStyles = "relative overflow-hidden rounded-2xl backdrop-blur-xl border transition-all duration-500";
    
    const variantStyles = {
      'quantum': "bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-cyan-500/30",
      'holographic': "bg-gradient-to-br from-fuchsia-900/20 to-pink-900/20 border-fuchsia-500/30",
      'cyberpunk': "bg-gradient-to-br from-red-900/20 to-orange-900/20 border-red-500/30",
      'neural': "bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border-orange-500/30",
      'quantum-holographic': "bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-fuchsia-900/20 border-cyan-500/30",
      'quantum-advanced': "bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-indigo-900/20 border-cyan-500/30",
      'holographic-advanced': "bg-gradient-to-br from-fuchsia-900/20 via-pink-900/20 to-purple-900/20 border-fuchsia-500/30",
      'neural-quantum': "bg-gradient-to-br from-orange-900/20 via-yellow-900/20 to-cyan-900/20 border-orange-500/30",
      'quantum-cyberpunk': "bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-red-900/20 border-cyan-500/30",
      'holographic-neural': "bg-gradient-to-br from-fuchsia-900/20 via-pink-900/20 to-orange-900/20 border-fuchsia-500/30",
      'quantum-holographic-advanced': "bg-gradient-to-br from-cyan-900/20 via-blue-900/20 via-fuchsia-900/20 to-purple-900/20 border-cyan-500/30",
      'quantum-matrix': "bg-gradient-to-br from-cyan-900/20 via-green-900/20 to-emerald-900/20 border-cyan-500/30",
      'neural-cyberpunk': "bg-gradient-to-br from-orange-900/20 via-yellow-900/20 to-red-900/20 border-orange-500/30",
      'holographic-quantum': "bg-gradient-to-br from-fuchsia-900/20 via-pink-900/20 to-cyan-900/20 border-fuchsia-500/30",
      'quantum-neural-advanced': "bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-orange-900/20 border-cyan-500/30",
      'cyberpunk-holographic': "bg-gradient-to-br from-red-900/20 via-orange-900/20 to-fuchsia-900/20 border-red-500/30",
      'quantum-space': "bg-gradient-to-br from-cyan-900/20 via-indigo-900/20 to-purple-900/20 border-cyan-500/30",
      'ai-futuristic': "bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-purple-900/20 border-blue-500/30",
      'quantum-entanglement': "bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-violet-900/20 border-cyan-500/30",
      'holographic-matrix': "bg-gradient-to-br from-fuchsia-900/20 via-purple-900/20 to-emerald-900/20 border-fuchsia-500/30",
      'neural-quantum-cyberpunk': "bg-gradient-to-br from-orange-900/20 via-yellow-900/20 via-red-900/20 to-cyan-900/20 border-orange-500/30",
      'default': "bg-gradient-to-br from-gray-900/20 to-slate-900/20 border-gray-500/30"
    };

    return `${baseStyles} ${variantStyles[variant as keyof typeof variantStyles] || variantStyles.default}`;
  };

  const getGlowColor = () => {
    const glowColors = {
      'quantum': 'rgba(0, 255, 255, 0.3)',
      'holographic': 'rgba(255, 0, 255, 0.3)',
      'cyberpunk': 'rgba(255, 0, 64, 0.3)',
      'neural': 'rgba(255, 128, 0, 0.3)',
      'quantum-holographic': 'rgba(0, 255, 255, 0.3)',
      'quantum-advanced': 'rgba(0, 255, 255, 0.4)',
      'holographic-advanced': 'rgba(255, 0, 255, 0.4)',
      'neural-quantum': 'rgba(255, 128, 0, 0.4)',
      'quantum-cyberpunk': 'rgba(0, 255, 255, 0.4)',
      'holographic-neural': 'rgba(255, 0, 255, 0.4)',
      'quantum-holographic-advanced': 'rgba(0, 255, 255, 0.5)',
      'quantum-matrix': 'rgba(0, 255, 255, 0.4)',
      'neural-cyberpunk': 'rgba(255, 128, 0, 0.4)',
      'holographic-quantum': 'rgba(255, 0, 255, 0.4)',
      'quantum-neural-advanced': 'rgba(0, 255, 255, 0.4)',
      'cyberpunk-holographic': 'rgba(255, 0, 64, 0.4)',
      'quantum-space': 'rgba(0, 255, 255, 0.4)',
      'ai-futuristic': 'rgba(59, 130, 246, 0.4)',
      'quantum-entanglement': 'rgba(0, 255, 255, 0.4)',
      'holographic-matrix': 'rgba(255, 0, 255, 0.4)',
      'neural-quantum-cyberpunk': 'rgba(255, 128, 0, 0.4)',
      'default': 'rgba(156, 163, 175, 0.3)'
    };

    return glowColors[variant as keyof typeof glowColors] || glowColors.default;
  };

  const getAnimatedElements = () => {
    if (!animated) return null;

    return (
      <>
        {/* Floating particles */}
        {variant.includes('quantum') && (
          <>
            <motion.div
              className="absolute -top-2 -left-2 w-2 h-2 bg-cyan-400 rounded-full"
              animate={{
                x: [0, 10, 0],
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-2 -right-2 w-1.5 h-1.5 bg-blue-400 rounded-full"
              animate={{
                x: [0, -8, 0],
                y: [0, 8, 0],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </>
        )}

        {/* Holographic elements */}
        {variant.includes('holographic') && (
          <>
            <motion.div
              className="absolute top-2 right-2 w-3 h-3 border border-fuchsia-400"
              animate={{
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute bottom-2 left-2 w-2 h-2 border border-pink-400 rounded-full"
              animate={{
                rotate: [360, 0],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                delay: 2
              }}
            />
          </>
        )}

        {/* Neural network nodes */}
        {variant.includes('neural') && (
          <>
            <motion.div
              className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-orange-400 rounded-full"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-1/4 right-1/4 w-1 h-1 bg-yellow-400 rounded-full"
              animate={{
                scale: [1, 2.5, 1],
                opacity: [0.3, 0.9, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </>
        )}

        {/* Cyberpunk elements */}
        {variant.includes('cyberpunk') && (
          <>
            <motion.div
              className="absolute top-0 left-0 w-full h-0.5 bg-red-500"
              animate={{
                opacity: [0, 1, 0],
                scaleY: [1, 2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-0.5 h-full bg-green-500"
              animate={{
                opacity: [0, 1, 0],
                scaleX: [1, 2, 1]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </>
        )}

        {/* Scanning line effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            delay: 1.5
          }}
        />
      </>
    );
  };

  return (
    <motion.div
      className={`${getCardStyles()} ${className}`}
      onClick={onClick}
      whileHover={hover ? {
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3 }
      } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        boxShadow: glow ? `0 0 30px ${getGlowColor()}` : 'none'
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/10" />
        {variant.includes('holographic') && (
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255, 0, 255, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)`
          }} />
        )}
        {variant.includes('quantum') && (
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 70%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 70% 30%, rgba(0, 128, 255, 0.1) 0%, transparent 50%)`
          }} />
        )}
      </div>

      {/* Animated elements */}
      {getAnimatedElements()}

      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>

      {/* Border glow effect */}
      {glow && (
        <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
             style={{
               background: `linear-gradient(45deg, ${getGlowColor()}, transparent, ${getGlowColor()})`,
               backgroundSize: '200% 200%'
             }} />
      )}
    </motion.div>
  );
};

export default UltraFuturisticCard;