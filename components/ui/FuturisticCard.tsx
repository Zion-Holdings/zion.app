import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  borderColor?: string;
  hoverEffect?: boolean;
  glassmorphism?: boolean;
  neon?: boolean;
  onClick?: () => void;
  delay?: number;
}

export default function FuturisticCard({
  children,
  className = '',
  glowColor = '#00ffff',
  borderColor = '#00ffff',
  hoverEffect = true,
  glassmorphism = true,
  neon = true,
  onClick,
  delay = 0,
}: FuturisticCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = `
    relative overflow-hidden rounded-xl p-6 transition-all duration-300
    ${glassmorphism ? 'backdrop-blur-md bg-white/10' : 'bg-gray-900/80'}
    ${neon ? 'border border-opacity-50' : ''}
    ${hoverEffect ? 'cursor-pointer' : ''}
    ${className}
  `;

  const neonBorderClasses = neon ? `
    before:absolute before:inset-0 before:rounded-xl before:p-[1px]
    before:bg-gradient-to-r before:from-transparent before:via-${borderColor} before:to-transparent
    before:opacity-0 before:transition-opacity before:duration-300
    ${isHovered ? 'before:opacity-100' : ''}
  ` : '';

  const glowEffect = neon ? `
    shadow-[0_0_20px_${glowColor}40] transition-shadow duration-300
    ${isHovered ? `shadow-[0_0_30px_${glowColor}80]` : ''}
  ` : '';

  return (
    <motion.div
      className={baseClasses}
      style={{
        borderColor: neon ? borderColor : undefined,
        boxShadow: neon ? `0 0 20px ${glowColor}40` : undefined,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={hoverEffect ? { scale: 1.02, y: -5 } : {}}
      whileTap={hoverEffect ? { scale: 0.98 } : {}}
    >
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `linear-gradient(135deg, ${glowColor}20 0%, transparent 50%, ${glowColor}10 100%)`,
        }}
      />

      {/* Animated border lines */}
      {neon && (
        <>
          <div
            className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-current to-transparent opacity-50"
            style={{ color: borderColor }}
          />
          <div
            className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-current to-transparent opacity-50"
            style={{ color: borderColor }}
          />
          <div
            className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-current to-transparent opacity-50"
            style={{ color: borderColor }}
          />
          <div
            className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-current to-transparent opacity-50"
            style={{ color: borderColor }}
          />
        </>
      )}

      {/* Corner accents */}
      {neon && (
        <>
          <div
            className="absolute top-2 left-2 w-2 h-2 rounded-full opacity-60"
            style={{ backgroundColor: borderColor }}
          />
          <div
            className="absolute top-2 right-2 w-2 h-2 rounded-full opacity-60"
            style={{ backgroundColor: borderColor }}
          />
          <div
            className="absolute bottom-2 left-2 w-2 h-2 rounded-full opacity-60"
            style={{ backgroundColor: borderColor }}
          />
          <div
            className="absolute bottom-2 right-2 w-2 h-2 rounded-full opacity-60"
            style={{ backgroundColor: borderColor }}
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Hover glow effect */}
      {hoverEffect && neon && (
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0"
          style={{
            background: `radial-gradient(circle at center, ${glowColor}20 0%, transparent 70%)`,
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
}