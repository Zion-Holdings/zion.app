import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  style,
  onClick,
  hover = true,
}) => {
  const baseClasses = 'bg-cursor-dark/80 backdrop-blur-sm border border-cursor-lighter/30 rounded-xl p-6 transition-all duration-300 relative overflow-hidden';
  const hoverClasses = hover ? 'hover:border-cursor-blue/40 hover:shadow-2xl hover:shadow-cursor-blue/20 hover:-translate-y-1 hover:bg-cursor-dark/90' : '';
  const clickableClasses = onClick ? 'cursor-pointer' : '';
  
  const classes = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`;

  return (
    <div
      className={classes}
      style={style}
      onClick={onClick}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-cursor-blue/5 via-transparent to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content wrapper */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Hover glow effect */}
      {hover && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cursor-blue/0 via-cursor-blue/5 to-cursor-blue/0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </div>
  );
};

export default Card;