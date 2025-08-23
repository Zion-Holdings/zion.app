import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  gradient?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  onClick?: () => void;
}

export default function FuturisticCard({
  children,
  className = '',
  hoverEffect = true,
  gradient = 'from-blue-500/20 via-purple-500/20 to-pink-500/20',
  icon,
  title,
  description,
  onClick
}: FuturisticCardProps) {
  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-2xl
        bg-gradient-to-br ${gradient}
        border border-white/10 backdrop-blur-sm
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      whileHover={hoverEffect ? {
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2 }
      } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      onClick={onClick}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {icon && (
          <div className="mb-4 text-4xl">
            {icon}
          </div>
        )}
        
        {title && (
          <h3 className="text-xl font-bold text-white mb-2">
            {title}
          </h3>
        )}
        
        {description && (
          <p className="text-gray-300 mb-4">
            {description}
          </p>
        )}
        
        {children}
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}