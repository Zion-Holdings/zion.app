import React, { useState } from 'react';

interface GlassmorphismCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  animated?: boolean;
  gradient?: 'blue' | 'purple' | 'green' | 'pink' | 'custom';
  border?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

const GlassmorphismCard: React.FC<GlassmorphismCardProps> = ({
  children,
  className = '',
  hover = true,
  animated = false,
  gradient = 'blue',
  border = true,
  glow = false,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const gradientClasses = {
    blue: 'from-neon-blue/20 to-neon-purple/20',
    purple: 'from-neon-purple/20 to-neon-pink/20',
    green: 'from-neon-green/20 to-neon-blue/20',
    pink: 'from-neon-pink/20 to-neon-purple/20',
    custom: 'from-neon-blue/20 via-neon-purple/20 to-neon-pink/20'
  };

  const glowClasses = {
    blue: 'shadow-neon-blue/20 hover:shadow-neon-blue/40',
    purple: 'shadow-neon-purple/20 hover:shadow-neon-purple/40',
    green: 'shadow-neon-green/20 hover:shadow-neon-green/40',
    pink: 'shadow-neon-pink/20 hover:shadow-neon-pink/40',
    custom: 'shadow-neon-blue/20 hover:shadow-neon-blue/40'
  };

  const baseClasses = `
    relative overflow-hidden rounded-2xl backdrop-blur-xl
    ${border ? 'border border-white/10' : ''}
    ${glow ? glowClasses[gradient] : ''}
    ${hover ? 'transition-all duration-500 transform hover:scale-105' : ''}
    ${animated ? 'animate-pulse' : ''}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `;

  return (
    <div
      className={baseClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Background Glass Effect */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl"></div>
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClasses[gradient]} opacity-0 hover:opacity-100 transition-opacity duration-500`}></div>
      
      {/* Animated Border */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradientClasses[gradient]} opacity-0 hover:opacity-20 transition-opacity duration-500`}></div>
      
      {/* Shimmer Effect */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer"></div>
      )}
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      {/* Corner Accent */}
      <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${gradientClasses[gradient]} opacity-0 hover:opacity-20 transition-opacity duration-500 rounded-bl-full`}></div>
    </div>
  );
};

export default GlassmorphismCard;
